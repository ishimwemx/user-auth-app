"use client";

import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerUserAction } from "@/actions";
import { useRouter } from "next/navigation";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const router = useRouter();

  const handleSignUpBtnValid = () => Object.keys(signUpFormData).every((key) => signUpFormData[key].trim() !== "");

  const handleSignUp = async(event) => {
    event.preventDefault(); 
    const result = await registerUserAction(signUpFormData);

    if (result?.data) router.push("/sign-in"); // Redirect to sign-in page on after sign up
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center p-4">
      <div className="bg-white/90 shadow-lg rounded-xl p-8 w-full max-w-md z-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get Started ✍️
        </h1>
        <form onSubmit={handleSignUp} className="space-y-6 mb-2">
          {userRegistrationFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label className="block text-gray-600 mb-1">
                {controlItem.label}
              </Label>
              <CommonFormElement
                value={signUpFormData[controlItem.name]}
                currentItem={controlItem}
                onChange={(event) =>
                  setSignUpFormData({
                    ...signUpFormData,
                    [event.target.name]: event.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
            </div>
          ))}

          <div className="mb-6"></div>

          <Button
            disabled={!handleSignUpBtnValid()}
            className="w-full py-2 bg-[#2b616c] text-white rounded-md hover:bg-[#398fa0]  transition duration-200 disabled:opacity-50"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account?</p>
          <Button
            onClick={() => router.push("/sign-in")} // Redirect to Sign In page
            className="w-full mt-2 py-2 bg-[#00a86b] text-white rounded-md hover:bg-[#48c99a] transition duration-200"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
