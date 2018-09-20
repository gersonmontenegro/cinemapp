
# CinemApp
React native exercise about consume the TMDB API.

This time I'm gonna make a faster (I hope) exercise with the [TMDB API](https://www.themoviedb.org/?language=en), which allow us to consume all the movie library in their database.

![Initial tools](https://lh3.googleusercontent.com/8mSCdyuID9js2vso-P4GY82eu-daA6lU2QdVZR-ZGOePg39m-pUZWH2ed74MNR8-stYRverjnlmr=s800)

First of all, I need the main idea for the app, so, I drew an scratch on my notebook with my color pens.

As a result, now I know (with a high probability) what's I'm going to do.

![enter image description here](https://lh3.googleusercontent.com/nO6mnnn-9n62yxEIH1Yw40t8gZbWHOylD613wQK660B4C1v9_NYQXxhF2AgD_1xKF-ImIWMuU8fK=s1000)

Yes, is rustic, archaic maybe, but enough for my main purpose.

From the last image I can recognize the next elements:

 - Splash screen
 - Main screen
 - Basic movie screen
 - Extended movie screen

That's all, now, I would like to write some features for every screen, ir order to get more detail before start to write code.

**Splash screen**

Just an icon in the middle of the screen. Obviously, right now I'm thinking about what kind of animation I will do, but, I in this moment a prefer thinking in a basic non-animated version to think in a hundred of possibilities.

**Main screen**

This screen has access to the three categories for this example: Popular, Top rated, and Upcoming.

From here, the user can access to search a movie, and back to the main screen. I drew a link to profile, but, to be honest, I don't think I'll have time enough to do that, so, I'll remove it.

The user will see an horizontal scroll with the movies in this category as well. Every movie section has the official poster about the movie that it represent.

**Basic movie screen**

Basically, here I'll show the basics about the movie:

 - Poster
 - Ranking value
 - Title
 - Original title
 - Genres
 - Short description
 - Favorite button
 - Play trailer button
 - Extends data button

**Extended movie screen**

Similar to the last screen, but, here we can find:

 - Title
 - Release year
 - Stars ranking
 - Numeric ranking
 - Total votes
 - Complete description
 - Back button
 - Share button

I think that I'll make some changes, but I'll try to keep this structure. Also, from the beginning, I need to code thinking about the Animated API, in order to achieve them easier in the future.

Next step is to structure the application (in order to have clear how do I need to create my folders), but, I'm haven't time to make a nice digital graphic, so, I'll write it right here:

 - Main app (App.js)
	 - Components
	- Assets
	- Screens
	- Providers

*Components*

This folder is going to have some little components for almost every part in the app. I'll try to encapsulate as many as I can.

*Assets*

Fonts, images, etc.

*Screens*

This is the place to keep the main interfaces, such as Splash, Main screen, Movie screens, etc.

*Providers*

This folder is going to have controllers in order to manage the internal database, http connections, and business logic.

**First code commit**

After add the first commit into the repository, I would like to remember what kind of libraries/resources I'm going to use in order to complete the app:

 - [React Native](https://facebook.github.io/react-native/)
 - [Animated API](https://facebook.github.io/react-native/docs/animated)
 - [SQLite3 Native plugin](https://github.com/andpor/react-native-sqlite-storage) (for persistence layer)
 - [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction)
 - [Youtube component](https://github.com/inProgress-team/react-native-youtube) in order to show a trailer.
 - [NativeBase](https://nativebase.io). Maybe I need some component to avoid build it from scratch.
 - [Some fonts](www.1001freefonts.com/). Actually, right now I don't know what kind of font to use, but I hope not to take to much time making a decision.

From the above list, there are two things that I've never used in React Native: the TMDb API, and the Youtube Component, so, I need to study a little bit about them.

Also I figured out that I've never worked with SQLite3 in React Native, but, after a little while reading the documentation, I realized that is exactly the same library I used to work with jQuery Mobile in many projects a few years ago, so, I need to take care about it because I don't want surprises with this technology.

Let's started to code.

First of all, I'm gonna make the basic structure and navigation system. Then, I'm gonna to add some details one at time.

I started with the TMDb API, so, I needed to make the registration process, and then, to request the API access in order to use the services.

That didn't hurt, and soon I started to make queries from Postman. So, at this time I get the data for the categories in the app:

![Get upcoming](https://lh3.googleusercontent.com/OEF0GDLlPGGV_WtWWzGnO7HO08gT1JVilq4OzjRp4gkoY3dxj0eGjmF6axXUY-cSQR9VahPMXYDb=s800)
 - Popular
api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=XXXX
 - Top rated
 api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=XXXX
 - Upcoming
 api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=XXXX

The [Discover API examples](https://www.themoviedb.org/documentation/api/discover) section in the documentation offer some useful snippets.

At this moment I realized that the JSON response seems not to have all the data that I need. For example, I can't find the Youtube URL to the video, and all the properties *video* are false.

I got all the general data that I need:

 - Votes
 - Title
 - Original title
 - Genres (at last the ID's). I don't know how to extract the name genres, by the way.
 - Poster
 - Average qualification
 - Description
 - Release date
 - There is a property called *popularity*. Right now, I don't what's that exactly.
 - Original language from the movie

Until now is enough for my purpose, excepto by the video link. I need to learn how to extract that information. Actually, It would be cool to extract the actors list, but I think that's is not a very good idea because I've don't even started to write any line.

After a while checking the forum, I found a [good answer](https://www.themoviedb.org/talk/5451ec02c3a3680245005e3c) from (I think) the guy who give support to the API, but, it's not perfect, because I need to make a second query to get the video list:

    api.themoviedb.org/3/movie/299536/videos?api_key=XXXX
   ![enter image description here](https://lh3.googleusercontent.com/bfFeZiN3kVXxgenO7hI5hSUhLNFlMPCe10gPnDk7dcwU6PW9b7JfB6LDXOx4JcoGxApXQRCdt2cK=s500)

Where 299536 is the movie ID. In this case, Avengers, infinity wars.

In the same answer, this guy said that we can add another parameter to our regular queries to get the videos in the same response, but it doesn't works, at least for me, so, I left that option for now.

Just for curiosity, I wrote *images* instead *videos* in the last URL, and then I got the list of images from that movie. Very useful option.

    api.themoviedb.org/3/movie/299536/images?api_key=XXXX

![
](https://lh3.googleusercontent.com/Y9xl-g7uJ-wTMxOs6sc9NxJy7tcR5ju8SoUPQ1MuvEROt8h_E5M6CVCyWQhvBXFiBJW7MecoQBrj=s500)

One last query: Actors :)

To get the actors, I needed to write credits instead images in the last URL

    api.themoviedb.org/3/movie/299536/credits?api_key=XXXX

This services give photo, name, role played, votes, votes average, and other properties, but I got enough information until now.

Now that I have all the data, I can, finally, code the Splash screen interface.

I would like to do the same animation effect that I have in my [CV](https://github.com/gersonmontenegro/cv) project at the intro, where I emulated a "fluid" integration between the Xcode splash screen, and my own react-native Splash screen.

After a little while, I got back to the action, and I finished a first release candidate for the Splash Animation.

Below I put a gif that shows how is going.

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/splash_1_rc.gif" width="300px">

Basically, I applied the same idea in the [previous project](https://github.com/gersonmontenegro/cv) , where I used react-native-splash-screen plugin the handle a fluid splash screen experience, as I tried to explain it in the below graphic:

![enter image description here](https://lh3.googleusercontent.com/y3kmVbXuI2a7R-Ts4OaIzhOFREOX5HpruYTzMTFkjq4DnD0zmJCOr7FmtrE9BYZLFhe8pFGINYRy=s800)

*So, what just happened?*
Normally, this is the process:
1. Xcode launch the regular Splash screen.
2. After that, the Javascript [bridge](https://hackernoon.com/understanding-react-native-bridge-concept-e9526066ddb8) is started to load.
3. React native load the first screen.

But thanks to the react-native-splash-screen plugin, I can "hide" the loading process of the bridge, and keep showing the natural Splash Screen from Xcode meanwhile the first screen from the RN project is loaded. So, the final process is:

 1. Xcode launch the regular Splash screen.
 2. JS Bridge (JSB) is started to load, and at the same time, keep showing the Xcode Splash screen.
 3. JSB finished the load, and hide Xcode Splash screen, and immediately, the first RN interfaces is loaded.

This behavior allows me give the user a great experience.

Then, I made an animation in order to create an app flow until the main interface.

Now, is time to create the main interface, and I have a idea that I want to implement.

After struggling with some things, I decided keep it as simple as I can, because I haven't time enough (you know, house chores and food doesn't make by itself), so, I made the minimal interface with basic components, like View, ScrollView, FlatList, Image, and Text:

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/movie_list_first_version.gif" width="300px">

After that, I started to think in an idea, not as simple, but not so complex, and, in a few minutes, I got the effect that I wanted at the beginning :) 

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/movie_list_2_version.gif" width="300px">

I just turn the Views component to Animated.View, and I started to play with the height of the Main Movie:

    <Animated.View style={{ width: screenWidth }}>
        <Animated.View style={{ height: this.mainMovieHeight }}>
            <Image source={require('./../assets/img/movie.jpg')} />
        </Animated.View>
        <Animated.View style={{ width: screenWidth }}>
            {
            data.map((item) => (
            <Animated.View key={item.id} style={{ backgroundColor: '#555555', height: 150 }}>
                <Text style={{
                                        fontFamily: 'ObliviousFont',
                                        fontSize: 15,
                                        left: 5,
                                        top: 3,
                                        color: 'white'
                                    }}>
                    {item.name}
                </Text>
                <View style={{ marginTop: 5 }}>
                    <FlatList horizontal={true} data={moviesData} renderItem={({ item })=> (
                        <TouchableHighlight onPress={()=> this.onPressMovie()} style={{ marginLeft: 5, height: 150 }}>
                            <Image source={require('./../assets/img/movie_small.jpg')} />
                        </TouchableHighlight>
                        )}
                        />
                </View>
            </Animated.View>
            ))
            }
        </Animated.View>
    </Animated.View>

As you can see, I got the *mainMovieHeight* variable controlling the height of the main movie.

When one movie is pressed, the main movie is expanded:

    changeVariable(variable, v, delay) {
        return Animated.timing(
            variable, {
                toValue: v,
                duration: defaultTimeAnimation,
                delay: delay
            }
        );
    }
    
    onPressMovie = () => {
        this.changeVariable(this.mainMovieHeight, this.state.finalHeighMainMovie, 0).start();
    }

Obviously, this is only a first test in order to make a clean version.

Now, I'm trying to load the images directly from the server, so, in order to started to use something from the TMDB API, I wanna use the same JSON response that give me the details from a movie:

    {  
    "vote_count":7720,  
    "id":299536,  
    "video":false,  
    "vote_average":8.3,  
    "title":"Avengers: Infinity War",  
    "popularity":260.161,  
    "poster_path":"/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",  
    "original_language":"en",  
    "original_title":"Avengers: Infinity War",  
    "genre_ids":[  
    12,  
    878,  
    14,  
    28  
    ],  
    "backdrop_path":"/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",  
    "adult":false,  
    "overview":"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",  
    "release_date":"2018-04-25"  
    }

At this point, I got the name of the image, but I haven't the complete URL, so, I decided use an easy way to realized that, instead get myself in the API documentation again: Google it!

I needed first to copy a name from the query in Postman:

![](https://lh3.googleusercontent.com/WjWuAk52r_UEXyuX4xS3VPG-8UsKbMg2tPxRnBCnnnWWYAsf0Fz-qkE8D0_N29tis1t59jjGE-bU=s400)

And then, I put the name on Google, and as you can imagine, in the same result I can read what I'm looking for:

![enter image description here](https://lh3.googleusercontent.com/O5-Oa9mNPdSxsI37XEissSOO3CbRSMkPz9mtElAAV0abjkJqE4DlID0FvCGNeFNJJ0Lvg8dFpU83=s500)

Bingo! I got the URL. Now I can continue.

I made a little component to keep all the Movie data, but I started with the image:

    render() {
        return (
            <Animated.View style={{ height: this.props.height }}>
                <Animated.Image
                    style={{ width: screenWidth, height: this.props.height }}
                    source={{ uri: IMAGE_URL + this.props.data.backdrop_path }} />
            </Animated.View>
        );
    }
In the above code there are three principal things (2 props and 1 const):

 1. Prop height
 2. Prop data.backdrop_path
 3. IMAGE_URL

Height is the prop that is attached to the Animated variable that controls the height of the image:

    <MainMovie  height={this.mainMovieHeight} ...

Inside MainContainer I defined a temporary variable with the data, and then, I passed to the component:

        let movieDetails =
        {
            "vote_count": 7720,
            "id": 299536,
            "video": false,
            "vote_average": 8.3,
            "title": "Avengers: Infinity War",
            "popularity": 260.161,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            url_img: require('./../assets/img/movie.jpg'),
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
        }
        return (
            <Animated.View style={{ width: screenWidth }}>
                <MainMovie height={this.mainMovieHeight} data={movieDetails} />

IMAGE_URL is a constant defined in the general CSS file, and here I keep the base URL to load images:

    export  const  IMAGE_URL  = "https://image.tmdb.org/t/p/w500";

That's all, but is importar to keep in mind that if you want to load files from a non HTTPS url, I mean, something like:

    export  const  IMAGE_URL  = "http://image.tmdb.org/t/p/w500";

...you need to modify the Info.list in your Xcode project adding the next lines:

    <key>NSAppTransportSecurity</key>
    <dict>
	    <key>NSAllowsArbitraryLoads</key>
    <true/>
    </dict>

So, you need to take care about this topic, but is not my purpose talk about this time. I found dome useful information the article [Configuring App Transport Security Exceptions in iOS 9 and OSX 10.11].(https://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/)

Besides that, in order to show the image, it's important to set the width and height for the Animated.Image component, like you can see below:

    <Animated.Image style={{ width:  screenWidth, height:  this.props.height }} source={{ uri:  IMAGE_URL + this.props.data.backdrop_path }}  />

![enter image description here](https://lh3.googleusercontent.com/KmvG2GvtcGalp-2jj95UTjL-RaAOkvIqfZjbJSpHW5N9iyeZrxpQe-ZcrT-GkeESMzUkGcmPpw3L=s600)

And then, I made almost all the layout for the Main Movie component. I think there is one more piece left: The ranking indicador.

The last piece in that layout is the average qualification, and I wanted to put a chart.

I used some weeks ago the [Circular progress bar](https://formidable.com/open-source/victory/gallery/animating-circular-progress-bar/), and is easy to use, but this time I decided give the opportunity to another library: [react-native-pie](https://github.com/nihgwu/react-native-pie).

It was easy to use, buuuut, it needed add some extra configuration in Xcode. The result is nice, but not as nice as with the [Victory API](https://formidable.com/open-source/victory/gallery/animating-circular-progress-bar/), because we don't have animations options. I'll think twice to keep this library in the next days because I don't like the extra configuration, is such a annoying thing.

By the way, the final result is very nice:

![](https://lh3.googleusercontent.com/c2R3ByXl34hTflqojh7w35KVYstfMfOPvJY1N3NexnxJPiHXxTIarCPBrVcSaE45rZtl84bmZlDu=s600)


Some hours ago, I thought is moment to start to load data from the TMDB API, so, I made a provider to fetch the movie data, and then I made a few components in order to organized and keep the control over the app:

![](https://lh3.googleusercontent.com/2Zq9aFL_HxZssTSYqB2skuKVbe5TK80al7XMUMVQAd42xVT3Jr5rS6R9_4iWVO2rrYbmZRL-nIXu=s600)

***In red*** I made the general [categories component](https://github.com/gersonmontenegro/cinemapp/blob/master/components/categories/CategoriesContainer.js) who is in charge to keep all the three lists.

***In yellow*** I made the [movie list component](https://github.com/gersonmontenegro/cinemapp/blob/master/components/categories/MovieList.js), in order to keep one simple list, I mean, the category movie list.

And then, I made, ***in green***, the [mini movie component](https://github.com/gersonmontenegro/cinemapp/blob/master/components/categories/MiniMovie.js), who is in charge to keep the data from one unique movie.

After struggling with some issues from the real life, right now I'm loading all the data from the TMDB API. It wasn't so hard, and the only plugin until that makes me nuts, was the react-native-youtube plugin. Actually, I broke the project and I had to start again from a new folder.

> Actually, to make it works is necessary to remove the plugin (in case that it is installed), and clone the project inside node_modules folder. The commands to do that are:
> 1. npm uninstall --save react-native-youtube
> 2. cd node_modules
> 3. git clone https://github.com/inProgress-team/react-native-youtube.
> 
> Yes, is a pain, because if you need to reset the packages, you need to do this every time, but I think is the only way for now.

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/movie_list_details.gif" width="300px">

Actually, I started to use the SQLite3 database to keep, first of all, all the genres, in order to request them at the moment of select a Movie.

A diagram that can explain this idea is below:

![](https://lh3.googleusercontent.com/Uc4V9ui_wO8iGxgdz_c-fJ4TlZcIU0sZ8ijgLACyqsKEkU25qK_dMr1MIQgARu04BjX1mI0cKe2j=s600)

After a little while, now I have the YouTube plugin working this way:

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/view_video.gif" width="300px">

At the same diced, I started to organize a little my code, not because it was a messy, but because I wanted it cleaner. 

Now, in every constructor method, it is possible to see something like:

    constructor(props) {
	    super(props);
	    this.settingState();
	    this.bindingFunctions();
	    this.creatingSingletonGroup();
    }

I like to code right that, so, I decided is time to make a better practice.

Now, I just implemented the [Toast](https://github.com/crazycodeboy/react-native-easy-toast) plugin because I realized that some movies doesn't have videos to show, so, I got a warning in that cases. To avoid that, I used the plugin, and the result is such a nice message:

![](https://lh3.googleusercontent.com/C6-wtb2WgKejUF_kFfcsmr5HIP-TGNhRJqyJKt0XEt7tsSWqCWeyivC31qSmMv_EPvuNFHTeaKxG=s600)

At this moment, I decided to change a little bit the design, mostly colors, and fonts, because I think right now those dark colors are not my favorite color palette, so, I turn it clear, using some white tones, and light gray.

I changed the font as well, because the current one is not as beauty as a wish.

The result was, at least for me, much better:

![enter image description here](https://lh3.googleusercontent.com/Oupg516K8Q4JKskeP5PAHhr19TotsStvsV8ZA1NVkxTWP3Yj-x4RN0cz-Gr4PGfUnaEOFAGSDwUK=s600)

As you can see, I added the title at the bottom of every mini movie, and I added round corners as well. Also, I added a little of shadow to every mini movie preview image. I really like it!

Now is the turn of the local search, where I wanted implement a Text Input, and handle it as simple as I could: If the user write 3 or more letters, the local search can start. The result format is the same as the result format when I make a request from the TMDB API, so, I didn't make many things.

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/local_search_preview.gif" width="300px">

After that, is time to implement the filter, where the user can search inside one o more categories (*Popular, Top rated, and Upcoming*). Actually, there is a last option, *On line*, and this is for search using the TMDB API.

Right now, I've completed the visual functionality:

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/checkbox_search_preview.gif" width="300px">

For this last option, I decided not to create a CheckBox component by my own, not because I couldn't, but because I haven't time enough, so, I installed [Native base](https://github.com/GeekyAnts/NativeBase) library in order to use component that I need from the available catalogue.

After a lots of commits, at least I have a decent search engine, who is able to do the job not only offline, but online. Besides, the search panel could be open manually using the ellipsis button, and also, this panel will be open automatically if the search has results, just like I show below:

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/search_offline_online.gif" width="300px">

I think I'm gonna make a few details before decided finish this project.

At this moment, I'm not gonna code more lines. The project is completed, at least in terms of codification.

The last details that I implemented was view the movie details. I designed this interface a little different, but I haven't time enough, but, like a compensation, I add a really cool feature: Cast, with names, an photos.

So, in the next gif it's possible to see the title, genres, overview (complete version) and cast:

<img src="https://github.com/gersonmontenegro/cinemapp/blob/master/assets/gif/view_details.gif" width="300px">

To do that implied change a little bit MovieList and MiniMovie components, because I don't wanted make another component to do the same, basically.

Now, I'm gonna detail some parts of the app, and I'm gonna do that in Spanish, because I think is a *must*.

### Estructura de la aplicación
[Estructura de la aplicación](#estructura)

![App structure](https://lh3.googleusercontent.com/7Chiw3NaTI3I7cx95m6YOlwIyPn2ftEC2Xj_Z4bO_rhl35814UL_H0YjR1FitVfMh-PF7ZsQKyg-=s1000)

El diagrama anterior muestra cómo está desplegada la aplicación a nivel físico. Puede parecer un poco confuso, pero en las siguientes líneas explicaré qué hace cada parte.

En la raíz del proyecto se encuentra el archivo App.js, cuyo propósito es:

 1. Mantener cargado el Splash de Xcode mientras el bridge de React Native (RN) es cargado.
 2. Cargar el Splash de RN que empata de forma transparente para el usuario.
 3. Abrir el contenedor principal una vez el Splash ha terminado de mostrarse.

## Vistas
**< MainContainer />**

Esta vista contiene el siguiente despliegue:

![](https://lh3.googleusercontent.com/KwP4oT7eE2opzsARf_eo1o_SeNl3JZ6Jv1dxBXQVYEtugYXihlLFyirY8MMjbUlAb24ZhqUbse6-=s400)

Desde esta vista inicial se cargan los elementos que visualizarán los contenidos a cargar. Ahora iré por cada una de las vistas principales para detallar el siguiente nivel de detalle:

**< HeaderComponent />**

Vista con el título, y el logo de la aplicación. Todos los componentes están basados en ***Animated*** con el fin de agregarle animación a cada elemento.

**< MovieDetails />**

![enter image description here](https://lh3.googleusercontent.com/8I091PIYRdXerSSMVvyqtrFlZM6y7lm02PSJxrQH-LIUk9BUZd9QNJUUp9GitYTi9Kg7Up7Ycr5g)

A través de esta vista, se puede visualizar: Título, lista de géneros, descripción, texto "Cast", que viene a ser el título del sgte componente, que es la lista (componente MovieList) de actores de la película.

**< MainMovie />**

![enter image description here](https://lh3.googleusercontent.com/i5192vtkjwr_654vfWWSnGt32T2_FFnduFjxX8bZs-UtgeQIJOO_u0q_bRZDGWOTv5tYOBnz30rE)

Similar a la anterior, esta es la primera vista con detalles sobre la película que el usuario observa.

Muestra datos como: Fotografía principal, Calificación a través de un chart tipo Pie, textos con el Título, Géneros y descripción corta, y finalmente 3 botones (Agregar a favoritos, Reproducir video, Ver más detalles) que hacen parte del componente ButtonsContainer, que está desplegado de la sgte manera:

![](https://lh3.googleusercontent.com/FSKu-YmTcUT6RQheP-ICraZuY04uBnQbo8tjMscignL9t3gsap-88CK4hNFGWe3hLeI87Mz3xuE-=s900)

Llegado este punto, no sobra comentar que cada elemento en pantalla es un componente único reutilizable, razón por la cual se pueden ver durante toda la aplicación comportamientos como el anterior, en donde cada BottomButton es una instancia de un mismo objeto.

**< YouTubePlayer />**

Este componente es la implementación del plugin [react-native-youtube](https://github.com/inProgress-team/react-native-youtube), junto con un botón utilizado para volver a la vista principal de la película.

**< SearchContainer />**

![enter image description here](https://lh3.googleusercontent.com/L38hGzOOPOcsMtDcgbHpAuDLe6O9wMdO9azmnP-t0OgB9vob3f3VMuDdimsN7wyT0_ofCd6U068P)

SearchContainer es el componente que encapsula el buscador de películas. Está compuesto por: 

 - Caja de texto para escribir un parámetro de búsqueda. A medida que el usuario escribe, la búsqueda se va filtrando con el texto escrito.
 - Componente BasicButton que muestra 3 puntos que permiten extender la vista. No sobra aclarar que así no se abra manualmente, si el texto escrito genera resultados, la vista se extiende automáticamente. De igual forma, si no hay resultados, se cierra.
 - FilterContainer. Es el contenedor con los 4 checks que permiten buscar por las 3 categorías montadas (Popular, TopRated y Upcoming), y, Online, que, como su nombre lo indica, realiza una búsqueda directamente en la BD de TMDB.
 - MovieList. Es el mismo componente descrito con anterioridad, pero que esta vez visualiza los resultados de la búsqueda.
 - Animated.Image. Este componente muestra, u oculta, una animación que indica precarga. Se usa cuando se hacen búsquedas en línea.

**< CategoriesContainer />**

![enter image description here](https://lh3.googleusercontent.com/Tkfe_QKvhExJACUPY4-_XXSGSvWT3B-lf_0QOnv4fJrwzlCwL2xAnAghMtdZYyt-XPfnAyNajqJn)

Este último gráfico no solo detalla al componente CategoriesContainer, encargado de mantener los listados de las tres categorías de películas, sino también, se extiende hasta mostrar el detalle del despliegue completo involucrado en MovieList, demostrando de esta manera que se fraccionaron muchos elementos dentro de la aplicación con el fin de hacerlos no solo reutilizables, sino legibles.

## Providers
**Persistencia**

Debido a que la aplicación puede funcionar localmente (requiere al menos una primera conexión a Internet para descargar los datos básicos), y sin Internet (al menos para consulta de datos), se implementó una clase llamada [Database.js](https://github.com/gersonmontenegro/cinemapp/blob/master/providers/Database.js), con la cual se almacenan datos como géneros, y películas, y a la ves se hacen consultas a esta misma información posteriormente.

El motor usado es SQLite3.

**Red**

Cuando se realizan peticiones a la API de TMDB, se utiliza la clase [FetchData.js](https://github.com/gersonmontenegro/cinemapp/blob/master/providers/FetchData.js), creada exclusivamente para realizar peticiones en el momento que lo requiera. Las peticiones actuales son:

 1. Consulta de géneros, que luego se almacenan internamente.
 2. Consulta de las películas pertenecientes a las categorías, que también son clasificadas, y almacenadas.
 3. Búsqueda online.

**Negocio**

Se crearon 2 clases para dar apoyo a la lógica de la aplicación:

 1. [Process.js](https://github.com/gersonmontenegro/cinemapp/blob/master/providers/Process.js)
 2. [Actions.js](https://github.com/gersonmontenegro/cinemapp/blob/master/providers/Actions.js)

Mientras que Process se encarga de procesar arreglos, cadenas de texto, y solicitudes al servidor, Actions ejecuta acciones que se encargarán pos sí mismas de controlar un elemento hasta que la acción termine, como es el caso del control de las variables para las animaciones.

**Datos de apoyo**

El archivo [Datos.js](https://github.com/gersonmontenegro/cinemapp/blob/master/providers/Data.js) contiene las constantes que almacenan:

 1. Listado de categorías con URL de descarga para cada una
 2. URL base para descargar géneros, detalles de videos, créditos, y fotos.
 3. Es el único sitios donde se usa el archivo ApiAuth.js, que no está versionado porque su único objetivo es almacenar mi api_key, que debe ser única para cada desarrollador.

## Conceptos aplicados
**Principio de responsabilidad única**

Para mi, el principio de responsabilidad única no es nada más que un patrón de diseño que me permite escribir funciones muy pequeñas que realicen una única tarea.

El propósito de este patrón es facilitar no solo el mantenimiento del código, sino también si legibilidad a largo plazo, y por personas diferentes a quienes lo escribieron.

Ejemplos dentro de esta aplicación sobre este concepto pueden ser vistos al detalle en cualquier de las clases Provider, como por ejemplo, Process, que es el archivo más denso en esta categoría.

Como se comentó hace unas líneas, este archivo se encarga de procesar datos, cadenas de texto, y peticiones al servidor. Estos son algunos apartes de ese archivo:

    cutText(text, characters) {
        return text != '' ? text.substring(0, characters) + "..." : "";
    }
    
    toUpper(text) {
        return text != '' ? text.toUpperCase() : '';
    }
    
    exists(text) {
        return text != null ? text : '';
    }
    
    existsImageBackground(img, state) {
        return img != '' && img != undefined && img != null && img != 'null' ? img : state.poster_path;
    }

Pequeñas funciones que hacen una única tarea, y que pueden ser usadas durante toda la aplicación, permitiendo que el código dentro de las vistas sea el mínimo necesario para llamar a un Provider, y visualizar los resultados obtenidos.

Cada función hace pequeñas transacciones, donde incluso se puede hacer uso de otros providers. Por ejemplo, el proceso de buscar en línea es el sgte:

    searchMovieOnline(text) {
        return new Promise((resolve, reject) => {
            let fetchData = FetchData.getInstance();
            fetchData.getData(SEARCH_ONLINE_URL + text).then(
                (data) => {
                    resolve(data);
                }
            );
        });
    }

La función devuelve un objeto Promise, que internamente hace uso del provider FetchData (quien solo realiza peticiones POST a un servidor), para luego devolver como respuesta el resultado de la petición.

El resultado de esta transacción es puesto en el *state* que espera los datos de ducha operación:

    initSearchOnline(text) {
        this.setState({
            spinnerOpacity: 1
        });
        this.Process.searchMovieOnline(text).then((data) => {
            this.setState({
                searchResults: data.results,
                spinnerOpacity: 0
            });
        });
    }

Esta función (quien hace uso de searchMovieOnline), realiza lo sgte:

 1. Muestra la animación de precarga.
 2. Hace el llamado a searchMovieOnline.
 3. Asigna el resultado al *state* respectivo.
 4. Oculta la animación de precarga.

Los últimos 2 pasos ocurren en el mismo momento.

**Características de un código limpio**

Para mi, más allá de la implementación de diferentes patrones de diseño (necesarios por donde se les vea), siempre será importante tener un orden para cada cosa, de tal forma que quien sea mire el código de un proyecto por primera vez, al menos entienda cómo está organizado, y de acuerdo a los nombres de los archivos y carpetas, sepa en dónde buscar cada cosa.

Básicamente es la implementación del sentido común al momento de programar.

De igual forma, un código limpio incluye buenos algoritmos que aceleran el rendimiento de la aplicación. Por ejemplo, cuando se va a crear el filtro de búsqueda (dentro del archivo [Process.js](https://github.com/gersonmontenegro/cinemapp/blob/master/providers/Process.js)), se requiere una cadena de tipo *"1,2,3"* (no necesariamente esta cadena), así que para no estar concatenando cadenas de texto unidas por una coma, donde usualmente la última coma debe ser eliminada de forma manual, se crea un array con los códigos de las categorías seleccionadas, y al momento de devolver la cadena mencionada, se ejecuta:

    return  filter.join(',');

Como conclusión, el código limpio siempre va a ser la mezcla entre:

 1. Patrones de diseño.
 2. Buenos algorítmos.
 3. Sentido común.


