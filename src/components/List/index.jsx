import './list.css'
const List = (props) => {


    return (
        props.data?
        
        <table className="main-table List">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Size</th>

                </tr>
            </thead>
            <tbody>
                {props.data.map(e =>
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.street}</td>
                        <td>{e.city}</td>
                        <td>{e.state}</td>
                        <td>{e.postal_code}</td>
                        <td>{e.brewery_type}</td>
                    </tr>)}
            </tbody>
        </table>:<h1>Loading</h1>
    )
}

export default List;