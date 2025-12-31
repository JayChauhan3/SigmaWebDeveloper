import React from 'react'

function Card({ title, description }) {
  return (
  <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card