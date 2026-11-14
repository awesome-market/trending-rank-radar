[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/hee9joon/Awesome-Diffusion-Models) 
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-red.svg)](https://github.com/chetanraj/awesome-github-badges)

This repository contains a collection of resources and papers on ***Diffusion Models***.

Please refer to [this page](https://diff-usion.github.io/Awesome-Diffusion-Models/) as this page may not contain all the information due to page constraints.

## Contents
- [Resources](#resources)
  - [Introductory Posts](#introductory-posts)
  - [Introductory Papers](#introductory-papers)
  - [Introductory Videos](#introductory-videos)
  - [Introductory Lectures](#introductory-lectures)
  - [Tutorial and Jupyter Notebook](#tutorial-and-jupyter-notebook)
- [Papers](#papers)
  - [Survey](#survey)
  - [Vision](#vision)
    - [Generation](#generation)
    - [Classification](#classification)
    - [Segmentation](#segmentation)
    - [Image Translation](#image-translation)
    - [Inverse Problems](#inverse-problems)
    - [Medical Imaging](#medical-imaging)
    - [Multi-modal Learning](#multi-modal-learning)
    - [3D Vision](#3d-vision)
    - [Adversarial Attack](#adversarial-attack)
    - [Miscellany](#miscellany)
  - [Audio](#audio)
    - [Generation](#generation-1)
    - [Conversion](#conversion)
    - [Enhancement](#enhancement)
    - [Separation](#separation)
    - [Text-to-Speech](#text-to-speech)
    - [Miscellany](#miscellany-1)
  - [Natural Language](#natural-language)
  - [Tabular and Time Series](#tabular-and-time-series)
    - [Generation](#generation-2)
    - [Forecasting](#forecasting)
    - [Imputation](#imputation)
    - [Miscellany](#miscellany-2)
  - [Graph](#graph)
    - [Generation](#generation-3)
    - [Molecular and Material Generation](#molecular-and-material-generation)
  - [Reinforcement Learning](#reinforcement-learning)
  - [Theory](#theory)
  - [Applications](#applications)


# Resources
## Introductory Posts

**:fast_forward: DiffusionFastForward: 01-Diffusion-Theory** \
*Mikolaj Czerkawski (@mikonvergence)* \
[[Website](https://github.com/mikonvergence/DiffusionFastForward/blob/master/notes/01-Diffusion-Theory.md)] \
4 Feb 2023

**How diffusion models work: the math from scratch** \
*Sergios Karagiannakos,Nikolas Adaloglou* \
[[Website](https://theaisummer.com/diffusion-models/?fbclid=IwAR1BIeNHqa3NtC8SL0sKXHATHklJYphNH-8IGNoO3xZhSKM_GYcvrrQgB0o)] \
24 Sep 2022

**A Path to the Variational Diffusion Loss** \
*Alex Alemi* \
[[Website](https://blog.alexalemi.com/diffusion.html)] [[Colab](https://colab.research.google.com/github/google-research/vdm/blob/main/colab/SimpleDiffusionColab.ipynb)] \
15 Sep 2022

**The Annotated Diffusion Model** \
*Niels Rogge, Kashif Rasul* \
[[Website](https://huggingface.co/blog/annotated-diffusion)] \
06 Jun 2022

**The recent rise of diffusion-based models** \
*Maciej Domagała* \
[[Website](https://maciejdomagala.github.io/generative_models/2022/06/06/The-recent-rise-of-diffusion-based-models.html)] \
06 Jun 2022

**Introduction to Diffusion Models for Machine Learning** \
*Ryan O'Connor* \
[[Website](https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/)] \
12 May 2022

**Improving Diffusion Models as an Alternative To GANs** \
*Arash Vahdat and Karsten Kreis* \
[[Website-Part 1](https://developer.nvidia.com/blog/improving-diffusion-models-as-an-alternative-to-gans-part-1/)] [[Website-Part 2](https://developer.nvidia.com/blog/improving-diffusion-models-as-an-alternative-to-gans-part-2/)] \
26 Apr 2022

**An introduction to Diffusion Probabilistic Models** \
*Ayan Das* \
[[Website](https://ayandas.me/blog-tut/2021/12/04/diffusion-prob-models.html)] \
04 Dec 2021

**Introduction to deep generative modeling: Diffusion-based Deep Generative Models** \
*Jakub Tomczak* \
[[Website](https://jmtomczak.github.io/blog/10/10_ddgms_lvm_p2.html)] \
30 Aug 2021

**What are Diffusion Models?** \
*Lilian Weng* \
[[Website](https://lilianweng.github.io/lil-log/2021/07/11/diffusion-models.html)] \
11 Jul 2021

**Diffusion Models as a kind of VAE** \
*Angus Turner* \
[[Website](https://angusturner.github.io/generative_models/2021/06/29/diffusion-probabilistic-models-I.html)] \
29 Jun 2021

**Generative Modeling by Estimating Gradients of the Data Distribution** \
*Yang Song* \
[[Website](https://yang-song.github.io/blog/2021/score/)] \
5 May 2021

## Introductory Papers

**Understanding Diffusion Models: A Unified Perspective** \
*Calvin Luo* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.11970)] \
25 Aug 2022

**How to Train Your Energy-Based Models** \
*Yang Song, Diederik P. Kingma* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2101.03288)] \
9 Jan 2021

## Introductory Videos

**:fast_forward: DiffusionFastForward** \
*Mikolaj Czerkawski (@mikonvergence)* \
[[Video](https://www.youtube.com/playlist?list=PL5RHjmn-MVHDMcqx-SI53mB7sFOqPK6gN)] \
4 Mar 2023

**Diffusion models from scratch in PyTorch** \
*DeepFindr* \
[[Video](https://www.youtube.com/watch?v=a4Yfz2FxXiY)] \
18 Jul 2022

**Diffusion Models | Paper Explanation | Math Explained** \
*Outlier* \
[[Video](https://www.youtube.com/watch?v=HoKDTa5jHvg)] \
6 Jun 2022

**What are Diffusion Models?** \
*Ari Seff* \
[[Video](https://www.youtube.com/watch?v=fbLgFrlTnGU&list=LL&index=2)] \
20 Apr 2022

**Diffusion models explained** \
*AI Coffee Break with Letitia* \
[[Video](https://www.youtube.com/watch?v=344w5h24-h8&ab_channel=AICoffeeBreakwithLetitia)] \
23 Mar 2022

## Introductory Lectures

**Denoising Diffusion-based Generative Modeling: Foundations and Applications** \
*Karsten Kreis, Ruiqi Gao, Arash Vahdat* \
[[Page](https://cvpr2022-tutorial-diffusion-models.github.io/)] \
19 Jun 2022

**Diffusion Probabilistic Models** \
*Jascha Sohl-Dickstein, MIT 6.S192 - Lecture 22* \
[[Video](https://www.youtube.com/watch?v=XCUlnHP1TNM)] \
19 Apr 2022

## Tutorial and Jupyter Notebook

**:fast_forward: DiffusionFastForward: train from scratch in colab** \
*Mikolaj Czerkawski (@mikonvergence)* \
[[Github](https://github.com/mikonvergence/DiffusionFastForward)]
[[notebook](https://github.com/mikonvergence/DiffusionFastForward#computer-code)]

**diffusion-for-beginners** \
*ozanciga* \
[[Github](https://github.com/ozanciga/diffusion-for-beginners)]

**Beyond Diffusion: What is Personalized Image Generation and How Can You Customize Image Synthesis?** \
*J. Rafid Siddiqui* \
[[Github](https://github.com/azad-academy/personalized-diffusion)] [[Medium](https://medium.com/mlearning-ai/beyond-diffusion-what-is-personalized-image-generation-and-how-can-you-customize-image-synthesis-26a89d5b335)]

**Diffusion_models_tutorial** \
*FilippoMB* \
[[Github](https://github.com/FilippoMB/Diffusion_models_tutorial)]

**ScoreDiffusionModel** \
*JeongJiHeon* \
[[Github](https://github.com/JeongJiHeon/ScoreDiffusionModel)]

**Minimal implementation of diffusion models** \
*VSehwag* \
[[Github](https://github.com/VSehwag/minimal-diffusion)]

**diffusion_tutorial** \
*sunlin-ai* \
[[Github](https://github.com/sunlin-ai/diffusion_tutorial)] 

**Denoising diffusion probabilistic models** \
*acids-ircam* \
[[Github](https://github.com/acids-ircam/diffusion_models)] 


**Centipede Diffusion** \
*Zalring* \
[[Notebook](https://colab.research.google.com/github/Zalring/Centipede_Diffusion/blob/main/Centipede_Diffusion.ipynb)]

**Deforum Stable Diffusion** \
*deforum* \
[[Notebook](https://colab.research.google.com/github/deforum/stable-diffusion/blob/main/Deforum_Stable_Diffusion.ipynb)]

**Stable Diffusion Interpolation** \
*None* \
[[Notebook](https://colab.research.google.com/drive/1EHZtFjQoRr-bns1It5mTcOVyZzZD9bBc?usp=sharing)]

**Keras Stable Diffusion: GPU starter example** \
*None* \
[[Notebook](https://colab.research.google.com/drive/1zVTa4mLeM_w44WaFwl7utTaa6JcaH1zK)]

**Huemin Jax Diffusion** \
*huemin-art* \
[[Notebook](https://colab.research.google.com/github/huemin-art/jax-guided-diffusion/blob/v2.7/Huemin_Jax_Diffusion_2_7.ipynb)]

**Disco Diffusion** \
*alembics* \
[[Notebook](https://colab.research.google.com/github/alembics/disco-diffusion/blob/main/Disco_Diffusion.ipynb)]

**Simplified Disco Diffusion** \
*entmike* \
[[Notebook](https://colab.research.google.com/github/entmike/disco-diffusion-1/blob/main/Simplified_Disco_Diffusion.ipynb)]

**WAS's Disco Diffusion - Portrait Generator Playground** \
*WASasquatch* \
[[Notebook](https://colab.research.google.com/github/WASasquatch/disco-diffusion-portrait-playground/blob/main/WAS's_Disco_Diffusion_v5_6_9_%5BPortrait_Generator_Playground%5D.ipynb)]

**Diffusers - Hugging Face** \
*huggingface* \
[[Notebook](https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/diffusers_intro.ipynb)] 


# Papers

## Survey

**A Survey on Video Diffusion Models** \
*Zhen Xing, Qijun Feng, Haoran Chen, Qi Dai, Han Hu, Hang Xu, Zuxuan Wu and Yu-Gang Jiang*
arXiv 2023. [[Paper](https://arxiv.org/pdf/2310.10647.pdf)] \
16 Oct 2023

**State of the Art on Diffusion Models for Visual Computing** \
*Ryan Po, Wang Yifan, Vladislav Golyanik, Kfir Aberman, Jonathan T. Barron, Amit H. Bermano, Eric Ryan Chan, Tali Dekel, Aleksander Holynski, Angjoo Kanazawa, C. Karen Liu, Lingjie Liu, Ben Mildenhall, Matthias Nießner, Björn Ommer, Christian Theobalt, Peter Wonka, Gordon Wetzstein* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.07204)] \
11 Oct 2023

**Memory in Plain Sight: A Survey of the Uncanny Resemblances between Diffusion Models and Associative Memories** \
*Benjamin Hoover, Hendrik Strobelt, Dmitry Krotov, Judy Hoffman, Zsolt Kira, Duen Horng Chau* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.16750)] \
28 Sep 2023

**A Survey of Diffusion Based Image Generation Models: Issues and Their Solutions** \
*Tianyi Zhang, Zheng Wang, Jing Huang, Mohiuddin Muhammad Tasnim, Wei Shi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.13142)] \
25 Aug 2023

**Diffusion Models for Image Restoration and Enhancement -- A Comprehensive Survey** \
*Xin Li, Yulin Ren, Xin Jin, Cuiling Lan, Xingrui Wang, Wenjun Zeng, Xinchao Wang, Zhibo Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.09388)] \
18 Aug 2023

**A Comprehensive Survey on Generative Diffusion Models for Structured Data** \
*Heejoon Koo, To Eun Kim* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.04139)] \
7 Jun 2023

**On the Design Fundamentals of Diffusion Models: A Survey** \
*Ziyi Chang, George A. Koulieris, Hubert P. H. Shum* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.04542)] \
7 Jun 2023

**Diffusion Models in NLP: A Survey** \
*Hao Zou, Zae Myung Kim, Dongyeop Kang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.14671)] \
24 May 2023

**Diffusion Models for Time Series Applications: A Survey** \
*Lequan Lin, Zhengkun Li, Ruikun Li, Xuliang Li, Junbin Gao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.00624)] \
1 May 2023

**A Comprehensive Survey on Knowledge Distillation of Diffusion Models** \
*Weijian Luo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.04262)] \
9 Apr 2023

**A Survey on Graph Diffusion Models: Generative AI in Science for Molecule, Protein and Material** \
*Mengchun Zhang, Maryam Qamar, Taegoo Kang, Yuna Jung, Chenshuang Zhang, Sung-Ho Bae, Chaoning Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.01565)] \
4 Apr 2023

**Audio Diffusion Model for Speech Synthesis: A Survey on Text To Speech and Speech Enhancement in Generative AI** \
*Chenshuang Zhang, Chaoning Zhang, Sheng Zheng, Mengchun Zhang, Maryam Qamar, Sung-Ho Bae, In So Kweon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.13336)] \
23 Mar 2023

**Diffusion Models in NLP: A Survey** \
*Yuansong Zhu, Yu Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.07576)] \
14 Mar 2023

**Text-to-image Diffusion Model in Generative AI: A Survey** \
*Chenshuang Zhang, Chaoning Zhang, Mengchun Zhang, In So Kweon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.07909)] \
14 Mar 2023

**Diffusion Models for Non-autoregressive Text Generation: A Survey** \
*Yifan Li, Kun Zhou, Wayne Xin Zhao, Ji-Rong Wen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.06574)] \
12 Mar 2023

**Diffusion Models in Bioinformatics: A New Wave of Deep Learning Revolution in Action** \
*Zhiye Guo, Jian Liu, Yanli Wang, Mengrui Chen, Duolin Wang, Dong Xu, Jianlin Cheng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.10907)] \
13 Feb 2023

**Generative Diffusion Models on Graphs: Methods and Applications** \
*Wenqi Fan, Chengyi Liu, Yunqing Liu, Jiatong Li, Hang Li, Hui Liu, Jiliang Tang, Qing Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.02591)] \
6 Feb 2023

**Diffusion Models for Medical Image Analysis: A Comprehensive Survey** \
*Amirhossein Kazerouni, Ehsan Khodapanah Aghdam, Moein Heidari, Reza Azad, Mohsen Fayyaz, Ilker Hacihaliloglu, Dorit Merhof* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.07804)] [[Github](https://github.com/amirhossein-kz/Awesome-Diffusion-Models-in-Medical-Imaging)] \
14 Nov 2022

**Efficient Diffusion Models for Vision: A Survey** \
*Anwaar Ulhaq, Naveed Akhtar, Ganna Pogrebna* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.09292)] \
7 Oct 2022

**Diffusion Models in Vision: A Survey** \
*Florinel-Alin Croitoru, Vlad Hondru, Radu Tudor Ionescu, Mubarak Shah* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.04747)] \
10 Sep 2022

**A Survey on Generative Diffusion Model** \
*Hanqun Cao, Cheng Tan, Zhangyang Gao, Guangyong Chen, Pheng-Ann Heng, Stan Z. Li* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.02646)] \
6 Sep 2022

**Diffusion Models: A Comprehensive Survey of Methods and Applications** \
*Ling Yang, Zhilong Zhang, Shenda Hong, Wentao Zhang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.00796)] \
2 Sep 2022

## Vision
### Generation

**DiffEnc: Variational Diffusion with a Learned Encoder** \
*Beatrix M. G. Nielsen, Anders Christensen, Andrea Dittadi, Ole Winther* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.19789)] \
30 Oct 2023

**Upgrading VAE Training With Unlimited Data Plans Provided by Diffusion Models** \
*Tim Z. Xiao, Johannes Zenn, Robert Bamler* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.19653)] \
30 Oct 2023

**Successfully Applying Lottery Ticket Hypothesis to Diffusion Model** \
*Chao Jiang, Bo Hui, Bohan Liu, Da Yan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.18823)] \
28 Oct 2023

**Noise-Free Score Distillation** \
*Oren Katzir, Or Patashnik, Daniel Cohen-Or, Dani Lischinski* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.17590)] \
26 Oct 2023

**The statistical thermodynamics of generative diffusion models** \
*Luca Ambrogioni* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.17467)] \
26 Oct 2023

**Improving Denoising Diffusion Models via Simultaneous Estimation of Image and Noise** \
*Zhenkai Zhang, Krista A. Ehinger, Tom Drummond* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.17167)] \
26 Oct 2023

**Hierarchical Semi-Implicit Variational Inference with Application to Diffusion Model Acceleration** \
*Longlin Yu, Tianyu Xie, Yu Zhu, Tong Yang, Xiangyu Zhang, Cheng Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.17153)] [[Github](https://github.com/longinyu/hsivi)] \
26 Oct 2023

**RePoseDM: Recurrent Pose Alignment and Gradient Guidance for Pose Guided Image Synthesis** \
*Anant Khandelwal* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.16074)] \
24 Oct 2023

**Improved Techniques for Training Consistency Models** \
*Yang Song, Prafulla Dhariwal* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.14189)] \
22 Oct 2023

**ScaleLong: Towards More Stable Training of Diffusion Model via Scaling Network Long Skip Connection** \
*Zhongzhan Huang, Pan Zhou, Shuicheng Yan, Liang Lin* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2310.13545)] [[Github](https://github.com/sail-sg/ScaleLong)] \
20 Oct 2023


**Particle Guidance: non-I.I.D. Diverse Sampling with Diffusion Models** \
*Gabriele Corso, Yilun Xu, Valentin de Bortoli, Regina Barzilay, Tommi Jaakkola* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.13102)] [[Github](https://github.com/gcorso/particle-guidance)] \
19 Oct 2023

**Closed-Form Diffusion Models** \
*Christopher Scarvelis, Haitz Sáez de Ocáriz Borde, Justin Solomon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.12395)] \
19 Oct 2023

**Elucidating The Design Space of Classifier-Guided Diffusion Generation** \
*Jiajun Ma, Tianyang Hu, Wenjia Wang, Jiacheng Sun* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.11311)] [[Github](https://github.com/alexmaols/elucd)] \
17 Oct 2023


**BayesDiff: Estimating Pixel-wise Uncertainty in Diffusion via Bayesian Inference** \
*Siqi Kou, Lei Gan, Dequan Wang, Chongxuan Li, Zhijie Deng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.11142)] \
17 Oct 2023

**Unsupervised Discovery of Interpretable Directions in h-space of Pre-trained Diffusion Models** \
*Zijian Zhang, Luping Liu. Zhijie Lin, Yichen Zhu, Zhou Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.09912)] \
15 Oct 2023

**Towards More Accurate Diffusion Model Acceleration with A Timestep Aligner** \
*Mengfei Xia, Yujun Shen, Changsong Lei, Yu Zhou, Ran Yi, Deli Zhao, Wenping Wang, Yong-jin Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.09469)] \
14 Oct 2023

**Unseen Image Synthesis with Diffusion Models** \
*Ye Zhu, Yu Wu, Zhiwei Deng, Olga Russakovsky, Yan Yan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.09213)] \
13 Oct 2023

**Debias the Training of Diffusion Models** \
*Hu Yu, Li Shen, Jie Huang, Man Zhou, Hongsheng Li, Feng Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.08442)] \
12 Oct 2023

**Neural Diffusion Models** \
*Grigory Bartosh, Dmitry Vetrov, Christian A. Naesseth* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.08337)] \
12 Oct 2023

**Efficient Integrators for Diffusion Generative Models** \
*Kushagra Pandey, Maja Rudolph, Stephan Mandt* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.07894)] \
11 Oct 2023


**Learning Stackable and Skippable LEGO Bricks for Efficient, Reconfigurable, and Variable-Resolution Diffusion Modeling** \
*Huangjie Zheng, Zhendong Wang, Jianbo Yuan, Guanghan Ning, Pengcheng He, Quanzeng You, Hongxia Yang, Mingyuan Zhou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.06389)] \
10 Oct 2023

**Language Model Beats Diffusion -- Tokenizer is Key to Visual Generation** \
*Lijun Yu, José Lezama, Nitesh B. Gundavarapu, Luca Versari, Kihyuk Sohn, David Minnen, Yong Cheng, Agrim Gupta, Xiuye Gu, Alexander G. Hauptmann, Boqing Gong, Ming-Hsuan Yang, Irfan Essa, David A. Ross, Lu Jiang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.05737)] [[Github](https://github.com/lucidrains/magvit2-pytorch)] \
9 Oct 2023

**The Emergence of Reproducibility and Consistency in Diffusion Models** \
*Huijie Zhang, Jinfan Zhou, Yifu Lu, Minzhe Guo, Liyue Shen, Qing Qu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.05264)] \
8 Oct 2023

**DiffNAS: Bootstrapping Diffusion Models by Prompting for Better Architectures** \
*Wenhao Li, Xiu Su, Shan You, Fei Wang, Chen Qian, Chang Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.04750)] \
7 Oct 2023

**Observation-Guided Diffusion Probabilistic Models** \
*Junoh Kang, Jinyoung Choi, Sungik Choi, Bohyung Han* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.04041)] \
6 Oct 2023

**Latent Consistency Models: Synthesizing High-Resolution Images with Few-Step Inference** \
*Simian Luo, Yiqin Tan, Longbo Huang, Jian Li, Hang Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.04378)] \
6 Oct 2023

**Denoising Diffusion Step-aware Models** \
*Shuai Yang, Yukang Chen, Luozhou Wang, Shu Liu, Yingcong Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.03337)] \
5 Oct 2023


**EfficientDM: Efficient Quantization-Aware Fine-Tuning of Low-Bit Diffusion Models** \
*Yefei He, Jing Liu, Weijia Wu, Hong Zhou, Bohan Zhuang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.03270)] \
5 Oct 2023

**Learning Energy-Based Prior Model with Diffusion-Amortized MCMC** \
*Peiyu Yu, Yaxuan Zhu, Sirui Xie, Xiaojian Ma, Ruiqi Gao, Song-Chun Zhu, Ying Nian Wu* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2310.03218)] [[Github](https://github.com/yuPeiyu98/Diffusion-Amortized-MCMC)] \
5 Oct 2023

**On Memorization in Diffusion Models** \
*Xiangming Gu, Chao Du, Tianyu Pang, Chongxuan Li, Min Lin, Ye Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.02664)] [[Github](https://github.com/sail-sg/DiffMemorize)] \
4 Oct 2023


**Sequential Data Generation with Groupwise Diffusion Process** \
*Sangyun Lee, Gayoung Lee, Hyunsu Kim, Junho Kim, Youngjung Uh* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.01400)] \
2 Oct 2023

**Consistency Trajectory Models: Learning Probability Flow ODE Trajectory of Diffusion** \
*Dongjun Kim, Chieh-Hsin Lai, Wei-Hsiang Liao, Naoki Murata, Yuhta Takida, Toshimitsu Uesaka, Yutong He, Yuki Mitsufuji, Stefano Ermon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.02279)] \
1 Oct 2023

**Completing Visual Objects via Bridging Generation and Segmentation** \
*Xiang Li, Yinpeng Chen, Chung-Ching Lin, Rita Singh, Bhiksha Raj, Zicheng Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.00808)] \
1 Oct 2023

**Decoding Realistic Images from Brain Activity with Contrastive Self-supervision and Latent Diffusion** \
*Jingyuan Sun, Mingxiao Li, Marie-Francine Moens* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.00318)] \
30 Sep 2023

**FashionFlow: Leveraging Diffusion Models for Dynamic Fashion Video Synthesis from Static Imagery** \
*Tasin Islam, Alina Miron, XiaoHui Liu, Yongmin Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.00106)] \
29 Sep 2023

**Denoising Diffusion Bridge Models** \
*Linqi Zhou, Aaron Lou, Samar Khanna, Stefano Ermon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.16948)] \
29 Sep 2023


**DeeDiff: Dynamic Uncertainty-Aware Early Exiting for Accelerating Diffusion Model Generation** \
*Shengkun Tang, Yaqing Wang, Caiwen Ding, Yi Liang, Yao Li, Dongkuan Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.17074)] \
29 Sep 2023


**Distilling ODE Solvers of Diffusion Models into Smaller Steps** \
*Sanghwan Kim, Hao Tang, Fisher Yu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.16421)] \
28 Sep 2023

**Factorized Diffusion Architectures for Unsupervised Image Generation and Segmentation** \
*Xin Yuan, Michael Maire* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.15726)] \
27 Sep 2023

**Generative Escher Meshes** \
*Noam Aigerman, Thibault Groueix* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.14564)] \
25 Sep 2023

**Soft Mixture Denoising: Beyond the Expressive Bottleneck of Diffusion Models** \
*Yangming Li, Boris van Breugel, Mihaela van der Schaar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.14068)] \
25 Sep 2023

**GLOBER: Coherent Non-autoregressive Video Generation via GLOBal Guided Video DecodER** \
*Mingzhen Sun, Weining Wang, Zihan Qin, Jiahui Sun, Sihan Chen, Jing Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.13274)] [[Github](https://github.com/iva-mzsun/glober)] \
23 Sep 2023

**Score Mismatching for Generative Modeling** \
*Senmao Ye, Fei Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.11043)] \
20 Sep 2023

**Generalised Probabilistic Diffusion Scale-Spaces** \
*Pascal Peter* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.08511)] \
15 Sep 2023

**Generative Image Dynamics** \
*Zhengqi Li, Richard Tucker, Noah Snavely, Aleksander Holynski* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.07906)] [[Project](https://generative-dynamics.github.io/)] \
14 Sep 2023

**Beta Diffusion** \
*Mingyuan Zhou, Tianqi Chen, Zhendong Wang, Huangjie Zheng* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2309.07867)] \
14 Sep 2023

**Adapt and Diffuse: Sample-adaptive Reconstruction via Latent Diffusion Models** \
*Zalan Fabian, Berk Tinaz, Mahdi Soltanolkotabi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.06642)] \
12 Sep 2023

**Elucidating the solution space of extended reverse-time SDE for diffusion models** \
*Qinpeng Cui, Xinyi Zhang, Zongqing Lu, Qingmin Liao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.06169)] \
12 Sep 2023


**Learning Energy-Based Models by Cooperative Diffusion Recovery Likelihood** \
*Yaxuan Zhu, Jianwen Xie, Yingnian Wu, Ruiqi Gao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.05153)] \
10 Sep 2023

**Relay Diffusion: Unifying diffusion process across resolutions for image synthesis** \
*Jiayan Teng, Wendi Zheng, Ming Ding, Wenyi Hong, Jianqiao Wangni, Zhuoyi Yang, Jie Tang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.03350)] \
4 Sep 2023

**Gradient Domain Diffusion Models for Image Synthesis** \
*Yuanhao Gong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.01875)] \
5 Sep 2023


