'use client';
import './globals.css';
import Header from './components/Header/Header';
import Start from './components/Start/Start';
import Quiz from './components/Quiz/Quiz';
import quizData from '@data/data.json';
import { useState } from 'react';

function App() {
  const iconBackgroundColor = [
    'bg-orange-50',
    'bg-green-100',
    'bg-blue-50',
    'bg-purple-100',
  ];
  const [selectedQuiz, selectQuiz] = useState(4);
  const quizInfo = quizData.quizzes[selectedQuiz]
    ? {
        title: quizData.quizzes[selectedQuiz].title,
        icon: quizData.quizzes[selectedQuiz].icon,
        index: selectedQuiz,
      }
    : null;
  return (
    <div className="dark:bg-blue-900 bg-grey-50 lg:dark:bg-[url('/assets/images/pattern-background-desktop-dark.svg')] lg:bg-[url('/assets/images/pattern-background-desktop-light.svg')] md:dark:bg-[url('/assets/images/pattern-background-tablet-dark.svg')] dark:bg-[url('/assets/images/pattern-background-mobile-dark.svg')] md:bg-[url('/assets/images/pattern-background-tablet-light.svg')] bg-[url('/assets/images/pattern-background-mobile-light.svg')] bg-no-repeat">
      <div className="min-h-screen items-center max-w-6xl m-auto">
        <Header quizInfo={quizInfo} selectedQuiz={selectedQuiz} />
        {selectedQuiz === 4 ? (
          <Start selectQuiz={selectQuiz} />
        ) : (
          <Quiz
            iconBackgroundColor={iconBackgroundColor[selectedQuiz]}
            selectQuiz={selectQuiz}
            selectedQuiz={selectedQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
