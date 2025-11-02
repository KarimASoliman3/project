import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="max-w-[320px] text-slate-400 leading-relaxed">
              Creating beautiful and functional web experiences with passion and precision.
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 pl-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/KarimASoliman3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/karim-soliman-a45a1a1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:karimsolimanfcb10@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>


        <div className="border-t border-slate-800 py-6 flex flex-col justify-center items-center animate-fadeIn">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <span className='text-slate-300 font-medium text-[16px]'>KarimASoliman3</span> Frontend Developer. All rights reserved.
          </p>
          {/* <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> and React
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
