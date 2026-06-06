import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Quibbo",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "Quibbo là nền tảng cho các trò chơi nhiều người theo vòng ngắn, kết hợp ghép trận, nhân vật 3D tùy chỉnh và hệ thống tài khoản.<br/><br/>Dự án được xây dựng như một thử nghiệm kỹ thuật rồi phát triển thành nền tảng có thể mở rộng để kiểm thử nhiều ý tưởng game khác nhau.",
  components: [
    { type: "media", props: { type: "video", src: videoQuibbo, caption: "Trải nghiệm người dùng" } },
    { type: "media", props: { type: "image", src: quibbo0, alt: "Tạo nhân vật", caption: "Tạo nhân vật" } },
    { type: "media", props: { type: "image", src: quibbo1, alt: "Cờ ca rô nhiều người", caption: "Cờ ca rô nhiều người" } },
    { type: "media", props: { type: "image", src: quibbo2, alt: "Nhiều mini game", caption: "Nhiều mini game" } },
    { type: "media", props: { type: "image", src: quibbo3, alt: "Biến thể nhân vật", caption: "Biến thể nhân vật" } },
    { type: "media", props: { type: "image", src: quibbo4, alt: "Giao diện responsive", caption: "Giao diện responsive" } },
    { type: "media", props: { type: "image", src: quibbo5, alt: "Chế độ tối", caption: "Chế độ tối" } },
  ],
} as const satisfies ProjectContent;
