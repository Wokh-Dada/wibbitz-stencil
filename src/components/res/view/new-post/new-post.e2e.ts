import { newE2EPage } from '@stencil/core/testing';

describe('new-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-post></new-post>');

    const element = await page.find('new-post');
    expect(element).toHaveClass('hydrated');
  });
});
