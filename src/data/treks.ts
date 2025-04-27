import { Trek } from "../types/Trek";
import Kedarnath from "../assets/Kedarnath.png";
import BudhaKedar from "../assets/BudhaKedar.png";
import Brahmatal from "../assets/Brahmatal.png";
import KedarkanthaImage1 from "../assets/kedarkantha-1.jpg";
import KedarkanthaImage2 from "../assets/kedarkantha-2.jpg";
import KedarkanthaImage3 from "../assets/kedarkantha-3.jpg";
import BudhaKedarImage1 from "../assets/budha-kedar-1.jpg";
import BudhaKedarImage2 from "../assets/budha-kedar-2.jpg";
import BudhaKedarImage3 from "../assets/budha-kedar-3.jpg";
import BrahmatalImage1 from "../assets/brahmatal-1.jpg";
import BrahmatalImage2 from "../assets/brahmatal-2.jpg";
import BrahmatalImage3 from "../assets/brahmatal-3.jpg";

export const treks: Trek[] = [
  {
    id: "kedarkantha",
    name: "Kedarkantha Trek",
    location: "Uttarakhand",
    difficulty: "Moderate",
    duration: "6 Days",
    price: 8500,
    image: Kedarnath,
    season: "Winter",
    description: "A scenic winter trek with snow-capped peaks and beautiful campsites.",
    itinerary: [
      "Day 1: Drive from Dehradun to Sankri",
      "Day 2: Trek from Sankri to Juda Ka Talab",
      "Day 3: Trek to Kedarkantha Base Camp",
      "Day 4: Summit Kedarkantha Peak and return to Base Camp",
      "Day 5: Return trek to Sankri",
      "Day 6: Drive back to Dehradun"
    ],
    inclusions: [
      "All meals during trek",
      "Tent and sleeping bag",
      "Certified trek guide",
      "Forest entry fees"
    ],
    gearList: [
      "Backpack (50-60L)",
      "Warm jacket and thermals",
      "Trekking shoes",
      "Gloves and beanie",
      "Sunglasses and sunscreen"
    ],
    gallery: [
      KedarkanthaImage1,
      KedarkanthaImage2,
      KedarkanthaImage3
    ]
  },
  {
    id: "budha-kedar",
    name: "Budha Kedar Trek",
    location: "Uttarakhand",
    difficulty: "Hard",
    duration: "5 Days",
    price: 9800,
    image: BudhaKedar,
    season: "Summer",
    description: "A dramatic crossover trek from lush valleys to desert landscapes.",
    itinerary: [
      "Day 1: Arrival and acclimatization",
      "Day 2: Trek through dense forests to first camp",
      "Day 3: High-altitude climb to Budha Kedar ridge",
      "Day 4: Explore summit and descend to lower camp",
      "Day 5: Return trek and departure"
    ],
    inclusions: [
      "Meals and snacks",
      "High-altitude tents and equipment",
      "Expert mountaineer support",
      "Emergency medical kit"
    ],
    gearList: [
      "Backpack with rain cover",
      "High-ankle trekking boots",
      "Windproof jacket",
      "Trekking poles",
      "Headlamp"
    ],
    gallery: [
      BudhaKedarImage1,
      BudhaKedarImage2,
      BudhaKedarImage3
    ]
  },
  {
    id: "brahmatal",
    name: "Brahmatal Trek",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "6 Days",
    price: 7900,
    image: Brahmatal,
    season: "Winter",
    description: "Snow trek with frozen lakes and stunning Himalayan views.",
    itinerary: [
      "Day 1: Drive to Lohajung",
      "Day 2: Trek to Bekaltal",
      "Day 3: Trek to Brahmatal via Jhandi Top",
      "Day 4: Brahmatal summit and return to base",
      "Day 5: Trek back to Lohajung",
      "Day 6: Return journey"
    ],
    inclusions: [
      "Stay and meals",
      "Professional guide support",
      "Trek permits",
      "Camp setup and sleeping gear"
    ],
    gearList: [
      "Woolen cap",
      "Thermal innerwear",
      "Snow gaiters (optional)",
      "Trekking socks (2-3 pairs)",
      "Waterproof gloves"
    ],
    gallery: [
      BrahmatalImage1,
      BrahmatalImage2,
      BrahmatalImage3
    ]
  }
];
