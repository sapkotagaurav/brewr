import './stats.css'

const Stats = (props) =>{
    return(
        <div className="statCard">
            <h3 className="data">{props.data}</h3>
            <h5 className="dataType">{props.datatype}</h5>
        </div>
    )
}

export default Stats