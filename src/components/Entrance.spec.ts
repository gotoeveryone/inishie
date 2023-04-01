import { render } from "@testing-library/svelte";
import Component from './Entrance.svelte';

describe('Entrance', () => {
  it('10件の入口が表示される', () => {
    const { container } = render(Component);
    expect(container.querySelectorAll('.entrance-item')).toHaveLength(10);
  });
})
