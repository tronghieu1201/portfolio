import thumbnailPortfolio from "../../../assets/images/projects/aws-cloud-portfolio/5.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "AWS Cloud Portfolio",
    slug: "aws-cloud-portfolio",
    thumbnail: thumbnailPortfolio,
    description: "Portfolio cá nhân triển khai trên AWS CloudFront với trải nghiệm tương tác và nội dung dự án chuyên nghiệp.",
  },
] as const satisfies ProjectPreview[];
