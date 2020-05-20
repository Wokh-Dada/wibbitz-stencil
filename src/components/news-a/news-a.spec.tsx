import { newSpecPage } from '@stencil/core/testing';
import { NewsA } from './news-a';

describe('news-a', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewsA],
      html: `<news-a></news-a>`,
    });
    expect(page.root).toEqualHtml(`
      <news-a>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </news-a>
    `);
  });
});
