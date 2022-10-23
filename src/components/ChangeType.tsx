import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //Possible questions types
    type QuestionType = "multiple_choice_question" | "short_answer_question";

    //Record to hold the questionType changes
    const typeTransitions: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question"
    };

    //State
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function swapType(): void {
        const newQuestionType = typeTransitions[questionType];
        setQuestionType(newQuestionType);
    }

    return (
        <div>
            <Button onClick={swapType}>Change Type</Button>
            {questionType === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
