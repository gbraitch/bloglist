import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Notification = ({ notification }) => {
  if (!notification) {
    return null
  }

  return (
    <Alert  variant={`${notification.type === 'success' ? 'success' : 'danger'} alert ml-3`}>
      {notification.message}
    </Alert>
  )
}

export default Notification