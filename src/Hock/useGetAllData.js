import { useEffect, useState } from 'react';

const useGetAllData = () => {
    const [allData, setAllData] = useState()
    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=> setAllData(data))
    },[])
    return [allData]
};

export default useGetAllData;