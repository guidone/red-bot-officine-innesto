import React from 'react';

import { plug } from 'code-plug';

import './style.scss';

// TODO move this to specialized plugin
import DeviceChannel from './views/device-channel';
plug(
  'device-header',
  ({ device }) => {
    return <span>255.255.255.255</span>
  },
  { label: 'IP', id: 'device-A' }
);
plug(
  'device-header',
  ({ device }) => {
    return <span>{device.payload.network.apn.name}</span>
  },
  {
    label: 'Provider',
    edit: '/network/apn',
    id: 'device-B',
    tooltip: 'Edit network params'
  }
);

plug(
  'device-channel',
  DeviceChannel
);