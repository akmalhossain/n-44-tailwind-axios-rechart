import { CiHeart } from "react-icons/ci";


const SingleFeature = ({singleFeature}) => {

    return (
        <div>
            <p className="flex gap-2 items-center flex-grow"><CiHeart />
            {singleFeature}</p>
        </div>
    );
};

export default SingleFeature;