export class PokerHand {
    static findRank(cards: string): string {
        let rank: string;
        let sortedCards: any = cards.split(" ").sort().reverse();
        let cardInfo: any = this.updateOccurances(sortedCards);
        // console.log(cardInfo);
        let numOfPairs: number = this.findAllPairs(cardInfo);
        if (numOfPairs === 1) {
            rank = "Pair";
        }
        else rank = this.findHighestCard(sortedCards, cardInfo);
        return rank;
    }

    private static findAllPairs(cardInfo: any): number {
        let numOfPairs: number = 0;
        for (let key in cardInfo) {
            if (cardInfo[key].Occurance === 2){
                numOfPairs++;
            }
        }
        console.log("pairs: " + numOfPairs);
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
                // console.log(cardInfo[sortedCards[i][0]].Occurance);

            }
            return cardInfo;
    }

    private static findHighestCard(sortedCards: string, cardInfo: any): string {
        let highestCardValue: string = cardInfo[sortedCards[0][0]].Word;
        // console.log(highestCardValue + "!!!");
        return "High Card: " + highestCardValue;
    }
}


///OCCURANCE!!! FOR EXAMPLE, "A": {"WORD": "ACE", "OCCURANCE": 1}