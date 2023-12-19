import {
  useAuthUser,
  useIsAuthenticated,
  useSignIn,
  useSignOut,
} from "react-auth-kit";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../utils/axios";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();

  const signOut = useSignOut();

  const auth = useAuthUser();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      toast
        .promise(
          axiosInstance.post("api/v1/login-petugas", data),
          {
            pending: "Loading...",
            success: {
              render() {
                return `Login success`;
              },
            },
            error: "Login failed",
          },
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "colored",
          }
        )
        .then((res) => {
          signOut();
          if (
            signIn({
              token: res.data.token,
              expiresIn: 60 * 60 * 24 * 3,
              tokenType: "Bearer",
              authState: {
                email: res.data.email,
                fnama: res.data.fnama,
              },
            })
          ) {
            // navigate(location.state?.from ? location.state.from : "/", {
            //   replace: true,
            // });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAuthenticated() && auth()?.fnama ? (
        <Navigate to="/dashboard" replace />
      ) : null}
      <div className="min-h-screen bg-primary flex justify-center items-center">
        <div className="bg-white max-h-fit p-8 rounded-2xl shadow-lg">
          <h1 className="text-[36px]">Selamat Datang di Poestaka Rakjat</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="py-2 px-4 mt-2 rounded-[4px] border-2 border-gray-300 shadow-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 mt-2 text-sm">
                  Bidang ini harus diisi
                </span>
              )}
              <label htmlFor="password" className="mt-4">
                Password
              </label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                className="py-2 px-4 mt-2 rounded-[4px] border-2 border-gray-300 shadow-md"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 mt-2 text-sm">
                  Bidang ini harus diisi
                </span>
              )}
              <button className="bg-primary text-white py-2 rounded-[8px] font-semibold mt-16 self-start px-8 shadow-md">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
