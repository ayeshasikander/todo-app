import React from 'react'

const Textarea = ({ value, onChange, placeholder }) => {

  return (
    <div>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="form-control" />
    </div>
  )
}

export default Textarea
