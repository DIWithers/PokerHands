import {PokerHand} from "../src/pokerhand";

describe("Poker Hands", () => {
    it("should return highest card value", () => {
     expect(PokerHand.findRank()).toBe("High Card: Ace");
    });
});

