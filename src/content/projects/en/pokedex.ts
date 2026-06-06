import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://pokedex.david-hckh.com/",
  source: "https://github.com/davidhckh/pokedex",
  videoBorder: true,
  description:
    "Pokédex là một dự án học lập trình web cơ bản, tập trung vào HTML, CSS, JavaScript và cách tổ chức giao diện dễ hiểu.<br/><br/>Ứng dụng có kết nối API công khai để luyện tập xử lý dữ liệu bất đồng bộ, tìm kiếm và hiển thị thông tin theo thời gian thực.",
  components: [
    { type: "media", props: { type: "video", src: videoPokedex, caption: "Ứng dụng Pokédex" } },
    { type: "media", props: { type: "image", src: pokedex0, alt: "Giao diện mặc định", caption: "Giao diện mặc định" } },
    { type: "media", props: { type: "image", src: pokedex1, alt: "Chức năng tìm kiếm", caption: "Chức năng tìm kiếm" } },
    { type: "media", props: { type: "image", src: pokedex2, alt: "Giao diện responsive", caption: "Giao diện responsive" } },
    { type: "media", props: { type: "image", src: pokedex3, alt: "Tải dữ liệu tối ưu", caption: "Tải dữ liệu tối ưu" } },
  ],
} as const satisfies ProjectContent;
