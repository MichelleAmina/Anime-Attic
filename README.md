# Anime Attic

# Author: Michelle Amina Okumu

## Project Requirements
1. Your app must be a HTML/CSS/JS/Bootstrap or Tailwind frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

2. Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

3. Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

4. Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

4. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

### Stretch Goals
Use json-serverLinks to an external site. in your project to persist your app's interactivity

## Files 
index.html 
style.css = contains the styling for the webpage 
script.js = contains the javascript code that brings functionality to the page 
anim.js = contains javascript code that controls all interactivity and animations on the page eg scroll, mouseenter, mouseleave 


## To run the program/ setup instructions 
After opening the program, in your terminal, run the following command to get the backend started:
          json-server --watch db.json

Launch your browser of choice and allow the application to load. Welcome to Anime Attic! As you scroll through the site i hope you have a visually appealing time and enjoy the anime on display. At "Find The Anime For You.." there's an input area. Search for an anime by name, (here are a few suggestions: bleach, kakegurui, Jujutsu Kaisen, Solo leveling) or by genre (action, mystery, adventure etc). Cards displaying the search results with then load on screen. On hovering over the cards, details about the anime will appear such as the name, (english and japanese), number of episodes, status as well as a button linking to an external site where you can get more information on the specific anime. Keep scrolling down.....we're not done yet. On the following page, spend some time hovering in and out of "Popular", "New" or "Trending" to get a background video displaying an anime that falls in either category.

### Warning you might have to reload the page a few times before scrolling, to allow everything to load properly. The videos may take a while to load so keep refreshing until you see the first video on page 1 has began to play. The final page (page5) may also set itself poorly and be longer than the set 132vh. Reload a few times for it to set itself correctly. 
### NB this only happens when loaded on github pages. If you clone the repository to your local environment, the page should load effortlessly. 

##
3 separate event listeners (DOMContentLoaded, click, change, submit, etc) 
1. DOMContentLoaded 
- Line 1 script.js
2. Submit 
- Line 8 script.js
3. Mouseenter
- Line 121 anim.js
4. Mouseleave
- Line 140 anim.js
##
Some interactivity is required.
1. The website shows interactivity through the scroll and hover effects found throughout the page. 




## Licence 

MIT License

Copyright (c) 2023 MichelleAmina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.