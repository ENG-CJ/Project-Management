import React from 'react'

/**
 * 
 * @param {object} param0 idstructured parameter
 * @param {object} props props
 * @returns 
 */
export default function CButton({text,width,fun},props) {
  return (
    <button onClick={fun} style={{ width: width===undefined ? "140px" : width, }}>{text}</button>
  )
}
