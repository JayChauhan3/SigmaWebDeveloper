import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script>
            {`alert("Go home3")`} </Script>
      Contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact",
  description: "contacts ha ha",
};
