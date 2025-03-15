import React from "react";
import "./Study.css";

export default function Study() {
  const decks = [
    { title: "Deack 1", description: "deck description", cardNumber: 30 },
    { title: "Deack 2", description: "deck description", cardNumber: 50 },
    { title: "Deack 3", description: "deck description", cardNumber: 60 },
    { title: "Deack 4", description: "deck description", cardNumber: 130 },
  ];
  return (
    <div className="study">
      <h1>Please choose a deck</h1>

      <div className="deck-menu">
        {decks.map((deck) => (
          <div>
            <h2>{deck.title}</h2>
            <p>{deck.description}</p>
            <p>Number of cards: {deck.cardNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
