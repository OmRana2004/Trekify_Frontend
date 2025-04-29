import { useEffect } from "react";
import { CalendarDays, Mail, Phone, User, Users } from "lucide-react";

interface BookingModalProps {
  onClose: () => void;
  trekName: string;
}

export default function BookingModal({ onClose, trekName }: BookingModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Booking submitted! (Mock)");
    onClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-opacity-40 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-200 rounded-2xl w-full max-w-2xl p-8 mx-4 shadow-2xl relative animate-fadeIn"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Book: <span className="text-green-600">{trekName}</span>
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
              <User className="w-5 h-5 mr-2 text-gray-400" />
              <input type="text" placeholder="Your name" required className="flex-1 bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="w-5 h-5 mr-2 text-gray-400" />
              <input type="email" placeholder="you@example.com" required className="flex-1 bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Phone</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
              <Phone className="w-5 h-5 mr-2 text-gray-400" />
              <input type="tel" placeholder="9876543210" required className="flex-1 bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Number of Persons</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
              <Users className="w-5 h-5 mr-2 text-gray-400" />
              <input type="number" min={1} defaultValue={1} required className="flex-1 bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex flex-col col-span-full">
            <label className="text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-500">
              <CalendarDays className="w-5 h-5 mr-2 text-gray-400" />
              <input type="date" min={today} required className="flex-1 bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex flex-col col-span-full">
            <label className="text-sm font-medium text-gray-700 mb-1">Additional Message (optional)</label>
            <textarea rows={3} className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" placeholder="Any special requests?"></textarea>
          </div>

          <div className="flex justify-end col-span-full mt-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow-sm"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
