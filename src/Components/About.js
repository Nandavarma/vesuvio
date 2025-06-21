const About = () => {
  return (
    <div className="min-h-screen bg-emerald-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-6 py-12 sm:px-10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-emerald-600 dark:text-emerald-400">
          About Vesuvio
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-10">
          Vesuvio is your modern food ordering companion — combining elegant
          design, real-time delivery, and curated restaurant listings into one
          delicious experience.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {/* Our Story */}
          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-emerald-200 dark:border-slate-600">
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
              Our Story
            </h2>
            <p>
              Born out of a passion for flavorful food and seamless tech,
              Vesuvio bridges the gap between top-rated local kitchens and
              hungry hearts across the city.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-emerald-200 dark:border-slate-600">
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Handpicked restaurants and cuisines</li>
              <li>Real-time order tracking</li>
              <li>Custom filters: Veg, Ratings, and more</li>
              <li>Responsive UI with dark mode</li>
              <li>Secure & seamless payments</li>
            </ul>
          </div>

          {/* Our Mission */}
          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-emerald-200 dark:border-slate-600">
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
              Our Mission
            </h2>
            <p>
              We strive to redefine online food delivery by making it faster,
              smarter, and more delightful — so your cravings are satisfied with
              just a few taps.
            </p>
          </div>

          {/* Why Vesuvio */}
          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border border-emerald-200 dark:border-slate-600">
            <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
              Why Choose Vesuvio?
            </h2>
            <p>
              From curated playlists of restaurants to rich visual cards,
              Vesuvio’s modern design and performance-focused UI bring a smooth
              and immersive food browsing experience.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-2">🚀 Ready to Order?</h3>
          <p>
            Explore the menu at{" "}
            <a
              href="https://vesuvio-in.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
            >
              vesuvio-in.vercel.app
            </a>{" "}
            and taste the future of food delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
