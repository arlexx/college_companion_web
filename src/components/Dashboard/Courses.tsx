"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Courses = () => {
  const [isContentVisible, setIsContentVisible] = useState(null);

  const handleArrowClick = (num: any) => {
    setIsContentVisible(() => num);
  };

  const Level100 = [
    {
      firstSemester: [
        {
          id: "UGRC 150",
          name: "Critical Thinking and Practical Reasoning",
        },
        {
          id: "DCIT 101",
          name: "Introduction to Computer Science",
        },
        {
          id: "DCIT 103",
          name: "Office Productivity Toolsg",
        },
        {
          id: "DCIT 105",
          name: "Mathematics for IT Professionals",
        },
        {
          id: "STAT 111",
          name: "Introduction to Statistics and Probability I",
        },
      ],
      secondSemester: [
        {
          id: "UGRC 110",
          name: "Academic Writing I",
        },
        {
          id: "UGRC 131-136",
          name: "Understanding Human Society",
        },
        {
          id: "MATH 122",
          name: "Calculus I",
        },
        {
          id: "STAT 112",
          name: "Introduction to Statistics and Probability II",
        },
        {
          id: "DCIT 104",
          name: "Programming",
        },
        {
          id: "DCIT 102",
          name: "Computer Hardware Fund. and Circuits",
        },
      ],
    },
  ];

  const Level200 = [
    {
      firstSemester: [
        {
          id: "UGRC 210 ",
          name: "Academic Writing II",
        },
        {
          id: "DCIT 201",
          name: "Programming I",
        },
        {
          id: "DCIT 203",
          name: "Digital and Logic Systems Design",
        },
        {
          id: "DCIT 205 ",
          name: "Multi Media and Web Design",
        },
        {
          id: "DCIT 207",
          name: "Computer Architecture & Organisation",
        },
      ],
      secondSemester: [
        {
          id: "UGRC 220",
          name: "Introduction to African Studies",
        },
        {
          id: "DCIT 202 ",
          name: "Mobile Application Development",
        },
        {
          id: "DCIT204",
          name: "Data Structures & Algorithm I",
        },
        {
          id: "DCIT206",
          name: "Systems Administration",
        },
        {
          id: "DCIT 200",
          name: "Internship",
        },
      ],
    },
  ];

  const Level300 = [
    {
      firstSemester: [
        {
          id: "DCIT 301",
          name: "Operating Systems",
        },
        {
          id: "DCIT 303",
          name: "Computer Networks",
        },
        {
          id: "DCIT 305",
          name: "Database Fundamentals",
        },
        {
          id: "DCIT 313",
          name: "Introduction to Artificial Intelligence",
        },
        {
          id: "DCIT 317",
          name: "IT Project Management",
        },
      ],
      secondSemester: [
        {
          id: "DCIT 302",
          name: "Human Computer Interaction",
        },
        {
          id: "DCIT 304",
          name: "Research Methods",
        },
        {
          id: "DCIT 308 ",
          name: "Data Structures & Algorithm II",
        },
        {
          id: "DCIT 312 ",
          name: "Information Security Management",
        },
        {
          id: "DCIT 318",
          name: "Programming II",
        },
      ],
    },
  ];

  const Level400 = [
    {
      firstSemester: [
        {
          id: "DCIT 400 ",
          name: "Project",
        },
        {
          id: "DCIT 401",
          name: " Social, Legal, Ethical and Professional Issues",
        },
        {
          id: "DCIT 409 ",
          name: "Digital Forensics",
        },
        {
          id: "DCIT 415 Advanced Software Engineering",
          name: "Introduction to Artificial Intelligence",
        },
        {
          id: "DCIT 419",
          name: "Agile Methods",
        },
      ],
      secondSemester: [
        {
          id: "DCIT 402 ",
          name: "Management Principles in Computing",
        },
        {
          id: "DCIT 418",
          name: "Systems and Network Security",
        },
        {
          id: "DCIT 428 ",
          name: "Wireless Systems and Networks",
        },
        {
          id: "DCIT 426",
          name: "Telecommunication Systems",
        },
        {
          id: "DCIT 406",
          name: "Advanced Computer Networks",
        },
      ],
    },
  ];

  return (
    <div className=" mt-5">
      <div>
        <h1 className="text-4xl font-medium text-white/70 text-center">
          Information Technology Courses
        </h1>
        <div className="flex flex-wrap gap-3 gap-y-16 w-[75%] mx-auto mt-12">
          <div className="w-[48%]">
            <button
              onClick={() => handleArrowClick(1)}
              className={`w-full ${
                isContentVisible === 1 ? "bg-[#7cc3ea]" : "bg-white/70"
              } py-3 px-3 flex items-center justify-between`}
            >
              <span>Level 100</span>
              <span
                className={`arrow-button transform transition-transform duration-300 ${
                  isContentVisible !== 1 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowUp />
              </span>
            </button>
            {isContentVisible === 1 && (
              <div className="mt-4 text-white">
                {Level100.map((level, index) => (
                  <div key={index} className="text-lg space-y-8">
                    <div>
                      <h3 className=" text-2xl font-semibold ">
                        First Semester
                      </h3>
                      {level.firstSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                    <div className="">
                      <h3 className="text-2xl font-semibold ">
                        Second Semester
                      </h3>
                      {level.secondSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-[48%]">
            <button
              onClick={() => handleArrowClick(2)}
              className={`w-full ${
                isContentVisible === 2 ? "bg-[#7cc3ea]" : "bg-white/70"
              } py-3 px-3 flex items-center justify-between`}
            >
              <span>Level 200</span>
              <span
                className={`arrow-button transform transition-transform duration-300 ${
                  isContentVisible !== 2 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowUp />
              </span>
            </button>
            {isContentVisible === 2 && (
              <div className="mt-4 text-white">
                {Level200.map((level, index) => (
                  <div key={index} className="text-lg space-y-8">
                    <div>
                      <h3 className=" text-2xl font-semibold ">
                        First Semester
                      </h3>
                      {level.firstSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                    <div className="">
                      <h3 className="text-2xl font-semibold ">
                        Second Semester
                      </h3>
                      {level.secondSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-[48%]">
            <button
              onClick={() => handleArrowClick(3)}
              className={`w-full ${
                isContentVisible === 3 ? "bg-[#7cc3ea]" : "bg-white/70"
              } py-3 px-3 flex items-center justify-between`}
            >
              <span>Level 300</span>
              <span
                className={`arrow-button transform transition-transform duration-300 ${
                  isContentVisible !== 3 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowUp />
              </span>
            </button>
            {isContentVisible === 3 && (
              <div className="mt-4 text-white">
                {Level300.map((level, index) => (
                  <div key={index} className="text-lg space-y-8">
                    <div>
                      <h3 className=" text-2xl font-semibold ">
                        First Semester
                      </h3>
                      {level.firstSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                    <div className="">
                      <h3 className="text-2xl font-semibold ">
                        Second Semester
                      </h3>
                      {level.secondSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-[48%]">
            <button
              onClick={() => handleArrowClick(4)}
              className={`w-full ${
                isContentVisible === 4 ? "bg-[#7cc3ea]" : "bg-white/70"
              } py-3 px-3 flex items-center justify-between`}
            >
              <span>Level 400</span>
              <span
                className={`arrow-button transform transition-transform duration-300 ${
                  isContentVisible !== 4 ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowUp />
              </span>
            </button>
            {isContentVisible === 4 && (
              <div className="mt-4 text-white">
                {Level400.map((level, index) => (
                  <div key={index} className="text-lg space-y-8">
                    <div>
                      <h3 className=" text-2xl font-semibold ">
                        First Semester
                      </h3>
                      {level.firstSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                    <div className="">
                      <h3 className="text-2xl font-semibold ">
                        Second Semester
                      </h3>
                      {level.secondSemester.map((course, courseIndex) => (
                        <p key={courseIndex}>
                          {course.id} - {course.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
