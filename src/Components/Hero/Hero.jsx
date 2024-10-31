import './Hero.css';
import pauseBtn from '../../assets/pause-button.svg';
import playBtn from '../../assets/play-button.svg';
import snapSreen from '../../assets/snapscreen.png';
const Hero = ({ setPlayStatus, playStatus, heroData, heroCount, setHeroCount }) => {
    const bgUrl = {
        backgroundImage: !playStatus ? `url(${snapSreen})` : 'none',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='hero-section p-[15px] md:p-[30px] min-h-[100vh] flex flex-col justify-center relative z-1'>
            <div className="hero-section--inner flex flex-wrap items-end md:mt-[200px] z-2">
                <div className="hero-section--text max-w-[550px] md:pl-8">
                    <h1 className='text-white text-5xl md:text-8xl font-bold uppercase font-m'>{heroData.text1}</h1>
                    <p className='text-white text-lg fontM py-5 uppercase max-w-[250px]'>{heroData.text2}</p>
                </div>
                <div className="hero-section--nav">
                    <ul className="hero-section--nav__dots dots-nav flex items-center px-2 justify-center gap-[10px]">
                        <li onClick={() => setHeroCount(0)} className={`${heroCount === 0 ? 'dot-nav--item__isactive' : 'dot'} dot-nav--item cursor-pointer flex flex-col justify-center`}></li>
                        <li onClick={() => setHeroCount(1)} className={`${heroCount === 1 ? 'dot-nav--item__isactive' : 'dot'} dot-nav--item cursor-pointer flex flex-col justify-center`}></li>
                        <li onClick={() => setHeroCount(2)} className={`${heroCount === 2 ? 'dot-nav--item__isactive' : 'dot'} dot-nav--item cursor-pointer flex flex-col justify-center`}></li>
                    </ul>
                </div>
                <div className={`hero-section--thumbnail flex flex-col justify-center items-center ml-auto ${!playStatus ? 'min-w-[180px] min-h-[100px]' : 'hide-bg'}`} style={bgUrl}>
                    <div className="hero-section--play cursor-pointer w-[45px] h-[45px] rounded-full border-white border-2 p-2">
                        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pauseBtn : playBtn} alt="lecture" width='50' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;