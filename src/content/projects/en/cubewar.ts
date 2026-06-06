import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "node", "websockets", "redis"],
  videoBorder: false,
  live: "https://cubewar.io",
  description:
    "CubeWar là game nhiều người chơi trên trình duyệt, nơi người chơi điều khiển nhân vật dạng khối trong các trận đấu chiến thuật tốc độ cao.<br/><br/>Dự án tập trung vào trải nghiệm thời gian thực, xử lý kết nối ổn định và giao diện rõ ràng để người chơi có thể tham gia nhanh trên nhiều thiết bị.",
  components: [
    { type: "media", props: { type: "video", src: videoCubeWar, caption: "Lối chơi" } },
    { type: "media", props: { type: "image", src: cubewar0, alt: "Hướng dẫn", caption: "Hướng dẫn" } },
    { type: "media", props: { type: "image", src: cubewar1, alt: "Chủ đề bản đồ", caption: "Chủ đề bản đồ" } },
    { type: "media", props: { type: "image", src: cubewar2, alt: "Đăng nhập", caption: "Đăng nhập" } },
    { type: "media", props: { type: "image", src: cubewar3, alt: "Giao diện responsive", caption: "Giao diện responsive" } },
    { type: "media", props: { type: "image", src: cubewar4, alt: "Nhiều chế độ chơi", caption: "Nhiều chế độ chơi" } },
    { type: "media", props: { type: "image", src: cubewar5, alt: "Hệ thống nhóm", caption: "Hệ thống nhóm" } },
  ],
} as const satisfies ProjectContent;
