import './Hero.css';
import pauseBtn from '../../assets/pause-button.svg';
import playBtn from '../../assets/play-button.svg';
const Hero = ({ setPlayStatus, playStatus, heroData, heroCount, setHeroCount }) => {
    return (
        <div className='hero-section'>
            <div className="hero-section--text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-section--thumbnails">
                <p>Explore</p>
                <span>arrow</span>
            </div>
            <div className="hero-section--nav">
                <div className="hero-section--nav__dots dots-nav">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'active' : 'dot-nav--item'}>1</li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'active' : 'dot-nav--item'}>2</li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'active' : 'dot-nav--item'}>3</li>
                </div>
            </div>
            <div className="hero-section--play">
                <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pauseBtn : playBtn} alt="lecture" width='50' />
            </div>
        </div>
    );
};

export default Hero;