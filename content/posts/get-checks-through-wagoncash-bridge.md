---
title: "Get Checks through Wagon.cash Bridge"
date: 2021-10-20T01:05:08+01:00
draft: false
---

To test the new version of [CheckBook DApp](https://www.checkbook.cash/app), we are giving out checks together with [wagon.cash](https://wagon.cash), a BCH-to-smartBCH bridge.

The rule is simple: for each cross-chain transfer through [wagon.cash](https://wagon.cash), a check with some $CATS will also be sent to the receiver of cross-chain BCH. The rule does not take the transfer amount or the status of the receiver into account. And the count is not limited: a receiver can get multiple checks if she transferred BCH through wagon.cash for multiple times.

The check's $CATS amount is decided by a pseudo-random algorithm: pick a random integer a from the range [0, 9999], and b, [10, 9999]; then calculate the amount as: `(a<b)? N*(1+7200.0/b) : N*(1+a*0.72/10000.0)`. Currently, 50 is choosen for N, so the amount is in the range [50, 36050].

We prepared 5 Million $CATS for this event. Checks will be kept given out until all of these $CATS are used out. Before that, we may change the value of N according to the price of $CATS.

Good Luck in getting your checks!

-------------

Updated on Thu Nov 4 14:08:18 UTC 2021

Since the tranffic through wagon.cash is too busy, its maintainer is very hard to scale it up to support so many cross-chain transfers. We have to add one more rule to reduce the traffic: a cheque is only sent when the transfer amount is no less than 0.1 BCH. Sorry for any inconvenience!
