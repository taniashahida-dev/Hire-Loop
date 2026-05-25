import {
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaStar,
} from 'react-icons/fa6';

export default function HeroStats() {
  const stats = [
    {
      id: 1,
      icon: <FaBriefcase size={22} />,
      number: '50K',
      label: 'Active Jobs',
    },
    {
      id: 2,
      icon: <FaBuilding size={22} />,
      number: '12K',
      label: 'Companies',
    },
    {
      id: 3,
      icon: <FaUsers size={22} />,
      number: '2M',
      label: 'Job Seekers',
    },
    {
      id: 4,
      icon: <FaStar size={22} />,
      number: '97%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:border-violet-500/40 transition-all duration-300"
        >
          <div className="text-gray-300">
            {stat.icon}
          </div>

          <h2 className="mt-8 text-5xl font-bold">
            {stat.number}
          </h2>

          <p className="mt-3 text-gray-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}