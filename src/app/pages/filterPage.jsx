"use client"
import { useState } from "react"
import { DropDownCar } from "../component/dropDownCar"
import { DropDownYear } from "../component/dropDownYear"
import Link from "next/link"


export const FilterPage = () => {
    const [selectedVehicleMake, setSelectedVehicleMake] = useState('')
    const [selectedYear, setSelectedYear] = useState(''); 

    const isButtonDisabled = !selectedVehicleMake || !selectedYear

    return(
        <div>
            <h1 className="text-6xl mb-10">Car Dealer App</h1>
            <h2 className="text-2xl mb-5">Filter Vehicles: </h2>
            <DropDownCar selectedVehicleMake={selectedVehicleMake} setSelectedVehicleMake={setSelectedVehicleMake}/>
            <DropDownYear selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
            
            <Link
                href={`/result/${selectedVehicleMake}/${selectedYear}`}
                
              
            >
                <button
                    className={` mt-7 p-2 bg-blue-500 text-white rounded ${!selectedVehicleMake || !selectedYear ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    disabled={isButtonDisabled}
                >
                    Next
                </button>
            </Link>  
        </div>
    )
}