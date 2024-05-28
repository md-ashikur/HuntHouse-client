import { GiBathtub } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import house from "../../images/Group 14.png";
import pic1 from "../../images/Ellipse 6.png";
const HomeSec3 = () => {
  return (
    <div className="grid grid-cols-2 px-5 lg:px-20 my-20">
      <div>
        <p>Ready to Sell!</p>
        <h2 className="text-3xl font-bold">Let’s tour and see our house!</h2>
        <p className="max-w-[413px] my-5">
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>

        <h5>House Detail</h5>
        <div className="grid grid-cols-2 my-5">
          <div className="flex gap-3 items-center">
            <IoBed />
            <p>4 Bedrooms</p>
          </div>
          <div className="flex gap-3 items-center">
            <GiBathtub />
            <p>2 Bathrooms</p>
          </div>
        </div>
        <div className="grid grid-cols-2 my-5">
          <div className="flex gap-3 items-center">
            <IoBed />
            <p>1 Carport</p>
          </div>
          <div className="flex gap-3 items-center">
            <GiBathtub />
            <p>2 Floors</p>
          </div>
        </div>

        <div className="flex items-center gap-5 my-10">
           <div className="w-14 h-14 rounded-full overflow-hidden"><img src={pic1} alt="" className="w-full h-auto"/></div>
          <div>
            <p className="text-lg font-semibold">Dianne Russell</p>
            <p className="text-base">Manager Director</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <img src={house} alt="" className="max-w-[528px] max-h-[460px]" />
      </div>
    </div>
  );
};

export default HomeSec3;
