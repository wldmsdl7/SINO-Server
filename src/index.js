import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { errorHandler } from "../middlewares/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import routers from "./routes/routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors()); // cors 방식 허용x
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

// 에러 핸들링
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 스웨거 설정
const swaggerDocument = YAML.load(
  path.join(process.cwd(), "swagger/swagger.yml")
);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Router 연결
app.use("/", routers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
