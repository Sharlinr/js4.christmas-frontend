const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
      <h1>JulICA</h1>
      <div className='homepage-image'>
        <img src='/images/cover.png' alt='julica-hemsida' />
      </div>
      <div className='homepage-info'>
        <h3> - Din Julbutik online</h3>
        <p>
          På JulICA Sundbyberg finner du ett stort utbud av julprodukter,
          julpynt, julgodis och julklappar för alla åldrar. I vårt egna bageri
          bakas våra berömda lussekatter med kärlek. Dessutom har vi en härlig
          station för julklappsinslagning för våra kunder, helt gratis!
          <br />
          Välkomna till oss hälsar personalen på JulICA Sundbyberg med handlaren
          MICA i spetsen.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
