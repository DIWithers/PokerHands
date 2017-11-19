export class PokerHand {
    static findRank(cards: string): string {
        let sortedCards: any = cards.split(" ").sort().reverse();
        let cardInfo: any = this.updateOccurances(sortedCards);
        let numOfPairs: number = this.findAllPairs(cardInfo);

        if (this.isStraight(sortedCards, cardInfo) && this.isSameSuit(sortedCards)) return "Straight Flush";
        if (this.isFourOfAKind(cardInfo)) return "Four of a Kind";
        if (this.isThreeOfAKind(cardInfo) && (numOfPairs === 1)) return "Full House";
        if (this.isSameSuit(sortedCards)) return "Flush";
        if (this.isStraight(sortedCards, cardInfo)) return "Straight";
        if (this.isThreeOfAKind(cardInfo)) return "Three of a Kind";
        if (numOfPairs === 2) {
            return "Two Pair";
        }
        if (numOfPairs === 1) {
            return "Pair";
        }
        else return this.findHighestCard(sortedCards, cardInfo);
    }
    private static updateOccurances(sortedCards: string): any {
        let cardInfo: any = {
            2: {Word: "Two", Occurance: 0, Value: 2},
            3: {Word: "Three", Occurance: 0, Value: 3},
            4: {Word: "Four", Occurance: 0, Value: 4},
            5: {Word: "Five", Occurance: 0, Value: 5},
            6: {Word: "Six", Occurance: 0, Value: 6},
            7: {Word: "Seven", Occurance: 0, Value: 7},
            8: {Word: "Eight", Occurance: 0, Value: 8},
            9: {Word: "Nine", Occurance: 0, Value: 9},
            T: {Word: "Ten", Occurance: 0, Value: 10},
            J: {Word: "Jack", Occurance: 0, Value: 11},
            Q: {Word: "Queen", Occurance: 0, Value: 12},
            K: {Word: "King", Occurance: 0, Value: 13},
            A: {Word: "Ace", Occurance: 0, Value: 14},

        };
        for (let i: number = 0; i < sortedCards.length; i++) {
            cardInfo[sortedCards[i][0]].Occurance += 1;
        }
        return cardInfo;
    }
    private static isStraight(sortedCards: string, cardInfo: any): boolean {
        let lastValue: number = 0;
        let consecutiveHops: number = 0;
        for (let i: number = 0; i < sortedCards.length; i++) {
            if (cardInfo[sortedCards[i][0]].Value === (lastValue - 1)) consecutiveHops++;
            lastValue = cardInfo[sortedCards[i][0]].Value;
        }
        return consecutiveHops === 4;
    }
    private static isSameSuit(sortedCard: string): boolean {
        let lastSuite: string = "";
        let consecutiveSuits: number = 0;
        for (let i: number = 0; i < sortedCard.length; i++) {
            if (sortedCard[i][1] === lastSuite) consecutiveSuits++;
            lastSuite = sortedCard[i][1];
        }
        return consecutiveSuits === 4;
    }

    private static findAllPairs(cardInfo: any): number {
        let numOfPairs: number = 0;
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 2) {
                numOfPairs++;
            }
        }
        return numOfPairs;
    }
    private static isThreeOfAKind(cardInfo: any): boolean {
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 3) {
                return true;
            }
        }
        return false;
    }
    private static isFourOfAKind(cardInfo: any): boolean {
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 4) {
                return true;
            }
        }
        return false;
    }
    private static findHighestCard(sortedCards: string, cardInfo: any): string {
        return "High Card: " + cardInfo[sortedCards[0][0]].Word;
    }
}
