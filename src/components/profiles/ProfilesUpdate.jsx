import axios from 'axios'
import { useState } from 'react'
import { useProfiles } from '../../context/profiles'

const ProfilesUpdate = ({p}) => {
  const { pros, setProfiles } = useProfiles()

  // console.log(p.id)

  const initialState = {
    first_name: "",
    photo: "",
    bio: "",
    job_title: "",
    company: "",
    school: "",
    covid_vaccination_status: "",
    current_city: "",
    hometown: "",
    gender: "",
    sexual_orientation: "",
    height: "",
    astrological_sign: "",
    interests_hobbies: "",
    favorite_restaurant: "",
    favorite_bar: "",
    religion: "",
    drinking: "",
    smoking: "",
    kids: "",
    politics: ""
  }

  const [form, setForm] = useState(initialState)

  const onChange = (event) => {
    setForm({...pros, [event.target.id]: event.target.value})
    console.log(event)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    let id = p.id
    // pros.forEach(p => console.log(p.first_name))
    axios.put(`http://localhost:8000/api/profiles/${id}/`, form, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .then(setProfiles(pros.map(pl => {
      if (p.id === pl.id) {

        pl.first_name = form.first_name
        pl.photo = form.photo 
        pl.bio = form.bio
        pl.job_title = form.job_title
        pl.company = form.company
        pl.school = form.school
        pl.covid_vaccination_status = form.covid_vaccination_status
        pl.current_city = form.current_city
        pl.hometown = form.hometown
        pl.gender = form.gender
        pl.sexual_orientation = form.sexual_orientation
        pl.height = form.height
        pl.astrological_sign = form.astrological_sign
        pl.interests_hobbies = form.interests_hobbies
        pl.favorite_restaurant = form.favorite_restaurant
        pl.favorite_bar = form.favorite_bar
        pl.religion = form.religion
        pl.drinking = form.drinking
        pl.smoking = form.smoking
        pl.kids = form.kids
        pl.politics = form.politics
      }
      console.log(pl)
      return pl
    })))
    .catch(err => console.log(err))
    setForm(initialState)
    // history.push('/profiles')
  }

  return (
    <div>
      <section className="updateForm">
      <h1>Update Your Profile</h1>

      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name" onChange={onChange} value={form.first_name} />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Link to Photo</label>
          <input type="text" name="photo" id="photo" onChange={onChange} value={form.photo} />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" cols="30" rows="10" onChange={onChange}value={form.bio}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="job_title">Job Title</label>
          <input type="text" name="job_title" id="job_title" onChange={onChange} value={form.job_title} />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" onChange={onChange} value={form.company} />
        </div>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input type="text" name="school" id="school" onChange={onChange} value={form.school} />
        </div>
        <div className="form-group">
          <label htmlFor="covid_vaccination_status">Covid Vaccination Status</label>
          <input type="checkbox" name="vaccinated" id="covid_vaccination_status" value="Vaccinated" onChange={onChange} />
          <label htmlFor="covid_vaccination_status">Vaccinated</label>
          <input type="checkbox" name="unvaccinated" id="covid_vaccination_status" value="Unvaccinated" onChange={onChange} />
          <label htmlFor="false">Unvaccinated</label>
        </div> 
        <div className="form-group">
          <label htmlFor="current_city">Current City</label>
          <input type="text" name="current_city" id="current_city" onChange={onChange} value={form.current_city}/>
        </div>
        <div className="form-group">
          <label htmlFor="hometown">Hometown</label>
          <input type="text" name="hometown" id="hometown" onChange={onChange} value={form.hometown}/>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={onChange} value={form.gender}>
            <option value="Choose an Option">Choose An Option</option>
            <option value="female">Female</option>
            <option value="male">male</option>
            <option value="transgender">Transgender</option>
            <option value="nonbinary">Nonbinary</option>
            <option value="agender">agender</option>
            <option value="gender_expansive">Gender Expansive</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sexual_orientation">Sexual Orientation</label>
          <select name="sexual_orientation" id="sexual_orientation" onChange={onChange} value={form.sexual_orientation}>
            <option value="Choose an Option">Choose An Option</option>
            <option value="straight">Straight</option>
            <option value="gay">Gay</option>
            <option value="lesbian">Lesbian</option>
            <option value="bisexual">Bisexual</option>
            <option value="pansexual">Pansexual</option>
            <option value="asexual">Asexual</option>
            <option value="aromantic">Aromantic</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="height">Height</label>
          <input type="text" name="height" id="height" onChange={onChange} value={form.height}/>
        </div>
        <div className="form-group">
          <label htmlFor="astrological_sign">Zodiac Sign</label>
          <select name="astrological_sign" id="astrological_sign" onChange={onChange}value={form.astrological_sign}>
            <option value="Choose an Option">Choose An Option</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interests_hobbies">Interests and Hobbies</label>
          <div className="form-group__checkboxes">
            <input type="checkbox" name="dance" id="interests_hobbies" value="dance" onChange={onChange} />
            <input type="checkbox" name="sports" id="interests_hobbies" value="sports" onChange={onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="favorite_restaurant">Favorite Resturant</label>
          <input type="text" name="favorite_restaurant" id="favorite_restaurant" onChange={onChange} value={form.favorite_restaurant}/>
        </div>
        <div className="form-group">
          <label htmlFor="favorite_bar">Favorite Bar</label>
          <input type="text" name="favorite_bar" id="favorite_bar" onChange={onChange} value={form.favorite_bar}/>
        </div>
        <div className="form-group">
          <label htmlFor="religion">Religion</label>
          <input type="text" name="religion" id="religion" onChange={onChange} value={form.religion}/>
        </div>
        <div className="form-group">
          <label htmlFor="drinking">Drinker</label>
          <input type="radio" name="yes" id="drinking" value="yes" onChange={onChange} />
          <input type="radio" name="sometimes" id="drinking" value="sometimes" onChange={onChange} />
          <input type="radio" name="no" id="no" value="drinking" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="smoking">Smoker</label>
            <input type="radio" name="yes" id="smoking" value="yes" onChange={onChange} />
            <input type="radio" name="socially" id="smoking" value="socially" onChange={onChange} />
            <input type="radio" name="no" id="smoking" value="no" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="kids">Kids</label>
            <input type="radio" name="have and want more" id="kids" value="have and want more" onChange={onChange} />
            <input type="radio" name="don't want" id="kids" value="don't want" onChange={onChange} />
            <input type="radio" name="in the future" id="kids" value="in the future" onChange={onChange} />
            <input type="radio" name="none" id="kids" value="none" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="politics">Politics</label>
          <select name="politics" id="politics" onChange={onChange} value={form.politics}>
            <option value="Choose an Option">Choose An Option</option>
            <option value="conservative">Conservative</option>
            <option value="moderate">moderate</option>
            <option value="liberal">liberal</option>
            <option value="apolitical">Apolitical</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
    </div>
  )
}

export default ProfilesUpdate
