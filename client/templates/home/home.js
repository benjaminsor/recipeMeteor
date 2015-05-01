Meteor.subscribe("recipes");

Template.home.helpers({
	recipes: function() {
		return  Recipes.find();
	},
	booked: function() {
		return Meteor.user() && _.findWhere(Meteor.user().profile.books, {_id: this._id});
	},
	forked: function() {
		return Meteor.user() && _.include(Meteor.user().profile.forks, this._id);
	}
})

Template.home.events({
	'click .fork-btn': function() {
		Meteor.call('fork', this._id);
	},
	'click .unfork-btn': function() {
		Meteor.call('unFork', this._id);
	}

})