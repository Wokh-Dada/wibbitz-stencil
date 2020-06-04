import { newE2EPage } from '@stencil/core/testing';

describe('events-a', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<events-a></events-a>');

    const element = await page.find('events-a');
    expect(element).toHaveClass('hydrated');
  });
});
