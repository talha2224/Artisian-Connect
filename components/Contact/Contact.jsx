import React from "react";
import { AiFillPhone,AiFillMessage} from "react-icons/ai";
import Input from "../input/Input";



const Contact = () => {
  return (
    <div>
      <div className="mt-20 pl-4 pr-4 pb-6 flex gap-10 flex-wrap">

        <div className="shadow-custom p-4 mb-2 w-[100%]  h-[22rem] md:w-[17.5rem] rounded-md">
          <div>
            
            <div className="flex items-center gap-4 text-lg font-semibold mb-4">
              <AiFillPhone className="bg-[#DB4444] text-white w-8 h-8 rounded-full p-2"/>
              <p className="">Call to us</p>
            </div>
            <p className="mb-4 text-sm font-medium text-gray-500">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mt-1 mb-1 text-sm font-medium text-gray-500">Phone: +3422-793234</p>
          </div>

          <hr className="mb-6 mt-6 " />

          <div>
            <div>
              <div className="flex items-center gap-4 text-lg font-semibold mb-4">
                <AiFillMessage className="bg-[#DB4444] text-white w-8 h-8 rounded-full p-2"/>
                <p>Write to us</p>
              </div>
              <p className="mb-4 text-sm font-medium text-gray-500">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mb-4  text-sm font-medium text-gray-500">Emails: customer@exclusive.com</p>
              <p className="mb-4 text-sm font-medium text-gray-500">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className="shadow-custom p-4 md:w-[70%] h-max w-screen rounded-md md:mt-0 mt-2">

          <div className="md:flex md:justify-between md:items-center flex-wrap ">
            <Input placeholder='Your Name' type='text' inputStyle='w-[100%] md:mt-0 outline-none md:w-44  bg-[#F5F5F5] pl-4 pr-4 h-10 rounded-md border-solid border-2 border-gray-100'/>
            <Input placeholder='Your Email' type='text' inputStyle=' w-[100%] md:mt-0 mt-4 md:w-44  outline-none bg-[#F5F5F5] pl-4 pr-4 h-10 rounded-md border-solid border-2 border-gray-100'/>
            <Input placeholder='Your Phone' type='text' inputStyle='w-[100%] md:mt-0 mt-4 md:w-44 outline-none bg-[#F5F5F5] pl-4 pr-4 h-10 rounded-md border-solid border-2 border-gray-100'/>
          </div>

          <div>
            <textarea placeholder="Your message" className=" resize-none w-[100%] mt-6 pt-4 h-36 outline-none bg-[#F5F5F5] pl-4 pr-4 rounded-md border-solid border-2 border-gray-100"></textarea>
          </div>
          <button className="bg-[#DB4444] text-white cursor-pointer w-40 h-10 rounded-md float-right mt-1">Send Message</button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
