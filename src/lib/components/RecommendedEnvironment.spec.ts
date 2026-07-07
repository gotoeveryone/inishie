import { render, waitFor } from "@testing-library/svelte";
import { afterEach, describe, expect, test, vi } from "vitest";
import Component from "$lib/components/RecommendedEnvironment.svelte";

describe("RecommendedEnvironment", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	test("推奨環境の案内文が表示される", () => {
		const { container } = render(Component);

		expect(
			container.querySelector("[data-itemname='recommended-environment']")!
				.textContent,
		).toContain("IE5.5 / 800×600");
	});

	test("IEの場合は警告が表示されない", async () => {
		vi.spyOn(window.navigator, "userAgent", "get").mockReturnValue(
			"Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)",
		);
		const { container } = render(Component);

		await waitFor(() => {
			expect(
				container.querySelector(
					"[data-itemname='recommended-environment-warning']",
				),
			).toBeNull();
		});
	});

	test("IE以外の場合は警告が表示される", async () => {
		vi.spyOn(window.navigator, "userAgent", "get").mockReturnValue(
			"Mozilla/5.0 (Macintosh; Intel Mac OS X) Chrome/1.0",
		);
		const { container } = render(Component);

		await waitFor(() => {
			expect(
				container.querySelector(
					"[data-itemname='recommended-environment-warning']",
				),
			).not.toBeNull();
		});
	});
});
