import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12">
      <div>
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-500 flex items-center justify-center overflow-hidden">
          <img src="https://via.placeholder.com/300x300.png?text=Your+Photo" alt="Profile" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="max-w-xl">
        <h4 className="text-sm text-gray-400 mb-2">ABOUT ME</h4>
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-blue-500">Driven</span>, Innovative Software <span className="text-blue-500">Engineer</span>
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
         I am a passionate and ambitious Software Engineer with a Bachelor's degree in Computer Science. With a strong foundation in software development and a keen interest in emerging technologies, I bring a problem-solving mindset and a commitment to continuous learning.

Alongside my technical skills, I also specialize as a Prompt Engineer — enabling me to efficiently leverage AI tools, craft effective solutions, and adapt to a wide range of challenges. I believe in versatility, creativity, and taking ownership of tasks, no matter the complexity.

I am driven by curiosity, a growth mindset, and the determination to deliver results — making me ready to contribute effectively to any project or team.
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-1" /> Develop highly interactive Front end / User Interfaces for the web</li>
          <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-1" /> Progressive Web Applications (PWA) in normal and SPA Stacks</li>
          <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-1" /> Integration of third party services such as AWS / Digital Ocean</li>
          <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-1" /> Integration of payment services such as M-Pesa and Paypal etc</li>
          <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-1" /> Develop highly interactive Mobile Applications</li>
          <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-1" /> Develop highly interactive Backend / API services</li>
        </ul>
      </div>
    </section>
  );
}
