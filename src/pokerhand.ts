export class PokerHand {
    static findRank(cards: string): string {
        let rank: string;
        let sortedCards: any = cards.split(" ").sort().reverse();
        let cardInfo: any = this.updateOccurances(sortedCards);
        let numOfPairs: number = this.findAllPairs(cardInfo);

        if (this.isThreeOfAKind(cardInfo) && (numOfPairs === 1)) return "Full House";
        if (this.isStraight(sortedCards, cardInfo) && this.isSameSuit(sortedCards)) return "Flush";
        if (this.isStraight(sortedCards, cardInfo)) return rank = "Straight";
        if (this.isThreeOfAKind(cardInfo)) return rank = "Three of a Kind";
        if (numOfPairs === 2) {
            return rank = "Two Pair";
        }
        if (numOfPairs === 1) {
            return rank = "Pair";
        }
        else return rank = this.findHighestCard(sortedCards, cardInfo);
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

    private static findAllPairs(cardInfo: any): number {
        let numOfPairs: number = 0;
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 2) {
                numOfPairs++;
            }
        }
        return numOfPairs;
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

    private static findHighestCard(sortedCards: string, cardInfo: any): string {
        let highestCardValue: string = cardInfo[sortedCards[0][0]].Word;
        return "High Card: " + highestCardValue;
    }

    private static isThreeOfAKind(cardInfo: any): boolean {
        let isThreeOfAKind: boolean = false;
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 3) {
            isThreeOfAKind = true;
            }
        }
        return isThreeOfAKind;
    }

    private static isSameSuit(sortedCard: string): boolean {
        let lastSuite: number = "";
        let consecutiveSuits: number = 0;
        for (let i: number = 0; i < sortedCard.length; i++) {
            if (sortedCard[i][1] === lastSuite) consecutiveSuits++;
            lastSuite = sortedCard[i][1];
        }
        if (consecutiveSuits === 4) return true;
        else return false;
    }
}
