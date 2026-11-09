import ae.display.DisplayPolicy

fun main() {
    for (display in listOf(true, false)) {
        check(DisplayPolicy.canAct(display) == !display)
        check(DisplayPolicy.canCapture(display) == !display)
        check(DisplayPolicy.canSeePrivate(display) == !display)
    }
    println("Display policy checks passed")
}
