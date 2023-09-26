import HomeCard from "../../Component/HomeCard/HomeCard";
import useGetAllData from "../../Hock/useGetAllData";


const Home = () => {
    const [allData] = useGetAllData()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                allData?.map(data=> 
                    <HomeCard
                        key={data.id}
                        data={data}
                    />
                )
            }
        </div>
    );
};

export default Home;