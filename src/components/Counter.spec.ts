import { render, waitFor } from "@testing-library/svelte";
import Component from './Counter.svelte';
import AccessLogRepository from "../repositories/access_log";

jest.mock('../repositories/access_log');

describe('Counter', () => {
  it.each([0, 50, 1234, 99999, 654321])('%d が6桁で表示されている', async (value) => {
    (AccessLogRepository.prototype.count as jest.Mock).mockResolvedValue(value);
    const { container } = render(Component);

    expect(container.querySelectorAll('.counter-item')).toHaveLength(6);
    await waitFor(() => {
      return expect(container.querySelector('.counter').textContent).toBe(value.toString().padStart(6, "0"))
    });
  });
})