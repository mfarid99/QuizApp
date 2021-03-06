const triviaData = [
  {
    question: 'Who was POTUS 42?',
    a: 'Ronald Regan',
    b: 'Bill Clinton',
    c: 'George H. W. Bush',
    d: 'Barack Obama',
    correct: 'b',
  },
  {
    question: 'How many letters are in the alphabet?',
    a: '26',
    b: '27',
    c: '22',
    d: '24',
    correct: 'a',
  },

  {
    question: 'How many kilometers in a mile?',
    a: '2',
    b: '2.1',
    c: '1.84',
    d: '1.6',
    correct: 'd',
  },

  {
    question: 'How many mile(s) in a kilometer?',
    a: '0.62',
    b: '0.59',
    c: '1.2',
    d: '1.6',
    correct: 'a',
  },

  {
    question: 'React js is...',
    a:
      'Is a platform and framework for building single-page client applications using HTML and TypeScript',
    b: 'A JavaScript library for building user interfaces',
    c: 'An After Effects plugin',
    d: 'A 3D animation program',
    correct: 'b',
  },

  {
    question: 'How many teeth can a shark have in its lifetime?',
    a: '16',
    b: '1820',
    c: '29880',
    d: '240',
    correct: 'c',
  },
  {
    question: 'Which animal can regenerate limbs and major organs?',
    a: 'Turtle',
    b: 'Axolotl',
    c: 'Octopus',
    d: 'Fruit Fly',
    correct: 'b',
  },
]

const trivia = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

const loadQuiz = () => {
  deselectAnswers()
  const currentQuizData = triviaData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

const deselectAnswers = () => {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

const getSelected = () => {
  let answer
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === triviaData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < triviaData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You scored ${score} Out Of ${triviaData.length}, Click Reload To Play Again!</h2> <button onclick="location.reload()">Reload</button>`
    }
  }
})

loadQuiz()
