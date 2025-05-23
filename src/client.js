import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-05-20",
  /*token: import.meta.env.VITE_PROJECT_TOKEN,*/
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
