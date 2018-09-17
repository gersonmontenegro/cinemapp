import { API_KEY } from './../providers/ApiAuth';

export const Categories = [
    { id: 1, name: "Popular", url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&append_to_response=videos&api_key=" + API_KEY },
    { id: 2, name: "Top rated", url: "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=" + API_KEY },
    { id: 3, name: "Upcoming", url: "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&append_to_response=video&api_key=" + API_KEY }
];

export const GENRES_URL = "https://api.themoviedb.org/3/genre/movie/list?"
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const VIDEOS_URL = "https://api.themoviedb.org/3/movie/%ID_VIDEO%/videos?api_key=";
export const SEARCH_ONLINE_URL = "https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false&api_key=" + API_KEY + "&query=";

export const MoviesQuery = {
    "page": 1,
    "total_results": 377119,
    "total_pages": 18856,
    "results": [
        {
            "vote_count": 7720,
            "id": 299536,
            "video": false,
            "vote_average": 8.3,
            "title": "Avengers: Infinity War",
            "popularity": 260.161,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "genre_ids": [
                12,
                878,
                14,
                28
            ],
            "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            "adult": false,
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "release_date": "2018-04-25"
        },
        {
            "vote_count": 3044,
            "id": 351286,
            "video": false,
            "vote_average": 6.5,
            "title": "Jurassic World: Fallen Kingdom",
            "popularity": 163.502,
            "poster_path": "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
            "original_language": "en",
            "original_title": "Jurassic World: Fallen Kingdom",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg",
            "adult": false,
            "overview": "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
            "release_date": "2018-06-06"
        },
        {
            "vote_count": 4645,
            "id": 383498,
            "video": false,
            "vote_average": 7.5,
            "title": "Deadpool 2",
            "popularity": 142.445,
            "poster_path": "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
            "original_language": "en",
            "original_title": "Deadpool 2",
            "genre_ids": [
                28,
                35,
                878
            ],
            "backdrop_path": "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
            "adult": false,
            "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
            "release_date": "2018-05-15"
        },
        {
            "vote_count": 739,
            "id": 345940,
            "video": false,
            "vote_average": 6.2,
            "title": "The Meg",
            "popularity": 134.97,
            "poster_path": "/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg",
            "original_language": "en",
            "original_title": "The Meg",
            "genre_ids": [
                28,
                878,
                53,
                27
            ],
            "backdrop_path": "/rH79sB6Nkx4cMW3JzsUy7wK0rhX.jpg",
            "adult": false,
            "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
            "release_date": "2018-08-09"
        },
        {
            "vote_count": 13,
            "id": 135870,
            "video": false,
            "vote_average": 5.5,
            "title": "Rebel",
            "popularity": 112.533,
            "poster_path": "/dNTzorrVmcJ25fUGzs9FfkoXb0P.jpg",
            "original_language": "te",
            "original_title": "రెబెల్",
            "genre_ids": [
                28
            ],
            "backdrop_path": "/yCGEkEqy7uOo7NwlbgOzGrI8i43.jpg",
            "adult": false,
            "overview": "Rebel is a romantic action revenge drama, which revolves around the story of a happy-go-lucky guy. The hero (Prabhas) is the son of a good-natured mafia don (Krishnam Raju). The hero becomes Rebel after his father is killed. How he takes revenge upon the people, who killed his father, will form the second half of the movie. Apart from directing, Raghava Lawrence also handles the choreography, screenplay and music direction for the film. The film is being produced by J. Bhaghawan and J. Pulla Rao under Sri Balaji Cine Media banner.",
            "release_date": "2012-09-28"
        },
        {
            "vote_count": 1446,
            "id": 402900,
            "video": false,
            "vote_average": 7,
            "title": "Ocean's Eight",
            "popularity": 104.616,
            "poster_path": "/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
            "original_language": "en",
            "original_title": "Ocean's Eight",
            "genre_ids": [
                80,
                35,
                28,
                53
            ],
            "backdrop_path": "/scQf03Fm3jeyv4FH04qvi4fp4wh.jpg",
            "adult": false,
            "overview": "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
            "release_date": "2018-06-07"
        },
        {
            "vote_count": 18,
            "id": 507569,
            "video": false,
            "vote_average": 5.6,
            "title": "The Seven Deadly Sins: Prisoners of the Sky",
            "popularity": 91.726,
            "poster_path": "/r6pPUVUKU5eIpYj4oEzidk5ZibB.jpg",
            "original_language": "ja",
            "original_title": "劇場版 七つの大罪 天空の囚われ人",
            "genre_ids": [
                28,
                12,
                14,
                16
            ],
            "backdrop_path": "/uKwOX7MtKlAaGeCQe6c4jc1vZpj.jpg",
            "adult": false,
            "overview": "The Seven Deadly Sins travel to a remote land in search of the phantom ingredient \"sky fish.\" Meliodas and Hawk end up at a \"Sky Palace\" that exists above the clouds, where all the residents have wings. Meliodas is mistaken for a boy who committed a crime and is thrown in prison. Meanwhile, the residents are preparing a ceremony for defense against a ferocious beast that awakens once every 3,000 years. But the Six Knights of Black, a Demon Clan army, arrives and removes the seal on the beast in order to threaten the lives of the residents of Sky Palace. Meliodas and his allies meet the Six Knights of Black in battle.",
            "release_date": "2018-08-18"
        },
        {
            "vote_count": 45,
            "id": 439079,
            "video": false,
            "vote_average": 6.2,
            "title": "The Nun",
            "popularity": 90.278,
            "poster_path": "/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
            "original_language": "en",
            "original_title": "The Nun",
            "genre_ids": [
                27,
                9648,
                53
            ],
            "backdrop_path": "/tfKxFPq4lel0bL80H0C6kGYKGEq.jpg",
            "adult": false,
            "overview": "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2,” as the abbey becomes a horrific battleground between the living and the damned.",
            "release_date": "2018-09-05"
        },
        {
            "vote_count": 1362,
            "id": 353081,
            "video": false,
            "vote_average": 7.3,
            "title": "Mission: Impossible - Fallout",
            "popularity": 89.201,
            "poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
            "original_language": "en",
            "original_title": "Mission: Impossible - Fallout",
            "genre_ids": [
                12,
                28,
                53
            ],
            "backdrop_path": "/5qxePyMYDisLe8rJiBYX8HKEyv2.jpg",
            "adult": false,
            "overview": "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
            "release_date": "2018-07-25"
        },
        {
            "vote_count": 127,
            "id": 399360,
            "video": false,
            "vote_average": 5.3,
            "title": "Alpha",
            "popularity": 84.207,
            "poster_path": "/afdZAIcAQscziqVtsEoh2PwsYTW.jpg",
            "original_language": "en",
            "original_title": "Alpha",
            "genre_ids": [
                12,
                18
            ],
            "backdrop_path": "/nKMeTdm72LQ756Eq20uTjF1zDXu.jpg",
            "adult": false,
            "overview": "After a hunting expedition goes awry, a young caveman struggles against the elements to find his way home.",
            "release_date": "2018-08-17"
        },
        {
            "vote_count": 11,
            "id": 390845,
            "video": false,
            "vote_average": 3.9,
            "title": "A Delicious Flight",
            "popularity": 81.277,
            "poster_path": "/kGlBKJBosHTA4elgHS54olzD4oS.jpg",
            "original_language": "ko",
            "original_title": "맛있는 비행",
            "genre_ids": [
                10749
            ],
            "backdrop_path": "/4MJkbiDU5lr6TAwSLPV14C9w0vs.jpg",
            "adult": false,
            "overview": "The in- flight service for Hong Kong starts now!  An erotic story that took place in the spacious blue sky!  An innocent actress runs away from the scandal with an idol, the impudent idol that ruined her career, a passionate manager who is devoted to her and his ex-girlfriend who is now a sexy stewardess. These four that should never be together run into each other in an airplane. No one can run away and the most cheeky and erotic things happen here.",
            "release_date": "2015-11-01"
        },
        {
            "vote_count": 1550,
            "id": 466282,
            "video": false,
            "vote_average": 8.2,
            "title": "To All the Boys I've Loved Before",
            "popularity": 81.268,
            "poster_path": "/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
            "original_language": "en",
            "original_title": "To All the Boys I've Loved Before",
            "genre_ids": [
                35,
                10749
            ],
            "backdrop_path": "/hBHxBOGQBTMX3bDmqKoAgniZ9hE.jpg",
            "adult": false,
            "overview": "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
            "release_date": "2018-08-17"
        },
        {
            "vote_count": 7918,
            "id": 284054,
            "video": false,
            "vote_average": 7.4,
            "title": "Black Panther",
            "popularity": 80.949,
            "poster_path": "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
            "original_language": "en",
            "original_title": "Black Panther",
            "genre_ids": [
                28,
                12,
                14,
                878
            ],
            "backdrop_path": "/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
            "adult": false,
            "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
            "release_date": "2018-02-13"
        },
        {
            "vote_count": 815,
            "id": 493922,
            "video": false,
            "vote_average": 7,
            "title": "Hereditary",
            "popularity": 74.863,
            "poster_path": "/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
            "original_language": "en",
            "original_title": "Hereditary",
            "genre_ids": [
                27,
                18,
                9648,
                53
            ],
            "backdrop_path": "/pS9Aub8MPyQbENblGD8mHeaqMuv.jpg",
            "adult": false,
            "overview": "When Ellen, the matriarch of the Graham family, passes away, her daughter's family begins to unravel cryptic and increasingly terrifying secrets about their ancestry. The more they discover, the more they find themselves trying to outrun the sinister fate they seem to have inherited.",
            "release_date": "2018-06-04"
        },
        {
            "vote_count": 586,
            "id": 447200,
            "video": false,
            "vote_average": 6,
            "title": "Skyscraper",
            "popularity": 74.207,
            "poster_path": "/5LYSsOPzuP13201qSzMjNxi8FxN.jpg",
            "original_language": "en",
            "original_title": "Skyscraper",
            "genre_ids": [
                28,
                53,
                18
            ],
            "backdrop_path": "/oMKFQmoVgB69fyXfSMu0lGlHJP2.jpg",
            "adult": false,
            "overview": "Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
            "release_date": "2018-07-11"
        },
        {
            "vote_count": 8164,
            "id": 284053,
            "video": false,
            "vote_average": 7.5,
            "title": "Thor: Ragnarok",
            "popularity": 67.656,
            "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
            "original_language": "en",
            "original_title": "Thor: Ragnarok",
            "genre_ids": [
                28,
                12
            ],
            "backdrop_path": "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
            "adult": false,
            "overview": "Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
            "release_date": "2017-10-25"
        },
        {
            "vote_count": 14559,
            "id": 118340,
            "video": false,
            "vote_average": 7.9,
            "title": "Guardians of the Galaxy",
            "popularity": 56.547,
            "poster_path": "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
            "original_language": "en",
            "original_title": "Guardians of the Galaxy",
            "genre_ids": [
                28,
                878,
                12
            ],
            "backdrop_path": "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
            "adult": false,
            "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
            "release_date": "2014-07-30"
        },
        {
            "vote_count": 6537,
            "id": 181808,
            "video": false,
            "vote_average": 7.1,
            "title": "Star Wars: The Last Jedi",
            "popularity": 56.37,
            "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
            "original_language": "en",
            "original_title": "Star Wars: The Last Jedi",
            "genre_ids": [
                14,
                12,
                878,
                28
            ],
            "backdrop_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
            "adult": false,
            "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
            "release_date": "2017-12-13"
        },
        {
            "vote_count": 1793,
            "id": 454983,
            "video": false,
            "vote_average": 7.5,
            "title": "The Kissing Booth",
            "popularity": 54.537,
            "poster_path": "/7Dktk2ST6aL8h9Oe5rpk903VLhx.jpg",
            "original_language": "en",
            "original_title": "The Kissing Booth",
            "genre_ids": [
                10749,
                35
            ],
            "backdrop_path": "/xEKx7zPEjN6meomZ7OhV82Mm2jm.jpg",
            "adult": false,
            "overview": "When teenager Elle's first kiss leads to a forbidden romance with the hottest boy in high school, she risks her relationship with her best friend.",
            "release_date": "2018-05-11"
        },
        {
            "vote_count": 4021,
            "id": 333339,
            "video": false,
            "vote_average": 7.7,
            "title": "Ready Player One",
            "popularity": 53.405,
            "poster_path": "/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
            "original_language": "en",
            "original_title": "Ready Player One",
            "genre_ids": [
                12,
                878,
                14
            ],
            "backdrop_path": "/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg",
            "adult": false,
            "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
            "release_date": "2018-03-28"
        }
    ]
}