import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "../LogoutButton";
async function Header() {
  const session = await getServerSession();
  console.table(session);
  if (!session?.user) {
    return (
      <div className="border-b py-2">
        <div className="w-[90%] mx-auto ">
          <div className="flex justify-between">
            <div> </div>
            <div>
              <Link className="btn btn-primary btn-sm" href="/auth/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="border-b">
      <div className="w-[80%] mx-auto ">
        <div className="flex justify-between">
          <div>{session.user.email}</div>
          <div>
            <span></span>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
