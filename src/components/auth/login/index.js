import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'
import img from "../../../images/Onboarding44.png";

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div className="signin">
          {userLoggedIn && <Navigate to={"/onboard"} replace={true} />}
          <section className="h-screen">
            <div className="container h-full px-6 py-24">
              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                {/* Left column container with background */}
                <div className="absolute top-0 left-0 p-10">
                  <Link smooth to="/home">
                    <h1 className="font-thin text-4xl text-gray-900">ONBOARDIO</h1>
                  </Link>
                </div>
                <div className="absolute inset-y-40 left-50 w-1/2 ">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Right column container with form */}
                <div className="md:w-8/12 lg:ml-auto lg:w-5/12 p-8">
                  <form onSubmit={onSubmit}>
                    <h2 className="text-2xl font-extrabold text-gray-700 ml-11 mb-6">
                      Good morning!
                    </h2>
    
                    {/* Social login buttons */}
                    <button
                      disabled={isSigningIn}
                      onClick={(e) => {
                        onGoogleSignIn(e);
                      }}
                      className={`w-80 text-black bg-blue-400 rounded-full  flex items-center justify-center gap-x-3 py-2.5 border text-sm font-medium  ${
                        isSigningIn
                          ? "cursor-not-allowed"
                          : "hover:bg-blue-300 transition duration-300 active:bg-gray-100"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_17_40)">
                          <path
                            d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                            fill="#34A853"
                          />
                          <path
                            d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                            fill="#FBBC04"
                          />
                          <path
                            d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                            fill="#EA4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_40">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      {isSigningIn ? "Signing In..." : "Connect with Google"}
                    </button>
    
                    {/* Divider */}
    
                    <div className="my-4 flex items-center w-80 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
                      <p className="mx-4 mb-0 text-center font-semibold text-gray-900">
                        OR
                      </p>
                    </div>
    
                    {/* Email input */}
                    <div className="mb-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="mt-1 p-3 block w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
    
                    {/* Password input */}
                    <div className="mb-6">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="mt-1 p-3 block w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    {errorMessage && (
                      <span className="text-red-600 font-bold">{errorMessage}</span>
                    )}
    
                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSigningIn}
                      className="w-80 inline-block rounded-full text-black bg-blue-400 hover:bg-blue-300 px-7 pb-3 pt-3 text-sm font-medium leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      {isSigningIn ? "Signing In..." : "Sign In"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Login