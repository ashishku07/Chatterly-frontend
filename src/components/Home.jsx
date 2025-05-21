const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-pink-100 text-base-content flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
          Welcome to <span className="text-secondary">DevTinder</span> 💻❤️
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern platform to connect with fellow developers based on your
          skills, interests, and goals. Find your perfect coding match today!
        </p>
        <a
          href="/login"
          className="btn btn-primary btn-wide text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          🚀 Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
