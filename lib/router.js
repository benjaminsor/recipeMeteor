//CLIENT ROUTES

Router.configure({
  	layoutTemplate: 'drawerLayout'
});

var requireLogin = function() { 
  	if (!Meteor.user()) {
  		$('body').addClass('login-body');
  		this.render('login'); 
 	} else {
 		$('body').removeClass('login-body');
   		this.next();
 	}
}

Router.onBeforeAction(requireLogin, {except: ['login']});

Router.route('/', function() {
  	this.render('Home');
});

Router.route('/add-new', function() {
  	this.render('add-new');
});

Router.route('/activity', function() {
  	this.render('activity');
});

Router.route('/profile/:username', {
	data: function() {
		var user = Meteor.users.findOne({username: this.params.username});
		if(user) {
			if(user.profile.books && user.profile.books.length) {
				var bookedItems = []
				for(var i = 0; i < user.profile.books.length; i++) {
					bookedItems.push(user.profile.books[i]._id);
				}
				var books = Recipes.find({_id:{$in: bookedItems}}).fetch();
				for(var i = 0; i < user.profile.books.length; i++) {
					for(var b = 0; b < books.length; b++) {
						if (user.profile.books[i]._id === books[b]._id) {
							user.profile.books[i].recipe = books[b];
						}
					}
				}
			}
			if(user.profile.forks && user.profile.forks.length) {
				var forks = Recipes.find({_id:{$in: user.profile.forks}}).fetch();
				user.profile.forks = forks;
			}
			return user;
		}
	},
	action: function() {
		this.render('profile');
	}
});

Router.route('/search', function() {
  	this.render('search');
});

Router.route('/recipe/:_id', {
	data: function() {
		return Recipes.findOne({_id: this.params._id});
	},
	action: function() {
		this.render('recipe');
	}
});
