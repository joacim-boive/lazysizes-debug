import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes/plugins/rias/ls.rias';

// import 'lazysizes/lazysizes'; // This is stable
// import 'lazysizes/lazysizes.min'; // This fails intermittently not having replaced {width}
import 'lazysizes/lazysizes.min';


import Home from './home';
import About from './about';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/other">About</Link>
                    </li>
                </ul>


                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/other" component={About} />
            </div>
        </Router>
    );
}

export default App;