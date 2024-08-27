"use client";

import CountUp from "react-countup";

interface statItem {
  num: number;
  text: string;
}

const stats: statItem[] = [
  { num: 2, text: "Year of experience" },
  { num: 10, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

const Stats = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 mx-auto xl:max-w-none xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.text}
              className="flex flex-1 gap-4 justify-center items-center xl:justify-start "
            >
              <div>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold "
                />
              </div>
              <div
              // className={`${
              //   item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              // }`}
              >
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
