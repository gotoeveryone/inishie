import { render, waitFor } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Component from "$lib/components/Counter.svelte";
import CounterRepository from "$lib/repositories/counter";

vi.mock("../repositories/counter");

describe("Counter", () => {
	test.each([0, 50, 1234, 99999, 654321])(
		"%d が6桁で表示されている",
		async (value) => {
			const spy = vi.spyOn(CounterRepository.prototype, "get");
			spy.mockResolvedValue(value);
			const { container } = render(Component);

			expect(
				container.querySelectorAll("[data-itemname='counter-item']"),
			).toHaveLength(6);
			await waitFor(() => {
				return expect(
					container.querySelector("[data-itemname='counter']")!.textContent,
				).toBe(value.toString().padStart(6, "0"));
			});
		},
	);
});
