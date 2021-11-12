import React from 'react';
import './DevelopersTable.css';

const base_url = 'http://localhost:3000/api/v1/developers'

export default class DevelopersTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataIsLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch(base_url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
            DataIsLoaded: true
          });
        },
        (error) => {
          this.setState({
            DataIsLoaded: true,
            error
          });
        })
  }

  render() {
    const { DataIsLoaded, items, error} = this.state;
    if (error) {
      return <div><h1>Error: {error.message}</h1> </div> ;
    } else if (!DataIsLoaded) {
      return <div>Loading ..</div>
    } else {
      return (
      <div className = "App">
        <h1> Fetch data from an api in react </h1>  {
          items.map((item) => (
          <ol key = { item.id } >
            name: { item.name },
            role: { item.role }
            </ol>
          ))
        }
      </div>
      );
    }
  }
}
