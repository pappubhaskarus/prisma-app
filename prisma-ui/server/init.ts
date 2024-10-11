import dbConnect from "./db";

export default async function init() {
  await dbConnect();
}
