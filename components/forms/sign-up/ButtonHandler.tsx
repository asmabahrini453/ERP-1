'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const ButtonHandler = (props: Props) => { 
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="submit"
          className="w-full bg-[#023E8A] text-white font-medium inline-flex justify-center py-2 px-4 rounded-lg tracking-tight; hover:bg-[#3BCEAB]">
       
          Créer compte
        </Button>
        <p>
         Vous avez un compte?{' '}
          <Link
            href="/auth/sign-in"
            className="font-bold text-[#3BCEAB]"
          >
            connectez-vous
          </Link>
        </p>
      </div>
    )
  }

 


export default ButtonHandler
