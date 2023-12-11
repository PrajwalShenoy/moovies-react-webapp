import CardSlider from "./components/CardSlider";
import { useSelector } from "react-redux";

const Home = () => {
    const { userIsSet } = useSelector((state) => state.userReducer);
    const { currentUser } = useSelector((state) => state.userReducer);

    return (
        <div>
            {
                userIsSet && currentUser.watchlist.length > 0 && <CardSlider title="Watch Next" />
            }
            <CardSlider title="New Movies" />
            <CardSlider title="Action" />
            <CardSlider title="Comedy" />
            <CardSlider title="Thriller" />
        </div>
    );
};

export default Home;