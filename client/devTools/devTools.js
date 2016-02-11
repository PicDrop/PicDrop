import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               visibleOnLoad={false}
               changePositionKey="ctrl-w">
    <LogMonitor visibleOnLoad={false} theme="tomorrow" />
  </DockMonitor>
);

export default DevTools;
