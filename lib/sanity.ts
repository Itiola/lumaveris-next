import { createClient } from "@sanity/client";

export const hasSanityConfig = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id"
);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2026-11-22",
      useCdn: true
    })
  : null;
