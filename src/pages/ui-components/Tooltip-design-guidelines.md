---
title: Tooltip
---

import {Tooltip, Pill, Field, Box, Icon, Text, Link, Heading, ToastMessage, Button} from "rimble-ui"
import DoDont from "../../components/documentation/DoDont";

# Tooltip design guidelines

Use the `Tooltip` component to provide supporting explanation about a piece of the UI or a term used in the copy.

*Want to build this component?* Read [`Tooltip` documentation](/Develop/Tooltip)

## Design and content

Some best practices for using `Tooltip` in your product.

### Tooltips are for supporting information

They're for extra information that some might find useful but don't necessarily need to be on the interface for everyone. Tooltip information is hidden by default so shouldn't contain anything critical to someone using your product. For example, if you hover over a piece of UI that indicates your network status...

<DoDont>
  {{
    positive: (
    <Tooltip
              placement="right"
              variant="dark"
              message="You're on the Rinkeby network"
            >
              <Button.Text icon="Check">Right network</Button.Text>
            </Tooltip>
    ),
    negative: (
    <Tooltip
              placement="right"
              variant="dark"
              message="To use this dApp you must be on the Rinkeby network"
            >
              <Button.Text icon="Warning">Wrong network</Button.Text>
            </Tooltip>
    ),
  }}
</DoDont>

### Tooltips aren't labels

Tooltips are for elaboration. Labels next to UI elements are always better than tooltips as it is not always clear that tooltips are there. And it's not always possible to hover.

<DoDont>
  {{
    positive: (
    <Tooltip
              placement="bottom"
              variant="light"
              message="This will start the transaction"
            >
              <Button.Outline icon="Send">Send Ether</Button.Outline>
            </Tooltip>
    ),
    negative: (
    <Tooltip placement="bottom" variant="light" message="Send Ether">
              <Button.Outline icon="Send" />
            </Tooltip>
    ),
  }}
</DoDont>

### Keep tooltips short

Don't include too much text in a tooltip. They're for short clarification or elaboration. If you need more than a couple of sentences, consider using a [`modal`](/Develop/Modal).

### Some suggested uses

<Tooltip
placement="bottom"
variant="light"
message="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2"

> <Pill>{'0x99...7d2'}</Pill>
> </Tooltip>

<Text mt={3}>
  This will include a small{' '}
  <Tooltip message="This pays for your transaction to be added to the blockchain">
    <strong>transaction fee </strong>
  </Tooltip>{' '}
   which we'll include in your transaction summary
</Text>
