import Input from "@/components/form/Input"
import { FormProvider, useForm } from "react-hook-form"
import { useRouter } from "next/router"
import * as React from "react";
import Button from "@/components/button/Button";
import toast, { Toaster } from "react-hot-toast"

export default function Login() {
  const router = useRouter();
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const { handleSubmit, formState: {errors} } = methods;
  return (
    <>
      <div className="min-h-screen min-w-screen gradient-color" data-testid="login-page">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName="text-sm font-medium"
        />
        <div className="flex justify-center items-center h-full">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                toast.success('Login Successful!');
                router.push('/');
              })}
              className="shadow-xl px-16 py-24 bg-white rounded-lg"
            >
              <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Login</h1>
              <Input
                data-testid='email'
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
                data-testid='password'
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
              <Button
                type="submit"
                size="base"
              >
                Login
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )

}