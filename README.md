## readme

## html

* elements with beginning, middle and end have closing tag
  * ```<h1>title here ...<h1>```
* elements without beginning, middle and end do not have a closing tag
  * ```<meta charset='utf-8'>```
  * ```<img src='...' />```
    * old approach, it is not necessary to put a slash at the end of the tag

* global attribute to specify language
  * ```<html lang='pt-br'>...</html>```
* tag to specify the language within other elements
  * ```<em lang='en'>...</em>```

* meaning of tags
  * ```<nav>``` navigation
  * ```<a>``` anchor

* divs
  * use divs only when tags have no semantic values

## css

* color system
  * rgb - red, green and blue - based in light
    * hexadecimal - 0 to f
    * ```#7c5e99```
      * ```7c``` represents the red
      * ```5e``` represents the green
      * ```99``` represents the blue
    * when the pairs are equal it is possible to summarize
      * ```#000000``` equals black
        * ```#000``` short form
      * ```#ffffff``` equals white
        * ```#fff``` short form
      * ```#00ff00``` equals green
        * ```#0f0``` short form
  * decimal - 0 to 255
    * ```rgb(124, 94, 153)```
      * ```124``` represents the red
      * ```94``` represents the green
      * ```153``` represents the blue

* font with serif and without serif
  * ```_A_``` serif
  * ```A``` sans-serif

* display property
  * everything in html is a square
    * inline
      * same line
      * the elements stays side by side
      * does not allow defining width and height
      * word behavior, breaklines are spaces
    * block
      * fills all line
      * does allow defining width and height
    * inline-block
      * the combination of the previous two
    * flex
      * to align child elements horizontally

* padding and margin
  * added padding in all sides, increases the size of the element
  * ```padding: 18px 20px``` indicate that top and bottom have 18 pixels and right and left have 20 pixels
  * clockwise

* offset
  * ```x``` equals horizontal
  * ```y``` equals vertical

* line-height
  * ```1.4``` multiplicator of 40% of size font

* size and alignment strategy
  * use padding to set the size of the parent element
  * align child elements with parent element properties

* use the gpu to animate the css
  * transform
  * opacity

* ```box-sizing: border-box``` does not increase margin values ​​by the element size

* ```@media``` have as default property ```screen```