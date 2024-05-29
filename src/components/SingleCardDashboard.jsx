/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import avater from "../images/Ellipse 6.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCardDashboard = ({ house, onDelete }) => {
  const { id, img, houseName, price, cityName } = house;

  const handleDelete = async () => {
    alert("Are you sure you want to delete");
    await fetch(`http://localhost:3000/house/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
        toast("Product deleted successfully");
      });
  };
  return (
    <div className="card card-compact  bg-base-100 ">
      <figure className="w-auto h-[382px] overflow-hidden rounded-3xl">
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{houseName}</h2>
        <p>$ {price}</p>

        <div className="flex gap-5 justify-between">
          <div className="flex gap-5">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img src={avater} alt="" />
            </div>
            <div>
              <p className="font-bold">Dianne Russell</p>
              <p className="text-xs">{cityName}</p>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              onClick={handleDelete}
              className="text-base bg-red-500 px-3 rounded-xl"
            >
              Delete
            </button>
            <Link to={`update/${id}`} className="text-base bg-primary px-3 rounded-xl flex items-center">
              
              <button >
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleCardDashboard;
