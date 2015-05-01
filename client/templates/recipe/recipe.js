Template.recipe.helpers({
	recipes: function() {
		return  Recipes.find();
	},
	booked: function() {
		return Meteor.user() && _.findWhere(Meteor.user().profile.books, {_id: this._id});
	},
	forked: function() {
		return Meteor.user() && _.include(Meteor.user().profile.forks, this._id);
	},
	customNotes: function() {
		var books = Meteor.user().profile.books;
		for(var i = 0; i < books.length; i++) {
			if (books[i]._id === this._id) {
				return books[i].customNotes;
			}
		}
	}
})

Template.recipe.events({
	'click .back-button': function(e) {
		e.preventDefault();
		history.back();
	},
	'click .fork-btn': function() {
		Meteor.call('fork', this._id);
	},
	'click .unfork-btn': function() {
		Meteor.call('unFork', this._id);
	},
	'click .book-btn-go': function() {
		$('#customNotes').modal('hide')
		var cn = $('.custom-note').val();
		Meteor.call('book', this._id, cn);
	},
	'click .unbook-btn': function() {
		Meteor.call('unBook', this._id);
	}
})

Template.recipe.onRendered(function() {
	$('header').hide();
})

Template.recipe.onDestroyed(function() {
	$('header').show();
})