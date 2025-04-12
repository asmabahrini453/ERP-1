import SignInFormProvider from "@/components/forms/sign-in/FormProvider"
import LoginForm from "@/components/forms/sign-in/LoginForm"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <Card className="w-full max-w-md ">
        <CardContent className="pt-6">
          <SignInFormProvider>
            <LoginForm />
            <div className="mt-6 text-center text-sm">
              <p>
                Vous n'avez pas de compte ?{" "}
                <Link
                  href="/auth/sign-up"
                  className="font-medium text-[#3BCEAB] hover:text-[#3BCEAB]/80 transition-colors"
                >
                  Créez-en un
                </Link>
              </p>
            </div>
          </SignInFormProvider>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignInPage
