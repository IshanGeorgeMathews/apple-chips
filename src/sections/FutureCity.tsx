import { motion } from 'framer-motion';

const FutureCity = () => {
  return (
    <section className="relative h-[150vh] bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-apple-green/5 to-black" />

      <div className="sticky top-0 h-screen flex items-center justify-center">
         <div className="relative text-center z-10 px-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
            >
               THE FUTURE <br />
               IS <span className="text-apple-green">PERSONAL</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Welcome to the era of intelligent nutrition. A world where what you eat is as smart as the devices you use.
            </p>
         </div>

         {/* Digital Billboard effects */}
         <div className="absolute top-1/4 left-0 w-full flex justify-between px-10 opacity-20 pointer-events-none">
            <div className="text-[10vw] font-black leading-none select-none">DATA</div>
            <div className="text-[10vw] font-black leading-none select-none text-apple-green">CRUNCH</div>
         </div>
         <div className="absolute bottom-1/4 left-0 w-full flex justify-around px-10 opacity-10 pointer-events-none">
            <div className="text-[5vw] font-black leading-none select-none">SUSTAINABLE</div>
            <div className="text-[5vw] font-black leading-none select-none">AI DRIVEN</div>
         </div>
      </div>
    </section>
  );
};

export default FutureCity;
