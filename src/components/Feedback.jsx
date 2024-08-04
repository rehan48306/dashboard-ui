import { AccountCircleRounded } from '@mui/icons-material';
import React from 'react';

const feedbacks = [
    {
        name: 'Jenny Wilson',
        feedback: 'The food was excellent and so was the service.',
        rating: 5,
    },
    {
        name: 'Dianne Russell',
        feedback: 'We enjoyed the Egg Benedict served on homemade focaccia bread and it was delicious.',
        rating: 4,
    },
    {
        name: 'Devon Lane',
        feedback: 'Nominate works wonders. Their meals are lean meat and tender.',
        rating: 5,
    },
];

const Feedback = () => {
    return (

        <div className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-wrap gap-4">
            <div className="text-xl font-bold">Customer's Feedback</div>
            <ul className="space-y-4 mt-4">
                {feedbacks.map((feedback, index) => (
                    <li key={index} className="border-b border-gray-700 pb-4">
                        <div className='flex items-center'>
                            <AccountCircleRounded className="h-10 w-10 text-gray-400 mr-2" />
                            <div className="text-lg font-semibold">{feedback.name}</div>
                        </div>
                        <div className="text-sm">{feedback.feedback}</div>
                        <div>
                            {[...Array(5)].map((_, starIndex) => {
                                //Adding white color stars based on the condition

                                const isSpecialCase = index === 0 || index === 2;
                                const isLastStar = starIndex === 4;

                                const starColor =
                                    starIndex < feedback.rating
                                        ? isSpecialCase && isLastStar
                                            ? 'text-white'
                                            : 'text-yellow-500'
                                        : 'text-yellow-500';
                                return (
                                    <span
                                        key={starIndex}
                                        className={`inline-block ${starColor}`}
                                    >
                                        ★
                                    </span>
                                );
                            })}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Feedback;
