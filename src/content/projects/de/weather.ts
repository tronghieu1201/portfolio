import weather1 from "../../../assets/images/projects/weather/1.jpg";
import weather2 from "../../../assets/images/projects/weather/2.jpg";
import weather3 from "../../../assets/images/projects/weather/3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "WeatherVN-Storm-Tracker",
  theme: "dark",
  tags: ["html", "css", "javascript"],
  videoBorder: false,
  live: "https://github.com/tronghieu1201/WeatherVN-Storm-Tracker",
  source: "https://github.com/tronghieu1201/WeatherVN-Storm-Tracker",
  description:
    "WeatherVN-Storm-Tracker là dự án theo dõi thời tiết và bão dành cho Việt Nam, tập trung vào việc hiển thị thông tin trực quan, dễ theo dõi và phù hợp cho người dùng cần nắm nhanh tình hình thời tiết.<br/><br/>Dự án được dùng làm phần project chính trong portfolio, thay thế các dự án mẫu cũ và liên kết trực tiếp tới mã nguồn trên GitHub.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: weather1,
        alt: "WeatherVN Storm Tracker - màn hình tổng quan",
        caption: "Màn hình tổng quan",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: weather2,
        alt: "WeatherVN Storm Tracker - dữ liệu thời tiết",
        caption: "Dữ liệu thời tiết",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: weather3,
        alt: "WeatherVN Storm Tracker - theo dõi bão",
        caption: "Theo dõi bão",
      },
    },
  ],
} as const satisfies ProjectContent;
