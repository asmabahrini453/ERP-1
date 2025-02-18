import SignUpFormProvider from "@/components/forms/sign-in/FormProvider";
import ButtonHandler from "@/components/forms/sign-up/ButtonHandler";
import RegisterForm from "@/components/forms/sign-up/RegisterForm";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegisterForm />
            <div className="w-full flex flex-col gap-3 items-center">
              <ButtonHandler />
              
            </div>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
