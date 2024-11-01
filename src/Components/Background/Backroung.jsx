import './Background.css';
import video from '../../assets/Timeline-1.mp4';
import img1 from '../../assets/slide_01.jpg';
import img2 from '../../assets/slide_02.jpg';
import img3 from '../../assets/slide_03.jpg';
const Backroung = ({ playStatus, heroCount }) => {


    if (playStatus) {
        return (
            <video className='background vid' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
        );

    } else if (heroCount === 0) {
        return <img src={img1} alt="une image sympa" className='background faded' />
    } else if (heroCount === 1) {
        return <img src={img2} alt="une image sympa" className='background faded' />
    } else if (heroCount === 2) {
        return <img src={img3} alt="une image sympa" className='background faded' />
    }
};

export default Backroung;