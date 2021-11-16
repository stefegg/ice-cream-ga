import starsOneHalf from "../assets/stars_1_half.png";
import starsOne from "../assets/stars_1.png";
import starsTwoHalf from "../assets/stars_2_half.png";
import starsTwo from "../assets/stars_2.png";
import starsThreeHalf from "../assets/stars_3_half.png";
import starsThree from "../assets/stars_3.png";
import starsFourHalf from "../assets/stars_4_half.png";
import starsFour from "../assets/stars_4.png";
import starsFive from "../assets/stars_5.png";
import starsZero from "../assets/stars0.png";

export const displayStars = (rating) => {
  switch (rating) {
    case 5:
      return starsFive;
    case 4.5:
      return starsFourHalf;
    case 4:
      return starsFour;
    case 3.5:
      return starsThreeHalf;
    case 3:
      return starsThree;
    case 2.5:
      return starsTwoHalf;
    case 2:
      return starsTwo;
    case 1.5:
      return starsOneHalf;
    case 1:
      return starsOne;
    case 0:
      return starsZero;
    default:
      return starsZero;
  }
};
