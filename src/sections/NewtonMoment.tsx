import { motion } from 'framer-motion';

const NewtonMoment = () => {
  return (
    <section className="relative h-[200vh] flex flex-col items-center justify-center px-4">
      <div className="sticky top-[30vh] max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            The apple once changed how we understood gravity.
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-2xl md:text-4xl text-apple-red font-light"
          >
            What if it changed how we fuel the future?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewtonMoment;
