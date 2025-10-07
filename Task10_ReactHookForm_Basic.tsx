import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
};

export default function HookFormBasic() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <input {...register("email")} placeholder="Email" />
      <button type="submit">Gửi</button>
    </form>
  );
}
