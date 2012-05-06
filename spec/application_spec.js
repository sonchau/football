describe("Football Create Diff", function () {
  it("should add goalsDiff attribute to the abject", function () {
      var data = [
          { "name" : "Son",
            "goalsFor" : 5,
            "goalsAgainst": 1
          },
          { "name" : "Chau",
            "goalsFor" : 3,
            "goalsAgainst": 5
          },
          { "name" : "Test",
            "goalsFor" : 2,
            "goalsAgainst": 5
          }
      ];
      var newData = Football.CreateDiff(data);
      expect(newData[0].goalsDiff).toEqual(4);
      expect(newData[1].goalsDiff).toEqual(2);
      expect(newData[2].goalsDiff).toEqual(3);
  });

});

describe("Football Model", function () {
  beforeEach(function() {
    this.fooball = new Football.Team({
      name: "Sample team",
      goalsFor: 10,
      goalsAgainst: 5
    });
  });

  describe("when instantiated", function() {
    it("should exhibit attributes", function() {
      expect(this.fooball.get("name")).toEqual("Sample team");
      expect(this.fooball.get("goalsFor")).toEqual(10);
      expect(this.fooball.get("goalsAgainst")).toEqual(5);
    });
  });
});

describe("Football Collection", function () {
  it("should has football model", function () {
    var aModel = new Football.Team({
      'name': 'a name'
    });
    var aCollection = new Football.Teams();
    aCollection.add(aModel);
    expect(aCollection.models[0].get('name')).toEqual('a name');
  });

  it("shoud return a comparator collection", function () {
    var data = [
        { "name" : "Son Team",
          "goalsDiff": 4
        },
        { "name" : "Chau Team",
          "goalsDiff": 2
        },
        { "name" : "Test Team",
          "goalsDiff": 3
        }
    ];
    var comparator = new Football.Teams();
    comparator.add(data);
    expect(comparator.models[0].get('name')).toEqual("Chau Team");
    expect(comparator.models[1].get('name')).toEqual("Test Team");
    expect(comparator.models[2].get('name')).toEqual("Son Team");
  });
});

describe("Football view", function() {

  describe("render view", function() {

    it("shoud render the results to the page", function() {

      spyOn(Football, 'CreateDiff');
      var collection = new Football.Teams();
      spyOn(collection, 'add');
      setFixtures("<div id='data'><table><tbody></tbody></table></div>");
      var view = new Football.ListView({el: $("#data tbody")});
      expect($('#data tr')).toExist();
      expect($('#data tr').length).toEqual(1);
      expect($('#data tr td').length).toEqual(4);

    });
  });

  describe("render view content ", function() {

    beforeEach(function () {
      this.data = [
            { "name" : "Son",
              "goalsFor" : 5,
              "goalsAgainst": 1
            },
            { "name" : "Chau",
              "goalsFor" : 3,
              "goalsAgainst": 5
            },
            { "name" : "Test",
              "goalsFor" : 2,
              "goalsAgainst": 5
            }
        ];
      setFixtures("<div id='data'><table><tbody></tbody></table></div><div id='diff-smallest'><span class='name'></span></div><div id='diff-largest'><span class='name'></span></div>");
      this.view = new Football.ListView({el: $("#data tbody"), mydata: this.data});
    });

    it("shoud render the table", function() {
      expect($('#data tr')).toExist();
      expect($('#data tr').length).toEqual(3);
      expect($('#data tr td').length).toEqual(12);
    });

    it("shoud append the smallest difference for and against to the page", function() {
      expect($("#diff-smallest .name").html()).toEqual('Chau');
    });

    it("shoud append the highest difference for and against to the page", function() {
      expect($("#diff-largest .name").html()).toEqual('Son');
    });

  });

});
