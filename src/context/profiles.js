import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'

export const ProfilesContext = createContext()

export function UseProfilesState() {
  const [pros, setProfiles] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/profiles/`)
      .then(res => res.data)
      .then(pl => {
        console.log(pl)
        setProfiles(pl)
      })
      .catch(err => console.log(err))
  }, [])

  // pros.forEach(p => console.log(p.id))

  return {
    pros,
    setProfiles
  }
}

export function useProfiles() {
  const profiles = useContext(ProfilesContext)
  return profiles 
}