const WhoWeAre = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 lg:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* LEFT – Image Cards */}
        <div className="grid grid-cols-2 gap-4">

          {/* Card 1 */}
          <div
            className="relative h-64 bg-cover bg-center flex items-end p-6 text-white overflow-hidden"
            style={{ backgroundImage: "url('/infra1.jpg')" }}
          >
            <div className="absolute inset-0 bg-orange-600/30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <button className="bg-white/90 text-orange-600 px-4 py-2 rounded text-sm font-semibold">
                Discover More →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative h-64 bg-cover bg-center flex items-end p-6 text-white overflow-hidden"
            style={{ backgroundImage: "url('/p2.jpg')" }}
          >
            <div className="absolute inset-0 bg-blue-900/30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Academics</h3>
              <button className="bg-orange-500 px-4 py-2 rounded text-sm">
                Discover More →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative h-64 bg-cover bg-center flex items-end p-6 text-white overflow-hidden"
            style={{ backgroundImage: "url('/infra6.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Learning Beyond</h3>
              <button className="bg-orange-500 px-4 py-2 rounded text-sm">
                Discover More →
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative h-64 bg-cover bg-center flex items-end p-6 text-white overflow-hidden"
            style={{ backgroundImage: "url('/infra3.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Facilities</h3>
              <button className="bg-orange-500 px-4 py-2 rounded text-sm">
                Discover More →
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT – Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our institution is driven by a vision to nurture young minds through
            holistic education, innovation, and values. We believe in creating
            an environment where curiosity meets purpose and learning becomes a
            lifelong journey.
          </p>

          <div className="space-y-5">
            {[
              {
                title: 'Transforming Education',
                desc: 'Encouraging creativity, inquiry-based learning, and innovation in every classroom.',
              },
              {
                title: 'Our Founding Principles',
                desc: 'Integrity, discipline, and excellence guide everything we do.',
              },
              {
                title: 'Values That Shape Us',
                desc: 'Respect, responsibility, and empathy form the core of our culture.',
              },
              {
                title: 'Instructional Excellence',
                desc: 'Blending modern pedagogy with strong academic foundations.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-blue-600 mt-1">✦</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
