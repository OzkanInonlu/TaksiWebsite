import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Header = () => {
  const { t, currentLanguage, changeLanguage, languages } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' }, 
    { key: 'contact', href: '#contact' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="bg-taxi-yellow text-black px-4 py-2 rounded-lg font-bold text-xl">
              TAXI
            </div>
            <div className="ml-3">
              <div className="text-xl font-bold text-gray-900">Erkan Özdemir</div>
              <div className="text-sm text-gray-600">7/24 Taksi Hizmeti</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-taxi-yellow font-medium transition-colors duration-200"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>{currentLang?.flag}</span>
                  <span>{currentLang?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={currentLanguage === lang.code ? 'bg-taxi-yellow' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Call Button */}
            <Button 
              className="bg-taxi-yellow hover:bg-yellow-500 text-black font-semibold"
              onClick={() => window.location.href = `tel:${contactInfo.northCyprusPhone}`}
            >
              <Phone className="h-4 w-4 mr-2" />
              {t.hero.callButton}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block text-gray-700 hover:text-taxi-yellow font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      variant={currentLanguage === lang.code ? "default" : "outline"}
                      className={`text-xs ${currentLanguage === lang.code ? 'bg-taxi-yellow text-black' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mobile Call Button */}
              <Button 
                className="w-full bg-taxi-yellow hover:bg-yellow-500 text-black font-semibold"
                onClick={() => window.location.href = `tel:${contactInfo.northCyprusPhone}`}
              >
                <Phone className="h-4 w-4 mr-2" />
                {t.hero.callButton}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;