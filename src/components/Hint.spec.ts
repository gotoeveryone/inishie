import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Component from "@/components/Hint.svelte";

describe("Hint", () => {
  test("当たりが最大値と一致する場合「一番大きい数」と表示される", () => {
    const { container } = render(Component, { hitNumber: 10, max: 10 });

    expect(container.querySelector(".hint-label")!.textContent).toBe(
      "一番大きい数"
    );
  });
  test("当たりが3で割り切れる場合「3で割れる数字です」と表示される", () => {
    const { container } = render(Component, { hitNumber: 3, max: 10 });

    expect(container.querySelector(".hint-label")!.textContent).toBe(
      "3で割れる数字です"
    );
  });
  test("当たりが2で割り切れる場合「偶数かも…？」と表示される", () => {
    const { container } = render(Component, { hitNumber: 4, max: 10 });

    expect(container.querySelector(".hint-label")!.textContent).toBe(
      "偶数かも…？"
    );
  });
  test("当たりが上記いずれにも当てはまらない場合「奇数かも…？」と表示される", () => {
    const { container } = render(Component, { hitNumber: 5, max: 10 });

    expect(container.querySelector(".hint-label")!.textContent).toBe(
      "奇数かも…？"
    );
  });
});
