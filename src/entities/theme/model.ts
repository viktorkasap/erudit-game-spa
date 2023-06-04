import { useCallback, useEffect, useState } from 'react';

const DARK = 'dark' as const;
const LIGHT = 'light' as const;
const MODE_KEY = 'mode' as const;
const MODE_KEYBOARD_KEY = 'j' as const;
const EVENT_KEYDOWN = 'keydown' as const;
const EVENT_CHANGE = 'change' as const;

type Mode = typeof DARK | typeof LIGHT;

export const useColorSchema = (): [typeof DARK | typeof LIGHT, boolean, () => void, () => void] => {
  const storedSchema = localStorage.getItem(MODE_KEY);
  const initialMode = storedSchema ? (storedSchema as Mode) : window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;

  const [isSystemMode, setIsSystemMode] = useState(!storedSchema);
  const [schema, setSchema] = useState<Mode>(initialMode);

  const switchSchemaWithLocal = useCallback(() => {
    const colorSchema = schema === DARK ? LIGHT : DARK;

    setSchema(colorSchema);
    setIsSystemMode(false);
    localStorage.setItem(MODE_KEY, colorSchema);
  }, [schema]);

  const switchSchemaWithSystem = () => {
    setIsSystemMode(true);
    localStorage.removeItem(MODE_KEY);
    setSchema(window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT);
  };

  // set initial schema
  useEffect(() => {
    if (schema === DARK) {
      // document.documentElement.classList.remove(LIGHT);
      document.documentElement.classList.add(schema);
    }

    if (schema === LIGHT) {
      document.documentElement.classList.remove(DARK);
      // document.documentElement.classList.add(schema);
    }
  }, [schema]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === MODE_KEYBOARD_KEY && e.metaKey) {
        e.preventDefault();
        switchSchemaWithLocal();
      }
    };

    const switchSchemaAutoSystem = () => {
      if (!localStorage.getItem(MODE_KEY)) {
        setSchema(window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT);
      }
    };

    window.addEventListener(EVENT_KEYDOWN, handleKeyDown);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener(EVENT_CHANGE, switchSchemaAutoSystem);

    return () => {
      window.removeEventListener(EVENT_KEYDOWN, handleKeyDown);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener(EVENT_CHANGE, switchSchemaAutoSystem);
    };
  }, [switchSchemaWithLocal]);

  return [schema, isSystemMode, switchSchemaWithLocal, switchSchemaWithSystem];
};
