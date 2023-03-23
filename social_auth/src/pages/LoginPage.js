import React from 'react';
import GoogleOAuthButton from '../components/GoogleOAuthButton';
import FacebookOAuthButton from '../components/FacebookOAuthButton';
import MicrosoftOAuthButton from '../components/MicrosoftOAuthButton';
import COVER_IMAGE from '../assets/cover_image_new.avif';
import {useQuery, useMutation} from "@apollo/client";
import LOGIN_QUERY from "../graphql/Auth/Queries";


function LoginPage() {
    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // const result = useMutation(LOGIN_QUERY, {
        //     variables: {
        //         email: email,
        //         password: password
        //     }
        // })

        // console.log("Login", result)
        // console.log("Login", {email: email, password: password});
    }

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center p-5">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
                {/* Form */}
                <div className="sm:w-1/2 px-8">
                    <h2 className="font-bold text-2xl text-[#03236B]">Login</h2>
                    <p className="text-sm mt-4">If you're already a member login</p>
                    <form className="flex flex-col gap-4" onSubmit={this.handleLogin}>
                        <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Email"/>
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type="password" name="password"
                                   placeholder="Password"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"
                                 className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path
                                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                        </div>

                        <button className="bg-[#03236B] rounded-xl text-white py-2 w-full">
                            Login
                        </button>
                    </form>
                    {/* OR DESIGN */}
                    <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-500"/>
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-500"/>
                    </div>
                    <div className="flex flex-col gap-1 w-full pt-5">
                        <MicrosoftOAuthButton/>
                        <GoogleOAuthButton/>
                        <FacebookOAuthButton/>
                    </div>
                </div>
                <div className="sm:block hidden w-1/2 p-5">
                    <img className="rounded-2xl" src={COVER_IMAGE}/>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;