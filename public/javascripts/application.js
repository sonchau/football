var Football = Football || {};

Football = {
  start: function() {
    new Football.ListView({el: $("#data tbody")});
  }
};

Football.CreateDiff = function (arr) {
  _.each(arr, function(item){
    item.goalsDiff = Math.abs(item.goalsFor - item.goalsAgainst);
  });
  return arr;
};

Football.Team = Backbone.Model.extend({});

Football.Teams = Backbone.Collection.extend({
  model: Football.Team,
  comparator: function (team) {
    return team.get('goalsDiff')
  }
});

Football.ListView = Backbone.View.extend({

    initialize: function(){
      _.bindAll(this, 'render');
      Football.CreateDiff(data);
      this.league = new Football.Teams();
      this.league.add(data);
      this.render();
    },

    render: function(){
      _(this.league.models).each( function (item) {
           $(this.el).append('<tr><td>' + item.get('name') + '</td><td>' + item.get('goalsFor') + '</td><td>' + item.get('goalsAgainst') + '</td><td>' + item.get('goalsDiff') + '</td></tr>');
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
