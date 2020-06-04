import { newSpecPage } from '@stencil/core/testing';
import { NewSinglePost } from './new-single-post';

describe('new-single-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewSinglePost],
      html: `<new-single-post></new-single-post>`,
    });
    expect(page.root).toEqualHtml(`
      <new-single-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-single-post>
    `);
  });
});