**Hierarchical Masked 3D Diffusion Model for Video Outpainting** \
*Fanda Fan, Chaoxu Guo, Litong Gong, Biao Wang, Tiezheng Ge, Yuning Jiang, Chunjie Luo, Jianfeng Zhan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.02119)] [[Github](https://fanfanda.github.io/M3DDM/)] \
5 Sep 2023

**Diffusion Models with Deterministic Normalizing Flow Priors** \
*Mohsen Zand, Ali Etemad, Michael Greenspan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.01274)] [[Github](https://github.com/MohsenZand/DiNof)] \
3 Sep 2023

**Diffusion Inertial Poser: Human Motion Reconstruction from Arbitrary Sparse IMU Configurations** \
*Tom Van Wouwe, Seunghwan Lee, Antoine Falisse, Scott Delp, C. Karen Liu* \
AAAI 2024. [[Paper](https://arxiv.org/abs/2308.16682)] \
31 Aug 2023

**Conditioning Score-Based Generative Models by Neuro-Symbolic Constraints** \
*Davide Scassola, Sebastiano Saccani, Ginevra Carbone, Luca Bortolussi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.16534)] \
31 Aug 2023

**Elucidating the Exposure Bias in Diffusion Models** \
*Mang Ning, Mingxiao Li, Jianlin Su, Albert Ali Salah, Itir Onal Ertugrul* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.15321)] \
29 Aug 2023

**Residual Denoising Diffusion Models** \
*Jiawei Liu, Qiang Wang, Huijie Fan, Yinong Wang, Yandong Tang, Liangqiong Qu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.13712)] [[Github](https://github.com/nachifur/RDDM)] \
25 Aug 2023

**Efficient Transfer Learning in Diffusion Models via Adversarial Noise** \
*Xiyu Wang, Baijiong Lin, Daochang Liu, Chang Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.11948)] \
23 Aug 2023

**Boosting Diffusion Models with an Adaptive Momentum Sampler** \
*Xiyu Wang, Anh-Dung Dinh, Daochang Liu, Chang Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.11941)] \
23 Aug 2023

**Make-It-4D: Synthesizing a Consistent Long-Term Dynamic Scene Video from a Single Image** \
*Liao Shen, Xingyi Li, Huiqiang Sun, Juewen Peng, Ke Xian, Zhiguo Cao, Guosheng Lin* \
ACM MM 2023. [[Paper](https://arxiv.org/abs/2308.10257)] \
20 Aug 2023

**Spiking-Diffusion: Vector Quantized Discrete Diffusion Model with Spiking Neural Networks** \
*Mingxuan Liu, Rui Wen, Hong Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.10187)] \
20 Aug 2023

**SciRE-Solver: Efficient Sampling of Diffusion Probabilistic Models by Score-integrand Solver with Recursive Derivative Estimation** \
*Shigui Li, Wei Chen, Delu Zeng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07896)] \
15 Aug 2023

**Improved Order Analysis and Design of Exponential Integrator for Diffusion Models Sampling** \
*Qinsheng Zhang, Jiaming Song, Yongxin Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.02157)] \
4 Aug 2023

**Patched Denoising Diffusion Models For High-Resolution Image Synthesis** \
*Zheng Ding, Mengqi Zhang, Jiajun Wu, Zhuowen Tu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.01316)] \
2 Aug 2023

**Spatial-Frequency U-Net for Denoising Diffusion Probabilistic Models** \
*Xin Yuan, Linjie Li, Jianfeng Wang, Zhengyuan Yang, Kevin Lin, Zicheng Liu, Lijuan Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.14648)] \
27 Jul 2023

**Synthesis of Batik Motifs using a Diffusion -- Generative Adversarial Network** \
*One Octadion, Novanto Yudistira, Diva Kurnianingtyas* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.12122)] \
22 Jul 2023

**DPM-OT: A New Diffusion Probabilistic Model Based on Optimal Transport** \
*Zezeng Li, ShengHao Li, Zhanpeng Wang, Na Lei, Zhongxuan Luo, Xianfeng Gu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.11308)] [[Github](https://github.com/cognaclee/DPM-OT)] \
21 Jul 2023

**Diffusion Sampling with Momentum for Mitigating Divergence Artifacts** \
*Suttisak Wizadwongsa, Worameth Chinchuthakun, Pramook Khungurn, Amit Raj, Supasorn Suwajanakorn* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.11118)] \
20 Jul 2023

**Flow Matching in Latent Space** \
*Quan Dao, Hao Phung, Binh Nguyen, Anh Tran* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08698)] [[Project](https://vinairesearch.github.io/LFM/)] \
17 Jul 2023

**Manifold-Guided Sampling in Diffusion Models for Unbiased Image Generation** \
*Xingzhe Su, Wenwen Qiang, Zeen Song, Hang Gao, Fengge Wu, Changwen Zheng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08199)] \
17 Jul 2023

**Complexity Matters: Rethinking the Latent Space for Generative Modeling** \
*Tianyang Hu, Fei Chen, Haonan Wang, Jiawei Li, Wenjia Wang, Jiacheng Sun, Zhenguo Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08283)] \
17 Jul 2023

**Collaborative Score Distillation for Consistent Visual Synthesis** \
*Subin Kim, Kyungmin Lee, June Suk Choi, Jongheon Jeong, Kihyuk Sohn, Jinwoo Shin* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.04787)] [[Project](https://subin-kim-cv.github.io/CSD/)] [[Github](https://github.com/subin-kim-cv/CSD)] \
4 Jul 2023

**ProtoDiffusion: Classifier-Free Diffusion Guidance with Prototype Learning** \
*Gulcin Baykal, Halil Faruk Karagoz, Taha Binhuraib, Gozde Unal* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.01924)] \
4 Jul 2023

**SDXL: Improving Latent Diffusion Models for High-Resolution Image Synthesis** \
*Dustin Podell, Zion English, Kyle Lacey, Andreas Blattmann, Tim Dockhorn, Jonas Müller, Joe Penna, Robin Rombach* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.01952)] [[Github](https://github.com/Stability-AI/generative-models)] \
4 Jul 2023

**Bidirectional Temporal Diffusion Model for Temporally Consistent Human Animation** \
*Tserendorj Adiya, Sanghun Kim, Jung Eun Lee, Jae Shin Yoon, Hwasup Lim* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.00574)] \
2 Jul 2023


**Spiking Denoising Diffusion Probabilistic Models** \
*Jiahang Cao, Ziqing Wang, Hanzhong Guo, Hao Cheng, Qiang Zhang, Renjing Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.17046)] \
29 Jun 2023

**DomainStudio: Fine-Tuning Diffusion Models for Domain-Driven Image Generation using Limited Data** \
*Jingyuan Zhu, Huimin Ma, Jiansheng Chen, Jian Yuan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.14153)] \
25 Jun 2023

**Decoupled Diffusion Models with Explicit Transition Probability** \
*Yuhang Huang, Zheng Qin, Xinwang Liu, Kai Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.13720)] \
23 Jun 2023

**Continuous Layout Editing of Single Images with Diffusion Models** \
*Zhiyuan Zhang, Zhitong Huang, Jing Liao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.13078)] \
22 Jun 2023

**Semi-Implicit Denoising Diffusion Models (SIDDMs)** \
*Yanwu Xu, Mingming Gong, Shaoan Xie, Wei Wei, Matthias Grundmann, kayhan Batmanghelich, Tingbo Hou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.12511)] \
21 Jun 2023

**Eliminating Lipschitz Singularities in Diffusion Models** \
*Zhantao Yang, Ruili Feng, Han Zhang, Yujun Shen, Kai Zhu, Lianghua Huang, Yifei Zhang, Yu Liu, Deli Zhao, Jingren Zhou, Fan Cheng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.11251)] \
20 Jun 2023

**GD-VDM: Generated Depth for better Diffusion-based Video Generation** \
*Ariel Lapid, Idan Achituve, Lior Bracha, Ethan Fetaya* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.11173)] \
19 Jun 2023

**Image Harmonization with Diffusion Model** \
*Jiajie Li, Jian Wang, Chen Wang, Jinjun Xiong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.10441)] \
17 Jun 2023


**Training Diffusion Classifiers with Denoising Assistance** \
*Chandramouli Sastry, Sri Harsha Dumpala, Sageev Oore* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09192)] \
15 Jun 2023


**Conditional Human Sketch Synthesis with Explicit Abstraction Control** \
*Dar-Yen Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09274)] \
15 Jun 2023

**Fast Training of Diffusion Models with Masked Transformers** \
*Hongkai Zheng, Weili Nie, Arash Vahdat, Anima Anandkumar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09305)] [[Github](https://github.com/Anima-Lab/MaskDiT)] \
15 Jun 2023


**Relation-Aware Diffusion Model for Controllable Poster Layout Generation** \
*Fengheng Li, An Liu, Wei Feng, Honghe Zhu, Yaoyu Li, Zheng Zhang, Jingjing Lv, Xin Zhu, Junjie Shen, Zhangang Lin, Jingping Shao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09086)] \
15 Jun 2023

**OMS-DPM: Optimizing the Model Schedule for Diffusion Probabilistic Models** \
*Enshu Liu, Xuefei Ning, Zinan Lin, Huazhong Yang, Yu Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.08860)] \
15 Jun 2023


**DORSal: Diffusion for Object-centric Representations of Scenes $\textit{et al.}$** \
*Allan Jabri, Sjoerd van Steenkiste, Emiel Hoogeboom, Mehdi S. M. Sajjadi, Thomas Kipf* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.08068)] \
13 Jun 2023


**Fast Diffusion Model** \
*Zike Wu, Pan Zhou, Kenji Kawaguchi, Hanwang Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.06991)] [[Github](https://github.com/sail-sg/FDM)] \
12 Jun 2023

**ADDP: Learning General Representations for Image Recognition and Generation with Alternating Denoising Diffusion Process** \
*Changyao Tian, Chenxin Tao, Jifeng Dai, Hao Li, Ziheng Li, Lewei Lu, Xiaogang Wang, Hongsheng Li, Gao Huang, Xizhou Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.05423)] \
8 Jun 2023

**Multi-Architecture Multi-Expert Diffusion Models** \
*Yunsung Lee, Jin-Young Kim, Hyojun Go, Myeongho Jeong, Shinhyeok Oh, Seungtaek Choi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.04990)] \
8 Jun 2023

**Interpreting and Improving Diffusion Models Using the Euclidean Distance Function** \
*Frank Permenter, Chenyang Yuan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.04848)] \
8 Jun 2023

**Video Diffusion Models with Local-Global Context Guidance** \
*Siyuan Yang, Lu Zhang, Yu Liu, Zhizhuo Jiang, You He* \
IJCAI 2023. [[Paper](https://arxiv.org/abs/2306.02562)] [[Github](https://github.com/exisas/LGC-VD)] \
5 Jun 2023

**Brain Diffusion for Visual Exploration: Cortical Discovery using Large Scale Generative Models** \
*Andrew F. Luo, Margaret M. Henderson, Leila Wehbe, Michael J. Tarr* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.03089)] \
5 Jun 2023

**Faster Training of Diffusion Models and Improved Density Estimation via Parallel Score Matching** \
*Etrit Haxholli, Marco Lorenzi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.02658)] \
5 Jun 2023

**Temporal Dynamic Quantization for Diffusion Models** \
*Junhyuk So, Jungwon Lee, Daehyun Ahn, Hyungjun Kim, Eunhyeok Park* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.02316)] \
4 Jun 2023

**Conditional Generation from Unconditional Diffusion Models using Denoiser Representations** \
*Alexandros Graikos, Srikar Yellapragada, Dimitris Samaras* \
BMVC 2023. [[Paper](https://arxiv.org/abs/2306.01900)] [[Github](https://github.com/cvlab-stonybrook/fewshot-conditional-diffusion)] \
2 Jun 2023

**Conditioning Diffusion Models via Attributes and Semantic Masks for Face Generation** \
*Nico Giambi, Giuseppe Lisanti* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.00914)] \
1 Jun 2023

**Differential Diffusion: Giving Each Pixel Its Strength** \
*Eran Levin, Ohad Fried* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.00950)] \
1 Jun 2023


**Addressing Discrepancies in Semantic and Visual Alignment in Neural Networks** \
*Natalie Abreu, Nathan Vaska, Victoria Helus* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.01148)] \
1 Jun 2023


**Addressing Negative Transfer in Diffusion Models** \
*Hyojun Go, JinYoung Kim, Yunsung Lee, Seunghyun Lee, Shinhyeok Oh, Hyeongdon Moon, Seungtaek Choi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.00354)] \
1 Jun 2023

**A Geometric Perspective on Diffusion Models** \
*Defang Chen, Zhenyu Zhou, Jian-Ping Mei, Chunhua Shen, Chun Chen, Can Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.19947)] \
31 May 2023



**Spontaneous symmetry breaking in generative diffusion models** \
*Gabriel Raya, Luca Ambrogioni* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.19693)] \
31 May 2023

**Perturbation-Assisted Sample Synthesis: A Novel Approach for Uncertainty Quantification** \
*Yifei Liu, Rex Shen, Xiaotong Shen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18671)] \
30 May 2023

**One-Line-of-Code Data Mollification Improves Optimization of Likelihood-based Generative Models** \
*Ba-Hien Tran, Giulio Franzese, Pietro Michiardi, Maurizio Filippone* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18900)] \
30 May 2023

**Ambient Diffusion: Learning Clean Distributions from Corrupted Data** \
*Giannis Daras, Kulin Shah, Yuval Dagan, Aravind Gollakota, Alexandros G. Dimakis, Adam Klivans* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.19256)] \
30 May 2023

**Towards Accurate Data-free Quantization for Diffusion Models** \
*Changyuan Wang, Ziwei Wang, Xiuwei Xu, Yansong Tang, Jie Zhou, Jiwen Lu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18723)] \
30 May 2023

**BRIGHT: Bi-level Feature Representation of Image Collections using Groups of Hash Tables** \
*Dingdong Yang, Yizhi Wang, Ali Mahdavi-Amiri, Hao Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18601)] [[Project](https://bright-project01.github.io/)] \
29 May 2023

**Diff-Instruct: A Universal Approach for Transferring Knowledge From Pre-trained Diffusion Models** \
*Weijian Luo, Tianyang Hu, Shifeng Zhang, Jiacheng Sun, Zhenguo Li, Zhihua Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18455)] \
29 May 2023

**Learning to Jump: Thinning and Thickening Latent Counts for Generative Modeling** \
*Tianqi Chen, Mingyuan Zhou* \
ICML 2023. [[Paper](https://arxiv.org/abs/2305.18375)] [[Github](https://github.com/tqch/poisson-jump)] \
28 May 2023

**Reconstructing the Mind's Eye: fMRI-to-Image with Contrastive Learning and Diffusion Priors** \
*Paul S. Scotti, Atmadeep Banerjee, Jimmie Goode, Stepan Shabalin, Alex Nguyen, Ethan Cohen, Aidan J. Dempster, Nathalie Verlinde, Elad Yundler, David Weisberg, Kenneth A. Norman, Tanishq Mathew Abraham* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18274)] [[Github](https://medarc-ai.github.io/mindeye/)] \
29 May 2023

**Contrast, Attend and Diffuse to Decode High-Resolution Images from Brain Activities** \
*Jingyuan Sun, Mingxiao Li, Zijiao Chen, Yunhao Zhang, Shaonan Wang, Marie-Francine Moens* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.17214)] \
26 May 2023

**Parallel Sampling of Diffusion Models** \
*Andy Shih, Suneel Belkhale, Stefano Ermon, Dorsa Sadigh, Nima Anari* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16317)] [[Github](https://github.com/AndyShih12/paradigms)] \
25 May 2023

**Trans-Dimensional Generative Modeling via Jump Diffusion Models** \
*Andrew Campbell, William Harvey, Christian Weilbach, Valentin De Bortoli, Tom Rainforth, Arnaud Doucet* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16261)] \
25 May 2023

**UDPM: Upsampling Diffusion Probabilistic Models** \
*Shady Abu-Hussein, Raja Giryes* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16269)] \
25 May 2023


**Unifying GANs and Score-Based Diffusion as Generative Particle Models** \
*Jean-Yves Franceschi, Mike Gartrell, Ludovic Dos Santos, Thibaut Issenhuth, Emmanuel de Bézenac, Mickaël Chen, Alain Rakotomamonjy* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16150)] \
25 May 2023

**DuDGAN: Improving Class-Conditional GANs via Dual-Diffusion** \
*Taesun Yeom, Minhyeok Lee* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.14849)] \
24 May 2023

**Alleviating Exposure Bias in Diffusion Models through Sampling with Shifted Time Steps** \
*Mingxiao Li, Tingyu Qu, Wei Sun, Marie-Francine Moens* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15583)] \
24 May 2023


**Robust Classification via a Single Diffusion Model** \
*Huanran Chen, Yinpeng Dong, Zhengyi Wang, Xiao Yang, Chengqi Duan, Hang Su, Jun Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15241)] \
24 May 2023

**On the Generalization of Diffusion Model** \
*Mingyang Yi, Jiacheng Sun, Zhenguo Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.14712)] \
24 May 2023

**VDT: An Empirical Study on Video Diffusion with Transformers** \
*Haoyu Lu, Guoxing Yang, Nanyi Fei, Yuqi Huo, Zhiwu Lu, Ping Luo, Mingyu Ding* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.13311)] [[Github](https://github.com/RERV/VDT)] \
22 May 2023

**Cinematic Mindscapes: High-quality Video Reconstruction from Brain Activity** \
*Zijiao Chen, Jiaxin Qing, Juan Helen Zhou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.11675)] [[Project](https://mind-video.com/)] \
19 May 2023

**PTQD: Accurate Post-Training Quantization for Diffusion Models** \
*Yefei He, Luping Liu, Jing Liu, Weijia Wu, Hong Zhou, Bohan Zhuang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.10657)] \
18 May 2023

**Blackout Diffusion: Generative Diffusion Models in Discrete-State Spaces** \
*Javier E Santos, Zachary R. Fox, Nicholas Lubbers, Yen Ting Lin* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.11089)] \
18 May 2023

**Structural Pruning for Diffusion Models** \
*Gongfan Fang, Xinyin Ma, Xinchao Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.10924)] [[Github](https://github.com/VainF/Diff-Pruning)] \
18 May 2023


**Catch-Up Distillation: You Only Need to Train Once for Accelerating Sampling** \
*Shitong Shao, Xu Dai, Shouyi Yin, Lujun Li, Huanran Chen, Yang Hu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.10769)] \
18 May 2023

**Controllable Mind Visual Diffusion Model** \
*Bohan Zeng, Shanglin Li, Xuhui Liu, Sicheng Gao, Xiaolong Jiang, Xu Tang, Yao Hu, Jianzhuang Liu, Baochang Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.10135)] \
17 May 2023

**Analyzing Bias in Diffusion-based Face Generation Models** \
*Malsha V. Perera, Vishal M. Patel* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.06402)] \
10 May 2023


**Improved Techniques for Maximum Likelihood Estimation for Diffusion ODEs** \
*Kaiwen Zheng, Cheng Lu, Jianfei Chen, Jun Zhu* \
ICML 2023. [[Paper](https://arxiv.org/abs/2305.03935)] \
6 May 2023

**LEO: Generative Latent Image Animator for Human Video Synthesis** \
*Yaohui Wang, Xin Ma, Xinyuan Chen, Antitza Dantcheva, Bo Dai, Yu Qiao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.03989)] [[Project](https://wyhsirius.github.io/LEO-project/)] [[Github](https://github.com/wyhsirius/LEO)] \
6 May 2023

**Iterative α-(de)Blending: a Minimalist Deterministic Diffusion Model** \
*Eric Heitz, Laurent Belcour, Thomas Chambon* \
SIGGRAPH 2023. [[Paper](https://arxiv.org/abs/2305.03486)] \
5 May 2023


**Reconstructing seen images from human brain activity via guided stochastic search** \
*Reese Kneeland, Jordyn Ojeda, Ghislain St-Yves, Thomas Naselaris* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.00556)] \
30 Apr 2023


**Motion-Conditioned Diffusion Model for Controllable Video Synthesis** \
*Tsai-Shien Chen, Chieh Hubert Lin, Hung-Yu Tseng, Tsung-Yi Lin, Ming-Hsuan Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.14404)] [[Project](https://tsaishien-chen.github.io/MCDiff/)] \
27 Apr 2023

**Score-based Generative Modeling Through Backward Stochastic Differential Equations: Inversion and Generation** \
*Zihao Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.13224)] \
26 Apr 2023

**Exploring Compositional Visual Generation with Latent Classifier Guidance** \
*Changhao Shi, Haomiao Ni, Kai Li, Shaobo Han, Mingfu Liang, Martin Renqiang Min* \
CVPR Workshop 2023. [[Paper](https://arxiv.org/abs/2304.12536)] \
25 Apr 2023

**Patch Diffusion: Faster and More Data-Efficient Training of Diffusion Models** \
*Zhendong Wang, Yifan Jiang, Huangjie Zheng, Peihao Wang, Pengcheng He, Zhangyang Wang, Weizhu Chen, Mingyuan Zhou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.12526)] \
25 Apr 2023


**Variational Diffusion Auto-encoder: Deep Latent Variable Model with Unconditional Diffusion Prior** \
*Georgios Batzolis, Jan Stanczuk, Carola-Bibiane Schönlieb* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.12141)] \
24 Apr 2023


**LaMD: Latent Motion Diffusion for Video Generation** \
*Yaosi Hu, Zhenzhong Chen, Chong Luo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.11603)] \
23 Apr 2023


**Lookahead Diffusion Probabilistic Models for Refining Mean Estimation** \
*Guoqiang Zhang, Niwa Kenta, W. Bastiaan Kleijn* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2304.11312)] [[Github](https://github.com/guoqiang-zhang-x/LA-DPM)] \
22 Apr 2023

**NeuralField-LDM: Scene Generation with Hierarchical Latent Diffusion Models** \
*Seung Wook Kim, Bradley Brown, Kangxue Yin, Karsten Kreis, Katja Schwarz, Daiqing Li, Robin Rombach, Antonio Torralba, Sanja Fidler* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2304.09787)] \
19 Apr 2023

**Attributing Image Generative Models using Latent Fingerprints** \
*Guangyu Nie, Changhoon Kim, Yezhou Yang, Yi Ren* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.09752)] \
17 Apr 2023


**Identity Encoder for Personalized Diffusion** \
*Yu-Chuan Su, Kelvin C.K. Chan, Yandong Li, Yang Zhao, Han Zhang, Boqing Gong, Huisheng Wang, Xuhui Jia* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.07429)] \
14 Apr 2023

**Memory Efficient Diffusion Probabilistic Models via Patch-based Generation** \
*Shinei Arakawa, Hideki Tsunashima, Daichi Horita, Keitaro Tanaka, Shigeo Morishima* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.07087)] \
14 Apr 2023

**DCFace: Synthetic Face Generation with Dual Condition Diffusion Model** \
*Minchul Kim, Feng Liu, Anil Jain, Xiaoming Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.07060)] [[Github](https://github.com/mk-minchul/dcface)] \
14 Apr 2023

**DiffFit: Unlocking Transferability of Large Diffusion Models via Simple Parameter-Efficient Fine-Tuning** \
*Enze Xie, Lewei Yao, Han Shi, Zhili Liu, Daquan Zhou, Zhaoqiang Liu, Jiawei Li, Zhenguo Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.06648)] \
13 Apr 2023

**RAFT: Reward rAnked FineTuning for Generative Foundation Model Alignment** \
*Hanze Dong, Wei Xiong, Deepanshu Goyal, Rui Pan, Shizhe Diao, Jipeng Zhang, Kashun Shum, Tong Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.06767)] \
13 Apr 2023

**DreamPose: Fashion Image-to-Video Synthesis via Stable Diffusion** \
*Johanna Karras, Aleksander Holynski, Ting-Chun Wang, Ira Kemelmacher-Shlizerman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.06025)] [[Project](https://grail.cs.washington.edu/projects/dreampose/)] [[Github](https://github.com/johannakarras/DreamPose)] \
12 Apr 2023

**Reflected Diffusion Models** \
*Aaron Lou, Stefano Ermon* \
ICML 2023. [[Paper](https://arxiv.org/abs/2304.04740)] [[Project](https://aaronlou.com/blog/2023/reflected-diffusion/)] [[Github](https://github.com/louaaron/Reflected-Diffusion)] \
10 Apr 2023

**Binary Latent Diffusion** \
*Ze Wang, Jiang Wang, Zicheng Liu, Qiang Qiu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.04820)] \
10 Apr 2023


**Diffusion Models as Masked Autoencoders** \
*Chen Wei, Karttikeya Mangalam, Po-Yao Huang, Yanghao Li, Haoqi Fan, Hu Xu, Huiyu Wang, Cihang Xie, Alan Yuille, Christoph Feichtenhofer* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.03283)] [[Project](https://weichen582.github.io/diffmae.html)] \
6 Apr 2023

**Few-shot Semantic Image Synthesis with Class Affinity Transfer** \
*Marlène Careil, Jakob Verbeek, Stéphane Lathuilière* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2304.02321)] \
5 Apr 2023


**EGC: Image Generation and Classification via a Diffusion Energy-Based Model** \
*Qiushan Guo, Chuofan Ma, Yi Jiang, Zehuan Yuan, Yizhou Yu, Ping Luo* \
arxiv 2023. [[Paper](https://arxiv.org/abs/2304.02012)] [[Project](https://guoqiushan.github.io/egc.github.io/)] \
4 Apr 2023



**Token Merging for Fast Stable Diffusion** \
*Daniel Bolya, Judy Hoffman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.17604)] [[Github](https://github.com/dbolya/tomesd)] \
30 Mar 2023

**A Closer Look at Parameter-Efficient Tuning in Diffusion Models** \
*Chendong Xiang, Fan Bao, Chongxuan Li, Hang Su, Jun Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.18181)] \
31 Mar 2023

**-Diff: Infinite Resolution Diffusion with Subsampled Mollified States** \
*Sam Bond-Taylor, Chris G. Willcocks* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.18242)] \
31 Mar 2023

**3D-aware Image Generation using 2D Diffusion Models** \
*Jianfeng Xiang, Jiaolong Yang, Binbin Huang, Xin Tong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.17905)] [[Project](https://jeffreyxiang.github.io/ivid/)] \
31 Mar 2023

**Consistent View Synthesis with Pose-Guided Diffusion Models** \
*Hung-Yu Tseng, Qinbo Li, Changil Kim, Suhib Alsisan, Jia-Bin Huang, Johannes Kopf* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2303.17598)] \
30 Mar 2023


**DiffCollage: Parallel Generation of Large Content with Diffusion Models** \
*Qinsheng Zhang, Jiaming Song, Xun Huang, Yongxin Chen, Ming-Yu Liu* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2303.17076)] [[Project](https://research.nvidia.com/labs/dir/diffcollage/)] \
30 Mar 2023

**Masked Diffusion Transformer is a Strong Image Synthesizer** \
*Shanghua Gao, Pan Zhou, Ming-Ming Cheng, Shuicheng Yan* \
arXiv 2023.  [[Paper](https://arxiv.org/abs/2303.14389)] [[Github](https://github.com/sail-sg/MDT)] \
25 Mar 2023

**Conditional Image-to-Video Generation with Latent Flow Diffusion Models** \
*Haomiao Ni, Changhao Shi, Kai Li, Sharon X. Huang, Martin Renqiang Min* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2303.13744)] [[Github](https://github.com/nihaomiao/CVPR23_LFDM)] \
24 Mar 2023

**NUWA-XL: Diffusion over Diffusion for eXtremely Long Video Generation** \
*Shengming Yin, Chenfei Wu, Huan Yang, Jianfeng Wang, Xiaodong Wang, Minheng Ni, Zhengyuan Yang, Linjie Li, Shuguang Liu, Fan Yang, Jianlong Fu, Gong Ming, Lijuan Wang, Zicheng Liu, Houqiang Li, Nan Duan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12346)] [[Project](https://msra-nuwa.azurewebsites.net/#/)] \
22 Mar 2023

**Object-Centric Slot Diffusion** \
*Jindong Jiang, Fei Deng, Gautam Singh, Sungjin Ahn* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.10834)] \
20 Mar 2023


**LDMVFI: Video Frame Interpolation with Latent Diffusion Models** \
*Duolikun Danier, Fan Zhang, David Bull* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09508)] \
16 Mar 2023

