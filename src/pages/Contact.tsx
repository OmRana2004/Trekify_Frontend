
const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-14">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Trekify Pvt. Ltd.
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>
                  📍 <strong>Address:</strong> P.O.Box 249135, Dhrali, Harshil,
                  Uttarakhand
                </li>
                <li>
                  📞 <strong>Phone:</strong> +977 01 4378381
                </li>
                <li>
                  📱 <strong>WhatsApp:</strong> +977 9818615420 (Subal Lopchan)
                </li>
                <li>
                  ✉️ <strong>Email:</strong> info@Trekify.com
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <iframe
                title="Dharali Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.1234567890123!2d78.7972018!3d31.040698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908c1234567890ab%3A0x1234567890abcdef!2sDharali%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1612345678901"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-600 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 hover:scale-[1.02] transition-all duration-300 w-full"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
