import React from "react"
import ReactDOM from "react-dom/client"



const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                   

                </ul>
            </div>
        </div>
    )
}


const resturantList=[
    {
      "info": {
        "id": "271483",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "VR Mall",
        "areaName": "Krishnarajapura",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "271483",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 8000
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 8000
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-vr-mall-krishnarajapura-bangalore-271483",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "506323",
        "name": "Louis Burger",
        "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
        "locality": "Siddapura",
        "areaName": "Whitefield",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "506323",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 7700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 7700
        },
        "parentId": "22485",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/louis-burger-siddapura-whitefield-bangalore-506323",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23688",
        "name": "McDonald's",
        "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
        "locality": "Marathahalli",
        "areaName": "Brookefield",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "23688",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 5200
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5200
        },
        "parentId": "630",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-marathahalli-brookefield-bangalore-23688",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10866",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Munnekolalu Village",
        "areaName": "Marathahalli",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "10866",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "721",
        "avgRatingString": "3.8",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-munnekolalu-village-marathahalli-bangalore-10866",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "341895",
        "name": "Burger Seigneur",
        "cloudinaryImageId": "k4z46joj5ozirqpyww1z",
        "locality": "Indiranagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹1300 for two",
        "cuisines": [
          "American",
          "Continental",
          "Burgers",
          "Beverages"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "341895",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 8700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 8700
        },
        "parentId": "12095",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 6.9,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "6.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 02:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹899",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "70842",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
        "locality": "Aces Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "70842",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "9696",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-aces-layout-marathahalli-bangalore-70842",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "70845",
        "name": "Indiana Burgers",
        "cloudinaryImageId": "cgdljuememvm2jjxycik",
        "locality": "Aces Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "70845",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "5714",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/indiana-burgers-aces-layout-marathahalli-bangalore-70845",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "502",
        "name": "Kaati Zone Rolls & Wraps",
        "cloudinaryImageId": "uipyyasf5imyhvooj1iy",
        "locality": "Aces Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food",
          "Bengali",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "502",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "248306",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-aces-layout-marathahalli-bangalore-502",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "448415",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "vaqld85fthdbwri54aao",
        "locality": "ACES Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "448415",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "382343",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-aces-layout-marathahalli-bangalore-448415",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "236943",
        "name": "Momoz",
        "cloudinaryImageId": "mja3a2scm2c4er3hkpvk",
        "locality": "Sai Durga Enclave",
        "areaName": "Bellandur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Malaysian"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "236943",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 9000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 9000
        },
        "parentId": "2486",
        "avgRatingString": "3.8",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 7.4,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "7.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/momoz-sai-durga-enclave-bellandur-bangalore-236943",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "78138",
        "name": "Imperio Restaurant",
        "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
        "locality": "kundalahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "South Indian",
          "North Indian",
          "Continental",
          "Desserts",
          "Kerala",
          "Andhra",
          "Beverages",
          "Mughlai",
          "Seafood",
          "Hyderabadi",
          "Healthy Food",
          "Arabian",
          "Biryani",
          "Burgers",
          "Barbecue",
          "Oriental"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "78138",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "5610",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/imperio-restaurant-kundalahalli-marathahalli-bangalore-78138",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "70844",
        "name": "Cupcake Bliss Cake & Desserts",
        "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
        "locality": "ACES Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "70844",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "66732",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-aces-layout-marathahalli-bangalore-70844",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "231485",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Outer Ring Road",
        "areaName": "Bellandur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "231485",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 7000
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 7000
        },
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 5.9,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "5.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 02:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-outer-ring-road-bellandur-bangalore-231485",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "149682",
        "name": "Samosa Party",
        "cloudinaryImageId": "thzhbierhb2qxhqsl0bo",
        "locality": "Munnekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Beverages",
          "Chaat",
          "North Indian",
          "Street Food",
          "Sweets",
          "Desserts",
          "Punjabi",
          "Bakery"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "149682",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3600
        },
        "parentId": "6364",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-14 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "select": true,
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/samosa-party-munnekollal-marathahalli-bangalore-149682",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "744117",
        "name": "GoGreen by Nomad Pizza",
        "cloudinaryImageId": "002ec2739d031ce63ca4dc00282dcdad",
        "locality": "Outer Ring Road",
        "areaName": "Bellandur",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Beverages"
        ],
        "avgRating": 4.8,
        "veg": true,
        "feeDetails": {
          "restaurantId": "744117",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 3600
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3600
        },
        "parentId": "385103",
        "avgRatingString": "4.8",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/gogreen-by-nomad-pizza-outer-ring-road-bellandur-bangalore-744117",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "209764",
        "name": "Third Wave Coffee",
        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
        "locality": "Ambalipura",
        "areaName": "Haralur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Bakery",
          "Continental"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "209764",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 9000
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 9000
        },
        "parentId": "274773",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 7.2,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "7.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/third-wave-coffee-ambalipura-haralur-bangalore-209764",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "720609",
        "name": "Nomad Pizza- Traveller Series",
        "cloudinaryImageId": "a14f952df15d37ac5017519beab18683",
        "locality": "Kadubisanahalli",
        "areaName": "Bellandur Sarjapur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Beverages"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "720609",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "251919",
        "avgRatingString": "4.1",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nomad-pizza-traveller-series-kadubisanahalli-bellandur-sarjapur-bangalore-720609",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "395208",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "hll0sm7xga5krgpgfgpl",
        "locality": "Murgesh Pallya",
        "areaName": "Indiranagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "395208",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 7000
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 7000
        },
        "parentId": "10761",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 5.6,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "5.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 03:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-murgesh-pallya-indiranagar-bangalore-395208",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "427",
        "name": "Hotel Empire",
        "cloudinaryImageId": "vumnivx75awxz9eo1czq",
        "locality": "Indiranagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "427",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 8000
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 8000
        },
        "parentId": "475",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.7,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "6.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹500",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-empire-indiranagar-bangalore-427",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "59067",
        "name": "Samosa Singh",
        "cloudinaryImageId": "77baefd8a5e319c828b4d7dff7260644",
        "locality": "Munekolalla",
        "areaName": "Marathahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Snacks",
          "North Indian",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "59067",
          "fees": [
            {
              "name": "BASE_TIME"
            },
            {
              "name": "BASE_DISTANCE",
              "fee": 4400
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4400
        },
        "parentId": "5639",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-15 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/samosa-singh-munekolalla-marathahalli-bangalore-59067",
        "type": "WEBLINK"
      }
    }
  ]

