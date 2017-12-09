export class PokerHand {

    static findRank(hand: string): string {
        let sortedCards: any = this.sortCards(hand);
        let cardInfo: any = this.updateOccurances(sortedCards);
        return this.findHighestCardValue(sortedCards, cardInfo);
    }
    private static sortCards(hand: string): any {
        let orderedCards: any = hand.split(" ").sort().reverse();
        let sortedCards: any = new Map<string, string>();
        orderedCards.map((card: any) => {
            let singleCard: any = card.split("");
            sortedCards.set(singleCard[0], singleCard[1]);
            // for (let cardValue of Array.from(sortedCards.keys())) sortedCards.set(cardValue, sortedCards.get(cardValue));
        });
        return sortedCards;
    }
    private static updateOccurances(sortedCards: string): any {
        let cardInfo: any = new Map<string, any>();
        cardInfo.set("2", {Word: "Two", Occurance: 0, Rank: 2});
        cardInfo.set("3", {Word: "Three", Occurance: 0, Rank: 3});
        cardInfo.set("4", {Word: "Four", Occurance: 0, Rank: 4});
        cardInfo.set("5", {Word: "Five", Occurance: 0, Rank: 5});
        cardInfo.set("6", {Word: "Six", Occurance: 0, Rank: 6});
        cardInfo.set("7", {Word: "Seven", Occurance: 0, Rank: 7});
        cardInfo.set("8", {Word: "Eight", Occurance: 0, Rank: 8});
        cardInfo.set("9", {Word: "Nine", Occurance: 0, Rank: 9});
        cardInfo.set("T", {Word: "Ten", Occurance: 0, Rank: 10});
        cardInfo.set("J", {Word: "Jack", Occurance: 0, Rank: 11});
        cardInfo.set("Q", {Word: "Queen", Occurance: 0, Rank: 12});
        cardInfo.set("K", {Word: "King", Occurance: 0, Rank: 13});
        cardInfo.set("A", {Word: "Ace", Occurance: 0, Rank: 14});

        for (let i: number = 0; i < sortedCards.length; i++) {
            cardInfo.get(sortedCards[i][0]).Occurance += 1;
        }
        return cardInfo;
    }

    private static findHighestCardValue(sortedCards: any, cardHandInfo: any): string {
        let highCard: any = cardHandInfo.get(sortedCards.entries().next().value[0]).Word;
        return "High Card: " + highCard;
    }
}