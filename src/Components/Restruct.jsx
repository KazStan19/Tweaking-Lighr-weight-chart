import sample from '../data/sample.json'
import React from 'react'
import { ChartComponent } from './Light_weight.jsx'

export const Restruct = (props) => {
  
    const dataX = []
    const dataY = []
    const dataZ = []

    let colors = {x:"red",y:"blue",z:"green",off:"grey"}

    function timeToLocal(originalTime) {
        const d = new Date(originalTime);
        return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) / 1000;
    }
    //console.log(sample)

    const getData = () =>{

        sample.forEach(item =>{


            dataX.push({
                time:timeToLocal(item.timestamp),
                value:item.x,
                color:colors.x,
                title:'X'
    
            })
            dataY.push({
                time:timeToLocal(item.timestamp),
                value:item.y,
                color:colors.y,
                title:'Y'
    
            })
            dataZ.push({
                time:timeToLocal(item.timestamp),
                value:item.z,
                color:colors.z,
                title:'Z'
    
            })
    
        })

    }

    getData()
    
  
    return (
    <>
    <ChartComponent colors={colors} data={dataX} data2={dataY} data3={dataZ}/>
    
    </>
  )
}
