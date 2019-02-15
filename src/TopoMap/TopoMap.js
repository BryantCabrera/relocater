import React, { Component } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import './TopoMap.css'
import data from '../data/db'

// find min and max
const incomes = []
data.forEach(d => incomes.push(d.Median_Income))
const sortedIncomes = incomes.sort((a, b) => a - b)

const minIncome = sortedIncomes[0]
const maxIncome = sortedIncomes[incomes.length - 1]



class TopoMap extends Component {
    state = {
        mapData: [],
        mousedOverCounty: ''
    }
    handleMouseOver = (index) => {
        // console.log(this.state.mapData[index])
        this.setState({
            mousedOverCounty: this.state.mapData[index].properties.name
        })
    }
    resetTooltip = () => {
        this.setState({
            mousedOverCounty: ''
        })
    }
    projection = () => {
        return geoMercator()
            .scale(1000*2)
            .center([-120, 36])
            .translate([650/2, 600/2])
    }
    componentDidMount = () => {
        console.log(data)
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
        // window.addEventListener('resize', () => {
        //     this.setState({
        //         width: window.innerWidth,
        //         height: window.innerHeight
        //     })
        // })
    }
    render = () => {
        return (
            <div className='map'>
                <svg width={650} height={600} viewBox='0 0 650 600'>
                    <g className='counties'>
                        {
                        this.state.mapData.map((d, i) => (
                            <path
                                key={`path-${i}`}
                                d={geoPath().projection(this.projection())(d)}
                                className='county'
                                stroke='#FFFFFF'
                                fill={ `rgba(0, 0, 255, ${(incomes[i] - minIncome) / (maxIncome - minIncome)})` }
                                strokeWidth={0.5}
                                onMouseEnter={() => this.handleMouseOver(i)}
                                onMouseOut={() => this.resetTooltip()}
                                onClick={() => this.props.history.push(`/counties/${this.state.mapData[i].properties.name}`)}
                            />
                            ))
                        }
                    </g>
                </svg>
                {
                    this.state.mousedOverCounty ?  <div className="tooltip">{this.state.mousedOverCounty}</div> : null
                }    
            </div>
        )
    }
}

export default TopoMap