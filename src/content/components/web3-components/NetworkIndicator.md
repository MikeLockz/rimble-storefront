---
title: Network Indicator
componentName: NetworkIndicator
---

import NetworkIndicator from "@rimble/network-indicator";
import {
Tooltip,
Flash,
Pill,
Field,
Box,
Icon,
Text,
Link,
Heading,
ToastMessage,
Button
} from "rimble-ui";
import DoDont from "../../../components/documentation/DoDont";
import PropsTable from "../../../components/propstable";

# Network Indicator

React component built with [Rimble UI](https://github.com/ConsenSys/rimble-ui) that will display the current Ethereum network name based on a given network ID and optionally display and icon and tooltip indicating whether the user is on the correct network for the application.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @rimble/network-indicator

// with yarn
yarn add @rimble/network-indicator
```

## Usage Example

**Default**

```js is=react-live
<NetworkIndicator currentNetwork={3} />
```

**Has requiredNetwork prop**

```js is=react-live
<NetworkIndicator currentNetwork={3} requiredNetwork={1} />
```

**Custom tooltips for default**

```js is=react-live
<NetworkIndicator currentNetwork={1}>
  {{
    onNetworkMessage: "Connected to correct network",
    noNetworkMessage: "Not connected to anything"
  }}
</NetworkIndicator>
```

**Custom tooltips with requiredNetwork prop**

```js is=react-live
<NetworkIndicator currentNetwork={null} requiredNetwork={1}>
  {{
    onNetworkMessage: "Connected to correct network",
    noNetworkMessage: "Not connected to anything",
    onWrongNetworkMessage: "Wrong network"
  }}
</NetworkIndicator>
```

## Props

<PropsTable propMetaData={props.propMetaData} />

**Default Messages**

**onNetworkMessage**

Only when `requiredNetwork` exists and matches `currentNetwork` prop

> You're on the right network

**noNetworkMessage**

> You're not on an Ethereum network

**onWrongNetworkMessage**

> You're on the wrong network
