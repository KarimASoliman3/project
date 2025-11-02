import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Innovative approaches to solve complex problems',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimized applications for the best user experience',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication skills',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm a passionate frontend developer dedicated to building exceptional digital experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-slideInUp">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            With several years of experience in frontend development, I specialize in creating responsive,
            accessible, and performant web applications. My expertise lies in React, TypeScript, and modern
            CSS frameworks, always staying up-to-date with the latest industry trends.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I believe in writing clean, maintainable code and creating intuitive user interfaces that
            provide seamless experiences across all devices. My goal is to transform ideas into reality
            through elegant code and thoughtful design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
