
//function that displays questions and answers and starts the game
$('#start').on("click", function(){
    game.start();
});
//console.log(questions.)
//Arrays for the questions

var questions = [{
    question:"Gibson's most prominent guitar model is named for which popular Jazz guitarist?",
    answers:["Wes Montgomery", "Pat Metheny", "Les Paul", "Freddie Green"],
    correctAnswer: "Les Paul"

}, {
    question: "The Stratocaster is produced by which instrument manufacturer?",
    answers: ["Fender", "Guild", "Washburn", "Marshall"],
    correctAnswer: "Fender"
}, {
    question: "What was the name of B.B. King's favorite guitar?",
    answers: ["Rosemary", "Lucille", "Lisa", "Gladys"],
    correctAnswer: "Lucille"
}, {
    question: "Kurt Cobain is known for preferring which Fender guitar model?",
    answers: ["Telecaster", "Coronado", "Starcaster", "Jaguar"],
    correctAnswer: "Jaguar"
}, {
    question: "Which famous guitarist played The Star Spangled Banner at Woodstock?",
    answers: ["Jimi Hendrix", "Jimmy Page", "Eric Clapton", "Pete Townsend"],
    correctAnswer: "Jimi Hendrix"
}, {
    question: "A standard guitar has how many strings?",
    answers: ["6", "5", "7", "12"],
    correctAnswer: "6"
}

]; 

var game = {
    correct = 0,
    incorrect = 0,
    counter = 120,
    countdown: function(){
        game.counter --;
        $("#counter").html(game.counte);
        if(game.counter<=0){
            console.log("Time is up");
            game.done();
        }
    },
    //timer that begins at the start of the game
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $("#gamecontainer").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds </h2>');
        $("#start").remove();
            for (var i=0; i < questions.length; i++){
        $("#gamecontainer").append('<h2>' + questions[i].question + "</h2>");
            for (var j=0; j < questions[i].answers.length; j++);
        $("#gamecontainer").append("<input type = 'radio' name = 'question-" + i + " 'value=' " + questions[i].answers[j] + "'>"
            + questions[i].answers[j])
        }

    }
 }



//function that records correct/incorrect answers

//function that ends the game when the timer runs out

//function that ends the game when the "submit" button at the bottom is selected

//function that displays correct/incorrect answers 