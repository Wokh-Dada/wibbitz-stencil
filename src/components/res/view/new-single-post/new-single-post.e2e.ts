import { newE2EPage } from '@stencil/core/testing';

describe('new-single-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-single-post></new-single-post>');

    const element = await page.find('new-single-post');
    expect(element).toHaveClass('hydrated');
  });
});