const RestaurantCard=(props)=>{
    // const RestaurantCard=(resName,cuisin)=>{
const{resData}=props
    console.log(resData)
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+resData?.info?.cloudinaryImageId}></img>
         <h3>{resData?.info?.name}</h3>
         {/* <h3>{resName}</h3> */}

         <h4>{resData?.info?.cuisines.join(' , ')}</h4> 
         <h4>{resData?.info?.avgRating }stars</h4>
         <h4>{resData?.info?.sla?.deliveryTime }min</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">  
<div className="search">
Search
</div>
<div className="res-container">
<RestaurantCard resData={resturantList[0]}/>
<RestaurantCard  resData={resturantList[1]}/>
<RestaurantCard  resData={resturantList[2]}/>
<RestaurantCard  resData={resturantList[3]}/>
<RestaurantCard  resData={resturantList[4]}/>
<RestaurantCard  resData={resturantList[5]}/>
<RestaurantCard  resData={resturantList[6]}/>
<RestaurantCard  resData={resturantList[7]}/>
<RestaurantCard  resData={resturantList[8]}/>
<RestaurantCard  resData={resturantList[9]}/>
<RestaurantCard  resData={resturantList[10]}/>
<RestaurantCard  resData={resturantList[11]}/>
<RestaurantCard  resData={resturantList[12]}/>
<RestaurantCard  resData={resturantList[13]}/>
<RestaurantCard  resData={resturantList[14]}/>
<RestaurantCard  resData={resturantList[15]}/>
<RestaurantCard  resData={resturantList[16]}/>
<RestaurantCard  resData={resturantList[17]}/>

</div>
 </div>
    )
}



const AppLayout=()=>{
    return(
        <div className="app">

<Header/>
<Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
