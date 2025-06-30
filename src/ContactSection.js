import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 font-sans">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Address */}
        <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded hover:scale-105 transition border border-gray-700">
          <FaMapMarkerAlt className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-300">Lahore, Pakistan</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded hover:scale-105 transition border border-gray-700">
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-300">+923032218405</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded hover:scale-105 transition border border-gray-700">
          <FaEnvelope className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <a href="mailto:rehannasir221@gmail.com" className="text-blue-400 hover:underline">
              rehannasir221@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded hover:scale-105 transition border border-gray-700">
          <FaLinkedin className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/rehannasir2003" target="_blank" className="text-blue-400 hover:underline">
              linkedin.com/in/rehannasir2003
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-center space-x-4 bg-gray-900 p-6 rounded hover:scale-105 transition border border-gray-700">
          <FaInstagram className="text-blue-500 text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Instagram</h3>
            <p className="text-gray-300">@bye_hann</p>
          </div>
        </div>

      </div>
    </div>
  );
}
