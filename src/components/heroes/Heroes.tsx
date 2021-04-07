import bgImage from '../../img/bg_upper_part.png';
import ducky from '../../img/ducky.webp'
import shark from '../../img/shark.webp'

function Heroes() {
  return (
    <section className='heroes' style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="visually-hidden">Поле с анимацией</h2>
      <img className='heroes__ducky' src={ducky} alt='yellow duck'/>
      <img className='heroes__shark' src={shark} alt='angry shark'/>
    </section>
  );
};

export default Heroes;
