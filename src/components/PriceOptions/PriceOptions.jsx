import React from 'react';

    import SinglePriceOption from '../SinglePriceOption/SinglePriceOption';
const PriceOptions = () => {

 const PriceOptions =   [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Open gym access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Open gym access",
            "Access to group classes",
            "1 free personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 69.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free Wi-Fi",
            "Open gym access",
            "Access to group classes",
            "4 personal training sessions per month",
            "Access to spa and sauna",
            "Free nutrition consultation"
          ]
        },
      ]
    return (
        <div>
            <h2 className='text-5xl text-center font-bold'>Best Prices</h2>
            <div className="grid grid-cols-3 gap-6 p-10">
            {
                PriceOptions.map(singleOptions => <SinglePriceOption key={singleOptions.id} singleOption={singleOptions}></SinglePriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;