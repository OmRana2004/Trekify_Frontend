export interface Trek {
  id: string;
  name: string;
  location: string;
  difficulty: string;
  duration: string;
  price: number;
  image: string;
  season: string;
  description: string;
  itinerary?: string[];

  // ✅ Add these new optional fields
  inclusions?: string[];
  gearList?: string[];
  gallery?: string[];
}
