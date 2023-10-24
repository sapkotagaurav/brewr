import { useEffect, useState } from 'react'
import Stats from './components/Stats'
import './App.css'
import List from './components/List'
import Sidebar from './components/Sidebar'
import TopCitiesChart from './components/Chart'
import  PiCh  from './components/PiCh'

function App() {

  const [metaurl, setMetaUrl] = useState('https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states')
  const [numbrew, setNumBrew] = useState('')
  const [state, setState] = useState('')
  const [size, setSize] = useState(0)
  const [mostCity, setmostCity] = useState('')

  const [list, setList] = useState([])
  const [blist,setbList] = useState([])
  const [filtered, setFiltered] = useState([])
  const states = ['', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  const types = ['bar,nano','micro','brewpub','large','regional','contract','proprieter','closed','planning']


  async function fetchData(d) {

    const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=200&by_country=united_states'
    let m = state !== '' ? '&by_state=' + state : "";
    const data = await fetch(url + m);
    const json = await data.json()
    setList(json)
    setFiltered(json)
    setbList(json)


  }


  async function fetchmeta() {
    let m = state !== '' ? '&by_state=' + state : "";
    let jkhkj = await fetch(metaurl + m)
    let kknm = await jkhkj.json()
    setNumBrew(kknm.total)

  }
  function count() {
    const tally = {};

    // Initialize variables to track the most repeated item
    let maxCount = 0;
    let mostRepeatedItem = null;

    // Loop through the array and count occurrences
    list.forEach(item => {
      const key = `${item.city}`;
      tally[key] = (tally[key] || 0) + 1;

      if (tally[key] > maxCount) {
        maxCount = tally[key];
        mostRepeatedItem = key;
      }

    })
    setmostCity(mostRepeatedItem);
  }
  useEffect(() => {
    count()
  }, [list])



  useEffect(() => {
    fetchData();
  }, [state])

  useEffect(() => {
    fetchmeta()

  }, [state])

  function search(e) {
    var fd=[]
    if (e.target.value !== "") {
       fd = list.filter((f) => { return f.name.toLowerCase().includes(e.target.value.toLowerCase())||f.city.toLowerCase().includes(e.target.value.toLowerCase())||(f.street && f.street.toLowerCase().includes(e.target.value.toLowerCase())) 
      
      })
      
      setFiltered(fd)
      setbList(fd)
    } else {
      setFiltered(list)
      setbList(list)
    }

  }
  function sliderChange(e){
    
      
      var  fd = blist.filter((f) => { return f.brewery_type && f.brewery_type==types[e.target.value] })
      
      
    
    
    setFiltered(fd)
  }
const b = (e) =>{
  setState(e.target.value);
  fetchmeta();

}


  return (
    <div className='app'>
      <div className="row stats">
        <Stats data={state || "USA"} datatype={"Location"} />
        <Stats data={numbrew} datatype={"Number of Breweries"} />
        <Stats data={mostCity} datatype={"City with most number of Breweries"} />
      </div>
      <div className="row search">
        <label htmlFor="searchName">Search(by city, name or street):</label>
        <input type="text" name='searchName' onChange={search} />
        <label htmlFor="states">State:</label>
        <select name="state" onChange={b} id="states">
          {states.map(e => <option value={e} key={e} >{e}</option>)}
        </select>
        <label htmlFor="slider"> Size:</label><input type='range' min={0} max={10} onChange={sliderChange}/>

      </div>
      <div className="row list">
        <List data={filtered} />
      </div>
      <Sidebar/>
      <div className="chart">
        <h1 style={{color:'black'}}>Bar graph to show brewery in each city</h1>
        <TopCitiesChart data={list}></TopCitiesChart>
      </div>
      <div className="piechart">
        <h1>Piechart to show size of brewery in each state</h1>
        <PiCh data={list}/>
      </div>


    </div>
  )
}

export default App
