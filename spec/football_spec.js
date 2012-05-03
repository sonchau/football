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