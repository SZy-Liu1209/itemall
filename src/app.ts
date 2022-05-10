import Koa from "koa";
import bodyParser from "koa-bodyParser";
import cors from "koa-cors";
import { setupRoutes } from "./routes";

function bootstrap() {
  const app = new Koa();

  app.use(bodyParser()).use(cors());

  app.use(bodyParser());

  setupRoutes(app);

  app.listen(3000, () => {
    console.log(`Server runtime successfully at http://localhost:3000`);
  });
}

bootstrap();
