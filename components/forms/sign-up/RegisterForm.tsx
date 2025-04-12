'use client'

import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../FormGenerator";

function RegisterForm() {
  const { register, formState: { errors } } = useFormContext(); 

  return (
    <>
     
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
}

export default RegisterForm;