**Efficient Diffusion Training via Min-SNR Weighting Strategy** \
*Tiankai Hang, Shuyang Gu, Chen Li, Jianmin Bao, Dong Chen, Han Hu, Xin Geng, Baining Guo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09556)] \
16 Mar 2023

**VideoFusion: Decomposed Diffusion Models for High-Quality Video Generation** \
CVPR 2023. [[Paper](https://arxiv.org/abs/2303.08320)] \
15 Mar 2023

**Interpretable ODE-style Generative Diffusion Model via Force Field Construction** \
*Weiyang Jin, Yongpei Zhu, Yuxi Peng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.08063)] \
14 Mar 2023

**Regularized Vector Quantization for Tokenized Image Synthesis** \
*Jiahui Zhang, Fangneng Zhan, Christian Theobalt, Shijian Lu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.06424)] \
11 Mar 2023


**PARASOL: Parametric Style Control for Diffusion Image Synthesis** \
*Gemma Canet Tarrés, Dan Ruta, Tu Bui, John Collomosse* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.06464)] \
11 Mar 2023

**Brain-Diffuser: Natural scene reconstruction from fMRI signals using generative latent diffusion** \
*Furkan Ozcelik, Rufin VanRullen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.05334)] \
9 Mar 2023

**Multilevel Diffusion: Infinite Dimensional Score-Based Diffusion Models for Image Generation** \
*Paul Hagemann, Lars Ruthotto, Gabriele Steidl, Nicole Tianjiao Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.04772)] \
8 Mar 2023


**TRACT: Denoising Diffusion Models with Transitive Closure Time-Distillation** \
*David Berthelot, Arnaud Autef, Jierui Lin, Dian Ang Yap, Shuangfei Zhai, Siyuan Hu, Daniel Zheng, Walter Talbott, Eric Gu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.04248)] \
7 Mar 2023

**Generative Diffusions in Augmented Spaces: A Complete Recipe** \
*Kushagra Pandey, Stephan Mandt* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.01748)] \
3 Mar 2023

**Consistency Models** \
*Yang Song, Prafulla Dhariwal, Mark Chen, Ilya Sutskever* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.01469)] \
2 Mar 2023

**Diffusion Probabilistic Fields** \
*Peiye Zhuang, Samira Abnar, Jiatao Gu, Alex Schwing, Joshua M. Susskind, Miguel Ángel Bautista* \
ICLR 2023. [[Paper](https://arxiv.org/abs/2303.00165)] \
1 Mar 2023

**Unsupervised Discovery of Semantic Latent Directions in Diffusion Models** \
*Yong-Hyun Park, Mingi Kwon, Junghyo Jo, Youngjung Uh* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.12469)] \
24 Feb 2023

**Reduce, Reuse, Recycle: Compositional Generation with Energy-Based Diffusion Models and MCMC** \
*Yilun Du, Conor Durkan, Robin Strudel, Joshua B. Tenenbaum, Sander Dieleman, Rob Fergus, Jascha Sohl-Dickstein, Arnaud Doucet, Will Grathwohl* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.11552)] [[Project](https://energy-based-model.github.io/reduce-reuse-recycle/)] \
22 Feb 2023

**Learning 3D Photography Videos via Self-supervised Diffusion on Single Images** \
*Xiaodong Wang, Chenfei Wu, Shengming Yin, Minheng Ni, Jianfeng Wang, Linjie Li, Zhengyuan Yang, Fan Yang, Lijuan Wang, Zicheng Liu, Yuejian Fang, Nan Duan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.10781)] \
21 Feb 2023

**On Calibrating Diffusion Probabilistic Models** \
*Tianyu Pang, Cheng Lu, Chao Du, Min Lin, Shuicheng Yan, Zhijie Deng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.10688)] [[Github](https://github.com/thudzj/Calibrated-DPMs)] \
21 Feb 2023

**Diffusion Models and Semi-Supervised Learners Benefit Mutually with Few Labels** \
*Zebin You, Yong Zhong, Fan Bao, Jiacheng Sun, Chongxuan Li, Jun Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.10586)] \
21 Feb 2023

**Cross-domain Compositing with Pretrained Diffusion Models** \
*Roy Hachnochi, Mingrui Zhao, Nadav Orzech, Rinon Gal, Ali Mahdavi-Amiri, Daniel Cohen-Or, Amit Haim Bermano* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.10167)] [[Github](https://github.com/cross-domain-compositing/cross-domain-compositing)] \
20 Feb 2023



**Restoration based Generative Models** \
*Jaemoo Choi, Yesom Park, Myungjoo Kang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.05456)] \
20 Feb 2023



**Consistent Diffusion Models: Mitigating Sampling Drift by Learning to be Consistent** \
*Giannis Daras, Yuval Dagan, Alexandros G. Dimakis, Constantinos Daskalakis* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.09057)] [[Github](https://github.com/giannisdaras/cdm)] \
17 Feb 2023

**LayoutDiffuse: Adapting Foundational Diffusion Models for Layout-to-Image Generation** \
*Jiaxin Cheng, Xiao Liang, Xingjian Shi, Tong He, Tianjun Xiao, Mu Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.08908)] \
16 Feb 2023

**Video Probabilistic Diffusion Models in Projected Latent Space** \
*Sihyun Yu, Kihyuk Sohn, Subin Kim, Jinwoo Shin* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.07685)] [[Github](https://sihyun.me/PVDM/)] \
15 Feb 2023

**DiffFaceSketch: High-Fidelity Face Image Synthesis with Sketch-Guided Latent Diffusion Model** \
*Yichen Peng, Chunqi Zhao, Haoran Xie, Tsukasa Fukusato, Kazunori Miyata* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.06908)] \
14 Feb 2023

**Where to Diffuse, How to Diffuse, and How to Get Back: Automated Learning for Multivariate Diffusions** \
*Raghav Singhal, Mark Goldstein, Rajesh Ranganath* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.07261)] \
14 Feb 2023


**Preconditioned Score-based Generative Models** \
*Li Zhang, Hengyuan Ma, Xiatian Zhu, Jianfeng Feng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.06504)] [Github](https://github.com/fudan-zvg/PDS)] \
13 Feb 2023

**Star-Shaped Denoising Diffusion Probabilistic Models** \
*Andrey Okhotin, Dmitry Molchanov, Vladimir Arkhipkin, Grigory Bartosh, Aibek Alanov, Dmitry Vetrov* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.05259)] \
10 Feb 2023 


**UniPC: A Unified Predictor-Corrector Framework for Fast Sampling of Diffusion Models** \
*Wenliang Zhao, Lujia Bai, Yongming Rao, Jie Zhou, Jiwen Lu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.04867)] [[Project](https://unipc.ivg-research.xyz)] [[Github](https://github.com/wl-zhao/UniPC)] \
9 Feb 2023

**Geometry of Score Based Generative Models** \
*Sandesh Ghimire, Jinyang Liu, Armand Comas, Davin Hill, Aria Masoomi, Octavia Camps, Jennifer Dy* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.04411)] \
9 Feb 2023

**Q-Diffusion: Quantizing Diffusion Models** \
*Xiuyu Li, Long Lian, Yijiang Liu, Huanrui Yang, Zhen Dong, Daniel Kang, Shanghang Zhang, Kurt Keutzer* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.04304)] \
8 Feb 2023

**PFGM++: Unlocking the Potential of Physics-Inspired Generative Models** \
*Yilun Xu, Ziming Liu, Yonglong Tian, Shangyuan Tong, Max Tegmark, Tommi Jaakkola* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.04265)] [[Github](https://github.com/Newbeeer/pfgmpp)] \
8 Feb 2023

**Long Horizon Temperature Scaling** \
*Andy Shih, Dorsa Sadigh, Stefano Ermon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.03686)] \
7 Feb 2023

**Spatial Functa: Scaling Functa to ImageNet Classification and Generation** \
*Matthias Bauer, Emilien Dupont, Andy Brock, Dan Rosenbaum, Jonathan Schwarz, Hyunjik Kim* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.03130)] \
6 Feb 2023

**ShiftDDPMs: Exploring Conditional Diffusion Models by Shifting Diffusion Trajectories** \
*Zijian Zhang, Zhou Zhao, Jun Yu, Qi Tian* \
AAAI 2023. [[Paper](https://arxiv.org/abs/2302.02373)] \
5 Feb 2023

**Divide and Compose with Score Based Generative Models** \
*Sandesh Ghimire, Armand Comas, Davin Hill, Aria Masoomi, Octavia Camps, Jennifer Dy* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.02272)] [[Github](https://github.com/sandeshgh/Score-based-disentanglement)] \
5 Feb 2023


**Stable Target Field for Reduced Variance Score Estimation in Diffusion Models** \
*Yilun Xu, Shangyuan Tong, Tommi Jaakkola* \
ICLR 2023. [[Paper](https://arxiv.org/abs/2302.00670)] [[Github](https://github.com/Newbeeer/stf)] \
1 Feb 2023

**DisDiff: Unsupervised Disentanglement of Diffusion Probabilistic Models** \
*Tao Yang, Yuwang Wang, Yan Lv, Nanning Zheng* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2301.13721)] \
31 Jan 2023


**Optimizing DDPM Sampling with Shortcut Fine-Tuning** \
*Ying Fan, Kangwook Lee* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.13362)] \
31 Jan 2023

**Learning Data Representations with Joint Diffusion Models** \
*Kamil Deja, Tomasz Trzcinski, Jakub M. Tomczak* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.13622)] \
31 Jan 2023

**ERA-Solver: Error-Robust Adams Solver for Fast Sampling of Diffusion Probabilistic Models** \
*Shengmeng Li, Luping Liu, Zenghao Chai, Runnan Li, Xu Tan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.12935)] \
30 Jan 2023

**Don't Play Favorites: Minority Guidance for Diffusion Models** \
*Soobin Um, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.12334)] [[Github](https://github.com/sangyun884/fast-ode)] \
29 Jan 2023

**Accelerating Guided Diffusion Sampling with Splitting Numerical Methods** \
*Suttisak Wizadwongsa, Supasorn Suwajanakorn* \
ICLR 2023. [[Paper](https://arxiv.org/abs/2301.11558)] \
27 Jan 2023

**Input Perturbation Reduces Exposure Bias in Diffusion Models** \
*Mang Ning, Enver Sangineto, Angelo Porrello, Simone Calderara, Rita Cucchiara* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.11706)] [[Github](https://github.com/forever208/DDPM-IP)] \
27 Jan 2023

**Minimizing Trajectory Curvature of ODE-based Generative Models** \
*Sangyun Lee, Beomsu Kim, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.12003)] \
27 Jan 2023


**On the Importance of Noise Scheduling for Diffusion Models** \
*Ting Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.10972)] \
26 Jan 2023

**simple diffusion: End-to-end diffusion for high resolution images** \
*Emiel Hoogeboom, Jonathan Heek, Tim Salimans* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.11093)] \
26 Jan 2023

**Fast Inference in Denoising Diffusion Models via MMD Finetuning** \
*Emanuele Aiello, Diego Valsesia, Enrico Magli* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.07969)] [[Github](https://github.com/diegovalsesia/MMD-DDM)] \
19 Jan 2023

**Exploring Transformer Backbones for Image Diffusion Models** \
*Princy Chahal* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.14678)] \
27 Dec 2022

**Unsupervised Representation Learning from Pre-trained Diffusion Probabilistic Models** \
*Zijian Zhang, Zhou Zhao, Zhijie Lin* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.12990)] \
26 Dec 2022


**Scalable Adaptive Computation for Iterative Generation** \
*Allan Jabri, David Fleet, Ting Chen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.11972)] \
22 Dec 2022

**Hierarchically branched diffusion models for efficient and interpretable multi-class conditional generation** \
*Alex M. Tseng, Tommaso Biancalani, Max Shen, Gabriele Scalia* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.10777)] \
21 Dec 2022


**MM-Diffusion: Learning Multi-Modal Diffusion Models for Joint Audio and Video Generation** \
*Ludan Ruan, Yiyang Ma, Huan Yang, Huiguo He, Bei Liu, Jianlong Fu, Nicholas Jing Yuan, Qin Jin, Baining Guo* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.09478)] [[Github](https://github.com/researchmm/MM-Diffusion)] \
19 Dec 2022


**Scalable Diffusion Models with Transformers** \
*William Peebles, Saining Xie* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.09748)] [[Project](https://www.wpeebles.com/DiT)] [[Github](https://github.com/facebookresearch/DiT)] \
19 Dec 2022


**DAG: Depth-Aware Guidance with Denoising Diffusion Probabilistic Models** \
*Gyeongnyeon Kim, Wooseok Jang, Gyuseong Lee, Susung Hong, Junyoung Seo, Seungryong Kim* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.08861)] [[Project](https://ku-cvlab.github.io/DAG/)] \
17 Dec 2022


**Towards Practical Plug-and-Play Diffusion Models** \
*Hyojun Go, Yunsung Lee, Jin-Young Kim, Seunghyun Lee, Myeongho Jeong, Hyun Seung Lee, Seungtaek Choi* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.05973)] \
12 Dec 2022

**Semantic Brain Decoding: from fMRI to conceptually similar image reconstruction of visual stimuli** \
*Matteo Ferrante, Tommaso Boccato, Nicola Toschi* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.06726)] \
13 Dec 2022

**MAGVIT: Masked Generative Video Transformer** \
*Lijun Yu, Yong Cheng, Kihyuk Sohn, José Lezama, Han Zhang, Huiwen Chang, Alexander G. Hauptmann, Ming-Hsuan Yang, Yuan Hao, Irfan Essa, Lu Jiang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.05199)] [Project](https://magvit.cs.cmu.edu/)] \
10 Dec 2022

**Diffusion Video Autoencoders: Toward Temporally Consistent Face Video Editing via Disentangled Video Encoding** \
*Gyeongman Kim, Hajin Shim, Hyunsu Kim, Yunjey Choi, Junho Kim, Eunho Yang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.02802)] \
6 Dec 2022

**Fine-grained Image Editing by Pixel-wise Guidance Using Diffusion Models** \
*Naoki Matsunaga, Masato Ishii, Akio Hayakawa, Kenji Suzuki, Takuya Narihira* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.02024)] \
5 Dec 2022


**VIDM: Video Implicit Diffusion Models** \
*Kangfu Mei, Vishal M. Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.00235)] [[Project](https://kfmei.page/vidm/)] [[Github](https://github.com/MKFMIKU/VIDM)] \
1 Dec 2022

**Why Are Conditional Generative Models Better Than Unconditional Ones?** \
*Fan Bao, Chongxuan Li, Jiacheng Sun, Jun Zhu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.00362)] \
1 Dec 2022


**High-Fidelity Guided Image Synthesis with Latent Diffusion Models** \
*Jaskirat Singh, Stephen Gould, Liang Zheng* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.17084)] [[Project](https://1jsingh.github.io/gradop)] \
30 Nov 2022


**Score-based Continuous-time Discrete Diffusion Models** \
*Haoran Sun, Lijun Yu, Bo Dai, Dale Schuurmans, Hanjun Dai* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.16750)] \
30 Nov 2022

**Wavelet Diffusion Models are fast and scalable Image Generators** \
*Hao Phung, Quan Dao, Anh Tran* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.16152)] \
29 Nov 2022


**Dimensionality-Varying Diffusion Process** \
*Han Zhang, Ruili Feng, Zhantao Yang, Lianghua Huang, Yu Liu, Yifei Zhang, Yujun Shen, Deli Zhao, Jingren Zhou, Fan Cheng* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.16032)] \
29 Nov 2022

**Refining Generative Process with Discriminator Guidance in Score-based Diffusion Models** \
*Dongjun Kim, Yeongmin Kim, Wanmo Kang, Il-Chul Moon* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.17091)] \
28 Nov 2022



**Diffusion Probabilistic Model Made Slim** \
*Xingyi Yang, Daquan Zhou, Jiashi Feng, Xinchao Wang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.17106)] \
27 Nov 2022


**Fast Sampling of Diffusion Models via Operator Learning** \
*Hongkai Zheng, Weili Nie, Arash Vahdat, Kamyar Azizzadenesheli, Anima Anandkumar* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.13449)] \
24 Nov 2022

**Latent Video Diffusion Models for High-Fidelity Video Generation with Arbitrary Lengths** \
*Yingqing He, Tianyu Yang, Yong Zhang, Ying Shan, Qifeng Chen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.13221)] \
23 Nov 2022



**Paint by Example: Exemplar-based Image Editing with Diffusion Models** \
*Binxin Yang, Shuyang Gu, Bo Zhang, Ting Zhang, Xuejin Chen, Xiaoyan Sun, Dong Chen, Fang Wen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.13227)] \
23 Nov 2022


**SinDiffusion: Learning a Diffusion Model from a Single Natural Image** \
*Weilun Wang, Jianmin Bao, Wengang Zhou, Dongdong Chen, Dong Chen, Lu Yuan, Houqiang Li* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.12445)] [[Github](https://github.com/WeilunWang/SinDiffusion)] \
22 Nov 2022

**Accelerating Diffusion Sampling with Classifier-based Feature Distillation** \
*Wujie Sun, Defang Chen, Can Wang, Deshi Ye, Yan Feng, Chun Chen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.12039)] \
22 Nov 2022

**SceneComposer: Any-Level Semantic Image Synthesis** \
*Yu Zeng, Zhe Lin, Jianming Zhang, Qing Liu, John Collomosse, Jason Kuen, Vishal M. Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.11742)] [[Project](https://zengyu.me/scenec/)] \
21 Nov 2022

**Diffusion-Based Scene Graph to Image Generation with Masked Contrastive Pre-Training** \
*Ling Yang, Zhilin Huang, Yang Song, Shenda Hong, Guohao Li, Wentao Zhang, Bin Cui, Bernard Ghanem, Ming-Hsuan Yang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.11138)] \
21 Nov 2022

**SinFusion: Training Diffusion Models on a Single Image or Video** \
*Yaniv Nikankin, Niv Haim, Michal Irani* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.11743)] \
21 Nov 2022

**MagicVideo: Efficient Video Generation With Latent Diffusion Models** \
*Daquan Zhou, Weimin Wang, Hanshu Yan, Weiwei Lv, Yizhe Zhu, Jiashi Feng* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.11018)] [[Project](https://magicvideo.github.io/)] \
20 Nov 2022

**Seeing Beyond the Brain: Conditional Diffusion Model with Sparse Masked Modeling for Vision Decoding** \
*Zijiao Chen, Jiaxin Qing, Tiange Xiang, Wan Lin Yue, Juan Helen Zhou* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.06956)] [[Project](https://mind-vis.github.io/)] [[Github](https://github.com/zjc062/mind-vis)] \
13 Nov 2022

**Few-shot Image Generation with Diffusion Models** \
*Jingyuan Zhu, Huimin Ma, Jiansheng Chen, Jian Yuan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.03264)] \
7 Nov 2022

**From Denoising Diffusions to Denoising Markov Models** \
*Joe Benton, Yuyang Shi, Valentin De Bortoli, George Deligiannidis, Arnaud Doucet* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.03595)] [[Github](https://github.com/yuyang-shi/generalized-diffusion)] \
7 Nov 2022


**Efficient Spatially Sparse Inference for Conditional GANs and Diffusion Models** \
*Muyang Li, Ji Lin, Chenlin Meng, Stefano Ermon, Song Han, Jun-Yan Zhu* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2211.02048)] [[Github](https://github.com/lmxyy/sige)] \
4 Nov 2022

**An optimal control perspective on diffusion-based generative modeling** \
*Julius Berner, Lorenz Richter, Karen Ullrich* \
NeurIPS Workshop 2022. [[Paper](https://arxiv.org/abs/2211.01364)] \
2 Nov 2022

**Entropic Neural Optimal Transport via Diffusion Processes** \
*Nikita Gushchin, Alexander Kolesov, Alexander Korotin, Dmitry Vetrov, Evgeny Burnaev* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.01156)] \
2 Nov 2022

**DPM-Solver++: Fast Solver for Guided Sampling of Diffusion Probabilistic Models** \
*Cheng Lu, Yuhao Zhou, Fan Bao, Jianfei Chen, Chongxuan Li, Jun Zhu* \
NeurIPS 2022 (Oral). [[Paper](https://arxiv.org/abs/2211.01095)] [[Github](https://github.com/LuChengTHU/dpm-solver)] \
2 Nov 2022

**Score-based Denoising Diffusion with Non-Isotropic Gaussian Noise Models** \
*Vikram Voleti, Christopher Pal, Adam Oberman* \
NeurIPS Workshop 2022. [[Paper](https://arxiv.org/abs/2210.12254)] \
21 Oct 2022


**Deep Equilibrium Approaches to Diffusion Models** \
*Ashwini Pokle, Zhengyang Geng, Zico Kolter* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2210.12867)] [[Github](https://github.com/locuslab/deq-ddim)] \
23 Oct 2022

**Representation Learning with Diffusion Models** \
*Jeremias Traub* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.11058)] [[Github](https://github.com/jeremiastraub/diffusion)] \
20 Oct 2022

**Self-Guided Diffusion Models** \
*Vincent Tao Hu, David W Zhang, Yuki M. Asano, Gertjan J. Burghouts, Cees G. M. Snoek* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.06462)] [[Project](http://taohu.me/sgdm/)] \
12 Oct 2022

**GENIE: Higher-Order Denoising Diffusion Solvers** \
*Tim Dockhorn, Arash Vahdat, Karsten Kreis* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2210.05475)] [[Project](https://nv-tlabs.github.io/GENIE/) [[Github](https://github.com/nv-tlabs/GENIE)] \
11 Oct 2022

**f-DM: A Multi-stage Diffusion Model via Progressive Signal Transformation** \
*Jiatao Gu, Shuangfei Zhai, Yizhe Zhang, Miguel Angel Bautista, Josh Susskind* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.04955)] [[Project](http://jiataogu.me/fdm/)] \
10 Oct 2022

**On Distillation of Guided Diffusion Models** \
*Chenlin Meng, Ruiqi Gao, Diederik P. Kingma, Stefano Ermon, Jonathan Ho, Tim Salimans* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.03142)] \
6 Oct 2022


**Improving Sample Quality of Diffusion Model Using Self-Attention Guidance** \
*Susung Hong, Gyuseong Lee, Wooseok Jang, Seungryong Kim* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.00939)] [[Project](https://ku-cvlab.github.io/Self-Attention-Guidance/)] \
3 Oct 2022

**OCD: Learning to Overfit with Conditional Diffusion Models** \
*Shahar Shlomo Lutati, Lior Wolf* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.00471)] [[Github](https://github.com/ShaharLutatiPersonal/OCD)] \
2 Oct 2022

**Generated Faces in the Wild: Quantitative Comparison of Stable Diffusion, Midjourney and DALL-E 2** \
*Ali Borji* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.00586)] [[Github](https://github.com/aliborji/GFW)] \
2 Oct 2022

**Denoising MCMC for Accelerating Diffusion-Based Generative Models** \
*Beomsu Kim, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.14593)] [[Github](https://github.com/1202kbs/DMCMC)] \
29 Sep 2022

**All are Worth Words: a ViT Backbone for Score-based Diffusion Models** \
*Fan Bao, Chongxuan Li, Yue Cao, Jun Zhu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.12152)] \
25 Sep 2022


**Neural Wavelet-domain Diffusion for 3D Shape Generation** \
*Ka-Hei Hui, Ruihui Li, Jingyu Hu, Chi-Wing Fu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.08725)] \
19 Sep 2022

**Can segmentation models be trained with fully synthetically generated data?** \
*Virginia Fernandez, Walter Hugo Lopez Pinaya, Pedro Borges, Petru-Daniel Tudosiu, Mark S Graham, Tom Vercauteren, M Jorge Cardoso* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.08256)] \
17 Sep 2022

**Blurring Diffusion Models** \
*Emiel Hoogeboom, Tim Salimans* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.05557)] \
12 Sep 2022

**Soft Diffusion: Score Matching for General Corruptions** \
*Giannis Daras, Mauricio Delbracio, Hossein Talebi, Alexandros G. Dimakis, Peyman Milanfar* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.05442)] \
12 Sep 2022

**Improved Masked Image Generation with Token-Critic** \
*José Lezama, Huiwen Chang, Lu Jiang, Irfan Essa* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.04439)] \
9 Sep 2022


**Let us Build Bridges: Understanding and Extending Diffusion Generative Models** \
*Xingchao Liu, Lemeng Wu, Mao Ye, Qiang Liu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.14699)] \
31 Aug 2022

**Frido: Feature Pyramid Diffusion for Complex Scene Image Synthesis** \
*Wan-Cyuan Fan, Yen-Chun Chen, DongDong Chen, Yu Cheng, Lu Yuan, Yu-Chiang Frank Wang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.13753)] \
29 Aug 2022


**Adaptively-Realistic Image Generation from Stroke and Sketch with Diffusion Model** \
*Shin-I Cheng, Yu-Jie Chen, Wei-Chen Chiu, Hsin-Ying Lee, Hung-Yu Tseng* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.12675)] [[Project](https://cyj407.github.io/DiSS/)] \
26 Aug 2022

**Cold Diffusion: Inverting Arbitrary Image Transforms Without Noise** \
*Arpit Bansal, Eitan Borgnia, Hong-Min Chu, Jie S. Li, Hamid Kazemi, Furong Huang, Micah Goldblum, Jonas Geiping, Tom Goldstein* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.09392)] [[Github](https://github.com/arpitbansal297/Cold-Diffusion-Models)] \
19 Aug 2022

**Enhancing Diffusion-Based Image Synthesis with Robust Classifier Guidance** \
*Bahjat Kawar, Roy Ganz, Michael Elad* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.08664)] \
18 Aug 2022

**Your ViT is Secretly a Hybrid Discriminative-Generative Diffusion Model** \
*Xiulong Yang, Sheng-Min Shih, Yinlin Fu, Xiaoting Zhao, Shihao Ji* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.07791)] [[Github](https://github.com/sndnyang/Diffusion_ViT)] \
16 Aug 2022



**Applying Regularized Schrödinger-Bridge-Based Stochastic Process in Generative Modeling** \
*Ki-Ung Song* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.07131)] [[Github](https://github.com/KiUngSong/RSB)] \
15 Aug 2022

**Analog Bits: Generating Discrete Data using Diffusion Models with Self-Conditioning** \
*Ting Chen, Ruixiang Zhang, Geoffrey Hinton* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.04202)] \
8 Aug 2022


**Pyramidal Denoising Diffusion Probabilistic Models** \
*Dohoon Ryu, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.01864)] \
3 Aug 2022

