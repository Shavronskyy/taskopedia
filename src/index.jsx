import ReactDOM from 'react-dom/client';
import Header from './Layout/Head';
import Footer from './Layout/Footer';
import MainBody from './MainBody';
import "./CSS/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div style={{backgroundColor: 'black', color: 'grey'}}>
        <Header />
        <div className='px-4'>
        <MainBody />
        </div>
        <Footer />
    </div>
);