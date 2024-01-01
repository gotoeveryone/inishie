import {
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  push,
  query,
  ref,
} from "firebase/database";
import type { DatabaseReference } from "firebase/database";
import type { Message } from "$lib/types/message";

export default class MessageRepository {
  private ref: DatabaseReference;

  constructor() {
    this.ref = ref(getDatabase(), "messages");
  }

  broadcast(callback: (message: Message[]) => void) {
    onValue(
      query(this.ref, orderByChild("sortKey"), limitToLast(20)),
      (snapshot) => {
        const r = [] as Message[];
        snapshot.forEach((c) => {
          r.push(c.val());
        });
        callback(r.slice());
      }
    );
  }

  async create(username: string, content: string) {
    const timestamp = Date.now();
    return push(this.ref, {
      username,
      content,
      timestamp,
      sortKey: timestamp * -1,
    });
  }
}
