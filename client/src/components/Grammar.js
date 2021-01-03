import React, { useState } from 'react';
import './Grammar.css';
export default function Grammar() {
	const questions = [
		{
			questionText: '"No students can get _____ with cheating in the exam.” the teacher said',
			answerOptions: [
				{ answerText: 'A. along', isCorrect: false },
				{ answerText: 'B. up', isCorrect: false },
				{ answerText: 'C. away', isCorrect: true },
				{ answerText: 'D. on', isCorrect: false },
			],
		},
		{
			questionText: 'He said he couldn’t give me a detailed description of the man because he had only _____ at him briefly.',
			answerOptions: [
				{ answerText: 'A. gazed', isCorrect: false },
				{ answerText: 'B. stared', isCorrect: false },
				{ answerText:'C. glanced' , isCorrect: true },
				{ answerText: 'D. glared', isCorrect: false },
			],
        },
        {
			questionText: 'The children ran away as if they _____ a ghost.',
			answerOptions: [
				{ answerText: 'A. saw', isCorrect: false },
				{ answerText: 'B. see', isCorrect: true },
				{ answerText:'C. had seen' , isCorrect: false },
				{ answerText: 'D. have seen', isCorrect: false },
			],
        },
        {
			questionText: 'We were so late that we _______had time to catch the train',
			answerOptions: [
				{ answerText: 'A. hardly', isCorrect: true },
				{ answerText: 'B. nearly', isCorrect: false },
				{ answerText:'C. almost' , isCorrect: false },
				{ answerText: 'D. simply', isCorrect: false },
			],
        },
        {
			questionText: 'Frankly, I’d rather you ________________in that case.',
			answerOptions: [
				{ answerText: 'A. not involved', isCorrect: false },
				{ answerText: ' B. were not involved', isCorrect: true },
				{ answerText:'C. will not be involved' , isCorrect: false },
				{ answerText: 'D. wouldn’t be involved', isCorrect: false },
			],
        },
        {
			questionText: 'Most of ___________archaeologists know about prehistoric cultures is based on studies of material remains.',
			answerOptions: [
				{ answerText: 'A. the', isCorrect: false },
				{ answerText: 'B. what', isCorrect: true },
				{ answerText:'C. which' , isCorrect: false },
				{ answerText: 'D. those', isCorrect: false },
			],
        },
        {
			questionText: 'He was expecting a prison sentence but the judge took ______ on him.',
			answerOptions: [
				{ answerText: 'A. disgrace', isCorrect: false },
				{ answerText: 'B. shame', isCorrect: false },
				{ answerText:'C. dishonors' , isCorrect: false },
				{ answerText: 'D. pity', isCorrect: true },
			],
        },
        {
			questionText: ' It is high time that measures ___________ to prevent further traffic accidents.',
			answerOptions: [
				{ answerText: 'A. are taken', isCorrect: false },
				{ answerText: 'B. were taken', isCorrect: true },
				{ answerText:'C. should be taken' , isCorrect: false },
				{ answerText: 'D. should have been taken', isCorrect: false },
			],
        },
        {
			questionText: 'Don’t drop litter wherever you want, ____________?',
			answerOptions: [
				{ answerText: ' A. don’t you', isCorrect: false },
				{ answerText: 'B. won’t you', isCorrect: false },
				{ answerText:'C. will you' , isCorrect: true },
				{ answerText: 'D. do you', isCorrect: false },
			],
        },
        {
			questionText: 'We ____________ the car for half a year before it was stolen.',
			answerOptions: [
				{ answerText: 'A. had owned', isCorrect: true },
				{ answerText: 'B. have owned', isCorrect: false },
				{ answerText:'C. were owning' , isCorrect: false },
				{ answerText: 'D. owned', isCorrect: false },
			],
        },
        {
			questionText: 'The fire was caused by an _____ failure in the engine.',
			answerOptions: [
				{ answerText: ' A. electrician', isCorrect: false },
				{ answerText: 'B. electricity', isCorrect: false },
				{ answerText:'C. electric' , isCorrect: false },
				{ answerText: 'D. electrical', isCorrect: true },
			],
        },
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <body className='flex justify-center items-center h-screen'>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </body>
	);
}