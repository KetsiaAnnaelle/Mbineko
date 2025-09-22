import { motion } from "framer-motion";
import { Satellite, Download, Shield, MapPin } from "lucide-react";

const FunctionnalitiesSection = () => {
  const features = [
    {
      title: "Surveillance en temps réel",
      description: "de votre zone forestière",
      icon: <Satellite className="w-6 h-6" />
    },
    {
      title: "Localisation GPS précise",
      description: "de chaque équipement",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Assistance technique 24h/24 et 7j/7",
      description: "et maintenance",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Données téléchargeables",
      description: "et rapports détaillés",
      icon: <Download className="w-6 h-6" />
    }
  ];

  // Variantes d'animation pour l'arborescence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const branchVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-green-900 mb-4"
          >
            FONCTIONNALITES
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
            Chaque kit MBINEKO comprend des drones de surveillance, des capteurs environnementaux 
            et un accès complet à notre plateforme de surveillance.
          </motion.p>
        </div>

        {/* Arborescence des fonctionnalités */}
        <div className="relative">
          {/* Tronc principal - visible seulement sur desktop */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 bg-green-200 -translate-x-1/2 z-0"
          />

          {/* Conteneur principal responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Colonne gauche - 2 premières fonctionnalités */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12 pt-4"
            >
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  {/* Branche de connexion - visible seulement sur desktop */}
                  <motion.div
                    variants={branchVariants}
                    className="hidden md:block w-8 h-0.5 bg-green-400 mt-5 mr-4"
                  />
                  
                  {/* Cercle de connexion - visible seulement sur desktop */}
                  <div className="relative mt-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                      className="hidden md:block w-4 h-4 rounded-full bg-green-600 absolute -left-7 top-1 z-10"
                    />
                  </div>

                  {/* Carte de fonctionnalité */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-1"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 p-2 bg-green-100 rounded-lg text-green-700">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-900 text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Colonne droite - 2 dernières fonctionnalités */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12 pt-4"
            >
              {features.slice(2, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  {/* Branche de connexion - visible seulement sur desktop */}
                  <motion.div
                    variants={branchVariants}
                    className="hidden md:block w-8 h-0.5 bg-green-400 mt-5 mr-4"
                  />
                  
                  {/* Cercle de connexion - visible seulement sur desktop */}
                  <div className="relative mt-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                      className="hidden md:block w-4 h-4 rounded-full bg-green-600 absolute -left-7 top-1 z-10"
                    />
                  </div>

                  {/* Carte de fonctionnalité */}
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-1"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4 p-2 bg-green-100 rounded-lg text-green-700">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-900 text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Version mobile - arborescence verticale */}
          <div className="md:hidden relative mt-8">
            {/* Tronc vertical pour mobile */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-6 top-0 bottom-0 w-2 bg-green-200 z-0"
            />
            
            {/* Cercles de connexion pour mobile */}
            {features.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                className="w-4 h-4 rounded-full bg-green-600 absolute left-5 z-10"
                style={{ top: `${20 + index * 25}%` }}
              />
            ))}
          </div>

          {/* Racines / Base de l'arbre - visible seulement sur desktop */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block absolute left-1/2 bottom-0 w-6 h-12 bg-green-300 -translate-x-1/2 origin-bottom z-0 rounded-t-lg"
          />

          {/* Illustration centrale (cime de l'arbre) - visible seulement sur desktop */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-25 h-25 rounded-full flex items-center justify-center p-3 shadow-lg border-4 border-white">
              {/* <TreePine className="w-10 h-10 text-white" /> */}
              <img src="/assets/img/logo.png" className="w-15 h-15" />
            </div>
          </motion.div>
        </div>

        {/* Image illustrative en bas */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <img 
              src="/assets/img/img-functionnalities.PNG" 
              alt="Interface MBINEKO" 
              className="w-full rounded-xl shadow-md border border-green-100"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-30 z-0"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-40 z-0"
            ></motion.div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default FunctionnalitiesSection;