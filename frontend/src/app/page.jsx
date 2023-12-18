import React from "react";
import RootLayout from "./layout";
import { Footer, Navbar } from "@/components";
const page = () => {
  return (
    <RootLayout>
      <Navbar />
      <Footer />
    </RootLayout>
  );
};

export default page;
