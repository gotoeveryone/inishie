import { get, getDatabase, increment, ref, set } from "firebase/database";
import type { DatabaseReference } from "firebase/database";

export default class CounterRepository {
	private ref: DatabaseReference;

	constructor() {
		this.ref = ref(getDatabase(), "counter");
	}

	async get() {
		return get(this.ref).then((snapshot) => (snapshot.val() as number) ?? 0);
	}

	async increment() {
		return set(this.ref, increment(1));
	}
}
