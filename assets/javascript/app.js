//Function that displays questions and answers and starts the game
$('#start').on("click", function(){
    game.start();
});
//console.log(questions)

//Objects for the questions
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

//Handled as a global variable
var handled = null;

var game = {
    correct : 0,
    incorrect : 0,
    counter : 60,
    countdown: function(){
        $("#counter").html(game.counter);
        if(game.counter==0){
            console.log("Time is up");
            game.counter=0;
            clearInterval(handled);
            handled = 0;
            return false;  
        }
        else {
            game.counter --;
        }
        
    },

    //Function that displays questions and answers
    start: function(){
        //Setting the time interval to 1 second
        handled = setInterval(game.countdown, 1000);
        //Displaying the start time for the counter
        $("#gamecontainer").prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds </h2> <br>');
        //Removing the start button so that only the timer displays above the questions
        $("#start").remove();
        //Looping through each question object to display questions and answers
        var questionNumber;
            for (var i=0; i < questions.length; i++){
                //Creates a class for styling each individual question and answer set
                var divElement = '<div class=questions>';
                divElement+='<h2>' + questions[i].question + "</h2> <br>";
                for (var j=0; j < questions[i].answers.length; j++){
                    divElement+="<input type = 'radio' name = 'question-" + i + " 'value=' " + questions[i].answers[j] + "'>"
                        + questions[i].answers[j];
                }
                divElement+='</div> <br>'
                $("#gamecontainer").append(divElement);
            }       

        }
    },

 done = function(){
     $.each($('input[name="question 1]: checked'), function(){
         if($(this).val()==questions[0].correctAnswer){
             game.correct++;
         } else {
             game.incorrect++;
         }
     })

 }


//Function that records correct/incorrect answers

//Function that ends the game when the timer runs out

//Function that ends the game when the "submit" button at the bottom is selected

//Function that displays correct/incorrect answers 