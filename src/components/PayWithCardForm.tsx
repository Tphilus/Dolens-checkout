import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import CountrySelect from "./CountrySelect";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";

const PayWithCardForm = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="example@gmail.com" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your on card</Label>
        <Textarea placeholder="Type your message here." id="message-2" />
      </div>

      <div>
        <Label htmlFor="message-2">Card Details</Label>
        <div className="flex items-center gap-2 border rounded-tl-xl rounded-tr-xl py-2 px-4">
          <input
            type="text"
            id="text"
            placeholder="1234 1234 1234 1234"
            className=" border-none outline-none focus-visible:border-none w-full"
          />
          <div className="flex gap-2">
            <RiVisaLine size={24} />
            <RiMastercardFill size={24} />
          </div>
        </div>
        <div className=" grid grid-cols-2 ">
          <input
            type="text"
            id="text"
            placeholder="MM/YY"
            className=" border py-2 px-4 rounded-bl-xl "
          />

          <input
            type="text"
            id="cvc"
            placeholder="CVC"
            className="border py-2 px-4 rounded-br-xl"
          />
        </div>
      </div>

      <div>
      <Label htmlFor="message-2">Address</Label>
        <CountrySelect />
        <input
          type="text"
          id="text"
          placeholder="Address"
          className=" w-full border py-2 px-4 rounded-bl-xl rounded-br-xl "
        />
      </div>

      <div className="items-top flex space-x-2 border p-4 rounded-xl">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-lg  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Securely save my information for 1-click checkout
          </label>
          <p className="text-sm text-muted-foreground">
            Pay faster on Dolens and everywhere Links nis accepted
          </p>
        </div>
      </div>

      <Button className=" bg-[#083025] p-4 hover:bg-transparent hover:border hover:border-[#083025] hover:text-[#083025] ">
        {" "}
        Subscribe{" "}
      </Button>

      <p className=" text-center pb-8 md:pb-0" >
        By confirming your subscription, you allow us to change your card for
        this and future payments in accordance with terms. You can always cancel
        your subscription
      </p>
    </div>
  );
};

export default PayWithCardForm;
