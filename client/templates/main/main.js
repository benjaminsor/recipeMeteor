Template.drawerLayout.onRendered(function() {
	$('#navDrawer').mmenu({
		onClick: {
			close: true
		},
		"header": {
          	"title": "Recipes",
          	"add": true,
          	"update": true
       	}
	});
})

Template.drawerLayout.events({
	'click .sign-out': function() {
		Meteor.logout();
	}
})