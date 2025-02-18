'use client'

import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../FormGenerator";

function RegisterForm() {
  const { register, formState: { errors } } = useFormContext(); 

  return (
    <>
      <h2 className=" md:text-4xl section-title text-left">Détails du compte</h2>
      <p className="section-description text-left text-lg text-muted-foreground">Veuillez saisir vos coordonnées</p>

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
