input.onButtonPressed(Button.A, () => {
    basic.showString("You get an A!")
})
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
         # # # # # 
         # . . . # 
         # . . . # 
         # . . . # 
         # # # # # 
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)



})
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        . . . . . .  
        . . . . . .
        # . . . . # 
        . . . . . . 
        . . . . . . 
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)


})
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
    . . . . . 
    # . . . # 
    . . . . . 
    . # . # . 
    # . # . # 

    `)
    basic.showLeds(`
    . . . . .
    # # . # #
    . . . . .
    # . # . # 
    . # . # .
    `)
    basic.showLeds(`
    . . . . .
    # . . . #
    . . . . .
    # # # # #
    . . . . .
    `)

    basic.clearScreen()



})

