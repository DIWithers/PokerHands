export class PokerHandRank {

    public static findHighestCard(cards: string): string {
        console.log("cards: " + cards);

        let cardRankWord: any =  {
            "A": "Ace",
            "8": "Eight",
            "9": "Nine"
        }

        let highestCard: any = this.sortCardsHighestToLowest(cards)[0][0];
        console.log(highestCard);
        return "High Card: " + cardRankWord[highestCard];
    }

    public static sortCardsHighestToLowest(cardsToSort: string): any {
        console.log(cardsToSort.split(" ").sort().reverse());
        return cardsToSort.split(" ").sort().reverse();
    }
    private static isPair(sortedCards: string): boolean {
        console.log(sortedCards);
        return sortedCards[0][0] === sortedCards[1][0];
    }
    public static findRank(cards: any): string {
        let sortedCards: string = this.sortCardsHighestToLowest(cards);
        if (this.isPair(sortedCards)) {
            return "Pair";
        }
    }
}