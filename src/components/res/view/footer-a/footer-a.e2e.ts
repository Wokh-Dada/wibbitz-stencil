import { newE2EPage } from '@stencil/core/testing';

describe('footer-a', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<footer-a></footer-a>');

    const element = await page.find('footer-a');
    expect(element).toHaveClass('hydrated');
  });
});
