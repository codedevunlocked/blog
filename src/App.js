import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import BlogItemList from './components/BlogItemList';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <BlogItemList />
      <Footer />
    </BrowserRouter>
  );
}
