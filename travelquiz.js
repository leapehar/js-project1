 //Travel.js


//travel questions

  const MAXQUESTIONS = 4;
  const questions = ["What is the capital of France?",
  "What is the capital of Belgium?", 
  "What is the capital of Canada?", 
  "What is the capital of Germany?"];

  const travelChoices1 = ["Montreal", "Anderlecht" , "Ottawa", "Strassburg"
  ];

  const travelChoices2 = [ "Paris", "Ghent", "Calgary", "Munich"
  ];

  const travelChoices3 = [ "Lyon", "Brussels", "Vancouver", "Frankfurt"];

  const travelChoices4 = [ "Marseille", "Munich", "Toronto", "Berlin"];

  const correctChoices = ["B", "C", "A", "D"];

  //count # of questions correct 

  let answers = [false, false, false, false];
  let numCorrectAnswers = 0;
  var questionNumber = 0;
  //functions

  function showQuestion (questionNum) {
  	$("#txtquestion").val(questions[questionNum]);
  	// alert(questionNum + "xx");
	$("#txtchoice1").val(travelChoices1[questionNum]);
	$("#txtchoice2").val(travelChoices2[questionNum]); 
	$("#txtchoice3").val(travelChoices3[questionNum]); 
	$("#txtchoice4").val(travelChoices4[questionNum]);  
	}

	function showScore () {
//clear all questions
  	$("#txtquestion").val("");
	$("#txtchoice1").val("");
	$("#txtchoice2").val(""); 
	$("#txtchoice3").val(""); 
	$("#txtchoice4").val(""); 
	//show final score
	$("#finalScore").html ('Final score is ' + numCorrectAnswers + ' out of ' + MAXQUESTIONS);
	}

//program starts

  $(document).ready(function () {
//show first question
  	showQuestion(0);
//submit button clicked
  	$("#submitAnswer").click(function(){
  		//check if last question
  		if (questionNumber >= MAXQUESTIONS){
  		alert("travel quiz over")
  		return;
  	}
  	
  // alert("The paragraph was clicked.");
  let answer = "";
  if ($("#rbchoice1").is(':checked'))
  	{
  		answer = "A";
  		$("#rbchoice1").prop("checked", false);

  	}
  else if ($("#rbchoice2").is(':checked'))
  	{
  		answer = "B";
  		$("#rbchoice2").prop("checked", false);
  	}
 else  if ($("#rbchoice3").is(':checked'))
  	{
  		answer = "C";
  		$("#rbchoice3").prop("checked", false);
  	}
 else  if ($("#rbchoice4").is(':checked'))
  	{
  		answer = "D";
  		$("#rbchoice4").prop("checked", false);
  	} 
	// alert(answer);
  if (correctChoices [questionNumber] === answer)
  	{
  		answers[questionNumber] = true;
  		numCorrectAnswers +=1
  	}	
  	questionNumber += 1; 


  	//show user score or go to next question 
  	  // alert("The question number is." + questionNumber);

  	 if (questionNumber === MAXQUESTIONS) 
  	 	showScore();
  	 	else 
  	 		showQuestion(questionNumber);
	});
  });




