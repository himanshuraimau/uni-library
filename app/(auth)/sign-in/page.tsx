"use client";
import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signInSchema } from '@/lib/Validation'

const page = () => {
  return (
    <div>
      <AuthForm
        type="SIGN_IN"
        schema = {signInSchema}
        defaultValues = {{
          email: '',
          password: ''
        }}
        onSubmit = {() => {}}
      />
    </div>
  )
}

export default page