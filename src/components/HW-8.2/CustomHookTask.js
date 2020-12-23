import React from 'react'
import Data from './Data'
import Loading from './Loading'
import Error from './Error'

export default function CustomHookTask() {
  return (
    <div>
      <Data />
      <Loading />
      <Error />
    </div>
  )
}
