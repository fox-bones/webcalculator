# webcalculator

This is a (nearly) fully function web caclulator displaying an understanding of html, css, and js as a unified element. It does have some short comings with certain calculations, most notably complex operations with with more than one operator. Order of operations was never implemented, and as such the calculator returns NaN on calculations that are very much possible, or it will use the plus operator to append numbers to a greater equation, then multiply or divide everything. A good example is 2 * 3 + 4 will return 27. In this case, the calculator has chosen to multiply everything, rather than approach the equation as two seperate jobs, because the first operator used was multiplication (*).

Regarding longer numbers, the screen will stretch to compensate for length.

Nevertheless, it is a charming project I enjoyed using to understand complex JS. With more projects regarding game development and website design, I've decided to store this one in the archives for later. 