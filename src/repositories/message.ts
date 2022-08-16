import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default class MessageRepository {
  private ref: firebase.database.Reference;

  constructor() {
    this.ref = firebase.database().ref("messages");
  }

  async list() {
    return this.ref
      .orderByChild("sortKey")
      .limitToLast(10)
      .get()
      .then(((snapshot) => {
        const r = [];
        snapshot.forEach((c) => {
          r.push(c.val());
        });
        return r.slice();
      }));
  }

  async create(username: string, content: string) {
    const timestamp = Date.now();
    return this.ref
      .push({ username, content, timestamp, sortKey: timestamp * -1 })
      .then(() => {
        // コンテンツは投稿のたびクリアする
        content = null;
      });
  }
}
