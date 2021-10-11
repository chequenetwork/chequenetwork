---
title: "Other Usages of Blockchain Cheques"
date: 2021-10-11T07:45:48+08:00
draft: false
---

Besides airdropping, blockchain cheques can be useful in several other scenarios. It is not the best solution for these scenarios, but it can be good enough. Here we introduce some of such scenarios. For each one of them, it's possible to develop a dedicated DApp which does a better job than blockchain cheque. However, each DApp needs time and human resource to develop, and time to gain trust of its users. You know that DApps are dangerous. When a DApp asks you to sign a transaction, in most cases you cannot fully understand what it does. You just trust it and believe that it will not do you any harm.

We are not 100% confident that the blockchain cheque is good enough in the following scenarios. But if it is, it can save a lot of effort by avoiding to build a new DApp. So let's begin to describe these scenarios.

### Tipping

Tipping is one of the basic usages of cryptocurrencies. When you post an excellent video or article online, you attach your address onto the web page and ask the audiences to tip you some cryptocurrency. With blockchain cheques,  you can attach a URL like following to the web page for tipping:

```
https://app.checkbook.cash/write?coin=0x265bD28d79400D55a1665707Fa14A72978FA6043&to=0x05dd8925dbeF0aeCeC5B68032A0691076A92Ea41&amount=2&tag=20211011A
```

After clicking this link, an audience is led to a page of app.checkbook.cash, the token's address, the receiver's address and the amount is already filled automatically. The audience can adjust the amount and then click "submit" to finish the tipping. The tag field is also filled, which can help you identify which video or article prompts this audience to tip you.

Furthermore, after a week, you can pick one audience who has tipped you with this tag, and reward her with an NFT made from this video or article.

### Voting

On-chain governance is very common for DeFi nowadays. Token holders can vote to decide some issues. But there are a lot of tokens without built-in governance support. As far as we know, the $CATS, KTH and ARG tokens on smartBCH does not have governance support.

For these tokens, blockchain cheque can be a universal and lightweight voting method. For a given issue, just pick an hashed address which nobody owns its private key. Then the holders can send cheques to this address, attaching different tags to support different options. At a predefined moment, the holders together check the accumulated token amount sent to each option (tag), and the option with most token wins out. After this moment, the cheques expire and the voters can take back the tokens by revoking the cheques.

### Crowd Funding

Maybe you have been familiar with the crowd-funding tool flip starter.cash on Bitcoin Cash main chain. Currently, there is no similar tool on smartBCH side chain to support SEP20 tokens.

You can take blockchain cheque as a crowd-funding tool, by asking the supporters to send you cheques with given token and tag. If the accumulated amount of the cheques with the given tag is higher than your target value, you accept all the cheques and the campaign succeeds. If the amount is lower, you refuse all the cheques and the supporters can get back their tokens.

### Auction

Suppose you have some old sports collectibles and want to sell each item to the guy who is willing to pay highest price. You assign a tag to each item and any one who wants it sends you a cheque with this tag. For each item (tag), you accept the cheque with highest amount and refuse the others.

### Over-the-Counter

You want to give Alice some SEP20 tokens in exchange of her fiat money, but you cannot fully trust her. So, both of you find a third person as the arbitrator. First, you send Alice the tokens in a cheque with a secret tag, and tell the arbitrator what the secret tag is. The arbitrator verifies the secret tag with `eth_call` and then confirm to Alice that she can send you the fiat money. When you safely get the money, you tell Alice the secret tag.

If there is any argument between you and Alice, the arbitrator will check the evidences you two provide, and decide whether to tell Alice your secret tag.

### Sell Tickets

You want to earn coins by sharing some knowledge through an online zoom meeting. So you sell tickets to a small number of audience. Each audience must pay you cheques with a predefined tag. And you reply to each audience with a cheque whose memo contains the meeting number and password.

If the number of audience is limited to 100, you just accept the first 100 cheques and refuse the later ones.

### Multi-level marketing

You are promoting a hair dryer from vendor X, by sending cheques to the potential customers. These cheques have memos guiding the receivers to view an introduction video, which also tells receivers which secret tag can be used to accept these cheques.

The number of receivers who successfully accept the cheques can be checked on chain, by both your and vendor X. So vendor X cannot lie to you about how many potential customers finish viewing the introduction video.

### Pay for knowledge

If some expert is willing to answer your questions in some fields, you can pay her some coins with a cheque, whose memo contains your question. And she will reply to you with another cheque, whose memo contains the answer.



