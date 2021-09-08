import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import pika from './assets/imges/bg1.jpg'
import team from './assets/imges/bg2.jpg'

function App() {
  return (
    <div>
      <Header title={'Тут будет скоро что-то важное'} descr={'Но нужно подождать'} />
      <Layout title={'React'} desc={'Бойся мы идем'} urlBg={pika} />
      <Layout title={'React'} desc={'Бойся мы идем'} colorBg={'#ccc'} />
      <Layout title={'Pokemon'} desc={'Всех их соберем'} urlBg={team} />
      <Footer />
    </div>
  );
}

export default App;
