import { connect, ConnectedProps } from "react-redux";
import { Link } from 'react-router-dom';
import { PATH } from "../../constants/paths";
import logo from '../../assets/images/logo.png';
import './style.scss';

const mapStateToProps = state => ({})

const mapDispatchToProps = (disPatch, getState) => {

}

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const Header = (props: Props) => {
    // const history = useHistory();
    // useEffect(()=>{}, [history])

    return (
        <header className="header">
            <div className='logo-title'>
                <Link to={PATH.HOME}>
                    <img src={logo} alt="" />
                    <span>PADELCASH</span>
                </Link>
            </div>
            <div className='navbar-wrapper'>
                <div className='navbar-item'>
                    <a href="#growth">Growth</a>
                </div>
                <div className='navbar-item'>
                    <a href="#security">Security</a>
                </div>
                <div className='navbar-item'>
                    <a href="#mint">Mint New Coins</a>
                </div>
                <div className='navbar-item'>
                    <a href="#cashback">Cashback</a>
                </div>
            </div>
            <div className='doc-btn'>
                <div className="doc-btn-inner">
                    <a href='https://padelcashdoc.netlify.app/' target ={'_blank'}>Documentation</a>
                </div>
            </div>
        </header>
    )
}

export default Header