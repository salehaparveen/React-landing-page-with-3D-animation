import './style.scss';

const Cashback = () => {

    return (
        <section className="cashback" id="cashback">
            <div className='section-title'>Cashback</div>
            <div className='section-description text-title'>Mint new PADEL coins every time you pay<br/>with <span>Padelcash - 5%</span> of each purchase minted for both buyers and sellers.</div>
            <div className='section-content text-content'>The more you use or accept Padelcash the more you get back. We' ve programmatically secured 1 Million Padelcash for early adopters in the form of 5% back to their wallets for every purchase they make using PADEL. Both buyers and sellers get 5% back of the total amount transacted back to their wallets.</div>
            <div className="section-items">
                <div className='section-item' id="item1">
                    <button>
                        <a href='https://padelcashdoc.netlify.app/how_to_buy_padelcash/ ' target={"_blank"}>Buy Padelcash</a>
                    </button>
                    {/* <div className='section-item-inner'>
                        <button>
                            <a href='https://padelcashdoc.netlify.app/how_to_buy_padelcash/ ' target={"_blank"}>Buy Padelcash</a>
                        </button>
                    </div> */}
                </div>
                <div className='section-item' id="item2">
                    <button>
                        <a href='https://padelcashdoc.netlify.app/pay_with_padelcash/ ' target={"_blank"}>Pay using Padelcash</a>
                    </button>
                    {/* <div className='section-item-inner'>
                        <button>
                            <a href='https://padelcashdoc.netlify.app/pay_with_padelcash/ ' target={"_blank"}>Pay using Padelcash</a>
                        </button>
                    </div> */}
                </div>
                <div className='section-item' id="item3">
                    <button>
                        <a href='https://padelcashdoc.netlify.app/join_and_accept_padelcash/ ' target={"_blank"}>Accept Padelcash</a>
                    </button>
                    {/* <div className='section-item-inner'>
                        <button>
                            <a href='https://padelcashdoc.netlify.app/join_and_accept_padelcash/ ' target={"_blank"}>Accept Padelcash</a>
                        </button>
                    </div> */}
                </div>
            </div>
            <div className='left-ellipse'></div>
            <div className='center-ellipse'></div>
            <div className='right-ellipse'></div>
        </section>
    )
}

export default Cashback