/*

Main App function. Import all your Components here

The main app function acts as the parent component for the whole application. It will have many children and they 
will all TRY(PLEASE) to have distinc responsabilities. There is a Reducer that manages the state of the whole app, please 
take it into considerations while building your components if they need to know the state of the whole app. If you need to
manage a certain HTTP request at a certain route, it should be mentionned here.

*/

/* 

Import the relevant Objects from React 

Do not touch these during your tests
 
*/ 

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/*  

Import the relevant components that will extend the React.Component

Try to use a meaningful name based on the component propreties

*/ 

import HomePageContent from "./component/homepagecontent/HomePageContent.jsx";
import { Helmet } from "react-helmet";
import userprofile from "./component/userprofile/userprofile.jsx";
import itemList from "./component/itemlist/index";
import Cart from "./component/cartfooter/Cart";
import CartBar from "./component/cartfooter/CartBar";
import Navbar from "./component/navbar/reactnavbar";
import Itempage from "./component/itemlist/itempage.jsx";
import Checkout from "./component/checkout/index";
import selleraccount from "./component/selleraccount/selleraccount.jsx";
import Allreviewspage from "./component/selleraccount/Allreviewspage.jsx";
import ReactMap from "./component/map/map.jsx";


// Import the components you want to test here, try to be specific

import Jarvis from "./component/jarvis/jarvis.jsx";
import Ultron from "./component/ultron/ultron.jsx";


let renderItem = routerData => {
  return (
    <div>
      <Itempage id={routerData.match.params.itemId} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>AutoMesuelle</title>
        <meta
          name="description"
          content="Hello Antoine !"
        />
      </Helmet>
      <Navbar />
      <div>
        <Route exact={true} path="/" component={HomePageContent} />
        <Route exact={true} path="/items" component={itemList} />
        <Route exact={true} path="/items/item/:itemId" render={renderItem} />
        <Route exact={true} path="/cart" component={Cart} />
        <Route exact={true} path="/checkout" component={Checkout} />
        <Route exact={true} path="/profile" component={userprofile} />
        <Route exact={true} path="/sellerprofile" component={selleraccount} />
        <Route exact={true} path="/jarvis" component={Jarvis} />
        <Route exact={true} path="/map" component={ReactMap} />

        <Route
          exact={true}
          path="/sellerallreview"
          component={Allreviewspage}
        />
      </div>
      <CartBar />
    </BrowserRouter>
  );
}

export default App;
