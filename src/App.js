import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideos from './RecomendedVideos';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecomendedVideos />
      </div>
    </div>
  );
}

export default App;
