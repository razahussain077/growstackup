import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GrowStackUp",
    short_name: "GrowStackUp",
    description:
      "A ready-to-act B2B sales pipeline for staffing agencies and MSPs — buying signals matched to verified decision-maker contacts.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee2",
    theme_color: "#f3eee2",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
