## Introduction to the Guessing Game Project

Greetings!

You are embarking on the beginning of your programming journey. How exciting! In this workhsop, you will be creating a Guessing Game. This game has simple rules:

  - A number between 1-100 will be randomly generated and is the winning number.
  - The player inputs their guess in a text input field and then submits their guess.
  - If the number they submitted is the winning number, they win! Otherwise, they are allowed to try again.
  - The game should give the player a hint after each guess, helping them know whether to guess lower or higher, and how close they are.
  - After 5 unsuccessful guesses, the game is over and the player loses.

Take a moment to open up and study [the finished product]().

While simple, there's A LOT of logic that you must figure out before the game will work. Games can be deceptively difficult. Additionally, we want to make sure our game is also visually pleasing to our player! We are not using any special tools or frameworks in this workshop--that meanst this game will be made FROM SCRATCH, which will give you an introduction to the basics of using HTML, CSS, and JavaScript.

To get started, download the starting code from [this link]().

TODO DIRECTIONS ON OPENING THE STARTER CODE
-visual studio code
-open up the folder so you can see all of the things
-right click on your index.html and open it with your favorite browser

## CSS Review - Tags, Ids, and Classes

In Visual Studio Code, or VSC, double click on the `style.css` file. Inside of this file you should see a list of CSS rule-sets. A CSS rule-set consists of a selector and a declaration block: The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.

You are going to see a lot of CSS that is unfamiliar to you. THAT IS OK. You will not be creating or modifying the CSS declarations in this workshop, just putting it all together!

