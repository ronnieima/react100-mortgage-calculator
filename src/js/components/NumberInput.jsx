import React from 'react'

export default function NumberInput({label, name}) {
  return (
    <div className="form-group row ">
        <label className='col-sm-6 col-form-label' htmlFor={name}>{label}</label>
        <div className='col'>

          <input className="form-control " name={name} required type='number' step='0.01' id={name}  />
      </div>
    </div>
  )
}
