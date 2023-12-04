import React from 'react'


export default function Input({ type = 'text', id, name, title,value,onChange,errors,onBlur,touched }) {
    return (
        <>
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
        <div className="input-group mb-3 d-flex">
                <label htmlFor={id}></label>
                <input type={type} name={name} id={id} className="form-control w-100" placeholder={title} onBlur={onBlur} touched={touched} onChange={onChange} value={value} />
                {touched[name]&&errors[name]&&<p className='text text-danger'>{errors[name]}</p>}
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
            


        </>
        

    )
}
