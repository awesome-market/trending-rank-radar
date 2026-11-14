# Awesome-Selfhosted

[![Awesome](_static/awesome.png)](https://github.com/sindresorhus/awesome) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/check-dead-links.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted-data/issues/1) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/check-unmaintained-projects.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted-data/issues/1) [![](https://img.shields.io/liberapay/goal/awesome-selfhosted.svg?logo=liberapay)](https://liberapay.com/awesome-selfhosted/)

Self-hosting is the practice of hosting and managing applications on your own server(s) instead of consuming from [SaaSS](https://www.gnu.org/philosophy/who-does-that-server-really-serve.html) providers.

This is a list of [Free](https://en.wikipedia.org/wiki/Free_software) Software [network services](https://en.wikipedia.org/wiki/Network_service) and [web applications](https://en.wikipedia.org/wiki/Web_application) which can be hosted on your own server(s). Non-Free software is listed on the [Non-Free](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/non-free.md) page.

**[HTML version](https://awesome-selfhosted.net/) (recommended)**, [Markdown version](https://github.com/awesome-selfhosted/awesome-selfhosted) (legacy).

See [Contributing](#contributing).

--------------------

## Table of contents

- [Software](#software)
  - [Analytics](#analytics)
  - [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)
  - [Automation](#automation)
  - [Backup](#backup)
  - [Blogging Platforms](#blogging-platforms)
  - [Booking and Scheduling](#booking-and-scheduling)
  - [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)
  - [Calendar & Contacts](#calendar--contacts)
  - [Communication - Custom Communication Systems](#communication---custom-communication-systems)
  - [Communication - Email - Complete Solutions](#communication---email---complete-solutions)
  - [Communication - Email - Mail Delivery Agents](#communication---email---mail-delivery-agents)
  - [Communication - Email - Mail Transfer Agents](#communication---email---mail-transfer-agents)
  - [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters)
  - [Communication - Email - Webmail Clients](#communication---email---webmail-clients)
  - [Communication - IRC](#communication---irc)
  - [Communication - SIP](#communication---sip)
  - [Communication - Social Networks and Forums](#communication---social-networks-and-forums)
  - [Communication - Video Conferencing](#communication---video-conferencing)
  - [Communication - XMPP - Servers](#communication---xmpp---servers)
  - [Communication - XMPP - Web Clients](#communication---xmpp---web-clients)
  - [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)
  - [Conference Management](#conference-management)
  - [Content Management Systems (CMS)](#content-management-systems-cms)
  - [Customer Relationship Management (CRM)](#customer-relationship-management-crm)
  - [Database Management](#database-management)
  - [DNS](#dns)
  - [Document Management](#document-management)
  - [Document Management - E-books](#document-management---e-books)
  - [Document Management - Institutional Repository and Digital Library Software](#document-management---institutional-repository-and-digital-library-software)
  - [Document Management - Integrated Library Systems (ILS)](#document-management---integrated-library-systems-ils)
  - [E-commerce](#e-commerce)
  - [Federated Identity & Authentication](#federated-identity--authentication)
  - [Feed Readers](#feed-readers)
  - [File Transfer & Synchronization](#file-transfer--synchronization)
  - [File Transfer - Distributed Filesystems](#file-transfer---distributed-filesystems)
  - [File Transfer - Object Storage & File Servers](#file-transfer---object-storage--file-servers)
  - [File Transfer - Peer-to-peer Filesharing](#file-transfer---peer-to-peer-filesharing)
  - [File Transfer - Single-click & Drag-n-drop Upload](#file-transfer---single-click--drag-n-drop-upload)
  - [File Transfer - Web-based File Managers](#file-transfer---web-based-file-managers)
  - [Games](#games)
  - [Games - Administrative Utilities & Control Panels](#games---administrative-utilities--control-panels)
  - [Genealogy](#genealogy)
  - [Generative Artificial Intelligence (GenAI)](#generative-artificial-intelligence-genai)
  - [Groupware](#groupware)
  - [Health and Fitness](#health-and-fitness)
  - [Human Resources Management (HRM)](#human-resources-management-hrm)
  - [Identity Management](#identity-management)
  - [Internet of Things (IoT)](#internet-of-things-iot)
  - [Inventory Management](#inventory-management)
  - [Knowledge Management Tools](#knowledge-management-tools)
  - [Learning and Courses](#learning-and-courses)
  - [Manufacturing](#manufacturing)
  - [Maps and Global Positioning System (GPS)](#maps-and-global-positioning-system-gps)
  - [Media Management](#media-management)
  - [Media Streaming](#media-streaming)
  - [Media Streaming - Audio Streaming](#media-streaming---audio-streaming)
  - [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming)
  - [Media Streaming - Video Streaming](#media-streaming---video-streaming)
  - [Miscellaneous](#miscellaneous)
  - [Money, Budgeting & Management](#money-budgeting--management)
  - [Monitoring & Status Pages](#monitoring--status-pages)
  - [Network Utilities](#network-utilities)
  - [Note-taking & Editors](#note-taking--editors)
  - [Office Suites](#office-suites)
  - [Password Managers](#password-managers)
  - [Pastebins](#pastebins)
  - [Personal Dashboards](#personal-dashboards)
  - [Photo Galleries](#photo-galleries)
  - [Polls and Events](#polls-and-events)
  - [Proxy](#proxy)
  - [Recipe Management](#recipe-management)
  - [Remote Access](#remote-access)
  - [Resource Planning](#resource-planning)
  - [Search Engines](#search-engines)
  - [Self-hosting Solutions](#self-hosting-solutions)
  - [Software Development](#software-development)
  - [Software Development - API Management](#software-development---api-management)
  - [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment)
  - [Software Development - FaaS & Serverless](#software-development---faas--serverless)
  - [Software Development - Feature Toggle](#software-development---feature-toggle)
  - [Software Development - IDE & Tools](#software-development---ide--tools)
  - [Software Development - Localization](#software-development---localization)
  - [Software Development - Low Code](#software-development---low-code)
  - [Software Development - Project Management](#software-development---project-management)
  - [Software Development - Testing](#software-development---testing)
  - [Static Site Generators](#static-site-generators)
  - [Task Management & To-do Lists](#task-management--to-do-lists)
  - [Ticketing](#ticketing)
  - [Time Tracking](#time-tracking)
  - [Travel Organization](#travel-organization)
  - [URL Shorteners](#url-shorteners)
  - [Video Surveillance](#video-surveillance)
  - [VPN](#vpn)
  - [Web Servers](#web-servers)
  - [Wikis](#wikis)
- [List of Licenses](#list-of-licenses)
- [Anti-features](#anti-features)
- [External Links](#external-links)
- [Contributing](#contributing)
- [License](#license)

--------------------

## Software

### Analytics

**[`^        back to top        ^`](#awesome-selfhosted)**

[Analytics](https://en.wikipedia.org/wiki/Analytics) is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data.

_Related: [Database Management](#database-management), [Personal Dashboards](#personal-dashboards)_

- [ANALOG](https://github.com/orangecoloured/analog) - Minimal analytics tool. Tracks events in a span of 10-30 days. `MIT` `Nodejs/Docker`
- [Aptabase](https://aptabase.com/) - Privacy first and simple analytics for mobile and desktop apps. ([Source Code](https://github.com/aptabase/aptabase)) `AGPL-3.0` `Docker`
- [AWStats](http://www.awstats.org/) - Generate statistics from web, streaming, ftp or mail server logfiles. ([Demo](https://www.awstats.org/#DEMO), [Source Code](https://github.com/eldy/awstats)) `GPL-3.0` `Perl`
- [Countly Community Edition](https://count.ly) - Real time mobile and web analytics, crash reporting and push notifications platform. ([Source Code](https://github.com/Countly/countly-server)) `AGPL-3.0` `Nodejs/Docker`
- [d8a.tech](https://d8a.tech) - Data collection service that works with your existing Google Analytics setup to capture user activity and send it straight to your own private database. ([Demo](https://lookerstudio.google.com/u/0/reporting/0e4102b6-c38b-4f55-aa25-c1fe91d1c1e9), [Source Code](https://github.com/d8a-tech/d8a)) `MIT` `Go/Docker`
- [Daily Stars Explorer](https://emanuelef.github.io/daily-stars-explorer) `⚠` - Track GitHub repo trends with daily star insights to see growth and community interest over time. ([Demo](https://emanuelef.github.io/daily-stars-explorer), [Source Code](https://github.com/emanuelef/daily-stars-explorer)) `MIT` `Go/Nodejs/Docker`
- [Dreeve](https://dreeve.app/) `⚠` - Statistics dashboard generated from Strava data. ([Demo](https://statistics-for-strava.robiningelbrecht.be/), [Source Code](https://github.com/dreeveapp/dreeve)) `AGPL-3.0` `Docker/K8S`
- [Druid](https://druid.apache.org) - Distributed, column-oriented, real-time analytics data store. ([Source Code](https://github.com/apache/druid)) `Apache-2.0` `Java/Docker`
- [EDA](https://github.com/jortilles/EDA) - Web application for data analysis and visualization. `AGPL-3.0` `Nodejs/Docker`
- [GoAccess](http://goaccess.io/) - Real-time web log analyzer and interactive viewer that runs in a terminal. ([Source Code](https://github.com/allinurl/goaccess)) `GPL-2.0` `C`
- [GoatCounter](https://www.goatcounter.com) - Easy web statistics without tracking of personal data. ([Source Code](https://github.com/arp242/goatcounter)) `EUPL-1.2` `Go`
- [HitKeep](https://hitkeep.com/) - Privacy-first web analytics with goals, funnels, ecommerce tracking, and team management in a single binary with embedded DuckDB (alternative to Google Analytics, Plausible, Umami). ([Source Code](https://github.com/HitKeep/hitkeep)) `MIT` `Go/Docker`
- [Litlyx](https://litlyx.com) - All-in-one Analytics Solution. Setup in 30 seconds. Display all your data on an AI-powered dashboard. Fully self-hostable and GDPR compliant. ([Source Code](https://github.com/Litlyx/litlyx)) `Apache-2.0` `Docker`
- [Liwan](https://liwan.dev/) - Privacy-first web analytics. ([Demo](https://demo.liwan.dev/p/liwan.dev), [Source Code](https://github.com/explodingcamera/liwan)) `Apache-2.0` `Rust/Docker`
- [Matomo](https://matomo.org/) - Web analytics that protects your data and your customers' privacy (alternative to Google Analytics). ([Source Code](https://github.com/matomo-org/matomo)) `GPL-3.0` `PHP`
- [Metabase](https://metabase.com/) - Easy way for everyone in your company to ask questions and learn from data. ([Source Code](https://github.com/metabase/metabase)) `AGPL-3.0` `Java/Docker`
- [Middleware](https://middlewarehq.com/) - Tool designed to help engineering leaders measure and analyze the effectiveness of their teams using the DORA metrics. ([Source Code](https://github.com/middlewarehq/middleware)) `Apache-2.0` `Docker/Python/Nodejs`
- [Netron](https://netron.app/) - Visualizer for neural network and machine learning models. ([Source Code](https://github.com/lutzroeder/netron)) `MIT` `Python/Nodejs`
- [Offen](https://www.offen.dev/) - Fair, lightweight and open web analytics tool. Gain insights while your users have full access to their data. ([Demo](https://www.offen.dev/try-demo/), [Source Code](https://github.com/offen/offen)) `Apache-2.0` `Go/Docker`
- [Plausible Analytics](https://plausible.io/) - Simple, lightweight (< 1 KB) and privacy-friendly web analytics. ([Source Code](https://github.com/plausible/analytics/)) `AGPL-3.0` `Elixir`
- [PostHog](https://posthog.com) - Product analytics, session recording, feature flagging and a/b testing that you can self-host (alternative to Mixpanel, Amplitude, Heap). ([Source Code](https://github.com/posthog/posthog)) `MIT` `Python`
- [Postiz](https://postiz.com) `⚠` - Schedule posts, track the performance of your content, and manage all your social media accounts in one place (alternative to Buffer, Hootsuite, Sprout Social). ([Source Code](https://github.com/gitroomhq/postiz-app)) `AGPL-3.0` `Docker`
- [Prisme Analytics](https://www.prismeanalytics.com) - Privacy-focused and progressive analytics service based on Grafana. ([Source Code](https://github.com/prismelabs/analytics)) `AGPL-3.0/MIT` `Docker`
- [Redash](http://redash.io) - Connect and query your data sources, build dashboards to visualize data and share them with your company. ([Source Code](https://github.com/getredash/redash)) `BSD-2-Clause` `Docker`
- [Rybbit](https://rybbit.com/) - Web and products analytics that is easy to setup and more intuitive (alternative to Google Analytics). ([Demo](https://demo.rybbit.com/1), [Source Code](https://github.com/rybbit-io/rybbit)) `AGPL-3.0` `Docker`
- [Shaper](https://taleshape.com/shaper/docs) - Build Data Dashboards all in SQL. Powered by DuckDB. ([Demo](https://demo.taleshape.com/view/pvggvdpiwb9wlyppuqbyx0nt), [Source Code](https://github.com/taleshape-com/shaper)) `MPL-2.0` `Docker/Nodejs/Python/Go`
- [Socioboard](https://github.com/Socioboard-developers/Socioboard-5.0) `⚠` - Social media management, analytics, and reporting platform supporting nine social media networks out-of-the-box. `GPL-3.0` `Nodejs`
- [Superset](http://superset.apache.org/) - Modern data exploration and visualization platform. ([Source Code](https://github.com/apache/superset)) `Apache-2.0` `Python`
- [Swetrix](https://swetrix.com/) - Web analytics which track your site's traffic, monitor your site's speed, analyse user sessions and pageflows, see the user flows and more (alternative to Google Analytics). ([Demo](https://swetrix.com/projects/STEzHcB1rALV), [Source Code](https://github.com/Swetrix/selfhosting)) `AGPL-3.0` `Docker`
- [Umami](https://umami.is/) - Simple, fast, privacy-focused (alternative to Google Analytics). ([Demo](https://cloud.umami.is/share/LGazGOecbDtaIwDr), [Source Code](https://github.com/umami-software/umami)) `MIT` `Nodejs/Docker`


### Archiving and Digital Preservation (DP)

**[`^        back to top        ^`](#awesome-selfhosted)**

Digital [archiving](https://en.wikipedia.org/wiki/Archival_science) and [preservation](https://en.wikipedia.org/wiki/Digital_preservation) software.

_Related: [Backup](#backup), [Content Management Systems (CMS)](#content-management-systems-cms)_

_See also: [awesome-web-archiving](https://github.com/iipc/awesome-web-archiving)_

- [ArchiveBox](https://archivebox.io/) - Create HTML & screenshot archives of sites from your bookmarks, browsing history, RSS feeds, or other sources (alternative to Wayback Machine). ([Source Code](https://github.com/ArchiveBox/ArchiveBox)) `MIT` `Python/Docker`
- [ArchivesSpace](https://archivesspace.org/) - Archives information management application for managing and providing Web access to archives, manuscripts and digital objects. ([Demo](https://archivesspace.org/application/sandbox), [Source Code](https://github.com/archivesspace/archivesspace)) `ECL-2.0` `Ruby`
- [Bichon](https://github.com/rustmailer/bichon) - Email archiving server that syncs from IMAP accounts, indexes emails for full-text search, and provides a REST API. No external database required, includes WebUI with multi-account support. `AGPL-3.0` `Rust/Docker`
- [bitmagnet](https://bitmagnet.io) - BitTorrent indexer, DHT crawler, content classifier and torrent search engine with web UI, GraphQL API and Servarr stack integration. ([Source Code](https://github.com/bitmagnet-io/bitmagnet)) `MIT` `Go/Docker`
- [CKAN](https://ckan.org) - Make open data websites. ([Source Code](https://github.com/ckan/ckan)) `AGPL-3.0` `Python`
- [Collective Access - Providence](https://collectiveaccess.org/) - Highly configurable Web-based framework for management, description, and discovery of digital and physical collections supporting a variety of metadata standards, data types, and media formats. ([Source Code](https://github.com/collectiveaccess/providence)) `GPL-3.0` `PHP`
- [Eonvelope](https://dacid99.gitlab.io/eonvelope) - Email archiving software that allows you to preserve your emails for an indefinite long period of time. ([Source Code](https://gitlab.com/dacid99/eonvelope)) `AGPL-3.0` `K8S/Docker`
- [Ganymede](https://github.com/Zibbp/ganymede) `⚠` - Twitch VOD and live stream archiving platform. Includes a rendered chat for each archive. `GPL-3.0` `Docker`
- [mail-archiver](https://github.com/s1t5/mail-archiver) - Web application for archiving, searching, and exporting emails from multiple accounts (IMAP, M365 or Import). Featuring folder sync, attachment support, mailbox migration and a dashboard. `GPL-3.0` `Docker`
- [Omeka S](https://omeka.org/s/) - Next-generation web publishing platform for institutions interested in connecting digital cultural heritage collections with other resources online. ([Source Code](https://github.com/omeka/omeka-s)) `GPL-3.0` `Nodejs`
- [Open Archiver](https://openarchiver.com/) - Email archiving solution with full-text search and eDiscovery search features. ([Demo](https://github.com/LogicLabs-OU/OpenArchiver?tab=readme-ov-file#-live-demo), [Source Code](https://github.com/LogicLabs-OU/OpenArchiver)) `AGPL-3.0` `Docker`
- [Piler](https://www.mailpiler.org/) - Feature-rich email archiving solution. ([Source Code](https://github.com/jsuto/piler/)) `GPL-3.0` `C/Docker/deb`
- [Wallabag](https://www.wallabag.org) - Web application, formerly Poche, allowing you to save articles to read them later with improved readability. ([Source Code](https://github.com/wallabag/wallabag)) `MIT` `PHP`
- [Wayback](https://github.com/wabarc/wayback) - Toolkit for archiving webpages to the Internet Archive, archive.today, IPFS, and local file systems. `GPL-3.0` `Go`


### Automation

**[`^        back to top        ^`](#awesome-selfhosted)**

[Automation](https://en.wikipedia.org/wiki/Automation) software designed to reduce human intervention in processes.

_Related: [Internet of Things (IoT)](#internet-of-things-iot), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment), [Media Management](#media-management)_

- [Activepieces](https://www.activepieces.com) - No-code business automation tool like Zapier or Tray. For example, you can send a Slack notification for each new Trello card. ([Source Code](https://github.com/activepieces/activepieces)) `MIT` `Docker`
- [Apache Airflow](https://airflow.apache.org/) - Platform to programmatically author, schedule, and monitor workflows. ([Source Code](https://github.com/apache/airflow/)) `Apache-2.0` `Python/Docker`
- [Automatisch](https://automatisch.io) - Business automation tool that lets you connect different services like Twitter, Slack, and more to automate your business processes (alternative to Zapier). ([Source Code](https://github.com/automatisch/automatisch)) `AGPL-3.0` `Docker`
- [BookBounty](https://github.com/TheWicklowWolf/BookBounty) `⚠` - Retrieve missing Readarr books from Library Genesis. `MPL-2.0` `Docker`
- [changedetection.io](https://changedetection.io/) - Stay up-to-date with web-site content changes. ([Source Code](https://github.com/dgtlmoon/changedetection.io)) `Apache-2.0` `Python/Docker`
- [ChiefOnboarding](https://chiefonboarding.com) - Employee onboarding platform that allows you to provision user accounts and create sequences with todo items, resources, text/email/Slack messages, and more! Available as a web portal and Slack bot. ([Source Code](https://github.com/chiefonboarding/ChiefOnboarding)) `AGPL-3.0` `Docker`
- [Cronicle](https://cronicle.net/) - Simple, distributed task scheduler and runner with a web based UI. ([Source Code](https://github.com/jhuckaby/Cronicle)) `MIT` `Nodejs`
- [Cronmaster](https://github.com/fccview/cronmaster) - Cronjob management UI with human readable syntax, live logging and log history for your cronjobs. `AGPL-3.0` `Docker`
- [Dagu](https://docs.dagu.cloud/) - Powerful Cron alternative with a Web UI. It allows you to define dependencies between commands as a Directed Acyclic Graph (DAG) in a declarative YAML format. ([Source Code](https://github.com/dagucloud/dagu)) `GPL-3.0` `Go/Docker`
- [Discount Bandit](https://discount-bandit.cybrarist.com/) `⚠` - Track pricing, stock status of products across multiple stores such as Amazon, Ebay, Walmart, etc. ([Source Code](https://github.com/Cybrarist/Discount-Bandit)) `GPL-3.0` `PHP/Docker`
- [Dittofeed](https://www.dittofeed.com) - Omni-channel customer engagement and messaging automation platform (alternative to Braze, Customer.io, Iterable). ([Demo](https://demo.dittofeed.com/dashboard/journeys), [Source Code](https://github.com/dittofeed/dittofeed)) `MIT` `Docker`
- [flowctl](https://flowctl.net) - Self-service workflow execution platform with approvals, remote execution and scheduling. ([Demo](https://demo.flowctl.net), [Source Code](https://github.com/cvhariharan/flowctl)) `Apache-2.0` `Go/Docker`
- [Fredy](https://fredy.orange-coding.net/) `⚠` - Searches for new apartments, houses, and flats in Germany on platforms like ImmoScout24, Immowelt, and others, and instantly delivers the results to you via Slack, Telegram, and more. ([Demo](https://fredy-demo.orange-coding.net), [Source Code](https://github.com/orangecoding/fredy)) `Apache-2.0` `Nodejs/Docker`
- [gocron](https://github.com/flohoss/gocron) - Task scheduler that allows users to specify recurring jobs via a simple YAML configuration file. `MIT` `Docker`
- [HandBrake Web](https://github.com/TheNickOfTime/handbrake-web) - Use one or more instances of HandBrake video transcoder on a headless device via a web interface. `AGPL-3.0` `Docker`
- [Healthchecks](https://healthchecks.io/) - Listen for pings and sends alerts when pings are late. ([Source Code](https://github.com/healthchecks/healthchecks)) `BSD-3-Clause` `Python/Docker`
- [Huginn](https://github.com/huginn/huginn) - Build agents that monitor and act on your behalf. `MIT` `Ruby`
- [Kestra](https://kestra.io) - Event-driven, language-agnostic platform to create, schedule, and monitor workflows. In code. Coordinate data pipelines and tasks such as ETL and ELT. ([Source Code](https://github.com/kestra-io/kestra)) `Apache-2.0` `Docker`
- [Kibitzr](https://kibitzr.github.io) - Lightweight personal web assistant with powerful integrations. ([Source Code](https://github.com/kibitzr/kibitzr)) `MIT` `Python`
- [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) `⚠` - Follow authors and grab metadata for all your digital reading needs. It uses a combination of Goodreads, Librarything and optionally GoogleBooks as sources for author info and book info. `GPL-3.0` `Python`
- [Leon](https://getleon.ai) - Personal assistant who can live on your server. ([Source Code](https://github.com/leon-ai/leon)) `MIT` `Nodejs`
- [Matchering](https://github.com/sergree/matchering) - Automated music mastering (alternative to LANDR, eMastered and MajorDecibel). `GPL-3.0` `Docker`
- [Mylar3](https://mylar.nerdfirehurricane.com/) - Automated Comic Book (cbr/cbz) downloader program for use with NZB and torrents. ([Source Code](https://github.com/MylarComics/mylar3)) `GPL-3.0` `Python/Docker`
- [OliveTin](https://www.olivetin.app/) - Web interface for running Linux shell commands. ([Source Code](https://github.com/OliveTin/OliveTin)) `AGPL-3.0` `Go`
- [pyLoad](https://pyload.net/) - Lightweight, customizable and remotely manageable downloader for 1-click-hosting sites like rapidshare.com or uploaded.to. ([Source Code](https://github.com/pyload/pyload)) `AGPL-3.0` `Python`
- [StackStorm](https://stackstorm.com) - StackStorm (aka IFTTT for Ops) is event-driven automation for auto-remediation, security responses, troubleshooting, deployments, and more. Includes rules engine, workflow, 160 integration packs with 6000+ actions and ChatOps. ([Source Code](https://github.com/StackStorm/st2)) `Apache-2.0` `Python`
- [µTask](https://github.com/ovh/utask) - Automation engine that models and executes business processes declared in yaml. `BSD-3-Clause` `Go/Docker`


### Backup

**[`^        back to top        ^`](#awesome-selfhosted)**

[Backup](https://en.wikipedia.org/wiki/Backup) software.

**Please visit [awesome-sysadmin/Backups](https://github.com/awesome-foss/awesome-sysadmin#backups)**

_Related: [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)_



### Blogging Platforms

**[`^        back to top        ^`](#awesome-selfhosted)**

A [blog](https://en.wikipedia.org/wiki/Blog) is a discussion or informational website consisting of discrete, diary-style text entries (posts).

_Related: [Static Site Generators](#static-site-generators), [Content Management Systems (CMS)](#content-management-systems-cms)_

_See also: [WeblogMatrix](https://www.weblogmatrix.org/)_

- [Antville](https://antville.org) - Feature-rich blog hosting software which can host tens of thousands of blogs. ([Source Code](https://github.com/antville/antville)) `Apache-2.0` `Javascript`
- [bloglite](https://github.com/rikhuijzer/bloglite) - Micro-blog tool offering built-in syntax highlighting, mobile publishing and more (alternative to Twitter, Bluesky). `MIT` `Docker`
- [Chyrp Lite](https://chyrplite.net) - Extra-awesome, extra-lightweight blog engine. ([Source Code](https://github.com/xenocrat/chyrp-lite)) `BSD-3-Clause` `PHP`
- [Dotclear](https://git.dotclear.org/dev/dotclear) - Take control over your blog. `GPL-2.0` `PHP`
- [Ech0](https://ech0.app/) - Lightweight federated publishing platform focused on personal idea sharing (documentation in Chinese). ([Demo](https://memo.vaaat.com/), [Source Code](https://github.com/lin-snow/Ech0)) `AGPL-3.0` `Docker/K8S`
- [FlatPress](https://flatpress.org/) - Lightweight, easy-to-set-up flat-file blogging engine. ([Source Code](https://github.com/flatpressblog/flatpress)) `GPL-2.0` `PHP`
- [Ghost](https://ghost.org/) - Just a blogging platform. ([Source Code](https://github.com/TryGhost/Ghost)) `MIT` `Nodejs`
- [Haven](https://havenweb.org/) - Private blogging system with markdown editing and built in RSS reader. ([Demo](https://havenweb.org/demo.html), [Source Code](https://github.com/havenweb/haven)) `MIT` `Ruby`
- [HTMLy](https://www.htmly.com/) - Databaseless PHP blogging platform. A flat-file CMS that allows you to create a fast, secure, and powerful website or blog in seconds. ([Demo](http://demo.htmly.com/), [Source Code](https://github.com/danpros/htmly)) `GPL-2.0` `PHP`
- [Known](https://withknown.com/) - Collaborative social publishing platform. ([Source Code](https://github.com/idno/idno)) `Apache-2.0` `PHP`
- [Mataroa](https://mataroa.blog/) - Naked blogging platform for minimalists. ([Source Code](https://github.com/mataroablog/mataroa)) `MIT` `Python`
- [PluXml](https://pluxml.org) - XML-based blog/CMS platform. ([Source Code](https://github.com/pluxml/PluXml)) `GPL-3.0` `PHP`
- [Serendipity](https://docs.s9y.org/) - Highly extensible and customizable PHP blog engine using Smarty templating (s9y). ([Source Code](https://github.com/s9y/serendipity)) `BSD-3-Clause` `PHP`
- [WriteFreely](https://writefreely.org) - Writing software for starting a minimalist, federated blog — or an entire community. ([Source Code](https://github.com/writefreely/writefreely)) `AGPL-3.0` `Go`


### Booking and Scheduling

**[`^        back to top        ^`](#awesome-selfhosted)**

Event scheduling, reservation, and appointment management software.

_Related: [Polls and Events](#polls-and-events), [Groupware](#groupware)_

- [Alf.io](https://alf.io/) - Ticket reservation system. ([Demo](https://demo.alf.io/authentication), [Source Code](https://github.com/alfio-event/alf.io)) `GPL-3.0` `Java`
- [Cal.diy](https://cal.diy/) - Online appointment scheduling system. ([Source Code](https://github.com/calcom/cal.diy)) `MIT` `Nodejs`
- [Chobble Tickets](https://tickets.chobble.com) - Event ticketing with QR check-in and encrypted attendee records. The complete product is AGPL-3.0 with no open core and no branding requirement, and it runs as an edge script without an always-on server (alternative to Eventbrite). ([Demo](https://tickets.crumpsallfolkclub.co.uk), [Source Code](https://github.com/chobbledotcom/tickets)) `AGPL-3.0` `Deno/Docker`
- [Easy!Appointments](https://easyappointments.org/) - Allows your customers to book appointments with you via the web. ([Demo](https://demo.easyappointments.org/), [Source Code](https://github.com/alextselegidis/easyappointments)) `GPL-3.0` `PHP`
- [Hi.Events](https://hi.events) - Event management and ticketing platform for conferences, concerts, and more. Offering customizable event pages and embeddable ticket widgets. ([Demo](https://demo.hi.events/event/1/dog-conf-2030), [Source Code](https://github.com/HiEventsDev/hi.events)) `AGPL-3.0` `Docker`
- [LibreBooking](https://librebooking.readthedocs.io/) - Resource scheduling solution offering a flexible, mobile-friendly, and extensible interface for organizations to manage resource reservations. ([Demo](https://librebooking-demo.fly.dev/), [Source Code](https://github.com/LibreBooking/librebooking)) `GPL-3.0` `PHP/Docker`
- [QloApps](https://qloapps.com/) - Customizable and intuitive web-based hotel reservation system and a booking engine. ([Demo](https://demo.qloapps.com/), [Source Code](https://github.com/Qloapps/QloApps)) `OSL-3.0` `PHP/Nodejs`
- [Rallly](https://rallly.co) - Create polls to vote on dates and times (alternative to Doodle). ([Demo](https://app.rallly.co), [Source Code](https://github.com/lukevella/rallly)) `AGPL-3.0` `Nodejs/Docker`
- [Seatsurfing](https://seatsurfing.app/) - Webbased app to book seats, desks and rooms for offices. ([Source Code](https://github.com/seatsurfing/seatsurfing)) `GPL-3.0` `Docker`


### Bookmarks and Link Sharing

**[`^        back to top        ^`](#awesome-selfhosted)**

Software which allows users to add, annotate, edit, and share [bookmarks](https://en.wikipedia.org/wiki/Bookmark_(digital)) of web documents.

_Related: [Personal Dashboards](#personal-dashboards)_

- [Betula](https://joinbetula.org) - Single-user federated bookmark manager with Fediverse support and archives. ([Source Code](https://codeberg.org/bouncepaw/betula)) `AGPL-3.0` `Go`
- [Buku](https://github.com/jarun/Buku) - Powerful bookmark manager and a personal textual mini-web. `GPL-3.0` `Python/deb`
- [Digibunch](https://ladigitale.dev/digibunch/#/) - Create bunches of links to share with your learners or colleagues. ([Demo](https://ladigitale.dev/digibunch/#/b/5f67b12092b60), [Source Code](https://codeberg.org/ladigitale/digibunch)) `AGPL-3.0` `Nodejs/PHP`
- [Espial](https://github.com/jonschoning/espial) - Web-based bookmarking server that supports multiple user accounts. `AGPL-3.0` `Haskell`
- [Faved](https://faved.to/) - Handcrafted bookmark manager combining powerful tagging, instant search, and a clean, distraction-free interface. Built for large collections and advanced workflows, optimized for efficiency and ease-of-use. ([Demo](https://demo.faved.to/), [Source Code](https://github.com/denho/faved)) `MIT` `Docker`
- [Firefox Account Server](https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html) - Host your own Firefox accounts server. ([Source Code](https://github.com/mozilla/fxa)) `MPL-2.0` `Nodejs/Java`
- [Karakeep](https://karakeep.app/) - Bookmark-everything app with a touch of AI for the data hoarders out there. ([Demo](https://try.karakeep.app/signin), [Source Code](https://github.com/karakeep-app/karakeep)) `AGPL-3.0` `Docker`
- [LinkAce](https://www.linkace.org/) - Bookmark archive with automatic backups to the Internet Archive, link monitoring, and a full REST API. Installation is done via Docker, or as a simple PHP application. ([Demo](https://demo.linkace.org/guest/links), [Source Code](https://github.com/Kovah/LinkAce/)) `GPL-3.0` `Docker/PHP`
- [linkding](https://linkding.link/) - Minimal bookmark management with a fast and clean UI. Simple installation through Docker and can run on your Raspberry Pi. ([Demo](https://demo.linkding.link/login/), [Source Code](https://github.com/sissbruecker/linkding)) `MIT` `Docker`
- [LinkWarden](https://linkwarden.app/) - Bookmark and archive manager to store your useful links. ([Source Code](https://github.com/linkwarden/linkwarden)) `MIT` `Docker/Nodejs`
- [NeonLink](https://github.com/AlexSciFier/neonlink) - Bookmark service with unique design and simple installation with Docker. `MIT` `Docker`
- [Readeck](https://readeck.org/en/) - Save the precious readable content of web pages you like and want to keep forever. See it as a bookmark manager and a read later tool. ([Source Code](https://codeberg.org/readeck/readeck), [Clients](https://codeberg.org/readeck/browser-extension)) `AGPL-3.0` `Go/Docker`
- [Servas](https://github.com/beromir/Servas) - Bookmark management tool. It allows organization with tags, groups, and a list specifically for later access. It supports multiple users with 2FA. Companion browser extensions are available for Firefox and Chrome. ([Clients](https://github.com/beromir/Servas#browser-extensions)) `GPL-3.0` `Docker/Nodejs/PHP`
- [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, no-database bookmarking and link sharing platform. ([Demo](https://demo.shaarli.org)) `Zlib` `PHP/deb`
- [Shiori](https://github.com/go-shiori/shiori) - Simple bookmark manager built with Go. `MIT` `Go/Docker`
- [Slash](https://github.com/yourselfhosted/slash) - Bookmarks and link sharing platform. `GPL-3.0` `Docker`
- [SyncMarks](https://codeberg.org/Offerel/SyncMarks-Webapp) - Sync and manage your browser bookmarks from Edge, Firefox and Chromium. ([Clients](https://codeberg.org/Offerel/SyncMarks-Extension)) `AGPL-3.0` `PHP`


### Calendar & Contacts

**[`^        back to top        ^`](#awesome-selfhosted)**

[CalDAV](https://en.wikipedia.org/wiki/CalDAV) and [CardDAV](https://en.wikipedia.org/wiki/CardDAV) protocol servers and web clients/interfaces for [Electronic calendar](https://en.wikipedia.org/wiki/Calendaring_software), [address book](https://en.wikipedia.org/wiki/Address_book) and [contact management](https://en.wikipedia.org/wiki/Contact_manager).

_Related: [Groupware](#groupware)_

- [Baïkal](https://sabre.io/baikal/) - Lightweight CalDAV and CardDAV server based on sabre/dav. ([Source Code](https://github.com/sabre-io/Baikal)) `GPL-3.0` `PHP`
- [DAViCal](https://www.davical.org/) - Server for calendar sharing (CalDAV) that uses a PostgreSQL database as a data store. ([Source Code](https://gitlab.com/davical-project/davical)) `GPL-2.0` `PHP/deb`
- [Davis](https://github.com/tchapi/davis) - Simple, dockerizable and fully translatable admin interface for sabre/dav based on Symfony 5 and Bootstrap 4, largely inspired by Baïkal. `MIT` `PHP`
- [Keeper.sh](https://keeper.sh/) - Calendar syncing tool that pulls and pushes events between calendar sources and destinations via iCal/ICS or OAuth, with support for anonymized busy/free events. ([Source Code](https://github.com/ridafkih/keeper.sh)) `AGPL-3.0` `Docker`
- [Manage My Damn Life](https://intri.in/manage-my-damn-life/) - Manage my Damn Life (MMDL) is a front end for managing your CalDAV tasks and calendars. ([Source Code](https://github.com/intri-in/manage-my-damn-life-nextjs)) `GPL-3.0` `Nodejs/Docker`
- [Radicale](https://radicale.org/) - Simple calendar and contact server with extremely low administrative overhead. ([Source Code](https://github.com/Kozea/Radicale)) `GPL-3.0` `Python/deb`
- [SabreDAV](https://sabre.io/) - CardDAV, CalDAV, and WebDAV framework and server. ([Source Code](https://github.com/sabre-io/dav)) `MIT` `PHP`
- [Xandikos](https://github.com/jelmer/xandikos) - CardDAV and CalDAV server with minimal administrative overhead, backed by a Git repository. `GPL-3.0` `Python/deb`


### Communication - Custom Communication Systems

**[`^        back to top        ^`](#awesome-selfhosted)**

[Communication software](https://en.wikipedia.org/wiki/Communication_software) used to provide remote access to systems and exchange files and messages in text, audio and/or video formats between different computers or users, using their own custom protocols.

- [AnyCable](https://anycable.io/) - Realtime server for reliable two-way communication over WebSockets, Server-sent events, etc. ([Demo](https://demo.anycable.io), [Source Code](https://github.com/anycable/anycable)) `MIT` `Go/Docker`
- [Apprise](https://github.com/caronc/apprise) - Apprise allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc. `MIT` `Python/Docker/deb`
- [Centrifugo](https://centrifugal.dev/) - Language-agnostic real-time messaging (Websocket or SockJS) server. ([Demo](https://github.com/centrifugal/centrifugo#demo), [Source Code](https://github.com/centrifugal/centrifugo)) `MIT` `Go/Docker/K8S`
- [Chitchatter](https://chitchatter.im/) - Peer-to-peer chat app that is serverless, decentralized, and ephemeral. ([Source Code](https://github.com/jeremyckahn/chitchatter)) `GPL-2.0` `Nodejs`
- [Conduit](https://conduit.rs/) - Simple, fast, and reliable chat server powered by Matrix. ([Source Code](https://gitlab.com/famedly/conduit)) `Apache-2.0` `Rust`
- [Continuwuity](https://continuwuity.org/) - Community-driven Matrix homeserver, the continuation of conduwuit focusing on user experience and new features (fork of Conduit). ([Source Code](https://forgejo.ellis.link/continuwuation/continuwuity)) `Apache-2.0` `Rust/Docker/K8S/deb`
- [Databag](https://github.com/balzack/databag) - Federated, end-to-end encrypted messaging service for the web, iOS, and Android, supporting text, photos, video, and WebRTC video and audio calls. `Apache-2.0` `Docker`
- [Element](https://element.io) - Fully-featured Matrix client for Web, iOS & Android. ([Source Code](https://github.com/element-hq/element-web)) `Apache-2.0` `Nodejs`
- [Fluxer](https://fluxer.app) - Instant messaging and VoIP platform built for friends, groups, and communities (alternative to Discord). ([Demo](https://fluxer.app), [Source Code](https://github.com/fluxerapp/fluxer), [Clients](https://github.com/awesome-fluxer/awesome-fluxer)) `AGPL-3.0` `Docker`
- [GlobaLeaks](https://www.globaleaks.org/) - Whistleblowing software enabling anyone to easily set up and maintain a secure reporting platform. ([Demo](https://demo.globaleaks.org), [Source Code](https://github.com/globaleaks/globaleaks-whistleblowing-software)) `AGPL-3.0` `Python/deb/Docker`
- [GNUnet](https://gnunet.org/) - Software framework for decentralized, peer-to-peer networking. ([Source Code](https://gnunet.org/git/)) `GPL-3.0` `C`
- [Gotify](https://gotify.net/) - Notification server with Android and CLI clients (alternative to PushBullet). ([Source Code](https://github.com/gotify/server), [Clients](https://github.com/gotify/android)) `MIT` `Go/Docker`
- [Hyphanet](https://hyphanet.org/) - Anonymously share files, browse and publish freesites (web sites accessible only through Hyphanet) and chat on forums. ([Source Code](https://github.com/hyphanet/fred)) `GPL-2.0` `Java`
- [Jami](https://jami.net/) - Universal communication platform which preserves the user's privacy and freedoms. ([Source Code](https://git.jami.net/savoirfairelinux?sort=latest_activity_desc&filter=jami)) `GPL-3.0` `C++`
- [Live Helper Chat](https://livehelperchat.com/) - Live Support chat for your website. ([Source Code](https://github.com/LiveHelperChat/livehelperchat)) `Apache-2.0` `PHP`
- [Mumble](https://wiki.mumble.info/wiki/Main_Page) - Low-latency, high quality voice/text chat software. ([Source Code](https://github.com/mumble-voip/mumble), [Clients](https://wiki.mumble.info/wiki/3rd_Party_Applications)) `BSD-3-Clause` `C++/deb`
- [Notifo](https://github.com/notifo-io/notifo) - Multichannel notification server with support for Email, Mobile Push, Web Push, SMS, messaging and a javascript plugin. `MIT` `C#`
- [Novu](https://novu.co/) - Notification infrastructure for developers. ([Source Code](https://github.com/novuhq/novu/)) `MIT` `Docker/Nodejs`
- [ntfy](https://ntfy.sh/) - Push notifications to phone or desktop using HTTP PUT/POST, with Android app, CLI and web app, similar to Pushover and Gotify. ([Demo](https://ntfy.sh/app), [Source Code](https://github.com/binwiederhier/ntfy), [Clients](https://github.com/binwiederhier/ntfy-android)) `Apache-2.0/GPL-2.0` `Go/Docker/K8S`
- [One Time Secret](https://docs.onetimesecret.com) - Share sensitive information securely with self-destructing links that are only viewable once. ([Demo](https://onetimesecret.com), [Source Code](https://github.com/onetimesecret/onetimesecret)) `MIT` `Docker/Ruby/Nodejs`
- [OpenWA](https://www.open-wa.org) `⚠` - WhatsApp API gateway exposing messaging as REST endpoints, with a web dashboard, multi-account sessions, and webhook events (alternative to WhatsApp Business API providers). ([Source Code](https://github.com/rmyndharis/OpenWA), [Clients](https://github.com/rmyndharis/OpenWA-plugins)) `MIT` `Docker`
- [OTS](https://ots.fyi/) - One-Time-Secret sharing platform with a symmetric 256bit AES encryption in the browser. ([Source Code](https://github.com/Luzifer/ots)) `Apache-2.0` `Go`
- [PushBits](https://github.com/pushbits/server) - Notification server for relaying push notifications via Matrix, similar to PushBullet and Gotify. `ISC` `Go`
- [RetroShare](https://retroshare.cc) - Secured and decentralized communication system. Offers decentralized chat, forums, messaging, file transfer. ([Source Code](https://github.com/RetroShare/RetroShare)) `GPL-2.0` `C++`
- [Rocket.Chat](https://rocket.chat/) - Communications platform that puts data protection first (alternative to Gitter.im and Slack). ([Source Code](https://github.com/RocketChat/Rocket.Chat)) `MIT` `Nodejs/Docker/K8S`
- [SAMA](https://samacloud.io) - Next-Gen self-hosted chat server and clients. ([Demo](https://app.samacloud.io/demo), [Source Code](https://github.com/SAMA-Communications/sama-server), [Clients](https://github.com/SAMA-Communications/sama-client)) `GPL-3.0` `Nodejs/Docker`
- [Screego](https://screego.net) - Simple tool to quickly share your screen to one or multiple people via web browser. ([Demo](https://app.screego.net/), [Source Code](https://github.com/screego/server)) `GPL-3.0` `Docker/Go`
- [Shhh](https://github.com/smallwat3r/shhh) - Keep secrets out of emails or chat logs, share them using secure links with passphrase and expiration dates. `MIT` `Python`
- [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) - Most private and secure chat and applications platform - now with double ratchet E2E encryption. `AGPL-3.0` `Haskell`
- [Spectrum 2](https://spectrum.im/) - Instant messaging transport. It allows users to chat together even when they are using different IM networks. ([Source Code](https://github.com/SpectrumIM/spectrum2)) `GPL-3.0` `C++`
- [Stoat](https://stoat.chat/) - User-first chat platform built with modern web technologies. ([Source Code](https://github.com/stoatchat/self-hosted)) `AGPL-3.0/MIT` `Rust`
- [Synapse](https://element-hq.github.io/synapse/latest/index.html) - Server for Matrix, an open standard for decentralized persistent communication. ([Source Code](https://github.com/element-hq/synapse)) `Apache-2.0` `Python/deb`
- [Tiledesk](https://tiledesk.com) - All-in-one customer engagement platform from lead-gen to post-sales, from WhatsApp to your website. With omni-channel live agents and AI-powered chatbots (alternative to Intercom, Zendesk, Tawk.to). ([Source Code](https://github.com/Tiledesk/tiledesk)) `MIT` `Docker/K8S`
- [Tinode](https://github.com/tinode) - Instant messaging platform. Backend in Go. Clients: Swift iOS, Java Android, JS webapp, scriptable command line; chatbots. ([Demo](https://sandbox.tinode.co/), [Source Code](https://github.com/tinode/chat), [Clients](https://github.com/tinode/webapp)) `GPL-3.0` `Go`
- [Tox](https://tox.chat/) - Distributed, secure messenger with audio and video chat capabilities. ([Source Code](https://github.com/TokTok/c-toxcore)) `GPL-3.0` `C`
- [Tuwunel](https://tuwunel.chat) - High-performance and feature-rich chat server for Matrix, and the successor to conduwuit (fork of Conduit). ([Demo](https://try.tuwunel.chat/), [Source Code](https://github.com/matrix-construct/tuwunel)) `Apache-2.0` `deb/Docker/Nix/Rust`
- [Typebot](https://typebot.io) - Conversational app builder (alternative to Typeform and Landbot). ([Source Code](https://github.com/baptisteArno/typebot.io)) `AGPL-3.0` `Docker`
- [WBO](https://github.com/lovasoa/whitebophir) - Web Whiteboard to collaborate in real-time on schemas, drawings, and notes. ([Demo](https://wbo.ophir.dev/)) `AGPL-3.0` `Nodejs/Docker`
- [Zulip](https://zulip.org) - Powerful group chat application. ([Source Code](https://github.com/zulip/zulip)) `Apache-2.0` `Python`


### Communication - Email - Complete Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

Simple deployment of [E-mail](https://en.wikipedia.org/wiki/Email) servers, e.g. for inexperienced or impatient admins.

- [AnonAddy](https://anonaddy.com) - Email forwarding service for creating aliases. ([Source Code](https://github.com/anonaddy/anonaddy)) `MIT` `PHP/Docker`
- [b1gMail](https://www.b1gmail.eu) - Complete email solution that runs on any webspace with PHP and MariaDB. It supports POP3 catchall mailboxes and can also integrate with Postfix or b1gMailServer if you're running your own server. ([Source Code](https://codeberg.org/b1gMail/b1gMail), [Clients](https://www.b1gmail.eu/en/start/addon-b1gmailserver/)) `GPL-2.0` `PHP`
- [DebOps](https://docs.debops.org/) - Your Debian-based data center in a box. A set of general-purpose Ansible roles that can be used to manage Debian or Ubuntu hosts. ([Source Code](https://github.com/debops/debops)) `GPL-3.0` `Ansible/Python`
- [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/edge/) - Production-ready fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) running inside a container. Only configuration files, no SQL database. ([Source Code](https://github.com/docker-mailserver/docker-mailserver)) `MIT` `Docker`
- [Inboxen](https://inboxen.org) - Lets you have an infinite number of unique inboxes. ([Source Code](https://codeberg.org/Inboxen/Inboxen)) `GPL-3.0` `Python`
- [iRedMail](https://www.iredmail.org/) - Full-featured mail server solution based on Postfix and Dovecot. ([Source Code](https://github.com/iredmail/iRedMail)) `GPL-3.0` `Shell`
- [Maddy Mail Server](https://maddy.email/) - All-in-one mail server that implements SMTP (both MTA and MX) and IMAP. Replaces Postfix, Dovecot, OpenDKIM, OpenSPF, OpenDMARC with single daemon. ([Source Code](https://github.com/foxcpp/maddy)) `GPL-3.0` `Go`
- [Mail-in-a-Box](https://mailinabox.email/) - Turns any Ubuntu server into a fully functional mail server with one command. ([Source Code](https://github.com/mail-in-a-box/mailinabox)) `CC0-1.0` `Shell`
- [Mailcow](https://mailcow.email/) - Mail server suite based on Dovecot, Postfix and other software, that provides a modern Web UI for administration. ([Source Code](https://github.com/mailcow/mailcow-dockerized)) `GPL-3.0` `Docker/PHP`
- [Mailu](https://mailu.io/) - Simple yet full-featured mail server as a set of Docker images. ([Source Code](https://github.com/Mailu/Mailu)) `MIT` `Docker/Python`
- [Modoboa](https://modoboa.org/en/) - Mail hosting and management platform including a modern and simplified web user interface. ([Source Code](https://github.com/modoboa/modoboa)) `ISC` `Python`
- [Mox](https://www.xmox.nl/) - Complete e-mail solution with IMAP4, SMTP, SPF, DKIM, DMARC, MTA-STS, DANE and DNSSEC, reputation-based and content-based junk filtering, Internationalization (IDNA), automatic TLS with ACME and Let's Encrypt, account autoconfiguration, and webmail. ([Source Code](https://github.com/mjl-/mox)) `MIT` `Go`
- [Postal](https://docs.postalserver.io/) - Complete and fully featured mail server for use by websites & web servers. ([Source Code](https://github.com/postalserver/postal)) `MIT` `Docker/Ruby`
- [Simple NixOS Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - Complete mailserver solution leveraging the Nix Ecosystem. `GPL-3.0` `Nix`
- [SimpleLogin](https://simplelogin.io) - Email alias solution to protect your email address. Comes with browser extensions and mobile apps. ([Source Code](https://github.com/simple-login/app)) `MIT` `Docker/Python`
- [Stalwart Mail Server](https://stalw.art) - All-in-one mail server with JMAP, IMAP4, and SMTP support and a wide range of modern features. ([Source Code](https://github.com/stalwartlabs/stalwart)) `AGPL-3.0` `Rust/Docker`
- [wildduck](https://wildduck.email/) - Scalable no-SPOF IMAP/POP3 mail server. ([Source Code](https://github.com/zone-eu/wildduck)) `EUPL-1.2` `Nodejs/Docker`


### Communication - Email - Mail Delivery Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Delivery Agents](https://en.wikipedia.org/wiki/Message_delivery_agent) (MDAs) - [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)/[POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) server software.

- [Cyrus IMAP](https://www.cyrusimap.org/) - Email (IMAP/POP3), contacts and calendar server. ([Source Code](https://github.com/cyrusimap/cyrus-imapd)) `BSD-3-Clause-Attribution` `C`
- [DavMail](https://davmail.sourceforge.net/) `⚠` - POP/IMAP/SMTP/Caldav/Carddav/LDAP exchange gateway allowing users to use any mail/calendar client with an Exchange server, even from the internet or behind a firewall through Outlook Web Access. ([Source Code](https://github.com/mguessan/davmail)) `GPL-2.0` `Java`
- [Dovecot](https://www.dovecot.org/) - IMAP and POP3 server written primarily with security in mind. ([Source Code](https://github.com/dovecot/core)) `MIT/LGPL-2.1` `C/deb`


### Communication - Email - Mail Transfer Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Transfer Agents](https://en.wikipedia.org/wiki/Message_transfer_agent) (MTAs) - [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) servers.

- [chasquid](https://blitiri.com.ar/p/chasquid/) - SMTP (email) server with a focus on simplicity, security, and ease of operation. ([Source Code](https://blitiri.com.ar/git/r/chasquid/)) `Apache-2.0` `Go`
- [Courier MTA](https://www.courier-mta.org/) - Fast, scalable, enterprise mail/groupware server providing ESMTP, IMAP, POP3, webmail, mailing list, basic web-based calendaring and scheduling services. ([Source Code](https://www.courier-mta.org/repo.html)) `GPL-3.0` `C/deb`
- [DragonFly](https://github.com/corecode/dma) - Small MTA for home and office use. Works on Linux and FreeBSD. `BSD-3-Clause` `C`
- [EmailRelay](https://emailrelay.sourceforge.net/) - Small and easy to configure SMTP and POP3 server for Windows and Linux. ([Source Code](https://sourceforge.net/p/emailrelay/code/HEAD/tree/)) `GPL-3.0` `C++`
- [Exim](https://www.exim.org/) - Message transfer agent (MTA) developed at the University of Cambridge. ([Source Code](https://git.exim.org/exim.git)) `GPL-3.0` `C/deb`
- [Haraka](https://haraka.github.io/) - Fast, highly extensible, and event driven SMTP server. ([Source Code](https://github.com/haraka/Haraka)) `MIT` `Nodejs`
- [OpenSMTPD](https://opensmtpd.org/) - Secure SMTP server implementation from the OpenBSD project. ([Source Code](https://github.com/OpenSMTPD/OpenSMTPD/)) `ISC` `C/deb`
- [Postfix](http://www.postfix.org/) - Fast, easy to administer, and secure Sendmail replacement. `IPL-1.0` `C/deb`
- [Sendmail](https://www.proofpoint.com/us/products/email-protection/open-source-email-solution) - Message transfer agent (MTA). `Sendmail` `C/deb`


### Communication - Email - Mailing Lists and Newsletters

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mailing list](https://en.wikipedia.org/wiki/Mailing_list) servers and mass mailing software - one message to many recipients.

_Related: [Customer Relationship Management (CRM)](#customer-relationship-management-crm)_

- [HyperKitty](https://wiki.list.org/HyperKitty) - Access GNU Mailman v3 archives. ([Demo](https://lists.mailman3.org/), [Source Code](https://gitlab.com/mailman/hyperkitty)) `GPL-3.0` `Python`
- [Keila](https://www.keila.io) - Reliable and easy-to-use newsletter tool (alternative to Mailchimp and Sendinblue). ([Demo](https://app.keila.io), [Source Code](https://github.com/pentacent/keila)) `AGPL-3.0` `Docker`
- [Listmonk](https://listmonk.app/) - High performance newsletter and mailing list manager with a modern dashboard. ([Demo](https://demo.listmonk.app/), [Source Code](https://github.com/knadh/listmonk)) `AGPL-3.0` `Go/Docker`
- [Mailman](https://www.list.org/) - Manage electronic mail discussion and e-newsletter lists. ([Source Code](https://gitlab.com/mailman/)) `GPL-3.0` `Python`
- [Mautic](https://www.mautic.org/) - Marketing automation software (email, social and more). ([Source Code](https://github.com/mautic/mautic)) `GPL-3.0` `PHP`
- [mlmmj](https://mlmmj.org/) - Mailing list management made joyful. ([Source Code](https://codeberg.org/mlmmj/mlmmj)) `MIT` `C`
- [phpList](https://www.phplist.org) - Newsletter and email marketing with advanced management of subscribers, bounces, and plugins. ([Source Code](https://github.com/phpList/phplist3)) `AGPL-3.0` `PHP`
- [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) - Web user interface to access GNU Mailman. ([Source Code](https://gitlab.com/mailman/postorius/)) `GPL-3.0` `Python`
- [Schleuder](https://schleuder.nadir.org/) - GPG-enabled mailing list manager with resending-capabilities. ([Source Code](https://0xacab.org/schleuder/schleuder/tree/master)) `GPL-3.0` `Ruby`
- [Sympa](https://www.sympa.community/) - Mailing list manager. ([Source Code](https://github.com/sympa-community/sympa)) `GPL-2.0` `Perl`


### Communication - Email - Webmail Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Webmail](https://en.wikipedia.org/wiki/Webmail) clients.

- [Cypht](https://cypht.org) - Feed reader for your email accounts. ([Source Code](https://github.com/cypht-org/cypht)) `LGPL-2.1` `PHP`
- [Roundcube](https://roundcube.net) - Browser-based IMAP client with an application-like user interface. ([Source Code](https://github.com/roundcube/roundcubemail)) `GPL-3.0` `PHP/deb`
- [SnappyMail](https://github.com/the-djmaze/snappymail) - Simple, modern, lightweight & fast web-based email client (fork of RainLoop). `AGPL-3.0` `PHP`
- [SquirrelMail](https://squirrelmail.org) - Another browser-based IMAP client. ([Source Code](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPL-2.0` `PHP`


### Communication - IRC

**[`^        back to top        ^`](#awesome-selfhosted)**

[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) communication software.

- [Ergo](https://ergo.chat/) - Modern IRCv3 server written in Go, combining the features of an ircd, a services framework, and a bouncer. ([Source Code](https://github.com/ergochat/ergo)) `MIT` `Go/Docker`
- [Glowing Bear](https://github.com/glowing-bear/glowing-bear) - Web frontend for WeeChat. ([Demo](https://www.glowing-bear.org)) `GPL-3.0` `Nodejs`
- [InspIRCd](https://www.inspircd.org/) - Modular IRC server written in C++ for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/inspircd/inspircd)) `GPL-2.0` `C++/Docker`
- [Kiwi IRC](https://kiwiirc.com/) - Responsive web IRC client with theming support. ([Demo](https://kiwiirc.com/nextclient/), [Source Code](https://github.com/kiwiirc/kiwiirc)) `Apache-2.0` `Nodejs`
- [ngircd](https://ngircd.barton.de/) - Portable and lightweight Internet Relay Chat server for small or private networks. ([Source Code](https://github.com/ngircd/ngircd)) `GPL-2.0` `C/deb`
- [Quassel IRC](https://quassel-irc.org/) - Distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core. ([Source Code](https://github.com/quassel/quassel)) `GPL-2.0` `C++`
- [Robust IRC](https://robustirc.net/) - IRC without netsplits. Distributed IRC server, based on RobustSession protocol. ([Source Code](https://github.com/robustirc/robustirc)) `BSD-3-Clause` `Go`
- [The Lounge](https://thelounge.chat/) - Web IRC client. ([Demo](https://demo.thelounge.chat/), [Source Code](https://github.com/thelounge/thelounge)) `MIT` `Nodejs/Docker`
- [UnrealIRCd](https://www.unrealircd.org/) - Modular, advanced and highly configurable IRC server written in C for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/unrealircd/unrealircd)) `GPL-2.0` `C`
- [Weechat](https://weechat.org/) - Fast, light and extensible chat client. ([Source Code](https://github.com/weechat/weechat)) `GPL-3.0` `C/Docker/deb`
- [ZNC](https://wiki.znc.in/ZNC) - Advanced IRC bouncer. ([Source Code](https://github.com/znc/znc)) `Apache-2.0` `C++/deb`


### Communication - SIP

**[`^        back to top        ^`](#awesome-selfhosted)**

[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)/[IPBX](https://en.wikipedia.org/wiki/IP_PBX) telephony software.

- [Asterisk](https://www.asterisk.org/) - Easy to use but advanced IP PBX system, VoIP gateway and conference server. ([Source Code](https://github.com/asterisk/asterisk)) `GPL-2.0` `C/deb`
- [Flexisip](https://www.linphone.org/en/flexisip-sip-server/) - Complete, modular and scalable SIP server, includes a push gateway, to deliver SIP incoming calls or text messages on mobile device platforms where push notifications are required to receive information when the app is not active in the foreground. ([Source Code](https://github.com/BelledonneCommunications/flexisip)) `AGPL-3.0` `C/Docker`
- [Freepbx](https://www.freepbx.org) - Web-based GUI that controls and manages Asterisk. ([Source Code](https://git.freepbx.org/projects/FREEPBX)) `GPL-2.0` `PHP`
- [FreeSWITCH](https://freeswitch.org/) - Scalable cross-platform telephony platform. ([Source Code](https://github.com/signalwire/freeswitch)) `MPL-2.0` `C`
- [FusionPBX](https://www.fusionpbx.com/) - Web interface for multi-platform voice switch called FreeSWITCH. ([Source Code](https://github.com/fusionpbx/fusionpbx)) `MPL-1.1` `PHP`
- [Kamailio](https://www.kamailio.org/w/) - Modular SIP server (registrar/proxy/router/etc). ([Source Code](https://github.com/kamailio/kamailio)) `GPL-2.0` `C/deb`
- [openSIPS](https://opensips.org/) - SIP proxy/server for voice, video, IM, presence and any other SIP extensions. ([Source Code](https://github.com/OpenSIPS/opensips)) `GPL-2.0` `C`
- [Routr](https://routr.io) - Lightweight SIP proxy, location server, and registrar for a reliable and scalable SIP infrastructure. ([Source Code](https://github.com/fonoster/routr)) `MIT` `Docker/K8S`
- [SIP3](https://sip3.io/) - VoIP troubleshooting and monitoring platform. ([Demo](https://demo.sip3.io), [Source Code](https://github.com/sip3io/)) `Apache-2.0` `Java`
- [SIPCAPTURE Homer](https://www.sipcapture.org/) - Troubleshooting and monitoring VoIP calls. ([Source Code](https://github.com/sipcapture/homer)) `AGPL-3.0` `Nodejs/Go/Docker`
- [Wazo](https://wazo-platform.org/) - Full-featured IPBX solution built atop Asterisk with integrated Web administration interface and REST-ful API. ([Source Code](https://github.com/wazo-platform)) `GPL-3.0` `Python`
- [Yeti-Switch](https://yeti-switch.org/) - Transit class4 softswitch(SBC) with integrated billing and routing engine and REST API. ([Demo](https://demo.yeti-switch.org/), [Source Code](https://github.com/yeti-switch)) `GPL-2.0` `C++/Ruby`


### Communication - Social Networks and Forums

**[`^        back to top        ^`](#awesome-selfhosted)**

[Social Networking](https://en.wikipedia.org/wiki/Social_networking_service) and [Forum](https://en.wikipedia.org/wiki/Internet_forum) software.

- [Akkoma](https://akkoma.social/) - Federated microblogging server with Mastodon, GNU social, and ActivityPub compatibility. ([Source Code](https://akkoma.dev/AkkomaGang/akkoma)) `AGPL-3.0` `Elixir/Docker`
- [Answer](https://answer.apache.org) - Knowledge-based community software. You can use it to quickly build your Q&A community for product technical support, customer support, user communication, and more. ([Source Code](https://github.com/apache/answer)) `Apache-2.0` `Docker/Go`
- [Artalk](https://artalk.js.org/) - Comment system built in Golang, providing a lightweight and highly customizable solution for adding comments to your website. ([Source Code](https://github.com/ArtalkJS/Artalk)) `MIT` `Go/Docker`
- [AsmBB](https://board.asm32.info) - Fast, SQLite-powered forum engine written in ASM. ([Source Code](https://asm32.info/fossil/asmbb/index)) `EUPL-1.2` `Assembly`
- [BuddyPress](https://buddypress.org/about/) - Powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more. ([Source Code](https://github.com/buddypress/BuddyPress)) `GPL-2.0` `PHP`
- [Coral](https://coralproject.net/) - Better commenting experience from Vox Media. ([Source Code](https://github.com/coralproject/talk)) `Apache-2.0` `Docker/Nodejs`
- [diaspora*](https://diasporafoundation.org/) - Distributed social networking server. ([Source Code](https://github.com/diaspora/diaspora)) `AGPL-3.0` `Ruby`
- [Discourse](https://www.discourse.org/) - Advanced forum / community solution based on Ruby and JS. ([Demo](https://try.discourse.org/), [Source Code](https://github.com/discourse/discourse)) `GPL-2.0` `Docker`
- [Elgg](https://elgg.org/) - Powerful social networking engine. ([Source Code](https://github.com/Elgg/Elgg)) `GPL-2.0` `PHP`
- [Enigma 1/2 BBS](https://nuskooler.github.io/enigma-bbs/) - Modern, multi-platform BBS engine with unlimited "callers" and legacy DOS door game support. ([Source Code](https://github.com/NuSkooler/enigma-bbs)) `BSD-2-Clause` `Shell/Docker/Nodejs`
- [Flarum](https://flarum.org) - Delightfully simple forums. Next-generation forum software that makes online discussion fun again. ([Source Code](https://github.com/flarum/flarum)) `MIT` `PHP`
- [Friendica](https://friendi.ca/) - Social Communication Server. ([Source Code](https://github.com/friendica/friendica)) `AGPL-3.0` `PHP`
- [GoToSocial](https://docs.gotosocial.org/en/latest/) - ActivityPub federated social network server implementing the Mastodon client API. ([Source Code](https://codeberg.org/superseriousbusiness/gotosocial)) `AGPL-3.0` `Docker/Go`
- [Habitat](https://gethabitat.org/) - Platform for Local Communities. ([Source Code](https://github.com/carlnewton/habitat)) `AGPL-3.0` `Docker`
- [Hatsu](https://hatsu.cli.rs/) - Bridge that interacts with Fediverse on behalf of your static site. ([Source Code](https://github.com/importantimport/hatsu)) `AGPL-3.0` `Docker/Rust`
- [Hubzilla](https://hubzilla.org) - Decentralized identity, privacy, publishing, sharing, cloud storage, and communications/social platform. ([Source Code](https://framagit.org/hubzilla/core)) `MIT` `PHP`
- [HumHub](https://www.humhub.org/) - Flexible kit for private social networks. ([Source Code](https://github.com/humhub/humhub)) `AGPL-3.0` `PHP`
- [Iceshrimp.NET](https://iceshrimp.net) - Federated microblogging server that communicates over ActivityPub. ([Source Code](https://iceshrimp.dev/iceshrimp/iceshrimp.net)) `EUPL-1.2` `.NET/C#/Docker`
- [Isso](https://isso-comments.de/) - Lightweight commenting server written in Python and Javascript. It aims to be a drop-in replacement for Disqus. ([Source Code](https://github.com/isso-comments/isso)) `MIT` `Python/Docker`
- [Lemmy](https://join-lemmy.org/) - Link aggregator for the fediverse (alternative to Reddit). ([Source Code](https://github.com/LemmyNet/lemmy)) `AGPL-3.0` `Docker/Rust`
- [Loomio](https://www.loomio.org/) - Collaborative decision-making tool that makes it easy for anyone to participate in decisions which affect them. ([Source Code](https://github.com/loomio/loomio)) `AGPL-3.0` `Docker`
- [Mastodon](https://joinmastodon.org/) - Federated microblogging server. ([Source Code](https://github.com/mastodon/mastodon), [Clients](https://github.com/hyperupcall/awesome-mastodon)) `AGPL-3.0` `Ruby`
- [Misago](https://misago-project.org/) - Fully featured modern forum application that is fast, scalable and responsive. ([Source Code](https://github.com/rafalp/Misago)) `GPL-2.0` `Docker`
- [Misskey](https://misskey.io/) - Decentralized app-like microblogging server/SNS for the Fediverse, using the ActivityPub protocol like GNU social and Mastodon. ([Source Code](https://github.com/misskey-dev/misskey)) `AGPL-3.0` `Nodejs/Docker`
- [Movim](https://movim.eu/) - Modern, federated social network based on XMPP, with a fully featured group-chat, subscriptions and microblogging. ([Source Code](https://github.com/movim/movim)) `AGPL-3.0` `PHP/Docker`
- [MyBB](https://mybb.com/) - Free, extensible forum software package. ([Source Code](https://github.com/mybb/mybb)) `LGPL-3.0` `PHP`
- [NodeBB](https://nodebb.org/) - Forum software built for the modern web. ([Demo](https://try.nodebb.org/), [Source Code](https://github.com/NodeBB/NodeBB)) `GPL-3.0` `Nodejs/Docker`
- [OSSN](https://www.opensource-socialnetwork.org/) - Social networking software that allows you to make a social networking website and helps your members build social relationships, with people who share similar professional or personal interests. ([Source Code](https://github.com/opensource-socialnetwork/opensource-socialnetwork)) `CAL-1.0` `PHP`
- [phpBB](https://www.phpbb.com/) - Flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website. ([Source Code](https://github.com/phpbb/phpbb)) `GPL-2.0` `PHP`
- [PieFed](https://join.piefed.social) - Link aggregator / reddit clone for the fediverse (alternative to Reddit). ([Demo](https://piefed.social), [Source Code](https://codeberg.org/rimu/pyfedi)) `AGPL-3.0` `Python/Docker`
- [PixelFed](https://pixelfed.social) - Ethical photo sharing platform, powered by ActivityPub federation (alternative to Instagram). ([Source Code](https://github.com/pixelfed/pixelfed)) `AGPL-3.0` `PHP`
- [Pleroma](https://pleroma.social) - Federated microblogging server, Mastodon, GNU social, & ActivityPub compatible. ([Source Code](https://git.pleroma.social/pleroma/pleroma)) `AGPL-3.0` `Elixir`
- [qpixel](https://codidact.com/) - Q&A-based community knowledge-sharing software. ([Source Code](https://github.com/codidact/qpixel)) `AGPL-3.0` `Ruby`
- [Redlib](https://github.com/redlib-org/redlib) `⚠` - Private alternative front-end to Reddit, with its origins in Libreddit. `AGPL-3.0` `Rust`
- [remark42](https://remark42.com/) - Lightweight and simple comment engine, which doesn't spy on users. It can be embedded into blogs, articles or any other place where readers add comments. ([Demo](https://remark42.com/demo/), [Source Code](https://github.com/umputun/remark42)) `MIT` `Docker/Go`
- [Scoold](https://scoold.com) - Stack Overflow in a JAR. An enterprise-ready Q&A platform with full-text search, SAML, LDAP integration and social login support. ([Demo](https://live.scoold.com), [Source Code](https://github.com/Erudika/scoold)) `Apache-2.0` `Java/Docker/K8S`
- [Simple Machines Forum](https://www.simplemachines.org/) - Free, professional grade software package that allows you to set up your own online community within minutes. ([Source Code](https://github.com/SimpleMachines/SMF)) `BSD-3-Clause` `PHP`
- [Socialhome](https://socialhome.network) - Federated and decentralized profile builder and social network engine. ([Demo](https://socialhome.network/), [Source Code](https://github.com/jaywink/socialhome)) `AGPL-3.0` `Docker/Python`
- [Talkyard](https://www.talkyard.io/) - Create a community, where your users can suggest ideas and get questions answered. And have friendly open-ended discussions and chat (Slack/StackOverflow/Discourse/Reddit/Disqus hybrid). ([Demo](https://www.talkyard.io/forum/latest), [Source Code](https://github.com/debiki/talkyard)) `AGPL-3.0` `Docker/Scala`
- [yarn.social](https://yarn.social) - Twitter™-like Decentralised micro-logging platform. No ads, no tracking, your content, your data. ([Source Code](https://git.mills.io/yarnsocial/yarn)) `MIT` `Go`


### Communication - Video Conferencing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video/Web Conferencing](https://en.wikipedia.org/wiki/Web_conferencing) tools and software.

_Related: [Conference Management](#conference-management)_

- [BigBlueButton](https://bigbluebutton.org/) - Supports real-time sharing of audio, video, slides (with whiteboard controls), chat, and the screen. Instructors can engage remote students with polling, emojis, and breakout rooms. ([Source Code](https://github.com/bigbluebutton/bigbluebutton)) `LGPL-3.0` `Java`
- [Galene](https://galene.org/) - Video conferencing server that is easy to deploy and that requires moderate server resources. ([Source Code](https://github.com/jech/galene)) `MIT` `Go`
- [Janus](https://janus.conf.meetecho.com/) - General-purpose, lightweight, minimalist WebRTC Server. ([Demo](https://janus.conf.meetecho.com/demos/), [Source Code](https://github.com/meetecho/janus-gateway)) `GPL-3.0` `C`
- [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - WebRTC application that uses Jitsi Videobridge to provide high quality, scalable video conferences. ([Demo](https://meet.jit.si), [Source Code](https://github.com/jitsi/jitsi-meet)) `Apache-2.0` `Nodejs/Docker/deb`
- [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication. ([Source Code](https://github.com/jitsi/jitsi-videobridge)) `Apache-2.0` `Java/deb`
- [MiroTalk C2C](https://c2c.mirotalk.com) - Real-time cam-2-cam video calls & screen sharing, end-to-end encrypted, to embed in any website with a simple iframe. ([Source Code](https://github.com/miroslavpejic85/mirotalkc2c)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk P2P](https://p2p.mirotalk.com) - Simple, secure, fast real-time video conferences up to 4k and 60fps, compatible with all browsers and platforms. ([Demo](https://p2p.mirotalk.com/newcall), [Source Code](https://github.com/miroslavpejic85/mirotalk)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk SFU](https://sfu.mirotalk.com) - Simple, secure, scalable real-time video conferences up to 4k, compatible with all browsers and platforms. ([Demo](https://sfu.mirotalk.com/newroom), [Source Code](https://github.com/miroslavpejic85/mirotalksfu)) `AGPL-3.0` `Nodejs/Docker`
- [plugNmeet](https://www.plugnmeet.org/) - Scalable and high performance web conferencing system. ([Demo](https://demo.plugnmeet.com/login.html), [Source Code](https://github.com/mynaparrot/plugNmeet-server)) `MIT` `Docker/Go`


### Communication - XMPP - Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) servers.

- [ejabberd](https://www.ejabberd.im/) - XMPP instant messaging server. ([Source Code](https://github.com/processone/ejabberd)) `GPL-2.0` `Erlang/Docker`
- [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - Mobile messaging platform with a focus on performance and scalability. ([Source Code](https://github.com/esl/MongooseIM)) `GPL-2.0` `Erlang/Docker/K8S`
- [Openfire](https://www.igniterealtime.org/projects/openfire/) - Real time collaboration (RTC) server. ([Source Code](https://github.com/igniterealtime/Openfire)) `Apache-2.0` `Java`
- [Prosody IM](https://prosody.im/) - Feature-rich and easy to configure XMPP server. ([Source Code](https://hg.prosody.im/)) `MIT` `Lua`
- [Snikket](https://snikket.org/) - All-in-one Dockerized easy XMPP solution, including web admin and clients. ([Source Code](https://github.com/snikket-im/snikket-server), [Clients](https://snikket.org/app/)) `Apache-2.0` `Docker`
- [Tigase](https://tigase.net/xmpp-server) - XMPP server implementation in Java. ([Source Code](https://github.com/tigase/tigase-server)) `GPL-3.0` `Java`


### Communication - XMPP - Web Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) Web clients/interfaces.

- [Converse.js](https://conversejs.org/) - XMPP chat client in your browser. ([Source Code](https://github.com/conversejs/converse.js)) `MPL-2.0` `Javascript`
- [Libervia](https://repos.goffi.org/libervia-web) - Web frontend from Salut à Toi. `AGPL-3.0` `Python`
- [Salut à Toi](https://www.salut-a-toi.org/) - Multipurpose, multi frontend, libre and decentralized communication tool. ([Source Code](https://repos.goffi.org/libervia-backend)) `AGPL-3.0` `Python`


### Community-Supported Agriculture (CSA)

**[`^        back to top        ^`](#awesome-selfhosted)**

Management and administration tools for community supported agriculture and food cooperatives.

_Related: [E-commerce](#e-commerce)_

- [ACP Admin](https://acp-admin.ch/) - CSA administration. Manage members, subscriptions, deliveries, drop-off locations, member participation, invoices and emails (documentation in French). ([Source Code](https://github.com/csa-admin-org/csa-admin)) `MIT` `Ruby`
- [FoodCoopShop](https://www.foodcoopshop.com/) - User-friendly software for food-coops. ([Source Code](https://github.com/foodcoopshop/foodcoopshop)) `AGPL-3.0` `PHP/Docker`
- [Foodsoft](https://foodcoops.net/) - Manage a non-profit food coop (product catalog, ordering, accounting, job scheduling). ([Source Code](https://github.com/foodcoops/foodsoft)) `AGPL-3.0` `Docker/Ruby`
- [Hive-Pal](https://hivepal.app) - Mobile-first beekeeping management app for tracking hives, inspections, queen records, and equipment with streamlined data entry optimized for field use. ([Demo](https://hivepal.app), [Source Code](https://github.com/martinhrvn/hive-pal)) `MIT` `Nodejs/Docker`
- [juntagrico](https://juntagrico.org/) - Management platform for community gardens and vegetable cooperatives. ([Source Code](https://github.com/juntagrico/juntagrico)) `LGPL-3.0` `Python`
- [Open Food Network](https://www.openfoodnetwork.org/) - Online marketplace for local food. It enables a network of independent online food stores that connect farmers and food hubs with individuals and local businesses. ([Source Code](https://github.com/openfoodfoundation/openfoodnetwork)) `AGPL-3.0` `Ruby`
- [OpenOlitor](https://openolitor.org/) - Administration platform for Community Supported Agriculture groups. ([Source Code](https://github.com/OpenOlitor/openolitor-server)) `AGPL-3.0` `Scala`
- [teikei](https://github.com/teikei/teikei) - Web application that maps out community-supported agriculture based on crowdsourced data. ([Demo](https://ernte-teilen.org/karte/#/)) `AGPL-3.0` `Nodejs`


### Conference Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for submission of [abstracts](https://en.wikipedia.org/wiki/Abstract_management) and preparation/management of academic conferences.

_Related: [Communication - Video Conferencing](#communication---video-conferencing)_

- [indico](https://getindico.io/) - Feature-rich event management system, made @ CERN, the place where the Web was born. ([Demo](https://sandbox.getindico.io/), [Source Code](https://github.com/indico/indico)) `MIT` `Python`
- [motion.tools (Antragsgrün)](https://motion.tools/) - Manage motions and amendments for (political) conventions. ([Demo](https://sandbox.motion.tools/createsite), [Source Code](https://github.com/CatoTH/antragsgruen)) `AGPL-3.0` `PHP/Docker`
- [OpenSlides](https://openslides.com/) - Presentation and assembly system for managing and projecting agenda, motions and elections of an assembly. ([Demo](https://demo.openslides.org/login), [Source Code](https://github.com/OpenSlides/OpenSlides)) `MIT` `Docker`
- [osem](https://osem.io/) - Event management tailored to free Software conferences. ([Source Code](https://github.com/openSUSE/osem)) `MIT` `Ruby/Docker`
- [pretalx](https://pretalx.org) - Web-based event management, including running a Call for Papers, reviewing submissions, and scheduling talks. Exports and imports for various related tools. ([Source Code](https://github.com/pretalx/pretalx)) `Apache-2.0` `Python`


### Content Management Systems (CMS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system) offer a practical way to setup a website with many features, using third party plugins, themes and functionality that are easy to add and customize.

_Related: [Blogging Platforms](#blogging-platforms), [Static Site Generators](#static-site-generators), [Photo Galleries](#photo-galleries)_

- [Alfresco Community Edition](https://www.alfresco.com/products/community/download) - Enterprise Content Management software that handles any type of content, allowing users to easily share and collaborate on content. ([Source Code](https://github.com/Alfresco/alfresco-community-repo)) `LGPL-3.0` `Java`
- [Apostrophe](https://apostrophecms.com/) - CMS with a focus on extensible in-context editing tools. ([Demo](https://demo.apostrophecms.com/), [Source Code](https://github.com/apostrophecms/apostrophe)) `MIT` `Nodejs`
- [Automad](https://automad.org/) - Flat-file content management system and template engine. ([Demo](https://try.automad.org/), [Source Code](https://github.com/marcantondahmen/automad)) `MIT` `PHP/Docker`
- [Backdrop CMS](https://backdropcms.org/) - Comprehensive CMS for small to medium sized businesses and non-profits. ([Source Code](https://github.com/backdrop/backdrop)) `GPL-2.0` `PHP`
- [Bludit](https://www.bludit.com/) `⚠` - Build a site or blog in seconds. Bludit uses flat-files (text files in JSON format) to store posts and pages. ([Source Code](https://github.com/bludit/bludit)) `MIT` `PHP`
- [Bolt CMS](https://boltcms.io/) - Content Management Tool, which strives to be as simple and straightforward as possible. ([Source Code](https://github.com/bolt/core)) `MIT` `PHP`
- [CMS Made Simple](https://www.cmsmadesimple.org/) - Faster and easier management of website contents, scalable for small businesses to large corporations. ([Source Code](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL-2.0` `PHP`
- [Cockpit](https://getcockpit.com) - Simple content platform to manage any structured content. ([Source Code](https://github.com/Cockpit-HQ/Cockpit)) `MIT` `PHP`
- [Concrete 5 CMS](https://www.concretecms.com) - Open source content management system. ([Source Code](https://github.com/concretecms/concretecms)) `MIT` `PHP`
- [Contao](https://contao.org/) - Powerful CMS that allows you to create professional websites and scalable web applications. ([Demo](https://demo.contao.org/contao), [Source Code](https://github.com/contao/contao/)) `LGPL-3.0` `PHP`
- [CouchCMS](https://www.couchcms.com/) - CMS for designers. ([Source Code](https://github.com/CouchCMS/CouchCMS)) `CPAL-1.0` `PHP`
- [Drupal](https://www.drupal.org/) - Advanced content management platform. ([Source Code](https://git.drupalcode.org/project/drupal)) `GPL-2.0` `PHP`
- [eLabFTW](https://www.elabftw.net) - Online lab notebook for research labs. Store experiments, use a database to find reagents or protocols, use trusted timestamping to legally timestamp an experiment, export as pdf or zip archive, share with collaborators…. ([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw)) `AGPL-3.0` `PHP`
- [Expressa](https://github.com/thomas4019/expressa) - Content Management System for powering database driven websites using JSON schemas. Provides permission management and automatic REST APIs. `MIT` `Nodejs`
- [Joomla!](https://www.joomla.org/) - Advanced Content Management System (CMS). ([Source Code](https://github.com/joomla/joomla-cms)) `GPL-2.0` `PHP`
- [KeystoneJS](https://keystonejs.com/) - CMS and web application platform. ([Source Code](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
- [Localess](https://localess.org/home) `⚠` - Powerful translation management and content management system. Manage and translate your website or app content into multiple languages, using AI to translate faster. ([Source Code](https://github.com/Lessify/localess)) `MIT` `Docker`
- [MODX](https://modx.com/) - Advanced content management and publishing platform. The current version is called 'Revolution'. ([Source Code](https://github.com/modxcms/revolution)) `GPL-2.0` `PHP`
- [Neos](https://www.neos.io) - Modern CMS. Neos or TYPO3 Neos (for version 1). ([Source Code](https://github.com/neos)) `GPL-3.0` `PHP`
- [Noosfero](https://gitlab.com/noosfero/noosfero) - Platform for social and solidarity economy networks with blog, e-Portfolios, CMS, RSS, thematic discussion, events agenda and collective intelligence for solidarity economy in the same system. `AGPL-3.0` `Ruby`
- [Omeka](https://omeka.org) - Create complex narratives and share rich collections, adhering to Dublin Core standards with Omeka on your server, designed for scholars, museums, libraries, archives, and enthusiasts. ([Demo](https://omeka.org/classic/showcase/), [Source Code](https://github.com/omeka/Omeka)) `GPL-3.0` `PHP`
- [Payload CMS](https://payloadcms.com/) - Developer-first headless CMS and application framework. ([Source Code](https://github.com/payloadcms/payload)) `MIT` `Nodejs`
- [Pimcore](http://www.pimcore.com/) - Multi-channel experience and engagement management platform. ([Source Code](https://github.com/pimcore/pimcore)) `GPL-3.0` `PHP/Docker`
- [Plone](https://plone.org/) - CMS system that is used to create, edit, and manage digital content, like websites, intranets, and custom solutions. ([Source Code](https://github.com/plone)) `ZPL-2.0` `Python/Docker`
- [Publify](https://publify.github.io/) - Simple but full featured web publishing software. ([Source Code](https://github.com/publify/publify)) `MIT` `Ruby`
- [Pushword](https://pushword.piedweb.com) - Content management system built on Symfony, where pages are Markdown and themes are Twig, with optional Git-based flat-file storage. ([Source Code](https://github.com/Pushword/Pushword), [Clients](https://pushword.piedweb.com/extensions)) `MIT` `PHP`
- [REDAXO](https://www.redaxo.org) - Simple, flexible and useful content management system (documentation in German). ([Source Code](https://github.com/redaxo/core)) `MIT` `PHP/Docker`
- [SilverStripe](https://www.silverstripe.org) - Easy to use CMS with powerful MVC framework underlying. ([Demo](https://demo.silverstripe.org/), [Source Code](https://github.com/silverstripe)) `BSD-3-Clause` `PHP`
- [SPIP](https://www.spip.net/fr) - Publication system for the Internet aimed at collaborative work, multilingual environments, and simplicity of use for web authors. ([Source Code](https://git.spip.net/)) `GPL-3.0` `PHP`
- [Squidex](https://squidex.io) - Headless CMS, based on MongoDB, CQRS and Event Sourcing. ([Demo](https://cloud.squidex.io), [Source Code](https://github.com/Squidex/squidex)) `MIT` `.NET`
- [Strapi](https://strapi.io/) - Headless CMS that lets developers build content APIs fast while giving content creators a friendly editing interface. ([Source Code](https://github.com/strapi/strapi)) `MIT` `Nodejs`
- [Superdesk](https://superdesk.org/) `⚠` - End-to-end news creation, production, curation, distribution, and publishing platform. ([Source Code](https://github.com/superdesk/superdesk)) `AGPL-3.0` `Docker/Python/PHP`
- [Textpattern](https://textpattern.com/) - Flexible, elegant and easy-to-use CMS. ([Demo](https://textpattern.co/demo), [Source Code](https://github.com/textpattern/textpattern)) `GPL-2.0` `PHP`
- [Typemill](https://typemill.net/) - Author-friendly flat-file-cms with a visual markdown editor based on vue.js. ([Source Code](https://github.com/typemill/typemill)) `MIT` `PHP`
- [TYPO3](https://typo3.org/) - Powerful and advanced CMS with a large community. ([Source Code](https://github.com/TYPO3/typo3)) `GPL-2.0` `PHP`
- [Umbraco](https://umbraco.com/) - Friendly CMS with an amazing community. ([Source Code](https://github.com/umbraco/Umbraco-CMS)) `MIT` `.NET`
- [Vvveb CMS](https://www.vvveb.com) - Powerful and easy to use CMS to build websites, blogs or e-commerce stores. ([Demo](https://demo.vvveb.com), [Source Code](https://github.com/givanz/Vvveb)) `AGPL-3.0` `PHP/Docker`
- [Wagtail](https://wagtail.io/) - Django content management system focused on flexibility and user experience. ([Source Code](https://github.com/wagtail/wagtail)) `BSD-3-Clause` `Python`
- [WinterCMS](https://wintercms.com/) - Speedy and secure content management system built on the Laravel PHP framework. ([Source Code](https://github.com/wintercms/winter)) `MIT` `PHP`
- [WonderCMS](https://www.wondercms.com) - Smallest flat file CMS since 2008. ([Demo](https://www.wondercms.com/demo), [Source Code](https://github.com/WonderCMS/wondercms)) `MIT` `PHP`
- [WordPress](https://wordpress.org/) - World's most-used blogging and CMS engine. ([Source Code](https://github.com/WordPress/WordPress)) `GPL-2.0` `PHP`


### Customer Relationship Management (CRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Customer relationship management (CRM)](https://en.wikipedia.org/wiki/Customer_relationship_management) is a strategic process that organizations use to manage, analyze, and improve their interactions with customers.

_Related: [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters), [Analytics](#analytics), [Calendar & Contacts](#calendar--contacts)_

- [Corteza](https://docs.cortezaproject.org) - CRM including a unified workspace, enterprise messaging and a low code environment for rapidly and securely delivering records-based management solutions. ([Demo](https://latest.cortezaproject.org), [Source Code](https://github.com/cortezaproject/corteza)) `Apache-2.0` `Go`
- [Django-CRM](https://DjangoCRM.github.io/info/) - Analytical CRM with tasks management, email marketing and many more. Django CRM is built for individual use, businesses of any size or freelancers and is designed to provide easy customization and quick development. ([Source Code](https://github.com/DjangoCRM/django-crm)) `AGPL-3.0` `Python`
- [EspoCRM](https://www.espocrm.com/) - CRM with a frontend designed as a single page application, and a REST API. ([Demo](https://demo.espocrm.com/), [Source Code](https://github.com/espocrm/espocrm)) `AGPL-3.0` `PHP`
- [Krayin](https://krayincrm.com/) - CRM solution for SMEs and Enterprises for complete customer lifecycle management. ([Demo](https://demo.krayincrm.com/), [Source Code](https://github.com/krayin/laravel-crm)) `MIT` `PHP`
- [Relaticle](https://relaticle.com) - CRM with an MCP server, an AI assistant with human-approved changes, a REST API, custom fields, and kanban boards. ([Source Code](https://github.com/relaticle/relaticle)) `AGPL-3.0` `PHP/Docker`
- [SuiteCRM](https://suitecrm.com) - Award-winning, enterprise-class CRM. ([Source Code](https://github.com/SuiteCRM/SuiteCRM)) `AGPL-3.0` `PHP`
- [Twenty](https://twenty.com) - Modern CRM offering flexibility, advanced features, and a sleek design. ([Source Code](https://github.com/twentyhq/twenty)) `AGPL-3.0` `Docker`


### Database Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Web interfaces for [database](https://en.wikipedia.org/wiki/Database) management. Includes tools for database analytics and visualization.

_Related: [Analytics](#analytics), [Automation](#automation)_

_See also: [dbdb.io - Database of Databases](https://dbdb.io/)_

- [Adminer](https://www.adminer.org/) - Database management in a single PHP file. Available for MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, MongoDB and others. ([Source Code](https://github.com/vrana/adminer)) `Apache-2.0/GPL-2.0` `PHP`
- [Azimutt](https://azimutt.app) - Visual database exploration made for real world databases (big and messy). Explore your database schema as well as data, document them, extend them and even get analysis and guidelines. ([Demo](https://azimutt.app/gallery/gospeak), [Source Code](https://github.com/azimuttapp/azimutt)) `MIT` `Elixir/Nodejs/Docker`
- [Baserow](https://baserow.io/) - Create your own database without technical experience (alternative to Airtable). ([Source Code](https://gitlab.com/baserow/baserow)) `MIT` `Docker`
- [Bytebase](https://www.bytebase.com/) - Safe database schema change and version control for DevOps teams, supports MySQL, PostgreSQL, TiDB, ClickHouse, and Snowflake. ([Source Code](https://github.com/bytebase/bytebase)) `MIT` `Docker/K8S/Go`
- [Chartbrew](https://chartbrew.com) - Connect directly to databases and APIs and use the data to create beautiful charts. ([Demo](https://app.chartbrew.com/live-demo), [Source Code](https://github.com/chartbrew/chartbrew)) `MIT` `Nodejs/Docker`
- [ChartDB](https://chartdb.io/) - Database diagrams editor that allows you to visualize and design your DB with a single query. ([Demo](https://app.chartdb.io), [Source Code](https://github.com/chartdb/chartdb)) `AGPL-3.0` `Nodejs/Docker`
- [CloudBeaver](https://dbeaver.com/) - Manage databases, supports PostgreSQL, MySQL, SQLite and more. A web/hosted version of DBeaver. ([Source Code](https://github.com/dbeaver/cloudbeaver)) `Apache-2.0` `Docker`
- [d9](https://d9.webcapsule.io) - Turn SQL databases into secure APIs through an intuitive admin interface. Data platform and headless CMS (fork of Directus). ([Source Code](https://github.com/LaWebcapsule/d9)) `GPL-3.0` `Nodejs`
- [Databunker](https://databunker.org/) - Network-based, GDPR compliant, secure database for personal data or PII. ([Source Code](https://github.com/securitybunker/databunker)) `MIT` `Docker`
- [datannur](https://datannur.com) - Lightweight data catalog for documenting and exploring structured data files and databases. ([Demo](https://dev.datannur.com/), [Source Code](https://github.com/datannur/datannur)) `MIT` `Python`
- [Datasette](https://datasette.io/) - Explore and publish data with easy import and export and database management. ([Source Code](https://github.com/simonw/datasette)) `Apache-2.0` `Python/Docker`
- [drawDB](https://www.drawdb.app) - Browser-based visual and DBML database diagram editor and SQL generator for MySQL, PostgreSQL, SQLite, MariaDB, MSSQL and Oracle. ([Demo](https://www.drawdb.app/editor), [Source Code](https://github.com/drawdb-io/drawdb)) `AGPL-3.0` `Nodejs/Docker`
- [Evidence](https://evidence.dev) - Code-based BI tool. Write reports using SQL and markdown and they render as a website. ([Source Code](https://github.com/evidence-dev/evidence)) `MIT` `Nodejs`
- [LibreDB Studio](https://libredb.org) - Browser-based SQL IDE for PostgreSQL, MySQL, Oracle, SQL Server, MongoDB, Redis, ClickHouse, DuckDB and more, with SSO, audit trail, ER diagrams and optional AI assistance on your own model key (alternative to DataGrip, DBeaver, CloudBeaver). ([Source Code](https://github.com/libredb/libredb-studio)) `MIT` `Docker/K8S`
- [Limbas](https://www.limbas.com/en/) - Database framework for creating database-driven business applications. As a graphical database frontend, it enables the efficient processing of data stocks and the flexible development of comfortable database applications. ([Source Code](https://github.com/limbas/limbas)) `GPL-2.0` `PHP`
- [Mathesar](https://mathesar.org/) - Intuitive UI to manage data collaboratively, for users of all technical skill levels. Built on Postgres – connect an existing DB or set up a new one. ([Source Code](https://github.com/mathesar-foundation/mathesar)) `GPL-3.0` `Docker/Python`
- [OrcaQ](https://orca-q.com) - Modern database client and IDE for managing, querying, and exploring multiple database types with built-in AI assistant. ([Source Code](https://github.com/cin12211/orca-q)) `MIT` `Nodejs/deb/Docker`
- [StackRender](https://stackrender.io/) - Database schema design and SQL migration generator supporting PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, and Oracle. ([Demo](https://app.stackrender.io/), [Source Code](https://github.com/stackrender/stackrender)) `AGPL-3.0` `Nodejs/Docker`


### DNS

**[`^        back to top        ^`](#awesome-selfhosted)**

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System) servers and management tools with advertisement blocking functionality, primarily aimed at home or small networks.

_See also: [awesome-sysadmin/DNS - Servers](https://github.com/awesome-foss/awesome-sysadmin#dns---servers), [awesome-sysadmin/DNS - Control Panels & Domain Management](https://github.com/awesome-foss/awesome-sysadmin#dns---control-panels--domain-management)_

- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) - User-friendly ads & trackers blocking DNS server. ([Source Code](https://github.com/AdguardTeam/AdGuardHome)) `GPL-3.0` `Docker`
- [blocky](https://0xerr0r.github.io/blocky/latest/) - Fast and lightweight DNS proxy as ad-blocker for local network with many features (alternative to Pi-hole). ([Source Code](https://github.com/0xERR0R/blocky)) `Apache-2.0` `Go/Docker`
- [Maza ad blocking](https://maza-ad-blocking.andros.dev/) - Local ad blocker. Like Pi-hole but local and using your operating system. ([Source Code](https://github.com/tanrax/maza-ad-blocking)) `Apache-2.0` `Shell`
- [Numa](https://numa.rs/) - Ad-blocking DNS resolver with DNSSEC-validating recursive resolution, DoH/DoT/Oblivious DoH, ephemeral overrides, and local service domains, in a single Rust binary (alternative to Pi-hole, AdGuard Home, NextDNS). ([Source Code](https://github.com/razvandimescu/numa)) `MIT` `Rust/Docker/Nix`
- [Pi-hole](https://pi-hole.net/) - Blackhole for Internet advertisements with a GUI for management and monitoring. ([Source Code](https://github.com/pi-hole/pi-hole)) `EUPL-1.2` `Shell/PHP/Docker`
- [Technitium DNS Server](https://technitium.com/dns/) - Authoritative/recursive DNS server with ad blocking functionality. ([Source Code](https://github.com/TechnitiumSoftware/DnsServer)) `GPL-3.0` `Docker/C#`


### Document Management

**[`^        back to top        ^`](#awesome-selfhosted)**

A [document management system](https://en.wikipedia.org/wiki/Document_management_system) (DMS) is a system used to receive, track, manage and store documents and reduce paper.

- [BentoPDF](https://bentopdf.com) `⚠` - Powerful, privacy-first, client-side PDF toolkit that allows you to manipulate, edit, merge, and process PDF files directly in your browser. ([Demo](https://bentopdf.com), [Source Code](https://github.com/alam00000/bentopdf)) `AGPL-3.0` `Nodejs/Docker`
- [Bottle Rocket](https://bottle-rocket.app/) - Document scanning and management application, compatible with Rocketbook and Scribzee formats. ([Source Code](https://github.com/gman-au/bottle-rocket-server)) `MIT` `C#/Docker`
- [Docspell](https://docspell.org) - Auto-tagging document organizer and archive. ([Source Code](https://github.com/eikek/docspell)) `GPL-3.0` `Scala/Java/Docker`
- [Documenso](https://documenso.com) - Digital document signing platform (alternative to DocuSign). ([Source Code](https://github.com/documenso/documenso)) `AGPL-3.0` `Nodejs/Docker`
- [Docuseal](https://www.docuseal.co) - Create, fill, and sign digital documents (alternative to DocuSign). ([Demo](https://demo.docuseal.tech/), [Source Code](https://github.com/docusealco/docuseal)) `AGPL-3.0` `Docker`
- [EveryDocs](https://github.com/jonashellmann/everydocs-core) - Simple Document Management System for private use with basic functionality to organize your documents digitally. `GPL-3.0` `Docker/Ruby`
- [Gotenberg](https://gotenberg.dev) - Developer-friendly API to interact with powerful tools like Chromium and LibreOffice for converting numerous document formats (HTML, Markdown, Word, Excel, etc.) into PDF files, and more. ([Source Code](https://github.com/gotenberg/gotenberg)) `MIT` `Docker`
- [I, Librarian](https://i-librarian.net) - Organize PDF papers and office documents. It provides a lot of extra features for students and research groups both in industry and academia. ([Demo](https://eu1.i-librarian.net/demo), [Source Code](https://github.com/mkucej/i-librarian-free)) `GPL-3.0` `PHP`
- [Mayan EDMS](https://www.mayan-edms.com) - Electronic document management system for your documents with preview generation, OCR, and automatic categorization among other features. ([Source Code](https://gitlab.com/mayan-edms/mayan-edms)) `GPL-2.0` `Docker/K8S`
- [OpenSign](https://www.opensignlabs.com) `⚠` - Document signing software (alternative to DocuSign). ([Source Code](https://github.com/opensignlabs/opensign)) `AGPL-3.0` `Nodejs/Docker`
- [Paperless-ngx](https://docs.paperless-ngx.com/) - Scan, index, and archive all of your paper documents with an improved interface (fork of Paperless). ([Demo](https://demo.paperless-ngx.com/), [Source Code](https://github.com/paperless-ngx/paperless-ngx)) `GPL-3.0` `Python/Docker`
- [Papermerge](https://papermerge.com) - Document management system focused on scanned documents (electronic archives). Features file browsing in similar way to dropbox/google drive. OCR, full text search, text overlay/selection. ([Source Code](https://github.com/papermerge/papermerge-core)) `Apache-2.0` `Docker/K8S`
- [Papra](https://papra.app) - Minimalist document storage, management and archiving platform designed to be simple to use and accessible to everyone. ([Demo](https://demo.papra.app/), [Source Code](https://github.com/papra-hq/papra/)) `AGPL-3.0` `Docker`
- [PdfDing](https://www.pdfding.com) - PDF manager, viewer and editor offering a seamless user experience on multiple devices. It's designed to be minimal, fast, and easy to set up using Docker. ([Demo](https://demo.pdfding.com), [Source Code](https://codeberg.org/mrmn/PdfDing)) `AGPL-3.0` `Docker/K8S`
- [SeedDMS](https://www.seeddms.org) - Document Management System with workflows, access rights, fulltext search, and more. ([Demo](https://www.seeddms.org/about/), [Source Code](https://sourceforge.net/p/seeddms/code/ci/master/tree/)) `GPL-2.0` `PHP`
- [Signature PDF](https://github.com/24eme/signaturepdf) - Sign and manipulate PDFs with collaboration, organization, compression and metadata editing. ([Demo](https://pdf.24eme.fr/)) `AGPL-3.0` `PHP/deb/Docker`
- [SimpleDMS](https://simpledms.eu) - Easy-to-use, metadata-driven, document management system (DMS) for small businesses that sorts documents almost by itself. ([Source Code](https://github.com/simpledms/simpledms), [Clients](https://simpledms.eu/en/product/integrations)) `AGPL-3.0` `Docker`
- [SnapOtter](https://snapotter.com) - Suite of 200+ web tools for converting and editing images, videos, audio and PDFs, including a layer-based image editor, OCR, transcription, background removal and batch processing pipelines (alternative to SmallPDF, iLovePDF, CloudConvert). ([Demo](https://demo.snapotter.com), [Source Code](https://github.com/snapotter-hq/SnapOtter)) `AGPL-3.0` `Docker`
- [Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) - Local hosted web application that allows you to perform various operations on PDF files, such as merging, splitting, file conversions and OCR. `Apache-2.0` `Docker/Java`


### Document Management - E-books

**[`^        back to top        ^`](#awesome-selfhosted)**

[Ebook](https://en.wikipedia.org/wiki/Ebook) library management software.

- [Atsumeru](https://atsumeru.xyz) - Manga/comic/light novel media server with clients for Windows, Linux, macOS and Android. ([Source Code](https://github.com/Atsumeru-xyz/Atsumeru), [Clients](https://atsumeru.xyz/guides/#how-does-it-work)) `MIT` `Java/Docker`
- [Bindery](https://github.com/jarynclouatre/bindery) - Folder-watching converter for e-books and comics. EPUB to Kobo KEPUB via kepubify, CBZ/CBR/PDF via Kindle Comic Converter, with per-device profiles, ComicInfo.xml naming, chapter-to-volume bundling and a web UI. `MIT` `Docker`
- [BookLogr](https://github.com/Mozzo1000/booklogr) - Manage your personal book library with ease. ([Demo](https://demo.booklogr.app/)) `Apache-2.0` `Docker`
- [Calibre Web Automated](https://github.com/crocodilestick/Calibre-Web-Automated) - All-in-one solution, combining the modern lightweight web UI from Calibre-Web with the robust, versatile feature set of Calibre (fork of Calibre Web). `GPL-3.0` `Docker`
- [Calibre Web](https://github.com/janeczku/calibre-web) - Browse, read and download eBooks using an existing Calibre database. `GPL-3.0` `Python`
- [Calibre](https://calibre-ebook.com/) - E-book library manager that can view, convert, and catalog e-books in most of the major e-book formats and provides a built-in Web server for remote clients. ([Demo](https://calibre-ebook.com/demo), [Source Code](https://github.com/kovidgoyal/calibre)) `GPL-3.0` `Python/deb`
- [Grimmory](https://grimmory.org/) - Library for ebooks, comics and audiobooks with a built-in reader, metadata lookup, multi-user support, OPDS, and Kobo/KOReader sync. ([Source Code](https://github.com/grimmory-tools/grimmory)) `AGPL-3.0` `Docker`
- [Inkheart](https://gitlab.com/Nystik/inkheart) - Lightweight PDF library and reader. `Apache-2.0` `Docker`
- [Kapowarr](https://casvt.github.io/Kapowarr/) - Build and manage a comic book library. Download, rename, move and convert issues of the volume to your liking. ([Source Code](https://github.com/Casvt/Kapowarr)) `GPL-3.0` `Docker/Python`
- [Kavita](https://www.kavitareader.com/) - Cross-platform e-book/manga/comic/pdf server and web reader with user management, ratings and reviews, and metadata support. ([Demo](https://www.kavitareader.com/#demo), [Source Code](https://github.com/Kareadita/Kavita)) `GPL-3.0` `.NET/Docker`
- [kiwix-serve](https://github.com/kiwix/kiwix-tools) - HTTP daemon for serving wikis from ZIM files. `GPL-3.0` `C++`
- [Komga](https://komga.org) - Media server for comics/mangas/BDs with API and OPDS support, a modern web interface for exploring your libraries, as well as a web reader. ([Source Code](https://github.com/gotson/komga)) `MIT` `Java/Docker`
- [MyMangaDB](https://github.com/FabianRolfMatthiasNoll/MyMangaDB) `⚠` - Manga collection manager with automatic metadata, MyAnimeList import and detailed collection statistics. `GPL-3.0` `Docker`
- [Stump](https://www.stumpapp.dev) - Fast comics, manga and digital book server with OPDS support. ([Source Code](https://github.com/stumpapp/stump)) `MIT` `Rust`
- [Tome](https://tome.bndct.sh) - Ebook and manga library server with web reader, OPDS and metadata fetching. A KOReader plugin records every reading session and syncs positions both ways, powering streaks, pace, heatmaps and per-book stats. ([Source Code](https://github.com/bndct-devops/tome), [Clients](https://github.com/bndct-devops/tome/blob/main/docs/koreader-plugin.md)) `AGPL-3.0` `Docker`


### Document Management - Institutional Repository and Digital Library Software

**[`^        back to top        ^`](#awesome-selfhosted)**

[Institutional repository](https://en.wikipedia.org/wiki/Institutional_repository) and [digital library](https://en.wikipedia.org/wiki/Digital_library) management software.

- [DSpace](http://www.dspace.org/) - Turnkey repository application providing durable access to digital resources. ([Source Code](https://github.com/DSpace/DSpace)) `BSD-3-Clause` `Java`
- [EPrints](https://www.eprints.org/) - Digital document management system with a flexible metadata and workflow model primarily aimed at academic institutions. ([Demo](http://tryme.demo.eprints-hosting.org/), [Source Code](https://github.com/eprints/eprints3.4)) `GPL-3.0` `Perl`
- [Fedora Commons Repository](https://wiki.lyrasis.org/display/FF/Fedora+Repository+Home) - Robust and modular repository system for the management and dissemination of digital content especially suited for digital libraries and archives, both for access and preservation. ([Source Code](https://github.com/fcrepo/fcrepo)) `Apache-2.0` `Java`
- [InvenioRDM](https://inveniordm.docs.cern.ch/) - Highly scalable turn-key research data management platform with a beautiful user experience. ([Demo](https://inveniordm.web.cern.ch/), [Source Code](https://github.com/inveniosoftware/invenio-app-rdm), [Clients](https://inveniosoftware.org/products/rdm/)) `MIT` `Python`
- [Islandora](https://www.islandora.ca/) - Drupal module for browsing and managing Fedora-based digital repositories. ([Demo](https://sandbox.islandora.ca/), [Source Code](https://github.com/Islandora/islandora)) `GPL-3.0` `PHP`
- [Samvera Hyrax](https://samvera.org/) - Front-end for the Samvera framework, which itself is a Ruby on Rails application for browsing and managing Fedora-based digital repositories. ([Source Code](https://github.com/samvera/hyrax)) `Apache-2.0` `Ruby`


### Document Management - Integrated Library Systems (ILS)

**[`^        back to top        ^`](#awesome-selfhosted)**

An [integrated library system](https://en.wikipedia.org/wiki/Integrated_library_system) is an enterprise resource planning system for a library, used to track items owned, orders made, bills paid, and patrons who have borrowed.

_Related: [Content Management Systems (CMS)](#content-management-systems-cms), [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)_

- [Evergreen](https://evergreen-ils.org) - Highly-scalable software for libraries that helps library patrons find library materials, and helps libraries manage, catalog, and circulate those materials. ([Source Code](https://github.com/evergreen-library-system/Evergreen)) `GPL-2.0` `PLpgSQL`
- [Koha](https://koha-community.org/) - Enterprise-class ILS with modules for acquisitions, circulation, cataloging, label printing, offline circulation for when Internet access is not available, and much more. ([Demo](https://koha-community.org/demo/), [Source Code](https://github.com/Koha-Community/Koha)) `GPL-3.0` `Perl`
- [RERO ILS](https://rero21.ch/) - Large-scale ILS that can be run as a service with consortial features, intended primarily for library networks. Includes most standard modules (circulation, acquisitions, cataloging,...) and a web-based public and professional interface. ([Demo](https://ils.test.rero.ch/), [Source Code](https://github.com/rero/rero-ils)) `AGPL-3.0` `Python/Docker`


### E-commerce

**[`^        back to top        ^`](#awesome-selfhosted)**

[E-commerce](https://en.wikipedia.org/wiki/E-commerce) software.

_Related: [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)_

- [Aimeos](https://aimeos.org/) - E-commerce framework for building custom online shops, market places and complex B2B applications scaling to billions of items with Laravel. ([Demo](https://demo.aimeos.org/), [Source Code](https://github.com/aimeos/aimeos)) `LGPL-3.0/MIT` `PHP`
- [Bagisto](https://bagisto.com/en/) - Leading Laravel e-commerce framework with multi-inventory sources, taxation, localization, dropshipping and more exciting features. ([Demo](https://demo.bagisto.com/), [Source Code](https://github.com/bagisto/bagisto)) `MIT` `PHP`
- [CoreShop](https://www.coreshop.org) - E-commerce plugin for Pimcore. ([Source Code](https://github.com/coreshop/CoreShop)) `GPL-3.0` `PHP`
- [Drupal Commerce](https://drupalcommerce.org) - Popular e-commerce module for Drupal CMS, with support for dozens of payment, shipping, and shopping related modules. ([Source Code](https://git.drupalcode.org/project/commerce)) `GPL-2.0` `PHP`
- [EverShop](https://evershop.io/) `⚠` - E-commerce platform with essential commerce features. Modular architecture and fully customizable. ([Demo](https://demo.evershop.io/), [Source Code](https://github.com/evershopcommerce/evershop)) `GPL-3.0` `Docker/Nodejs`
- [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) - Leading provider of open omnichannel innovation. ([Source Code](https://github.com/magento/magento2)) `OSL-3.0` `PHP`
- [MedusaJs](https://medusajs.com/) - Headless commerce engine that enables developers to create amazing digital commerce experiences. ([Demo](https://next.medusajs.com/), [Source Code](https://github.com/medusajs/medusa)) `MIT` `Nodejs`
- [myCart](https://github.com/shurco/mycart) `⚠` - Shopping cart in 1 file (with support for payment by card or cryptocurrency). `MIT` `Go/Docker`
- [Open Source POS](https://github.com/opensourcepos/opensourcepos) - Web-based point of sale system. `MIT` `PHP`
- [OpenCart](https://www.opencart.com) - Shopping cart solution. ([Source Code](https://github.com/opencart/opencart)) `GPL-3.0` `PHP`
- [PrestaShop](https://www.prestashop.com/) - Fully scalable e-commerce solution. ([Demo](https://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop)) `OSL-3.0` `PHP`
- [Pretix](https://pretix.eu/) - Ticket sales platform for events. ([Source Code](https://github.com/pretix/pretix)) `AGPL-3.0` `Python/Docker`
- [s-cart](https://s-cart.org/) - E-commerce website for individuals and businesses, built on top of Laravel Framework. ([Demo](https://demo.s-cart.org/), [Source Code](https://github.com/gp247net/s-cart)) `MIT` `PHP`
- [Saleor](https://saleor.io) - GraphQL native, API-only platform for scalable composable e-commerce storefront. ([Demo](https://demo.saleor.io/), [Source Code](https://github.com/saleor/saleor)) `BSD-3-Clause` `Docker/Python`
- [Shopware Community Edition](https://www.shopware.com/en/community/community-edition/) - PHP based open source e-commerce software made in Germany. ([Demo](https://www.shopware.com/en/test-demo/), [Source Code](https://github.com/shopware/shopware)) `MIT` `PHP`
- [Solidus](https://solidus.io/) - Ecommerce platform that gives you complete control over your store. ([Source Code](https://github.com/solidusio/solidus)) `BSD-3-Clause` `Ruby/Docker`
- [Spree Commerce](https://spreecommerce.org) - Complete, modular & API-driven e-commerce solution for Ruby on Rails. ([Demo](https://demo.spreecommerce.org/), [Source Code](https://github.com/spree/spree)) `BSD-3-Clause` `Ruby`
- [Sylius](https://sylius.com) - Symfony2 powered full-stack platform for eCommerce. ([Demo](https://sylius.com/try/), [Source Code](https://github.com/Sylius/Sylius)) `MIT` `PHP`
- [Thelia](https://thelia.net/) - Flexible e-commerce solution. ([Demo](https://demo.thelia.net/), [Source Code](https://github.com/thelia/thelia)) `LGPL-3.0` `PHP`
- [Vendure](https://www.vendure.io) - Headless commerce framework. ([Demo](https://demo.vendure.io), [Source Code](https://github.com/vendurehq/vendure)) `MIT` `Nodejs`
- [WooCommerce](https://woocommerce.com/) - WordPress based e-commerce solution. ([Source Code](https://github.com/woocommerce/woocommerce)) `GPL-3.0` `PHP`


### Federated Identity & Authentication

**[`^        back to top        ^`](#awesome-selfhosted)**

[Federated identity](https://en.wikipedia.org/wiki/Federated_identity) and [authentication](https://en.wikipedia.org/wiki/Electronic_authentication) software.

**Please visit [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)**



### Feed Readers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [news aggregator](https://en.wikipedia.org/wiki/News_aggregator), also termed a feed aggregator, feed reader, news reader, [RSS](https://en.wikipedia.org/wiki/RSS) reader, is an application that aggregates web content such as newspapers/blogs/vlogs/podcasts in one location for easy viewing.

- [Bubo Reader](https://github.com/georgemandis/bubo-rss) - Irrationally minimal RSS feed reader. ([Demo](https://bubo-rss-demo.netlify.app/)) `MIT` `Nodejs`
- [CommaFeed](https://www.commafeed.com/) - Google Reader inspired RSS reader. ([Demo](https://www.commafeed.com/#/app/category/all), [Source Code](https://github.com/Athou/commafeed)) `Apache-2.0` `Java/Docker`
- [Feeds Fun](https://feeds.fun/) - News reader with tags, scoring, and AI. ([Source Code](https://github.com/Tiendil/feeds.fun)) `BSD-3-Clause` `Python`
- [FreshRSS](https://freshrss.org/) - Self-hostable RSS feed aggregator. ([Demo](https://demo.freshrss.org/i/), [Source Code](https://github.com/FreshRSS/FreshRSS)) `AGPL-3.0` `PHP/Docker`
- [Fusion](https://github.com/0x2E/fusion) - Lightweight RSS aggregator and reader. `MIT` `Go/Docker`
- [Goeland](https://github.com/slurdge/goeland) - Turns any RSS/Atom feed into a beautiful email digest. `MIT` `Go/Docker`
- [JARR](https://1pxsolidblack.pl/jarr-en.html) - JARR (Just Another RSS Reader) is a web-based news aggregator and reader (fork of Newspipe). ([Demo](https://www.jarr.info/), [Source Code](https://github.com/jaesivsm/JARR)) `AGPL-3.0` `Docker/Python`
- [Kriss Feed](https://github.com/tontof/kriss_feed) - Simple and smart (or stupid) feed reader. `CC0-1.0` `PHP`
- [Leed](https://github.com/LeedRSS/Leed) - Minimalist RSS aggregator (Leed stands for Light Feed). `AGPL-3.0` `PHP`
- [Miniflux](https://miniflux.app/) - Minimalist news reader. ([Source Code](https://github.com/miniflux/v2)) `Apache-2.0` `Go/deb/Docker`
- [NewsBlur](https://www.newsblur.com/) - Personal news reader that brings people together to talk about the world. A new sound of an old instrument. ([Source Code](https://github.com/samuelclay/NewsBlur)) `MIT` `Python`
- [Newspipe](https://git.sr.ht/~cedric/newspipe) - Web news reader. ([Demo](https://www.newspipe.org/signup)) `AGPL-3.0` `Python`
- [reader](https://github.com/lemon24/reader) - Feed reader web app and library (so you can use it to build your own), with only standard library and pure-Python dependencies. `BSD-3-Clause` `Python`
- [Readflow](https://readflow.app) - Lightweight news reader with modern interface and features: full-text search, automatic categorization, archiving, offline support, notifications. ([Source Code](https://github.com/ncarlier/readflow)) `AGPL-3.0` `Go/Docker`
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - Generate RSS/ATOM feeds for websites which don't have one. `Unlicense` `PHP/Docker`
- [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - Easy to use web-based RSS aggregator and reader compatible with the Fever API (alternative to Google Reader). `MIT` `PHP`
- [RSS2EMail](https://github.com/rss2email/rss2email) - Fetches RSS/Atom-feeds and pushes new content to any email-receiver, supports OPML. `GPL-2.0` `Python/deb`
- [RSSHub](https://docs.rsshub.app) - Easy to use, and extensible RSS feed aggregator capable of generating RSS feeds from pretty much everything ranging from social media to university departments. ([Demo](https://rsshub.app), [Source Code](https://github.com/DIYgod/RSSHub)) `MIT` `Nodejs/Docker`
- [Selfoss](https://selfoss.aditu.de/) - New multipurpose rss reader, live stream, mashup, aggregation web application. ([Source Code](https://github.com/fossar/selfoss)) `GPL-3.0` `PHP`
- [Stringer](https://github.com/stringer-rss/stringer) - Work-in-progress, anti-social RSS reader that. `MIT` `Ruby`
- [Tiny Tiny RSS](https://tt-rss.org) - Web-based news feed (RSS/Atom) reader and aggregator. ([Source Code](https://github.com/tt-rss/tt-rss)) `GPL-3.0` `Docker/PHP`
- [TinyFeed](https://feed.lovergne.dev/) - Generate a static HTML page from a collection of feeds with a simple CLI. ([Demo](https://feed.lovergne.dev/demo), [Source Code](https://github.com/TheBigRoomXXL/tinyfeed)) `MIT` `Go/Docker`
- [Upvote RSS](https://www.upvote-rss.com/) `⚠` - Generate rich RSS feeds from Reddit, Hacker News, Lemmy, Mbin, and more. ([Demo](https://www.upvote-rss.com/), [Source Code](https://github.com/johnwarne/upvote-rss)) `MIT` `Docker/PHP`
- [Yarr](https://github.com/nkanaev/yarr) - Yarr (yet another rss reader) is a web-based feed aggregator which can be used both as a desktop application and as a personal server. `MIT` `Go`


### File Transfer & Synchronization

**[`^        back to top        ^`](#awesome-selfhosted)**

[File transfer](https://en.wikipedia.org/wiki/File_transfer), [sharing](https://en.wikipedia.org/wiki/File_sharing) and [synchronization software](https://en.wikipedia.org/wiki/File_synchronization) software.

_Related: [Groupware](#groupware)_

- [bewCloud](https://bewcloud.com) - File sharing + sync, notes, and photos (alternative to Nextcloud and ownCloud's RSS reader). ([Source Code](https://github.com/bewcloud/bewcloud), [Clients](https://github.com/bewcloud)) `AGPL-3.0` `Docker`
- [Cloudreve](https://cloudreve.org/) - File management and sharing system, supports multiple storage providers. ([Demo](https://demo.cloudreve.org), [Source Code](https://github.com/cloudreve/cloudreve)) `GPL-3.0` `Docker/Go`
- [Git Annex](https://git-annex.branchable.com/) - File synchronization between computers, servers, external drives. ([Source Code](https://git.joeyh.name/index.cgi/git-annex.git/)) `GPL-3.0` `Haskell`
- [Kinto](https://kinto.readthedocs.org) - Minimalist JSON storage service with synchronisation and sharing abilities. ([Source Code](https://github.com/Kinto/kinto)) `Apache-2.0` `Python`
- [Nextcloud](https://nextcloud.com/) - Access and share your files, calendars, contacts, mail and more from any device, on your terms. ([Demo](https://try.nextcloud.com/), [Source Code](https://github.com/nextcloud/server), [Clients](https://apps.nextcloud.com)) `AGPL-3.0` `PHP/deb`
- [OpenCloud](https://docs.opencloud.eu/) - File Sharing and Collaboration Platform. ([Source Code](https://github.com/opencloud-eu/opencloud)) `Apache-2.0` `Docker/Go/Nodejs`
- [OpenSSH SFTP server](https://www.openssh.com/) - Secure File Transfer Program. ([Source Code](https://cvsweb.openbsd.org/src/usr.bin/ssh?sort=File)) `BSD-2-Clause` `C/deb`
- [ownCloud](https://owncloud.org/) - All-in-one solution for saving, synchronizing, viewing, editing and sharing files, calendars, address books and more. ([Source Code](https://github.com/owncloud/core), [Clients](https://github.com/owncloud/core/wiki/Apps)) `AGPL-3.0` `PHP/Docker/deb`
- [Peergos](https://peergos.org) - Secure and private space online where you can store, share and view your photos, videos, music and documents. Also includes a calendar, news feed, task lists, chat and email client. ([Source Code](https://github.com/Peergos/Peergos)) `AGPL-3.0` `Java`
- [Puter](https://puter.com/) - Web-based operating system designed to be feature-rich, exceptionally fast, and highly extensible. ([Demo](https://puter.com/), [Source Code](https://github.com/heyputer/puter)) `AGPL-3.0` `Nodejs/Docker`
- [Pydio](https://pydio.com/) - Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers. ([Demo](https://pydio.com/en/demo), [Source Code](https://github.com/pydio/cells)) `AGPL-3.0` `Go`
- [Samba](https://www.samba.org/) - Standard Windows interoperability suite of programs for Linux and Unix. It provides secure, stable and fast file and print services for all clients using the SMB/CIFS protocol. ([Source Code](https://git.samba.org/samba.git/)) `GPL-3.0` `C`
- [Seafile](https://www.seafile.com/en/home/) - File hosting and sharing solution primary for teams and organizations. ([Source Code](https://github.com/haiwen/seafile)) `GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0` `C`
- [Sync-in](https://sync-in.com) - File storage, syncing, sharing, and collaboration with real-time editing, permission management, and desktop/CLI clients. ([Demo](https://sync-in.com/docs/demo), [Source Code](https://github.com/Sync-in/server), [Clients](https://github.com/Sync-in/desktop)) `AGPL-3.0` `Nodejs/Docker`
- [Syncthing](https://syncthing.net/) - Peer-to-peer file synchronisation tool. ([Source Code](https://github.com/syncthing/syncthing)) `MPL-2.0` `Go/Docker/deb`
- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - File-synchronization tool for OSX, Unix, and Windows. ([Source Code](https://github.com/bcpierce00/unison)) `GPL-3.0` `deb/OCaml`


### File Transfer - Distributed Filesystems

**[`^        back to top        ^`](#awesome-selfhosted)**

Network distributed filesystems.

**Please visit [awesome-sysadmin/Distributed Filesystems](https://github.com/awesome-foss/awesome-sysadmin#distributed-filesystems)**



### File Transfer - Object Storage & File Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Object storage](https://en.wikipedia.org/wiki/Object_storage) is a computer data storage that manages data as objects, as opposed to other storage architectures like file systems which manages data as a file hierarchy, and block storage which manages data as blocks within sectors and tracks.

- [GarageHQ](https://garagehq.deuxfleurs.fr/) - Geo-distributed, S3‑compatible storage service that can fulfill many needs. ([Source Code](https://git.deuxfleurs.fr/Deuxfleurs/garage)) `AGPL-3.0` `Docker/Rust`
- [Harbor](https://goharbor.io/) - Cloud native image registry that stores, signs, and scans content. ([Source Code](https://github.com/goharbor/harbor)) `Apache-2.0` `Docker/K8S`
- [s3-orchestrator](https://s3-orchestrator.munchbox.cc) - Storage orchestration layer presenting many cloud providers as a single S3 endpoint, keeping N copies across them with read failover, plus optional per-backend byte, request, ingress and egress limits, zstd compression and envelope encryption. ([Source Code](https://github.com/afreidah/s3-orchestrator)) `MIT` `Go/Docker/deb/K8S`
- [SeaweedFS](https://github.com/seaweedfs/seaweedfs) - Distributed file system supporting WebDAV, S3 API, FUSE mount, HDFS, etc, optimized for lots of small files, and easy to add capacity. `Apache-2.0` `Go`
- [Zenko CloudServer](https://www.zenko.io/cloudserver) - Implementation of the Amazon S3 protocol on the front-end and backend storage capabilities to multiple clouds, including Azure and Google. ([Source Code](https://github.com/scality/cloudserver)) `Apache-2.0` `Docker/Nodejs`
- [ZOT OCI Registry](https://zotregistry.dev) - Production-ready vendor-neutral OCI-native container image registry. ([Demo](https://zothub.io), [Source Code](https://github.com/project-zot/zot)) `Apache-2.0` `Go/Docker`


### File Transfer - Peer-to-peer Filesharing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Peer-to-peer file sharing](https://en.wikipedia.org/wiki/Peer-to-peer_file_sharing) is the distribution and [sharing](https://en.wikipedia.org/wiki/File_sharing) of digital media using [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) (P2P) networking technology.

- [bittorrent-tracker](https://webtorrent.io/) - Simple, robust, BitTorrent tracker (client and server) implementation. ([Source Code](https://github.com/webtorrent/bittorrent-tracker)) `MIT` `Nodejs`
- [DashBeam](https://dashbeam.net) - File transfer tool with peer-to-peer networking, letting you transfer any file with any size. ([Demo](https://app.dashbeam.net/), [Source Code](https://github.com/tonyantony300/dashbeam)) `AGPL-3.0` `deb/Docker`
- [Deluge](https://deluge-torrent.org/) - Lightweight, cross-platform BitTorrent client. ([Source Code](https://git.deluge-torrent.org/deluge/tree/?h=develop)) `GPL-3.0` `Python/deb`
- [PrivyDrop](https://www.privydrop.app) - Simple and user-friendly, breakpoint-resumable peer-to-peer text, image, and file transfer tool based on WebRTC. ([Source Code](https://github.com/david-bai00/PrivyDrop)) `MIT` `Docker/Nodejs`
- [qBittorrent](https://www.qbittorrent.org/) - Free cross-platform bittorrent client with a feature rich Web UI for remote access. ([Source Code](https://github.com/qbittorrent/qBittorrent)) `GPL-2.0` `C++`
- [slskd](https://github.com/slskd/slskd) `⚠` - Modern client-server application for the Soulseek file sharing network. `AGPL-3.0` `Docker/C#`
- [Transmission](https://transmissionbt.com/) - Fast, easy, free Bittorrent client. ([Source Code](https://github.com/transmission/transmission)) `GPL-3.0` `C++/deb`
- [Webtor](https://github.com/webtor-io/self-hosted) - Web-based torrent client with instant audio/video streaming. ([Demo](https://webtor.io)) `MIT` `Docker`


### File Transfer - Single-click & Drag-n-drop Upload

**[`^        back to top        ^`](#awesome-selfhosted)**

Simplified file servers for sharing of one-time/short-lived/temporary files, providing single-click or [drag-and-drop](https://en.wikipedia.org/wiki/Drag_and_drop) upload functionality.

- [015](https://send.fudaoyuan.icu) - Temporary file sharing platform. Focused on providing one-time, temporary file and text upload, processing, and sharing services. ([Source Code](https://github.com/keven1024/015)) `AGPL-3.0` `Docker`
- [Chibisafe](https://chibisafe.app) - File uploader service that aims to to be easy to use and set up. It accepts files, photos, documents, anything you imagine and gives you back a shareable link for you to send to others. ([Source Code](https://github.com/chibisafe/chibisafe)) `MIT` `Docker/Nodejs`
- [Digirecord](https://ladigitale.dev/digirecord/) - Record and share audio files (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digirecord)) `AGPL-3.0` `Nodejs/PHP`
- [elixire](https://gitlab.com/elixire/elixire) - Simple yet advanced screenshot uploading and link shortening service. ([Clients](https://gitlab.com/elixire/elixiremanager)) `AGPL-3.0` `Python`
- [Files Sharing](https://github.com/axeloz/filesharing) - File sharing application based on unique and temporary links. `GPL-3.0` `PHP/Docker`
- [Flare](https://github.com/FlintSH/Flare) - Nonbloated, modern, and highly configurable file/screenshot vault server with support for ShareX, Flameshot, and Spectacle. Offers OCR search and more. `MIT` `Docker/Nodejs`
- [Gokapi](https://github.com/Forceu/gokapi) - Lightweight server to share files, which expire after a set amount of downloads or days. Similar to the discontinued Firefox Send, with the difference that only the admin is allowed to upload files. `GPL-3.0` `Go/Docker`
- [goploader](https://depado.github.io/goploader/) - Easy file sharing with server-side encryption, curl/httpie/wget compliant. ([Source Code](https://github.com/Depado/goploader)) `MIT` `Go`
- [GoSƐ](https://codeberg.org/stv0g/gose) - Modern file-uploader focusing on scalability and simplicity. It only depends on a S3 storage backend and hence scales horizontally without the need for additional databases or caches. `Apache-2.0` `Go/Docker`
- [Jirafeau](https://gitlab.com/jirafeau/Jirafeau) - One-click-fileshare project. Select your file, upload, and share a link. That's it. `AGPL-3.0` `PHP/Docker`
- [OnionShare](https://github.com/onionshare/onionshare) - Securely and anonymously share a file of any size. `GPL-3.0` `Python/deb`
- [PicoShare](https://github.com/mtlynch/picoshare) - Minimalist, easy-to-host service for sharing images and other files. ([Clients](https://github.com/mtlynch/picoshare#third-party-clients)) `AGPL-3.0` `Go/Docker`
- [PictShare](https://www.pictshare.net/) - Multi lingual image hosting service with a simple resizing and upload API. ([Source Code](https://github.com/HaschekSolutions/pictshare)) `Apache-2.0` `PHP/Docker`
- [Pingvin Share X](https://github.com/smp46/pingvin-share-x) - File sharing platform with support for logins, reverse shares, share expiry, S3 Buckets, advanced authentication, ClamAV for security scans and more (fork of Pingvin Share). `BSD-2-Clause` `Docker/Nodejs`
- [Plik](https://github.com/root-gg/plik) - Scalable and friendly temporary file upload system. ([Demo](https://plik.root.gg/)) `MIT` `Go/Docker`
- [ProjectSend](https://www.projectsend.org/) - Upload files and assign them to specific clients you create. Give access to those files to your clients. ([Source Code](https://github.com/projectsend/projectsend)) `GPL-2.0` `PHP`
- [PsiTransfer](https://github.com/psi-4ward/psitransfer) - Simple file sharing solution with robust up-/download-resume and password protection. `BSD-2-Clause` `Nodejs`
- [QuickShare](https://ihexxa.github.io/quickshare.site/) - Quick and simple file sharing between different devices. ([Source Code](https://github.com/ihexxa/quickshare)) `LGPL-3.0` `Docker/Go`
- [Safebucket](https://docs.safebucket.io/) - File sharing platform with pluggable infrastructure, where uploads and downloads go directly between clients and S3-compatible storage. ([Source Code](https://github.com/safebucket/safebucket)) `Apache-2.0` `Go/Docker`
- [sE2EEnd](https://github.com/sE2EEnd/sE2EEnd) - End-to-end encrypted file sharing with password protection, download limits, and auto-expiration, integrated with Keycloak for authentication. `AGPL-3.0` `Docker`
- [Sharry](https://github.com/eikek/sharry) - Share files easily over the internet between authenticated and anonymous users (both ways) with resumable up- and downloads. `GPL-3.0` `Scala/Java/deb/Docker`
- [Shifter](https://github.com/TobySuch/Shifter) - Simple file-sharing web app. `MIT` `Docker`
- [Slink](https://docs.slinkapp.io/) - Image sharing platform designed to give users complete control over their media sharing experience. ([Source Code](https://github.com/andrii-kryvoviaz/slink)) `AGPL-3.0` `Docker`
- [snowshare](https://github.com/TuroYT/snowshare) - File and link sharing platform with URL shortening, code snippet sharing, and file uploads, featuring customizable expiration, privacy settings, and QR codes. ([Demo](https://s.romain-pinsolle.fr)) `CC0-1.0` `Nodejs/Docker`
- [transfer.sh](https://github.com/dutchcoders/transfer.sh) - Easy file sharing from the command line. `MIT` `Go`
- [Uguu](https://github.com/nokonoko/uguu) - Stores files and deletes after X amount of time. `MIT` `PHP`
- [XBackBone](https://xbackbone.app/) - Simple, fast and lightweight file manager with instant sharing tools integration, like ShareX. ([Source Code](https://github.com/SergiX44/XBackBone)) `AGPL-3.0` `PHP/Docker`
- [Zipline](https://github.com/diced/zipline) - Lightweight, fast and reliable file sharing server that is commonly used with ShareX, offering a react-based Web UI and fast API. `MIT` `Docker/Nodejs`


### File Transfer - Web-based File Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

Web-based [file managers](https://en.wikipedia.org/wiki/File_manager).

_Related: [Groupware](#groupware)_

- [Apaxy](https://oupala.github.io/apaxy/) - Theme built to enhance the experience of browsing web directories, using the mod_autoindex Apache module and some CSS to override the default style of a directory listing. ([Source Code](https://github.com/oupala/apaxy)) `GPL-3.0` `Javascript`
- [ClyoCloud](https://clyo.cloud/) - Personal cloud storage and media management application built for privacy, efficiency, and aesthetics. ([Source Code](https://code.weexnes.dev/ClyoCloud)) `AGPL-3.0` `Nodejs`
- [copyparty](https://github.com/9001/copyparty) - Portable file server with accelerated resumable uploads, deduplication, WebDAV, FTP, zeroconf, media indexer, video thumbnails, audio transcoding, and write-only folders, in a single file with no mandatory dependencies. ([Demo](https://a.ocv.me/pub/demo/)) `MIT` `Python`
- [Directory Lister](https://www.directorylister.com/) - Simple PHP based directory lister that lists a directory and all its sub-directories and allows you to navigate there within. ([Source Code](https://github.com/DirectoryLister/DirectoryLister)) `MIT` `PHP/Docker`
- [FileGator](https://filegator.io/) - Powerful multi-user file manager with a single page front-end. ([Demo](https://demo.filegator.io), [Source Code](https://github.com/filegator/filegator)) `MIT` `PHP/Docker`
- [FileRise](https://github.com/error311/FileRise) - Web file manager with uploads, tagging, share links, gallery/table views, and an in-browser editor. ([Demo](https://github.com/error311/FileRise?tab=readme-ov-file#live-demo)) `MIT` `Docker/PHP`
- [Filestash](https://www.filestash.app/) - Web file manager that lets you manage your data anywhere it is located: FTP, SFTP, WebDAV, Git, S3, Minio, Dropbox, or Google Drive. ([Demo](https://demo.filestash.app/), [Source Code](https://github.com/mickael-kerjean/filestash)) `AGPL-3.0` `Docker`
- [IFM](https://github.com/misterunknown/ifm) - Single script file manager. `MIT` `PHP`
- [mikochi](https://github.com/zer0tonin/Mikochi) - Browse remote folders, upload files, delete, rename, download and stream files to VLC/mpv. `MIT` `Go/Docker/K8S`
- [miniserve](https://github.com/svenstaro/miniserve) - CLI tool to serve files and dirs over HTTP. `MIT` `Rust`
- [ResourceSpace](https://www.resourcespace.com) - Simple, fast, and free way to organise your digital assets. ([Demo](https://www.resourcespace.com/trial), [Source Code](https://www.resourcespace.com/svn)) `BSD-4-Clause` `PHP`
- [slcl](https://codeberg.org/xavidcr/slcl) - Simple and lightweight web cloud storage. `AGPL-3.0` `C`
- [Surfer](https://git.cloudron.io/cloudron/surfer) - Simple static file server with webui to manage files. `MIT` `Nodejs`
- [TagSpaces](https://www.tagspaces.org/) - Offline, cross-platform file manager and organiser that also can function as a note taking app. The WebDAV version of the application can be installed on top of a WebDAV servers such as Nextcloud or ownCloud. ([Demo](https://demo.tagspaces.com), [Source Code](https://github.com/tagspaces/tagspaces)) `AGPL-3.0` `Nodejs`
- [Tiny File Manager](https://tinyfilemanager.github.io) - Web based File Manager in PHP, simple, fast and small file manager with a single file. ([Demo](https://tinyfilemanager.github.io/demo/), [Source Code](https://github.com/prasathmani/tinyfilemanager)) `GPL-3.0` `PHP`


### Games

**[`^        back to top        ^`](#awesome-selfhosted)**

Multiplayer game servers and [browser games](https://en.wikipedia.org/wiki/Browser_game).

_Related: [Games - Administrative Utilities & Control Panels](#games---administrative-utilities--control-panels)_

- [0 A.D.](https://play0ad.com/) - Cross-platform real-time strategy game of ancient warfare. ([Source Code](https://gitea.wildfiregames.com/0ad/0ad)) `MIT/GPL-2.0/Zlib` `C++/C/deb`
- [A Dark Room](https://github.com/doublespeakgames/adarkroom) - Minimalist text adventure game for your browser. ([Demo](https://adarkroom.doublespeakgames.com/)) `MPL-2.0` `Javascript`
- [DDraceNetwork](https://ddnet.org/) - Cooperative platformer version of DDRace, a Teeworlds modification featuring unique cooperative gameplay. ([Source Code](https://github.com/ddnet/ddnet)) `Zlib` `C++`
- [Digibuzzer](https://digibuzzer.app/) - Create a virtual game room around a connected buzzer (documentation in French). ([Demo](https://digibuzzer.app/), [Source Code](https://codeberg.org/ladigitale/digibuzzer)) `AGPL-3.0` `Nodejs`
- [Hypersomnia](https://github.com/TeamHypersomnia/Hypersomnia) - Competitive top-down shooter blending Counter-Strike with Hotline Miami. Runs on Linux, Windows, MacOS and the Web. ([Demo](https://hypersomnia.io)) `AGPL-3.0` `C++/Docker`
- [Lila](https://lichess.org/) - Ad-less chess server powering lichess.org, with official iOS and Android client apps. ([Source Code](https://github.com/lichess-org/lila)) `AGPL-3.0` `Scala`
- [Luanti](https://www.luanti.org/) - Voxel game engine (formerly Minetest). Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server. ([Source Code](https://github.com/luanti-org/luanti)) `LGPL-2.1/MIT/Zlib` `C++/Lua/deb`
- [Mindustry](https://mindustrygame.github.io/) - Factorio-like tower defense game. Build production chains to gather more resources, and build complex facilities. ([Source Code](https://github.com/Anuken/Mindustry)) `GPL-3.0` `Java`
- [MTA:SA](https://multitheftauto.com/) `⚠` - Add network play functionality to Rockstar North's Grand Theft Auto game series, in which this functionality is not originally found. ([Source Code](https://github.com/multitheftauto/mtasa-blue)) `GPL-3.0` `C++`
- [OpenTTD](https://www.openttd.org/) - Transport tycoon simulation game. ([Source Code](https://github.com/OpenTTD/OpenTTD), [Clients](https://bananas.openttd.org/)) `GPL-2.0` `C++/Docker`
- [piqueserver](https://github.com/piqueserver/piqueserver) - Server for openspades, the first-person shooter in a destructible voxel world. ([Clients](https://github.com/yvt/openspades)) `GPL-3.0` `Python/C++`
- [Posio](https://github.com/abrenaut/posio) - Geography multiplayer game. `MIT` `Python`
- [Razzia](https://github.com/Ralex91/Razzia) - Quiz game platform, designed for smaller events (alternative to Kahoot!). `MIT` `Nodejs/Docker`
- [Red Eclipse 2](https://www.redeclipse.net/) - Arena first-person shooter similar to Unreal Tournament. ([Source Code](https://github.com/redeclipse/base)) `Zlib/MIT/CC-BY-SA-4.0` `C/C++/deb`
- [Scribble.rs](https://github.com/scribble-rs/scribble.rs) - Web-based pictionary game. ([Demo](https://scribblers.fly.dev)) `BSD-3-Clause` `Go/Docker`
- [Suroi](https://suroi.io/) - 2D battle royale game inspired by surviv.io. ([Demo](https://suroi.io/), [Source Code](https://github.com/HasangerGames/suroi)) `GPL-3.0` `Nodejs`
- [The Battle for Wesnoth](https://github.com/wesnoth/wesnoth) - Turn-based tactical strategy game with a high fantasy theme, featuring both singleplayer and online/hotseat multiplayer combat. `GPL-2.0` `C++/deb`
- [Veloren](https://veloren.net/) - Multiplayer RPG. Inspired by Cube World, Legend of Zelda, Dwarf Fortress and Minecraft. ([Source Code](https://gitlab.com/veloren/veloren)) `GPL-3.0` `Rust`
- [Zero-K](https://zero-k.info/) - Traditional real time strategy game on the Springrts engine, with a focus on player creativity through terrain manipulation, physics, and a large roster of unique units - all while being balanced to support competitive play. ([Source Code](https://github.com/ZeroK-RTS/Zero-K)) `GPL-2.0` `Lua`


### Games - Administrative Utilities & Control Panels

**[`^        back to top        ^`](#awesome-selfhosted)**

Utilities for managing game servers and game libraries.

_Related: [Games](#games)_

- [auto-mcs](https://www.auto-mcs.com) - Cross-platform Minecraft server manager. ([Source Code](https://github.com/macarooni-man/auto-mcs)) `AGPL-3.0` `Python`
- [Calagopus](https://calagopus.com) - Modern game server management panel. Deploy, monitor, and manage Minecraft, Hytale, and other game servers with industry-leading performance. ([Source Code](https://github.com/calagopus/panel)) `MIT` `Rust/Docker/deb`
- [Crafty Controller](https://craftycontrol.com/) - Minecraft launcher and manager that allows users to start and administer Minecraft servers from a user-friendly interface. ([Source Code](https://gitlab.com/crafty-controller/crafty-4)) `GPL-3.0` `Docker/Python`
- [Drop](https://droposs.org) - Game distribution platform, designed for distributing and sharing DRM-free games efficiently (alternative to Steam, GameVault). ([Source Code](https://github.com/Drop-OSS/drop), [Clients](https://github.com/Drop-OSS/drop-app)) `AGPL-3.0` `Docker`
- [EasyWI](https://easy-wi.com) - Web-interface that allows you to manage server daemons like gameservers. In addition it provides you with a CMS which includes a fully automated game- and voiceserver lending service. ([Source Code](https://github.com/easy-wi/developer/)) `GPL-3.0` `PHP/Shell`
- [GameAP](https://gameap.com/) - Game Administration Panel for managing game servers on Linux and Windows. ([Demo](https://demo.gameap.com/), [Source Code](https://github.com/gameap/gameap), [Clients](https://plugins.gameap.dev/)) `MIT` `Go/Docker`
- [Gameyfin](https://gameyfin.org) - Video game library manager with automatic scanning, web access, downloads, and plugin support. ([Source Code](https://github.com/gameyfin/gameyfin)) `AGPL-3.0` `Docker`
- [Gaseous Server](https://github.com/gaseous-project/gaseous-server) `⚠` - Game ROM manager with a built-in web-based emulator using multiple sources to identify and provide metadata. `AGPL-3.0` `Docker/.NET`
- [Lancache](https://lancache.net) `⚠` - LAN Party game caching made easy. ([Source Code](https://github.com/lancachenet/monolithic)) `MIT` `Docker/Shell`
- [LinuxGSM](https://linuxgsm.com/) - CLI tool for deployment and management of dedicated game servers on Linux: more than 120 games are supported. ([Source Code](https://github.com/GameServerManagers/LinuxGSM)) `MIT` `Shell`
- [Minus Games](https://accessory.github.io/minus_games_user_guide) - Sync games and save files across multiple devices. ([Source Code](https://github.com/Accessory/minus_games)) `MIT` `Rust`
- [Ownfoil](https://github.com/a1ex4/ownfoil) - Nintendo Switch library manager, with automated management tasks (file identification and organization, missing updates/DLC), serving your library to multiple supported clients on your Switch, with shop customization and multi user authentication. `AGPL-3.0` `Docker/Python`
- [Pelican Panel](https://pelican.dev/) - Web application for easy management of game servers, offering a user-friendly interface for deploying, configuring, and managing servers, server monitoring tools, and extensive customization options (fork of Pterodactyl). ([Source Code](https://github.com/pelican/panel)) `AGPL-3.0` `PHP/Docker`
- [PKVault](https://github.com/Chnapy/PKVault) - Centralized Pokémon storage management & Pokedex app (alternative to Pokémon Home). ([Demo](https://pkvault-demo.chnapy.dev)) `GPL-3.0` `Docker`
- [Pterodactyl](https://pterodactyl.io/) - Management panel for game servers, with an intuitive UI for end users. ([Source Code](https://github.com/pterodactyl/panel)) `MIT` `PHP`
- [PufferPanel](https://www.pufferpanel.com/) - Game server management panel designed for both small networks and game server providers. ([Source Code](https://github.com/pufferpanel/pufferpanel)) `Apache-2.0` `Go`
- [RetroArr](https://retroarr.app) `⚠` - Game library manager for PC and retro consoles, with metadata scraping, indexer search, download automation and browser-based emulation (alternative to RomM). ([Source Code](https://github.com/RiDDiX/RetroArr)) `MIT` `Docker/.NET`
- [Retrom](https://github.com/JMBeresford/retrom) - Private cloud game library distribution server + frontend/launcher. `GPL-3.0` `Docker/Rust`
- [RomM](https://romm.app/) `⚠` - ROM manager for organizing, enriching, and playing retro games, with support for 400+ platforms. ([Demo](https://demo.romm.app/), [Source Code](https://github.com/rommapp/romm)) `AGPL-3.0` `Docker`
- [SourceBans++](https://sbpp.github.io/) - Admin, ban, and communication management system for games running on the Source engine. ([Source Code](https://github.com/sbpp/sourcebans-pp)) `CC-BY-SA-4.0` `PHP`
- [Sunshine](https://app.lizardbyte.dev/Sunshine/) - Remote game stream host for Moonlight with support up to 120 frames per second and 4K resolution. ([Source Code](https://github.com/LizardByte/Sunshine)) `GPL-3.0` `C++/deb/Docker`


### Genealogy

**[`^        back to top        ^`](#awesome-selfhosted)**

[Genealogy software](https://en.wikipedia.org/wiki/Genealogy_software) used to record, organize, and publish genealogical data.

- [Genea.app](https://www.genea.app/) - Genealogy tool designed with privacy in mind that anyone can use to author or edit their family tree. Data is stored in the GEDCOM format and all processing is done in the browser. ([Source Code](https://github.com/genea-app/genea-app)) `MIT` `Javascript`
- [Genealogy](https://genealogy.kreaweb.be/) - Record family members and their relationships and build a family tree. ([Demo](https://genealogy.kreaweb.be/), [Source Code](https://github.com/MGeurts/genealogy)) `MIT` `PHP`
- [GeneWeb](https://github.com/geneweb/geneweb/wiki) - Genealogy software that can be used offline or as a Web service. ([Source Code](https://github.com/geneweb/geneweb)) `GPL-2.0` `OCaml`
- [Gramps Web](https://www.grampsweb.org/) - Web app for collaborative genealogy, based on and interoperable with Gramps, the genealogy desktop application. ([Demo](https://gramps-project.github.io/gramps-web-api/), [Source Code](https://github.com/gramps-project/gramps-web-api)) `AGPL-3.0` `Docker`
- [webtrees](https://www.webtrees.net) - Leading online collaborative genealogy application on the web. ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees)) `GPL-3.0` `PHP`


### Generative Artificial Intelligence (GenAI)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Generative Artificial Intelligence (GenAI)](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) is a subset of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) that uses generative models to produce text, images, videos, or other forms of data.

- [Agenta](https://agenta.ai/) - LLMOps platform for prompt management, LLM evaluation, and observability. Build, evaluate, and monitor production-grade LLM applications with collaborative prompt engineering. ([Source Code](https://github.com/agenta-ai/agenta)) `MIT` `Docker`
- [AnythingLLM](https://anythingllm.com/) - All-in-one desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility, and more. ([Source Code](https://github.com/Mintplex-Labs/anything-llm)) `MIT` `Nodejs/Docker`
- [GoModel](https://gomodel.enterpilot.io/) - AI gateway written in Go with a unified OpenAI-compatible API for multiple LLM providers, USD cost tracking, budgets, usage analytics, guardrails, caching, and an admin dashboard. ([Source Code](https://github.com/ENTERPILOT/GoModel)) `MIT` `Go/Docker`
- [Khoj](https://khoj.dev/) - Your AI second brain. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI. ([Demo](https://app.khoj.dev/), [Source Code](https://github.com/khoj-ai/khoj)) `AGPL-3.0` `Python/Docker`
- [LibreChat](https://www.librechat.ai) `⚠` - Enhanced ChatGPT-compatible AI chat interface supporting multiple AI providers, with multi-user auth, message search, and plugin support. ([Demo](https://chat.librechat.ai), [Source Code](https://github.com/LibreChat-AI/LibreChat)) `MIT` `Nodejs/Docker`
- [LLM Harbor](https://github.com/av/harbor) - Containerized LLM toolkit. Run LLM backends, APIs, frontends, and additional services via a concise CLI. `Apache-2.0` `Docker/Shell`
- [LLMKube](https://llmkube.com) - Kubernetes operator for LLM inference with pluggable runtimes (llama.cpp, vLLM, TGI, Ollama, vllm-swift), multi-GPU sharding, NVIDIA CUDA + Apple Silicon Metal support, and OpenAI-compatible API. ([Source Code](https://github.com/defilantech/LLMKube)) `Apache-2.0` `Go/Docker/K8S`
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - AI-powered deep research tool with multi-source search (arXiv, PubMed, web), PDF text extraction, and encrypted local storage. `MIT` `Docker/Python`
- [LocalAI](https://localai.io/) - Run your AI models locally and generate images and audio (alternative to OpenAI and Claude). ([Source Code](https://github.com/mudler/LocalAI), [Clients](https://localai.io/gallery.html)) `MIT` `Docker/K8S`
- [Ollama](https://ollama.com/) - Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 3, and other large language models. ([Source Code](https://github.com/ollama/ollama)) `MIT` `Docker/Python`
- [Onyx Community Edition](https://onyx.app) - Chat UI that works with any LLM. It comes loaded with advanced features like agents, web search, RAG, MCP, deep research, Connectors to 40+ knowledge sources, and more. ([Source Code](https://github.com/onyx-dot-app/onyx)) `MIT` `Docker/K8S`
- [Open-WebUI](https://openwebui.com) - User-friendly AI Interface, supports Ollama, OpenAI API. ([Source Code](https://github.com/open-webui/open-webui)) `BSD-3-Clause` `Docker/Python`
- [Vane](https://github.com/ItzCrazyKns/Vane) - AI-powered search engine (alternative to Perplexity AI). `MIT` `Docker`


### Groupware

**[`^        back to top        ^`](#awesome-selfhosted)**

Collaborative software or [groupware](https://en.wikipedia.org/wiki/Collaborative_software) is designed to help people working on a common task to attain their goals. Groupware often regroups multiple services such as file sharing, calendar/events management, appointment scheduling, address books... in a single, integrated application.

_Related: [Booking and Scheduling](#booking-and-scheduling)_

- [Citadel](https://www.citadel.org/) - Groupware including email, calendar/scheduling, address books, forums, mailing lists, IM, wiki and blog engines, RSS aggregation and more. ([Source Code](https://www.citadel.org/source.html)) `GPL-3.0` `C/Docker/Shell`
- [Colanode](https://colanode.com) - Collaboration suite with real-time messaging, rich text pages, file management, and dynamic databases - built for offline work (alternative to Slack, Notion). ([Source Code](https://github.com/colanode/colanode)) `Apache-2.0` `K8S/Docker`
- [Cozy Cloud](https://cozy.io/) - Personal cloud where you can manage and sync your files, notes, contacts, passwords, and documents. ([Source Code](https://github.com/cozy/), [Clients](https://github.com/cozy/cozy-store)) `GPL-3.0` `Nodejs`
- [Digipad](https://digipad.app/) - Online application for creating collaborative digital notepads (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digipad)) `AGPL-3.0` `Nodejs`
- [Digistorm](https://digistorm.app/) - Create collaborative surveys, quizzes, brainstorms, and word clouds (documentation in French). ([Demo](https://digistorm.app/), [Source Code](https://codeberg.org/ladigitale/digistorm)) `AGPL-3.0` `Nodejs`
- [Digiwall](https://digiwall.app/) - Create multimedia collaborative walls for in-person or remote work (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiwall)) `AGPL-3.0` `Nodejs`
- [egroupware](https://www.egroupware.org/) - Software suite including calendars, address books, notepad, project management tools, client relationship management tools (CRM), knowledge management tools, a wiki and a CMS. ([Source Code](https://github.com/EGroupware/egroupware)) `GPL-2.0` `PHP`
- [Group Office](https://www.group-office.com) - Enterprise CRM and groupware tool. Share projects, calendars, files and e-mail online with co-workers and clients. ([Source Code](https://github.com/Intermesh/groupoffice/)) `AGPL-3.0` `PHP`
- [Openmeetings](https://openmeetings.apache.org/index.html) - Video conferencing, instant messaging, whiteboard, collaborative document editing and other groupware tools using API functions of the Red5 Streaming Server for Remoting and Streaming. ([Source Code](https://github.com/apache/openmeetings)) `Apache-2.0` `Java`
- [SOGo](https://www.sogo.nu/) - SOGo offers multiple ways to access the calendaring and messaging data. CalDAV, CardDAV, GroupDAV, as well as ActiveSync, including native Outlook compatibility and Web interface. ([Demo](https://demo.sogo.nu/SOGo/), [Source Code](https://github.com/Alinto/sogo)) `LGPL-2.1` `Objective-C`
- [Tine](https://www.tine-groupware.de/) - Software for digital collaboration in companies and organizations. From powerful groupware functionalities to clever add-ons, tine combines everything to make daily team collaboration easier. ([Source Code](https://github.com/tine-groupware/tine)) `AGPL-3.0` `Docker`
- [Tracim](https://github.com/tracim/tracim) - Collaborative Platform for team collaboration: file,threads,notes,agenda,etc. `AGPL-3.0/LGPL-3.0/MIT` `Python`
- [Zimbra Collaboration](https://www.zimbra.com/) - Email, calendar, collaboration server with Web interface and lots of integrations. ([Source Code](https://github.com/zimbra)) `GPL-2.0/CPAL-1.0` `Java`


### Health and Fitness

**[`^        back to top        ^`](#awesome-selfhosted)**

[Medical](https://en.wikipedia.org/wiki/Medical_software), [Health](https://en.wikipedia.org/wiki/Health_information_technology) and [Fitness](https://en.wikipedia.org/wiki/Fitness_tracker) software.

- [Endurain](https://docs.endurain.com/) - Fitness tracking service designed to give users full control over their data and hosting environment. ([Source Code](https://codeberg.org/endurain-project/endurain)) `AGPL-3.0` `Docker`
- [FitTrackee](https://docs.fittrackee.org/) - Simple workout/activity tracker. ([Source Code](https://github.com/SamR1/FitTrackee)) `AGPL-3.0` `Python/Docker`
- [Mere Medical](https://meremedical.co/) `⚠` - Manage all of your medical records from Epic MyChart, Cerner, and OnPatient patient portals in one place. Privacy-focused and offline-first. ([Demo](https://demo.meremedical.co), [Source Code](https://github.com/cfu288/mere-medical)) `GPL-3.0` `Docker/Nodejs`
- [NutriTrace](https://traceapps.github.io/docs/) - Nutrition and diet tracker with barcode scanning, wearable integrations (Fitbit, Withings, Garmin, Health Connect), adaptive calorie goals, multi-user sharing, and a built-in AI assistant (alternative to MyFitnessPal, Cronometer). ([Source Code](https://github.com/TraceApps/nutritrace)) `AGPL-3.0` `Docker`
- [OpenELIS Global](https://openelis-global.org) - Laboratory information system (LIS/LIMS) for clinical, public health, environmental and vector surveillance labs. FHIR-native, with analyzer integration (ASTM/HL7), quality control and national-scale reporting. ([Demo](https://openelis-global.org/getting-started/demo/), [Source Code](https://github.com/DIGI-UW/OpenELIS-Global-2)) `MPL-2.0` `Java/Docker`
- [OpenEMR](https://www.open-emr.org/) - Electronic health records and medical practice management solution. ([Demo](https://www.open-emr.org/demo/), [Source Code](https://github.com/openemr/openemr)) `GPL-3.0` `PHP/Docker`
- [wger](https://wger.de/) - Web-based personal workout, fitness and weight logger/tracker. It can also be used as a simple gym management utility and offers a full REST API as well. ([Demo](https://wger.de/en/dashboard), [Source Code](https://github.com/wger-project/wger)) `AGPL-3.0` `Python/Docker`


### Human Resources Management (HRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

A [human resources management system](https://en.wikipedia.org/wiki/Human_resource_management_system) combines a number of systems and processes to ensure the easy management of [human resources](https://en.wikipedia.org/wiki/Human_resources), business processes and data.

- [admidio](https://www.admidio.org/) - User management system for websites of organizations and groups. The system has a flexible role model so that it’s possible to reflect the structure and permissions of your organization. ([Demo](https://www.admidio.org/demo/), [Source Code](https://github.com/Admidio/admidio)) `GPL-2.0` `PHP/Docker`
- [Frappe HR](https://frappe.io/hr) - Complete HRMS solution with over 13 different modules right from employee management, onboarding, leaves, to payroll, taxation, and more. ([Source Code](https://github.com/frappe/hrms)) `GPL-3.0` `Docker/Python/Nodejs`
- [MintHCM](https://minthcm.org/) - Tool for Human Capital Management based on two popular, well-known business applications SugarCRM Community Edition and SuiteCRM. ([Source Code](https://github.com/minthcm/minthcm)) `AGPL-3.0` `PHP`


### Identity Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Identity management](https://en.wikipedia.org/wiki/Identity_management) (IdM), also known as identity and access management (IAM or IdAM), is a framework of policies and technologies to ensure that the right users have the appropriate access to technology resources.

**Please visit [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)**



### Internet of Things (IoT)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things) describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices over the Internet.

_Related: [Automation](#automation)_

- [Domoticz](https://www.domoticz.com/) - Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. ([Source Code](https://github.com/domoticz/domoticz), [Clients](https://github.com/domoticz/domoticz-android)) `GPL-3.0` `C/C++/Docker/Shell`
- [EMQX](https://www.emqx.com/) - Scalable MQTT broker. Connect 100M+ IoT devices in one single cluster, move and process real-time IoT data with 1M msg/s throughput at 1ms latency. ([Demo](https://www.emqx.com/en/mqtt/public-mqtt5-broker), [Source Code](https://github.com/emqx/emqx)) `Apache-2.0` `Docker/Erlang`
- [evcc](https://evcc.io/) - Extensible Electric Vehicle Charge Controller and home energy management system. ([Source Code](https://github.com/evcc-io/evcc)) `MIT` `deb/Docker/Go`
- [FHEM](https://fhem.de/fhem.html) - Automate common tasks in the household like switching lamps and heating. It can also be used to log events like temperature or power consumption. You can control it via web or smartphone frontends, telnet or TCP/IP directly. ([Source Code](https://svn.fhem.de/trac)) `GPL-3.0` `Perl`
- [FlowForge](https://flowforge.com/) - Deploy Node-RED applications in a reliable, scalable and secure manner. The FlowForge platform provides DevOps capabilities for Node-RED development teams. ([Source Code](https://github.com/FlowFuse/flowfuse)) `Apache-2.0` `Nodejs/Docker/K8S`
- [FMD Server](https://fmd-foss.org) - Server to communicate with the FMD (Find My Device) Android app, to locate and control your devices. ([Source Code](https://gitlab.com/fmd-foss/fmd-server), [Clients](https://gitlab.com/fmd-foss/fmd-android)) `GPL-3.0` `Docker/Go`
- [Gladys](https://gladysassistant.com/) - Privacy-first home assistant. ([Source Code](https://github.com/GladysAssistant/Gladys)) `Apache-2.0` `Nodejs/Docker`
- [Home Assistant](https://home-assistant.io/) - Home automation platform. ([Demo](https://home-assistant.io/demo/), [Source Code](https://github.com/home-assistant/core)) `Apache-2.0` `Python/Docker`
- [ioBroker](https://www.iobroker.net/) - Integration platform for the Internet of Things, focused on building automation, smart metering, ambient assisted living, process automation, visualization and data logging. ([Source Code](https://github.com/ioBroker/ioBroker)) `MIT` `Nodejs`
- [LHA](https://github.com/javalikescript/lha) - Light Home Automation application that is fully extensible using Blockly, HTML or Lua. It includes extensions such as ConBee, Philips Hue or Z-Wave JS. `MIT` `Lua`
- [Node RED](https://nodered.org/) - Browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions. ([Source Code](https://github.com/node-red/node-red)) `Apache-2.0` `Nodejs/Docker`
- [Onloc](https://onloc.app) - Track and share your location in real time. Control and lock stolen or lost phones. ([Source Code](https://github.com/onloc-app/onloc-api), [Clients](https://github.com/onloc-app/onloc-android)) `AGPL-3.0` `Docker`
- [openHAB](https://www.openhab.org) - Vendor and technology agnostic software for home automation. ([Source Code](https://github.com/openhab/openhab-core)) `EPL-2.0` `Java`
- [OpenRemote](https://openremote.io) - IoT Asset management, Flow Rules and WHEN-THEN rules, Data visualization, Edge Gateway. ([Demo](https://demo.openremote.io/), [Source Code](https://github.com/openremote/core)) `AGPL-3.0` `Java`
- [polluSensWeb](https://wespeakenglish.github.io/polluSensWeb/) - Web-based serial interface and charting tool for visualizing and logging data from UART pollution sensors (PM2.5, VOC, etc). Features live data acquisition, dynamic charts, CSV export, and webhook integration. ([Demo](https://wespeakenglish.github.io/polluSensWeb/), [Source Code](https://github.com/WeSpeakEnglish/polluSensWeb), [Clients](https://github.com/WeSpeakEnglish/polluSensWeb/releases)) `MIT` `Javascript`
- [SIP Irrigation Control](https://dan-in-ca.github.io/SIP/) - Software for sprinkler/irrigation control. ([Source Code](https://github.com/Dan-in-CA/SIP)) `GPL-3.0` `Python`
- [SOLECTRUS](https://solectrus.de) - Photovoltaic dashboard that displays energy production and consumption with cost and savings calculations. ([Demo](https://demo.solectrus.de), [Source Code](https://github.com/solectrus/solectrus)) `AGPL-3.0` `Docker`
- [Tasmota](https://tasmota.com) - Firmware for ESP devices. Total local control with quick setup and updates. Control using MQTT, Web UI, HTTP or serial. Automate using timers, rules or scripts. Integration with home automation solutions. ([Source Code](https://github.com/arendst/Tasmota)) `GPL-3.0` `C/C++`
- [Thingsboard](https://thingsboard.io/) - IoT Platform - Device management, data collection, processing and visualization. ([Demo](https://demo.thingsboard.io/signup), [Source Code](https://github.com/thingsboard/thingsboard)) `Apache-2.0` `Java/Docker/K8S`
- [WebThings Gateway](https://webthings.io/gateway/) - Implementation of the Web of Things, including the WebThings Gateway and the WebThings Framework. ([Source Code](https://github.com/WebThingsIO/gateway)) `MPL-2.0` `Nodejs`


### Inventory Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Inventory management software](https://en.wikipedia.org/wiki/Inventory_management_software).

_Related: [Money, Budgeting & Management](#money-budgeting--management), [Resource Planning](#resource-planning)_

_See also: [awesome-sysadmin/IT Asset Management](https://github.com/awesome-foss/awesome-sysadmin#it-asset-management)_

- [Cannery](https://cannery.app) - Firearm and ammunition tracker app. ([Source Code](https://gitlab.com/shibaobun/cannery)) `AGPL-3.0` `Docker`
- [CellarBoss](https://cellarboss.org) - Wine inventory management system. ([Source Code](https://github.com/CellarBoss/cellarboss)) `GPL-3.0` `Docker/Nodejs`
- [DVinyl](https://github.com/Kyonew/DVinyl) `⚠` - Modern collection manager for physical media (vinyls, CDs, cassettes, books, movies, and video games). `MIT` `Nodejs/Docker`
- [HomeBox (SysAdminsMedia)](https://homebox.software/) - Inventory and organization system built for the home user. ([Demo](https://demo.homebox.software/), [Source Code](https://github.com/sysadminsmedia/homebox)) `AGPL-3.0` `Docker/Go`
- [Inventaire](https://inventaire.io/welcome) - Collaborative resources mapper project, while yet only focused on exploring books mapping with wikidata and ISBNs. ([Source Code](https://codeberg.org/inventaire/inventaire)) `AGPL-3.0` `Nodejs`
- [Inventree](https://docs.inventree.org/en/latest/) - Inventory management system which provides intuitive parts management and stock control. ([Demo](https://inventree.org/demo), [Source Code](https://github.com/inventree/InvenTree)) `MIT` `Python`
- [Open QuarterMaster](https://openquartermaster.com/) - Powerful inventory management system, designed to be flexible and scalable. ([Source Code](https://github.com/Epic-Breakfast-Productions/OpenQuarterMaster)) `GPL-3.0` `deb/Docker`
- [Part-DB](https://docs.part-db.de/) - Inventory management system for your electronic components. ([Demo](https://demo.part-db.de/en/), [Source Code](https://github.com/Part-DB/Part-DB-server)) `AGPL-3.0` `Docker/PHP/Nodejs`
- [Spoolman](https://github.com/Donkie/Spoolman) - Keep track of your inventory of 3D-printer filament spools. `MIT` `Docker/Python`


### Knowledge Management Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

[Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management) is the collection of methods relating to creating, sharing, using and managing the knowledge and information.

_Related: [Note-taking & Editors](#note-taking--editors), [Wikis](#wikis), [Database Management](#database-management)_

- [Atomic Server](https://atomicserver.eu/) - Knowledge graph database with documents (similar to Notion), tables, search, and a powerful linked data API. Lightweight, very fast and no runtime dependencies. ([Demo](https://atomicdata.dev/), [Source Code](https://github.com/ontola/atomic-server)) `MIT` `Docker/Rust`
- [Digimindmap](https://ladigitale.dev/digimindmap/#/) - Create simple mindmaps (documentation in French). ([Demo](https://ladigitale.dev/digimindmap/#/), [Source Code](https://codeberg.org/ladigitale/digimindmap)) `AGPL-3.0` `Nodejs/PHP`
- [LibreKB](https://librekb.com/) - Web-based knowledge base solution. A simple web app, it runs on pretty much any web server or hosting provider with PHP and MySQL. ([Source Code](https://github.com/michaelstaake/LibreKB/)) `GPL-3.0` `PHP`
- [Marmot](https://marmotdata.io) - Data catalog for discovering and organizing data assets across your stack, including databases, APIs, message queues, and pipelines. ([Demo](https://demo.marmotdata.io), [Source Code](https://github.com/marmotdata/marmot)) `MIT` `Docker`
- [memEx](https://memex-app.shibao.dev) - Structured personal knowledge base, inspired by zettlekasten and org-mode. ([Source Code](https://gitlab.com/shibaobun/memex)) `AGPL-3.0` `Docker`
- [SiYuan](https://b3log.org/siyuan/) - Privacy-first personal knowledge management software, written in typescript and golang. ([Source Code](https://github.com/siyuan-note/siyuan)) `AGPL-3.0` `Docker/Go`
- [TeamMapper](https://github.com/b310-digital/teammapper) - Host and create your own mindmaps. Share your mindmap sessions with your team and collaborate live on mindmaps. ([Demo](https://map.kits.blog)) `MIT` `Docker/Nodejs`


### Learning and Courses

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software to help with education and learning.

- [Canvas LMS](https://www.instructure.com/canvas/) - Learning management system (LMS) that is revolutionizing the way we educate. ([Source Code](https://github.com/instructure/canvas-lms)) `AGPL-3.0` `Ruby`
- [Chamilo LMS](https://chamilo.org/) - Create a virtual campus for the provision of online or semi-online training. ([Source Code](https://github.com/chamilo/chamilo-lms)) `GPL-3.0` `PHP`
- [Digiscreen](https://ladigitale.dev/digiscreen/) - Interactive whiteboard/wallpaper for the classroom, in person or remotely (documentation in French). ([Demo](https://ladigitale.dev/digiscreen/), [Source Code](https://codeberg.org/ladigitale/digiscreen)) `AGPL-3.0` `Nodejs/PHP`
- [Digitools](https://ladigitale.dev/digitools) - Set of simple tools to accompany the animation of courses in person or remotely (documentation in French). ([Demo](https://ladigitale.dev/digitools/), [Source Code](https://codeberg.org/ladigitale/digitools)) `AGPL-3.0` `PHP`
- [edX](https://www.edx.org/) - Online learning platform that powers the edX.org website. ([Source Code](https://github.com/edx/)) `AGPL-3.0` `Python`
- [Gibbon](https://gibbonedu.org/) - Flexible school management platform designed to make life better for teachers, students, parents and leaders. ([Source Code](https://github.com/GibbonEdu/core)) `GPL-3.0` `PHP`
- [Helium](https://www.heliumedu.com) - Color-coded student planner for classes, homework, grades, and notes with smart notifications and multi-device sync. ([Demo](https://app.heliumedu.com), [Source Code](https://github.com/HeliumEdu/platform)) `MIT` `Python/Docker`
- [ILIAS](https://www.ilias.de) - Learning management system that can cope with anything you throw at it. ([Demo](https://demo.ilias.de), [Source Code](https://github.com/ILIAS-eLearning/ILIAS)) `GPL-3.0` `PHP`
- [INGInious](https://inginious.org/?lang=en) - Intelligent grader that allows secured and automated testing of code made by students. ([Source Code](https://github.com/INGInious/INGInious), [Clients](https://github.com/INGInious/plugins)) `AGPL-3.0` `Python/Docker`
- [Moodle](https://moodle.org/) - Learning and courses platform with one of the largest communities worldwide. ([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw)) `GPL-3.0` `PHP`
- [Open eClass](https://www.openeclass.org/) - Advanced e-learning solution that can enhance the teaching and learning process. ([Demo](https://demo.openeclass.org/), [Source Code](https://github.com/gunet/openeclass)) `GPL-2.0` `PHP`
- [OpenOLAT](https://www.openolat.com/?lang=en) - Learning management system for teaching, education, assessment and communication. ([Demo](https://learn.olat.com), [Source Code](https://github.com/OpenOLAT/OpenOLAT)) `Apache-2.0` `Java`
- [QST](https://qstonline.org) - Online assessment software. From a quick quiz on your phone to large scale, high stakes, proctored desktop testing, easy, secure and economical. ([Demo](https://qstonline.org/free_account.htm), [Source Code](https://sourceforge.net/projects/qstonline/)) `GPL-2.0` `Perl`
- [RELATE](https://documen.tician.de/relate/) - Courseware package that includes features such as: flexible rules, statistics, multi-course support, class calendar. ([Source Code](https://github.com/inducer/relate)) `MIT` `Python`
- [RosarioSIS](https://www.rosariosis.org/) - Student Information System for school management. Features students demographics, grades, scheduling, attendance, student billing, discipline & food service modules. ([Demo](https://www.rosariosis.org/demo/), [Source Code](https://gitlab.com/francoisjacquet/rosariosis/)) `GPL-2.0` `PHP`


### Manufacturing

**[`^        back to top        ^`](#awesome-selfhosted)**

Software to manage [3D printers](https://en.wikipedia.org/wiki/3D_printing), [CNC machines](https://en.wikipedia.org/wiki/Numerical_control) and other physical manufacturing tools.

- [CNCjs](https://cnc.js.org/) - Web interface for CNC milling controllers running Grbl, Smoothieware, or TinyG. ([Source Code](https://github.com/cncjs/cncjs/)) `MIT` `Nodejs`
- [Fluidd](https://docs.fluidd.xyz/) - Lightweight & responsive user interface for Klipper, the 3D printer firmware. ([Source Code](https://github.com/fluidd-core/fluidd)) `GPL-3.0` `Docker/Nodejs`
- [LinuxCNC](https://www.linuxcnc.org/) - Linux based CNC machine controller. It can drive milling machines, lathes, 3D printers, laser cutters, plasma cutters, robot arms, hexapods, and more. ([Source Code](https://github.com/LinuxCNC/linuxcnc)) `GPL-2.0/LGPL-3.0` `C/deb`
- [Mainsail](https://docs.mainsail.xyz/) - Modern and responsive user interface for the Klipper 3D printer firmware. Control and monitor your printer from everywhere, from any device. ([Source Code](https://github.com/mainsail-crew/mainsail)) `GPL-3.0` `Docker/Python`
- [Manyfold](https://manyfold.app) - Digital asset manager for 3d print files; STL, OBJ, 3MF and more. ([Source Code](https://github.com/manyfold3d/manyfold)) `MIT` `Docker`
- [Octoprint](https://octoprint.org/) - Snappy web interface for controlling consumer 3D printers. ([Source Code](https://github.com/OctoPrint/OctoPrint)) `AGPL-3.0` `Docker/Python`
- [Orkyo Community](https://orkyo.com) - Production scheduling for manufacturing teams — one plan for the machines, people, and tools that run your jobs. ([Demo](https://orkyo.com/demo), [Source Code](https://github.com/Kymr10n/orkyo-community)) `AGPL-3.0` `C#/Docker`


### Maps and Global Positioning System (GPS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Maps](https://en.wikipedia.org/wiki/Map), [cartography](https://en.wikipedia.org/wiki/Cartography), [GIS](https://en.wikipedia.org/wiki/Geographic_information_system) and [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) software.

_Related: [Travel Organization](#travel-organization)_

_See also: [awesome-openstreetmap](https://github.com/osmlab/awesome-openstreetmap), [awesome-gis](https://github.com/sshuair/awesome-gis)_

- [AdventureLog](https://adventurelog.app) - Travel tracker and trip planner. ([Demo](https://demo.adventurelog.app/signup), [Source Code](https://github.com/seanmorley15/AdventureLog)) `GPL-3.0` `Docker`
- [AirTrail](https://airtrail.johan.ohly.dk) - Personal flight tracking system. ([Source Code](https://github.com/johanohly/AirTrail)) `GPL-3.0` `Docker/Nodejs`
- [Bicimon](https://github.com/knrdl/bicimon) - Bike Speedometer as Progressive Web App. ([Demo](https://knrdl.github.io/bicimon/)) `MIT` `Javascript`
- [Dawarich](https://dawarich.app/) - Visualize your location history, track your movements, and analyze your travel patterns with complete privacy and control (alternative to Google Timeline a.k.a. Google Location History). ([Source Code](https://github.com/Freika/dawarich)) `AGPL-3.0` `Docker`
- [Geo2tz](https://github.com/noandrea/geo2tz) - Get the timezone from geo coordinates (lat, lon). `MIT` `Go/Docker`
- [GraphHopper](https://graphhopper.com/) - Fast routing library and server using OpenStreetMap. ([Source Code](https://github.com/graphhopper/graphhopper)) `Apache-2.0` `Java`
- [NextGIS Web](https://nextgis.com/nextgis-web/) - Web GIS server for geospatial data management, web map publishing, and QGIS-centered collaborative workflows. ([Demo](https://sandbox.nextgis.com), [Source Code](https://github.com/nextgis/nextgisweb)) `GPL-3.0` `Docker`
- [Nominatim](https://nominatim.org/) - Server application for geocoding (address -> coordinates) and reverse geocoding (coordinates -> address) on OpenStreetMap data. ([Source Code](https://github.com/osm-search/Nominatim)) `GPL-2.0` `C`
- [Open Source Routing Machine (OSRM)](http://project-osrm.org/) - High performance routing engine designed to run on OpenStreetMap data and offering an HTTP API, C++ library interface, and Nodejs wrapper. ([Demo](https://map.project-osrm.org/), [Source Code](https://github.com/Project-OSRM/osrm-backend)) `BSD-2-Clause` `C++`
- [OpenRouteService](https://openrouteservice.org/) - Route service with directions, isochrones, time-distance matrix, route optimization, etc. ([Demo](https://openrouteservice.org/dev/#/api-docs/introduction), [Source Code](https://github.com/GIScience/openrouteservice)) `GPL-3.0` `Docker/Java`
- [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative project to create a free editable map of the world. ([Source Code](https://github.com/openstreetmap/openstreetmap-website), [Clients](https://wiki.openstreetmap.org/wiki/Software)) `GPL-2.0` `Ruby`
- [OpenTripPlanner](https://www.opentripplanner.org/) - Multimodal trip planning software based on OpenStreetMap data and consuming published GTFS-formatted data to suggest routes using local public transit systems. ([Source Code](https://github.com/opentripplanner/OpenTripPlanner)) `LGPL-3.0` `Java/Javascript`
- [OwnTracks Recorder](https://github.com/owntracks/recorder) `⚠` - Store and access data published by OwnTracks location tracking apps. `GPL-2.0` `C/Lua/deb/Docker`
- [TileServer GL](https://tileserver.readthedocs.io/) - Vector and raster maps with GL styles. Server side rendering by Mapbox GL Native. Map tile server for Mapbox GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc. ([Source Code](https://github.com/maptiler/tileserver-gl)) `BSD-2-Clause` `Nodejs/Docker`
- [Traccar](https://www.traccar.org/) - Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips. ([Demo](https://demo.traccar.org/), [Source Code](https://github.com/traccar)) `Apache-2.0` `Java`
- [TRIP](https://itskovacs-trip.netlify.app/) - Minimalist POI Map tracker and Trip planner. ([Demo](https://itskovacs-trip.netlify.app/home), [Source Code](https://github.com/itskovacs/trip)) `MIT` `Docker`
- [wanderer](https://github.com/open-wanderer/wanderer) - Trail database where you can upload your recorded tracks or create new ones and add various metadata to build an easily searchable catalogue. ([Demo](https://demo.wanderer.to)) `AGPL-3.0` `Docker/Go/Nodejs`


### Media Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Digital media](https://en.wikipedia.org/wiki/Digital_media) management tools and software.

_Related: [Automation](#automation), [Media Streaming](#media-streaming), [Media Streaming - Audio Streaming](#media-streaming---audio-streaming), [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Media Management](#media-management)_

- [ChannelTube](https://github.com/TheWicklowWolf/ChannelTube) `⚠` - Download video or audio from YouTube channels on a schedule via yt-dlp. `AGPL-3.0` `Docker`
- [Deleterr](https://github.com/rfsbraz/deleterr) - Automated media cleanup tool that removes watched and stale content from Plex, Sonarr, and Radarr based on configurable rules. `MIT` `Docker`
- [Downtify](https://downtify.henriquesebastiao.com) `⚠` - Download Spotify music with album art and metadata. ([Source Code](https://github.com/henriquesebastiao/downtify)) `GPL-3.0` `Docker`
- [Elengrab](https://github.com/neosy/elengrab) - Fast cross-platform video and audio downloader and media viewer with flexible format and quality options. Supports 1000+ websites including YouTube, Instagram, TikTok, Twitch and more. ([Demo](https://elengrab.n-hub.ru)) `AGPL-3.0` `Go/Docker`
- [HomeTube](https://hometube.latentnoise.dev) `⚠` - Web UI to download videos and playlists from 1700+ sites into a Plex or Jellyfin library, with quality selection, SponsorBlock sponsor removal, subtitles, clip cutting and resilient playlist sync. ([Source Code](https://github.com/EgalitarianMonkey/hometube)) `AGPL-3.0` `Python/Docker`
- [Houndarr](https://av1155.github.io/houndarr/) - Scheduled backlog searches for Radarr, Sonarr, Lidarr, Readarr and Whisparr. Works through missing and cutoff-unmet items in small rate-limited batches with per-item cooldowns and hourly caps, to avoid overloading indexers. ([Source Code](https://github.com/av1155/houndarr)) `AGPL-3.0` `Python/Docker`
- [Lidarr](https://lidarr.audio/) - Music collection manager for Usenet and BitTorrent users. ([Source Code](https://github.com/Lidarr/Lidarr)) `GPL-3.0` `C#/Docker`
- [LidaTube](https://github.com/TheWicklowWolf/LidaTube) `⚠` - Finding and fetch missing Lidarr albums via yt-dlp. `GPL-3.0` `Docker`
- [Lidify](https://github.com/TheWicklowWolf/Lidify) `⚠` - Music discovery tool that provides recommendations based on selected Lidarr artists, using Spotify or LastFM. `MIT` `Docker`
- [Lingarr](https://lingarr.com) - Automatically translate subtitle files in your Radarr and Sonarr media libraries, using LibreTranslate, local AI models, or SaaS translation services. ([Source Code](https://github.com/lingarr-translate/lingarr)) `AGPL-3.0` `Docker`
- [Medusa](https://github.com/pymedusa/Medusa) - Automatic Video library manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Clients](https://github.com/medusajs/nextjs-starter-medusa)) `GPL-3.0` `Python`
- [MeTube](https://github.com/alexta69/metube) - Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites. `AGPL-3.0` `Python/Nodejs/Docker`
- [MKVPriority](https://github.com/kennethsible/mkvpriority) - Selects preferred audio and subtitle tracks using configurable priority scores and sets the appropriate default and forced flags. `MIT` `Python/Docker`
- [MyTube](https://github.com/franklioxygen/MyTube) `⚠` - Downloader and player for yt-dlp-supported sites with channel subscriptions, cloud upload support, and local library organization. ([Demo](https://mytube-demo.vercel.app)) `MIT` `Nodejs/Docker`
- [nefarious](https://lardbit.github.io/nefarious/) - Automate downloading Movies and TV Shows. ([Source Code](https://github.com/lardbit/nefarious)) `GPL-3.0` `Python`
- [Ombi](https://ombi.io/) - Content request system for Plex/Emby, connects to SickRage, CouchPotato, Sonarr, with a growing feature set. ([Demo](https://app.ombi.io/), [Source Code](https://github.com/Ombi-app/Ombi)) `GPL-2.0` `C#/deb`
- [Pinchflat](https://github.com/kieraneglin/pinchflat) `⚠` - Download YouTube content built using yt-dlp. `AGPL-3.0` `Docker`
- [PodFetch](https://samtv12345.github.io/PodFetch) - Sleek and efficient podcast downloader. ([Source Code](https://github.com/SamTV12345/PodFetch)) `Apache-2.0` `Docker/Rust`
- [Radarr](https://radarr.video/) - Automatically download movies via Usenet and BitTorrent (fork of Sonarr). ([Source Code](https://github.com/Radarr/Radarr)) `GPL-3.0` `C#/Docker`
- [Ratelog](https://ratelog.org) - Movie tracker and rating app (alternative to Letterboxd). ([Source Code](https://github.com/golmenero/ratelog)) `AGPL-3.0` `Docker`
- [Reaparr](https://www.reaparr.rocks/) `⚠` - Cross-platform Plex media downloader that seamlessly adds media from other Plex servers to your own. ([Source Code](https://github.com/Reaparr/Reaparr)) `GPL-3.0` `Docker`
- [Seerr](https://github.com/seerr-team/seerr) - Manage requests for your media library, supports Plex, Jellyfin and Emby media servers (fork of Overseerr). `MIT` `Docker/Nodejs`
- [Sonarr](https://sonarr.tv/) - Automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available. ([Source Code](https://github.com/Sonarr/Sonarr)) `GPL-3.0` `C#/Docker`
- [TrackWatch](https://trackwatch.emlopezr.com) `⚠` - Automated music release tracker for Spotify with email notifications, discography generator, and ghost track cleaner (alternative to Release Radar). ([Source Code](https://github.com/emlopezr/trackwatch)) `MIT` `Docker`
- [tubesync](https://github.com/meeb/tubesync) `⚠` - Syncs YouTube channels and playlists to a locally hosted media server. `AGPL-3.0` `Docker/Python`
- [Watcharr](https://github.com/sbondCo/Watcharr) - Add and track all the shows and movies you are watching. Comes with user authentication, modern and clean UI and a very simple setup. `MIT` `Docker`
- [ydl_api_ng](https://github.com/Totonyus/ydl_api_ng) - Simple youtube-dl REST API to launch downloads on a distant server. `GPL-3.0` `Python`
- [Youtarr](https://github.com/DialmasterOrg/Youtarr) `⚠` - Download videos from YouTube channels on a schedule via yt-dlp, with a web UI to browse and selectively download videos. Integrates with Plex Media Server and generates NFO metadata for Jellyfin, Kodi, and Emby. `ISC` `Docker`
- [youtube-dl-nas](https://hyeonsangjeon.github.io/youtube-dl-nas/) `⚠` - Authenticated yt-dlp download queue for video, audio and subtitles, with history, mobile sharing and NAS file management (fork of youtube-dl-server). ([Source Code](https://github.com/hyeonsangjeon/youtube-dl-nas)) `MIT` `Python/Docker`
- [YoutubeDL-Server](https://github.com/nbr23/youtube-dl-server) - Web and REST interface to Youtube-DL for downloading videos onto a server. `MIT` `Python/Docker`


### Media Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Streaming media](https://en.wikipedia.org/wiki/Streaming_media) is multimedia that is delivered and consumed in a continuous manner from a source, with little or no intermediate storage in network elements.

**Please visit [Media streaming - Audio Streaming](#media-streaming---audio-streaming), [Media streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media streaming - Video Streaming](#media-streaming---video-streaming), [Media Management](#media-management)**

_Related: [Media Streaming](#media-streaming)_

_See also: [List of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/List_of_streaming_media_systems), [Comparison of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)_



### Media Streaming - Audio Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Audio](https://en.wikipedia.org/wiki/Audio) streaming tools and software.

_Related: [Media Management](#media-management)_

- [Ampache](https://ampache.org/) - Web based audio/video streaming application. ([Demo](https://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache)) `AGPL-3.0` `PHP`
- [Audiobookshelf](https://www.audiobookshelf.org/) - Audiobook and podcast server. It streams all audio formats, keeps and syncs progress across devices. Comes with apps for Android and iOS. ([Source Code](https://github.com/advplyr/audiobookshelf), [Clients](https://github.com/advplyr/audiobookshelf-app)) `GPL-3.0` `Docker/deb/Nodejs`
- [Audioserve](https://github.com/izderadicka/audioserve) - Simple personal server to serve audio files from directories (audiobooks, music, podcasts...). Focused on simplicity and supports sync of play position between clients. `MIT` `Rust`
- [AzuraCast](https://www.azuracast.com/) - Modern and accessible web radio management suite. ([Source Code](https://github.com/AzuraCast/AzuraCast)) `Apache-2.0` `Docker`
- [Beets](https://beets.io/) - Music library manager and MusicBrainz tagger (command-line and Web interface). ([Source Code](https://github.com/beetbox/beets)) `MIT` `Python/deb`
- [Black Candy](https://github.com/blackcandy-org/blackcandy) - Music streaming server. `MIT` `Docker/Ruby`
- [BotWave](https://botwave.dpip.lol) - FM broadcasting system with server-client architecture for managing multiple Raspberry Pi transmitters remotely. ([Source Code](https://github.com/dpipstudio/botwave)) `GPL-3.0` `Python`
- [Funkwhale](https://dev.funkwhale.audio/funkwhale) - Modern, web-based, convivial, multi-user and free music server. `BSD-3-Clause` `Python`
- [gonic](https://github.com/sentriz/gonic) - Lightweight music streaming server. Subsonic compatible. `GPL-3.0` `Go/Docker`
- [koel](https://koel.dev/) - Personal music streaming server that works. ([Demo](https://demo.koel.dev/), [Source Code](https://github.com/koel/koel)) `MIT` `PHP`
- [LibreTime](https://libretime.org) - Broadcast streaming radio on the web (fork of Airtime). ([Source Code](https://github.com/LibreTime/libretime)) `AGPL-3.0` `Docker/PHP`
- [LMS](https://github.com/epoupon/lms) - Access your own music using a web interface. `GPL-3.0` `Docker/deb/C++`
- [Lyrion Music Server](https://lyrion.org/) - Server software which controls a wide range of Squeezebox/Slim Devices audio players and compatible hardware (formerly Logitech Media Server). ([Source Code](https://github.com/lms-community/slimserver), [Clients](https://lyrion.org/extensions/applications/)) `GPL-2.0` `deb/Docker/Perl`
- [moOde Audio](https://moodeaudio.org/) - Audiophile-quality music playback for the wonderful Raspberry Pi family of single board computers. ([Source Code](https://github.com/moode-player/moode)) `GPL-3.0` `PHP`
- [Mopidy](https://docs.mopidy.com/) `⚠` - Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc. ([Source Code](https://github.com/mopidy/mopidy)) `Apache-2.0` `Python/deb`
- [mpd](https://www.musicpd.org/) - Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. ([Source Code](https://github.com/MusicPlayerDaemon/MPD), [Clients](https://www.musicpd.org/clients/)) `GPL-2.0` `C++`
- [mStream](https://mstream.io/) - Music streaming server with GUI management tools. Runs on Mac, Windows, and Linux. ([Source Code](https://github.com/IrosTheBeggar/mStream)) `GPL-3.0` `Nodejs`
- [multi-scrobbler](https://foxxmd.github.io/multi-scrobbler) - Scrobble plays from multiple sources to multiple scrobbling services. ([Source Code](https://github.com/FoxxMD/multi-scrobbler)) `MIT` `Nodejs/Docker`
- [musikcube](https://github.com/clangen/musikcube) - Streaming audio server with Linux/macOS/Windows/Android clients. `BSD-3-Clause` `C++/deb`
- [Navidrome Music Server](https://www.navidrome.org) - Modern Music Server and Streamer, compatible with Subsonic/Airsonic. ([Demo](https://www.navidrome.org/demo), [Source Code](https://github.com/navidrome/navidrome), [Clients](https://www.navidrome.org/docs/overview/#apps)) `GPL-3.0` `Docker/Go`
- [Pinepods](https://www.pinepods.online/) - Podcast management system with multi-user support. Pinepods utilizes a central database so aspects like listen time and themes follow from device to device. ([Demo](https://try.pinepods.online), [Source Code](https://github.com/madeofpendletonwool/PinePods)) `GPL-3.0` `Docker`
- [Polaris](https://github.com/agersant/polaris) - Music browsing and streaming application optimized for large music collections, ease of use and high performance. `MIT` `Rust/Docker`
- [Snapcast](https://github.com/snapcast/snapcast) - Synchronous multiroom audio server. `GPL-3.0` `C++/deb`
- [Stretto](https://github.com/benkaiser/stretto) `⚠` - Music player with Youtube/Soundcloud import and iTunes/Spotify discovery. ([Demo](https://next.kaiserapps.com), [Clients](https://github.com/benkaiser/stretto-mobile-next)) `MIT` `Nodejs`
- [Supysonic](https://github.com/spl0k/supysonic) - Python implementation of the Subsonic server API. `AGPL-3.0` `Python/deb`
- [SwingMusic](https://swingmusic.vercel.app/) - Beautiful music player and streaming server for your local audio files. Like a cooler Spotify ... but bring your own music. ([Source Code](https://github.com/swingmx/swingmusic)) `MIT` `Python/Docker`
- [vod2pod-rss](https://github.com/madiele/vod2pod-rss) `⚠` - Convert YouTube and Twitch channels to podcasts, no storage required. Transcodes VoDs to MP3 192k on the fly, generates an RSS feed to use in podcast clients. `MIT` `Docker`


### Media Streaming - Multimedia Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Multimedia](https://en.wikipedia.org/wiki/Multimedia) streaming tools and software.

_Related: [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Media Streaming - Audio Streaming](#media-streaming---audio-streaming), [Media Management](#media-management)_

- [ClipBucket](https://clipbucket.fr/) - Start your own video sharing website (YouTube/Netflix Clone) in a matter of minutes. ([Demo](https://demo.clipbucket.oxygenz.fr/), [Source Code](https://github.com/MacWarrior/clipbucket-v5)) `AAL` `Docker/PHP`
- [cmyflix](https://github.com/farfalleflickan/cmyflix) - Minimalist Plex/Jellyfin alternative to stream video. `AGPL-3.0` `C/deb`
- [Gerbera](https://gerbera.io/) - UPnP Media Server, which allows you to stream your digital media throughout your home network and listen to/watch it on a variety of UPnP compatible devices. ([Source Code](https://github.com/gerbera/gerbera)) `GPL-2.0` `Docker/deb/C++`
- [Icecast 2](https://icecast.org) - Streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://gitlab.xiph.org/xiph/icecast-server), [Clients](https://icecast.org/apps/)) `GPL-2.0` `C`
- [Jellyfin](https://jellyfin.org) - Media server for audio, video, books, comics, and photos with a sleek interface and robust transcoding capabilities. Almost all modern platforms have clients, including Roku, Android TV, iOS, and Kodi. ([Demo](https://demo.jellyfin.org/stable), [Source Code](https://github.com/jellyfin/jellyfin), [Clients](https://github.com/awesome-jellyfin/awesome-jellyfin)) `GPL-2.0` `C#/deb/Docker`
- [Karaoke Eternal](https://www.karaoke-eternal.com) - Host awesome karaoke parties where everyone can easily find and queue songs from their phone's browser. The player is also fully browser-based with support for MP3+G, MP4 and WebGL visualizations. ([Source Code](https://github.com/bhj/KaraokeEternal)) `ISC` `Docker/Nodejs`
- [Kodi](https://kodi.tv/) - Multimedia/Entertainment center, formerly known as XBMC. Runs on Android, BSD, Linux, macOS, iOS and Windows. ([Source Code](https://github.com/xbmc/xbmc)) `GPL-2.0` `C++/deb`
- [Kyoo](https://github.com/zoriya/kyoo) - Innovative media browser designed for seamless streaming of anime, series and movies, offering advanced features like dynamic transcoding, auto watch history and intelligent metadata retrieval. ([Demo](https://kyoo.zoriya.dev)) `GPL-3.0` `Docker`
- [MediaMTX](https://mediamtx.org) - Ready-to-use, zero-dependency real-time media server and proxy to publish, read, record, playback and route video/audio streams over SRT, WebRTC, RTSP, RTMP, HLS, MPEG-TS, RTP. ([Source Code](https://github.com/bluenviron/mediamtx), [Clients](https://mediamtx.org/docs/kickoff/introduction)) `MIT` `Go/Docker`
- [Meelo](https://github.com/Arthi-chaud/Meelo) - Personal Music Server, designed for collectors and music maniacs. `GPL-3.0` `Docker`
- [MistServer](https://mistserver.org/) - Public domain streaming media server that works with any device and any format. ([Source Code](https://github.com/DDVTECH/mistserver)) `Unlicense` `C++`
- [NymphCast](http://nyanko.ws/nymphcast.php) - Turn your choice of Linux-capable hardware into an audio and video source for a television or powered speakers (alternative to Chromecast). ([Source Code](https://github.com/MayaPosch/NymphCast)) `BSD-3-Clause` `C++`
- [Rygel](https://gnome.pages.gitlab.gnome.org/rygel/) - UPnP AV MediaServer that allows you to easily share audio, video, and pictures. Media player software may use Rygel to become a MediaRenderer that may be controlled remotely by a UPnP or DLNA Controller. ([Source Code](https://gitlab.gnome.org/GNOME/rygel/)) `LGPL-2.1` `C`
- [Stash](https://stashapp.cc) - Web-based library organizer and player for your adult media stash, with auto-tagging and metadata scraping support. ([Source Code](https://github.com/stashapp/stash)) `AGPL-3.0` `Docker/Go`
- [µStreamer](https://github.com/pikvm/ustreamer) - Lightweight and very quick server to stream MJPEG video from any V4L2 device to the net. `GPL-3.0` `C/deb`
- [üWave](https://u-wave.net/) `⚠` - Collaborative listening platform. Users take turns playing media—songs, talks, gameplay videos, or anything else—from a variety of media sources like YouTube and SoundCloud. ([Demo](https://wlk.yt/), [Source Code](https://github.com/u-wave)) `MIT` `Nodejs`


### Media Streaming - Video Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video](https://en.wikipedia.org/wiki/Video) streaming tools and software.

_Related: [Video Surveillance](#video-surveillance), [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Photo Galleries](#photo-galleries), [Media Management](#media-management)_

- [CyTube](https://github.com/calzoneman/sync) - Synchronize media, chat, and more for an arbitrary number of channels. ([Demo](https://cytu.be)) `MIT` `Nodejs`
- [Invidious](https://github.com/iv-org/invidious) `⚠` - Alternative YouTube front-end. ([Demo](https://docs.invidious.io/instances/)) `AGPL-3.0` `Docker/Crystal`
- [MediaCMS](https://mediacms.io) - Modern, fully featured video and media CMS, written in Python/Django/React, featuring a REST API. ([Source Code](https://github.com/mediacms-io/mediacms)) `AGPL-3.0` `Python/Docker`
- [OvenMediaEngine](https://github.com/OvenMediaLabs/OvenMediaEngine) - Streaming Server with Sub-Second Latency. ([Demo](https://demo.ovenplayer.com)) `AGPL-3.0` `C++/Docker`
- [Owncast](https://owncast.online/) - Decentralized single-user live video streaming and chat server for running your own live streams similar in style to the large mainstream options. ([Source Code](https://github.com/owncast/owncast)) `MIT` `Go`
- [PeerTube](https://joinpeertube.org/en/) - Decentralized video streaming platform using P2P (BitTorrent) directly in the web browser. ([Source Code](https://github.com/Chocobozzz/PeerTube)) `AGPL-3.0` `Nodejs`
- [Rapidbay](https://github.com/hauxir/rapidbay/) - Videostreaming service/torrent client that allows searching and playing videos from torrents in the browser or from a Chromecast/AppleTV/Smart TV. `MIT` `Python/Docker`
- [Restreamer](https://datarhei.github.io/restreamer/) - Access H.264 real-time video streaming on your website without a streaming provider. ([Source Code](https://github.com/datarhei/restreamer)) `Apache-2.0` `Nodejs/Docker`
- [SRS](https://ossrs.io/) - Simple, high efficiency and real-time video server, supports RTMP, WebRTC, HLS, HTTP-FLV and SRT. ([Source Code](https://github.com/ossrs/srs)) `MIT` `Docker/C++`
- [SyncTube](https://github.com/RblSb/SyncTube) - Lightweight and very simple to setup CyTube alternative to watch videos with friends and chat. `MIT` `Nodejs/Haxe`
- [Tiramisu](https://github.com/MrRobotoGit/tiramisu) - BitTorrent engine with a FUSE virtual filesystem that streams torrents live to Plex/Jellyfin without downloading (alternative to Real-Debrid). `GPL-2.0` `Go/Docker`
- [Tube Archivist](https://tubearchivist.com/) `⚠` - Organize, search, and enjoy your YouTube collection. Subscribe, download, and track viewed content with metadata indexing and a user-friendly interface. ([Source Code](https://github.com/tubearchivist/tubearchivist), [Clients](https://docs.tubearchivist.com/faq/#how-do-i-import-my-videos-to-emby-plex-jellyfin-kodi)) `GPL-3.0` `Docker`
- [Tube](https://git.mills.io/prologic/tube) - Youtube-like (without censorship and features you don't need!) video sharing app written in Go which also supports automatic transcoding to MP4 H.265 AAC, multiple collections and RSS feed. `MIT` `Go`
- [VideoLAN Client (VLC)](https://www.videolan.org/) - Cross-platform multimedia player client and server supporting most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. ([Source Code](https://code.videolan.org/videolan/vlc)) `GPL-2.0` `C/deb`


### Miscellaneous

**[`^        back to top        ^`](#awesome-selfhosted)**

Software that does not fit in another section.

- [2FAuth](https://github.com/Bubka/2FAuth) - Manage your Two-Factor Authentication (2FA) accounts and generate their security codes. ([Demo](https://demo.2fauth.app/)) `AGPL-3.0` `PHP/Docker`
- [Anchr](https://anchr.io) - Toolbox for tiny tasks on the internet, including bookmark collections, URL shortening and (encrypted) image uploads. ([Source Code](https://github.com/muety/anchr)) `GPL-3.0` `Nodejs`
- [Anubis](https://anubis.techaro.lol/) - Web AI firewall utility which protects upstream resources from scraper bots. ([Source Code](https://github.com/TecharoHQ/anubis)) `MIT` `Docker/deb/Go`
- [asciinema](https://asciinema.org/) - Web app for hosting asciicasts. ([Demo](https://asciinema.org/explore), [Source Code](https://github.com/asciinema/asciinema-server)) `Apache-2.0` `Elixir/Docker`
- [Baby Buddy](https://github.com/babybuddy/babybuddy) - Helps caregivers track baby sleep, feedings, diaper changes, and tummy time. ([Demo](https://github.com/babybuddy/babybuddy#-demo)) `BSD-2-Clause` `Python`
- [ClipCascade](https://github.com/Sathvik-Rao/ClipCascade) - Syncs your clipboard across multiple devices instantly, without any button press. Available on Windows, macOS, Linux, and Android, it provides seamless and secure clipboard sharing with end-to-end data encryption. `GPL-3.0` `Java/Docker`
- [Cloudlog](https://magicbug.co.uk/cloudlog/) - Log your amateur radio contacts anywhere. ([Source Code](https://github.com/magicbug/cloudlog)) `MIT` `PHP/Docker`
- [ConvertX](https://github.com/C4illin/ConvertX) - Online file converter which supports over a thousand different formats. `AGPL-3.0` `Docker`
- [CUPS](https://www.cups.org/) - Common Unix Print System uses Internet Printing Protocol (IPP) to support printing to local and network printers. ([Source Code](https://github.com/OpenPrint