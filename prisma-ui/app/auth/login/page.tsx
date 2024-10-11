"use client"

import './page.css'
import React, { useEffect, useState } from 'react'
import { get } from "local-storage";
import DivAnimation from "@/components/animation/DivAnimation";
interface IConfig {
    heading: string,
    body: string
}
const BlogConfig: IConfig = {
    heading: "Welcome Back to the Hub of Ideas That Matter",
    body: "Ready to dive deeper into stories that spark inspiration and conversations that challenge the norm? Sign in to continue your journey. Your next dose of insight is just a click away."
}
const EdtechConfig: IConfig = {
    heading: "Welcome Back to the Future of Learning",
    body: "Ready to unlock your potential and embark on a transformative educational journey? Sign in to access innovative courses, connect with inspiring educators, and explore resources that empower your growth. Your path to knowledge and success starts here!"
}
const BakeriesConfig: IConfig = {
    heading: "Welcome Back to the Sweetest Corner of Baking",
    body: "Ready to indulge in delightful recipes and mouthwatering creations? Sign in to explore our latest cake designs, baking tips, and inspiration that will elevate your baking game. Your next delicious masterpiece is just a click away!"
}
function LoginPage() {
    const [config, setConfig] = useState<IConfig>()

    useEffect(() => {
        const domainType = get<string>("NEXT_PUBLIC_DOMAIN_TYPE")
        switch (domainType) {
            case "blog":
                setConfig(BlogConfig)
            case "edtech":
                setConfig(EdtechConfig)
            case "bakeries":
                setConfig(BakeriesConfig)
        }
        console.table(domainType)
    }, []);


    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <DivAnimation />

                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">{config?.heading}</h1>
                    <p className="py-6">
                        {config?.body}
                    </p>


                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage