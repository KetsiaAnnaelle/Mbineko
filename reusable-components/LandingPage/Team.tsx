// "use client";
// import { motion } from "framer-motion";

const Team = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Équipe et Partenaires</h2>
        <p className="mt-2 text-gray-600">
          Nous croyons que la technologie peut être un allié puissant de la nature.
        </p>

        <div className="mt-10 flex justify-center gap-10">
          <img src="/assets/img/odc.jpg" alt="Orange" className="h-16" />
          <img src="/assets/img/aws.png" alt="AWS" className="h-16" />
        </div>
      </div>
    </section>
  );
};

export default Team;
