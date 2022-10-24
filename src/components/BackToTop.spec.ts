import { render } from "@testing-library/svelte";
import Component from './BackToTop.svelte';

describe('BackToTop', () => {
  it('戻るボタンのリンクに / が設定されている', () => {
    const { getByText } = render(Component);

    expect(getByText('戻る').getAttribute('href')).toBe('/');
  });
})
