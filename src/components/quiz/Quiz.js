import './Quiz.scss';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Quiz = () => {
	const [questions] = useState([
		{
			question: 'For explaining, which new technology is used?',
			id: 1,
			category: 'html',
			answers: [
				{
					answer: '<dfn>',
					id: 1
				},
				{
					answer: '<cite>',
					id: 2
				},
				{
					answer: '<abbr>',
					id: 3
				},
				{
					answer: '<address>',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Which element indicates about something which is no longer accurate?',
			id: 2,
			category: 'html',
			answers: [
				{
					answer: '<s>',
					id: 1
				},
				{
					answer: '<ins>',
					id: 2
				},
				{
					answer: '<del>',
					id: 3
				},
				{
					answer: '<address>',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Metadata does not define?',
			id: 3,
			category: 'html',
			answers: [
				{
					answer: 'color',
					id: 1
				},
				{
					answer: 'scripts',
					id: 2
				},
				{
					answer: 'links',
					id: 3
				},
				{
					answer: 'character set',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'In HTML5 which element defines thematic change in the content?',
			id: 4,
			category: 'html',
			answers: [
				{
					answer: '<hr>',
					id: 1
				},
				{
					answer: '<h1>',
					id: 2
				},
				{
					answer: '<head>',
					id: 3
				},
				{
					answer: '<p>',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Which element defines preformatted text?',
			id: 5,
			category: 'html',
			answers: [
				{
					answer: '<pre>',
					id: 1
				},
				{
					answer: '<p>',
					id: 2
				},
				{
					answer: '<hr>',
					id: 3
				},
				{
					answer: '<ins>',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'A recently created additional top-level domain name is ?',
			id: 6,
			category: 'internet',
			answers: [
				{
					answer: 'pro',
					id: 1
				},
				{
					answer: 'plan',
					id: 2
				},
				{
					answer: 'business',
					id: 3
				},
				{
					answer: 'school',
					id: 4
				},
				{
					answer: 'None of these',
					id: 5
				}
			],
			correctAnswer: 1
		},
		{
			question: 'All of the following are top-level domains EXCEPT ?',
			id: 7,
			category: 'internet',
			answers: [
				{
					answer: 'army',
					id: 1
				},
				{
					answer: 'com',
					id: 2
				},
				{
					answer: 'mil',
					id: 3
				},
				{
					answer: 'org',
					id: 4
				},
				{
					answer: 'None of these',
					id: 5
				}
			],
			correctAnswer: 1
		},
		{
			question: 'The system that translates an IP address into an easier to remember name is the ?',
			id: 8,
			category: 'internet',
			answers: [
				{
					answer: 'domain name system',
					id: 1
				},
				{
					answer: 'packet-switching domain system',
					id: 2
				},
				{
					answer: 'domain',
					id: 3
				},
				{
					answer: 'domain numbering system',
					id: 4
				},
				{
					answer: 'None of these',
					id: 5
				}
			],
			correctAnswer: 1
		},
		{
			question: 'The way in which information is transmitted to multiple Internet-connected devices is called ?',
			id: 9,
			category: 'internet',
			answers: [
				{
					answer: 'multitasking',
					id: 1
				},
				{
					answer: 'Internet connectivity',
					id: 2
				},
				{
					answer: 'IP address',
					id: 3
				},
				{
					answer: 'multicasting',
					id: 4
				},
				{
					answer: 'None of these',
					id: 5
				}
			],
			correctAnswer: 1
		},
		{
			question: 'This address changes temporarily as the applications connect to the Internet?',
			id: 10,
			category: 'internet',
			answers: [
				{
					answer: 'dynamic IP address',
					id: 1
				},
				{
					answer: 'static IP address',
					id: 2
				},
				{
					answer: 'unique IP address',
					id: 3
				},
				{
					answer: 'common name and number',
					id: 4
				},
				{
					answer: 'None of these',
					id: 5
				}
			],
			correctAnswer: 1
		},
		{
			question: 'If we want define style for an unique element, then which css selector will we use ?',
			id: 11,
			category: 'css',
			answers: [
				{
					answer: 'Id',
					id: 1
				},
				{
					answer: 'text',
					id: 2
				},
				{
					answer: 'class',
					id: 3
				},
				{
					answer: 'class',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'If we dont want to allow a floating div to the left side of an element, which css property will we use ?',
			id: 12,
			category: 'css',
			answers: [
				{
					answer: 'float',
					id: 1
				},
				{
					answer: 'margin',
					id: 2
				},
				{
					answer: 'clear',
					id: 3
				},
				{
					answer: 'padding',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?',
			id: 13,
			category: 'css',
			answers: [
				{
					answer: 'z-index',
					id: 1
				},
				{
					answer: 's-index',
					id: 2
				},
				{
					answer: 'd-index',
					id: 3
				},
				{
					answer: 'x-index',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Can we align a Block element by setting the left and right margins ?',
			id: 14,
			category: 'css',
			answers: [
				{
					answer: 'Not Possible',
					id: 1
				},
				{
					answer: 'Yes, we can',
					id: 2
				}
			],
			correctAnswer: 1
		},
		{
			question: 'If we want to wrap a block of text around an image, which css property will we use ?',
			id: 15,
			category: 'css',
			answers: [
				{
					answer: 'float',
					id: 1
				},
				{
					answer: 'wrapB',
					id: 2
				},
				{
					answer: 'push',
					id: 3
				},
				{
					answer: 'align',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Which of the following is a server-side Java Script object?',
			id: 16,
			category: 'javascript',
			answers: [
				{
					answer: 'File',
					id: 1
				},
				{
					answer: 'Function',
					id: 2
				},
				{
					answer: 'FileUpload',
					id: 3
				},
				{
					answer: 'Date',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'Java script can be used for Storing the forms contents to a database file on the server',
			id: 17,
			category: 'javascript',
			answers: [
				{
					answer: 'False',
					id: 1
				},
				{
					answer: 'True',
					id: 2
				}
			],
			correctAnswer: 1
		},
		{
			question: 'To insert a JavaScript into an HTML page, which tag is used?',
			id: 18,
			category: 'javascript',
			answers: [
				{
					answer: '<script>',
					id: 1
				},
				{
					answer: '< script=’java’>',
					id: 2
				},
				{
					answer: '< javascript>',
					id: 3
				},
				{
					answer: '< js>',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'How does Java Script store dates in objects of Date type?',
			id: 19,
			category: 'javascript',
			answers: [
				{
					answer: 'The number of milliseconds since January 1st, 1970',
					id: 1
				},
				{
					answer: 'The number of days since January 1st, 1900',
					id: 2
				},
				{
					answer: 'The number of seconds since January 1st, 1970',
					id: 3
				},
				{
					answer: 'The number of picoseconds since January 1st, 1970',
					id: 4
				}
			],
			correctAnswer: 1
		},
		{
			question: 'C-style block-level scoping is not supported in Java script',
			id: 20,
			category: 'javascript',
			answers: [
				{
					answer: 'True',
					id: 1
				},
				{
					answer: 'false',
					id: 2
				}
			],
			correctAnswer: 1
		},
		{
			question: 'In what direction do you want to develop?',
			id: 21,
			category: 'direction',
			answers: [
				{
					answer: 'frontend',
					id: 1
				},
				{
					answer: 'backend',
					id: 2
				},
				{
					answer: 'frameworks',
					id: 3
				}
			],
			correctAnswer: null
		}
	]);

	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [activeAnswer, setActiveAnswer] = useState(null);
	const [currentAnswer, setCurrentAnswer] = useState(null);
	const [isQuizFinished, setIsQuizFinished] = useState(false);

	const nextQuestionHandler = () => {
		if (currentQuestion < questions.length - 1) {
			if (activeAnswer != null) {
				setCurrentQuestion(prev => prev + 1);
				setActiveAnswer(null);
			} else {
				console.error('please chose one answer!');
			}
		} else {
			setIsQuizFinished(true);
		}
		setAnswers(prev => prev.concat(currentAnswer));
	};

	const answerClickHandler = (answer, index) => {
		setActiveAnswer(index);
		if (questions[currentQuestion].category === 'direction') {
			setCurrentAnswer({
				id: questions[currentQuestion].id,
				category: questions[currentQuestion].category,
				answer: answer.answer
			});
		} else {
			setCurrentAnswer({
				id: questions[currentQuestion].id,
				category: questions[currentQuestion].category,
				isCorrect: answer.id === questions[currentQuestion].correctAnswer
			});
		}
	};

	const finishQuizHandler = () => {
		const html = answers.filter(answer => answer.category === 'html');
		const internet = answers.filter(answer => answer.category === 'internet');
		const css = answers.filter(answer => answer.category === 'css');
		const javascript = answers.filter(answer => answer.category === 'javascript');
		const direction = answers.filter(answer => answer.category === 'direction')[0];

		const response = [
			{
				name: 'html',
				level: (html.filter(answer => answer.isCorrect).length / html.length) * 100
			},
			{
				name: 'internet',
				level: (internet.filter(answer => answer.isCorrect).length / internet.length) * 100
			},
			{
				name: 'css',
				level: (css.filter(answer => answer.isCorrect).length / css.length) * 100
			},
			{
				name: 'javascript',
				level: (javascript.filter(answer => answer.isCorrect).length / javascript.length) * 100
			},
			{
				direction: direction.answer
			}
		];

		console.log(response);
	};

	return (
		<Container>
			<Row>
				<Col lg="6" md="6" xs="12" className="quiz">
					<Card className="quiz__card">
						<Card.Body className="quiz__container">
							<Card.Title className="quiz__title">{questions[currentQuestion].question}</Card.Title>
							<ul>
								{questions[currentQuestion].answers.map((answer, index) => {
									return (
										<li className={`${index === activeAnswer ? 'active-answer' : null}`} onClick={() => answerClickHandler(answer, index)} key={index}>
											{answer.answer}
										</li>
									);
								})}
							</ul>
							<div className="quiz__button">
								{!isQuizFinished ? (
									<Button onClick={nextQuestionHandler} variant="danger">
										Answer
									</Button>
								) : (
									<Button onClick={finishQuizHandler} variant="danger">
										Finish quiz
									</Button>
								)}
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Quiz;
