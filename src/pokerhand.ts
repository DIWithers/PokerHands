export class PokerHand {
    static findRank(cards: string): string {
        let rank: string;
        let sortedCards: any = cards.split(" ").sort().reverse();
        let cardInfo: any = this.updateOccurances(sortedCards);
        let numOfPairs: number = this.findAllPairs(cardInfo);
        let isThreeOfAKind: boolean = this.findThreeOfAKind(cardInfo);
        console.log(isThreeOfAKind);
        console.log(cardInfo);
        if (isThreeOfAKind) return rank = "Three of a Kind";
        if (numOfPairs === 2) {
            return rank = "Two Pair";
        }
        if (numOfPairs === 1) {
            return rank = "Pair";
        }
        else return rank = this.findHighestCard(sortedCards, cardInfo);
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
                "2": {Word: "Two", Occurance: 0},
                "3": {Word: "Three", Occurance: 0},
                "4": {Word: "Four", Occurance: 0},
                "5": {Word: "Five", Occurance: 0},
                "6": {Word: "Six", Occurance: 0},
                "7": {Word: "Seven", Occurance: 0},
                "8": {Word: "Eight", Occurance: 0},
                "9": {Word: "Nine", Occurance: 0},
                "T": {Word: "Ten", Occurance: 0},
                "J": {Word: "Jack", Occurance: 0},
                "Q": {Word: "Queen", Occurance: 0},
                "K": {Word: "King", Occurance: 0},
                "A": {Word: "Ace", Occurance: 0},

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

    private static findThreeOfAKind(cardInfo: any): boolean {
        let isThreeOfAKind: boolean = false;
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 3) {
            isThreeOfAKind = true;
            }
        }
        return isThreeOfAKind;
    }
}
