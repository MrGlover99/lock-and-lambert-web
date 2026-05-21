import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, SITE_URL } from '@/components/JsonLd';
import { Button } from '@/components/Button';

/**
 * /faq — questions and answers.
 *
 * Founder-directed (TASK-046 SEO follow-on, 2026-05-20). The FAQ items
 * are defined once as data and used for both the rendered page and the
 * FAQPage JSON-LD, so the two can never drift apart.
 *
 * Voice: the literary boutique register locked under TASK-046 — company
 * "we", no named host. Bridge status verified May 2026 (DRJTBC).
 */

export const metadata: Metadata = {
  title: 'Questions & answers',
  description:
    'Questions and answers about staying with Lock & Lambert — where the three places are, check-in, parking, dogs, weddings, and what to do in New Hope and Lambertville.',
};

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Where exactly are the three places?',
    a: 'All three sit along the Delaware, in two towns. Main St Hideaway is on South Main Street in New Hope, Pennsylvania, in the middle of town with the canal towpath out the back. The Garden Level and the River Deck share a house on Lambert Lane in Lambertville, New Jersey, a quiet street that runs down to the river. The two buildings are about five minutes apart on foot, across the New Hope-Lambertville Bridge.',
  },
  {
    q: 'How does check-in work?',
    a: 'Every place has a smartlock, so there is no key to collect and no one to meet — you arrive on your own time. We send the door code before your stay. Check-in is from 3pm in New Hope and from 4pm on Lambert Lane; check-out is by 11am.',
  },
  {
    q: 'Can we bring a dog?',
    a: 'Yes. All three places are happy to have a dog along — just let us know when you book.',
  },
  {
    q: 'Where do we park?',
    a: 'The Main Street place has a driveway: pull all the way forward, and the entrance is at the back. On Lambert Lane it is metered street parking out front, and we send the details with your check-in note.',
  },
  {
    q: 'Is it a good base for a wedding?',
    a: 'It is. The river towns host a lot of weddings, and all three places sit close to the venues and to everything else. If you are travelling as a family or a wedding party, the Whole House on Lambert Lane takes both floors and sleeps eight, so everyone can stay under one roof.',
  },
  {
    q: 'Is it better suited to a couple or a family?',
    a: 'Both work. The Garden Level is single-level with a fenced yard, which makes it easy with a small child or a dog. The River Deck and Main St Hideaway suit a couple or two couples. And the Whole House holds a group of up to eight.',
  },
  {
    q: 'What is there to do nearby?',
    a: 'A great deal, most of it walkable — galleries, antique shops, the Delaware Canal towpath, the Bucks County Playhouse, the riverfront. We have written it all up in our guide to New Hope and Lambertville.',
  },
  {
    q: 'Is the bridge open?',
    a: 'Yes. The New Hope-Lambertville Bridge has been through a long rehabilitation and it is essentially finished — the bridge is open to traffic, and you can walk across any time. A little finishing work continues here and there into 2026, daytime only, and it will not affect your stay.',
  },
  {
    q: 'How many people does each place sleep?',
    a: 'Main St Hideaway sleeps six, across three queen beds. The Garden Level sleeps four — a queen and a full sofa bed. The River Deck sleeps four — a king and a queen. The Whole House, both floors booked together, sleeps eight.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/faq`,
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <main className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1
            className="font-display font-medium text-ink mb-4"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
          >
            Questions <span className="brand-italic">&amp;</span> answers
          </h1>
          <p className="prose-editorial text-stone mb-14 max-w-prose">
            A few things worth knowing before you book. Anything else, send a message and we will
            answer it.
          </p>

          <dl className="space-y-10">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="border-t border-stone/20 pt-8">
                <dt
                  className="font-display font-medium text-ink mb-3"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}
                >
                  {item.q}
                </dt>
                <dd className="font-sans text-ink leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 border-t border-stone/20 pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="font-display italic text-stone text-lg">
              More on the area in our{' '}
              <Link
                href="/the-towns"
                className="text-copper-deep border-b border-copper/40 hover:border-copper transition-colors not-italic"
              >
                guide to the towns
              </Link>
              .
            </p>
            <div className="sm:ml-auto">
              <Button href="/stay" variant="primary" size="md">
                Find a stay
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
