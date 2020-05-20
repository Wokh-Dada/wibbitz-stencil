import { newE2EPage } from '@stencil/core/testing';

describe('news-a', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<news-a></news-a>');

    const element = await page.find('news-a');
    expect(element).toHaveClass('hydrated');
  });
});
