import { newSpecPage } from '@stencil/core/testing';
import { FooterA } from './footer-a';

describe('footer-a', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FooterA],
      html: `<footer-a></footer-a>`,
    });
    expect(page.root).toEqualHtml(`
      <footer-a>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </footer-a>
    `);
  });
});
