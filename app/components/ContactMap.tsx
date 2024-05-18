import React from 'react'

function ContactMap() {
  return (
    <section className="my-container my-20">
    <iframe
      className="w-full"
      src="https://maps.google.com/maps?q=anicam%20enterprises%20inc%20doral&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
      height="450"
      style={{ border: 0 }}
    ></iframe>
  </section>
  )
}

export default ContactMap