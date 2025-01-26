const questions = [
  {
    question: "Which method is used to remove the last element from an array?",
    options: [
      { answer: "pop()", isCorrect: true },
      { answer: "shift()", isCorrect: false },
      { answer: "push()", isCorrect: false },
      { answer: "unshift()", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to join all elements of an array into a string?",
    options: [
      { answer: "join()", isCorrect: true },
      { answer: "concat()", isCorrect: false },
      { answer: "slice()", isCorrect: false },
      { answer: "splice()", isCorrect: false },
    ],
  },
  {
    question:
      "Which method creates a new array with all elements that pass a test?",
    options: [
      { answer: "filter()", isCorrect: true },
      { answer: "map()", isCorrect: false },
      { answer: "reduce()", isCorrect: false },
      { answer: "forEach()", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is not a valid JavaScript data type?",
    options: [
      { answer: "Number", isCorrect: false },
      { answer: "String", isCorrect: false },
      { answer: "Float", isCorrect: true },
      { answer: "Boolean", isCorrect: false },
    ],
  },
  {
    question: "What will the following code output: `console.log(3 + '3')`?",
    options: [
      { answer: "33", isCorrect: true },
      { answer: "6", isCorrect: false },
      { answer: "NaN", isCorrect: false },
      { answer: "Error", isCorrect: false },
    ],
  },
];

const user = [
  {
    name: "Jeeva",
    email: "gjeevasanthosh@gmail.com",
    score: 1,
  },
  {
    name: "Santhosh",
    email: "santhosh@gmail.com",
    score: 2,
  },
];

// ToggleEvent

const login = document.getElementById("login");
const test = document.getElementById("test");
const result = document.getElementById("result");
const rank = document.getElementById("rank");

const toggleLogin = () => {
  document.getElementById("login-form").reset();
  login.classList.toggle("active");
};

const toggleTest = () => {
  document.getElementById("test-form").reset();
  test.classList.toggle("active");
};

const toggleResult = () => {
  result.classList.toggle("active");
}

const toggleRank = () => {
  rank.classList.toggle("active");
}
// Login

const loginForm = document.getElementById("login-form")

const currUser = {};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currUser.name = document.getElementById("name").value;
  currUser.email = document.getElementById("email").value;
  toggleLogin();
  toggleTest();
})


// Test

const testForm = document.getElementById("test-form")
const loadQuestions = () => {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("mb-3");
    questionDiv.innerHTML = `
                <p><strong>${index + 1}. ${q.question}</strong></p>
                ${q.options
        .map(
          (option, i) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${index}" id="question${index}option${i}" value="${option.answer}" required>
                        <label class="form-check-label" for="question${index}option${i}">
                            ${option.answer}
                        </label>
                    </div>
                `
        )
        .join("")}
            `;
    testForm.appendChild(questionDiv);
  });
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("btn", "btn-primary", "mt-3");
  submitBtn.textContent = "Submit";
  testForm.appendChild(submitBtn);
};

let score = 0;
let resultAnswer = [];

testForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resultBody.innerHTML = ""
  resultAnswer = [];
  score = 0;
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    const ans = q.options.find((option) => option.isCorrect).answer;
    if (
      selectedOption &&
      selectedOption.value === ans
    ) {
      score++;
      resultAnswer.push(
        {
          correctAnswer:
            ans,
          yourAnswer: selectedOption.value,
        }
      );
    }
    else {
      resultAnswer.push(
        {
          correctAnswer: ans,
          yourAnswer: selectedOption.value,
        }
      );
    }
  });
  loadResult(score, resultAnswer);
  toggleResult();
  toggleTest();
})

// Result

const resultBody = document.getElementById("result-body")

const loadResult = (score, resultAnswer) => {   
  let newIdx = -1
  newIdx = user.findIndex(e => e.email === currUser.email)
  if(newIdx >= 0){
    user[newIdx].name = currUser.name;
    user[newIdx].email = currUser.email;
    user[newIdx].score = score;
  } else {
    user.push({
      name : currUser.name,
      email : currUser.email,
      score : score,
    })
  }  
  const resultHead = document.getElementById("your-score")
  resultHead.textContent = `Your score : ${score}`;
  const resultBody = document.getElementById("result-body");
  resultAnswer.map((e) => {
    const resultRow = document.createElement("tr");
    if(e.correctAnswer === e.yourAnswer){
      resultRow.style.backgroundColor = "green"
    } else {
      resultRow.style.backgroundColor = "red"
    }
    resultRow.innerHTML = `<td>${e.correctAnswer}</td><td>${e.yourAnswer}</td>`
    resultBody.appendChild(resultRow)
  })
}

document.getElementById("result-back").addEventListener("click", () => {
 toggleResult()
 toggleLogin()
})

document.getElementById("result-rank").addEventListener("click", () => {
  toggleResult()
  toggleRank()
  loadRank()
})


// Rank
const rankBody = document.getElementById("rank-body");
const loadRank = () => {
  rankBody.innerHTML = ""
  user.sort((b, a) => a.score - b.score)
  console.log(user);
  
  user.map((e, idx) => {
    console.log(e);
    const rankRow = document.createElement("tr")
    rankRow.innerHTML = `<td>${e.name}</td><td>${e.email}</td><td>${e.score}</td><td>${idx+1}</td>`
    rankBody.appendChild(rankRow);
  });
}

document.getElementById("rank-back").addEventListener("click", () => {
  toggleRank();
  toggleLogin();
})


toggleLogin();
loadQuestions();