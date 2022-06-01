/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-eval */

import React from 'react';
import OutputScreen from './components/outputScreen';
import CalButton from './components/CalButton';

export default class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            question:'',
            answer:''
        }
       this.handleClick = this.handleClick.bind(this);
    }
    // our method to handle all click events from our buttons
    handleClick(event){

    // get the value from the target element (button)
    const value = event.target.value;
    switch (value) {
        case '=': {
     
          // if it's an equal sign, use the eval module
          // to evaluate the question ,convert the answer
          // (in number) to String
          if (this.state.question!=='')
          {
              var ans='';
                try
                  {
                      ans = eval(this.state.question);
                  }
                  catch(err)
                  {
                      this.setState({answer: "Math Error"});
                  }
                  if (ans===undefined)
                      {this.setState({answer: "Math Error"});}
     
                  // update answer in our state.
                  else
                      {this.setState({ answer: ans , question: ''});}
                  
              }
              break;
        }
        case 'Clear': {
     
          // if it's the Clears sign, just clean our
          // question and answer in the state
          this.setState({ question: '', answer: '' });
          break;
        }
     
        case 'Delete': {
          var str = this.state.question;
            str = str.substr(0,str.length-1);
            this.setState({question: str});
            break;
        }
     
      default: {
     
          // for every other command, update the answer in the state
          this.setState({ question: this.state.question += value});
          break;
        }
      }
    
    
    }
    
    render(){
        return (
            <center><div className="App">
              <h1> Calculator</h1>
              <OutputScreen className='OutputScreen' ques={this.state.question} ans={this.state.answer}/>
              
              <div className="button-row">
              <CalButton handleClick = {this.handleClick} label={'Clear'}/>
              <CalButton handleClick = {this.handleClick} label={'Delete'}/>
              <CalButton handleClick = {this.handleClick} label={'.'}/>
              <CalButton handleClick = {this.handleClick} label={'/'}/>
            </div>
            <div className="button-row">
              <CalButton handleClick = {this.handleClick} label={'7'}/>
              <CalButton handleClick = {this.handleClick} label={'8'}/>
              <CalButton handleClick = {this.handleClick} label={'9'}/>
              <CalButton handleClick = {this.handleClick} label={'*'}/>
            </div>
            <div className="button-row">
              <CalButton handleClick = {this.handleClick} label={'4'}/>
              <CalButton handleClick = {this.handleClick} label={'5'}/>
              <CalButton handleClick = {this.handleClick} label={'6'}/>
              <CalButton handleClick = {this.handleClick} label={'-'}/>
            </div>
            <div className="button-row">
              <CalButton handleClick = {this.handleClick} label={'1'} />
              <CalButton handleClick = {this.handleClick} label={'2'}/>
              <CalButton handleClick = {this.handleClick} label={'3'}/>
              <CalButton handleClick = {this.handleClick} label={'+'}/>
            </div>
            <div className="button-row">
              <CalButton handleClick = {this.handleClick} label={'0'}/>
              <CalButton handleClick = {this.handleClick} label={'='}/>
            </div>
            
            </div></center>
          );
    }
}