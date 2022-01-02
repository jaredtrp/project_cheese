# BREWHAUS  [Visit Website Here](https://jaredtrp.github.io/project_cheese)
# Core functionality:
Discovery is one of the most tantalizing and rewarding aspects of exploring the vast world of beer, but we humans have an almost inevitable tendency to fall into patterns. With this shortcoming in mind, we developed this app to offer a random beer from BrewDog Brewery, but with the added feature of basing this output on the weather in the Austin, Texas area.

For any day where the weather is below 65 degrees fahrenheit, beers above 7.5 ABV are randomly recommended for their tendency to provide warmth. On those days where the temperature is warmer, a lower ABV beer in recommended.

## When a user loads the site they see:
- Beer-themed design
- Brewhaus logo
- Tagline/quote
- "Beer Me" section

## Features and Design
- Colorful and dynamic beer-themed design
- Clickable logo returns/reloads page
- Logo text responds to screen size
- "Beer Me" button loads random beer from BrewDog brewery
- Each random beer card contains multiple stats pulled from the API and features
    - Beer name
    - Short description
    - ABV percentage
    - Long description
    - Largest available quantity for purchase
- Each beer card contains 2 main features
    - "Hold my beer" button to save the beer into local storage
    - "Pour out" button to remove the beer from local storage (WIP: Currently only deletes the card from the DOM, does not delete from local storage)
- Random beer is selected based on multiple criteria pulled from the PunkAPI and OpenWeather API.

## Languages, Code, APIs, and Frameworks Used
### HTML
- Only basic HTML was needed for this app, including semantic tags.
### CSS
- Foundation framework
- Google font import
- Default border box sizing
- Flexbox
### JavaScript
- 2 API fetches (listed below)
- Math.random within URL concatenation to fetch random beer
- Dynamic content generation
### PunkAPI
- Searchable and filterable API which fetches the information on each beer for the app
- Each beer in the app is categorized based on ABV
### OpenWeather API
- Fetches the temperature for the Austin, TX area, where BrewDog Brewery is located
- If the temperature in Austin is below 65 degrees fahrenheit, the user is offered a random beer above 7.5% ABV, to provide a more warming feeling. If if is above 65 degrees fahrenheit, they are offered a random beer below 7.5% ABV.
### Foundation
- Framework utilized to provide responsive design and styling.
### JQuery
- JavaScript library used to provide an easier coding route for dynamically generating our random beer content.

<img src="assets\images\project_cheese website picture.png" alt="Image of the brewhaus website">