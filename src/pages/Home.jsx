import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track"
  ).length;

  const needAttention = friends.filter(
    (friend) => friend.status !== "on-track"
  ).length;

  const interactions = 12;

  const cards = [
    { number: totalFriends, title: "Total Friends" },
    { number: onTrack, title: "On Track" },
    { number: needAttention, title: "Need Attention" },
    { number: interactions, title: "Interactions This Month" },
  ];

  return (
    <div className="max-w-[1110px] mx-auto px-4 md:px-6 lg:px-0 pt-10 md:pt-14">

      {/* Banner */}
      <div className="text-center">
        <h1 className="text-[#1E293B] text-4xl md:text-6xl font-bold leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-[#64748B] mt-5 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-8 bg-[#244D3F] hover:bg-[#1d3d32] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 text-lg font-medium transition">
          <FiPlus size={20} />
          Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 h-[120px] flex flex-col justify-center items-center"
          >
            <h2 className="text-[#244D3F] text-4xl font-bold">
              {card.number}
            </h2>

            <p className="text-[#64748B] mt-3 text-lg">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
    </div>
  );
};

export default Home;