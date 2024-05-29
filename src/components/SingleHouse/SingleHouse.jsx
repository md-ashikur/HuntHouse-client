import avater from "../../images/Ellipse 6.png";

/* eslint-disable react/prop-types */
const SingleHouse = ({ house }) => {
  const { img, houseName, price, cityName } = house;
  return (
    <div className="card card-compact  bg-base-100 ">
      <figure className="w-auto h-[382px] overflow-hidden rounded-3xl">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{houseName}</h2>
        <p>$ {price}</p>

        <div className="flex gap-5">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src={avater} alt="" />
          </div>
          <div>
            <p className="font-bold">Dianne Russell</p>
            <p className="text-xs">{cityName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHouse;
