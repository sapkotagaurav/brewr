import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Det = () => {
    const id = useParams().id
    


    const url = 'https://api.openbrewerydb.org/v1/breweries/';
    const [details, setDetails] = useState({})
    const [googlemap,setGoogleMap]=  useState([])

    useEffect(() => {
        // Fetch item details based on the ID
        fetch(`${url}/${id}`)
          .then(response => response.json())
          .then(data => setDetails(data));
      }, [id]);

      useEffect(()=>{
        setGoogleMap([details.latitude,details.longitude])
      },[details])

    return (
        <div className="details">
            <h1>Name :{details.name}</h1>
            <h3>Country: {details.country}</h3>
            <h3>State: {details.state}</h3>
            <h3>Size: {details.brewery_type}</h3>
            <p>The Brewery {details.name} was opened in the state of {details.state} in {details.country}. It is a {details.brewery_type} brewery. Its location is {details.street} in {details.postal_code} postal code.</p>
            
        </div>
    );

}
export default Det