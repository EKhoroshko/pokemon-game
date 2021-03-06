import PropTypes from 'prop-types';
import Header from '../../components/Header/Header'
import Layout from '../../components/Layout/Layout'
import pika from '../../assets/imges/bg1.jpg'
import team from '../../assets/imges/bg2.jpg'
import css from '../Home/Home.module.css'

const Home = () => {
  return (
    <div>
      <Header title={'Pokemon Game'} descr={'This is simple triple triad card game'} />
      <div className={css.aa}>
        <Layout title={'Pokemon'} desc={'Short description'} urlBg={pika}>
          <p>
            In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
            Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
          </p>
        </Layout>

        <Layout title={'Pokemon'} desc={'Are you ready?'} urlBg={team}>
          <p>
            To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
          </p>
        </Layout>
      </div>
    </div>
  );
}

Home.propTypes = {
  handleChangePage: PropTypes.func,
};

export default Home;
