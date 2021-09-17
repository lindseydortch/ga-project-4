import './App.css';
import { ProfilesContext, UseProfilesState } from './context/profiles'
import { BrowserRouter, Route} from 'react-router-dom'

// ==============================================
// COMPONENTS
// ==============================================
// LAYOUT 
import Header from './components/layout/Header'

// PROFILES
import Dashboard from './components/profiles/Dashboard'
import ProfilesCreate from './components/profiles/ProfilesCreate'
import ProfilesUpdate from './components/profiles/ProfilesUpdate';

function App() {
  const profiles = UseProfilesState()

  return (
    <div className="App">
      <BrowserRouter>
        <ProfilesContext.Provider value={profiles}>
          <Header />
          <Dashboard />
          <Route exact path="/profiles" component={Dashboard} />
          <Route exact path="/profiles/create" component={ProfilesCreate} />
          {/* <Route exact path="/profiles/edit" component={ProfilesUpdate} /> */}
        </ProfilesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
