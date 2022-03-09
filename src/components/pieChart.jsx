import React from 'react'
import Plot from 'react-plotly.js';
import GET from '../data/GET.json'

export const PieChart = () => {

  const dataset = [{'zero':{color:'',amount:0,proc:0},'one':{color:'',amount:0,proc:0},'two':{color:'',amount:0,proc:0},'three':{color:'',amount:0,proc:0}}]
  const labels = ["Bad","Moderate","good","excellent"]
    //console.log(GET)
  GET.features.map(item =>{

    switch (item.properties.quality) {
        case 0:
            
            dataset[0].zero = {

                color: '#FF2600',
                amount: dataset[0].zero.amount + 1,
                proc: dataset[0].zero.amount *100 / GET.features.length

            }

            break;
        case 1:

            dataset[0].one = {

                color: '#FFDC00',
                amount: dataset[0].one.amount + 1,
                proc: dataset[0].one.amount *100 / GET.features.length

            }
            
            break;
        case 2:
            dataset[0].two = {

                color:'#00FF59' ,
                amount: dataset[0].two.amount + 1,
                proc: dataset[0].two.amount *100 / GET.features.length

            }
            //console.log(dataset[0].two.amount / GET.features.length*100)
            break;
        case 3:
            dataset[0].three = {

                color: '#0055FF',
                amount: dataset[0].three.amount + 1,
                proc: dataset[0].three.amount * 100 / GET.features.length

            }
            console.log(dataset[0].three.amount / GET.features.length*100)
            break;
                            
    
        default:
            break;
    }

    dataset[0].three.proc= dataset[0].three.amount / GET.features.length*100
    dataset[0].two.proc= dataset[0].two.amount / GET.features.length*100
    dataset[0].one.proc= dataset[0].one.amount / GET.features.length*100
    dataset[0].zero.proc= dataset[0].zero.amount / GET.features.length*100

  })

let colorsChart = [[dataset[0].zero.color,dataset[0].one.color,dataset[0].two.color,dataset[0].three.color]]

  console.log(dataset)
  
  const layout = {

    width:1200,
    height: 600,
    title:"Visualized distribution"

  }

  const data = [{

    values: [dataset[0].zero.proc,dataset[0].one.proc,dataset[0].two.proc,dataset[0].three.proc],
    labels: labels,
    type: 'pie',
    marker:{

        colors:colorsChart[0]

    }
    
  }]


    return (
    <Plot layout={layout} data={data}></Plot>
  )
}
