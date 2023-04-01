import { render } from "@testing-library/svelte";
import Component from './BackToHome.svelte';

describe('BackToHome', () => {
  it('戻るボタンのリンクに /home が設定されている', () => {
    const { getByText } = render(Component);

    expect(getByText('戻る').getAttribute('href')).toBe('/home');
  });
})