**Progressive Deblurring of Diffusion Models for Coarse-to-Fine Image Synthesis** \
*Sangyun Lee, Hyungjin Chung, Jaehyeon Kim, Jong Chul Ye* \
arxiv 2022. [[Paper](https://arxiv.org/abs/2207.11192)] [[Github](https://github.com/sangyun884/blur-diffusion)] \
16 Jul 2022

**Improving Diffusion Model Efficiency Through Patching** \
*Troy Luhman, Eric Luhman* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.04316)] [[Github](https://github.com/ericl122333/PatchDiffusion-Pytorch)] \
9 Jul 2022

**Accelerating Score-based Generative Models with Preconditioned Diffusion Sampling** \
*Hengyuan Ma, Li Zhang, Xiatian Zhu, Jianfeng Feng* \
ECCV 2022. [[Paper](https://arxiv.org/abs/2207.02196)] \
5 Jul 2022

**SPI-GAN: Distilling Score-based Generative Models with Straight-Path Interpolations** \
*Jinsung Jeon, Noseong Park* \
arxiv 2022. [[Paper](https://arxiv.org/abs/2206.14464)] \
29 Jun 2022

**Entropy-driven Sampling and Training Scheme for Conditional Diffusion Generation** \
*Shengming Li, Guangcong Zheng, Hui Wang, Taiping Yao, Yang Chen, Shoudong Ding, Xi Li* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.11474)] \
23 Jun 2022

**Generative Modelling With Inverse Heat Dissipation** \
*Severi Rissanen, Markus Heinonen, Arno Solin* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.13397)] [[Project](https://aaltoml.github.io/generative-inverse-heat-dissipation/)] \
21 Jun 2022

**Diffusion models as plug-and-play priors** \
*Alexandros Graikos, Nikolay Malkin, Nebojsa Jojic, Dimitris Samaras* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2206.09012)] [[Github](https://github.com/alexgraikos/diffusion_priors)] \
17 Jun 2022

**A Flexible Diffusion Model** \
*Weitao Du, Tao Yang, He Zhang, Yuanqi Du* \
ICML 2023. [[Paper](https://arxiv.org/abs/2206.10365)] \
17 Jun 2022

**Lossy Compression with Gaussian Diffusion** \
*Lucas Theis, Tim Salimans, Matthew D. Hoffman, Fabian Mentzer* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.08889)] \
17 Jun 2022

**Maximum Likelihood Training for Score-Based Diffusion ODEs by High-Order Denoising Score Matching** \
*Cheng Lu, Kaiwen Zheng, Fan Bao, Jianfei Chen, Chongxuan Li, Jun Zhu* \
ICML 2022. [[Paper](https://arxiv.org/abs/2206.08265)] [[Github](https://github.com/LuChengTHU/mle_score_ode)] \
16 Jun 2022

**Estimating the Optimal Covariance with Imperfect Mean in Diffusion Probabilistic Models** \
*Fan Bao, Chongxuan Li, Jiacheng Sun, Jun Zhu, Bo Zhang* \
ICML 2022. [[Paper](https://arxiv.org/abs/2206.07309)] [[Github](https://github.com/baofff/Extended-Analytic-DPM)] \
15 Jun 2022


**Diffusion Models for Video Prediction and Infilling** \
*Tobias Höppe, Arash Mehrjou, Stefan Bauer, Didrik Nielsen, Andrea Dittadi* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.07696)] \
15 Jun 2022

**Discrete Contrastive Diffusion for Cross-Modal and Conditional Generation** \
*Ye Zhu, Yu Wu, Kyle Olszewski, Jian Ren, Sergey Tulyakov, Yan Yan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.07771)] [[Github](https://github.com/L-YeZhu/CDCD)] \
15 Jun 2022

**gDDIM: Generalized denoising diffusion implicit models** \
*Qinsheng Zhang, Molei Tao, Yongxin Chen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.05564)] [[Github](https://github.com/qsh-zh/gDDIM)] \
11 Jun 2022

**How Much is Enough? A Study on Diffusion Times in Score-based Generative Models** \
*Giulio Franzese, Simone Rossi, Lixuan Yang, Alessandro Finamore, Dario Rossi, Maurizio Filippone, Pietro Michiardi* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.05173)] \
10 Jun 2022

**Image Generation with Multimodal Priors using Denoising Diffusion Probabilistic Models** \
*Nithin Gopalakrishnan Nair, Wele Gedara Chaminda Bandara, Vishal M Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.05039)] \
10 Jun 2022

**Accelerating Score-based Generative Models for High-Resolution Image Synthesis** \
*Hengyuan Ma, Li Zhang, Xiatian Zhu, Jingfeng Zhang, Jianfeng Feng* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.04029)] \
8 Jun 2022

**Diffusion-GAN: Training GANs with Diffusion** \
*Zhendong Wang, Huangjie Zheng, Pengcheng He, Weizhu Chen, Mingyuan Zhou* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.02262)] \
5 Jun 2022

**DPM-Solver: A Fast ODE Solver for Diffusion Probabilistic Model Sampling in Around 10 Steps** \
*Cheng Lu, Yuhao Zhou, Fan Bao, Jianfei Chen, Chongxuan Li, Jun Zhu* \
NeurrIPS 2022. [[Paper](https://arxiv.org/abs/2206.00927)] [[Github](https://github.com/LuChengTHU/dpm-solver)] \
2 Jun 2022

**Elucidating the Design Space of Diffusion-Based Generative Models** \
*Tero Karras, Miika Aittala, Timo Aila, Samuli Laine* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2206.00364)] \
1 Jun 2022

**On Analyzing Generative and Denoising Capabilities of Diffusion-based Deep Generative Models** \
*Kamil Deja, Anna Kuzina, Tomasz Trzciński, Jakub M. Tomczak* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2206.00070)] \
31 May 2022

**Few-Shot Diffusion Models** \
*Giorgio Giannone, Didrik Nielsen, Ole Winther* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.15463)] \
30 May 2022

**A Continuous Time Framework for Discrete Denoising Models** \
*Andrew Campbell, Joe Benton, Valentin De Bortoli, Tom Rainforth, George Deligiannidis, Arnaud Doucet* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.14987)] \
30 May 2022

**Maximum Likelihood Training of Implicit Nonlinear Diffusion Models** \
*Dongjun Kim, Byeonghu Na, Se Jung Kwon, Dongsoo Lee, Wanmo Kang, Il-Chul Moon* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2205.13699)] \
27 May 2022

**Accelerating Diffusion Models via Early Stop of the Diffusion Process** \
*Zhaoyang Lyu, Xudong XU, Ceyuan Yang, Dahua Lin, Bo Dai* \
ICML 2022. [[Paper](https://arxiv.org/abs/2205.12524)] \
25 May 2022



**Flexible Diffusion Modeling of Long Videos** \
*William Harvey, Saeid Naderiparizi, Vaden Masrani, Christian Weilbach, Frank Wood* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.11495)] [[Github](https://github.com/plai-group/flexible-video-diffusion-modeling)] \
23 May 2022

**MCVD: Masked Conditional Video Diffusion for Prediction, Generation, and Interpolation** \
*Vikram Voleti, Alexia Jolicoeur-Martineau, Christopher Pal* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2205.09853)] [[Github](https://github.com/voletiv/mcvd-pytorch)] \
19 May 2022

**On Conditioning the Input Noise for Controlled Image Generation with Diffusion Models** \
*Vedant Singh, Surgan Jandial, Ayush Chopra, Siddharth Ramesh, Balaji Krishnamurthy, Vineeth N. Balasubramanian* \
CVPR Workshop 2022. [[Paper](https://arxiv.org/abs/2205.03859)] \
8 May 2022

**Subspace Diffusion Generative Models** \
*Bowen Jing, Gabriele Corso, Renato Berlinghieri, Tommi Jaakkola* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.01490)] [[Github](https://github.com/bjing2016/subspace-diffusion)] \
3 May 2022

**Fast Sampling of Diffusion Models with Exponential Integrator** \
*Qinsheng Zhang, Yongxin Chen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2204.13902)] \
29 Apr 2022

**Semi-Parametric Neural Image Synthesis** \
*Andreas Blattmann, Robin Rombach, Kaan Oktay, Jonas Müller, Björn Ommer* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2204.11824)] \
25 Apr 2022


**Video Diffusion Models** \
*Jonathan Ho, Tim Salimans, Alexey Gritsenko, William Chan, Mohammad Norouzi, David J. Fleet* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2204.03458)] \
7 Apr 2022

**Perception Prioritized Training of Diffusion Models** \
*Jooyoung Choi, Jungbeom Lee, Chaehun Shin, Sungwon Kim, Hyunwoo Kim, Sungroh Yoon* \
CVPR 2022. [[Paper](https://arxiv.org/abs/2204.00227)] [[Github](https://github.com/jychoi118/P2-weighting)] \
1 Apr 2022

**Generating High Fidelity Data from Low-density Regions using Diffusion Models** \
*Vikash Sehwag, Caner Hazirbas, Albert Gordo, Firat Ozgenel, Cristian Canton Ferrer* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2203.17260)] \
31 Mar 2022

**Diffusion Models for Counterfactual Explanations** \
*Guillaume Jeanneret, Loïc Simon, Frédéric Jurie* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2203.15636)] \
29 Mar 2022

**Denoising Likelihood Score Matching for Conditional Score-based Data Generation** \
*Chen-Hao Chao, Wei-Fang Sun, Bo-Wun Cheng, Yi-Chen Lo, Chia-Che Chang, Yu-Lun Liu, Yu-Lin Chang, Chia-Ping Chen, Chun-Yi Lee* \
ICLR 2022. [[Paper](https://arxiv.org/abs/2203.14206)] \
27 Mar 2022

**Diffusion Probabilistic Modeling for Video Generation** \
*Ruihan Yang, Prakhar Srivastava, Stephan Mandt* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2203.09481)] [[Github](https://github.com/buggyyang/rvd)] \
16 Mar 2022

**Dynamic Dual-Output Diffusion Models** \
*Yaniv Benny, Lior Wolf* \
CVPR 2022. [[Paper](https://arxiv.org/abs/2203.04304)] \
8 Mar 2022

**Conditional Simulation Using Diffusion Schrödinger Bridges** \
*Yuyang Shi, Valentin De Bortoli, George Deligiannidis, Arnaud Doucet* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2202.13460)] \
27 Feb 2022

**Diffusion Causal Models for Counterfactual Estimation** \
*Pedro Sanchez, Sotirios A. Tsaftaris* \
PMLR 2022. [[Paper](https://arxiv.org/abs/2202.10166)] \
21 Feb 2022

**Pseudo Numerical Methods for Diffusion Models on Manifolds** \
*Luping Liu, Yi Ren, Zhijie Lin, Zhou Zhao* \
ICLR 2022. [[Paper](https://arxiv.org/abs/2202.09778)] [[Github](https://github.com/luping-liu/PNDM)] \
20 Feb 2022

**Truncated Diffusion Probabilistic Models** \
*Huangjie Zheng, Pengcheng He, Weizhu Chen, Mingyuan Zhou* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2202.09671)] \
19 Feb 2022

**Understanding DDPM Latent Codes Through Optimal Transport** \
*Valentin Khrulkov, Ivan Oseledets* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2202.07477)] \
14 Feb 2022

**Learning Fast Samplers for Diffusion Models by Differentiating Through Sample Quality** \
*Daniel Watson, William Chan, Jonathan Ho, Mohammad Norouzi* \
ICLR 2022. [[Paper](https://arxiv.org/abs/2202.05830)] \
11 Feb 2022


**Diffusion bridges vector quantized Variational AutoEncoders** \
*Max Cohen, Guillaume Quispe, Sylvain Le Corff, Charles Ollion, Eric Moulines* \
ICML 2022. [[Paper](https://arxiv.org/abs/2202.04895)] \
10 Feb 2022

**Progressive Distillation for Fast Sampling of Diffusion Models** \
*Tim Salimans, Jonathan Ho* \
ICLR 2022. [[Paper](https://arxiv.org/abs/2202.00512)] \
1 Feb 2022

**Analytic-DPM: an Analytic Estimate of the Optimal Reverse Variance in Diffusion Probabilistic Models** \
*Fan Bao, Chongxuan Li, Jun Zhu, Bo Zhang* \
ICLR 2022. [[Paper](https://arxiv.org/abs/2201.06503)] \
17 Jan 2022

**DiffuseVAE: Efficient, Controllable and High-Fidelity Generation from Low-Dimensional Latents** \
*Kushagra Pandey, Avideep Mukherjee, Piyush Rai, Abhishek Kumar* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2201.00308)] [[Github](https://github.com/kpandey008/DiffuseVAE)] \
2 Jan 2022

**Itô-Taylor Sampling Scheme for Denoising Diffusion Probabilistic Models using Ideal Derivatives** \
*Hideyuki Tachibana, Mocho Go, Muneyoshi Inahara, Yotaro Katayama, Yotaro Watanabe* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.13339)] \
26 Dec 2021

**GLIDE: Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion Models** \
*Alex Nichol, Prafulla Dhariwal, Aditya Ramesh, Pranav Shyam, Pamela Mishkin, Bob McGrew, Ilya Sutskever, Mark Chen* \
ICML 2021. [[Paper](https://arxiv.org/abs/2112.10741)] [[Github](https://github.com/openai/glide-text2im)] \
20 Dec 2021

**High-Resolution Image Synthesis with Latent Diffusion Models** \
*Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Björn Ommer* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.10752)] [[Github](https://github.com/CompVis/latent-diffusion)] \
20 Dec 2021

**Heavy-tailed denoising score matching** \
*Jacob Deasy, Nikola Simidjievski, Pietro Liò* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.09788)] \
17 Dec 2021

**High Fidelity Visualization of What Your Self-Supervised Representation Knows About** \
*Florian Bordes, Randall Balestriero, Pascal Vincent* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.09164)] \
16 Dec 2021

**Tackling the Generative Learning Trilemma with Denoising Diffusion GANs** \
*Zhisheng Xiao, Karsten Kreis, Arash Vahdat* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.07804)] [[Project](https://nvlabs.github.io/denoising-diffusion-gan)] \
15 Dec 2021

**Score-Based Generative Modeling with Critically-Damped Langevin Diffusion** \
*Tim Dockhorn, Arash Vahdat, Karsten Kreis* \
ICLR 2022. [[Paper](https://arxiv.org/abs/2112.07068)] [[Project](https://nv-tlabs.github.io/CLD-SGM/)] \
14 Dec 2021

**More Control for Free! Image Synthesis with Semantic Diffusion Guidance** \
*Xihui Liu, Dong Huk Park, Samaneh Azadi, Gong Zhang, Arman Chopikyan, Yuxiao Hu, Humphrey Shi, Anna Rohrbach, Trevor Darrell* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.05744)] \
10 Dec 2021

**Global Context with Discrete Diffusion in Vector Quantised Modelling for Image Generation** \
*Minghui Hu, Yujie Wang, Tat-Jen Cham, Jianfei Yang, P.N.Suganthan* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.01799)] \
3 Dec 2021

**Diffusion Autoencoders: Toward a Meaningful and Decodable Representation** \
*Konpat Preechakul, Nattanat Chatthee, Suttisak Wizadwongsa, Supasorn Suwajanakorn* \
CVPR 2022. [[Paper](https://arxiv.org/abs/2111.15640)] [[Project](https://diff-ae.github.io/)] [[Github](https://github.com/phizaz/diffae)] \
30 Dec 2021

**Conditional Image Generation with Score-Based Diffusion Models** \
*Georgios Batzolis, Jan Stanczuk, Carola-Bibiane Schönlieb, Christian Etmann* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2111.13606)] \
26 Nov 2021

**Unleashing Transformers: Parallel Token Prediction with Discrete Absorbing Diffusion for Fast High-Resolution Image Generation from Vector-Quantized Codes** \
*Sam Bond-Taylor, Peter Hessey, Hiroshi Sasaki, Toby P. Breckon, Chris G. Willcocks* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2111.12701)] [[Github](https://github.com/samb-t/unleashing-transformers)] \
24 Nov 2021

**Diffusion Normalizing Flow** \
*Qinsheng Zhang, Yongxin Chen* \
NeurIPS 2021. [[Paper](https://arxiv.org/abs/2110.07579)] [[Github](https://github.com/qsh-zh/DiffFlow)] \
14 Oct 2021

**Denoising Diffusion Gamma Models** \
*Eliya Nachmani, Robin San Roman, Lior Wolf* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2110.05948)] \
10 Oct 2021

**Score-based Generative Neural Networks for Large-Scale Optimal Transport** \
*Max Daniels, Tyler Maunu, Paul Hand* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2110.03237)] \
7 Oct 2021

**Score-Based Generative Classifiers** \
*Roland S. Zimmermann, Lukas Schott, Yang Song, Benjamin A. Dunn, David A. Klindt* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2110.00473)] \
1 Oct 2021

**Classifier-Free Diffusion Guidance** \
*Jonathan Ho, Tim Salimans* \
NeurIPS Workshop 2021. [[Paper](https://arxiv.org/abs/2207.12598)] \
28 Sep 2021


**Bilateral Denoising Diffusion Models** \
*Max W. Y. Lam, Jun Wang, Rongjie Huang, Dan Su, Dong Yu* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2108.11514)] [[Project](https://bilateral-denoising-diffusion-model.github.io)] \
26 Aug 2021

**ImageBART: Bidirectional Context with Multinomial Diffusion for Autoregressive Image Synthesis** \
*Patrick Esser, Robin Rombach, Andreas Blattmann, Björn Ommer* \
NeurIPS 2021. [[Paper](https://arxiv.org/abs/2108.08827)] [[Project](https://compvis.github.io/imagebart/)] \
19 Aug 2021

**ILVR: Conditioning Method for Denoising Diffusion Probabilistic Models** \
*Jooyoung Choi, Sungwon Kim, Yonghyun Jeong, Youngjune Gwon, Sungroh Yoon* \
ICCV 2021 (Oral). [[Paper](https://arxiv.org/abs/2108.02938)] [[Github](https://github.com/jychoi118/ilvr_adm)] \
6 Aug 2021

**SDEdit: Guided Image Synthesis and Editing with Stochastic Differential Equations** \
*Chenlin Meng, Yutong He, Yang Song, Jiaming Song, Jiajun Wu, Jun-Yan Zhu, Stefano Ermon* \
ICLR  2022. [[Paper](https://arxiv.org/abs/2108.01073)] [[Project](https://sde-image-editing.github.io/)] [[Github](https://github.com/ermongroup/SDEdit)] \
2 Aug 2021

**Structured Denoising Diffusion Models in Discrete State-Spaces** \
*Jacob Austin, Daniel D. Johnson, Jonathan Ho, Daniel Tarlow, Rianne van den Berg* \
NeurIPS 2021. [[Paper](https://arxiv.org/abs/2107.03006)] \
7 Jul 2021 

**Variational Diffusion Models** \
*Diederik P. Kingma, Tim Salimans, Ben Poole, Jonathan Ho* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2107.00630)] [[Github](https://github.com/google-research/vdm)] \
1 Jul 2021 

**Diffusion Priors In Variational Autoencoders** \
*Antoine Wehenkel, Gilles Louppe* \
ICML Workshop 2021. [[Paper](https://arxiv.org/abs/2106.15671)] \
29 Jun 2021

**Deep Generative Learning via Schrödinger Bridge** \
*Gefei Wang, Yuling Jiao, Qian Xu, Yang Wang, Can Yang* \
ICML 2021. [[Paper](https://arxiv.org/abs/2106.10410)] \
19 Jun 2021

**Non Gaussian Denoising Diffusion Models** \
*Eliya Nachmani, Robin San Roman, Lior Wolf* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2106.07582)] [[Project](https://enk100.github.io/Non-Gaussian-Denoising-Diffusion-Models/)] \
14 Jun 2021 

**D2C: Diffusion-Denoising Models for Few-shot Conditional Generation** \
*Abhishek Sinha, Jiaming Song, Chenlin Meng, Stefano Ermon* \
NeurIPS 2021. [[Paper](https://arxiv.org/abs/2106.06819)] [[Project](https://d2c-model.github.io/)] [[Github](https://github.com/d2c-model/d2c-model.github.io)] \
12 Jun 2021

**Score-based Generative Modeling in Latent Space** \
*Arash Vahdat, Karsten Kreis, Jan Kautz* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2106.05931)] \
10 Jun 2021

**Learning to Efficiently Sample from Diffusion Probabilistic Models** \
*Daniel Watson, Jonathan Ho, Mohammad Norouzi, William Chan* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2106.03802)] \
7 Jun 2021 

**A Variational Perspective on Diffusion-Based Generative Models and Score Matching** \
*Chin-Wei Huang, Jae Hyun Lim, Aaron Courville* \
NeurIPS 2021. [[Paper](https://arxiv.org/abs/2106.02808)] [[Github](https://github.com/CW-Huang/sdeflow-light)] \
5 Jun 2021 

**Soft Truncation: A Universal Training Technique of Score-based Diffusion Model for High Precision Score Estimation** \
*Dongjun Kim, Seungjae Shin, Kyungwoo Song, Wanmo Kang, Il-Chul Moon* \
ICML 2022. [[Paper](https://arxiv.org/abs/2106.05527)] \
10 Jun 2021

**Diffusion Schrödinger Bridge with Applications to Score-Based Generative Modeling** \
*Valentin De Bortoli, James Thornton, Jeremy Heng, Arnaud Doucet* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2106.01357)] [[Project](https://jtt94.github.io/papers/schrodinger_bridge)] [[Github](https://github.com/JTT94/diffusion_schrodinger_bridge)] \
1 Jun 2021

**On Fast Sampling of Diffusion Probabilistic Models** \
*Zhifeng Kong, Wei Ping* \
ICML Workshop 2021. [[Paper](https://arxiv.org/abs/2106.00132)] [[Github](https://github.com/FengNiMa/FastDPM_pytorch)] \
31 May 2021 

**Cascaded Diffusion Models for High Fidelity Image Generation** \
*Jonathan Ho, Chitwan Saharia, William Chan, David J. Fleet, Mohammad Norouzi, Tim Salimans* \
JMLR 2021. [[Paper](https://arxiv.org/abs/2106.15282)] [[Project](https://cascaded-diffusion.github.io/)] \
30 May 2021 

**Gotta Go Fast When Generating Data with Score-Based Models** \
*Alexia Jolicoeur-Martineau, Ke Li, Rémi Piché-Taillefer, Tal Kachman, Ioannis Mitliagkas* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2105.14080)] [[Github](https://github.com/AlexiaJM/score_sde_fast_sampling)] \
28 May 2021

**Diffusion Models Beat GANs on Image Synthesis** \
*Prafulla Dhariwal, Alex Nichol* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2105.05233)] [[Github](https://github.com/openai/guided-diffusion)] \
11 May 2021 

**Image Super-Resolution via Iterative Refinement** \
*Chitwan Saharia, Jonathan Ho, William Chan, Tim Salimans, David J. Fleet, Mohammad Norouzi* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2104.07636)] [[Project](https://iterative-refinement.github.io/)] [[Github](https://github.com/Janspiry/Image-Super-Resolution-via-Iterative-Refinement)] \
15 Apr 2021 

**Noise Estimation for Generative Diffusion Models** \
*Robin San-Roman, Eliya Nachmani, Lior Wolf* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2104.02600)] \
6 Apr 2021 

**Improved Denoising Diffusion Probabilistic Models** \
*Alex Nichol, Prafulla Dhariwal* \
ICLR 2021. [[Paper](https://arxiv.org/abs/2102.09672)] [[Github](https://github.com/openai/improved-diffusion)] \
18 Feb 2021 

**Maximum Likelihood Training of Score-Based Diffusion Models** \
*Yang Song, Conor Durkan, Iain Murray, Stefano Ermon* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2101.09258)] \
22 Jan 2021 

**Knowledge Distillation in Iterative Generative Models for Improved Sampling Speed** \
*Eric Luhman, Troy Luhman* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2101.02388)] [[Github](https://github.com/tcl9876/Denoising_Student)] \
7 Jan 2021

**Learning Energy-Based Models by Diffusion Recovery Likelihood** \
*Ruiqi Gao, Yang Song, Ben Poole, Ying Nian Wu, Diederik P. Kingma* \
ICLR 2021. [[Paper](https://arxiv.org/abs/2012.08125)] [[Github](https://github.com/ruiqigao/recovery_likelihood)] \
15 Dec 2020 

**Score-Based Generative Modeling through Stochastic Differential Equations** \
*Yang Song, Jascha Sohl-Dickstein, Diederik P. Kingma, Abhishek Kumar, Stefano Ermon, Ben Poole* \
ICLR 2021 (Oral). [[Paper](https://arxiv.org/abs/2011.13456)] [[Github](https://github.com/yang-song/score_sde)] \
26 Nov 2020 

**Variational (Gradient) Estimate of the Score Function in Energy-based Latent Variable Models** \
*Fan Bao, Kun Xu, Chongxuan Li, Lanqing Hong, Jun Zhu, Bo Zhang* \
ICML 2021. [[Paper](https://arxiv.org/abs/2010.08258)] \
16 Oct 2020

**Denoising Diffusion Implicit Models**  \
*Jiaming Song, Chenlin Meng, Stefano Ermon* \
ICLR 2021. [[Paper](https://arxiv.org/abs/2010.02502)] [[Github](https://github.com/ermongroup/ddim)] \
6 Oct 2020

**Adversarial score matching and improved sampling for image generation** \
*Alexia Jolicoeur-Martineau, Rémi Piché-Taillefer, Rémi Tachet des Combes, Ioannis Mitliagkas* \
ICLR 2021. [[Paper](https://arxiv.org/abs/2009.05475)] [[Github](https://github.com/AlexiaJM/AdversarialConsistentScoreMatching)] \
11 Sep 2020

**Denoising Diffusion Probabilistic Models** \
*Jonathan Ho, Ajay Jain, Pieter Abbeel* \
NeurIPS 2020. [[Paper](https://arxiv.org/abs/2006.11239)] [[Github](https://github.com/hojonathanho/diffusion)] [[Github2](https://github.com/pesser/pytorch_diffusion)] \
19 Jun 2020 

**Improved Techniques for Training Score-Based Generative Models** \
*Yang Song, Stefano Ermon* \
NeurIPS 2020. [[Paper](https://arxiv.org/abs/2006.09011)] [[Github](https://github.com/ermongroup/ncsnv2)] \
16 Jun 2020 

**Generative Modeling by Estimating Gradients of the Data Distribution** \
*Yang Song, Stefano Ermon* \
NeurIPS 2019. [[Paper](https://arxiv.org/abs/1907.05600)] [[Project](https://yang-song.github.io/blog/2021/score/)] [[Github](https://github.com/ermongroup/ncsn)] \
12 Jul 2019 

**Neural Stochastic Differential Equations: Deep Latent Gaussian Models in the Diffusion Limit** \
*Belinda Tzen, Maxim Raginsky* \
arXiv 2019. [[Paper](https://arxiv.org/abs/1905.09883)] \
23 May 2019 

**Deep Unsupervised Learning using Nonequilibrium Thermodynamics** \
*Jascha Sohl-Dickstein, Eric A. Weiss, Niru Maheswaranathan, Surya Ganguli* \
ICML 2015. [[Paper](https://arxiv.org/abs/1503.03585)] [[Github](https://github.com/Sohl-Dickstein/Diffusion-Probabilistic-Models)] \
2 Mar 2015

### Classification

**Likelihood-based Out-of-Distribution Detection with Denoising Diffusion Probabilistic Models** \
*Joseph Goodier, Neill D. F. Campbell* \
BMVC 2023. [[Paper](https://arxiv.org/abs/2310.17432)] \
26 Oct 2023

**Multi-scale Diffusion Denoised Smoothing** \
*Jongheon Jeong, Jinwoo Shin* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2310.16779)] \
25 Oct 2023

**DiffRef3D: A Diffusion-based Proposal Refinement Framework for 3D Object Detection** \
*Se-Ho Kim, Inyong Koo, Inyoung Lee, Byeongjun Park, Changick Kim* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.16349)] \
25 Oct 2023

**Denoising Task Routing for Diffusion Models** \
*Byeongjun Park, Sangmin Woo, Hyojun Go, Jin-Young Kim, Changick Kim* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.07138)] \
11 Oct 2023

**Leveraging Diffusion-Based Image Variations for Robust Training on Poisoned Data** \
*Lukas Struppek, Martin B. Hentschel, Clifton Poth, Dominik Hintersdorf, Kristian Kersting* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.06372)] [[Github](https://github.com/LukasStruppek/Robust_Training_on_Poisoned_Samples)] \
10 Oct 2023

**Dream the Impossible: Outlier Imagination with Diffusion Models** \
*Xuefeng Du, Yiyou Sun, Xiaojin Zhu, Yixuan Li* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2309.13415)] [[Github](https://github.com/deeplearning-wisc/dream-ood)] \
23 Sep 2023

**Zero-Shot Object Counting with Language-Vision Models** \
*Jingyi Xu, Hieu Le, Dimitris Samaras* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2309.13097)] [[Github](https://github.com/cvlab-stonybrook/zero-shot-counting)] \
22 Sep 2023

**PSDiff: Diffusion Model for Person Search with Iterative and Collaborative Refinement** \
*Chengyou Jia, Minnan Luo, Zhuohang Dang, Guang Dai, Xiaojun Chang, Jingdong Wang, Qinghua Zheng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.11125)] \
20 Sep 2023

**Beyond Generation: Harnessing Text to Image Models for Object Detection and Segmentation** \
*Yunhao Ge, Jiashu Xu, Brian Nlong Zhao, Neel Joshi, Laurent Itti, Vibhav Vineet* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.05956)] [[Github](https://github.com/gyhandy/Text2Image-for-Detection)] \
12 Sep 2023

**DiffusionEngine: Diffusion Model is Scalable Data Engine for Object Detection** \
*Manlin Zhang, Jie Wu, Yuxi Ren, Ming Li, Jie Qin, Xuefeng Xiao, Wei Liu, Rui Wang, Min Zheng, Andy J. Ma* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.03893)] [[Project](https://mettyz.github.io/DiffusionEngine/)] [[Github](https://github.com/bytedance/DiffusionEngine)] \
7 Sep 2023

**Diffusion-based 3D Object Detection with Random Boxes** \
*Xin Zhou, Jinghua Hou, Tingting Yao, Dingkang Liang, Zhe Liu, Zhikang Zou, Xiaoqing Ye, Jianwei Cheng, Xiang Bai* \
PRCV 2023. [[Paper](https://arxiv.org/abs/2309.02049)] \
5 Sep 2023

**Diffusion Model as Representation Learner** \
*Xingyi Yang, Xinchao Wang* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2308.10916)] \
21 Aug 2023

**DiffusionTrack: Diffusion Model For Multi-Object Tracking** \
*Run Luo, Zikai Song, Lintao Ma, Jinlin Wei, Wei Yang, Min Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.09905)] \
19 Aug 2023

**DiffGuard: Semantic Mismatch-Guided Out-of-Distribution Detection using Pre-trained Diffusion Models** \
*Ruiyuan Gao, Chenchen Zhao, Lanqing Hong, Qiang Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07687)] \
15 Aug 2023

**IDiff-Face: Synthetic-based Face Recognition through Fizzy Identity-Conditioned Diffusion Models** \
*Fadi Boutros, Jonas Henry Grebe, Arjan Kuijper, Naser Damer* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2308.04995)] \
9 Aug 2023

**Exploiting Synthetic Data for Data Imbalance Problems: Baselines from a Data Perspective** \
*Moon Ye-Bin, Nam Hyeon-Woo, Wonseok Choi, Nayeong Kim, Suha Kwak, Tae-Hyun Oh* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.00994)] \
2 Aug 2023

**Diffusion Model for Camouflaged Object Detection** \
*Zhennan Chen, Rongrong Gao, Tian-Zhu Xiang, Fan Lin* \
ECAI 2023. [[Paper](https://arxiv.org/abs/2308.00303)] \
1 Aug 2023

**DiffPose: SpatioTemporal Diffusion Model for Video-Based Human Pose Estimation** \
*Runyang Feng, Yixing Gao, Tze Ho Elden Tse, Xueqing Ma, Hyung Jin Chang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.16687)] \
31 Jul 2023

**MetaDiff: Meta-Learning with Conditional Diffusion for Few-Shot Learning** \
*Baoquan Zhang, Demin Yu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.16424)] \
31 Jul 2023

**Generative Prompt Model for Weakly Supervised Object Localization** \
*Yuzhong Zhao, Qixiang Ye, Weijia Wu, Chunhua Shen, Fang Wan* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2307.09756)] [[Github](https://github.com/callsys/GenPromp)] \
19 Jul 2023

**Diffusion Models Beat GANs on Image Classification** \
*Soumik Mukhopadhyay, Matthew Gwilliam, Vatsal Agarwal, Namitha Padmanabhan, Archana Swaminathan, Srinidhi Hegde, Tianyi Zhou, Abhinav Shrivastava* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08702)] \
17 Jul 2023

**Diffusion to Confusion: Naturalistic Adversarial Patch Generation Based on Diffusion Model for Object Detector** \
*Shuo-Yen Lin, Ernie Chu, Che-Hsien Lin, Jun-Cheng Chen, Jia-Ching Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08076)] \
16 Jul 2023

**DreamTeacher: Pretraining Image Backbones with Deep Generative Models** \
*Daiqing Li, Huan Ling, Amlan Kar, David Acuna, Seung Wook Kim, Karsten Kreis, Antonio Torralba, Sanja Fidler* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.07487)] [[Project](https://research.nvidia.com/labs/toronto-ai/DreamTeacher/)] \
14 Jul 2023

**ProtoDiff: Learning to Learn Prototypical Networks by Task-Guided Diffusion** \
*Yingjun Du, Zehao Xiao, Shengcai Liao, Cees Snoek* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.14770)] \
26 Jun 2023

**Masked Diffusion Models are Fast Learners** \
*Jiachen Lei, Peng Cheng, Zhongjie Ba, Kui Ren* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.11363)] \
20 Jun 2023


**Renderers are Good Zero-Shot Representation Learners: Exploring Diffusion Latents for Metric Learning** \
*Michael Tang, David Shustin* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.10721)] \
19 Jun 2023

**The Big Data Myth: Using Diffusion Models for Dataset Generation to Train Deep Detection Models** \
*Roy Voetman, Maya Aghaei, Klaas Dijkstra* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09762)] \
16 Jun 2023

**When Hyperspectral Image Classification Meets Diffusion Models: An Unsupervised Feature Learning Framework** \
*Jingyi Zhou, Jiamu Sheng, Jiayuan Fan, Peng Ye, Tong He, Bin Wang, Tao Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.08964)] \
15 Jun 2023

**DDLP: Unsupervised Object-Centric Video Prediction with Deep Dynamic Latent Particles** \
*Tal Daniel, Aviv Tamar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.05957)] \
9 Jun 2023

**ADDP: Learning General Representations for Image Recognition and Generation with Alternating Denoising Diffusion Process** \
*Changyao Tian, Chenxin Tao, Jifeng Dai, Hao Li, Ziheng Li, Lewei Lu, Xiaogang Wang, Hongsheng Li, Gao Huang, Xizhou Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.05423)] \
8 Jun 2023

**Conditional Generation from Unconditional Diffusion Models using Denoiser Representations** \
*Alexandros Graikos, Srikar Yellapragada, Dimitris Samaras* \
BMVC 2023. [[Paper](https://arxiv.org/abs/2306.01900)] [[Github](https://github.com/cvlab-stonybrook/fewshot-conditional-diffusion)] \
2 Jun 2023

**DiffCLIP: Leveraging Stable Diffusion for Language Grounded 3D Classification** \
*Sitian Shen, Zilin Zhu, Linqian Fan, Harry Zhang, Xinxiao Wu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15957)] \
25 May 2023


**Training on Thin Air: Improve Image Classification with Generated Data** \
*Yongchao Zhou, Hshmat Sahak, Jimmy Ba* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15316)] [[Project](https://sites.google.com/view/diffusion-inversion)] [[Github](https://github.com/yongchao97/diffusion_inversion)] \
24 May 2023

**Is Synthetic Data From Diffusion Models Ready for Knowledge Distillation?** \
*Zheng Li, Yuxuan Li, Penghai Zhao, Renjie Song, Xiang Li, Jian Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.12954)] [[Github](https://github.com/zhengli97/DM-KD)] \
22 May 2023

**Boosting Human-Object Interaction Detection with Text-to-Image Diffusion Model** \
*Jie Yang, Bingliang Li, Fengyu Yang, Ailing Zeng, Lei Zhang, Ruimao Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.12252)] \
20 May 2023


**Meta-DM: Applications of Diffusion Models on Few-Shot Learning** \
*Wentao Hu, Xiurong Jiang, Jiarun Liu, Yuqi Yang, Hui Tian* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.08092)] \
14 May 2023

