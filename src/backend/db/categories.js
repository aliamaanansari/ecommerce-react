import { v4 as uuid } from "uuid"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Gold Fish",
    image:
      "https://astistar.sirv.com/Images/neog%20Ecommmerce%20React/assests/goldfish-display.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Betta Fish",
    image:
      "https://astistar.sirv.com/Images/neog%20Ecommmerce%20React/assests/betta-display.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Guppy Fish",
    image:
      "https://astistar.sirv.com/Images/neog%20Ecommmerce%20React/assests/guppie-display.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Molly Fish",
    image:
      "https://astistar.sirv.com/Images/neog%20Ecommmerce%20React/assests/mollyfish-display.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tetra Fish",
    image:
      "https://astistar.sirv.com/Images/neog%20Ecommmerce%20React/assests/tetrafish-display.webp",
  },
]
