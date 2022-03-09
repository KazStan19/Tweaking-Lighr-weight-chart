import React from 'react'
import { Restruct } from './Restruct'

export const Gen = () => {
  const data = [{
    "timestamp": 1642854420001,
    "x": 1.9479999542236328,
    "y": 1.6039999723434448,
    "z": 9.461999893188477
    }]
  
    while(data[data.length-1].timestamp <= 1642879620000){

      data.push({

          "timestamp": data[data.length-1].timestamp+10,
          "x": Math.random() * (5 - (-5)) + (-5),
          "y": Math.random() * (5 - (-5)) + (-5),
          "z": Math.random() * (5 - (-5)) + (-5),
      })

  }

    console.log(data)

    return (
        
        <Restruct data={data}/>
  )
}
