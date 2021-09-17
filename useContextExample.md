In a context document 

<code>
  export const user = {
  name: 'Lindsey',
  age: 25
  }

  export const UserContext = createContext({
    user
  })
</code>

In the component you want to add the context to, need to use class based component, so make sure to bring in component from React
<code>
  import { Component } from 'react'
  import { UserContext } from '../../context/profiles'  

  class Header extends Component {
    render() {
      let user = this.context.user

      return (
        <div>
          <h1>Header</h1>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
        </div>
      )
    }
  }
  Header.contextType = UserContext

  export default Header
</code>