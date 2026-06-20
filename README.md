# Portfolio

Website portfolio cá nhân được xây dựng bằng Vue 3, TypeScript và Vite. Giao diện có hiệu ứng chuyển động, một số thành phần 3D/WebGL và nội dung dự án.

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
- Ảnh, video và model: `src/assets/`, `public/`
