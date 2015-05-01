Meteor.methods({
	fork: function(rId) {
		Meteor.users.update({_id: Meteor.user()._id}, {$addToSet:{'profile.forks': rId}, $pull:{'profile.books': {_id: rId} }}, function(err, data) {
			if(err) {
				console.log(err);
			}
		});
	},
	unFork: function(rId) {
		Meteor.users.update({_id: Meteor.user()._id}, {$pull:{'profile.forks': rId}}, function(err, data) {
			if(err) {
				console.log(err);
			}
		});
	},
	book: function(rId, cn) {
		Meteor.users.update({_id: Meteor.user()._id}, {$push:{'profile.books': {'_id': rId, 'customNotes': cn}}, $pull:{'profile.forks': rId}}, function(err, data) {
			if(err) {
				console.log(err);
			}
		});
	},
	unBook: function(rId) {
		Meteor.users.update({_id: Meteor.user()._id}, {$pull:{'profile.books': {_id: rId} }}, function(err, data) {
			if(err) {
				console.log(err);
			}
		});
	}
})