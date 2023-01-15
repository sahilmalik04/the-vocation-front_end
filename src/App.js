import './App.css';
import Footer from './views/layout/Footer'
import AllRoutes from './router/Routes';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL

function App() {
  return (
    <>
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
