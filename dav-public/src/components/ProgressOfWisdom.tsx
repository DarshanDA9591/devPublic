import Image from 'next/image';


const ProgressOfWisdom = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
            The Progress Of Wisdom
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            ‘Pra’ stands for Progress and ‘Mati’ indicates wisdom. Pramati means
            progress of wisdom. We envision to build a strong learning culture
            that promotes the individuality of all students, unifying them as
            future leaders.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our curriculum is built to impart values, comprehensive education
            and a strong sense of confidence in every child that they can
            succeed and fulfill their aspirations.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/book.jpg"
            alt="Wisdom illustration"
            className="max-w-sm md:max-w-md opacity-80"
            width={400}
            height={400}
          />
        </div>

      </div>
    </section>
  );
};

export default ProgressOfWisdom;
