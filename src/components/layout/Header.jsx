import { useProfiles } from '../../context/profiles'

const Header = () => {
    const { pros, setProfiles } = useProfiles()

    return (
      <div>
        <h1>Header</h1>
        <h2>Practicing use context</h2>
        {/* {
          pros.map(p => {
            return(
              <div key={p.id}>

                <p>{p.first_name}</p>
                <p>{p.gender}</p>
              </div>
              )
          })
        } */}
      </div>
    )

}

export default Header
