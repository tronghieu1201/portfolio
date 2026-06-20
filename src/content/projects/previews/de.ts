import thumbnailWeather from "../../../assets/images/projects/weather/5.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "WeatherVN-Storm-Tracker",
    slug: "weather",
    thumbnail: thumbnailWeather,
    description: "Theo dỗi thời tiết và biến động biển đông Việt Nam",
  },
] as const satisfies ProjectPreview[];
