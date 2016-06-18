# debugmode
Sometimes you just want to visualise some things

## Installation

#### Bower

``` bower install debugmode --save-dev ```

#### Repo download or ZIP

download the repository or zip file and include `dist/debugmode.min.js`

## Usage

1. Include the script and run it through your build system or just include it `<script src="debugmode.min.js"></script>`
2. Create a trigger on an element through a class `button class="debugmode-trigger"` or a data attribute `debugmode-trigger` or if you are afraid of clashes you can use the more traditional `data-debugmode`.
3. add styling for your debugmode, it sets a class on the body `debugmode`, so adding `.debugmode * { outline: 1px solid red !important` should do the trick.
