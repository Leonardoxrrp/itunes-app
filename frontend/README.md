# itunes app

## How to start the app

0. activate cors here: https://cors-anywhere.herokuapp.com/
- Development:
1. yarn
2. yarn start
3. Then go to http://localhost:1234

- Production
1. yarn run build
2. yarn run serve-build
3. Then go to http://localhost:3000 


## Features

- List 100 most popular podcasts on itunes.
- List all episodes from a particular podcast, including the title, date, and duration.
- Show details from a particular episode.
- Display audio.
- Show number of matched searches next to the filter input.
- The filter must react to both the song and the author name.
- Single Page Application with React Router v6.
- Local Storage to save API responses for 24 hours.
- Visual aid appears on the top-right-corner of the screen on every user navigation.
- Clickig on the header title has to redirect to the homepage.
- Detect urls in paragraphs that come from an API response to add a hyperlink.
- Fully responsive.

## Main technologies
- Parcel with React
- React Router v6.
- Bootstrap.
- Linkify.
- Momentjs.
- Axios.