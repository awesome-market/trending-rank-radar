# awesome-zsh-plugins

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

## Status

[![License](https://img.shields.io/github/license/unixorn/awesome-zsh-plugins.svg)](https://opensource.org/license/BSD-3-Clause)
![Awesomebot](https://github.com/unixorn/awesome-zsh-plugins/actions/workflows/awesomebot.yml/badge.svg)
![Contributors](https://img.shields.io/github/contributors/unixorn/awesome-zsh-plugins.svg)
[![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/awesome-zsh-plugins/main.svg)](https://github.com/unixorn/awesome-zsh-plugins)


A collection of ZSH frameworks, plugins, tutorials & themes inspired by the various awesome list collections out there.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Disclaimer](#disclaimer)
- [Frameworks](#frameworks)
  - [alf](#alf)
  - [ansible-role-zsh](#ansible-role-zsh)
  - [ant-zsh](#ant-zsh)
  - [antibody](#antibody)
  - [antidote](#antidote)
  - [antigen-hs](#antigen-hs)
  - [antigen](#antigen)
  - [awesome-lazy-zsh](#awesome-lazy-zsh)
  - [ax-zsh](#ax-zsh)
  - [deer](#deer)
  - [dotzsh](#dotzsh)
  - [fresh](#fresh)
  - [gh-source](#gh-source)
  - [lazy.zsh](#lazyzsh)
  - [miniplug](#miniplug)
  - [oh-my-zsh](#oh-my-zsh)
  - [microzsh](#microzsh)
  - [pms](#pms)
  - [prezto](#prezto)
  - [pumice](#pumice)
  - [rac](#rac)
  - [rat](#rat)
  - [sheldon](#sheldon)
  - [shellx](#shellx)
  - [shplug](#shplug)
  - [thefly](#thefly)
  - [toasty](#toasty)
  - [usepkg](#usepkg)
  - [uz](#uz)
  - [x-cmd](#x-cmd)
  - [xc-manager](#xc-manager)
  - [yazt](#yazt)
  - [yzsh](#yzsh)
  - [zap](#zap)
  - [zapack](#zapack)
  - [zcomet](#zcomet)
  - [zdx-suite](#zdx-suite)
  - [zeesh](#zeesh)
  - [zef](#zef)
  - [zert](#zert)
  - [zest](#zest)
  - [zflash](#zflash)
  - [zgem](#zgem)
  - [zgen](#zgen)
  - [zgenom](#zgenom)
  - [zi](#zi)
  - [zilsh](#zilsh)
  - [zim](#zim)
  - [Zinit](#zinit)
  - [zinit-4](#zinit-4)
  - [zit](#zit)
  - [zload](#zload)
  - [zlugin](#zlugin)
  - [znap](#znap)
  - [zoppo](#zoppo)
  - [zpacker](#zpacker)
  - [zpico](#zpico)
  - [zplug](#zplug)
  - [zpm](#zpm)
  - [zr](#zr)
  - [zshing](#zshing)
  - [zsh-dot-plugin](#zsh-dot-plugin)
  - [zsh-mgr](#zsh-mgr)
  - [zsh-unplugged.](#zsh-unplugged)
  - [zshPlug](#zshplug)
  - [ztanesh](#ztanesh)
  - [ztheme](#ztheme)
  - [ztupide](#ztupide)
  - [zulu](#zulu)
  - [zush 🦥 - Mid-Performance ZSH Configuration](#zush----mid-performance-zsh-configuration)
  - [Performance](#performance)
- [Setups](#setups)
  - [oh-my-zsh](#oh-my-zsh-1)
  - [Raw ZSH](#raw-zsh)
  - [zgenom](#zgenom-1)
  - [zinit](#zinit-1)
- [Prerequisites](#prerequisites)
- [Tutorials](#tutorials)
  - [Generic ZSH](#generic-zsh)
  - [Antigen](#antigen-1)
  - [Oh-My-Zsh](#oh-my-zsh-2)
  - [Prezto](#prezto-1)
  - [Zgen](#zgen-1)
  - [Zinit (né zplugin)](#zinit-n%C3%A9-zplugin)
  - [ZSH on Windows](#zsh-on-windows)
    - [superconsole - Windows-only](#superconsole---windows-only)
- [Plugins](#plugins)
- [Completions](#completions)
- [Themes](#themes)
- [Fonts](#fonts)
- [Installation](#installation)
  - [Antigen](#antigen-2)
  - [dotzsh](#dotzsh-1)
  - [Oh-My-Zsh](#oh-my-zsh-3)
  - [Prezto](#prezto-2)
  - [Zgen](#zgen-2)
  - [Zgenom](#zgenom-2)
  - [zplug](#zplug-1)
  - [zpm](#zpm-1)
- [Writing New Plugins and Themes](#writing-new-plugins-and-themes)
- [Other Resources](#other-resources)
  - [ZSH Tools](#zsh-tools)
  - [Other Useful Lists](#other-useful-lists)
  - [Other References](#other-references)
- [Thanks](#thanks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

*Please read the [Contributing Guidelines](Contributing.md) before contributing.*

## Disclaimer

While I have done my best to not add entries with embedded malicious code, I don't have the time to sift through the source of every entry in the list. _Use items from this list at your own risk_.

THIS LIST IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Frameworks

These frameworks make customizing your ZSH setup easier.

### [alf](https://github.com/psyrendust/alf)
![GitHub last commit](https://img.shields.io/github/last-commit/psyrendust/alf) ![GitHub Repo stars](https://img.shields.io/github/stars/psyrendust/alf)

**Alf** is an out of this world super fast and configurable framework for ZSH; it's modeled after [Prezto](https://github.com/sorin-ionescu/prezto) and [Antigen](https://github.com/zsh-users/antigen) while utilizing [Oh-My-Zsh](https://ohmyz.sh) under the covers; and offers standard defaults, aliases, functions, auto completion, automated updates and installable prompt themes and plugins.

### [ansible-role-zsh](https://github.com/viasite-ansible/ansible-role-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/viasite-ansible/ansible-role-zsh) ![GitHub Repo stars](https://img.shields.io/github/stars/viasite-ansible/ansible-role-zsh)

**ansible-role-zsh** is an ansible role with zero-knowledge installation. It uses [antigen](https://github.com/zsh-users/antigen) to manage bundles and [oh-my-zsh](ohmyz.sh). Can load bundles conditionally. By default it includes the powerlevel9k theme, autosuggestions, syntax-highlighting and [fzf-widgets](https://github.com/ytet5uy4/fzf-widgets) and [fzf-marks](https://github.com/urbainvaes/fzf-marks). Fully customizable.

### [ant-zsh](https://github.com/anthraxx/ant-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/anthraxx/ant-zsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/anthraxx/ant-zsh)

**Ant-zsh** is a tiny and lightweight ZSH configuration environment for special customization needs. It includes plugins, themes and a basic convenient setup.

### [antibody](https://github.com/getantibody/antibody)
![GitHub last commit](https://img.shields.io/github/last-commit/getantibody/antibody)
 ![GitHub Repo stars](https://img.shields.io/github/stars/getantibody/antibody)

**Antibody** is a faster and simpler [antigen](https://github.com/zsh-users/antigen) written in Golang. More details are available at [http://getantibody.github.io/](http://getantibody.github.io/).

### [antidote](https://getantidote.github.io/)
![GitHub last commit](https://img.shields.io/github/last-commit/mattmc3/antidote)
 ![GitHub Repo stars](https://img.shields.io/github/stars/mattmc3/antidote)

**Antidote** is a ZSH plugin manager made from the ground up thinking about performance.

It is fast because it can do things concurrently, and generates an ultra-fast static plugin file that you can include in your ZSH config.

It is written natively in ZSH, is well tested, and picks up where [Antibody](https://github.com/getantibody/antibody) left off.

[use-omz](https://github.com/getantidote/use-omz) enables easy use of [Oh-My-ZSH](https://github.com/ohmyzsh/ohmyzsh) with antidote.

### [antigen-hs](https://github.com/Tarrasch/antigen-hs)
![GitHub last commit](https://img.shields.io/github/last-commit/Tarrasch/antigen-hs)
 ![GitHub Repo stars](https://img.shields.io/github/stars/Tarrasch/antigen-hs)

**antigen-hs** is a replacement for [antigen](https://github.com/zsh-users/antigen) optimized for a low overhead when starting up a `zsh` session. It will automatically clone plugins for you.

### [antigen](https://github.com/zsh-users/antigen)
![GitHub last commit](https://img.shields.io/github/last-commit/zsh-users/antigen)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zsh-users/antigen)

**Antigen** is a small set of functions that help you easily manage your shell (ZSH) plugins, called bundles. The concept is pretty much the same as bundles in a typical vim+pathogen setup. Antigen is to ZSH, what Vundle is to `vim`. Antigen can load oh-my-zsh themes and plugins and will automatically clone them for you.

### [awesome-lazy-zsh](https://github.com/AmJaradat01/awesome-lazy-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/AmJaradat01/awesome-lazy-zsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/AmJaradat01/awesome-lazy-zsh)

**Awesome-Lazy-ZSH** is a simplified and customizable ZSH setup tool for managing plugins and themes. It streamlines your terminal environment with an easy-to-use CLI interface, allowing you to manage .zshrc configurations effectively.
Features

- Plugin Management: Install and manage plugins easily.
- Theme Customization: Apply a variety of Zsh themes.
- Backup and Restore: Safeguard your .zshrc configurations.
- Interactive CLI: User-friendly setup options.
- Dependency Management: Automatically checks for Git, Node.js, and Homebrew.

### [ax-zsh](https://github.com/alexbarton/ax-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/alexbarton/ax-zsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/alexbarton/ax-zsh)

**Ax-ZSH** is a modular configuration system for ZSH. It provides sane defaults and is extendable by plugins.

**Ax-ZSH** integrates well with [Powerlevel10k](https://github.com/romkatv/powerlevel10k) and other extensions, including plugins compatible with [oh-my-zsh](https://ohmyz.sh/).

### [deer](https://github.com/ArtixLabs/deer)
![GitHub last commit](https://img.shields.io/github/last-commit/ArtixLabs/deer)
 ![GitHub Repo stars](https://img.shields.io/github/stars/ArtixLabs/deer)

A minimalist ZSH plugin manager.

### [dotzsh](https://github.com/dotphiles/dotzsh)
![GitHub last commit](https://img.shields.io/github/last-commit/dotphiles/dotzsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/dotphiles/dotzsh)

**Dotzsh** strives to be platform and version independent. Some functionality may be lost when running under older versions of ZSH, but it should degrade cleanly and allow you to use the same setup on multiple machines of differing OSes without problems.

### [fresh](https://github.com/freshshell/fresh)
![GitHub last commit](https://img.shields.io/github/last-commit/freshshell/fresh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/freshshell/fresh)

**fresh** is a tool to source shell configuration (aliases, functions, etc) from others into your own configuration files. We also support files such as ackrc and gitconfig. Think of it as [Bundler](https://bundler.io) for your dot files.

### [gh-source](https://github.com/Yarden-zamir/gh-source)
![GitHub last commit](https://img.shields.io/github/last-commit/Yarden-zamir/gh-source) ![GitHub Repo stars](https://img.shields.io/github/stars/Yarden-zamir/gh-source)

**gh-source** is a plugin manager for people who don't like plugin managers. It's a simple shell function that downloads and installs plugins from GitHub as part of the sourcing step. It's designed to be used with `zsh`, but it should work with any shell.

### [lazy.zsh](https://github.com/stanleyndachi/lazy.zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/stanleyndachi/lazy.zsh) ![GitHub Repo stars](https://img.shields.io/github/stars/stanleyndachi/lazy.zsh)

With **lazy.zsh**, your `.zshrc` is the single source of truth. Reproduce the same ZSH setup anywhere using the same config; no frameworks, no auto-sourcing, no hidden behavior. **lazy.zsh** installs, updates, and tracks plugins, while you control exactly how and when they are loaded.

### [miniplug](https://sr.ht/~yerinalexey/miniplug)
![GitHub last commit](https://img.shields.io/github/last-commit/yerinalexey/miniplug) ![GitHub Repo stars](https://img.shields.io/github/stars/yerinalexey/miniplug)

**miniplug** is a minimalistic plugin manager for ZSH.

- No crashes or double plugin loading when re-sourcing `.zshrc`
- Unlike other frameworks, Miniplug does not pollute your `$PATH`
- Only does the bare minimum for managing plugins

### [oh-my-zsh](https://ohmyz.sh/)
![GitHub last commit](https://img.shields.io/github/last-commit/ohmyzsh/ohmyzsh) ![GitHub Repo stars](https://img.shields.io/github/stars/ohmyzsh/oh-my-zsh)

**oh-my-zsh** is a community-driven framework for managing your ZSH configuration. Includes 120+ optional plugins (rails, `git`, macOS, `hub`, `capistrano`, `brew`, `ant`, MacPorts, etc), over 120 themes to spice up your morning, and an auto-update tool that makes it easy to keep up with the latest updates from the community.

### [microzsh](https://github.com/computer-wilco/microzsh)
![GitHub last commit](https://img.shields.io/github/last-commit/computer-wilco/microzsh) ![GitHub Repo stars](https://img.shields.io/github/stars/computer-wilco/microzsh)

A lightweight alternative to [oh-my-zsh](https://ohmyz.sh/), improving load times while still keeping essential features like themes and plugins.

### [pms](https://github.com/JoshuaEstes/pms)
![GitHub last commit](https://img.shields.io/github/last-commit/JoshuaEstes/pms)
 ![GitHub Repo stars](https://img.shields.io/github/stars/JoshuaEstes/pms)

PMS allows you to manage your shell in a way to that helps decrease setup time and increases your productivity. It has support for themes (change the way your shell looks), plugins (adds functionality to your shell), and dotfile management.

The PMS framework also allows you to use the same framework in different shells. Use ZSH on your personal laptop, and use `bash` on remote servers. Wanna try `fish`? Go ahead, try out different shells.

### [prezto](https://github.com/sorin-ionescu/prezto)
![GitHub last commit](https://img.shields.io/github/last-commit/sorin-ionescu/prezto)
 ![GitHub Repo stars](https://img.shields.io/github/stars/sorin-ionescu/prezto)

**Prezto** enriches the ZSH command line interface environment with sane defaults, aliases, functions, auto completion, and prompt themes. There are some [prezto](https://github.com/sorin-ionescu/prezto)-specific plugins at [https://github.com/belak/prezto-contrib](https://github.com/belak/prezto-contrib).

### [pumice](https://github.com/ryutamaki/pumice)
![GitHub last commit](https://img.shields.io/github/last-commit/ryutamaki/pumice)
 ![GitHub Repo stars](https://img.shields.io/github/stars/ryutamaki/pumice)

**Pumice** is a lightweight plugin manager for ZSH.

### [rac](https://github.com/lomarco/rac)
![GitHub last commit](https://img.shields.io/github/last-commit/lomarco/rac)
  ![GitHub Repo stars](https://img.shields.io/github/stars/lomarco/rac)

Most ZSH plugin managers are bloated. They try to do too much - dependency graphs, deferred loading, configuration injection - and in the process, they slow down your shell.

The reality is, most users never use even 80% of these features. `rac` is deliberately minimal. All it does is **download plugins** and **update plugins**.

### [rat](https://github.com/gotokazuki/rat-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/gotokazuki/rat-zsh)
  ![GitHub Repo stars](https://img.shields.io/github/stars/gotokazuki/rat-zsh)

A lightweight, fast, and reproducible plugin manager for ZSH. Made with 🐭 & 🦀 — no magic, no heavy frameworks.

Features 🐭✨

- 🚀 Simple setup
  - Install with a single curl line
  - Just add one eval line in .zshrc to start using it
- ⚙️ Configurable and reproducible
  - Simple TOML-based configuration
  - Automatic plugin load order control
- 🐙 GitHub integration
  - Fetches plugins from GitHub repositories
  - Supports branches, tags, and commits
  - Handles Git submodules automatically
- ⚡️ Lightweight and fast
  - Parallel plugin sync
  - Built in Rust 🦀
- 🔄 Seamless updates
  - Self-upgrade
  -Plugin sync

### [sheldon](https://github.com/rossmacarthur/sheldon)
![GitHub last commit](https://img.shields.io/github/last-commit/rossmacarthur/sheldon)
  ![GitHub Repo stars](https://img.shields.io/github/stars/rossmacarthur/sheldon)

**sheldon** is a fast, configurable, shell plugin manager.

- It can manage:
  - Any `git` repository.
    - Branch/tag/commit support.
    - Extra support for GitHub repositories.
    - Extra support for Gists.
  - Arbitrary remote files, simply specify the URL.
  - Local plugins, simply specify the directory path.
- Highly configurable install methods using [handlebars](http://handlebarsjs.com/) templating.
- Super-fast parallel installation.
- Configuration file using [TOML](https://github.com/toml-lang/toml) syntax.
- Uses a lock file for much faster loading of plugins.

### [shellx](https://github.com/0ghny/shellx)
![GitHub last commit](https://img.shields.io/github/last-commit/0ghny/shellx)
  ![GitHub Repo stars](https://img.shields.io/github/stars/0ghny/shellx)

A generic script/plugin loader for multiple shells, including `ZSH`.

- Has a "plugins" system that allows you to do things like installing a package, cloning a repository, export variables, run commands. And cross-shell compatible.
- Has an unified way of configuring shells, it uses one of many approaches to standardize home folder with a set of predefined files and folders. it defines a `~/bin` folder between others that is auto-included in `PATH`, so it helps you to use always same approach on all your systems.
- Having different plugins in different folders, which allows loading certain folders in certain environments to load variables or any other special configurations. It also allows you to clone other users plugins easily.
- It provides a minimal set of libraries and binaries bundled inside which offers a set of functions/aliases/etc. based on SH/BASH (compatible with other shells) to use in plugins contexts to do certain stuff easily.

### [shplug](https://github.com/dtrugman/shplug)
![GitHub last commit](https://img.shields.io/github/last-commit/dtrugman/shplug)
 ![GitHub Repo stars](https://img.shields.io/github/stars/dtrugman/shplug)

**shplug** is an easy solution for managing your shell environments. Works with both `bash` and `zsh`. Makes it easy to sync your environment across multiple machines with a `git` repository.

### [thefly](https://github.com/joknarf/thefly)
![GitHub last commit](https://img.shields.io/github/last-commit/joknarf/thefly) ![GitHub Repo stars](https://img.shields.io/github/stars/joknarf/thefly)

**TheFly** is a `bash`/`zsh`/`ksh` plugin manager and env teleporter

Makes your shell env and plugins available everywhere (hosts/users)!

### [toasty](https://github.com/CosmicToast/toasty-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/CosmicToast/toasty-zsh) ![GitHub Repo stars](https://img.shields.io/github/stars/CosmicToast/toasty-zsh)

**Toasty** is a ZSH framework made to facilitate management, not dictate it.

### [usepkg](https://github.com/gynamics/zsh-usepkg)
![GitHub last commit](https://img.shields.io/github/last-commit/gynamics/zsh-usepkg) ![GitHub Repo stars](https://img.shields.io/github/stars/gynamics/zsh-usepkg)

**Usepkg** is a minimal declarative zsh plugin manager.

Supports:
- fetch & load plugin(s) with declared methods
- list, check, reload, update & remove plugin(s) with commands

Dependencies:
- `zsh`
- gnu coreutils
- `git` (optional, if you want to clone git repositories from internet)
- `curl` (optional, if you want to fetch a script file by url)

Pros:
- extremely simple and light, but enough to use.
- compared to similar packages like `zplug`, it has a much simpler configuration grammar.


### [uz](https://github.com/maxrodrigo/uz)
![GitHub last commit](https://img.shields.io/github/last-commit/maxrodrigo/uz)
 ![GitHub Repo stars](https://img.shields.io/github/stars/maxrodrigo/uz)

**uz** is a micro plugin manager for ZSH

### [x-cmd](https://github.com/x-cmd/x-cmd)
![GitHub last commit](https://img.shields.io/github/last-commit/x-cmd/x-cmd)
 ![GitHub Repo stars](https://img.shields.io/github/stars/x-cmd/x-cmd)

**x-cmd** is a toolset implemented using posix shell and `awk`. It is very small in size and offers many interesting features. Here is a milestone demo: [x-cmd.com](https://x-cmd.com/)

Tools Provided by x-cmd:
  - [Wrappers for Common Commands (e.g., cd, ip, ps, tar, apt, brew)](https://x-cmd.com/mod/zuz): These wrapped commands are more intelligent and easier to use compared to the native commands.
  - [Lightweight Package Management Tool](https://x-cmd.com/pkg/): We have implemented a lightweight package management tool using shell and awk. Through it, you can quickly obtain most common software tools, such as jq, 7za, bat, nvim, python, node, go, etc.
  - [CLI for Useful Websites (e.g., github.com, cht.sh)](https://x-cmd.com/mod/cht): We have wrapped their APIs using shell and awk for daily use and to obtain corresponding services in scripts.
  - [AI Tools](https://x-cmd.com/mod/openai): We provide CLIs for ChatGPT, Gemini, Jina.ai, etc., and have wrapped corresponding shortcut commands for different application scenarios, such as `@gemini` for chatting with Gemini AI and `@zh` for using AI to translate specified content or command results.

### [xc-manager](https://github.com/Rakosn1cek/XC-Manager)
![GitHub last commit](https://img.shields.io/github/last-commit/Rakosn1cek/XC-Manager)
 ![GitHub Repo stars](https://img.shields.io/github/stars/Rakosn1cek/XC-Manager)

**XC-Manager** is a Zsh-native command vault designed to bridge the gap between temporary shell history and permanent aliases. It allows you to store complex one-liners with descriptions and recall them via an interactive TUI.

Features Provided by XC-Manager:
  - **Command Vaulting**: Save any command directly from your history into thematic vaults (e.g., work, sysadmin, media).
  - **FZF TUI**: Search and execute vaulted commands instantly using a robust, TTY-safe `fzf` interface.
  - **Alias Promotion**: Promote frequently used vaulted commands to permanent system aliases without manually editing configuration files.
  - **Global Search**: Query across all vault files simultaneously to find that one specific flag or complex pipe string.

### [yazt](https://github.com/bashelled/yazt)
![GitHub last commit](https://img.shields.io/github/last-commit/bashelled/yazt)
 ![GitHub Repo stars](https://img.shields.io/github/stars/bashelled/yazt)

**Yazt** is a simple ZSH theme manager in maintenance that is compatible with nearly everything. You can use prompts in plugins, mix 'n' match two themes and with a few modifications, you can even use it in `bash`.

### [yzsh](https://github.com/yunielrc/yzsh)
![GitHub last commit](https://img.shields.io/github/last-commit/yunielrc/yzsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/yunielrc/yzsh)

**yzsh** is a simple ZSH framework for managing plugins, themes, functions, aliases and environment variables.

### [zap](https://github.com/zap-zsh/zap)
![GitHub last commit](https://img.shields.io/github/last-commit/zap-zsh/zap)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zap-zsh/zap)

**:zap:zap** is a minimal ZSH plugin manager.

### [zapack](https://github.com/aiya000/zsh-zapack)
![GitHub last commit](https://img.shields.io/github/last-commit/aiya000/zsh-zapack)
 ![GitHub Repo stars](https://img.shields.io/github/stars/aiya000/zsh-zapack)

**zapack** is a basic fast minimal ZSH plugin loader.

### [zcomet](https://github.com/agkozak/zcomet)
![GitHub last commit](https://img.shields.io/github/last-commit/agkozak/zcomet)
 ![GitHub Repo stars](https://img.shields.io/github/stars/agkozak/zcomet)

**zcomet** is a minimalistic ZSH plugin manager that gets you to the prompt surprisingly quickly without caching (see the benchmarks). In addition to loading and updating plugins stored in `git` repositories, it supports lazy-loading plugins (further reducing startup time) as well as downloading and sourcing code snippets.

### [zdx-suite](https://github.com/landerox/zdx-suite)
![GitHub last commit](https://img.shields.io/github/last-commit/landerox/zdx-suite)
 ![GitHub Repo stars](https://img.shields.io/github/stars/landerox/zdx-suite)

 Interactive, fzf-powered developer workflows and a custom plugin loader for Zsh, built for Oh My Zsh.

Open zdx when you want to explore, or route directly to a suite when you already know the workflow. Eight suites, a dependency doctor, and a plugin manager share one terminal-first interface.

### [zeesh](https://github.com/zeekay/zeesh)
![GitHub last commit](https://img.shields.io/github/last-commit/zeekay/zeesh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zeekay/zeesh)

**Zeesh** is a cross-platform ZSH framework. It's similar to, but incompatible with, [oh-my-zsh](http://ohmyz.sh/). It has a modular plugin architecture making it easy to extend. It has a rich set of defaults, but is designed to be as lightweight as possible.

### [zef](https://github.com/declnix/zef)
![GitHub last commit](https://img.shields.io/github/last-commit/declnix/zef)
 ![GitHub Repo stars](https://img.shields.io/github/stars/declnix/zef)

Declarative zsh plugin manager in Nix, targeting <50 ms cold start. Inspired by nvf, built around the idea that if the entire shell config is known at build time, the runtime can be a thin shim.

### [zert](https://github.com/oxcl/zert)
![GitHub last commit](https://img.shields.io/github/last-commit/oxcl/zert)
 ![GitHub Repo stars](https://img.shields.io/github/stars/oxcl/zert)

 **zert** is a pure-ZSH plugin manager built around a simple idea: your plugins should be declared directly in your `.zshrc`, pinned to exact commits, and reproducible on any machine — just like `npm` does for Node projects.

No config files to maintain. No subcommands to memorize for adding plugins. No external tools. Just ZSH, `git`, and `curl`.

Features

* **Inline, declarative syntax** — declare plugins directly in `.zshrc`. No separate config file, no add command.
* **Lockfile-based reproducibility** — `zert.lock` pins every plugin to an exact `git` commit SHA. Commit it. Share it. Reproduce it anywhere.
* **Parallel installs** — clones multiple plugins simultaneously using `git clone --filter=tree:0` for minimal bandwidth.
* **Sequential, ordered loading** — plugins are sourced in exactly the order you declare them. Always.
* **Zero external UI dependencies** — real-time progress bars and spinners built entirely from ANSI escape codes.
* **Self-managing** — Zert updates itself with `zert update zert`, managed as a first-class plugin.
* **Oh-My-Zsh / Prezto compatibility** — load OMZ libs and Prezto modules without installing either framework.*

### [zest](https://github.com/reginaldosevero/zest)
![GitHub last commit](https://img.shields.io/github/last-commit/reginaldosevero/zest) ![GitHub Repo stars](https://img.shields.io/github/stars/reginaldosevero/zest)

**Zest** is a productivity framework for ZSH aimed at human-readable output: `sysinfo`, `topmem` and `topcpu` render color bars aggregated per program, notes and todos live in the terminal, Hacker News headlines are machine-translated to Portuguese, `git` gets a friendly wrapper, and `updateall` tries 12 package managers (apt, dnf, pacman, zypper, apk, flatpak, snap, npm, pipx, uv, pip, mise) and skips the missing ones. The installer runs without root — it fetches 16 CLI tools (fzf, ripgrep, bat, eza, delta, lazygit, zoxide, atuin, mise and friends) into `~/.local/bin`, auto-installs missing dependencies via sudo/su, and works with Oh My Zsh, plain ZSH or any other framework. Everything is guarded, idempotent and reversible, and the documentation is in Portuguese.

### [zflash](https://github.com/arastu/zflash)
![GitHub last commit](https://img.shields.io/github/last-commit/arastu/zflash)
 ![GitHub Repo stars](https://img.shields.io/github/stars/arastu/zflash)

`zflash` compiles a short declarative spec into one static, byte-compiled init file. At shell start nothing is resolved, searched, forked or parsed by the manager: your `.zshrc` sources a tiny bootstrap and that one file. Everything in the spec, plugins, tool init zsh output and your own rc files, is split into two stages, before and after the first prompt, so the prompt appears as early as possible. `compinit` itself runs after the prompt.

### [zgem](https://github.com/qoomon/zgem)
![GitHub last commit](https://img.shields.io/github/last-commit/qoomon/zgem)
 ![GitHub Repo stars](https://img.shields.io/github/stars/qoomon/zgem)

**zgem** is a plugin manager for ZSH that supports loading and updating plugins and themes from `git`, http and local files.

### [zgen](https://github.com/tarjoilija/zgen)
![GitHub last commit](https://img.shields.io/github/last-commit/tarjoilija/zgen)
 ![GitHub Repo stars](https://img.shields.io/github/stars/tarjoilija/zgen)

**Zgen is currently not being actively maintained**. I recommend you use the [zgenom](https://github.com/jandamm/zgenom) fork instead, which is actively maintained and continues to get new features and bug fixes.

**Zgen** was a lightweight plugin manager for ZSH inspired by [Antigen](https://github.com/zsh-users/antigen). The goal was to have minimal overhead when starting up the shell because nobody likes waiting.

### [zgenom](https://github.com/jandamm/zgenom)
![GitHub last commit](https://img.shields.io/github/last-commit/jandamm/zgenom)
 ![GitHub Repo stars](https://img.shields.io/github/stars/jandamm/zgenom)

A lightweight plugin manager for ZSH that is a fork that extends the brilliant [zgen](https://github.com/tarjoilija/zgen) and provides more features and bugfixes while being fully backwards compatible.

To keep loading fast during new terminal sessions, `zgenom` generates a static `init.zsh` file which does nothing but source your plugins and append them to your `fpath`.

This minimizes startup time by not having to execute time consuming logic (plugin checking, updates, etc) during every shell session's startup. The downside is that you have to refresh the init script manually with `zgenom reset` whenever you update your plugin list in your `.zshrc`.

Zgenom can load [oh-my-zsh](http://ohmyz.sh/)-compatible and [prezto](https://github.com/sorin-ionescu/prezto)-compatible plugins and themes, and will automagically `git clone` plugins for you when you add them to your plugin list.

### [zi](https://github.com/z-shell/zi)
![GitHub last commit](https://img.shields.io/github/last-commit/z-shell/zi)
 ![GitHub Repo stars](https://img.shields.io/github/stars/z-shell/zi)

 Zi is the Z-Shell ecosystem's plugin manager. It can source a single remote script, manage a complete plugin, install a binary release, run build steps, or defer work until after the first prompt. Zi was formerly known as zplugin and zinit.

### [zilsh](https://github.com/zilsh/zilsh)
![GitHub last commit](https://img.shields.io/github/last-commit/zilsh/zilsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zilsh/zilsh)

**zilsh** is a ZSH config system that aims to appeal more to power-users and follow the simplistic approach of vim-pathogen.

### [zim](https://github.com/zimfw/zimfw)
![GitHub last commit](https://img.shields.io/github/last-commit/zimfw/zimfw)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zimfw/zimfw)

**Zim** is a ZSH configuration framework with blazing speed and modular extensions.

### [Zinit](https://github.com/zdharma-continuum/zinit)
![GitHub last commit](https://img.shields.io/github/last-commit/zdharma-continuum/zinit) ![GitHub Repo stars](https://img.shields.io/github/stars/zdharma-continuum/zinit)

**Zinit** is an innovative and probably (because of the Turbo) the fastest plugin manager with support for:

- Turbo mode – 80% faster ZSH startup! for example: instead of 200 ms, it'll be 40 ms
- Completion management (selectively disable and enable completions)
- Snippets (↔ regular files downloaded via-URL, e.g.: scripts) and through them Oh My Zsh and Prezto plugins support (→ low overhead)
- Annexes (↔ Zinit extensions)
- Reports (from the plugin loads – plugins are no longer black boxes)
- Plugin unloading (allows e.g.: dynamic theme switching)
- `bindkey` capturing and remapping
- packages
- Clean `fpath` (the array `$fpath` is not being used to add completions and autoload functions, hence it stays concise, not bloated)
- Services ↔ a single-instance, background plugins
- Also, in general: all the mechanisms from the ZSH Plugin Standard – Zinit is a reference implementation of the standard.

The project is very active – currently > 3100 commits.

### [zinit-4](https://github.com/psprint/Zinit-4)
![GitHub last commit](https://img.shields.io/github/last-commit/psprint/Zinit-4)
 ![GitHub Repo stars](https://img.shields.io/github/stars/psprint/Zinit-4)

This is Zinit 4 from the [original author](https://github.com/psprint), who once removed the [Zinit](https://github.com/zdharma-continuum/zinit) repository from GitHub. This spawned a community-driven [zdharma-continuum](https://github.com/zdharma-continuum) organization that revived all of psprint's ZSH projects. Its main innovations from the @zdharma-continuum fork are:

- AppImage distribution (release link),
- Action complete – press `Alt-Shift-A` and `Alt-Shift-C` to complete plugin names and ice modifiers,
- Themes – set `$ZITHEM`E to one of default, blue and gold to set a color set to use for Zinit 4 messages,
- New ice `build` which is equivalent of three other ices: `null`, `configure` and `make install` and simply builds the project from sources, with support for autotools/CMake/Meson/Scons.

These are the most visible changes, but there are more (like e.g.: support for compiling with libraries from previously built projects/`$ZPFX`).

### [zit](https://github.com/thiagokokada/zit)
![GitHub last commit](https://img.shields.io/github/last-commit/thiagokokada/zit)
 ![GitHub Repo stars](https://img.shields.io/github/stars/thiagokokada/zit)

**zit** is a plugin manager for ZSH. It is minimal because it implements the bare minimum to be qualified as a plugin manager: it allows the user to install plugins from `git` repositories (and `git` repositories only, that's why the name), source plugins and update them. It does not implement fancy functions like cleanup of removed plugins, automatic compilation of installed plugins, alias for oh-my-zsh/prezto/other ZSH frameworks, building binaries, `$PATH` manipulation and others.

### [zload](https://github.com/casonadams/zload)
![GitHub last commit](https://img.shields.io/github/last-commit/casonadams/zload)
 ![GitHub Repo stars](https://img.shields.io/github/stars/casonadams/zload)

 **zload** is an ultra-fast, zero-friction, memory-mapped ZSH plugin manager and loader built with 100% pure ZSH.

It delivers ~0.6 ms warm interactive startup overhead (10 plugins, Apple Silicon; measured by zsh benchmark/bench.zsh) by compiling plugins into a consolidated .zwc wordcode bundle, automatically resolving canonical execution order, and completely eliminating subprocess forks.

### [zlugin](https://github.com/DrgnFireYellow/zlugin)
![GitHub last commit](https://img.shields.io/github/last-commit/DrgnFireYellow/zlugin)
 ![GitHub Repo stars](https://img.shields.io/github/stars/DrgnFireYellow/zlugin)

**zlugin** is a very lightweight ZSH plugin manager.

### [znap](https://github.com/marlonrichert/zsh-snap)
![GitHub last commit](https://img.shields.io/github/last-commit/marlonrichert/zsh-snap) ![GitHub Repo stars](https://img.shields.io/github/stars/marlonrichert/zsh-snap)

**:zap:Znap** is a light-weight plugin manager & `git` repository manager for ZSH that's easy to grok. While tailored for ZSH plugins specifically, **Znap** also functions as a general-purpose utility for managing `git` repositories.

Znap can:

- Make any prompt appear instantly. Reduce your startup time from ~200ms to ~40ms with just one command.
- Asynchronously compile your plugins and functions.
- Cache those expensive `eval $(commands)`.
- Clone or pull multiple repos in parallel.
- Re-clone all your repos without you having to re-enter them.
- Multi-repo management
- Automatic `compinit` and `bashinit` - you no longer need them in your `.zshrc`, znap will do them automatically as needed.

### [zoppo](https://github.com/zoppo/zoppo)
![GitHub last commit](https://img.shields.io/github/last-commit/zoppo/zoppo)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zoppo/zoppo)

**Zoppo** is the crippled configuration framework for ZSH. As an Italian saying goes: "chi va con lo zoppo, impara a zoppicare", we realized we were walking with a cripple and are now going to become crippled ourselves.

### [zpacker](https://github.com/happyslowly/zpacker)
![GitHub last commit](https://img.shields.io/github/last-commit/happyslowly/zpacker)
 ![GitHub Repo stars](https://img.shields.io/github/stars/happyslowly/zpacker)

**Zpacker** is a lightweight ZSH plugin & theme management framework.

### [zpico](https://github.com/thornjad/zpico)
![GitHub last commit](https://img.shields.io/github/last-commit/thornjad/zpico)
 ![GitHub Repo stars](https://img.shields.io/github/stars/thornjad/zpico)

**zpico** is a minuscule ZSH package manager. No frills, no bloat, just 2 kB of 100% ZSH code, providing complete package management for your ZSH environment.

ZSH package managers are abundant, but most are bloated, slow or have excessive requirements. On top of that, more than a few have been abandoned for years. Zpico does not seek to be the best of the best, rather to balance functionality against a tiny, fast footprint.

### [zplug](https://github.com/zplug/zplug)
![GitHub last commit](https://img.shields.io/github/last-commit/zplug/zplug)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zplug/zplug)

**:hibiscus: Zplug** is a next-generation ZSH plugin manager.

- Can manage everything
  - ZSH plugins/UNIX commands on [GitHub](https://github.com) and [Bitbucket](https://bitbucket.org)
  - Gist files ([gist.github.com](https://gist.github.com/discover))
  - Externally managed plugins e.g., [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) and [prezto](https://github.com/sorin-ionescu/prezto) plugins/themes
  - Binary artifacts on [GitHub Releases](https://help.github.com/articles/about-releases/)
  - Local plugins
  - etc. (you can add your [own sources](https://github.com/zplug/zplug/blob/master/doc/guide/External-Sources.md)!)
- Super-fast parallel installation/update
- Support for lazy-loading
- Branch/tag/commit support
- Post-update, post-load hooks
- Dependencies between packages
- Unlike [antigen](https://github.com/zsh-users/antigen), no ZSH plugin files (`*.plugin.zsh`) are required
- Interactive interface ([fzf](https://github.com/junegunn/fzf), [peco](https://github.com/peco/peco), [zaw](https://github.com/zsh-users/zaw), and so on)
- Cache mechanism for reducing [the startup time](https://github.com/zplug/zplug#vs)

### [zpm](https://github.com/zpm-zsh/zpm)
![GitHub last commit](https://img.shields.io/github/last-commit/zpm-zsh/zpm)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zpm-zsh/zpm)

**zpm** (ZSH Plugin Manager) is a plugin manager for [ZSH](http://www.zsh.org/) which combines the imperative and declarative approach. At first run, `zpm` will do complex logic and generate a cache, after that will only use the cache, so it makes this framework very fast.

- Fastest plugin manager (Really, after the first run, `zpm` will not be used at all)
- Support for async loading
- Dependencies between packages
- **zpm** runs on Linux, macOS, FreeBSD and Android.
- **zpm** plugins are compatible with [oh-my-zsh](http://ohmyz.sh/).

### [zr](https://github.com/jedahan/zr)
![GitHub last commit](https://img.shields.io/github/last-commit/jedahan/zr)
 ![GitHub Repo stars](https://img.shields.io/github/stars/jedahan/zr)

**zr** is a quick, simple ZSH plugin manager written in Rust and easily installable with `cargo install zr`.

### [zshing](https://github.com/zakariaGatter/zshing)
![GitHub last commit](https://img.shields.io/github/last-commit/zakariaGatter/zshing)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zakariaGatter/zshing)

**zshing** is a ZSH plugin manager similar to Vundle/Vim and allows you to...

- Keep track of and configure your plugins right in your `~/.zshrc`
- Install ZSH plugins
- Update ZSH plugins
- Search by name all available ZSH Plugins
- Clean unused plugins up
- Run the above actions in a *single command*
- Manages the **Source Plugins** of your installed Plugins

### [zsh-dot-plugin](https://github.com/DuckzCantFly/zsh-dot-plugin)
![GitHub last commit](https://img.shields.io/github/last-commit/DuckzCantFly/zsh-dot-plugin) ![GitHub Repo stars](https://img.shields.io/github/stars/DuckzCantFly/zsh-dot-plugin)

**zsh-dot-plugin** will customize your `.zshrc` with only ~21 lines of code. Based on [zsh-unplugged](https://github.com/mattmc3/zsh_unplugged).

### [zsh-mgr](https://github.com/amt911/zsh-mgr)
![GitHub last commit](https://img.shields.io/github/last-commit/amt911/zsh-mgr)
 ![GitHub Repo stars](https://img.shields.io/github/stars/amt911/zsh-mgr)

A simple plugin manager for zsh. Features:

- Auto-updates all plugins.
- Auto-updates itself.
- Configurable time interval for both auto-updaters.

### [zsh-unplugged](https://github.com/mattmc3/zsh_unplugged).
![GitHub last commit](https://img.shields.io/github/last-commit/mattmc3/zsh_unplugged)
 ![GitHub Repo stars](https://img.shields.io/github/stars/mattmc3/zsh_unplugged)

**zsh-unplugged** is a _tiny_ plugin manager. TLDR; You don't need a big bloated plugin manager for your ZSH plugins. A simple ~20 line function may be all you need.

### [zshPlug](https://github.com/Atlas34/zshPlug)
![GitHub last commit](https://img.shields.io/github/last-commit/Atlas34/zshPlug)
 ![GitHub Repo stars](https://img.shields.io/github/stars/Atlas34/zshPlug)

**zshPlug** is a minimalist plugin manager heavily based on [zap](https://github.com/zap-zsh/zap).

### [ztanesh](https://github.com/miohtama/ztanesh)
![GitHub last commit](https://img.shields.io/github/last-commit/miohtama/ztanesh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/miohtama/ztanesh)

**Ztanesh** aims to improve your UNIX command line experience and productivity with the the configuration provided by the ztanesh project: the tools will make your shell more powerful and easier to use.

### [ztheme](https://github.com/SkyyySi/ztheme)
![GitHub last commit](https://img.shields.io/github/last-commit/SkyyySi/ztheme)
 ![GitHub Repo stars](https://img.shields.io/github/stars/SkyyySi/ztheme)

**ztheme** is a small and fast theme engine for ZSH.

### [ztupide](https://github.com/mpostaire/ztupide)
![GitHub last commit](https://img.shields.io/github/last-commit/mpostaire/ztupide)
 ![GitHub Repo stars](https://img.shields.io/github/stars/mpostaire/ztupide)

**ztupide** is a simple and fast ZSH plugin manager. It uses `zcompile` and async loading to speed up your shell startup time.

### [zulu](https://github.com/zulu-zsh/zulu)
![GitHub last commit](https://img.shields.io/github/last-commit/zulu-zsh/zulu)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zulu-zsh/zulu)

**Zulu** is a environment manager for ZSH 5 or later, which aims to make it easy to manage your shell without writing any code.

- Easily manage your shell environment without editing files.
- Create aliases, functions and environment variables, and have them available to you at the next shell startup.
- Add and remove directories from `$path`, `$fpath` and `$cdpath` with simple commands.
- Install packages, plugins and themes easily, and have them available to you immediately.

### [zush](https://github.com/shyndman/zush) 🦥 - Mid-Performance ZSH Configuration
![GitHub last commit](https://img.shields.io/github/last-commit/shyndman/zush)
 ![GitHub Repo stars](https://img.shields.io/github/stars/shyndman/zush)

**zush** is a performance-aware ZSH configuration designed for sub-200ms startup times while maintaining full functionality.

Features:

- Instant Prompts - Basic prompt appears immediately, full prompt loads after ~129ms
- Plugin Management - Simple `zushp user/repo` command to install GitHub plugins
- Lazy Loading - Tools like `nvm`, `pyenv`, `cargo` load only when needed
- Auto-compilation - All ZSH files compiled with `zcompile` for faster loading
- Smart Caching - Environment changes cached for instant startup

### Performance

You can find performance timing comparisons for various frameworks in the following locations.

- [rossmacarthur/zsh-plugin-manager-benchmark](https://github.com/rossmacarthur/zsh-plugin-manager-benchmark) - Contains performance benchmarks for the most popular ZSH frameworks, including both install time and load time.
- [pm-perf-test](https://github.com/z-shell/pm-perf-test) - Tooling for running performance tests on multiple ZSH frameworks.

## Setups

This section is for full setup dropins - they aren't frameworks, but they're not simple plugins/themes either.

### oh-my-zsh

- [awesome-lazy-zsh](https://github.com/AmJaradat01/awesome-lazy-zsh) - automates your ZSH setup with 46 plugins, 5 themes, configuration profiles, and service installation. It installs dependencies, manages Oh My Zsh, and gives you a beautiful interactive CLI to build the terminal environment you want.
- [master-oogway](https://github.com/tomershay100/master-oogway) - A complete ZSH environment — dragon prompt theme, `git` aliases, fuzzy-finder functions, and 25 opt-in plugins — distributed as a standalone `git` repo.

### Raw ZSH

- [KronuZSH](https://github.com/Kronuz/KronuZSH) - An opinionated, complete ZSH configuration—not a plugin intended to be sourced into an existing framework. It installs the standard ZSH runcoms and owns the shell options, history, completion, keybindings, plugins, and prompt they load.

### zgenom

- [zsh-quickstart-kit](https://github.com/unixorn/zsh-quickstart-kit) - A simple quickstart for using ZSH with [zgenom](https://github.com/jandamm/zgenom). This automatically configures ZSH to use [zgenom](https://github.com/jandamm/zgenom) to load a curated (but easily customizable) collection of plugins and periodically automatically update itself, the plugins, and the quickstart kit itself.

### zinit

- [ZPWR](https://github.com/MenkeTechnologies/zpwr) - An extremely powerful custom terminal environment built on top of [Zinit](https://github.com/zdharma-continuum/zinit) for maximum speed.  A full terminal configuration framework including `zsh`, `tmux`, `fzf`, `vim` and spacemacs configurations.  It includes:

- 12.9k+ tab completions
- 1.9k+ aliases
- 330+ git aliases
- 400+ zpwr subcommands
- 2.8k functions
- 175+ zpwr environment variables
- 175+ perl, python, bash, ZSH scripts
- 2.8k line README.md
- 50k+ LOC
- 1 line install

## Prerequisites

If you're on a Mac, the `zsh` that comes with each OS update is usually very stale. You can use `brew install zsh` to update it.

Many of the themes here use special glyphs for things like displaying a branch icon. You'll need to use a [Nerd Font](https://github.com/ryanoasis/nerd-fonts) or a Powerline-compatible font in your terminal program or you'll see ugly broken boxes where the symbols should be.

Here are a few good sources for Nerd Fonts and Powerline-compatible fonts:

- [Awesome Terminal Fonts](https://github.com/gabrielelana/awesome-terminal-fonts) - A family of fonts that include some nice monospaced Icons.
- [Cascadia Code](https://github.com/microsoft/cascadia-code) - Microsoft's Cascadia Code
- [Commit Mono](https://commitmono.com) - Neutral programming typeface.
- [Fantasque Awesome Font](https://github.com/ztomer/fantasque_awesome_powerline) - A nice monospaced font, patched with Font-Awesome, Octoicons, and Powerline-Glyphs.
- [Fira Mono](https://github.com/mozilla/Fira) - Mozilla's Fira type family.
- [Hack](http://sourcefoundry.org/hack/) - Another Powerline-compatible font designed for source code and terminal usage.
- [Input Mono](https://input.djr.com/) - A family of fonts designed specifically for code. It offers both monospaced and proportional fonts and includes Powerline glyphs.
- [Iosevka](https://be5invis.github.io/Iosevka/) - Iosevka is an open source slender monospace sans-serif and slab-serif typeface inspired by [Pragmata Pro](http://www.fsd.it/fonts/pragmatapro.htm), M+ and [PF DIN Mono](https://www.myfonts.com/fonts/parachute/pf-din-mono/), designed to be the ideal font for programming.
- [Monaspace](https://github.com/githubnext/monaspace) - Monaspace is five interchangable type families, each of which is packaged into three distinct formats. You can install all of them side-by-side; their family names are distinct by family and format.
- [Monoid](http://larsenwork.com/monoid/) - Monoid is customizable and optimized for coding with bitmap-like sharpness at 15px line-height even on low res displays.
- [Mononoki](https://madmalik.github.io/mononoki/) - Mononoki is a typeface by Matthias Tellen, created to enhance code formatting.
- [More Nerd Fonts](https://www.nerdfonts.com/font-downloads) - Another site collecting Nerd Fonts to download.
- [Nerd fonts](https://github.com/ryanoasis/nerd-fonts) - A collection of over 20 patched fonts (over 1,700 variations) & the fontforge font patcher python script for Powerline, devicons, and vim-devicons: includes Droid Sans, Meslo, AnonymousPro, ProFont, Inconsolta, and many more. These can be installed with `brew` - do `brew tap homebrew/cask-fonts && brew install --cask fontname`
- [Powerline patched font collection](https://github.com/powerline/fonts) - A collection of a dozen or so fonts patched to include Powerline glyphs.
- [Spacemono](https://github.com/googlefonts/spacemono) - Google's new original monospace display typeface family.
- [Victor Mono](https://rubjo.github.io/victor-mono/) - Victor Mono is a free programming font with semi-connected cursive italics, symbol ligatures (!=, ->>, =>, ===, <=, >=, ++) and Latin, Cyrillic and Greek characters.

If you're looking for a new font to use, check out [www.codingfont.com](https://www.codingfont.com/) - it presents programming fonts in a bracket-style tournament and lets you keep picking the best of two presented options until landing on a final font that you like the most.

## Tutorials

### Generic ZSH

- [A Beautifully Productive Terminal Experience](https://mikebuss.com/2014/02/02/a-beautiful-productive-terminal-experience/) - Tutorial using a combination of [iTerm 2](https://www.iterm2.com/#/section/home), [ZSH](https://en.wikipedia.org/wiki/Z_shell), [Prezto](https://github.com/sorin-ionescu/prezto), [Tmux](https://tmux.app), and [Tmuxinator](https://github.com/tmuxinator/tmuxinator) to make for an extremely productive developer workflow.
- [A Guide to ZSH Completion With Examples](https://thevaluable.dev/zsh-completion-guide-examples/) - Explains ZSH autocompletion configuration with examples.
- [adamnorwood-zsh](https://github.com/adamnorwood/adamnorwood-zsh/) - A minimalist but readable ZSH setup based on [oh-my-posh](https://ohmyposh.dev/).
- [Arch Linux's ZSH introduction](https://wiki.archlinux.org/index.php/zsh) -  Not actually Arch or Linux-specific.
- [commandlinepoweruser.com](https://commandlinepoweruser.com/) - Wes Bos' videos introducing ZSH and oh-my-zsh.
- [GH](https://github.com/gustavohellwig/gh-zsh) - Setup ZSH on debian/Ubuntu-based linuxes. Installs [Powerlevel10k](https://github.com/romkatv/powerlevel10k), [zsh-completions](https://github.com/zsh-users/zsh-completions), [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions), [fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting/), and more.
- [How To Make an Awesome Custom Shell with ZSH](https://linuxstans.com/how-to-make-an-awesome-custom-shell-with-zsh/) - A beginner-friendly tutorial on how to install and configure a ZSH shell.
- [Profiling ZSH](https://ellie.wtf/notes/profiling-zsh) - Good article about profiling your ZSH setup to optimize startup time.
- [rs-example](https://github.com/al-jshen/zshplug-rs-example) - An example plugin showing how a Rust program can listen to and process commands from ZSH.
- [Why ZSH is Cooler than your Shell](https://www.slideshare.net/jaguardesignstudio/why-zsh-is-cooler-than-your-shell-16194692) - slideshare presentation.
- [zephyr](https://github.com/mattmc3/zephyr) - Zephyr uses built-in Zsh features to set up better default options, completions, keybindings, history, and much more.
- [ZSH for Humans](https://github.com/romkatv/zsh4humans) - A turnkey configuration for ZSH that aims to work really well out of the box. It combines a curated set of ZSH plugins into a coherent whole that feels like a finished product rather than a DIY starter kit.
- [ZSH Pony](https://github.com/mika/zsh-pony) - Covers customizing ZSH without a framework.
- [ZSH Setup by Easy-Cloud-in](https://github.com/Easy-Cloud-in/zsh-setup) - A powerful Zsh environment setup with Oh My Posh themes, essential plugins, and advanced search capabilities. This repository provides scripts to automatically configure your terminal with modern features and aesthetics. Requires a Debian or Ubuntu based system.
- [ZSH tips by Christian Schneider](http://strcat.de/zsh/#tipps) - An exhaustive list of ZSH tips by Christian Schneider.
- [ZSH Unplugged](https://github.com/mattmc3/zsh_unplugged) - Good resource if you want to eliminate using a framework but still easily use plugins.

### Antigen

- [belak/zsh-utils](https://github.com/belak/zsh-utils) - A minimal set of ZSH plugins designed to be low-friction and low-complexity.
- [mgdm.net/weblog/zsh-antigen/](https://mgdm.net/weblog/zsh-antigen/) - Michael Maclean's article about switching from oh-my-zsh to antigen.
- [Oh-my-zsh is the Disease and Antigen is the Vaccine](https://joshldavis.com/2014/07/26/oh-my-zsh-is-a-disease-antigen-is-the-vaccine/) - Josh Davis' introduction to Antigen.

### Oh-My-Zsh

- [Configuration to use Hyper.js as a ZSH terminal with a Windows Subsystem Linux on windows 10, with Oh My Zsh and the Powerlevel10k theme](https://github.com/jkergal/hyperjs-wsl-zsh-powerlevel10k-config-on-windows/) - How-to for getting Oh-My-ZSH running on WSL.
- [Getting started with oh-my-zsh](https://medium.com/@dienbui/using-oh-my-zsh-f65be6460d3f) - A beginners guide to oh-my-zsh by Dien Bui
- [How to Install and Configure Z Shell in Ubuntu](https://github.com/profpan396/how-to-install-and-configure-zshell) - Amar Pan's article will walk you through the process of installing and configuring ZSH, including how to change themes and enable the time-saving autosuggestions plug-in.
- [iTerm2 + Oh-My-ZSH: Supercharge Your Mac Terminal](https://catalins.tech/improve-mac-terminal) - Catalin Pit's tutorial on getting started with Oh-My-ZSH on macOS.
- [Learn Zsh in 80 Minutes macOS](https://www.youtube.com/watch?v=MSPu-lYF-A8) - A beginners guide to using Oh My Zsh on macOS by Karl Hadwen
- [Oh-My-Zsh! A Work of CLI Magic](https://medium.com/wearetheledger/oh-my-zsh-made-for-cli-lovers-installation-guide-3131ca5491fb) - Michiel Mulders installation guide for Ubuntu
- [One Key Linux Setup](https://github.com/miracleyoo/one-key-linux-setup) - Simple setup (ubuntu-only) of `zsh`, `oh-my-zsh`, `tmux`, `python` support and other packages.
- [Speeding Up My ZSH Shell](https://scottspence.com/posts/speeding-up-my-zsh-shell) - A quick guide to speeding up ZSH with OMZ

### Prezto

- [A Beautifully Productive Terminal Experience](https://mikebuss.com/2014/02/02/a-beautiful-productive-terminal-experience) - Mike Buss' blog post about using Prezto, [Tmux](https://tmux.app) & Tmuxinator.
- [Migrate from Oh-My-Zsh to Prezto](http://jeromedalbert.com/migrate-from-oh-my-zsh-to-prezto/) - Jerome Dalbert's blog post on migrating to Prezto.

### Zgen

- [rad-shell](https://github.com/brandon-fryslie/rad-shell) - A fantastically feature rich, lightning-fast shell setup, powered by [ZSH](http://www.zsh.org/), [Prezto](https://github.com/sorin-ionescu/prezto), and [Zgen](https://github.com/tarjoilija/zgen).

### Zinit (né zplugin)

- [BlaCk-Void-Zsh](https://github.com/black7375/BlaCk-Void-Zsh) - :crystal_ball: Awesome, customizable Zsh Starter Kit :stars::stars:. Includes powerline, [fzf](https://github.com/junegunn/fzf) integration, Weather and image viewing in some terminals.
- [zinit-configs](https://github.com/zdharma-continuum/zinit-configs) - Real-world configuration files (basically a collection of `.zshrc` files) holding [zinit](https://github.com/zdharma-continuum/zinit) invocations.

### ZSH on Windows

#### [superconsole](https://github.com/alexchmykhalo/superconsole) - Windows-only

- `ConEmu`/`zsh` out-of-the-box configured to restore previously opened tabs and shell working directories after `ConEmu` restart
- Choose between clean and inherited environment when starting new SuperConsole sessions
- Custom colorful scheme, colorful output for various commands
- `MSYS2` included, `zsh` and necessary software preinstalled, uses zsh-grml-config
- Uses [Antigen](https://github.com/zsh-users/antigen) for ZSH theme and config management
- Enabled number of ZSH plugins to activate completion, highlighting and history for most comfortable use
- Git-for-Windows repo with proper `git` and `git lfs` support for `MSYS2` environment is configured, `git` client already installed.
- `ssh-agent` for `git` works out-of-box, add your keys to `ConEmu/msys64/ConEmu/msys64/home/user/.ssh` dir
- Non-blocking ZSH prompt status updates thanks to [agkozak-zsh-prompt](https://github.com/agkozak/agkozak-zsh-prompt)
- Command-not-found handler customized for `MSYS2` suggests what package to install
- Sets up `nano` as main editor, enables `nano` syntax highlighting
- Custom helper scripts added to `ConEmu/msys64/3rdparty`

## Plugins

- [1password](https://github.com/agpenton/1password-zsh-plugin) - Adds [1Password](https://1password.com/) functionality including a `opswd` command that wraps the `op` command. It takes a service name as an argument and copies the password for that service to the clipboard.
- [256color](https://github.com/chrissicool/zsh-256color) - Enhances the terminal environment with 256 colors. It looks at the chosen `TERM` environment variable and sees if there is respective ncurses' terminfo with 256 colors available. The result is a multicolor terminal, if available.
- [abbr-path](https://github.com/felixgravila/zsh-abbr-path) - Adds functionality of the `theme_title_use_abbreviated_path` parameter from some oh-my-fish themes.
- [abbr-preview](https://github.com/cohml/zsh-abbr-preview) - Previews [abbr](https://github.com/olets/zsh-abbr) abbreviations as you type.
- [abbr](https://github.com/olets/zsh-abbr) - Manages auto-expanding abbreviations that expand inline when you hit space, inspired by the fish shell.
- [abbr](https://github.com/yachtida/zsh-abbr-plugin) - Lightweight abbreviation expansion for ZSH — inspired by [fish](https://fishshell.com), built for speed.
- [abbrev-alias](https://github.com/momo-lab/zsh-abbrev-alias) - Provides functionality similar to `vim`'s abbreviation expansion.
- [actiona](https://github.com/matthieusb/act) - Make it easier to call [actiona](https://github.com/Jmgr/actiona) scripts from your command line. Includes tab completions.
- [activate-py-environment](https://github.com/se-jaeger/zsh-activate-py-environment) - Automagically detects and activates your python environments (`poetry`, `virtualenv` and `conda`) while traversing directories.
- [adguard-helper](https://github.com/MohamedElashri/adguard-helper) - Simplies interaction with the [AdGuard VPN CLI](https://github.com/AdguardTeam/AdGuardVPNCLI). It provides user-friendly commands that reduce the need to remember complex flags and commands by offering a more intuitive interface.
- [adonisjs](https://github.com/baliestri/adonisjs.plugin.zsh) - Plugin for skipping the `node` part of the `ace` command.
- [agent-history](https://github.com/aaronbronow/agent-history) - ZSH shortcut to resume recent AI coding sessions in the terminal.
- [ai-cli](https://github.com/asibin/zsh-ai-cli-generator) - Describe what you want in plain English and get a shell command back, ready to edit or run. Claude writes the command, or a model you run yourself through Ollama, LM Studio or any OpenAI-compatible server; nothing runs until you press Enter. Type a request and press Ctrl-O, or run `ai <request>`.
- [ai-cmd](https://github.com/kylesnowschwartz/zsh-ai-cmd) - Natural language to shell commands with ghost text preview. Requires `curl`, [`jq`](https://stedolan.github.io/jq/) and an Anthropic API key.
- [ai-cmd](https://github.com/shanemcd/ai-cmd) - Generate shell commands from natural language using LLMs via [Claude Code](https://docs.anthropic.com/en/docs/claude-code) or [Ollama](https://ollama.ai/).
- [ai-commands](https://github.com/muePatrick/zsh-ai-commands) - Asks GPT (gpt-4-turbo-preview) for CLI commands that achieve the described target action.
- [airpods-battery](https://github.com/louis-thevenet/zsh-airpods-battery/) - Looks for AirPods via Bluetooth and puts their battery charge state into `$RPROMPT`.
- [aish](https://github.com/chr15m/aish) - Instant shell script solutions from OpenAI right in your prompt.
- [alacritty](https://github.com/casonadams/alacritty-shell) - Control [alacritty](https://github.com/alacritty/alacritty/wiki/Color-schemes) color schemes.
- [alehouse](https://github.com/sticklerm3/alehouse) - Contains short aliases for [brew](https://brew.sh) commands, inspired by `betterbrew`.
- [alias-finder](https://github.com/akash329d/zsh-alias-finder) - Displays an alias when you use a command you have aliased previously. Helpful for remembering aliases you have defined in the past. Written as a pure ZSH script for speed.
- [alias-maker](https://github.com/MefitHp/alias-maker) - Allows you to easily create and manage aliases from the command line.
- [alias-tips](https://github.com/djui/alias-tips) - An [oh-my-zsh](https://ohmyz.sh/) plugin to help remembering those aliases you defined once.
- [allclear](https://github.com/givensuman/zsh-allclear) - Clears the terminal when you `cd` into `$HOME`.
- [allergen](https://github.com/stanislas/allergen) - A collection of custom ZSH plugins to use with Antigen.
- [almostontop](https://github.com/Valiev/almostontop) - Clears previous command output every time before new command executed in shell. Inspired by the [alwaysontop](https://github.com/swirepe/alwaysontop) plugin for `bash`.
- [alt-and-select](https://github.com/raisty/alt-and-select) - Binds the `alt-c` (copy), `alt-`v (paste), `alt-x` (cut) keyboard shortcut to commands: `copy-region-as-kill`, `yank` and `kill-region`. Remaps the execute command to `alt-shift-X`.
- [ansible-fzf](https://github.com/alexiszamanidis/zsh-ansible-fzf/) - A plugin that completes ansible-playbook tags and works with fzf-tab.
- [ansible](https://github.com/sparsick/ansible-zsh) - A plugin for [Ansible](https://www.ansible.com/).
- [ansimotd](https://github.com/yuhonas/zsh-ansimotd) - Adds old-school cool ANSI art when a login shell starts.
- [ansiweather](https://github.com/fcambus/ansiweather) - Weather in your terminal, with ANSI colors and Unicode symbols.
- [antidote-use-omz](https://github.com/getantidote/use-omz) - Make using [oh-my-zsh](https://ohmyz.sh/) with [antidote](https://getantidote.github.io/) seamless.
- [antigen-git-rebase](https://github.com/smallhadroncollider/antigen-git-rebase) - Antigen/ZSH script to aid with `git` rebasing.
- [anyframe](https://github.com/mollifier/anyframe) - A `peco`/`percol`/`fzf` wrapper plugin for ZSH.
- [apache2](https://github.com/voronkovich/apache2.plugin.zsh) - Adds aliases and functions for managing Apache2.
- [apparix](https://github.com/micans/apparix) - Command line directory bookmarks with jumping to bookmarks, subdirectory tab completion, distant listing etc.
- [apple-touchbar](https://github.com/zsh-users/zsh-apple-touchbar) - Adds MacBook Pro touchbar support in [iTerm 2](https://iterm2.com).
- [appup](https://github.com/Cloudstek/zsh-plugin-appup) - Adds `start`, `stop`, `up` and `down` commands when it detects a `docker-compose.yml` or `Vagrantfile` in the current directory (e.g. your application). Just run `up` and get coding!
- [apt](https://github.com/GeoLMg/apt-zsh-plugin) - For distros with `apt` package manager. Offers to install missing programs for you.
- [arc-prompt](https://github.com/dkryaklin/arc-zsh-plugin) - Arc VCS prompt integration with branch display, status caching, operation mode detection, agnoster theme support, and aliases.
- [arc-search](https://github.com/michaelsousajr/zsh-arc-search) - Enables quick searches using Arc browser directly from your terminal. Features URL encoding for search terms.
- [arc](https://github.com/anton-rudeshko/zsh-arc) - Adds aliases for Yandex version control system.
- [arch-aptstyle](https://github.com/MRoldL001/arch-aptstyle) - Designed to provide Debian/Ubuntu-style `apt` command wrappers for users transitioning from those distributions to arch. Requires `yay` or `paru` for full functionality.
- [archlinux (fourdim)](https://github.com/fourdim/zsh-archlinux) - Defines helper functions for `pacman` on Arch Linux.
- [archlinux (junker)](https://github.com/Junker/zsh-archlinux) - Based on the oh-my-zsh [archlinux](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/archlinux) plugin. Defines helper functions and aliases.
- [arduino](https://github.com/raghur/zsh-arduino) - Adds scripts to build, upload and monitor arduino sketches from a command line. Requires [`jq`](https://stedolan.github.io/jq/).
- [artisan](https://github.com/jessarcher/zsh-artisan) - Laravel `artisan` plugin for ZSH to help you to run `artisan` from anywhere in the project tree, with tab completion!
- [asciidoctor](https://github.com/sparsick/asciidoctor-zsh) - A plugin for AsciiDoctor.
- [asdf (kiurchv)](https://github.com/kiurchv/asdf.plugin.zsh) - Integration and completions for [asdf](https://github.com/asdf-vm/asdf), the extendable version manager, with support for Ruby, Node.js, Elixir, Erlang and more.
- [asdf (zimfw)](https://github.com/zimfw/asdf) - Initializes [asdf](https://github.com/asdf-vm/asdf), installing it using `git` if not installed yet. Also, bypasses the shims if you're using the [direnv](https://github.com/asdf-community/asdf-direnv) plugin, as suggested by the plugin [pro-tips](https://github.com/asdf-community/asdf-direnv/#pro-tips).
- [asdf-direnv](https://github.com/redxtech/zsh-asdf-direnv) - Integration and completions for [asdf](https://github.com/asdf-vm/asdf) and [direnv](https://github.com/asdf-community/asdf-direnv).
- [asdf-prompt](https://github.com/CurryEleison/zsh-asdf-prompt) - Provides a function usable in prompts that displays version information for your current tool versions.
- [ask-opencode](https://github.com/andreacasarin/zsh-ask-opencode) - Integrates OpenCode AI with your shell, allowing you to generate shell commands using natural language. Press `Ctrl+O` to transform any text in your command line into optimized shell commands.
- [ask](https://github.com/Licheam/zsh-ask) - Serves as a ChatGPT API frontend, enabling you to interact with ChatGPT directly from the ZSH shell using only `cURL` and `jq`.
- [assistant](https://github.com/tarball0/zsh-assistant) - Uses ollama to answer questions about commands.
- [assume-role](https://github.com/weizard/assume-role) - Allows you to assume AWS IAM roles easily. Includes completions.
- [async](https://github.com/mafredri/zsh-async) - Library for running asynchronous tasks in ZSH without requiring any external tools. Allows you to run multiple asynchronous jobs, enforce unique jobs (multiple instances of the same job will not run), flush all currently running jobs and create multiple workers (each with their own jobs).
- [atom-plugin](https://github.com/CorradoRossi/oh-my-zsh-atom-plugin) - Based on the [Sublime](https://github.com/valentinocossar/sublime) plugin, lets you launch a file or folder in [Atom](https://atom.io) from [iTerm 2](https://iterm2.com).
- [atuin](https://github.com/ellie/atuin) - Replaces your existing shell history with a SQLite database, and records additional context for your commands. Additionally, it provides optional and fully encrypted synchronisation of your history between machines, via an Atuin server.
- [aur-install](https://github.com/redxtech/zsh-aur-install) - Small plugin to install packages from the AUR.
- [auto-color-ls](https://github.com/gretzky/auto-color-ls) - Automatically list directories with `colorls`.
- [auto-fu.zsh](https://github.com/hchbaw/auto-fu.zsh) - Automatic complete-word and list-choices. Originally incr-0.2.zsh by y.fujii <y-fujii at mimosa-pudica.net>.
- [auto-ls (commanda-panda)](https://github.com/commanda-panda/zsh-auto-ls) - Automatically runs `ls` or `color-ls` if available on `cd`.
- [auto-ls (desyncr)](https://github.com/desyncr/auto-ls) - Automatically `ls` when cding to a new directory.
- [auto-notify](https://github.com/MichaelAquilina/zsh-auto-notify) - Automatically sends out a notification when a long running task has completed.
- [auto-nvm](https://github.com/manlao/zsh-auto-nvm) - Automatically switches to the node version specified in a given directory.
- [auto-pnpm-use](https://github.com/brunomacedo/zsh-auto-pnpm-use) - Automatically loads the node version specified in `.nvmrc` or `.npmrc`.
- [auto-venv (skylor0tang)](https://github.com/Skylor-Tang/auto-venv) - Automatically activates the Python virtual environment in the current directory or its parent directories.
- [autocomplete](https://github.com/marlonrichert/zsh-autocomplete) - Automatically lists completions as you type and provides intuitive keybindings for selecting and inserting them.
- [autodark (cravend)](https://github.com/cravend/autodark) - Switches between user-specified light and dark themes. Only works on macOS.
- [autodark (vbwx)](https://github.com/vbwx/zsh-autodark) - Switches to another Terminal profile if dark mode is enabled (macOS-only).
- [autodotenv](https://github.com/nocttuam/autodotenv) - Will prompt you to load variables when you `cd` into a directory containing a `.env` file.
- [autoenv-extended](https://github.com/zpm-zsh/autoenv) - Extended version of the [zsh-autoenv](https://github.com/Tarrasch/zsh-autoenv) plugin.
- [autoenv](https://github.com/hyperupcall/autoenv) - Directory-based environments.
- [autofix](https://github.com/deXterbed/zsh-autofix) - When a command fails, captures its `stderr` and asks a local [Ollama](https://ollama.com) model for a fix, shown as ghost-text you can accept with `Tab`. Silent on success.
- [autojump](https://github.com/wting/autojump) - A `cd` command that learns - easily navigate directories from the command line. Install autojump-zsh for best results.
- [automated-actions](https://github.com/Fynardo/zsh-automated-actions) - Provides aliases for the [automated-actions](https://github.com/app-sre/automated-actions) CLI.
- [autopair](https://github.com/hlissner/zsh-autopair) - A ZSH plugin for auto-closing, deleting and skipping over matching delimiters. Only tested on ZSH 5.0.2 or later.
- [autoquoter](https://github.com/ianthehenry/zsh-autoquoter) - A `zle` widget ("zsh plugin") that will automatically put quotes around arguments to certain commands.
- [autosuggestions-plugin](https://github.com/jumbojett/zsh-autosuggestions-plugin) - 🐟 [Fish](https://fishshell.com/)-style auto-suggestions in ZSH.
- [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - [Fish](https://fishshell.com/)-like fast/unobtrusive autosuggestions for ZSH.
- [autoswitch-virtualenv](https://github.com/MichaelAquilina/zsh-autoswitch-virtualenv) - ZSH plugin to automatically switch python virtualenvs and pipenvs when traversing directories. Automatically detects [pipenv](https://pypi.org/project/pipenv/) and [poetry](https://python-poetry.org/) projects.
- [autoupdate-antibody](https://github.com/spikespaz/autoupdate-antibody-zsh) - A fork of [autoupdate-antigen](https://github.com/unixorn/autoupdate-antigen.zshplugin) for the [Antibody](https://getantibody.github.io) plugin manager, with the added ability to cooperate with static loading.
- [autoupdate-antigen](https://github.com/unixorn/autoupdate-antigen.zshplugin) - [Antigen](https://github.com/zsh-users/antigen) doesn't do automatic updates like [oh-my-zsh](https://ohmyz.sh/). This plugin adds auto updating for `antigen`, both of `antigen` and the bundles loaded in your configuration.
- [autoupdate-oh-my-zsh-plugins](https://github.com/TamCore/autoupdate-oh-my-zsh-plugins) - [oh-my-zsh](https://ohmyz.sh/) doesn't automatically update non-core plugins, this plugin autoupdates `git` repositories in the `$ZSH_CUSTOM` directory.
- [autovenv (linnnus)](https://github.com/linnnus/autovenv) - Automatically activates Python virtual environments when entering their parent directory.
- [autovenv (snovra-dev)](https://github.com/snovra-dev/zsh-autovenv) - Automatically activates Python virtual environments when entering their parent directory.
- [aws-cli-mfa](https://github.com/joepjoosten/aws-cli-mfa-oh-my-zsh) - AWS CLI MFA plugin based on sweharris' [aws-cli-mfa](https://github.com/sweharris/aws-cli-mfa). Supports specifying `mfa_device` in profile.
- [aws-login](https://github.com/mithredate/zsh-aws-login) - Provides an `aws-login` command that starts an AWS session that only the current terminal and its child processes can use.
- [aws-mfa](https://github.com/FreebirdRides/oh-my-zsh-aws-mfa) - Plugin for using AWS MFA.
- [aws-plugin](https://github.com/pookey/zsh-aws-plugin) - Adds helper functions for `aws` command. Includes mfa and `assume-role` helpers.
- [aws-upload](https://github.com/borracciaBlu/aws-upload-zsh) - Boost your productivity with `aws-upload`.
- [aws-vault (blimmer)](https://github.com/blimmer/zsh-aws-vault) - Plugin for [aws-vault](https://github.com/99designs/aws-vault). Includes tab completions.
- [aws-vault (zsh-contrib)](https://github.com/zsh-contrib/zsh-aws) - [aws-vault](https://github.com/99designs/aws-vault) integration with per-window AWS profile support in `tmux`.
- [aws-vault-profiles](https://github.com/jonscheiding/zsh-plugin-aws-vault-profiles) - Plugin that integrates usage of [aws-vault](https://github.com/99designs/aws-vault) with the `$AWS_PROFILE` environment variable.
- [aws2](https://github.com/drgr33n/oh-my-zsh_aws2-plugin) - Provides completion support for version 2 of the [awscli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and a few utilities to manage AWS profiles and display them in the prompt.
- [awsmultiaccount](https://github.com/acidix/zsh-awsmultiaccount) - Manages AWS profiles and assuming roles in a multi-account organization. It provides helper functions to easily switch between AWS profiles and assume the OrganizationAccountAccessRole in different accounts. Requires the `aws` cli and [jq](https://stedolan.github.io/jq/)
- [awsp](https://github.com/suonto/awsp-zsh-plugin) - AWS profile management for ZSH. Inspired by oh-my-zsh's [aws](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/aws/aws.plugin.zsh) plugin. Shows details of currently active AWS profile.
- [awsssh](https://github.com/raisedadead/zsh-awsssh) - List, select and `ssh` into EC2 instances.
- [awsume](https://github.com/Sordie/AWSume) - Plugin that enables showing the current [awsume](https://github.com/trek10inc/awsume) profile.
- [azcli](https://github.com/dmakeienko/azcli) - Helper for using the Azure cli tools.
- [azure-keyvault](https://github.com/milespossing/Azure-Keyvault-Zsh) - Makes using Azure keyvaults less verbose from the cli.
- [azure-subscription](https://github.com/dmakeienko/azure-subscription-prompt) - Displays information about the Azure current Subscription and tenant.
- [banner](https://github.com/drkhsh/zsh-banner) - Displays ANSI/ASCII art on session startup.
- [baseballfunfacts](https://github.com/richardmoyer/baseballfunfacts) - Print random baseball related "fun facts" in your shell. Depends on `fortune` and `cowsay` being installed.
- [bash-quote](https://github.com/jtprog/bash-quote) - Get random quote from Bash.im.
- [bash](https://github.com/chrissicool/zsh-bash) - Makes ZSH more Bash compatible. It redefines the source command to act more like `bash` does. It also enables `bash` completions.
- [bat](https://github.com/fdellwing/zsh-bat) - Adds some helper aliases for [bat](https://github.com/sharkdp/bat) users.
- [battery_state](https://github.com/Jactry/zsh_battery_state) - Show battery state in right-prompt.
- [bd](https://github.com/Tarrasch/zsh-bd) - Jump back to a specific directory, without doing `cd ../../..`.
- [bepoptimist](https://github.com/sheoak/zsh-bepoptimist/) Remaps vi-mode for the French bépo keyboard.
- [better-chmod](https://github.com/Balzabu/zsh-better-chmod) - Adds a `bchmod` command (and an optional `chmod` replacement) that accepts symbolic and octal permission formats with input validation and colored output.
- [bitbucket-git-helpers](https://github.com/unixorn/bitbucket-git-helpers.plugin.zsh) - Adds helper scripts to allow you to create bitbucket PRs or open a directory in the current branch.
- [bitwarden (casonadams)](https://github.com/casonadams/bitwarden-cli) - A [Bitwarden](https://bitwarden.com/download/) CLI fuzzy finder using [fzf](https://github.com/junegunn/fzf). Requires [jq](https://stedolan.github.io/jq/).
- [bitwarden (game4move78)](https://github.com/Game4Move78/zsh-bitwarden) - Adds functions to manage [bitwarden](https://bitwarden.com/) sessions.
- [bitwarden (kalsowerus)](https://github.com/kalsowerus/zsh-bitwarden) - Opens a [fzf](https://github.com/junegunn/fzf) widget containing your [Bitwarden](https://bitwarden.com/) vault items. Upon selecting an item either the username or password will be either written into the shell or copied into the clipboard. Requires [fzf](https://github.com/junegunn/fzf), `jq` and `bitwarden`.
- [blackbox](https://github.com/StackExchange/blackbox) - Stack Exchange's toolkit for storing keys/credentials securely in a `git` repository.
- [bob](https://github.com/wintermi/zsh-bob) - Plugin for [bob](https://github.com/MordechaiHadad/bob) a cross-platform and easy-to-use Neovim version manager.
- [bofh](https://github.com/fundor333/bofh) - Adds functions to display random bofh fortunes.
- [bol](https://github.com/ikhurramraza/bol) - Prints a random quote when you open a terminal window.
- [boot-kit](https://github.com/seankoji-com/zsh-boot-kit) - Adds instrumentation to your ZSH environment.
- [boss-docker](https://github.com/bossjones/boss-docker-zsh-plugin) - Manages `docker` on macOS.
- [boss-git](https://github.com/bossjones/boss-git-zsh-plugin) - Adds some convenience aliases for `git`.
- [branch-manager](https://github.com/elstgav/branch-manager) - A plugin for managing `git` branches.
- [brave](https://github.com/troykelly/oh-my-zsh-brave) - Manages [Brave](https://brave.com) profiles. With this plugin, you can start the Brave Browser with a specific user profile by using the brave command followed by the profile's name. The plugin also implements autocompletion for the profile names so you won't have to type the entire profile name manually.
- [brew (rhuang2014)](https://github.com/rhuang2014/brew) - Standalone plugin for the [Homebrew](https://brew.sh/) Package Manager.
- [brew (wintermi)](https://github.com/wintermi/zsh-brew) - Simple plugin for the [Homebrew](https://brew.sh/) package manager.
- [brew-install](https://github.com/marceloclp/zsh-brew-install) - Installs and loads [brew](https://brew.sh) on WSL.
- [brew-switcher](https://github.com/fielding/zsh-brew-switcher) - Automatically switch between Homebrew installations based on the current active arch, arm64 or x86_64, on Apple Silicon Macs.
- [browse-commit](https://github.com/adolfoabegg/browse-commit) - Lets you open any commit in your browser from the command line.
- [bruse](https://github.com/aubreypwd/zsh-plugin-bruse) - Makes it easy to `brew link` different versions of packages.
- [btrfs-snapper](https://github.com/crisis1er/zsh-btrfs-snapper) - Plugin for btrfs filesystem management and snapper snapshot control on openSUSE Tumbleweed — enriched commands, safety guards, and filtered views not available in native tools.
- [bumblebee](https://github.com/Niverton/zsh-bumblebee-plugin) - A plugin to toggle prepending `optirun` in the command line.
- [bw](https://github.com/begris/bw-zsh-plugin) - Provides formatting options and easy access to credentials stored in [Bitwarden](https://bitwarden.com) via the Bitwarden [CLI](https://bitwarden.com/download/). The plugin tries to retrieve a valid session before each action, therefore an explicit login is not nescessary beforehand.
- [bws](https://github.com/elogiclab/zsh-bws) - Simplify and improve the retrieval of secrets from the [Bitwarden](https://bitwarden.com) Secret Manager.
- [c](https://github.com/sebastiangraz/c) - Adds some `git` shortcuts.
- [cage](https://github.com/matijaoe/cage.plugin.zsh) - Adds command for [age](https://github.com/FiloSottile/age). It encrypts a plain file with a passphrase, decrypts an age file, and works out which from the file's own header.
- [calc (arzzen)](https://github.com/arzzen/calc.plugin.zsh) - A calculator for ZSH.
- [calc (sam-programs)](https://github.com/Sam-programs/zsh-calc) - Allows you to run math calculations with no prefixes.
- [calibre-zaw-source](https://github.com/junkblocker/calibre-zaw-source) - [Calibre - E-book management](https://calibre-ebook.com/) source for [zaw](https://github.com/zsh-users/zaw)
- [caniuse](https://github.com/walesmd/caniuse.plugin.zsh) - Add [Can I Use](https://caniuse.com) support to ZSH.
- [caper-bush](https://github.com/kobylinski/caper-bush) - Enhances Git's tab autocomplete by using AI to generate concise, context-aware summaries of staged changes for thoughtful commit messages. Requires and OpenAI key, `jq` and `yq`.
- [careful_rm](https://github.com/MikeDacre/careful_rm) - A wrapper for `rm` that adds trash/recycling and useful warnings.
- [case](https://github.com/rtuin/zsh-case) - A ZSH plugin that adds two aliases `tolower` and `toupper` to switch output case.
- [ccline](https://github.com/jianshuo/ccline) - Type a thought at your zsh prompt — no command, no prefix — and get an answer from Claude or Codex. If the answer contains shell commands, confirm once and run them.
- [ccusage](https://github.com/hydai/zsh-ccusage) - Displays real-time AI usage costs from the `ccusage` CLI tool directly in your terminal prompt.
- [cd-gitroot](https://github.com/mollifier/cd-gitroot) - A ZSH plugin to `cd` to the `git` repository root directory.
- [cd-ls](https://github.com/zshzoo/cd-ls) - Automatically `ls` after `cd`.
- [cd-reminder](https://github.com/bartboy011/cd-reminder) - Display reminders when `cd`-ing into specified directories.
- [cd-reporoot](https://github.com/P4Cu/cd-reporoot) - A ZSH plugin to `cd` to the current repository checkout's root directory.
- [cd-ssh](https://github.com/jeffwalter/zsh-plugin-cd-ssh) - `ssh` to a server when you accidentally `cd` to it.
- [cdbk](https://github.com/MikeDacre/cdbk) - A ZSH plugin to allow easy named directory creation - shortcuts to any directory you want.
- [cdc](https://github.com/evanthegrayt/cdc) - Makes it easier to change directories to directories that are subdirs of a user-defined list of directories. Includes tab-completion, session history and `pushd`, `popd` and `dirs` equivalents.
- [cdhist](https://github.com/joknarf/cdhist) - cd history/subdir/locatedir navigation. simple cd history, alias builtin `cd` to add `cd` history, rapidily swich to already visited directories, can use `locate`, `mlocate` or `plocate` to rapidly cd to any directory
- [cdr](https://github.com/willghatch/zsh-cdr) - Easy setup of `cdr` for ZSH.
- [certview](https://github.com/jnnrgd/certview) - Fast inspection and verification of X.509 certificates, CSRs, and cryptographic keys (RSA, ECC, Ed25519) in both PEM and DER formats.
- [change-case](https://github.com/mtxr/zsh-change-case) - Plugin for fast swap between upper and lower case in your command line. :sunglasses:
- [cheatsheet](https://github.com/0b10/cheatsheet) - Plugin to easily view, create, and edit cheatsheets.
- [check-deps](https://github.com/zpm-zsh/check-deps) - Helper for ZSH plugins that allows them to show how to install any missing dependencies. Works on Debian (and derivatives like Ubuntu), Arch and its derivatives, Node.js and ZSH plugins if you are using the [zpm](https://github.com/zpm-zsh/zpm) framework.
- [chgo](https://github.com/sbfaulkner/chgo-plugin-zsh) - Clone of `chruby` modified to make it easy to switch between multiple Go versions.
- [chuchu](https://github.com/kiki-ki/chuchu) - Tints your terminal background by where you are. When you step into a pod, a container or a remote host, the pane's background turns a color derived from that name, and goes back once you return to the prompt. The same name always gets the same color, so you learn to recognise places at a glance.
- [claude-code-shell](https://github.com/ArielTM/zsh-claude-code-shell) - Translates natural language comments into shell commands using [Claude Code](https://claude.ai/claude-code).
- [claude-code](https://github.com/matheus-poli/zsh-claude-code) - Adds `ask` and `explain` commands plus Ctrl+X (rewrite a natural-language request into a command, in place) and Alt+E (explain the typed command) widgets, built on the Claude Code CLI with tools and MCP servers disabled.
- [claude-guard](https://github.com/jokerlin/claude-guard) - checks your egress IP before [Claude Code](https://docs.anthropic.com/en/docs/claude-code) starts. If the IP that claude.ai sees is not on your allowlist, claude stops and asks before it connects.
- [claude-sandbox](https://github.com/LordMauldascha/claude-sandbox) - Points `CLAUDE_CONFIG_DIR` at a throwaway directory, so everything Claude Code reads and writes (settings, plugins, skills, history, credentials) stays inside that sandbox. Leave it, delete it, and your real setup is exactly as you left it.
- [claude-shell](https://github.com/myk-org/claude-shell) - Provides intelligent shell assistance using Claude AI. It offers seven powerful features to enhance your command-line experience: natural language command translation, command explanation, error fixing, intelligent history search, and Kitty terminal integration for advanced scrollback analysis.
- [claude](https://github.com/HundredAcreStudio/zsh-claude) - AI-powered command suggestions and explanations for ZSH using Claude AI. Get intelligent shell command help with simple keybindings. Transform natural language into executable shell commands, or get detailed explanations of complex commands - all directly in your terminal with Claude AI integration.
- [clean-history](https://github.com/Automaat/zsh-clean-history) - Smart ZSH history cleanup plugin that automatically removes typos and failed commands based on similarity analysis. Removes failed commands similar to successful ones, finds rare commands similar to common variants, automatically captures command success/failure, adjusts similarity thresholds and behavior & creates backups before cleaning.
- [clean-project](https://github.com/wwilsman/zsh-clean-project) - Remove files from projects (automatically by default). Useful for keeping `.DS_Store` and `Thumbs.db` files from cluttering your directories.
- [cleanzip](https://github.com/Xeferis/cleanzip) - Helps create zip files that don't have data that shouldn't be in there.
- [cleanzsh](https://github.com/diegoos/cleanzsh) - Lightweight theme. Includes decorators for user, working directory, Git branch, and runtime versions (Ruby, Node, Python, PHP, Bun) with compact Nerd Font icons.
- [clipboard](https://github.com/zpm-zsh/clipboard) - Adds a cross-platform helper function to access the system clipboard. Works on macOS, X11 (and Wayland) and Cygwin.
- [cmd-status](https://github.com/BlaineEXE/zsh-cmd-status) - Reports the status of commands including return code and duration.
- [cmdtime](https://github.com/tom-auger/cmdtime) - Displays the duration of a command to the terminal forked from the [timer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/timer) plugin.
- [code-review](https://github.com/xorkevin/code-review-zsh) - Launches `git difftool` on `git merge-base target_branch base_branch` and `target_branch`.
- [code-stats](https://gitlab.com/code-stats/code-stats-zsh) - Counts keypresses and logs stats to [Code::Stats](https://codestats.net/).
- [codex](https://github.com/tom-doerr/zsh_codex) - Enables you to use OpenAI's powerful Codex AI in the command line.
- [coffee-time](https://github.com/gakimball/zsh-coffee-time) - Adds the `caf` alias, which runs `caffeinate -dims`. The extra flags keep everything awake: the system, the drive, and the display.
- [color-logging](https://github.com/p1r473/zsh-color-logging) - provides a really easy to use logging library with notifications for pushbullet and pushover, colorizes tools like `cat` and `ls` and provides a color library.
- [colored-man-pages-mod](https://github.com/zuxfoucault/colored-man-pages_mod) - Forked from [ohmyzsh/ohmyzsh/plugins/colored-man-pages](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/colored-man-pages/colored-man-pages.plugin.zsh). Colorizes `man` output.
- [colored-man-pages-plus](https://github.com/diverdale/colored-man-pages-plus) - Semantically colorizes `man` pages by role with curated truecolor themes, OSC-8 links, and automatic light/dark detection.
- [colored-man-pages](https://github.com/ael-code/zsh-colored-man-pages) - Colorize `man` pages.
- [colorize-functions](https://github.com/Freed-Wu/zsh-colorize-functions) - Colorizes functions for ZSH.
- [colorize](https://github.com/zpm-zsh/colorize) - Colorize the output of various programs.
- [colorls](https://github.com/Kallahan23/zsh-colorls) - Defines a few helpful shortcuts to some colorls functions.
- [colors (Tarrasch)](https://github.com/Tarrasch/zsh-colors) - Makes it easier to colorize text from the CLI. `red foo` just works.
- [colors (zpm-zsh)](https://github.com/zpm-zsh/colors) - Enhanced colors for ZSH.
- [command-execution-timer](https://github.com/olets/command-execution-timer) - Displays the time an interactive shell command takes to execute.
- [command-not-found (freed-wu)](https://github.com/Freed-Wu/zsh-command-not-found) - Uses the `command-not-found` package for ZSH to provide suggested packages to be installed if a command cannot be found.
- [command-not-found (tarrasch)](https://github.com/Tarrasch/zsh-command-not-found) - A mirror of the [oh-my-zsh](https://ohmyz.sh) [command-not-found](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/command-not-found) plugin so you don't have to include all of oh-my-zsh.
- [command-note](https://github.com/KKRainbow/zsh-command-note.plugin) - Record complex commands and comment on them.
- [command-time](https://github.com/popstas/zsh-command-time) - Show execution time for long commands in ZSH and [powerlevel9k](https://github.com/bhilburn/powerlevel9k). Similar to `REPORTTIME` builtin, but only outputs when user + system time >= `REPORTTIME`.
- [communism](https://github.com/victoria-riley-barnett/Communism/) - Displays a Marx quote of the day.
- [compe](https://github.com/tamago324/compe-zsh) - Add completion for [nvim-compe](https://github.com/hrsh7th/nvim-compe).
- [conda (themysciradata)](https://github.com/ThemysciraData/conda.plugin.zsh) - Adds function to provide a prompt segment for [conda](https://conda.io) and aliases for some base functions.
- [conda (wardhanisukoco)](https://github.com/wardhanisukoco/zsh-plugin-conda/) - Automatically loads `conda` and provides functions for detecting `conda` versions for use in themes.
- [conda-init](https://github.com/commiyou/conda-init-zsh-plugin) - Cleans up environment variables so [conda](https://conda.io) doesn't mess up `tmux`.
- [condaenv](https://github.com/saravanabalagi/zsh-plugin-condaenv) - Provides a `condaenv_prompt_info` function which returns the current `conda` environment name.
- [confer](https://github.com/SleepyBag/zsh-confer) - Tries to find program configuration files automatically so you can do things like `conf vim` to edit your `vim` configuration files.
- [containers](https://github.com/redxtech/zsh-containers) - Provides aliases and better interoperability between [podman](https://podman.io) and [docker](https://docker.com) commands based on which you have installed.
- [copy-pasta](https://github.com/ChrisPenner/copy-pasta) - Copy and paste files in your terminal like you would in a GUI.
- [copyzshell](https://github.com/rutchkiwi/copyzshell) - A ZSH plugin to copy your shell configuration to another machine over `ssh`.
- [cordova](https://github.com/andredestro/cordova-zsh-plugin) - Provides handy aliases for [Apache Cordova](https://cordova.apache.org/) commands, inspired by git-style shortcuts (gco, gcb, etc).
- [cowsay](https://github.com/phucisstupid/cowsay.zsh) - Displays a joke with `cowsay` every time you open a terminal.
- [crash](https://github.com/molovo/crash) - Adds proper error handling, exceptions and try/catch for ZSH.
- [crayon-syntax](https://github.com/gsemet/crayon-syntax-zsh) - ZSH syntax highlighting for the Crayon Plugin for Wordpress.
- [create-ai-memory](https://github.com/rambaarde/create-ai-memory) - Persistent, agent-agnostic session memory for AI coding CLIs; loads a Markdown vault of profile, project, and session context into ZSH launchers for Claude Code, Codex, Gemini, Cursor, and opencode.
- [cros-auto-notify](https://github.com/D3STY/cros-auto-notify-zsh) - Automatically sends out a notification when a long running task has completed. Works with macOS and linux (if `hterm-notify` is installed).
- [crystal](https://github.com/veelenga/crystal-zsh) - A plugin for [Crystal](https://github.com/crystal-lang/crystal).
- [ctrl-z](https://github.com/Zile995/zsh-ctrl-z) - Enhances the default CTRL+Z behavior using [fzf](https://github.com/junegunn/fzf). It allows you to visually browse, resume, or terminate suspended background jobs directly from your terminal prompt.
- [curl-edit](https://github.com/AndrewHany/zsh-curl-edit) - Automatically open pasted cURL commands in an editor before executing them.
- [cvideo](https://github.com/aubreypwd/zsh-plugin-cvideo) - Quickly compress video with `ffmpeg`.
- [cwebp](https://github.com/adi-li/zsh-cwebpb) - Converts common image formats (JPG, PNG, GIF, BMP, TIFF) to WebP format using Google's `cwebp` tool in batch mode.
- [Cue](https://github.com/8starlabs/cue) - Adds IDE-style command, option, and path suggestions to ZSH in a native macOS popup.
- [cycle-fav-dirs](https://github.com/cibinmathew/cycle-fav-dirs) - Cycles through your favourite directories.
- [cycle-jobs](https://github.com/aemonge/zsh-cycle-jobs) - The ZSH Cycle Jobs Plugin is a simple yet powerful tool that enhances your terminal workflow by allowing you to cycle through background jobs using a single keyboard shortcut. This plugin is particularly useful for developers and system administrators who frequently work with multiple background processes.
- [czhttpd](https://github.com/jsks/czhttpd) - A simple http server written in 99.9% pure ZSH.
- [databricks](https://github.com/SlavaYakovenko/zsh-databricks) - Enhanced Databricks CLI integration for Zsh with convenient aliases and profile management.
- [dce](https://github.com/Onnokh/zsh-dce) - Helps you quickly navigate to your docker containers without losing the current folder context.
- [ddev](https://github.com/voronkovich/ddev.plugin.zsh) - A ZSH plugin for the [ddev](https://github.com/drud/ddev) tool for setting up PHP development environments.
- [debian](https://github.com/tmiland/oh-my-zsh-debian) - Provides Debian-related aliases and functions. Forked from the oh-my-zsh [debian](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/debian) plugin.
- [declare-zsh](https://github.com/z-shell/declare-zsh) - A parser for [zinit](https://github.com/zdharma-continuum/zinit) commands in `.zshrc`. It allows you to perform the following actions on `.zshrc` from the command-line - enable and disable plugins add or remove snippets.
- [deepx](https://github.com/GetAmbush/deepx-zsh-plugin) - Collection of useful and fun commands to improve workflow and quality of life.
- [deer](https://github.com/Vifon/deer) - A file navigator for ZSH heavily inspired by [ranger](https://ranger.github.io/).
- [def](https://github.com/thevinter/def) - Allows you to specify and run a default command in any directory of your choice.
- [defer](https://github.com/romkatv/zsh-defer) - Defers execution of a `zsh` command until `zsh` has nothing else to do and is waiting for user input. Its intended purpose is staged `zsh` startup. It works similarly to Turbo mode in [zinit](https://github.com/zdharma-continuum/zinit).
- [deja-vu](https://github.com/justyntemme/zsh-deja-vu) - Logs and retrieves command history based on the directory it was run in. Never forget that complex `docker` or `git` command you ran in a project folder weeks ago.
- [deja](https://github.com/Giammarco-Ferranti/deja) - Predicts the command you want to run from fuzzy matching, the current directory, and which command usually follows the previous one, then shows it as inline ghost text. Backed by a Go daemon.
- [delete-prompt](https://github.com/aoyama-val/zsh-delete-prompt) - ZSH widget to delete the prompt texts within the current line. It is useful when executing pasted commands from the web or a README. A leading non-alphanumeric character + space is detected as a prompt.
- [deno (cowboyd)](https://github.com/cowboyd/zsh-deno) - Useful [deno](https://deno.land/) aliases and settings.
- [deno (tricked-dev)](https://github.com/Tricked-dev/deno-zsh-plugin) - Automatically installs [deno](https://deno.land/) to `$HOME/.deno` on startup if deno is not already installed.
- [depot-tools](https://github.com/kuoe0/zsh-depot-tools) - Simple [oh-my-zsh](https://ohmyz.sh/) plugin for installing the chromium depot_tools. Installing this plugin will add all of the chromium depot_tools to your `$PATH` automatically.
- [dev](https://github.com/sbfaulkner/dev-plugin-zsh) - Provides a lightweight version of Shopify's internal dev tool
- [dietpi](https://github.com/unixorn/dietpi.plugin.zsh) - Adds utilities for [dietpi](https://dietpi.com) to your `$PATH` (and includes aliases to automagically run them with `sudo`) when you log into a machine running  [dietpi](https://dietpi.com).
- [diff-so-fancy](https://github.com/z-shell/zsh-diff-so-fancy) - Automatically installs [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy) and enables its use in ZSH and `git`.
- [ding](https://github.com/jessetipton/ding) - Plays notification sounds when a long-running shell command completes.
- [diractions](https://github.com/AdrieanKhisbe/diractions) - Allow you to map a short logical/mnemonic name to directories to quickly access them, or perform actions in them.
- [dirbrowse](https://github.com/giovannilupi/dirbrowse/) - Customized version of the [dirbrowse](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dircycle) plugin in [oh-my-zsh](https://ohmyz.sh).
- [dircolors-solarized (joel-porquet)](https://github.com/joel-porquet/zsh-dircolors-solarized) - Solarized dircolors plugin, with options for dark or light terminal backgrounds.
- [dircolors-solarized (pinelibg)](https://github.com/pinelibg/dircolors-solarized-zsh) - Enables [Solarized Color Theme for GNU ls](https://github.com/seebi/dircolors-solarized).
- [directory-history](https://github.com/tymm/zsh-directory-history) - A per directory history for ZSH which implements forward/backward navigation as well as substring search in a directory sensitive manner.
- [direnv](https://github.com/ptavares/zsh-direnv) - A plugin for installing and loading [direnv](https://github.com/direnv/direnv.git). Inspired by [zsh-pyenv](https://github.com/mattberther/zsh-pyenv).
- [dirrc](https://github.com/gmatheu/shell-plugins) - Executes `.dirc` when present in a directory you `cd` into.
- [dirstack](https://github.com/gepoch/oh-my-zsh-dirstack) - Plugin for displaying the dirstack info on a single line.
- [diskfree](https://github.com/alex-crouch/zsh-diskfree/) - Displays the free space on your disk in your prompt.
- [doas (anatolykopyl)](https://github.com/anatolykopyl/doas-zsh-plugin) - Easily prefix your current or previous commands with `doas` by pressing `ESC` twice.
- [doas (senderman)](https://github.com/Senderman/doas-zsh-plugin) - Easily prefix your current or previous commands with `doas` by pressing `ESC` twice.
- [docker-aliases](https://github.com/webyneter/docker-aliases) - `Docker` aliases for everyday use.
- [docker-compose](https://github.com/sroze/docker-compose-zsh-plugin) - Show `docker` container status in your prompt.
- [docker-helpers](https://github.com/unixorn/docker-helpers.zshplugin) - A collection of `docker` helper scripts.
- [docker-machine](https://github.com/asuran/zsh-docker-machine) - A docker-machine plugin for ZSH.
- [docker-run](https://github.com/rawkode/zsh-docker-run) - Go back to running your commands "naturally", we'll handle the container.
- [dogesh](https://github.com/keithhamilton/oh-my-dogesh) - Dogification plugin.
- [doppler](https://github.com/lsdcapital/zsh-doppler) - Displays your current [Doppler](https://doppler.com) project and configuration in your shell prompt from environment variables.
- [dot-up](https://github.com/toku-sa-n/zsh-dot-up) - Converts `...`, `....`, `.....`, etc., into `cd` commands to navigate parent directories.
- [dotbare](https://github.com/kazhala/dotbare) - Interactive dotfile management with the help of [fzf](https://github.com/junegunn/fzf).
- [dotfiles](https://github.com/vladmyr/dotfiles-plugin) - Keep your dotfiles in sync across multiple machines using `git`.
- [dotpyvenv](https://github.com/jeanpantoja/dotpyvenv) - Automagically switch to a python virtual environment located (that you previously have created with virtualenv program) in a directory named `.pyvenv` when you `cd` into a directory.
- [download](https://github.com/aubreypwd/zsh-plugin-download) - Helper to download files with `aria2c`.
- [dropbox](https://github.com/zpm-zsh/dropbox) - A [dropbox](https://www.dropbox.com/) plugin for ZSH that provides `dropbox-cli` and `dropbox-uploader` commands.
- [drupal](https://github.com/yhaefliger/zsh-drupal) - Adds aliases for common tasks and also tab-completion for `drush`. Inspired by [Artisan](https://github.com/jessarcher/zsh-artisan).
- [dual-history](https://github.com/odurif0/zsh-dual-history) - Keeps AI coding agent instructions (such as Forge's `:`-prefixed prompts) out of your main ZSH history by routing them to a separate file, intercepting every write path including the agent's own history insertions. Also turns `Ctrl+R` into an fzf interface switchable between All, Human and AI views, merged chronologically.
- [dune-quotes](https://github.com/brokendisk/dune-quotes) - Random Dune quote generator plugin.
- [dune.zsh](https://github.com/bitpeppr/dune.zsh) - Plugin to randomly display a quote from an extensive pool of Dune quotes.
- [duration](https://github.com/rtakasuke/zsh-duration) - Displays command duration if it exceeds a user-settable run time.
- [dwim](https://github.com/oknowton/zsh-dwim) - Attempts to predict what you will want to do next. It provides a key binding (control-u) that will replace the current (or previous) command line with the command you will want to run next.
- [easy-motion](https://github.com/IngoHeimbach/zsh-easy-motion) - A port of [vim-easymotion](https://github.com/easymotion/vim-easymotion) for ZSH.
- [ec2ssh](https://github.com/h3poteto/zsh-ec2ssh) - List EC2 instances and `ssh` login to the instances easily.
- [edit-select](https://github.com/Michael-Matta1/zsh-edit-select) - Brings a full text-editor experience to the ZSH command line: copy, cut, paste, undo/redo, type-to-replace, and native X11/Wayland clipboard integration, with Shift+Arrow and mouse selection support.
- [editing-workbench](https://github.com/commiyou/zsh-editing-workbench) - Adds sane, complex command line editing (e.g. incremental history word completion).
- [edward cli](https://github.com/matthieusb/zsh-edward) - Adds smart completions and alises for [edward CLI micro-service launcher](https://github.com/yext/edward).
- [elixir](https://github.com/gusaiani/elixir-oh-my-zsh) - Adds shortcuts for Elixir, IEX, Mix, Kiex and Phoenix.
- [emacs (cowboyd)](https://github.com/cowboyd/zsh-emacs) - Make Emacs the default for CLI operations like editing git commit messages; set up handy aliases.
- [emacs (flinner)](https://github.com/Flinner/zsh-emacs) - Uses the Emacs daemon capability, allowing the user to quickly open frames, whether they are opened in a terminal via a `ssh` connection, or X frames opened on the same host.
- [emoji-cli](https://github.com/b4b4r07/emoji-cli) - :scream: Emoji completion on the command line.
- [emoji-fzf](https://github.com/pschmitt/emoji-fzf.zsh) - Configurable ZSH plugin for the excellent [emoji-fzf](https://github.com/noahp/emoji-fzf). It is heavily inspired by [emoji-cli](https://github.com/b4b4r07/emoji-cli).
- [emojis](https://github.com/MichaelAquilina/zsh-emojis) - Adds numerous ASCII art emojis to your environment in convenient variables.
- [enhancd](https://github.com/b4b4r07/enhancd) - A simple tool that provides an enhanced `cd` command by memorizing all directories visited by a user and use it for the pathname resolution.
- [ensure-kube-context](https://github.com/do-i-need-a-username/ensure-kube-context) - Ensures that the `--context` flag is passed to various Kubernetes commands like `kubectl`, `cilium`, `stern`, and more.
- [env-secrets](https://github.com/singular0/zsh-env-secrets) - Automatically retrieves secrets from secure storage backends and exports them as environment variables during shell initialization. This eliminates the need to store sensitive information in plain text configuration files. Works with `pass` and the macOS keychain.
- [envrc](https://github.com/fabiogibson/envrc-zsh-plugin) - Automatically loads and unloads environment variables if a `.envrc` file is found in a directory.
- [escape-backtick](https://github.com/bezhermoso/zsh-escape-backtick) - Quickly insert escaped backticks when double-tapping "`".
- [ev](https://github.com/emhat098/ev) - ev is a ZSG / [Oh My Zsh](https://ohmyz.sh/) plugin for progressive command autocomplete: a selectable suggestion list under your prompt that deepens as you type - commands → subcommands → flags. Use it as a [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) alternative when you want a navigable list (not only ghost text), including `git`, `gh`, `docker`, and other CLI subcommands.
- [evalcache](https://github.com/mroth/evalcache) - Caches the output of a binary initialization command like `eval "$(hub alias -s)"`, to help lower shell startup time by loading from cache instead of re-running every new shell session.
- [evil-registers](https://github.com/zsh-vi-more/evil-registers) - Extends ZLE `vi` commands to remotely access named registers of the `vim` and `nvim` editors, and system selection and clipboard.
- [exa (DarrinTisdale)](https://github.com/DarrinTisdale/zsh-aliases-exa) - Enables a number of aliases extending [exa](https://github.com/ogham/exa), the modern replacement for `ls`.
- [exa (mohamedelashri)](https://github.com/MohamedElashri/exa-zsh) - Adds aliases for [exa](https://github.com/ogham/exa), a modern replacement for `ls`.
- [exa (ptavares)](https://github.com/ptavares/zsh-exa) - Installs and loads [exa](https://github.com/ogham/exa.git).
- [exa (ritchies)](https://github.com/RitchieS/zsh-exa/) - Adds aliases to make using [exa](https://github.com/ogham/exa.git) easier.
- [exa (todie)](https://github.com/todie/exa.plugin.zsh) - Integration and completions for [exa](https://github.com/ogham/exa), a modern replacement for `ls`.
- [exa (zap-zsh)](https://github.com/zap-zsh/exa) - Overrides common commands to use [ogham/exa](https://github.com/ogham/exa) instead.
- [exa (zplugin)](https://github.com/zplugin/zsh-exa) - replace `ls` with [ogham/exa](https://github.com/ogham/exa).
- [exa (zshell)](https://github.com/z-shell/zsh-exa) - replace `ls` with [ogham/exa](https://github.com/ogham/exa).
- [exa-ls (zpm-zsh)](https://github.com/zpm-zsh/ls) - Zsh plugin for ls.
- [exa-ls](https://github.com/birdhackor/zsh-exa-ls-plugin) - Adds aliases so that you can use [exa](https://github.com/ogham/exa) as a drop-in replacement for `ls` and `tree`.
- [execution-time](https://github.com/gwangyi/execution-time) - automatically calculates the execution time of commands. If a command runs longer than a given threshold, it notifies you with the command's name (arg0), execution time, and exit code. Notifications are delivered via OSC Escape Sequences (OSC 9 and OSC 777), which are natively supported by modern terminal emulators like iTerm2, Windows Terminal, Kitty, WezTerm, foot, and urxvt to show native system notifications or an External Command (configured via `ET_NOTIFY_COMMAND`), which is executed asynchronously in the background.
- [exercism](https://github.com/fabiokiatkowski/exercism.plugin.zsh) - A plugin for [exercism.io](http://exercism.io/).
- [expand-ealias](https://github.com/zigius/expand-ealias.plugin.zsh) - Expand specific aliases with space.
- [expand-space](https://github.com/spqw/zsh-alias-expand-space) - Expand command-position `zsh` aliases when you press space.
- [expand](https://github.com/MenkeTechnologies/zsh-expand) - Expands regular aliases, global aliases, incorrect spellings and phrases, globs, history expansion and $parameters with the spacebar key.
- [expander](https://github.com/ianthehenry/zsh-expander) - A `zle` widget that allows you to write custom expanders and select them with [fzf](https://github.com/junegunn/fzf).
- [explain-shell (brokentoaster)](https://github.com/brokentoaster/zsh-explainshell) - Uses `lynx` to look up the current command line on [explainshell.com](https://explainshell.com).
- [explain-shell (gmatheu)](https://github.com/gmatheu/shell-plugins) - Opens commands on [explainshell.com](https://explainshell.com).
- [extend-history](https://github.com/xav-b/zsh-extend-history) - Extends command history by adding the exit code for each command in the history.
- [ez-cmd](https://github.com/akgarhwal/ez-cmd) - Simplifies and streamlines common command-line tasks by providing easy-to-use shortcuts and aliases.
- [ez-compinit](https://github.com/mattmc3/ez-compinit) - Wraps `compinit`, queueing up calls to `compdef`, and hooking the real `compinit` call to an event that runs at the end of your `.zshrc`. That way you get all the benefits of calling `compinit` early without any of the downsides.
- [eza (clavelm)](https://github.com/clavelm/eza-omz-plugin) - Replaces `ls` with [eza-community/eza](https://github.com/eza-community/eza).
- [eza (mohamedelashri)](https://github.com/MohamedElashri/eza-zsh) - Adds aliases for [eza](https://github.com/eza-community/eza), a modern replacement for `ls`.
- [eza (z-shell)](https://github.com/z-shell/zsh-eza) - Replaces `ls` with [eza-community/eza](https://github.com/eza-community/eza).
- [eza (zsh-contrib)](https://github.com/zsh-contrib/zsh-eza) - Plugin for [eza](https://github.com/eza-community/eza) with Catppuccin and Rose Pine theming, smart defaults, and full alias support.
- [eza-ls](https://github.com/birdhackor/zsh-eza-ls-plugin) - Adds aliases allowing [eza](https://github.com/eza-community/eza), to act as a drop-in replacement for `ls` and `tree`.
- [f-shortcuts](https://github.com/zpm-zsh/f-shortcuts) - Makes a shortcuts toolbar using `F1` to `F12` keys.
- [fancy-ctrl-z](https://github.com/mdumitru/fancy-ctrl-z) - Broken out version of the version in [oh-my-zsh](http://ohmyz.sh/) so users of other frameworks don't have to import all of [oh-my-zsh](https://ohmyz.sh).
- [fasd](https://github.com/whjvenyl/fasd) - A command-line productivity booster. Fasd offers quick access to files and directories for POSIX shells. It is inspired by tools like [autojump](https://github.com/joelthelion/autojump), [z](http://github.com/rupa/z) and [v](https://github.com/rupa/v). Fasd keeps track of files and directories you have accessed, so that you can quickly reference them in the command line.
- [fast-alias-tips](https://github.com/decayofmind/zsh-fast-alias-tips) - Helps remember the aliases you defined and forgot about. Ported from [djui/alias-tips](https://github.com/djui/alias-tips). Active fork of [sei40kr/zsh-fast-alias-tips](https://github.com/sei40kr/zsh-fast-alias-tips).
- [fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting) - Optimized and improved `zsh-users/zsh-syntax-highlighting` – better response times, switchable highlight themes.
- [fastcache](https://github.com/QuarticCat/zsh-fastcache) - Caches command output to improve shell startup time.
- [fauna](https://github.com/manojuppala/zsh-fauna) - Displays colorful high-quality ANSI art with 256-color terminal support of endangered and extinct animals every time you open a new terminal or restart zsh. Learn about wildlife conservation one terminal session at a time!
- [fav](https://github.com/ddnexus/fav) - ZSH/[fzf](https://github.com/junegunn/fzf) plugin that makes it really easy to add and recall named favorites of your important directories.
- [favorite-directories](https://github.com/seletskiy/zsh-favorite-directories) - Fast jumps to your favorite directories.
- [fd-plugin](https://github.com/MohamedElashri/fd-zsh) - Adds aliases for [fd](https://github.com/sharkdp/fd), a modern replacement for `find`.
- [fd](https://github.com/aubreypwd/zsh-plugin-fd) - Use [fzf](https://github.com/junegunn/fzf) to browse directories.
- [ffexport](https://github.com/Pakrohk/ffexport.plugin.zsh) - Lightweight, ZSH-native video export manager — profile-driven [FFmpeg](https://www.ffmpeg.org) exports, persistent ZSH tab completion, profile import/export, and safe defaults for Instagram & YouTube workflows.
- [figures](https://github.com/zpm-zsh/figures) - Unicode symbols for ZSH.
- [firebase (rmrs)](https://github.com/rmrs/firebase-zsh) - Add an indicator in the prompt that you're in a directory with a `firebase.json` file (aka "firebase project").
- [firebase (seqi)](https://github.com/Seqi/firebase-zsh) - Display the current working project or project alias when in a Firebase project directory or subdirectory.
- [fishysave](https://github.com/dariogliendo/fishysave.zsh) - Save and update functions and aliases directly from your terminal session.
- [fixnumpad-osx](https://github.com/zackintosh/fixnumpad-osx.plugin.zsh) - Enables numpad keys of Apple keyboards to be recognized in ZSH.
- [flow-cli](https://github.com/Data-Wise/flow-cli) - ADHD-friendly ZSH workflow tools. Start working in 10 seconds with `work`, track wins for dopamine with `win`, stay oriented with `dash`. Includes smart dispatchers for git, R, Quarto, and Claude Code.
- [flow-plugin](https://github.com/sandstorm/oh-my-zsh-flow-plugin) - This plugin makes the `flow` command available inside every subdirectory of the TYPO3 Flow distribution.
- [flutter-zsh-shortcuts](https://github.com/dizzpy/flutter-zsh-shortcuts) - Adds clean aliases for flutter commands.
- [fnm (dominik-schwabe)](https://github.com/dominik-schwabe/zsh-fnm) - Installs and loads the [Fast Node Manager (fnm)](https://github.com/Schniz/fnm) if it is missing.
- [fnm (sukkaw)](https://github.com/SukkaW/zsh-fnm) - Provides enhancement to the Node.js version manager [`fnm`](https://fnm.vercel.app).
- [fnm (wintermi)](https://github.com/wintermi/zsh-fnm) - Helper plugin for the fast and simple Node.js version manager [fnm](https://github.com/Schniz/fnm).
- [forgit](https://github.com/wfxr/forgit) - Utility tool for `git` which takes advantage of fuzzy finder [fzf](https://github.com/junegunn/fzf).
- [fuckmit](https://github.com/mingeme/zsh-fuckmit) - Provides useful aliases and functions for the [fuckmit](https://github.com/mingeme/fuckmit) command-line tool, an AI-powered `git` commit message generator.
- [functional](https://github.com/Tarrasch/zsh-functional) - ZSH higher order functions.
- [fuzzy-nav](https://github.com/claw-h/fuzzy-nav) - A high-speed, stateful Terminal User Interface (TUI) directory navigator and file browser built natively into ZSH, driven by `fzf` and `fd`.
- [fuzzy-search-and-edit](https://github.com/seletskiy/zsh-fuzzy-search-and-edit) - ZSH plugin for fuzzy searching files and instantly opening a matched file on matched line.
- [fuzzy-wd](https://github.com/spodin/zsh-fuzzy-wd) - Adds fuzzy search for directories warped with the [WD](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/wd) plugin.
- [fz](https://github.com/changyuheng/fz) - Seamlessly adds fuzzy search to [z](https://github.com/rupa/z)'s tab completion and lets you easily jump around among directories in your history.
- [fzf (gimbo)](https://github.com/gimbo/fzf.zsh) - Helpers for using [fzf](https://github.com/junegunn/fzf) in ZSH. Requires [brew.sh](https://brew.sh).
- [fzf (scaryrawr)](https://github.com/scaryrawr/fzf.zsh) - Adds keybindings for [fzf](https://github.com/junegunn/fzf) inspired by [PatrickF1/fzf.fish](https://github.com/PatrickF1/fzf.fish).
- [fzf (unixorn)](https://github.com/unixorn/fzf-zsh-plugin/) - Enables [fzf](https://github.com/junegunn/fzf) history and file searches.
- [fzf (zsh-contrib)](https://github.com/zsh-contrib/zsh-fzf) - Configures [fzf](https://github.com/junegunn/fzf) with beautiful Catppuccin and Rose Pine color themes, adds file and directory picker key bindings, and wires up your preferred editor and file manager — so fuzzy finding feels native from day one.
- [fzf-copyq-clipboard](https://github.com/magidc/fzf-copyq-clipboard-zsh-plugin) - Add [fzf](https://github.com/junegunn/fzf) support for [CopyQ](https://hluk.github.io/CopyQ/).
- [fzf-dir-navigator](https://github.com/KulkarniKaustubh/fzf-dir-navigator) - This is a cool and user-friendly directory navigation plugin for ZSH using [fzf](https://github.com/junegunn/fzf) that allows the user to switch to any directory from anywhere and to anywhere. It also maintains a history of recently visited directories. Additionally, you can use hotkeys to move back and forth between directories in the shell session.
- [fzf-fasd](https://github.com/wookayin/fzf-fasd) - Integrates [fzf](https://github.com/junegunn/fzf) and [fasd](https://github.com/clvv/fasd) --- tab completion of `z` with `fzf`'s fuzzy search!
- [fzf-finder](https://github.com/leophys/zsh-plugin-fzf-finder) - Plugin to have a cool search keybinding with [fzf](https://github.com/junegunn/fzf) and (optionally) [bat](https://github.com/sharkdp/bat) and [fd](https://github.com/sharkdp/fd). Falls back to `find` and `cat`. Searches in the local tree of subdirectories for files.
- [fzf-git-worktree](https://github.com/banyan/zsh-fzf-git-worktree) - Manage `git` worktrees with [fzf](https://github.com/junegunn/fzf) integration.
- [fzf-history-search](https://github.com/joshskidmore/zsh-fzf-history-search) - Replaces `Ctrl+R` with an [fzf](https://github.com/junegunn/fzf)-driven history search that includes date/times.
- [fzf-it](https://github.com/micakce/fzf-it) - Make any command interactive wrapping it with [fzf](https://github.com/junegunn/fzf) functionality.
- [fzf-marks](https://github.com/urbainvaes/fzf-marks) - Little script to create, navigate and delete bookmarks in `bash` and `zsh`, using the fuzzy finder [fzf](https://github.com/junegunn/fzf).
- [fzf-nav](https://github.com/ivomac/zsh-fzf-nav) - Defines an interactive file/directory navigator using [fzf](https://github.com/junegunn/fzf). Offers multiple navigation modes, git integration, and customizable actions.
- [fzf-packagemanager](https://github.com/goarano/zsh-fzf-packagemanager) - Adds commands for installing tools via various package managers using [fzf](https://github.com/junegunn/fzf). Supports `apt`, `brew` & `dnf`.
- [fzf-pass](https://github.com/smeagol74/zsh-fzf-pass) - Better handling of passwords using [fzf](https://github.com/junegunn/fzf) and [pass](https://www.passwordstore.org/).
- [fzf-plugin](https://github.com/Atlas34/fzf-plugin) - [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)'s [fzf](https://github.com/junegunn/fzf) plugin extracted so it can be used easily with other plugin managers.
- [fzf-prezto](https://github.com/lildude/fzf-prezto) - Prezto plugin that finds where [fzf](https://github.com/junegunn/fzf) has been installed and enables its auto-completion and key-bindings. This plugin works as a Prezto `zstyle` configuration option.
- [fzf-tab-widgets](https://github.com/tom-power/fzf-tab-widgets) - Adds widgets for [fzf-tab](https://github.com/Aloxaf/fzf-tab).
- [fzf-tab](https://github.com/Aloxaf/fzf-tab) - Replace ZSH's default completion selection menu with [fzf](https://github.com/junegunn/fzf).
- [fzf-tools](https://github.com/happycod3r/fzf-tools) - Provides functions, aliases and key-bindings for commands such as `alias`, `find`, `ls`, `man`, `printenv` that are designed to enhance your command-line workflow by making them to default to filtering through [fzf](https://github.com/junegunn/fzf), allowing you to quickly find files, search & run commands from history, run scripts of many supported types, browse `git` commits, and more.
- [fzf-utils](https://github.com/redxtech/zsh-fzf-utils) - Provides functions to kill proceses and find in path with [fzf](https://github.com/junegunn/fzf).
- [fzf-widgets](https://github.com/ytet5uy4/fzf-widgets) - Adds some ZLE widgets for [fzf](https://github.com/junegunn/fzf).
- [fzfsh](https://github.com/ethan605/fzfsh) - Add [fzf](https://github.com/junegunn/fzf) plugins for `chezmoi`, `docker`, `git`, `kubectl` and `pass`.
- [fzy](https://github.com/aperezdc/zsh-fzy) - Plugin that uses [fzy](https://github.com/jhawthorn/fzy) for certain fuzzy matching operations.
- [gcloud (johnstonskj)](https://github.com/johnstonskj/zsh-gcloud-plugin) - Adds the gcloud SDK to your `$PATH`.
- [gcloud (wintermi)](https://github.com/wintermi/zsh-gcloud) - Finds the installed gcloud SDK and sources the zsh file there, along with the zsh completions file.
- [gcloud-project](https://github.com/avivl/gcloud-project) - Easy selection of Google Cloud Projects.
- [gdbm](https://github.com/zdharma-continuum/zgdbm) - Adds GDBM as a plugin.
- [gentoo](https://github.com/MattiaG-afk/gentoo-ohmyzsh) - Adds some aliases and functions to work with Gentoo Linux.
- [geometry-datetime](https://github.com/desyncr/geometry-datetime) - [Geometry](https://github.com/geometry-zsh/geometry) datetime plugin. Shows datetime (`date` unix command) in your prompt.
- [geometry-hydrate](https://github.com/jedahan/geometry-hydrate) - [Geometry](https://github.com/geometry-zsh/geometry) plugin to remind you to hydrate.
- [geometry-npm-package-version](https://github.com/drager/geometry-npm-package-version) - [Geometry](https://github.com/geometry-zsh/geometry) plugin to display the current folder's npm package version.
- [geometry-rust-version](https://github.com/drager/geometry-rust-version) - [Geometry](https://github.com/geometry-zsh/geometry) plugin to display the current folder's Rust version when either a `.rs` or `Cargo.toml` is present.
- [get-jquery](https://github.com/voronkovich/get-jquery.plugin.zsh) - Plugin for fast downloading the jQuery library from [code.jquery.com](https://code.jquery.com).
- [ghost-zeus](https://github.com/fontno/ghost_zeus) - Lets you use [zeus](https://github.com/burke/zeus) with normal rails commands.
- [ghq-gh-wiki-clone](https://github.com/shmokmt/ghq-gh-wiki-clone) - A ZSH plugin that, after `ghq get` / `ghq clone` fetches a repository, automatically clones its GitHub Wiki (when the wiki has pages) into a .wiki subdirectory of that repository.
- [ghq-worktree](https://github.com/liquidcatmofu/zsh-ghq-worktree) - Integrates `ghq`, [fzf](https://github.com/junegunn/fzf), and `git worktree` to minimize context-switching cost in multi-repository development.
- [gimbo-git](https://github.com/gimbo/gimbo-git.zsh) - A subset of the [oh-my-zsh](https://ohmyz.sh/) [git plugin](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh) aliases, plus some new aliases, plus a few handy functions.
- [gimme](https://github.com/folixg/gimme-ohmyzsh-plugin) - Manage [Go](https://golang.org/) installations with [gimme](https://github.com/travis-ci/gimme/).
- [git-acp](https://github.com/MenkeTechnologies/zsh-git-acp) - Take the current command line as the commit message and then run `git pull`, `git add`, `git commit` and `git push` with one keystroke.
- [git-add-remote](https://github.com/caarlos0/git-add-remote) - Easily add the upstream remote to your `git` fork.
- [git-aliases (mdumitru)](https://github.com/mdumitru/git-aliases) - Broken out version of the version in [oh-my-zsh](http://ohmyz.sh/) so users of other frameworks don't have to import all of [oh-my-zsh](https://ohmyz.sh).
- [git-aliases (peterhurford)](https://github.com/peterhurford/git-aliases.zsh) - Creates a lot of useful aliases for combinations of commonly used `git` commands.
- [git-aliases (remino)](https://github.com/remino/omz-plugin-git-aliases) - Aliases all `git xyz` commands to `gxyz`. Also aliases `g` to `git`.
- [git-arc](https://github.com/jlduran/git-arc-oh-my-zsh-plugin) - Adds aliases and functions for [git-arc](https://github.com/freebsd/freebsd-src/tree/main/tools/tools/git), a FreeBSD development tool.
- [git-branch](https://github.com/cpwillis/omz-git-branch) - Augments `git` features, designed especially for users who prefer aesthetically pleasing branch naming conventions. It visually formats the current `git` branch name or commit hash, considering customisable variables like hiding status, maximum branch length, prefix, and suffix trimming, with an option to display `git status`.
- [git-branches](https://github.com/Schroefdop/git-branches) - Makes a menu of `git` branches you can switch to without having to type long branch names.
- [git-clean-branch](https://github.com/gobriansteele/git-clean-branch) - Cleans up dead `git` branches.
- [git-cleanbranches](https://github.com/wu9o/ohmyzsh-cleanbranches) - A powerful unified clean up tool for `git` branches that uses [fzf](https://github.com/junegunn/fzf) to find all branches that are safe to delete.
- [git-commit-prefixer](https://github.com/dvigo/git-commit-prefixer) - Adds configurable prefixes and optional icons to `git` commit messages (supports styles, icon themes, and interactive selection)
- [git-commit-shortcuts](https://github.com/ashsajal1/git-commit-shortcuts) - Provides shortcuts for creating standardized `git` commit messages with emoji prefixes and consistent formatting.
- [git-complete-urls](https://github.com/rapgenic/zsh-git-complete-urls) - Enhance `git` completion to include in the remotes completion (e.g. from `git clone`) any URL in the clipboard.
- [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Extra `git` helper scripts packaged as a plugin.
- [git-flow-avh](https://github.com/nekofar/zsh-git-flow-avh) - Adds short aliases for the `git-flow` commands.
- [git-fuzzy](https://github.com/bigH/git-fuzzy) - A CLI interface to `git` that relies heavily on [fzf](https://github.com/junegunn/fzf).
- [git-graph](https://github.com/Maks0u/git-graph) - Adds a pretty `git` graph.
- [git-is-clean](https://github.com/aubreypwd/zsh-plugin-git-is-clean) - This function will return true or false depending on if it finds out your `git` repo is dirty or not.
- [git-it-on](https://github.com/peterhurford/git-it-on.zsh) - Adds ability to open a folder in your current branch on GitHub.
- [git-lfs](https://github.com/nekofar/zsh-git-lfs) - Adds short aliases for the `git-lfs` commands.
- [git-patch](https://github.com/marvinroman/oh-my-zsh-git-patch-plugin) - Adds custom functions and aliases to the oh-my-zsh `git` plugin.
- [git-persona](https://github.com/asifshirazi/zsh-git-persona) - Switches `git` commit identity, SSH key and `gh` CLI account together for multiple GitHub accounts.
- [git-plugin (dark-kitt)](https://github.com/dark-kitt/zsh-git-plugin) - `git` integration that displays the current directory and `git` branch.
- [git-plugin (rcruzper)](https://github.com/rcruzper/zsh-git-plugin) - Adds some functions for `git`.
- [git-plugin-cheatsheet](https://github.com/rhorno/oh-my-zsh-git-plugin-cheatsheet) - Displays the aliases and functions available from the `git` oh-my-zsh plugin.
- [git-prompt-enhanced](https://github.com/LFabre/zsh-git-prompt-enhanced) - Provides a more granular information about a `git` repository.
- [git-prompt-useremail](https://github.com/mroth/git-prompt-useremail) - Adds prompt reminders for `git` user.email.
- [git-prompt-watcher](https://github.com/shields/git-prompt-watcher) - Automatically updates your prompt when git status changes, using `fswatch` to monitor repository files in real-time.
- [git-prune (diazod)](https://github.com/diazod/git-prune) - Allows you to delete all branches that are already merged in your local `git` repository and/or that were merged in your remote origin `git` repository.
- [git-prune (seinh)](https://github.com/Seinh/git-prune) - Plugin that simplifies deleting merged branches in a `git` repository.
- [git-scripts](https://github.com/packruler/zsh-git-scripts) - Adds `git-squash-branch` and `git-remove-merged` commands.
- [git-secret](https://github.com/sobolevn/git-secret) - A bash tool to store your private data inside a `git` repository.
- [git-smart-commands](https://github.com/seletskiy/zsh-git-smart-commands) - Adds extra `git` commands to make some common `git` usages more efficient.
- [git-smart-commends-wrapper](https://github.com/jelek21/omz-git-smart-commands) - Wraps [git-smart-commands](https://github.com/seletskiy/zsh-git-smart-commands) to make it compatible with the [oh-my-zsh](https://ohmyz.sh) plugins system.
- [git-status](https://github.com/AyoubMounim/zsh-git-status/) - Exposes functions with information about the current `git` repository.
- [git-switch-branch-skim](https://github.com/okhiroyuki/zsh-git-switch-branch-skim) - Allows you to switch `git` branches with [skim](https://github.com/lotabout/skim)
- [git-sync](https://github.com/caarlos0-graveyard/zsh-git-sync) - A ZSH plugin to sync `git` repositories and clean them up.
- [git-to-jj](https://github.com/elithrar/zsh-git-to-jj) - Helps you progressively learn [Jujutsu](https://github.com/jj-vcs/jj) (aka `jj`) porcelain as you use `git` commands.
- [git-worktree (alexiszamanidis)](https://github.com/alexiszamanidis/zsh-git-worktree) - Wraps some `git worktree` operations for simplicity and productivity. Includes [fzf](https://github.com/junegunn/fzf) tooling.
- [git-worktree (trthomps)](https://github.com/trthomps/git-worktree-zsh-plugin) - Enhanced `git worktree` management with bare repository support. This plugin provides convenient commands for working with `git` worktrees, making it easy to work on multiple branches simultaneously.
- [git-worktree-manager](https://github.com/tmbtech/zsh-git-worktree-manager) - Manage `git` worktrees with ease. Streamline your workflow when working with multiple branches simultaneously.
- [git-worktrees](https://github.com/egyptianbman/zsh-git-worktrees) - Makes `git` worktrees more functional. Includes tab completions.
- [git-wt](https://github.com/fingergohappy/git-wt) - A ZSH-native `git` worktree workflow plugin.
- [git](https://github.com/davidde/git) - Replacement for the stock [oh-my-zsh](https://ohmyz.sh/) `git` plugin. Provides quite a few useful aliases and functions. The motivation to replace the default plugin stems from the fact that it comes with some inconsistencies that make a few popular commands rather unintuitive, so this plugin makes the aliases consistent.
- [gitbutler](https://github.com/batuhan0sanli/gitbutler-omz) -A plugin for [GitButler](https://gitbutler.com/) — CLI aliases, a Git protection shield, and prompt integration for standard OMZ themes and Powerlevel10k.
- [gitcd (SukkaW)](https://github.com/SukkaW/zsh-gitcd) - Adds command to `git clone` a repository and `cd` into the resulting directory.
- [gitcd (viko16)](https://github.com/viko16/gitcd.plugin.zsh) - Automatically `cd` to a `git` working directory after cloning it.
- [gitfast](https://github.com/tevren/gitfast-zsh-plugin) - Updated fork of the [oh-my-zsh](https://ohmyz.sh/) `gitfast` plugin.
- [gitgo](https://github.com/ltj/gitgo) - Open a GitHub/GitLab repository in your browser from the command line (macOS only).
- [github-folders](https://github.com/buzuloiu/zsh-github-folders) - Organizes your GitHub checkouts for you.
- [github](https://github.com/shakir-abdo/zsh-github-plugin) - Fork of the original [GitHub plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/github) embedded in [oh-my-zsh](https://ohmyz.sh/).
- [gitignore](https://github.com/voronkovich/gitignore.plugin.zsh) - Plugin for creating `.gitignore` files.
- [gitio (denysdovhan)](https://github.com/denysdovhan/gitio-zsh) - A ZSH plugin for generating a GitHub short URL using [git.io](https://git.io).
- [gitio (nicolodiamante)](https://github.com/nicolodiamante/gitio) - Uses [git.io](https://git.io/) to shorten `git` urls.
- [gitspace](https://github.com/softspark/gitspace) - Binds a `git` identity to a directory. The wrong account fails loudly instead of signing a commit quietly.
- [gitsync](https://github.com/washtubs/gitsync) - ZSH plugin to improve workflows for one person developing on the same repository on multiple machines.
- [goenv (bbenne10)](https://github.com/bbenne10/goenv) - Manage `$GOPATH` similarly to Python's virtualenvwrapper.
- [goenv (cda0)](https://github.com/CDA0/zsh-goenv/) - Plugin for installing, updating and loading `goenv`.
- [goenv (heyvito)](https://github.com/heyvito/goenv.zsh) - Automatically reads `.goenv` files in the current directory and sets `GOPRIVATE` environment variables.
- [going_places](https://github.com/or17191/going_places) - A plugin that helps to use, create and maintain a list of shell locations.
- [golang](https://github.com/wintermi/zsh-golang) - Adds tooling for the Go programming language toolchain.
- [golinks](https://github.com/slessans/oh-my-zsh-golinks-plugin) - Launch golinks from your terminal.
- [gpg-agent](https://github.com/axtl/gpg-agent.zsh) - Plugin that tries to do the right thing when it comes to setting up the GPG agent to act as an SSH agent as well on macOS.
- [gpg-crypt](https://github.com/Czocher/gpg-crypt) - ZSH plugin to encrypt and decrypt files or directories in place.
- [gpg](https://github.com/marvinroman/oh-my-zsh-gpg-plugin) - Adds helpful aliases for using `gpg`.
- [gpt](https://github.com/antonjs/zsh-gpt) - Enable querying ChatGPT from the command line.
- [grep2awk](https://github.com/joepvd/grep2awk) - ZLE widget to transform `grep` command into `awk` command.
- [grunt-plugin](https://github.com/clauswitt/zsh-grunt-plugin) - Add autocompletion for `grunt`.
- [gsh](https://github.com/cjayross/gsh) - Collection of helper functions for `git`
- [gtm-terminal-plugin](https://github.com/git-time-metric/gtm-terminal-plugin) - terminal plugin for [git time metrics](https://github.com/git-time-metric/gtm).
- [gtr](https://github.com/Zocker1999NET/zsh-gtr) - Allows fast tagging of a release in `git` using the tag name **release-YYYY-MM-DD-HH-MM*- and headline **Release YYYY-MM-DD HH:MM**.
- [guesswork](https://github.com/findmalek/guesswork) - Fish-style history autosuggestions ranked by an AI model instead of prefix matching, so an abbreviation or a short description of what you want finds the right command out of your recent history.
- [gui-detach](https://github.com/4h2u/auto.detach) - Returns the prompt in interactive ZSH when a GUI app is launched on Linux, and leaves CLI tools in the foreground.
- [guish](https://github.com/gcarrarom/oh-my-guish) - Collection of utility functions and aliases.
- [gumsible](https://github.com/Lowess/gumsible-oh-my-zsh-plugin) - Wrapper plugin for [Molecule](https://molecule.readthedocs.io/).
- [gunstage](https://github.com/LucasLarson/gunstage) - There are at least eight ways to unstage files in a `git` repository. This is a command-line shell plugin for undoing `git add`.
- [gvm (dgnest)](https://github.com/dgnest/zsh-gvm-plugin) - A `gvm` (Go version manager) plugin for ZSH.
- [gvm (yerinle)](https://github.com/yerinle/zsh-gvm) - Provides autocompletion for `gvm` (Groovy enVironment Manager).
- [hab](https://github.com/alexdesousa/hab) - Automatically loads OS environment variables defined in the file `.envrc` if it's found when changing to a new directory.
- [hacker-quotes](https://github.com/oldratlee/hacker-quotes) - Outputs a random hacker quote when you open a terminal.
- [haiku](https://github.com/alesr/oh-my-zsh-haiku-plugin) - Prints a haiku promoting work-life balance and stress management once every 24 hours when the terminal is open.
- [halfpipe](https://github.com/raimo/zsh-halfpipe) - Edit shell pipeline and see its output update live. Get regexps correct fast and save in network requests.
- [hanami](https://github.com/davydovanton/hanami-zsh) - ZSH plugin for [hanami](http://hanamirb.org) projects.
- [hangul](https://github.com/gomjellie/zsh-hangul) - Auto correct hangul(한글, korean) to English when it was supposed to be typed in English. 영어를 타이핑 해야되는데 한글로 타이핑된경우 자동으로 수정합니다.
- [harnessd](https://github.com/stump-wtf/zsh-harnessd) - A small plugin that keeps long-running commands — agent CLIs, REPLs, watchers, anything — alive in detached `tmux` sessions, supervised by `systemd` (`--user`) on Linux or `launchd` on macOS, with one consistent set of verbs on both.
- [hbt](https://github.com/lzambarda/hbt) - Heuristic ZSH suggestion system based on past command usage.
- [hebzsh](https://github.com/admons/hebzsh) - If a command is not found as typed in Hebrew, translates the command as if it was typed on a keyboard with a US English layout and tries again.
- [help](https://github.com/Freed-Wu/zsh-help) - Colorizes the output of commands run with `--help`.
- [herdr](https://github.com/robbyrussell/herdr-ohmyzsh) - Manages [herdr](https://herdr.dev/) agent management.
- [hi-shell](https://github.com/longyijdos/hi-shell) - Generates shell commands from natural-language requests and shows them as reviewable inline suggestions in ZSH.
- [hints](https://github.com/joepvd/zsh-hints) - Display glob and parameter flags and other non completable info right under your editing buffer.
- [hipchat](https://github.com/robertzk/hipchat.zsh) - Send hipchat messages from the shell.
- [hist-delete](https://github.com/p1r473/zsh-hist-delete-fzf/) - Delete history items from zsh's [fzf](https://github.com/junegunn/fzf) Ctrl+R history search.
- [hist](https://github.com/marlonrichert/zsh-hist) - Edit your history in ZSH, without ever leaving the command line.
- [histdb](https://github.com/larkery/zsh-histdb) - Stores your history in an SQLite database. Can be integrated with [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions).
- [historikeeper](https://github.com/stiliajohny/historikeeper) - Captures history in a database.
- [history-enquirer](https://github.com/zthxxx/zsh-history-enquirer) - Enhances history search with more interaction and a multiline selection menu. Requires Node.js.
- [history-filter](https://github.com/MichaelAquilina/zsh-history-filter) - Allows you to specify patterns that will automatically exclude commands from being inserted into your permanent history. Particularly useful for preventing secrets being written.
- [history-here](https://github.com/leonjza/history-here) - Binds `^G` to quickly toggle the current shell history file location.
- [history-on-success](https://github.com/nyoungstudios/zsh-history-on-success) - Save yourself from repeating the same mistakes by filtering out your unsuccessful commands from your zsh history file. Based on a [blog post](https://scarff.id.au/blog/2019/zsh-history-conditional-on-command-success/) by Dean Scarff.
- [history-popup](https://github.com/lcrespom/oh-my-zsh-history-popup) - Captures the `PageUp` key and uses `dialog` to open a popup menu with the history, so the user can interactively navigate through it and pick the history line to bring back to the prompt.
- [history-search-multi-word](https://github.com/zdharma-continuum/history-search-multi-word) - A syntax highlighted, multi-word history searcher for ZSH, bound to Ctrl-R, with advanced functions (e.g. bump of history entry to top of history).
- [history-substring-search](https://github.com/zsh-users/zsh-history-substring-search) - Needs to be loaded after `zsh-syntax-highlighting`, or they'll both break. You'll also need to bind keys to its functions, details are in the README.md.
- [history-sync (vitobotta)](https://github.com/vitobotta/zsh-history-sync/) - Syncs your ZSH history across computers using a `git` private repository. Uses `openssl` to encrypt the history.
- [history-sync (wulfgarpro)](https://github.com/wulfgarpro/history-sync) - An [oh-my-zsh](https://ohmyz.sh/) plugin for [GPG](https://www.gnupg.org/) encrypted, Internet synchronized ZSH history using `git`.
- [history](https://github.com/b4b4r07/zsh-history) - Extend history so that it can be queried by SQL.
- [histpop](https://github.com/undefined443/histpop) - Removes the last record from `~/.zsh_history`. Useful right after running a command you don't want kept in your shell history (e.g. one containing a typo'd password or a temporary secret). Running `histpop` itself is also removed from history, so it leaves no trace.
- [histree](https://github.com/fuba/histree-zsh) - Integrates with [histree-core](https://github.com/fuba/histree-core) to provide enhanced command history logging with directory awareness.
- [hitokoto](https://github.com/derry96/hitokoto) - Displays a random quote from [hitokoto.cn](https://hitokoto.cn/).
- [homeassistant-cli](https://github.com/frosit/zsh-plugin-homeassistant-cli) - Provides completion and (configuration) helpers for the [Home Assistant Command-line interface (hass-cli)](https://github.com/home-assistant/home-assistant-cli). and allows command line interaction with [Home Assistant](https://home-assistant.io/) instances.
- [homebrew](https://github.com/digitalraven/omz-homebrew) - Plugin for [homebrew](https://brew.sh) that supplements the one built into oh-my-zsh and can safely run with it enabled.
- [hooks](https://github.com/willghatch/zsh-hooks) - Add missing hooks - for plugins and personal use.
- [host-switch](https://github.com/LockonS/host-switch) - Make it easier to switch in different `/etc/hosts` files during development.
- [how2](https://github.com/yizhixiaokong/how2) - Quickly inspect aliases, functions, and docs of [oh-my-zsh](https://ohmyz.sh/) plugins, with tab completion.
- [hub-ci-zsh-plugin](https://github.com/raymondjcox/hub-ci-zsh-plugin) - A simple plugin for adding `hub` ci-status to your ZSH theme.
- [hub](https://github.com/soraliu/zsh-hub) - ZSH plugin for forking model.
- [hypnosnek](https://github.com/josephcourtney/hypnosnek) - Simple utilities with p10k integration for managing `python` environments.
- [igit](https://github.com/ytakahashi/igit) - Interactive `git` commands using [fzf](https://github.com/junegunn/fzf).
- [incsearch](https://github.com/aoyama-val/zsh-incsearch) - Friendlier `vim` mode for ZSH. Moves cursor with incremental search within current line.
- [ing](https://github.com/rummik/zsh-ing) - Streamlined `ping` output.
- [instant-repl](https://github.com/jandamm/instant-repl.zsh) - Activate a REPL for any command in your current ZSH session.
- [interactive-cd](https://github.com/changyuheng/zsh-interactive-cd) - Fish-like interactive tab completion for `cd`.
- [iosctl](https://github.com/obayer/iosctl) - Quickly access App, Data, and Log of the running simulator.
- [ipip](https://github.com/SukkaW/zsh-ipip) - Plugin for [IPIP](https://en.ipip.net).
- [ipnav](https://github.com/clebertmarctyson/oh-my-zsh-ipnav) - Provides convenient aliases and completions for IP address operations [ip-navigator-cli](https://github.com/clebertmarctyson/ip-navigator-cli).
- [iterm-tab-color](https://github.com/bernardop/iterm-tab-color-oh-my-zsh) - Adds function to set the tab color in iTerm2 and can automatically change color based on cwd or command being executed.
- [iterm-tab-colors](https://github.com/tysonwolker/iterm-tab-colors) - Automatically changes iTerm 2 tab color based on the current working directory.
- [iterm-tmux-color-tabs](https://github.com/remino/omz-plugin-iterm2-tmux-color-tabs) - Every new `tmux` tab opened in iTerm2 will have the next colour from the default or specified palette.
- [iterm-touchbar](https://github.com/iam4x/zsh-iterm-touchbar) - Display iTerm2 feedback in the MacbookPro TouchBar (Current directory, git branch & status).
- [iterm2-colors](https://github.com/shayneholmes/zsh-iterm2colors) - Manage your iTerm 2's color scheme from the command line.
- [iterm2-shell-integration](https://github.com/gnachman/iterm2-shell-integration) - Shell integration and utilities for iTerm2.
- [iterm2-tabs](https://github.com/gimbo/iterm2-tabs.zsh) - Set colors and titles of iTerm 2 tabs.
- [iterm2](https://github.com/laggardkernel/zsh-iterm2) - Packs iTerm 2's ZSH integration scripts into a ZSH plugin to avoid polluting your $HOME directory, with a negligible time increase of only 2ms.
- [iwd](https://github.com/zshzoo/iwd) - Similar in concept to `$PWD`, this ZSH plugin saves your initial working directory in `$IWD` for easy returns to the starting point of your session.
- [jabba](https://github.com/2m/zsh-jabba) - Adds shell integration code and completions for the [jabba](https://github.com/shyiko/jabba) Java version manager.
- [jap](https://github.com/philipstuessel/jap) - Terminal automation framework.
- [java-zsh-plugin](https://github.com/Xetius/java-zsh-plugin) - Adds a `setjdk` command so you can switch easily between different versions of the jdk.
- [javaVersions](https://github.com/miguefl/javaVersions) - Change between different java versions with a single command.
- [jdk-switch](https://github.com/LockonS/jdk-switch) - Switches between jdk versions. Works on macOS and Linux.
- [jenkins](https://github.com/tomplex/jenkins-zsh) - A jenkins plugin for ZSH, heavily inspired by the excellent jira plugin.
- [jenv-lazy](https://github.com/shihyuho/zsh-jenv-lazy) - A ZSH plugin for lazy loading of jEnv.
- [jhipster](https://github.com/jhipster/jhipster-oh-my-zsh-plugin) - Adds commands for [jHipster](https://www.jhipster.tech/).
- [jira-plus](https://github.com/gerges/oh-my-zsh-jira-plus) - Create JIRA tickets from the command line.
- [jirarc](https://github.com/aoantov/jirarc) - Provides shortcuts for repetitive [Jira-cli](https://github.com/ankitpokhrel/jira-cli) commands.
- [jj](https://github.com/rkh/zsh-jj) - Add support for [jujitsu](https://github.com/jj-vcs/jj) VCS.
- [journal](https://github.com/onurhanak/zsh-journal) - Lets you attach notes to shell commands you have run. Handy for remembering what a oneliner was actually doing when you look back at it later.
- [jq](https://github.com/reegnz/jq-zsh-plugin) - Interactively build [jq](https://stedolan.github.io/jq/) expressions. Also supports [gojq](https://github.com/itchyny/gojq). Requires [fzf](https://github.com/junegunn/fzf).
- [jrgit](https://github.com/jrocha-dev/ohmyzsh-plugin-jrgit) - Provides a suite of functions to streamline the Git user experience. It includes features for installing and configuring `git`, handling large files with Git LFS, improving diff outputs, and managing credentials and keys securely.
- [jumper](https://github.com/thestuckster/jumper) - Saves your current path and allows you to quickly jump to others.
- [just-let-me-edit-my-files](https://github.com/asapelkin/zsh-just-let-me-edit-my-files) - lets you restart your editor with `sudo` when accidentally open non-writable files.
- [k](https://github.com/supercrabtree/k) - Directory listings for ZSH with `git` status decorations.
- [k3d](https://github.com/dwaynebradley/k3d-oh-my-zsh-plugin) - Adds aliases and tab completions for [k3d](https://k3d.io/).
- [k9s](https://github.com/acidix/zsh-k9s) - Provides an iteractive `$KUBECONFIG` selector for [k9s](https://k9scli.io/).
- [kctl](https://github.com/yzdann/kctl) - Add helper aliases for `kubectl`.
- [kill-node](https://github.com/vmattos/kill-node) - ZSH plugin for murdering `node` process families.
- [kitsunebook](https://github.com/d12frosted/kitsunebook.plugin.zsh) - KitsuneBook plugin for [oh-my-zsh](https://ohmyz.sh).
- [kittyback](https://github.com/pickle-slime/kittyback) - Automatically updates and modifies the background image for the `kitty` terminal emulator.
- [kiwi](https://github.com/fruitydog/kiwi.zsh-theme) - Dog-themed, includes `git` status and last command exit status decorators.
- [konsole-theme-changer](https://github.com/rocknrollMarc/zsh-konsole-theme-changer) - Toggle konsole theme from ZSH.
- [kube-aliases](https://github.com/Dbz/kube-aliases) - Adds functions and aliases to make working with `kubectl` more pleasant.
- [kube-ctx-manager](https://github.com/NotHarshhaa/kube-ctx-manager) - A smart shell plugin for kubectl power users — fuzzy context switching, auto-suggested aliases, and prod safeguards built right into your terminal.
- [kube-ps1](https://github.com/jonmosco/kube-ps1) - ZSH plugin for `kubectl` that adds current context and namespace.
- [kubecolor (devopstales)](https://github.com/devopstales/zsh-kubecolor) - Adds aliases for the `kubecolor` command.
- [kubecolor (droctothorpe)](https://github.com/droctothorpe/kubecolor) - Simplify and colorize the output of `kubectl get events -w`
- [kubecolor (trejo08)](https://github.com/trejo08/kubecolor-zsh) - Prints colorized outputs from  `kubectl`. Includes helper functions.
- [kubeconfig-mgr](https://github.com/yhlooo/zsh-kubeconfig-mgr) - Makes managing multiple kubeconfig files easier.
- [kubectl-config-switcher](https://github.com/chmouel/kubectl-config-switcher/) - Switch between config files in `~/.kube` via the `KUBECTL` environment variable.
- [kubectl-prompt](https://github.com/superbrothers/zsh-kubectl-prompt) - Display information about the kubectl current context and namespace in your ZSH prompt. Creates `ZSH_KUBECTL_CONTEXT`, `ZSH_KUBECTL_NAMESPACE`,`ZSH_KUBECTL_PROMPT` and `ZSH_KUBECTL_USER` variables you can use to customize your prompt.
- [kubectl](https://github.com/mattbangert/kubectl-zsh-plugin) - ZSH plugin for managing `kubectl`.
- [kubectlenv](https://github.com/rafalmasiarek/oh-my-zsh-kubectlenv-plugin) - Easily switch between multiple `kubectl` versions.
- [kubectx (ptavares)](https://github.com/ptavares/zsh-kubectx) - Installs and loads [kubectx](https://github.com/ahmetb/kubectx).
- [kubectx (unixorn)](https://github.com/unixorn/kubectx-zshplugin) - Automatically installs [kubectx](https://github.com/ahmetb/kubectx) and `kubens`.
- [kubernetes](https://github.com/Dbz/zsh-kubernetes) - Add [kubernetes](https://kubernetes.io) helper functions and aliases.
- [lacrimae](https://github.com/caIamity/lacrimae) - Prints a line from a collection of chants.
- [lacy](https://github.com/lacymorrow/lacy) - Detects natural language vs shell commands and routes accordingly. Commands execute normally, questions go to your AI agent (Claude Code, Gemini, OpenCode, Codex). Real-time color indicator and first-word syntax highlighting update on every keystroke. Also supports Bash 4+.
- [lando (joshuabedford)](https://github.com/JoshuaBedford/lando-zsh) - A collection of alias functions to enable the use of the CLIs within [Lando](https://docs.lando.dev) without having to type lando to access them.
- [lando (mannuel)](https://github.com/mannuel/lando-alias-zsh) - Adds aliases for various [Lando](https://docs.lando.dev/basics/usage.html#default-commands/) commands.
- [laradock-workspace](https://github.com/rluders/laradock-workspace-zsh) - Provides an interface to [Laradock](http://laradock.io/)'s workspace.
- [laravel (baliestri)](https://github.com/baliestri/laravel.plugin.zsh) - Plugin for skiping the `php` command when running `artisan` commands and `./sail` or `./vendor/bin/sail` when running `sail` commands.
- [laravel (crazybooot)](https://github.com/crazybooot/laravel-zsh-plugin) - Add shortcuts for [Laravel](https://laravel.com/) 5, 5.1, 5.2 & 5.3.
- [laravel-au](https://github.com/Saleh7/laravel-au-zsh-plugin) - Adds aliases for [Laravel](https://laravel.com/) 6.
- [laravel-sail](https://github.com/ariaieboy/laravel-sail) - Adds shortcuts for `sail` commands.
- [laravelx](https://github.com/rsthegeek/oh-my-zsh-laravelx) - Adds some aliases for common [Laravel](https://laravel.com/docs) commands.
- [last-pwd](https://github.com/itssimmons/zsh-lastpwd) - Remembers the last directory you were in and restores it the next time you open a terminal.
- [last-working-dir-tmux](https://github.com/Curly-Mo/last-working-dir-tmux) - Keeps track of the last used working directory globally and per [tmux](https://tmux.app) session and automatically jumps into it for new shells.
- [last-working-directory](https://github.com/mdumitru/last-working-dir) - Broken out copy of the version in [oh-my-zsh](http://ohmyz.sh/). Keeps track of the last used working directory and automatically jumps into it for new shells.
- [lazy-load](https://github.com/goarano/zsh-lazy-load) - Lazy load tab completions only when you actually need them.
- [lazyload](https://github.com/qoomon/zsh-lazyload) - Lazy load commands and speed up start up time of ZSH.
- [learn](https://github.com/MenkeTechnologies/zsh-learn) - Learning collection in MySQL/MariadB to save, query and quiz everything you learn.
- [lesaint-git](https://github.com/lesaint/lesaint-git) - Replacement `git` plugin for [oh-my-zsh](https://ohmyz.sh)-compatible frameworks.
- [lesaint-mvn](https://github.com/lesaint/lesaint-mvn) - Maven plugins for [oh-my-zsh](https://ohmyz.sh).
- [life-progress](https://github.com/bGZo/life-progress) - Shows your life progress in days, weeks, months, and age.
- [liferay](https://github.com/david-gutierrez-mesa/liferay-zsh) - Adds scripts for [liferay](https://github.com/liferay/liferay-portal) development.
- [line-bisect](https://github.com/Hoid/line-bisect) - Allows you to move your cursor in your terminal by bisecting the current command left or right with a single keystroke.
- [linkfile](https://github.com/JaumeRF/linkfile-zsh) - Add shortcuts to your favorite directories.
- [linus-rants](https://github.com/bhayward93/Linus-rants-ZSH) - Outputs a random Linus Torvalds rant when opening a terminal.
- [listbox](https://github.com/gko/listbox) - Listbox element for shell.
- [listview](https://github.com/hanssn/zsh-listview) - Lightweight, zero-dependency ZSH plugin inspired by PowerShell's PSReadLine ListView. Displays real-time, non-intrusive unique history suggestions below your prompt as you type, navigatable using arrow keys.
- [llm-replace](https://github.com/m3at/zsh-llm-replace) - Integrate LLMs into the shell for quick command generation. Requires `curl` and `jq`.
- [llm-suggestions (slasyz)](https://github.com/slasyz/zsh-llm-suggestions) - Opens a prompt, asks an LLM for shell command suggestions, and lets you pick one and execute it.
- [llm-suggestions (stefanheule)](https://github.com/stefanheule/zsh-llm-suggestions) - Type something in English at the prompt, hit a definable key, and it uses LLM to generate a command line for you.
- [locate-sublime-projects-cli](https://github.com/david-treblig/locate-sublime-projects-cli) - Allows searching for [Sublime Text](https://www.sublimetext.com) projects and opens them in Sublime.
- [logout-user](https://github.com/pressdarling/logout-user) - Provides a function to log out another macOS user session.
- [loremipsum](https://github.com/pfahlr/zsh_plugin_loremipsum) - Generate lorem ipsum text on the command line. Gets its data from [lipsum.com](https://www.lipsum.com).
- [ls (zpm-zsh)](https://github.com/zpm-zsh/ls) - Colorizes the output of `ls`.
- [ls-branch-label](https://github.com/freddi-kit/zsh-ls-branch-label) - Shows the current `git` branch next to repository directories when you run a plain `ls`.
- [lsd (tankeryang)](https://github.com/tankeryang/zsh-lsd) - Replaces `ls` and `tree` commands with [lsd](https://github.com/Peltoche/lsd).
- [lsd (wintermi)](https://github.com/wintermi/zsh-lsd) - Override `ls` and `tree` commands with [lsd](https://github.com/Peltoche/lsd).
- [lsd (z-shell)](https://github.com/z-shell/zsh-lsd) - Replaces `ls` with [lsd](https://github.com/Peltoche/lsd).
- [lumberjack](https://github.com/molovo/lumberjack) - Lumberjack is a logging interface for shell scripts.
- [lumen](https://github.com/thangduonghuu/lumen) - Deterministic command suggestions for ZSH — inline, on demand, no AI round-trip required.
- [lux](https://github.com/pndurette/zsh-lux) - ZSH plugin to toggle the light & dark modes of macOS, iTerm 2, Visual Studio Code and other items and applications via the `lux` command. Highly customizable: included items can be configured by defining variables. Highly extensible: items can be added by defining functions. Includes a `macos_is_dark` helper function to determine if the macOS dark mode is active for use in theming.
- [mac-packaging](https://github.com/Temikus/mac-packaging) - A set of common functions used for enterprise Mac packaging with [Munki](https://www.munki.org/munki/).
- [macos (joow)](https://github.com/joow/macos) - A ZSH plugin for macOS.
- [macos (zshzoo)](https://github.com/zshzoo/macos) - ZSH goodies for macOS users.
- [macos-autoproxy](https://github.com/SukkaW/zsh-osx-autoproxy) - Configures proxy environment variables based on macOS's system preferences.
- [macos-theme](https://github.com/gakimball/zsh-macos-theme) - Adds the theme command, which toggles between light and dark mode in macOS. Requires [lux](https://github.com/pndurette/zsh-lux) plugin.
- [mage2docker](https://github.com/lukaszolszewski/mage2docker) - Makes it easy to work with Docker and Magento 2. Speeds up and simplifies common commands like clean cache, setup upgrade, compile di and much more in Magento 2 on containers.
- [magebox](https://github.com/JCombee/oh-my-zsh-magebox) - Adds support for [magebox](https://magebox.dev/) — a modern development environment for Magento 2 and MageOS. Provides aliases, a cache-flush helper, prompt status indicator, and cached tab completion for the `magebox` CLI.
- [magento-2](https://github.com/dambrogia/oh-my-zsh-plugin-magento-2) - Adds `m2` function to run magento binary, adds tab completions.
- [magic-enter](https://github.com/zshzoo/magic-enter) - Make your enter key magical by binding a ZSH command to it.
- [manydots-magic](https://github.com/knu/zsh-manydots-magic) - A zle tweak for emulating `...'==`../..' etc.
- [markedit](https://github.com/zakariaGatter/MarkEdit) - Mark files and edit them with autocompletion for existing marks.
- [markgate](https://github.com/zakariaGatter/MarkGate) - Allows you to mark directories so you can jump directly to them.
- [matecito](https://github.com/uvallasciani/matecito-zsh) - Detects your language and country to display quotes from local authors in your native language. Simple, offline, no noise.
- [maven-plugin](https://github.com/KyleChamberlin/zsh_maven_plugin) - A fork of the [oh-my-zsh](https://ohmyz.sh/) maven plugin.
- [media-sync](https://github.com/redxtech/zsh-media-sync) - A plugin to facilitate copying media between two `rclone` locations.
- [mend](https://github.com/Rakosn1cek/mend) - A distro-agnostic assistant that recovers failed commands, handles missing libraries/PGP keys, and provides hardware-specific package recommendations.
- [mercurial](https://github.com/hcgraf/zsh-mercurial) - Extracted from [oh-my-zsh](https://ohmyz.sh) so you can use it without the rest of oh-my-zsh.
- [mfunc](https://github.com/hlohm/mfunc) - Allows you to define persistent functions on-the-fly, without the need to add them to your config files. These functions are permanently available until you delete them. This has been updated substantially with the help of AI and is essentially untested. Use at your own risk.
- [mise (cowboyd)](https://github.com/cowboyd/zsh-mise) - Adds [mise](https://mise.jdx.dev/) shims to your `$PATH`. Uses the shims strategy so that tools are available in non-interactive shells (e.g. Emacs exec-path-from-shell).
- [mise (wintermi)](https://github.com/wintermi/zsh-mise) - Plugin for [mise](https://mise.jdx.dev/) (formerly called rtx) a fast polyglot version manager, replacing tools like `nvm`, `nodenv`, `rbenv`, `rvm`, `chruby`, `pyenv`, etc.
- [mkarch](https://github.com/0xRZ/mkarch) - ZSH plugin that allows you to create archives using multiple different compression formats.
- [mkcd](https://github.com/azizoid/zsh-mkcd) - Provides a `mkcd` command, the canonical `mkdir` && `cd` helper.
- [mkcd](https://github.com/marvinroman/oh-my-zsh-mkcd-plugin) - Allows user to create a directory and if successful, `cd` into it afterward.
- [mlir](https://github.com/oowekyala/mlir-zsh-plugin) - Helpful for [MLIR](https://mlir.llvm.org/) developers. Includes accurate ZSH option completion for `mlir-opt` and other frontends using `MlirMain` (`iree-opt`, etc), syntax highlighting of `mlir-opt` output in your terminal (requires [pygments](https://pygments.org)).
- [mode-switch.CLI](https://github.com/Gyumeijie/mode-switch.CLI) - A ZSH plugin for switching command line between normal mode and `vi` mode.
- [monorepo-plugin](https://github.com/zilongqiu/monorepo-zsh-plugin) - ZSH plugin for monorepo management.
- [monthrename](https://github.com/NotTheDr01ds/zsh-plugin-monthrename) - Renames month names to numbers in filenames.
- [more-hooks-for-git](https://github.com/capsulescodes/more-hooks-for-git) - Adds extra hooks for `git add`, `git diff` and `git status`.
- [mouse-status](https://github.com/gryffyn/mouse-status) - Changes mouse color based on status code, uses libratbag.
- [msf](https://github.com/sathish09/zsh_plugins/tree/master/msf) - [Metasploit](https://www.metasploit.com/) handler plugin for starting handlers easily.
- [multi-evalcache](https://github.com/rwwiv/multi-evalcache) - Cache multiple eval loads to improve startup time, inspired by [mroth/evalcache](https://github.com/mroth/evalcache).
- [mvn-contexts](https://github.com/artemy/zsh-mvn-contexts) - Allows fast switching between `maven` configurations.
- [mycli](https://github.com/remino/omz-plugin-mycli-alias) - Add alias for [`mycli`](https://www.mycli.net) with login path.
- [mylocation](https://github.com/fALKENdk/mylocation) - A plugin to show your current location based on your IP address.
- [myservice](https://github.com/jarlor/zsh-myservice) - Designed to help you manage custom systemd services and Docker containers more conveniently. This plugin provides user-friendly commands to list and check the status of your custom services and Docker containers straight from your command line.
- [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - Adds color for `mysql` tables.
- [mysql-login](https://github.com/remino/omz-plugin-mysql-alias) - Adds alias for MySQL with login path.
- [mysql](https://github.com/voronkovich/mysql.plugin.zsh) - Adds some functions for dealing with `mysql`.
- [n](https://github.com/gretzky/n.zsh) - Auto-switches node versions based on project environment using [n](https://github.com/tj/n).
- [namelink](https://github.com/jthat/zsh-namelink) - Provides an automatically synchronized mapping of filesystem entries (typically symbolic links) in a set of directories to their counterparts in the named directory hash.
- [navi](https://github.com/icatalina/zsh-navi-plugin/) - Plugin for [navi](https://github.com/denisidoro/navi).
- [navigation-tools](https://github.com/zdharma-continuum/zsh-navigation-tools) - Adds `htop`-like kill, directory bookmarks browser, a multi-word incremental history searcher and more.
- [nerd-font-check](https://github.com/delorenj/nerd-font-check) - Offers to install [Nerd Fonts](https://www.nerdfonts.com/font-downloads) with [brew](https://brew.sh/) if not present.
- [new-file-from-template](https://github.com/zpm-zsh/new-file-from-template) -  Generates file from template.
- [newvwp](https://github.com/aubreypwd/zsh-plugin-newvwp) - Spins up a new WordPress site using Valet.
- [nhl-schedule](https://github.com/Matt561/zsh-nhl-schedule) - Retrieves and displays the NHL schedule.
- [nice-exit-code](https://github.com/bric3/nice-exit-code) - Maps exit status codes to human readable strings.
- [nix-shell](https://github.com/chisui/zsh-nix-shell) - Plugin that lets you use ZSH as the default shell in a `nix-shell` environment.
- [nlsh](https://github.com/PsychArch/nlsh) - Allows you to interact with your shell using natural language. Supports multiple LLM providers (OpenAI API compatible). Includes support for X.ai's Grok.
- [nnvm](https://github.com/torifat/nnvm) - auto-switches node versions based on `.nvmrc`. Requires [n](https://github.com/tj/n).
- [no-ps2](https://github.com/romkatv/zsh-no-ps2) - When this plugin is used, Enter inserts a newline if the typed command is incomplete. No PS2!
- [nobility](https://github.com/Twilight4/nobility) - An organized colletion of shell modules designed to streamline your pentesting workflow by leveraging shell integrations such as autocompletion and prefilling, optimizing the productivity of your work and liberatating you from the hassle of juggling notes, endless copying and pasting, and tedious command editing.
- [node-env-installer](https://github.com/shiro-saber/node-env-installer) - Uses `nvm` to install new versions and modules for the current project.
- [node-path](https://github.com/andyrichardson/zsh-node-path) - Automatically adds the `npm` bin of your current directory to your `$PATH`.
- [node](https://github.com/srijanshetty/node.plugin.zsh) - Srijan Shetty's Node.js plugin for ZSH with caching of `nvm` completions and autoloading of `nvm` if present.
- [nodenv (c-uo)](https://github.com/C-uo/zsh-nodenv) - Looks for `nodenv` in your working directory and loads it when found.
- [nodenv (jsahlen)](https://github.com/jsahlen/nodenv.plugin.zsh) - Auto-load `nodenv` and its completions into the shell.
- [nodenv (mattberther)](https://github.com/mattberther/zsh-nodenv) - Installs, updates and loads `nodenv`. Inspired by [zsh-rbenv](https://github.com/Meroje/zsh-rbenv).
- [nodo](https://github.com/nicolodiamante/nodo) - This plugin helps you prevent `node_modules` directories from filling your iCloud storage by un-syncing the directory or can save even more space by removing all `node_modules` directories within the chosen root directory. This is particularly useful for cleaning up a project that has multiple `node_modules` trees
- [nohup](https://github.com/micrenda/zsh-nohup) - Add `nohup` to the current command pressing `Ctrl-H`.
- [noreallyjustfuckingstopalready](https://github.com/eventi/noreallyjustfuckingstopalready) - macOS users know the pain of trying to figure out what command actually flushes the DNS cache on their version of macOS, and this plugin makes that annoyance go away.
- [nota](https://github.com/0x61nas/nota.zsh) - Simple plugin to manage a list of notes.
- [notenote](https://github.com/DrgnFireYellow/notenote/) - Makes it easy to take notes.
- [notes (aperezdc)](https://github.com/aperezdc/zsh-notes) - Inspired by [terminal_velocity](https://www.seanh.cc/terminal_velocity/), it provides a fast interface to create and access a set of [Markdown](https://en.wikipedia.org/wiki/Markdown) text files inside a directory.
- [notes (chipsenkbeil)](https://github.com/chipsenkbeil/zsh-notes) - Provides a quick notes editing experience in ZSH.
- [notify (luismayta)](https://github.com/luismayta/zsh-notify) - Notifications for ZSH with auto installation of dependencies and r2d2 sounds.
- [notify (marzocchi)](https://github.com/marzocchi/zsh-notify) - A plugin for ZSH (on macOS and Linux) that posts desktop notifications when a command terminates with a non-zero exit status or when it took more than 30 seconds to complete, if the terminal application is in the background (or the command's terminal tab is inactive).
- [npm (trystan2k)](https://github.com/trystan2k/zsh-npm-plugin) - Adds `npm` aliases. Based on the Oh-My-Zsh [npm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npm) plugin.
- [npm (zfben)](https://github.com/zfben/zsh-npm) - Use `n` as `npm` aliases with `noglob` prefix and more. Based on the Oh-My-Zsh [npm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npm) plugin.
- [npms](https://github.com/torifat/npms) - Utility powered by [fzf](https://github.com/junegunn/fzf) for using npm scripts interactively. Requires [fzf](https://github.com/junegunn/fzf) and [jq](https://stedolan.github.io/jq/).
- [nvim-appname](https://github.com/mehalter/zsh-nvim-appname) - Maintain multiple Neovim configurations with `NVIM_APPNAME` with full tab completion of available flags, available neovim applications, and neovim arguments/flags. Requires neovim v0.9+
- [nvim-switcher](https://github.com/dacarey/zsh-nvim-switcher)- Manages switching between `nvim` distributinons such as [Lazyvim](https://www.lazyvim.org/), [kickstart](https://github.com/nvim-lua/kickstart.nvim) or a home made configuration.
- [nvm-auto-use (jrr997)](https://github.com/jrr997/zsh-nvm-auto-use) - Automatically manages your Node.js versions with [nvm](https://github.com/nvm-sh/nvm) based on your current directory.
- [nvm-auto-use (martvdmoosdijk)](https://github.com/martvdmoosdijk/zsh-nvm-auto-use) - Automatically switches node version with `nvm use` when a `.nvmrc` is detected.
- [nvm-auto-use (tomsquest)](https://github.com/tomsquest/nvm-auto-use.zsh) - Calls `nvm use` automatically whenever you enter a directory that contains an `.nvmrc` file with a string telling `nvm` which node to use.
- [nvm-deferred](https://github.com/davidparsson/zsh-nvm-deferred) - Defers loading of the `nvm` oh-my-zsh plugin using [zsh-defer](https://github.com/romkatv/zsh-defer) to speed up shell startup.
- [nvm-lazy](https://github.com/davidparsson/zsh-nvm-lazy) - Plugin for lazy loading of oh-my-zsh's **nvm*- plugin. It supports lazy-loading `nvm` for more than one binary/entrypoint, with the defaults being `nvm`, `node` and `npm`.
- [nvm-pnpm-auto-switch](https://github.com/spencerbeggs/zsh-nvm-pnpm-auto-switch) - Automatically switches Node.js versions (using `nvm`) and manages pnpm package manager versions (using `corepack`) when changing directories.
- [nvm-x](https://github.com/seebeen/zsh-nvm-x) - ZSH plugin for managing `nvm` with extended helpers and improved workflow.
- [nvm](https://github.com/lukechilds/zsh-nvm) - ZSH plugin for installing, updating and loading `nvm`.
- [oath](https://github.com/alexdesousa/oath) - Manages 2FA authentication 6 digit tokens. It was highly inspired by this article about [using oathtool for 2 step verification](https://www.cyberciti.biz/faq/use-oathtool-linux-command-line-for-2-step-verification-2fa/).
- [oh-my-gpt](https://github.com/vicotrbb/oh-my-gpt) - Provides an easy-to-use interface for interacting with OpenAI's GPT models directly from your terminal. It allows you to send queries, analyze files, and get AI-powered assistance for various tasks.
- [oh-my-matrix](https://github.com/amstrad/oh-my-matrix) - Turn your terminal into the matrix.
- [oh-my-posh-manager](https://github.com/wintermi/zsh-oh-my-posh) - Manages the oh-my-posh theme engine, along with providing a default powerline-like theme.
- [oh-my-tmux-manager](omt-manager) - Lets you easily manage your `tmux` configurations.
- [ohmyai](https://github.com/briques/ohmyai-zsh) - AI-powered command suggestions for Zsh. Type what you want to do, press the hotkey, and get shell command suggestions from OpenAI.
- [ollama](https://github.com/plutowang/zsh-ollama-command) - Integrates the OLLAMA AI model with [fzf](https://github.com/junegunn/fzf) to provide intelligent command suggestions based on user input requirements.
- [omz-full-autoupdate](https://github.com/Pilaton/OhMyZsh-full-autoupdate) - Automatically update [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) plugins and themes.
- [omz-git](https://github.com/aeons/omz-git) - [Oh-My-ZSH](https://ohmyz.sh/)'s [git](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git) plugin re-packaged to be standalone.
- [omz-themes-standalone](https://github.com/zshzoo/omz-themes-standalone) - Gives you the [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) themes without requiring everything else that comes with [Oh-My-ZSH](https://ohmyz.sh/).
- [oops](https://github.com/ysb3996-blip/oops) - Copies the last command and its output to the clipboard as a Markdown code block, with API keys and other secrets masked. Needs Ruby 3.3 or later; no gem install.
- [op](https://github.com/zsh-contrib/zsh-op) - Seamless [1Password](https://1password.com/) CLI integration. Manage environment variables and SSH keys from 1Password with automatic caching, fast shell initialization, and a configuration-driven workflow.
- [open-create-projects](https://github.com/marcossegovia/open-create-projects) - Open/Create projects in Jetbrains.
- [open-pr](https://github.com/caarlos0/zsh-open-pr) - A ZSH plugin to open pull requests from command line.
- [opencode (mskadu)](https://github.com/mskadu/zsh-opencode-plugin) - Adds support for the [opencode](https://opencode.ai/) AI coding agent.
- [opencode (verlihirsh)](https://github.com/verlihirsh/zsh-opencode-plugin) - Stop googling shell commands. Just describe what you want in plain English, press Tab, and get the exact command you need.
- [openshift-origin](https://github.com/ryanswart/openshift-origin-zsh-plugin) - Add a few shortcuts to common openshift origin (oc) actions.
- [opera-gx](https://github.com/troykelly/oh-my-zsh-opera-gx) - Enables starting Opera GX with a specific user profile by using the `opgx` command followed by the profile's name. The plugin also implements autocompletion for profile names.
- [opp](https://github.com/hchbaw/opp.zsh) - Vim's text-objects-ish for ZSH.
- [opt-path](https://github.com/jreese/zsh-opt-path) - Automatically add `~/opt` subpaths to your `$PATH`.
- [org-hopper](https://github.com/hjdarnel/org-hopper/) - Wraps the GitHub CLI with [fzf](https://github.com/junegunn/fzf). It allows you to quickly jump between repositories a given GitHub organization, cloning it to a predefined location if the local copy doesn't already exist.
- [orthocal](https://github.com/darthtrevino/omz-orthocal) - Displays today's Orthodox feast, saints, fasting, and scripture reading information in your ZSH prompt using the [Orthocal.info](https://orthocal.info/) API.
- [osx-dev](https://github.com/marshallmick007/osx-dev-zsh-plugin) - This plugin adds some commands for maintaining various server programs on a macOS install.
- [osx](https://github.com/mwilliammyers/plugin-osx) - Add some common macOS related aliases and functions.
- [paci](https://github.com/iloginow/zsh-paci) - Plugin for arch linux package managers.
- [pack](https://github.com/fourdim/zsh-pack/) - Pack your source code with ZSH.
- [package-any-node](https://github.com/zdharma-continuum/zsh-package-any-node) - Easy installing of any Node modules inside the plugin directory, exposing their binaries via shims (i.e.: forwarder scripts) created automatically by [Bin-Gem-Node](https://github.com/zdharma-continuum/z-a-bin-gem-node) annex.
- [packer](https://github.com/BreakingPitt/zsh-packer) - Adds aliases and auto-completes for Hashicorp [packer](https://www.packer.io/).
- [pantheon-terminal-notify](https://github.com/deyvisonrocha/pantheon-terminal-notify-zsh-plugin) - Background notifications for long running commands. Supports Elementary OS Freya.
- [passwordless-history](https://github.com/jgogstad/passwordless-history) - Keeps passwords from entering your command line history.
- [paste-guard](https://github.com/stefanoamorelli/zsh-paste-guard) - Detects pasted commands and requires a confirmation phrase before execution to prevent clipboard injection attacks (MITRE ATT&CK T1204.004). Reads confirmation from `/dev/tty` so attackers cannot embed the confirmation in the payload.
- [path-ethic](https://github.com/sha1n/path-ethic) - Helps manage your `$PATH` quickly and easily. Doesn't touch your existing `.zshrc`, `.zprofile`, but adds on top of your existing environment instead.
- [patina](https://github.com/michel-kraemer/zsh-patina) - A blazingly fast ZSH syntax highlighter written in Rust.
- [pctl](https://github.com/ytet5uy4/pctl) - Toggle the environment variables for proxying.
- [peco-history](https://github.com/jimeh/zsh-peco-history) - Search shell history with Peco when pressing `ctrl+R`.
- [penmux](https://github.com/mfulz/zsh-penmux) - A session manager plugin meant to be used for penetration testing sessions and tracking the terminal sessions to be used in reports.
- [pentest](https://github.com/jhwohlgemuth/oh-my-zsh-pentest-plugin) - Aliases and functions for the lazy penetration tester.
- [penv](https://github.com/Nhqml/penv-zsh-plugin) - Manages `uv` Python virtual environments stored in `~/.local/share/py-venv/`. Supports subcommands for listing, activating (shell and directory level), creating, deleting and explaining why an env is activated. Makes it easier to replace `pyenv` and `poetry` with `uv`.
- [per-directory-history](https://github.com/jimhester/per-directory-history) - Per directory history for ZSH, as well as global history, and the ability to toggle between them with `^G`.
- [percol](https://github.com/robturtle/percol.plugin.zsh) - Interactively and incrementally search history/resume background jobs using [percol](https://github.com/mooz/percol).
- [perlbrew](https://github.com/tfiala/zsh-perlbrew/) - Installs [perlbrew](https://perlbrew.pl/) if not already installed and initializes it for your shell.
- [pew](https://github.com/shosca/zsh-pew) - Sets up and manages Python virtualenvs using [pew](https://github.com/berdario/pew) and automatically switches virtualenvs as you move directories.
- [pg](https://github.com/caarlos0-graveyard/zsh-pg) - Adds utility functions to work with [PostgreSQL](https://www.postgresql.org/).
- [pgconnect](https://github.com/ruslan-korneev/pgconnect-zsh) - Provides an easy way to manage and connect to PostgreSQL databases using `pgcli` and [fzf](https://github.com/junegunn/fzf) for a seamless command-line experience.
- [ph-marks](https://github.com/lainiwa/ph-marks) - Bookmark pornhub videos from your terminal.
- [php-version-rcfile-switcher](https://github.com/xellos866/php-version_rcfile-switcher) - Automatically switch between php versions using [php-version](https://github.com/wilmoore/php-version) if an rc-file is present in a directory.
- [php-version-switcher](https://github.com/Akollade/php-version-switcher.plugin.zsh) - Changes php versions if a `.php-version` file is found.
- [phpcs](https://github.com/voronkovich/phpcs.plugin.zsh) - Plugin for [PHP code sniffer](https://github.com/squizlabs/PHP_CodeSniffer).
- [phpunit](https://github.com/voronkovich/phpunit.plugin.zsh) - Plugin for [PHPUnit](https://phpunit.de/).
- [pi](https://github.com/nearsyh/pi-zsh-plugin) - Maps `:` commands in your shell to `pi -p` calls and keeps a per-shell `pi` session file for continuity.
- [pins](https://github.com/mehalter/zsh-pins) - A plugin for pinning directories. Like a CLI folder bookmark manager with tab completions.
- [pip-app](https://github.com/sharat87/pip-app) - Makes it easy to install python applications into distinct Python virtualenvs so they don't conflict with any other python requirements on your system.
- [pip-env](https://github.com/iboyperson/zsh-pipenv) - Automatic [pipenv](https://pipenv.readthedocs.io/en/latest/) activation upon entry into a `pipenv` project.
- [pipe](https://github.com/pipe-felipe/zsh-pipe-plugin) - A powerful ZSH plugin featuring **cross-distro system updates** and **cleanup** (supports `apt`, `dnf`, `pacman`, `zypper`, `homebrew`, and more), Docker container/volume management, and development environment enhancements. Simplifies system maintenance across multiple Linux distributions with intuitive commands. Extensible through a simple configuration system - see project README for details.
- [pipenv (owenstranathan)](https://github.com/owenstranathan/pipenv.zsh) - Automatically activates a **pipenv** when entering a directory if there is Pipfile in that directory. Includes `pipenv` completions.
- [pipenv (sudosubin)](https://github.com/sudosubin/zsh-pipenv) - Enables `pipenv`'s `$PATH` and adds completions.
- [pipx](https://github.com/thuandt/zsh-pipx) - Autocompletions for [pipx](https://github.com/pypa/pipx).
- [pjfzf](https://github.com/K021/pjfzf) - A project directory navigator powered by [fzf](https://github.com/junegunn/fzf). Registers base directories and navigates their subdirectories with frecency-based sorting and file preview.
- [pkenv](https://github.com/ptavares/zsh-pkenv) - Installs and loads [pkenv](https://github.com/iamhsa/pkenv.git).
- [plugin-ibtool](https://github.com/rgalite/zsh-plugin-ibtool) - Adds ibtool shortcuts to generate localized XIB files.
- [plugin-rails](https://github.com/paraqles/zsh-plugin-rails) - ZSH plugin for Rails.
- [plugin-vscode](https://github.com/wuotr/zsh-plugin-vscode) - Plugin for [Visual Studio Code](https://code.visualstudio.com/download), a text editor for macOS, Windows, and Linux.
- [plugin](https://github.com/darrenbutcher/plugin) - Creates custom [oh-my-zsh](https://ohmyz.sh) plugins from a boilerplate template. Very oh-my-zsh centric, the generated plugins may need editing to work with other frameworks.
- [pnpm (baliestri)](https://github.com/baliestri/pnpm.plugin.zsh) - Adds useful aliases for many common [pnpm](https://pnpm.io/) commands. Includes tab-completions.
- [pnpm (bgowers)](https://github.com/bgowers/omz-pnpm) - Adds a small set of alias for the [pnpm](https://pnpm.io/) commands you actually type and tab-completions.
- [pnpm (leizhenpeng)](https://github.com/Leizhenpeng/zsh-plugin-pnpm) - Adds useful aliases for common [pnpm](https://pnpm.io/) commands.
- [pnpm (mat2ja)](https://github.com/mat2ja/pnpm.plugin.zsh) - Better [pnpm](https://pnpm.io/) aliases.
- [pnpm (ntnyq)](https://github.com/ntnyq/omz-plugin-pnpm) - Adds useful aliases for common [pnpm](https://pnpm.io/) commands.
- [pnpm-pick](https://github.com/rschaufler/zsh-pnpm-pick) - Fuzzy-pick a script from any package in a [pnpm](https://pnpm.io/) workspace and load the command into your prompt — editable, in your history, and visible in your terminal title.
- [poetry (darvid)](https://github.com/darvid/zsh-poetry) - Automatically activates and deactivates [Poetry](https://poetry.eustace.io/)-created python virtualenvs.
- [poetry (murku)](https://github.com/murku/omz_poetry_plugin) - Adds aliases for frequently used [Poetry](https://poetry.eustace.io/) commands
- [poetry (sudosabin)](https://github.com/sudosubin/zsh-poetry) - Enables poetry `$PATH` and autocompletions.
- [popman](https://github.com/jdsee/popman) - Ever found yourself in the middle of composing a long command and needing to check a man page? Popman lets you instantly pop open a man page for any command you're typing and jump right back to where you left off, making your command-line experience smoother and more efficient.
- [popular.zsh](https://github.com/sajjadRabiee/popular-zsh) - Lets you bookmark, template, and re-run your most-used ZSH commands with `padd`, `p`, and `pls`. Supports AES-256-CBC encrypted secret placeholders, history capture via `paddh`, tab completion, and export/import including direct import from a GitHub repository.
- [portal](https://github.com/anasouardini/portal/) - A very basic script for jumping to/from paths without having to do write the whole path, open multiple terminal sessions or do a file system search using [fzf](https://github.com/junegunn/fzf). Heavily inspired by [Z](https://github.com/rupa/z).
- [posh-git-bash](https://github.com/lyze/posh-git-sh) - Adds `git` status in your prompt.
- [powerlens](https://github.com/luyangkk/powerlens) - Shows real-time system metrics in your right prompt. Includes decorators for power, battery, CPU, CPU temp, fan speed, memory, and network I/O.
- [ppsmon](https://github.com/mzpqnxow/ppsmon) - Reads `/sys/class/net/$interface/` to keep track of packet transmission rates. It stores the current rate to a file in the RAM backed filesystem where it can be easily accessed for display in a shell-prompt. Linux-only due to use of `/sys`.
- [pr-cwd](https://github.com/zpm-zsh/pr-cwd) - Creates a global variable with current working directory. Plugin has integration with [jocelynmallon/zshmarks](https://github.com/jocelynmallon/zshmarks).
- [pr-eol](https://github.com/zpm-zsh/pr-eol) - Displays an EOL symbol which can be embedded in the prompt.
- [pr-exec-time](https://github.com/zpm-zsh/pr-exec-time) - Adds a variable you can use to display the execution time of the last command run.
- [pr-git](https://github.com/zpm-zsh/pr-git) - Creates a global variable with `git` status information that can be displayed in prompts.
- [pr-is-root](https://github.com/zpm-zsh/pr-is-root) - Sets an environment variable you can use in a custom prompt when running as root.
- [pr-jobs](https://github.com/zpm-zsh/pr-jobs) - Creates an environment variable which can be used to display background job information in a custom prompt.
- [pr-node](https://github.com/zpm-zsh/pr-node) - Sets an environment variable which can be used to display Node.js information in a custom prompt.
- [pr-return](https://github.com/zpm-zsh/pr-return) - Plugin for ZSH which displays the exit status of the last command run.
- [pr-user](https://github.com/zpm-zsh/pr-user) - Creates a global variable that can be used in prompts.
- [pratchett](https://github.com/loudoncloud/pratchett) - Displays a random Terry Pratchett quote from the Discworld novels, copied verbatim from Wikiquote. Includes a quote of the day, filtering by book, search, and tab completion; DEATH delivers his own lines if `cowsay` is installed.
- [presenter-mode](https://github.com/idadzie/zsh-presenter-mode) - Expands aliases during presentations. It also increases the terminal window's contrast to enhance visibility.
- [pretty-time (sindresorhus)](https://github.com/sindresorhus/pretty-time-zsh) - Convert seconds to a human readable string: 165392 → 1d 21h 56m 32s.
- [pretty-time (zpm-zsh)](https://github.com/zpm-zsh/pretty-time) - Converts raw seconds into human-readable strings.
- [prettyping](https://github.com/unixorn/prettyping) - Adds a wrapper around the standard ping tool with the objective of making the output prettier, more colorful, more compact, and easier to read.
- [prezto-last-working-dir](https://github.com/JoniVanderheijden/prezto-last-working-dir) - Keeps track of the last used working directory and automatically jumps into it for new shells, unless the starting directory is not `$HOME`. Includes a `lwd` alias.
- [print-alias](https://github.com/brymck/print-alias) - Prints commands with aliases expanded whenever you use an alias at the command line.
- [printc](https://github.com/philFernandez/printc) - Allows you to print in any color in the RGB space via a simple `printc` call.
- [printdocker](https://github.com/elvitin/printdocker-zsh-plugin) - Pretty print [docker](https://docker.com) objects.
- [profile-secrets](https://github.com/gmatheu/shell-plugins) - Securely keep sensitive variables (api tokens, passwords, etc) as part of your terminal init files. Uses gpg to encrypt/decrypt the file with your secrets.
- [proj-jumper](https://github.com/Kikolator/proj-jumper) - A lightweight ZSH plugin that lets you jump straight into any project folder under a single development root -- perfect when that root lives on a removable drive.
- [project (gko)](https://github.com/gko/project) - Create node/python/ruby projects both locally and on GitHub (private or public repository).
- [project (voronkovich)](https://github.com/voronkovich/project.plugin.zsh) - Plugin for managing projects.
- [project-aliases](https://github.com/dvigo/project-aliases) — Zsh plugin to automatically load and unload per-project aliases.
- [projen](https://github.com/p6m7g8/p6-zsh-projen-plugin) - Adds aliases for [projen](https://github.com/projen/projen).
- [prompt-dir-perms](https://github.com/xPMo/zsh-prompt-dir-perms) - Creates a segment displaying the permissions of the current directory you can use in your ZSH prompt.
- [prompt-generator](https://github.com/the10thWiz/zsh-prompt-generator) - Generates custom themes. Some generated themes require powerline-compatible fonts.
- [proxy-plugin (escalate)](https://github.com/escalate/oh-my-zsh-proxy-plugin) - Quickly enable and disable proxy shell environment settings.
- [proxy-plugin (xooooooooox)](https://github.com/xooooooooox/zsh-proxy) - Helps manage proxy settings in your shell environment.
- [proxy](https://github.com/SukkaW/zsh-proxy) - Configure proxy settings for some package managers and software.
- [psgrep](https://github.com/voidzero/omz-plugin-psgrep/) - Makes `ps grep` hide its own process from the results of a `ps aux | grep`.
- [psmon](https://github.com/dumidusw/psmon) - Lightweight interactive process monitor using standard Linux utilities (`ps`, `awk`, `lsof`) with live watch mode, resource sorting, and tree-aware process killing.
- [pump](https://github.com/fab1o/pump-zsh) - Provides a configurable set of aliases, functions, and themes to supercharge your terminal workflow. Requires [jq](https://stedolan.github.io/jq/), [gum](https://github.com/charmbracelet/gum), [glow](https://github.com/charmbracelet/glow) and the [GitHub CLI](https://cli.github.com/).
- [purge-history-secrets](https://github.com/jotasixto/purge-history-secrets) - Uses [gitleaks](https://github.com/gitleaks/gitleaks) to periodically scan your ZSH history for secrets and purge them if found. Requires [jq](https://jqlang.github.io/jq/).
- [pwp](https://github.com/ttkalcevic/pwp) - Provides a convenient way to display the present working path in the terminal prompt and lists the current working directory along with its parent directories. Additionally, it includes a custom command .. to navigate to parent directories easily.
- [pycalc (alalik)](https://github.com/alalik/pycalc) - Turns the `=` key into a powerful, Python‑backed calculator in your ZSH shell.
- [pycalc (peibozhao)](https://github.com/peibozhao/pycalc) - ZSH calculator that uses Python syntax.
- [pyenv (mattberther)](https://github.com/mattberther/zsh-pyenv) - Inspired by **zsh-rbenv**. Installs, updates or loads `pyenv`, and adds extra functionality.
- [pyenv (xlshiz)](https://github.com/xlshiz/pyenv-zsh-plugin) - Loads [pyenv](https://github.com/pyenv/pyenv) into the current shell and provides prompt info via the `pyenv_prompt_info` function. Also loads [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) if available.
- [pyenv-lazy-load](https://github.com/erikced/zsh-pyenv-lazy-load) - Plugin for lazy-loading `pyenv` in ZSH.
- [pyenv-lazy](https://github.com/davidparsson/zsh-pyenv-lazy) - Lazy load [pyenv](https://github.com/pyenv/pyenv). The initial `eval "$(pyenv init -)"` is executed the first time `pyenv` is called.
- [pyroclear](https://github.com/shreyanth-sureshkrishnaa/pyroclear) - A terminal clear replacement that burns your screen down before wiping it.
- [pyvenv-fast](https://github.com/ACmyles/pyvenv-fast) - Launch a Python `venv` with one command. Designed for use with [dotpyvenv](https://github.com/jeanpantoja/dotpyvenv).
- [q (cal2195)](https://github.com/cal2195/q) - Add `vim`-like macro registers to your ZSH shell.
- [q (tomsquest)](https://github.com/tomsquest/q.plugin.zsh) - Tail/remove the temp file for [Q](https://github.com/y0ssar1an/q), the Dirty Debugging Tool.
- [qiime2](https://github.com/misialq/zsh-qiime2) - Adds functions and aliases to make working with [Quiime 2](https://qiime2.org/) easier.
- [qqq](https://github.com/mejistus/zsh-plugin-qqq) - Turns the current terminal into a colorful rotating ASCII donut, with centered 5-line ASCII date and time below it.
- [quiet-accept-zle](https://github.com/AdrieanKhisbe/zsh-quiet-accept-line) - Enables you to run a typed ZSH command without triggering new prompt, history entry, or having output being outputed.
- [quoter](https://github.com/pxgamer/quoter-zsh) - Display a random quote when opening a new terminal session.
- [quotify](https://github.com/dpretet/zsh-quotify) - Displays inspiring coding quotes from our pairs when starting up.
- [qwy](https://github.com/Ryooooooga/qwy) - ZSH fuzzy completion plugin.
- [randeme](https://github.com/ex-surreal/randeme) - Chooses a random theme for each session. If you not like the chosen theme you can run `randeme_rm` to never show that theme again.
- [random-quotes](https://github.com/vkolagotla/zsh-random-quotes) - Displays random quotes or facts.
- [ranger (niziL)](https://github.com/NiziL/ranger.plugin.zsh) - provide prompt element for [ranger](https://github.com/ranger/ranger). Shows current `RANGER_LEVEL`, displaying nothing when the environment variable is unset, something when it is equals to 1, and something else when it is greater than 1.
- [ranger (rc2dev)](https://github.com/rc2dev/ranger-zshz) - Integrates [zsh-z](https://github.com/agkozak/zsh-z) into [ranger](https://github.com/ranger/ranger).
- [ranger-autojump](https://github.com/fdw/ranger-autojump) - Adds [autojump](https://github.com/wting/autojump) support to the [ranger](https://github.com/ranger/ranger) console file manager.
- [ranger-zoxide](https://github.com/fdw/ranger-zoxide) - Adds [zoxide](https://github.com/ajeetdsouza/zoxide) support to the [ranger](https://github.com/ranger/ranger) console file manager.
- [raspberry-temp](https://github.com/cfunkz/zsh-raspberry-temp-plugin) - Measures temperature for a Raspberry pi via `rpi-temp` alias.
- [raspberryPi4Temperature](https://github.com/KidesLeo/RaspberryPi4TemperaturePromptPlugin) - Puts the Raspberry Pi temperature into a spaceship prompt segment
- [razer-status-code](https://github.com/michaelmcallister/razer-status-code) - Change the color of your [Razer Mouse](https://openrazer.github.io/) based on the status of the last executed command. Requires [OpenRazer](https://openrazer.github.io) linux drivers.
- [rbenv (elliottcable)](https://github.com/ELLIOTTCABLE/rbenv.plugin.zsh) - A faster fork of the `rbenv` plugin from [oh-my-zsh](https://ohmyz.sh/).
- [rbenv (jsahlen)](https://github.com/jsahlen/rbenv.plugin.zsh) - Variant based on the original [oh-my-zsh](https://ohmyz.sh/) `rbenv` plugin.
- [rbenv (meroje)](https://github.com/Meroje/zsh-rbenv) - Inspired by [https://github.com/lukechilds/zsh-nvm/](https://github.com/lukechilds/zsh-nvm/), makes it easier to work with ruby `rbenv` environments.
- [rc-files](https://github.com/0b10/rc-files) - Adds shortcut functions for editing various rc files.
- [recall](https://github.com/mango-tree/zsh-recall) - Makes using command history easier.
- [redis](https://github.com/z-shell/redis) - Will run [redis-server](https://redis.io/) pointing it to the `redis.conf` configuration file. This can be used with the [zdharma/zredis](https://github.com/z-shell/zredis) plugin to share variables between shells.
- [redo](https://github.com/joknarf/redo) - Adds an interactive history menu to replace `Ctrl-R` and `ESC+/`.
- [reentry-hook](https://github.com/RobSis/zsh-reentry-hook) - Plugin that re-enters working directory if it has been removed and re-created.
- [release-fetcher](https://github.com/Game4Move78/zsh-release-fetcher) - Fetches latest release and checks if you trust the identity used to sign the tag.
- [reload](https://github.com/aubreypwd/zsh-plugin-reload) - Adds function to quickly reload your `.zshrc`.
- [reminder](https://github.com/AlexisBRENON/oh-my-zsh-reminder) - A plugin which displays reminders above every prompt.
- [replace-multiple-dots](https://github.com/momo-lab/zsh-replace-multiple-dots) - Converts `...` to `../..`
- [require](https://github.com/aubreypwd/zsh-plugin-require) - Adds ability to `require commandname` and then (if [brew](https://brew.sh) is installed) automatically `brew install commandname` if it isn't already installed.
- [revolver](https://github.com/molovo/revolver) - A progress spinner for ZSH scripts.
- [rfig](https://github.com/tamia6/rfig) - Adds command completion menus and directory-scoped history autosuggestions to ZSH, Bash and Fish on macOS and Linux. Written in Rust.
- [riddle-me](https://github.com/vkolagotla/zsh-riddle-me) - Displays random riddles.
- [ripz](https://github.com/jedahan/ripz) - Reminds you of your aliases, so you use them more. Depends on [ripgrep](https://github.com/BurntSushi/ripgrep).
- [robo](https://github.com/shengyou/robo-zsh-plugin) - A ZSH plugin for [Robo](https://github.com/consolidation/robo/).
- [rockz](https://github.com/aperezdc/rockz) - Lua + LuaRocks virtual environment manager based upon VirtualZ.
- [ros2-env](https://github.com/Butakus/ros2-env) - Manage [ROS 2](https://github.com/ros2) environment and workspaces.
- [ros2-supercharged](https://github.com/danlil240/ros2-supercharged) - A curated combination of the best ideas from three excellent ROS 2 shell projects, rebuilt as one cohesive, modern zsh plugin. Includes [fzf](https://github.com/junegunn/fzf) workspace selector, launch-file picker, colcon error browser, domain management, prompt segment, named-workspace registry (rosws), per-workspace distro + overlay chaining, build-from-anywhere cb with real colcon argcomplete completion.
- [rose-pine-man](https://github.com/const-void/rose-pine-man) - Colorizes `man` pages.
- [rtfm](https://github.com/hoolies/RTFM) - Puts the manual under your thumb. Hit Tab, fuzzy-filter what you need, read the description, insert the token, without leaving the line, and without guessing.
- [rtm-reminder](https://github.com/aranel616/rtm-reminder-zsh) - Displays urgent [Remember The Milk](https://www.rememberthemilk.com/) tasks after each command execution. Clean, non-intrusive, and terminal-only.
- [run-scripts](https://github.com/Aireck2/zsh-run-scripts) - Runs scripts from `package.json`.
- [rura](https://github.com/kiki-ki/rura) - A simple ZSH plugin to save and jump to directories.
- [rust (betterfetch)](https://github.com/betterfetch/zsh-plugin-rust) - Provides convenient aliases for working with Rust's Cargo, Rustc, and Rustup tools.
- [rust (cowboyd)](https://github.com/cowboyd/zsh-rust) - Configure your [rust](https://www.rust-lang.org/) toolchain, installing [rustup](https://rustup.rs) if it is not currently installed already.
- [rust (juici)](https://github.com/Juici/zsh-rust-completions) - ZSH completion definitions for rust.
- [rust (wintermi)](https://github.com/wintermi/zsh-rust) - Plugin for the [rust](https://www.rust-lang.org/) toolchain.
- [rvm](https://github.com/johnhamelink/rvm-zsh) - Initiates [rvm](https://github.com/rvm/rvm) and adds rubygem binaries (like compass) accessible in the user's `$PATH`.
- [safe-kubectl](https://github.com/benjefferies/safe-kubectl) - Add 