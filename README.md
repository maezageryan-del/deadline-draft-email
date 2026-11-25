# Finished On Time, In a Draft to Myself

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/maezageryan-del/deadline-draft-email/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/maezageryan-del/deadline-draft-email/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

One line excusing a missed deadline, for the [make.fun](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce) bounty **"One Line, No Deadline Met"**.

## The excuse

> I finished the work on time - it is sitting in a draft email addressed to myself, on a laptop I no longer own.

110 characters, one line, nothing else. Finished on time — just trapped in a
draft, on a laptop that no longer exists.

## How it works

`main.ts` (Node 22, standard library only) writes that exact line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no
randomness — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
