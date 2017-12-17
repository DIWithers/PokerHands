export class PokerHand {

    static findRank(hand: string): string {
        let cardReference: any = this.initializeCardReference();
        let sortedCards: any = this.sortCards(hand, cardReference);
        cardReference = this.updateCardReference(sortedCards, cardReference);
        if (this.isXOfAKind(cardReference, 4)) return "Four of a kind";
        if (this.isXOfAKind(cardReference, 3) && this.isXPairs(cardReference, 1)) return "Full House";
        if (this.isSameSuit(sortedCards)) return "Flush";
        if (this.isStraight(sortedCards, cardReference)) return "Straight";
        if (this.isXOfAKind(cardReference, 3)) return "Three of a kind";
        if (this.isXPairs(cardReference, 2)) return "Two Pair";
        if (this.isXPairs(cardReference, 1)) return "Pair";
        return this.findHighestCardValue(sortedCards, cardReference);
    }
    private static initializeCardReference(): any {
        let cardReference: any = new Map<string, any>();
        cardReference.set("2", {Word: "Two", Occurance: 0, Rank: 2});
        cardReference.set("3", {Word: "Three", Occurance: 0, Rank: 3});
        cardReference.set("4", {Word: "Four", Occurance: 0, Rank: 4});
        cardReference.set("5", {Word: "Five", Occurance: 0, Rank: 5});
        cardReference.set("6", {Word: "Six", Occurance: 0, Rank: 6});
        cardReference.set("7", {Word: "Seven", Occurance: 0, Rank: 7});
        cardReference.set("8", {Word: "Eight", Occurance: 0, Rank: 8});
        cardReference.set("9", {Word: "Nine", Occurance: 0, Rank: 9});
        cardReference.set("T", {Word: "Ten", Occurance: 0, Rank: 10});
        cardReference.set("J", {Word: "Jack", Occurance: 0, Rank: 11});
        cardReference.set("Q", {Word: "Queen", Occurance: 0, Rank: 12});
        cardReference.set("K", {Word: "King", Occurance: 0, Rank: 13});
        cardReference.set("A", {Word: "Ace", Occurance: 0, Rank: 14});

        return cardReference;
    }
    private static sortCards(hand: string, cardReference: any): any {
        let sortedCards: any = [];
        this.splitHand(hand, sortedCards, cardReference);
        sortedCards.sort((a: any, b: any) => b.rank - a.rank);
        return sortedCards;
    }

    private static splitHand(hand: string, sortedCards: any, cardReference: any): any {
        let splitHand: any = hand.split(" ");
        splitHand.forEach((card: string) => {
            sortedCards.push({value: card[0], suit: card[1], rank: cardReference.get(card[0]).Rank});
        });
    }

    private static updateCardReference(sortedCards: any, cardReference: any): any {
        for (let card of Array.from(sortedCards)) {
            cardReference.get(card.value).Occurance += 1;
        }
        return cardReference;
    }

    private static isXPairs(cardReference: any, pairsToFind: number): number {
        let numOfPairs: number = 0;
        for (let cardValue of Array.from(cardReference.keys())) {
            if (cardReference.get(cardValue).Occurance === 2) {
                numOfPairs++;
            }
        }
        return numOfPairs === pairsToFind;
    }
    private static isXOfAKind(cardReference: any, x: number): boolean {
        return Array.from(cardReference.values()).some((card: any) => card.Occurance === x);
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

//occurance may need to be moved to sorted cards, ask Mike?