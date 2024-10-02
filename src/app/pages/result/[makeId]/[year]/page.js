import { useRouter } from "next/router"
import { Suspense, useEffect, useState } from "react"

export async function generateStaticParams(){
    const data = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    let response = await data.json()
    let makes = response.Results

    return makes.map((make) => ({
        makeId: make.MakeId,
        year: year
    }))
}


export const ResultPage = ({params}) => {
    // const router = useRouter()
    const {makeId, year} = params
    const [models, setModels] = useState([])
    const [error, setError] = useState(null)

    async function fetchData(){
        let data = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
        .catch(err => setError(err))
        let response = await data.json()
        console.log(response)
        setModels(response.Results)
    }

    useEffect(() => {
        console.log(makeId, year)
        if(makeId && year){
            fetchData()
        }
    }, [makeId, year])

    if(error) {
        return(
            <div>Error Loading data: {error.message}</div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1>Vehicle Models for {year}</h1>

            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    {
                        models.length > 0 ? models.map((model) => (
                            <div key={model.Model_ID}>
                                <p>{model.Model_Name}</p>
                            </div>
                        )) : <div> No models available for this filter</div>
                    }
                </div>
            </Suspense>

        </div>
    )
}