The selectors inside our file will either be selecting a _tag_ (such as ul), a _class_ (such as .guess) or an _id_ (such as #app). A tag is a type of html element. For example, our `style.css` includes the following code:

```css
ul {
    list-style: none;
    padding: 0;
}
```

This means that the declarations `list-style: none;` and `padding: 0;` will be applied to ALL of the ul elements, or unordered lists in our html. We don't have to change anything!

However, right now our styles are not being applied! When our HTML is being parsed and loaded by our browser, it doesn't even know that the CSS exists! We need to tell it where to find our styles. Open up your `index.html` file and find line 7. This is where we are going to _link_ to our CSS. Type the following into line 7, and save the file:

```html
<link rel="stylesheet" href="style.css" />
```

Now, refresh your browser page. You should see your list styles change! There should be no more bullets. If you see bullets still, raise your hand to get help.

Now let's review ids and classes. An id is an identifier given to a specific element in our html. For example, our `style.css` includes the following rule-set:

```css
/* For the div that contains our full application/game */
#app {
    width: 60%;
    margin: 50px auto;
    background-color: rgba(256, 256, 256, 0.5)
}
```

This means "Find the html element with the id of 'app' and apply these styles to it". At the moment though, we don't have an element with the id of 'app'. Remember, an Id is a specific identifier. There should only ever be ONE element with the id of 'app'. Let's add it now!

In our `index.html` find the first `<div>` element after the `<body>` tag. This is going to have the id of 'app', because it contains our entire application. When we add the id 'app' to this div, it will look like this:

```html
...

<body>
  <div id="app">
...
```

Classes work almost the exact same way as ids--the big difference is that classes can be added to many different elements, instead of just one.  In our `style.css` file, there are two rule-sets that use classes as the selectors. For example:

```css
.center {
    text-align: center;
}
```

To add the class 'center' to an html element, we add a 'class' attribute to our html tag: `<div class="center">`


## Applying Styles to our Document

*YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT*

Most of our CSS rule-sets are applying rules to HTML elements with specific classes or ids. But those Ids and classes are not in the HTML in our index.html file! Add the appropriate ids and classes to your HTML so that the styles will show up. The comments above each rule-set give you a hint where the class or id should go inside your game's HTML structure.

Remember that you need to save your files AND refresh the page in your browser in order to see any changes. *You should only be modifying `index.html` during this exercise, NOT `style.css`.*

Remember to add `<link rel="stylesheet" href="style.css" />` to your index.html before continuing.

<details>
<summary>Click here to see the solution--Make sure you try on your own first!</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Guessing Game</title>

    <!-- CSS and Javascript links go here -->
    <link rel="stylesheet" href="style.css" />

  </head>
  <body>

      <div id="app">

        <div class="center">
          <h1>Play the Guessing Game!</h1>
          <h3 id="subtitle">Guess a number between 1-100!</h3>
        </div>

        <div>
          <div id="input-parent">
            <input class="center" id="player-input" maxlength='3' autofocus=autofocus></input>
            <button id="submit">Go!</button>
          </div>

          <div class="center">
            <ul id="guess-list">
              <li class="guess">-</li>
              <li class="guess">-</li>
              <li class="guess">-</li>
              <li class="guess">-</li>
              <li class="guess">-</li>
            </ul>
          </div>

        </div>
      </div>



    <div id="footer" class="center">

          <div>
            <h4>Project by YOUR NAME HERE</h4>
          </div>

        </div>
    </div>

  </body>
</html>

```

</details>

When you are done, your project should look something like this:
![stylesfinished](http://res.cloudinary.com/djv2qbdxe/image/upload/v1534290388/Screen_Shot_2018-08-14_at_7.45.14_PM_ydwh2a.png)

## Adding a Background Image

Our game is looking much better! One more detail before we move on to making our game interactive: Let's add a background! In our project folder, there is a folder called images. Take a look at all the background images inside! Choose one you like, and then we'll add a new CSS rule to `style.css` to add the image as the background.

At the very bottom of `style.css`, there is a rule that is commented out. Delete the /* and */ before and after the code. Then, replace the text 'CHOOSE_YOUR_FAVORITE_IMAGE' with the name of the image you want to use for the background.

For example:
```css
body {
    background-image: url('images/binary.jpg');
}
```

## JavaScript Review - Functions

In programming, a function is a block of code that we can run multiple times. It's like we are bundling up a behavior, and then making it so we can produce that behavior whenever we want!

I like to think of a function as a machine. For example, a microwave. You give a machine some inputs--maybe an amount of time, or a power setting, and then based on those inputs, the microwave will heat up your food. I don't actually know HOW the microwave is working, but I know that if I give the right inputs, I'll get back the right effect.

We aren't going to dive deeply into how to write or create functions today. We are going to use them as machines. Each of the functions has an input, or arguments, and either an output, or _return value_.

Here is a function that adds two numbers and returns the result. Like a calculator!

```javascript
function add(number1, number2) {
  return number1 + number2
}
```

The words `number1` and `number2` represent the values that we can give to our function. These are called arguments. When you see the `return` keyword, it means that whatever is after that will be the _output_ of the function.

In order to run this function, we will use the name of the function and then put parethesis after the name like so: `add()`. We still need our arguments though. So we will give two numbers as our arguments. The first will be `number1`, and the second will be `number2`. It will look like this: `add(1, 2)`. This will give us the retun value of 3.

Often, you will not use the numbers directly, but instead a word representing those numbers. This is called a _variable_. Study the following example:

```javascript
let number1 = 5;
let number2 = 3;
let sum = add(number1, number2);
//now number1 is 5, and number2 is 3. The return value should be 8.
// sum now is a variable that holds the return value of 8.
```
Open up `game.js`. In game.js there are many functions. You don't need to write any more functions! You will just be using the functions that already exist. Continue reading to review how to use if-else logic, and then you're ready to begin!

## JavaScript Review - Conditional Logic

Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this. You may remember the `if` and `else` keywords from lecture.

In JavaScript we can ask a question, called a condition. The program will decide if the answer to the question is true or false. Based on the response, we can run different block of code.

Use `if` to specify a block of code to be run, if a specified condition is true
Use `else` to specify a block of code to be run, if the same condition is false

First, we write `if ()` with paretheses after. Inside of these paretheses will be the condition that will result in true or false. if the condition is true, we will run the block of code after the `if` statement. If we also want to run some code when the condition is false, we can add an `else` statement. For example:

```javascript
const function isEqualTo5(num) {
  // num === 5 is called a comparison. It will equate to 'true' if num and 5 are equal, and false if they are not.
  if (num === 5) {
    return 'The num is 5!'
  } else {
    return 'The num is not 5'
  }
}

isEqualTo5(5); // This will return 'The num is 5!'
isEqualTo5(2); // This will return 'The num is not 5'

```

This is very powerful! It allows us to make decisions in our program. Another cool thing is that inside of each code block, we can make MORE if/else statements!



## Running Our JavaScript Code

Before we start writing our JavaScript code, we need to make sure it will run! Remember that only our index.html is being opened by the browser. It has no idea that there is JavaScript code we want it to run too!

Jump to the top of your `index.html` file where you have a `<link />` tag linking to your css file. Right underneath that, add this line to run your JavaScript file:

```html
<script src="game.js" defer></script>
```
Now when you open your index.html file with a browser, it will also go and find your `game.js` JavaScript file.

## Putting It All Together

Now for the big finale! Inside of `game.js` there are many functions. Two of them are a bit special. First, let's talk about `playGame`.

`playGame` is special because it's the only function that's being run in our code right now. At the very end, you can see that we are calling, or invoking, `playGame()`. Remember, the parenthesis at the end mean that we are running the function!

`playGame` does some important stuff:
  - First it creates a winning number randomly
  - Then it listens for when the player clicks our submit button
  - When the player clicks the button, we are going to run the `checkGuess` function.

YOU are going to write `checkGuess`, using all the functions that are already pre-defined. Let's plan out everything that this function needs to do. This is called _psuedocode_.

```javaScript
function checkGuess(playersGuess, winningNumber, pastGuesses) {
    // Is playersGuess the winning number?
      // Yes - The player wins!
      // No - Is the playersGuess in pastGuesses?
         // Yes - That number has been guessed before! Ask the user to guess again
         // No - Is that the last (5th) guess?
           // Yes - The player loses
           // No - How far away from the winning number was the Guess?
             // Display to the user whether they are hot or cold, so they can guess again!

}
```

For each of these decision points, you will need an if/else statement, and at least one of the functions defined in `game.js`. Don't be afraid to ask for help!

<details>
<summary>Click here to see the solution--Make sure you try on your own first!</summary>

```javascript

function checkGuess(playersGuess, winningNumber, pastGuesses) {

    if (isWinningGuess(playersGuess, winningNumber)) {
        youWin();
    } else {
        if (isPastGuess(playersGuess, pastGuesses)) {
            updateText('You have guessed that number already! Guess a different number.');
        } else {
            addWrongGuessToPastGuesses(playersGuess, pastGuesses);
            if(isGameOver(pastGuesses)) {
                youLose();
            } else {
                const text = howClose(playersGuess, winningNumber);
                updateText(text);
            }
        }
    }
}

```

</details>

Congratulations! You've programmed a web game!
