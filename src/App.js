import './App.css'
import {Provider} from 'react-redux'
import Page from './components/Page'
import store from './features/Store/Store'

// These are the list used in the application. You can move them to any component needed.

// Replace your code here
function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}

export default App
