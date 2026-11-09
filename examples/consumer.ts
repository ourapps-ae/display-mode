import { createMode, displayCapabilities } from '../implementation/web/mode';

export const mode = createMode('player', 'example:mode');
export const mayCapture = () => displayCapabilities(mode.current() === 'board').canCapture;
