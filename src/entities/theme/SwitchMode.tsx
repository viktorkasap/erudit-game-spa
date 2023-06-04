import { IconMoon, IconShadow, IconSun } from '@tabler/icons-react';

import { log } from 'shared/lib';
import { Button } from 'shared/ui';

import { useColorSchema } from './model';

export const SwitchMode = () => {
  const [colorSchema, isSystemMode, switchSchemaWithLocal, switchSchemaBySystem] = useColorSchema();

  log(colorSchema);

  return (
    <div className="flex gap-4">
      <Button onClick={switchSchemaWithLocal} size="sm" color={isSystemMode ? 'mute' : 'default'}>
        {colorSchema === 'dark' ? <IconSun size="1rem" /> : <IconMoon size="1rem" />}
      </Button>
      <Button onClick={switchSchemaBySystem} size="sm" color={isSystemMode ? 'default' : 'mute'}>
        {<IconShadow size="1rem" />}
      </Button>
    </div>
  );
};
