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
import FirebaseClass from './service/firebase';

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

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
                <Route path="/game" component={Game} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Redirect to="404" />
              </Switch>
            </div>
            <Footer />
          </section>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  );
}

export default App;