import HomePage from './pages/Home';
import BlogItemList from './components/BlogItemList';
import './App.scss';

export default function App() {
  return (
    <div className="ctn">
      <div className="heroCtn">
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
