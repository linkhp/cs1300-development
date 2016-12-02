# CS1300 Development Assignment

##How to run code locally:##

###Clone Repository###
* Open up terminal, go to a folder where you want to put this project and run
`https://github.com/lpspring/cs1300-development.git`
* `cd` to `cs1300-development`
* Run `python -m SimpleHTTPServer`
* On your browser, go to `localhost:8000`

##Writeup:##
The data that is changing is the name of fruits that are filtered by the corresponding button pressed. Under the hood, when the “Warm Color” button is pressed, it updates the prop to ‘warm’, which prompts the render function to change the state to only show warm-colored fruits. On the user interface, only blocks which correspond to that button’s state shows. The data (in this case the list of all fruits) is bindable to the Search component, thereby allowing it to update state of the app depending on which buttons triggered which setState to show respective resulting list of fruits. For the overall user interface architecture, this applies to the structure principle in that related things are put together in a recognizable and consistent manner. All the fruit blocks have the same formatting that makes sense to the user. It also offers natural affordances where if a button is pressed, something happens (in this case, filtering) as expected. Finally, it also shows flexibility with different options of buttons - they can either sort in warm or cool colors, but when they want to reset to see all the fruits, they can press the “All Fruits” button to start from the beginning.

##Other notes:##
All of my components are placed in `index.jsx`. 
