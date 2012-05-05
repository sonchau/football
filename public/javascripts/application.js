var Football = Football || {};

Football = {
  start: function() {
    new Football.ListView({el: $("#data tbody")});
  }
};

Football.Team = Backbone.Model.extend({});

Football.Teams = Backbone.Collection.extend({
  model: Football.Team,
  comparator: function (team) {
    return team.get('against') - team.get('for');
  }
});

Football.ListView = Backbone.View.extend({  
  
    initialize: function(){
      _.bindAll(this, 'render');
      this.league = new Football.Teams();
      this.league.add(data);   
      this.render(); 
    },
        
    render: function(){
      _(this.league.models).each( function (item) {
           $(this.el).append('<tr><td>' + item.get('name') + '</td><td>' + item.get('for') + '</td><td>' + item.get('against') + '</td></tr>');
         }, this);
      $("#diff-smallest span.name").html(
          this.league.at(0).get('name')
      );
      $("#diff-largest span.name").html(
          this.league.at(this.league.length - 1).get('name')
      );
      return this;
    }
});





// var teams = new Football.Teams();
// teams.add(data);

// max and min
// console.log('teams', teams.at(0).get('name'), teams.at(teams.length - 1).get('name'));