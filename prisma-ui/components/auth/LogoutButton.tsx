"use client";

import { signOut } from "next-auth/react";
import React from "react";

function LogoutButton() {
  return (
    <a className="link" onClick={() => signOut()}>
      logout
    </a>
  );
}

export default LogoutButton;
