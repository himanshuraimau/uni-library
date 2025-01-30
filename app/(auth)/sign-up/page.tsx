"use client";

import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signUpSchema } from '@/lib/Validation'

const page = () => {
  return (
    <div>
      <AuthForm
        type="SIGN_UP"
        schema = {signUpSchema}
        defaultValues = {{
          email: '',
          password: '',
          fullName: '',
          universityId:0,
          universityCard: ''
        }}
        onSubmit = {() => {}}
      />
    </div>
  )
}

export default page