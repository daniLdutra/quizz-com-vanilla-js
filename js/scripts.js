//Declaração de variáveis

const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

//Perguntas

const questions = [
  {
    question: 'PHP foi desenvolvida para qual fim?',
    answers: [
      {
        answer: 'back-end',
        correct: true,
      },
      {
        answer: 'front-end',
        correct: false,
      },
      {
        answer: 'Sistema operacional',
        correct: false,
      },
      {
        answer: 'Banco de dados',
        correct: false,
      },
    ],
  },
  {
    question: 'Uma foram de declarar variável em JavaScript',
    answers: [
      {
        answer: '$var',
        correct: false,
      },
      {
        answer: 'var',
        correct: true,
      },
      {
        answer: '@var',
        correct: false,
      },
      {
        answer: '#let',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual o seletor de id no CSS?',
    answers: [
      {
        answer: '.',
        correct: false,
      },
      {
        answer: '@',
        correct: false,
      },
      {
        answer: '/',
        correct: false,
      },
      {
        answer: '#',
        correct: true,
      },
    ],
  },
];

// Substituição do quizz para a primeira pergunta
function init() {
  createQuestion(0);
}

//Cria uma pergunta
function createQuestion(i) {
  //Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll('button');
  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  //Alterar o texto da pergunta
  const questionText = question.querySelector('#question-text');
  questionText.textContent = questions[i].question;
  const questionNumber = question.querySelectorAll('#question-number');
  questionNumber.textContent = i + 1;

  //Insere as alternativas
  questions[i].answers.forEach(function (answer, i) {
    // Cria o template do botão do quizz
    const answerTemplate = document
      .querySelector('.answer-template')
      .cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter'); //selecionada letra
    letterBtn.textContent = letters[i];
    const answerText = answerTemplate.querySelector('.question-answer'); // selecionado texto
    answerText.textContent = answer['answer'];

    //Adicionado atributo para alternativa ser correta ou não
    answerTemplate.setAttribute('correct-answer', answer['correct']);

    //Remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    console.log(answerTemplate);
  });
}

init();
