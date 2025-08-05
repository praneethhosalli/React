import Res_card from "./Res_card";
import reslist from "../../utils/mockdata";

// const reslist = [
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "726147",
//                                             "name": "Bakingo",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/0c6264f7-050e-4ebf-afa4-5c41f9ee9c13_726147.JPG",
//                                             "locality": "Dilsukh Nagar",
//                                             "areaName": "Saroornagar",
//                                             "costForTwo": "₹299 for two",
//                                             "cuisines": [
//                                                 "Bakery",
//                                                 "Desserts",
//                                                 "Beverages",
//                                                 "Snacks"
//                                             ],
//                                             "avgRating": 4.6,
//                                             "parentId": "3818",
//                                             "avgRatingString": "4.6",
//                                             "totalRatingsString": "9.1K+",
//                                             "sla": {
//                                                 "deliveryTime": 44,
//                                                 "lastMileTravel": 7.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "40-45 mins",
//                                                 "lastMileTravelString": "7.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 00:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "₹151 OFF",
//                                                 "subHeader": "ABOVE ₹699",
//                                                 "discountTag": "FLAT DEAL"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.0",
//                                                     "ratingCount": "52"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/bakingo-dilsukh-nagar-saroornagar-rest726147",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "362224",
//                                             "name": "Natural Ice Cream",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/e0b0429b-0942-497d-9b8a-200a4e64a79b_362224.jpg",
//                                             "locality": "Vanastalipuram",
//                                             "areaName": "Shirdi Nagar",
//                                             "costForTwo": "₹150 for two",
//                                             "cuisines": [
//                                                 "Ice Cream",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.7,
//                                             "veg": true,
//                                             "parentId": "2093",
//                                             "avgRatingString": "4.7",
//                                             "totalRatingsString": "981",
//                                             "sla": {
//                                                 "deliveryTime": 33,
//                                                 "lastMileTravel": 4.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "4.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "20% OFF",
//                                                 "subHeader": "UPTO ₹50"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/natural-ice-cream-vanastalipuram-shirdi-nagar-rest362224",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "534802",
//                                             "name": "Pista House",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/13/98f4f91a-a082-414e-b794-c8159ab14cfb_534802.jpg",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹500 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "North Indian",
//                                                 "Chinese",
//                                                 "Bakery",
//                                                 "Kebabs",
//                                                 "Desserts",
//                                                 "Seafood",
//                                                 "Ice Cream",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "parentId": "1732",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "14K+",
//                                             "sla": {
//                                                 "deliveryTime": 29,
//                                                 "lastMileTravel": 2.7,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "2.7 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Rxawards/_CATEGORY-Biryani.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "aggregatedDiscountInfoV2": {},
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.1",
//                                                     "ratingCount": "7.9K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/pista-house-vanasthalipuram-rest534802",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "1030923",
//                                             "name": "Thalaiva Biryani",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/8699d186-2626-4154-a175-1d2df298de8a_1030923.JPG",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Shirdi Nagar",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "Mughlai",
//                                                 "Lucknowi",
//                                                 "Hyderabadi",
//                                                 "Kebabs",
//                                                 "Desserts",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 3.6,
//                                             "parentId": "582792",
//                                             "avgRatingString": "3.6",
//                                             "totalRatingsString": "32",
//                                             "sla": {
//                                                 "deliveryTime": 47,
//                                                 "lastMileTravel": 4.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "45-50 mins",
//                                                 "lastMileTravelString": "4.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹88"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/thalaiva-biryani-vanasthalipuram-shirdi-nagar-rest1030923",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "750361",
//                                             "name": "Daily Kitchen - Everyday Homely Meals",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/7d0b33f9-6229-483d-87f9-b26a935ec4c8_750361.jpg",
//                                             "locality": "Dwarakamai Nagar Colony",
//                                             "areaName": "Vanashthalipuram",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "Home Food",
//                                                 "Indian",
//                                                 "North Indian",
//                                                 "Thalis"
//                                             ],
//                                             "avgRating": 4.5,
//                                             "parentId": "444382",
//                                             "avgRatingString": "4.5",
//                                             "totalRatingsString": "982",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹99"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/daily-kitchen-everyday-homely-meals-dwarakamai-nagar-colony-vanashthalipuram-rest750361",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "355757",
//                                             "name": "Grameen Kulfi",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/0d951c2a-2a99-4ffc-ba21-44d9c465fd67_355757.jpg",
//                                             "locality": "Magic Spoons Enterprises",
//                                             "areaName": "Kothapet",
//                                             "costForTwo": "₹120 for two",
//                                             "cuisines": [
//                                                 "Ice Cream",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.7,
//                                             "veg": true,
//                                             "parentId": "12175",
//                                             "avgRatingString": "4.7",
//                                             "totalRatingsString": "1.9K+",
//                                             "sla": {
//                                                 "deliveryTime": 43,
//                                                 "lastMileTravel": 9.3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "40-45 mins",
//                                                 "lastMileTravelString": "9.3 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 01:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                                         "description": "pureveg"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "pureveg",
//                                                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹148"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/grameen-kulfi-magic-spoons-enterprises-kothapet-rest355757",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "700128",
//                                             "name": "Hotel Tulips Grand",
//                                             "cloudinaryImageId": "fb3be3440f81b88157f50c9485e8c127",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Turkayamjal",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "Chinese",
//                                                 "Tandoor",
//                                                 "Seafood",
//                                                 "South Indian",
//                                                 "Desserts",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 4.4,
//                                             "parentId": "457553",
//                                             "avgRatingString": "4.4",
//                                             "totalRatingsString": "9.9K+",
//                                             "sla": {
//                                                 "deliveryTime": 50,
//                                                 "lastMileTravel": 8.7,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "45-50 mins",
//                                                 "lastMileTravelString": "8.7 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:30:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "10% OFF",
//                                                 "subHeader": "UPTO ₹40"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.4",
//                                                     "ratingCount": "4.8K+"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/hotel-tulips-grand-vanasthalipuram-turkayamjal-rest700128",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "919387",
//                                             "name": "Vasireddy Swagruha Foods",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/fb0cf58a-52fa-4208-af72-587555b126c4_919387.JPG",
//                                             "locality": "Sai Nagar",
//                                             "areaName": "Kothapet & Dilsukhnagar",
//                                             "costForTwo": "₹350 for two",
//                                             "cuisines": [
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "parentId": "951",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "199",
//                                             "sla": {
//                                                 "deliveryTime": 38,
//                                                 "lastMileTravel": 7.2,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "35-40 mins",
//                                                 "lastMileTravelString": "7.2 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 22:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "10% OFF",
//                                                 "subHeader": "UPTO ₹40"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/vasireddy-swagruha-foods-sai-nagar-kothapet-and-dilsukhnagar-rest919387",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "414944",
//                                             "name": "Raju Gari Biryani",
//                                             "cloudinaryImageId": "u1i7krbx8zclwkd256y4",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹200 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "Snacks",
//                                                 "Chinese",
//                                                 "Mughlai"
//                                             ],
//                                             "avgRating": 3.7,
//                                             "parentId": "165947",
//                                             "avgRatingString": "3.7",
//                                             "totalRatingsString": "6.6K+",
//                                             "sla": {
//                                                 "deliveryTime": 38,
//                                                 "lastMileTravel": 4.7,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "35-40 mins",
//                                                 "lastMileTravelString": "4.7 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 04:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹99"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/raju-gari-biryani-vanasthalipuram-rest414944",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "643798",
//                                             "name": "WeFit - Protein Bowls, Salads & Sandwiches",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/cda9eb25-f4e8-4c77-878f-19e98a640bc1_643798.jpg",
//                                             "locality": "Dwarakamai Nagar Colony",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "Healthy Food",
//                                                 "Salads",
//                                                 "Keto",
//                                                 "Snacks"
//                                             ],
//                                             "avgRating": 4.7,
//                                             "parentId": "355285",
//                                             "avgRatingString": "4.7",
//                                             "totalRatingsString": "1.5K+",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
//                                                         "description": "Delivery!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Delivery!",
//                                                                     "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹145"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/wefit-protein-bowls-salads-and-sandwiches-dwarakamai-nagar-colony-vanasthalipuram-rest643798",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "681576",
//                                             "name": "LeanCrust Pizza- ThinCrust Experts",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/41360449-84bf-4a5c-a3aa-8b645ed885cf_681576.jpg",
//                                             "locality": "Dwarakamai Nagar Colony",
//                                             "areaName": "Vanashthalipuram",
//                                             "costForTwo": "₹300 for two",
//                                             "cuisines": [
//                                                 "Pizzas",
//                                                 "Italian",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.6,
//                                             "parentId": "11216",
//                                             "avgRatingString": "4.6",
//                                             "totalRatingsString": "1.6K+",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹99"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-8df6bd11-a86b-41af-a2b9-16bec84540bd"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-dwarakamai-nagar-colony-vanashthalipuram-rest681576",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },  
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "616941",
//                                             "name": "CakeZone Patisserie",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/2/9408ca3b-d3b3-414a-9090-7928b7fc529c_616941.jpg",
//                                             "locality": "SHIVALAYAM TEMPLE ROAD",
//                                             "areaName": "Shanti Nagar",
//                                             "costForTwo": "₹200 for two",
//                                             "cuisines": [
//                                                 "Bakery",
//                                                 "Desserts",
//                                                 "Sweets",
//                                                 "Ice Cream"
//                                             ],
//                                             "avgRating": 4.4,
//                                             "parentId": "7003",
//                                             "avgRatingString": "4.4",
//                                             "totalRatingsString": "2.3K+",
//                                             "sla": {
//                                                 "deliveryTime": 34,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "60% OFF",
//                                                 "subHeader": "UPTO ₹120"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         }
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "84832",
//                                             "name": "Mithaiwala",
//                                             "cloudinaryImageId": "dm0qaqmiwqv6napryz9q",
//                                             "locality": "LB Nagar",
//                                             "areaName": "Golden Tobaco Colony",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Sweets",
//                                                 "Desserts",
//                                                 "Snacks",
//                                                 "Chaat"
//                                             ],
//                                             "avgRating": 4.4,
//                                             "veg": true,
//                                             "parentId": "2180",
//                                             "avgRatingString": "4.4",
//                                             "totalRatingsString": "6.4K+",
//                                             "sla": {
//                                                 "deliveryTime": 35,
//                                                 "lastMileTravel": 3.7,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "35-40 mins",
//                                                 "lastMileTravelString": "3.7 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 21:45:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "20% OFF",
//                                                 "subHeader": "UPTO ₹50"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/mithaiwala-lb-nagar-golden-tobaco-colony-rest84832",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "977911",
//                                             "name": "The Ghee Khichdi Project",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/23/400b7b07-b357-4da2-9826-f5cbf4dec3b3_977911.jpg",
//                                             "locality": "Dwarakamai Nagar Colony",
//                                             "areaName": "Vanashthalipuram",
//                                             "costForTwo": "₹200 for two",
//                                             "cuisines": [
//                                                 "North Indian"
//                                             ],
//                                             "avgRating": 4,
//                                             "veg": true,
//                                             "parentId": "542647",
//                                             "avgRatingString": "4.0",
//                                             "totalRatingsString": "43",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                                                         "description": "pureveg"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "pureveg",
//                                                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹125"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/the-ghee-khichdi-project-dwarakamai-nagar-colony-vanashthalipuram-rest977911",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "616239",
//                                             "name": "Bhatti Chicken - Grilled, NOT Fried!",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/9668424e-8f84-487f-afba-569dec3655dc_616239.jpg",
//                                             "locality": "L B NAGAR",
//                                             "areaName": "Vanashthalipuram",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "North Indian",
//                                                 "Snacks",
//                                                 "Fast Food",
//                                                 "Tandoor"
//                                             ],
//                                             "avgRating": 4.5,
//                                             "parentId": "355286",
//                                             "avgRatingString": "4.5",
//                                             "totalRatingsString": "154",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹125"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/bhatti-chicken-grilled-not-fried-l-b-nagar-vanashthalipuram-rest616239",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "437268",
//                                             "name": "Mealful Rolls - India's Biggest Rolls",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c6d98b17-67f6-4ad0-95a8-cf40554297fb_437268.JPG",
//                                             "locality": "Dwarakamai Nagar Colony",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "Fast Food",
//                                                 "Snacks",
//                                                 "North Indian",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.5,
//                                             "parentId": "10390",
//                                             "avgRatingString": "4.5",
//                                             "totalRatingsString": "445",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹99"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/mealful-rolls-indias-biggest-rolls-dwarakamai-nagar-colony-vanasthalipuram-rest437268",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "437267",
//                                             "name": "Itminaan Matka Biryani - Slow Cooked",
//                                             "cloudinaryImageId": "e165225d26130103fecf1c40f5dc3669",
//                                             "locality": "Vanashthalipuram",
//                                             "areaName": "Dwarakamai Nagar Colony",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "North Indian",
//                                                 "Mughlai"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "parentId": "107673",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "413",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹199"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/itminaan-matka-biryani-slow-cooked-vanashthalipuram-dwarakamai-nagar-colony-rest437267",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "622166",
//                                             "name": "MOJO Pizza - 2X Toppings",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/b225af30-b2c3-4cda-bbe9-3d70f29bf883_622166.jpg",
//                                             "locality": "LB Nagar Circle",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹250 for two",
//                                             "cuisines": [
//                                                 "Pizzas",
//                                                 "Italian",
//                                                 "Fast Food",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.6,
//                                             "parentId": "11329",
//                                             "avgRatingString": "4.6",
//                                             "totalRatingsString": "2.1K+",
//                                             "sla": {
//                                                 "deliveryTime": 25,
//                                                 "lastMileTravel": 2.5,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "20-30 mins",
//                                                 "lastMileTravelString": "2.5 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹99"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/mojo-pizza-2x-toppings-lb-nagar-circle-vanasthalipuram-rest622166",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "944546",
//                                             "name": "Bachelor's kitchen",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/94c51cdc-3163-4aeb-baad-d5e88e791bf0_944546.jpg",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹300 for two",
//                                             "cuisines": [
//                                                 "Biryani"
//                                             ],
//                                             "avgRating": 3.8,
//                                             "parentId": "1832",
//                                             "avgRatingString": "3.8",
//                                             "totalRatingsString": "<3",
//                                             "sla": {
//                                                 "deliveryTime": 34,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "30-35 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "aggregatedDiscountInfoV2": {},
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/bachelors-kitchen-vanasthalipuram-rest944546",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "913604",
//                                             "name": "Chickpet Donne Biryani House",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/a7bd1d69-63d3-43e3-bb5d-4c63383f6604_913604.jpg",
//                                             "locality": "DPS Rd",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Biryani",
//                                                 "South Indian"
//                                             ],
//                                             "avgRating": 4.2,
//                                             "parentId": "5634",
//                                             "avgRatingString": "4.2",
//                                             "totalRatingsString": "542",
//                                             "sla": {
//                                                 "deliveryTime": 30,
//                                                 "lastMileTravel": 1.2,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "1.2 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 01:05:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "android/static-assets/icons/big_rx.png",
//                                                         "description": "bolt!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "bolt!",
//                                                                     "imageId": "android/static-assets/icons/big_rx.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "FREE ITEM"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/chickpet-donne-biryani-house-dps-rd-vanasthalipuram-rest913604",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "881609",
//                                             "name": "Kritunga",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/11fc8c70-92d2-427f-ad74-a980dbed9fbb_881609.jpg",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Vanasthalipuram",
//                                             "costForTwo": "₹500 for two",
//                                             "cuisines": [
//                                                 "Chinese",
//                                                 "Indian",
//                                                 "Tandoor"
//                                             ],
//                                             "avgRating": 3.9,
//                                             "parentId": "572",
//                                             "avgRatingString": "3.9",
//                                             "totalRatingsString": "1.8K+",
//                                             "sla": {
//                                                 "deliveryTime": 28,
//                                                 "lastMileTravel": 1.4,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "1.4 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:30:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "android/static-assets/icons/big_rx.png",
//                                                         "description": "bolt!"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "bolt!",
//                                                                     "imageId": "android/static-assets/icons/big_rx.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹39"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "4.1",
//                                                     "ratingCount": "953"
//                                                 },
//                                                 "source": "GOOGLE",
//                                                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/kritunga-vanasthalipuram-rest881609",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "960364",
//                                             "name": "Sri Raghavendra Hotel",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/22/9322aca7-07c5-480d-a406-e36c878363c2_960364.jpg",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Balapur",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "South Indian"
//                                             ],
//                                             "avgRating": 4.4,
//                                             "veg": true,
//                                             "parentId": "194261",
//                                             "avgRatingString": "4.4",
//                                             "totalRatingsString": "162",
//                                             "sla": {
//                                                 "deliveryTime": 46,
//                                                 "lastMileTravel": 9.1,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "45-50 mins",
//                                                 "lastMileTravelString": "9.1 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 22:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹49"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/sri-raghavendra-hotel-vanasthalipuram-balapur-rest960364",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "616950",
//                                             "name": "Cheesecakes By CakeZone",
//                                             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/3169d3d2-7db8-4ea1-b5cf-5246c976a9c5_616950.jpg",
//                                             "locality": "BESIDE COMMUNITY HALL",
//                                             "areaName": "Shanti Nagar",
//                                             "costForTwo": "₹200 for two",
//                                             "cuisines": [
//                                                 "Bakery",
//                                                 "Desserts"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "veg": true,
//                                             "parentId": "348057",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "123",
//                                             "sla": {
//                                                 "deliveryTime": 36,
//                                                 "lastMileTravel": 3,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "35-40 mins",
//                                                 "lastMileTravelString": "3.0 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "imageBadges": [
//                                                     {
//                                                         "imageId": "newg.png",
//                                                         "description": "Gourmet"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "Gourmet",
//                                                                     "imageId": "newg.png"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     },
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹66"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/cheesecakes-by-cakezone-beside-community-hall-shanti-nagar-rest616950",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "566468",
//                                             "name": "Faasos' Signature Wraps & Rolls",
//                                             "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
//                                             "locality": "Vanasthalipuram",
//                                             "areaName": "Shirdi Nagar",
//                                             "costForTwo": "₹350 for two",
//                                             "cuisines": [
//                                                 "Fast Food",
//                                                 "Snacks",
//                                                 "North Indian",
//                                                 "Desserts",
//                                                 "Beverages"
//                                             ],
//                                             "avgRating": 3.6,
//                                             "parentId": "340366",
//                                             "avgRatingString": "3.6",
//                                             "totalRatingsString": "113",
//                                             "sla": {
//                                                 "deliveryTime": 46,
//                                                 "lastMileTravel": 4.9,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "45-50 mins",
//                                                 "lastMileTravelString": "4.9 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-04 23:59:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {
//                                                 "textExtendedBadges": [
//                                                     {
//                                                         "iconId": "guiltfree/GF_Logo_android_3x",
//                                                         "shortDescription": "options available",
//                                                         "fontColor": "#7E808C"
//                                                     }
//                                                 ]
//                                             },
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {
//                                                         "badgeObject": [
//                                                             {
//                                                                 "attributes": {
//                                                                     "description": "",
//                                                                     "fontColor": "#7E808C",
//                                                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                                                     "shortDescription": "options available"
//                                                                 }
//                                                             }
//                                                         ]
//                                                     }
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹129"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/faasos-signature-wraps-and-rolls-vanasthalipuram-shirdi-nagar-rest566468",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     },
//                                     {
//                                         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//                                         "info": {
//                                             "id": "807944",
//                                             "name": "Makers of milkshakes",
//                                             "cloudinaryImageId": "e106ec9fbfd2599042ede95297c7aa25",
//                                             "locality": "Vanastalipuram",
//                                             "areaName": "LB Nagar",
//                                             "costForTwo": "₹400 for two",
//                                             "cuisines": [
//                                                 "Beverages",
//                                                 "Desserts",
//                                                 "Ice Cream"
//                                             ],
//                                             "avgRating": 4.3,
//                                             "veg": true,
//                                             "parentId": "5632",
//                                             "avgRatingString": "4.3",
//                                             "totalRatingsString": "259",
//                                             "sla": {
//                                                 "deliveryTime": 27,
//                                                 "lastMileTravel": 1.8,
//                                                 "serviceability": "SERVICEABLE",
//                                                 "slaString": "25-30 mins",
//                                                 "lastMileTravelString": "1.8 km",
//                                                 "iconType": "ICON_TYPE_EMPTY"
//                                             },
//                                             "availability": {
//                                                 "nextCloseTime": "2025-08-05 02:00:00",
//                                                 "opened": true
//                                             },
//                                             "badges": {},
//                                             "isOpen": true,
//                                             "type": "F",
//                                             "badgesV2": {
//                                                 "entityBadges": {
//                                                     "imageBased": {},
//                                                     "textBased": {},
//                                                     "textExtendedBadges": {}
//                                                 }
//                                             },
//                                             "aggregatedDiscountInfoV3": {
//                                                 "header": "ITEMS",
//                                                 "subHeader": "AT ₹139"
//                                             },
//                                             "orderabilityCommunication": {
//                                                 "title": {},
//                                                 "subTitle": {},
//                                                 "message": {},
//                                                 "customIcon": {}
//                                             },
//                                             "differentiatedUi": {
//                                                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                                                 "differentiatedUiMediaDetails": {
//                                                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                                                     "lottie": {},
//                                                     "video": {}
//                                                 }
//                                             },
//                                             "reviewsSummary": {},
//                                             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                                             "restaurantOfferPresentationInfo": {},
//                                             "externalRatings": {
//                                                 "aggregatedRating": {
//                                                     "rating": "--"
//                                                 }
//                                             },
//                                             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//                                         },
//                                         "analytics": {
//                                             "context": "seo-data-adde92bc-21ca-47e0-826b-2df5e3ab3893"
//                                         },
//                                         "cta": {
//                                             "link": "https://www.swiggy.com/city/hyderabad/makers-of-milkshakes-vanastalipuram-lb-nagar-rest807944",
//                                             "text": "RESTAURANT_MENU",
//                                             "type": "WEBLINK"
//                                         },
//                                         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//                                     }
//                         ]


const Body = ()=>(
    <div className="Body">
        <div className="Search-bar">
            Search
        </div>

        <div className="res-container">
            {/* <Res_card resdata={reslist[0]} />
            <Res_card resdata={reslist[1]} />
            <Res_card resdata={reslist[2]} />
            <Res_card resdata={reslist[3]} />
            <Res_card resdata={reslist[4]} />
            <Res_card resdata={reslist[5]} />
            <Res_card resdata={reslist[6]} />
            <Res_card resdata={reslist[7]} />
            <Res_card resdata={reslist[8]} />
            <Res_card resdata={reslist[9]} />
            <Res_card resdata={reslist[10]} />
            <Res_card resdata={reslist[11]} />
            <Res_card resdata={reslist[12]} />
            <Res_card resdata={reslist[13]} />
            <Res_card resdata={reslist[14]} />
            <Res_card resdata={reslist[15]} />
            <Res_card resdata={reslist[16]} /> */}

            {
                reslist.map((i) => (
                <Res_card key ={i.info.id} resdata={i} />))
            }
        
        </div>

    </div>
)

export default Body;