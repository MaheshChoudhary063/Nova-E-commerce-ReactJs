// import heroSection from "../../assets/homeSection.jpg";
// const HeroSection = () => {
//   return (
//     <div>
//       <img
//         className="h-95 w-full lg:h-100 lg:w-full"
//         // src="https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?s=612x612&w=0&k=20&c=qG_9JB9ll4P5to97_HVxzMqhhzF0Gi1nWM_hNeiotbk="
//         // src="https://devknus.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feeee8099-a731-4be4-b949-97588572fb6b%2Faf556a00-6601-4a15-8931-dab16ebd5981%2FUntitled.png?table=block&id=4ec2cb9b-b4a9-4de8-8195-725a3a795de5&spaceId=eeee8099-a731-4be4-b949-97588572fb6b&width=2000&userId=&cache=v2"
//         // src="https://i.pinimg.com/564x/7e/37/84/7e378496e3b64ded14e07ccafa478863.jpg"
//         // src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632371.jpg&fm=jpg"
//         // src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632397.jpg&fm=jpg"
//         src="heroSection"
//         alt="img"
//       />
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import heroSection from "../../assets/homeSection.jpg";
import mahesh from '../../assets/mahesh.jpg'

const HeroSection = () => {
  return (
    <div className="relative w-full lg:w-full">
      <img
        className="h-95 w-full lg:h-100 lg:w-full"
        src={mahesh}
        alt="Hero section"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-8 bg-opacity-50 bg-white">
        <h1 className="text-gray-800 text-4xl lg:text-6xl font-bold">
          Welcome to Nova!
        </h1>
        <p className="text-gray-600 text-xl lg:text-2xl mt-4">
          Experience Innovation - Fast Delivery, Latest Gadgets!
        </p>
        {/* Button */}
        <Link to="/allproduct">
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;



