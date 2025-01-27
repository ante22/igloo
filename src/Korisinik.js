const Korisnik = ({ ime, godine, onPromijeniIme }) => {
  const handleInputChange = (e) => {
    onPromijeniIme(e.target.value); // Poziv funkcije za promjenu imena
  };

  return (
    <div>
      <p>
        Korisnik: {ime}, {godine} godina
      </p>
      <input
        type="text"
        value={ime} // Trenutno ime korisnika
        onChange={handleInputChange} // Ažuriranje imena
      />
    </div>
  );
};

export default Korisnik;
