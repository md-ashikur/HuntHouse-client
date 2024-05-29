
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateHouse = () => {
  const house = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      id: house.id,
      img: house.img,
      name: house.houseName,
      price: house.price,
      city: house.cityName,
    },
  });

  const onSubmit = async (data) => {
    const { id, img, name: houseName, price, city: cityName } = data;

    const updatedHouse = { id, img, houseName, price, cityName };

    alert("Confirm Update product");

    await fetch(`http://localhost:3000/house/${house.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedHouse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Product updated successfully");
      });
  };

  return (
    <div>
      <section className="py-20 px-20 bg-[#e5f0fd]">
        <h1 className="text-center font-bold text-2xl">Edit product</h1>
        <div className="w-[40vw] bg-white mx-auto my-7 p-10 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            {/* House ID */}
            <div>
              <input
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("id", {
                  required: "House ID is required",
                })}
                aria-invalid={errors.id ? "true" : "false"}
              />
              {errors.id && (
                <p role="alert" className="pl-2 text-red-500 text-xs">
                  {errors.id.message}
                </p>
              )}
            </div>

            {/* Image URL */}
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
                <p role="alert" className="pl-2 text-red-500 text-xs">
                  {errors.img.message}
                </p>
              )}
            </div>

            {/* House Name */}
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
                <p role="alert" className="pl-2 text-red-500 text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* House Price */}
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
                <p role="alert" className="pl-2 text-red-500 text-xs">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <input
                placeholder="City"
                className="outline-none border-inherit border my-2 px-5 py-3 w-full h-[50px] rounded-2xl"
                {...register("city", {
                  required: "City is required",
                })}
                aria-invalid={errors.city ? "true" : "false"}
              />
              {errors.city && (
                <p role="alert" className="pl-2 text-red-500 text-xs">
                  {errors.city.message}
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Update"
              className="hover:scale-[1.04] transition duration-150 ease-in-out bg-secondary h-[60px] px-7 w-full rounded-xl text-base"
            />
          </form>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default UpdateHouse;
