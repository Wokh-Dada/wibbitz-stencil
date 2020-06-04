import { newSpecPage } from '@stencil/core/testing';
import { NewListiner } from './new-listiner';

describe('new-listiner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewListiner],
      html: `<new-listiner></new-listiner>`,
    });
    expect(page.root).toEqualHtml(`
      <new-listiner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-listiner>
    `);
  });
});
