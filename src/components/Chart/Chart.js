import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((point) => point.value);
    const max = Math.max(...dataPointValue)

    return <div className="chart">
        {props.dataPoints.map((point) => 
        <ChartBar 
        key={point.label} 
        value={point.value} 
        maxValue={max} 
        label={point.label}/>
        )}
    </div>
}

export default Chart;