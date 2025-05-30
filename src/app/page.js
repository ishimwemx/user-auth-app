import Head from 'next/head'
import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/log-out";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  if (!currentUser?.success) redirect("/sign-in");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center z-10">
        <h1 className="md:text-3xl text-sm font-bold text-gray-800 mb-8">
          Welcome&nbsp;to&nbsp;your&nbsp;dashboard
        </h1>
        {currentUser ? (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {currentUser.data.userName}
            </h2>
            <p className="text-gray-600 mb-8">{currentUser.data.email}</p>
            <Logout />
          </>
        ) : (
          <p className="text-gray-600">No user is currently logged in.</p>
        )}
      </div>
    </main>
  );
}
