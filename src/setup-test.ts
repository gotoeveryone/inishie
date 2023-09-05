import { beforeEach, vi } from "vitest";

vi.mock("firebase/database", async () => ({
  get: vi.fn(),
  getDatabase: vi.fn(),
  push: vi.fn(),
  ref: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
});
