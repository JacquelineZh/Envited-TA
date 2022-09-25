import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import CreatePage from './pages/CreatePage/CreatePage';
import EventPage from './pages/EventPage/EventPage';


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//         This is index
//     </div>
//   );
// }

// export default App;
