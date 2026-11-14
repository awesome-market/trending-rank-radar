# springcloud-learning

## 简介

2024最新微服务实战教程，Spring Cloud组件、微服务项目实战、Kubernetes容器化部署全方位解析。本教程基于mall-swarm微服务电商项目。

`mall-swarm`项目（11k+star）是一套微服务商城系统，采用了 Spring Cloud 2023 & Alibaba、Spring Boot 3.2、Sa-Token、MyBatis、Elasticsearch、Docker、Kubernetes等核心技术，同时提供了基于Vue的管理后台方便快速搭建系统。`mall-swarm`在电商业务的基础集成了注册中心、配置中心、监控中心、网关等系统功能。文档齐全，附带全套Spring Cloud教程。

## 教程网站

- mall-swarm项目地址：[https://github.com/macrozheng/mall-swarm](https://github.com/macrozheng/mall-swarm)
- 教程文档网站：[https://cloud.macrozheng.com](https://cloud.macrozheng.com)

## 目录

### 序章

> 对mall-swarm项目的架构、业务、学习要求及学习思路进行介绍。

- [mall-swarm项目架构及功能概览](https://cloud.macrozheng.com/foreword/mall_swarm_foreword_01.html)
- [mall-swarm项目核心功能演示](https://cloud.macrozheng.com/foreword/mall_swarm_foreword_02.html)
- [mall-swarm项目学习所需知识点](https://cloud.macrozheng.com/foreword/mall_swarm_foreword_03.html)
- [mall-swarm微服务学习教程内容介绍](https://cloud.macrozheng.com/foreword/mall_swarm_foreword_04.html)

### 快速开始

> 讲解mall-swarm项目前后端在Windows下的开发环境搭建以及在Linux下的部署。

- [mall-swarm项目后端开发环境搭建](https://cloud.macrozheng.com/start/mall_swarm_deploy_windows.html)
- [mall-swarm前端开发环境搭建](https://cloud.macrozheng.com/start/mall_swarm_deploy_windows_web.html)
- [使用虚拟机安装Linux](https://cloud.macrozheng.com/start/mall_swarm_deploy_windows.html)
- [Docker环境安装及常用命令](https://cloud.macrozheng.com/start/mall_swarm_deploy_windows.html)
- [mall-swarm在Linux环境下的部署（基于Docker容器）](https://cloud.macrozheng.com/start/mall_swarm_deploy_windows.html)
- [前端项目对接Linux部署的mall-swarm后端](https://cloud.macrozheng.com/start/mall_swarm_deploy_windows.html)

### 组件篇

> 对Spring Cloud全套核心组件进行讲解，涵盖Spring Cloud Alibaba、Spring Authorization Server和SkyWalking，基于Spring Cloud 2023。

- [Spring Cloud 微服务组件篇介绍](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Alibaba：Nacos作为注册中心和配置中心使用](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Eureka：服务注册与发现](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Consul：服务治理与配置中心](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Zookeeper：服务治理与配置中心](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Config：外部集中化配置管理](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Bus：消息总线](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Stream：构建消息驱动的微服务应用](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud LoadBalancer：负载均衡的服务调用](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud OpenFeign：声明式服务调用](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Alibaba：Sentinel实现熔断与限流](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Circuit Breaker：服务容错保护](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Gateway：API网关服务](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Cloud Alibaba：使用Seata解决分布式事务问题](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Authorization Server：实现OAuth2认证服务](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Authorization Server：实现自定义JWT中内容及异常响应](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Authorization Server：实现OAuth2客户端](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Authorization Server：实现OAuth2资源服务](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [Spring Authorization Server：基于Gateway和Oauth2的微服务权限解决方案](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)
- [SkyWalking：微服务请求链路跟踪](https://cloud.macrozheng.com/cloud/spring_cloud_summary.html)

### 架构篇

> 基于Spring Boot单应用脚手架mall-tiny，循序渐进地搭建一个mall-swarm项目在使用的微服务项目脚手架。

- [mall-swarm架构篇介绍](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-tiny项目介绍](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [SpringDoc使用教程](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-tiny整合SpringDoc实现在线API文档](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-tiny项目拆分为多模块](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm-tiny项目集成注册中心和网关](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [微服务文档聚合方案：基于Nacos+Gateway+Knife4j](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm-tiny项目整合Knife4j实现网关聚合文档](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [Sa-Token使用教程](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [微服务权限解决方案：基于Nacos+Gateway+Sa-Token](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm-tiny整合Sa-Token实现认证授权功能](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [Spring Boot Admin：微服务应用监控](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm-tiny整合Admin实现微服务监控](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm项目后端代码结构介绍](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm项目后端核心代码讲解](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)
- [mall-swarm项目中如何开发接口和菜单](https://cloud.macrozheng.com/architect/mall_swarm_arch_intro.html)

### K8S篇

> 全面讲解Kubernetes的使用，基于企业级容器管理平台KubeSphere，实现mall-swarm项目在Kubernetes环境下的部署。

- [K8S篇介绍](https://cloud.macrozheng.com/k8s/k8s_summary.html)
- [K8S入门教程](https://cloud.macrozheng.com/k8s/k8s_summary.html)
- [K8S进阶使用](https://cloud.macrozheng.com/k8s/k8s_summary.html)
- [SpringBoot应用在K8S环境下的部署](https://cloud.macrozheng.com/k8s/k8s_summary.html)
- [企业级容器管理平台KubeSphere的使用](https://cloud.macrozheng.com/k8s/k8s_summary.html)
- [mall-swarm在K8S环境下的部署](https://cloud.macrozheng.com/k8s/k8s_summary.html)
