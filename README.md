# Portfolio

Website portfolio cá nhân được xây dựng bằng Vue 3, TypeScript và Vite. Giao diện có hiệu ứng chuyển động, một số thành phần 3D/WebGL, âm thanh và nội dung dự án.

## Chạy local

```powershell
npm install
npm run dev
```

Mở trình duyệt tại:

```text
http://localhost:3000
```

## Lệnh thường dùng

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy dev server ở máy local |
| `npm run build` | Kiểm tra TypeScript và build bản production vào `dist/` |
| `npm run preview` | Xem thử bản production sau khi build |
| `npm run typecheck` | Kiểm tra TypeScript |

## Nội dung chính

- Dự án: `src/content/projects/{en,de}/<slug>.ts`
- Danh sách preview: `src/content/projects/previews/`
- Text giao diện: `src/i18n/messages/namespaces/common/`
- Link liên hệ/mạng xã hội: `src/content/social.ts`
- Ảnh, video, model và âm thanh: `src/assets/`, `public/`, `sounds/`

## Ghi nhận

Source gốc được tạo và thiết kế bởi David Heckhoff.

Dự án này được chỉnh sửa lại để làm portfolio cá nhân. Theo yêu cầu từ source gốc, phần ghi nhận tác giả ban đầu và liên kết portfolio gốc cần được giữ lại khi sử dụng phần đáng kể của source.

Portfolio gốc:
https://david-hckh.com

Việc sử dụng thương mại, bán lại hoặc phân phối lại phần đáng kể của source cần tuân theo điều khoản của tác giả gốc.
