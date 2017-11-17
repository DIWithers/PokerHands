export class PokerHand {

    static findRank(cards: string): string {
        let sortedCards: any = cards.split(" ").sort().reverse();
        let consecutiveHops: number = this.findConsecutiveHops(sortedCards);
        console.log(consecutiveHops);
        if (consecutiveHops === 1) {
            return "Pair";
        }

        return this.findHighestCard(sortedCards);
    }

    private static findConsecutiveHops(sortedCards: any) {
        let consecutiveHops: number = 0;
        let lastCard: string = "";
        console.log(sortedCards.length);
        for (let i: number = 0; i < sortedCards.length; i++) {
            console.log(sortedCards[i][0] + " , " + lastCard[0]);

            if (sortedCards[i][0] === lastCard[0]) {
                consecutiveHops++;
            }
            lastCard = sortedCards[i];
        }
        return consecutiveHops;
    }

    private static findHighestCard(sortedCards: string): string {
        let cardWords: any = {
            "A": "Ace",
            "8": "Eight"
        }

        let highestCardValue: string = cardWords[sortedCards[0][0]];
        return "High Card: " + highestCardValue;
    }
}