"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DivAnimation from "@/components/animation/DivAnimation";

function UserPage() {
  const router = useRouter();
  const { status: sessionStatus } = useSession();
  useEffect(() => {
    console.log(sessionStatus);
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard/user");
    } else {
      router.replace("/auth/login");
    }
  }, [sessionStatus, router]);
  if (sessionStatus === "loading") {
    return (
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <DivAnimation />
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return <div>UserPage</div>;
}

export default UserPage;
