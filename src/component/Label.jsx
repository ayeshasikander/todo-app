import React from 'react'

const Label = ({text,fontSize}) => {
    const labelStyle = {
        fontWeight: 'bold',
        fontSize: fontSize || '16px',
      };
  return (
    <div>
      <span style={labelStyle}>{text}</span>
    </div>
  )
}

export default Label
