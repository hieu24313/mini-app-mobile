FROM node:18

# Đặt thư mục làm việc là /app
WORKDIR /app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

RUN npm install -g zmp-cli

# Cài đặt các dependency
RUN npm install

# Sao chép mã nguồn vào thư mục làm việc
COPY . .

EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["npm", "start"]
