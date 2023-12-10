import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import SearchBox from "./SearchBox";
import Card from "../home/components/Card";

const MovieSearch = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [movieContent, setMovieContent] = useState([]);
    const [loading, setLoading] = useState(true);

    const processMovieData = (data) => {
        let splitData = [];
        for (let i = 0; i < data.length; i += 12) {
            splitData.push(data.slice(i, i + 12));
        }
        setMovieContent(splitData);
        setLoading(false);
    };

    const getMovieRequest = async () => {
        setLoading(true);
        const url = `http://localhost:4000/api/search?query=${searchValue}`;

        try {
            const response = await axios.get(url);
            if (response.data.results) {
                setAllMovies(response.data.results);
                processMovieData(response.data.results);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {

        const storedSearchValue = sessionStorage.getItem("searchValue");
        if (storedSearchValue) {
            setSearchValue(storedSearchValue);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("searchValue", searchValue);
    }, [searchValue]);

    useEffect(() => {
        if (searchValue) {
            getMovieRequest(searchValue);
        }
    }, [searchValue]);

    return (
        <div className="container text-center">
            <h1 className="mt-5 mb-4 card-heading">Search for your Favourite Movies here!!</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2 margin-all">
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="carousel-inner custom-carousel">
                    {movieContent.map((movie, index) => (
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <div className='row d-flex'>
                                {movie.map((card) => (
                                    <div key={card.id} className='col-md-3 mb-3'>
                                        <Card title={card.title} description={card.overview} imageUrl={"https://image.tmdb.org/t/p/original" + card.poster_path} cardId={card.id} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieSearch;
