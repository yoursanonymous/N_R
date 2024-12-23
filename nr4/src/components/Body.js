import RestrauntCard from "./RestrauntCard";
import React from "react";
import ReactDOM from "react-dom/client";
import {useState }from "react"
import resObj from "../utils/mockData";

const Body = () => {
    //create a local state variable
    const [listOfRestraunt,setListOfRestraunt]=useState(resObj);//this is array destructuring
    //can also write it like 
    //const arr=useState(resObj)
    //const listOfRestarunt=arr[0];
    //const setListOf/rstraubnt
    //create normal js varisble
    // let listOfRestraunt=[];
    let listOfRestrauntJS=[
        {
            info: {
              id: "577119",
              name: "Domino's Pizza",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/44f6438d-4ece-463f-a7e3-7e20e25d8f7e_577119.jpg",
              locality: "Block B",
              areaName: "Shalimar Garden",
              costForTwo: "₹400 for two",
              cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
              avgRating: 4.5,
              parentId: "2456",
              avgRatingString: "4.4",
              totalRatingsString: "1.3K+",
              sla: {
                deliveryTime: 25,
                lastMileTravel: 0.3,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "0.3 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              
              aggregatedDiscountInfoV3: {
                header: "₹75 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
              },
            },
            
          },
          {
            info: {
              id: "32128",
              name: "Burger King",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/6c9eafb6-21eb-43df-a6e6-c48087a4cd0a_32128.jpg",
              locality: "Grand Trunk Road",
              areaName: "Jhilmil Colony",
              costForTwo: "₹350 for two",
              cuisines: ["Burgers", "American"],
              avgRating: 4.3,
              parentId: "166",
              avgRatingString: "4.3",
              totalRatingsString: "47K+",
              sla: {
                deliveryTime: 30,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
            
              aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
              },
            
          }
        },
          {
            info: {
              id: "254022",
              name: "McDonald's",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/369e0523-7980-47d9-8cff-a7dbabf17e3d_254022.JPG",
              locality: "Grand Trunk Road",
              areaName: "Dilshad Gardens",
              costForTwo: "₹400 for two",
              cuisines: ["American"],
              avgRating: 4.3,
              parentId: "630",
              avgRatingString: "4.3",
              totalRatingsString: "17K+",
              sla: {
                deliveryTime: 31,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-12-22 04:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                    description: "Delivery!",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "Delivery!",
                          imageId: "Rxawards/_CATEGORY-Burger.png",
                        },
                      },
                    ],
                  },
                  textBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹49",
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "--",
                },
              },
              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {
              context: "seo-data-c38c1e6e-6f3c-461b-b860-2fae65abdfe5",
            },
            cta: {
              link: "https://www.swiggy.com/city/noida/mcdonalds-grand-trunk-road-dilshad-gardens-rest254022",
              type: "WEBLINK",
            },
          },
          {
            info: {
              id: "557552",
              name: "KFC",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9ffb5142-415c-444a-9573-4035052adb34_557552.JPG",
              locality: "Grand Trunk Road",
              areaName: "Dilshad Gardens",
              costForTwo: "₹400 for two",
              cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
              avgRating: 4.2,
              parentId: "547",
              avgRatingString: "4.2",
              totalRatingsString: "3.2K+",
              sla: {
                deliveryTime: 26,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-12-22 05:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                    description: "Delivery!",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "Delivery!",
                          imageId: "Rxawards/_CATEGORY-Burger.png",
                        },
                      },
                    ],
                  },
                  textBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "--",
                },
              },
              ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {
              context: "seo-data-c38c1e6e-6f3c-461b-b860-2fae65abdfe5",
            },
            cta: {
              link: "https://www.swiggy.com/city/noida/kfc-grand-trunk-road-dilshad-gardens-rest557552",
              type: "WEBLINK",
            },
          },
    ];

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" 
                onClick={()=>{
                setListOfRestraunt();
                const filteredList=listOfRestraunt.filter(
                    (res)=>res.info.avgRating>4.5
                );
                setListOfRestraunt(filteredList)
            }}
            // onMouseOver={}
            >
                Top rated restraunt
            </button>
        </div>
        <div className="search">search</div>
        <div className="res-conatiner">
          {
            listOfRestraunt.map(restraunt=><RestrauntCard key={restraunt.info.id}resData={restraunt}/>)
          }
        </div>
      </div>
    );
  };
  export default Body