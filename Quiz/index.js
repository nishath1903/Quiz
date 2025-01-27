const questions = [
    {
      question: "What is the capital of France ?",
      choices: [
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Madrid", correct: false }
      ]
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        { text: "Michelangelo", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Vincent van Gogh", correct: false },
        { text: "Pablo Picasso", correct: false }
      ]
    },
    {
      question: "What is the largest mammal on Earth?",
      choices: [
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Hippopotamus", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "What is the chemical symbol for water?",
      choices: [
        { text: "CO2", correct: false },
        { text: "H2O", correct: true },
        { text: "O2", correct: false },
        { text: "NaCl", correct: false }
      ]
    }
  ];

  const questionElement = document.getElementById('ques');
  const answerButtonContainer = document.getElementById('ans-but'); 
  const nextButton = document.getElementById('nxt-btn');

  let currentQuestion = 0;
  let score = 0;

  function startQuiz() {
      currentQuestion = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
  }

  function showQuestion() {
      const currentQuiz = questions[currentQuestion];
      questionElement.textContent = (currentQuestion + 1) + ". " + currentQuiz.question; 

      answerButtonContainer.innerHTML = ''; // Clear previous answers

      currentQuiz.choices.forEach(choice => {
          const button = document.createElement("button");
          button.innerHTML = choice.text;
          button.classList.add("btn");
          button.addEventListener('click', () => checkAnswer(choice.correct)); 
          answerButtonContainer.appendChild(button);
      });
  }

  function checkAnswer(isCorrect) {
      if (isCorrect) {
          score++;
      }
      currentQuestion++;

      if (currentQuestion < questions.length) {
          showQuestion();
      } else {
          // Handle end of quiz (display results)
          alert(`Quiz Completed! Your Score: ${score} out of ${questions.length}`); 
      }
  }

  startQuiz();
