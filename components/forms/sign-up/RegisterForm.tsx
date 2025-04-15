'use client'

import { USER_REGISTRATION_FORM } from "@/constants/forms";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "../FormGenerator";
import { Button } from "@/components/ui/button";

function RegisterForm() {
  const { register, formState: { errors } } = useFormContext(); 

  return (
    <div className="space-y-6">
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-center md:text-3xl">Se connecter</h2>
      <p className="text-muted-foreground text-center">Entrez vos identifiants pour accéder à votre compte</p>
    </div>

    <div className="space-y-4">
    {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </div>

   

   
   
  </div>
   
  );
}

export default RegisterForm;
