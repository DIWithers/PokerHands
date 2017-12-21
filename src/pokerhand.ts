export class PokerHand {

    static findRank(hand: string): string {
        let cardReference: any = this.initializeCardReference();
        let sortedCards: any = this.sortCards(hand, cardReference);
        let cardValueOccurances: any = this.setCardOccurances(sortedCards);
        if (this.isSameSuit(sortedCards) && this.isStraight(sortedCards, cardReference)) return "Straight Flush";
        if (this.isXOfAKind(cardValueOccurances, 4)) return "Four of a kind";
        if (this.isXOfAKind(cardValueOccurances, 3) && this.isXPairs(cardValueOccurances, 1)) return "Full House";
        if (this.isSameSuit(sortedCards)) return "Flush";
        if (this.isStraight(sortedCards, cardReference)) return "Straight";
        if (this.isXOfAKind(cardValueOccurances, 3)) return "Three of a kind";
        if (this.isXPairs(cardValueOccurances, 2)) return "Two Pair";
        if (this.isXPairs(cardValueOccurances, 1)) return "Pair";
        return this.findHighestCardValue(sortedCards, cardReference);
    }
    private static initializeCardReference(): any {
        let cardReference: any = new Map<string, any>();
        cardReference.set("2", {Word: "Two", Rank: 2});
        cardReference.set("3", {Word: "Three", Rank: 3});
        cardReference.set("4", {Word: "Four", Rank: 4});
        cardReference.set("5", {Word: "Five", Rank: 5});
        cardReference.set("6", {Word: "Six", Rank: 6});
        cardReference.set("7", {Word: "Seven", Rank: 7});
        cardReference.set("8", {Word: "Eight", Rank: 8});
        cardReference.set("9", {Word: "Nine", Rank: 9});
        cardReference.set("T", {Word: "Ten", Rank: 10});
        cardReference.set("J", {Word: "Jack", Rank: 11});
        cardReference.set("Q", {Word: "Queen", Rank: 12});
        cardReference.set("K", {Word: "King", Rank: 13});
        cardReference.set("A", {Word: "Ace", Rank: 14});

        return cardReference;
    }
    private static setCardOccurances(sortedCards: any): any {
        let cardValueOccurances: any = new Map<string, any>();
        for (let card of sortedCards) {
            cardValueOccurances.set(card.value, typeof cardValueOccurances[card.value] === "undefined" ? cardValueOccurances[card.value] = 1 : cardValueOccurances[card.value]++);
        }
        return cardValueOccurances;
    }
    private static sortCards(hand: string, cardReference: any): any {
        let splitHand: any = hand.split(" ");
        let sortedCards: any = splitHand.map((card: string) => {
            return {value: card[0], suit: card[1], rank: cardReference.get(card[0]).Rank};
        });
        sortedCards.sort((a: any, b: any) => b.rank - a.rank);
        return sortedCards;
    } 

    private static isXPairs(cardValueOccurances: any, pairsToFind: number): number {
        let numOfPairs: number = 0;
        for (let cardNumber of Array.from(cardValueOccurances.keys())) {
            if (cardValueOccurances[cardNumber] === 2) {
                numOfPairs++;
            }
        }
        return numOfPairs === pairsToFind;
    }
    private static isXOfAKind(cardValueOccurances: any, x: number): boolean {
        return Array.from(cardValueOccurances.keys()).some((card: any) => cardValueOccurances[card] === x);
    }
    private static isStraight(sortedCards: string, cardReference: any): boolean {
        let lastValue: number = 0;
        let consecutiveHops: number = 0;
        sortedCards.forEach((card: string) => {
            if (cardReference.get(card.value).Rank === (lastValue - 1)) consecutiveHops++;
            lastValue = cardReference.get(card.value).Rank;
        });
        return consecutiveHops === 4;
    }
    private static isSameSuit(sortedCards: string): boolean {
        let lastSuite: string = "";
        let consecutiveSuits: number = 0;
        sortedCards.forEach((card: string) => {
        if (card.suit === lastSuite) consecutiveSuits++;
            lastSuite = card.suit;
        });
        return consecutiveSuits === 4;
    }

    private static findHighestCardValue(sortedCards: any, cardReference: any): string {
        let highCard: string = cardReference.get(sortedCards[0].value);
        // let highCard: any = cardReference.get(sortedCards.entries().next().value[0]).Word;
        return "High Card: " + highCard.Word;
    }
}
