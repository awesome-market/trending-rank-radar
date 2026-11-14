# Lucky（万吉）

**中文** | [English](README.md)

Lucky 是一款面向个人和家庭网络的工具，提供可视化 Web 管理界面，帮助你管理动态域名、内网服务访问、证书、文件服务和设备自动化。

它最初为在路由器上实现公网 IPv6 到内网 IPv4 的端口转发而开发，如今也可用于 NAS、服务器和其他设备。你可以从一个界面配置常用网络服务，而不必为每项任务分别维护一套工具。

[使用文档](https://lucky666.cn/docs/intro) · [安装与升级](https://lucky666.cn/docs/install) · [版本模块对照](https://lucky666.cn/docs/build-variants) · [下载](https://release.66666.host/) · [使用注意事项](https://66666.host/lucky-notice/)

> **关于源码：**本仓库公开的源码截至 1.4.10，后续版本暂无继续开源计划。当前发布的软件版本与本仓库中的历史源码并不相同，请勿将 Lucky 的当前版本称为开源软件。

## 能做什么

| 场景 | 功能 |
| --- | --- |
| 域名与服务访问 | 动态域名（DDNS）、Web 反向代理、重定向、静态网站、TCP/UDP 端口转发，以及 SSL/TLS 证书申请和续期。 |
| 内网穿透 | 提供 STUN、Cloudflared 和 FRP 相关功能，具体方案需要的网络条件和服务端配置各不相同。 |
| 文件与存储 | 管理存储并使用 WebDAV、Samba、FTP、FileBrowser、DLNA 和 Rclone 等功能。 |
| 设备与自动化 | 网络唤醒、计划任务、Docker 管理、Web 终端，以及 Web 服务中的轻面板。 |
| 安全与认证 | IP 过滤、安全组、Coraza WAF、第三方认证和 Passkey 管理等。 |
| 日常管理 | Web 管理界面、日志中心、配置备份与恢复。 |

功能会因**构建版本、平台和运行环境**而有所不同，部分功能可能尚未开放或需要额外配置。选择前请查看[版本模块对照](https://lucky666.cn/docs/build-variants)和[模块使用说明](https://lucky666.cn/docs/category/modules)。

## 安装

- **Linux、Windows、macOS 及路由器：**根据设备选择[官方安装方法](https://lucky666.cn/docs/install)和[对应发布包](https://release.66666.host/)。
- **OpenWrt：**参阅 [OpenWrt 安装说明](https://lucky666.cn/docs/install)和 [luci-app-lucky](https://github.com/gdy666/luci-app-lucky)。
- **NAS 与服务器：**可查看设备应用商店是否提供 Lucky，或使用 Docker。各平台的软件包和更新节奏可能不同。
- **Docker：**选择适合的镜像和网络模式；详见[官方 Docker 安装说明](https://lucky666.cn/docs/install)。

### Docker 示例

以下示例使用官方文档中的 **万吉 Docker v3 Beta** 镜像，适用于 Linux 主机网络模式。`v3` 标签会随 Beta 更新，功能和配置可能发生变化；生产环境请根据需要选择版本并先备份。

```bash
docker run -d \
  --name lucky \
  --restart=always \
  --net=host \
  -v /root/luckyconf:/app/conf \
  gdy666/lucky:v3
```

将 `/root/luckyconf` 替换为主机上的配置目录。挂载可在删除或重建容器后保留配置；升级旧容器时请先备份，并留意旧镜像的容器内配置路径可能不同。Docker 管理等功能需要额外配置和权限，请参考官方文档，不要随意暴露 Docker socket。

## 快速开始

1. 安装并启动 Lucky。默认管理地址为 `http://设备IP:16601`，默认账号和密码均为 `666`；具体以安装包及[安装文档](https://lucky666.cn/docs/install)为准。
2. 登录后及时修改默认账号和密码、设置安全入口，并限制管理后台的访问范围。安全入口不能代替身份认证或防火墙。
3. 根据需要从后台的「快速上手」开始配置 DDNS、证书、Web 服务或端口转发。外网访问还需要检查公网地址、路由器及防火墙配置。
4. 定期备份配置，尤其是在升级、迁移或降级之前；跨版本恢复时请阅读[兼容性说明](https://lucky666.cn/docs/backup-security#version-compatibility)。

## 安全与隐私

- 对外开放服务前，使用强密码和适当的身份认证，仅开放必要端口，并及时更新 Lucky 及被代理的服务。
- 不要把隐藏域名、IP、端口或安全入口当作唯一防护。Web 终端、Docker 管理和文件服务尤其需要限制访问权限。
- 根据[使用注意事项](https://66666.host/lucky-notice/)，Lucky 会上报版本号、系统类型、运行架构和随机生成的设备标识，用于了解版本及平台覆盖情况；该标识不包含 MAC 地址或硬盘序列号。使用前请阅读完整说明。

## 文档与反馈

- [官网](https://lucky666.cn/) · [基础使用说明](https://lucky666.cn/docs/category/modules) · [常见问题](https://lucky666.cn/docs/problemset)
- [官方下载](https://release.66666.host/) · [GitHub 历史发布](https://github.com/gdy666/lucky/releases)
- 问题与建议可通过 [GitHub Issues](https://github.com/gdy666/lucky/issues) 反馈。提交前请尽量提供软件版本、运行环境、问题现象和排查过程，并移除密码、令牌等敏感信息。

## 致谢

本项目的 CDN 加速及安全防护由 [Tencent EdgeOne](https://edgeone.ai/zh?from=github) 赞助。

![Tencent EdgeOne](https://edgeone.ai/media/34fe3a45-492d-4ea4-ae5d-ea1087ca7b4b.png)
