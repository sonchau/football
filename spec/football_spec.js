describe("Football Model", function () {
  beforeEach(function() {
    this.fooball = new Football.Team({
      name: "Sample team",
      for: 10,
      against: 5
    });
  });

  describe("when instantiated", function() {

    it("should exhibit attributes", function() {
      expect(this.fooball.get("name")).toEqual("Sample team");
      expect(this.fooball.get("for")).toEqual(10);
      expect(this.fooball.get("against")).toEqual(5);
    });

  });

});

describe("Football Collection", function () {
  it("should has football model", function () {

  });

  it("shoud return a comparator collection", function () {
    var data = [
         { "name" : "Arsenal",
            "for" : 79,
            "against": 36
          },
          { "name" : "Liverpool",
            "for" : 67,
            "against": 30
          },
          { "name" : "Manchester_U",
            "for" : 87,
            "against": 45
          }
    ];
    var comparator = new Football.Teams();
    comparator.add(data);
    console.log('data', data, 'comparator', comparator.models)
    // comparator.should.equals(
    //    [
    //       { "name" : "chau",
    //         "for" : 1,
    //         "against": 1
    //       },
    //       { "name" : "test",
    //         "for" : 4,
    //         "against": 1
    //       },
    //       { "name" : "son",
    //         "for" : 5,
    //         "against": 1
    //       }
    //   ]
    //   );

  })
});
describe("Football.addTeams", function () {
  it("should add team", function() {

        var data = [
            { "name" : "son",
              "for" : 20,
              "against": 3
            },
            { "name" : "mike",
              "for" : 10,
              "against": 30
            },
            { "name" : "test",
              "for" : 0,
              "against": 3001
            }
        ];
        //var collection = Football.addTeams(data).league;
        // console.log('Football.addTeams', collection, ' typeof ', typeof collection.length);
        // expect(collection.length).toEqual(3);
        // expect(collection.models[0].get('against')).toEqual(3);
        // expect(collection.models[1].get('for')).toEqual(10);
        // expect(collection.models[2].get('name')).toEqual('test');
        // expect(collection.models[0].get('diff')).toEqual(17);
  })
});


describe("Football Collection", function () {
  beforeEach(function() {

    this.fooball1 = new Football.Team({
      name: "Sample team 1",
      wins: 100,
      losses: 5
    });
    this.fooball2 = new Football.Team({
      name: "Sample team 2",
      wins: 10,
      losses: 50
    });
    this.fooball3 = new Football.Team({
      name: "Sample team 3",
      wins: 1,
      losses: 0
    });

    this.teams = new Football.Teams();
    // this.todoStub = sinon.stub(window, 'Todo');
  });
});

describe("Football", function () {

  beforeEach(function() {
    setFixtures('<div id="container"></div>')
  });

  it("should render data to the page", function() {
    //expect('#data').toExist();
  })
})