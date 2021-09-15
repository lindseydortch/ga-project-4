// import axios from 'axios'
// import { createContext, useState, useEffect } from 'react'
// import Profiles from '../components/profiles/Profiles'

// // GET ALL PROFILES IN THE DATABASE 
// // export default axios.get({
// //   baseURL: `http://localhost:8000/profiles/`,
// //   headers: {
// //     "Content-type": "application/json"
// //   }
// // })

// // export const callProfiles = () => {
// //   var myHeaders = new Headers();
// //   myHeaders.append("Content-Type", "application/json");

// //   var requestOptions = {
// //     method: 'GET',
// //     headers: myHeaders,
// //     redirect: 'follow'
// //   };

// //   fetch(`http://localhost:8000/${profiles}/`, requestOptions)
// //     .then(res => console.log(res.text()))
// //     .then(response => response.text())
// //     .then(result => console.log(result))
// //     .catch(error => console.log('error', error));
// // }

// // export const Profiles = (props) => {
// //   const [profiles, setProfiles] = useState({})
// //   useEffect(() => {
// //     var myHeaders = new Headers();
// //     myHeaders.append("Content-Type", "application/json");
// //     var requestOptions = {
// //       method: 'GET',
// //       headers: myHeaders,
// //       redirect: 'follow'
// //     };

// //     fetch("http://localhost:8000/api/profiles/", requestOptions)
// //       .then(res => {
// //         setProfiles(res.json())
// //       })
// //     // .then(response => response.text())
// //     // .then(result => console.log(result))
// //     .catch(error => console.log('error', error));

    
// //   }, [])

// //   return profiles
// // }

// // export const getProfiles = createContext({
// //   Profiles
// // })

// export const ProfilesContext = createContext()

// export const ProfilesProvider = props => {
  
//   const [profiles, setProfiles] = useState({})

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };

//     fetch(`http://localhost:8000/api/profiles/`, requestOptions)
//     .then(response => console.log(response.json()))
//     // .then(res => {
//       // setProfiles(res.json())
//     // })

    
//   }, [])

//   return (
//     <ProfilesContext.Provider value={{...profiles}}>
//       {profiles.children}
//     </ProfilesContext.Provider>
//   )

// }

// // export const ProfilesContext = createContext({
// //   ProfilesProvider
// // })

// Before Billie's help 
// let [p, setProfiles] = useState([])

  // useEffect(() => {
  //   // let headers = new Headers()
  //   // headers.append("Content-Type", "application/json")

  //   // let getRequest = {
  //   //   method: 'GET',
  //   //   headers: headers,
  //   //   redirect: 'follow'
  //   // }

  //   // axios.get(`http://localhost:8000/api/profiles/`)
  //   //   .then(res => res.data)
  //   //   .then(pl => {
  //   //     console.log(pl)
  //   //     setProfiles(pl)
  //   //   })
  //   //   .catch(err => console.log(err))

  //   // fetch(`http://localhost:8000/api/profiles/`)
  //   //   .then(response => response.json())
  //   //   .then(pl => {
  //   //     // console.log(res)
  //   //     // console.log(res[0].first_name)
  //   //     console.log(pl)
  //   //     setProfiles(pl)
  //   //     console.log(p)
  //   //   })
  //   //   .catch(err => console.log(err))
  // }, [])

  
  // console.log(profiles)