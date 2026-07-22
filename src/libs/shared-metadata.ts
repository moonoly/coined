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
      content: description,
      name: "description",
    },
    {
      content:
        "Web Designer, Agency, Landing page design, Web Developer, ROI, Lift Profit, Converting Landing Page",
      name: "keywords",
    },
    { content: "Weebo", name: "creator" },
    { content: "Weebo", name: "publisher" },
    { content: "Weebo", name: "application-name" },
    { content: "", name: "google-site-verification" },
    { content: "Websites", name: "category" },
    { content: "Tanstack start", name: "generator" },
    { content: "true", name: "pinterest-rich-pin" },
    {
      content: title,
      name: "og:title",
    },
    {
      content: description,
      name: "og:description",
    },
    {
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764832682755/704c4073-97bb-4002-97cc-cba286b7bb39.png",
      property: "og:image",
    },
    { content: "en_US", property: "og:locale" },
    { content: "website", property: "og:type" },
    {
      content: title,
      name: "twitter:title",
    },
    {
      content: description,
      name: "twitter:description",
    },
    { content: "summary_large_image", name: "twitter:card" },
    { content: "Weebo", name: "twitter:site" },
    { content: "@nyomansunima", name: "twitter:creator" },
    {
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1764832682755/704c4073-97bb-4002-97cc-cba286b7bb39.png",
      name: "twitter:image",
    },
  ];
}
