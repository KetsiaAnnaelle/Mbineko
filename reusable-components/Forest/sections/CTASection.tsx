import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#228B22] to-green-700 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Rejoignez la Révolution de la Surveillance Forestière
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Que vous soyez propriétaire forestier, chercheur ou amateur de la nature,
          MBINEKO vous donne les outils pour surveiller nos forêts.
        </p>
        <Button 
          size="lg"
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
        >
          Commencer un test
        </Button>
      </div>
    </section>
  );
}