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
        var collection = Football.addTeams(data).league;
        console.log('Football.addTeams', collection, ' typeof ', typeof collection.length);
        expect(collection.length).toEqual(3);
        expect(collection.models[0].get('against')).toEqual(3);
        expect(collection.models[1].get('for')).toEqual(10);
        expect(collection.models[2].get('name')).toEqual('test');
        expect(collection.models[0].get('diff')).toEqual(17);
  })
});

describe("Football Model", function () {
  beforeEach(function() {
    this.fooball = new Football.Team({
      name: "Sample team",
      wins: 10,
      losses: 5
    });
  });
  
  describe("when instantiated", function() {
    
    it("should exhibit attributes", function() {
      expect(this.fooball.get("name")).toEqual("Sample team");
      expect(this.fooball.get("wins")).toEqual(10);
      expect(this.fooball.get("losses")).toEqual(5);
    });
    
  });
  
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