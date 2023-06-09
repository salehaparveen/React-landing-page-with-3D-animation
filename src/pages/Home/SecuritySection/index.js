import './style.scss';
import ai2 from '../../../assets/images/995-ai2.png';

const SecuritySection = () => {

    return (
        <section className="security" id="security">
            <div className='img-wrapper'>
                <img src={ai2} alt="" />
            </div>
            <div className='description'>
                <span className='section-title'>Security</span>
                <div className="text-group-wrapper">
                    <div className='text-title'>Digital <span>protection</span> of your <span>wealth</span></div>
                    <div className='text-content'>Padelcash is secured and collateralised by one of the most stable and secure Stablecoins: BUSD (Binance USD).<br/><br/>Anyone holding PADEL is always able to exchange it into Binance USD and vice versa in our Liquidity pool, so that clubs, brands, players and coaches can rest assured that when they accept or use PADEL they are dealing with a digital currency that holds real value, and can be exchanged instantly for Fiat currency.</div>
                </div>
            </div>
        </section>
    )
}

export default SecuritySection