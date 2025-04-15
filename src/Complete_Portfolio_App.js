
import React from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={\`px-4 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition bg-blue-600 text-white \${className}\`}
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
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center p-10">
          <h1 className="text-5xl font-bold text-center mb-4">Pranav Rajesh</h1>
          <p className="text-xl text-center mb-10">Robotics | Mechanical Design | Controls & Automation</p>
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section, idx) => (
              <a href={section.href} key={idx}>
                <Button>{section.label}</Button>
              </a>
            ))}
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="p-10 min-h-screen bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/profile%20pic.jpg"
                alt="Pranav Rajesh"
                className="w-64 h-64 object-cover rounded-xl shadow-md"
              />
              <p className="text-lg text-neutral-700 leading-relaxed text-justify">
                I’m a multidisciplinary engineer passionate about building intelligent robotic systems that integrate mechanical design, AI-driven software, and real-time control. With a strong foundation in robotics, automation, and prototyping, I specialize in bridging hardware and software to solve real-world challenges.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-start">
                  <img src="https://tse2.mm.bing.net/th?id=OIP.53xCc9_TP-C7mCULi_QcKQHaEK&pid=Api" alt="ASU" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-bold text-base">M.S. in Robotics and Autonomous Systems</p>
                    <p className="text-gray-600 text-sm">Arizona State University • Tempe, AZ • Dec 2024</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-start">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.IKx0_IosGEaxbw7dD7kkYgHaH0&pid=Api" alt="VIT" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-bold text-base">B.Tech in Mechanical Engineering</p>
                    <p className="text-gray-600 text-sm">Vellore Institute of Technology • Vellore, India • May 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">🧰 Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Robotics & Autonomous Systems", color: "blue", skills: ["ROS/ROS2", "SLAM", "Motion Planning", "Trajectory Planning", "Gazebo", "RVIZ", "Carla", "MoveIt"] },
                  { title: "Computer Vision & ML", color: "purple", skills: ["Object Detection", "Object Tracking", "YOLO", "OpenCV", "PyTorch", "Numpy", "Pandas"] },
                  { title: "Mechanical Design & Simulation", color: "yellow", skills: ["SolidWorks", "Fusion 360", "CATIA", "AUTOCAD", "Ansys", "Finite Element Analysis"] },
                  { title: "Manufacturing & Prototyping", color: "green", skills: ["CNC Machining", "Welding", "3D Printing", "Injection Molding", "Hand/Machine Tools"] },
                ].map(({ title, color, skills }) => (
                  <div key={title} className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-semibold text-gray-700 mb-2">{title}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map(skill => (
                        <span key={skill} className={`bg-${color}-100 text-${color}-800 px-3 py-1 rounded-full text-xs font-medium`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">💼 Professional Experience</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="font-bold text-lg mb-1">Graduate Research Assistant – BELIV Lab</p>
                  <p className="text-sm text-gray-600 mb-4">Arizona State University • Tempe, AZ • Jan 2023 – Jul 2023</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-800 text-justify">
                    <li>Developed a digital twin of the lab’s AV in SolidWorks, performed simulation-based testing</li>
                    <li>Designed and prototyped 3D-printed camera holders using SolidWorks and Ansys</li>
                    <li>Implemented real-time C++/Python software in Linux for simulation and perception</li>
                    <li>Integrated LiDAR and Camera for real-time sensor fusion and calibration</li>
                    <li>Worked with CAN and Ethernet protocols for control and communication</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img src="/image.png" alt="BELIV Logo" className="max-h-28 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanical Design Projects */}
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

        {/* Robotics Projects */}
        <section id="robotics-projects" className="p-10 min-h-screen bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Robotics, AI & Automation Projects</h2>
            <p className="text-center text-gray-600">Coming soon: SLAM bots, perception pipelines, and drone control.</p>
          </div>
        </section>

        {/* Contact */}
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
