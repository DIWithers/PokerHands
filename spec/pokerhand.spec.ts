import {PokerHand} from "../src/pokerhand";

describe("Poker Hands", () => {
    it("should return highest card value if Ace", () => {
     expect(PokerHand.findRank("2C TH JS AH 7C")).toBe("High Card: Ace");
    });
    it("should return highest card value if Eight", () => {
        expect(PokerHand.findRank("7C 3H 2S 8C 4H")).toBe("High Card: Eight");
    });
    it("should return one pair if only two cards have the same value", () => {
        expect(PokerHand.findRank("2C 4H 4S 8C AH")).toBe("Pair");
    });
    it("should return two pairs if two sets of cards have the same value", () => {
        expect(PokerHand.findRank("2C 4H 4S 8C 8H")).toBe("Two Pair");
    });
    it("should return three of a kind if 3 cards have the same value", () => {
        expect(PokerHand.findRank("2C 4H 4S 4C 8H")).toBe("Three of a kind");
    });
    it("should return straight if hand contains 5 cards with consecutive values", () => {
        expect(PokerHand.findRank("2C 3H 4S 5C 6H")).toBe("Straight");
    });
    it("should return flush if hand contains 5 cards with same suit", () => {
        expect(PokerHand.findRank("2H AH 4H 5H 6H")).toBe("Flush");
    });
    it("should return full house with 3 cards of the same value, with the remaining 2 cards forming a pair", () => {
        expect(PokerHand.findRank("2H 2S 2C 5D 5H")).toBe("Full House");
    });
    // it("should return four of a kind with 4 cards of the same value", () => {
    //     expect(PokerHand.findRank("2H 2S 2C 2D 5H")).toBe("Four of a kind");
    // });
});

