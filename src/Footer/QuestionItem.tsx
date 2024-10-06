import React from 'react';

interface QuestionItemProps {
    question: string;
    id: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, id }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-between px-5 py-4 bg-white rounded-lg shadow-[0px_1px_2px_rgba(113,116,152,0.08)] text-slate-900 max-md:max-w-full">
            <div className="my-auto">{question}</div>
            <img loading="lazy" src={`http://b.io/ext_${id}-`} className="object-contain shrink-0 w-6 aspect-square" alt="" />
        </div>
    );
};

export default QuestionItem;