**Class-Balancing Diffusion Models** \
*Yiming Qin, Huangjie Zheng, Jiangchao Yao, Mingyuan Zhou, Ya Zhang* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2305.00562)] \
30 Apr 2023

**Synthetic Data from Diffusion Models Improves ImageNet Classification** \
*Shekoofeh Azizi, Simon Kornblith, Chitwan Saharia, Mohammad Norouzi, David J. Fleet* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.08466)] \
17 Apr 2023



**OVTrack: Open-Vocabulary Multiple Object Tracking** \
*Siyuan Li, Tobias Fischer, Lei Ke, Henghui Ding, Martin Danelljan, Fisher Yu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.08408)] \
17 Apr 2023

**Your Diffusion Model is Secretly a Zero-Shot Classifier** \
*Alexander C. Li, Mihir Prabhudesai, Shivam Duggal, Ellis Brown, Deepak Pathak* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.16203)] [[Project](https://diffusion-classifier.github.io/)] \
28 Mar 2023


**Text-to-Image Diffusion Models are Zero-Shot Classifiers** \
*Kevin Clark, Priyank Jaini* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.15233)] \
27 Mar 2023

**Diffusion Denoised Smoothing for Certified and Adversarial Robust Out-Of-Distribution Detection** \
*Nicola Franco, Daniel Korth, Jeanette Miriam Lorenz, Karsten Roscher, Stephan Guennemann* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.14961)] \
27 Mar 2023



**CIFAKE: Image Classification and Explainable Identification of AI-Generated Synthetic Images** \
*Jordan J. Bird, Ahmad Lotfi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.14126)] \
24 Mar 2023



**Denoising Diffusion Autoencoders are Unified Self-supervised Learners** \
*Weilai Xiang, Hongyu Yang, Di Huang, Yunhong Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09769)] )] \
17 Mar 2023

**Boosting Zero-shot Classification with Synthetic Data Diversity via Stable Diffusion** \
*Jordan Shipard, Arnold Wiliem, Kien Nguyen Thanh, Wei Xiang, Clinton Fookes* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.03298)] \
7 Feb 2023

**Fake it till you make it: Learning(s) from a synthetic ImageNet clone** \
*Mert Bulent Sariyildiz, Karteek Alahari, Diane Larlus, Yannis Kalantidis* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2212.08420)] [[Project](https://europe.naverlabs.com/research/computer-vision/imagenet-sd/)] \
16 Dec 2022

**DiffAlign : Few-shot learning using diffusion based synthesis and alignment** \
*Aniket Roy, Anshul Shah, Ketul Shah, Anirban Roy, Rama Chellappa* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.05404)] \
11 Dec 2022


**Diffusion Denoising Process for Perceptron Bias in Out-of-distribution Detection** \
*Luping Liu, Yi Ren, Xize Cheng, Zhou Zhao* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.11255)] [[Github](https://github.com/luping-liu/DiffOOD)] \
21 Nov 2022


**DiffusionDet: Diffusion Model for Object Detection** \
*Shoufa Chen, Peize Sun, Yibing Song, Ping Luo* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.09788)] [[Github](https://github.com/ShoufaChen/DiffusionDet)] \
17 Nov 2022



**Denoising Diffusion Models for Out-of-Distribution Detection** \
*Mark S. Graham, Walter H.L. Pinaya, Petru-Daniel Tudosiu, Parashkev Nachev, Sebastien Ourselin, M. Jorge Cardoso* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.07740)] [[Github](https://github.com/marksgraham/ddpm-ood)] \
14 Nov 2022



**A simple, efficient and scalable contrastive masked autoencoder for learning visual representations** \
*Shlok Mishra, Joshua Robinson, Huiwen Chang, David Jacobs, Aaron Sarna, Aaron Maschinot, Dilip Krishnan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.16870)] \
30 Oct 2022

**From Points to Functions: Infinite-dimensional Representations in Diffusion Models** \
*Sarthak Mittal, Guillaume Lajoie, Stefan Bauer, Arash Mehrjou* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.13774)] [[Github](https://github.com/sarthmit/traj_drl)] \
25 Oct 2022


**Boomerang: Local sampling on image manifolds using diffusion models** \
*Lorenzo Luzi, Ali Siahkoohi, Paul M Mayer, Josue Casco-Rodriguez, Richard Baraniuk* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.12100)] [[Colab](https://colab.research.google.com/drive/1PV5Z6b14HYZNx1lHCaEVhId-Y4baKXwt)] \
21 Oct 2022


**Meta-Learning via Classifier(-free) Guidance** \
*Elvis Nava, Seijin Kobayashi, Yifei Yin, Robert K. Katzschmann, Benjamin F. Grewe* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.08942)] \
17 Oct 2022


### Segmentation

**One-shot Localization and Segmentation of Medical Images with Foundation Models** \
*Deepa Anand, Gurunath Reddy M, Vanika Singhal, Dattesh D. Shanbhag, Shriram KS, Uday Patil, Chitresh Bhushan, Kavitha Manickam, Dawei Gui, Rakesh Mullick, Avinash Gopal, Parminder Bhatia, Taha Kass-Hout* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.18642)] \
28 Oct 2023

**Semantic-preserving image coding based on Conditional Diffusion models** \
*Francesco Pezone, Osman Musa, Giuseppe Caire, Sergio Barbarossa* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.15737)] \
24 Oct 2023

**Diffusion-based Data Augmentation for Nuclei Image Segmentation** \
*Xinyi Yu, Guanbin Li, Wei Lou, Siqi Liu, Xiang Wan, Yan Chen, Haofeng Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.14197)] \
22 Oct 2023

**EMIT-Diff: Enhancing Medical Image Segmentation via Text-Guided Diffusion Model** \
*Zheyuan Zhang, Lanhong Yao, Bin Wang, Debesh Jha, Elif Keles, Alpay Medetalibeyoglu, Ulas Bagci* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.12868)] \
19 Oct 2023

**Towards Training-free Open-world Segmentation via Image Prompting Foundation Models** \
*Lv Tang, Peng-Tao Jiang, Hao-Ke Xiao, Bo Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.10912)] \
17 Oct 2023

**Towards Generic Semi-Supervised Framework for Volumetric Medical Image Segmentation** \
*Haonan Wang, Xiaomeng Li* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2310.11320)] [[Github](https://github.com/xmed-lab/GenericSSL)] \
17 Oct 2023

**Image Augmentation with Controlled Diffusion for Weakly-Supervised Semantic Segmentation** \
*Wangyu Wu, Tianhong Dai, Xiaowei Huang, Fei Ma, Jimin Xiao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.09760)] \
15 Oct 2023


**Steered Diffusion: A Generalized Framework for Plug-and-Play Conditional Image Synthesis** \
*Nithin Gopalakrishnan Nair, Anoop Cherian, Suhas Lohit, Ye Wang, Toshiaki Koike-Akino, Vishal M. Patel, Tim K. Marks* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2310.00224)] \
30 Sep 2023

**Factorized Diffusion Architectures for Unsupervised Image Generation and Segmentation** \
*Xin Yuan, Michael Maire* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.15726)] \
27 Sep 2023

**Dataset Diffusion: Diffusion-based Synthetic Dataset Generation for Pixel-Level Semantic Segmentation** \
*Quang Nguyen, Truong Vu, Anh Tran, Khoi Nguyen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.14303)] \
25 Sep 2023

**MosaicFusion: Diffusion Models as Data Augmenters for Large Vocabulary Instance Segmentation** \
*Jiahao Xie, Wei Li, Xiangtai Li, Ziwei Liu, Yew Soon Ong, Chen Change Loy* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.13042)] [[Github](https://github.com/Jiahao000/MosaicFusion)] \
22 Sep 2023

**Beyond Generation: Harnessing Text to Image Models for Object Detection and Segmentation** \
*Yunhao Ge, Jiashu Xu, Brian Nlong Zhao, Neel Joshi, Laurent Itti, Vibhav Vineet* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.05956)] [[Github](https://github.com/gyhandy/Text2Image-for-Detection)] \
12 Sep 2023

**Introducing Shape Prior Module in Diffusion Model for Medical Image Segmentation** \
*Zhiqing Zhang, Guojia Fan, Tianyong Liu, Nan Li, Yuyang Liu, Ziyu Liu, Canwei Dong, Shoujun Zhou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.05929)] \
12 Sep 2023

**From Text to Mask: Localizing Entities Using the Attention of Text-to-Image Diffusion Models** \
*Changming Xiao, Qi Yang, Feng Zhou, Changshui Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.04109)] \
8 Sep 2023

**SLiMe: Segment Like Me** \
*Aliasghar Khani, Saeid Asgari Taghanaki, Aditya Sanghi, Ali Mahdavi Amiri, Ghassan Hamarneh* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.03179)] [[Github](https://github.com/aliasgharkhani/SLiMe)] \
6 Sep 2023

**Diffusion Model is Secretly a Training-free Open Vocabulary Semantic Segmenter** \
*Jinglong Wang, Xiawei Li, Jing Zhang, Qingyuan Xu, Qin Zhou, Qian Yu, Lu Sheng, Dong Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.02773)] \
6 Sep 2023


**GenSelfDiff-HIS: Generative Self-Supervision Using Diffusion for Histopathological Image Segmentation** \
*Vishnuvardhan Purma, Suhas Srinath, Seshan Srirangarajan, Aanchal Kakkar, Prathosh A. P* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.01487)] [[Github](https://github.com/PurmaVishnuVardhanReddy/GenSelfDiff-HIS)] \
4 Sep 2023

**Attention as Annotation: Generating Images and Pseudo-masks for Weakly Supervised Semantic Segmentation with Diffusion** \
*Ryota Yoshihashi, Yuya Otsuka, Kenji Doi, Tomohiro Tanaka* \
AAAI 2022. [[Paper](https://arxiv.org/abs/2309.01369)] \
4 Sep 2023

**ArSDM: Colonoscopy Images Synthesis with Adaptive Refinement Semantic Diffusion Models** \
*Yuhao Du, Yuncheng Jiang, Shuangyi Tan, Xusheng Wu, Qi Dou, Zhen Li, Guanbin Li, Xiang Wan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.01111)] \
3 Sep 2023

**Ref-Diff: Zero-shot Referring Image Segmentation with Generative Models** \
*Minheng Ni, Yabo Zhang, Kailai Feng, Xiaoming Li, Yiwen Guo, Wangmeng Zuo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.16777)] \
31 Aug 2023

**Modality Cycles with Masked Conditional Diffusion for Unsupervised Anomaly Segmentation in MRI** \
*Ziyun Liang, Harry Anthony, Felix Wagner, Konstantinos Kamnitsas* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.16150)] \
30 Aug 2023

**A Recycling Training Strategy for Medical Image Segmentation with Diffusion Denoising Models** \
*Yunguan Fu, Yiwen Li, Shaheer U Saeed, Matthew J Clarkson, Yipeng Hu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.16355)] [[Github](https://github.com/mathpluscode/ImgX-DiffSeg)] \
30 Aug 2023

**Diffuse, Attend, and Segment: Unsupervised Zero-Shot Segmentation using Stable Diffusion** \
*Junjiao Tian, Lavisha Aggarwal, Andrea Colaco, Zsolt Kira, Mar Gonzalez-Franco* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.12469)] \
23 Aug 2023

**Diffusion-based Image Translation with Label Guidance for Domain Adaptive Semantic Segmentation** \
*Duo Peng, Ping Hu, Qiuhong Ke, Jun Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.12350)] \
23 Aug 2023

**DMCVR: Morphology-Guided Diffusion Model for 3D Cardiac Volume Reconstruction** \
*Xiaoxiao He, Chaowei Tan, Ligong Han, Bo Liu, Leon Axel, Kang Li, Dimitris N. Metaxas* \
MICCAI 2023. [[Paper](https://arxiv.org/abs/2308.09223)] [[Github](https://github.com/hexiaoxiao-cs/DMCVR)] \
18 Aug 2023

**Masked Diffusion as Self-supervised Representation Learner** \
*Zixuan Pan, Jianxu Chen, Yiyu Shi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.05695)] \
10 Aug 2023

**DermoSegDiff: A Boundary-aware Segmentation Diffusion Model for Skin Lesion Delineation** \
*Afshin Bozorgpour, Yousef Sadegheih, Amirhossein Kazerouni, Reza Azad, Dorit Merhof* \
MICCAI Workshop 2023. [[Paper](https://arxiv.org/abs/2308.02959)] [[Github](https://github.com/mindflow-institue/dermosegdiff)] \
5 Aug 2023

**DiffusePast: Diffusion-based Generative Replay for Class Incremental Semantic Segmentation** \
*Jingfan Chen, Yuxi Wang, Pengfei Wang, Xiao Chen, Zhaoxiang Zhang, Zhen Lei, Qing Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.01127)] \
2 Aug 2023

**DAVIS: High-Quality Audio-Visual Separation with Generative Diffusion Models** \
*Chao Huang, Susan Liang, Yapeng Tian, Anurag Kumar, Chenliang Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.00122)] \
31 Jul 2023

**Pre-Training with Diffusion models for Dental Radiography segmentation** \
*Jérémy Rousseau, Christian Alaka, Emma Covili, Hippolyte Mayard, Laura Misrachi, Willy Au* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.14066)] \
26 Jul 2023

**FEDD -- Fair, Efficient, and Diverse Diffusion-based Lesion Segmentation and Malignancy Classification** \
*Héctor Carrión, Narges Norouzi* \
MICCAI 2023. [[Paper](https://arxiv.org/abs/2307.11654)] [[Github](https://github.com/hectorcarrion/fedd)] \
21 Jul 2023

**DreamTeacher: Pretraining Image Backbones with Deep Generative Models** \
*Daiqing Li, Huan Ling, Amlan Kar, David Acuna, Seung Wook Kim, Karsten Kreis, Antonio Torralba, Sanja Fidler* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.07487)] [[Project](https://research.nvidia.com/labs/toronto-ai/DreamTeacher/)] \
14 Jul 2023

**Prompting Diffusion Representations for Cross-Domain Semantic Segmentation** \
*Rui Gong, Martin Danelljan, Han Sun, Julio Delgado Mangas, Luc Van Gool* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.02138)] \
5 Jul 2023

**DifFSS: Diffusion Model for Few-Shot Semantic Segmentation** \
*Weimin Tan, Siyuan Chen, Bo Yan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.00773)] \
3 Jul 2023



**Towards Better Certified Segmentation via Diffusion Models** \
*Othmane Laousy, Alexandre Araujo, Guillaume Chassagnon, Marie-Pierre Revel, Siddharth Garg, Farshad Khorrami, Maria Vakalopoulou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09949)] \
16 Jun 2023

**Diffusion Models for Zero-Shot Open-Vocabulary Segmentation** \
*Laurynas Karazija, Iro Laina, Andrea Vedaldi, Christian Rupprecht* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09316)] \
15 Jun 2023


**Annotator Consensus Prediction for Medical Image Segmentation with Diffusion Models** \
*Tomer Amit, Shmuel Shichrur, Tal Shaharabany, Lior Wolf* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09004)] \
15 Jun 2023


**Generative Semantic Communication: Diffusion Models Beyond Bit Recovery** \
*Eleonora Grassucci, Sergio Barbarossa, Danilo Comminiello* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.04321)] [[Github](https://github.com/ispamm/GESCO)] \
7 Jun 2023

**Conditional Diffusion Models for Weakly Supervised Medical Image Segmentation** \
*Xinrong Hu, Yu-Jen Chen, Tsung-Yi Ho, Yiyu Shi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.03878)] \
6 Jun 2023

**DFormer: Diffusion-guided Transformer for Universal Image Segmentation** \
*Hefeng Wang, Jiale Cao, Rao Muhammad Anwer, Jin Xie, Fahad Shahbaz Khan, Yanwei Pang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.03437)] [[Github](https://github.com/cp3wan/DFormer)] \
6 Jun 2023

**Denoising Diffusion Semantic Segmentation with Mask Prior Modeling** \
*Zeqiang Lai, Yuchen Duan, Jifeng Dai, Ziheng Li, Ying Fu, Hongsheng Li, Yu Qiao, Wenhai Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.01721)] \
2 Jun 2023

**Multi-Level Global Context Cross Consistency Model for Semi-Supervised Ultrasound Image Segmentation with Diffusion Model** \
*Fenghe Tang, Jianrui Ding, Lingtao Wang, Min Xian, Chunping Ning* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.09447)] [[Github](https://github.com/FengheTan9/Multi-Level-Global-Context-Cross-Consistency)] \
16 May 2023

**Echo from noise: synthetic ultrasound image generation using diffusion models for real image segmentation** \
*David Stojanovski, Uxio Hermida, Pablo Lamata, Arian Beqiri, Alberto Gomez* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.05424)] \
9 May 2023

**Personalize Segment Anything Model with One Shot** \
*Renrui Zhang, Zhengkai Jiang, Ziyu Guo, Shilin Yan, Junting Pan, Hao Dong, Peng Gao, Hongsheng Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.03048)] [[Github](https://github.com/ZrrSkywalker/Personalize-SAM)] \
4 May 2023


**Personalize Segment Anything Model with One Shot** \
*Renrui Zhang, Zhengkai Jiang, Ziyu Guo, Shilin Yan, Junting Pan, Hao Dong, Peng Gao, Hongsheng Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.03048)] [[Github](https://github.com/ZrrSkywalker/Personalize-SAM)] \
4 May 2023

**Unsupervised Discovery of 3D Hierarchical Structure with Generative Diffusion Features** \
*Nurislam Tursynbek, Marc Niethammer* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.00067)] \
28 Apr 2023

**DiffuseExpand: Expanding dataset for 2D medical image segmentation using diffusion models** \
*Shitong Shao, Xiaohan Yuan, Zhen Huang, Ziming Qiu, Shuai Wang, Kevin Zhou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.13416)] [[Github](https://anonymous.4open.science/r/DiffuseExpand/README.md)] \
26 Apr 2023



**Realistic Data Enrichment for Robust Image Segmentation in Histopathology** \
*Sarah Cechnicka, James Ball, Callum Arthurs, Candice Roufosse, Bernhard Kainz* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.09534)] \
19 Apr 2023

