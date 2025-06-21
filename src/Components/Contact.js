const Contact = () => {
  return (
    <div className="min-h-screen bg-emerald-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-6 py-12 sm:px-10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-emerald-600 dark:text-emerald-400">
          Contact Us
        </h1>
        <p className="text-center text-lg sm:text-xl mb-10 text-slate-700 dark:text-slate-300">
          Have questions, feedback, or just want to say hi? We'd love to hear
          from you!
        </p>

        <div className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-md border border-emerald-200 dark:border-slate-600">
          <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
            Get in Touch
          </h2>

          <p className="mb-4">
            📧 Email us at:{" "}
            <a
              href="mailto:nandavarma84@gmail.com"
              className="text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
            >
              nandavarma84@gmail.com
            </a>
          </p>

          <p className="mb-2">📍 Location: Vesuvio HQ (remote-first)</p>
          <p className="mb-6">🕒 Hours: Mon - Sat | 10:00 AM - 6:00 PM</p>

          <div className="mt-6">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-600 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
