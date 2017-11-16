export class PokerHandRank {

    public static findHighestCard(cards: string): string {
        console.log("cards: " + cards);

        let cardRankWord: any =  {
            "A": "Ace",
            "8": "Eight",
            "9": "Nine"
        }

        let highestCard: any = this.sortCards(cards)[0][0];
        console.log(highestCard);
        return "High Card: " + cardRankWord[highestCard];
    }

    public static sortCards(cardsToSort: string): any {
        return cardsToSort.split(" ").sort().reverse();
    }

}