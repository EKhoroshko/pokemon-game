import css from './App.module.css'
import cn from 'classnames'
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import { FirebaseContext } from './Context/FirebaseContext'
import Home from './route/Home/Home';
import Game from './route/Game/Game';
import About from './route/About/About';
import Contact from './route/Contact/Contact';
import NotFound from './route/NotFound/NotFound';
import MenuHeader from './components/MenuHeader/MenuHeader';
import Footer from './components/Footer/Footer';
import Firebase from './service/firebase';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <section>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(css.wrap, { [css.isHome]: match.isExact })}>
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