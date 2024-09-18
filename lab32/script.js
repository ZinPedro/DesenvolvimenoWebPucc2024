const questions = [
    {
        question: "1.Qual desses não é um FLAG de Estado?",
        answers: ["Zero Flag", "Carry Flag", "Overflow Flag", "Output Flag"],
        correctAnswer: 3
    },
    {
        question: "2.Qual desses não é uma instrução do assembly(x86)?",
        answers: ["MOV", "SFE", "LEA", "XCHG"],
        correctAnswer: 1
    },
    {
        question: "3.Qual desses não é uma instrção de pulo(Jump) do assembly(x86)?",
        answers: ["JG", "JNLE", "JNE", "JGN"],
        correctAnswer: 3
    },
    {
        question: "4.Qual instrução você deve usar antes de usar uma instrução de pulo(Jump) condicional?",
        answers: ["CMP", "INC", "DEC", "XCHG"],
        correctAnswer: 0
    },
    {
        question: "5.Quais são os passos necessários em uma CPU Hipotética para executar o comando 'MOV R1,14'?",
        answers: ["Fetch da Instrução, Decodificação e Execução",
                "Busca do Operando, Fetch da Instrução, Decodificação e Execução", 
                "Fetch da Instrução, Decodificação, Busca do Operando e Execução", 
                "Busca do Operando, Fetch da Instrução e Decodificação"],
        correctAnswer: 2
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;