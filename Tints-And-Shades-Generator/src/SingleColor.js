import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {

  const [alert, setAlert] = useState(false);
  const background = rgb.join(",")

  useEffect(() => {
    const clearCopyAlert = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(clearCopyAlert)
  }, [alert])

  return (
    <article 
    className={`color ${index > 9 && `color-light`}`} 
    style={{backgroundColor:`rgb(${background})`}}
    onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(rgbToHex(...rgb))
    }}

    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
