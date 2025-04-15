import SignUpFormProvider from "@/components/forms/sign-in/FormProvider"
import ButtonHandler from "@/components/forms/sign-up/ButtonHandler"
import RegisterForm from "@/components/forms/sign-up/RegisterForm"
import { Card, CardContent } from "@/components/ui/card"

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">

    <Card className="w-full max-w-md ">
      <CardContent className="pt-6">
        <SignUpFormProvider>
          <div className="space-y-4">
           

            <RegisterForm />

            <div className="w-full">
              <ButtonHandler />
            </div>
          </div>
        </SignUpFormProvider>
      </CardContent>
    </Card>
    </div>
  )
}

export default SignUp
