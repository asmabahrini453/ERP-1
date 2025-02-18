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
          className="w-full"
        >
          Créer compte
        </Button>
        <p>
         Vous avez un compte?{' '}
          <Link
            href="/auth/sign-in"
            className="font-bold"
          >
            connectez-vous
          </Link>
        </p>
      </div>
    )
  }

 


export default ButtonHandler
