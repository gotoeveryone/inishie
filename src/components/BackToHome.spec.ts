// import { render } from "@testing-library/svelte";
// import Component from './BackToHome.svelte';

// todo テストのみだと validate でエラーが出るため空 export を追加
export {};

describe('BackToHome', () => {
  // NOTE: svelte-spa-router が解決できずエラーになるため、一旦コメントアウトしておく
  // it('戻るボタンのリンクに /home が設定されている', () => {
  //   const { getByText } = render(Component);

  //   expect(getByText('戻る').getAttribute('href')).toBe('/home');
  // });
  it.todo('戻るボタンのリンクに /home が設定されている');
})
