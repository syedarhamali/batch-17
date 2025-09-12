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

function renderQuestions(){
    var questionElement = document.getElementById("question")
    questionElement.innerHTML = quiz[currentQuestion].question
    
    var quizOptions = document.getElementById("quizOption")
    
    quizOptions.innerHTML = ''
    for(var i = 0; i < quiz[currentQuestion].options.length ; i++){
        quizOptions.innerHTML += `<li onclick="checkCorrect(event)" style="padding-bottom: 20px">${quiz[currentQuestion].options[i]}</li>`
    }
}


function goToNext(){
    currentQuestion++
    renderQuestions()
}

function checkCorrect(event){
    console.log(quiz[currentQuestion].correctAnswer)
    console.log(quiz[currentQuestion].correctAnswer)
    if (quiz[currentQuestion].correctAnswer == event.target.innerHTML){
        event.target.style.backgroundColor = "green"
        event.target.style.color = "white"
        score += 10
    } else{
        event.target.style.backgroundColor = "red"
        event.target.style.color = "white"
    }
    scoreElement.innerHTML = score
}

renderQuestions()