import Router from "koa-router";
import HomeControl from "../controller/home.controller";

const homeRouter = new Router({ prefix: "/home" });

homeRouter.get("/banner", HomeControl.findBanner);
export default homeRouter;
