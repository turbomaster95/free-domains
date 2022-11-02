<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/tarampampam/free-domains/image?description=1&font=Raleway&forks=1&issues=1&owner=0&pulls=1&pattern=Solid&stargazers=1&theme=Dark">
    <img src="https://socialify.git.ci/tarampampam/free-domains/image?description=1&font=Raleway&forks=1&issues=1&owner=0&pulls=1&pattern=Solid&stargazers=1&theme=Light">
  </picture>
  <br/>
  <br/>

[![Tests Status][badge-tests]][actions]
[![Deploy Status][badge-deploy]][deploy]
</div>

Free subdomains for personal sites, open-source projects, and more. Here is a list of supported domain names:

|              Domain name              |                         Features                          |
|:-------------------------------------:|:---------------------------------------------------------:|
| ⚡ [`*.is-an.app`](https://is-an.app/) | ![cf][badge-cf] ![dnssec][badge-dnssec] ![ssl][badge-ssl] |
|             ⚡ `*.1bt.uk`              |          ![cf][badge-cf] ![dnssec][badge-dnssec]          |

> Wildcards (like `*.foo.is-an.app`) are supported too, but the reason for their registration should be very clear and described in detail.

[badge-cf]:https://shields.io/badge/%20-cloudflare-blue?logo=cloudflare&style=plastic?cacheSeconds=3600
[badge-dnssec]:https://shields.io/badge/%20-DNSSEC-blue?logo=moleculer&logoColor=white&style=plastic?cacheSeconds=3600
[badge-ssl]:https://shields.io/badge/SSL-Required-blue?style=plastic?cacheSeconds=3600

## Why?

First of all, I want to answer one important question - "Why are you giving out domains for free?". Because sometimes I need domains for my home projects, and instead of buying new domains every time, I decided to buy one for everyone, and use subdomains. And why not share them with the community?

## Domains settings

|                    Option                     |       `*.is-an.app`       |        `*.1bt.uk`         |
|:---------------------------------------------:|:-------------------------:|:-------------------------:|
|               [DNSSEC][dnssec]                |             ✅             |             ✅             |
|                     Email                     |             ❌             |             ❌             |
|                   SSL/TLS *                   |     [Full][ssl-full]      |   [Flexible][ssl-flex]    |
|              Always Use HTTPS *               |             ✅             |             ❌             |
|     HTTP Strict Transport Security (HSTS)     |             ✅             |             ❌             |
|             Minimum TLS Version *             |          TLS 1.2          |          TLS 1.2          |
|          Opportunistic Encryption *           |             ✅             |             ✅             |
|                   TLS 1.3 *                   |             ✅             |             ✅             |
|       WAF (Web Application Firewall) *        | ✅ (Medium Security Level) | ✅ (Medium Security Level) |
|           Browser Integrity Check *           |             ✅             |             ✅             |
|       [Caching Level][caching-levels] *       |         Standard          |         Standard          |
|              Browser Cache TTL *              |          4 hours          |          4 hours          |
|       [Crawler Hints][crawler-hints] *        |             ✅             |             ✅             |
|               [HTTP/2][http2] *               |             ✅             |             ✅             |
|     [HTTP/2 to Origin][http2-to-origin] *     |             ✅             |             ✅             |
|             HTTP/3 (with QUIC) *              |             ✅             |             ✅             |
|     [0-RTT Connection Resumption][0rtt] *     |             ✅             |             ✅             |
|                [gRPC][grpc] *                 |             ✅             |             ✅             |
|                 WebSockets *                  |             ✅             |             ✅             |
|         [Pseudo IPv4][pseudo-ipv4] *          |        Add header         |        Add header         |
| IP Geolocation (HTTP header `CF-IPCountry`) * |             ✅             |             ✅             |
|             Maximum Upload Size *             |          100 MB           |          100 MB           |

> * Available only when proxying (`"proxy": true`) is enabled

[dnssec]:https://developers.cloudflare.com/dns/additional-options/dnssec
[ssl-full]:https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/
[ssl-flex]:https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/flexible/
[caching-levels]:https://developers.cloudflare.com/cache/how-to/set-caching-levels
[crawler-hints]:https://blog.cloudflare.com/crawler-hints-how-cloudflare-is-reducing-the-environmental-impact-of-web-searches/
[http2]:https://www.cloudflare.com/website-optimization/http2/what-is-http2/
[http2-to-origin]:https://developers.cloudflare.com/cache/how-to/enable-http2-to-origin
[0rtt]:https://developers.cloudflare.com/fundamentals/network/0-rtt-connection-resumption/
[grpc]:https://support.cloudflare.com/hc/en-us/articles/360050483011
[pseudo-ipv4]:https://support.cloudflare.com/hc/en-us/articles/229666767

# How to get one?

1. Star and [fork](https://github.com/tarampampam/free-domains/fork) this repository
2. Add a new file called `your-domain-name.json` in the `./domains` folder to register `your-domain-name` subdomain
3. Edit it:

```json5
{
  "$schema": "../schemas/domain.schema.json",
  "description": "My personal project",
  "domain": "is-an.app", // or "1bt.uk"
  "subdomain": "your-domain-name",
  "owner": {
    "repo": "https://github.com/user/repo",
    "email": "my@email.com" // optional
  },
  "record": {
    "CNAME": "user.github.io.",
    //"TXT": ["..."],
    //"A": ["127.0.0.1"],
    //"AAAA": ["::1"],
    //"NS": ["..."],
  },
  "proxy": false // disable CF proxy, true by default
}
```

4. Your pull request will be reviewed and merged. _Make sure to keep an eye on it in case we need you to make any changes!_
5. After the pull request is merged, please allow up to 24 hours for the changes to propagate _(usually, it takes 5..15 minutes)_
6. Enjoy your new domain!

## If you don't know...

- What is GitHub pages and how to set up a custom domain, read the [docs here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- The difference between `A`, `CNAME`, and other record types, the article on Wikipedia [is here](https://en.wikipedia.org/wiki/List_of_DNS_record_types)

> 🔍 A few similar services can be [found here](https://free-for.dev/#/?id=domain).

[badge-tests]:https://img.shields.io/github/workflow/status/tarampampam/free-domains/tests?label=tests&logo=github&style=for-the-badge
[badge-deploy]:https://img.shields.io/github/workflow/status/tarampampam/free-domains/deploy?label=deploy&logo=github&style=for-the-badge

[actions]:https://github.com/tarampampam/free-domains/actions
[deploy]:https://github.com/tarampampam/free-domains/actions/workflows/deploy.yml
