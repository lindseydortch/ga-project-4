import './App.css';
import { ProfilesContext, UseProfilesState } from './context/profiles'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// ==============================================
// COMPONENTS
// ==============================================
// LAYOUT 
import Header from './components/layout/Header'

// PROFILES
import Dashboard from './components/profiles/Dashboard'
import ProfilesCreate from './components/profiles/ProfilesCreate'

function App() {
  const profiles = UseProfilesState()

  return (
    <div className="App">
      <BrowserRouter>
        <ProfilesContext.Provider value={profiles}>
          <Header />
          <Dashboard />
          <Route exact path="/profiles/create" component={ProfilesCreate} />
        </ProfilesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
