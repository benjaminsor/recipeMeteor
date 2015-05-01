Template.profile.events({
	'click .back-button': function(e) {
		e.preventDefault();
		history.back();
	}
})

Template.profile.onRendered(function() {
	$('header').hide();
})

Template.profile.onDestroyed(function() {
	$('header').show();
})