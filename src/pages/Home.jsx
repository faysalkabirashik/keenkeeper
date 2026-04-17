import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router";

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

  const cards = [
    { number: totalFriends, title: "Total Friends" },
    { number: onTrack, title: "On Track" },
    { number: needAttention, title: "Need Attention" },
    { number: 12, title: "Interactions This Month" },
  ];

  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-[#EF4444]";
    if (status === "almost due") return "bg-[#EFAD44]";
    return "bg-[#244D3F]";
  };

  return (
    <div className="max-w-[1110px] mx-auto px-4 md:px-6 lg:px-0 pt-10">

      {/* Banner */}
      <div className="text-center">
        <h1 className="text-[#1E293B] text-4xl md:text-6xl font-bold">
          Friends to keep close in your life
        </h1>

        <p className="text-[#64748B] mt-5 max-w-3xl mx-auto text-sm md:text-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-8 bg-[#244D3F] hover:bg-[#1f4034] text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition">
          <FiPlus size={20} />
          Add a Friend
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white h-[120px] rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center"
          >
            <h2 className="text-[#244D3F] text-4xl font-bold">
              {card.number}
            </h2>

            <p className="text-[#64748B] mt-2 text-lg">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-10"></div>

      {/* Friends Section */}
      <div className="mt-10">
        <h2 className="text-[#1E293B] text-4xl font-bold mb-8">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
            <Link
              to={`/friend/${friend.id}`}
              key={friend.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition h-[290px] flex flex-col items-center justify-center text-center px-4"
            >
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full object-cover"
              />

              <h3 className="mt-5 text-4xl md:text-[20px] font-bold text-[#1E293B]">
                {friend.name}
              </h3>

              <p className="text-[#64748B] mt-2 text-sm">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex gap-2 flex-wrap justify-center mt-3">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#CBFADB] text-[#244D3F] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                className={`${getStatusColor(
                  friend.status
                )} text-white text-sm px-4 py-1 rounded-full mt-3`}
              >
                {friend.status === "on-track"
                  ? "On-Track"
                  : friend.status === "almost due"
                  ? "Almost Due"
                  : "Overdue"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;