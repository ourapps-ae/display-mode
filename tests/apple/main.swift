for display in [true, false] {
    precondition(DisplayPolicy.canAct(display) == !display)
    precondition(DisplayPolicy.canCapture(display) == !display)
    precondition(DisplayPolicy.canSeePrivate(display) == !display)
}
print("Display policy checks passed")
