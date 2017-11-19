import {PokerHand} from "../src/pokerhand";

describe("function name", () => {
    it("should determine highest value card with Ace", () => {
        expect(PokerHand.findRank("3H 2C 4S AH 5C")).toBe("High Card: Ace");
    });
    it("should determine highest value card with 8", () => {
        expect(PokerHand.findRank("2C 3H 4S 8C 5H")).toBe("High Card: Eight");
    });
    xit("should determine if highest rank is pair(2 cards of same value)", () => {
        expect(PokerHand.findRank("2C 4H 4S 3C 9H")).toBe("Pair");
    });
    xit("should determine if there are two pairs", () => {
        expect(PokerHand.findRank("2C 3H 3S 2C 9H")).toBe("Two Pair");
    });
    xit("should determine if highest rank is 3 of a kind(3 cards of same value)", () => {
        expect(PokerHand.findRank("2C 3H 3S 3C 9H")).toBe("Three of a Kind");
    });
});