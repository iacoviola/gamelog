# SAW 2023/24 project
## Emiliano Iacopini

### Project description
The project is about the implementation of a fully fledged web application that allows users to create a backlog of videogames they want to play, the ones they have already played and the ones they are currently playing. The application will also allow users to rate the games they have played and to write reviews about them. The application will also have a search functionality that will allow users to search for games and add them to their backlog, all the data about the games will be pulled from the IGDB API. _The application will also have a social aspect, users will be able to follow other users and see their backlogs, ratings and reviews. The application will also have a forum where users can discuss about games and share their opinions._. This project in the end will look somewhat similar to the website [Trakt.tv](https://trakt.tv/).
The app will also be developed as a PWA (Progressive Web App) so that it can be installed on mobile devices and used as a native app.

### Technologies
The project will be implemented using the following technologies:
- Frontend: Svelte w/ TypeScript
- Backend: Sveltekit
- Database: Supabase
- API: [IGDB](https://www.igdb.com/api)

### Application Features
- User registration and login
- User profile
- Backlog creation (to play, playing, played)
- Game search
- Game rating using a 10 star system
- Game review
- Game lists
- User following
- Forum
- PSN integration using the node module [psn-api](https://www.npmjs.com/package/psn-api)
- Calendar to keep track of game releases
- Metacritic integration by web scraping the website to get the game ratings