import Form from "@/components/form/Form";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export const metadata = {
  title: 'Artisian Connect-Seller-Login',
  description: 'Artisian Connect Seller-Login',
}
const page = () => {

  return (
    <div>
      <Navbar />
      <Form heading='Seller Login' isLogin={true} span='Register' link='/seller/register' buttonText='Login' alreadytext="Don't have an account"/>

    </div>
  );
};

export default page;