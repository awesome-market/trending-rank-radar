<h1 align="center">
 <img src="https://user-images.githubusercontent.com/45159366/152699296-73cb8002-9a24-47f8-9941-519afacd2195.png">
  <br />
 Self Hosting Guide
</h1>

 <a href="https://github.com/mikeroyal?tab=followers">
         <img alt="followers" title="Follow me on Github for Updates" src="https://custom-icon-badges.demolab.com/github/followers/mikeroyal?color=236ad3&labelColor=1155ba&style=for-the-badge&logo=person-add&label=Follow&logoColor=white"/></a> 	

![Maintenance](https://img.shields.io/maintenance/yes/2024?style=for-the-badge)
![Last-Commit](https://img.shields.io/github/last-commit/mikeroyal/self-hosting-guide?style=for-the-badge)

 #### A guide for getting started with Self Hosting devices including software and hardware that will make you a better and more efficient Self Hosting.
 
 **Note: You can easily convert this markdown file to a PDF in [VSCode](https://code.visualstudio.com/) using this handy extension [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf).**
 
 **Note 2: This guide will constantly be updated with new info as becomes available and please feel to make an [issue](https://github.com/mikeroyal/Self-Hosting-Guide/issues) if you think something should be added.**
 
 <p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/152699307-1c4ebfcd-a2b0-456c-9a84-01ac255e3782.png">
  <br />
</p>
 
# Table of Contents

1. [Getting Started with Self-Hosting](https://github.com/mikeroyal/Self-Hosting-Guide#getting-started-with-self-hosting)
 
    - [Tools for Self-Hosting](https://github.com/mikeroyal/Self-Hosting-Guide#tools-for-self-hosting)
       * [Containers](https://github.com/mikeroyal/Self-Hosting-Guide#containers)
       * [CI/CD](https://github.com/mikeroyal/Self-Hosting-Guide#cicd)
       * [Development](https://github.com/mikeroyal/Self-Hosting-Guide#development)
       * [Web servers](#web-servers)
       * [Large language models (LLMs)](#llms)
       * [ChatGPT Chatbots](#chatgpt)
       * [Automation](#automation)
       * [Configuration Management](#Configuration-Management)
       * [Cloud Storage](#cloud-storage)
       * [Cloud](https://github.com/mikeroyal/Self-Hosting-Guide#Cloud)
        * [Linode](#Linode)
	* [Nextcloud](#Nextcloud)
	* [DigitalOcean](#DigitalOcean)
        * [Back4app Web Deployment](#back4app-web-deployment)
	* [MinIO Object Storage](#MinIO-Object-Storage)
       * [Databases](#Databases)
         - [SQL](#SQL)
         - [NoSQL](#NoSQL)
       * [Remote Access](https://github.com/mikeroyal/Self-Hosting-Guide#Remote-Access)
       * [Virtualization](https://github.com/mikeroyal/Self-Hosting-Guide#Virtualization)
       * [Password Management](https://github.com/mikeroyal/Self-Hosting-Guide#password-management)
       * [SSH](#ssh)
       * [VPN](#vpn)
       * [LDAP(Lightweight Directory Access Protocol)](#ldap)
       * [Log Management](#log-management)
       * [DNS](#dns)
       * [Network Tools](https://github.com/mikeroyal/Self-Hosting-Guide#network-tools)
       * [Service Discovery](#service-discovery)
       * [Security](#security)
       * [Troubleshooting](#troubleshooting)
       * [Monitoring](https://github.com/mikeroyal/Self-Hosting-Guide#monitoring)
       * [Dashboards](#Dashboards)
       * [Analytics](#Analytics)
       * [Search](#Search)
       * [Notifications](#Notifications)
       * [RSS](#RSS)
       * [Websites/Blogs](#WebsitesBlogs)
       * [Social](#Social)
       * [Nostr](#nostr)
       * [iMessage](#imessage)
       * [Communications](https://github.com/mikeroyal/Self-Hosting-Guide#communications)
       * [Business Management](https://github.com/mikeroyal/Self-Hosting-Guide#business-management)
       * [Collaboration & Synchronization](https://github.com/mikeroyal/Self-Hosting-Guide#Collaboration--Synchronization)
       * [Encryption](#Encryption)
       * [Backups](https://github.com/mikeroyal/Self-Hosting-Guide#backups)
       * [Snapshots Management/System Recovery](snapshots-managementsystem-recovery)
       * [Archiving](#archiving)
       * [Home Server](https://github.com/mikeroyal/Self-Hosting-Guide#home-server)
       * [Media Server](https://github.com/mikeroyal/Self-Hosting-Guide#media-server)
       * [Smart Home Automation](#Smart-Home-Automation)
       * [Voice Assistants](#Voice-Assistants)
       * [Video Surveillance](#Video-Surveillance)
       * [Text-To-Speech Synthesis (TTS)](#Text-To-Speech-Synthesis-TTS)
       * [Video and Audio Processing](#Video-and-Audio-Processing)
       * [Podcasting](#Podcasting)
       * [Audiobooks](#Audiobooks)
       * [Health](#Health)
       * [Gardening](#gardening)
       * [Maps](https://github.com/mikeroyal/Self-Hosting-Guide#maps)
       * [Bookmarks](#Bookmarks)
       * [Photos](https://github.com/mikeroyal/Self-Hosting-Guide#photos)
       * [Pastebins](#pastebins)
       * [Note-Taking](#Note-Taking)
       * [Time Monitoring](#time-monitoring)
       * [Wikis](#wikis)
       * [Gaming](https://github.com/mikeroyal/Self-Hosting-Guide#gaming)
       * [Foundations/Projects](https://github.com/mikeroyal/Self-Hosting-Guide#foundationsprojects)
    
    - [System Hardware](#System-Hardware)
    - [Operating Systems](#Operating-Systems)
    - [Storage](https://github.com/mikeroyal/Self-Hosting-Guide#storage)
    - [File systems](https://github.com/mikeroyal/Self-Hosting-Guide#file-systems)
    - [Books](https://github.com/mikeroyal/Self-Hosting-Guide#books)
    - [Podcasts](https://github.com/mikeroyal/Self-Hosting-Guide#podcasts)
    - [YouTube Channels](https://github.com/mikeroyal/Self-Hosting-Guide#youtube-channels)
    - [Tutorials & Resources](https://github.com/mikeroyal/Self-Hosting-Guide#tutorials--resources)
    - [Useful Subreddits to Follow](https://github.com/mikeroyal/Self-Hosting-Guide#subreddits)

2. [WireGuard](https://github.com/mikeroyal/Self-Hosting-Guide#wireguard)
     * [What is WireGuard?](#what-is-wireguard)
     * [What is Tailscale?](#what-is-tailscale)
     * [What is Netmaker?](#what-is-netmaker)
     * [WireGuard Tools](#wireguard-tools)
     * [Setting up WireGuard with PiVPN](#setting-up-wireguard-with-pivpn)
     * [Setting up WireGuard on Unraid](#setting-up-wireguard-on-unraid)
     * [Setting up WireGuard on pfSense](#setting-up-wireguard-on-pfsense)
     * [Setting up WireGuard on OpenWRT](#setting-up-wireguard-on-openwrt)
     * [Setting up WireGuard on Home Assistant](#setting-up-wireguard-on-home-assistant)

3. [Nextcloud](https://github.com/mikeroyal/Self-Hosting-Guide#nextcloud)

4. [Raspberry Pi](https://github.com/mikeroyal/Self-Hosting-Guide#raspberry-pi)
     
    * [Models of Raspberry Pi boards](#models-of-raspberry-pi-boards)

    * [Raspberry Pi Learning Resources](#raspberry-pi-learning-resources)

    * [Raspberry Pi Operating Systems](#raspberry-pi-operating-systems)

    * [Raspberry Pi Tools](#raspberry-pi-tools)
    
      - [Getting Started with Home Assistant(HA)](#Home-Assistant)
      - [Getting Started with Homebridge](#Homebridge)
      - [Getting Started with ESPHome](#ESPHome)
      - [Turning Raspberry Pi into a Router](#Turning-Raspberry-Pi-into-a-Router)
      - [Setting up Watchdog Time (WDT) on Raspberry Pi](#setting-watchdog-timer-wdt-on-raspberry-pi)

    * [Raspberry Pi Upgrades](#raspberry-pi-upgrades)
    

5. [Grafana](https://github.com/mikeroyal/Self-Hosting-Guide#Grafana)

6. [Networking](https://github.com/mikeroyal/Self-Hosting-Guide#networking)

7. [Docker](https://github.com/mikeroyal/Self-Hosting-Guide#docker)

8. [Kubernetes](https://github.com/mikeroyal/Self-Hosting-Guide#kubernetes)

9. [Ansible](https://github.com/mikeroyal/Self-Hosting-Guide#ansible)

10. [Databases](https://github.com/mikeroyal/Self-Hosting-Guide#databases)

11. [Telco 5G](https://github.com/mikeroyal/Self-Hosting-Guide#telco-5g)

12. [Open Source Security](https://github.com/mikeroyal/Self-Hosting-Guide#open-source-security)

13. [Differential Privacy](https://github.com/mikeroyal/Self-Hosting-Guide#differential-privacy)

14. [Machine Learning](https://github.com/mikeroyal/Self-Hosting-Guide#machine-learning)

15. [IoT Protocols](https://github.com/mikeroyal/Self-Hosting-Guide#iot-protocols)

16. [Operating systems (OS)](https://github.com/mikeroyal/Self-Hosting-Guide#operating-systems)

17. [Middleware](https://github.com/mikeroyal/Self-Hosting-Guide#middleware)

18. [Node Flow editors](https://github.com/mikeroyal/Self-Hosting-Guide#node-flow-editors)

19. [Toolkits](https://github.com/mikeroyal/Self-Hosting-Guide#toolkits)

20. [Data visualization](https://github.com/mikeroyal/Self-Hosting-Guide#data-visualization)
 
21. [Search](https://github.com/mikeroyal/Self-Hosting-Guide#search)

22. [Hardware](https://github.com/mikeroyal/Self-Hosting-Guide#hardware)

23. [In-memory data grids](https://github.com/mikeroyal/Self-Hosting-Guide#in-memory-data-grids)

24. [Home automation](https://github.com/mikeroyal/Self-Hosting-Guide#home-automation)

25. [Robotics](https://github.com/mikeroyal/Self-Hosting-Guide#robotics)

26. [Mesh networks](https://github.com/mikeroyal/Self-Hosting-Guide#mesh-networks)

27. [Blockchain Development](https://github.com/mikeroyal/Self-Hosting-Guide#blockchain-development)

28. [Node.js Development](https://github.com/mikeroyal/Self-Hosting-Guide#nodejs-development)

29. [C/C++ Development](https://github.com/mikeroyal/Self-Hosting-Guide#cc-development)

30. [Java Development](https://github.com/mikeroyal/Self-Hosting-Guide#java-development)

31. [Python Development](https://github.com/mikeroyal/Self-Hosting-Guide#python-development)

32. [Rust Development](https://github.com/mikeroyal/Self-Hosting-Guide#rust-development)

33. [Swift Development](https://github.com/mikeroyal/Self-Hosting-Guide#swift-development)

34. [XML Development](https://github.com/mikeroyal/Self-Hosting-Guide#xml-development)

# Getting Started with Self-Hosting
[Back to the Top](https://github.com/mikeroyal/Self-Hosting-Guide#table-of-contents)

[Self-Hosting](https://www.reddit.com/r/selfhosted/) is the practice of locally hosting(on premises & private web servers) and managing software applications by a person or organization instead of monthly subscriptions from [Software as a service (SaaS) providers](https://azure.microsoft.com/en-us/overview/what-is-saas/).  

Most self-hosted software can be installed using [Docker](https://en.wikipedia.org/wiki/Docker_(software)), a packaging system which allows software to bundle their configuration and dependencies and isolate them from your operating system.  Software using docker can be installed using the command line or via graphical interfaces such as [Portainer](https://github.com/portainer/portainer).  Software is installed with Docker by downloading an image file containing the application, then creating a copy that sets up its own dependencies and configuration within what is called a container.  Without containers you would often need to install different versions of the same programming languages or tools to satisfy the dependencies for the software you want to use which can get complicated.

 <p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/152699308-36691800-8078-4af3-9d5c-711da4e9b26e.png">
  <br />
</p>

## Tools for Self-Hosting
[Back to the Top](https://github.com/mikeroyal/Self-Hosting-Guide#table-of-contents)

### Containers

[Back to the Top](#table-of-contents)

**Container** is a standard unit of software that packages up code and all its dependencies(including CPU, memory, file storage, and network connections) so the application runs quickly and reliably from one computing environment to another. 

  * [Application Container Security Guide | NIST (PDF)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-190.pdf)

**Container Image** is a lightweight, standalone, executable package of software that includes everything needed to run an application such as the code, runtime, system tools, system libraries, and settings. 

**Best places to get Container Images:**

 * [DockerHub Container Images](https://hub.docker.com/search?image_filter=official&q=&type=image)
 * [LinuxServer.io Container Images](https://fleet.linuxserver.io/)
 * [Quay Container Images](https://quay.io/search)

[Docker Compose](https://github.com/docker/compose) is a tool that was developed to help define and share multi-container applications. With Compose, we can create a YAML file to define the services and with a single command, can spin everything up or tear it all down.

[Docker Include](https://docs.docker.com/compose/compose-file/14-include/) is a Compose application can declare dependency on another Compose application. This is useful if you want to reuse other Compose files. Also, if you need to factor out parts of your application model into separate Compose files so they can be managed separately or shared with others.

[Kompose](https://kompose.io/) is a conversion tool for Docker Compose to container orchestrators such as [Kubernetes](https://kubernetes.io/) or [OpenShift](https://openshift.com/). 

[SwarmKit](https://github.com/moby/swarmkit) is a toolkit for orchestrating distributed systems at any scale. It includes primitives for node discovery, raft-based consensus, task scheduling and more.

[Containerd](https://containerd.io/) is a daemon that manages the complete container lifecycle of its host system, from image transfer and storage to container execution and supervision to low-level storage to network attachments and beyond. It is available for Linux and Windows.

[ContainersSSH](https://containerssh.io/) is an SSH Server that Launches Containers in Kubernetes and Docker on demand.

[Podman](https://podman.io/) is a daemonless, open source, Linux native tool designed to make it easy to find, run, build, share and deploy applications using Open Containers Initiative (OCI) Containers and Container Images. Podman provides a command line interface (CLI) familiar to anyone who has used the Docker Container Engine.

[Lima](https://github.com/lima-vm/lima) is a tool that launches Linux virtual machines with automatic file sharing and port forwarding (similar to WSL2), and [containerd](https://containerd.io/). It's a great free and open-source alternative for [Docker Desktop](https://www.docker.com/products/docker-desktop).

[Colima](https://github.com/abiosoft/colima) is a container runtimes on macOS (and Linux) with minimal setup.

[Portainer Community Edition](https://github.com/portainer/portainer) is a lightweight service delivery platform for containerized applications that can be used to manage Docker, Swarm, Kubernetes and ACI environments. It is designed to be as simple to deploy as it is to use.

[Yacht](https://github.com/SelfhostedPro/Yacht) is a container management UI with a focus on templates and 1-click deployments.

[Kitematic](https://kitematic.com/) is a simple application for managing Docker containers on Mac, Linux and Windows letting you control your app containers from a graphical user interface (GUI).

[HashiCorp Nomad](https://www.nomadproject.io/) is a simple and flexible scheduler and orchestrator to deploy and manage containers and non-containerized applications across on-premises and clouds at scale.

[Open Container Initiative](https://opencontainers.org/about/overview/) is an open governance structure for the express purpose of creating open industry standards around container formats and runtimes.

[OpenNebula](https://opennebula.io/)  is an open source platform delivering a simple but feature-rich and flexible solution to build and manage enterprise clouds for virtualized services, containerized applications and serverless computing. 

[Buildah](https://buildah.io/) is a command line tool to build Open Container Initiative (OCI) images. It can be used with Docker, Podman, Kubernetes.

[Red Hat Universal Base Images (UBI)](https://developers.redhat.com/products/rhel/ubi) is a tool that offers a way to build your container images on a foundation of Red Hat Enterprise Linux software. They are OCI-compliant, container-based, operating system images with complementary runtime languages and packages that are freely redistributable. Easily find UBI images in the Red Hat container catalog, and they are buildable and deployable anywhere. 

[Red Hat Quay](https://quay.io/) is a project that Builds, Stores, and Distributes your Applications and Containers.

[ctop](https://ctop.sh/) is a tool that provides a concise and condensed overview of real-time metrics for multiple containers as well as a [single container view](https://github.com/bcicen/ctop/blob/master/_docs/single.md) for inspecting a specific container. It comes with built-in support for Docker and runC; connectors for other container and cluster systems are planned for future releases.

[runc](https://github.com/opencontainers/runc) is a CLI tool for spawning and running containers on Linux according to the OCI specification.

[container-images](https://github.com/opencontainers/container-images) is a collection of container images used in CI across various opencontainers projects.

[Clair](https://github.com/quay/clair) is an open source project for the static analysis of vulnerabilities in application containers (currently including [OCI](https://github.com/opencontainers/image-spec/blob/master/spec.md) and [Docker](https://github.com/docker/docker/blob/master/image/spec/v1.2.md)).

[Shipwright](https://github.com/SelfhostedPro/Shipwright) is a WebUI to generate templates for Yacht, Portainer, Docker-Compose, and Unraid. 

[Alnoda Workspaces](https://docs.alnoda.org/) is an open-source portable containerized browser-based development environments in Docker containers. You can create your own custom workspace or customize any of the workspaces with your preferred stack of applications without knowing much of the Docker.

[Autoheal](https://hub.docker.com/r/willfarrell/autoheal) monitors and restarts unhealthy docker containers. 

[Dozzle](https://hub.docker.com/r/amir20/dozzle) is a small lightweight application with a web based interface to monitor Docker logs. It doesn’t store any log files. It is for live monitoring of your container logs only. 

[Diun](https://crazymax.dev/diun/) is a tool that receive notifications when a Docker image is updated on a Docker registry. 

[WatchTower](https://hub.docker.com/r/containrrr/watchtower) is a process for automating Docker container base image updates.

[Kasm Workspaces](https://www.kasmweb.com/) is a a highly configurable container streaming platform that enables you to stream and deliver containerized applications over the web. It offers tools that you can use to create desktop workspaces and provide access to virtual desktops to end users. It also ensures data loss prevention as well as secure and private web browsing.

[Nginx Proxy](https://github.com/nginx-proxy/nginx-proxy) is an automation tool that sets up a container running nginx and [docker-gen](https://github.com/nginx-proxy/docker-gen). Docker-gen generates reverse proxy configs for nginx and reloads nginx when containers are started and stopped.

[Visual Studio Code Dev Containers](https://github.com/microsoft/vscode-dev-containers) is an extension that lets you use a [Docker container](https://docker.com/) as a full-featured development environment. It allows you to open any folder inside (or mounted into) a container and take advantage of Visual Studio Code's full feature set. A [devcontainer.json file](https://code.visualstudio.com/docs/devcontainers/containers#_create-a-devcontainerjson-file) in your project tells VS Code how to access (or create) a development container with a well-defined tool and runtime stack. 

### CI/CD

[Back to the Top](#table-of-contents)

 * **CI/CD: Continuous Integration and Continuous Delivery**

[Drone](https://drone.io/) is a Continuous Delivery system built on container technology. Drone uses a simple YAML configuration file, a superset of docker-compose, to define and execute Pipelines inside Docker containers.

[Woodpecker](https://woodpecker-ci.org/) is a CI service, a community fork of Drone.

[Travis CI](https://travis-ci.org/) is a hosted continuous integration service used to build and test software projects hosted at GitHub.

[Circle CI](https://circleci.com/) is a continuous integration and continuous delivery platform that helps software teams work smarter, faster.

[Buddy](https://buddy.works/) is a fully-featured DevOps platform with no learning curve that packs everything you need from a CI/CD tool. 

[Buildbot](https://www.buildbot.net/) is a continuous integration tool which automates the compile or test cycle required to validate changes to the project code base. It queues jobs, executes the jobs when the required resources are available, and reports the results.

### Development

[Back to the Top](#table-of-contents)

[Proxmox VE(Virtual Environment)](https://www.proxmox.com/en/proxmox-ve) is an open-source platform for enterprise virtualization. It has a built-in web interface that you can use to easily manage VMs and containers, software-defined storage and networking, high-availability clustering, and multiple out-of-the-box tools on a single solution.

[Terraform provider plugin for Proxmox](https://github.com/Telmate/terraform-provider-proxmox) is a  Terraform provider for the [Proxmox virtualization platform](https://pve.proxmox.com/pve-docs/) and exposes Terraform resources to provision QEMU VMs and LXC Containers.

[OTF](https://github.com/leg100/otf) is an open source alternative to Terraform Enterprise. Includes SSO, team management, agents, and as many applies as you can throw hardware at.

[Semaphore UI](https://github.com/ansible-semaphore/semaphore) is a modern UI for Ansible. It lets you easily run Ansible playbooks, get notifications about fails, control access to deployment system.

[APITable](https://apitable.com/) is an API-oriented low-code platform for building collaborative apps and better than all other Airtable open-source alternatives. 

[Chisel Kubernetes Operator](https://github.com/FyraLabs/chisel-operator/) is a Kubernetes operator for Chisel. It allows you to use Chisel as a LoadBalancer provider for your Kubernetes cluster, similar to [inlets-operator](https://github.com/inlets/inlets-operator).

[Docker-pgautoupgrade](https://github.com/pgautoupgrade/docker-pgautoupgrade) is a PostgreSQL Docker container that automatically upgrades your database. It's whole purpose in life is to automatically detect the version of PostgreSQL used in the existing PostgreSQL data directory, and automatically upgrade it (if needed) to the required version of PostgreSQL.

[IT-Tools](https://it-tools.tech/) is a collection of handy online tools for developers, with great UX. 

[Lazygit](https://github.com/jesseduffield/lazygit) is a simple terminal UI for git commands, written in Go with the [gocui](https://github.com/jroimartin/gocui) library.

[LazyDocker](https://github.com/jesseduffield/lazydocker) is a  simple terminal UI for both docker and docker-compose, written in Go with the [gocui](https://github.com/jroimartin/gocui) library.

[Code-Server](https://github.com/coder/code-server) is Visual Studio Code running on a remote server, accessible through the browser. 

[Turbopilot](https://github.com/ravenscroftj/turbopilot) is an open source large-language-model based code completion engine that runs locally on your CPU.

[Self-Hosted Sentry nightly](https://develop.sentry.dev/self-hosted/) is an official bootstrap for running your own Sentry with Docker. Sentry, feature-complete and packaged up for low-volume deployments and proofs-of-concept.

[Visual Studio Live Share](https://visualstudio.microsoft.com/services/live-share/) is a service/extension that enables you to collaboratively edit and debug with others in real time, regardless of the programming languages you're using or app types you're building. You can instantly and securely share your current project, start a joint debugging session, share terminal instances, forward localhost web apps, have voice calls, and more.

[GistPad](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs) is a Visual Studio Code extension that allows you to edit GitHub Gists and repositories from the comfort of your favorite editor. You can open, create, delete, fork and star gists and repositories, and then seamlessly begin editing files as if they were local, without ever cloning, pushing or pulling anything.

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is an extension for Visual Studio Code that launches a development local Server with live reload feature for static & dynamic pages.

[Gitea](https://gittea.dev/) is a community managed painless self-hosted Git service.

[Act](https://github.com/nektos/act) is a a tool to run your GitHub Actions locally.

[Act runner](https://gitea.com/gitea/act_runner) is a runner for Gitea based on [act](https://gitea.com/gitea/act).

[GitLab](https://about.gitlab.com/) is an open source end-to-end software development platform with built-in version control, issue tracking, code review, CI/CD, and more. Self-host GitLab on your own servers, in a container, or on a cloud provider. 

[Bonobo Git Server](https://bonobogitserver.com/) - Set up your own self hosted git server on IIS for Windows. Manage users and have full control over your repositories with a nice user friendly graphical interface. 

[Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Distributed version control system featuring wiki and bug tracker. 

[Gerrit](https://www.gerritcodereview.com/) - A code review and project management tool for Git based projects. 

[Gitblit](https://www.gitblit.com/) - Pure Java stack for managing, viewing, and serving Git repositories. 

[gitbucket](https://gitbucket.github.io/gitbucket-news/) - Easily installable GitHub clone powered by Scala.

[Gitea](https://gitea.io) - Community managed fork of Gogs, lightweight code hosting solution. 

[Gitlist](https://gitlist.org/) - Web-based git repository browser - GitList allows you to browse repositories using your favorite browser, viewing files under different revisions, commit history and diffs. 

[Gitolite](https://gitolite.com/gitolite/index.html) - Gitolite allows you to setup git hosting on a central server, with fine-grained access control and many more powerful features.

[GitPrep](https://github.com/yuki-kimoto/gitprep) - Portable Github clone. 

[Gogs](https://gogs.io/) - Painless self-hosted Git Service written in Go. 

[Kallithea](https://kallithea-scm.org/) - Source code management system that supports two leading version control systems, Mercurial and Git, with a web interface.

[Klaus](https://github.com/jonashaag/klaus) - Simple, easy-to-set-up Git web viewer that Just Works. 

[Lavagna](https://lavagna.io) - Lavagna is an open-source issue/project management tool designed for small teams. Lightweight, pure Java, easy to install, easy to use.

[Leantime](https://leantime.io) - Leantime is a lean project management system for small teams and startups helping to manage projects from ideation through delivery. 

[Taiga](https://taiga.io/) is an open-source project management software for cross-functional teams that work agile across both scrum and kanban frameworks.

[Planka](https://planka.app/) is a realtime kanban board for workgroups built with React and Redux. 

[Microgit](https://github.com/microgit-com/microgit) - Git hosting service made in Crystal and Lucky. `MIT` `Crystal`

[OneDev](https://onedev.io/) - All-In-One DevOps Platform. With Git Management, Issue Tracking, and CI/CD. Simple yet Powerful. 

[OpenProject](https://www.openproject.org) - OpenProject is a web-based project management system. 

[Pagure](https://pagure.io/pagure) - A lightweight, powerful, and flexible git-centric forge with features laying the foundation for federated and decentralized development. 

[Phorge](https://we.phorge.it/) - Phorge is an open source, community driven platform for collaborating, managing, organizing and reviewing software development projects. 

[Redmine](https://www.redmine.org/) - Redmine is a flexible project management web application. ([Demo](http://demo.redmine.org/), 

[RhodeCode](https://rhodecode.com/) - RhodeCode is an open source platform for software development teams. It unifies and simplifies repository management for Git, Subversion, and Mercurial. 

[SCM Manager](https://www.scm-manager.org/) - The easiest way to share and manage your Git, Mercurial and Subversion repositories over http. 

[Taiga](https://www.taiga.io/) - Agile Project Management Tool based on the Kanban and Scrum methods. 

[Titra](https://titra.io/) - Time-tracking solution for freelancers and small teams. 

[Traq](https://traq.io/) - Project management and issue tracking system written in PHP. 

[Tuleap](https://www.tuleap.org/) - Tuleap is a libre suite to plan, track, code and collaborate on software projects. 

[UVDesk](https://www.uvdesk.com/) - UVDesk community is a service oriented, event driven extensible opensource helpdesk system that can be used by your organization to provide efficient support to your clients effortlessly whichever way you imagine. 

[ZenTao](https://www.zentao.pm/) - An agile(scrum) project management system/tool. 

[k3s-ansible](https://github.com/techno-tim/k3s-ansible) is the easiest way to bootstrap a self-hosted High Availability Kubernetes cluster. A fully automated HA k3s etcd install with [kube-vip](https://kube-vip.chipzoller.dev/), [MetalLB](https://metallb.universe.tf/installation/), and more.

[Soft Serve](https://github.com/charmbracelet/soft-serve) is a tasty, self-hostable Git server for the command line.

[Coolify](https://coolify.io/) is an open-source & self-hostable Heroku/Netlify alternative. 

[Corosync Cluster Engine](https://corosync.github.io/corosync/) is a Group Communication System with additional features for implementing high availability within applications. 

[Glow](https://github.com/charmbracelet/glow) is a terminal based markdown reader designed from the ground up to bring out the beauty—and power—of the CLI.  It's used to discover markdown files, read documentation directly on the command line and stash markdown files to your own private collection, so you can read them anywhere. 

[Deep Lake](https://github.com/activeloopai/deeplake) is a data lake for deep learning applications. Our open-source dataset format is optimized for rapid streaming and querying of data while training models at scale, and it includes a simple API for creating, storing, and collaborating on AI datasets of any size. It can be deployed locally or in the cloud, and it enables you to store all of your data in one place, ranging from simple annotations to large videos.

[Node-Red](https://nodered.org/) is a low-code programming for event-driven applications.

[krunvm](https://github.com/containers/krunvm) is a CLI-based utility for creating microVMs from OCI images, using [libkrun](https://github.com/containers/libkrun) and [buildah](https://github.com/containers/buildah).

[Zeal](https://zealdocs.org/) is an offline documentation browser for software developers inspired by [Dash](https://kapeli.com/dash).

### Web servers

[Back to The Top](#table-of-contents)

**Web servers**

[Apache](https://httpd.apache.org/) - Most popular web server.

[OpenResty Manager](https://om.uusec.com/) - The easiest using, powerful and beautiful OpenResty Manager(Nginx Enhanced Version), open source alternative to OpenResty Edge.

[Beakon](https://github.com/RealDudePerson/beakon) - A self-host location sharing webserver. Beakon aims to leak as little data as possible and uses mostly self-contained libraries and local database files. Where possible, it will reference local files and not reach out over any network. 

[Caddy](https://caddyserver.com/) - The HTTP/2 Web Server with Fully Managed TLS.

[Cherokee](https://cherokee-project.com/) - Lightweight, high-performance web server/reverse proxy.

[Lighttpd](https://www.lighttpd.net/) - Web server more optimized for speed-critical environments.

[Nginx](https://nginx.org/) - Reverse proxy, load balancer, HTTP cache, and web server.

[uWSGI](https://github.com/unbit/uwsgi/) - The uWSGI project aims at developing a full stack for building hosting services.

**Web Performance**

[HAProxy](https://www.haproxy.org/) - Software based load Balancing, SSL offloading and performance optimization, compression, and general web routing.

[Squid](https://www.squid-cache.org/) - Caching proxy for the web supporting HTTP, HTTPS, FTP, and more.

[Traefik](https://traefik.io/) - Taefik is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease.

[Varnish](https://www.varnish-cache.org/) - HTTP based web application accelerator focusing on optimizing caching and compression.

### LLMs

[Back to the Top](#table-of-contents)

**Large Language Models (LLMs)** is a language model that uses artificial neural networks to generate text (AI chatbots/search engines). Some notable ones are GPT-3, GPT-4, BLOOM, and LLaMA.

 * [A comprehensive guide to running Llama 2 locally](https://replicate.com/blog/run-llama-locally)
 * [Leaderboard by lmsys.org](https://chat.lmsys.org/?leaderboard)
 * [LLM-Leaderboard](https://github.com/LudwigStumpp/llm-leaderboard)
 * [Open LLM Leaderboard by Hugging Face](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
 * [Holistic Evaluation of Language Models (HELM)](https://crfm.stanford.edu/helm/latest/?groups=1)

[llama.cpp](https://github.com/ggerganov/llama.cpp) is a Port of Facebook's LLaMA model in C/C++.

[ollama](https://ollama.ai/) is a tool to get up and running with Llama 2 and other large language models locally.

[LocalAI](https://localai.io/) is a self-hosted, community-driven, local OpenAI-compatible API. Drop-in replacement for OpenAI running LLMs on consumer-grade hardware with no GPU required. It's an API to run ggml compatible models: llama, gpt4all, rwkv, whisper, vicuna, koala, gpt4all-j, cerebras, falcon, dolly, starcoder, and many others.
 
[Serge](https://github.com/serge-chat/serge) is a web interface for chatting with Alpaca through llama.cpp. Fully self-hosted & dockerized, with an easy to use API. 

[OpenLLM](https://github.com/bentoml/OpenLLM) is an open platform for operating large language models (LLMs) in production. Fine-tune, serve, deploy, and monitor any LLMs with ease.

[Llama-gpt](https://github.com/getumbrel/llama-gpt) is a self-hosted, offline, ChatGPT-like chatbot. Powered by Llama 2. 100% private, with no data leaving your device. 

[Llama2 webui](https://github.com/liltom-eth/llama2-webui) is a tool to run any Llama 2 locally with gradio UI on GPU or CPU from anywhere (Linux/Windows/Mac). Use `llama2-wrapper` as your local llama2 backend for Generative Agents/Apps. 

[Llama2.c](https://github.com/karpathy/llama2.c) is a tool to Train the Llama 2 LLM architecture in PyTorch then inference it with one simple 700-line C file ([run.c](https://github.com/karpathy/llama2.c/blob/master/run.c)).

[Alpaca.cpp](https://github.com/antimatter15/alpaca.cpp) is a fast ChatGPT-like model locally on your device. It combines the [LLaMA foundation model](https://github.com/facebookresearch/llama) with an [open reproduction](https://github.com/tloen/alpaca-lora) of [Stanford Alpaca](https://github.com/tatsu-lab/stanford_alpaca) a fine-tuning of the base model to obey instructions (akin to the [RLHF](https://huggingface.co/blog/rlhf) used to train ChatGPT) and a set of modifications to [llama.cpp](https://github.com/ggerganov/llama.cpp) to add a chat interface.

[GPT4All](https://github.com/nomic-ai/gpt4all) is an ecosystem of open-source chatbots trained on a massive collections of clean assistant data including code, stories and dialogue based on [LLaMa](https://github.com/facebookresearch/llama).

[MiniGPT-4](https://minigpt-4.github.io/) is an enhancing Vision-language Understanding with Advanced Large Language Models

[LoLLMS WebUI](https://github.com/ParisNeo/lollms-webui) is a the hub for LLM (Large Language Model) models. It aims to provide a user-friendly interface to access and utilize various LLM models for a wide range of tasks. Whether you need help with writing, coding, organizing data, generating images, or seeking answers to your questions.

[LM Studio](https://lmstudio.ai/) is a tool to Discover, download, and run local LLMs.

[Ava PLS](https://lmstudio.ai/) small, all-in-one desktop app to run LLMs locally.

[Gradio Web UI](https://github.com/oobabooga/text-generation-webui) is a tool for Large Language Models. Supports transformers, GPTQ, llama.cpp (ggml/gguf), Llama models. 

[OpenPlayground](https://github.com/nat/openplayground) is a playfround for running ChatGPT-like models locally on your device.

[Vicuna](https://vicuna.lmsys.org/) is an open source chatbot trained by fine tuning LLaMA. It apparently achieves more than 90% quality of chatgpt and costs $300 to train.

[Yeagar ai](https://github.com/yeagerai/yeagerai-agent) is a Langchain Agent creator designed to help you build, prototype, and deploy AI-powered agents with ease.

[KoboldCpp](https://github.com/LostRuins/koboldcpp) is an easy-to-use AI text-generation software for GGML models. It's a single self contained distributable from Concedo, that builds off llama.cpp, and adds a versatile Kobold API endpoint, additional format support, backward compatibility, as well as a fancy UI with persistent stories, editing tools, save formats, memory, world info, author's note, characters, and scenarios.

[Minima](https://github.com/dmayboroda/minima) is a configurable conversational RAG system that runs LLM locally and on-premises using containers.

### ChatGPT 

[Back to the Top](#table-of-contents)

**Chatbot UI for ChatGPT**

[Chatbot UI by mckaywrigley](https://github.com/mckaywrigley/chatbot-ui) is an advanced chatbot kit for OpenAI's chat models built on top of Chatbot UI Lite using Next.js, TypeScript, and Tailwind CSS. This version of ChatBot UI supports both GPT-3.5 and GPT-4 models. Conversations are stored locally within your browser. You can export and import conversations to safeguard against data loss. See a [demo](https://twitter.com/mckaywrigley/status/1636103188733640704).

[Chatbot UI Lite by mckaywrigley](https://github.com/mckaywrigley/chatbot-ui-lite) is a simple chatbot starter kit for OpenAI's chat model using Next.js, TypeScript, and Tailwind CSS. See a [demo](https://twitter.com/mckaywrigley/status/1636103188733640704).

**Build locally with Docker:**

```shell
docker build -t chatgpt-ui .
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 chatgpt-ui
```

### Running Locally on Windows, MacOS, and Linux:

**1. Clone Project Repo**

```bash
git clone https://github.com/mckaywrigley/chatbot-ui.git
```

**2. Install Dependencies**

```bash
npm i
```

**3. Provide OpenAI API Key**

Create a .env.local file in the root of the repo with your **[OpenAI API Key](https://platform.openai.com/account/api-keys)**:

```bash
OPENAI_API_KEY=YOUR_KEY
```

* **You can set `OPENAI_API_HOST` where access to the official OpenAI host is restricted or unavailable, allowing users to configure an alternative host for their specific needs.**

* **Additionally, if you have multiple OpenAI Organizations, you can set `OPENAI_ORGANIZATION` to specify one.**

**4. Run App**

```bash
npm run dev
```

**You done you should be able to start chatting with ChatGPT!**

 <p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/230762358-a51124d1-9ee4-4d42-b83b-0dab95b7a93f.png">
  <br />
  Chatbot UI
</p>

[MiniGPT-4](https://minigpt-4.github.io/) is an enhancing Vision-language Understanding with Advanced Large Language Models

**Launching Demo Locally**

Try out the demo [demo.py](https://github.com/Vision-CAIR/MiniGPT-4/blob/main/demo.py) on your local machine by running

```python demo.py --cfg-path eval_configs/minigpt4_eval.yaml  --gpu-id 0```

Here, the demo loads Vicuna as 8 bit by default to save some GPU memory usage. Besides, the default beam search width is 1. Under this setting, the **demo cost about 23G GPU memory**. If you have a more powerful GPU with larger GPU memory, you can run the model in 16 bit by setting low_resource to False in the config file [minigpt4_eval.yaml](https://github.com/Vision-CAIR/MiniGPT-4/blob/main/eval_configs/minigpt4_eval.yaml) and use a larger beam search width.

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/233298431-db46ccd6-c0c8-48db-9d9f-c142776de51f.png">
  <br />
  MiniGPT-4 Demo
</p>

[GPT4All](https://github.com/nomic-ai/gpt4all) is an ecosystem of open-source chatbots trained on a massive collections of clean assistant data including code, stories and dialogue based on [LLaMa](https://github.com/facebookresearch/llama).

 <p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/232368422-447387b2-5d7b-4aec-872d-7b711a313b4f.gif">
</p>

[GPT4All UI](https://github.com/nomic-ai/gpt4all-ui) is a Flask web application that provides a chat UI for interacting with the GPT4All chatbot. 

 <p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/232368426-2b555ca6-e620-4d18-bfb8-fa71e4eed64e.png">
</p>

[Alpaca.cpp](https://github.com/antimatter15/alpaca.cpp) is a fast ChatGPT-like model locally on your device. It combines the [LLaMA foundation model](https://github.com/facebookresearch/llama) with an [open reproduction](https://github.com/tloen/alpaca-lora) of [Stanford Alpaca](https://github.com/tatsu-lab/stanford_alpaca) a fine-tuning of the base model to obey instructions (akin to the [RLHF](https://huggingface.co/blog/rlhf) used to train ChatGPT) and a set of modifications to [llama.cpp](https://github.com/ggerganov/llama.cpp) to add a chat interface.

[llama.cpp](https://github.com/ggerganov/llama.cpp) is a Port of Facebook's LLaMA model in C/C++.

[Serge](https://github.com/serge-chat/serge) is a web interface for chatting with Alpaca through llama.cpp. Fully self-hosted & dockerized, with an easy to use API. 

[OpenPlayground](https://github.com/nat/openplayground) is a playfround for running ChatGPT-like models locally on your device.

[Vicuna](https://vicuna.lmsys.org/) is an open source chatbot trained by fine tuning LLaMA. It apparently achieves more than 90% quality of chatgpt and costs $300 to train.

[Yeagar ai](https://github.com/yeagerai/yeagerai-agent) is a Langchain Agent creator designed to help you build, prototype, and deploy AI-powered agents with ease.

[LocalAI](https://localai.io/) is a self-hosted, community-driven, local OpenAI-compatible API. Drop-in replacement for OpenAI running LLMs on consumer-grade hardware with no GPU required. It's an API to run ggml compatible models: llama, gpt4all, rwkv, whisper, vicuna, koala, gpt4all-j, cerebras, falcon, dolly, starcoder, and many others.

[DoctorGPT](https://github.com/ingyamilmolinar/doctorgpt) is a lightweight self-contained binary that monitors your application logs for problems and diagnoses them.

[HttpGPT](https://github.com/lucoiso/UEHttpGPT/releases) is an Unreal Engine 5 plugin that facilitates integration with OpenAI's GPT based services (ChatGPT and DALL-E) through asynchronous REST requests, making it easy for developers to communicate with these services. It also includes Editor Tools to integrate Chat GPT and DALL-E image generation directly in the Engine.


### Automation

[Back to the Top](#table-of-contents)

[Accelerated Text](https://github.com/accelerated-text/accelerated-text) - Automatically generate multiple natural language descriptions of your data varying in wording and structure. 

[Activepieces](https://www.activepieces.com) - No-code business automation tool like Zapier or Tray. For example, you can send a Slack notification for each new Trello card. 

[ActiveWorkflow](https://github.com/automaticmode/active_workflow) - An intelligent process and workflow automation platform based on software agents. 

[Alltube](https://github.com/Rudloff/alltube) - Web GUI for youtube-dl, a program to download videos and audio from more than 100 websites.

[AmIUnique](https://amiunique.org/) - Learn how identifiable you are on the Internet (browser fingerprinting tool). 

[Automatisch](https://automatisch.io) - Business automation tool that lets you connect different services like Twitter, Slack, and more to automate your business processes (Open source Zapier alternative). 

[Baserow](https://baserow.io/) - Open source online database tool and Airtable alternative. Create your own database without technical experience. 

[betanin](https://github.com/sentriz/betanin) - Music organization man-in-the-middle of your torrent client and music player. Based on beets.io, similar to Sonarr and Radarr.

[ChiefOnboarding](https://chiefonboarding.com) - Employee onboarding platform that allows you to provision user accounts and create sequences with todo items, resources, text/email/Slack messages, and more! Available as a web portal and Slack bot. 

[Datasette](https://datasette.io/) - An open source multi-tool for exploring and publishing data, easy import and export and database management. 

[Eonza](https://www.eonza.org) - Eonza is used to create scripts and automate tasks on servers or VPS hosting. Manage your servers from any browser on any device. 

[Exadel CompreFace](https://exadel.com/solutions/compreface/) - Face recognition system that provides REST API for face recognition, face detection, and other face services, and is easily deployed with docker. There are SDKs for Python and JavaScript languages. Can be used without prior machine learning skills. 

[feed2toot](https://feed2toot.readthedocs.io/en/latest/) - Feed2toot parses a RSS feed, extracts the last entries and sends them to Mastodon.

[feedmixer](https://github.com/cristoper/feedmixer) - FeedMixer is a WSGI (Python3) micro web service which takes a list of feed URLs and returns a new feed consisting of the most recent n entries from each given feed(Returns Atom, RSS, or JSON).

[Headphones](https://github.com/rembo10/headphones) - Automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent, Deluge and Blackhole. 

[Healthchecks](https://healthchecks.io/) - Django app which listens for pings and sends alerts when pings are late. 

[HRConvert2](https://github.com/zelon88/HRConvert2) - Drag-and-drop file conversion server with session based authentication, automatic temporary file maintenance, and logging capability. 

[Huginn](https://github.com/huginn/huginn) - Allows you to build agents that monitor and act on your behalf. 

[Kibitzr](https://kibitzr.github.io) - Lightweight personal web assistant with powerful integrations. 

[Krayin](https://krayincrm.com/) - Free and Opensource Laravel CRM Application. 

[Leon](https://getleon.ai) - Open-source personal assistant who can live on your server. 

[Lidarr](https://lidarr.audio/) - Lidarr is a music collection manager for Usenet and BitTorrent users. 

[Matchering](https://github.com/sergree/matchering) - A containerized web app for automated music mastering. An open-source alternative to LANDR, eMastered, and MajorDecibel.

[Medusa](https://pymedusa.com/) - Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Source Code](https://github.com/pymedusa/Medusa)) `GPL-3.0` `Python`

[MeTube](https://github.com/alexta69/metube) - Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites. `AGPL-3.0` `Python/Nodejs/Docker`

[Nautobot](https://github.com/nautobot/nautobot) is a Network Source of Truth and Network Automation Platform built as a web application atop the Django Python framework with a PostgreSQL or MySQL database.

[nefarious](https://github.com/lardbit/nefarious) - Web application that automates downloading Movies and TV Shows. 

[NocoDB](https://www.nocodb.com/) - No-code platform that turns any database into a smart spreadsheet. It can be considered as an Airtable or Smartsheet alternative. 

[OliveTin](https://github.com/OliveTin/OliveTin) - OliveTin is a web interface for running Linux shell commands.

[Patrowl](https://github.com/Patrowl/PatrowlManager) - Open Source, Smart and Scalable Security Operations Orchestration Platform. 

[Podgrab](https://github.com/akhilrex/podgrab) - Lightweight podcast manager and automatic podcast episode downloader. It will monitor podcasts for your and download them automatically whenever a new episode goes live. 

[pyLoad](https://pyload.net/) - Lightweight, customizable and remotely manageable downloader for 1-click-hosting sites like rapidshare.com or uploaded.to. 

[Radarr](https://radarr.video/) - Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent, à la Couchpotato. 

[SickRage](https://www.sickrage.ca) - SickRage is an automatic Video Library Manager for TV Shows. Automatic torrent/nzb searching, downloading, and processing at the qualities you want. 

[SiteInspector](https://www.getsiteinspector.com/) - Web-based tool for catching spelling errors, grammatical errors, broken links, and other errors on websites. 

[Sonarr](https://sonarr.tv/) - Automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available. 

[StackStorm](https://stackstorm.com) - StackStorm (aka _IFTTT for Ops_) is event-driven automation for auto-remediation, security responses, troubleshooting, deployments, and more. Includes rules engine, workflow, 160 integration packs with 6000+ actions and ChatOps.

[µTask](https://github.com/ovh/utask) - Automation engine that models and executes business processes declared in yaml. 

### Configuration Management

[Back to The Top](#table-of-contents)

[Ansible](https://www.ansible.com/) -  is a tool  is a powerful, agentless tool that works everywhere and with everything. When you add in proven enterprise engineering and support from Red Hat that's written in Python.

[Ansible.Ai](https://ansible.ai/) is an AI for Ansible Content Development tool to automate in your IT infrastructure and it will generate syntactically correct playbook to help you get there.

[CFEngine](https://cfengine.com/) - is a Lightweight agent system where the configuration state is specified via a declarative language.

[mgmt](https://github.com/purpleidea/mgmt) - is a next generation config management written in Go.

[Pallet](https://palletops.com/) - is a Infrastructure definition, configuration and management via a Clojure DSL.

[Puppet](https://puppetlabs.com/) - is an automated administrative engine for your Linux, Unix, and Windows systems, performs administrative tasks (such as adding users, installing packages, and updating server configurations) based on a centralized specification.

[Chef](https://www.opscode.com/chef/) - is a powerful automation platform that transforms infrastructure into code automating how infrastructure is configured, deployed and managed across any environment.

[(R)?ex](https://www.rexify.org/) - is a friendly automation framework to any combinations of local and remote execution, push and pull style of management, or imperative and declarative approach. 

[Salt](https://www.saltstack.com/) -  is an event-driven automation tool and framework to deploy, configure, and manage complex IT systems. It automates common infrastructure administration tasks and ensure that all the components of your infrastructure are operating in a consistent desired state.

[Fleek](https://getfleek.dev/) is an all-in-one management system for everything you need to be productive on your computer. 

### Cloud Storage

[Back to The Top](#table-of-contents)

[Swift](https://docs.openstack.org/developer/swift/) - A highly available, distributed, eventually consistent object/blob store.

[Syncthing](https://syncthing.net/) - Open Source system for private, encrypted and authenticated distribution of data.

[git-annex assistant](https://git-annex.branchable.com/assistant/) - A synchronized folder on each of your MacOS and Linux computers, Android devices, removable drives, NAS appliances, and cloud services.

[NextCloud](https://nextcloud.com) - Provides access to your files via the web.

[ownCloud](https://owncloud.org) - Provides universal access to your files via the web, your computer or your mobile devices.

[Seafile](https://seafile.com) - Another Open Source Cloud Storage solution.

[SparkleShare](https://sparkleshare.org/) - Provides cloud storage and file synchronization services. By default, it uses Git as a storage backend.

### Cloud

[Back to the Top](#table-of-contents)

#### Linode

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/131386177-004d86df-a21b-4257-a502-0fe6c1e0ff4c.png">
  <br />

</p>

[Linode](https://www.linode.com/) is a cloud hosting company that provides virtual private servers and variety of other cloud services.

  * [Linode Documentation](https://www.linode.com/docs)

  * [Linode Guides & Tutorials ](https://www.linode.com/docs/guides/)

  * [Linode API Guides](https://developers.linode.com/guides/)
  
  * [Linode Marketplace](https://www.linode.com/marketplace/apps/)
  
  * [Self-Hosting the vaultwarden Password Manager](https://www.linode.com/docs/guides/how-to-self-host-the-vaultwarden-password-manager/)

  * [Linode Cloud Community](https://www.linode.com/community/)

  * [Linode Developer Portal](https://www.linode.com/developers/)

  * [Linode Content Resources](https://www.linode.com/content/)
 
**Linode Tools**

[Linode Cloud Manager](https://www.linode.com/products/cloud-manager/) is a user- and mobile-friendly interface to deploy and manage virtual machines, configure networking, and control user accounts.

[Linode API](https://developers.linode.com/api/v4/) is a tool that makes easy to configure, manage, and deploy user management, billing, support tickets, and more with programmatic access to Linode products and services.

[Linode CLI](https://www.linode.com/docs/cli/) is a tool to deploy and manage Linux servers from Linode without leaving the command line.

[Linode Images](https://www.linode.com/products/images/) is a service to capture, store, and deploy your custom images across Linodes or data centers. Easily create your own raw disk image and upload a compressed .gz image file (up to 5 GB) using the Cloud Manager or API to easily deploy to the Linode size and data center you need.

[Linode Integrations](https://www.linode.com/products/integrations/) is a collection of integrations lets you connect infrastructure and dev tools to the Linode platform. That let's you manage your Linode resources using the tools you know and love.

[StackScripts](https://www.linode.com/products/stackscripts/) is a tool to automatically configure new Linode instances using simple scripts. Create [your own StackScript](https://www.linode.com/docs/platform/stackscripts/) or browse the community StackScript library.

[Linode Bare Metal](https://www.linode.com/products/bare-metal/) is the single-tenant solution for applications and organizations with security, compliance, and performance needs. Bare Metal combines direct hardware access and the flexibility of a virtual machine.

#### Nextcloud

[Back to the Top](#table-of-contents)

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/150701955-f1f514a8-82e6-462f-9fc9-8926b6b7de3e.png">
  <br />
</p>

[Nextcloud](https://nextcloud.com) is an industry-leading, on-premises content collaboration platform for file sync & share and communication server. It is fully open source and you can host it yourself or pay a company to do it for you. Also checkout the following links below:

   - [Nextcloud App Store](https://apps.nextcloud.com)

   - [Nextcloud GitHub](https://github.com/nextcloud)

   - [Nextcloud Developer Program](https://nextcloud.com/developer)

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/150701961-ac8be115-34c1-4012-bd69-d1f22a10e48c.png">
  <br />
Nexcloud login screen
</p>

[Nextcloud Hub](https://nextcloud.com/hub/) is a tool that allows you to share and collaborate on documents, send and receive email, manage your calendar and have video chats without data leaks. As fully on-premises solution, Nextcloud Hub provides the benefits of online collaboration without the compliance and security risks.

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/150701964-df1dd8d9-1d3a-4376-81e8-f49439fb4356.png">
  <br />
Nexcloud Hub
</p>

[Nextcloud AIO (All In One)](https://github.com/nextcloud/all-in-one) is a tool that provides easy deployment and maintenance with most features included in this one Nextcloud instance. 

[Nextcloud Desktop Client](https://nextcloud.com/install/#install-clients) is a tool to synchronize files from Nextcloud Server with your computer.

[Nextcloud Deck](https://apps.nextcloud.com/apps/deck) is a kanban style organization tool aimed at personal planning and project organization for teams integrated with Nextcloud.

[Nextcloud Files](https://nextcloud.com/files/) is a tool tool that allows your employees have easy access to their files, photos and documents to work and can share and collaborate with team members, customers and partners. So IT knows nobody besides those they shared with has access to those files.

[Nextcloud Talk](https://nextcloud.com/talk/) is a tool that protects your communication better than other team collaboration platforms like Microsoft Teams or Slack, making sure your data stays on your servers. It also goes further than other encrypted communication technologies by keeping even metadata from leaking.

[Nextcloud Home](https://nextcloud.com/athome/) is a tool that allows you store your documents, calendar, contacts and photos on your server at home, at one of at one Nextcloud's providers or in a data center you trust.

[Nextcloud Enterprise](https://nextcloud.com/enterprise/) is a service that gives professional organizations software optimized and tested for mission critical environments.

[Nextcloud Outlook Integration](https://nextcloud.com/outlook/) is a tool that automatically upload files to replace large attachments or integrate Calendars and Contacts in Microsoft Outlook.

[Collabora Online in Nextcloud](https://nextcloud.com/collaboraonline/) is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major document, spreadsheet and presentation file formats and works in all modern browsers.

[ONLYOFFICE integration in Nextcloud](https://nextcloud.com/onlyoffice/) is a service that empowers your users to collaborate on office documents with team members in real time. It has compatibility with Microsoft Office formats means perfect documents, every time.

[Nextcloud VM(virtual machine appliance)](https://download.nextcloudvm.com/) is a set of carefully crafted family of [*nix](https://bit.ly/2UaCC7b) scripts, which interactively guide you through a quality-controlled installation of a Nextcloud instance for Home/SME Server and scripts for Raspberry Pi 4. It is Community developed and maintained.

[LibreSign](https://libresign.github.io/) is a Libre digital signature app for Nextcloud. 

#### DigitalOcean

[Back to the Top](#table-of-contents)

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/117214946-5bbf9c00-adb2-11eb-96cc-fef7d13d4d06.png">
  <br />
</p>

[DigitalOcean](https://www.digitalocean.com/) is a cloud infrastructure provider that provides developers cloud services that help to deploy and scale applications that run simultaneously on multiple computers with data centers worldwide. 

  * [DigitalOcean Pricing](https://www.digitalocean.com/pricing/)

  * [DigitalOcean GitHub](https://github.com/digitalocean)

  * [DigitalOcean Tutorials](https://www.digitalocean.com/community/tutorials)
  
**DigitalOcean Tools**

[DigitalOcean API](https://developers.digitalocean.com/documentation/v2/) is a service that manages your DigitalOcean infrastructure with our RESTful API.

[DigitalOcean Client libraries](https://developers.digitalocean.com/libraries/) is a collection of libraries lets you use the DigitalOcean API in a variety of programming languages.

[DigitalOcean CLI](https://github.com/digitalocean/doctl) is a service that manages your DigitalOcean infrastructure through your terminal with our open source Command Line Interface (CLI).

[Terraform provider](https://www.terraform.io/docs/providers/do/index.html) is a service that allows the user treat their DigitalOcean infrastructure like code with [Terraform](https://www.terraform.io/).

[DigitalOcean Custom images](https://www.digitalocean.com/docs/images/custom-images/) is a service that quickly builds your environment in the cloud by provisioning servers with your own custom image, or choose from various Linux distributions.

[Container Registry](https://www.digitalocean.com/products/container-registry/) is a service that easily stores, manages, and protects private container images.

### Back4app Web Deployment

[Back4app Web Deployment](https://www.back4app.com/web-deployment-platform) is a Container as a Service (CaaS) provider platform that allows the dev teams to build and deploy containerized applications with no downtime. You can simply connect it to a GitHub repository and publish the code within seconds. 

  * [Back4app Web Deployment Platform Pricing](https://www.back4app.com/pricing/container-as-a-service)

  * [Back4app GitHub](https://github.com/back4app)

  * [Back4app Tutorials](https://www.back4app.com/tutorials)

### MinIO Object Storage

[Back to the Top](#table-of-contents)

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/219937490-da874c4e-cf91-4f2e-b009-77b7929383ba.png">

</p>

[MinIO](https://min.io/download) is a High Performance Object Storage released under GNU Affero General Public License v3.0. It is API compatible with [Amazon S3 cloud storage service](https://aws.amazon.com/s3/). Use MinIO to build high performance infrastructure for machine learning, analytics and application data workloads. It's one of the fastest object storage platforms globally, with a read/write speed of **183GB/s-171GB/s** if you use standard hardware. It can function as the main storage tier for many workloads like **Spark, TensorFlow, Presto, Hadoop HDFS, and H2O.**

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/219937492-d47107b5-d2c3-4746-a133-cbdac97fa379.png">
</br>
MinIO UI
</p>

**Run the following command to run the latest stable image of MinIO as a container using an ephemeral data volume:**

## Podman

```
podman run -p 9000:9000 -p 9001:9001 \
  quay.io/minio/minio server /data --console-address ":9001"
```

## Docker

```
#docker run -p 9000:9000 --name minio -d minio/minio server /export
```
**If you're using an SSD mounted at /mnt/sdd, then we can run the following to use it instead:**

```
# docker run -v /mnt/ssd:/export -p 9000:9000 --name minio -d minio/minio server /export
```

## MacOS

```
brew install minio/stable/minio
minio server /data
```

## Binary Download for MacOS

```
wget https://dl.min.io/server/minio/release/darwin-amd64/minio
chmod +x minio
./minio server /data
```

## Linux

```
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
./minio server /data
```

|Architecture |	URL|
|--- | --- | 
|64-bit Intel/AMD |https://dl.min.io/server/minio/release/linux-amd64/minio|
|64-bit ARM |https://dl.min.io/server/minio/release/linux-arm64/minio|
|64-bit PowerPC LE (ppc64le) |https://dl.min.io/server/minio/release/linux-ppc64le/minio|
|IBM Z-Series (S390X) |	https://dl.min.io/server/minio/release/linux-s390x/minio|

## Windows

To run MinIO on 64-bit Windows hosts, download the MinIO executable from the following URL:

```https://dl.min.io/server/minio/release/windows-amd64/minio.exe```

Use the following command to run a standalone MinIO server on the Windows host. Replace D:\ with the path to the drive or directory in which you want MinIO to store data. You must change the terminal or powershell directory to the location of the minio.exe executable, or add the path to that directory to the system $PATH:

```minio.exe server D:\```

## Install from Source

Use the following commands to compile and run a standalone MinIO server from source. Source installation is only intended for developers and advanced users. If you do not have a working Golang environment, please follow [How to install Golang](https://golang.org/doc/install). The minimum version required is [go1.19](https://golang.org/dl/#stable).

```go install github.com/minio/minio@latest```

**After you install MinIO:**

The MinIO deployment starts using default root credentials ```minioadmin:minioadmin```. You can test the deployment using the MinIO Console, an embedded web-based object browser built into MinIO Server. Point a web browser running on the host machine to ```http://127.0.0.1:9000``` and log in with the root credentials. You can use the Browser to create buckets, upload objects, and browse the contents of the MinIO server.


When you run Minio you will be issued a key and a secret. These are used by the client or the web front-end to connect securely. I found my codes by typing in ```docker logs minio```.

```
Created minio configuration file at /root/.minio

Endpoint:  http://172.17.0.2:9000  http://127.0.0.1:9000
AccessKey: accessCode
SecretKey: secretCode
Region:    us-west-1
SQS ARNs:  <none>

Browser Access:
   http://172.17.0.2:9000  http://127.0.0.1:9000

Command-line Access: https://docs.minio.io/docs/minio-client-quickstart-guide
   $ mc config host add myminio http://172.17.0.2:9000 accessCode secretCode

Object API (Amazon S3 compatible):
   Go:         https://docs.minio.io/docs/golang-client-quickstart-guide
   Java:       https://docs.minio.io/docs/java-client-quickstart-guide
   Python:     https://docs.minio.io/docs/python-client-quickstart-guide
   JavaScript: https://docs.minio.io/docs/javascript-client-quickstart-guide

Drive Capacity: 50 GiB Free, 70 GiB Total
```

If you'd like to learn more then most of the Minio client commands support a help flag or give info on the command line:

```
NAME:
  mc - Minio Client for cloud storage and filesystems.

USAGE:
  mc [FLAGS] COMMAND [COMMAND FLAGS | -h] [ARGUMENTS...]

COMMANDS:
  ls       List files and folders.
  mb       Make a bucket or a folder.
  cat      Display file and object contents.
  pipe     Redirect STDIN to an object or file or STDOUT.
  share    Generate URL for sharing.
  cp       Copy files and objects.
  mirror   Mirror buckets and folders.
  diff     Show differences between two folders or buckets.
  rm       Remove files and objects.
  events   Manage object notifications.
  watch    Watch for files and objects events.
  policy   Manage anonymous access to objects.
  session  Manage saved sessions for cp and mirror commands.
  config   Manage mc configuration file.
  update   Check for new mc update.
  version  Print version info.
  help, h  Shows a list of commands or help for one command
```

### Advanced options

You can have your client point to multiple Minio servers, which is really neat especially if you're working on a distributed team.

Minio's test-server called "play" is already configured in the default client, you can see all the servers you have configured with mc config host list.

**To upload the photo to Minio's "play" S3 server just type in:**

```# mc mb play/somebucketname```

```# mc cp ~/Downloads/IMG_2016120-25.jpg play/somebucketname```

**Recursive uploads:**

**If you want to test something larger out you could try uploading your entire Downloads photo, and then you should use the --recursive flag to make sure nothing's missed:**

```# mc cp --recursive ~/Downloads/IMG_2016120-25.jpg myminio/photos```

### Databases

[Back to the Top](#table-of-contents)

#### SQL 

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/169607509-ba5e092f-c566-4014-86a1-258bf75266d0.png">
  <br />
</p>

**[SQL](https://en.wikipedia.org/wiki/SQL)** is a standard language for storing, manipulating and retrieving data in relational databases.

[Coolify](https://coolify.io/) is an open-source & self-hostable Heroku/Netlify alternative. 

[MySQL](https://www.mysql.com/) is a fully managed database service to deploy cloud-native applications using the world's most popular open source database. 

[PostgreSQL](https://www.postgresql.org/) is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

[PostgREST](https://github.com/PostgREST/postgrest) is a tool that serves a fully RESTful API from any existing PostgreSQL database. It provides a cleaner, more standards-compliant, faster API than you are likely to write from scratch.

[NocoDB](https://www.nocodb.com/) is an open source #NoCode platform that turns any database into a smart spreadsheet. It turns any MySQL, PostgreSQL, SQL Server, SQLite & MariaDB into a smart-spreadsheet. 

[DBeaver](https://dbeaver.io/) is a free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases. Supports all popular databases: MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix, Presto, etc.

[OmniDB](https://github.com/OmniDB/OmniDB) is a web-based tool for database management.

[Navicat](https://www.navicat.com/) is a series of graphical database management and development software produced by CyberTech Ltd. for MySQL, MariaDB, MongoDB, Oracle, SQLite, PostgreSQL and Microsoft SQL Server. 

[HeidiSQL](https://www.heidisql.com/) is free software, and has the aim to be easy to learn. It lets you see and edit data and structures from computers running one of the database systems MariaDB, MySQL, Microsoft SQL, PostgreSQL and SQLite. 
 
[Beekeeper Studio](https://www.beekeeperstudio.io/) is a cross-platform SQL editor and database manager(MySQL, Postgres, SQLite, SQL Server, and more.) available for Linux, Mac, and Windows. 
 
[UI Bakery](https://uibakery.io/) is a web-based low-code internal tool builder. It can visualize the data pulled from PostgreSQL, MongoDB, MySQL, MicrosoftSQL, Redis.

[IBM DB2](https://www.ibm.com/analytics/db2) is a collection of hybrid data management products offering a complete suite of AI-empowered capabilities designed to help you manage both structured and unstructured data on premises as well as in private and public cloud environments. Db2 is built on an intelligent common SQL engine designed for scalability and flexibility.

[OracleDB](https://www.oracle.com/database/) is a powerful fully managed database helps developers manage business-critical data with the highest availability, reliability, and security.

[MariaDB](https://mariadb.com/) is an enterprise open source database solution for modern, mission-critical applications.

[EventQL](https://eventql.io/documentation/) is a distributed, analytical database. It allows you to store massive amounts of structured data and explore it using SQL and other programmatic query facilities.

[CockroachDB](https://www.cockroachlabs.com/docs/stable/) is the SQL database for building global, scalable cloud services that survive disasters. 

[SQLite](https://sqlite.org/index.html) is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.

[SQLite Database Browser](https://sqlitebrowser.org/) is an open source SQL tool that allows users to create, design and edits SQLite database files. It lets users show a log of all the SQL commands that have been issued by them and by the application itself. 

[TimescaleDB](https://github.com/timescale/timescaledb) is an open-source database designed to make SQL scalable for time-series data. It is engineered up from PostgreSQL and packaged as a PostgreSQL extension, providing automatic partitioning across time and space (partitioning key), as well as full SQL support.

[InfluxDB](https://www.influxdata.com/) is an open source time series platform.  This includes APIs for storing and querying data, processing it in the background for [ETL](https://docs.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl) or monitoring and alerting purposes, user dashboards, Internet of Things sensor data, and visualizing and exploring the data and more. It also has support for processing data from [Graphite](http://graphiteapp.org/).

[Atlas](https://github.com/Netflix/atlas) is an in-memory dimensional [time series database](https://en.wikipedia.org/wiki/Time_series_database).

[dbWatch](https://www.dbwatch.com/) is a complete database monitoring/management solution for SQL Server, Oracle, PostgreSQL, Sybase, MySQL and Azure. Designed for proactive management and automation of routine maintenance in large scale on-premise, hybrid/cloud database environments.

[Adminer](https://www.adminer.org/) is an SQL management client tool for managing databases, tables, relations, indexes, users. Adminer has support for all the popular database management systems such as MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Firebird, SimpleDB, Elasticsearch and MongoDB.

[Knex](https://github.com/knex/knex) is a query builder for PostgreSQL, MySQL, CockroachDB, SQL Server, SQLite3 and Oracle, designed to be flexible, portable, and fun to use. 

[rqlite](https://github.com/rqlite/rqlite) is an easy-to-use, lightweight, distributed relational database, which uses [SQLite](https://www.sqlite.org/) as its storage engine.

[osquery](https://github.com/osquery/osquery) is a SQL powered operating system instrumentation, monitoring, and analytics framework. 

[SQLModel](https://github.com/tiangolo/sqlmodel) is a library for interacting with SQL databases from Python code, with Python objects. It is designed to be intuitive, easy to use, highly compatible, and robust.

[Citus](https://github.com/citusdata/citus) is a [PostgreSQL extension](https://www.citusdata.com/blog/2017/10/25/what-it-means-to-be-a-postgresql-extension/) that transforms Postgres into a distributed database—so you can achieve high performance at any scale.

[DbVisualizer](https://dbvis.com/) is a SQL management tool that allows users to manage a wide range of databases such as Oracle, Sybase, SQL Server, MySQL, H3, and SQLite.

[AppDynamics Database](https://www.appdynamics.com/supported-technologies/database) is a management product for Microsoft SQL Server. With AppDynamics you can monitor and trend key performance metrics such as resource consumption, database objects, schema statistics and more, allowing you to proactively tune and fix issues in a High-Volume Production Environment.

[Toad](https://www.quest.com/toad/) is a SQL Server DBMS toolset developed by Quest. It increases productivity by using extensive automation, intuitive workflows, and built-in expertise. This SQL management tool resolve issues, manage change and promote the highest levels of code quality for both relational and non-relational databases.

[Lepide SQL Server](https://www.lepide.com/sql-storage-manager/) is an open source storage manager utility to analyse the performance of SQL Servers. It provides a complete overview of all configuration and permission changes being made to your SQL Server environment through an easy-to-use, graphical user interface.

[Sequel Pro](https://sequelpro.com/) is a fast MacOS database management tool for working with MySQL. This SQL management tool helpful for interacting with your database by easily to adding new databases, new tables, and new rows.

[ElasticSearch](https://www.elastic.co/) is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. Elasticsearch is developed in Java.

[Logstash](https://www.elastic.co/products/logstash) is a tool for managing events and logs. When used generically, the term encompasses a larger system of log collection, processing, storage and searching activities.

[Kibana](https://www.elastic.co/products/kibana) is an open source data visualization plugin for Elasticsearch. It provides visualization capabilities on top of the content indexed on an Elasticsearch cluster. Users can create bar, line and scatter plots, or pie charts and maps on top of large volumes of data.

[Trino](https://trino.io/) is a Distributed SQL query engine for big data. It is able to tremendously speed up [ETL processes](https://docs.microsoft.com/en-us/azure/architecture/data-guide/relational-data/etl), allow them all to use standard SQL statement, and work with numerous data sources and targets all in the same system.

[Tableau](https://www.tableau.com/) is a Data Visualization software used in relational databases, cloud databases, and spreadsheets. Tableau was acquired by [Salesforce in August 2019](https://investor.salesforce.com/press-releases/press-release-details/2019/Salesforce-Completes-Acquisition-of-Tableau/default.aspx).

[DataGrip](https://www.jetbrains.com/datagrip/) is a professional DataBase IDE developed by Jet Brains that provides context-sensitive code completion, helping you to write SQL code faster. Completion is aware of the tables structure, foreign keys, and even database objects created in code you're editing.

[RStudio](https://rstudio.com/) is an integrated development environment for R and Python, with a console, syntax-highlighting editor that supports direct code execution, and tools for plotting, history, debugging and workspace management.

#### NoSQL 

[Back to the Top](#table-of-contents)

<p align="center">
 <img src="https://user-images.githubusercontent.com/45159366/169607515-65629e5a-83e1-4578-9eb5-afe915f0fad9.png">
  <br />
</p>

**[NoSQL](https://www.ibm.com/cloud/blog/sql-vs-nosql)** is a database that is interchangeably referred to as "nonrelational, or "non-SQL" to highlight that the database can handle huge volumes of rapidly changing, unstructured data in different ways than a relational (SQL-based) database with rows and tables.

[Scylla](https://github.com/scylladb/scylla) is the real-time big data database that is API-compatible with Apache Cassandra and Amazon DynamoDB. 

[Apache Cassandra™](https://cassandra.apache.org/) is an open source NoSQL distributed database trusted by thousands of companies for scalability and high availability without compromising performance. Cassandra provides linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure make it the perfect platform for mission-critical data.

[Apache HBase™](https://hbase.apache.org/) is an open-source, NoSQL, distributed big data store. It enables random, strictly consistent, real-time access to petabytes of data. HBase is very effective for handling large, sparse datasets. HBase serves as a direct input and output to the Apache MapReduce framework for Hadoop, and works with Apache Phoenix to enable SQL-like queries over HBase tables.

[Hadoop Distributed File System (HDFS)](https://www.ibm.com/analytics/hadoop/hdfs) is a distributed file system that handles large data sets running on commodity hardware. It is used to scale a single Apache Hadoop cluster to hundreds (and even thousands) of nodes. HDFS is one of the major components of Apache Hadoop, the others being [MapReduce](https://www.ibm.com/analytics/hadoop/mapreduce) and [YARN](https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html).

[Redis(REmote DIctionary Server)](https://redis.io/) is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker. It provides data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.

[FoundationDB](https://www.foundationdb.org/) is an open source distributed database designed to handle large volumes of structured data across clusters of commodity servers. It organizes data as an ordered key-value store and employs ACID transactions for all operations. It is especially well-suited for read/write workloads but also has excellent performance for write-intensive workloads. FoundationDB was acquired by [Apple in 2015](https://techcrunch.com/2015/03/24/apple-acquires-durable-database-company-foundationdb/).

[CouchbaseDB](https://www.couchbase.com/) is an open source distributed [multi-model NoSQL document-oriented database](https://en.wikipedia.org/wiki/Multi-model_database). It creates a key-value store with managed cache for sub-millisecond data operations, with purpose-built indexers for efficient queries and a powerful query engine for executing SQL queries.

[MongoDB](https://www.mongodb.com/) is a document database meaning it stores data in JSON-like documents. 

[NoSQLBooster](https://www.nosqlbooster.com/) is a cross-platform IDE for [MongoDB v2.6-5.0](https://www.mongodb.com/download-center/community/releases), which provides a build-in MongoDB script debugger, SQL query, server monitoring tools, chaining fluent query, query code generator, task scheduling, ES2020 support, and advanced IntelliSense experience.

[ClickHouse®](https://github.com/ClickHouse/ClickHouse) is an open-source column-oriented database management system that allows generating analytical data reports in real-time.

[Neo4j](https://neo4j.com/) is a graph database management system that provides an array of tools, libraries, and frameworks to make development faster and easier. 

### Remote Access

[Back to the Top](#table-of-contents)

[FreeRDP](https://github.com/FreeRDP/FreeRDP) is a free remote desktop protocol library and clients.

[Rustdesk](https://rustdesk.com/) is an open source virtual/remote desktop infrastructure for everyone. Display and control your PC (Windows, macOS, and Linux) and Android devices.

[TinyPilot](https://tinypilotkvm.com/) is a tool that enables KVM over IP letting you control any computer remotely.

[X2Go](https://wiki.x2go.org/) is open source remote desktop software for Linux that uses a modified NX 3 protocol. It gives remote access to a Linux system's GUI.

[Apache Guacamole](https://guacamole.apache.org/) is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH.

[Remmina](https://remmina.org/) is a Remote access screen and file sharing to your desktop. It has Remote Access Protocol Plugins for [RDP](https://remmina.org/remmina-rdp/), [SSH](https://remmina.org/remmina-ssh/), [SPICE](https://remmina.org/remmina-spice/), [VNC](https://remmina.org/remmina-vnc/), [X2Go](https://remmina.org/remmina-x2go/), [HTTP/HTTPS](https://remmina.org/remmina-www/).

[Remotely](https://github.com/immense/Remotely) is a  remote control and remote scripting solution, built with .NET 6, Blazor, SignalR Core, and WebRTC. 

[P2P Remote Desktop](https://github.com/miroslavpejic85/p2p) is a portable, no configuration or installation needed remote desktop tool.

[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide) is a tunneling daemon that proxies traffic from the Cloudflare network to your origins. This daemon sits between Cloudflare network and your origin (a webserver). This attracts client requests and sends them to you via this daemon, without requiring you to poke holes on your firewall and your origin(webserver) can remain as closed as possible. 

[WireGuard®](https://www.wireguard.com/) is a straight-forward, fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec while avoiding the massive headache. WireGuard is designed as a general-purpose VPN for running on embedded interfaces and super computers alike, fit for many circumstances. It's cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.

[NetBird](https://netbird.io/) is an open-source VPN management platform built on top of WireGuard® making it easy to create secure private networks for your organization or home.

[Tailscale](https://github.com/tailscale) is a WireGuard-based app that makes secure, private networks easy for teams of any scale. It works like an overlay network between the computers of your networks using all kinds of NAT traversal sorcery.

[Headscale](https://github.com/juanfont/headscale) is an open source, self-hosted implementation of the Tailscale coordination server.

[MeshCentral](https://meshcentral.com/) is a full computer management web site. It can run your own web server to remotely manage and control computers on a local network or anywhere on the internet. Once you get the server started, create device group and download and install an agent on each computer you want to manage. 

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) is a free remote desktop application that use can use on your iPhone, iPad, Mac, Windows and Linux computers from anywhere in the world.

[TightVNC](https://www.tightvnc.com/) is a free remote desktop application. It can see the desktop of a remote machine and control it with your local mouse and keyboard, just like you would do it sitting in the front of that computer.

[KRDC](https://apps.kde.org/krdc/) is a client application that allows you to view or even control the desktop session on another machine that is running a compatible server. VNC and RDP is supported.

[Krfb Desktop Sharing](https://apps.kde.org/krfb/) is a server application that allows you to share your current session with a user on another machine, who can use a VNC client to view or even control the desktop.

[wayvnc](https://github.com/any1/wayvnc) is a VNC server for wlroots-based Wayland compositors (no_entry Gnome, KDE and Weston are not supported). It attaches to a running Wayland session, creates virtual input devices, and exposes a single display via the RFB protocol. 

[Waypipe](https://gitlab.freedesktop.org/mstoeckl/waypipe/) is a proxy for Wayland clients. It forwards Wayland messages and serializes changes to shared memory buffers over a single socket. 

### Virtualization

[Back to the Top](#table-of-contents)

[HVM (Hardware Virtual Machine)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html) is a virtualization type that provides the ability to run an operating system directly on top of a virtual machine without any modification, as if it were run on the bare-metal hardware.

[PV(ParaVirtualization)](https://wiki.xenproject.org/wiki/Paravirtualization_(PV)) is an efficient and lightweight virtualization technique introduced by the Xen Project team, later adopted by other virtualization solutions. PV does not require virtualization extensions from the host CPU and thus enables virtualization on hardware architectures that do not support Hardware-assisted virtualization.

[Network functions virtualization (NFV)](https://www.vmware.com/topics/glossary/content/network-functions-virtualization-nfv) is the replacement of network appliance hardware with virtual machines. The virtual machines use a hypervisor to run networking software and processes such as routing and load balancing. NFV allows for the separation of communication services from dedicated hardware, such as routers and firewalls. This separation means network operations can provide new services dynamically and without installing new hardware. Deploying network components with network functions virtualization only takes hours compared to months like with traditional networking solutions.

[Software Defined Networking (SDN)](https://www.vmware.com/topics/glossary/content/software-defined-networking) is an approach to networking that uses software-based controllers or application programming interfaces (APIs) to communicate with underlying hardware infrastructure and direct traffic on a network. This model differs from that of traditional networks, which use dedicated hardware devices (routers and switches) to control network traffic.

[Virtualized Infrastructure Manager (VIM)](https://www.cisco.com/c/en/us/td/docs/net_mgmt/network_function_virtualization_Infrastructure/3_2_2/install_guide/Cisco_VIM_Install_Guide_3_2_2/Cisco_VIM_Install_Guide_3_2_2_chapter_00.html) is a service delivery and reduce costs with high performance lifecycle management Manage the full lifecycle of the software and hardware comprising your NFV infrastructure (NFVI), and maintaining a live inventory and allocation plan of both physical and virtual resources.

[Management and Orchestration(MANO)](https://www.etsi.org/technologies/open-source-mano) is an ETSI-hosted initiative to develop an Open Source NFV Management and Orchestration (MANO) software stack aligned with ETSI NFV. Two of the key components of the ETSI NFV architectural framework are the NFV Orchestrator and VNF Manager, known as NFV MANO.

[Magma](https://www.magmacore.org/) is an open source software platform that gives network operators an open, flexible and extendable mobile core network solution. Their mission is to connect the world to a faster network by enabling service providers to build cost-effective and extensible carrier-grade networks. Magma is 3GPP generation (2G, 3G, 4G or upcoming 5G networks) and access network agnostic (cellular or WiFi). It can flexibly support a radio access network with minimal development and deployment effort.

[OpenRAN](https://open-ran.org/) is an intelligent Radio Access Network(RAN) integrated on general purpose platforms with open interface between software defined functions. Open RANecosystem enables enormous flexibility and interoperability with a complete openess to multi-vendor deployments.

[Open vSwitch(OVS)](https://www.openvswitch.org/)is an open source production quality, multilayer virtual switch licensed under the open source Apache 2.0 license. It is designed to enable massive network automation through programmatic extension, while still supporting standard management interfaces and protocols (NetFlow, sFlow, IPFIX, RSPAN, CLI, LACP, 802.1ag).

[Edge](https://www.ibm.com/cloud/what-is-edge-computing) is a distributed computing framework that brings enterprise applications closer to data sources such as IoT devices or local edge servers. This proximity to data at its source can deliver strong business benefits, including faster insights, improved response times and better bandwidth availability.

[Multi-access edge computing (MEC)](https://www.etsi.org/technologies/multi-access-edge-computing) is an Industry Specification Group (ISG) within ETSI to create a standardized, open environment which will allow the efficient and seamless integration of applications from vendors, service providers, and third-parties across multi-vendor Multi-access Edge Computing platforms.

[Virtualized network functions(VNFs)](https://www.juniper.net/documentation/en_US/cso4.1/topics/concept/nsd-vnf-overview.html) is a software application used in a Network Functions Virtualization (NFV) implementation that has well defined interfaces, and provides one or more component networking functions in a defined way. For example, a security VNF provides Network Address Translation (NAT) and firewall component functions.

[Cloud-Native Network Functions(CNF)](https://www.cncf.io/announcements/2020/11/18/cloud-native-network-functions-conformance-launched-by-cncf/) is a network function designed and implemented to run inside containers. CNFs inherit all the cloud native architectural and operational principles including Kubernetes(K8s) lifecycle management, agility, resilience, and observability.

[Physical Network Function(PNF)](https://www.mpirical.com/glossary/pnf-physical-network-function) is a physical network node which has not undergone virtualization. Both PNFs and VNFs (Virtualized Network Functions) can be used to form an overall Network Service.

[Network functions virtualization infrastructure(NFVI)](https://docs.vmware.com/en/VMware-vCloud-NFV/2.0/vmware-vcloud-nfv-reference-architecture-20/GUID-FBEA6C6B-54D8-4A37-87B1-D825F9E0DBC7.html) is the foundation of the overall NFV architecture. It provides the physical compute, storage, and networking hardware that hosts the VNFs. Each NFVI block can be thought of as an NFVI node and many nodes can be deployed and controlled geographically.

[Virtualization-based Security (VBS)](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-vbs) is a hardware virtualization feature to create and isolate a secure region of memory from the normal operating system.

[Hypervisor-Enforced Code Integrity (HVCI)](https://docs.microsoft.com/en-us/windows-hardware/drivers/bringup/device-guard-and-credential-guard) is a mechanism whereby a hypervisor, such as Hyper-V, uses hardware virtualization to protect kernel-mode processes against the injection and execution of malicious or unverified code. Code integrity validation is performed in a secure environment that is resistant to attack from malicious software, and page permissions for kernel mode are set and maintained by the hypervisor.

[NVIDIA virtual GPU (vGPU)](https://www.nvidia.com/en-us/data-center/virtual-solutions/) is a software enables powerful GPU performance for workloads ranging from graphics-rich virtual workstations to data science and AI, enabling IT to leverage the management and security benefits of virtualization as well as the performance of NVIDIA GPUs required for modern workloads.

[AMD MxGPU](https://www.amd.com/en/graphics/workstation-virtual-graphics) is a hardware-based virtualized GPU solution, is built on industry standard SR-IOV (Single-Root I/O Virtualization) technology and allows multiple virtualized users per physical GPU to work remotely.

[Proxmox Virtual Environment(VE)](https://www.proxmox.com/en/) is a complete open-source platform for enterprise virtualization. It inlcudes a built-in web interface that you can easily manage VMs and containers, software-defined storage and networking, high-availability clustering, and multiple out-of-the-box tools on a single solution.

[KVM (for Kernel-based Virtual Machine)](https://www.linux-kvm.org/page/Main_Page) is a full virtualization solution for Linux on x86 hardware containing virtualization extensions (Intel VT or AMD-V). It consists of a loadable kernel module, kvm.ko, that provides the core virtualization infrastructure and a processor specific module, kvm-intel.ko or kvm-amd.ko.

[QEMU](https://www.qemu.org) is a fast processor emulator using a portable dynamic translator. QEMU emulates a full system, including a processor and various peripherals. It can be used to launch a different Operating System without rebooting the PC or to debug system code.

[Quickemu](https://github.com/wimpysworld/quickemu) is a program that quickly create and run optimised Windows, macOS and Linux desktop virtual machines.

[Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/) enables running virtualized computer systems on top of a physical host. These virtualized systems can be used and managed just as if they were physical computer systems, however they exist in virtualized and isolated environment. Special software called a hypervisor manages access between the virtual systems and the physical hardware resources. Virtualization enables quick deployment of computer systems, a way to quickly restore systems to a previously known good state, and the ability to migrate systems between physical hosts.

[Cloud Hypervisor](https://github.com/cloud-hypervisor/cloud-hypervisor) is an open source Virtual Machine Monitor (VMM) that runs on top of [KVM](https://www.kernel.org/doc/Documentation/virtual/kvm/api.txt). The project focuses on exclusively running modern, cloud workloads, on top of a limited set of hardware architectures and platforms. Cloud workloads refers to those that are usually run by customers inside a cloud provider. Cloud Hypervisor is implemented in [Rust](https://www.rust-lang.org/) and is based on the [rust-vmm](https://github.com/rust-vmm) crates.

[VirtManager](https://github.com/virt-manager/virt-manager) is a graphical tool for managing virtual machines via libvirt. Most usage is with QEMU/KVM virtual machines, but Xen and libvirt LXC containers are well supported. Common operations for any libvirt driver should work.

[oVirt](https://www.ovirt.org) is an open-source distributed virtualization solution, designed to manage your entire enterprise infrastructure. oVirt uses the trusted KVM hypervisor and is built upon several other community projects, including libvirt, Gluster, PatternFly, and Ansible. Founded by Red Hat as a community project on which Red Hat Enterprise Virtualization is based allowing for centralized management of virtual machines, compute, storage and networking resources, from an easy-to-use web-based front-end with platform independent access.

[Firecracker](http://firecracker-microvm.io/) is an open source virtualization technology that is purpose-built for creating and managing secure, multi-tenant container and function-based services that provide serverless operational models. It runs workloads in lightweight virtual machines, called microVMs, which combine the security and isolation properties provided by hardware virtualization technology with the speed and flexibility of containers.

[Foreman](https://theforeman.org/) is a free open source project that gives you the power to easily automate repetitive tasks, quickly deploy applications, and proactively manage your servers life cycle, on-premises or in the cloud.

[Harvester](https://harvesterhci.io/) is an open source hyper-converged infrastructure (HCI) software built on Kubernetes.

[Anthos](https://cloud.google.com/anthos/docs/concepts/overview) is a modern application management platform that provides a consistent development and operations experience for cloud and on-premises environments.

[OpenNebula](https://opennebula.io/)  is an open source platform delivering a simple but feature-rich and flexible solution to build and manage enterprise clouds for virtualized services, containerized applications and serverless computing. 

[HyperKit](https://github.com/moby/hyperkit) is a toolkit for embedding hypervisor capabilities in your application. It includes a complete hypervisor, based on [xhyve](https://github.com/mist64/xhyve)/[bhyve](https://bhyve.org/), which is optimized for lightweight virtual machines and container deployment. It is designed to be interfaced with higher-level components such as the [VPNKit](https://github.com/moby/vpnkit) and [DataKit](https://github.com/moby/datakit). HyperKit currently only supports macOS using the [Hypervisor.framework](https://developer.apple.com/library/mac/documentation/DriversKernelHardware/Reference/Hypervisor/index.html) making it a core component of Docker Desktop for Mac.

[Intel® Graphics Virtualization Technology (Intel® GVT)](https://github.com/intel/gvt-linux) is a full GPU virtualization solution with mediated pass-through, starting from 4th generation Intel Core (TM) processors with Intel processor graphics(Broadwell and newer). It can be used to virtualize the GPU for multiple guest virtual machines, effectively providing near-native graphics performance in the virtual machine and still letting your host use the virtualized GPU normally.

[Apple Hypervisor](https://developer.apple.com/documentation/hypervisor) is a frameowrk that builds virtualization solutions on top of a lightweight hypervisor, without third-party kernel extensions. Hypervisor provides C APIs so you can interact with virtualization technologies in user space, without writing kernel extensions (KEXTs). As a result, the apps you create using this framework are suitable for distribution on the [Mac App Store](https://www.appstore.com/).

[Apple Virtualization Framework](https://developer.apple.com/documentation/virtualization) is a framework that provides high-level APIs for creating and managing virtual machines on Apple silicon and Intel-based Mac computers. This framework is used to boot and run a Linux-based operating system in a custom environment that you define. It also supports the [Virtio specification](https://www.redhat.com/en/virtio-networking-series), which defines standard interfaces for many device types, including network, socket, serial port, storage, entropy, and memory-balloon devices.

[Apple Paravirtualized Graphics Framework](https://developer.apple.com/documentation/paravirtualizedgraphics) is a framework that implements hardware-accelerated graphics for macOS running in a virtual machine, hereafter known as the guest. The operating system provides a graphics driver that runs inside the guest, communicating with the framework in the host operating system to take advantage of Metal-accelerated graphics.

[Cilicon](https://github.com/traderepublic/Cilicon) is a macOS App that leverages Apple's Virtualization Framework to create, provision and run ephemeral virtual machines with minimal setup or maintenance effort. You should be able to get up and running with your self-hosted CI in less than an hour.

[Xen](https://github.com/xen-project/xen) is focused on advancing virtualization in a number of different commercial and open source applications, including server virtualization, Infrastructure as a Services (IaaS), desktop virtualization, security applications, embedded and hardware appliances, and automotive/aviation.

[Ganeti](https://github.com/ganeti/ganeti) is a virtual machine cluster management tool built on top of existing virtualization technologies such as Xen or KVM and other open source software. Once installed, the tool assumes management of the virtual instances (Xen DomU).

[Packer](https://www.packer.io/) is an open source tool for creating identical machine images for multiple platforms from a single source configuration. Packer is lightweight, runs on every major operating system, and is highly performant, creating machine images for multiple platforms in parallel. Packer does not replace configuration management like Chef or Puppet. In fact, when building images, Packer is able to use tools like Chef or Puppet to install software onto the image.

[Vagrant](https://www.vagrantup.com/) is a tool for building and managing virtual machine environments in a single workflow. With an easy-to-use workflow and focus on automation, Vagrant lowers development environment setup time, increases production parity, and makes the "works on my machine" excuse a relic of the past. It provides easy to configure, reproducible, and portable work environments built on top of industry-standard technology and controlled by a single consistent workflow to help maximize the productivity and flexibility of you and your team.

### Password Management

[Back to the Top](#table-of-contents)

[Bitwarden](https://bitwarden.com/host/) is a free and open-source password management service that stores sensitive information such as website credentials in an encrypted vault. 

[Bitwarden Server](https://github.com/bitwarden/server) is a project contains the APIs, database, and other core infrastructure items needed for the "backend" of all bitwarden client applications. Checkout [Bitwarden's self-hosted release repository](https://github.com/bitwarden/self-host).

[Vaultwarden](https://github.com/dani-garcia/vaultwarden) is an unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs.

[Passbolt](https://www.passbolt.com/) is an open-source/self-hosted password manager for teams. It allows you to securely share and store credentials. For instance, the wifi password of your office, the administrator password of a router or your organization's social media account passwords, all of them can be secured using passbolt. 

[KeePassXC](https://keepassxc.org/) is a modern, secure, and open-source password manager that stores and manages your most sensitive information. You can run KeePassXC on Windows, macOS, and Linux systems. It saves many different types of information, such as usernames, passwords, URLs, attachments, and notes in an offline, encrypted file that can be stored in any location, including private and public cloud solutions.

[AuthPass.app](https://authpass.app/) is an Open-Source Password Manager for mobile and desktop that is Keepass 2.x (kdbx 3.x) compatible.

[pass](https://www.passwordstore.org/) is an open-source unix-based password utilitiy with various [gui clients](https://www.passwordstore.org/#other)

### SSH

[Back to The Top](#table-of-contents)

 * **Secure Shell Protocol (SSH)** is a cryptographic network protocol for operating network services securely over an unsecured network.

[Advanced SSH config](https://pypi.python.org/pypi/advanced-ssh-config/) is a tool that enhances ssh_config file capabilities, completely transparent.

[AutoSSH](https://www.harding.motd.ca/autossh/) is a tool that automatically respawn ssh session after network interruption.

[ContainersSSH](https://containerssh.io/) is an SSH Server that Launches Containers in Kubernetes and Docker on demand.

[Cluster SSH](https://sourceforge.net/projects/clusterssh/) is a tool that controls a number of xterm windows via a single graphical console.

[DSH](https://www.netfort.gr.jp/~dancer/software/dsh.html.en)  is a Dancer's shell / distributed shell - Wrapper for executing multiple remote shell commands from one command line.

[Flightplan](https://github.com/pstadler/flightplan) is a node.js library for streamlining application deployment or systems administration tasks (local and remote hosts).

[Mosh](https://mosh.org/) is a command-line program, like SSH. You can use it inside xterm, gnome-terminal, urxvt, Terminal.app, iTerm, emacs, screen, or tmux.

[Parallel SSH](https://parallel-ssh.org/) is an asynchronous parallel SSH library designed for large scale automation. It differentiates ifself from alternatives, other libraries and higher level frameworks like Ansible or Chef.

[SSH Audit](https://github.com/jtesta/ssh-audit) is a tool for SSH server & client configuration auditing (banner, key exchange, encryption, mac, compression, compatibility, security, etc).

[Sshwifty](https://sshwifty-demo.nirui.org/) is a SSH and Telnet connector made for the Web. It can be deployed on your computer or server to provide SSH and Telnet access interface for any compatible (standard) web browser.

[SSHrc](https://github.com/Russell91/sshrc) is a tool that sources ~/.sshrc on your local computer after logging in remotely.

[StormSSH](https://stormssh.readthedocs.org) is a command line tool to manage SSH connections.

[Tailscale SSH](https://tailscale.com/kb/1193/tailscale-ssh/) is a service that allows Tailscale to manage the authentication and authorization of SSH connections on your tailnet.


### VPN

[Back to The Top](#table-of-contents)

 * **VPN (Virtual Private Network)** is a service that encrypts your internet traffic on unsecured networks to protect your online identity, hide your IP address, and shield your online data from third parties. 

[Wireguard](https://www.wireguard.com/) - New minimal VPN Solution that is very fast.

[OpenVPN](https://community.openvpn.net) - Uses a custom security protocol that utilizes SSL/TLS for key exchange.

[Pritunl](https://pritunl.com/) - OpenVPN based solution that's easy to set up.

[SoftEther](https://www.softether.org/) - Multi-protocol software VPN with advanced features.

[sshuttle](https://github.com/apenwarr/sshuttle) - Poor man's VPN.

[strongSwan](https://www.strongswan.org/) - Complete IPsec implementation for Linux.

[tinc](https://www.tinc-vpn.org/) - Distributed p2p VPN.

### LDAP

[Back to The Top](#table-of-contents)

**LDAP Servers**

[389 Directory Server](https://port389.org) - Developed by Red Hat.

[Apache Directory Server](https://directory.apache.org/) - Apache Software Foundation project written in Java.

[Fusion Directory](https://www.fusiondirectory.org) - Improve the Management of the services and the company directory based on OpenLDAP.
[OpenDJ](https://opendj.forgerock.org/) - Fork of OpenDS.

[OpenDS](https://opends.java.net/) - Another directory server written in Java.

[OpenLDAP](https://openldap.org/) - Developed by the OpenLDAP Project.

**LDAP management**

[Apache Directory Studio](https://directory.apache.org/studio/) - The Eclipse-based LDAP browser and directory client

### Log Management

[Back to The Top](#table-of-contents)

[Echofish](https://echothrust.github.io/echofish/) - A web based real-time event log aggregation, analysis, monitoring and management system.

[Fluentd](https://www.fluentd.org/) - Log Collector and Shipper.

[Flume](https://flume.apache.org/) - Distributed log collection and aggregation system.

[Graylog2](https://graylog2.org/) - Pluggable Log and Event Analysis Server with Alerting options.

[Heka](https://hekad.readthedocs.org/en/latest/) - Stream processing system which may be used for log aggregation.

[Elasticsearch](https://www.elasticsearch.org/) - A Lucene Based Document store mainly used for log indexing, storage and analysis.

[Kibana](https://www.elasticsearch.org/overview/kibana/) - Visualize logs and time-stamped data.

[Logstash](https://logstash.net/) - Tool for managing events and logs.

[Octopussy](https://www.octopussy.pm) - Log Management Solution (Visualize/Alert/Report).

### DNS

[Back to The Top](#table-of-contents)

[Duckdns](https://duckdns.org/) - A free service which will point a DNS (sub domains of duckdns.org) to an IP of your choice. The service is completely free, and doesn't require reactivation or forum posts to maintain its existence.

[dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) - A lightweight service providing DNS, DHCP and TFTP services to small-scale networks.

[MagicDNS](https://tailscale.com/kb/1081/magicdns/) is a tool that automatically registers DNS names for devices in your network.

[Bind](https://www.isc.org/downloads/bind/) - The most widely used name server software.

[djbdns](http://cr.yp.to/djbdns.html) - A collection of DNS applications, including tinydns.

[Designate](https://wiki.openstack.org/wiki/Designate) - DNS REST API that support several DNS servers as its backend.

[Knot](https://www.knot-dns.cz/) - High performance authoritative-only DNS server.

[Lexicon](https://github.com/AnalogJ/lexicon) is a tool that provides a way to manipulate DNS records on multiple DNS providers in a standardized way.

[NSD](http://www.nlnetlabs.nl/projects/nsd/) - Authoritative only, high performance, simple name server.

[PowerDNS](https://www.powerdns.com/) - DNS server with a variety of data storage back-ends and load balancing features.

[CoreDNS](https://coredns.io/) is a DNS server/forwarder, written in Go, that chains [plugins](https://coredns.io/plugins). Each plugin performs a (DNS) function.

[Unbound](http://unbound.net/) - Validating, recursive, and caching DNS resolver.

[Yadifa](http://yadifa.eu/) - Lightweight authoritative Name Server with DNSSEC capabilities powering the .eu top-level domain.

### Network Tools

[Back to the Top](#table-of-contents)

[MQTT](https://mqtt.org/) is an [OASIS standard](https://www.oasis-open.org/standards/) messaging protocol for the Internet of Things (IoT). It is designed as an extremely lightweight publish/subscribe messaging transport that is ideal for connecting remote devices with a small code footprint and minimal network bandwidth.

[Mongoose](https://github.com/cesanta/mongoose) is a networking library for C/C++. It implements event-driven non-blocking APIs for TCP, UDP, HTTP, WebSocket, MQTT. It is designed for connecting devices and bringing them online.

[Nautobot](https://github.com/nautobot/nautobot) is a Network Source of Truth and Network Automation Platform built as a web application atop the Django Python framework with a PostgreSQL or MySQL database.

[Eclipse Mosquitto](https://github.com/eclipse/mosquitto) is an open source implementation of a server for version 5.0, 3.1.1, and 3.1 of the [MQTT](https://mqtt.org/) protocol. 

[Ejabberd](https://ejabberd.im/) is an open-source, robust, scalable and extensible realtime platform built using [Erlang/OTP](https://www.erlang.org/), that includes [XMPP](https://xmpp.org/) Server, [MQTT](https://mqtt.org/) Broker and [SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) Service.

[Nebula](https://github.com/slackhq/nebula) is a scalable overlay networking tool with a focus on performance, simplicity and security. It lets you seamlessly connect computers anywhere in the world. Nebula is portable, and runs on Linux, OSX, Windows, iOS, and Android. It can be used to connect a small number of computers, but is also able to connect tens of thousands of computers.

[LibreSpeed](https://librespeed.org/) is a network speed test tool that can be run on your LAN or hosted in the cloud.

[SmokePing](https://oss.oetiker.ch/smokeping/) is a deluxe latency measurement tool. It can measure, store and display latency, latency distribution and packet loss. It uses RRDtool to maintain a longterm data-store and to draw pretty graphs, giving up to the minute information on the state of each network connection.

[Tailnet](https://tailscale.com/kb/1136/tailnet/) is your private network. When you log in for the first time to Tailscale on your phone, laptop, desktop, or cloud VM, a tailnet is created. For personal users, you are a tailnet of many devices and one person. Each device gets a private Tailscale IP address in the [CGNAT](https://tailscale.com/kb/1015/100.x-addresses/) range and every device can talk directly to every other device, wherever they are on the internet.

[Tailscale SSH](https://tailscale.com/kb/1193/tailscale-ssh/) is a service that allows Tailscale to manage the authentication and authorization of SSH connections on your tailnet.

[Tailscale Funnel](https://tailscale.com/kb/1223/tailscale-funnel/) is a feature that allows you to route traffic from the wider internet to one or more of your Tailscale nodes. You can think of this as publicly sharing a node for anyone to access, even if they don’t have Tailscale themselves.

[Cockpit](https://cockpit-project.org/) is a web-based graphical interface for servers, intended for everyone. It uses [your system’s normal user logins and privileges](https://cockpit-project.org/guide/latest/privileges). Network-wide logins are also supported through [single-sign-on](https://cockpit-project.org/guide/latest/sso) and other [authentication](https://cockpit-project.org/guide/latest/authentication) techniques.

[NetBox](https://docs.netbox.dev/) is a leading solution for modeling and documenting modern networks. It combines the traditional disciplines of IP address management (IPAM) and datacenter infrastructure management (DCIM) with powerful APIs and extensions, NetBox provides the ideal "source of truth" to power network automation.

[Network UPS Tools (NUT)](https://networkupstools.org/) is a project that provides support for Power Devices, such as Uninterruptible Power Supplies, Power Distribution Units, Automatic Transfer Switches, Power Supply Units and Solar Controllers. NUT provides a common protocol and set of tools to monitor and manage such devices, and to consistently name equivalent features and data points, across a vast range of vendor-specific protocols and connection media types.

[Dnsmasq](https://dnsmasq.org/) is a tool that provides network infrastructure for small networks: DNS, DHCP, router advertisement and network boot. It is designed to be lightweight and have a small footprint, suitable for resource constrained routers and firewalls. It has also been widely used for tethering on smartphones and portable hotspots, and to support virtual networking in virtualisation frameworks. Supported platforms include Linux (with glibc and uclibc), Android, BSD, and MacOS. 

[Nginx proxy manager (NPM)](https://nginxproxymanager.com/) is a reverse proxy management system running on Docker. It's easy to set up and does not require users to know how to work with Nginx servers or SSL certificates.

[Netdata](https://github.com/netdata/netdata) is high-fidelity infrastructure monitoring and troubleshooting, real-time monitoring Agent collects thousands of metrics from systems, hardware, containers, and applications with zero configuration. It runs permanently on all your physical/virtual servers, containers, cloud deployments, and edge/IoT devices, and is perfectly safe to install on your systems mid-incident without any preparation.

[Pi-hole](https://pi-hole.net/) is a [DNS sinkhole](https://en.wikipedia.org/wiki/DNS_Sinkhole) that protects your devices from unwanted content, without installing any client-side software, intended for use on a private network. It is designed for use on embedded devices with network capability, such as the Raspberry Pi, but it can be used on other machines running Linux and cloud implementations.

[OWASP Amass](https://owasp.org/www-project-amass/) is a tool that performs network mapping of attack surfaces and external asset discovery using open source information gathering and active reconnaissance techniques.

[Smap](https://github.com/s0md3v/Smap) is a port scanner built with shodan.io's free API. It takes same command line arguments as Nmap and produces the same output which makes it a drop-in replacament for Nmap.

[ORY Oathkeeper](https://github.com/ory/oathkeeper) is an Identity & Access Proxy (IAP) and Access Control Decision API that authorizes HTTP requests based on sets of Access Rules.

[Ory Kratos](https://github.com/ory/kratos) is a developer-friendly, security-hardened and battle-test Identity, User Management and Authentication system for the Cloud. The Kratos identity server (similiar to Auth0, Okta, Firebase) with Ory-hardened authentication, MFA, FIDO2, TOTP, WebAuthn, profile management, identity schemas, social sign in, registration, account recovery, passwordless. 

[Ory Hydra](https://github.com/ory/hydra) is a hardened, OpenID Certified OAuth 2.0 Server and OpenID Connect Provider optimized for low-latency, high throughput, and low resource consumption. Ory Hydra is not an identity provider (user sign up, user login, password reset flow), but connects to your existing identity provider through a [login and consent app](https://www.ory.sh/docs/hydra/oauth2#authenticating-users-and-requesting-consent).

[Ory Keto](https://github.com/ory/keto) is an Open Source (Go) implementation of [Zanzibar: Google's Consistent, Global Authorization System](https://research.google/pubs/pub48190/). It ships gRPC, REST APIs, newSQL, and an easy and granular permission language. Supports ACL, RBAC, and other access models. 

[AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) is a DNS relay station with ad/tracker/other blocking, IP address redirections, and DNS-over-HTTPS.

[NetBird](https://netbird.io/) is an open-source VPN management platform built on top of WireGuard® making it easy to create secure private networks for your organization or home.

[Supabase](https://github.com/supabase/supabase) is an open source Firebase alternative. It is building the features of Firebase using enterprise-grade open source tools.

[Plik](https://github.com/root-gg/plik) is a scalable & friendly temporary file upload system (Wetransfer like) in golang.

[Restify](https://github.com/restify/node-restify) is a framework, utilizing [connect](https://github.com/senchalabs/connect) style middleware for building REST APIs. 

[Traefik](https://traefik.io/traefik/) is an open source Edge Router that makes publishing your services a fun and easy experience. It receives requests on behalf of your system and finds out which components are responsible for handling them. What sets Traefik apart, besides its many features, is that it automatically discovers the right configuration for your services.

[Traefik Mesh](https://traefik.io/traefik-mesh) is a simple, yet full-featured service mesh. It is container-native and fits as your de-facto service mesh in your Kubernetes cluster. It supports the latest Service Mesh Interface specification [SMI](https://smi-spec.io/) that facilitates integration with pre-existing solution. 

[DuckDNS](https://www.duckdns.org/) is a free service that allows you to bind your own favorite subdomain under ```duckdns.org``` to the public IP address in use from your router, even though such address is dynamically allocated by your internet service provider and therefore changes over time.

[Trust-DNS](https://github.com/bluejekyll/trust-dns) is a Rust based DNS client, server, and Resolver, built to be safe and secure from the ground up.

[Hugo](https://github.com/gohugoio/hugo) is a static HTML and CSS website generator written in Go. It is optimized for speed, ease of use, and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.

[sshuttle](https://github.com/sshuttle/sshuttle) is a transparent proxy server that works as a poor man's VPN that forwards connection over ssh. It works with Linux and MacOS and supports DNS tunneling. 

[NetHopper](https://www.nethopper.io/) is a Multi-Cloud Application Network as a Service. The easiest way to visualize, connect, secure, protect, and monitor microservices across any cluster, site, cloud, or network.

[Cypress](https://cypress.io/) is a tool that makes it fast, easy and reliable testing for anything that runs in a browser. 

[Kimchi](https://github.com/kimchi-project/kimchi) is an HTML5 based management tool for KVM. It is designed to make it as easy as possible to get started with KVM and create your first guest.

[ION](https://github.com/pion/ion) is a distributed real-time communication system, the goal is to chat anydevice, anytime, anywhere.

[FreeRDP](https://github.com/FreeRDP/FreeRDP) is a free remote desktop protocol library and clients.

[Pimox](https://github.com/pimox/pimox7) is a port of Proxmox to the Raspberry Pi allowing you to build a Proxmox cluster of Rapberry Pi's or even a hybrid cluster of Pis and x86 hardware.

[PiKVM](https://github.com/pikvm/pikvm) is a very simple and fully functional Raspberry Pi-based KVM over IP.

[Firezone](https://firezone.dev/) is a self-hosted WireGuard®-based VPN server and Linux firewall.

[Monoid](https://github.com/monoid-privacy/monoid) is an open-source suite of tools for automating data privacy.

[Pinecone](https://matrix-org.github.io/pinecone/) is an experimental overlay routing protocol suite which is the foundation of the current P2P Matrix demos. It is designed to provide end-to-end encrypted connectivity between devices at a global scale over any compatible medium (currently TCP, WebSockets, Bluetooth Low Energy etc), allowing multi-hop peer-to-peer connectivity between devices even in places where there is no Internet connectivity. 

### Service Discovery

[Back to The Top](#table-of-contents)

[Consul](http://www.consul.io/)  is a tool for service discovery, monitoring and configuration. [Install Consul on Self-Hosted Kubernetes Clusters](https://github.com/hashicorp/consul/blob/main/website/content/docs/k8s/platforms/self-hosted-kubernetes.mdx).

[Linkerd](https://linkerd.io/) is an ultralight, security-first service mesh for Kubernetes. Linkerd adds critical security, observability, and reliability features to your Kubernetes stack with no code change required.

[Doozerd](https://github.com/ha/doozerd) is a highly-available, completely consistent store for small amounts of extremely important data.

[Admiral](https://github.com/istio-ecosystem/admiral) is a tool for for service discovery that provides automatic configuration and service discovery for multicluster Istio service mesh.

[ScaleCube](https://github.com/scalecube/scalecube-services) is a library that simplifies the development of reactive and distributed applications by providing an embeddable microservices library. It connects distributed microservices in a way that resembles a fabric when viewed collectively. It greatly simplifies and streamlines asynchronous programming and provides a tool-set for managing microservices architecture.

[DPS(dns-proxy-server)](https://github.com/mageddo/dns-proxy-server) is a lightweight end user (Developers, Server Administrators) DNS server tool for service discovery, which make it easy to develop in systems where one hostname can solve to different IPs based on the configured environment, so you can:

 * Solve hostnames from local configuration database.
 * Solve hostnames from docker containers using docker hostname option or HOSTNAMES env.
 * Solve hostnames from a list of configured remote DNS servers(as a proxy) if no answer of two above  .
 * Graphic interface to Create/List/Update/Delete A/CNAME records.
 * Solve host machine IP using host.docker hostname.
 * Access container by its container name / service name.
 * Specify from which network solve container IP.

[ZooKeeper](http://zookeeper.apache.org/)  is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services.

### Security

[Back to The Top](#table-of-contents)

[Blackbox](https://github.com/StackExchange/blackbox) - Safely store secrets in Git/Mercurial. Provides tooling to automatically encrypt secrets like passwords.

[CrowdSec](https://github.com/crowdsecurity/crowdsec) - Locally scans log files and optionnaly requests, detecting and blocking malicious behaviors. AppSec capabilities to enable virtual-patching and turn your install into a WAF. Share attacks signals and benefit from real time blocklist of the most agressive IPs attacking CrowdSec's network.

[Denyhosts](http://denyhosts.sourceforge.net/) - Thwart SSH dictionary based attacks and brute force attacks.

[Fail2Ban](http://www.fail2ban.org/wiki/index.php/Main_Page) - Scans log files and takes action on IPs that show malicious behavior.

[fwknop](https://www.cipherdyne.org/fwknop/) - Protects ports via Single Packet Authorization in your firewall.

[Glastopf](http://glastopf.org/) - A low-interaction web application honeypot to emulate vulnerabilities and gather attack data.

[Kippo](https://github.com/desaster/kippo) - A medium-interaction SSH honeypot, mostly used as a standalone SSH daemon with a configurable Filesystem sandbox.
[OSSEC](http://ossec.net) - OSSEC is a HIDS that performs log analysis, FIM, rootkit detection, and much more.

[OSQuery](https://osquery.io/) - Query your servers status and info using a SQL like interface.

[OPNsense](https://opnsense.org/) is an open source firewall and routing software developed by Deciso. It offers an integrated Netflow analyser without the need for additional plugins or tools, similar to what you may find in high-end commercial products.

[pfSense](https://www.pfsense.org/) - Firewall and Router FreeBSD distribution.

[Snort](https://www.snort.org/) - Snort is a free and open source network intrusion prevention system (NIPS) and network intrusion detection system (NIDS) created by Martin Roesch in 1998.

[SpamAssassin](https://spamassassin.apache.org/) - A powerful and popular email spam filter employing a variety of detection technique.

[BounCA](https://bounca.org/) - is a personal SSL / Certificate Authority Key management tool. Create self-signed SSL certificates via your browser. 

### Troubleshooting

[Back to The Top](#table-of-contents)

[NETworkManager](https://github.com/BornToBeRoot/NETworkManager) - A powerful tool for managing networks and troubleshoot network problems. It contains features like a WiFi analyzer, IP scanner, port scanner, ping monitor, traceroute, DNS lookup or a LLDP/CDP capture. 

[Wireshark](https://www.wireshark.org/) - The world's foremost network protocol analyzer.

[Selfspy](https://github.com/selfspy/selfspy) is a daemon for Unix/X11, MacOS (thanks to @ljos) and Windows (thanks to @Foxboron), that continuously monitors and stores what you are doing on your computer. This way, you can get all sorts of nifty statistics and reminders on what you have been up to.

[Cilium](https://github.com/cilium/cilium) - A networking, observability, and security solution with an eBPF-based dataplane. It provides a simple flat Layer 3 network with the ability to span multiple clusters in either a native routing or overlay mode.

[Netshoot](https://github.com/nicolaka/netshoot) - A  Docker + Kubernetes network trouble-shooting swiss-army container.

[Kubevious](https://kubevious.io/) - A suite of app-centric assurance, validation, and introspection products for Kubernetes. It helps running modern Kubernetes applications without disasters and costly outages by continuously validating application manifests, cluster state, and configuration. 

[HOMER](https://github.com/sipcapture/homer) - A robust, carrier-grade, scalable Packet and Event capture system and VoiP/RTC Monitoring Application based on the HEP/EEP protocol and ready to process & store insane amounts of signaling, rtc events, logs and statistics with instant search, end-to-end analysis and drill-down capabilities.

[mitmproxy](https://mitmproxy.org/) - A Python tool used for intercepting, viewing and modifying network traffic. Invaluable in troubleshooting certain problems.

[Sysdig](https://www.sysdig.org/) - Capture system state and activity from a running Linux instance, then save, filter and analyze.

[Sysdig Inspect](https://github.com/draios/sysdig-inspect) - A powerful opensource interface for container troubleshooting and security investigation.

### Monitoring

[Back to the Top](#table-of-contents)

[Proxmox Mail Gateway](https://www.proxmox.com/en/proxmox-mail-gateway) is an open-source email security solution protecting your mail server against all email threats from the moment they emerge. 

[M2MLabs MainSpring](http://www.m2mlabs.com/) is an application framework for building machine-to-machine applications like vehicle tracking or machine remote monitoring. In such applications typically a remote device equipped with sensors (e.g. gps, temperature, pressure) and actors communicates with a server application that is running the device communication protocol, device configuration, storage of data sent by the devices as well as the application business logic and the presentation layer. 

[VictoriaMetrics](https://victoriametrics.com/) is a fast and scalable open source time series database and monitoring solution which exists in a Single and in a cluster version. It is compatible with Prometheus pull model and supports a [wide variety of ingestion protocols](https://docs.victoriametrics.com/#prominent-features): Influx, Graphite, Prometheus remote_write, Prometheus exposion format, OpenTSDB put message, JSON line format, Arbitrary CSV data, native binary formant, DataDog agent or DogStatsD; as way as many ways to query data via PromQL or [MetricsQL](https://docs.victoriametrics.com/MetricsQL.html) from Grafana or own [VMUI](https://docs.victoriametrics.com/Single-server-VictoriaMetrics.html#vmui).

[Kestra](https://github.com/kestra-io/kestra) is an infinitely scalable orchestration and scheduling platform, creating, running, scheduling, and monitoring millions of complex pipelines. 

[InfluxDB](https://www.influxdata.com) is an open source time series database, purpose-built by InfluxData for monitoring metrics and events, provides real-time visibility into stacks, sensors, and systems. Use InfluxDB to capture, analyze, and store millions of points per second, meet demanding SLA's, and chart a path to automation.

[Grafana](https://grafana.com/oss/grafana/) is a tool that allows you to query, visualize, alert on and understand your metrics no matter where they are stored. 

[Prometheus](https://prometheus.io/) is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database (allowing for high dimensionality) built using a HTTP pull model, with flexible queries and real-time alerting.

[Loki](https://grafana.com/oss/loki/) is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate. It does not index the contents of the logs, but rather a set of labels for each log stream.

[Thanos](https://thanos.io/) is a set of components that can be composed into a highly available metric system with unlimited storage capacity, which can be added seamlessly on top of existing Prometheus deployments.

[Wyze](https://wyze.com/) is a great security and monitoring application to live stream HD video from the security cameras from anywhere in the world. 

[Uptime Kuma](https://uptime.kuma.pet/) is a fancy self-hosted monitoring tool.

[Gatus](https://gatus.io/) is a developer-oriented health dashboard that gives you the ability to monitor your services using HTTP, ICMP, TCP, and even DNS queries as well as evaluate the result of said queries by using a list of conditions on values like the status code, the response time, the certificate expiration, the body and many others. 

[Upptime](https://upptime.js.org) is the open-source uptime monitor and status page, powered entirely by GitHub Actions, Issues, and Pages.

[HertzBeat](https://github.com/dromara/hertzbeat) is an open-source, real-time monitoring system with custom-monitor and agentless. It supports web service, database, os, middleware and more.

[Tautulli](https://tautulli.com/) is a python based web application for monitoring, analytics and notifications for [Plex Media Server](https://plex.tv/).

[Flower](https://flower.readthedocs.io/) is a web based tool for monitoring and administrating Celery clusters.

[Weave Scope](https://www.weave.works/oss/scope/) is a tool for Troubleshooting & Monitoring for Docker & Kubernetes. It automatically generates a map of your application, enabling you to intuitively understand, monitor, and control your containerized, microservices-based application.

[Statping (Status Page & Monitoring Server)](https://github.com/statping/statping) is an easy to use Status Page for your websites and applications. Statping will automatically fetch the application and render a beautiful status page with tons of features for you to build an even better status page.

[Vector](https://vector.dev/) is a high-performance, end-to-end (agent & aggregator) observability data pipeline that puts you in control of your observability data. [Collect](https://vector.dev/docs/reference/configuration/sources/), [transform](https://vector.dev/docs/reference/configuration/transforms/), and [route](https://vector.dev/docs/reference/configuration/sinks/) all your logs, metrics, and traces to any vendors you want today and any other vendors you may want tomorrow.

[Open Service Mesh (OSM)](https://openservicemesh.io/) is a lightweight, extensible, cloud native service mesh that allows users to uniformly manage, secure, and get out-of-the-box observability features for highly dynamic microservice environments. 

[Ciao](https://github.com/brotandgames/ciao) is a tool that checks HTTP(S) URL endpoints for a HTTP status code (or errors on the lower TCP stack) and sends a notification on status change via E-Mail or Webhooks.

[Server](https://gotify.net/) is a simple server for sending and receiving messages in real-time per WebSocket. 

[Ngxtop](https://github.com/lebinh/ngxtop) is a real-time metrics for nginx server (and others).

[Blocky](https://github.com/0xERR0R/blocky) is a fast and lightweight DNS proxy as ad-blocker for local network with many features 

[Dashy](https://dashy.to/) is a self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more.

[Netdata](https://github.com/netdata/netdata) is high-fidelity infrastructure monitoring and troubleshooting, real-time monitoring Agent collects thousands of metrics from systems, hardware, containers, and applications with zero configuration. It runs permanently on all your physical/virtual servers, containers, cloud deployments, and edge/IoT devices, and is perfectly safe to install on your systems mid-incident without any preparation.

[Restic](https://restic.net/) is a modern backup program that can back up your files: from Linux, BSD, Mac and Windows. To many different storage types, including self-hosted and online services. easily, being a single executable that you can run without a server or complex setup. effectively, only transferring the parts that actually changed in the files you back up.

[Autorestic](https://github.com/cupcakearmy/autorestic) is a wrapper around the amazing restic. While being amazing the restic cli can be a bit overwhelming and difficult to manage if you have many different locations that you want to backup to multiple locations. 

[MinIO](https://min.io/) is a high performance object storage tool that provides the world's fastest object storage server. With READ/WRITE speeds of 325 GiB/s and 165 GiB/s on standard hardware with default parity (EC:4), object storage can operate as the primary storage tier for a diverse set of workloads ranging from Spark, Presto, TensorFlow.

[Greyhole](https://www.greyhole.net/) is a tool that uses Samba to create a storage pool of all your available hard drives (whatever their size, however they are connected), and allows you to create redundant copies of the files you store, in order to prevent data loss when part of your hardware fails.

[Falcon LogScale](https://www.crowdstrike.com/products/observability/falcon-logscale/) is purpose-built to help any organization achieve the benefits of large-scale logging and analysis. Falcon LogScale has virtually no latency, even at ingest volumes of 1PB(Petabyte) per day. 

[Googerteller](https://github.com/berthubert/googerteller) is a tool that makes an audible sound any time your computer sends a packet to a Google tracker or a Google service, which excludes Google Cloud users.

[TeslaMate](https://docs.teslamate.org/) is a powerful, self-hosted data logger for your Tesla.

[OneUptime](https://oneuptime.com/) is an open-source complete SRE and DevOps platform. It monitors your website, dashboards, API's, and more and alerts your team when downtime happens. 

[Parca](https://parca.dev/) is a tool for continuous profiling for analysis of CPU and memory usage, down to the line number and throughout time. Saving infrastructure cost, improving performance, and increasing reliability.

[DeviceHive](https://www.devicehive.com) is a free, highly scalable open-source IoT platform for data collection, processing and analysis, visualization, and device management with the broad range of integration options.

[Distributed Services Architecture (DSA)](https://github.com/IOT-DSA) is an open source IoT platform that facilitates device inter-communication, logic and applications at every layer of the Internet of Things infrastructure. The objective is to unify the disparate devices, services and applications into a structured and adaptable real-time data model.

[IoTivity](https://iotivity.org) is an open source software framework enabling seamless device-to-device connectivity to address the emerging needs of the Internet of Things. 

[Eclipse IoT Project](https://projects.eclipse.org/projects/iot) provides open source technology that will be used to build IoT solutions for industry and consumers.

### Dashboards

[Back to The Top](#table-of-contents)

[Adagios](http://adagios.org/) is a Web based Nagios configuration interface.

[Dash](https://github.com/afaqurk/linux-dash) is a low-overhead monitoring web dashboard for a GNU/Linux machine.

[Thruk](http://www.thruk.org/) is a Multibackend monitoring web interface with support for Naemon, Nagios, Icinga and Shinken.

[Uchiwa](https://uchiwa.io) is a simple dashboard for the Sensu monitoring framework.

[InfluxDB](https://www.influxdata.com) is an open source time series database, purpose-built by InfluxData for monitoring metrics and events, provides real-time visibility into stacks, sensors, and systems. Use InfluxDB to capture, analyze, and store millions of points per second, meet demanding SLA's, and chart a path to automation.

[Grafana](https://grafana.com/oss/grafana/) is a tool that allows you to query, visualize, alert on and understand your metrics no matter where they are stored. 

[Prometheus](https://prometheus.io/) is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database (allowing for high dimensionality) built using a HTTP pull model, with flexible queries and real-time alerting.


### Analytics

[Back to the Top](#table-of-contents)

[Plausible Analytics](https://plausible.io/) - Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics.

[PostHog](https://posthog.com) - Product analytics, session recording, feature flagging and a/b testing that you can self-host. 

[Ackee](https://ackee.electerious.com) - Self-hosted analytics tool for those who care about privacy. 

[AWStats](http://www.awstats.org/) - Generate statistics from web, streaming, ftp or mail server logfiles. 

[Chartbrew](https://chartbrew.com) - Web application that can connect directly to databases and APIs and use the data to create beautiful charts. 

[Countly Community Edition](https://count.ly) - Real time mobile and web analytics, crash reporting and push notifications platform.

[Druid](http://druid.io/) - Distributed, column-oriented, real-time analytics data store. 

[EDA](https://eda.jortilles.com/en/jortilles-english/) - Web application for data analysis and visualization. 

[GoAccess](http://goaccess.io/) - Real-time web log analyzer and interactive viewer that runs in a terminal. 

[GoatCounter](https://www.goatcounter.com) - Easy web statistics without tracking of personal data. 

[Metabase](https://metabase.com/) - Easy, open-source way for everyone in your company to ask questions and learn from data. 

[Offen](https://www.offen.dev/) - Fair, lightweight and open web analytics tool. Gain insights while your users have full access to their data. 

[Open Web Analytics](http://www.openwebanalytics.com/) - Web analytics framework that lets you stay in control of how you instrument and analyze the use of your websites and applications. 

[Redash](http://redash.io) - Connect and query your data sources, build dashboards to visualize data and share them with your company. 

[RudderStack](https://rudderstack.com/) - Collect, unify, transform, and store your customer data, and route it to a wide range of common, popular marketing, sales, and product tools. alternative to Segment.

[Shynet](https://github.com/milesmcc/shynet) - Modern, privacy-friendly, and detailed web analytics that works without cookies or JS. 

[Superset](http://superset.apache.org/) - Modern data exploration and visualization platform. 

[Umami](https://umami.is/) - Simple, fast, privacy-focused alternative to Google Analytics.


### Search

[Back to the Top](#table-of-contents)

[Meilisearch](https://github.com/meilisearch/meilisearch) is a lightning-fast search engine that fits effortlessly into your apps, websites, and workflow. 

[Shodan](https://www.shodan.io/) is the world's first search engine for Internet-connected (IoT) devices.

[Whoogle Search](https://github.com/benbusby/whoogle-search) is a self-hosted, ad-free, privacy-respecting metasearch engine.

[SearX](https://github.com/searx/searx) is a Privacy-respecting, hackable [metasearch engine](https://en.wikipedia.org/wiki/Metasearch_engine).

[SearXNG](https://github.com/searxng/searxng) is a free internet metasearch engine which aggregates results from various search services and databases. 

[Sonic](https://github.com/valeriansaliou/sonic) is a fast, lightweight & schema-less search backend. An alternative to Elasticsearch that runs on a few MBs of RAM. 

[Zinc](https://github.com/zinclabs/zinc) is a search engine that does full text indexing. It is a lightweight alternative to Elasticsearch and runs using a fraction of the resources. 

[Cylect.io](https://cylect.io/) is the ultimate searching tool that is here to assist anyone looking for specific information through vast amounts of websites, search engines, and data collectors. 

[Lyra](https://docs.lyrasearch.io/) is a fast, in-memory, typo-tolerant, full-text search engine written in TypeScript. 

[Hugo Lyra](https://github.com/paolomainardi/hugo-lyra) is a  typescript module for creating LyraSearch indexes for static Hugo sites, it comes with server and client libraries. 

[Typesense](https://github.com/typesense/typesense) is a fast, typo-tolerant search engine for building delightful search experiences. 

[Tantivy](https://github.com/quickwit-oss/tantivy) is a full-text search engine library inspired by Apache Lucene and written in Rust.

[Toshi](https://github.com/toshi-search/Toshi) is meant to be a full-text search engine similar to Elasticsearch. Toshi strives to be to Elasticsearch what [Tantivy](https://github.com/tantivy-search/tantivy) is to Lucene.

[FlexSearch](https://github.com/nextapps-de/flexsearch) is a Next-Generation full text search library for Browser and Node.js.

[fd](https://github.com/sharkdp/fd) is a program to find entries in your filesystem. It is a simple, fast and user-friendly alternative to find. 

[k8s at home search](https://nanne.dev/k8s-at-home-search/#/) is a tool that indexs Flux HelmReleases from Github repositories with the ```k8s-at-home topic``` on GitHub. 

[OpenFind](https://open.getfind.app/) is an app to find text in real life. Easily search your entire photo library in split seconds. This runs 100% offline. No servers, nothing weird going on.

### Notifications

[Back to the Top](#table-of-contents)

[Apprise](https://github.com/caronc/apprise) is a tool that allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc.

[ntfy](https://ntfy.sh/) is a simple HTTP-based pub-sub notification service. It allows you to send notifications to your phone or desktop via scripts from any computer, entirely without signup, cost or setup. It's also open source if you want to run your own.

[Countly](https://github.com/Countly/countly-server) is a product analytics solution and innovation enabler that helps teams track product performance and customer journey and behavior across mobile, web, and desktop applications. [Ensuring privacy by design](https://count.ly/your-data-your-rules), Countly allows you to innovate and enhance your products to provide personalized and customized customer experiences, and meet key business and revenue goals.

[notifiers](https://github.com/liiight/notifiers) is a general wrapper for a variety of 3rd party providers and built in ones (like SMTP) aimed solely at sending notifications.

[Pushover](https://pushover.net/) is a tool that makes it easy to get real-time notifications on your Android, Android Wear, iPhone, iPad, Apple Watch and Desktop.

[Simplepush](https://simplepush.io/) is a tool to send end-to-end encrypted push notifications to your Android and iPhone.

[UnifiedPush](https://unifiedpush.org/) is a set of specifications and tools that lets the user choose how push notifications are delivered. All in a free and open source way.

### RSS

[Back to the Top](#table-of-contents)

[RSS Guard](https://github.com/martinrotter/rssguard) is a simple RSS/ATOM feed reader for Windows, Linux, BSD, OS/2 or macOS which can work with RSS/ATOM/JSON feeds as well as many online feed services:

  * [Feedly](https://feedly.com/)
  * [Gmail](https://developers.google.com/gmail/api)
  * Google Reader API ([Bazqux](https://bazqux.com/), [FreshRSS](https://freshrss.org/), [Inoreader](https://www.inoreader.com/), [Miniflux](https://miniflux.app/), [Reedah](http://reedah.com/), [The Old Reader](https://theoldreader.com/) and more)
  * [Nextcloud News](https://apps.nextcloud.com/apps/news)
  * [Tiny Tiny RSS](https://tt-rss.org/)

[Feedly](https://feedly.com/) is an RSS tool where you can privately organize and research the topics and trends that matter to you. It offers useful integrations with Facebook, Twitter, Evernote, Buffer, OneNote, Pinterest, LinkedIn, IFTTT, and Zapier so that you can easily share stories with your networks and teammates.

[FreshRSS](https://www.freshrss.org/) is a self-hosted RSS and Atom feed aggregator. It is lightweight, easy to work with, powerful, and customizable.

[ArchiveBox](https://archivebox.io/) is a powerful, self-hosted internet archiving solution to collect, save, and view sites you want to preserve offline. It takes URLs/browser history/bookmarks/Pocket/Pinboard/etc., saves HTML, JS, PDFs, media, and more.

[RSSHub](https://github.com/DIYgod/RSSHub) is an open source, easy to use, and extensible RSS feed generator. It's capable of generating RSS feeds from pretty much everything.

[Miniflux V2](https://github.com/miniflux/v2) is a minimalist and opinionated feed reader.

### Websites/Blogs

[Back to the Top](#table-of-contents)

[Hugo](https://github.com/gohugoio/hugo) is a static HTML and CSS website generator written in Go. It is optimized for speed, ease of use, and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.

[Lyra](https://docs.lyrasearch.io/) is a fast, in-memory, typo-tolerant, full-text search engine written in TypeScript. 

[Hugo Lyra](https://github.com/paolomainardi/hugo-lyra) is a  typescript module for creating LyraSearch indexes for static Hugo sites, it comes with server and client libraries. 

[Kopage](https://www.kopage.com/) is  a self-hosted Website Builder. It's compatible with cPanel and other popular hosting control panels. Compatible with cPanel and other popular hosting control panels.

[Ghost](https://ghost.org/docs/hosting/) is a fully-managed PaaS & self-hosted open source software, and can be installed and maintained relatively easily on just about any VPS hosting provider.

[Cloudron](https://www.cloudron.io/) is a self-hosted immutable infrastructure design allows easy migration of apps across servers. In fact, you can move your entire server along with all its apps to another cloud provider in no time.

[Directus](https://directus.io/) is a real-time API and App dashboard for managing SQL database content.

[Haven](https://havenweb.org/) is a Self-hosted private blog instead of using Facebook.

[Antville](https://antville.org/) is an open source project aimed at the development of a simple site hosting system with many advanced [features](https://github.com/antville/antville/wiki/Features). 

[October](https://octobercms.com/) is a Self-hosted Content Management System (CMS) and web platform whose sole purpose is to make your development workflow simple again. 

[Grav](https://getgrav.org/) is a Fast, Simple, and Flexible, file-based Web-platform. There is Zero installation required. Just extract the ZIP archive, and you are already up and running. It comes with a powerful Package Management System to allow for simple installation and upgrading of plugins and themes, as well as simple updating of Grav itself.

[Orchard](https://github.com/OrchardCMS/Orchard) is a free, open source, community-focused Content Management System built on the ASP.NET MVC platform.

[Netlify CMS](https://www.netlifycms.org/) is a CMS for static site generators. Give users a simple way to edit and add content to any site built with a static site generator.

[Zola](https://www.getzola.org/) is a fast static site generator in a single binary with everything built-in. 

[FlatPress](https://www.flatpress.org/) is a lightweight, easy-to-set-up blogging engine. 

[Chyrp Lite](https://chyrplite.net/) is an ultra-lightweight blogging engine. It provides four beautiful blog themes and a friendly administration console, all fully navigable on a broad range of devices, thanks to the power of responsive HTML5. 

[WriteFreely](https://writefreely.org/) is an open source platform for building a writing space on the web.

[Sandstorm](https://sandstorm.io/) is an open source project built by a community of volunteers with the goal of making it really easy to run open source web applications.

[YunoHost](https://yunohost.org/) is a Debian-based distribution which strives to make it easy to quickly set up a server and host web applications.


### Social

[Back to the Top](#table-of-contents)

[Mattermost](https://mattermost.com/) is a secure, open source platform for communication, collaboration, and workflow orchestration across tools and teams.

[Mastadon](https://joinmastodon.org/) is a a decentralized social media platform that supports audio, video and picture posts, accessibility descriptions, polls, content warnings, animated avatars, custom emojis, thumbnail crop control, and more, to help you express yourself online.

[Telegram](https://telegram.org/) is a cross-platform, cloud-based instant messaging service. It has an open API and source code free for everyone. Telegram also provides end-to-end encrypted video calling, VoIP, file sharing and several other features.

[ActivityPub](https://activitypub.rocks/) is a decentralized social networking protocol based on the ActivityStreams 2.0 data format. It provides a client to server API for creating, updating and deleting content, as well as a federated server to server API for delivering notifications and subscribing to content.

[Lemmy](https://github.com/LemmyNet/lemmy) is similar to sites like Reddit, Lobste.rs, or Hacker News. Where you subscribe to forums you're interested in, post links and discussions, then vote, and comment on them. Behind the scenes, it is very different; anyone can easily run a server, and all these servers are federated, and connected to the same universe, called the Fediverse.

[Lemmy-UI](https://github.com/LemmyNet/lemmy-ui) is the official web app for [Lemmy](https://github.com/LemmyNet/lemmy), written in inferno.

[Mlem](https://github.com/buresdv/Mlem) is a Lemmy client for iOS.

[Jerboa](https://github.com/dessalines/jerboa) is an Android client for Lemmy, a federated reddit alternative.

[GoToSocial](https://gotosocial.org/) is an [ActivityPub](https://activitypub.rocks/) social network server, written in Golang.

[Berty](https://github.com/berty/berty) is a secure peer-to-peer messaging app that works with or without internet access, cellular data or trust in the network.

[Pleroma](https://pleroma.social/) is a free and open communication for everyone. Pleroma is social networking software compatible with other Fediverse software such as Misskey, Pixelfed, Mastodon and many others. 

[Matrix](https://matrix.org/) is a tool that gives you simple HTTP APIs and SDKs (iOS, Android, Web) to create chatrooms, direct chats and chat bots, complete with end-to-end encryption, file transfer, synchronised conversation history, formatted messages, read receipts and more.

[Element](https://element.io/) is a Matrix web client built using the [Matrix React SDK](https://github.com/matrix-org/matrix-react-sdk).

[Nostr(Notes and Other Stuff Transmitted by Relays)](https://github.com/nostr-protocol/nostr) is a truly censorship-resistant alternative to Twitter that has a chance of working.

[Fritter](https://fritter.cc/) is an open source frontend for Twitter on mobile devices, focusing on giving you the best experience and keeping your data private, local and in your hands. 

[Nitter](https://github.com/zedeus/nitter) is a free and open source alternative Twitter front-end focused on privacy and performance. All requests go through the backend, meaning the client never talks to Twitter and prevents Twitter from tracking your IP or JavaScript fingerprint.

[Diaspora](https://diasporafoundation.org/) is a privacy-aware, distributed, open source social network.

[Hubzilla](https://framagit.org/hubzilla/core) is a general purpose communication server integrated with a web publishing system and a decentralised permission system.

[Expanse](https://github.com/jc9108/expanse) is a fully selfhosted multi-user web app for externally storing Reddit items (saved, created, upvoted, downvoted, hidden) to bypass Reddit's 1000-item listing limits.

[Apollo](https://apolloapp.io/) is a beautiful Reddit app built for fast navigation with an incredibly powerful set of features.  

[Infinity](https://github.com/Docile-Alligator/Infinity-For-Reddit) is a Reddit client on Android written in Java. It does not have any ads and it features a clean UI and smooth browsing experience.

[RedReader](https://github.com/QuantumBadger/RedReader) is an unofficial open source Reddit client for Android. 


### Nostr

[Back to the Top](#table-of-contents)

**[Nostr (Notes and Other Stuff Transmitted by Relays)](https://nostr.com/)** is a protocol, designed for simplicity, that aims to create a censorship-resistant global social network. The protocol is based on very simple & flexible event objects (which are passed around as plain JSON) and uses standard elliptic-curve cryptography for keys and signing. 

- [nostr](https://github.com/nostr-protocol/nostr) - overview and FAQ.
- [NIPs](https://github.com/nostr-protocol/nips) - the "**N**ostr **I**mplementation **P**ossibilities" describe the protocol in technical detail.
- [nostr, a basic tour](https://github.com/rajarshimaitra/rust-nostr/blob/main/VISION.md) - an intro to nostr.
- [UseNostr](https://usenostr.org) - A small guide for anyone who wants to learn more about how nostr works and what it can do.
- [nostr.how](https://nostr.how) - Quick-start to onboard desktop users with Alby & Astral.
- [nostr.guide](https://nostr.guide) - A guide to all things nostr.
- [nostr address book](https://github.com/aitechguy/nostr-address-book) - A directory of twitter users accounts and their NOSTR addresses.
- [NNostr](https://github.com/Kukks/NNostr) - a C# relay.
- [nostr-rs-relay](https://sr.ht/~gheartsfield/nostr-rs-relay/) - a minimalistic relay written in Rust that saves data on SQLite.
- [Relayer Basic](https://github.com/fiatjaf/relayer/tree/master/basic) - a simple relay based on _relayer_ backed by Postgres.
- [nodestr](https://github.com/Dolu89/nodestr-relay) - a Node.js implementation.
- [sovereign-stack](https://www.sovereign-stack.org) - a tool that helps you deploy nostr relays and create self-hosted (bitcoin-only) Value4Value websites.
- [expensive relay](https://github.com/fiatjaf/expensive-relay) - a relay that requires payment for registration
- [me.untethr.nostr-relay](https://github.com/atdixon/me.untethr.nostr-relay) - a relay written in Clojure
- [Minds Nostr Relay](https://gitlab.com/minds/infrastructure/nostr-relay) - a relay for [Minds](https://www.minds.com), an open-source social network
  - [Minds Engine - Nostr](https://gitlab.com/minds/engine/-/tree/master/Core/Nostr) - relevant Minds API code for reading/writing Minds posts using Nostr
- [NostrPostr Relay](https://github.com/Giszmo/NostrPostr/tree/master/NostrRelay) - a Kotlin Relay supporting both SQLite and Postgresql
- [nostrpy](https://github.com/monty888/nostrpy) - relay, client, and other tooling in python
- [nostream](https://github.com/Cameri/nostream) - a nostr relay written in Typescript backed by PostgreSQL (renamed from nostr-ts-relay)
- [nostr_relay](https://code.pobblelabs.org/fossil/nostr_relay/) – a nostr relay written in python, backed by SQLite
- [søstr](https://github.com/metasikander/s0str) – a private nostr relay written in rust, saves all notes from one pubkey and publish them to anyone that requests them
- [knostr](https://github.com/lpicanco/knostr) – a nostr relay implemented in Kotlin with support for Postgres and metrics(micrometer).
- [PyRelay](https://github.com/johnny423/pyrelay) – a python implementation of a nostr relay, using asyncio.
- [strfry](https://github.com/hoytech/strfry) – C++ implementation backed by LMDB with efficient syncing of events using merkle trees
- [Astro](https://github.com/Nostrology/astro) – Elixir based implementation built to be performant and highly distributed.
- [Nex](https://github.com/lebrunel/nex) - A powerful and scalable Nostr relay written in Elixir with Postgres DB.
- [gnost-relay](https://github.com/barkyq/gnost-relay) - nostr relay written in go backed by postgresql database.
- [nostring](https://github.com/xbol0/nostring) - A Nostr relay written in Deno.
- [Denostr](https://github.com/guakamoli/denostr) - Deno based, cloud native nostr implemention support by ByteTrade and Revo.
- [nostr-relay-nestjs](https://github.com/CodyTseng/nostr-relay-nestjs)- A Nostr relay implemented using the NestJS framework
- [Ephemerelay](https://gitlab.com/soapbox-pub/ephemerelay) - An in-memory Nostr relay that doesn't store data.
- [Servus](https://github.com/ibz/servus) - A self-contained, single executable, CMS / blogging engine reminiscent of Jekyll which also acts as a personal Nostr relay for your blog posts. Written in Rust.
- [nostr relay registry](https://nostr-registry.netlify.app/) - real-time checking of status of some known relays.
- [nostr.info](https://nostr.info/) - real-time checking of status of some known relays.
- [nostr.watch](https://nostr.watch) - real-time checking of status of some known relays.
- [Astral](https://github.com/monlovesmango/astral) - a branle fork with global feed and UI makeover
- [damus](https://github.com/damus-io/damus) - a twitter-like nostr client for iOS and MacOS.
- [more-speech](https://github.com/unclebob/more-speech) - desktop client for nostr written in Clojure.
- [futr](https://github.com/prolic/futr) - nostr client desktop app written in Haskell.
- [Minds](https://www.minds.com/) - open source social network. Supports reading and creating posts using the Nostr protocol.
- [Jester](https://github.com/jesterui/jesterui)  - Chess over nostr.
  - [Jester instance](https://jesterui.github.io/)
- [Sendstr](https://sendstr.com/) - shared clipboard between devices over nostr.
- [nosbin](https://nosbin.com/) - pastebin over nostr.
- [noscl](https://github.com/fiatjaf/noscl) - a basic command-line client written in Go.
- [loquaz](https://github.com/emeceve/loquaz) - a desktop app written in Rust for direct encrypted chat.
- [nostr console](https://github.com/vishalxl/nostr_console) - a nostr command line client written in Dart. Binaries available for Windows, Linux, and MacOS.
- [ArcadeCity](https://github.com/ArcadeCity/app) - Public group chats and P2P services (WIP) over nostr.
- [second exchange](https://github.com/cynsar-foundation/second.exchange) - an experiment to work out something of like medium, something of creator economy where users are rewarded for engaging in quality discussion and most importantly engaging in governance-related discussion.
- [scalastr](https://github.com/benthecarman/scalastr) - A barebones nostr client written in scala.
- [Nostros](https://github.com/KoalaSat/nostros) - A nostr mobile client for Android.
- [Nostrify.me](https://github.com/lightningorb/nostrify.me) - Nostr client built in SvelteKit.
- [NostrEmitter](https://github.com/cmdruid/nostr-emitter) - Simple E2E encrypted client and EventEmitter object
- [Lightning.Pub](https://github.com/shocknet/Lightning.Pub) - A nostr daemon for Lightning nodes.
- [shockwallet](https://github.com/shocknet/wallet2) - A Lightning wallet that uses nostr and lnurl to connect to nodes.
- [coracle](https://github.com/staab/coracle) - A nostr web client.
- [nostrweb](https://git.qcode.ch/nostr/nostrweb) - another nostr web client in vanilla JS.
  - [nostr.ch](https://nostr.ch/) - live instance
- [Bija](https://github.com/BrightonBTC/bija) - A desktop client written in python. Currently Linux only.
- [Nosky](https://github.com/KotlinGeekDev/Nosky) - A native Android client for Nostr. Still in development.
- [Stackerstan](https://stackerstan.org) - A decentralised organisation built on Bitcoin and Nostr, implemented as a replicated state machine in Golang.
- [nostr-java](https://github.com/tcheeric/nostr-java) - A nostr client API written in java, for generating, signing and publishing events to relays.
- [bolt.fun](https://makers.bolt.fun/feed) - A bitcoin lightning makers community that supports reading and creating comments using Nostr.
- [iris](https://github.com/irislib/iris-messenger) - A nostr web client.
  - [iris.to](https://iris.to) - live instance
  - [Android app](https://play.google.com/store/apps/details?id=to.iris.twa)
- [gossip](https://github.com/mikedilger/gossip) - A desktop client in rust presented with egui.
- [Attached](https://github.com/dyegolara/nostr-attached) - Open-Source ReactNative Expo app for Nostr (iOS, Android). Currently under app stores review.
- [Member](https://github.com/memberapp/memberapp.github.io) - Progressive Web App Client. Works on desktop and mobile.
  - [member.cash](https://member.cash/) - live instance
- [dispute](https://github.com/ethicnology/dispute) - A cross-platform (Linux, Android, iOS, MacOs, Windows and Web) client for NOSTR
- [Snort](https://github.com/v0l/snort) - Nostr UI written in react
- [Hamstr](https://github.com/styppo/hamstr) - A twitter-style web client built with Vue.js
- [Nozzle](https://github.com/kaiwolfram/Nozzle) - A Twitter-like native Android client written with Jetpack Compose
- [electron-nostr](https://github.com/wds4/electron-react-boilerplate-nostr) - A bare-bones desktop nostr client using electron-react-boilerplate. Goal is to be an easy template for people to experiment with different ideas on decentralized ratings, reputation, and web of trust.
- [Nostrid](https://github.com/lapulpeta/Nostrid) - Multi-platform client currently offering binaries for Android, Windows, MacOS and Linux.
  - [Nostrid.Web](https://web.nostrid.app/) - Web version running completely on the browser. It can be installed locally as PWA.
- [nostr-chat-widget-react](https://www.npmjs.com/package/nostr-chat-widget-react?activeTab=readme) - A React component that provides a live-chat widget over nostr that can be embedded into any website.
- [Blockcore Notes](https://github.com/block-core/blockcore-notes)  - Progressive Web App that can be installed on mobile and desktop, organize following in circles and have both public and private following lists. Dynamic interface for different uses, such as optimized for photograph viewing.
- [Noteon](https://github.com/ShawnCN/cinny_nostsr2/tree/dev)- Yet another nostr client focused on private chat and group chat with a simple, elegant and secure interface.
- [emon](https://github.com/sebastiaanwouters/emon) - Encrypted DMs over nostr with lightning payments integrated (WIP).
- [notebin.org](https://notebin.org) - Nostr UI created with NextJS, support for markdown and code highlighting.
- [Daisy](https://github.com/neb-b/daisy) - Mobile client for Android and iOS.
- [Flycat](https://github.com/digi-monkey/flycat-web) - A 2000s old-school style web client which support blogging on Nostr.
- [Amethyst](https://github.com/vitorpamplona/amethyst) - An Android client for nostr written in Kotlin.
- [MeShell](https://github.com/BEEBSDONE/MeShell_Nodejs) - Web, iOS and Android blog type client destined to publish articles and researches for independent journalists.
- [Disgus](https://github.com/carlitoplatanito/disgus) - A comment widget like Disqus, but for Nostr.
- [Tamga](https://github.com/erdaltoprak/tamga) - An offline first nostr contact & profile manager for iOS!
- [nostromat](https://github.com/ekimber/nostromat)- A Twitter-style Nostr web client, written in Clojurescript/React.
- [nostrom.at](https://nostrom.at) - live instance.
- [blogstack.io](https://blogstack.io) - Blogging site for nostr, supports markdown.
- [Votestr](https://votestr.com/) - Poll web app with nostr authentication and blind signature unlinkability.
- [gnost-deflate-client](https://github.com/barkyq/gnost-deflate-client)- A CLI nostr client written in go implementing permessage-deflate websocket compression.
- [algia](https://github.com/mattn/algia) - A cli application for nostr.
- [algia-web](https://github.com/ryogrid/algia-web) - A small resource consumption oriented Nostr web client.
- [Blowater](https://blowater.deno.dev) - A desktop Web client focusing on chat with delightful UX.
- [Written](https://github.com/silencesoft/written) Self hosted blog using nostr long-form content (NIP-23) and it shows only posts by selected authors.
- [Nostr Nests](https://nostrnests.com/) - Nostr Nests is an audio space for chatting, brainstorming, debating, jamming, micro-conferences and more.
- [nblog](https://github.com/jacany/nblog) - a self-host nostr ghost blog
- [Nostribe.com](https://github.com/sepehr-safari/nostribe-web-client) - Nostr client web app built with Next.js 13 and TypeScript.
  - [Nostribe.com](https://nostribe.com/) - Live instance.
- [Nostrtium](https://github.com/pjv/nostrtium) - Post to Nostr directly from within WordPress
- [uBlog](https://github.com/nodetec/ublog) - A minimalist blog on nostr that allows anyone to easily create their own personal micro-blog.
- [Listr](https://github.com/sepehr-safari/listr) - A Nostr Web Client for Making Lists, built with Next.js 13 and TypeScript.  
- [nostr-ruby](https://github.com/dtonon/nostr-ruby) - a Ruby implementation of the nostr protocol.
- [nostr](https://github.com/wilsonsilva/nostr) - a Ruby Nostr gem for use by clients.
- [NNostr.Client](https://github.com/Kukks/NNostr) - a C# Nostr library for use by clients.
- [nostr-tools](https://github.com/fiatjaf/nostr-tools) - a JavaScript client that abstracts the relay management code for use by clients.
- [nostr-relaypool-ts](https://github.com/adamritter/nostr-relaypool-ts) - a TypeScript relay pool library on top of nostr-tools that simplifies handling subscriptions to multiple servers.
- [nostr-react](https://github.com/t4t5/nostr-react) - React Hooks for Nostr.
- [go-nostr](https://github.com/fiatjaf/go-nostr) - a Go library that implements relay management, plus event encoding and signing utils.
- [nostr_rust](https://github.com/0xtlt/nostr_rust) - Functional Rust implementation of the nostr protocol.
- [nostr-js](https://github.com/jb55/nostr-js) - a javascript implementation of the nostr protocol.
- [nostr-rs](https://github.com/futurepaul/nostr-rs) - a Rust implementation of the nostr protocol
- [nostr](https://github.com/rust-nostr/nostr)
  - [nostr](https://github.com/rust-nostr/nostr/tree/master/crates/nostr): Rust implementation of Nostr protocol.
  - [nostr-sdk](https://github.com/rust-nostr/nostr/tree/master/crates/nostr-sdk): High level client library.
  - [bindings](https://github.com/rust-nostr/nostr/tree/master/bindings): UniFFI (Kotlin, Swift, Python, Ruby) bindings.
- [relayer](https://github.com/fiatjaf/relayer) - a server framework for writing custom relays.
- [NostrPostr](https://github.com/Giszmo/NostrPostr) - a Kotlin Nostr library for clients or relays.
- [python-nostr](https://github.com/jeffthibault/python-nostr) - a python library for making clients.
- [nostr-bot](https://github.com/slaninas/nostr-bot) - a Rust library for writing bots.
- [NostrKit](https://github.com/cnixbtc/NostrKit) - a Swift library for interacting with relays.
- [nostr-relay-inspector](https://github.com/dskvr/nostr-relay-inspector) - A library that returns useful information about relays based on nostr-js.
- [schorr_snap](https://github.com/neeboo/schnorr_snap) - A snap plugin for Metamask Flask, supports nostr.
- [nostr-deno](https://github.com/KiPSOFT/nostr-deno) - a client library for Deno javascript runtime.
- [nostr-types](https://github.com/mikedilger/nostr-types) - a rust library defining types useful for the nostr protocol.
- [dart-nostr](https://github.com/ethicnology/dart-nostr) - a Dart library for Flutter.
- [nostr-connect](https://github.com/nostr-connect/connect) - Nostr Connect SDK for TypeScript is a library that allows you to easily integrate Nostr Connect into your web application.
- [pynostr](https://github.com/holgern/pynostr) - a python library for nostr.
- [nostr-php](https://github.com/swentel/nostr-php) - a PHP library for nostr.
- [smtp nostr gateway ](https://github.com/Cameri/smtp-nostr-gateway) - a bridge that forwards emails to pubkeys as encrypted direct messages.
- [matrix-nostr-bridge](https://github.com/8go/matrix-nostr-bridge) - a simple Matrix-to-Nostr or Nostr-to-Matrix bridge.
- [Mostr](https://gitlab.com/soapbox-pub/mostr) - a bridge between Nostr and the Fediverse (Mastodon, ActivityPub, etc.).
- [nostrich.fun](https://nostrich.fun) - A feature-rich directory of nostr projects. A fork of [LightningNetworkStores.com](https://lightningnetworkstores.com)
- [git-nostr-tools](http://git.jb55.com/git-nostr-tools) - A cli tool for sending code patches over nostr.
- [nostr-cln-events](http://git.jb55.com/nostr-cln-events) - A CLN plugin to push clightning node events to nostr.
- [nostr registry](https://codeberg.org/rsbondi/nostr-registry) - a database of known relays with their uptime and NIP support tables
- [nostr-fzf](https://github.com/Cameri/nostr-fzf) - Nostr Directory; a tool for searching usernames and channels.
- [nostr-notify](https://github.com/jb55/nostr-notify) - desktop nostr notifications using libnotify.
- [nostr-launch](https://codeberg.org/rsbondi/nostr-launch) - A tool for launching a bunch of relays and clients locally for development and testing.
- [nostr GitHub Action](https://github.com/theborakompanioni/nostr-action) - send events from GitHub Actions.
- [nostrefresh](https://github.com/melvincarvalho/nostrefresh) -  A simple refresh function for nostr web pages.
- [anonroom](https://github.com/vinliao/anonroom) - anonymous chat room inside nostr.
- [nostril](https://github.com/jb55/nostril) - A C cli tool for creating nostr events.
- [nostr-rs-relay-compose](https://github.com/vdo/nostr-rs-relay-compose) - A Docker compose deployment for nostr-rs-relay with SSL support based on Traefik.
- [nostr.guru](https://nostr.guru/) - a nostr web gateway for viewing events by their ID.
- [nostrandom.netlify.app](https://nostrandom.netlify.app/) - generate publish-able Nostr event with random keys.
- [nashboard](https://github.com/vinliao/nashboard) - A Nostr network dashboard with network statistics, reachable [here](https://nashboard.space/).
- [ndxstr](https://github.com/ArcadeCity/ndxstr) - nostr's layer 2 indexing nodes, with more advanced querying capability than currently supported by relays.
- [nostrillery](https://github.com/Cameri/nostrillery) - A tool for running performance tests against Nostr relays.
- [nostr-terminal](https://github.com/cmdruid/nostr-terminal) - A SSH-like access to your machine via web terminal, powered by Nostr.
- [nostreq](https://github.com/blakejakopovic/nostreq) - A Nostr relay event request generator.
- [nostr.io](https://nostr.io/) - A network statistics with last published notes, top 50 publishers, and top 50 followed users.
- [nostr-commander](https://github.com/8go/nostr-commander-rs) - A simple but convenient CLI-based Nostr app for following users, sending DMs, etc.
- [nostr.directory](https://github.com/pseudozach/nostr.directory) - A searchable database of nostr users and their other social media links.
- [nostr-tool](https://github.com/0xtrr/nostr-tool) - A Rust CLI tool to generate and publish events.
- [frostr](https://github.com/nickfarrow/frostr) - Create joint nostr identities and require t-of-n signatures to post.
- [nostr.rest](https://nostr.rest) - Mine proof of work public keys with user specified prefixes.
- [lnpass](https://lnpass.github.io) - A key manager for Lightning and nostr.
- [sb.nostr.band](https://sb.nostr.band) - Search bots that you can create and follow to receive new posts matching a keyword right into your feed.
- [rss.nostr.band](https://rss.nostr.band) - Create custom RSS feeds with posts matching your keywords and consume using your favorite RSS reader.
- [nostrview](https://nostrview.com) - A nostr search engine. Search by content, tags, events or pub keys.
- [nostr-bulk-dms](https://github.com/leesalminen/nostr-bulk-dm) - A tool that allows you to send DMs over nostr to many recipients in bulk.
- [nostrify](https://github.com/joelklabo/nostrify) - A Core Lightning plugin that sends events (forwards, connect, disconnect, etc.) to nostr.
- [nip06-web](https://github.com/jaonoctus/nip06-web) - a website to generate or restore NIP-06 seed phrases
- [nip06-cli](https://github.com/jaonoctus/nip06-cli) - a Node.js CLI to generate or restore NIP-06 seed phrases.
- [nostr-broadcast](https://github.com/leesalminen/nostr-broadcast) - A tool lets you take your events from some relays and broadcast them to another relay. Could be helpful for backing up your notes to a private relay.
- [nostr-follow-bundler](https://github.com/leesalminen/nostr-follow-bundler) - A tool lets you create lists of profiles that other users can then see and follow themselves.
- [nostr-proxy](https://github.com/dolu89/nostr-proxy) - Push and get events to your Proxy, get results from multiple Nostr relays.
- [nostrends](https://github.com/akiomik/nostrends) - Trending on Nostr, like Twitter trends. Live at [nostrends.vercel.app](https://nostrends.vercel.app).
- [homebrew-nostr](https://github.com/0xbabo/homebrew-nostr) - Homebrew tap for Nostr software.
- [heyxynip5](https://github.com/bennyhodl/hexynip5) - A CLI helper for converting nostr npub/nsec to their hex format for NIP-05 verification.
- [http-nostr-publisher](https://github.com/getAlby/http-nostr-publisher) - A Cloudflare worker to publish Nostr events to relays through a non-blocking HTTP interface .
- [blastr](https://github.com/MutinyWallet/blastr) - A nostr cloudflare workers proxy relay that publishes to all known relays.
- [keystr-rs](https://github.com/keystr/keystr-rs) - An application for managing Nostr keys. Written in Rust, with simple UI (Iced).
- [nostr_simple_publish](https://www.drupal.org/project/nostr_simple_publish/) - Drupal module to publish content to Nostr.
- [nostr-spam-detection](https://github.com/blakejakopovic/nostr-spam-detection) - An experiment in building a machine learning model to label Nostr spam content for filtering and relay rejection.
- [blogsync](https://github.com/canostrical/blogsync) - Self-host blog articles from long-form notes e.g. via Caddy server.
- [NostrFlu](https://heguro.github.io/nostr-following-list-util/) - A tool to collect and resend following lists from relays. You can also check badges.
- [nkcli](https://github.com/mdzz-club/nkcli) - A CLI tool for nostr key manage and serve NIP-46.
- [git-nostr](https://github.com/colealbon/git-nostr)- A tool to enhance git cli with nostr communications.
- [nostr-wtf](https://github.com/LightningK0ala/nostr-wtf) - A set of nostr tools available and deployed on a web app including a [pubkey converter](https://lightningk0ala.github.io/nostr-wtf/) and [relay query tool](https://lightningk0ala.github.io/nostr-wtf/query).
- [strfry policies](https://gitlab.com/soapbox-pub/strfry-policies)- A collection of moderation & antispam policies for the strfry relay developed in TypeScript/Deno.
- [nostrum](https://github.com/nostr-connect/nostrum) - Nostrum it's a mobile app that allows you to sign transactions and messages with your Nostr keys. Nostrum is the reference implementation for a remote signer app (ie. Wallet) of the Nostr Connect protocol.
- [nostr-signing-device](https://github.com/lnbits/nostr-signing-device) - Signing device for Nostr built on ESP32.

### iMessage

[Back to the Top](#table-of-contents)

 * [Beeper HitHub](https://github.com/beeper)
 * [iMessage - Getting Started Guide - Beeper](https://help.beeper.com/chat-networks/imessage)
 
[iMessage-exporter](https://github.com/ReagentX/imessage-exporter) is a binary exports iMessage data to txt or html formats. It can also run diagnostics to find problems with the iMessage database.

[pypush](https://github.com/JJTech0130/pypush) is a POC demo of my recent iMessage reverse-engineering. It can currently register as a new device on an Apple ID, set up encryption keys, and send and receive iMessages!

[Self-Host Beeper](https://github.com/beeper/self-host) is a self-hosted universal chat app that can chat with your friends on iMessage from your Android device using your phone number. You can also join iMessage Group Chats with your phone number and blue bubbles, and share full-resolution images, videos, and audio. 

[Beeper Mini](https://help.beeper.com/beeper-mini/beeper-mini-getting-started-guide-site) is an Andorid app that can chat with your friends on iMessage from your Android device using your phone number. You can also join iMessage Group Chats with your phone number and blue bubbles, and share full-resolution images, videos, and audio.

[Beeper Bridge Manager](https://github.com/beeper/bridge-manager) is a tool for running self-hosted bridges with the Beeper Matrix server. 

[Matrix Ansible and Docker Deploy](https://github.com/spantaleev/matrix-docker-ansible-deploy) is a Matrix (An open network for secure, decentralized communication) server setup using Ansible and Docker.

### Communications

[Back to the Top](#table-of-contents)

[Matrix](https://matrix.org/) is a tool that gives you simple HTTP APIs and SDKs (iOS, Android, Web) to create chatrooms, direct chats and chat bots, complete with end-to-end encryption, file transfer, synchronised conversation history, formatted messages, read receipts and more.

[Postmoogle](https://gitlab.com/etke.cc/postmoogle) is an actual SMTP server that allows you to send and receive emails on your matrix server. It can't be used with arbitrary email providers, because it acts as an actual email provider itself, so you can use it to send emails from your apps and scripts as well.

[SimpleX](https://simplex.chat/) is a privacy redefined messenger without user IDs. Other apps have user IDs: **Signal, Matrix, Session, Briar, Jami, Cwtch, etc.** SimpleX does not, not even random numbers.

[Element](https://element.io/) is a Matrix web client built using the [Matrix React SDK](https://github.com/matrix-org/matrix-react-sdk).

[Mattermost](https://mattermost.com/) is a secure, open source platform for communication, collaboration, and workflow orchestration across tools and teams.

[Mastadon](https://joinmastodon.org/) is a a decentralized social media platform that supports audio, video and picture posts, accessibility descriptions, polls, content warnings, animated avatars, custom emojis, thumbnail crop control, and more, to help you express yourself online.

[Telegram](https://telegram.org/) is a cross-platform, cloud-based instant messaging service. It has an open API and source code free for everyone. Telegram also provides end-to-end encrypted video calling, VoIP, file sharing and several other features.

[Berty](https://github.com/berty/berty) is a secure peer-to-peer messaging app that works with or without internet access, cellular data or trust in the network.

[Pleroma](https://pleroma.social/) is a free and open communication for everyone. Pleroma is social networking software compatible with other Fediverse software such as Misskey, Pixelfed, Mastodon and many others. 

[ffsend](https://gitlab.com/timvisee/ffsend) is a easily and securely share files from the command line. A fully featured Firefox Send client. 

[Nostr(Notes and Other Stuff Transmitted by Relays)](https://github.com/nostr-protocol/nostr) is a truly censorship-resistant alternative to Twitter that has a chance of working.

[Diaspora](https://diasporafoundation.org/) is a privacy-aware, distributed, open source social network.

[Hubzilla](https://framagit.org/hubzilla/core) is a general purpose communication server integrated with a web publishing system and a decentralised permission system.

[Expanse](https://github.com/jc9108/expanse) is a fully selfhosted multi-user web app for externally storing Reddit items (saved, created, upvoted, downvoted, hidden) to bypass Reddit's 1000-item listing limits.

[giscus](https://giscus.app/) is a comments system powered by GitHub Discussions. Let visitors leave comments and reactions on your website via GitHub.

[Mailroute](https://mailroute.net/) is a great tool that provides the best email filtering & security( CMMC, NIST 800-171, DFARS, DISA, HIPPA). It protects your inbox, stop spam, viruses, ransomware, security threats & more with email filtering services. With an easy setup on Office 365, Google & more.

[Docker Mailserver](https://github.com/docker-mailserver/docker-mailserver) is a production-ready fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) running inside a container. Only configuration files, no SQL database. 

[Diun](https://github.com/crazy-max/diun) is a CLI application written in Go and delivered as a single executable (and a Docker image) to receive notifications when a Docker image is updated on a Docker registry.

[iRedMail](https://www.iredmail.org/) is a self-hosted email server.

[iRedMail Easy](https://www.iredmail.org/easy.html) is a web-based deployment platform, it offers an easy to use web interface to help you deploy iRedMail server, keep your server up to date, also get fast and professional technical support from iRedMail team.

[Spider Email Archiver](https://spiderd.io/) is  an On-Premises Email Archiving Software.

[MailCow](https://github.com/mailcow/mailcow-dockerized) is a self-hosted email server.

[Nextcloud Talk](https://nextcloud.com/talk/) is a on-premises, private audio/video conferencing and text chat through browser and mobile interfaces with integrated screen sharing and SIP integration.

[Poste.io Email Server](https://poste.io/) is self-hosted SMTP + IMAP + POP3 + Antispam + Antivirus Web administration + Web email. It is easy setup with a [DNS guide]((https://poste.io/doc/configuring-dns)) for protect from spam.

### Business Management

[Back to the Top](#table-of-contents)

[Nextcloud](http://nextcloud.com/) is a suite of enterprise client-server software for creating and using file hosting services. It offers an on-premise Universal File Access and sync platform with powerful collaboration capabilities and desktop, mobile and web interfaces. 

[Odoo](https://www.odoo.com/) is a suite of open source business apps that cover all your company needs: CRM, eCommerce, accounting, inventory, point of sale, project management, etc.

[Kanboard](https://kanboard.org/) is project management software that focuses on the Kanban methodology.

[Eden Workplace](https://www.edenworkplace.com/products) is a complete workplace management platform that lets you achieve more. Desk Booking Software to make desk reservations easier for your team, including assigning permanent and hybrid desks, providing wayfinding solutions for employees.

[Matomo](https://matomo.org/) is an ethical alternative where you won't make privacy sacrifices or compromise your site. Matomo is the Google Analytics alternative that protects your data and your customer's privacy. 

[Plausible Analytics](https://plausible.io/) is a simple, lightweight (< 1 KB), open-source and privacy-friendly alternative to Google Analytics. It doesn’t use cookies and is fully compliant with GDPR, CCPA and PECR. You can self-host Plausible or have us run it for you in the Cloud. 

[Mailroute](https://mailroute.net/) is a great tool that provides the best email filtering & security( CMMC, NIST 800-171, DFARS, DISA, HIPPA). It protects your inbox, stop spam, viruses, ransomware, security threats & more with email filtering services. With an easy setup on Office 365, Google & more.

[InvoicePlane](https://www.invoiceplane.com/) is a self-hosted open source application for managing your quotes, invoices, clients and payments.

### Collaboration & Synchronization

[Back to the Top](#table-of-contents)

[Syncthing](https://syncthing.net/) is a continuous file synchronization program. It synchronizes files between two or more computers in real time.

[Synology](https://www.synology.com/) is a tool that allows you to easily access and manage files in your Synology Drive on the go. Apart from common file types, such as documents, images, videos and music, you can also open Synology Office document, spreadsheets and slides in the user-friendly viewer provided by Drive.

[Nextcloud](http://nextcloud.com/) is a suite of client-server software for creating and using file hosting services. It offers an on-premise Universal File Access and sync platform with powerful collaboration capabilities and desktop, mobile and web interfaces. 

[Lsyncd (Live Syncing Mirror Daemon)](https://github.com/lsyncd/lsyncd) is a tool used in Linux systems to keep directories synchronized. These directories can be found locally, within the same machine, or remotely, on different machines. For remote synchronization, this article focuses on using SSH to accomplish it.

[FileRun](https://hub.docker.com/r/filerun/filerun) is a self-hosted Google Drive alternative. It is a full featured web based file manager with an easy to use user interface.

[FileBrowser](https://hub.docker.com/r/filebrowser/filebrowser) provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit your files. It allows the creation of multiple users and each user can have its own directory.

[Rsync](https://rsync.samba.org/) is a utility in the command line which enables users to transfer and synchronize files efficiently between a computer and an external hard drive in the entire connected network.

[Warpinator](https://github.com/linuxmint/warpinator) is a free, open-source tool for sending and receiving files between computers that are on the same network. 

[LocalSend](https://localsend.org/) is a free and open-source tool that allows you to send files and messages over the local LAN network to nearby devices. Everything is sent securely over HTTPS. The TLS/SSL certificate is generated on the fly on each device. It's avilable on Windows, macOS, Linux, iOS, and Android.

[FileZilla Client](https://filezilla-project.org/) is a fast and reliable cross-platform FTP, FTPS and SFTP client with lots of useful features and an intuitive graphical user interface. 

[Dragit](https://github.com/sireliah/dragit) is an application for intuitive file sharing between devices. It's useful for when you want to send file from one computer to another with minimal effort. Dragit automatically detects devices in the local network with help of mDNS protocol and allows you to send file immediately. 

[WinFsp](https://github.com/winfsp/winfsp) is a set of software components for Windows computers that allows the creation of user mode file systems. In this sense it is similar to FUSE (Filesystem in Userspace), which provides the same functionality on UNIX-like computers.

[SSHFS-Win](https://github.com/winfsp/sshfs-win) is a minimal port of SSHFS to Windows. Looking under the hood it uses Cygwin for the POSIX environment and WinFsp for the FUSE (Filesystem in Userspace) functionality.

[RiftShare](https://riftshare.app) is a cross platform (Windows, MacOS, Linux) file sharing tool that supports fully encrypted transfers both on the local network and off network using a simple passphrase. RiftShare uses [magic-wormhole](https://github.com/magic-wormhole/magic-wormhole) under the hood and is compatible with other magic-wormhole clients. It is also fully open source and licensed under the GPLv3. 

[Usermode FTP Server](https://gitlab.com/ergoithz/umftpd) is a tool that let's you start an FTP server as user and transfer files with any FTP client. Allowing you to access your files directly with many file browsers' builtin FTP support: Windows File Explorer, Thunar, Gnome Files, Dolphin and many more. 

[TagSpaces](https://www.tagspaces.org/) is a free, no vendor lock-in, open source application for organizing, annotating and managing local files with the help of tags. It features advanced note taking functionalities and some capabilities of to-do apps. It's available for Windows, Linux, Mac OS and Android. 

[Listmonk](https://listmonk.app/) is a standalone, self-hosted, newsletter and mailing list manager. It is fast, feature-rich, and packed into a single binary. 

### Encryption

[Back to the Top](#table-of-contents)

[VeraCrypt](https://www.veracrypt.fr/code/VeraCrypt/) is free open-source disk encryption software for Windows, Mac OS X and Linux. The file encryption, data encryption performed by VeraCrypt is real-time (on-the-fly), automatic, transparent, needs very little memory, and does not involve temporary unencrypted files.   
[AxCrypt](https://axcrypt.net/) is an inexpensive and effective encryption tool for Windows, macOS, iOS, and Android.

[AESCrypt](https://www.aescrypt.com/) is an advanced file encryption utility that integrates with the Windows shell or runs from the Linux command prompt to provide a simple, yet powerful, tool for encrypting files using the Advanced Encryption Standard (AES). It is available for Windows, MacOS, and Linux.

[Linux Unified Key Setup (LUKS)](https://www.redhat.com/sysadmin/disk-encryption-luks) is a disk encryption specification created by Clemens Fruhwirth in 2004 and was originally intended for Linux. It uses device mapper crypt ( dm-crypt) as a kernel module to handle encryption on the block device level.

[GNU Privacy Guard (GnuPG)](https://gnupg.org/) is a complete and free implementation of the OpenPGP standard as defined by RFC4880 (also known as PGP ). It allows you to encrypt and sign your data and communications; it features a versatile key management system, along with access modules for all kinds of public key directories.

[Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) is an encryption program that provides cryptographic privacy and authentication for data communication. It's used for signing, encrypting, and decrypting texts, e-mails, files, directories, and whole disk partitions and to increase the security of e-mail communications. 

[Deadbolt](https://github.com/alichtman/deadbolt) is a Dead-simple file encryption for any OS.

[Infisical](https://infisical.com/) is an open-source, end-to-end encrypted platform to sync secrets and configs across your team and infrastructure. 

[Hemmelig.app](https://github.com/HemmeligOrg/Hemmelig.app) is a tool that keeps your sensitive information out of chat logs, emails, and more with encrypted secrets. 

 **How Encryption Keys work**
 
 <p align="center">
<img src="https://user-images.githubusercontent.com/45159366/196625534-1cebcd35-7654-41cc-bbb2-33913a391a53.png">
  <br />
</p>
 
  * **Symmetric** is a data encryption method whereby the same private key is used to encode and decode information.
  
  * **Asymmetric** is a data encryption method that allows users to encrypt information using shared keys. For example, if you need to send a message across the internet, but you don't want anyone but the intended recipient to see what you've written.
 
 **Types of Encryption**
 
  * **Triple DES (Triple Data Encryption Algorithm)** is a symmetric-key block cipher, which applies the DES cipher algorithm three times to each data block(contains 64 bits of data).
  
  * **AES (Advanced Encryption Standard)** is an algorithm that encrypts and decrypts data in blocks of 128 bits. It can do this using 128-bit, 192-bit, or 256-bit keys.
  
  * **RSA (Rivest–Shamir–Adleman)** is a type of public-key cryptography used for secure data transmission of e-mail and other digital transactions over the Internet. 
  
   * **Twofish**  is a symmetric key block cipher with a block size of 128 bits and key sizes up to 256 bits. It is an advanced version of Blowfish encryption.
  
  * **Format Preserving Encryption (FPE)** is a valid encryption algorithm to be used for compliance with NIST standards. It is mostly used in on-premise encryption and tokenization solutions.
 
 **Application Level Encryption**
 
  * **Hashes** is a function that converts an input of letters and numbers into an encrypted output of a fixed length. For example, algorithms such as [MD5 (Message Digest 5)](https://en.wikipedia.org/wiki/MD5) or [SHA (Secure Hash Algorithm)](https://en.wikipedia.org/wiki/Secure_hash_algorithms).
  
  * **Digital Certificates** is a file that verifies the identity of a device or user and enables encrypted connections. A digital signature is a hashing approach that uses a numeric string to provide authenticity and validate identity. Digital certificates are typically issued by a **certificate authority (CA)**, which is a trusted third-party entity that issues digital certificates for use by other parties.

### Backups

[Back to the Top](#table-of-contents)

[Proxmox Backup Server](https://www.proxmox.com/en/proxmox-backup-server) is an enterprise backup solution for backing up and restoring VMs, containers, and physical hosts. The open-source solution supports incremental backups, deduplication, Zstandard compression, and authenticated encryption.

[BackupPC](https://github.com/backuppc/backuppc) is a high-performance, enterprise-grade system for backing up Linux, Windows and macOS PCs and laptops to a server's disk. BackupPC is highly configurable and easy to install and maintain.

[BorgWarehouse](https://borgwarehouse.com/) is a  fast and modern WebUI for a BorgBackup's central repository server.

[Emborg](https://emborg.readthedocs.io/en/latest/) is a simple command line utility to orchestrate backups. It is built as a front-end to Borg, a powerful and fast de-duplicating backup program. 

[Borgmatic](https://github.com/modem7/docker-borgmatic) is a simple, configuration-driven backup software for servers and workstations. It protects your files with client-side encryption. Backup your databases too. Monitor it all with integrated third-party services. 

[Vorta](https://vorta.borgbase.com/) is a backup client for macOS and Linux desktops. It integrates the mighty Borg Backup with your favorite desktop environment to protect your data from disk failure, ransomware and theft. 

[UrBackup](https://www.urbackup.org/) is an easy to setup Open Source client/server backup system, that through a combination of image and file backups accomplishes both data safety and a fast restoration time. File and image backups are made while the system is running without interrupting current processes. Available for Windows, macOS, and Linux. 

[Kopia](https://kopia.io/) is a user-friendly desktop app for Windows, macOS, and Linux which allows you to create snapshots, define policies, and restore files quickly with Fast and Encrypted Backups.

[Clonezilla](https://clonezilla.org/) is a partition and disk imaging/cloning program. It helps you to do system deployment, bare metal backup and recovery. Three types of Clonezilla are available, Clonezilla live, Clonezilla lite server, and Clonezilla