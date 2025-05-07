import { useParams } from "react-router-dom";
import { treks } from "../data/treks";
import { useState } from "react";
import BookingModal from "../components/BookingModal";

const TrekDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trek = treks.find((trek) => trek.id === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!trek) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Trek Not Found</h2>
        <p className="text-gray-600 mt-4">Please check the trek you are trying to view.</p>
      </div>
    );
  }

  const similarTreks = treks
    .filter(
      (t) =>
        t.id !== trek.id &&
        t.location === trek.location // You can change this logic
    )
    .slice(0, 3); // Limit to 3 similar treks

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Trek Banner */}
      <div data-aos="fade-up" className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
        <img
          src={trek.image}
          alt={trek.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Trek Info */}
      <div className="mt-8 space-y-6">
        <h1 data-aos="fade-up" className="text-4xl font-bold text-gray-900">{trek.name}</h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-700">
          {trek.location} • {trek.difficulty} • {trek.duration} • {trek.season}
        </p>
        <p data-aos="fade-up" data-aos-delay="200" className="text-2xl font-semibold text-green-600">
          ₹{trek.price}
        </p>
        <p data-aos="fade-up" data-aos-delay="300" className="text-gray-800">{trek.description}</p>

        {/* Download Itinerary PDF Button */}
        {trek.itineraryPdf && (
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href={trek.itineraryPdf}
              download={`${trek.name}-Itinerary.pdf`}
              className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-all duration-300"
            >
              📄 Download Itinerary PDF
            </a>
          </div>
        )}
      </div>

      {/* Itinerary */}
      {trek.itinerary?.length && (
        <div className="mt-12">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-4">Itinerary</h2>
          <ul className="list-disc list-inside space-y-2">
            {trek.itinerary.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-lg font-semibold text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Inclusions */}
      {trek.inclusions?.length && (
        <div className="mt-12">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-4">Inclusions</h2>
          <ul className="list-disc list-inside space-y-2">
            {trek.inclusions.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-lg font-semibold text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gear List */}
      {trek.gearList?.length && (
        <div className="mt-12">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-4">Gear List</h2>
          <ul className="list-disc list-inside space-y-2">
            {trek.gearList.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-lg font-semibold text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gallery */}
      {trek.gallery?.length && (
        <div className="mt-12">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trek.gallery.map((image, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Book Now Buttons */}
      <div className="justify-center mt-8 md:flex hidden">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          🚀 Book This Trek
        </button>
      </div>

      <div
        data-aos="fade-up"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
      >
        <button
          onClick={() => setIsBookingOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          🎒 Book This Trek
        </button>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <BookingModal
          onClose={() => setIsBookingOpen(false)}
          trekName={trek.name}
        />
      )}

      {/* Similar Treks */}
      {similarTreks.length > 0 && (
        <div className="mt-20">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-gray-900 mb-6">
            Similar Treks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarTreks.map((similarTrek, index) => (
              <div
                key={similarTrek.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={similarTrek.image}
                  alt={similarTrek.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{similarTrek.name}</h3>
                  <p className="text-gray-600 mt-1">
                    {similarTrek.location} • {similarTrek.difficulty} • {similarTrek.duration}
                  </p>
                  <p className="text-green-600 font-semibold mt-2">₹{similarTrek.price}</p>
                  <a
                    href={`/treks/${similarTrek.id}`}
                    className="inline-block mt-4 text-green-600 font-semibold hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TrekDetail;
