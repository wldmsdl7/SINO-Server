FROM node:20-alpine
WORKDIR /app

# 1. 패키지 설치
COPY package*.json ./
RUN npm install

# 2. 전체 소스 복사
COPY . .

# 3. 포트 노출
EXPOSE 3000

# 4. 앱 실행 전에 Prisma Client 생성
CMD sh -c "npx prisma generate && npm start"