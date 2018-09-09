
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

From the above list, there are two thinks that I've never used in React Native: the TMDb API, and the Youtube Component, so, I need to study a little bit about them.

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
