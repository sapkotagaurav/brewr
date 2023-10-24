import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import './recharts.css'


const TopCitiesChart = ({ data }) => {
  // Sort the data to get the top 10 cities with the most breweries
  function getTop10Cities(data) {
    const cityCounts = {};
    
    // Count the occurrences of each city
    data.forEach(item => {
      const city = item.city;
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });
    
    // Convert the counts to an array of objects
    const cityCountArray = Object.keys(cityCounts).map(city => ({
      city,
      count: cityCounts[city],
    }));
    
    // Sort the array by count in descending order
    cityCountArray.sort((a, b) => b.count - a.count);
    
    // Take the top 10 cities
    const top10Cities = cityCountArray.slice(0, 10);
    
    return top10Cities;
  }
  
  const top10Cities = getTop10Cities(data);

   return (
    <BarChart
      width={1000}
      height={300}
      data={top10Cities}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" fill='aliceblue' />
      <YAxis style={{fontSize:'10px'}}></YAxis>
      <XAxis style={{fontSize:'10px'}} dataKey="city" />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default TopCitiesChart;
