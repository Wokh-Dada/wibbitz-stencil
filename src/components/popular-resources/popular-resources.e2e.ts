import { newE2EPage } from '@stencil/core/testing';

describe('popular-resources', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<popular-resources></popular-resources>');

    const element = await page.find('popular-resources');
    expect(element).toHaveClass('hydrated');
  });
});
