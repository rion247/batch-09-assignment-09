import { Helmet } from 'react-helmet';
import NavBar from '../NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const [showPassword, SetShowPassword] = useState(false);

    const { signInWithEmail, createGitHubLogin, createGoogleLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email);
        console.log(password);

        signInWithEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    const handleGoogleLoginButton = () => {
        createGoogleLogin()
            .then((result) => {
                console.log(result.user);
                toast('Login Successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    const handleGitHubLoginButton = () => {
        createGitHubLogin()
            .then((result) => {
                console.log(result.user);
                toast('Login Successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className='font-poppins'>

            <Helmet>
                <title>Modern Living | Login Page</title>
            </Helmet>

            <NavBar></NavBar>

            <div data-aos="fade-up" className='flex items-center justify-center' data-aos-duration="3000">

                <div className="w-full mx-auto max-w-80 md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-md sm:p-8 text-gray-900">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-4 lg:mt-6 xl:mt-8 pb-4 md:pb-6 lg:pb-8 xl:pb-12 mb-12 border-b border-b-neutral-300">Please Login to Your Account</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='mb-3 md:mb-4 lg:mb-5 xl:mb-6'>

                        <div className="mt-1 md:mt-2 lg:mt-3 xl:mt-4 mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                            <label htmlFor="email" className="block text-base md:text-lg xl:text-xl font-semibold mb-4">Email Address</label>
                            <input type="email" name="email" placeholder="Enter Your Email Address" className="w-full p-5 border rounded-md border-neutral-200 text-neutral-500" {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className='relative'>
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-base md:text-lg xl:text-xl font-semibold mb-4">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs md:text-sm xl:text-base hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input type={showPassword ? "text" : "password"}
                                name="password" id="password" placeholder="Enter Your Password" className="w-full p-5 border rounded-md border-neutral-200 text-neutral-500" {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}

                            <span onClick={() => SetShowPassword(!showPassword)} className='absolute text-base lg:text-lg xl:text-xl text-neutral-500 md:top-[70px] xl:top-16 right-4 xl:right-6 cursor-pointer'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>

                        </div>

                        <button type='submit' className="w-full mt-3 md:mt-4 lg:mt-5 xl:mt-6 p-3 md:p-4 xl:p-5 text-base md:text-lg xl:text-xl font-semibold rounded-md bg-red-500 hover:bg-red-600 text-white">Login</button>

                    </form>

                    <div className="flex items-center w-full my-4">
                        <hr className="w-full text-gray-400" />
                        <p className="px-3 text-gray-400">OR</p>
                        <hr className="w-full text-gray-400" />
                    </div>

                    <div className="my-6 space-y-4">

                        <button onClick={handleGoogleLoginButton} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p className='text-base md:text-lg xl:text-xl font-semibold'>Login with Google</p>
                        </button>

                        <button onClick={handleGitHubLoginButton} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                            <p className='text-base md:text-lg xl:text-xl font-semibold'>Login with GitHub</p>
                        </button>

                    </div>

                    <p className='text-base md:text-lg xl:text-xl font-semibold text-center text-neutral-500 mt-6'>Dont Have An Account ? <Link to="/register" className='text-red-500 hover:underline'>Register Now</Link></p>

                </div>

            </div>

        </div>
    );
};

export default LoginPage;