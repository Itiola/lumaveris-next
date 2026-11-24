"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return <main className="setup-message"><h1>Connect Sanity to open the Content Studio.</h1><p>Add your free Sanity project ID to <code>.env.local</code>, then restart the development server.</p></main>;
  }
  return <NextStudio config={config} />;
}
