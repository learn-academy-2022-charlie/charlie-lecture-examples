import React, { Component } from 'react'
// import nasaData from './mockData'

 class nasaApi extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasaPhotoObj : null
    }
  }

  componentDidMount(){
    this.getNasaImgs()
  }

  getNasaImgs = () => {
    let apiKey = process.env.REACT_APP_NASA_API_KEY 
    console.log(apiKey)
    
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    .then(response => response.json())
    .then(payload => this.setState({ nasaPhotoObj: payload }))
    .catch(errors => console.log(errors))
  }

  render() {
    console.log(this.state.nasaPhotos);
    return (
      <>
        <div>nasaApi</div>
        {/* conditional render */}
        {this.state.nasaPhotoObj && 
          this.state.nasaPhotoObj.photos.map((value, index) => {
           return <img src={value.img_src} alt="" key={index}/>
          }) 
        }
        
      </>
    )
  }
}
export default nasaApi