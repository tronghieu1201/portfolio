# AWS Cloud Portfolio

AWS Cloud Portfolio là website portfolio cá nhân được chuẩn hóa cho môi trường AWS. Dự án xây dựng bằng Vue 3, TypeScript và Vite, tập trung vào trải nghiệm tương tác mượt mà, nội dung dự án chuyên nghiệp và triển khai trên AWS CloudFront.

## Live demo

- Live chính: https://ddusufgoys11.cloudfront.net
- Backup/demo: https://tronghieu1201.github.io/portfolio/
- Source code: https://github.com/tronghieu1201/portfolio

## Project Overview

AWS Cloud Portfolio thể hiện portfolio cá nhân với nội dung dự án, kỹ năng và liên hệ. Website sử dụng cấu hình SPA tĩnh, dễ nâng cấp và phù hợp với deployment thông qua CDN.

## Architecture

- Frontend: Vue 3, TypeScript, Vite
- Static build output: `dist/`
- Primary hosting: AWS CloudFront
- Backup/demo hosting: GitHub Pages
- Source repo: `https://github.com/tronghieu1201/portfolio`

## AWS Services Used

- AWS CloudFront: CDN và entry point live chính
- GitHub Pages: phương án backup/demo phụ
- GitHub repository: nguồn code chính

## Deployment Steps

1. `npm install`
2. `npm run build`
3. `npm run preview`
4. Triển khai thư mục `dist/` lên origin phù hợp với CloudFront hoặc GitHub Pages.

> Lưu ý: không lưu thông tin nhạy cảm như AWS Access Key / Secret Key trong repository.

## Testing Result

- `npm run build` kiểm tra TypeScript và build production
- `npm run preview` xác nhận bản production hoạt động trên môi trường local
- Kiểm tra các trang chính, metadata và link live sau khi build

## Cost Check

- AWS CloudFront chi phí dựa trên traffic và request. Giữ nội dung site là static để tối ưu chi phí.
- GitHub Pages làm phương án backup miễn phí.
- Không lưu dữ liệu nhạy cảm hoặc khóa trong mã nguồn.
