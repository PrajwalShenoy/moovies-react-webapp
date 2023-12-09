import CardSlider from "./components/CardSlider";

const Home = () => {
    return (
        <div>
            <CardSlider title="Watch Next" />
            <CardSlider title="New Movies" />
            <CardSlider title="Action" />
            <CardSlider title="Comedy" />
            <CardSlider title="Thriller" />
        </div>
    );
};

export default Home;