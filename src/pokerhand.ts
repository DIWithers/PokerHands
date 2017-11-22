export class PokerHand {

    static findRank(cards: string): string {
        let sortedCards: any = cards.split(" ").sort().reverse();
        let cardHandInfo: any  = new Map<string, any>();
        cardHandInfo.set("A", {"Word": "Ace"});
        cardHandInfo.set("8", {"Word": "Eight"});
        return PokerHand.findHighestCardValue(sortedCards, cardHandInfo);
    }

    private static findHighestCardValue(sortedCards: any, cardHandInfo: any): string {
        let highCard: any = cardHandInfo.get(sortedCards[0][0]);
        return "High Card: " + highCard.Word;
    }
}