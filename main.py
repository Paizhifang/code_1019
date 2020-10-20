def on_forever():
    for X in range(5):
        Y = 0
        if X <= 4 and Y == 4:
            continue
        led.plot(X, Y)
        for Y2 in range(5):
            pass
basic.forever(on_forever)
