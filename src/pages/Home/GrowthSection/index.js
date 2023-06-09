import './style.scss';
import ai1 from '../../../assets/images/995-ai1.png';

const GrowthSection = () => {

    return (
        <section className="growth" id="growth">
            <div className='description'>
                <span className='section-title'>Growth</span>
                <div className="text-group-wrapper">
                    <div className='text-title'>A <span>booming</span> and <span>healthy</span> economy</div>
                    <div className='text-content'>Padel is the fastest growing sport in the world, with more than 30 million players, 12,000 clubs worldwide and an annual spend forecasted to reach the $300M mark in 2025 -2028. The padel economy is booming, but it brings with it the challenges of centralised banking systems, payment fees and growth.<br/><br/>Padelcash is the first digital currency fully focused on making the Padel Economy decentralised, freeing clubs and players from banking fees and making it accessible to everyone.</div>
                </div>
            </div>
            <div className='img-wrapper'>
                <img src={ai1} alt="" />
            </div>
        </section>
    )
}

export default GrowthSection