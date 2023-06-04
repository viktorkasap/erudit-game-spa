/**
 * Printing log in developments mode only
 * @param args
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = function (...args: any[]): void {
  if (import.meta.env.MODE !== 'development') {
    return;
  }

  const error = new Error();
  const stackLines = error.stack?.split('\n');

  if (stackLines && stackLines.length > 2) {
    const callerFile = stackLines[1].split('@')[0];
    const callerFunction = stackLines[2].split('@')[0];

    window.console.log('⚡', callerFile, '👉', callerFunction);
    window.console.log('ℹ️', ...args);
    window.console.log('\n');
  } else {
    window.console.log('🚧', ...args);
    window.console.log('\n');
  }
};
