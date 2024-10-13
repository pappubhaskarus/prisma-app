import BakeriesContent from "@/components/domains/bakeries/layout/Content";
import BakeriesFooter from "@/components/domains/bakeries/layout/Footer";
import BakeriesHeader from "@/components/domains/bakeries/layout/Header";
import React from "react";

function BakeriesPage() {
  return (
    <>
      <BakeriesHeader />
      <BakeriesContent />
      <BakeriesFooter />
    </>
  );
}

export default BakeriesPage;
