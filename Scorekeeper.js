let PlayerAWins = 0
let PlayerBWins = 0
let PlayersTie = 0

input.onButtonPressed(Button.A, () => {
    PlayerAWins += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    PlayerBWins += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()

})
input.onButtonPressed(Button.AB, () => {
    PlayersTie += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, () => {
    basic.showString("Games Played")
    basic.showNumber(PlayerAWins + PlayerBWins + PlayersTie)
    basic.pause(1000)
    basic.showString("Wins")
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showNumber(PlayerAWins)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showNumber(PlayerBWins)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showNumber(PlayersTie)
    basic.pause(1000)
    basic.showString("Good Game!")
    basic.clearScreen()

})
