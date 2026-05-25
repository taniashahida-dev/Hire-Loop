import { FiSearch } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

export default function HeroContent() {
  const tags = [
    'Product Designer',
    'AI Engineering',
    'Dev-ops Engineer',
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300">
        <span className="text-orange-400">💼</span>

        <span className="font-semibold text-white">
          50,000+
        </span>

        <span>NEW JOBS THIS MONTH</span>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
        Find Your Dream Job Today
      </h1>

      {/* Description */}
      <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-8">
        HireLoop connects top talent with world-class companies.
        Browse thousands of curated opportunities and land your
        next role — faster.
      </p>

      {/* Search Box */}
      <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-3 flex flex-col md:flex-row items-center gap-3">
        {/* Search Input */}
        <div className="flex items-center gap-3 w-full px-3">
          <FiSearch size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Job title, skill or company"
            className="bg-transparent w-full outline-none text-sm text-white placeholder:text-gray-500"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-white/10"></div>

        {/* Location Input */}
        <div className="flex items-center gap-3 w-full px-3">
          <IoLocationOutline size={20} className="text-gray-400" />

          <input
            type="text"
            placeholder="Location or Remote"
            className="bg-transparent w-full outline-none text-sm text-white placeholder:text-gray-500"
          />
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 transition-all duration-300 p-4 rounded-xl">
          <FiSearch size={20} />
        </button>
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        <span className="text-gray-400">
          Trending Position
        </span>

        {tags.map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-violet-600 hover:text-white transition-all duration-300"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}