import Button from "../../Components/UI/Button";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../Components/UI/InputField";
import LaptopImage from "../../assets/Images/LaptopImage.png";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../Components/UI/PageLoader";
import { useState } from "react";
import { setUser } from "../../Store/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const watchEmail = watch("email");

  const isFormComplete = watchEmail;

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", JSON.stringify(data));
    dispatch(setUser({ username: data.username, email: data.email || "" }));
    reset();
  };

  const navigate = useNavigate();

  const handleNavigationDashboard = () => {
    if (isFormComplete) setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/Dashboard");
    }, 2000);
  };

  return (
    <div className="bg-[#ffff] sm:flex sm:flex-row ">
      <aside className=" hidden sm:flex sm:flex-1 sm:h-full  sm:object-cover">
        <img
          src={LaptopImage}
          alt=" LaptopImage"
          loading=""
          className="w-full h-full object-cover"
        />
      </aside>
      <section className="  w-[90%] sm:flex-1 mx-auto sm:min-w-[400px] ">
        <div className=" grid justify-items-center gap-3  pt-32 sm:w-[80%] lg:w-[80%] xl:w-[50%]  mx-auto ">
          <span className=" rounded-full bg-[#FAF5E9] border-[#FAF5E9] p-[10px] "></span>

          <span className=" gap-3 grid  lg:gap-5">
            <p className=" text-[20px] text-left sm:text-[20px] lg:text-[22px] xl:text-[px]  font-bold text-[#261000]  ">
              Login to Flux school Student Portal
            </p>
            <p className=" text-sm text-start max-w-[] sm:text-[15px] lg:text-[18px] xl:text-[]  font-normal text-[#6F6F6F] ">
              {" "}
              kindly enter your email address to login to your{" "}
            </p>
          </span>
        </div>

        <form
          id="login"
          className=" sm:w-[80%]  lg:w-[80%] xl:w-[50%] mx-auto mt-20 "
          onSubmit={handleSubmit(onSubmit, handleNavigationDashboard)}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Admin email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <InputField
                label={" "}
                type="text"
                placeholder="vic-ayo_fluxpay@gmail.com"
                className={`block outline-none mt-2 bg-[#ffff]   box-border  w-full p-2 border-b-2   ${
                  watchEmail ? "border-b-2 border-[#D0940E]" : "border-red-500"
                }`}
                error={errors.email ? errors.email.message : null}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            name={
              isLoading ? (
                <PageLoader />
              ) : isFormComplete ? (
                "Login"
              ) : (
                "Fill the inputs"
              )
            }
            buttonClassName={`p-3 mb-4 w-full mt-44 rounded-md font-bold text-white ${
              isFormComplete && isValid
                ? " bg-[#D0940E] text-white hover:bg-[#D0940E] "
                : "bg-[#CCCCCC] text-[#6F6F6F] cursor-not-allowed"
            }`}
            disabled={!isFormComplete || !isValid}
            buttonOnClick={handleNavigationDashboard}
          />
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
