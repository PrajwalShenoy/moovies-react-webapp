import CardSlider from "./components/CardSlider";

const Home = () => {
    return (
        <div>
            <CardSlider title="Watch Next" />
            <CardSlider title="New Movies" />
            <CardSlider title="Action" />
            <CardSlider title="Mystery" />
            <CardSlider title="Popular" />
        </div>
    );
};

export default Home;