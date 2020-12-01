import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideos from './RecomendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
import VideoPlay from './VideoPlay';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/video/:videoId">
          <div className="app_page">
          <Sidebar />
          <VideoPlay />
           </div>
          </Route>
          <Route path="/search/:searchTerm">
          <div className="app_page">
          <Sidebar />
          <SearchPage />
           </div>
          </Route>
          <Route path="/">
          <div className="app_page">
          <Sidebar />
          <RecomendedVideos />
           </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
