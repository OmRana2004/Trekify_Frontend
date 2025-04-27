import { useState } from "react";
import TrekCard from "../components/TrekCard";
import { treks } from "../data/treks";
import FilterBar from "../components/FilterBar";
import heroImage from "../assets/hero.png"; // ✅ Make sure this image exists in src/assets

const Home = () => {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filteredTreks = treks.filter((trek) => {
    const matchesSearch =
      trek.name.toLowerCase().includes(search.toLowerCase()) ||
      trek.location.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || trek.difficulty.toLowerCase() === difficulty.toLowerCase();

    return matchesSearch && matchesDifficulty;
  });

  return (
    <div>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-start"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl px-6 mx-auto text-left text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            TREKS THAT <br className="hidden md:block" /> TRANSFORM LIVES
          </h1>

          <a
            href="#explore"
            className="inline-block mt-6 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md shadow-md hover:bg-yellow-500 transition-all"
          >
            SEE ALL UPCOMING TREKS
          </a>

          <p className="mt-6 text-lg max-w-xl">
            Join 30,000+ trekkers every year on mindfully designed experiences that help you connect to yourself,
            to nature and to others.
          </p>

          <p className="mt-3 underline underline-offset-4 text-sm hover:text-yellow-300 cursor-pointer">
            Read 11,000+ Google reviews with an average of 4.9 rating
          </p>
        </div>
      </section>

      {/* ✅ Explore Treks Section */}
      <section id="explore" className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6" data-aos="fade-down">
          Explore Treks
        </h1>

        <div data-aos="fade-up">
          <FilterBar
            search={search}
            setSearch={setSearch}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredTreks.length > 0 ? (
            filteredTreks.map((trek) => <TrekCard key={trek.id} trek={trek} />)
          ) : (
            <p className="text-center col-span-full text-gray-600">No treks found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
