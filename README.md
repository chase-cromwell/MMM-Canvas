# MagicMirror Canvas
This is a module for `MagicMirror²` which displays upcoming assignments from the Canvas LMS. The Canvas LMS is used by colleges, universities and other institutions for coursework.

## Installation
1.  Clone this repository into your MagicMirror `modules` folder.
```
cd /home/pi/MagicMirror/modules
git clone https://github.com/chase-cromwell/MMM-Canvas.git
```
2.  Edit your configuration file under `config/config.js` with the following configuration.
```
{
  module: "MMM-Canvas",
  position: "top_right",
  config: {
    accessKey: "",
    colors: ["blue", "red",],
    courses: ["12345","67890",],
    urlbase: "elearning.university.edu",
    assignMaxLen: 35,
    assignToDisplay: 3,
  }
},
```
3. Get an API key for accessKey in your Canvas account. To do this, login and go to Account -> Profile -> Settings -> Create a new access token.
4. Input the correct Canvas url in `urlbase`. This should be the same as the url of the dashboard page of canvas. DO NOT include a trailing slash (`/`) or `https://www.`.
5. Fill the courses array with the courses you want to check for assignments from. On each course's homepage the url will be elearning.university.edu/courses/courseId. Use courseId.
6. (Optional) To color code the courses, put in colors in the colors array in the corresponding order with the courses array. This array accepts all CSS color values [CSS Colors](https://www.w3schools.com/colors/default.asp). I reccomend using the color names for clarity.
7. (Optional) assignMaxLen will keep assignments from displaying too long, and assignToDisplay changes the number of upcoming assignments to show.
### Preview
![Screenshot](screenshot.png)



#### Credits
MagicMirror²:   [MagicMirror²](https://github.com/MichMich/MagicMirror)   
Based heavily on the MMM-Lice (Live International Currency Exchange) module by mkyle1
MMM-LICE:    [MMM-LICE](https://github.com/mykle1/MMM-LICE)
CanvasAPI:  [CanvasAPI](https://canvas.instructure.com/doc/api/index.html)
