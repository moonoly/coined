interface GeneratedMetadataInput {
  description: string;
  image?: string;
  title: string;
}

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput):
  | (
      | React.DetailedHTMLProps<
          React.MetaHTMLAttributes<HTMLMetaElement>,
          HTMLMetaElement
        >
      | undefined
    )[]
  | undefined {
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Web Designer, Agency, Landing page design, Web Developer, ROI, Lift Profit, Converting Landing Page",
    },
    { name: "creator", content: "Weebo" },
    { name: "publisher", content: "Weebo" },
    { name: "application-name", content: "Weebo" },
    { name: "google-site-verification", content: "" },
    { name: "category", content: "Websites" },
    { name: "generator", content: "Tanstack start" },
    { name: "pinterest-rich-pin", content: "true" },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764832682755/704c4073-97bb-4002-97cc-cba286b7bb39.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "Weebo" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764832682755/704c4073-97bb-4002-97cc-cba286b7bb39.png",
    },
  ];
}
