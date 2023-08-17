"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { SignIn } from "../../action/User";
import Loading from "../../components/Loading";

type FormData = {
  key_login: string;
};

export default function Login() {
  const router = useRouter();
  const {
    trigger,
    data: value,
    isMutating,
  } = useSWRMutation(`/users/login`, SignIn, {
    onSuccess: (value) => {
      if (!!value?.user) {
        router.push("/user/attendance");
      }
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { key_login: "" } });

  const onSubmit = async (data: FormData) => {
    await trigger(data);
  };
  return (
    <div className="flex justify-center flex-col my-[200px] md:px-4">
      <h1 className="text-center text-[1.8rem] font-semibold pb-3 text-black">
        Log In{" "}
      </h1>
      <span className="text-lg text-red-500 text-center">{value?.message}</span>
      <form
        className="w-full max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`flex items-center border-b py-1 ${
            errors.key_login ? "border-red-500" : "border-teal-500 "
          }`}
        >
          <Controller
            name="key_login"
            control={control}
            rules={{ required: "Vui lòng nhập mã tài khoản" }}
            render={({ field }) => (
              <input
                {...field}
                className={`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none text-lg 
                }`}
                type="text"
                placeholder="Mã tài khoản"
                aria-label="Full name"
              />
            )}
          />
          <button
            className=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            {isMutating && <Loading />}
            Đăng nhập
          </button>
        </div>
        {errors.key_login && (
          <p className="text-red-500 text-sm1">{errors.key_login.message}</p>
        )}
      </form>
    </div>
  );
}
