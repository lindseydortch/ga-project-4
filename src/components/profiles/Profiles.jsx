import axios from "axios"
import { useProfiles } from "../../context/profiles"
import { useHistory, useParams } from "react-router"
import { Link } from "react-router-dom"
import ProfilesUpdate from "./ProfilesUpdate"

const Profiles = () => {
  const { pros, setProfiles } = useProfiles()

  const history = useHistory()


  // Delete a profile
  const deleteProfile = (id) => {
    axios.delete(`http://localhost:8000/api/profiles/${id}/`)
    // .then(history.push('/'))
    setProfiles(pros => pros.filter(p => p.id !== id))
  }

  return (
    <div>
      <h1>Profiles</h1>
      {
        pros.map((p) => {
          return(
            <div key={p.id}>
              <p>{p.first_name}</p>
              <p>{p.photo}</p>
              <p>{p.bio}</p>
              <p>{p.job_title}</p>
              <p>{p.company}</p>
              <p>{p.school}</p>
              <p>{p.covid_vaccination_status}</p>
              <p>{p.current_city}</p>
              <p>{p.hometown}</p>
              <p>{p.gender}</p>
              <p>{p.sexual_orientation}</p>
              <p>{p.height}</p>
              <p>{p.astrological_sign}</p>
              <p>{p.interests_hobbies}</p>
              <p>{p.favorite_restaurant}</p>
              <p>{p.favorite_bar}</p>
              <p>{p.religion}</p>
              <p>{p.drinking}</p>
              <p>{p.smoking}</p>
              <p>{p.kids}</p>
              <p>{p.politics}</p>
              <button onClick={() => deleteProfile(p.id)}>
                Delete
              </button>
              {/* <ProfilesUpdate p={p} pros={pros} setProfiles={setProfiles} /> */}
            </div>
          )
        })
      }
    </div>
  )
}

export default Profiles
