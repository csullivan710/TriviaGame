$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who controls the National Guard in times of peace?',
	possibleAnswers : ['A. State governors',
				 'B. Congree',
				 'C. The Army',
				 'D. The President'],
	flags : [true, false, false, false],
	answer : 'A. State governors'
};

var q2 = {
	question: 'This branch of the U.S. military was officially created November 10, 1775, but was disbanded in 1783 (only to be recreated a few years later).',
	possibleAnswers: ['Army',
				 'B. Marine Corps',
				 'C. Navy',
				 'D. Coast Guard'],
	flags : [false, true, false, false],
	answer : 'B. Marine Corps'
};

var q3 = {
	question : 'The United States Naval Academy is located in what state?',
	possibleAnswers : ['A. New York',
				 'B. Maryland',
				 'C. Florida',
				 'D. Texas'],
	flags : [false, true, false, false],
	answer : 'B. Maryland'
};

var q4 = {
	question : 'This, the first branch of the U.S. Armed Forces to be created, was born June 14, 1775.',
	possibleAnswers : ['A. Army',
				 'B. Navy',
				 'C. Marines',
				 'D. Coast Guard'],
	flags : [true, false, false, false],
	answer : 'A. Army'
};

var q5 = {
	question : 'Their motto, "Semper Fidelis" (often abbreviated as" Semper Fi"), means "always faithful.',
	possibleAnswers : ['A. Army',
				 'B. Marines',
				 'C. Navy',
				 'D. Air Force'],
	flags : [false, true, false, false],
	answer : 'B. Marines'
};

var q6 = {
	question : 'The Blue Angels the worlds first officially sanctioned military aerial demonstration team are a part of which branch of the U.S. Armed Services?',
	possibleAnswers : ['A. Navy',
				 'B. Air Force',
				 'C. Marines',
				 'D. Army'],
	flags : [true, false, false, false],
	answer : 'A. Navy'
};

var q7 = {
	question : 'The U.S. Air Force Academy is located in which state?',
	possibleAnswers : ['A. Florida',
				 'B. California',
				 'C. Colorado',
				 'D. Washington'],
	flags : [false, false, true, false],
	answer : 'C. Colorado'
};

var q8 = {
	question : 'What branch of the Service did the Army give birth to in 1947?',
	possibleAnswers : ['A. Coast Guard',
				 'B. Air Force',
				 'C. National Guard',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Air Force'
};

var q9 = {
	question : 'Whose picture is on the Purple Heart medal?',
	possibleAnswers : ['A. Abraham Lincoln',
				 'B. JFK',
				 'C. Benjamin Franklin',
				 'D. George Washington'],
	flags : [false, false, false, true],
	answer : 'D. George Washington'
};

var q10 = {
	question : 'What is the name of the Marine officers sword?',
	possibleAnswers : ['A. Masamune',
				  'B. Mamaluke',
				  'C. Falcion',
				  'D. Longclaw'],
	flags : [false, true, false, false],
	answer : 'B. Mamaluke'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});