import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines=[],avgRating,deliveryTime,isOpen=false}=resData?.info||{};
    return (
      <div
        className="m-1 p-4 w-52 rounded-lg hover:w-60 ease-in-out duration-100"
        style={{
          backgroundColor: "lightgray",
          border: "1px solid gray",
        }}
      >
        <img
          className="meghana "
          src={
            CDN_URL
            +
            cloudinaryImageId
          }
          alt={name}
        />
        <h3 className="font-bold py-4 text-l">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>
          {avgRating + " stars"} {deliveryTime} minutes
        </h4>
      </div>
    );
    //higher order component
    //these are pure function, we will not change the behaviour of them in any way but enhance
  };
      export const withPromotedLabel=(RestrauntCard)=>{
        return (props)=>{
          return(
          <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">isOpen</label>
          <RestrauntCard {...props} />
        </div>
        )
        
      }
    }
  export default RestrauntCard