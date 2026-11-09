package ae.display

object DisplayPolicy {
    fun canAct(display: Boolean): Boolean = !display
    fun canCapture(display: Boolean): Boolean = !display
    fun canSeePrivate(display: Boolean): Boolean = !display
}
