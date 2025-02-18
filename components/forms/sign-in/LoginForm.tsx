//this comp responsible for the login form
'use client'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import FormGenerator from '../FormGenerator/index'
import { USER_LOGIN_FORM } from '@/constants/forms'

type Props = {}

const LoginForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <h2 className=" md:text-4xl section-title text-left">Se connecter</h2>
    
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  )
}

export default LoginForm