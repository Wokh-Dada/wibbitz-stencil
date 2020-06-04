import { newSpecPage } from '@stencil/core/testing';
import { PopularResources } from './popular-resources';

describe('popular-resources', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PopularResources],
      html: `<popular-resources></popular-resources>`,
    });
    expect(page.root).toEqualHtml(`
      <popular-resources>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </popular-resources>
    `);
  });
});
