import { newSpecPage } from '@stencil/core/testing';
import { NewPost } from './new-post';

describe('new-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewPost],
      html: `<new-post></new-post>`,
    });
    expect(page.root).toEqualHtml(`
      <new-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-post>
    `);
  });
});
