# Elite Master Painting — website

Next.js 15 + Framer Motion rebuild of the Underdog Gym Framer template, re-skinned for
Elite Master Painting (Melbourne). Lime accent swapped for Tiffany blue (`#81D8D0`);
type, spacing, breakpoints and motion matched to the template's computed styles.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Page map (template → this site)

| Template      | Route                      |
|---------------|----------------------------|
| Home          | `/`                        |
| About         | `/about`                   |
| Classes       | `/services`                |
| Class detail  | `/services/[slug]` (5)     |
| Memberships   | `/pricing`                 |
| Schedule      | `/areas`                   |
| Blog          | `/projects`                |
| Contact       | `/contact`                 |
| Legal         | `/privacy-policy`          |

## Editing content

- **All copy:** `src/content/site.ts` (services, FAQs, pricing, areas, projects, stats).
- **Google reviews carousel:** `src/content/reviews.json` — add `{ "name", "rating", "text", "source" }` objects.
- **Design tokens:** top of `src/app/globals.css`.
- **Photos:** `public/images/` (from the client's existing site).

## Integrations

Copy `.env.example` to `.env.local`:

- `AGENT_ENDPOINT` / `AGENT_API_KEY` — chat widget → `/api/chat` → your managed agent.
  The agent should accept `{ sessionId, messages }` and return `{ reply }` (adjust `mapReply()` in
  `src/app/api/chat/route.ts` otherwise). Without it, the widget returns `[Mock]` replies.
- `GHL_WEBHOOK_URL` — `/contact` form → `/api/quote` → GoHighLevel inbound webhook.

Any button can open the chat with a prompt: `openChat("Get a quote")` from `src/components/ChatWidget.tsx`.

## Before launch

- Privacy policy (`/privacy-policy`) was adapted from the client's existing policy to name
  GoHighLevel and the chat assistant — have the client confirm it.
- Add the remaining Google reviews to `reviews.json`.
