# StencilJS Issue

Demo project for showcasing an issue with Stencil slotting

## Setup

Use the following command:

- `nmp i`
- `npm run build`

## Reproducing The Bug

Open the file `./src/html/index.html` in Chrome, Edge or Firefox on a Windows machine, with a moderate CPU. The site renders two web-components quite a few times to increase the chance of the bug happening.

Each rendered item is expected to loook like this:

![plot](./res/expected.png)

If the bug occurs, some parts will not be slotted in correctly.