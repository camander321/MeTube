
# MeTube

#### By Cameron Anderson
##### 3/30/2018

###### https://metube-199617.firebaseapp.com

## Description
A YouTube clone the allows users to search for videos.

##### Current Features
* Search YouTube for videos with a given string.
* Show titles and thumbnails of result videos returned from api.
* Click video titles or thumbnails to go to a route for that video.
* Embed video in page.
* Add comments on any video and store them on firebase commenting

##### Future Features
* User authentication


## Setup/Installation Requirements
* download or clone repository from `git clone https://github.com/camander321/docsearch`
* navigate to project directory
* add youtube api credentials
  * follow this video tutorial to obtain an api: `https://www.youtube.com/watch?v=SzlG5Qnjd4Y`
  * add a file in `src/app` called `api-keys.ts` containing the line `export var youtubeAPIKey = {key: '[ YOUR API KEY ]'}`
* add firebase credentials.
  * go to `https://console.firebase.google.com/`and login
  * add a new project
  * click 'Add Firebase to your web app'
  * copy the `var config` block of code and paste into your new `api-keys.ts` file. change the first line to look like `export var masterFirebaseConfig = {`
* run `npm install`
* run `ng serve`
* open your browser and navigate to `localhost:4200`


## Support and contact details

* contact the author at chamburg321@gmail.com

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* npm
* Angular CLI
* YouTube data API

### License

Copyright (c) 2018 Cameron Anderson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
