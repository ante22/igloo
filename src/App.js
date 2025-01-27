import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Klasa from "./Klasa";
import Funk from "./Funk";
import Cija from "./Cija";
import Lasa from "./Lasa";
import App2 from "./App2";
import Korisnik from "./Korisinik";
class App extends Component {
  state = {
    korisnici: [
      { id: 1, ime: "Ian", godine: 85 },
      { id: 2, ime: "Char", godine: 25 },
      { id: 3, ime: "Han", godine: 45 },
      { id: 4, ime: "Lan", godine: 72 },
      { id: 5, ime: "Char", godine: 65 },
      { id: 6, ime: "Fan", godine: 56 },
      { id: 7, ime: "Fran", godine: 45 },
      { id: 8, ime: "Char", godine: 34 },
      { id: 9, ime: "Ban", godine: 22 },
      { id: 10, ime: "Tan", godine: 16 },
    ],
    pozdrav: " Dobro došli na aplikaciju",
  };
  promijeniIme = (id, novoIme) => {
    this.setState((prevState) => ({
      korisnici: prevState.korisnici.map((korisnik) =>
        korisnik.id === id ? { ...korisnik, ime: novoIme } : korisnik
      ),
    }));
  };
  handleButtonClick = () => {
    const { korisnici } = this.state;
    const dodajGodinu = korisnici.map((korisnik) => {
      return { ...korisnik, godine: korisnik.godine + 1 };
    });
    this.setState({ korisnici: dodajGodinu });
  };
  render() {
    const { korisnici } = this.state;

    return (
      <>
        <h1>{this.state.pozdrav}</h1>
        {korisnici.map((korisnik, index) => (
          <Klasa key={index} ime={korisnik.ime} godine={korisnik.godine} />
        ))}
        <h2>Korisnici - Ovo je klasa Component iz App.js</h2>
        {/* Pass props to child components */}
        <Klasa ime={korisnici[0].ime} godine={korisnici[0].godine} />
        <Funk ime={korisnici[1].ime} godine={korisnici[1].godine} />
        <Cija>{`${korisnici[2].ime}, ${korisnici[2].godine} godina`}</Cija>
        <Lasa>
          <p>
            {korisnici[2].ime}, {korisnici[2].godine} godina
          </p>
        </Lasa>
        <button onClick={this.handleButtonClick}>Dodaj godinu</button>
        {korisnici.map((korisnik) => (
          <Korisnik
            key={korisnik.id}
            ime={korisnik.ime}
            godine={korisnik.godine}
            onPromijeniIme={(novoIme) =>
              this.promijeniIme(korisnik.id, novoIme)
            }
          />
        ))}
        <App2 />
      </>
    );
  }
}

export default App;
