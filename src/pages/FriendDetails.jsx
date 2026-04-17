import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  FiClock,
  FiArchive,
  FiTrash2,
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiEdit,
} from "react-icons/fi";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === Number(id));
        setFriend(selected);
      });
  }, [id]);

  if (!friend) {
    return (
      <div className="py-32 text-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  const statusColor = {
    overdue: "bg-[#EF4444]",
    "almost due": "bg-[#EFAD44]",
    "on-track": "bg-[#244D3F]",
  };

  const statusText = {
    overdue: "Overdue",
    "almost due": "Almost Due",
    "on-track": "On-Track",
  };

  return (
    <section className="py-8">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* USER CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center min-h-[430px] flex flex-col justify-center">

              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />

              <h2 className="text-[22px] font-bold text-[#0F172A] mt-5">
                {friend.name}
              </h2>

              <div className="mt-4">
                <span
                  className={`${statusColor[friend.status]} text-white text-xs px-4 py-1 rounded-full font-medium`}
                >
                  {statusText[friend.status]}
                </span>
              </div>

              <div className="flex justify-center flex-wrap gap-2 mt-3">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#CBFADB] text-[#244D3F] text-[11px] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="italic text-[#64748B] mt-6 text-base leading-7 px-2">
                "
                {friend.bio.length < 25
                  ? `${friend.bio} Always supportive and great to stay connected with.`
                  : friend.bio}
                "
              </p>

              <p className="text-[#64748B] mt-4 text-sm">
                {friend.email}
              </p>
            </div>

            {/* BUTTON GROUP = SAME HEIGHT AS QUICK CHECK-IN */}
            <div className="bg-transparent h-[232px] flex flex-col justify-between">

              <button className="w-full h-[64px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                <FiClock />
                Snooze 2 Weeks
              </button>

              <button className="w-full h-[64px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
                <FiArchive />
                Archive
              </button>

              <button className="w-full h-[64px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center gap-3 text-red-500 hover:bg-red-50 transition">
                <FiTrash2 />
                Delete
              </button>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* TOP AREA */}
            <div className="min-h-[430px] flex flex-col gap-6">

              {/* STATS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 h-[130px] flex flex-col justify-center items-center">
                  <h2 className="text-[42px] font-bold text-[#244D3F]">
                    {friend.days_since_contact}
                  </h2>
                  <p className="text-[#64748B] mt-1">
                    Days Since Contact
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 h-[130px] flex flex-col justify-center items-center">
                  <h2 className="text-[42px] font-bold text-[#244D3F]">
                    {friend.goal}
                  </h2>
                  <p className="text-[#64748B] mt-1">
                    Goal (Days)
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 h-[130px] flex flex-col justify-center items-center px-3">
                  <h2 className="text-[28px] font-bold text-[#244D3F] text-center leading-tight">
                    {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </h2>
                  <p className="text-[#64748B] mt-1">
                    Next Due
                  </p>
                </div>

              </div>

              {/* GOAL CARD */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 p-7">

                <div className="flex justify-between items-center">
                  <h3 className="text-[20px] font-semibold text-[#244D3F]">
                    Relationship Goal
                  </h3>

                  <button className="border border-gray-300 px-5 h-[42px] rounded-xl hover:bg-gray-50 flex items-center gap-2">
                    <FiEdit />
                    Edit
                  </button>
                </div>

                <p className="text-[#64748B] mt-8 text-[18px]">
                  Connect every{" "}
                  <span className="font-bold text-black">
                    {friend.goal} days
                  </span>
                </p>
              </div>

            </div>

            {/* QUICK CHECK-IN */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 h-[232px]">

              <h3 className="text-[20px] font-semibold text-[#244D3F] mb-6">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <button className="h-[124px] rounded-2xl border border-gray-400 flex flex-col justify-center items-center gap-3 hover:bg-gray-50 transition">
                  <FiPhone size={28} />
                  <span className="text-xl">Call</span>
                </button>

                <button className="h-[124px] rounded-2xl border border-gray-400 flex flex-col justify-center items-center gap-3 hover:bg-gray-50 transition">
                  <FiMessageSquare size={28} />
                  <span className="text-xl">Text</span>
                </button>

                <button className="h-[124px] rounded-2xl border border-gray-400 flex flex-col justify-center items-center gap-3 hover:bg-gray-50 transition">
                  <FiVideo size={28} />
                  <span className="text-xl">Video</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;