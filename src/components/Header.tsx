import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-silver to-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">BLA</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-silver font-montserrat">
                BigLeakAlert
              </h1>
              <p className="text-xs text-gray-400 font-open-sans">
                отслеживай утечки, храни контроль
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#news"
              className="text-gray-300 hover:text-silver transition-colors font-open-sans"
            >
              Новости
            </a>
            <a
              href="#database"
              className="text-gray-300 hover:text-silver transition-colors font-open-sans"
            >
              База утечек
            </a>
            <a
              href="#protection"
              className="text-gray-300 hover:text-silver transition-colors font-open-sans"
            >
              Защита
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
