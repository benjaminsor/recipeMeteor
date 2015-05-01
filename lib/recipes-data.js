Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc) {
    return doc.userId === userId;
  }
});

Meteor.startup(function() {
  if (Meteor.isServer && Recipes.find().count() === 0) {
    Recipes.insert({
      name: 'Best Blueberry Muffins',
      image: 'http://www.onceuponachef.com/images/2014/07/Best-Blueberry-Muffins2-575x370.jpg',
      ingredients: ['2 cups all-purpose flour, spooned into measuring cup and leveled-off','2 teaspoons baking powder', '3/4 teaspoon salt', '1 stick (1/2 cup) unsalted butter, softened', '1 cup granulated sugar'],
      directions: [],
      category: 'Entree',
      ethnicity: 'SoMA, San Francisco',
      meal: 'Breakfast',
      tags: ['bread', 'sweet', 'whole-grain'],
      notes: 'These are great muffins.',
      stats: {
      	forks: 0,
      	books: 0
      },
      username: 'bensore',
      source: 'http://www.onceuponachef.com/2014/07/best-ever-blueberry-muffins.html',
      date: new Date,
      comments: [
        {
          username: 'bensore',
          message: 'These are really good!',
          date: new Date
        }
      ]
    });
  }
});