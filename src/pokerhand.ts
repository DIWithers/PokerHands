export class PokerHand {

    static findRank(cards: string): string {
        let cardWords: any = {
            "A": "Ace",
            "8": "Eight"
        }
        let sortedCards: any = cards.split(" ").sort().reverse();
        let highestCardValue: string = cardWords[sortedCards[0][0]];

        console.log(sortedCards[0])
        return "High Card: " + highestCardValue;
    }
}