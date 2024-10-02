import { useEffect, useState } from "react";

export const DropDownYear = ({selectedYear, setSelectedYear}) => {
    const [years, setYears] = useState([]);
    

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const availableYears = Array.from({ length: currentYear - 2014 }, (v, i) => currentYear - i);
        setYears(availableYears);
    }, [])
    

    const handleChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <>
            <div className="mt-4">
                <select className="p-3 rounded bg-zinc-700" value={selectedYear} onChange={handleChange}>
                <option  value=''>Select a Model Year</option>
                    {
                        years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}