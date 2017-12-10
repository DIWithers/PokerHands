export class PokerHand {

    static findRank(hand: string): string {
        let sortedCards: any = this.sortCards(hand);
        let cardInfo: any = this.updateOccurances(sortedCards);
        if (this.findXPairs(cardInfo, 1)) return "Pair";
        return this.findHighestCardValue(sortedCards, cardInfo);
    }
    private static sortCards(hand: string): any {
        let sortedCards: any = hand.split(" ").sort().reverse();
        return sortedCards;
    }
    private static updateOccurances(sortedCards: string): any {
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

        for (let card of Array.from(sortedCards)) cardInfo.get(card[0]).Occurance += 1;
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
    // private static isStraight(sortedCards: string, cardInfo: any): boolean {
    //     let lastValue: number = 0;
    //     let consecutiveHops: number = 0;
    //     for (let i: number = 0; i < sortedCards.length; i++) {
    //         if (cardInfo.get(sortedCards[i][0]).Rank === (lastValue - 1)) consecutiveHops++;
    //         lastValue = cardInfo.get(sortedCards[i][0]).Rank;
    //     }
    //     return consecutiveHops === 4;
    // }
    // private static isSameSuit(sortedCard: string): boolean {
    //     let lastSuite: string = "";
    //     let consecutiveSuits: number = 0;
    //     for (let i: number = 0; i < sortedCard.length; i++) { //for each
    //         if (sortedCard[i][1] === lastSuite) consecutiveSuits++;
    //         lastSuite = sortedCard[i][1];
    //     }
    //     return consecutiveSuits === 4;
    // }
    // private static findXOfAKind(cardInfo: any, x: number): boolean { //has instead, any or some
    //     for (let key of Array.from(cardInfo.keys())) {
    //         if (cardInfo.get(key).Occurance === x) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    private static findHighestCardValue(sortedCards: any, cardHandInfo: any): string {
        let highCard: string = cardHandInfo.get(sortedCards[0][0]);
        // let highCard: any = cardHandInfo.get(sortedCards.entries().next().value[0]).Word;
        return "High Card: " + highCard.Word;
    }
}