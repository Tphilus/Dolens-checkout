import { Switch } from "@/components/ui/switch"
const DolensStandardCard = () => {
  return (
    <div className=" ">
      <div className=" bg-[#39514a] p-5 rounded-tl-xl rounded-tr-xl ">
        <div className=" flex items-center justify-between">
          <h2 className="text-[#fefeff] text-xl">Dolens Standard</h2>
          <div className=" text-[#fefeff] text-xl font-bold flex items-center gap-2">
            <span>US$</span>
            <span>19.99</span>
          </div>
        </div>

        <p className="text-[#8a9894]">Billed monthly</p>
      </div>
      <div className=" flex justify-between items-center bg-[#1f3831] p-4 rounded-bl-xl rounded-br-xl">
        <div className="flex items-center gap-3" >
        <Switch id="airplane-mode" />
        <button className=" p-1 bg-[#e7efed] text-[#237158] rounded-md px-2" >Save $200</button>
        <p className="text-[#8a9894] hidden md:block " >with anual billing</p>
        </div>

        <div className=" text-[#8a9894] text-base font-bold flex items-center gap-1 ">
          <span>US$</span>
          <span>
            <span>19.99</span>
            <span>/year</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DolensStandardCard;
