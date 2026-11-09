export type SessionMode = "player" | "board";

export function createMode(initial: SessionMode, eventName: string): {
  current: () => SessionMode;
  publish: (next: SessionMode) => void;
} {
  let mode = initial;
  return {
    current: () => mode,
    publish(next) {
      mode = next;
      document.documentElement.dataset.mode = mode;
      window.dispatchEvent(new CustomEvent(eventName, { detail: { mode } }));
    },
  };
}

export function displayCapabilities(display: boolean) {
  return { canAct: !display, canCapture: !display, canSeePrivate: !display };
}
