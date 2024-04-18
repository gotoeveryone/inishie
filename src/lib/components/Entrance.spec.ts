import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Component from "$lib/components/Entrance.svelte";

describe("Entrance", () => {
	test("10件の入口が表示される", () => {
		const { container } = render(Component);
		expect(container.querySelectorAll(".entrance-item")).toHaveLength(10);
	});
});
