"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    
    

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            {user ? (
              <div>
                <h1 className="text-2xl font-semibold mb-4">Welcome, {user.displayName}!</h1>
                <Link href="/week8/shopping-list">Shopping List</Link>
                <button
                  onClick={firebaseSignOut}
                  className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <button
                  onClick={gitHubSignIn}
                  className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
                >
                  Sign In with GitHub
                </button>
              </div>
            )}
          </div>
        </main>
      );
    };



