import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideos from './RecomendedVideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
import VideoPlay from './VideoPlay';
import Swich from '@material-ui/core/Switch';

export const ThemeContext = React.createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = (e) => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  const themeStyles = {
    backgroundColor: darkTheme ? '#111' : '#CCC',
    color: darkTheme ? '#CCC' : '#111',
    input: {
        backgroundColor: darkTheme ? '#111' : '#CCC'
    }
  }

  return (
   <ThemeContext.Provider value={darkTheme}>
    <div className="App" style={themeStyles}>

      <Router>
        <Header />
       <div className="app_header_swich" style={themeStyles} >
         <Swich
            defaultChecked
            onChange={toggleTheme}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        </div>
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
          <RecomendedVideos darkTheme={darkTheme} />
           </div>
          </Route>
        </Switch>
      </Router>

    </div>
   </ThemeContext.Provider>
  );
}

export default App;
