// "use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Votre adresse mail"
              className="w-full border rounded-lg px-4 py-3"
            />
            <input
              type="text"
              placeholder="Votre numéro de téléphone"
              className="w-full border rounded-lg px-4 py-3"
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              className="w-full border rounded-lg px-4 py-3"
            ></textarea>
            <Button className="bg-green-600 text-white hover:bg-green-700 w-full">
              Envoyer
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
