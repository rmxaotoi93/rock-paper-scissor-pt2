import React, { Component } from 'react'
import ChoiceCard from './components/ChoiceCard'
import { CHOICES } from './App'

export default class Class extends Component {
    constructor(props){ //initialize
        super(props)    //set props for command line
        this.state = {
            userC: {},
            computerC: {}
        }
    }


    onPlay = (userChoice) =>{
        
        let itemArray = Object.keys(CHOICES)
        let randomNum = Math.floor(Math.random()*itemArray.length)
        let itemName = itemArray[randomNum]
        let computerC = CHOICES[itemName]

        this.setState({userC : CHOICES[userChoice], computerC:CHOICES[itemName]})
        console.log("computer choice ", computerC)
    }
    render() {
        return (
            <div>
                
                <ChoiceCard title="You" choice = {this.state.userC}/>
            </div>
        )
    }
}
