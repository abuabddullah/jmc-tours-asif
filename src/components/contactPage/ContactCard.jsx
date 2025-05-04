import React from 'react'

const ContactCard = ({detail}) => {
  return (
    <div className='border p-6 flex gap-6'>
        <div>
            {detail?.icon}
        </div>
    </div>
  )
}

export default ContactCard