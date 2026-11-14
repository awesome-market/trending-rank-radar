# Lucky (Wanji)

[中文](README.zh-CN.md) | **English**

Lucky is a networking tool for personal and home networks. Its web-based management interface helps you manage dynamic DNS, access to local services, certificates, file services, and device automation.

Originally created to forward traffic from public IPv6 to private IPv4 devices on a router, Lucky can also run on NAS devices, servers, and other platforms. It brings common networking tasks together in one interface.

[Documentation](https://lucky666.cn/docs/intro) · [Installation and upgrades](https://lucky666.cn/docs/install) · [Build comparison](https://lucky666.cn/docs/build-variants) · [Downloads](https://release.66666.host/) · [Important usage notes](https://66666.host/lucky-notice/)

> **Source availability:** The source published in this repository only covers versions through 1.4.10. There are currently no plans to open-source subsequent versions. Current software releases differ from the historical source in this repository and should not be described as open source.

## What Lucky can do

| Use case | Features |
| --- | --- |
| Domains and service access | Dynamic DNS (DDNS), web reverse proxying, redirects, static websites, TCP/UDP port forwarding, and SSL/TLS certificate issuance and renewal. |
| NAT traversal | STUN, Cloudflared, and FRP functionality. Network requirements and server configuration depend on the chosen solution. |
| Files and storage | Storage management and services including WebDAV, Samba, FTP, FileBrowser, DLNA, and Rclone. |
| Devices and automation | Wake-on-LAN, scheduled tasks, Docker management, a web terminal, and the light panel available through Web Services. |
| Security and authentication | IP filtering, security groups, Coraza WAF, third-party authentication, and Passkey management. |
| Administration | A web management interface, centralized logs, and configuration backup and restore. |

Availability depends on the **build, platform, and runtime environment**. Some features may not yet be available or may require additional configuration. See the [build comparison](https://lucky666.cn/docs/build-variants) and [module documentation](https://lucky666.cn/docs/category/modules) before choosing a build.

## Installation

- **Linux, Windows, macOS, and routers:** Choose the appropriate [official installation method](https://lucky666.cn/docs/install) and [release package](https://release.66666.host/) for your device.
- **OpenWrt:** See the [OpenWrt installation instructions](https://lucky666.cn/docs/install) and [luci-app-lucky](https://github.com/gdy666/luci-app-lucky).
- **NAS and servers:** Check your device's app store for Lucky, or use Docker. Packages and update schedules may vary by platform.
- **Docker:** Select the appropriate image and networking mode; see the [official Docker installation instructions](https://lucky666.cn/docs/install).

### Docker example

This example uses the **Wanji Docker v3 Beta** image from the official documentation with Linux host networking. The `v3` tag follows Beta updates, so features and configuration may change. Choose a version appropriate for your environment and back up your configuration first.

```bash
docker run -d \
  --name lucky \
  --restart=always \
  --net=host \
  -v /root/luckyconf:/app/conf \
  gdy666/lucky:v3
```

Replace `/root/luckyconf` with a configuration directory on the host. The mount preserves configuration when the container is removed or recreated. Back up before upgrading an older container, and note that older images may use a different configuration path inside the container. Docker management and similar features require additional configuration and permissions; consult the official documentation and do not expose the Docker socket unnecessarily.

## Getting started

1. Install and start Lucky. The default management address is `http://DEVICE_IP:16601`; the default username and password are both `666`. Check your package and the [installation documentation](https://lucky666.cn/docs/install) for details.
2. After signing in, change the default credentials, set a security entry path, and restrict access to the management interface. A security entry path is not a substitute for authentication or a firewall.
3. Use **Quick Start** in the management interface to configure DDNS, certificates, Web Services, or port forwarding as needed. External access also depends on your public address, router, and firewall configuration.
4. Back up your configuration regularly, especially before upgrading, migrating, or downgrading. Read the [compatibility guidance](https://lucky666.cn/docs/backup-security#version-compatibility) before restoring across versions.

## Security and privacy

- Before exposing a service, use strong passwords and appropriate authentication, open only necessary ports, and keep both Lucky and the services it proxies up to date.
- Do not rely on hidden domains, IP addresses, ports, or security entry paths as your only protection. Restrict access to the web terminal, Docker management, and file services in particular.
- According to the [usage notes](https://66666.host/lucky-notice/), Lucky reports its version, operating system type, architecture, and a randomly generated device identifier to understand version and platform coverage. The identifier does not contain a MAC address or disk serial number. Please read the full notice before use.

## Documentation and feedback

- [Official website](https://lucky666.cn/) · [Module documentation](https://lucky666.cn/docs/category/modules) · [FAQ](https://lucky666.cn/docs/problemset)
- [Official downloads](https://release.66666.host/) · [Historical GitHub releases](https://github.com/gdy666/lucky/releases)
- Report problems and suggestions through [GitHub Issues](https://github.com/gdy666/lucky/issues). Include the software version, environment, symptoms, and troubleshooting steps where possible, and remove passwords, tokens, and other sensitive information.

## Acknowledgments

CDN acceleration and security protection for this project are sponsored by [Tencent EdgeOne](https://edgeone.ai/zh?from=github).

![Tencent EdgeOne](https://edgeone.ai/media/34fe3a45-492d-4ea4-ae5d-ea1087ca7b4b.png)
