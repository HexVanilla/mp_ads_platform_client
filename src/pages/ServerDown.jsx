import React, { useState, useEffect, useContext } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { SocketContext } from '../components/SocketContext'
import ReactGA from 'react-ga4'

const ServerDown = () => {
  const { socket } = useContext(SocketContext)
  const { socketError } = useContext(SocketContext)

  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: 'pageview',
      page: `/server-down`,
      title: 'server-down',
    })
  }, [])

  useEffect(() => {
    console.log(socketError)
    setErrorMsg(socketError)
  }, [socketError])

  return (
    <Card
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <CardContent>
        <Typography variant="overline">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          quas veritatis accusantium rerum dolores accusamus, asperiores cum
          maxime, explicabo ea non praesentium tempore, ipsum tempora a harum
          ratione eveniet consequatur?
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="overline">www.loremipsum.com</Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">
          {errorMsg !== null ? errorMsg : 'Status: Ok'}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ServerDown
