import { FaTwitter} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './style.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-inner'>
                <div>Padelcash © 2022 All rights reserved </div>
                <div>
                    <a href=' https://twitter.com/padelcash' style={{paddingRight: "10px"}}>
                        <IconContext.Provider value={{ color: "white" }}>
                            <FaTwitter 
                                size="25px"
                                onMouseOver={({target})=>target.style.color="#1F5957"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />
                        </IconContext.Provider>
                    </a>
                    <a href='https://www.instagram.com/padelcash_/'>
                        <IconContext.Provider value={{ color: "white" }}>
                            <FaInstagram 
                                size="25px"
                                onMouseOver={({target})=>target.style.color="#1F5957"}
                                onMouseOut={({target})=>target.style.color="white"}
                            />
                        </IconContext.Provider>
                    </a>
                </div>
                <div>
                    <a href="mailto:contact@padel.cash">contact@padel.cash</a>
                </div>    
            </div>
        </footer>
    )
}

export default Footer