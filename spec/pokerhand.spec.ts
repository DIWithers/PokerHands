import {PokerHandRank} from "../src/pokerhand";

describe("function name", () => {
    it("should determine highest value card with Ace", () => {
        expect(PokerHandRank.findHighestCard("3H 2C 4S AH 5C")).toBe("High Card: Ace");
    });
    it("should determine highest value card with 8", () => {
        expect(PokerHandRank.findHighestCard("2C 3H 4S 8C 5H")).toBe("High Card: Eight");
    });
    it("should determine highest value card with 9", () => {
        expect(PokerHandRank.findHighestCard("2C 3H 4S 9C 5H")).toBe("High Card: Nine");
    });
    xit("should determine if highest rank is pair(2 cards of same value)", () => {
        expect(PokerHandRank.findRank("2C 3H 4S 9C 9H")).toBe("Pair");
    });
});