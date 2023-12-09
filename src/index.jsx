import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Provider from './context/ContextProvider.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
