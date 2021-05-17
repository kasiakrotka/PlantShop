import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Shop from "./pages/Shop";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}><Home/></Route>{/* 
        <Route path="/shop/:category"><Shop/></Route> */}
        <Route path="/shop/:category/:subcategory?"><Shop/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
