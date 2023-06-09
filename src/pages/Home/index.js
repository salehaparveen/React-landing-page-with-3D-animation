import MainSection from './MainSection';
import GrowthSection from "./GrowthSection";
import SecuritySection from './SecuritySection';
import MintSection from './MintSection';
import Cashback from './Cashback';
import './style.scss';

export default function Home() {
    return (
        <div className="home-container">
            <MainSection />
            <GrowthSection />
            <SecuritySection />
            <MintSection />
            <Cashback />
        </div>
    )
}
