import { useState, useEffect } from "react";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const skillCategories = [
    {
      title: "DSA Programming",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      description:
        "Strong foundation in algorithms and problem-solving with Java",
      fullRow: true,
      skills: [
        {
          name: "Data Structures",
          desc: "Arrays, Linked Lists, Trees, Graphs, Heaps",
        },
        { name: "Algorithms", desc: "Sorting, Searching, Dynamic Programming" },
        { name: "Java", desc: "Core Java programming" },
      ],
    },
    {
      title: "Full Stack Developer (MERN)",
      icon: "🚀",
      color: "from-blue-500 via-purple-500 to-pink-500",
      description:
        "Building complete web applications from frontend to backend with modern JavaScript technologies",
      subsections: [
        {
          subtitle: "Frontend Technologies",
          skills: [
            { name: "HTML5", desc: "Semantic markup & accessibility" },
            { name: "CSS3", desc: "Animations, Grid & Flexbox" },
            { name: "JavaScript", desc: "ES6+, Async programming" },
            { name: "TypeScript", desc: "Static typing for JavaScript" },
            {
              name: "React.js",
              desc: "Frontend library with Hooks & lifecycle",
            },
            { name: "Redux Toolkit", desc: "State management for React" },
            { name: "Tailwind CSS", desc: "Utility-first styling" },
          ],
        },
        {
          subtitle: "Backend Technologies",
          skills: [
            { name: "Node.js", desc: "Server-side JavaScript runtime" },
            { name: "Express.js", desc: "Backend framework for Node.js" },
            {
              name: "MongoDB",
              desc: "NoSQL database management & data modeling",
            },
            { name: "RESTful API", desc: "API design & implementation" },
          ],
        },
      ],
    },
    {
      title: "Currently Learning",
      icon: "✨",
      color: "from-yellow-500 to-amber-500",
      description: "Expanding my skillset with cutting-edge technologies",
      fullRow: true,
      skills: [
        { name: "Python", desc: "AI/ML libraries & frameworks" },
        { name: "Machine Learning", desc: "AI/ML with Python" },
        { name: "Artificial Intelligence", desc: "AI/ML with Python" },
      ],
    },
    {
      title: "Core Computer Science",
      icon: "📚",
      color: "from-orange-500 to-red-500",
      description:
        "Solid understanding of fundamental computer science concepts",
      skills: [
        { name: "OOP", desc: "Design patterns & principles" },
        { name: "Computer Networking", desc: "TCP/IP, HTTP, DNS protocols" },
        { name: "DBMS", desc: "SQL, Normalization, Transactions" },
      ],
    },
    {
      title: "Developer Tools",
      icon: "🔧",
      color: "from-indigo-500 to-blue-500",
      description: "Essential tools for modern development workflow",
      skills: [
        { name: "Git", desc: "Version control & branching strategies" },
        { name: "GitHub", desc: "Collaboration & CI/CD workflows" },
        { name: "Postman", desc: "API testing & documentation" },
      ],
    },
    {
      title: "Community & Growth",
      icon: "👥",
      color: "from-teal-500 to-green-500",
      description: "Actively contributing to the developer community",
      skills: [
        { name: "Learning in Public", desc: "Sharing knowledge & progress" },
        { name: "Open Source", desc: "Contributing to projects" },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Dynamic Gradient Background */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(99, 102, 241, 0.2), 
            rgba(168, 85, 247, 0.15), 
            rgba(236, 72, 153, 0.1), 
            transparent 50%)`,
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="h-full w-full bg-gradient-to-br from-indigo-800/30 via-purple-800/20 to-pink-800/30"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/25 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Hero Section */}
        <div className="container mx-auto px-6">
          <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center max-w-7xl w-full">
              {/* Left Section - Enhanced Image */}
              <div className="flex items-center justify-center order-2 xl:order-1">
                <div className="relative group">
                  {/* Multiple Glowing Rings */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-700" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-all duration-700" />

                  {/* Main Image Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl transform group-hover:scale-110 transition-all duration-700 border-4 border-purple-500/30">
                    <img
                      className="w-full h-full object-cover filter group-hover:brightness-125 group-hover:contrast-110 transition-all duration-700"
                      src="/image/IMG_20240919_145329_007.jpg"
                      alt="Amjad Khan - Full Stack Developer"
                    />

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    </div>
                  </div>

                  {/* Name Label on Photo */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 backdrop-blur-lg rounded-2xl border border-purple-400/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white font-semibold text-lg bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                      Amjad Khan
                    </span>
                  </div>

                  {/* Floating Tech Icons */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white text-2xl">⚛️</span>
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                </div>
              </div>

              {/* Right Section - Enhanced Text */}
              <div className="flex items-center justify-center order-2 xl:order-2">
                <div className="relative group w-full max-w-2xl">
                  {/* Background Glow */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />

                  {/* Main Container */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all duration-500 overflow-hidden">
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Greeting */}

                      {/* Main Title */}
                      <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Amjad Khan
                        </span>
                      </h1>

                      {/* Animated Underline */}
                      <div className="flex justify-center mb-8">
                        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full" />
                      </div>

                      {/* Subtitle */}
                      <div className="mb-8">
                        <h2 className="text-xl lg:text-2xl text-gray-300 font-medium mb-2">
                          <span className="text-purple-400 font-semibold">
                            Full Stack Developer
                          </span>{" "}
                          &
                          <span className="text-cyan-400 font-semibold">
                            {" "}
                            MERN Expert
                          </span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                          Crafting digital experiences with cutting-edge
                          technology
                        </p>
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                          "React.js",
                          "Node.js",
                          "Express.js",
                          "MongoDB",
                          "TypeScript",
                        ].map((skill, index) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-3 mb-6">
                        <a
                          href="mailto:amjadkhann.tech@gmail.com"
                          className="block text-cyan-400 text-sm hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                        >
                          📧 amjadkhann.tech@gmail.com
                        </a>
                        <a
                          href="tel:+919756859054"
                          className="block text-purple-400 text-sm hover:text-purple-300 transition-colors duration-300 cursor-pointer"
                        >
                          📱 9756859054
                        </a>
                      </div>

                      {/* Social Links */}
                      <div className="flex flex-wrap justify-center gap-4">
                        <a
                          href="https://www.linkedin.com/in/amjad-khan-209363320/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-6 py-3 border-2 border-blue-500/50 rounded-2xl font-semibold text-blue-400 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <span className="text-xl">💼</span>
                            LinkedIn
                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                        </a>
                        <a
                          href="https://x.com/AmjadKhan9756"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group px-6 py-3 border-2 border-cyan-500/50 rounded-2xl font-semibold text-cyan-400 hover:bg-cyan-500/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <span className="text-xl">𝕏</span>
                            Twitter
                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                        </a>
                        <a
                          href="mailto:amjadkhann.tech@gmail.com"
                          className="group px-6 py-3 border-2 border-purple-500/50 rounded-2xl font-semibold text-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <span className="text-xl">📧</span>
                            Email
                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/50 rounded-tl-lg" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-pink-500/50 rounded-bl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/50 rounded-br-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                  About me
                </span>
              </div>

              <p className="text-gray-400 text-xl mx-auto leading-relaxed max-w-4xl mb-12">
                Hi, I am Amjad, a Full-stack Developer passionate about
                creating and delivering projects that make a real-world impact.
                I specialize in full-stack development with MERN Stack and
                Express.js, using TypeScript for type safety. I have experience
                with modern web technologies and tools. Have an idea, want to
                collaborate, or have an internship opportunity? Feel free to
                message me! I'm always excited to connect and work on great
                projects.
                
                 Alongside my development work, I am also
                exploring and learning Artificial Intelligence (AI) to expand my
                technical expertise.
              </p>

              <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                My{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 
                          hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 
                          ${
                            category.fullRow || category.subsections
                              ? "lg:col-span-2"
                              : ""
                          }`}
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-4xl`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Content */}
                  {category.fullRow ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800 transition-all duration-300 group/skill overflow-hidden flex flex-col items-center text-center"
                        >
                          <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl group-hover/skill:scale-110 transition-transform duration-300">
                            {skillIndex === 0
                              ? "📊"
                              : skillIndex === 1
                              ? "🧠"
                              : "☕"}
                          </div>
                          <h4 className="text-white font-bold text-xl mb-2 group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:from-purple-400 group-hover/skill:to-pink-400 group-hover/skill:bg-clip-text transition-all duration-200">
                            {skill.name}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : category.subsections ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                            <span className="text-2xl">
                              {subIndex === 0 ? "💻" : "🗄️"}
                            </span>
                            {subsection.subtitle}
                          </h4>
                          <div className="space-y-3">
                            {subsection.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 group/skill"
                              >
                                <h5 className="text-white font-semibold text-base group-hover/skill:text-blue-400 transition-colors duration-200 mb-2">
                                  {skill.name}
                                </h5>
                                <p className="text-gray-400 text-sm">
                                  {skill.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 group/skill"
                        >
                          <h4 className="text-white font-semibold text-lg group-hover/skill:text-blue-400 transition-colors duration-200 mb-2">
                            {skill.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{skill.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  Why MERN Stack?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The MERN stack provides a powerful, unified JavaScript
                  ecosystem for building modern web applications. From database
                  to frontend, I leverage MongoDB for flexible data storage,
                  Express and Node.js for robust server-side operations, and
                  React for creating dynamic, responsive user interfaces.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  Continuous Growth
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Technology evolves rapidly, and so do I. Currently exploring
                  AI and machine learning with Python while mastering advanced
                  MERN concepts. I believe in learning in public and
                  contributing to open source to grow together with the
                  community.
                </p>
              </div>
            </div>

            {/* Tech Stack Visual */}
            <div className="mt-12">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Complete Technology Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "MongoDB",
                    "Express.js",
                    "React.js",
                    "Node.js",
                    "JavaScript",
                    "TypeScript",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Redux Toolkit",
                    "Git",
                    "GitHub",
                    "Postman",
                    "Java",
                    "Python",
                    "DSA",
                    "OOP",
                    "REST API",
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
