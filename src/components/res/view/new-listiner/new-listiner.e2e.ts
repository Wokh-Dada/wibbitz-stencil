import { newE2EPage } from '@stencil/core/testing';

describe('new-listiner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-listiner></new-listiner>');

    const element = await page.find('new-listiner');
    expect(element).toHaveClass('hydrated');
  });
});
