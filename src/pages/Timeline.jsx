import { useEffect, useState } from "react";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import meetupIcon from "../assets/react.svg"; // replace if you have handshake icon

const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("timeline")) || [];

    setEntries(saved);
  }, []);

  const filteredEntries =
    filter === "all"
      ? entries
      : entries.filter(
          (item) =>
            item.action.toLowerCase() === filter
        );

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "call":
        return callIcon;
      case "text":
        return textIcon;
      case "video":
        return videoIcon;
      case "meetup":
        return meetupIcon;
      default:
        return callIcon;
    }
  };

  return (
    <section className="bg-[#F8FAFC] min-h-screen py-14">
      <div className="max-w-[1110px] mx-auto px-4">

        {/* Heading */}
        <h1 className="text-[58px] font-bold text-[#0F172A] leading-none">
          Timeline
        </h1>

        {/* Filter */}
        <div className="mt-8">
          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="w-[280px] h-[52px] bg-white border border-[#E9E9E9] rounded-lg px-4 text-[#64748B] outline-none"
          >
            <option value="all">
              Filter timeline
            </option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
            <option value="meetup">
              Meetup
            </option>
          </select>
        </div>

        {/* Timeline List */}
        <div className="mt-8 space-y-5">

          {filteredEntries.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E9E9E9] rounded-lg h-[92px] px-4 flex items-center gap-5"
            >
              {/* Icon */}
              <img
                src={getIcon(item.action)}
                alt={item.action}
                className="w-10 h-10 object-contain"
              />

              {/* Content */}
              <div>
                <h3 className="text-[16px] leading-tight">
                  <span className="font-semibold text-[#244D3F]">
                    {item.action}
                  </span>

                  <span className="text-[#64748B] ml-1">
                    with {item.friendName}
                  </span>
                </h3>

                <p className="text-[#64748B] text-[14px] mt-1 font-medium">
                  {item.date}
                </p>
              </div>
            </div>
          ))}

          {filteredEntries.length === 0 && (
            <div className="bg-white border border-[#E9E9E9] rounded-lg p-8 text-center text-[#64748B]">
              No timeline entries found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;