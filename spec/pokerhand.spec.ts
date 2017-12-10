import {PokerHand} from "../src/pokerhand";

describe("Poker Hands", () => {
    it("should return highest card value if Ace", () => {
     expect(PokerHand.findRank("2C 3H 4S 8C AH")).toBe("High Card: Ace");
    });
    it("should return highest card value if Eight", () => {
        expect(PokerHand.findRank("7C 3H 2S 8C 4H")).toBe("High Card: Eight");
    });
    it("should return one pair if only two cards have the same value", () => {
        expect(PokerHand.findRank("2C 4H 4S 8C AH")).toBe("Pair");
    });
});

