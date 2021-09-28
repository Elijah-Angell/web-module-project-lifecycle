import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component {

  state = {
    Github: [],

  }


  componentDidMount() {
    axios.get("https://api.github.com/users/Elijah-Angell")
      .then(res => {

        this.setState({
          ...this.state,
          Github: res.data.message,

        });

      })
  }






  render() {
    return (
      <div className="App">
        <h1>Github And Friends</h1>
        <form>
          <input />
          <button>Fetch Github</button>
        </form>

        <div>

          {
            this.state.Github.map(avatar_url => {
              return (<img width="200" src={avatar_url} />);
            })
          }

          {/* <img src="https://avatars.githubusercontent.com/u/81428913?v=4" width={200} /> */}

        </div>
      </div>
    );
  }

}




export default App;
