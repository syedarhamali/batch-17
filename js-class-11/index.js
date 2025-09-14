// var userName = "Arham"
// var userAge = 24
// var userNationality = "Pakistani"
// var graduated = false


// var arhamObject = { //Object
//     userName: "Arham", // key userName hai, value "Arham" he
//     userAge: 24,
//     userNationality: "Pakistani",
//     graduated: false,
//     speak: function speak() {
//         console.log("bol sakta he!")
//     }
// }

// console.log(arhamObject["id"]) // is trhan access hogi value
// console.log(arhamObject.userName) // is trhan access hogi value


const quiz = [
    {
        question: "What is your name ?",
        options: ["Hassan", "Kaif", "Arham", "Muneeb"], // 4 length
        correctAnswer: "Arham"
    },
    {
        question: "What is your age ?",
        options: [24, 22, 21, 20],
        correctAnswer: 24
    },
    {
        question: "What is your nationality ?",
        options: ["Pakistani", "Afghani", "Indian", "Bangladeshi"],
        correctAnswer: "Pakistani"
    }
]

var currentQuestion = 0
var score = 0
var scoreElement = document.getElementById("score")
var quizOptions = document.getElementById("quizOption")
let currentSelection = null
let nextQuestionButton = document.getElementById("nextQuestion")

function renderQuestions(){
    var questionElement = document.getElementById("question")
    questionElement.innerHTML = quiz[currentQuestion].question
    
    
    quizOptions.innerHTML = ''
    for(var i = 0; i < quiz[currentQuestion].options.length ; i++){
        quizOptions.innerHTML += `<li onclick="checkCorrect(event)" class="non-active" style="padding-bottom: 20px">${quiz[currentQuestion].options[i]}</li>`
    }
}


function goToNext(){
    console.log(currentSelection)
    if (quiz[currentQuestion].correctAnswer == currentSelection.innerHTML){
        score += 10
    }
    
    scoreElement.innerHTML = score
    currentQuestion++
    renderQuestions()
      nextQuestionButton.disabled = true
}

function checkCorrect(event){
    event.target.classList.add("active-class")
   
    for(var i = 0; i < quizOptions.children.length ; i++ ){
        if(event.target !== quizOptions.children[i]){
            quizOptions.children[i].classList.remove("active-class")
        }
    }

    currentSelection = event.target
    nextQuestionButton.disabled = false

}

renderQuestions()