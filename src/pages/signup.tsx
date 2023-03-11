import React, { useEffect } from "react"
import Input from "@/components/form/Input"
import { Account } from "@/constant/form"
import { FormProvider, useForm } from "react-hook-form"
import Button from "@/components/button/Button"
import clsxm from "@/constant/clsxm"
import toast, { Toaster } from "react-hot-toast"

export default function Register() {
  const notifySuccess = () => toast.success('Register Successful!');
  const onSubmit = async (data: Account) => {
      setIsRegistered(true)
      setAccount(data.name)
      notifySuccess()
  }
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });
  const { handleSubmit, formState: { errors } } = methods;
  const [isRegistered, setIsRegistered] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string>('');
  return (
    <div className={clsxm(
      'gradient-color',
      'min-h-screen min-w-screen',
    )}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName="text-sm font-medium"
      />
      { isRegistered == false ? (
        <div className="flex justify-center items-center space-y-3 h-full">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-xl px-32 py-24 bg-white rounded-lg"
              >
              <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Let us know!</h1>
              <Input
                id='name'
                label="Name"
                placeholder="Enter your name"
                type="text"
                validation={{
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Name must have at least 4 characters",
                  },
                  maxLength: 20,
                }}
              />
              <Input
                id='email'
                label="Email"
                placeholder="Enter your email"
                type="email"
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }
                }}
              />
              <Input
                id='password'
                label="Password"
                placeholder="Enter your password"
                type="password"
                validation={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  }
                }}
              />
              <Input
                id='no_hp'
                label="No. HP"
                placeholder="Enter your phone number"
                type="text"
                validation={{
                  required: "Phone number is required",
                  pattern:{
                    value: /^(\+62)?[\s-]?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
                    message: "Invalid phone number",
                  }
                }}
              />
              <Button
                type="submit"
                className=""
                size="base"
              >
                Sign Up
              </Button>
            </form>
          </FormProvider>
        </div>
      ) : (
      <div className="flex justify-center items-center space-y-3 h-full">
        <div className="shadow-xl px-32 py-24 bg-white rounded-lg">
          <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Register Successful!</h1>
          <p className="text-black my-5">
            Welcome to Finance App, <span className="font-bold">{account}</span>!
          </p>
          <Button
            type="button"
            href="/login"
            isLink={true}
          >
            Login Here
          </Button>
        </div>
      </div>
      )}
    </div>
  )
}