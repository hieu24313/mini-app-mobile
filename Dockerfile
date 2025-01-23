FROM node:18

# Đặt thư mục làm việc là /app
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependency
RUN npm install

# Sao chép mã nguồn vào thư mục làm việc
COPY . .

# Khởi chạy ứng dụng
CMD ["npm", "start"]
