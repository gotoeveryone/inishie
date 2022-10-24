import { render } from "@testing-library/svelte";
import Component from './Hint.svelte';

describe('Hint', () => {
  it('当たりが最大値と一致する場合「一番大きい数」と表示される', () => {
    const { container } = render(Component, { hitNumber: 10, max: 10 });

    expect(container.querySelector('.hint-label').textContent).toBe('一番大きい数');
  });
  it('当たりが3で割り切れる場合「3で割れる数字です」と表示される', () => {
    const { container } = render(Component, { hitNumber: 3, max: 10 });

    expect(container.querySelector('.hint-label').textContent).toBe('3で割れる数字です');
  });
  it('当たりが2で割り切れる場合「偶数かも…？」と表示される', () => {
    const { container } = render(Component, { hitNumber: 4, max: 10 });

    expect(container.querySelector('.hint-label').textContent).toBe('偶数かも…？');
  });
  it('当たりが上記いずれにも当てはまらない場合「奇数かも…？」と表示される', () => {
    const { container } = render(Component, { hitNumber: 5, max: 10 });

    expect(container.querySelector('.hint-label').textContent).toBe('奇数かも…？');
  });
})
