import QuestionsForm from "@/components/forms/QuestionsForm";
import React from "react";

const AskQuestion = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">提问问题</h1>
      <div className="mt-9">
        <QuestionsForm />
      </div>
    </div>
  );
};

export default AskQuestion;
