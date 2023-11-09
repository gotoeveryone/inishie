import { render, waitFor } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Component from "@/components/Counter.svelte";
import AccessLogRepository from "@/repositories/access_log";

vi.mock("../repositories/access_log");

describe("Counter", () => {
  test.each([0, 50, 1234, 99999, 654321])(
    "%d が6桁で表示されている",
    async (value) => {
      const spy = vi.spyOn(AccessLogRepository.prototype, "count");
      spy.mockResolvedValue(value);
      const { container } = render(Component);

      expect(container.querySelectorAll(".counter-item")).toHaveLength(6);
      await waitFor(() => {
        return expect(container.querySelector(".counter")!.textContent).toBe(
          value.toString().padStart(6, "0")
        );
      });
    }
  );
});
