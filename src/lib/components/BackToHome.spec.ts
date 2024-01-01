import { render } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import Component from '$lib/components/BackToHome.svelte';

// todo テストのみだと validate でエラーが出るため空 export を追加
export {};

describe("BackToHome", () => {
  it('戻るボタンのリンクに /home が設定されている', () => {
    const { getByText } = render(Component);

    expect(getByText('戻る').getAttribute('href')).toBe('/home');
  });
});
