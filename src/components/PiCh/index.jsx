import { PieChart,Pie, Cell, Legend } from 'recharts';
import './repicharts.css'


const PiCh = ({ data }) => {
  // Sort the data to get the top 10 cities with the most breweries
  function getTop10Cities(data) {
    const cityCounts = {};
    
    // Count the occurrences of each city
    data.forEach(item => {
      const city = item.brewery_type;
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
    const top10Cities = cityCountArray.slice(0, 5);
    
    return top10Cities;
  }
  const COLORS = ['red','blue','white','yellow','skyblue']
  
  const top10Cities = getTop10Cities(data);
  console.log(top10Cities);


  return (
    <PieChart width={400} height={400} title='Piechart by Brewery size'>
      <Pie
        data={top10Cities}
        dataKey="count"
        nameKey="city"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label='city'
      >
        {top10Cities.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="top" height={36} />
    </PieChart>
  );
};

export default PiCh;
