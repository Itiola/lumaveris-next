# Lumaveris website

This is the Next.js foundation for the Lumaveris public website, its Insights CMS, and a future client portal.

## Run it locally at no cost

1. Install the free dependencies with: npm install
2. Start the website with: npm run dev
3. Open http://localhost:3000.

## Connect the free Sanity CMS

1. Create a free Sanity account and project at https://sanity.io/manage.
2. Create a public dataset named production.
3. Copy .env.example to .env.local.
4. Add the project ID displayed in Sanity to NEXT_PUBLIC_SANITY_PROJECT_ID.
5. Restart npm run dev and open http://localhost:3000/studio.
6. Create Authors, Topics, and Articles in that order. Set publishedAt before expecting an article to appear publicly.

Until Sanity is connected, the site serves the three current Insights from lib/content.ts. Once connected, the home page, Insights directory, and article pages read published articles from Sanity automatically. This fallback means the public site continues to work during setup.

## Later: client dashboard

The public content CMS is intentionally separate from accounts and client data. When the portal is needed, add an auth provider and database, such as Supabase's free plan, without putting private client records in Sanity.
