import HeroItem from '../components/HeroItem';
import BlogItemList from '../components/BlogItemList';
import './Home.scss';

export default function HomePage(props) {
    return (
        <div className="ctn">
            <div className="heroCtn">
                <HeroItem />
            </div>
            <div className="bodyCtn">
                <div className="leftCtn">
                    <BlogItemList />
                </div>
                <div className="rightCtn">
                </div>
            </div>
        </div>
    );
}