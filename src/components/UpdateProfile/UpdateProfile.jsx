import { Helmet } from 'react-helmet';
import NavBar from '../NavBar/NavBar';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const UpdateProfile = () => {

    const { profileUpdater } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const { yourName, photoURL } = data;

        profileUpdater(yourName, photoURL)
            .then(() => {
                toast('Profile updated!');
            }).catch((error) => {
                console.log('An error occurred', error);
            });

    }

    return (
        <div>
            <Helmet>
                <title>Modern Living | Update Profile Page</title>
            </Helmet>

            <NavBar></NavBar>

            <div className='flex items-center justify-center'>

                <div className="w-full mx-auto max-w-80 md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-md sm:p-8 text-gray-900">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mt-4 lg:mt-6 xl:mt-8 pb-4 md:pb-6 lg:pb-8 xl:pb-12 mb-12 border-b border-b-neutral-300">Upddate Your Profile</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='mb-3 md:mb-4 lg:mb-5 xl:mb-6'>

                        <div className="mt-1 md:mt-2 lg:mt-3 xl:mt-4 mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                            <label htmlFor="yourName" className="block text-base md:text-lg xl:text-xl font-semibold mb-4">Your Full Name</label>
                            <input type="text" name="yourName" placeholder="Enter Your Full Name" className="w-full p-5 border rounded-md border-neutral-200 text-neutral-500" {...register("yourName", { required: true })} />
                            {errors.yourName && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className="mt-1 md:mt-2 lg:mt-3 xl:mt-4 mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                            <label htmlFor="photoURL" className="block text-base md:text-lg xl:text-xl font-semibold mb-4">Your Photo URL</label>
                            <input type="text" name="photoURL" placeholder="Enter Your Photo URL" className="w-full p-5 border rounded-md border-neutral-200 text-neutral-500" {...register("photoURL", { required: true })} />
                            {errors.photoURL && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <button type='submit' className="w-full p-3 md:p-4 xl:p-5 text-base md:text-lg xl:text-xl font-semibold rounded-md bg-red-500 hover:bg-red-600 text-white">Update Now</button>

                    </form>

                </div>

            </div>

            <ToastContainer />

        </div>
    );
};

export default UpdateProfile;