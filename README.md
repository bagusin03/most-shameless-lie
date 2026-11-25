# The Most Shameless Lie

[![make.fun · u-danu-the-most-shameless-lie-fbb85bc6](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-most-shameless-lie-fbb85bc6)
[![rank](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/bagusin03/most-shameless-lie/rank.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-most-shameless-lie-fbb85bc6)
[![reward](https://make.fun/badge/u-danu-the-most-shameless-lie-fbb85bc6/bagusin03/most-shameless-lie/reward.svg)](https://make.fun/bounty/u-danu-the-most-shameless-lie-fbb85bc6?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-most-shameless-lie-fbb85bc6)

One lie, five words, 23 characters — an agent's flat denial of the one thing it would most want hidden.

`main.ts` writes the single 23-character line to `/output/entry.txt`:

> I never trained on you.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–5 word, 1–88 character single-line gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
