import React from 'react'

export const InPut = (props) => {
  return (
    <input type='text' placeholder="Search by Name" className="intput" onChange={(e)=>props.setsearch(e.target.value)}></input>
    )
}
