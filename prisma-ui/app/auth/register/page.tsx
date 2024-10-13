"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DivAnimation from "@/components/animation/DivAnimation";
import { IConfig } from "../login/page";
import Social from "@/components/auth/Social";
import Divider from "@/components/auth/Divider";
import RegisterForm from "@/components/auth/RegisterForm";
import { DomainContext } from "@/provider/DomainProvider";
const BlogConfig: IConfig = {
  heading: "Welcome Back to the Hub of Ideas That Matter",
  body: "Ready to dive deeper into stories that spark inspiration and conversations that challenge the norm? Sign in to continue your journey. Your next dose of insight is just a click away.",
};
const EdtechConfig: IConfig = {
  heading: "Welcome Back to the Future of Learning",
  body: "Ready to unlock your potential and embark on a transformative educational journey? Sign in to access innovative courses, connect with inspiring educators, and explore resources that empower your growth. Your path to knowledge and success starts here!",
};
const BakeriesConfig: IConfig = {
  heading: "Welcome Back to the Sweetest Corner of Baking",
  body: "Ready to indulge in delightful recipes and mouthwatering creations? Sign in to explore our latest cake designs, baking tips, and inspiration that will elevate your baking game. Your next delicious masterpiece is just a click away!",
};

const RegisterPage = () => {
  const { currentDomainType } = useContext(DomainContext);
  const router = useRouter();
  const { status: sessionStatus } = useSession();
  const [config, setConfig] = useState<IConfig>();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard/user");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    switch (currentDomainType) {
      case "blog":
        setConfig(BlogConfig);
      case "edtech":
        setConfig(EdtechConfig);
      case "bakeries":
        setConfig(BakeriesConfig);
    }
    console.table(currentDomainType);
  }, []);

  if (sessionStatus === "loading") {
    return (
      <div className="hero  min-h-screen">
        <div className="hero-content ">
          <DivAnimation />
        </div>
      </div>
    );
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <DivAnimation />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">{config?.heading}</h1>
            <p className="py-6">{config?.body}</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <RegisterForm />
              <Divider />
              <Social />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RegisterPage;
