import { useProfiles } from "../../context/profiles"

const Profiles = () => {
  const { pros, setProfiles } = useProfiles()

  return (
    <div>
      <h1>Profiles</h1>
      {/* {
        p.map((pl) => {
          return (<p key={pl.id}>{pl.first_name}</p>)
        })
      } */}
      {
        pros.map((p) => {
          return(
            <div key={p.id}>
              <p>{p.first_name}</p>
              <p>{p.bio}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Profiles
