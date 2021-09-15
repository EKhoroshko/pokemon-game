import PropTypes from 'prop-types';

const GamePage = ({ handleChangePage }) => {
    return (
        <div>
            <button type="button" onClick={() => handleChangePage('home')}> Go back</button>
            <h1> This Game Page</h1>
        </div>
    );
}

GamePage.propTypes = {
    handleChangePage: PropTypes.func,
};


export default GamePage;