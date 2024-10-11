import dbConnect from "./lib/db";

export default async function init() {
  await dbConnect();
}
