var Football = Football || {};

Football = {
  start: function() {
    Football.addTeams(data);
    new Football.ListView({el: $("#data")});
  }
};

Football.Team = Backbone.Model.extend({});

Football.Teams = Backbone.Collection.extend({
  model: Football.Team
});

Football.addTeams = function(arr) {
  var teams = [];
  _.each(arr, function (team) {
    teams.push(new Football.Team(team));
  });
  this.league = this.league || new Football.Teams();
  this.league.add(teams);
};

Football.ListView = Backbone.View.extend({  

    initialize: function(){
      _.bindAll(this, 'render');   
       this.render(); 
    },
        
    render: function(){
      $(this.el).append('<ul><li>hello world</li></ul>');
      return this;
    }
});
