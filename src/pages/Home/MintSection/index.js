import './style.scss';
import ai3 from '../../../assets/images/995-ai3.png';

const MintSection = () => {

    return (
        <section className="mint" id="mint">
            <div className='description'>
                <span className='section-title'>Mint New Coins</span>
                <div className="text-group-wrapper">
                    <div className='text-title'><span>Supply</span>, Minting and <span>Rewards</span></div>
                    <div className='text-content'>There is currently 1 Million Padelcash in circulation purely intended for players, clubs and Brands to use around the world. PADEL can be used to play padel, pay for padel lessons, buy padel equipment or add it as part of tournament prizes among other things.<br/><br/>There is an additional 1 Million Padelcash programmatically secured at a smart contract intended to reward early adopters. In essence, for every purchase that is made using Padelcash, a 10% reward is issued to both buyers and sellers where each of them gets 5% of the total value of the transaction directly into their wallet as a reward, until the full million is minted.</div>
                </div>
            </div>
            <div className='img-wrapper'>
                <img src={ai3} alt="" />
            </div>
        </section>
    )
}

export default MintSection