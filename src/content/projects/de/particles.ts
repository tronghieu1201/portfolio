import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Hiệu ứng hạt WebGL",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "https://particles.david-hckh.com/",
  videoBorder: false,
  description:
    "Đây là thử nghiệm WebGL dùng OGL.js để tạo chuyển động hạt bằng công thức toán học và noise function.<br/><br/>Các hạt chuyển tiếp mượt giữa nhiều khối 3D, tạo cảm giác sống động và phù hợp cho những trải nghiệm web giàu hình ảnh.",
  components: [
    { type: "media", props: { type: "video", src: videoParticles, caption: "Hệ thống hạt động" } },
    { type: "media", props: { type: "image", src: particles0, alt: "Hình nút xoắn", caption: "Hình nút xoắn" } },
    { type: "media", props: { type: "image", src: particles1, alt: "Hình vòng", caption: "Hình vòng" } },
    { type: "media", props: { type: "image", src: particles2, alt: "Hình cầu", caption: "Hình cầu" } },
  ],
} as const satisfies ProjectContent;
