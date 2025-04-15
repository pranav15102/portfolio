import React, { useState, useEffect } from "react";

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition bg-blue-600 text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sections = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Mechanical Design Projects", href: "#mech-projects" },
    { label: "Robotics, AI & Automation Projects", href: "#robotics-projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white text-neutral-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl shadow hover:scale-105 transition"
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center p-10 text-center"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(219, 234, 254, 0.85), rgba(255, 255, 255, 0.95)),
              url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 15L75 0L100 15V45L75 60L100 75V105L75 90L50 105L25 90L0 105V75L25 60L0 45V15L25 0Z' stroke='%2399caff' stroke-width='0.8'/%3E%3C/svg%3E")
            `,
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
          }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-900 mb-4">
            Pranav Rajesh
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
            Robotics | Mechanical Design | Controls & Automation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section, idx) => (
              <a href={section.href} key={idx}>
                <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:shadow-lg hover:bg-blue-700 transition-all duration-300">
                  {section.label}
                </button>
              </a>
            ))}
          </div>
        </section>

        {/* About Me Section */}
      {/* About Me Section */}
{/* About Me */}
{/* About Me Section */}
<section
  id="about"
  className="p-10 border-t border-gray-200"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(245,245,255,0.95)),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 15L75 0L100 15V45L75 60L100 75V105L75 90L50 105L25 90L0 105V75L25 60L0 45V15L25 0Z' stroke='%23dbeafe' stroke-width='0.5'/%3E%3C/svg%3E")
    `,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
  }}
>
  <div className="max-w-6xl mx-auto space-y-16">
    <h2 className="text-4xl font-bold text-center text-blue-900 border-b-4 border-blue-500 pb-2">
      About Me
    </h2>

    {/* Summary */}
    <div className="flex flex-col md:flex-row items-center gap-8 transition-all">
      <img
        src={`${process.env.PUBLIC_URL}/pranavpic.jpg`}
        alt="Pranav Rajesh"
        className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
      />
      <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-2xl">
        I’m a multidisciplinary engineer passionate about building intelligent robotic systems that integrate
        mechanical design, AI-driven software, and real-time control. With a strong foundation in robotics,
        automation, and prototyping, I specialize in bridging hardware and software to solve real-world challenges.
      </p>
    </div>

    {/* Education */}
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b-2 border-blue-400 inline-block">🎓 Education</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            school: "Arizona State University",
            degree: "M.S. in Robotics and Autonomous Systems",
            location: "Tempe, AZ • Dec 2024",
            logo: "https://tse2.mm.bing.net/th?id=OIP.53xCc9_TP-C7mCULi_QcKQHaEK&pid=Api",
          },
          {
            school: "Vellore Institute of Technology",
            degree: "B.Tech in Mechanical Engineering",
            location: "Vellore, India • May 2022",
            logo: "https://tse4.mm.bing.net/th?id=OIP.IKx0_IosGEaxbw7dD7kkYgHaH0&pid=Api",
          },
        ].map(({ school, degree, location, logo }) => (
          <div key={school} className="bg-white border border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex gap-4 items-start">
            <img src={logo} alt={`${school} logo`} className="w-12 h-12 object-contain" />
            <div>
              <p className="font-bold text-base">{degree}</p>
              <p className="text-gray-600 text-sm">{school} • {location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Technical Skills */}
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b-2 border-blue-400 inline-block">🧰 Technical Skills</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Robotics & Autonomous Systems",
            color: "bg-blue-100 text-blue-800",
            skills: ["ROS/ROS2", "SLAM", "Motion Planning", "Trajectory Planning", "Gazebo", "RVIZ", "Carla", "MoveIt"],
          },
          {
            title: "Computer Vision & Machine Learning",
            color: "bg-purple-100 text-purple-800",
            skills: ["Object Detection", "Object Tracking", "YOLO", "OpenCV", "PyTorch", "Numpy", "Pandas"],
          },
          {
            title: "Mechanical Design & Simulation",
            color: "bg-yellow-100 text-yellow-800",
            skills: ["SolidWorks", "Fusion 360", "CATIA", "AUTOCAD", "Ansys", "Finite Element Analysis"],
          },
          {
            title: "Manufacturing & Prototyping",
            color: "bg-green-100 text-green-800",
            skills: ["CNC Machining", "Welding", "3D Printing", "Injection Molding", "Hand/Machine Tools"],
          },
        ].map(({ title, color, skills }) => (
          <div key={title} className="bg-white border border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className={`${color} px-3 py-1 rounded-full text-sm font-medium`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Professional Experience */}
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-900 border-b-2 border-blue-400 inline-block">💼 Professional Experience</h3>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-bold text-lg mb-1">Graduate Research Assistant – Battery Electric & Intelligent Vehicle (BELIV) Laboratory</p>
            <p className="text-sm text-gray-600 mb-4">Arizona State University • Tempe, AZ • Jan 2023 – Jul 2023</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-800 text-justify">
              <li>Developed a digital twin of the lab’s AV in SolidWorks, with simulation testing</li>
              <li>Prototyped 3D-printed camera holders using SolidWorks and Ansys</li>
              <li>Built real-time C++/Python simulation and perception systems in Linux</li>
              <li>Integrated LiDAR and camera with real-time sensor fusion</li>
              <li>Worked with CAN & Ethernet protocols</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/beliv.jpg`}
              alt="BELIV Lab Logo"
              className="max-h-28 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Mechanical Design Projects */}
        {/* Paste your full Mechanical Projects section here — skip for now to save space if unchanged */}
{/* Mechanical Design Projects */}
<section
  id="mech-projects"
  className="p-10 border-t border-gray-200"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(219, 234, 254, 0.85), rgba(255, 255, 255, 0.95)),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 15L75 0L100 15V45L75 60L100 75V105L75 90L50 105L25 90L0 105V75L25 60L0 45V15L25 0Z' stroke='%2399caff' stroke-width='0.8'/%3E%3C/svg%3E")
    `,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
  }}
