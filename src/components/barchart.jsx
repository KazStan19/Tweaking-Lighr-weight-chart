import React from 'react'
import Plot from 'react-plotly.js';
import data2018 from '../data/data2018.json'
import data2019 from '../data/data2019.json'
import data2020 from '../data/data2020.json'
import data2021 from '../data/data2021.json'
import data2022 from '../data/data2022.json'

export const Barchart = () => {
  
    const givenData = [data2018,data2019,data2020,data2021,data2022]
    const dataset = [

        {'zero':{amount:0,proc:0,year:''},'one':{amount:0,proc:0,year:''},'two':{amount:0,proc:0,year:''},'three':{amount:0,proc:0,year:''}},
        {'zero':{amount:0,proc:0,year:''},'one':{amount:0,proc:0,year:''},'two':{amount:0,proc:0,year:''},'three':{amount:0,proc:0,year:''}},
        {'zero':{amount:0,proc:0,year:''},'one':{amount:0,proc:0,year:''},'two':{amount:0,proc:0,year:''},'three':{amount:0,proc:0,year:''}},
        {'zero':{amount:0,proc:0,year:''},'one':{amount:0,proc:0,year:''},'two':{amount:0,proc:0,year:''},'three':{amount:0,proc:0,year:''}},
        {'zero':{amount:0,proc:0,year:''},'one':{amount:0,proc:0,year:''},'two':{amount:0,proc:0,year:''},'three':{amount:0,proc:0,year:''}},

    ]
    const labels = ["Bad","Moderate","good","excellent"]

    let key = 0;

    givenData.forEach(item =>{

        console.log(item)

        item.features.map(item =>{

            switch (item.properties.quality) {
                case 0:
                    
                    dataset[key].zero = {
        
                        amount: dataset[key].zero.amount + 1,
                        proc: dataset[key].zero.amount *100 / givenData[key].features.length
        
                    }
        
                    break;
                case 1:
        
                    dataset[key].one = {
        
                        amount: dataset[0].one.amount + 1,
                        proc: dataset[0].one.amount *100 / givenData[key].features.length
        
                    }
                    
                    break;
            case 2:
                    dataset[key].two = {
        
                        amount: dataset[key].two.amount + 1,
                        proc: dataset[key].two.amount *100 / givenData[key].features.length
        
                    }
                   
                    break;
                case 3:
                    dataset[key].three = {
       
                        amount: dataset[key].three.amount + 1,
                        proc: dataset[key].three.amount * 100 / givenData[key].features.length
        
                    }
                    
                    break;
                                    
            
                default:
                    break;
            }
        
            dataset[key].three.proc= dataset[key].three.amount / givenData[key].features.length*100
            dataset[key].two.proc= dataset[key].two.amount / givenData[key].features.length*100
            dataset[key].one.proc= dataset[key].one.amount / givenData[key].features.length*100
            dataset[key].zero.proc= dataset[key].zero.amount / givenData[key].features.length*100
        
        })

        key+=1 
    })

    console.log(dataset)

  const layout = {

    title:'Comparesion',
    width:1200,
    height:800,
    barmode: 'group'

  }

  const data = [{

    x: labels,
    y: [dataset[0].zero.proc,dataset[0].one.proc,dataset[0].two.proc,dataset[0].three.proc],
    name:"2018",
    type:'bar'

  },
  {

    x: labels,
    y: [dataset[1].zero.proc,dataset[1].one.proc,dataset[1].two.proc,dataset[1].three.proc],
    name:"2019",
    type:'bar'

  },
  {

    x: labels,
    y: [dataset[2].zero.proc,dataset[2].one.proc,dataset[2].two.proc,dataset[2].three.proc],
    name:"2020",
    type:'bar'

  },
  {

    x: labels,
    y:[dataset[3].zero.proc,dataset[3].one.proc,dataset[3].two.proc,dataset[3].three.proc],
    name:"2021",
    type:'bar'

  },
  {

    x: labels,
    y: [dataset[4].zero.proc,dataset[4].one.proc,dataset[4].two.proc,dataset[4].three.proc],
    name:"2022",
    type:'bar'

  }]
  
    return (
    <Plot layout={layout} data={data}/>
  )
}
