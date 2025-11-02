const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-yellow-100 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        Feel Free to Contact Us
      </h1>

      <p className="text-sm md:text-lg text-gray-300 max-w-md">
        We&apos;re here to help! Reach out to us for any questions, suggestions, or feedback.
      </p>

      <button className="mt-6 px-6 py-2 bg-yellow-300 text-black font-bold rounded-lg shadow-md hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
        Contact Now
      </button>
    </div>
  );
};

export default Page