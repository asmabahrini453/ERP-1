'use client'

import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type Props = {
  children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
    const methods = useForm()

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form
          className="h-full"
        >
          <div className="flex flex-col justify-between gap-3 h-full">
          {children}
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider
