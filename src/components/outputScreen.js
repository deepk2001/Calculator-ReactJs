import React from 'react';


const OutputScreenRow = (props)=>{
    var style={
        backgroundColor : '#dce7fa',
        padding:'10px',
        marginLeft : '10px',
        position:'relative',
        width : '100%',
        height:'auto',
        borderRadius: '10px',
        border : '2px white solid',
        textAlign:'right',
        color:'#5b96f5',
        fontWeight : 'bolder',
        fontSize:'25px'
    }
    return(
        <div className='screenRow'>
            <input type='text' style={style} readOnly value = {props.value}/>
        </div>
    )
}

const OutputScreen = (props) =>{
    
    return(
        <div className='OutputScreen'>
         <OutputScreenRow value = {props.ques}/>
      <OutputScreenRow value = {props.ans}/>
        </div>
    )
}
export default OutputScreen;