const { computerChoice, choiceOption } = require("../RPS-Game");

const { expect } = require("chai");

describe("Testing the choice of computer", function () {
  it("The result of the computer choice should be one of rock, paper, or scissor", function (done) {
    const result = computerChoice();
    expect(choiceOption).to.include(result);
    done()
  });
});
