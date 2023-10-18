Notes for 03:

I wrestled with the search function for count.js, and used a few tools on W3 to get it to work (REGEX). I had issues with it
highlighting ALL of the words that had the string in it, I.E.: if I entered 'it', the program would highlight all the 'it'
strings in the text but would also highlight words like 'authorities' because of the 'it' string inside of it. My second
foray through this would highlight all of the strings of 'it', even if it was inside of a word like authorities. This was
a step in the right direction, but still not what I was hoping for, as 'in' in the examples highlight all occurences of 'in',
but do not highlight the matching string inside 'wINter'.
Eventually I got it to highlight only occurences of the word, in it's entirity, that I was looking for.
POST TUESDAY-CLASS NOTE: Using trim and split I was able to clean up some of my implementation.
