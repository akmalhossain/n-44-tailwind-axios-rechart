import Button from "../Button/Button";
import SingleFeature from "../SingleFeature/SingleFeature";
import { CiHeart } from "react-icons/ci";


const SinglePriceOption = ({singleOption}) => {
    const {id, name, price, features, }=singleOption;
    return (
        <div className="bg-blue-900 text-white rounded-xl hover:bg-slate-800 p-6 space-y-6 flex flex-col">
            <h1 className="py-10 text-center"><span className="text-5xl">{price}</span><span className="text-base">/mon</span></h1>
            <h4 className="text-xl">{name}</h4>
            <div className="flex-grow">
            {
                features.map((singleFeature, index)=><SingleFeature key={index} singleFeature={singleFeature}></SingleFeature>)
            }
            </div>
            <Button></Button>
        </div>
    );
};

export default SinglePriceOption;