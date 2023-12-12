import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="text-dark100_light900 mt-11 flex  justify-between max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="搜索一个问题"
          otherClass="flex-1"
        />
        <div>Filters</div>
      </div>
    </>
  );
}
