export class PokerHandRank {

    public static findHighestCard(sortedCards: any): string {
        console.log("cards: " + sortedCards);

        let cardRankWord: any =  {
            "A": "Ace",
            "8": "Eight",
            "9": "Nine"
        }

        let highestCard: any = sortedCards[0][0];
        // console.log(highestCard);
        return "High Card: " + cardRankWord[highestCard];
    }

    public static sortCardsHighestToLowest(cardsToSort: string): any {
        // console.log(cardsToSort.split(" ").sort().reverse());
        return cardsToSort.split(" ").sort().reverse();
    }
    private static isPair(sortedCards: string): boolean {
        let consecutiveCardCount: number = this.findNumberOfConsecutiveCards(sortedCards);
        return consecutiveCardCount === 1;
    }
    private static isThreeOfAKind(sortedCards: string): boolean {
        let consecutiveCardCount: number = this.findNumberOfConsecutiveCards(sortedCards);
        return consecutiveCardCount === 2;
    }

    private static findNumberOfConsecutiveCards(sortedCards: string): number {
        let lastCard: string = "";
        let consecutiveCardCount: number = 0;
        for (let i: number = 0; i < sortedCards.length; i++) {
            console.log(lastCard[0]);
            console.log(sortedCards[i][0]);
            if (sortedCards[i][0] === lastCard[0]) {
                consecutiveCardCount++;
            }

            lastCard = sortedCards[i];
            console.log(consecutiveCardCount);

        }
        return consecutiveCardCount;
    }
    public static findRank(cards: any): string {
        let sortedCards: string = this.sortCardsHighestToLowest(cards);
        if (this.isThreeOfAKind(sortedCards)) {
            return "Three of a Kind";
        }
        if (this.isPair(sortedCards)) {
            return "Pair";
        }
        else return this.findHighestCard(sortedCards);
    }
}