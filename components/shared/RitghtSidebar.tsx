import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RitghtSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "1这不是人类的问题" },
    { _id: 2, title: "2这不是人类的问题" },
    { _id: 3, title: "3这不是人类的问题" },
    { _id: 4, title: "4这不是人类的问题" },
    { _id: 5, title: "5这不是人类的问题" },
  ];
  const popularTags = [
    { _id: 1, name: "Javascript", totalQuestions: 5 },
    { _id: 2, name: "React", totalQuestions: 5 },
    { _id: 3, name: "Next", totalQuestions: 5 },
    { _id: 4, name: "Vue", totalQuestions: 2 },
    { _id: 5, name: "Redux", totalQuestions: 10 },
  ];
  return (
    <section
      className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px]  flex-col
  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden "
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">问题排行榜</h3>
        <div className="mt-7 flex w-full flex-col  gap-[30px]">
          {hotQuestions.map((hotQuestion) => (
            <Link
              href={`/qustions/${hotQuestion._id}`}
              key={hotQuestion._id}
              className="flex items-center justify-between"
            >
              <p className="body-medium text-dark500_light700">
                {hotQuestion.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">热门语言</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((popularTag) => (
            <RenderTag
              key={popularTag._id}
              _id={popularTag._id}
              name={popularTag.name}
              totalQuestions={popularTag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitghtSidebar;
