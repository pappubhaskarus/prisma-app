import dbConnect from "./lib/db";
import dbLoad from "./lib/loader";

export default async function init() {
  await dbConnect();
  await dbLoad()
}