>
  <div className="max-w-6xl mx-auto space-y-10">
    <h2 className="text-4xl font-bold text-center text-blue-900 border-b-4 border-blue-500 pb-2 mb-8">
      Mechanical Design Projects
    </h2>

    {/* Stereo Camera Mount */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">📷 3D Printed Stereo Camera Mount</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>🛠️ Designed mount for Raspberry Pi & stereo cameras in SolidWorks</li>
            <li>🧪 Performed FEA in SolidWorks using PLA material</li>
            <li>📏 Max Displacement: 0.0146 mm — highly stable design</li>
            <li>📊 Von Mises Stress: 0.445 MPa — below PLA yield strength</li>
            <li>🛡️ Factor of Safety: 112</li>
            <li>🧵 3D printed using FDM process</li>
          </ul>
        </div>
        <a href="https://github.com/pranav15102/cameramount" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View GitHub Repo</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex flex-col gap-2 justify-center">
        {["mount1.jpg", "mount2.jpg"].map((img, idx) => (
          <img
            key={idx}
            src={`${process.env.PUBLIC_URL}/${img}`}
            alt={`Camera Mount ${idx + 1}`}
            className="rounded-lg border w-full h-52 object-contain"
          />
        ))}
      </div>
    </div>

    {/* Connecting Rod */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">🔧 Generative Design & FEA of 3D-Printed Connecting Rod</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>⚙️ Designed connecting rod in Fusion 360 for 150cc engine</li>
            <li>📐 Used generative design to minimize weight and optimize structure</li>
            <li>🧪 Ran FEA simulations in ANSYS for tensile/compressive forces</li>
            <li>🔬 Compared Ti-6Al-4V and 17-4PH Stainless Steel material performance</li>
            <li>📉 Evaluated deformation, stress, and strain across crank angles</li>
            <li>✅ Finalized 17-4PH SS as optimal material choice</li>
          </ul>
        </div>
        <a href="https://iopscience.iop.org/article/10.1088/1742-6596/1969/1/012022" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View Published Paper</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/rod.jpg`}
          alt="Connecting Rod"
          className="rounded-lg border w-full h-52 object-contain"
        />
      </div>
    </div>

    {/* Nose Cone */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">🚀 Zirconia-Based Hypersonic Nose Cone</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>📐 Modeled a parabolic hypersonic nose cone in SolidWorks</li>
            <li>📉 Performed modal and harmonic response analysis for zirconia, mullite, and Ti-6Al-4V alloy in Ansys</li>
            <li>📊 Demonstrated zirconia as a viable alternative to HRSI ceramics in hypersonic systems</li>
            <li>📄 Published in Springer Lecture Notes in Mechanical Engineering (2023)</li>
          </ul>
        </div>
        <a href="https://link.springer.com/chapter/10.1007/978-981-99-6120-2_23" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View Published Paper</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/nosecone1.jpg`}
          alt="Zirconia Nose Cone"
          className="rounded-lg border w-full h-52 object-contain"
        />
      </div>
    </div>

    {/* AMR Base Chassis */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">🤖 Autonomous Mobile Robot (AMR) Base Chassis</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>🧩 Designed modular AMR chassis with smooth transitions for indoor maneuverability</li>
            <li>📦 Integrated slots for sensors, compute, and battery in a compact layout</li>
            <li>🛞 Added differential drive and omnidirectional caster wheel for agile mobility</li>
            <li>🧰 Emphasized symmetry and overhang-free design for 3D printing & CNC</li>
            <li>🧪 Optimized CG and frame strength for payload stability</li>
          </ul>
        </div>
        <a href="https://github.com/pranav15102/AMR_Chassis_Design" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View GitHub Repo</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/amr.jpg`}
          alt="AMR Base Chassis"
          className="rounded-lg border w-full h-full object-contain"
        />
      </div>
    </div>

    {/* Robotic Arm */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">🦾 6-DOF Robotic Arm for Pick-and-Place</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>🛠️ Designed a 6-DOF robotic manipulator in SolidWorks for industrial automation</li>
            <li>📐 Modeled revolute joints with realistic DOF and workspace constraints</li>
            <li>🔩 Shoulder, elbow, and wrist articulation for full reachability</li>
            <li>🤝 Custom end-effector designed to grip objects of various sizes</li>
            <li>🧩 Optimized for lightweight printing with bolt-based assembly</li>
          </ul>
        </div>
        <a href="https://github.com/pranav15102/RobotArmDesign" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View GitHub Repo</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/robotarm.jpg`}
          alt="Robotic Arm"
          className="rounded-lg border w-full h-[18rem] object-contain"
        />
      </div>
    </div>
  </div>
</section>

        {/* Robotics Projects */}
        {/* Paste your full Robotics Projects section here — already confirmed and corrected with YouTube embeds */}
{/* Robotics Projects */}
<section
  id="robotics-projects"
  className="p-10 border-t border-gray-200"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(219, 234, 254, 0.85), rgba(255, 255, 255, 0.95)),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 15L75 0L100 15V45L75 60L100 75V105L75 90L50 105L25 90L0 105V75L25 60L0 45V15L25 0Z' stroke='%2399caff' stroke-width='0.8'/%3E%3C/svg%3E")
    `,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
  }}
>
  <div className="max-w-6xl mx-auto space-y-10">
    <h2 className="text-4xl font-bold text-center text-blue-900 border-b-4 border-blue-500 pb-2 mb-8">
      Robotics, AI & Automation Projects
    </h2>

    {/* Intelligent Parking System */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">🅿️ Intelligent Parking Guidance System</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>🧠 Real-time YOLOv5-based vehicle detection + computer vision</li>
            <li>🎥 Single monocular camera with &gt;93% accuracy in occupancy detection</li>
            <li>🌐 Cloud streaming via React + MongoDB + AWS Lambda</li>
            <li>📍 GPS-based nearest vacant spot using Google Maps API</li>
            <li>🧭 Dynamic rerouting guidance with misalignment detection</li>
            <li>⚙️ Deployed on NVIDIA Jetson AGX Orin (edge computing)</li>
          </ul>
        </div>
        <a href="https://github.com/pranav15102/Intelligent_Parking-Guidance_System" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View GitHub Repo</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/_Ke6rJwfDII"
          title="Intelligent Parking System"
          className="rounded-lg border w-full h-60"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Line Follower Drone */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">🛸 Vision-Based Line Follower Drone</h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
            <li>🎥 Python + OpenCV-based quadcopter navigation</li>
            <li>🧠 PID control algorithm in Simulink for stable flight</li>
            <li>📐 Real-time line detection + path tracking</li>
            <li>🔋 Feedback tuning for trajectory correction</li>
            <li>🛠️ Autonomous onboard camera + controller system</li>
          </ul>
        </div>
        <a href="https://github.com/pranav15102/UAV-Line-Follower-Drone" target="_blank" rel="noopener noreferrer">
          <Button className="w-full mt-4">View GitHub Repo</Button>
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/wr_JAsBVCIU"
          title="Line Follower Drone"
          className="rounded-lg border w-full h-60"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* ROSMaster-X3 AMR */}
    <div className="bg-white border border-gray-300 p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 space-y-6">
      <h3 className="text-xl font-bold mb-3">🤖 ROSMaster-X3 Based Autonomous Mobile Robot</h3>
      <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 text-justify">
        <li>🧠 Programmed AMR using ROS2 with LiDAR-based SLAM (gmapping), trajectory planning, and A*/RRT algorithms</li>
        <li>🎯 Implemented single and multi-point goal navigation with real-time path planning</li>
        <li>📡 Integrated RGB-D camera, LiDAR, and IMU for accurate object detection and obstacle avoidance</li>
        <li>🔍 Performed real-world testing using ROSmaster-X3 robot for map generation and localization accuracy</li>
      </ul>
      <a href="https://github.com/pranav15102/ROSMASTERX3-AMR" target="_blank" rel="noopener noreferrer">
        <Button className="w-full mt-4">View GitHub Repo</Button>
      </a>

      {/* 2x2 YouTube Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <iframe
          src="https://www.youtube.com/embed/XMhzyzTGhGQ"
          title="SLAM Point Cloud"
          className="rounded-lg border w-full h-60"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/y8wBIsMvQdk"
          title="Single Point Navigation"
          className="rounded-lg border w-full h-60"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/eEwtxGMZz7c"
          title="Multi-Point Navigation"
          className="rounded-lg border w-full h-60"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/M4emE_1ApxI"
          title="Obstacle Avoidance"
          className="rounded-lg border w-full h-60"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

        {/* Contact Me Section */}
        <section
          id="contact"
          className="p-10 border-t border-gray-200"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(219, 234, 254, 0.85), rgba(255, 255, 255, 0.95)),
              url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0L50 15L75 0L100 15V45L75 60L100 75V105L75 90L50 105L25 90L0 105V75L25 60L0 45V15L25 0Z' stroke='%2399caff' stroke-width='0.8'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
          }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-blue-900 border-b-4 border-blue-500 pb-2">
              Contact Me
            </h2>
            <div className="space-y-2 text-base text-gray-700">
              <p>📧 <span className="text-blue-700 font-medium">pranav.rajesh@hotmail.com</span></p>
              <p>📞 <span className="text-blue-700 font-medium">+1 (602) 756-8293</span></p>
              <p>
                <a href="https://linkedin.com/in/pranavrajesh" className="underline text-blue-600 mr-4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/pranav15102" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);

                fetch("https://formspree.io/f/xblgblkk", {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                })
                  .then((response) => {
                    if (response.ok) {
                      setSubmitted(true);
                      form.reset();
                    }
                  })
                  .catch((error) => {
                    alert("Something went wrong. Please try again.");
                    console.error(error);
                  });
              }}
              className="space-y-4 text-left max-w-md mx-auto"
            >
              {!submitted ? (
                <>
                  <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded px-3 py-2 shadow-sm" />
                  <input type="email" name="email" placeholder="Your Email" required className="w-full border rounded px-3 py-2 shadow-sm" />
                  <textarea name="message" placeholder="Your Message" required className="w-full border rounded px-3 py-2 h-24 shadow-sm"></textarea>
                  <Button type="submit" className="w-full">Send Message</Button>
                </>
              ) : (
                <p className="text-green-600 text-center font-semibold">✅ Thank you! Your message has been sent.</p>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}