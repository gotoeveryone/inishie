import { getDatabase, push, ref } from "firebase/database";
import type { DatabaseReference } from "firebase/database";

export default class AccessLogRepository {
	private ref: DatabaseReference;

	constructor() {
		this.ref = ref(getDatabase(), "access_logs");
	}

	async create(userAgent: string) {
		const timestamp = Date.now();
		return push(this.ref, { userAgent, timestamp });
	}
}
