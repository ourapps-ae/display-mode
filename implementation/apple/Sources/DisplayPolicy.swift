public enum DisplayPolicy {
    public static func canAct(_ display: Bool) -> Bool { !display }
    public static func canCapture(_ display: Bool) -> Bool { !display }
    public static func canSeePrivate(_ display: Bool) -> Bool { !display }
}
