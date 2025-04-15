"use client"
import type React from "react"
import { FormProvider, useForm } from "react-hook-form"

type Props = {
  children: React.ReactNode
}

const SignInFormProvider = ({ children }: Props) => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form submitted:", data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="h-full">
        <div className="flex flex-col justify-between gap-3 h-full">{children}</div>
      </form>
    </FormProvider>
  )
}

export default SignInFormProvider
