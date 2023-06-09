import Typed from "react-typed";
import RenderModel from './Render';
import './style.scss';

const MainSection = () => {

    return (
        <section className="main">
		    <div className='container'>
                <div className='center-group'>
                    <div>Enabling a new</div>
                    <div>Padel Economy</div>
                    <div className="text-content">Padelcash (PADEL) is the first cryptocurrency<br/>that you can use to <Typed   strings={[
                            "play padel",
                            "pay for padel lessons",
                            "buy padel equipment"
                        ]}
                        typeSpeed={100}
                        backSpeed={10}
                        loop />
                    </div>
                    <div>
                        <button>
                            <a href="https://padelcashdoc.netlify.app/how_to_buy_padelcash/" target="_blank">Buy Padelcash</a>
                        </button>
                        <button>
                            <a href="https://bscscan.com/token/0xa8c827364a27f2179f055d3c7bd5dfe7a526648f?utm_source=http://thebittimes.com/token-padel-BSC-0xa8c827364a27f2179f055d3c7bd5dfe7a526648f.html&utm_medium=web&utm_campaign=TheBitTimes.Com&referer=http://thebittimes.com/token-padel-BSC-0xa8c827364a27f2179f055d3c7bd5dfe7a526648f.html" target={"_blank"}>Smart Contract</a>
                        </button>
                    </div>
                </div>
                <div className="modelRender">
                    <RenderModel></RenderModel>
                </div>
            </div>
        </section>
    )
}

export default MainSection