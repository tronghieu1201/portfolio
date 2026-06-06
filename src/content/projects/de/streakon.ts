import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn giúp cá nhân và nhóm nhỏ duy trì thói quen hằng ngày thông qua chuỗi ngày hoàn thành, nhắc nhở và tương tác đơn giản.<br/><br/>Ứng dụng được thiết kế ưu tiên thao tác nhanh trên di động, trải nghiệm ít ma sát và các tính năng xã hội nhẹ để giữ động lực lâu dài.",
  components: [
    { type: "media", props: { type: "image", src: streakon0, alt: "Chuỗi cá nhân và nhóm", caption: "Chuỗi cá nhân và nhóm" } },
    { type: "media", props: { type: "image", src: streakon1, alt: "Tiến độ thói quen", caption: "Tiến độ thói quen" } },
    { type: "media", props: { type: "image", src: streakon2, alt: "Cổ vũ bạn bè", caption: "Cổ vũ bạn bè" } },
    { type: "media", props: { type: "image", src: streakon3, alt: "Luồng mời tham gia", caption: "Luồng mời tham gia" } },
  ],
} as const satisfies ProjectContent;
