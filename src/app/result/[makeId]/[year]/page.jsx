
import { Suspense } from "react"

async function fetchData(makeId, year){
    let data = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    let response = await data.json()
    return response.Results
}



export async function generateStaticParams(){
    const data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    let response = await data.json()
    let makes = response.Results

    const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015']

    const params = []
    makes.forEach((make) => {
        years.forEach((year) => {
            params.push({
                makeId: make.makeId,
                year: year
            })
        })
    })
    return params
}



export default async function ResultPage({params}){
    const {makeId, year} = params
    const models = await fetchData(makeId, year)
    return (
        <div className="bg-zinc-950 h-screen flex justify-center items-center">
            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    {
                        models.length > 0 ? models.map((model) => (
                            <div key={model.Model_ID}>
                                <p>{model.Make_Name} - {model.Model_Name}</p>
                            </div>
                        )) : <div> No models available for this filter</div>
                    }
                </div>
            </Suspense>
            
        </div>
    )
}