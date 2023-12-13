import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1a2b3c4d5e",
    title: "What is the capital of France?",
    tags: [
      { _id: "tag1", name: "Capital" },
      { _id: "tag2", name: "France" },
    ],
    author: {
      _id: "author1",
      name: "Alice",
      picture: "https://example.com/alice.jpg",
    },
    upvotes: 15711020,
    views: 105020200,
    answers: [
      { answerText: "Paris", upvotes: 8 },
      { answerText: "London", upvotes: 2 },
    ],
    createdAt: new Date("2023-07-19T08:10:20Z"),
  },
  {
    _id: "2a3b4c5d6e",
    title: "How do I install Node.js?",
    tags: [
      { _id: "tag1", name: "Node.js" },
      { _id: "tag2", name: "Installation" },
    ],
    author: {
      _id: "author2",
      name: "Bob",
      picture: "https://example.com/bob.jpg",
    },
    upvotes: 15,
    views: 80,
    answers: [
      { answerText: "Follow the official guide", upvotes: 12 },
      { answerText: "Use a package manager", upvotes: 3 },
    ],
    createdAt: new Date("2023-07-19T08:10:20Z"),
  },
  {
    _id: "3a4b5c6d7e",
    title: "Which programming language should I learn first?",
    tags: [
      { _id: "tag1", name: "First Programming Language" },
      { _id: "tag2", name: "Language Selection" },
    ],
    author: {
      _id: "author3",
      name: "Charlie",
      picture: "https://example.com/charlie.jpg",
    },
    upvotes: 20,
    views: 120,
    answers: [
      { answerText: "Python", upvotes: 10 },
      { answerText: "JavaScript", upvotes: 5 },
      { answerText: "C++", upvotes: 5 },
    ],
    createdAt: new Date("2023-07-19T08:10:20Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="h1-bold text-dark100_light900">所有问题</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            提问问题
          </Button>
        </Link>
      </div>
      <div className=" mt-11 flex  justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="搜索一个问题"
          otherClass="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="没有可以展示的问题"
            description="快抢一个沙发吧！提一个问题难倒众人，世界之大，让他们知道自己有愚蠢。加一些废，让这里更加充实！看到这傻眼了吧！"
            link="/"
            linkTitle="提问问题"
          />
        )}
      </div>
    </>
  );
}
