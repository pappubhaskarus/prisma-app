"use server";

import init from "@/server/init";
import React from "react";

async function InitServerComponent() {
  console.debug("Inside InitServerComponent");
  init();
  return <></>;
}

export default InitServerComponent;
