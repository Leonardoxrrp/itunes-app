import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('app'),
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
