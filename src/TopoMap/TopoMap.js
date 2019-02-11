import React, { Component } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import './TopoMap.css'


class TopoMap extends Component {
    constructor(){
        super()
        this.state = {
            mapData: [],
            mousedOver: ''
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }
    handleMouseOver(index){
        this.setState({
            mousedOver: this.state.mapData[index].properties.name
        })
    }
    resetTooltip(){
        this.setState({
            mousedOver: ''
        })
    }
    projection(){
        return geoMercator()
            .scale(1000*2)
            .center([-120, 36])
            .translate([650/2, 600/2])
    }
    componentDidMount(){
        fetch('/caCountiesTopoSimple.json')
            .then(response => {
                if(!response.ok){
                    console.log('err', response.status)
                    return
                }
                response.json().then(data => {
                    this.setState({
                        mapData: feature(data, data.objects.subunits).features
                    })
                })
            })
    }
    render(){
        return (
            <div className='map'>
                <svg width={800} height={450} viewBox='0 0 800 450'>
                    <g className='counties'>
                        {
                        this.state.mapData.map((d, i) => (
                            <path
                                key={`path-${i}`}
                                d={geoPath().projection(this.projection())(d)}
                                className='county'
                                stroke='#FFFFFF'
                                strokeWidth={0.5}
                                onMouseEnter={() => this.handleMouseOver(i)}
                                onMouseOut={() => this.resetTooltip()}
                            />
                            ))
                        }
                    </g>
                </svg>
                {
                    this.state.mousedOver ?  <div className="tooltip">{this.state.mousedOver}</div> : null
                }    
            </div>
        )
    }
}

export default TopoMap