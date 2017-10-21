$(document).ready(function() {
	var dropdownActive = false;
	$('#dropdown').hide();
	$('#donateNav').hover(function() {
		if (dropdownActive) {
			$('#dropdown').slideUp();
		}
	})
	$('#aboutNav').hover(function() {
		if (dropdownActive) {
			$('#dropdown').slideUp();
		}
	})
	$('#travelNav').hover(function() {
		if (dropdownActive) {
			$('#dropdown').slideUp();
		}
	})
	$('#mapNav').hover(function() {
		if (dropdownActive) {
			$('#dropdown').slideUp();
		}
	})
	$('#projectsNav').hover(function() {
		$('#dropdown').slideDown();
		dropdownActive = true;
	});
	$('#container').hover(function() {
		if (dropdownActive) {
			$('#dropdown').slideUp();
		}
	});
});