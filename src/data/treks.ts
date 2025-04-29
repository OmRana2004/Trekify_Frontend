import { Trek } from "../types/Trek";
import Kedartal from "../assets/KedarTal.jpg";
import Sattal from "../assets/SatTal.webp";
import Brahmatal from "../assets/Brahmatal.png";
import KedartalImage1 from "../assets/KedarTal-1.jpg";
import KedartalImage2 from "../assets/KedarTal-2.webp";
import KedartalImage3 from "../assets/KedarTal-3.jpg";
import KedartalImage4 from "../assets/KedarTal-4.jpg";
import SattalImage1 from "../assets/SatTal-1.jpg";
import SattalImage2 from "../assets/SatTal-2.webp";
import SattalImage3 from "../assets/SatTal-3.jpg";
import SattalImage4 from "../assets/SatTal-4.jpeg";
import BrahmatalImage1 from "../assets/brahmatal-1.jpg";
import BrahmatalImage2 from "../assets/brahmatal-2.jpg";
import BrahmatalImage3 from "../assets/brahmatal-3.jpg";
// Import PDFs
import KedarTalItinerary from "../assets/kedartal-itinerary.pdf";
import SatTalItinarary from "../assets/Sattal-Itinerary.pdf";

export const treks: Trek[] = [
  {
    id: "KEDARTAL",
    name: "KEDARTAL TREK",
    location: "Uttarakhand",
    difficulty: "Moderate",
    duration: "8 Days",
    price: 17500,
    image: Kedartal,
    season: "Winter",
    description: "Kedartal is a high-altitude trek from Gangotri, reaching 4,650 meters over 17 km. Physically and mentally demanding, it offers stunning views of Thalay Sagar, Jogin massif, Bhrigupanth, and Manda. Spread across 5 days, it's best suited for experienced trekkers.",
    itinerary: [
      "Day 1 :Arrival at Gangotri 3000m",
      "Day 2 :Acclimatization Day at Gangotri",
      "Day 3 :GANGOTRI TO BHOJ KHARK (5 to 6hr)",
      "Day 4 :BHOJ KHARAK TO KEDARKHARAK (4 to 5hr)",
      "Day 5 :KEDAR KHARAK TO KEDAR TAAL (4 to 5hr )",
      "Day 6 :KEDAR TAAL TO BHOJ KHARAK (5 to 6hrs)",
      "Day 7 :BHOJKHARAK TO GANGOTRI (6 to 7hrs)",
      "Day 8 :GANGOTRI TO DEHRADUN (9-11hrs)"
    ],
    inclusions: [
      "All meals Gangotri to Gangotri",
      "services of a cook and kitchen staff",
      "Sleeping bag tents Mattresses Kichen tent Dining tent toilet tent",
      "porters carrying common trek equipment",
      "services of experienced trek leader",
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
      KedartalImage1,
      KedartalImage2,
      KedartalImage3,
      KedartalImage4
    ],
    itineraryPdf: KedarTalItinerary,
  },
  {
    id: "SATTAL",
    name: "SATTAL TREK",
    location: "Uttarakhand",
    difficulty: "Easy",
    duration: "3 Nights 4 Days",
    price: 8000,
    image: Sattal,
    season: "All Year",
    description: "The Sattal Trek offers a perfect blend of natural beauty and cultural experience in Uttarakhand. Starting from the charming village of Dharali, known for its ancient temples and traditions, the trail winds through scenic landscapes and glimpses of local life.",
    itinerary: [
      "Day 1: Pickup to you from UTTARKASHI Drive to Dharali l  - 70 km (2/3 Hours) (2650 Meter) overnight stay Hotel",
      "Day 2: Dharali to sattal trek back to DHARALI",
      "Day 3: Explore full day harshil valley mukhba Village enjoy your holiday here - this is a small heaven in the earth - this is best Please near Ganga River",
      "Day 4: After breakfast drive to Dharali via Uttarkash - (72 km). 2/3Hours) reach afternoon",
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
      SattalImage1,
      SattalImage2,
      SattalImage3,
      SattalImage4,
    ],
    itineraryPdf: SatTalItinarary,
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
    ],
    itineraryPdf: "/pdfs/brahmatal-itinerary.pdf" // 🔥 added here
  }
];
