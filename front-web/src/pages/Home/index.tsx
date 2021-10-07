import './styles.css'
import { ReactComponent as ArrowIcon } from 'assets/img/arrow.svg'
import { ReactComponent as GamerImage } from 'assets/img/gamer.svg'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-text-title">
          Quais jogos a <br />
          galera gosta mais?
        </h1>
        <h3 className="home-text-subtitle">
          Clique no botão abaixo e saiba quais são os <br /> jogos que os gamers
          estão escolhendo!
        </h3>
        <div className="home-actions">
          <button className="home-btn">QUER SABER QUAIS SÃO</button>
          <div className="home-btn-icon">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <GamerImage className="home-image"/>
    </div>
  )
}

export default Home
