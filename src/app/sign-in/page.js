"use client";

import { Label } from "@/components/ui/label";
import { initialLoginFormData, userLoginFormControls } from "../utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/actions";
import { useRouter } from "next/navigation";
import CommonFormElement from "@/components/form-element/page";

function SignIn() {
  const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
  const router = useRouter();

  const handleSignIn = async(event) => {
    event.preventDefault();
    const result = await loginUserAction(signInFormData);
    
    if (result?.success) router.push("/"); // Redirect to / after successful login
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center p-4">
      <div className="bg-white/90 shadow-lg rounded-lg p-8 w-full max-w-md z-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 🙂
        </h1>
        <form onSubmit={handleSignIn} className="space-y-4 mb-2">
          {userLoginFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label className="block text-gray-600 mb-1">
                {controlItem.label}
              </Label>
              <CommonFormElement
                currentItem={controlItem}
                value={signInFormData[controlItem.name]} // Use state value instead of set function
                onChange={(event) =>
                  setSignInFormData({
                    ...signInFormData,
                    [event.target.name]: event.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="mb-6"></div>

          <Button
            type="submit"
            className="w-full py-2 bg-[#00a86b] text-white rounded-md hover:bg-[#48c99a] transition duration-200"
          >
            Sign In
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Button
            onClick={() => router.push("/sign-up")}
            className="w-full mt-2 py-2 bg-[#2b616c] text-white rounded-md hover:bg-[#398fa0] transition duration-200"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
