let x = 0
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    x = input.acceleration(Dimension.X)
    music.changeTempoBy(x)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("D G F E D G F E ", 120), music.PlaybackMode.UntilDone)
    x = input.acceleration(Dimension.X)
    music.changeTempoBy(x)
})
