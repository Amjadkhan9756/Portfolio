function Skill() {
  const skillCategories = [
    {
      title: "DSA Programming",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      description:
        "Strong foundation in algorithms and problem-solving with Java",
      fullRow: true, // 👈 full width
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
      fullRow: true, // 👈 also full width now
      skills: [
        { name: "Artificial Intelligence", desc: "AI/ML  with Python" },
        { name: "Machine Learning", desc: "AI/ML with Python" },
        { name: "Python", desc: "AI/ML libraries & frameworks" },
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
        { name: "Aptitude", desc: "Logical & analytical reasoning" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
              Abut me
            </span>
          </div>
         
          <p className="text-gray-400 text-xl mx-auto leading-relaxed">
            I'm a B.Tech CSE student passionate about Data Structures &
            Algorithms and software development.also MERN Stack Developer with
            experience building multiple projects to strengthen my development
            skills. I have completed a full-stack project called “Entertainment
            Recommendation” and i am currently working on several other
            projects. I believe in the concept of learning in public, and I
            actively share my learning journey online. and also I am planing to
            contribute to open-source projects. Alongside my development work, I
            am also exploring and learning Artificial Intelligence (AI) to
            expand my technical expertise
          </p>
           <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
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
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Full-width layout for DSA & Currently Learning */}
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
                      <h3 className="text-white font-bold text-xl mb-2 group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:from-purple-400 group-hover/skill:to-pink-400 group-hover/skill:bg-clip-text transition-all duration-200">
                        {skill.name}
                      </h3>
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
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <span className="text-2xl">
                          {subIndex === 0 ? "💻" : "🗄️"}
                        </span>
                        {subsection.subtitle}
                      </h3>
                      <div className="space-y-3">
                        {subsection.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 group/skill"
                          >
                            <h4 className="text-white font-semibold text-base group-hover/skill:text-blue-400 transition-colors duration-200 mb-2">
                              {skill.name}
                            </h4>
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
                      <h3 className="text-white font-semibold text-lg group-hover/skill:text-blue-400 transition-colors duration-200 mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Additional Info Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">✨</span>
            Why MERN Stack?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            The MERN stack provides a powerful, unified JavaScript ecosystem for
            building modern web applications. From database to frontend, I
            leverage MongoDB for flexible data storage, Express and Node.js for
            robust server-side operations, and React for creating dynamic,
            responsive user interfaces.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            Continuous Growth
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Technology evolves rapidly, and so do I. Currently exploring AI and
            machine learning with Python while mastering advanced MERN concepts.
            I believe in learning in public and contributing to open source to
            grow together with the community.
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
  );
}

export default Skill;
