import img1 from "../../images/Rectangle 22.png";
import avatar from "../../images/Ellipse 6.png";
import img2 from "../../images/Rectangle 23.png";


const HomeSec5 = () => {

   

  return (
    <div className="lg:px-20">
      <div className="flex justify-center text-center my-10">
        <div>
          <p>See tips and trick from our partnership</p>
          <h1 className="text-3xl font-bold max-w-[424px]">
            Find out more about selling and buying homes
          </h1>
          <button>More Article</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="max-w-[200px] max-h-[144px] overflow-hidden">
              <img src={img1} alt="" className="w-auto h-full" />
            </div>

            <div className="col-span-2 px-3">
              <div className="flex items-center gap-5 ">
                <div className="max-w-[32px] max-h-[32px] rounded-full">
                  <img src={avatar} alt="" />
                </div>
                <p className="text-xs">Dianne Russell</p>
              </div>
              <p className="font-semibold py-2 text-lg">
                The things we need to check when we want to buy a house
              </p>

              <p className="text-xs">4 min read | 25 Apr 2021</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="max-w-[200px] max-h-[144px] overflow-hidden">
              <img src={img1} alt="" className="w-full h-auto" />
            </div>

            <div className="col-span-2 px-3">
              <div className="flex items-center gap-5 ">
                <div className="max-w-[32px] max-h-[32px] rounded-full">
                  <img src={avatar} alt="" />
                </div>
                <p className="text-xs">Dianne Russell</p>
              </div>
              <p className="font-semibold py-2 text-lg">
                The things we need to check when we want to buy a house
              </p>

              <p className="text-xs">4 min read | 25 Apr 2021</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-10">
            <div className="max-w-[200px] max-h-[144px] overflow-hidden">
              <img src={img1} alt="" className="w-full h-auto" />
            </div>

            <div className="col-span-2 px-3">
              <div className="flex items-center gap-5 ">
                <div className="max-w-[32px] max-h-[32px] rounded-full">
                  <img src={avatar} alt="" />
                </div>
                <p className="text-xs">Dianne Russell</p>
              </div>
              <p className="font-semibold py-2 text-lg">
                The things we need to check when we want to buy a house
              </p>

              <p className="text-xs">4 min read | 25 Apr 2021</p>
            </div>
          </div>
        </div>

        {/* right side==================== */}
        <div className="px-10">
          <div>
            <img src={img2} alt="" />
          </div>

          <div className="flex items-center gap-5 my-5">
            <div className="max-w-[32px] max-h-[32px] rounded-full">
              <img src={avatar} alt="" />
            </div>
            <p>Cameron Williamson</p>
          </div>
          <h3 className="text-2xl font-bold">
            12 Things to know before buying a house
          </h3>
          <p className="my-3">
            Want to buy a house but are unsure about what we should know, here I
            will try to explain what we should know and check when we want to
            buy a house
          </p>

          <p className="text-xs">8 min read | 25 Apr 2021</p>
        </div>
      </div>



    </div>
  );
};

export default HomeSec5;
