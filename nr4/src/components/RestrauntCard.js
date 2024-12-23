import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime}=resData?.info;
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "lightgray",
          border: "1px solid gray",
        }}
      >
        <img
          className="meghana"
          src={
            CDN_URL
            +
            cloudinaryImageId
          }
          alt={name}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>
          {avgRating + " stars"} {deliveryTime} minutes
        </h4>
      </div>
    );
  };
  export default RestrauntCard