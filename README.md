# Trang web Portfolio CLB Fuji

Đây là dự án Next.js cho trang web giới thiệu Câu lạc bộ Văn hóa Nhật Bản Fuji.

## Bắt đầu

Làm theo các hướng dẫn sau để cài đặt và chạy dự án trên máy của bạn cho mục đích phát triển và thử nghiệm.

### Yêu cầu

Bạn cần cài đặt [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 20 trở lên) và trình quản lý gói [npm](https://www.npmjs.com/) trên máy tính của mình.

### Cài đặt

1.  **Clone repository:**
    Mở terminal (dòng lệnh) và chạy lệnh sau để tải mã nguồn về máy:
    ```bash
    git clone [URL repository]
    cd [tên thư mục dự án]
    ```
    *Lưu ý: Thay thế `[URL repository]` và `[tên thư mục dự án]` bằng thông tin chính xác.*

2.  **Cài đặt dependencies:**
    Di chuyển vào thư mục dự án và chạy lệnh sau để cài đặt tất cả các gói cần thiết:
    ```bash
    npm install
    ```

### Chạy ứng dụng ở chế độ phát triển

Dự án này cần chạy đồng thời hai tiến trình: ứng dụng web Next.js và dịch vụ AI Genkit.

1.  **Chạy ứng dụng Next.js:**
    Trong terminal, chạy lệnh:
    ```bash
    npm run dev
    ```
    Ứng dụng sẽ khởi chạy và có thể truy cập tại `http://localhost:9002`.

2.  **Chạy dịch vụ Genkit AI:**
    Mở một cửa sổ terminal **mới** và chạy lệnh:
    ```bash
    npm run genkit:dev
    ```
    Để máy chủ tự khởi động lại khi có thay đổi trong các file AI, bạn có thể dùng:
    ```bash
    npm run genkit:watch
    ```

Sau khi cả hai tiến trình đều chạy, bạn đã có một môi trường phát triển đầy đủ.

## Các script có sẵn

-   `npm run dev`: Chạy ứng dụng Next.js ở chế độ phát triển.
-   `npm run genkit:dev`: Chạy dịch vụ Genkit AI.
-   `npm run genkit:watch`: Chạy dịch vụ Genkit AI ở chế độ theo dõi.
-   `npm run build`: Biên dịch ứng dụng cho môi trường production.
-   `npm run start`: Khởi chạy máy chủ production (sau khi đã build).
-   `npm run lint`: Chạy trình kiểm tra lỗi mã nguồn (linter).
-   `npm run typecheck`: Kiểm tra kiểu dữ liệu của mã nguồn bằng TypeScript.
