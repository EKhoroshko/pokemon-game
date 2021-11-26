import css from './App.module.css'
import cn from 'classnames'
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { FirebaseContext } from './Context/FirebaseContext';
import Home from './route/Home/Home';
import Game from './route/Game/Game';
import About from './route/About/About';
import Contact from './route/Contact/Contact';
import NotFound from './route/NotFound/NotFound';
import MenuHeader from './components/MenuHeader/MenuHeader';
import Footer from './components/Footer/Footer';
import User from './route/User/User';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FirebaseClass from './service/firebase';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { getUserAsync } from './store/user';
import { initializ, selectPokemonDataAll } from './store/pokemons'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const pok = useSelector(selectPokemonDataAll)
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';
  const dispatch = useDispatch();

  useEffect(() => {
    if (pok === null) {
      dispatch(initializ())
    }
  }, [dispatch, pok])

  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch])

  return (
    <FirebaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <section>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(css.wrap, { [css.isHome]: isPadding })}>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/game" component={Game} />
                <PrivateRoute path="/about" component={About} />
                <PrivateRoute path="/user" component={User} />
                <Route path="/contact" component={Contact} />
                <Redirect to="404" />
              </Switch>
            </div>
            <Footer />
          </section>
        </Route>
      </Switch>
      <NotificationContainer />
    </FirebaseContext.Provider>
  );
}

export default App;