**Denoising Diffusion Medical Models** \
*Pham Ngoc Huy, Tran Minh Quan* \
IEEE ISBI 2023. [[Paper](https://arxiv.org/abs/2304.09383)] \
19 Apr 2023


**Ambiguous Medical Image Segmentation using Diffusion Models** \
*Aimon Rahman, Jeya Maria Jose Valanarasu, Ilker Hacihaliloglu, Vishal M Patel* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2304.04745)] [[Github](https://github.com/aimansnigdha/Ambiguous-Medical-Image-Segmentation-using-Diffusion-Models)] \
10 Apr 2023

**BerDiff: Conditional Bernoulli Diffusion Model for Medical Image Segmentation** \
*Tao Chen, Chenhui Wang, Hongming Shan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.04429)] \
10 Apr 2023


**Distribution Aligned Diffusion and Prototype-guided network for Unsupervised Domain Adaptive Segmentation** \
*Haipeng Zhou, Lei Zhu, Yuyin Zhou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12313)] \
22 Mar 2023

**Semantic Latent Space Regression of Diffusion Autoencoders for Vertebral Fracture Grading** \
*Matthias Keicher, Matan Atad, David Schinz, Alexandra S. Gersing, Sarah C. Foreman, Sophia S. Goller, Juergen Weissinger, Jon Rischewski, Anna-Sophia Dietrich, Benedikt Wiestler, Jan S. Kirschke, Nassir Navab* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12031)] \
21 Mar 2023

**LD-ZNet: A Latent Diffusion Approach for Text-Based Image Segmentation** \
*Koutilya Pnvr, Bharat Singh, Pallabi Ghosh, Behjat Siddiquie, David Jacobs* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12343)] \
22 Mar 2023

**DiffuMask: Synthesizing Images with Pixel-level Annotations for Semantic Segmentation Using Diffusion Models** \
*Weijia Wu, Yuzhong Zhao, Mike Zheng Shou, Hong Zhou, Chunhua Shen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.11681)] [[Project](https://weijiawu.github.io/DiffusionMask/)] \
21 Mar 2023

**Object-Centric Slot Diffusion** \
*Jindong Jiang, Fei Deng, Gautam Singh, Sungjin Ahn* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.10834)] \
20 Mar 2023


**Diff-UNet: A Diffusion Embedded Network for Volumetric Segmentation** \
*Zhaohu Xing, Liang Wan, Huazhu Fu, Guang Yang, Lei Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.10326)] [[Github](https://github.com/ge-xing/Diff-UNet)] \
18 Mar 2023

**DiffusionSeg: Adapting Diffusion Towards Unsupervised Object Discovery** \
*Chaofan Ma, Yuhuan Yang, Chen Ju, Fei Zhang, Jinxiang Liu, Yu Wang, Ya Zhang, Yanfeng Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09813)] \
17 Mar 2023

**Stochastic Segmentation with Conditional Categorical Diffusion Models** \
*Lukas Zbinden, Lars Doorenbos, Theodoros Pissas, Raphael Sznitman, Pablo Márquez-Neila* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2303.08888)] [[Github](https://github.com/LarsDoorenbos/ccdm-stochastic-segmentation)] \
15 Mar 2023

**DiffBEV: Conditional Diffusion Model for Bird's Eye View Perception** \
*Jiayu Zou, Zheng Zhu, Yun Ye, Xingang Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.08333)] \
15 Mar 2023

**Importance of Aligning Training Strategy with Evaluation for Diffusion Models in 3D Multiclass Segmentation** \
*Yunguan Fu, Yiwen Li, Shaheer U. Saeed, Matthew J. Clarkson, Yipeng Hu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.06040)] [[Github](https://github.com/mathpluscode/ImgX-DiffSeg)] \
10 Mar 2023

**MaskDiff: Modeling Mask Distribution with Diffusion Probabilistic Model for Few-Shot Instance Segmentation** \
*Minh-Quan Le, Tam V. Nguyen, Trung-Nghia Le, Thanh-Toan Do, Minh N. Do, Minh-Triet Tran* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.05105)] \
9 Mar 2023


**Open-Vocabulary Panoptic Segmentation with Text-to-Image Diffusion Models** \
*Jiarui Xu, Sifei Liu, Arash Vahdat, Wonmin Byeon, Xiaolong Wang, Shalini De Mello* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.04803)] [[Project](https://jerryxu.net/ODISE/)] \
8 Mar 2023


**MedSegDiff-V2: Diffusion based Medical Image Segmentation with Transformer** \
*Junde Wu, Rao Fu, Huihui Fang, Yu Zhang, Yanwu Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.11798)] \
19 Jan 2023

**DiffusionInst: Diffusion Model for Instance Segmentation** \
*Zhangxuan Gu, Haoxing Chen, Zhuoer Xu, Jun Lan, Changhua Meng, Weiqiang Wang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.02773)] [[Github](https://github.com/chenhaoxing/DiffusionInst)] \
6 DEc 2022

**Multi-Class Segmentation from Aerial Views using Recursive Noise Diffusion** \
*Benedikt Kolbeinsson, Krystian Mikolajczyk* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.00787)] \
1 Dec 2022

**Peekaboo: Text to Image Diffusion Models are Zero-Shot Segmentors** \
*Ryan Burgert, Kanchana Ranasinghe, Xiang Li, Michael S. Ryoo* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.13224)] \
23 Nov 2022

**Improved HER2 Tumor Segmentation with Subtype Balancing using Deep Generative Networks** \
*Mathias Öttl, Jana Mönius, Matthias Rübner, Carol I. Geppert, Jingna Qiu, Frauke Wilm, Arndt Hartmann, Matthias W. Beckmann, Peter A. Fasching, Andreas Maier, Ramona Erber, Katharina Breininger* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.06150)] \
11 Nov 2022

**MedSegDiff: Medical Image Segmentation with Diffusion Probabilistic Model** \
*Junde Wu, Huihui Fang, Yu Zhang, Yehui Yang, Yanwu Xu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.00611)] \
1 Nov 2022

**Accelerating Diffusion Models via Pre-segmentation Diffusion Sampling for Medical Image Segmentation** \
*Xutao Guo, Yanwu Yang, Chenfei Ye, Shang Lu, Yang Xiang, Ting Ma* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.17408)] \
27 Oct 2022

**Anatomically constrained CT image translation for heterogeneous blood vessel segmentation** \
*Giammarco La Barbera, Haithem Boussaid, Francesco Maso, Sabine Sarnacki, Laurence Rouet, Pietro Gori, Isabelle Bloch* \
BMVC 2022. [[Paper](https://arxiv.org/abs/2210.01713)] \
4 Oct 2022

**Diffusion Adversarial Representation Learning for Self-supervised Vessel Segmentation** \
*Boah Kim, Yujin Oh, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.14566)] \
29 Sep 2022

**Can segmentation models be trained with fully synthetically generated data?** \
*Virginia Fernandez, Walter Hugo Lopez Pinaya, Pedro Borges, Petru-Daniel Tudosiu, Mark S Graham, Tom Vercauteren, M Jorge Cardoso* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.08256)] \
17 Sep 2022

**Let us Build Bridges: Understanding and Extending Diffusion Generative Models** \
*Xingchao Liu, Lemeng Wu, Mao Ye, Qiang Liu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.14699)] \
31 Aug 2022


**Semantic Image Synthesis via Diffusion Models** \
*Weilun Wang, Jianmin Bao, Wengang Zhou, Dongdong Chen, Dong Chen, Lu Yuan, Houqiang Li* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.00050)] \
30 Jun 2022


**Remote Sensing Change Detection (Segmentation) using Denoising Diffusion Probabilistic Models** \
*Wele Gedara Chaminda Bandara, Nithin Gopalakrishnan Nair, Vishal M. Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.11892)] [[Github](https://github.com/wgcban/ddpm-cd)] \
23 Jun 2022



**Diffusion models as plug-and-play priors** \
*Alexandros Graikos, Nikolay Malkin, Nebojsa Jojic, Dimitris Samaras* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.09012)] \
17 Jun 2022


**Fast Unsupervised Brain Anomaly Detection and Segmentation with Diffusion Models** \
*Walter H. L. Pinaya, Mark S. Graham, Robert Gray, Pedro F Da Costa, Petru-Daniel Tudosiu, Paul Wright, Yee H. Mah, Andrew D. MacKinnon, James T. Teo, Rolf Jager, David Werring, Geraint Rees, Parashkev Nachev, Sebastien Ourselin, M. Jorge Cardos* \
MICCAI 2022. [[Paper](https://arxiv.org/abs/2206.03461)] \
7 Jun 2022


**Decoder Denoising Pretraining for Semantic Segmentation** \
*Emmanuel Brempong Asiedu, Simon Kornblith, Ting Chen, Niki Parmar, Matthias Minderer, Mohammad Norouzi* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.11423)] \
23 May 2022

**Diffusion Models for Implicit Image Segmentation Ensembles** \
*Julia Wolleb, Robin Sandkühler, Florentin Bieder, Philippe Valmaggia, Philippe C. Cattin* \
MIDL 2021. [[Paper](https://arxiv.org/abs/2112.03145)] \
6 Dec 2021

**Label-Efficient Semantic Segmentation with Diffusion Models** \
*Dmitry Baranchuk, Ivan Rubachev, Andrey Voynov, Valentin Khrulkov, Artem Babenko* \
ICLR 2021. [[Paper](https://arxiv.org/abs/2112.03126)] [[Github](https://github.com/yandex-research/ddpm-segmentation)] \
6 Dec 2021

**SegDiff: Image Segmentation with Diffusion Probabilistic Models** \
*Tomer Amit, Eliya Nachmani, Tal Shaharbany, Lior Wolf* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.00390)] \
1 Dec 2021


**Argmax Flows and Multinomial Diffusion: Learning Categorical Distributions** \
*Emiel Hoogeboom, Didrik Nielsen, Priyank Jaini, Patrick Forré, Max Welling* \
NeurIPS 2021. [[Paper](https://arxiv.org/abs/2102.05379)] \
10 Feb 2021




### Image Translation

**Latent Diffusion Counterfactual Explanations** \
*Karim Farid, Simon Schrodi, Max Argus, Thomas Brox* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.06668)] \
10 Oct 2023

**Phasic Content Fusing Diffusion Model with Directional Distribution Consistency for Few-Shot Model Adaption** \
*Teng Hu, Jiangning Zhang, Liang Liu, Ran Yi, Siqi Kou, Haokun Zhu, Xu Chen, Yabiao Wang, Chengjie Wang, Lizhuang Ma* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2309.03729)] \
7 Sep 2023

**Latent Painter** \
*Shih-Chieh Su* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.16490)] \
31 Aug 2023

**Zero-shot Inversion Process for Image Attribute Editing with Diffusion Models** \
*Zhanbo Feng, Zenan Ling, Ci Gong, Feng Zhou, Jie Li, Robert C. Qiu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.15854)] \
30 Aug 2023

**DiffI2I: Efficient Diffusion Model for Image-to-Image Translation** \
*Bin Xia, Yulun Zhang, Shiyin Wang, Yitong Wang, Xinglong Wu, Yapeng Tian, Wenming Yang, Radu Timotfe, Luc Van Gool* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.13767)] \
26 Aug 2023

**SSMG: Spatial-Semantic Map Guided Diffusion Model for Free-form Layout-to-Image Generation** \
*Chengyou Jia, Minnan Luo, Zhuohang Dang, Guang Dai, Xiaojun Chang, Mengmeng Wang, Jingdong Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.10156)] \
20 Aug 2023

**MeDM: Mediating Image Diffusion Models for Video-to-Video Translation with Temporal Correspondence Guidance** \
*Ernie Chu, Tzuhsuan Huang, Shuo-Yen Lin, Jun-Cheng Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.10079)] [[Project](https://medm2023.github.io/)] \
19 Aug 2023

**StyleDiffusion: Controllable Disentangled Style Transfer via Diffusion Models** \
*Zhizhong Wang, Lei Zhao, Wei Xing* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07863)] \
15 Aug 2023

**Inversion-by-Inversion: Exemplar-based Sketch-to-Photo Synthesis via Stochastic Differential Equations without Training** \
*Ximing Xing, Chuang Wang, Haitao Zhou, Zhihao Hu, Chongxuan Li, Dong Xu, Qian Yu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07665)] \
15 Aug 2023

**Taming the Power of Diffusion Models for High-Quality Virtual Try-On with Appearance Flow** \
*Junhong Gou, Siyu Sun, Jianfu Zhang, Jianlou Si, Chen Qian, Liqing Zhang* \
ACM MM 2023. [[Paper](https://arxiv.org/abs/2308.06101)] \
11 Aug 2023

**Head Rotation in Denoising Diffusion Models** \
*Andrea Asperti, Gabriele Colasuonno, Antonio Guerra* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.06057)] \
11 Aug 2023

**Photorealistic and Identity-Preserving Image-Based Emotion Manipulation with Latent Diffusion Models** \
*Ioannis Pikoulis, Panagiotis P. Filntisis, Petros Maragos* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.03183)] \
6 Aug 2023

**SDDM: Score-Decomposed Diffusion Models on Manifolds for Unpaired Image-to-Image Translation** \
*Shikun Sun, Longhui Wei, Junliang Xing, Jia Jia, Qi Tian* \
ICML 2023. [[Paper](https://arxiv.org/abs/2308.02154)] \
4 Aug 2023

**Interpolating between Images with Diffusion Models** \
*Clinton J. Wang, Polina Golland* \
ICML Workshop 2023. [[Paper](https://arxiv.org/abs/2307.12560)] [[Project](https://clintonjwang.github.io/interpolation)] [[Github](https://github.com/clintonjwang/ControlNet)] \
24 Jul 2023

**TF-ICON: Diffusion-Based Training-Free Cross-Domain Image Composition** \
*Shilin Lu, Yanzhu Liu, Adams Wai-Kin Kong* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2307.12493)] [[Github](https://github.com/Shilin-LU/TF-ICON)] \
24 Jul 2023

**DiffuseGAE: Controllable and High-fidelity Image Manipulation from Disentangled Representation** \
*Yipeng Leng, Qiangjuan Huang, Zhiyuan Wang, Yangyang Liu, Haoyu Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.05899)] \
12 Jul 2023


**DIFF-NST: Diffusion Interleaving For deFormable Neural Style Transfer** \
*Dan Ruta, Gemma Canet Tarrés, Andrew Gilbert, Eli Shechtman, Nicholas Kolkin, John Collomosse* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.04157)] \
9 Jul 2023

**Applying a Color Palette with Local Control using Diffusion Models** \
*Vaibhav Vavilala, David Forsyth* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.02698)] \
6 Jul 2023


**DragonDiffusion: Enabling Drag-style Manipulation on Diffusion Models** \
*Chong Mou, Xintao Wang, Jiechong Song, Ying Shan, Jian Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.02421)] [[Project](https://mc-e.github.io/project/DragonDiffusion/)] \
5 Jul 2023

**DragDiffusion: Harnessing Diffusion Models for Interactive Point-based Image Editing** \
*Yujun Shi, Chuhui Xue, Jiachun Pan, Wenqing Zhang, Vincent Y. F. Tan, Song Bai* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.14435)] \
26 Jun 2023

**ArtFusion: Controllable Arbitrary Style Transfer using Dual Conditional Latent Diffusion Models** \
*Dar-Yen Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.09330)] [[Github](https://github.com/ChenDarYen/ArtFusion)] \
15 Jun 2023


**InfoDiffusion: Representation Learning Using Information Maximizing Diffusion Models** \
*Yingheng Wang, Yair Schiff, Aaron Gokaslan, Weishen Pan, Fei Wang, Christopher De Sa, Volodymyr Kuleshov* \
ICML 2023. [[Paper](https://arxiv.org/abs/2306.08757)] \
14 Jun 2023

**TryOnDiffusion: A Tale of Two UNets** \
*Luyang Zhu, Dawei Yang, Tyler Zhu, Fitsum Reda, William Chan, Chitwan Saharia, Mohammad Norouzi, Ira Kemelmacher-Shlizerman* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2306.08276)] \
14 Jun 2023


**Improving Diffusion-based Image Translation using Asymmetric Gradient Guidance** \
*Gihyun Kwon, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.04396)] \
7 Jun 2023


**DiffSketching: Sketch Control Image Synthesis with Diffusion Models** \
*Qiang Wang, Di Kong, Fengyin Lin, Yonggang Qi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18812)] \
30 May 2023

**Real-World Image Variation by Aligning Diffusion Inversion Chain** \
*Yuechen Zhang, Jinbo Xing, Eric Lo, Jiaya Jia* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18729)] \
30 May 2023

**Photoswap: Personalized Subject Swapping in Images** \
*Jing Gu, Yilin Wang, Nanxuan Zhao, Tsu-Jui Fu, Wei Xiong, Qing Liu, Zhifei Zhang, He Zhang, Jianming Zhang, HyunJoon Jung, Xin Eric Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.18286)] [[Project](https://photoswap.github.io/)] \
29 May 2023

**Diversify Your Vision Datasets with Automatic Diffusion-Based Augmentation** \
*Lisa Dunlap, Alyssa Umino, Han Zhang, Jiezhi Yang, Joseph E. Gonzalez, Trevor Darrell* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16289)] [[Github](https://github.com/lisadunlap/ALIA)] \
25 May 2023

**Unpaired Image-to-Image Translation via Neural Schrödinger Bridge** \
*Beomsu Kim, Gihyun Kwon, Kwanyoung Kim, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15086)] [[Github](https://github.com/cyclomon/UNSB)] \
24 May 2023

**SAR-to-Optical Image Translation via Thermodynamics-inspired Network** \
*Mingjin Zhang, Jiamin Xu, Chengyu He, Wenteng Shang, Yunsong Li, Xinbo Gao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.13839)] \
23 May 2023


**Null-text Guidance in Diffusion Models is Secretly a Cartoon-style Creator** \
*Jing Zhao, Heliang Zheng, Chaoyue Wang, Long Lan, Wanrong Huang, Wenjing Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.06710)] [[Project](https://nulltextforcartoon.github.io/)] [[Github](https://github.com/NullTextforCartoon/NullTextforCartoon)] \
11 May 2023


**ReGeneration Learning of Diffusion Models with Rich Prompts for Zero-Shot Image Translation** \
*Yupei Lin, Sen Zhang, Xiaojun Yang, Xiao Wang, Yukai Shi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.04651)] [[Project](https://yupeilin2388.github.io/publication/ReDiffuser)] \
8 May 2023

**Hierarchical Diffusion Autoencoders and Disentangled Image Manipulation** \
*Zeyu Lu, Chengyue Wu, Xinyuan Chen, Yaohui Wang, Yu Qiao, Xihui Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.11829)] \
24 Apr 2023

**DiffusionRig: Learning Personalized Priors for Facial Appearance Editing** \
*Zheng Ding, Xuaner Zhang, Zhihao Xia, Lars Jebe, Zhuowen Tu, Xiuming Zhang* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2304.06711)] [[Project](https://diffusionrig.github.io/)] [[Github](https://github.com/adobe-research/diffusion-rig)] \
13 Apr 2023



**Face Animation with an Attribute-Guided Diffusion Model** \
*Bohan Zeng, Xuhui Liu, Sicheng Gao, Boyu Liu, Hong Li, Jianzhuang Liu, Baochang Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.03199)] \
6 Apr 2023



**Reference-based Image Composition with Sketch via Structure-aware Diffusion Model** \
*Kangyeol Kim, Sunghyun Park, Junsoo Lee, Jaegul Choo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.09748)] \
31 Mar 2023

**Training-free Style Transfer Emerges from h-space in Diffusion models** \
*Jaeseok Jeong, Mingi Kwon, Youngjung Uh* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.15403)] [[Project](https://curryjung.github.io/DiffStyle/)] [[Github](https://github.com/curryjung/DiffStyle_official)] \
27 Mar 2023

**Diffusion-based Target Sampler for Unsupervised Domain Adaptation** \
*Yulong Zhang, Shuhao Chen, Yu Zhang, Jiangang Lu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12724)] \
17 Mar 2023

**StyO: Stylize Your Face in Only One-Shot** \
*Bonan Li, Zicheng Zhang, Xuecheng Nie, Congying Han, Yinhan Hu, Tiande Guo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.03231)] \
6 Mar 2023


**DiffFashion: Reference-based Fashion Design with Structure-aware Transfer by Diffusion Models** \
*Shidong Cao, Wenhao Chai, Shengyu Hao, Yanting Zhang, Hangyue Chen, Gaoang Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.06826)] \
14 Feb 2023

**I2SB: Image-to-Image Schrödinger Bridge** \
*Guan-Horng Liu, Arash Vahdat, De-An Huang, Evangelos A. Theodorou, Weili Nie, Anima Anandkumar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.05872)] [[Project](https://i2sb.github.io/)] \
12 Feb 2023

**Zero-shot-Learning Cross-Modality Data Translation Through Mutual Information Guided Stochastic Diffusion** \
*Zihao Wang, Yingyu Yang, Maxime Sermesant, Hervé Delingette, Ona Wu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.13743)] \
31 Jan 2023

**DiffFace: Diffusion-based Face Swapping with Facial Guidance** \
*Kihong Kim, Yunho Kim, Seokju Cho, Junyoung Seo, Jisu Nam, Kychul Lee, Seungryong Kim, KwangHee Lee* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.13344)] [[Project](https://hxngiee.github.io/DiffFace/)] \
27 Dec 2022

**HS-Diffusion: Learning a Semantic-Guided Diffusion Model for Head Swapping** \
*Qinghe Wang, Lijie Liu, Miao Hua, Qian He, Pengfei Zhu, Bing Cao, Qinghua Hu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.06458)] \
13 Dec 2022


**Inversion-Based Creativity Transfer with Diffusion Models** \
*Yuxin Zhang, Nisha Huang, Fan Tang, Haibin Huang, Chongyang Ma, Weiming Dong, Changsheng Xu* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2211.13203)] [[Github](https://github.com/zyxElsa/InST)] \
23 Nov 2022


**Person Image Synthesis via Denoising Diffusion Model** \
*Ankan Kumar Bhunia, Salman Khan, Hisham Cholakkal, Rao Muhammad Anwer, Jorma Laaksonen, Mubarak Shah, Fahad Shahbaz Khan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.12500)] \
22 Nov 2022

**Unifying Diffusion Models' Latent Space, with Applications to CycleDiffusion and Guidance** \
*Chen Henry Wu, Fernando De la Torre* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.05559)] [[Github-1](https://github.com/ChenWu98/cycle-diffusion)] [[Github-2](https://github.com/ChenWu98/unified-generative-zoo)] \
11 Oct 2022


**Anatomically constrained CT image translation for heterogeneous blood vessel segmentation** \
*Giammarco La Barbera, Haithem Boussaid, Francesco Maso, Sabine Sarnacki, Laurence Rouet, Pietro Gori, Isabelle Bloch* \
BMVC 2022. [[Paper](https://arxiv.org/abs/2210.01713)] \
4 Oct 2022


**Diffusion-based Image Translation using Disentangled Style and Content Representation** \
*Gihyun Kwon, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.15264)] \
30 Sep 2022


**MIDMs: Matching Interleaved Diffusion Models for Exemplar-based Image Translation** \
*Junyoung Seo, Gyuseong Lee, Seokju Cho, Jiyoung Lee, Seungryong Kim* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.11047)] [[Project](https://ku-cvlab.github.io/MIDMs/)] \
22 Sep 2022


**Restoring Vision in Adverse Weather Conditions with Patch-Based Denoising Diffusion Models** \
*Ozan Özdenizci, Robert Legenstein* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.14626)] \
29 Jul 2022

**Non-Uniform Diffusion Models** \
*Georgios Batzolis, Jan Stanczuk, Carola-Bibiane Schönlieb, Christian Etmann* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.09786)] \
20 Jul 2022

**Unsupervised Medical Image Translation with Adversarial Diffusion Models** \
*Muzaffer Özbey, Salman UH Dar, Hasan A Bedel, Onat Dalmaz, Şaban Özturk, Alper Güngör, Tolga Çukur* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.08208)] \
17 Jul 2022

**EGSDE: Unpaired Image-to-Image Translation via Energy-Guided Stochastic Differential Equations** \
*Min Zhao, Fan Bao, Chongxuan Li, Jun Zhu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.06635)] \
14 Jul 2022

**Discrete Contrastive Diffusion for Cross-Modal and Conditional Generation** \
*Ye Zhu, Yu Wu, Kyle Olszewski, Jian Ren, Sergey Tulyakov, Yan Yan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2206.07771)] [[Github](https://github.com/L-YeZhu/CDCD)] \
15 Jun 2022

**Pretraining is All You Need for Image-to-Image Translation** \
*Tengfei Wang, Ting Zhang, Bo Zhang, Hao Ouyang, Dong Chen, Qifeng Chen, Fang Wen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.12952)] [[Project](https://tengfei-wang.github.io/PITI/index.html)] [[Github](https://github.com/PITI-Synthesis/PITI)] \
25 May 2022

**VQBB: Image-to-image Translation with Vector Quantized Brownian Bridge** \
*Bo Li, Kaitao Xue, Bin Liu, Yu-Kun Lai* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2205.07680)] \
16 May 2022

**The Swiss Army Knife for Image-to-Image Translation: Multi-Task Diffusion Models** \
*Julia Wolleb, Robin Sandkühler, Florentin Bieder, Philippe C. Cattin* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2204.02641)] \
6 Apr 2022


**Dual Diffusion Implicit Bridges for Image-to-Image Translation** \
*Xuan Su, Jiaming Song, Chenlin Meng, Stefano Ermon* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2203.08382)] \
16 Mar 2022

**Denoising Diffusion Restoration Models** \
*Bahjat Kawar, Michael Elad, Stefano Ermon, Jiaming Song* \
NeurIPS 2022. [[Paper](https://arxiv.org/abs/2201.11793)] \
27 Jan 2022

**DiffuseMorph: Unsupervised Deformable Image Registration Along Continuous Trajectory Using Diffusion Models** \
*Boah Kim, Inhwa Han, Jong Chul Ye* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2112.05149)] \
9 Dec 2021

**Diffusion Autoencoders: Toward a Meaningful and Decodable Representation** \
*Konpat Preechakul, Nattanat Chatthee, Suttisak Wizadwongsa, Supasorn Suwajanakorn* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2111.15640)] [[Project](https://diff-ae.github.io/)] \
30 Dec 2021

**Conditional Image Generation with Score-Based Diffusion Models** \
*Georgios Batzolis, Jan Stanczuk, Carola-Bibiane Schönlieb, Christian Etmann* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2111.13606)] \
26 Nov 2021

**ILVR: Conditioning Method for Denoising Diffusion Probabilistic Models** \
*Jooyoung Choi, Sungwon Kim, Yonghyun Jeong, Youngjune Gwon, Sungroh Yoon* \
ICCV 2021 (Oral). [[Paper](https://arxiv.org/abs/2108.02938)] [[Github](https://github.com/jychoi118/ilvr_adm)] \
6 Aug 2021

**UNIT-DDPM: UNpaired Image Translation with Denoising Diffusion Probabilistic Models**  \
*Hiroshi Sasaki, Chris G. Willcocks, Toby P. Breckon* \
arXiv 2021. [[Paper](https://arxiv.org/abs/2104.05358)] \
12 Apr 2021

### Inverse Problems

**EDiffSR: An Efficient Diffusion Probabilistic Model for Remote Sensing Image Super-Resolution** \
*Yi Xiao, Qiangqiang Yuan, Kui Jiang, Jiang He, Xianyu Jin, Liangpei Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.19288)] \
30 Oct 2023


**Global Structure-Aware Diffusion Process for Low-Light Image Enhancement** \
*Jinhui Hou, Zhiyu Zhu, Junhui Hou, Hui Liu, Huanqiang Zeng, Hui Yuan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.17577)] \
26 Oct 2023


