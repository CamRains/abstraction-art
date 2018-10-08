import React, { Component } from 'react';
import axios from 'axios';
// import '../../App.css';
import Button from '../button/button';
import './body.css';
import Header from '../header/header';


class Body extends Component{
    constructor(){
        super();
        this.state = {
          gallery: [],
          showEditOptions: false,
          showEditButton: true,
          name: 'Enter Name',
          url: 'Enter Image Url',
          artist: 'Enter Artist Name',
          price: 0,
          showEditButtonOLD: true,
          showHideButton: false,
        }
      }
      componentDidMount(){
        axios.get('/api/art').then(res => {
          console.log(res.data)
          this.setState({
            gallery: res.data
          })
        }).catch(error => {
          console.log('get error====>', error)
        })
      }
    
      deleteArt = (id) => {
        axios.delete(`/api/art/${id}`).then(piece => {
          this.setState({
          gallery: piece.data
          })
        })
      }  

    
      showEdit = () => {
        this.seState({
          showEditOptions: true,
          showEditButtonOLD: false,
          showHideButton: true
        })
      }
    
    
     updateArt(id, name, url, artist){
      axios.put(`/api/art/${id}`, {id, name, artist}).then(piece => 
        this.setState({
          gallery: piece.data,
          name: '',
          artist: ''
        })
      )
    }
    
    hideEdit = () => {
      this.setState({
        showEditOptions: false,
        showEditButtonOLD: true,
      })
    }

    
    placeDaBid = (id, curPrice, newPrice) => {
      if(this.state.bid > curPrice){
        axios.put(`/api/bid/${id}`, {id, newPrice}).then(piece => {
          console.log(piece)
          this.setState({
            gallery: piece.data,
            price: ''
          })
          alert('Bid is submitted')
        })
      } else {
        alert('Bid is to low')
      }
    }
    
    placeBid = (e) => {
      this.setState({
        bid: e.target.value
      })
      console.log('bid---->', this.state.bid)
    }
    
    addPrice = (e) => {
      this.setState({
        price: e.target.value
      })
      console.log(this.state.price)
    }
    
      render() {
    
        let prettyArt = this.state.gallery.map(piece => {
          return (
          <div className='childfornow' /*onClick={() => this.addToFave(piece.id)}*/>
            <h3> {piece.name} </h3> <br />
            <img src={piece.url} />
            <p>by {' '}{piece.artist}</p>
            <p>Current Price: ${piece.price}</p>
            
            { this.state.showEditOptions &&
            <div>
            <input placeholder='Enter Name' onChange={this.addName}/> <br />
            <input placeholder='Enter Artist'onChange={this.addArtist}/> <br />
            <button onClick={() => this.updateArt(piece.id, this.state.name, this.state.url, this.state.artist)}>Sumbit Changes</button>
            <br /> <br /> 
            <Button name='Close Edit Options' func={this.hideEdit} />
            </div>
            }
            { this.state.showEditButtonOLD && 
            <div>
              <Button name='Show Edit Options' func={() => this.showEdit()}></Button>
            </div>
            }
            
            <br /> <br />
            <div>
              Place Bid: <input onChange={this.placeBid}/> <button onClick={() => this.placeDaBid(piece.id, piece.price, this.state.bid)}>Submit Bid</button>
            </div>
            <button onClick={() => this.deleteArt(piece.id)}>Delete</button>
            
          </div>
          )
        })
    
    
    
        return (
        <div className='flexMe'>
          <div className='plzwork'>
            <div className='parent'>
                <Header />
                <div className='fllex'>
                {prettyArt}
                </div>
            </div>
        </div>     
        </div>
        );
      }
    }
    
export default Body;

