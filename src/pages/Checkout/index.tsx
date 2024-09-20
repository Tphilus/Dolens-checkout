import { IoArrowBack } from "react-icons/io5";
import { LuCircleDotDashed } from "react-icons/lu";
import DolensStandardCard from "../../components/card/dolensStandardCard";
import PayWithCardForm from "@/components/PayWithCardForm";

const CheckoutPage = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen">
      {/* Left Section */}
      <div className="bg-[#082c21] p-4 md:p-10 h-full flex flex-col justify-between gap-4">
        {/* logo */}
        <div className="text-white flex items-center gap-6">
          <IoArrowBack size={24} />
          <div className="flex gap-2 items-center">
            <LuCircleDotDashed size={30} />
            <h2 className="font-bold text-lg text-[#e2e9e6]">Dolens</h2>
          </div>
        </div>

        {/* Subscribe */}
        <div className="text-[#b2bcbb] flex flex-col gap-2">
          <p>Subscribe to Gorge standard</p>
          <div className="text-[#fefeff] font-bold text-3xl md:text-6xl flex items-center gap-4">
            <span>US$</span>
            <span>19.99</span>
            <span className="text-base text-[#b2bcbb] flex flex-row md:flex-col">
              <span>Per</span>
              <span>month</span>
            </span>
          </div>
          <p>Unlimited contact, 500 Messages per month</p>
        </div>

        {/* Card */}
        <DolensStandardCard />

        {/* Amount */}
        <div className="px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <div className="text-[#fefeff] flex items-center justify-between">
              <h2>Subtotal</h2>
              <div className="text-xl font-bold flex items-center gap-2">
                <span>US$</span>
                <span>19.99</span>
              </div>
            </div>
            <hr className="border-[#43564e]" />
          </div>

          <h1 className="text-[#fefeff] underline text-2xl">Add promotion code</h1>

          <div className="flex flex-col gap-6">
            <div className="text-[#b2bcbb] flex items-center justify-between">
              <h2>Tax</h2>
              <div className="text-xl font-bold flex items-center gap-2">
                <span>US$</span>
                <span>0.00</span>
              </div>
            </div>
            <hr className="border-[#43564e]" />
          </div>

          <div className="text-[#fefeff] flex items-center justify-between">
            <h2>Total due today</h2>
            <div className="text-xl font-bold flex items-center gap-2">
              <span>US$</span>
              <span>19.99</span>
            </div>
          </div>
        </div>

        <div>
          <span className="flex gap-2 text-base text-[#b2bcbb]">
            <span>{year}</span>
            <span>All rights reserved</span>
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className=" py-6 md:py-10 px-4 md:px-20 h-screen">
        <h1 className="text-[#020203] capitalize font-bold text-2xl md:text-3xl pb-4 md:pb-5">
          pay with card
        </h1>
        <PayWithCardForm />
      </div>
    </div>
  );
};

export default CheckoutPage;