**From Posterior Sampling to Meaningful Diversity in Image Restoration** \
*Noa Cohen, Hila Manor, Yuval Bahat, Tomer Michaeli* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.16047)] \
24 Oct 2023

**Diffusion-Model-Assisted Supervised Learning of Generative Models for Density Estimation** \
*Yanfang Liu, Minglei Yang, Zezhong Zhang, Feng Bao, Yanzhao Cao, Guannan Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.14458)] \
22 Oct 2023

**High-Quality 3D Face Reconstruction with Affine Convolutional Networks** \
*Zhiqian Lin, Jiangke Lin, Lincheng Li, Yi Yuan, Zhengxia Zou* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.14237)] \
22 Oct 2023

**Image Super-resolution Via Latent Diffusion: A Sampling-space Mixture Of Experts And Frequency-augmented Decoder Approach** \
*Feng Luo, Jinxi Xiang, Jun Zhang, Xiao Han, Wei Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.12004)] \
18 Oct 2023

**Towards image compression with perfect realism at ultra-low bitrates** \
*Marlène Careil, Matthew J. Muckley, Jakob Verbeek, Stéphane Lathuilière* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.10325)] \
16 Oct 2023

**AutoDIR: Automatic All-in-One Image Restoration with Latent Diffusion** \
*Yitong Jiang, Zhaoyang Zhang, Tianfan Xue, Jinwei Gu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.10123)] \
16 Oct 2023

**Exploring the Design Space of Diffusion Autoencoders for Face Morphing** \
*Zander Blasingame, Chen Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.09484)] \
14 Oct 2023

**Diffusion Prior Regularized Iterative Reconstruction for Low-dose CT** \
*Wenjun Xia, Yongyi Shi, Chuang Niu, Wenxiang Cong, Ge Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.06949)] \
10 Oct 2023


**SMRD: SURE-based Robust MRI Reconstruction with Diffusion Models** \
*Batu Ozturkler, Chao Liu, Benjamin Eckart, Morteza Mardani, Jiaming Song, Jan Kautz* \
MICCAI 2023. [[Paper](https://arxiv.org/abs/2310.01799)] [[Github](https://github.com/NVlabs/SMRD)] \
3 Oct 2023

**Conditional Diffusion Distillation** \
*Kangfu Mei, Mauricio Delbracio, Hossein Talebi, Zhengzhong Tu, Vishal M. Patel, Peyman Milanfar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.01407)] \
2 Oct 2023

**CommIN: Semantic Image Communications as an Inverse Problem with INN-Guided Diffusion Models** \
*Jiakang Chen, Di You, Deniz Gündüz, Pier Luigi Dragotti* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.01130)] \
2 Oct 2023


**Prompt-tuning latent diffusion models for inverse problems** \
*Hyungjin Chung, Jong Chul Ye, Peyman Milanfar, Mauricio Delbracio* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2310.01110)] \
2 Oct 2023

**Steered Diffusion: A Generalized Framework for Plug-and-Play Conditional Image Synthesis** \
*Nithin Gopalakrishnan Nair, Anoop Cherian, Suhas Lohit, Ye Wang, Toshiaki Koike-Akino, Vishal M. Patel, Tim K. Marks* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2310.00224)] \
30 Sep 2023

**Generating Visual Scenes from Touch** \
*Fengyu Yang, Jiacheng Zhang, Andrew Owens* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2309.15117)] [[Project](https://fredfyyang.github.io/vision-from-touch/)] \
26 Sep 2023

**Bootstrap Diffusion Model Curve Estimation for High Resolution Low-Light Image Enhancement** \
*Jiancheng Huang, Yifan Liu, Shifeng Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.14709)] \
26 Sep 2023

**Multiple Noises in Diffusion Model for Semi-Supervised Multi-Domain Translation** \
*Tsiry Mayet, Simon Bernard, Clement Chatelain, Romain Herault* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.14394)] \
25 Sep 2023

**Domain-Guided Conditional Diffusion Model for Unsupervised Domain Adaptation** \
*Yulong Zhang, Shuhao Chen, Weisen Jiang, Yu Zhang, Jiangang Lu, James T. Kwok* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.14360)] \
23 Sep 2023

**License Plate Super-Resolution Using Diffusion Models** \
*Sawsan AlHalawani, Bilel Benjdira, Adel Ammar, Anis Koubaa, Anas M. Ali* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.12506)] \
21 Sep 2023

**Deshadow-Anything: When Segment Anything Model Meets Zero-shot shadow removal** \
*Xiao Feng Zhang, Tian Yi Song, Jia Wei Yao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.11715)] \
21 Sep 2023


**Face Aging via Diffusion-based Editing** \
*Xiangyi Chen, Stéphane Lathuilière* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.11321)] \
20 Sep 2023

**PGDiff: Guiding Diffusion Models for Versatile Face Restoration via Partial Guidance** \
*Peiqing Yang, Shangchen Zhou, Qingyi Tao, Chen Change Loy* \
NeurIPS 2023. [[Paper](https://arxiv.org/abs/2309.10810)] [[Github](https://github.com/pq-yang/PGDiff)] \
19 Sep 2023

**Reconstruct-and-Generate Diffusion Model for Detail-Preserving Image Denoising** \
*Yujin Wang, Lingen Li, Tianfan Xue, Jinwei Gu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.10714)] \
19 Sep 2023

**Gradpaint: Gradient-Guided Inpainting with Diffusion Models** \
*Asya Grechka, Guillaume Couairon, Matthieu Cord* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.09614)] \
18 Sep 2023



**AdBooster: Personalized Ad Creative Generation using Stable Diffusion Outpainting** \
*Veronika Shilova, Ludovic Dos Santos, Flavian Vasile, Gaëtan Racic, Ugo Tanielian* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.11507)] \
8 Sep 2023

**Underwater Image Enhancement by Transformer-based Diffusion Model with Non-uniform Sampling for Skip Strategy** \
*Yi Tang, Takafumi Iwaguchi, Hiroshi Kawasaki* \
ACM MM 2023. [[Paper](https://arxiv.org/abs/2309.03445)] [[Github](https://github.com/piggy2009/DM_underwater)] \
7 Sep 2023

**Efficient Bayesian Computational Imaging with a Surrogate Score-Based Prior** \
*Berthy T. Feng, Katherine L. Bouman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.01949)] \
5 Sep 2023

**Diffusion Modeling with Domain-conditioned Prior Guidance for Accelerated MRI and qMRI Reconstruction** \
*Wanyu Bian, Albert Jang, Fang Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.00783)] \
2 Sep 2023

**Correlated and Multi-frequency Diffusion Modeling for Highly Under-sampled MRI Reconstruction** \
*Yu Guan, Chuanming Yu, Shiyu Lu, Zhuoxu Cui, Dong Liang, Qiegen Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.00853)] [[Github](https://github.com/yqx7150/CM-DM)] \
2 Sep 2023

**Fast Diffusion EM: a diffusion model for blind inverse problems with application to deconvolution** \
*Charles Laroche, Andrés Almansa, Eva Coupete* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2309.00287)] [[Github](https://anonymous.4open.science/r/FastDiffusionEM-26BE/README.md)] \
1 Sep 2023

**Unsupervised CT Metal Artifact Reduction by Plugging Diffusion Priors in Dual Domains** \
*Xuan Liu, Yaoqin Xie, Songhui Diao, Shan Tan, Xiaokun Liang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.16742)] \
31 Aug 2023

**Stage-by-stage Wavelet Optimization Refinement Diffusion Model for Sparse-View CT Reconstruction** \
*Kai Xu, Shiyu Lu, Bin Huang, Weiwen Wu, Qiegen Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.15942)] \
30 Aug 2023

**Physics-Informed DeepMRI: Bridging the Gap from Heat Diffusion to k-Space Interpolation** \
*Zhuo-Xu Cui, Congcong Liu, Xiaohong Fan, Chentao Cao, Jing Cheng, Qingyong Zhu, Yuanyuan Liu, Sen Jia, Yihang Zhou, Haifeng Wang, Yanjie Zhu, Jianping Zhang, Qiegen Liu, Dong Liang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.15918)] \
30 Aug 2023

**DiffBIR: Towards Blind Image Restoration with Generative Diffusion Prior** \
*Xinqi Lin, Jingwen He, Ziyan Chen, Zhaoyang Lyu, Ben Fei, Bo Dai, Wanli Ouyang, Yu Qiao, Chao Dong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.15070)] [[Github](https://github.com/XPixelGroup/DiffBIR)] \
29 Aug 2023

**Pixel-Aware Stable Diffusion for Realistic Image Super-resolution and Personalized Stylization** \
*Tao Yang, Peiran Ren, Xuansong Xie, Lei Zhang* \
AAAI 2024. [[Paper](https://arxiv.org/abs/2308.14469)] \
28 Aug 2023

**Data-iterative Optimization Score Model for Stable Ultra-Sparse-View CT Reconstruction** \
*Weiwen Wu, Yanyang Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.14437)] \
28 Aug 2023

**Residual Denoising Diffusion Models** \
*Jiawei Liu, Qiang Wang, Huijie Fan, Yinong Wang, Yandong Tang, Liangqiong Qu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.13712)] [[Github](https://github.com/nachifur/RDDM)] \
25 Aug 2023

**Diff-Retinex: Rethinking Low-light Image Enhancement with A Generative Diffusion Model** \
*Xunpeng Yi, Han Xu, Hao Zhang, Linfeng Tang, Jiayi Ma* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2308.13164)] \
25 Aug 2023

**Full-dose PET Synthesis from Low-dose PET Using High-efficiency Diffusion Denoising Probabilistic Model** \
*Shaoyan Pan, Elham Abouei, Junbo Peng, Joshua Qian, Jacob F Wynne, Tonghe Wang, Chih-Wei Chang, Justin Roper, Jonathon A Nye, Hui Mao, Xiaofeng Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.13072)] \
24 Aug 2023

**InverseSR: 3D Brain MRI Super-Resolution Using a Latent Diffusion Model** \
*Jueqi Wang, Jacob Levman, Walter Hugo Lopez Pinaya, Petru-Daniel Tudosiu, M. Jorge Cardoso, Razvan Marinescu* \
MICCAI 2023. [[Paper](https://arxiv.org/abs/2308.12465)] [[Github](https://github.com/BioMedAI-UCSC/InverseSR)] \
23 Aug 2023

**High-quality Image Dehazing with Diffusion Model** \
*Hu Yu, Jie Huang, Kaiwen Zheng, Man Zhou, Feng Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.11949)] \
23 Aug 2023

**Frequency Compensated Diffusion Model for Real-scene Dehazing** \
*Jing Wang, Songtao Wu, Kuanhong Xu, Zhiqiang Yuan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.10510)] \
21 Aug 2023



**Contrastive Diffusion Model with Auxiliary Guidance for Coarse-to-Fine PET Reconstruction** \
*Zeyu Han, Yuhan Wang, Luping Zhou, Peng Wang, Binyu Yan, Jiliu Zhou, Yan Wang, Dinggang Shen* \
MICCAI 2023. [[Paper](https://arxiv.org/abs/2308.10157)] [[Github](https://github.com/Show-han/PET-Reconstruction)] \
20 Aug 2023

**DiffLLE: Diffusion-guided Domain Calibration for Unsupervised Low-light Image Enhancement** \
*Shuzhou Yang, Xuanyu Zhang, Yinhuai Wang, Jiwen Yu, Yuhan Wang, Jian Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.09279)] \
18 Aug 2023

**Learning A Coarse-to-Fine Diffusion Transformer for Image Restoration** \
*Liyan Wang, Qinyu Yang, Cong Wang, Wei Wang, Jinshan Pan, Zhixun Su* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.08730)] \
17 Aug 2023

**Monte Carlo guided Diffusion for Bayesian linear inverse problems** \
*Gabriel Cardoso, Yazid Janati El Idrissi, Sylvain Le Corff, Eric Moulines* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07983)] \
15 Aug 2023

**Geometry of the Visual Cortex with Applications to Image Inpainting and Enhancement** \
*Francesco Ballerin, Erlend Grong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07652)] [[Github](https://github.com/ballerin/v1diffusion)] \
15 Aug 2023

**YODA: You Only Diffuse Areas. An Area-Masked Diffusion Approach For Image Super-Resolution** \
*Brian B. Moser, Stanislav Frolov, Federico Raue, Sebastian Palacio, Andreas Dengel* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.07977)] \
15 Aug 2023

**TextDiff: Mask-Guided Residual Diffusion Models for Scene Text Image Super-Resolution** \
*Baolin Liu, Zongyuan Yang, Pengfei Wang, Junjie Zhou, Ziqi Liu, Ziyi Song, Yan Liu, Yongping Xiong* \
AAAI 2024. [[Paper](https://arxiv.org/abs/2308.06743)] \
13 Aug 2023

**CLE Diffusion: Controllable Light Enhancement Diffusion Model** \
*Yuyang Yin, Dejia Xu, Chuangchuang Tan, Ping Liu, Yao Zhao, Yunchao Wei* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.06725)] [[Project](https://yuyangyin.github.io/CLEDiffusion/)] [[Github](https://github.com/YuyangYin/CLEDiffusion)] \
13 Aug 2023

**Diffusion-Augmented Depth Prediction with Sparse Annotations** \
*Jiaqi Li, Yiran Wang, Zihao Huang, Jinghong Zheng, Ke Xian, Zhiguo Cao, Jianming Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.02283)] \
4 Aug 2023

**Painterly Image Harmonization using Diffusion Model** \
*Lingxiao Lu, Jiangtong Li, Junyan Cao, Li Niu, Liqing Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.02228)] \
4 Aug 2023

**Reference-Free Isotropic 3D EM Reconstruction using Diffusion Models** \
*Kyungryun Lee, Won-Ki Jeong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.01594)] \
3 Aug 2023



**Learning Fourier-Constrained Diffusion Bridges for MRI Reconstruction** \
*Muhammad U. Mirza, Onat Dalmaz, Hasan A. Bedel, Gokberk Elmas, Yilmaz Korkmaz, Alper Gungor, Salman UH Dar, Tolga Çukur* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2308.01096)] \
2 Aug 2023


**Ultrasound Image Reconstruction with Denoising Diffusion Restoration Models** \
*Yuxin Zhang, Clément Huneau, Jérôme Idier, Diana Mateus* \
MICCAI Workshop 2023. [[Paper](https://arxiv.org/abs/2307.15990)] [[Github](https://github.com/Yuxin-Zhang-Jasmine/DRUS-v1)] \
29 Jul 2023

**LLDiffusion: Learning Degradation Representations in Diffusion Models for Low-Light Image Enhancement** \
*Tao Wang, Kaihao Zhang, Ziqian Shao, Wenhan Luo, Bjorn Stenger, Tae-Kyun Kim, Wei Liu, Hongdong Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.14659)] \
27 Jul 2023

**Artifact Restoration in Histology Images with Diffusion Probabilistic Models** \
*Zhenqi He, Junjun He, Jin Ye, Yiqing Shen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.14262)] [[Github](https://github.com/zhenqi-he/ArtiFusion)] \
26 Jul 2023

**ResShift: Efficient Diffusion Model for Image Super-resolution by Residual Shifting** \
*Zongsheng Yue, Jianyi Wang, Chen Change Loy* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.12348)] [[Github](https://github.com/zsyOAOA/ResShift)] \
23 Jul 2023


**Iterative Reconstruction Based on Latent Diffusion Model for Sparse Data Reconstruction** \
*Linchao He, Hongyu Yan, Mengting Luo, Kunming Luo, Wang Wang, Wenchao Du, Hu Chen, Hongyu Yang, Yi Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.12070)] \
22 Jul 2023

**PartDiff: Image Super-resolution with Partial Diffusion Models** \
*Kai Zhao, Alex Ling Yu Hung, Kaifeng Pang, Haoxin Zheng, Kyunghyun Sung* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.11926)] \
21 Jul 2023

**Reference-based Painterly Inpainting via Diffusion: Crossing the Wild Reference Domain Gap** \
*Dejia Xu, Xingqian Xu, Wenyan Cong, Humphrey Shi, Zhangyang Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.10584)] [[Project](https://vita-group.github.io/RefPaint/)] \
20 Jul 2023

**AnyDoor: Zero-shot Object-level Image Customization** \
*Xi Chen, Lianghua Huang, Yu Liu, Yujun Shen, Deli Zhao, Hengshuang Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.09481)] [[Project](https://damo-vilab.github.io/AnyDoor-Page/)] \
18 Jul 2023

**Towards Authentic Face Restoration with Iterative Diffusion Models and Beyond** \
*Yang Zhao, Tingbo Hou, Yu-Chuan Su, Xuhui Jia. Yandong Li, Matthias Grundmann* \
ICCV 2023. [[Paper](https://arxiv.org/abs/2307.08996)] \
18 Jul 2023



**Flow Matching in Latent Space** \
*Quan Dao, Hao Phung, Binh Nguyen, Anh Tran* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08698)] [[Project](https://vinairesearch.github.io/LFM/)] \
17 Jul 2023

**Identity-Preserving Aging of Face Images via Latent Diffusion Models** \
*Sudipta Banerjee, Govind Mittal, Ameya Joshi, Chinmay Hegde, Nasir Memon* \
IJCB 2023. [[Paper](https://arxiv.org/abs/2307.08585)] \
17 Jul 2023



**Solving Inverse Problems with Latent Diffusion Models via Hard Data Consistency** \
*Bowen Song, Soo Min Kwon, Zecheng Zhang, Xinyu Hu, Qing Qu, Liyue Shen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.08123)] \
16 Jul 2023

**ExposureDiffusion: Learning to Expose for Low-light Image Enhancement** \
*Yufei Wang, Yi Yu, Wenhan Yang, Lanqing Guo, Lap-Pui Chau, Alex C. Kot, Bihan Wen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.07710)] \
15 Jul 2023

**DDGM: Solving inverse problems by Diffusive Denoising of Gradient-based Minimization** \
*Kyle Luther, H. Sebastian Seung* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.04946)] \
11 Jul 2023

**Stimulating the Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling** \
*Tong Li, Hansen Feng, Lizhi Wang, Zhiwei Xiong, Hua Huang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.03992)] \
8 Jul 2023

**IPO-LDM: Depth-aided 360-degree Indoor RGB Panorama Outpainting via Latent Diffusion Model** \
*Tianhao Wu, Chuanxia Zheng, Tat-Jen Cham* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.03177)] [[Github](https://sm0kywu.github.io/ipoldm/)] \
6 Jul 2023

**Single Image LDR to HDR Conversion using Conditional Diffusion** \
*Dwip Dalal, Gautam Vashishtha, Prajwal Singh, Shanmuganathan Raman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.02814)] \
6 Jul 2023

**ACDMSR: Accelerated Conditional Diffusion Models for Single Image Super-Resolution** \
*Axi Niu, Pham Xuan Trung, Kang Zhang, Jinqiu Sun, Yu Zhu, In So Kweon, Yanning Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.00781)] \
3 Jul 2023

**LEDITS: Real Image Editing with DDPM Inversion and Semantic Guidance** \
*Linoy Tsaban, Apolinário Passos* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.00522)] \
2 Jul 2023


**Solving Linear Inverse Problems Provably via Posterior Sampling with Latent Diffusion Models** \
*Litu Rout, Negin Raoof, Giannis Daras, Constantine Caramanis, Alexandros G. Dimakis, Sanjay Shakkottai* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2307.00619)] [[Github](https://github.com/LituRout/PSLD)] \
2 Jul 2023

**Content-Preserving Diffusion Model for Unsupervised AS-OCT image Despeckling** \
*Li Sanqian, Higashita Risa, Fu Huazhu, Li Heng, Niu Jingxuan, Liu Jiang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.17717)] \
30 Jun 2023


**Self-Supervised MRI Reconstruction with Unrolled Diffusion Models** \
*Yilmaz Korkmaz, Tolga Cukur, Vishal Patel* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.16654)] \
29 Jun 2023

**SVNR: Spatially-variant Noise Removal with Denoising Diffusion** \
*Naama Pearl, Yaron Brodsky, Dana Berman, Assaf Zomet, Alex Rav Acha, Daniel Cohen-Or, Dani Lischinski* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.16052)] \
28 Jun 2023


**Easing Color Shifts in Score-Based Diffusion Models** \
*Katherine Deck, Tobias Bischoff* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.15832)] \
27 Jun 2023

**Diffusion Model Based Low-Light Image Enhancement for Space Satellite** \
*Yiman Zhu, Lu Wang, Jingyi Yuan, Yu Guo* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.14227)] \
25 Jun 2023

**DiffInfinite: Large Mask-Image Synthesis via Parallel Random Patch Diffusion in Histopathology** \
*Marco Aversa, Gabriel Nobis, Miriam Hägele, Kai Standvoss, Mihaela Chirica, Roderick Murray-Smith, Ahmed Alaa, Lukas Ruff, Daniela Ivanova, Wojciech Samek, Frederick Klauschen, Bruno Sanguinetti, Luis Oala* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.13384)] \
23 Jun 2023


**Wind Noise Reduction with a Diffusion-based Stochastic Regeneration Model** \
*Jean-Marie Lemercier, Joachim Thiemann, Raphael Koning, Timo Gerkmann* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.12867)] \
22 Jun 2023


**DiffuseIR:Diffusion Models For Isotropic Reconstruction of 3D Microscopic Images** \
*Mingjie Pan, Yulu Gan, Fangxu Zhou, Jiaming Liu, Aimin Wang, Shanghang Zhang, Dawei Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.12109)] \
21 Jun 2023


**HSR-Diff:Hyperspectral Image Super-Resolution via Conditional Diffusion Models** \
*Chanyue Wu, Dong Wang, Hanyu Mao, Ying Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.12085)] \
21 Jun 2023


**Diffusion with Forward Models: Solving Stochastic Inverse Problems Without Direct Supervision** \
*Ayush Tewari, Tianwei Yin, George Cazenavette, Semon Rezchikov, Joshua B. Tenenbaum, Frédo Durand, William T. Freeman, Vincent Sitzmann* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.11719)] \
20 Jun 2023

**Deep Ultrasound Denoising Using Diffusion Probabilistic Models** \
*Hojat Asgariandehkordi, Sobhan Goudarzi, Adrian Basarab, Hassan Rivaz* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.07440)] \
12 Jun 2023

**Towards Visual Foundational Models of Physical Scenes** \
*Chethan Parameshwara, Alessandro Achille, Matthew Trager, Xiaolong Li, Jiawei Mo, Matthew Trager, Ashwin Swaminathan, CJ Taylor, Dheera Venkatraman, Xiaohan Fei, Stefano Soatto* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.03727)] \
6 Jun 2023


**INDigo: An INN-Guided Probabilistic Diffusion Algorithm for Inverse Problems** \
*Di You, Andreas Floros, Pier Luigi Dragotti* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.02949)] \
5 Jun 2023

**The Surprising Effectiveness of Diffusion Models for Optical Flow and Monocular Depth Estimation** \
*Saurabh Saxena, Charles Herrmann, Junhwa Hur, Abhishek Kar, Mohammad Norouzi, Deqing Sun, David J. Fleet* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.01923)] \
2 Jun 2023

**Dissecting Arbitrary-scale Super-resolution Capability from Pre-trained Diffusion Generative Models** \
*Ruibin Li, Qihua Zhou, Song Guo, Jie Zhang, Jingcai Guo, Xinyang Jiang, Yifei Shen, Zhenhua Han* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.00714)] \
1 Jun 2023

**Low-Light Image Enhancement with Wavelet-based Diffusion Models** \
*Hai Jiang, Ao Luo, Songchen Han, Haoqiang Fan, Shuaicheng Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2306.00306)] \
1 Jun 2023

**A Unified Conditional Framework for Diffusion-based Image Restoration** \
*Yi Zhang, Xiaoyu Shi, Dasong Li, Xiaogang Wang, Jian Wang, Hongsheng Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.20049)] \
31 May 2023

**Direct Diffusion Bridge using Data Consistency for Inverse Problems** \
*Hyungjin Chung, Jeongsol Kim, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.19809)] \
31 May 2023

**Accelerating Diffusion Models for Inverse Problems through Shortcut Sampling** \
*Gongye Liu, Haoze Sun, Jiayi Li, Fei Yin, Yujiu Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16965)] \
26 May 2023

**Look Ma, No Hands! Agent-Environment Factorization of Egocentric Videos** \
*Matthew Chang, Aditya Prakash, Saurabh Gupta* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.16301)] [[Project](https://matthewchang.github.io/vidm/)] \
25 May 2023

**A Diffusion Probabilistic Prior for Low-Dose CT Image Denoising** \
*Xuan Liu, Yaoqin Xie, Songhui Diao, Shan Tan, Xiaokun Liang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15887)] \
25 May 2023

**Solving Diffusion ODEs with Optimal Boundary Conditions for Better Image Super-Resolution** \
*Yiyang Ma, Huan Yang, Wenhan Yang, Jianlong Fu, Jiaying Liu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.15357)] \
24 May 2023

**WaveDM: Wavelet-Based Diffusion Models for Image Restoration** \
*Yi Huang, Jiancheng Huang, Jianzhuang Liu, Yu Dong, Jiaxi Lv, Shifeng Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.13819)] \
23 May 2023

**Dual-Diffusion: Dual Conditional Denoising Diffusion Probabilistic Models for Blind Super-Resolution Reconstruction in RSIs** \
*Mengze Xu, Jie Ma, Yuanyuan Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.12170)] [[Github](https://github.com/Lincoln20030413/DDSR)] \
20 May 2023

**UniControl: A Unified Diffusion Model for Controllable Visual Generation In the Wild** \
*Can Qin, Shu Zhang, Ning Yu, Yihao Feng, Xinyi Yang, Yingbo Zhou, Huan Wang, Juan Carlos Niebles, Caiming Xiong, Silvio Savarese, Stefano Ermon, Yun Fu, Ran Xu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.11147)] \
18 May 2023

**Pyramid Diffusion Models For Low-light Image Enhancement** \
*Dewei Zhou, Zongxin Yang, Yi Yang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.10028)] \
17 May 2023

**A Conditional Denoising Diffusion Probabilistic Model for Radio Interferometric Image Reconstruction** \
*Ruoqi Wang, Zhuoyang Chen, Qiong Luo, Feng Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.09121)]
16 May 2023

**Denoising Diffusion Models for Plug-and-Play Image Restoration** \
*Yuanzhi Zhu, Kai Zhang, Jingyun Liang, Jiezhang Cao, Bihan Wen, Radu Timofte, Luc Van Gool* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.08995)] [[Github](https://github.com/yuanzhi-zhu/DiffPIR)] \
15 May 2023


**Exploiting Diffusion Prior for Real-World Image Super-Resolution** \
*Jianyi Wang, Zongsheng Yue, Shangchen Zhou, Kelvin C.K. Chan, Chen Change Loy* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.07015)] [[Project](https://iceclear.github.io/projects/stablesr/)] [[Github](https://github.com/IceClear/StableSR)] \
11 May 2023

**Atmospheric Turbulence Correction via Variational Deep Diffusion** \
*Xijun Wang, Santiago López-Tapia, Aggelos K. Katsaggelos* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.05077)] \
8 May 2023

**Controllable Light Diffusion for Portraits** \
*David Futschik, Kelvin Ritland, James Vecore, Sean Fanello, Sergio Orts-Escolano, Brian Curless, Daniel Sýkora, Rohit Pandey* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.04745)] \
8 May 2023

