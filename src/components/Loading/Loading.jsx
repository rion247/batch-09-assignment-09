import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
    return (
        <div className="w-full h-full bg-neutral-100 flex justify-center items-center">

            <RingLoader color="#F44336" size={150} />


        </div>
    );
};

export default Loading;