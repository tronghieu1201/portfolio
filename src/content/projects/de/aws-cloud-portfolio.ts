import image1 from "../../../assets/images/projects/aws-cloud-portfolio/1.jpg";
import image2 from "../../../assets/images/projects/aws-cloud-portfolio/2.jpg";
import image3 from "../../../assets/images/projects/aws-cloud-portfolio/3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "AWS Cloud Portfolio",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://ddusufgoys11.cloudfront.net",
  source: "https://github.com/tronghieu1201/portfolio",
  description:
    "AWS Cloud Portfolio là website portfolio cá nhân được triển khai trên AWS CloudFront, tập trung vào trải nghiệm tương tác và nội dung dự án chuyên nghiệp.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image1,
        alt: "AWS Cloud Portfolio - giao diện chính",
        caption: "Giao diện chính",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image2,
        alt: "AWS Cloud Portfolio - nội dung dự án",
        caption: "Nội dung dự án",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image3,
        alt: "AWS Cloud Portfolio - trải nghiệm tương tác",
        caption: "Trải nghiệm tương tác",
      },
    },
  ],
} as const satisfies ProjectContent;
