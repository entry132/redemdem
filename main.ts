input.onButtonPressed(Button.A, function () {
    if (리듬듬.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else {
        빛나감 += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(game.score() - 빛나감)
    빛나감 = 0
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    if (리듬리.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        빛나감 += 1
    }
})
let 랜덤왼 = 0
let 랜덤오 = 0
let 기다리기 = 0
let 빛나감 = 0
let 리듬리: game.LedSprite = null
let 리듬듬: game.LedSprite = null
리듬듬 = game.createSprite(0, 0)
리듬리 = game.createSprite(4, 0)
basic.forever(function () {
    basic.pause(400)
    기다리기 = 1
})
basic.forever(function () {
    if (기다리기 == 1) {
        basic.pause(200)
        리듬리.change(LedSpriteProperty.Y, 1)
        if (리듬리.get(LedSpriteProperty.Y) == 4) {
            basic.pause(200)
            리듬리.delete()
            랜덤오 = randint(1, 4)
            if (true) {
                if (랜덤오 == 1) {
                    basic.pause(200)
                }
                if (랜덤오 == 2) {
                    basic.pause(200)
                }
                if (랜덤오 == 3) {
                    basic.pause(400)
                }
                if (랜덤오 == 4) {
                    basic.pause(600)
                }
                리듬리 = game.createSprite(4, 0)
            } else {
                basic.pause(200)
                리듬리 = game.createSprite(4, 0)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(200)
    리듬듬.change(LedSpriteProperty.Y, 1)
    if (리듬듬.get(LedSpriteProperty.Y) == 4) {
        basic.pause(200)
        리듬듬.delete()
        랜덤왼 = randint(1, 3)
        if (true) {
            if (랜덤왼 == 1) {
                basic.pause(200)
            }
            if (랜덤왼 == 2) {
                basic.pause(400)
            }
            if (랜덤왼 == 3) {
                basic.pause(600)
            }
            리듬듬 = game.createSprite(0, 0)
        } else {
            basic.pause(200)
            리듬듬 = game.createSprite(0, 0)
        }
    }
})
