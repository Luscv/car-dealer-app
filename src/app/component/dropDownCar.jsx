import { useState, useEffect } from "react";

export const DropDownCar = ({selectedVehicleMake, setSelectedVehicleMake}) => {
    const [vehicleMakes, setVehicleMakes] = useState([])
    
    async function fetchData(){
        let data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
        let response = await data.json()
        setVehicleMakes(response.Results)
    }

    useEffect(() => {
        fetchData()
        
    }, [])

    const handleChange = (event) => {
        setSelectedVehicleMake(event.target.value);
    };
    return (
        <>
            <div className="mt-4">
                <select className="p-3 rounded bg-zinc-700" value={selectedVehicleMake} onChange={handleChange}>
                    <option value=''>Select a Vehicle Make</option>
                   {
                    vehicleMakes.map((vehicle) => (
                        <option key={vehicle.MakeId} value={vehicle.MakeId}>{vehicle.MakeName}</option>
                    ))
                   }       
                </select>
            </div>
        </>
    )
}

