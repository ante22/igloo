import React, { useState } from "react";
import Klasa from "./Klasa"; // Pretpostavljam da su ovi moduli već definirani
import Funk from "./Funk";
import Cija from "./Cija";
import Lasa from "./Lasa";
import Korisnik from "./Korisinik";
function App2() {
  const [korisnici, setKorisnici] = useState([
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
  ]);
  const promijeniIme = (id, novoIme) => {
    const noviKorisnici = korisnici.map((korisnik) =>
      korisnik.id === id ? { ...korisnik, ime: novoIme } : korisnik
    );
    setKorisnici(noviKorisnici);
  };
  const [pozdrav, setPozdrav] = useState("Dobro došli na aplikaciju");

  const handleButtonClick = () => {
    const dodajGodinu = korisnici.map((korisnik) => {
      return { ...korisnik, godine: korisnik.godine + 1 }; // Povećaj "godine" za 1
    });
    setKorisnici(dodajGodinu); // Ažuriraj stanje pomoću setKorisnici
  };

  return (
    <>
      <h1>{pozdrav}</h1>
      {korisnici.map((korisnik) => (
        <Klasa key={korisnik.id} ime={korisnik.ime} godine={korisnik.godine} />
      ))}
      <h2>Korisnici - Ovo je funkcionalna komponenta iz App.js</h2>
      {/* Prosljeđivanje propsa u child komponente */}
      <Klasa ime={korisnici[0].ime} godine={korisnici[0].godine} />
      <Funk ime={korisnici[1].ime} godine={korisnici[1].godine} />
      <Cija>{`${korisnici[2].ime}, ${korisnici[2].godine} godina`}</Cija>
      <Lasa>
        <p>
          {korisnici[2].ime}, {korisnici[2].godine} godina
        </p>
      </Lasa>
      <button onClick={handleButtonClick}>Dodaj godinu</button>
      {korisnici.map((korisnik) => (
        <Korisnik
          key={korisnik.id}
          ime={korisnik.ime}
          godine={korisnik.godine}
          onPromijeniIme={(novoIme) => promijeniIme(korisnik.id, novoIme)}
        ></Korisnik>
      ))}
    </>
  );
}

export default App2;
