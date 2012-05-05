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
  beforeEach(function () {
    setFixtures("<div id='data'><table><tbody></tbody></table></div>");
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
  });
  describe("render", function() {
    
  });
  
});

describe("Football", function () {

  beforeEach(function() {
    setFixtures('<div id="container"></div>');
  });

  it("should render data to the page", function() {
    //expect('#data').toExist();
  });
});