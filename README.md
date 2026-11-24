# Why the Vacuum Missed That Spot

[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/Erwinsays12/makefun-robot-vacuum-excuse/rank.svg)](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/Erwinsays12/makefun-robot-vacuum-excuse/reward.svg)](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

An entry for [The Robot Vacuum's Best Excuse](https://make.fun/c/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214) on [make.fun](https://make.fun).

## What it does

`main.ts` writes one line — the funniest one-line excuse a robot vacuum
could give for missing a spot — to `/output/entry.txt`. The line is fixed
and deterministic: the same excuse on every run, no input, no clock, no
network.

> I didn't miss that spot — my lidar filed your crumbs under 'furniture', and I don't vacuum furniture.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later. The program validates its own output before
writing: exactly one line, 1–140 characters, UTF-8 text.
