import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
    return (
        <div className="w-full h-full bg-neutral-100 flex justify-center items-center z-10 absolute">
            <div><RingLoader color="#F44336" size={75} /></div>
        </div>
    );
};

export default Loading;