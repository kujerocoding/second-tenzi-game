import React from 'react'

const Die = (props) => {
    const styles = {
        backgroundColor : props.isHeld ? "yellow" : "white"
    }
  return (
    <div className='die-container' onClick={props.holdDice} style={styles}>
      {props.value}
    </div>
  )
}

export default Die


