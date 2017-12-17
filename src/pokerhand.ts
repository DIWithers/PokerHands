import any = jasmine.any;
export class PokerHand {

    static findRank(hand: string): string {
        let cardReference: any = this.initializeCardInfo();
        let sortedCards: any = this.sortCards(hand, cardReference);
        cardReference = this.updateCardInfo(sortedCards, cardReference);
        if (this.findXOfAKind(cardReference, 4)) return "Four of a kind";
        if (this.findXOfAKind(cardReference, 3) && this.findXPairs(cardReference, 1)) return "Full House";
        if (this.isSameSuit(sortedCards)) return "Flush";
        if (this.isStraight(sortedCards, cardReference)) return "Straight";
        if (this.findXOfAKind(cardReference, 3)) return "Three of a kind";
        if (this.findXPairs(cardReference, 2)) return "Two Pair";
        if (this.findXPairs(cardReference, 1)) return "Pair";
        return this.findHighestCardValue(sortedCards, cardReference);
    }
    private static initializeCardInfo(): any {
        let cardInfo: any = new Map<string, any>();
        cardInfo.set("2", {Word: "Two", Occurance: 0, Rank: 2});
        cardInfo.set("3", {Word: "Three", Occurance: 0, Rank: 3});
        cardInfo.set("4", {Word: "Four", Occurance: 0, Rank: 4});
        cardInfo.set("5", {Word: "Five", Occurance: 0, Rank: 5});
        cardInfo.set("6", {Word: "Six", Occurance: 0, Rank: 6});
        cardInfo.set("7", {Word: "Seven", Occurance: 0, Rank: 7});
        cardInfo.set("8", {Word: "Eight", Occurance: 0, Rank: 8});
        cardInfo.set("9", {Word: "Nine", Occurance: 0, Rank: 9});
        cardInfo.set("T", {Word: "Ten", Occurance: 0, Rank: 10});
        cardInfo.set("J", {Word: "Jack", Occurance: 0, Rank: 11});
        cardInfo.set("Q", {Word: "Queen", Occurance: 0, Rank: 12});
        cardInfo.set("K", {Word: "King", Occurance: 0, Rank: 13});
        cardInfo.set("A", {Word: "Ace", Occurance: 0, Rank: 14});

        return cardInfo;
    }
    private static sortCards(hand: string, cardInfo: any): any {
        let sortedCards: any = [];
        this.splitHand(hand, sortedCards, cardInfo);
        sortedCards.sort((a: any, b: any) => b.rank - a.rank);
        return sortedCards;
    }

    private static splitHand(hand: string, sortedCards: any, cardInfo: any): any {
        let splitHand: any = hand.split(" ");
        splitHand.forEach((card: string) => {
            sortedCards.push({value: card[0], suit: card[1], rank: cardInfo.get(card[0]).Rank});
        });
    }

    private static updateCardInfo(sortedCards: any, cardInfo: any): any {
        for (let card of Array.from(sortedCards)) {
            cardInfo.get(card.value).Occurance += 1;
        }
        return cardInfo;
    }

    private static findXPairs(cardInfo: any, pairsToFind: number): number {
        let numOfPairs: number = 0;
        for (let cardValue of Array.from(cardInfo.keys())) {
            if (cardInfo.get(cardValue).Occurance === 2) {
                numOfPairs++;
            }
        }
        return numOfPairs === pairsToFind;
    }
    private static findXOfAKind(cardInfo: any, x: number): boolean {
        return Array.from(cardInfo.values()).some((card: any) => card.Occurance === x);
    }
    private static isStraight(sortedCards: string, cardInfo: any): boolean {
        let lastValue: number = 0;
        let consecutiveHops: number = 0;
        sortedCards.forEach((card: string) => {
            if (cardInfo.get(card.value).Rank === (lastValue - 1)) consecutiveHops++;
            lastValue = cardInfo.get(card.value).Rank;
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

    private static findHighestCardValue(sortedCards: any, cardHandInfo: any): string {
        let highCard: string = cardHandInfo.get(sortedCards[0].value);
        // let highCard: any = cardHandInfo.get(sortedCards.entries().next().value[0]).Word;
        return "High Card: " + highCard.Word;
    }
}

//occurance may need to be moved to sorted cards, ask Mike?