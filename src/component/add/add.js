import React, { Component } from 'react';
import axios from 'axios';
import './add.css'

class Add extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Enter Name',
            url: 'Enter Image Url',
            artist: 'Enter Artist Name',
            price: 0,
        }
    }

 addName = (e) => {
    this.setState({
        name: e.target.value
        })
    }
 addUrl = (e) => {
    this.setState({
        url: e.target.value
        })
    }
 addArtist = (e) => {
    this.setState({
        artist: e.target.value
        })
    }

fullSend = (name, url, artist, price) => {
    axios.post('/api/art', {name, url, artist, price})
    .then((res) => {
        console.log(res.data)
        this.setState({
        gallery: res.data,
        name: '',
        url: '',
        artist: '',
        })
        alert('Post Uploaded!')
    })
    }

    render(){
        return(
            <div className='lolidk'>
            <div className='add-da-art'>
                <h1>Add Art Piece</h1>
                <div className='add-art'>
                <input placeholder='Enter New Name' onChange={this.addName}/>
                <input placeholder='Enter New Url' onChange={this.addUrl}/>
                <input placeholder='Enter New Artist' onChange={this.addArtist}/>
                <input placeholder='Enter Starting Price' onChange={this.addPrice} /> 
                <br /> <br />
                <button onClick={() => this.fullSend(this.state.name,this.state.url,this.state.artist, this.state.price)}>Add Post</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Add;