import { DB } from "../utils";

export default class HomeService {
  static findRecommend(): any {
    throw new Error("select * from recommend");
  }
  static findBanner() {
    return DB.query("select * from banner");
  }
}
