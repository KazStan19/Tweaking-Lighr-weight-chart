import { createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const ChartComponent = props => {
	
  const chartContainerRef = useRef();

  function timeToLocal(originalTime) {
    const d = new Date(originalTime*1000);
    let date = d.toLocaleDateString()
    let h = d.getHours()
    let m = ('0' + d.getMinutes()).slice(-2)
    let s = ('0' + d.getSeconds()).slice(-2)
    let ms = ('0' + d.getMilliseconds()).slice(-3)
    return date + ' ' + h + ':' + m + ":" + s + "." + ms; 


  }
  
  const makeChart = () =>{
    let height = 300
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const { data,data2 ,data3} = props;
    //console.log(chartContainerRef)


    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: height,
      rightPriceScale:{
        visible: false,
      },
      leftPriceScale: {
        visible: true,
      },
      layout: {
        backgroundColor: '#ffffff',
        textColor: 'rgba(33, 56, 77, 1)',
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.7)',
        },
      },
      timeScale: {
        timeVisible: true,
        ///secondsVisible:setXIsHidden(!xIsHidden)idden)
        
      },

    });
    const newSeries = chart.addLineSeries({
      lastValueVisible:false,
      visible:true,
      priceFormat: {
        type: 'custom',
        minMove: 0.01,
        formatter: function(price) {
          return price.toFixed(2) + ' g';
        },
      },

    });

    const newSeries2 = chart.addLineSeries({
      lastValueVisible:false,
      priceFormat: {
        type: 'custom',
        minMove: 0.01,
        formatter: function(price) {
          return price.toFixed(2) + ' g';
        },
      },

    });
    const newSeries3 = chart.addLineSeries({
      lastValueVisible:false,
      priceFormat: {
        type: 'custom',
        minMove: 0.01,
        formatter: function(price) {
          return price.toFixed(2) + ' g';
        },
      },

    });

    newSeries.setData(data);
    newSeries2.setData(data2);
    newSeries3.setData(data3);

    //______________________________________VISABILITY FUNCTION_____________________________________________________________

    const switchers = document.createElement('div')

    const yplace = document.createElement('div')
    const xplace = document.createElement('div')
    const zplace = document.createElement('div')

      const yHide = document.createElement('h4')
      const xHide = document.createElement('h4')
      const zHide = document.createElement('h4')

      const yColor = document.createElement('h3')
      const xColor = document.createElement('h3')
      const zColor = document.createElement('h3')

      const info = document.createElement('p')
      const infofield = document.createElement('div')
     
      yplace.append(yColor,yHide)
      xplace.append(xColor,xHide)
      zplace.append(zColor,zHide)
      switchers.append(xplace,yplace,zplace)
      document.body.append(switchers)

      switchers.style.width='100vw'
      switchers.style.display='flex'
      yplace.style.display='flex'
      zplace.style.display='flex'
      xplace.style.display='flex'
      switchers.style.justifyContent='space-evenly'

      xColor.innerText="\u25A0"
      yColor.innerText="\u25A0"
      zColor.innerText="\u25A0"

      xColor.style.color=props.colors.x
      yColor.style.color=props.colors.y
      zColor.style.color=props.colors.z

      xHide.id="Hide X"
      yHide.id="Hide Y"
      zHide.id="Hide Z"
      xHide.innerText="X:"
      yHide.innerText="Y:"
      zHide.innerText="Z:"

      chart.subscribeCrosshairMove((param) => {
        if (param.time) {
          console.log(param)
          const price = param.seriesPrices.get(newSeries);
          const price2 = param.seriesPrices.get(newSeries2);
          const price3 = param.seriesPrices.get(newSeries3);

          if(xHide.id === "Hide X") xHide.innerText = "X:" + '  ' + price.toFixed(2) + ' g';
          if(yHide.id === "Hide Y") yHide.innerText = "Y:" + '  ' + price2.toFixed(2)+ ' g';
          if(zHide.id === "Hide Z") zHide.innerText = "Z:" + '  ' + price3.toFixed(2)+ ' g';

          var toolTipWidth = 120;
          var toolTipHeight = 60;
          var toolTipMargin = 15;

          infofield.style.width= toolTipWidth+'px'
          infofield.style.height=toolTipHeight+'px'
          infofield.style.margin=toolTipMargin+'px'
          infofield.style.position="absolute"
          infofield.style.zIndex="99"
          infofield.style.backgroundColor='#e4fffb9a'
          infofield.style.border='2px solid rgba(255, 255, 255, 0.767)'
          info.innerText = timeToLocal(param.time)

          const onMouseMove = (e) =>{
            infofield.style.left = e.pageX + 'px';
            infofield.style.top = e.pageY + 'px';
          }
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('scroll', onMouseMove);
          document.body.append(infofield)
          infofield.append(info)
          

        }
        else {
          
          infofield.style.backgroundColor='#ffffff00'
          infofield.style.border='none'
          infofield.innerText = ''

          xHide.innerText = "X:"
          yHide.innerText = "Y:" 
          zHide.innerText = "Z:"
        }
      });


      xplace.onclick= function (e){

        e.preventDefault()
        switch (xHide.id) {
          case  "Hide X":
            xColor.style.color=props.colors.off
            xHide.id = "Show X"
            newSeries.applyOptions({
              visible: false
            });
            
            break;

          case "Show X":
            xColor.style.color=props.colors.x
            xHide.id = "Hide X"
            newSeries.applyOptions({
              visible: true
            });

            break;
        
          default:
            break;
        }

      }
      yplace.onclick= function (e){

        e.preventDefault()
        switch (yHide.id) {
          case "Hide Y":
            yColor.style.color=props.colors.off
            yHide.id = "Show Y"

            newSeries2.applyOptions({
              visible: false
            });
            
            break;

          case "Show Y":
            yColor.style.color=props.colors.y
  
            yHide.id = "Hide Y"
            newSeries2.applyOptions({
              visible: true
            });

            break;
        
          default:
            break;
        }

      }
      zplace.onclick= function (e){

        e.preventDefault()
        switch (zHide.id) {
          case "Hide Z":
            zColor.style.color=props.colors.off

            zHide.id = "Show Z"
            newSeries3.applyOptions({
              visible: false
            });
            
            break;

          case "Show Z":
            zColor.style.color=props.colors.z

            zHide.id = "Hide Z"
            newSeries3.applyOptions({
              visible: true
            });

            break;
        
          default:
            break;
        }
        

      }
//______________________________________VISABILITY FUNCTION END_____________________________________________________________
    
window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };

  }

	useEffect(
		() => {

      makeChart()
      

			
		},
		[props.data]
	);

  

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};