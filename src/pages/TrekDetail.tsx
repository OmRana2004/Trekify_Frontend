import { useParams, Link } from "react-router-dom";
import { treks } from "../data/treks";

const TrekDetail = () => {
  const { id } = useParams();
  const trek = treks.find((t) => t.id === id);

  if (!trek) {
    return <div className="p-6 text-center text-red-600">Trek not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* Hero Image */}
      <img
        src={trek.image}
        alt={trek.name}
        className="rounded-2xl w-full h-[400px] object-cover shadow-lg mb-8"
        data-aos="fade-up"
      />

      {/* Trek Info */}
      <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl font-bold text-gray-800">{trek.name}</h1>
        <p className="text-xl text-gray-600">{trek.location}</p>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 mt-6">
          <p><strong>Duration:</strong> {trek.duration}</p>
          <p><strong>Difficulty:</strong> {trek.difficulty}</p>
          <p><strong>Season:</strong> {trek.season}</p>
          <p><strong>Price:</strong> ₹{trek.price}</p>
        </div>
        <p className="mt-4 text-lg text-gray-800">{trek.description}</p>
      </div>

      {/* Itinerary */}
      {Array.isArray(trek.itinerary) && trek.itinerary.length > 0 && (
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Itinerary</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {trek.itinerary.map((step, i) => (
              <li key={i} className="pl-4">{step}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Inclusions */}
      {Array.isArray(trek.inclusions) && trek.inclusions.length > 0 && (
        <div data-aos="fade-up" data-aos-delay="250">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's Included</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {trek.inclusions.map((item, i) => (
              <li key={i} className="pl-4">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Gear List */}
      {Array.isArray(trek.gearList) && trek.gearList.length > 0 && (
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gear Checklist</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {trek.gearList.map((gear, i) => (
              <li key={i} className="pl-4">{gear}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Gallery */}
      {Array.isArray(trek.gallery) && trek.gallery.length > 0 && (
        <div data-aos="fade-up" data-aos-delay="350">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trek Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trek.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Trek Image ${i + 1}`}
                className="rounded-lg object-cover h-60 w-full shadow-md hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      )}

      {/* Enquiry Form */}
      <div
        className="bg-gray-50 p-8 rounded-xl shadow-xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enquire / Book this Trek</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-md text-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Send Enquiry
          </button>
        </form>
      </div>

      {/* Back to Explore Treks Link */}
      <div className="text-center mt-8">
        <Link
          to="/explore"  // Ensure this path matches the Explore page route in your AppRoutes.tsx
          className="text-lg text-blue-600 hover:underline"
        >
          &larr; Back to Explore Treks
        </Link>
      </div>
    </div>
  );
};

export default TrekDetail;
