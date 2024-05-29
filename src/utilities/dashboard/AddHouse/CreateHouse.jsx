import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateHouse = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const id = data.id;
    const houseName = data.name;
    const img = data.img;
    const cityName = data.city;
    const price = data.price;

    const alldata = { id, img, houseName, price, cityName };

    alert("Confirm Add product");

    await fetch("http://localhost:3000/house", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product added successfully");
        console.log(data);
        reset();
      });
  };
  return (
    <div>
      <section className="py-20  px-20 bg-[#e5f0fd]">
        <div className="w-[40vw] bg-white mx-auto my-7 p-10 rounded-lg">
          {/* form-------------- */}
          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            {/* House ID------ */}
            <div>
              <input
                placeholder="House ID"
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("id", {
                  required: "House ID is required",
                })}
                aria-invalid={errors.id ? "true" : "false"}
              />
              {errors.id && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.id.message}
                </p>
              )}
            </div>

            {/* img------- */}
            <div>
              <input
                placeholder="House image*"
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("img", {
                  required: "House image is required",
                })}
                aria-invalid={errors.img ? "true" : "false"}
              />
              {errors.img && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.img.message}
                </p>
              )}
            </div>

            {/* houseName------- */}
            <div>
              <input
                placeholder="House Name*"
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("name", {
                  required: "House name is required",
                })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* house price------ */}
            <div>
              <input
                placeholder="House Price"
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("price", {
                  required: "House price is required",
                })}
                aria-invalid={errors.price ? "true" : "false"}
              />
              {errors.price && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* city------ */}
            <div>
              <input
                placeholder="City"
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("city", {
                  required: "city is required",
                })}
                aria-invalid={errors.city ? "true" : "false"}
              />
              {errors.city && (
                <p role="alert" className="pl-2 text-red-500 text-xs ">
                  {errors.city.message}
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Add"
              className="hover:scale-[1.04] transition duration-150 ease-in-out bg-secondary h-[60px] px-7 w-full rounded-xl text-base"
            />
          </form>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default CreateHouse;
