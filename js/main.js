function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Ugh, you again ' + fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {

			console.log('User is old as time itself');

	} else if (userAge >= 13) {
		console.log('User is a teenager');

	}

	if (firstName == "General") {
		console.log("This fellow is a general, I'll get back to you if he's the right one");
	} else if (firstName !=="General") {
		console.log("Pah this guy isn't even a general")
	}

	if (lastName !=="Assembly") {
		console.log("Phew, not one of those Assembly scumbags")
	}

	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() !=="assembly") {
		$('h2').text('Greetings, wonderful and mighty ' +fullName);
	}

	if (fullName == "General Assembly") {
		$('h2').text("Sorry, General Assembly, not tonight, sunshine")
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == "red" ||
		faveColour == "green" ||
		faveColour == "blue" ||
		faveColour == "yellow") {
		$('h2').css('color', faveColour);
	
	}
	

}










// When the page has loaded

$(function() {

	$('img').on('click', askQuestions);

	//Get all the sections
	var sections = $('h3').next();

	// Hide all the sections
	sections.hide();

	// When the user clicks an h3
	$('h3').on('click', function() {

		//Remember the section the user wants to see
		var thisSection = $(this).next();

		//Hide all the sections except the one the users want to see
		sections.not(thisSection).slideUp(100);

		// Toggle the one the user wants to see
		thisSection.slideToggle(100);

	});
});








