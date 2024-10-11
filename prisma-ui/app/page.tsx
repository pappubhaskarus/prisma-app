'use client'

import { useRouter } from "next/navigation";
import { set } from "local-storage";

export default function Home() {
  const router = useRouter()

  if (process.env.NEXT_PUBLIC_DOMAIN_TYPE) {
    set<string>("NEXT_PUBLIC_DOMAIN_TYPE", process.env.NEXT_PUBLIC_DOMAIN_TYPE)
    router.push(process.env.NEXT_PUBLIC_DOMAIN_TYPE)
  }

  return (
    <></>
  );
}
