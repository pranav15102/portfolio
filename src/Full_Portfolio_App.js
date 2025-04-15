
// Full updated App.js including horizontal layout, About Me, Mechanical Projects, etc.
import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition bg-blue-600 text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function App() {
  const sections = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Mechanical Design Projects", href: "#mech-projects" },
    { label: "Robotics, AI & Automation Projects", href: "#robotics-projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <div className="scroll-smooth">
      <div className="bg-white text-black transition duration-500">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl font-bold text-center mb-4">Pranav Rajesh</h1>
          <p className="text-xl text-center mb-10">Robotics | Mechanical Design | Controls & Automation</p>
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section, idx) => (
              <a href={section.href} key={idx}><Button>{section.label}</Button></a>
            ))}
          </div>
        </section>

        <section id="mech-projects" className="p-10 min-h-screen bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Mechanical Design Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md border md:flex md:gap-6">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-3">📷 3D Printed Stereo Camera Mount</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 text-justify">
                    <li>🛠️ Designed a custom stereo mount for Raspberry Pi & cameras in SolidWorks</li>
                    <li>🧪 Structural FEA using PLA material properties in SolidWorks Simulation</li>
                    <li>📏 Max Displacement: 0.0146 mm – ensures precise camera alignment</li>
                    <li>📊 Max Von Mises Stress: 0.445 MPa – safely below PLA yield strength (50 MPa)</li>
                    <li>🛡️ Factor of Safety: 112 – extremely high durability margin</li>
                    <li>🧵 3D printed in PLA using FDM process</li>
                  </ul>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-2 mt-6 md:mt-0">
                  <img src="/Camera Mount Rendered (1).JPG" className="rounded-lg border w-full h-auto object-cover" />
                  <img src="/Camera Mount Rendered (2).jpg" className="rounded-lg border w-full h-auto object-cover" />
                  <img src="/Camera Mount_Displacement.PNG" className="rounded-lg border w-full h-auto object-cover" />
                  <img src="/Camera Mount_FOS.PNG" className="rounded-lg border w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="robotics-projects" className="p-10 min-h-screen bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Robotics, AI & Automation Projects</h2>
            <p className="text-center text-gray-600">Coming soon: SLAM bots, perception pipelines, and drone control.</p>
          </div>
        </section>

        <section id="contact" className="p-10 min-h-screen bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="mb-2">📧 pranav@example.com</p>
            <p className="mb-2">📞 +1 (123) 456-7890</p>
            <p className="mb-6">
              <a href="https://linkedin.com/in/pranavrajesh" className="underline mr-4">LinkedIn</a>
              <a href="https://github.com/pranavrajesh" className="underline">GitHub</a>
            </p>
            <form className="space-y-4 text-left max-w-md mx-auto">
              <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
              <input type="email" placeholder="Your Email" className="w-full border rounded px-3 py-2" />
              <textarea placeholder="Your Message" className="w-full border rounded px-3 py-2 h-24"></textarea>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
