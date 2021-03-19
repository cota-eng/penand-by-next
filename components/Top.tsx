import React from "react";
import GoogleSocialAuth from "./Authentication/GoogleSocialAuth";
import Link from "next/link";
import Hero from "./Hero";
import { useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

const Top: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <>
      <Hero />
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
      >
        <input
          name="firstName"
          ref={register({ required: true, maxLength: 20 })}
        />
        <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
        <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
        <input type="submit" />
        <div>
          {errors && <span>This field is required</span>}
        </div>
      </form>
    </>
  );
};

export default Top;
