import React, { Component } from 'react';
import './header.css';
// import logo from '../images/NO.svg'

class Header extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            lolol: '',
            showButton: true
        }
    }

    enterName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    setName = () => {
        this.setState({
            lolol: this.state.name,
            showButton: false,
            showHello: true
        })

    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <header>
                    <div className='headhead'>
                    
                        {/* <img src={logo}/> */}
                        <h1>Gallery</h1>
                            <div className='childchild'>
                            
                        {/* <h5>~ Bid on the best abstract art of the internet ~</h5> */}
                            </div>
                    
                    <div>
                        {this.state.showHello && <p>Afternoon {' '}{this.state.lolol}, hope you enjoy the pieces of are we have set up for you</p>}
                        {
                        this.state.showButton && 
                        <div>
                            <input placeholder='Enter Name'  onChange={this.enterName} />
                            <button onClick={this.setName}>Submit Name</button> <br /> <br />
                        </div>
                        }
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;