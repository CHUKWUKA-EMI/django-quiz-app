//set timer
$(document).ready(function () {
	//hide the story until the timer starts
	$("#story").hide();
	$("#quiz").hide();
	$("#btn").hide();
	$("#qstn").hide();
	//disable the radio buttons until the timer is started
	$(".rdbtn").attr("disabled", true);

	//start the timer and enable the radio buttons
	$("#startBtn").click(function () {
		$(".rdbtn").attr("disabled", false);
		$("#story").show();
		$("#quiz").show();
		$("#btn").show();
		$("#qstn").show();
		$("#startBtn").hide();

		let counter = 180;
		var timer = setInterval(() => {
			counter = counter - 1;
			$("#timer").html("Timer : " + counter.toString() + " sec");
		}, 1000);
		//hide the elements once the time elapses
		setTimeout(() => {
			clearInterval(timer);
			$(".rdbtn").attr("disabled", true);
			$("#startBtn").hide();
			$(".answers").show();
			$("#btn").attr("disabled", true);
			$("#timer").html(
				"Your time has elapsed. You can now exit the app. Thank you!"
			);
		}, 180000);
	});

	$("#btn").click(function () {
		//show all the answers
		$(".answers").show();

		//disable the radio buttons
		$(".rdbtn").attr("disabled", true);

		//show result
		$("#result").show();
	});
});

//get answwers and compute result
function getAnswers() {
	const ans = [];
	let score = 0;
	const correct_ans = [];
	var e = document.getElementsByTagName("input");
	for (i = 0; i < e.length; i++) {
		if (e[i].type == "radio") {
			if (e[i].checked) {
				ans.push(e[i].value);
			}
		}
	}

	//get the correct answers
	var c_ans = document.getElementsByClassName("correctans");
	for (i = 0; i < c_ans.length; i++) {
		correct_ans.push(c_ans[i].innerHTML);
	}

	//compare user's answers to the correct answers and score them 5marks for each match
	for (myans in ans) {
		if (ans[myans] == correct_ans[myans]) {
			score += 5;
		}
	}

	//calculate the percentage and display the result
	const result = document.getElementById("result");
	const percentage_score = (score * 100) / 50;
	if (percentage_score < 75) {
		result.innerHTML =
			"Your score is: " +
			percentage_score.toString() +
			"% " +
			", which is below the avearage score of 75%." +
			"<br>" +
			"You failed! Try again!";
	} else {
		result.innerHTML =
			"Your score is: " +
			percentage_score.toString() +
			"% " +
			"<br>" +
			"You Passed! Congratulations!!";
	}
}
