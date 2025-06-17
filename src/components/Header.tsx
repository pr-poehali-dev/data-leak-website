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
            <a
              href="https://t.me/your_bot_username"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-onyx text-silver px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 font-open-sans"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.377 2.617-1.273 3.071-2.616 1.875-.747-.666-1.252-1.108-2.684-1.548-.19-.059-.29-.223-.29-.428 0-.286.172-.542.415-.542.112 0 .224.037.224.037s3.017.012 4.166-.037c.669-.028 1.137-.177 1.482-.177.669 0 1.331.037 1.331.037s.224 0 .224-.037c0-.177-.112-.428-.298-.542l-1.927-1.214c-.224-.149-.671-.037-.671-.037s-1.667.037-2.467.037c-.224 0-.448-.037-.448-.037s-.112-.037-.112-.149c0-.037.037-.112.112-.149l2.019-1.214c.298-.177.447-.428.447-.766 0-.112-.037-.224-.112-.298-.224-.224-.56-.298-.896-.298-.224 0-.448.037-.672.112l-1.815.56c-.037.012-.075.012-.112.012-.224 0-.447-.149-.447-.373 0-.149.075-.298.224-.373l3.278-1.548c.298-.149.597-.224.896-.224.896 0 1.63.747 1.63 1.673 0 .224-.037.448-.112.672z" />
              </svg>
              <span>Проверить кибергигиену</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
