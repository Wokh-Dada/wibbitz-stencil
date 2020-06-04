import { newSpecPage } from '@stencil/core/testing';
import { EventsA } from './events-a';

describe('events-a', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EventsA],
      html: `<events-a></events-a>`,
    });
    expect(page.root).toEqualHtml(`
      <events-a>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </events-a>
    `);
  });
});
