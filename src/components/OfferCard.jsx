import { CLOUDINARY_IMG_URL } from "../constants/AppConstants";


const OfferCard = ({ offer }) => {
  return (
    <div className="mt-2 p-1 md:p-5 md:mt-0 hover:scale-95 ease-in-out duration-300 ">
      <img
        src={CLOUDINARY_IMG_URL + offer?.imageId}
        alt=""
        className="rounded-2xl object-cover shadow-sm md:shadow-lg"
      />
    </div>
  );
};

export default OfferCard;
