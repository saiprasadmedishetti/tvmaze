import Sidebar from "./components/Sidebar/Sidebar";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <div className="tab-content">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
