export class PokerHandRank {

    public static findHighestCard(cards: string): string {
        console.log("cards: " + cards);
        let rank: string = "High Card: ";
        let cardRankWord: any =  {
            "A": "Ace",
            "8": "Eight",
            "9": "Nine"
        }

        let highestCard: any = this.sortCards(cards)[0][0];
        console.log(highestCard);
        return "High Card: " + cardRankWord[highestCard];
        if (highestCard === "A") {
            return rank += "Ace";
        }
        if (highestCard === "8") {
            return rank += "Eight";
        }
        rank += cardRankWord[highestCard];
        console.log();
        return rank;
    }

    public static sortCards(cardsToSort: string): any {
        return cardsToSort.split(" ").sort().reverse();
    }

}