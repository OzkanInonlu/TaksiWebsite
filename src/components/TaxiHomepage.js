import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Phone, MessageCircle, MapPin, Clock, Star, Car, Plane, Users } from 'lucide-react';
import { contactInfo, taxiPhotos } from '../data/mockData';

const TaxiHomepage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-taxi-yellow to-yellow-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 font-serif">
                {t.hero.title}
              </h1>
              <p className="text-2xl text-gray-800 mb-4 font-semibold">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {t.hero.description}
              </p>
              
              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  {t.hero.callButton}
                </Button>
                <Button 
                  size="lg" 
                  className="bg-whatsapp-green hover:bg-whatsapp-green-dark text-white font-semibold px-8 py-4 text-lg"
                  onClick={() => window.open(contactInfo.whatsappLink, '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {t.hero.whatsappButton}
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={taxiPhotos[0]} 
                  alt="Erkan Özdemir Taxi" 
                  className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-72 object-cover"
                />
                <img 
                  src={taxiPhotos[1]} 
                  alt="Professional Taxi Service" 
                  className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300 w-full h-72 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 font-serif">{t.about.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-taxi-yellow p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.experience}</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-taxi-yellow p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.service}</h3>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-taxi-yellow p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.coverage}</h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <img 
                src={taxiPhotos[2]} 
                alt="Professional Mercedes Taxi" 
                className="rounded-lg shadow-xl w-full h-[36rem] object-cover"
              />
            </div>
            <div className="flex flex-col justify-start">
              <img 
                src={taxiPhotos[3]} 
                alt="Cyprus Taxi Service" 
                className="rounded-lg shadow-xl w-full h-[36rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 font-serif">{t.services.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-taxi-yellow p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Plane className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">{t.services.airport.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.airport.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-taxi-yellow p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Car className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">{t.services.city.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.city.description}</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-taxi-yellow p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-black">{t.services.private.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.services.private.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 font-serif text-taxi-yellow">{t.contact.title}</h2>
            <p className="text-xl text-gray-300">{t.contact.hours}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="bg-taxi-yellow text-black">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t.contact.northCyprus}</h3>
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">{contactInfo.northCyprusPhone}</span>
                </div>
                <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => window.location.href = `tel:${contactInfo.northCyprusPhone}`}
                >
                  {t.hero.callButton}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-taxi-yellow text-black">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t.contact.southCyprus}</h3>
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 mr-2" />
                  <span className="text-2xl font-bold">{contactInfo.southCyprusPhone}</span>
                </div>
                <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => window.location.href = `tel:${contactInfo.southCyprusPhone}`}
                >
                  {t.hero.callButton}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-whatsapp-green hover:bg-whatsapp-green-dark text-white font-bold px-12 py-4 text-xl"
              onClick={() => window.open(contactInfo.whatsappLink, '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              {t.contact.whatsapp}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-taxi-yellow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-4">{t.footer.slogan}</h3>
            <div className="flex justify-center space-x-8 mb-4">
              <a href={`tel:${contactInfo.northCyprusPhone}`} className="text-black hover:text-gray-700 font-semibold">
                {contactInfo.northCyprusPhone}
              </a>
              <a href={`tel:${contactInfo.southCyprusPhone}`} className="text-black hover:text-gray-700 font-semibold">
                {contactInfo.southCyprusPhone}
              </a>
            </div>
            <p className="text-black text-sm">© 2024 Erkan Özdemir Taxi. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaxiHomepage;