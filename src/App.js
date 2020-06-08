import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
export class App extends Component {
  state={
    cases:'',
    today:'',
    deaths:'',
    todayDeaths:'',
    recovered:'',
    critical:'',
    error:'',
    country:''
  }
  azan = async(e) => {
    e.preventDefault()
    const country = e.target.elements.country.value
    const data = await fetch(`https://disease.sh/v2/countries/${country}`)
    const jsonData = await data.json()
    console.log(jsonData);
    this.setState({
      cases:jsonData.cases,
      today:jsonData.todayCases,
      deaths:jsonData.deaths,
      todayDeaths:jsonData.todayDeaths,
      recovered:jsonData.recovered,
      critical:jsonData.critical,
      country:jsonData.country
    })
    
  }
  render() {

    return (
      <React.Fragment>
         <div className="container" style={{background: "#f3f4f1"}}>
           <div className="row">
             <div className="col-md-10">
               <h1 className="mt-3 center">Corona Virus Status Worldwide</h1>Made by Fahad
             <Form data={this.azan} />
              <h2 className="mt-3" style={{color:"blue"}}>{this.state.country}</h2>
              <h2 className="mt-3">Total Cases : {this.state.cases}</h2> 
              <h2 className="mt-3">Today Cases : {this.state.today}</h2> 
              <h2 className="mt-3">Total Deaths : {this.state.deaths}</h2> 
              <h2 className="mt-3">Today Deaths : {this.state.todayDeaths}</h2> 
              <h2 className="mt-3">Recovered Cases : {this.state.recovered}</h2> 
              <h2 className="mt-3">Critical Cases : {this.state.critical}</h2> 
               
               
             </div>
           </div>
           </div>        
      </React.Fragment>
    )
  }
}

export default App

