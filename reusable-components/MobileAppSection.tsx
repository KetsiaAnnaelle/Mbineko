import { motion } from "framer-motion";
import { Smartphone, Download, QrCode, Shield, BarChart3, MapPin } from "lucide-react";

const MobileAppSection = () => {
  return (
    <section id="mobile-app" className="py-16 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-green-900 mb-4"
          >
            La puissance de MBINEKO dans votre poche
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-green-600 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Surveillez vos forêts où que vous soyez grâce à notre application mobile intuitive et performante
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Partie gauche - Image du téléphone avec animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Téléphone */}
              <motion.div
                initial={{ rotate: -5, y: 20 }}
                whileInView={{ rotate: 0, y: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative z-10 w-72 mx-auto"
              >
                <div className="relative bg-gray-800 rounded-[40px] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-lg z-20"></div>
                  <div className="overflow-hidden rounded-[32px] border border-gray-700">
                    <img 
                      src="/assets/img/maquette mobile.PNG" 
                      alt="Interface professionnelle de l'application MBINEKO" 
                      className="w-full h-auto object-cover"
                      style={{ minHeight: '500px' }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Effets d'arrière-plan animés */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-green-400 rounded-full blur-xl"
              ></motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-500 rounded-full blur-xl"
              ></motion.div>
            </div>
          </motion.div>

          {/* Partie droite - Contenu et QR Code */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-900">
                Téléchargez l'application dès maintenant
              </h3>
              
              <p className="text-gray-700">
                Accédez à toutes les fonctionnalités de surveillance forestière directement depuis votre smartphone :
              </p>

              {/* Liste des fonctionnalités */}
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">Localisation GPS en temps réel de vos équipements</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">Données et analyses accessibles à tout moment</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700">Alertes instantanées en cas de détection d'anomalies</p>
                </motion.div>
              </div>

              {/* QR Code et boutons de téléchargement */}
              <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
                {/* QR Code avec animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-green-100"
                >
                  <div className="flex items-center mb-2">
                    <QrCode className="w-5 h-5 text-green-700 mr-2" />
                    <span className="text-sm font-medium text-green-900">Scanner pour télécharger</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-green-200">
                    <img 
                      src="/assets/img/qr-code.png" 
                      alt="QR Code pour télécharger l'application MBINEKO" 
                      className="w-32 h-32"
                    />
                  </div>
                </motion.div>

                {/* Boutons de téléchargement */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <button className="flex items-center justify-center w-full bg-black text-white py-3 px-6 rounded-lg shadow hover:shadow-md transition">
                      <div className="mr-3">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M17.924 17.315c-.057.174-.193.332-.348.367-.156.035-.343-.047-.483-.197-1.415-1.65-2.74-2.027-3.993-1.973-.213.009-.38.06-.503.154-.121.094-.193.231-.193.38 0 .086.02.172.06.258.135.287.422.6.86.94.58.454.94.812 1.077 1.076.137.264.137.58-.001.948l-.015.03c-.136.316-.395.64-.777.97-.341.291-.758.582-1.25.87-.677.397-1.33.595-1.956.595-.626 0-1.28-.198-1.957-.595-.492-.288-.909-.579-1.25-.87-.382-.33-.64-.654-.777-.97-.138-.367-.138-.683 0-.948.137-.264.497-.622 1.077-1.076.438-.34.725-.653.86-.94.04-.086.06-.172.06-.258 0-.15-.072-.287-.193-.38-.122-.095-.29-.146-.503-.154-1.253-.054-2.578.323-3.993 1.973-.14.15-.327.232-.483.197-.155-.035-.291-.193-.348-.367-.057-.174-.048-.397.026-.658.266-.94 1.036-1.792 2.31-2.555 1.152-.687 2.533-1.032 4.144-1.032 1.611 0 2.992.345 4.144 1.032 1.274.763 2.044 1.615 2.31 2.555.074.261.083.484.026.658zm-5.924-11.315c1.934 0 3.5-1.566 3.5-3.5s-1.566-3.5-3.5-3.5-3.5 1.566-3.5 3.5 1.566 3.5 3.5 3.5z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs">Télécharger sur</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <button className="flex items-center justify-center w-full bg-black text-white py-3 px-6 rounded-lg shadow hover:shadow-md transition">
                      <div className="mr-3">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M4.868 15.66c-.218.520-.108.972.328 1.354.437.382 1.04.437 1.64.273 1.64-.437 3.553-1.09 5.174-1.963 1.967-1.09 3.553-2.29 4.476-3.327.928-1.037 1.422-2.127 1.422-3.049 0-.6-.218-1.09-.655-1.473-.437-.382-1.04-.437-1.64-.273-1.64.437-3.553 1.09-5.174 1.963-1.967 1.09-3.553 2.29-4.476 3.327-.928 1.037-1.422 2.127-1.422 3.049 0 .6.218 1.09.655 1.473.437.382 1.04.437 1.64.273zm15.132-6.66c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs">Disponible sur</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bannière inférieure avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-green-700 rounded-2xl p-6 md:p-8 text-white text-center relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-green-800 opacity-30"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-green-900 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Rejoignez plus de 10 000 utilisateurs satisfaits
            </h3>
            <p className="max-w-2xl mx-auto">
              L'application MBINEKO a déjà été téléchargée par des milliers de professionnels de la sylviculture à travers le monde.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppSection;