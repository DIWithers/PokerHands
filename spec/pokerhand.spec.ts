import {PokerHand} from "../src/pokerhand";

describe("function name", () => {
    it("should determine highest value card with Ace", () => {
        expect(PokerHand.findRank("3H 2C 4S AH 5C")).toBe("High Card: Ace");
    });
    it("should determine highest value card with 8", () => {
        expect(PokerHand.findRank("2C 3H 4S 8C 5H")).toBe("High Card: Eight");
    });
    it("should determine if highest rank is pair(2 cards of same value)", () => {
        expect(PokerHand.findRank("2C 4H 4S 3C 9H")).toBe("Pair");
    });
    it("should determine if there are two pairs", () => {
        expect(PokerHand.findRank("2C 3H 3S 2C 9H")).toBe("Two Pair");
    });
    it("should determine if highest rank is 3 of a kind(3 cards of same value)", () => {
        expect(PokerHand.findRank("2C 3H 3S 3C 9H")).toBe("Three of a Kind");
    });
    it("should determine if hand contains 5 cards with consecutive values(straight)", () => {
        expect(PokerHand.findRank("6C 7H 8S 9C TH")).toBe("Straight");
    });
    it("should determine if hand contains 5 cards with the same suit(flush)", () => {
        expect(PokerHand.findRank("6C 7C 7C 9C TC")).toBe("Flush");
    });
    it("should determine if hand contains 3 of a kind and pair(full house)", () => {
        expect(PokerHand.findRank("7H 7C 7S TH TC")).toBe("Full House");
    });
    it("should determine if hand contains 4 of a kind", () => {
        expect(PokerHand.findRank("7H 7C 7S 7D TC")).toBe("Four of a Kind");
    });
    it("should determine if hand contains 5 consecutive values and same suit(straight flush)", () => {
        expect(PokerHand.findRank("2H 3H 4H 5H 6H")).toBe("Straight Flush");
    });
});