**DiffBFR: Bootstrapping Diffusion Model Towards Blind Face Restoration** \
*Xinmin Qiu, Congying Han, ZiCheng Zhang, Bonan Li, Tiande Guo, Xuecheng Nie* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.04517)] \
8 May 2023

**Real-World Denoising via Diffusion Model** \
*Cheng Yang, Lijing Liang, Zhixun Su* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.04457)] \
8 May 2023

**A Variational Perspective on Solving Inverse Problems with Diffusion Models** \
*Morteza Mardani, Jiaming Song, Jan Kautz, Arash Vahdat* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.04391)] \
7 May 2023

**Synthesizing PET images from High-field and Ultra-high-field MR images Using Joint Diffusion Attention Model** \
*Taofeng Xie, Chentao Cao, Zhuoxu Cui, Yu Guo, Caiying Wu, Xuemei Wang, Qingneng Li, Zhanli Hu, Tao Sun, Ziru Sang, Yihang Zhou, Yanjie Zhu, Dong Liang, Qiyu Jin, Guoqing Chen, Haifeng Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.03901)] \
6 May 2023



**DocDiff: Document Enhancement via Residual Diffusion Models** \
*Zongyuan Yang, Baolin Liu, Yongping Xiong, Lan Yi, Guibin Wu, Xiaojun Tang, Ziqi Liu, Junjie Zhou, Xing Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.03892)] [[Github](https://github.com/Royalvice/DocDiff)] \
6 May 2023

**Solving Inverse Problems with Score-Based Generative Priors learned from Noisy Data** \
*Asad Aali, Marius Arvinte, Sidharth Kumar, Jonathan I. Tamir* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.01166)] \
2 May 2023

**Self-similarity-based super-resolution of photoacoustic angiography from hand-drawn doodles** \
*Yuanzheng Ma, Wangting Zhou, Rui Ma, Sihua Yang, Yansong Tang, Xun Guan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2305.01165)] \
2 May 2023

**Score-Based Diffusion Models as Principled Priors for Inverse Imaging** \
*Berthy T. Feng, Jamie Smith, Michael Rubinstein, Huiwen Chang, Katherine L. Bouman, William T. Freeman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.11751)] \
23 Apr 2023

**Improved Diffusion-based Image Colorization via Piggybacked Models** \
*Hanyuan Liu, Jinbo Xing, Minshan Xie, Chengze Li, Tien-Tsin Wong* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.11105)] [[Project](https://piggyback-color.github.io/)] \
21 Apr 2023

**DiFaReli: Diffusion Face Relighting** \
*Puntawat Ponglertnapakorn, Nontawat Tritrong, Supasorn Suwajanakorn* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.09479)] [[Project](https://diffusion-face-relighting.github.io/)] \
19 Apr 2023

**Inpaint Anything: Segment Anything Meets Image Inpainting** \
*Tao Yu, Runseng Feng, Ruoyu Feng, Jinming Liu, Xin Jin, Wenjun Zeng, Zhibo Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.06790)] [[Github](https://github.com/geekyutao/Inpaint-Anything)] \
13 Apr 2023

**Refusion: Enabling Large-Size Realistic Image Restoration with Latent-Space Diffusion Models** \
*Ziwei Luo, Fredrik K. Gustafsson, Zheng Zhao, Jens Sjölund, Thomas B. Schön* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.08291)] [[Github](https://github.com/Algolzw/image-restoration-sde)] \
17 Apr 2023


**SPIRiT-Diffusion: Self-Consistency Driven Diffusion Model for Accelerated MRI** \
*Zhuo-Xu Cui, Chentao Cao, Jing Cheng, Sen Jia, Hairong Zheng, Dong Liang, Yanjie Zhu* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.05060)] \
11 Apr 2023

**Zero-shot CT Field-of-view Completion with Unconditional Generative Diffusion Prior** \
*Kaiwen Xu, Aravind R. Krishnan, Thomas Z. Li, Yuankai Huo, Kim L. Sandler, Fabien Maldonado, Bennett A. Landman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.03760)] \
7 Apr 2023

**SketchFFusion: Sketch-guided image editing with diffusion model** \
*Weihang Mao, Bo Han, Zihao Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.03174)] \
6 Apr 2023


**Inst-Inpaint: Instructing to Remove Objects with Diffusion Models** \
*Ahmet Burak Yildirim, Vedat Baday, Erkut Erdem, Aykut Erdem, Aysegul Dundar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.03246)] [[Project](http://instinpaint.abyildirim.com/)] \
6 Apr 2023

**Towards Coherent Image Inpainting Using Denoising Diffusion Implicit Models** \
*Guanhua Zhang, Jiabao Ji, Yang Zhang, Mo Yu, Tommi Jaakkola, Shiyu Chang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.03322)] [[Github](https://github.com/UCSB-NLP-Chang/CoPaint/)] \
6 Apr 2023

**Zero-shot Medical Image Translation via Frequency-Guided Diffusion Models** \
*Yunxiang Li, Hua-Chieh Shao, Xiao Liang, Liyuan Chen, Ruiqi Li, Steve Jiang, Jing Wang, You Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.02742)] \
5 Apr 2023

**Waving Goodbye to Low-Res: A Diffusion-Wavelet Approach for Image Super-Resolution** \
*Brian Moser, Stanislav Frolov, Federico Raue, Sebastian Palacio, Andreas Dengel* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.01994)] \
4 Apr 2023


**CoreDiff: Contextual Error-Modulated Generalized Diffusion Model for Low-Dose CT Denoising and Generalization** \
*Qi Gao, Zilong Li, Junping Zhang, Yi Zhang, Hongming Shan* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2304.01814)] \
4 Apr 2023


**Generative Diffusion Prior for Unified Image Restoration and Enhancement** \
*Ben Fei, Zhaoyang Lyu, Liang Pan, Junzhe Zhang, Weidong Yang, Tianyue Luo, Bo Zhang, Bo Dai* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2304.01247)] \
3 Apr 2023

**Implicit Diffusion Models for Continuous Super-Resolution** \
*Sicheng Gao, Xuhui Liu, Bohan Zeng, Sheng Xu, Yanjing Li, Xiaoyan Luo, Jianzhuang Liu, Xiantong Zhen, Baochang Zhang* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2303.16491)] \
29 Mar 2023


**DiracDiffusion: Denoising and Incremental Reconstruction with Assured Data-Consistency** \
*Zalan Fabian, Berk Tinaz, Mahdi Soltanolkotabi* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.14353)] \
25 Mar 2023

**MindDiffuser: Controlled Image Reconstruction from Human Brain Activity with Semantic and Structural Diffusion** \
*Yizhuo Lu, Changde Du, Dianpeng Wang, Huiguang He* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.14139)] \
24 Mar 2023

**DisC-Diff: Disentangled Conditional Diffusion Model for Multi-Contrast MRI Super-Resolution** \
*Ye Mao, Lan Jiang, Xi Chen, Chao Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.13933)] \
23 Mar 2023


**Sub-volume-based Denoising Diffusion Probabilistic Model for Cone-beam CT Reconstruction from Incomplete Data** \
*Wenjun Xia, Chuang Niu, Wenxiang Cong, Ge Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12861)] \
22 Mar 2023



**A Perceptual Quality Assessment Exploration for AIGC Images** \
*Zicheng Zhang, Chunyi Li, Wei Sun, Xiaohong Liu, Xiongkuo Min, Guangtao Zhai* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.12618)] \
22 Mar 2023

**Inversion by Direct Iteration: An Alternative to Denoising Diffusion for Image Restoration** \
*Mauricio Delbracio, Peyman Milanfar* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.11435)] \
20 Mar 2023

**Efficient Neural Generation of 4K Masks for Homogeneous Diffusion Inpainting** \
*Karl Schrader, Pascal Peter, Niklas Kämper, Joachim Weickert* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.10096)] \
17 Mar 2023

**Denoising Diffusion Post-Processing for Low-Light Image Enhancement** \
*Savvas Panagiotou, Anna S. Bosman* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09627)] \
16 Mar 2023

**SUD2: Supervision by Denoising Diffusion Models for Image Reconstruction** \
*Matthew A. Chan, Sean I. Young, Christopher A. Metzler* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09642)] \
16 Mar 2023

**DiffIR: Efficient Diffusion Model for Image Restoration** \
*Bin Xia, Yulun Zhang, Shiyin Wang, Yitong Wang, Xinglong Wu, Yapeng Tian, Wenming Yang, Luc Van Gool* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.09472)] \
16 Mar 2023

**ResDiff: Combining CNN and Diffusion Model for Image Super-Resolution** \
*Shuyao Shang, Zhengyang Shan, Guangxing Liu, Jinglin Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.08714)] \
15 Mar 2023

**Class-Guided Image-to-Image Diffusion: Cell Painting from Brightfield Images with Class Labels** \
*Jan Oscar Cross-Zamirski, Praveen Anand, Guy Williams, Elizabeth Mouchet, Yinhai Wang, Carola-Bibiane Schönlieb* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.08863)] [[Github](https://github.com/crosszamirski/guided-I2I)] \
15 Mar 2023


**Diffusion Models for Contrast Harmonization of Magnetic Resonance Images** \
*Alicia Durrer, Julia Wolleb, Florentin Bieder, Tim Sinnecker, Matthias Weigel, Robin Sandkühler, Cristina Granziera, Özgür Yaldizli, Philippe C. Cattin* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.08189)] \
14 Mar 2023

**Synthesizing Realistic Image Restoration Training Pairs: A Diffusion Approach** \
*Tao Yang, Peiran Ren, Xuansong xie, Lei Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.06994)] \
13 Mar 2023

**DR2: Diffusion-based Robust Degradation Remover for Blind Face Restoration** \
*Zhixin Wang, Xiaoyun Zhang, Ziying Zhang, Huangjie Zheng, Mingyuan Zhou, Ya Zhang, Yanfeng Wang* \
CVPR 2023. [[Paper](https://arxiv.org/abs/2303.06885)] \
13 Mar 2023

**DDS2M: Self-Supervised Denoising Diffusion Spatio-Spectral Model for Hyperspectral Image Restoration** \
*Yuchun Miao, Lefei Zhang, Liangpei Zhang, Dacheng Tao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.06682)] \
12 Mar 2023


**Fast Diffusion Sampler for Inverse Problems by Geometric Decomposition** \
*Hyungjin Chung, Suhyeon Lee, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.05754)] \
10 Mar 2023

**Generalized Diffusion MRI Denoising and Super-Resolution using Swin Transformers** \
*Amir Sadikov, Jamie Wren-Jarvis, Xinlei Pan, Lanya T. Cai, Pratik Mukherjee* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.05686)] \
10 Mar 2023

**DiffusionDepth: Diffusion Denoising Approach for Monocular Depth Estimation** \
*Yiqun Duan, Zheng Zhu, Xianda Guo* \
arxiv 2023. [[Paper](https://arxiv.org/abs/2303.05021)] [[Github](https://github.com/duanyiqun/DiffusionDepth)] \
9 Mar 2023

**Learning Enhancement From Degradation: A Diffusion Model For Fundus Image Enhancement** \
*Puijin Cheng, Li Lin, Yijin Huang, Huaqing He, Wenhan Luo, Xiaoying Tang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.04603)] [[Github](https://github.com/QtacierP/LED)] \
8 Mar 2023

**Unlimited-Size Diffusion Restoration** \
*Yinhuai Wang, Jiwen Yu, Runyi Yu, Jian Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.00354)] \
1 Mar 2023

**Unsupervised Out-of-Distribution Detection with Diffusion Inpainting** \
*Zhenzhen Liu, Jin Peng Zhou, Yufan Wang, Kilian Q. Weinberger* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.10326)] \
20 Feb 2023

**Restoration based Generative Models** \
*Jaemoo Choi, Yesom Park, Myungjoo Kang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2303.05456)] \
20 Feb 2023

**Explicit Diffusion of Gaussian Mixture Model Based Image Priors** \
*Martin Zach, Thomas Pock, Erich Kobler, Antonin Chambolle* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.08411)] \
16 Feb 2023

**Denoising Diffusion Probabilistic Models for Robust Image Super-Resolution in the Wild** \
*Hshmat Sahak, Daniel Watson, Chitwan Saharia, David Fleet* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.07864)] \
15 Feb 2023



**CDPMSR: Conditional Diffusion Probabilistic Models for Single Image Super-Resolution** \
*Axi Niu, Kang Zhang, Trung X. Pham, Jinqiu Sun, Yu Zhu, In So Kweon, Yanning Zhang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.12831)] \
14 Feb 2023

**How to Trust Your Diffusion Model: A Convex Optimization Approach to Conformal Risk Control** \
*Jacopo Teneggi, Matt Tivnan, J Webster Stayman, Jeremias Sulam* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.03791)] \
7 Feb 2023

**DDM2: Self-Supervised Diffusion MRI Denoising with Generative Diffusion Models** \
*Tiange Xiang, Mahmut Yurt, Ali B Syed, Kawin Setsompop, Akshay Chaudhari* \
ICLR 2023. [[Paper](https://arxiv.org/abs/2302.03018)] [[Github](https://github.com/StanfordMIMI/DDM2)] \
6 Feb 2023




**Diffusion Model for Generative Image Denoising** \
*Yutong Xie, Minne Yuan, Bin Dong, Quanzheng Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.02398)] \
5 Feb 2023



**A Theoretical Justification for Image Inpainting using Denoising Diffusion Probabilistic Models** \
*Litu Rout, Advait Parulekar, Constantine Caramanis, Sanjay Shakkottai* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.01217)] \
2 Feb 2023

**GibbsDDRM: A Partially Collapsed Gibbs Sampler for Solving Blind Inverse Problems with Denoising Diffusion Restoration** \
*Naoki Murata, Koichi Saito, Chieh-Hsin Lai, Yuhta Takida, Toshimitsu Uesaka, Yuki Mitsufuji, Stefano Ermon* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.12686)] \
30 Jan 2023


**Accelerating Guided Diffusion Sampling with Splitting Numerical Methods** \
*Suttisak Wizadwongsa, Supasorn Suwajanakorn* \
ICLR 2023. [[Paper](https://arxiv.org/abs/2301.11558)] \
27 Jan 2023

**Diffusion Denoising for Low-Dose-CT Model** \
*Runyi Li* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.11482)] \
27 Jan 2023

**Screen Space Indirect Lighting with Visibility Bitmask** \
*Olivier Therrien, Yannick Levesque, Guillaume Gilet* \
Visual Computer 2023. [[Paper](https://arxiv.org/abs/2301.11376)] \
26 Jan 2023


**Dual Diffusion Architecture for Fisheye Image Rectification: Synthetic-to-Real Generalization** \
*Shangrong Yang, Chunyu Lin, Kang Liao, Yao Zhao* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.11785)] \
26 Jan 2023

**RainDiffusion:When Unsupervised Learning Meets Diffusion Models for Real-world Image Deraining** \
*Mingqiang Wei, Yiyang Shen, Yongzhen Wang, Haoran Xie, Fu Lee Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.09430)] \
23 Jan 2023

**Dif-Fusion: Towards High Color Fidelity in Infrared and Visible Image Fusion with Diffusion Models** \
*Mingqiang Wei, Yiyang Shen, Yongzhen Wang, Haoran Xie, Fu Lee Wang* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.09430)] \
23 Jan 2023

**Removing Structured Noise with Diffusion Models** \
*Tristan S.W. Stevens, Jean-Luc Robert, Faik C. Meral Jason Yu, Jun Seob Shin, Ruud J.G. van Sloun* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2302.05290)] \
20 Jan 2023

**Image Restoration with Mean-Reverting Stochastic Differential Equations** \
*Ziwei Luo, Fredrik K. Gustafsson, Zheng Zhao, Jens Sjölund, Thomas B. Schön* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.11699)] [[Github](https://github.com/Algolzw/image-restoration-sde)] \
20 Jan 2023


**DiffusionCT: Latent Diffusion Model for CT Image Standardization** \
*Md Selim, Jie Zhang, Michael A. Brooks, Ge Wang, Jin Chen* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.08815)] \
20 Jan 2023

**Targeted Image Reconstruction by Sampling Pre-trained Diffusion Model** \
*Jiageng Zheng* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.07557)] \
18 Jan 2023

**Annealed Score-Based Diffusion Model for MR Motion Artifact Reduction** \
*Gyutaek Oh, Jeong Eun Lee, Jong Chul Ye* \
arXiv 2023. [[Paper](https://arxiv.org/abs/2301.03027)] \
8 Jan 2023

**Exploring Vision Transformers as Diffusion Learners** \
*He Cao, Jianan Wang, Tianhe Ren, Xianbiao Qi, Yihao Chen, Yuan Yao, Lei Zhang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.13771)] \
28 Dec 2022


**Towards Blind Watermarking: Combining Invertible and Non-invertible Mechanisms** \
*Rui Ma, Mengxi Guo, Yi Hou, Fan Yang, Yuan Li, Huizhu Jia, Xiaodong Xie* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.12678)] [[Github](https://github.com/rmpku/CIN)] \
24 Dec 2022

**Bi-Noising Diffusion: Towards Conditional Diffusion Models with Generative Restoration Priors** \
*Kangfu Mei, Nithin Gopalakrishnan Nair, Vishal M. Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.07352)] [[Project](https://kfmei.page/bi-noising/)] \
14 Dec 2022

**SPIRiT-Diffusion: SPIRiT-driven Score-Based Generative Modeling for Vessel Wall imaging** \
*Chentao Cao, Zhuo-Xu Cui, Jing Cheng, Sen Jia, Hairong Zheng, Dong Liang, Yanjie Zhu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.11274)] \
14 Dec 2022

**Universal Generative Modeling in Dual-domain for Dynamic MR Imaging** \
*Chuanming Yu, Yu Guan, Ziwen Ke, Dong Liang, Qiegen Liu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.07599)] \
15 Dec 2022

**DifFace: Blind Face Restoration with Diffused Error Contraction** \
*Zongsheng Yue, Chen Change Loy* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.06512)] [[Github](https://github.com/zsyOAOA/DifFace)] \
13 Dec 2022

**ShadowDiffusion: When Degradation Prior Meets Diffusion Model for Shadow Removal** \
*Lanqing Guo, Chong Wang, Wenhan Yang, Siyu Huang, Yufei Wang, Hanspeter Pfister, Bihan Wen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.04711)] \
9 Dec 2022


**One Sample Diffusion Model in Projection Domain for Low-Dose CT Imaging** \
*Bin Huang, Liu Zhang, Shiyu Lu, Boyu Lin, Weiwen Wu, Qiegen Liu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.03630)] \
7 Dec 2022

**SDM: Spatial Diffusion Model for Large Hole Image Inpainting** \
*Wenbo Li, Xin Yu, Kun Zhou, Yibing Song, Zhe Lin, Jiaya Jia* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.02963)] \
6 Dec 2022

**ADIR: Adaptive Diffusion for Image Reconstruction** \
*Shady Abu-Hussein, Tom Tirer, Raja Giryes* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.03221)] [[Project](https://shadyabh.github.io/ADIR/)] \
6 Dec 2022

**Image Deblurring with Domain Generalizable Diffusion Models** \
*Mengwei Ren, Mauricio Delbracio, Hossein Talebi, Guido Gerig, Peyman Milanfar* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.01789)] \
4 Dec 2022


**Zero-Shot Image Restoration Using Denoising Diffusion Null-Space Model** \
*Yinhuai Wang, Jiwen Yu, Jian Zhang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2212.00490)] [[Github](https://github.com/wyhuai/DDNM)] \
1 Dec 2022


**FREDSR: Fourier Residual Efficient Diffusive GAN for Single Image Super Resolution** \
*Kyoungwan Woo, Achyuta Rajaram* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.16678)] \
30 Nov 2022

**CHIMLE: Conditional Hierarchical IMLE for Multimodal Conditional Image Synthesis** \
*Shichong Peng, Alireza Moazeni, Ke Li* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.14286)] \
25 Nov 2022



**DOLCE: A Model-Based Probabilistic Diffusion Framework for Limited-Angle CT Reconstruction** \
*Jiaming Liu, Rushil Anirudh, Jayaraman J. Thiagarajan, Stewart He, K. Aditya Mohan, Ulugbek S. Kamilov, Hyojin Kim* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.12340)] \
22 Nov 2022

**Diffusion Model Based Posterior Sampling for Noisy Linear Inverse Problems** \
*Xiangming Meng, Yoshiyuki Kabashima* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.12343)] [[Github](https://github.com/mengxiangming/dmps)] \
20 Nov 2022

**Parallel Diffusion Models of Operator and Image for Blind Inverse Problems** \
*Hyungjin Chung, Jeongsol Kim, Sehui Kim, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.10656)] \
19 Nov 2022


**Solving 3D Inverse Problems using Pre-trained 2D Diffusion Models** \
*Hyungjin Chung, Dohoon Ryu, Michael T. McCann, Marc L. Klasky, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.10655)] \
19 Nov 2022

**Patch-Based Denoising Diffusion Probabilistic Model for Sparse-View CT Reconstruction** \
*Wenjun Xia, Wenxiang Cong, Ge Wang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.10388)] \
18 Nov 2022


**A Structure-Guided Diffusion Model for Large-Hole Diverse Image Completion** \
*Daichi Horita, Jiaolong Yang, Dong Chen, Yuki Koyama, Kiyoharu Aizawa* \
BMVC 2023. [[Paper](https://arxiv.org/abs/2211.10437)] \
18 Nov 2022


**Conffusion: Confidence Intervals for Diffusion Models** \
*Eliahu Horwitz, Yedid Hoshen* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.09795)] \
17 Nov 2022

**Superresolution Reconstruction of Single Image for Latent features** \
*Xin Wang, Jing-Ke Yan, Jing-Ye Cai, Jian-Hua Deng, Qin Qin, Qin Wang, Heng Xiao, Yao Cheng, Peng-Fei Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.12845)] \
16 Nov 2022



**Learning to Kindle the Starlight** \
*Yu Yuan, Jiaqi Wu, Lindong Wang, Zhongliang Jing, Henry Leung, Shuyuan Zhu, Han Pan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.09206)] \
16 Nov 2022


**ShadowDiffusion: Diffusion-based Shadow Removal using Classifier-driven Attention and Structure Preservation** \
*Yeying Jin, Wenhan Yang, Wei Ye, Yuan Yuan, Robby T. Tan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.08089)] \
15 Nov 2022


**DriftRec: Adapting diffusion models to blind image restoration tasks** \
*Simon Welker, Henry N. Chapman, Timo Gerkmann* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.06757)] \
12 Nov 2022

**From Denoising Diffusions to Denoising Markov Models** \
*Joe Benton, Yuyang Shi, Valentin De Bortoli, George Deligiannidis, Arnaud Doucet* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.03595)] [[Github](https://github.com/yuyang-shi/generalized-diffusion)] \
7 Nov 2022



**Quantized Compressed Sensing with Score-Based Generative Models** \
*Xiangming Meng, Yoshiyuki Kabashima* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2211.13006)] [[Github](https://github.com/mengxiangming/QCS-SGM)] \
2 Nov 2022




**Intelligent Painter: Picture Composition With Resampling Diffusion Model** \
*Wing-Fung Ku, Wan-Chi Siu, Xi Cheng, H. Anthony Chan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.17106)] \
31 Oct 2022

**Multitask Brain Tumor Inpainting with Diffusion Models: A Methodological Report** \
*Pouria Rouzrokh, Bardia Khosravi, Shahriar Faghani, Mana Moassefi, Sanaz Vahdati, Bradley J. Erickson* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.12113)] [[Github](https://github.com/Mayo-Radiology-Informatics-Lab/MBTI)] \
21 Oct 2022


**DiffGAR: Model-Agnostic Restoration from Generative Artifacts Using Image-to-Image Diffusion Models** \
*Yueqin Yin, Lianghua Huang, Yu Liu, Kaiqi Huang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2210.08573)] \
16 Oct 2022

**Low-Dose CT Using Denoising Diffusion Probabilistic Model for 20× Speedup** \
*Wenjun Xia, Qing Lyu, Ge Wang* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.15136)] \
29 Sep 2022

**Diffusion Posterior Sampling for General Noisy Inverse Problems** \
*Hyungjin Chung, Jeongsol Kim, Michael T. Mccann, Marc L. Klasky, Jong Chul Ye* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.14687)] [[Github](https://github.com/DPS2022/diffusion-posterior-sampling)] \
29 Sep 2022

**Face Super-Resolution Using Stochastic Differential Equations** \
*Marcelo dos Santos, Rayson Laroca, Rafael O. Ribeiro, João Neves, Hugo Proença, David Menotti* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.12064)] [[Github](https://github.com/marcelowds/sr-sde)] \
24 Sep 2022


**JPEG Artifact Correction using Denoising Diffusion Restoration Models** \
*Bahjat Kawar, Jiaming Song, Stefano Ermon, Michael Elad* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.11888)] \
23 Sep 2022




**T2V-DDPM: Thermal to Visible Face Translation using Denoising Diffusion Probabilistic Models** \
*Nithin Gopalakrishnan Nair, Vishal M. Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.08814)] \
19 Sep 2022


**Delving Globally into Texture and Structure for Image Inpainting** \
*Haipeng Liu, Yang Wang, Meng Wang, Yong Rui* \
ACM 2022. [[Paper](https://arxiv.org/abs/2209.08217)] [[Github](https://github.com/htyjers/DGTS-Inpainting)] \
17 Sep 2022


**PET image denoising based on denoising diffusion probabilistic models** \
*Kuang Gong, Keith A. Johnson, Georges El Fakhri, Quanzheng Li, Tinsu Pan* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2209.06167)] \
13 Sep 2022

**Self-Score: Self-Supervised Learning on Score-Based Models for MRI Reconstruction** \
*Zhuo-Xu Cui, Chentao Cao, Shaonan Liu, Qingyong Zhu, Jing Cheng, Haifeng Wang, Yanjie Zhu, Dong Liang* \
IEEE TMI 2022. [[Paper](https://arxiv.org/abs/2209.00835)] \
2 Sep 2022

**AT-DDPM: Restoring Faces degraded by Atmospheric Turbulence using Denoising Diffusion Probabilistic Models** \
*Nithin Gopalakrishnan Nair, Kangfu Mei, Vishal M Patel* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.11284)] \
24 Aug 2022

**Cold Diffusion: Inverting Arbitrary Image Transforms Without Noise** \
*Arpit Bansal, Eitan Borgnia, Hong-Min Chu, Jie S. Li, Hamid Kazemi, Furong Huang, Micah Goldblum, Jonas Geiping, Tom Goldstein* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.09392)] [[Github](https://github.com/arpitbansal297/Cold-Diffusion-Models)] \
19 Aug 2022



**High-Frequency Space Diffusion Models for Accelerated MRI** \
*Chentao Cao, Zhuo-Xu Cui, Shaonan Liu, Dong Liang, Yanjie Zhu* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2208.05481)] \
10 Aug 2022


**Restoring Vision in Adverse Weather Conditions with Patch-Based Denoising Diffusion Models** \
*Ozan Özdenizci, Robert Legenstein* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.14626)] [[Github](https://github.com/IGITUGraz/WeatherDiffusion)] \
29 Jul 2022





**Non-Uniform Diffusion Models** \
*Georgios Batzolis, Jan Stanczuk, Carola-Bibiane Schönlieb, Christian Etmann* \
arXiv 2022. [[Paper](https://arxiv.org/abs/2207.09786)] \
20 Jul 2022


**Unsupervised Medical Image Tran