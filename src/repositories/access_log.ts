import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default class AccessLogRepository {
  private ref: firebase.database.Reference;

  constructor() {
    this.ref = firebase.database().ref("access_logs");
  }

  async count() {
    return this.ref
      .get()
      .then(((snapshot) => snapshot.numChildren()));
  }

  async create(userAgent: string) {
    const timestamp = Date.now();
    return this.ref.push({ userAgent, timestamp });
  }
}
