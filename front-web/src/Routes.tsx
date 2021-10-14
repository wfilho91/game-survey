import Header from 'core/components/Header'
import Charts from 'pages/Charts'
import Home from 'pages/Home'
import Records from 'pages/Records'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/records">
          <Records />
        </Route>
        <Route path="/charts">
          <Charts />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
