# Awesome Video Diffusion [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <!-- omit in toc -->
A curated list of recent diffusion models for video generation, editing, restoration, understanding, nerf, etc.

<p align="center">
<img src="https://makeavideo.studio/assets/overview.webp" width="240px"/>
<img src="https://makeavideo.studio/assets/A_teddy_bear_painting_a_portrait.webp" width="240px"/>    
</p>

<p align="center">
<img src="https://tuneavideo.github.io/assets/teaser.gif" width="480px"/>  
</p>

<p align="center">
<img src="https://github.com/ChenyangQiQi/FateZero/blob/main/docs/gif_results/17_car_posche_01_concat_result.gif?raw=true" width="240px"/>
<img src="https://github.com/ChenyangQiQi/FateZero/blob/main/docs/gif_results/3_sunflower_vangogh_conat_result.gif?raw=true" width="240px"/>    
</p>

<p align="center">
(Source: <a href="https://makeavideo.studio/">Make-A-Video</a>, <a href="https://tuneavideo.github.io/">Tune-A-Video</a>, and <a href="https://fate-zero-edit.github.io/">Fate/Zero</a>.)
</p>


## Table of Contents <!-- omit in toc -->
- [Open-source Toolboxes and Foundation Models](#open-source-toolboxes-and-foundation-models)
- [Evaluation Benchmarks and Metrics](#evaluation-benchmarks-and-metrics)
- [Commercial Product](#commercial-product)
- [Video Generation](#video-generation)
- [Efficient Video Generation](#efficient-video-generation)
- [Controllable Video Generation](#controllable-video-generation)
- [Character Customization](#character-customization)
- [Motion Customization](#motion-customization)
- [Long Video / Film Generation](#long-video--film-generation)
- [Video Generation with 3D/Physical Prior](#video-generation-with-3dphysical-prior)
- [Video Editing](#video-editing)
- [Human or Subject Motion](#human-or-subject-motion)
- [Video Enhancement and Restoration](#video-enhancement-and-restoration)
- [Audio Synthesis for Video](#audio-synthesis-for-video)
- [Talking Head Generation](#talking-head-generation)
- [Reinforcement Learning for Video Generation](#reinforcement-learning-for-video-generation)
- [Policy Learning](#policy-learning)
- [Virtual Try-On](#virtual-try-on)
- [3D](#3d)
- [4D](#4d)
- [Game Generation](#game-generation)
- [AI Safety](#ai-safety)
- [Rendering with Virtual Engine](#rendering-with-virtual-engine)
- [Open-World Model](#open-world-model)
- [Video Understanding](#video-understanding)
- [Healthcare and Biology](#healthcare-and-biology)
- [Other Applications](#other-applications)
- [Code-rendered Video Generation](#code-rendered-video-generation)

### Open-source Toolboxes and Foundation Models 

+ [Omni-Rewriter](https://github.com/WayneJin0918/Omni-Rewriter)  
  [![Star](https://img.shields.io/github/stars/WayneJin0918/Omni-Rewriter.svg?style=social&label=Star)](https://github.com/WayneJin0918/Omni-Rewriter)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://waynejin0918.github.io/Omni-Rewriter/)  
  Open agentic prompt-expansion harness for image/video generation (schema → validate → bounded repair → dialect render; H3/Seedance/Seedream/Qwen-Image). Expand ≠ generate.

+ [NanoI2V](https://github.com/Shubham2376G/NanoI2V)  
  [![Star](https://img.shields.io/github/stars/Shubham2376G/NanoI2V.svg?style=social&label=Star)](https://github.com/Shubham2376G/NanoI2V)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shubham2376g.github.io/NanoI2V/)  
  A step-by-step teaching series for building an Image-to-Video model from scratch in PyTorch, covering 3D VAEs, DiT, Flow Matching, RoPE, and conditioning.

+ [Helios: Real Real-Time Long Video Generation Model](https://arxiv.org/abs/2603.04379)  
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/Helios.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/Helios)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.04379)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/Helios-Page/)

+ [Waver: Wave Your Way to Lifelike Video Generation](https://github.com/FoundationVision/Waver)
  [![Star](https://img.shields.io/github/stars/FoundationVision/Waver.svg?style=social&label=Star)](https://github.com/FoundationVision/Waver)

+ [FastVideo: A unified inference and post-training framework for accelerated video generation](https://github.com/hao-ai-lab/FastVideo)
  [![Star](https://img.shields.io/github/stars/hao-ai-lab/FastVideo.svg?style=social&label=Star)](https://github.com/hao-ai-lab/FastVideo)

+ [LightX2V: Light Video Generation Inference Framework](https://github.com/ModelTC/lightx2v)  
  [![Star](https://img.shields.io/github/stars/ModelTC/lightx2v.svg?style=social&label=Star)](https://github.com/ModelTC/lightx2v)
  
+ [Wan-Video](https://github.com/Wan-Video/Wan2.1)  
  [![Star](https://img.shields.io/github/stars/Wan-Video/Wan2.1.svg?style=social&label=Star)](https://github.com/Wan-Video/Wan2.1)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wanxai.com/)

+ [SkyReels-V2](https://github.com/SkyworkAI/SkyReels-V2)  
  [![Star](https://img.shields.io/github/stars/SkyworkAI/SkyReels-V2.svg?style=social&label=Star)](https://github.com/SkyworkAI/SkyReels-V2)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.skyreels.ai/)
  
+ [DiffSynth-Studio](https://github.com/modelscope/DiffSynth-Studio)  
  [![Star](https://img.shields.io/github/stars/modelscope/DiffSynth-Studio.svg?style=social&label=Star)](https://github.com/modelscope/DiffSynth-Studio)

+ [Step-Video-T2V Technical Report: The Practice, Challenges, and Future of Video Foundation Model](https://arxiv.org/abs/2502.10248)  
  [![Star](https://img.shields.io/github/stars/stepfun-ai/Step-Video-T2V.svg?style=social&label=Star)](https://github.com/stepfun-ai/Step-Video-T2V)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.10248)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yuewen.cn/videos)

+ [Cosmos](https://github.com/NVIDIA/Cosmos)  
  [![Star](https://img.shields.io/github/stars/NVIDIA/Cosmos.svg?style=social&label=Star)](https://github.com/NVIDIA/Cosmos)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.03575)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/dir/cosmos1/)

+ [LTX-Video](https://github.com/Lightricks/LTX-Video)  
  [![Star](https://img.shields.io/github/stars/Lightricks/LTX-Video.svg?style=social&label=Star)](https://github.com/Lightricks/LTX-Video)

+ [HunyuanVideo: A Systematic Framework For Large Video Generative Models](https://arxiv.org/abs/2412.03603)  
  [![Star](https://img.shields.io/github/stars/Tencent/HunyuanVideo.svg?style=social&label=Star)](https://github.com/Tencent/HunyuanVideo)

+ [VideoTuna](https://videoverses.github.io/videotuna/)  
  [![Star](https://img.shields.io/github/stars/VideoVerses/VideoTuna.svg?style=social&label=Star)](https://github.com/VideoVerses/VideoTuna)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videoverses.github.io/videotuna/)

+ [Allegro](https://rhymes.ai/blog-details/allegro-advanced-video-generation-model)  
  [![Star](https://img.shields.io/github/stars/rhymes-ai/Allegro.svg?style=social&label=Star)](https://github.com/rhymes-ai/Allegro)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.15458)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://rhymes.ai/blog-details/allegro-advanced-video-generation-model)

+ [Mochi 1](https://www.genmo.ai/blog)  
  [![Star](https://img.shields.io/github/stars/genmoai/mochi.svg?style=social&label=Star)](https://github.com/genmoai/mochi)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.genmo.ai/blog)

+ [Movie Gen: A Cast of Media Foundation Models](https://ai.meta.com/research/publications/movie-gen-a-cast-of-media-foundation-models/)  
  [![Star](https://img.shields.io/github/stars/facebookresearch/MovieGenBench.svg?style=social&label=Star)](https://github.com/facebookresearch/MovieGenBench)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.13720)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.youtube.com/playlist?list=PL86eLlsPNfyi27GSizYjinpYxp7gEl5K8)

+ [Pyramidal Flow Matching for Efficient Video Generative Modeling](https://pyramid-flow.github.io/)  
  [![Star](https://img.shields.io/github/stars/jy0205/Pyramid-Flow.svg?style=social&label=Star)](https://github.com/jy0205/Pyramid-Flow)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pyramid-flow.github.io/)

+ [Open-Sora-Plan](https://github.com/PKU-YuanGroup/Open-Sora-Plan)  
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/Open-Sora-Plan.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/Open-Sora-Plan)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/PKU-YuanGroup/Open-Sora-Plan/blob/main/docs/Report-v1.0.0.md)

+ [Open-Sora](https://github.com/hpcaitech/Open-Sora)  
  [![Star](https://img.shields.io/github/stars/hpcaitech/Open-Sora.svg?style=social&label=Star)](https://github.com/hpcaitech/Open-Sora)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/hpcaitech/Open-Sora/blob/main/docs/zh_CN/README.md)

+ [Stable Video Diffusion](https://github.com/Stability-AI/generative-models)  
  [![Star](https://img.shields.io/github/stars/Stability-AI/generative-models.svg?style=social&label=Star)](https://github.com/Stability-AI/generative-models)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://stability.ai/news/stable-video-diffusion-open-ai-video-model) 

+ [Show-1](https://github.com/showlab/Show-1)  
  [![Star](https://img.shields.io/github/stars/showlab/Show-1.svg?style=social&label=Star)](https://github.com/showlab/Show-1)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/Show-1/) 

+ [Hotshot-XL (text-to-GIF)](https://github.com/hotshotco/Hotshot-XL)  
  [![Star](https://img.shields.io/github/stars/hotshotco/Hotshot-XL.svg?style=social&label=Star)](https://github.com/hotshotco/Hotshot-XL)

+ [zeroscope_v2](https://huggingface.co/cerspense/zeroscope_v2_576w)  
  [![Website](https://img.shields.io/badge/576w-9cf)](https://huggingface.co/cerspense/zeroscope_v2_576w) 
  [![Website](https://img.shields.io/badge/XL-9cf)](https://huggingface.co/cerspense/zeroscope_v2_XL) 

+ [I2VGen-XL (image-to-video / video-to-video)](https://modelscope.cn/models/damo/Image-to-Video/summary)  
  [![Website](https://img.shields.io/badge/Website(I2V)-9cf)](https://modelscope.cn/models/damo/Image-to-Video/summary) 
  [![Website](https://img.shields.io/badge/Website(V2V)-9cf)](https://modelscope.cn/models/damo/Video-to-Video/summary) 

+ [text-to-video-synthesis-colab](https://github.com/camenduru/text-to-video-synthesis-colab)  
  [![Star](https://img.shields.io/github/stars/camenduru/text-to-video-synthesis-colab.svg?style=social&label=Star)](https://github.com/camenduru/text-to-video-synthesis-colab)

+ [VideoCrafter: A Toolkit for Text-to-Video Generation and Editing](https://github.com/VideoCrafter/VideoCrafter)  
  [![Star](https://img.shields.io/github/stars/VideoCrafter/VideoCrafter.svg?style=social&label=Star)](https://github.com/VideoCrafter/VideoCrafter)

+ [ModelScope (Text-to-video synthesis)](https://modelscope.cn/models/damo/text-to-video-synthesis/summary)  
  [![Star](https://img.shields.io/github/stars/modelscope/modelscope.svg?style=social&label=Star)](https://github.com/modelscope/modelscope)

+ [Diffusers (Text-to-video synthesis)](https://huggingface.co/docs/diffusers/main/en/api/pipelines/text_to_video#texttovideo-synthesis)  
  [![Star](https://img.shields.io/github/stars/huggingface/diffusers.svg?style=social&label=Star)](https://github.com/huggingface/diffusers)

+ [Wunjo CE (Video Generation and Editing)](https://github.com/wladradchenko/wunjo.wladradchenko.ru)  
  [![Star](https://img.shields.io/github/stars/wladradchenko/wunjo.wladradchenko.ru.svg?style=social&label=Star)](https://github.com/wladradchenko/wunjo.wladradchenko.ru)
  
### Evaluation Benchmarks and Metrics

+ [LikePhys: Evaluating Intuitive Physics Understanding in Video Diffusion Models via Likelihood Preference](https://arxiv.org/abs/2510.11512) (Oct., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.11512)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yuanjianhao508.github.io/LikePhys/)

+ [Stable Cinemetrics: Structured Taxonomy and Evaluation for Professional Video Generation](https://arxiv.org/abs/2509.26555) (Sep., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2509.26555)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://stable-cinemetrics.github.io/)


+ [OpenS2V-Nexus: A Detailed Benchmark and Million-Scale Dataset for Subject-to-Video Generation](https://arxiv.org/abs/2505.20292) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/OpenS2V-Nexus.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/OpenS2V-Nexus)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.20292)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/OpenS2V-Nexus/)

+ [VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness](https://arxiv.org/abs/2503.21755) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/Vchitect/VBench.svg?style=social&label=Star)](https://github.com/Vchitect/VBench)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.21755)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/VBench-2.0-project/)

+ [Impossible Videos](https://arxiv.org/abs/2503.14378) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/showlab/Impossible-Videos.svg?style=social&label=Star)](https://github.com/showlab/Impossible-Videos)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.14378)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/Impossible-Videos/)
  
+ [MEt3R: Measuring Multi-View Consistency in Generated Images](https://geometric-rl.mpi-inf.mpg.de/met3r/static/assets/met3r.pdf) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/mohammadasim98/MEt3R.svg?style=social&label=Star)](https://github.com/mohammadasim98/MEt3R)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://geometric-rl.mpi-inf.mpg.de/met3r/static/assets/met3r.pdf)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://geometric-rl.mpi-inf.mpg.de/met3r/)

+ [Is Your World Simulator a Good Story Presenter? A Consecutive Events-Based Benchmark for Future Long Video Generation](https://arxiv.org/abs/2412.16211) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/ypwang61/StoryEval.svg?style=social&label=Star)](https://github.com/ypwang61/StoryEval/tree/main)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.16211)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ypwang61.github.io/project/StoryEval/)

+ [Evaluation Agent, Efficient and Promptable Evaluation Framework for Visual Generative Models](https://arxiv.org/abs/2412.09645) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/Vchitect/Evaluation-Agent.svg?style=social&label=Star)](https://github.com/Vchitect/Evaluation-Agent)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.09645)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/Evaluation-Agent-project/)

+ [Frechet Video Motion Distance: A Metric for Evaluating Motion Consistency in Videos](https://arxiv.org/pdf/2407.16124) (Jun., 2024)  
  [![Star](https://img.shields.io/github/stars/DSL-Lab/FVMD-frechet-video-motion-distance.svg?style=social&label=Star)](https://github.com/DSL-Lab/FVMD-frechet-video-motion-distance)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2407.16124)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pypi.org/project/fvmd/1.0.0/)
  
+ [T2V-CompBench: A Comprehensive Benchmark for Compositional Text-to-video Generation](https://arxiv.org/abs/2407.14505) (Jun., 2024)  
  [![Star](https://img.shields.io/github/stars/KaiyueSun98/T2V-CompBench.svg?style=social&label=Star)](https://github.com/KaiyueSun98/T2V-CompBench)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.14505)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://t2v-compbench.github.io/)
  
+ [ChronoMagic-Bench: A Benchmark for Metamorphic Evaluation of Text-to-Time-lapse Video Generation](https://arxiv.org/abs/2406.18522) (NeurIPS, 2024)  
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/ChronoMagic-Bench.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/ChronoMagic-Bench)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.18522)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/ChronoMagic-Bench/)

+ [PEEKABOO: Interactive Video Generation via Masked-Diffusion](https://arxiv.org/abs/2312.07509) (CVPR, 2024)  
  [![Star](https://img.shields.io/github/stars/microsoft/Peekaboo.svg?style=social&label=Star)](https://github.com/microsoft/Peekaboo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.07509)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jinga-lala.github.io/projects/Peekaboo/)

+ [T2VScore: Towards A Better Metric for Text-to-Video Generation](https://arxiv.org/abs/2401.07781) (Jan., 2024)      
  [![Star](https://img.shields.io/github/stars/showlab/T2VScore.svg?style=social&label=Star)](https://github.com/showlab/T2VScore)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.07781)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/T2VScore/)

+ [StoryBench: A Multifaceted Benchmark for Continuous Story Visualization](https://arxiv.org/abs/2308.11606) (NeurIPS, 2023)      
  [![Star](https://img.shields.io/github/stars/google/storybench.svg?style=social&label=Star)](https://github.com/google/storybench)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.11606)

+ [VBench: Comprehensive Benchmark Suite for Video Generative Models](https://arxiv.org/abs/2311.17982) (Nov., 2023)      
  [![Star](https://img.shields.io/github/stars/Vchitect/VBench.svg?style=social&label=Star)](https://github.com/Vchitect/VBench?tab=readme-ov-file)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.17982)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/VBench-project/) 

+ [FETV: A Benchmark for Fine-Grained Evaluation of Open-Domain Text-to-Video Generation](https://arxiv.org/abs/2311.01813) (Nov., 2023)      
  [![Star](https://img.shields.io/github/stars/llyx97/FETV.svg?style=social&label=Star)](https://github.com/llyx97/FETV)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.01813)

+ [EvalCrafter: Benchmarking and Evaluating Large Video Generation Models](https://arxiv.org/abs/2310.11440) (Oct., 2023)      
  [![Star](https://img.shields.io/github/stars/EvalCrafter/EvalCrafter.svg?style=social&label=Star)](https://github.com/EvalCrafter/EvalCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.11440)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://evalcrafter.github.io/) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/RaphaelLiu/EvalCrafter_T2V_Dataset) 

+ [Evaluation of Text-to-Video Generation Models: A Dynamics Perspective](https://arxiv.org/pdf/2407.01094) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/MingXiangL/DEVIL.svg?style=social&label=Star)](https://github.com/MingXiangL/DEVIL)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2407.01094)

+ [VidProM: A Million-scale Real Prompt-Gallery Dataset for Text-to-Video Diffusion Models](https://arxiv.org/abs/2403.06098) (May., 2024)      
  [![Star](https://img.shields.io/github/stars/WangWenhao0716/VidProM.svg?style=social&label=Star)](https://github.com/WangWenhao0716/VidProM)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.06098)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/WangWenhao0716/VidProM) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://vidprom.github.io/) 
  
+ [Panda-70M: Captioning 70M Videos with Multiple Cross-Modality Teachers](https://arxiv.org/abs/2402.19479) (CVPR, 2024)      
  [![Star](https://img.shields.io/github/stars/snap-research/Panda-70M.svg?style=social&label=Star)](https://github.com/snap-research/Panda-70M)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.19479)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/snap-research/Panda-70M) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://snap-research.github.io/Panda-70M/) 

+ [ReLight My NeRF: A Dataset for Novel View Synthesis and Relighting of Real World Objects](https://openaccess.thecvf.com/content/CVPR2023/html/Toschi_ReLight_My_NeRF_A_Dataset_for_Novel_View_Synthesis_and_CVPR_2023_paper.html) (CVPR, 2023)      
  [![Star](https://img.shields.io/github/stars/eyecan-ai/rene.svg?style=social&label=Star)](https://github.com/eyecan-ai/rene)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2023/html/Toschi_ReLight_My_NeRF_A_Dataset_for_Novel_View_Synthesis_and_CVPR_2023_paper.html)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://eyecan-ai.github.io/rene/) 

### Commercial Product

+ [Veo 2](https://sora.com/) ([Google](https://deepmind.google/technologies/veo/veo-2/))  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://deepmind.google/technologies/veo/veo-2/)

+ [Kling](https://klingai.com/?gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjMtrwX5RsW6xQvRSSg05fn1bA8wo9-AJiAKTIr-IkZnewbLXpCM44RoCkrsQAvD_BwE) ([KuaiShou](https://www.kuaishou.com/en))  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://klingai.com/?gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjMtrwX5RsW6xQvRSSg05fn1bA8wo9-AJiAKTIr-IkZnewbLXpCM44RoCkrsQAvD_BwE)

+ [Gen 3](https://app.runwayml.com/login) ([Runway](https://runwayml.com/))  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://app.runwayml.com/login)

+ [Dream Machine](https://lumalabs.ai/dream-machine) ([Luma AI](https://lumalabs.ai/dream-machine))  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lumalabs.ai/dream-machine)

+ [Sora](https://sora.com/) ([Open AI](https://openai.com/))  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sora.com/)

+ [Wunjo](https://wunjo.online/) ([WR](https://wladradchenko.ru/en#products))  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wunjo.online/)

+ [Shortodella](https://shortodella.com/)  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shortodella.com/)

+ [Seedream AI Studio](https://seedream4.video/)  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://seedream4.video/)

+ [Riffkit](https://riffkit.ai/)  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://riffkit.ai/)
  [![GitHub](https://img.shields.io/badge/GitHub-riffkit%2Fskill-181717?logo=github)](https://github.com/riffkit/skill)

+ [SEELE TV](https://seele.tv/)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://seele.tv/)
+ [GrokVideo Studio](https://grokvideogenerator.dev)  
  Independent AI text-to-video generator with a free trial (not affiliated with xAI or X).
+ [PromptImage](https://promptimage.cloud)  
  Freemium AI image and video studio with a prompt library and multi-model generation.


+ [pitchboom.io](https://pitchboom.io)  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pitchboom.io)

### Video Generation
+ [Helios: Real Real-Time Long Video Generation Model](https://arxiv.org/abs/2603.04379) (Mar., 2026)  
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/Helios.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/Helios)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.04379)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/Helios-Page/)

+ [MOVA: Towards Scalable and Synchronized Video-Audio Generation](https://arxiv.org/abs/2602.08794) (Feb., 2026)
  [![Star](https://img.shields.io/github/stars/OpenMOSS/MOVA.svg?style=social&label=Star)](https://github.com/OpenMOSS/MOVA)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.08794)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mosi.cn/models/mova)

+ [Causal Forcing: Autoregressive Diffusion Distillation Done Right for High-Quality Real-Time Interactive Video Generation](https://arxiv.org/abs/2602.02214) (Feb., 2026)  
  [![Star](https://img.shields.io/github/stars/thu-ml/Causal-Forcing.svg?style=social&label=Star)](https://github.com/thu-ml/Causal-Forcing)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.02214)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://thu-ml.github.io/CausalForcing.github.io/)

+ [VINO: A Unified Visual Generator with Interleaved OmniModal Context](https://arxiv.org/abs/2601.02358) (Jan., 2026)  
  [![Star](https://img.shields.io/github/stars/SOTAMak1r/VINO-code.svg?style=social&label=Star)](https://github.com/SOTAMak1r/VINO-code)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2601.02358)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sotamak1r.github.io/VINO-web/)
  
+ [UltraViCo: Breaking Extrapolation Limits in Video Diffusion Transformers](https://arxiv.org/abs/2511.20123) (Oct., 2025)  
  [![Star](https://img.shields.io/github/stars/thu-ml/RIFLEx.svg?style=social&label=Star)](https://github.com/thu-ml/RIFLEx)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.20123)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://thu-ml.github.io/UltraViCo.github.io/)

+ [VISTA: A Test-Time Self-Improving Video Generation Agent](https://arxiv.org/abs/2510.15831) (Oct., 2025 | CVPR 2026)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.15831)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://g-vista.github.io/)
  
+ [UniVideo: Unified Understanding, Generation, and Editing for Videos](https://arxiv.org/abs/2510.08377) (Oct., 2025)  
  [![Star](https://img.shields.io/github/stars/KlingAIResearch/UniVideo.svg?style=social&label=Star)](https://github.com/KlingAIResearch/UniVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.08377)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://congwei1230.github.io/UniVideo/)

+ [PUSA V1.0: Surpassing Wan-I2V with $500 Training Cost by Vectorized Timestep Adaptation](https://arxiv.org/abs/2507.16116) (July., 2025)
  [![Star](https://img.shields.io/github/stars/Yaofang-Liu/Pusa-VidGen.svg?style=social&label=Star)](https://github.com/Yaofang-Liu/Pusa-VidGen)  
  [![PDF](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2507.16116)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yaofang-liu.github.io/Pusa_Web/)


+ [LayerFlow : A Unified Model for Layer-aware Video Generation](https://arxiv.org/abs/2506.04228) (May., 2025)
  [![Star](https://img.shields.io/github/stars/dvlab-research/Jenga.svg?style=social&label=Star)](https://github.com/SihuiJi/LayerFlow)  
  [![PDF](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.04228)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sihuiji.github.io/LayerFlow-Page/)


+ [InfLVG: Reinforce Inference-Time Consistent Long Video Generation with GRPO](https://arxiv.org/abs/2505.17574) (May., 2025)
  [![Star](https://img.shields.io/github/stars/MAPLE-AIGC/InfLVG.svg?style=social&label=Star)](https://github.com/MAPLE-AIGC/InfLVG)  
  [![PDF](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.17574)
  
+ [Training-Free Efficient Video Generation via Dynamic Token Carving](https://arxiv.org/abs/2505.16864) (May., 2025)
  [![Star](https://img.shields.io/github/stars/dvlab-research/Jenga.svg?style=social&label=Star)](https://github.com/dvlab-research/Jenga)  
  [![PDF](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.16864)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://julianjuaner.github.io/projects/jenga/)



+ [ReVision: High-Quality, Low-Cost Video Generation with Explicit 3D Physics Modeling for Complex Motion and Interaction](https://arxiv.org/abs/2504.21855) (Apr., 2025)  
  [![PDF](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.21855)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://revision-video.github.io/)


+ [Turbo2K: Towards Ultra-Efficient and High-Quality 2K Video Synthesis](https://jingjingrenabc.github.io/turbo2k/) (Apr., 2025)  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jingjingrenabc.github.io/turbo2k/)


+ [MAGI-1: Autoregressive Video Generation at Scale](https://static.magi.world/static/files/MAGI_1.pdf) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/SandAI-org/Magi-1.svg?style=social&label=Star)](https://github.com/SandAI-org/Magi-1)
  [![PDF](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://static.magi.world/static/files/MAGI_1.pdf)
  [![Website](https://img.shields.io/badge/Website-9cf)](SandAI-org/Magi-1)

+ [SphereDiff: Tuning-free Omnidirectional Panoramic Image and Video Generation via Spherical Latent Representation](https://arxiv.org/abs/2504.14396) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/pmh9960/SphereDiff.svg?style=social&label=Star)](https://github.com/pmh9960/SphereDiff)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.14396)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pmh9960.github.io/research/SphereDiff/)
  
+ [Packing Input Frame Context in Next-Frame Prediction Models for Video Generation](https://lllyasviel.github.io/frame_pack_gitpage/pack.pdf) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/lllyasviel/FramePack.svg?style=social&label=Star)](https://github.com/lllyasviel/FramePack)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.08685)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lllyasviel.github.io/frame_pack_gitpage/)
  
+ [SkyReels-V2: Infinite-length Film Generative Model](https://arxiv.org/abs/2504.13074) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/SkyworkAI/SkyReels-V2.svg?style=social&label=Star)](https://github.com/SkyworkAI/SkyReels-V2)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.13074)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.skyreels.ai/home?utm_campaign=github_SkyReels_V2)

  
+ [Seaweed-7B: Cost-Effective Training of Video Generation Foundation Model](https://seaweed.video/seaweed.pdf) (Apr., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.08685)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://seaweed.video/)

+ [Aligning Text-to-Video Generation Models with Prompt Optimization](https://arxiv.org/abs/2503.20491) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/thu-coai/VPO.svg?style=social&label=Star)](https://github.com/thu-coai/VPO/tree/main)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.20491)

+ [Target-Aware Video Diffusion Models](https://arxiv.org/abs/2503.18950) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/taeksuu/tavid.svg?style=social&label=Star)](https://github.com/taeksuu/tavid)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.18950)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://taeksuu.github.io/tavid/)


+ [MagicComp: Training-free Dual-Phase Refinement for Compositional Video Generation](https://arxiv.org/abs/2503.14428) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/Hong-yu-Zhang/MagicComp.svg?style=social&label=Star)](https://github.com/Hong-yu-Zhang/MagicComp)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2503.14428)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hong-yu-zhang.github.io/MagicComp-Page/)
  
+ [Video-T1: Test-Time Scaling for Video Generation](https://arxiv.org/abs/2503.18942) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/liuff19/Video-T1.svg?style=social&label=Star)](https://github.com/liuff19/Video-T1)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2503.18942)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://liuff19.github.io/Video-T1/)

+ [Temporal Regularization Makes Your Video Generator Stronger](https://arxiv.org/abs/2503.15417) (Mar., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2503.15417)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://haroldchen19.github.io/FluxFlow/)

  
+ [VACE: All-in-One Video Creation and Editing](https://arxiv.org/pdf/2503.07598) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/ali-vilab/VACE.svg?style=social&label=Star)](https://github.com/ali-vilab/VACE)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2503.07598)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ali-vilab.github.io/VACE-Page/)


+ [RIFLEx: A Free Lunch for Length Extrapolation in Video Diffusion Transformers](https://arxiv.org/abs/2502.15894) (Feb., 2025)  
  [![Star](https://img.shields.io/github/stars/thu-ml/RIFLEx.svg?style=social&label=Star)](https://github.com/thu-ml/RIFLEx)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.15894)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://riflex-video.github.io/)

+ [DLFR-VAE: Dynamic Latent Frame Rate VAE for Video Generation](https://arxiv.org/abs/2502.11897) (Feb., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.11897)

+ [Magic 1-For-1: Generating One Minute Video Clips within One Minute](https://arxiv.org/abs/2502.07701) (Feb., 2025)  
  [![Star](https://img.shields.io/github/stars/DA-Group-PKU/Magic-1-For-1.svg?style=social&label=Star)](https://github.com/DA-Group-PKU/Magic-1-For-1)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.07701)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://magic-141.github.io/Magic-141/)

+ [Lumina-Video: Efficient and Flexible Video Generation with Multi-scale Next-DiT](https://arxiv.org/abs/2502.06782) (Feb., 2025)  
  [![Star](https://img.shields.io/github/stars/Alpha-VLLM/Lumina-Video.svg?style=social&label=Star)](https://github.com/Alpha-VLLM/Lumina-Video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.06782)

+ [Inference-Time Text-to-Video Alignment with Diffusion Latent Beam Search](https://arxiv.org/abs/2501.19252) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/shim0114/T2V-Diffusion-Search.svg?style=social&label=Star)](https://github.com/shim0114/T2V-Diffusion-Search)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.19252)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sites.google.com/view/t2v-dlbs)

+ [RepVideo: Rethinking Cross-Layer Representation for Video Generation](https://arxiv.org/pdf/2501.08994) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/Vchitect/RepVideo.svg?style=social&label=Star)](https://github.com/Vchitect/RepVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.08994)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/RepVid-Webpage/)

+ [Large Motion Video Autoencoding with Cross-modal Video VAE](https://arxiv.org/abs/2412.17805) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.17805)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/VideoVerses/VideoVAEPlus)

+ [MotiF: Making Text Count in Image Animation with Motion Focal Loss](https://arxiv.org/abs/2412.16153) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.16153)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wang-sj16.github.io/motif/#BibTeX)

+ [VideoDPO: Omni-Preference Alignment for Video Diffusion Generation](https://arxiv.org/pdf/2412.14167) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.14167)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videodpo.github.io/)

+ [Autoregressive Video Generation without Vector Quantization](https://arxiv.org/abs/2412.14169) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/baaivision/NOVA.svg?style=social&label=Star)](https://github.com/baaivision/NOVA)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.14169)

+ [AniDoc: Animation Creation Made Easier](https://arxiv.org/pdf/2412.14173) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/yihao-meng/AniDoc.svg?style=social&label=Star)](https://github.com/yihao-meng/AniDoc)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.14173)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yihao-meng.github.io/AniDoc_demo/)

+ [Video Diffusion Transformers are In-Context Learners](https://arxiv.org/abs/2412.10783) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/feizc/Video-In-Context.svg?style=social&label=Star)](https://github.com/feizc/Video-In-Context)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.10783)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://huggingface.co/feizhengcong/Video-In-Context)

+ [Track4Gen: Teaching Video Diffusion Models to Track Points Improves Video Generation](https://arxiv.org/abs/2412.06016) (Dec., 2024 | CVPR 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.06016)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hyeonho99.github.io/track4gen/)

+ [Instructional Video Generation](https://arxiv.org/abs/2412.04189) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.04189)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://excitedbutter.github.io/Instructional-Video-Generation/)

+ [Mimir: Improving Video Diffusion Models for Precise Text Understanding](https://arxiv.org/abs/2412.03085) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.03085)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lucaria-academy.github.io/Mimir/)

+ [Spatiotemporal Skip Guidance for Enhanced Video Diffusion Sampling](https://arxiv.org/abs/2411.18664) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/junhahyung/STGuidance.svg?style=social&label=Star)](https://github.com/junhahyung/STGuidance)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.18664)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://junhahyung.github.io/STGuidance)

+ [Identity-Preserving Text-to-Video Generation by Frequency Decomposition](https://arxiv.org/abs/2411.17440) (Nov., 2024)      
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/ConsisID.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/ConsisID)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.17440)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/ConsisID/) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/BestWishYsh/ConsisID-preview-Data)

+ [WF-VAE: Enhancing Video VAE by Wavelet-Driven Energy Flow for Latent Video Diffusion Model](https://arxiv.org/abs/2411.17459) (Nov., 2024)  
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/WF-VAE.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/WF-VAE)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.17459)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-repair.github.io/)

+ [VideoRepair: Improving Text-to-Video Generation via Misalignment Evaluation and Localized Refinement](https://arxiv.org/pdf/2411.15115) (Nov., 2024)  
  [![Star](https://img.shields.io/github/stars/daeunni/VideoRepair.svg?style=social&label=Star)](https://github.com/daeunni/VideoRepair)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.15115)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-repair.github.io/)

+ [Enhancing Motion in Text-to-Video Generation with Decomposed Encoding and Conditioning](https://arxiv.org/abs/2410.24219) (Oct., 2024 | NeurIPS 2024)  
  [![Star](https://img.shields.io/github/stars/PR-Ryan/DEMO.svg?style=social&label=Star)](https://github.com/PR-Ryan/DEMO)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.24219)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pr-ryan.github.io/DEMO-project/)

+ [Improved Video VAE for Latent Video Diffusion Model](https://arxiv.org/abs/2411.06449) (Oct., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.06449)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wpy1999.github.io/IV-VAE/)

+ [VideoAgent: Self-Improving Video Generation](https://arxiv.org/abs/2410.10076)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.10076)

+ [T2V-Turbo-v2: Enhancing Video Generation Model Post-Training Through Data, Reward, and Conditional Guidance Design](https://arxiv.org/pdf/2410.05677) (Oct, 2024)      
  [![Star](https://img.shields.io/github/stars/Ji4chenLi/t2v-turbo.svg?style=social&label=Star)](https://github.com/Ji4chenLi/t2v-turbo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.05677)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://t2v-turbo-v2.github.io/)

+ [Progressive Autoregressive Video Diffusion Models](https://arxiv.org/abs/2410.08151) (Oct., 2024)      
  [![Star](https://img.shields.io/github/stars/desaixie/pa_vdm.svg?style=social&label=Star)](https://github.com/desaixie/pa_vdm)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.08151)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://desaixie.github.io/pa-vdm/)

+ [Real-Time Video Generation with Pyramid Attention Broadcast](https://arxiv.org/abs/2408.12588) (Aug., 2024)      
  [![Star](https://img.shields.io/github/stars/NUS-HPC-AI-Lab/VideoSys.svg?style=social&label=Star)](https://github.com/NUS-HPC-AI-Lab/VideoSys)
  [![paper](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.12588)

+ [xGen-VideoSyn-1: High-fidelity Text-to-Video Synthesis with Compressed Representations](https://arxiv.org/abs/2408.12590) (Aug., 2024)      
  [![Star](https://img.shields.io/github/stars/SalesforceAIResearch/xgen-videosyn.svg?style=social&label=Star)](https://github.com/SalesforceAIResearch/xgen-videosyn)
  [![paper](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.12590)

+ [CogVideoX: Text-to-video generation](https://github.com/THUDM/CogVideo/blob/main/resources/CogVideoX.pdf) (Aug., 2024)      
  [![Star](https://img.shields.io/github/stars/THUDM/CogVideo.svg?style=social&label=Star)](https://github.com/THUDM/CogVideo)
  [![paper](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://github.com/THUDM/CogVideo/blob/main/resources/CogVideoX.pdf)

+ [FreeLong: Training-Free Long Video Generation with SpectralBlend Temporal Attention](https://arxiv.org/abs/2407.19918) (Aug., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.19918)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yulu.net.cn/freelong/)
  
+ [VEnhancer: Generative Space-Time Enhancement for Video Generation](https://arxiv.org/abs/2407.07667) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/Vchitect/VEnhancer.svg?style=social&label=Star)](https://github.com/Vchitect/VEnhancer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.07667)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/VEnhancer-project/)

+ [Live2Diff: Live Stream Translation via Uni-directional Attention in Video Diffusion Models](https://arxiv.org/abs/2407.08701) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/open-mmlab/Live2Diff.svg?style=social&label=Star)](https://github.com/open-mmlab/Live2Diff)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.08701)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://live2diff.github.io/)

+ [Video Diffusion Alignment via Reward Gradient](https://arxiv.org/abs/2407.08737) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/mihirp1998/VADER.svg?style=social&label=Star)](https://github.com/mihirp1998/VADER)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.08737)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vader-vid.github.io/)

+ [ExVideo: Extending Video Diffusion Models via Parameter-Efficient Post-Tuning](https://arxiv.org/abs/2406.14130) (Jun., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.14130)

+ [MimicMotion: High-Quality Human Motion Video Generation with Confidence-aware Pose Guidance](https://arxiv.org/abs/2406.19680) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/Tencent/MimicMotion.svg?style=social&label=Star)](https://github.com/Tencent/MimicMotion)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.19680)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tencent.github.io/MimicMotion/)

+ [Identifying and Solving Conditional Image Leakage in Image-to-Video Diffusion Model](https://arxiv.org/abs/2406.15735) (Jun., 2024)   
  [![Star](https://img.shields.io/github/stars/thu-ml/cond-image-leakage.svg?style=social&label=Star)](https://github.com/thu-ml/cond-image-leakage/tree/main?tab=readme-ov-file)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.15735)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://cond-image-leak.github.io/)

+ [Video-Infinity: Distributed Long Video Generation](https://arxiv.org/abs/2406.16260) (Jun., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.16260)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-infinity.tanzhenxiong.com/)

+ [MotionBooth: Motion-Aware Customized Text-to-Video Generation](https://arxiv.org/abs/2406.17758) (Jun., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.17758)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jianzongwu.github.io/projects/motionbooth/)

+ [Text-Animator: Controllable Visual Text Video Generation](https://arxiv.org/abs/2406.17777) (Jun., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.17777)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://laulampaul.github.io/text-animator.html)

+ [UniAnimate: Taming Unified Video Diffusion Models for Consistent Human Image Animation](https://arxiv.org/abs/2406.01188) (Jun., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.01188)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://unianimate.github.io/)

+ [T2V-Turbo: Breaking the Quality Bottleneck of Video Consistency Model with Mixed Reward Feedback](https://arxiv.org/abs/2405.18750) (May, 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.18750)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://t2v-turbo.github.io/)

+ [Collaborative Video Diffusion: Consistent Multi-video Generation with Camera Control](https://arxiv.org/abs/2405.17414) (May, 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.17414)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://collaborativevideodiffusion.github.io/)

+ [Human4DiT: Free-view Human Video Generation with 4D Diffusion Transformer](https://arxiv.org/abs/2405.17405) (May, 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.17405)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://human4dit.github.io/)

+ [FIFO-Diffusion: Generating Infinite Videos from Text without Training](https://arxiv.org/abs/2405.11473) (May, 2024)      
  [![Star](https://img.shields.io/github/stars/jjihwan/FIFO-Diffusion_public.svg?style=social&label=Star)](https://github.com/jjihwan/FIFO-Diffusion_public)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.11473)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jjihwan.github.io/projects/FIFO-Diffusion)

+ [Vidu: a Highly Consistent, Dynamic and Skilled Text-to-Video Generator with Diffusion Models](https://arxiv.org/abs/2405.04233) (May, 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.04233)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.shengshu-ai.com/vidu)

+ [Lumina-T2X: Transforming Text into Any Modality, Resolution, and Duration via Flow-based Large Diffusion Transformers](https://arxiv.org/abs/2405.05945) (May, 2024)      
  [![Star](https://img.shields.io/github/stars/Alpha-VLLM/Lumina-T2X.svg?style=social&label=Star)](https://github.com/Alpha-VLLM/Lumina-T2X)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.05945)

+ [StoryDiffusion: Consistent Self-Attention for Long-Range Image and Video Generation](https://arxiv.org/abs/2405.01434) (May, 2024)      
  [![Star](https://img.shields.io/github/stars/HVision-NKU/StoryDiffusion.svg?style=social&label=Star)](https://github.com/HVision-NKU/StoryDiffusion)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.01434)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://storydiffusion.github.io/)

+ [TI2V-Zero: Zero-Shot Image Conditioning for Text-to-Video Diffusion Models](https://arxiv.org/abs/2404.16306) (CVPR 2024)      
  [![Star](https://img.shields.io/github/stars/merlresearch/TI2V-Zero.svg?style=social&label=Star)](https://github.com/merlresearch/TI2V-Zero)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.16306)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://merl.com/research/highlights/TI2V-Zero)

+ [ID-Animator: Zero-Shot Identity-Preserving Human Video Generation](https://arxiv.org/abs/2404.15275) (Apr., 2024)  
  [![Star](https://img.shields.io/github/stars/ID-Animator/ID-Animator.svg?style=social&label=Star)](https://github.com/ID-Animator/ID-Animator) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.15275)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://id-animator.github.io/)

+ [AnimateZoo: Zero-shot Video Generation of Cross-Species Animation via Subject Alignment](https://arxiv.org/abs/2404.04946) (Apr., 2024)  
  [![Star](https://img.shields.io/github/stars/JustinXu0/AnimateZoo.svg?style=social&label=Star)](https://github.com/JustinXu0/AnimateZoo) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.04946)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://justinxu0.github.io/AnimateZoo/)

+ [MagicTime: Time-lapse Video Generation Models as Metamorphic Simulators](https://arxiv.org/abs/2404.05014) (Apr., 2024)      
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/MagicTime.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/MagicTime)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.05014)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/MagicTime/) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/BestWishYsh/ChronoMagic) 

+ [TRIP: Temporal Residual Learning with Image Noise Prior for Image-to-Video Diffusion Models](https://arxiv.org/abs/2403.17005) (CVPR 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.17005)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://trip-i2v.github.io/TRIP/)

+ [VSTAR: Generative Temporal Nursing for Longer Dynamic Video Synthesis](https://arxiv.org/abs/2403.13501) (Mar., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.13501)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yumengli007.github.io/VSTAR/)

+ [StreamingT2V: Consistent, Dynamic, and Extendable Long Video Generation from Text](https://arxiv.org/abs/2403.14773) (Mar., 2024)  
  [![Star](https://img.shields.io/github/stars/Picsart-AI-Research/StreamingT2V.svg?style=social&label=Star)](https://github.com/Picsart-AI-Research/StreamingT2V)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.14773)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://streamingt2v.github.io/)

+ [Intention-driven Ego-to-Exo Video Generation](https://arxiv.org/abs/2403.09194) (Mar., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.09194)

+ [VideoElevator: Elevating Video Generation Quality with Versatile Text-to-Image Diffusion Models](https://arxiv.org/abs/2403.05438) (Mar., 2024)  
  [![Star](https://img.shields.io/github/stars/YBYBZhang/VideoElevator.svg?style=social&label=Star)](https://github.com/YBYBZhang/VideoElevator)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.05438)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videoelevator.github.io/)

+ [Snap Video: Scaled Spatiotemporal Transformers for Text-to-Video Synthesis](https://arxiv.org/abs/2402.14797) (Feb., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.14797)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://snap-research.github.io/snapvideo/)

+ [One-Shot Motion Customization of Text-to-Video Diffusion Models](https://arxiv.org/abs/2402.14780) (Feb., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.14780)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://anonymous-314.github.io/)

+ [Magic-Me: Identity-Specific Video Customized Diffusion](https://arxiv.org/abs/2402.09368) (Feb., 2024)  
  [![Star](https://img.shields.io/github/stars/Zhen-Dong/Magic-Me.svg?style=social&label=Star)](https://github.com/Zhen-Dong/Magic-Me)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.09368)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://magic-me-webpage.github.io/)

+ [ConsistI2V: Enhancing Visual Consistency for Image-to-Video Generation](https://arxiv.org/abs/2402.04324) (Feb., 2024)  
  [![Star](https://img.shields.io/github/stars/TIGER-AI-Lab/ConsistI2V.svg?style=social&label=Star)](https://github.com/TIGER-AI-Lab/ConsistI2V)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.04324)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tiger-ai-lab.github.io/ConsistI2V/)

+ [Direct-a-Video: Customized Video Generation with User-Directed Camera Movement and Object Motion](https://arxiv.org/abs/2402.03162) (Feb., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.03162)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://direct-a-video.github.io/)

+ [Video-LaVIT: Unified Video-Language Pre-training with Decoupled Visual-Motional Tokenization](https://arxiv.org/abs/2402.03161) (Feb., 2024)  
  [![Star](https://img.shields.io/github/stars/jy0205/LaVIT.svg?style=social&label=Star)](https://github.com/jy0205/LaVIT)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.03161)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-lavit.github.io/)

+ [Boximator: Generating Rich and Controllable Motions for Video Synthesis](https://arxiv.org/abs/2402.01566) (Feb., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.01566)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://boximator.github.io/)

+ [Lumiere: A Space-Time Diffusion Model for Video Generation](https://arxiv.org/abs/2401.12945) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.12945)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lumiere-video.github.io/)

+ [ActAnywhere: Subject-Aware Video Background Generation](https://arxiv.org/abs/2401.10822) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.10822)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://actanywhere.github.io/)

+ [WorldDreamer: Towards General World Models for Video Generation via Predicting Masked Tokens](https://arxiv.org/abs/2401.09985) (Jan., 2024)  
  [![Star](https://img.shields.io/github/stars/JeffWang987/WorldDreamer.svg?style=social&label=Star)](https://github.com/JeffWang987/WorldDreamer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.09985)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://world-dreamer.github.io/)

+ [CustomVideo: Customizing Text-to-Video Generation with Multiple Subjects](https://arxiv.org/abs/2401.09962) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.09962)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kyfafyd.wang/projects/customvideo/)

+ [UniVG: Towards UNIfied-modal Video Generation](https://arxiv.org/abs/2401.09084) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.09084)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://univg-baidu.github.io/)

+ [VideoCrafter2: Overcoming Data Limitations for High-Quality Video Diffusion Models](https://arxiv.org/abs/2401.09047) (Jan., 2024)  
  [![Star](https://img.shields.io/github/stars/AILab-CVC/VideoCrafter.svg?style=social&label=Star)](https://github.com/AILab-CVC/VideoCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.09047)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ailab-cvc.github.io/videocrafter2/)

+ [360DVD: Controllable Panorama Video Generation with 360-Degree Video Diffusion Model](https://arxiv.org/abs/2401.06578) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.06578)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://akaneqwq.github.io/360DVD/)

+ [RAVEN: Rethinking Adversarial Video Generation with Efficient Tri-plane Networks](https://arxiv.org/abs/2401.06035) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.06035)

+ [Latte: Latent Diffusion Transformer for Video Generation](https://arxiv.org/abs/2401.03048) (Jan., 2024)  
  [![Star](https://img.shields.io/github/stars/Vchitect/Latte.svg?style=social&label=Star)](https://github.com/Vchitect/Latte)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.03048)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://maxin-cn.github.io/latte_project/)

+ [MagicVideo-V2: Multi-Stage High-Aesthetic Video Generation](https://arxiv.org/abs/2401.04468) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.04468)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://magicvideov2.github.io/)

+ [VideoDrafter: Content-Consistent Multi-Scene Video Generation with LLM](https://arxiv.org/abs/2401.01256) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.01256)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videodrafter.github.io/)

+ [FlashVideo: A Framework for Swift Inference in Text-to-Video Generation](https://arxiv.org/abs/2401.00869) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.00869)

+ [I2V-Adapter: A General Image-to-Video Adapter for Video Diffusion Models](https://arxiv.org/abs/2312.16693) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.16693)

+ [A Recipe for Scaling up Text-to-Video Generation with Text-free Videos](https://arxiv.org/abs/2312.15770) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.15770)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tf-t2v.github.io/)

+ [PIA: Your Personalized Image Animator via Plug-and-Play Modules in Text-to-Image Models](https://arxiv.org/abs/2312.13964) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/open-mmlab/PIA.svg?style=social&label=Star)](https://github.com/open-mmlab/PIA)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.13964)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pi-animator.github.io/)

+ [VideoPoet: A Large Language Model for Zero-Shot Video Generation](https://arxiv.org/abs/2312.14125) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.14125)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sites.research.google/videopoet/)

+ [InstructVideo: Instructing Video Diffusion Models with Human Feedback](https://arxiv.org/abs/2312.12490) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/damo-vilab/i2vgen-xl.svg?style=social&label=Star)](https://github.com/damo-vilab/i2vgen-xl/blob/main/doc/InstructVideo.md)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.12490)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://instructvideo.github.io/)

+ [VideoLCM: Video Latent Consistency Model](https://arxiv.org/abs/2312.09109) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.09109)

+ [PEEKABOO: Interactive Video Generation via Masked-Diffusion](https://arxiv.org/abs/2312.07509) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/microsoft/Peekaboo.svg?style=social&label=Star)](https://github.com/microsoft/Peekaboo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.07509)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jinga-lala.github.io/projects/Peekaboo/)

+ [FreeInit: Bridging Initialization Gap in Video Diffusion Models](https://arxiv.org/abs/2312.07537) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/TianxingWu/FreeInit.svg?style=social&label=Star)](https://github.com/TianxingWu/FreeInit)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.07537)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tianxingwu.github.io/pages/FreeInit/)

+ [Photorealistic Video Generation with Diffusion Models](https://arxiv.org/abs/2312.06662) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.06662)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://walt-video-diffusion.github.io/)

+ [Upscale-A-Video: Temporal-Consistent Diffusion Model for Real-World Video Super-Resolution](https://arxiv.org/abs/2312.06640) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/sczhou/Upscale-A-Video.svg?style=social&label=Star)](https://github.com/sczhou/Upscale-A-Video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.06640)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shangchenzhou.com/projects/upscale-a-video/)

+ [DreaMoving: A Human Video Generation Framework based on Diffusion Models](https://arxiv.org/abs/2312.05107) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/dreamoving/dreamoving-project.svg?style=social&label=Star)](https://github.com/dreamoving/dreamoving-project)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.05107)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dreamoving.github.io/dreamoving/)

+ [MotionCrafter: One-Shot Motion Customization of Diffusion Models](https://arxiv.org/abs/2312.05288) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/zyxElsa/MotionCrafter.svg?style=social&label=Star)](https://github.com/zyxElsa/MotionCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.05288)

+ [AnimateZero: Video Diffusion Models are Zero-Shot Image Animators](https://arxiv.org/abs/2312.03793) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/vvictoryuki/AnimateZero.svg?style=social&label=Star)](https://github.com/vvictoryuki/AnimateZero)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.03793)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vvictoryuki.github.io/animatezero.github.io/)

+ [AVID: Any-Length Video Inpainting with Diffusion Model](https://arxiv.org/abs/2312.03816) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/zhang-zx/AVID.svg?style=social&label=Star)](https://github.com/zhang-zx/AVID)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.03816)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://zhang-zx.github.io/AVID/)

+ [MTVG : Multi-text Video Generation with Text-to-Video Models](https://arxiv.org/abs/2312.04086) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04086)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kuai-lab.github.io/mtvg-page)

+ [DreamVideo: Composing Your Dream Videos with Customized Subject and Motion](https://arxiv.org/abs/2312.04433) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/damo-vilab/i2vgen-xl.svg?style=social&label=Star)](https://github.com/damo-vilab/i2vgen-xl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04433)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dreamvideo-t2v.github.io/)

+ [Hierarchical Spatio-temporal Decoupling for Text-to-Video Generation](https://arxiv.org/abs/2312.04483) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/damo-vilab/i2vgen-xl.svg?style=social&label=Star)](https://github.com/damo-vilab/i2vgen-xl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04483)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://higen-t2v.github.io/)

+ [GenTron: Delving Deep into Diffusion Transformers for Image and Video Generation](https://arxiv.org/abs/2312.04557) (CVPR 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04557)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.shoufachen.com/gentron_website/)

+ [GenDeF: Learning Generative Deformation Field for Video Generation](https://arxiv.org/abs/2312.04561) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/aim-uofa/GenDeF.svg?style=social&label=Star)](https://github.com/aim-uofa/GenDeF)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04561)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://aim-uofa.github.io/GenDeF/)

+ [F3-Pruning: A Training-Free and Generalized Pruning Strategy towards Faster and Finer Text-to-Video Synthesis](https://arxiv.org/abs/2312.03459) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.03459)

+ [DreamVideo: High-Fidelity Image-to-Video Generation with Image Retention and Text Guidance](https://arxiv.org/abs/2312.03018) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/anonymous0769/DreamVideo.svg?style=social&label=Star)](https://github.com/anonymous0769/DreamVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.03018)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://anonymous0769.github.io/DreamVideo/)

+ [LivePhoto: Real Image Animation with Text-guided Motion Control](https://arxiv.org/abs/2312.02928) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/XavierCHEN34/LivePhoto.svg?style=social&label=Star)](https://github.com/XavierCHEN34/LivePhoto)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.02928)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://xavierchen34.github.io/LivePhoto-Page/)

+ [Fine-grained Controllable Video Generation via Object Appearance and Context](https://arxiv.org/abs/2312.02919) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.02919)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hhsinping.github.io/factor/)

+ [VideoBooth: Diffusion-based Video Generation with Image Prompts](https://arxiv.org/abs/2312.00777) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/Vchitect/VideoBooth.svg?style=social&label=Star)](https://github.com/Vchitect/VideoBooth)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.00777)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/VideoBooth-project/)

+ [StyleCrafter: Enhancing Stylized Text-to-Video Generation with Style Adapter](https://arxiv.org/abs/2312.00330) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/GongyeLiu/StyleCrafter.svg?style=social&label=Star)](https://github.com/GongyeLiu/StyleCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.00330)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://gongyeliu.github.io/StyleCrafter.github.io/)

+ [MicroCinema: A Divide-and-Conquer Approach for Text-to-Video Generation](https://arxiv.org/abs/2311.18829) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.18829)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wangyanhui666.github.io/MicroCinema.github.io/)

+ [ART•V: Auto-Regressive Text-to-Video Generation with Diffusion Models](https://arxiv.org/abs/2311.18834) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/WarranWeng/ART.V.svg?style=social&label=Star)](https://github.com/WarranWeng/ART.V)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.18834)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://warranweng.github.io/art.v/)

+ [Smooth Video Synthesis with Noise Constraints on Diffusion Models for One-shot Video Tuning](https://arxiv.org/abs/2311.17536) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/SPengLiang/SmoothVideo.svg?style=social&label=Star)](https://github.com/SPengLiang/SmoothVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.17536)

+ [VideoAssembler: Identity-Consistent Video Generation with Reference Entities using Diffusion Model](https://arxiv.org/abs/2311.17338) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.17338)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videoassembler.github.io/videoassembler/)

+ [MotionZero:Exploiting Motion Priors for Zero-shot Text-to-Video Generation](https://arxiv.org/abs/2311.16635) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.16635)

+ [MagicAnimate: Temporally Consistent Human Image Animation using Diffusion Model](https://arxiv.org/abs/2311.16498) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/magic-research/magic-animate.svg?style=social&label=Star)](https://github.com/magic-research/magic-animate)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.16498)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/magicanimate)

+ [FlowZero: Zero-Shot Text-to-Video Synthesis with LLM-Driven Dynamic Scene Syntax](https://arxiv.org/abs/2311.15813) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/aniki-ly/FlowZero.svg?style=social&label=Star)](https://github.com/aniki-ly/FlowZero)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.15813)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://flowzero-video.github.io/)

+ [Sketch Video Synthesis](https://arxiv.org/abs/2311.15306) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/yudianzheng/SketchVideo.svg?style=social&label=Star)](https://github.com/yudianzheng/SketchVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.15306)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sketchvideo.github.io/)

+ [Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets](https://arxiv.org/abs/2311.15127) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/Stability-AI/generative-models.svg?style=social&label=Star)](https://github.com/Stability-AI/generative-models)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.15127)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://stability.ai/news/stable-video-diffusion-open-ai-video-model)

+ [Decouple Content and Motion for Conditional Image-to-Video Generation](https://arxiv.org/abs/2311.14294) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.14294)

+ [FusionFrames: Efficient Architectural Aspects for Text-to-Video Generation Pipeline](https://arxiv.org/abs/2311.13073) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/ai-forever/KandinskyVideo.svg?style=social&label=Star)](https://github.com/ai-forever/KandinskyVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.13073)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ai-forever.github.io/kandinsky-video/)

+ [Fine-Grained Open Domain Image Animation with Motion Guidance](https://arxiv.org/abs/2311.12886) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/alibaba/animate-anything.svg?style=social&label=Star)](https://github.com/alibaba/animate-anything)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.12886)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://animationai.github.io/AnimateAnything/)

+ [GPT4Motion: Scripting Physical Motions in Text-to-Video Generation via Blender-Oriented GPT Planning](https://arxiv.org/abs/2311.12631) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/jiaxilv/GPT4Motion.svg?style=social&label=Star)](https://github.com/jiaxilv/GPT4Motion)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.12631)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://gpt4motion.github.io/)

+ [MagicDance: Realistic Human Dance Video Generation with Motions & Facial Expressions Transfer](https://arxiv.org/abs/2311.12052) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/Boese0601/MagicDance.svg?style=social&label=Star)](https://github.com/Boese0601/MagicDance)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.12052)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://boese0601.github.io/magicdance/)

+ [MoVideo: Motion-Aware Video Generation with Diffusion Models](https://arxiv.org/abs/2311.11325) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.11325)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jingyunliang.github.io/MoVideo/)

+ [Make Pixels Dance: High-Dynamic Video Generation](https://arxiv.org/abs/2311.10982) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.10982)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://makepixelsdance.github.io/)

+ [Emu Video: Factorizing Text-to-Video Generation by Explicit Image Conditioning](https://arxiv.org/abs/2311.10709) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.10709)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://emu-video.metademolab.com/)
  
+ [Optimal Noise pursuit for Augmenting Text-to-Video Generation](https://arxiv.org/abs/2311.00949) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.00949)

+ [VideoDreamer: Customized Multi-Subject Text-to-Video Generation with Disen-Mix Finetuning](https://arxiv.org/abs/2311.00990) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/videodreamer23/videodreamer23.github.io.svg?style=social&label=Star)](https://github.com/videodreamer23/videodreamer23.github.io)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.00990)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videodreamer23.github.io/)

+ [SEINE: Short-to-Long Video Diffusion Model for Generative Transition and Prediction](https://arxiv.org/abs/2310.20700) (Oct., 2023)  
  [![Star](https://img.shields.io/github/stars/Vchitect/SEINE.svg?style=social&label=Star)](https://github.com/Vchitect/SEINE)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.20700)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/SEINE-project/)

+ [FreeNoise: Tuning-Free Longer Video Diffusion Via Noise Rescheduling](https://arxiv.org/abs/2310.15169) (Oct., 2023)  
  [![Star](https://img.shields.io/github/stars/arthur-qiu/LongerCrafter.svg?style=social&label=Star)](https://github.com/arthur-qiu/LongerCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.15169)
  [![Website](https://img.shields.io/badge/Website-9cf)](http://haonanqiu.com/projects/FreeNoise.html)

+ [DynamiCrafter: Animating Open-domain Images with Video Diffusion Priors](https://arxiv.org/abs/2310.12190) (Oct., 2023)  
  [![Star](https://img.shields.io/github/stars/Doubiiu/DynamiCrafter.svg?style=social&label=Star)](https://github.com/Doubiiu/DynamiCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.12190)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://doubiiu.github.io/projects/DynamiCrafter/)
  
+ [LAMP: Learn A Motion Pattern for Few-Shot-Based Video Generation](https://arxiv.org/abs/2310.10769) (Oct., 2023)  
  [![Star](https://img.shields.io/github/stars/RQ-Wu/LAMP.svg?style=social&label=Star)](https://github.com/RQ-Wu/LAMP)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.10769)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://rq-wu.github.io/projects/LAMP/) 

+ [Show-1: Marrying Pixel and Latent Diffusion Models for Text-to-Video Generation](https://arxiv.org/abs/2309.15818) (Sep., 2023)  
  [![Star](https://img.shields.io/github/stars/showlab/Show-1.svg?style=social&label=Star)](https://github.com/showlab/Show-1)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.15818)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/Show-1/) 

+ [MotionDirector: Motion Customization of Text-to-Video Diffusion Models](https://arxiv.org/abs/2310.08465) (Sep., 2023)  
  [![Star](https://img.shields.io/github/stars/showlab/MotionDirector.svg?style=social&label=Star)](https://github.com/showlab/MotionDirector)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.08465)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/MotionDirector/)

+ [LAVIE: High-Quality Video Generation with Cascaded Latent Diffusion Models](https://arxiv.org/abs/2309.15103) (Sep., 2023)  
  [![Star](https://img.shields.io/github/stars/Vchitect/LaVie.svg?style=social&label=Star)](https://github.com/Vchitect/LaVie)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.15103)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vchitect.github.io/LaVie-project/) 

+ [Free-Bloom: Zero-Shot Text-to-Video Generator with LLM Director and LDM Animator](https://arxiv.org/abs/2309.14494) (Sep., 2023)  
  [![Star](https://img.shields.io/github/stars/SooLab/Free-Bloom.svg?style=social&label=Star)](https://github.com/SooLab/Free-Bloom)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.14494)

+ [Hierarchical Masked 3D Diffusion Model for Video Outpainting](https://arxiv.org/abs/2309.02119) (Sep., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.02119)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://fanfanda.github.io/M3DDM/) 

+ [Reuse and Diffuse: Iterative Denoising for Text-to-Video Generation](https://arxiv.org/abs/2309.03549) (Sep., 2023)  
  [![Star](https://img.shields.io/github/stars/anonymous0x233/ReuseAndDiffuse.svg?style=social&label=Star)](https://github.com/anonymous0x233/ReuseAndDiffuse)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.03549)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://anonymous0x233.github.io/ReuseAndDiffuse/) 

+ [VideoGen: A Reference-Guided Latent Diffusion Approach for High Definition Text-to-Video Generation](https://arxiv.org/abs/2309.00398) (Sep., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.00398)

+ [MagicAvatar: Multimodal Avatar Generation and Animation](https://arxiv.org/abs/2308.14748) (Aug., 2023)  
  [![Star](https://img.shields.io/github/stars/magic-research/magic-avatar.svg?style=social&label=Star)](https://github.com/magic-research/magic-avatar)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.14748)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://magic-avatar.github.io/) 

+ [Empowering Dynamics-aware Text-to-Video Diffusion with Large Language Models](https://arxiv.org/abs/2308.13812) (Aug., 2023)  
  [![Star](https://img.shields.io/github/stars/scofield7419/Dysen.svg?style=social&label=Star)](https://github.com/scofield7419/Dysen)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.13812)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://haofei.vip/Dysen-VDM/) 

+ [SimDA: Simple Diffusion Adapter for Efficient Video Generation](https://arxiv.org/abs/2308.09710) (Aug., 2023)  
  [![Star](https://img.shields.io/github/stars/ChenHsing/SimDA.svg?style=social&label=Star)](https://github.com/ChenHsing/SimDA)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.09710)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://chenhsing.github.io/SimDA/) 

+ [ModelScope Text-to-Video Technical Report](https://arxiv.org/abs/2308.06571) (Aug., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.06571)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://modelscope.cn/models/damo/text-to-video-synthesis/summary) 

+ [Dual-Stream Diffusion Net for Text-to-Video Generation](https://arxiv.org/abs/2308.08316) (Aug., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.08316)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://anonymous.4open.science/r/Private-C3E8) 

+ [InternVid: A Large-scale Video-Text Dataset for Multimodal Understanding and Generation](https://arxiv.org/abs/2307.06942) (Jul., 2023)  
  [![Star](https://img.shields.io/github/stars/OpenGVLab/InternVideo.svg?style=social&label=Star)](https://github.com/OpenGVLab/InternVideo/tree/main/Data/InternVid)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.06942)

+ [Animate-A-Story: Storytelling with Retrieval-Augmented Video Generation](https://arxiv.org/abs/2307.06940) (Jul., 2023)  
  [![Star](https://img.shields.io/github/stars/VideoCrafter/Animate-A-Story.svg?style=social&label=Star)](https://github.com/VideoCrafter/Animate-A-Story)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.06940)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videocrafter.github.io/Animate-A-Story/) 

+ [AnimateDiff: Animate Your Personalized Text-to-Image Diffusion Models without Specific Tuning](https://arxiv.org/abs/2307.04725) (Jul., 2023)  
  [![Star](https://img.shields.io/github/stars/guoyww/animatediff.svg?style=social&label=Star)](https://github.com/guoyww/animatediff/)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.04725)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://animatediff.github.io/) 

+ [DisCo: Disentangled Control for Referring Human Dance Generation in Real World](https://arxiv.org/abs/2307.000400) (Jul., 2023)  
  [![Star](https://img.shields.io/github/stars/Wangt-CN/DisCo.svg?style=social&label=Star)](https://github.com/Wangt-CN/DisCo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2307.00040)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://disco-dance.github.io/) 

+ [Learn the Force We Can: Enabling Sparse Motion Control in Multi-Object Video Generation](https://arxiv.org/abs/2306.03988) (Jun., 2023)                                       
  [![Star](https://img.shields.io/github/stars/araachie/yoda.svg?style=social&label=Star)](https://github.com/araachie/yoda) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2306.03988)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://araachie.github.io/yoda/) 

+ [VideoComposer: Compositional Video Synthesis with Motion Controllability](https://arxiv.org/abs/2306.02018) (Jun., 2023)  
  [![Star](https://img.shields.io/github/stars/damo-vilab/videocomposer.svg?style=social&label=Star)](https://github.com/damo-vilab/videocomposer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2306.02018)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videocomposer.github.io/) 

+ [Probabilistic Adaptation of Text-to-Video Models](https://arxiv.org/abs/2306.01872) (Jun., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2306.01872)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-adapter.github.io/video-adapter/) 

+ [Make-Your-Video: Customized Video Generation Using Textual and Structural Guidance](https://arxiv.org/abs/2306.00943) (Jun., 2023)  
  [![Star](https://img.shields.io/github/stars/VideoCrafter/Make-Your-Video.svg?style=social&label=Star)](https://github.com/VideoCrafter/Make-Your-Video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2306.00943)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://doubiiu.github.io/projects/Make-Your-Video/) 

+ [Gen-L-Video: Multi-Text to Long Video Generation via Temporal Co-Denoising](https://arxiv.org/abs/2305.18264) (May, 2023)  
  [![Star](https://img.shields.io/github/stars/G-U-N/Gen-L-Video.svg?style=social&label=Star)](https://github.com/G-U-N/Gen-L-Video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.18264)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://g-u-n.github.io/projects/gen-long-video/index.html) 

+ [Cinematic Mindscapes: High-quality Video Reconstruction from Brain Activity](https://arxiv.org/abs/2305.11675) (May, 2023)  
  [![Star](https://img.shields.io/github/stars/jqin4749/MindVideo.svg?style=social&label=Star)](https://github.com/jqin4749/MindVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.11675) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mind-video.com/)

+ [Any-to-Any Generation via Composable Diffusion](https://arxiv.org/abs/2305.11846) (May, 2023)  
  [![Star](https://img.shields.io/github/stars/microsoft/i-Code.svg?style=social&label=Star)](https://github.com/microsoft/i-Code/tree/main/i-Code-V3)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.11846) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://codi-gen.github.io/)

+ [VideoFactory: Swap Attention in Spatiotemporal Diffusions for Text-to-Video Generation](https://arxiv.org/abs/2305.10874) (May, 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.10874) 

+ [Preserve Your Own Correlation: A Noise Prior for Video Diffusion Models](https://arxiv.org/abs/2305.10474) (May, 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.10474) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/dir/pyoco/)

+ [LaMD: Latent Motion Diffusion for Video Generation](https://arxiv.org/abs/2304.11603) (Apr., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.11603) 

+ [Align your Latents: High-Resolution Video Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2304.08818) (CVPR 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.08818) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/toronto-ai/VideoLDM/)

+ [Text2Performer: Text-Driven Human Video Generation](https://arxiv.org/abs/2304.08483) (Apr., 2023)  
  [![Star](https://img.shields.io/github/stars/yumingj/Text2Performer.svg?style=social&label=Star)](https://github.com/yumingj/Text2Performer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.08483) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yumingj.github.io/projects/Text2Performer)

+ [Generative Disco: Text-to-Video Generation for Music Visualization](https://arxiv.org/abs/2304.08551) (Apr., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.08551) 

+ [Latent-Shift: Latent Diffusion with Temporal Shift](https://arxiv.org/abs/2304.08477) (Apr., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.08477) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://latent-shift.github.io/) 
  
+ [DreamPose: Fashion Image-to-Video Synthesis via Stable Diffusion](https://arxiv.org/abs/2304.06025) (Apr., 2023)  
  [![Star](https://img.shields.io/github/stars/johannakarras/DreamPose.svg?style=social&label=Star)](https://github.com/johannakarras/DreamPose)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.06025) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://grail.cs.washington.edu/projects/dreampose/)

+ [Follow Your Pose: Pose-Guided Text-to-Video Generation using Pose-Free Videos](https://arxiv.org/abs/2304.01186) (Apr., 2023)  
  [![Star](https://img.shields.io/github/stars/mayuelala/FollowYourPose.svg?style=social&label=Star)](https://github.com/mayuelala/FollowYourPose)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.01186) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://follow-your-pose.github.io/) 

+ [Physics-Driven Diffusion Models for Impact Sound Synthesis from Videos](https://arxiv.org/abs/2303.16897) (CVPR 2023)  
  [![Star](https://img.shields.io/github/stars/sukun1045/video-physics-sound-diffusion.svg?style=social&label=Star)](https://github.com/sukun1045/video-physics-sound-diffusion) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.16897) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sukun1045.github.io/video-physics-sound-diffusion/) 

+ [Seer: Language Instructed Video Prediction with Latent Diffusion Models](https://arxiv.org/abs/2303.14897) (Mar., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.14897) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://seervideodiffusion.github.io/) 

+ [Text2video-Zero: Text-to-Image Diffusion Models Are Zero-Shot Video Generators](https://arxiv.org/abs/2303.13439) (Mar., 2023)   
  [![Star](https://img.shields.io/github/stars/Picsart-AI-Research/Text2Video-Zero.svg?style=social&label=Star)](https://github.com/Picsart-AI-Research/Text2Video-Zero) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.13439) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://text2video-zero.github.io/) 

+ [Conditional Image-to-Video Generation with Latent Flow Diffusion Models](https://arxiv.org/abs/2303.13744) (CVPR 2023)   
  [![Star](https://img.shields.io/github/stars/nihaomiao/CVPR23_LFDM.svg?style=social&label=Star)](https://github.com/nihaomiao/CVPR23_LFDM) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.13744)

+ [Decomposed Diffusion Models for High-Quality Video Generation](https://arxiv.org/abs/2303.08320) (CVPR 2023)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.08320) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://modelscope.cn/models/damo/text-to-video-synthesis/summary) 

+ [Video Probabilistic Diffusion Models in Projected Latent Space](https://arxiv.org/abs/2302.07685) (CVPR 2023)   
  [![Star](https://img.shields.io/github/stars/sihyun-yu/PVDM.svg?style=social&label=Star)](https://github.com/sihyun-yu/PVDM) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2302.07685) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sihyun.me/PVDM/) 

+ [Learning 3D Photography Videos via Self-supervised Diffusion on Single Images](https://arxiv.org/abs/2302.10781) (Feb., 2023)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2302.10781)

+ [Structure and Content-Guided Video Synthesis With Diffusion Models](https://arxiv.org/abs/2302.03011) (Feb., 2023)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2302.03011) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.runwayml.com/gen2) 

+ [Tune-A-Video: One-Shot Tuning of Image Diffusion Models for Text-to-Video Generation](https://arxiv.org/abs/2212.11565) (ICCV 2023)   
  [![Star](https://img.shields.io/github/stars/showlab/Tune-A-Video?style=social)](https://github.com/showlab/Tune-A-Video) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2212.11565) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tuneavideo.github.io/) 

+ [Mm-Diffusion: Learning Multi-Modal Diffusion Models for Joint Audio and Video Generation](https://arxiv.org/abs/2212.09478) (CVPR 2023)   
  [![Star](https://img.shields.io/github/stars/researchmm/MM-Diffusion.svg?style=social&label=Star)](https://github.com/researchmm/MM-Diffusion) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2212.09478)

+ [Magvit: Masked Generative Video Transformer](https://arxiv.org/abs/2212.05199) (Dec., 2022)    
  [![Star](https://img.shields.io/github/stars/MAGVIT/magvit.svg?style=social&label=Star)](https://github.com/MAGVIT/magvit) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2212.05199) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://magvit.cs.cmu.edu/) 

+ [VIDM: Video Implicit Diffusion Models](https://arxiv.org/abs/2212.00235) (AAAI 2023)   
  [![Star](https://img.shields.io/github/stars/MKFMIKU/VIDM.svg?style=social&label=Star)](https://github.com/MKFMIKU/VIDM) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2212.00235) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kfmei.page/vidm/) 

+ [Efficient Video Prediction via Sparsely Conditioned Flow Matching](https://arxiv.org/abs/2211.14575) (Nov., 2022)   
  [![Star](https://img.shields.io/github/stars/araachie/river.svg?style=social&label=Star)](https://github.com/araachie/river) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2211.14575) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://araachie.github.io/river/)

+ [Latent Video Diffusion Models for High-Fidelity Video Generation With Arbitrary Lengths](https://arxiv.org/abs/2211.13221) (Nov., 2022)   
  [![Star](https://img.shields.io/github/stars/YingqingHe/LVDM.svg?style=social&label=Star)](https://github.com/YingqingHe/LVDM) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2211.13221) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yingqinghe.github.io/LVDM/)

+ [SinFusion: Training Diffusion Models on a Single Image or Video](https://arxiv.org/abs/2211.11743) (Nov., 2022)   
  [![Star](https://img.shields.io/github/stars/YingqingHe/LVDM.svg?style=social&label=Star)](https://github.com/yanivnik/sinfusion-code) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2211.11743) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yanivnik.github.io/sinfusion/)

+ [MagicVideo: Efficient Video Generation With Latent Diffusion Models](https://arxiv.org/abs/2211.11018) (Nov., 2022)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2211.11018) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://magicvideo.github.io/#)

+ [Imagen Video: High Definition Video Generation With Diffusion Models](https://arxiv.org/abs/2210.02303) (Oct., 2022)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2210.02303) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://imagen.research.google/video/)

+ [Make-A-Video: Text-to-Video Generation without Text-Video Data](https://openreview.net/forum?id=nJfylDvgzlq) (ICLR 2023)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://openreview.net/forum?id=nJfylDvgzlq) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://makeavideo.studio)

+ [Diffusion Models for Video Prediction and Infilling](https://arxiv.org/abs/2206.07696) (TMLR 2022)   
  [![Star](https://img.shields.io/github/stars/Tobi-r9/RaMViD.svg?style=social&label=Star)](https://github.com/Tobi-r9/RaMViD) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2206.07696) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sites.google.com/view/video-diffusion-prediction)

+ [McVd: Masked Conditional Video Diffusion for Prediction, Generation, and Interpolation](https://arxiv.org/abs/2205.09853) (NeurIPS 2022)   
  [![Star](https://img.shields.io/github/stars/Tobi-r9/RaMViD.svg?style=social&label=Star)](https://github.com/voletiv/mcvd-pytorch)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2205.09853) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mask-cond-video-diffusion.github.io)

+ [Video Diffusion Models](https://arxiv.org/abs/2204.03458) (Apr., 2022)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2204.03458) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-diffusion.github.io/)

+ [Diffusion Probabilistic Modeling for Video Generation](https://arxiv.org/abs/2203.09481) (Mar., 2022)   
  [![Star](https://img.shields.io/github/stars/buggyyang/RVD.svg?style=social&label=Star)](https://github.com/buggyyang/RVD) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2203.09481)

### Efficient Video Generation
+ [CachedSearch: Training-Free Cached Exploration for Test-Time Search in Video Diffusion](https://arxiv.org/abs/2607.23159) (Jul., 2026)   
  [![Star](https://img.shields.io/github/stars/shreshthsaini/CachedSearch.svg?style=social&label=Star)](https://github.com/shreshthsaini/CachedSearch)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2607.23159)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shreshthsaini.github.io/CachedSearch/)

+ [SpargeAttn: Accurate Sparse Attention Accelerating Any Model Inference](https://arxiv.org/abs/2502.18137) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/thu-ml/SpargeAttn)](https://github.com/thu-ml/SpargeAttn)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.18137)

+ [SageAttention2: Efficient Attention with Thorough Outlier Smoothing and Per-thread INT4 Quantization](https://arxiv.org/abs/2411.10958) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/thu-ml/SageAttention)](https://github.com/thu-ml/SageAttention)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.10958)

+ [FlashVideo:Flowing Fidelity to Detail for Efficient High-Resolution Video Generation](https://arxiv.org/abs/2502.05179) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/FoundationVision/FlashVideo.svg?style=social&label=Star)](https://github.com/FoundationVision/FlashVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.05179)

+ [Fast Video Generation with Sliding Tile Attention](https://arxiv.org/abs/2502.04507) (Feb, 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.04507)

+ [Sparse VideoGen: Accelerating Video Diffusion Transformers with Spatial-Temporal Sparsity](https://arxiv.org/abs/2502.01776) (Feb, 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.01776)

+ [Diffusion Adversarial Post-Training for One-Step Video Generation](https://arxiv.org/abs/2501.08316) (Jan, 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.08316)

+ [From Slow Bidirectional to Fast Causal Video Generators](https://arxiv.org/pdf/2412.07772) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.07772)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://causvid.github.io/)

+ [SnapGen-V: Generating a Five-Second Video within Five Seconds on a Mobile Device](https://arxiv.org/pdf/2412.10494) (Dec., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.10494) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://snap-research.github.io/snapgen-v/)

+ [Mobile Video Diffusion](https://arxiv.org/abs/2412.07583) (Dec., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.07583) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://qualcomm-ai-research.github.io/mobile-video-diffusion/)
  
+ [MoViE: Mobile Diffusion for Video Editing](https://arxiv.org/abs/2412.06578) (Dec., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.06578) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://qualcomm-ai-research.github.io/mobile-video-editing/)

+ [Individual Content and Motion Dynamics Preserved Pruning for Video Diffusion Models](https://arxiv.org/abs/2411.18375) (Nov., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.18375) 

+ [Adaptive Caching for Faster Video Generation with Diffusion Transformers](https://arxiv.org/pdf/2411.02397) (Nov., 2024)   
  [![Star](https://img.shields.io/github/stars/AdaCache-DiT/AdaCache.svg?style=social&label=Star)](https://github.com/AdaCache-DiT/AdaCache)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.02397) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://adacache-dit.github.io/)

+ [Fast and Memory-Efficient Video Diffusion Using Streamlined Inference](https://arxiv.org/abs/2411.01171) (Nov., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.01171)

+ [SageAttention: Accurate 8-Bit Attention for Plug-and-play Inference Acceleration](https://arxiv.org/abs/2410.02367) (Oct., 2024)   
  [![Star](https://img.shields.io/github/stars/thu-ml/SageAttention)](https://github.com/thu-ml/SageAttention)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.02367)

### Controllable Video Generation

+ [LIFT: Layout-In-Future Video Generation under Large Viewpoint Change via On-Policy Self-Distillation](https://arxiv.org/abs/2609.38146) (Sep., 2026)
  [![Star](https://img.shields.io/github/stars/jsxzs/LIFT.svg?style=social&label=Star)](https://github.com/jsxzs/LIFT)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.38146)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jsxzs.github.io/LIFT)

+ [ActionSplice: In-Flight Action Editing for Interactive World Models](https://arxiv.org/abs/2609.08230) (Sep., 2026)
  [![Star](https://img.shields.io/github/stars/PardisTaghavi/ActionSplice.svg?style=social&label=Star)](https://github.com/PardisTaghavi/ActionSplice)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.08230)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pardistaghavi.github.io/actionsplice-website/)

+ [PhyCo: Learning Controllable Physical Priors for Generative Motion](https://phyco-video.github.io/) (CVPR 2026)
  [![Star](https://img.shields.io/github/stars/nnsriram97/phyco.svg?style=social&label=Star)](https://github.com/nnsriram97/phyco)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2604.28169)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://phyco-video.github.io/)
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/nnsriram97/phyco_kubric)
  [![Simulation Code](https://img.shields.io/badge/Simulation_Code-blue)](https://github.com/nnsriram97/phyco-sim)

+ [**ID-Crafter: VLM-Grounded Online RL for Compositional Multi-Subject Video Generation**](https://arxiv.org/pdf/2511.00511v3) (CVPR, 2026) [![Star](https://img.shields.io/github/stars/paulpanwang/ID-Crafter.svg?style=social&label=Star)](https://github.com/paulpanwang/ID-Crafter) [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.00511v3) [![Website](https://img.shields.io/badge/Website-9cf)](https://paulpanwang.github.io/ID-Crafter)


+ [Video-As-Prompt: Unified Semantic Control for Video Generation](https://arxiv.org/pdf/2510.20888) (Nov, 2025)    
  [![Star](https://img.shields.io/github/stars/bytedance/Video-As-Prompt.svg?style=social&label=Star)](https://github.com/bytedance/Video-As-Prompt) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.20888)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://bytedance.github.io/Video-As-Prompt/)
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/BianYx/VAP-Data)
  
+ [EgoControl: Controllable Egocentric Video Generation via 3D Full-Body Poses](https://arxiv.org/abs/2511.18173) (CVPR 2026)
  [![Star](https://img.shields.io/github/stars/CVG-Bonn/EgoControl.svg?style=social&label=Star)](https://github.com/CVG-Bonn/EgoControl/)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2511.18173)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://cvg-bonn.github.io/EgoControl/)

+ [Hand2World: Autoregressive Egocentric Interaction Generation via Free-Space Hand Gestures](https://arxiv.org/abs/2602.09600) (Feb, 2026)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2602.09600)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hand2world.github.io/)

+ [ATI: Any Trajectory Instruction for Controllable Video Generation](https://arxiv.org/pdf/2505.22944) (Jun., 2025)
  [![Star](https://img.shields.io/github/stars/bytedance/ATI.svg?style=social&label=Star)](https://github.com/bytedance/ATI)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2505.22944)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://anytraj.github.io/)

+ [TC-Light: Temporally Coherent Generative Rendering for Realistic World Transfer](https://arxiv.org/abs/2506.18904) (Jun., 2025)
  [![Star](https://img.shields.io/github/stars/Linketic/TC-Light.svg?style=social&label=Star)](https://github.com/Linketic/TC-Light)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.18904)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dekuliutesla.github.io/tclight/)

+ [IllumiCraft: Unified Geometry and Illumination Diffusion for Controllable Video Generation](https://arxiv.org/abs/2506.03150) (Jun., 2025)
  [![Star](https://img.shields.io/github/stars/UVA-Computer-Vision-Lab/FrameINO.svg?style=social&label=Star)](https://github.com/yuanze-lin/IllumiCraft)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.03150)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yuanze-lin.me/IllumiCraft_page/)


+ [Frame In-N-Out: Unbounded Controllable Image-to-Video Generation](https://arxiv.org/abs/2505.21491) (May, 2025)
  [![Star](https://img.shields.io/github/stars/UVA-Computer-Vision-Lab/FrameINO.svg?style=social&label=Star)](https://github.com/UVA-Computer-Vision-Lab/FrameINO)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.21491)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://uva-computer-vision-lab.github.io/Frame-In-N-Out/)

+ [VideoPainter: Any-length Video Inpainting and Editing with Plug-and-Play Context Control](https://arxiv.org/abs/2503.05639) (May, 2025 | SIGGRAPH 2025)    
  [![Star](https://img.shields.io/github/stars/TencentARC/VideoPainter.svg?style=social&label=Star)](https://github.com/TencentARC/VideoPainter) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.05639)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yxbian23.github.io/project/video-painter/)
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/collections/TencentARC/videopainter-67cc49c6146a48a2ba93d159)

+ [FlexiAct: Towards Flexible Action Control in Heterogeneous Scenarios](https://arxiv.org/abs/2505.03730) (May, 2025 | SIGGRAPH 2025)  
  [![Star](https://img.shields.io/github/stars/shiyi-zh0408/FlexiAct.svg?style=social&label=Star)](https://github.com/shiyi-zh0408/FlexiAct)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.03730)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shiyi-zh0408.github.io/projectpages/FlexiAct/)

  
+ [Dynamic Camera Poses and Where to Find Them](https://arxiv.org/abs/2504.17788) (Apr., 2025) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.17788)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/dir/dynpose-100k/)


+ [GenDoP: Auto-regressive Camera Trajectory Generation as a Director of Photography](https://arxiv.org/abs/2504.07083) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/3DTopia/GenDoP.svg?style=social&label=Star)](https://github.com/3DTopia/GenDoP)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.07083)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kszpxxzmc.github.io/GenDoP/)


+ [OmniVDiff: Omni Controllable Video Diffusion for Generation and Understanding](https://tele-ai.github.io/OmniVDiff/) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/Tele-AI/OmniVDiff.svg?style=social&label=Star)](https://github.com/Tele-AI/OmniVDiff)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2504.10825)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tele-ai.github.io/OmniVDiff/)


+ [UniAnimate-DiT: Human Image Animation with Large-Scale Video Diffusion Transformer](https://kszpxxzmc.github.io/GenDoP/) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/ali-vilab/UniAnimate-DiT.svg?style=social&label=Star)](https://github.com/ali-vilab/UniAnimate-DiT)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.11289)


+ [GenDoP: Auto-regressive Camera Trajectory Generation as a Director of Photography](https://kszpxxzmc.github.io/GenDoP/) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/3DTopia/GenDoP.svg?style=social&label=Star)](https://github.com/3DTopia/GenDoP)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.07083)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kszpxxzmc.github.io/GenDoP/)


+ [Beyond Static Scenes: Camera-controllable Background Generation for Human Motion](https://yaomingshuai.github.io/Beyond-Static-Scenes.github.io/) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/Yaomingshuai/Beyond-Static-Scenes.svg?style=social&label=Star)](https://github.com/Yaomingshuai/Beyond-Static-Scenes)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.02004)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yaomingshuai.github.io/Beyond-Static-Scenes.github.io/)

+ [SketchVideo: Sketch-based Video Generation and Editing](https://arxiv.org/abs/2503.23284) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/IGLICT/SketchVideo.svg?style=social&label=Star)](https://github.com/IGLICT/SketchVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.23284)
  [![Website](https://img.shields.io/badge/Website-9cf)](http://geometrylearning.com/SketchVideo/)
  
+ [Any2Caption:Interpreting Any Condition to Caption for Controllable Video Generation](https://arxiv.org/abs/2503.24379) (Apr., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.24379)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://sqwu.top/Any2Cap/)
  
+ [Reangle-A-Video: 4D Video Generation as Video-to-Video Translation](https://arxiv.org/abs/2503.09151) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/HyeonHo99/Reangle-Video.svg?style=social&label=Star)](https://github.com/HyeonHo99/Reangle-Video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.09151)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hyeonho99.github.io/reangle-a-video/)

+ [DynamiCtrl: Rethinking the Basic Structure and the Role of Text for High-quality Human Image Animation](https://arxiv.org/abs/2503.21246) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/gulucaptain/DynamiCtrl.svg?style=social&label=Star)](https://github.com/gulucaptain/DynamiCtrl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.21246)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://gulucaptain.github.io/DynamiCtrl/)


+ [HunyuanPortrait: Implicit Condition Control for Enhanced Portrait Animation](https://arxiv.org/pdf/2503.18860) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/kkakkkka/HunyuanPortrait.svg?style=social&label=Star)](https://github.com/kkakkkka/HunyuanPortrait)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2503.18860)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kkakkkka.github.io/HunyuanPortrait/)


+ [Enabling Versatile Controls for Video Diffusion Models](https://arxiv.org/abs/2503.16983) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/PaddlePaddle/PaddleMIX.svg?style=social&label=Star)](https://github.com/PaddlePaddle/PaddleMIX/tree/develop/ppdiffusers/examples/ppvctrl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.16421)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pp-vctrl.github.io)

+ [MagicMotion: Controllable Video Generation with Dense-to-Sparse Trajectory Guidance](https://arxiv.org/abs/2503.16421) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/quanhaol/MagicMotion.svg?style=social&label=Star)](https://github.com/quanhaol/MagicMotion)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.16421)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://quanhaol.github.io/magicmotion-site/)

+ [MusicInfuser: Making Video Diffusion Listen and Dance](https://arxiv.org/abs/2503.14505) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/SusungHong/MusicInfuser.svg?style=social&label=Star)](https://github.com/SusungHong/MusicInfuser)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.14505)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://susunghong.github.io/MusicInfuser)
  

+ [ReCamMaster: Camera-Controlled Generative Rendering from A Single Video](https://arxiv.org/abs/2503.11647) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/KwaiVGI/ReCamMaster.svg?style=social&label=Star)](https://github.com/KwaiVGI/ReCamMaster)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.11647)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jianhongbai.github.io/ReCamMaster/)

+ [CameraCtrl II: Dynamic Scene Exploration via Camera-controlled Video Diffusion Models](https://arxiv.org/abs/2503.10592) (Mar., 2025)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.10592)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hehao13.github.io/Projects-CameraCtrl-II/)

+ [GEN3C: 3D-Informed World-Consistent Video Generation with Precise Camera Control](https://arxiv.org/abs/2503.03751) (Mar., 2025 | CVPR 2025)       
  [![Star](https://img.shields.io/github/stars/nv-tlabs/GEN3C.svg?style=social&label=Star)](https://github.com/nv-tlabs/GEN3C)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.03751)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/toronto-ai/GEN3C/)

+ [C-Drag: Chain-of-Thought Driven Motion Controller for Video Generation](https://arxiv.org/abs/2502.19868) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/WesLee88524/C-Drag-Official-Repo.svg?style=social&label=Star)](https://github.com/WesLee88524/C-Drag-Official-Repo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.19868) 

+ [X-Dancer: Expressive Music to Human Dance Video Generation](https://arxiv.org/pdf/2502.17414) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.17414)

+ [CineMaster: A 3D-Aware and Controllable Framework for Cinematic Text-to-Video Generation](https://arxiv.org/abs/2502.08639) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.08639)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://cinemaster-dev.github.io/)

+ [RealCam-I2V: Real-World Image-to-Video Generation with Interactive Complex Camera Control](https://arxiv.org/abs/2502.10059) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.10059)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://zgctroy.github.io/RealCam-I2V/)

+ [AnyCharV: Bootstrap Controllable Character Video Generation with Fine-to-Coarse Guidance](https://arxiv.org/abs/2502.08189) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/AnyCharV/AnyCharV.svg?style=social&label=Star)](https://github.com/AnyCharV/AnyCharV)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.08189)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://anycharv.github.io/)

+ [A 3D-Aware and Controllable Framework for Cinematic Text-to-Video Generation](https://arxiv.org/abs/2502.08639) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.08639)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://cinemaster-dev.github.io/)

+ [VidCRAFT3: Camera, Object, and Lighting Control for Image-to-Video Generation](https://arxiv.org/pdf/2502.07531) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.07531)

+ [FloVD: Optical Flow Meets Video Diffusion Model for Camera-Controlled Video Synthesis](https://jinwonjoon.github.io/flovd_site/FloVD_files/main.pdf) (Feb., 2025)       
  [![Star](https://img.shields.io/github/stars/JinWonjoon/FloVD.svg?style=social&label=Star)](https://github.com/JinWonjoon/FloVD/)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://jinwonjoon.github.io/flovd_site/FloVD_files/main.pdf)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jinwonjoon.github.io/flovd_site/)

+ [Light-A-Video: Training-free Video Relighting via Progressive Light Fusion](https://arxiv.org/abs/2502.08590) (Feb., 2025)       
  [![Star](https://img.shields.io/github/stars/bcmi/Light-A-Video.svg?style=social&label=Star)](https://github.com/bcmi/Light-A-Video/)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.08590)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://bujiazi.github.io/light-a-video.github.io/)

+ [MotionCanvas: Cinematic Shot Design with Controllable Image-to-Video Generation](https://arxiv.org/abs/2502.04299) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.04299)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://motion-canvas25.github.io/) 

+ [MotionCanvas: Cinematic Shot Design with Controllable Image-to-Video Generation](https://arxiv.org/pdf/2502.04299) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.04299)
  
+ [DynVFX: Augmenting Real Videos with Dynamic Content](https://arxiv.org/pdf/2502.03621) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.03621) 

+ [MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent](https://arxiv.org/pdf/2502.03207) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.03207) 

+ [RelightVid: Temporal-Consistent Diffusion Model for Video Relighting](https://arxiv.org/abs/2501.16330) (Feb., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.16330) 

+ [LayerAnimate: Layer-level Control for Animation](https://arxiv.org/abs/2501.08295) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/IamCreateAI/LayerAnimate.svg?style=social&label=Star)](https://github.com/IamCreateAI/LayerAnimate)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.08295)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://layeranimate.github.io/)

+ [Perception-as-Control: Fine-grained Controllable Image Animation with 3D-aware Motion Representation](https://arxiv.org/pdf/2501.05020) (Jan., 2025)       
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.05020)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://chen-yingjie.github.io/projects/Perception-as-Control/)
  [![Star](https://img.shields.io/github/stars/chen-yingjie/Perception-as-Control.svg?style=social&label=Star)](https://github.com/chen-yingjie/Perception-as-Control)   

+ [BlobGEN-Vid: Compositional Text-to-Video Generation with Blob Video Representations](https://arxiv.org/abs/2501.07647) (Jan., 2025)   
  [![Star](https://img.shields.io/github/stars/Tian-one/FCVG.svg?style=social&label=Star)](https://github.com/Tian-one/FCVG)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.07647)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://blobgen-vid2.github.io/)

+ [On Unifying Video Generation and Camera Pose Estimation](https://arxiv.org/abs/2501.01409) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.01409)

+ [VideoAnydoor: High-fidelity Video Object Insertion with Precise Motion Control](https://arxiv.org/pdf/2501.01427) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.01427)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videoanydoor.github.io/)

+ [DirectorLLM for Human-Centric Video Generation](https://arxiv.org/pdf/2412.14484) (Dec., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.14484)

+ [Consistent Human Image and Video Generation with Spatially Conditioned Diffusion](https://arxiv.org/abs/2412.14531) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/ljzycmd/SCD.svg?style=social&label=Star)](https://github.com/ljzycmd/SCD)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.14531)

+ [Generative Inbetweening through Frame-wise Conditions-Driven Video Generation](https://arxiv.org/abs/2412.11755) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/Tian-one/FCVG.svg?style=social&label=Star)](https://github.com/Tian-one/FCVG)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.11755)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://fcvg-inbetween.github.io/)

+ [InterDyn: Controllable Interactive Dynamics with Video Diffusion Models](https://interdyn.is.tue.mpg.de/media/upload/interdyn_video.pdf) (Dec., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://interdyn.is.tue.mpg.de/media/upload/interdyn_video.pdf)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://interdyn.is.tue.mpg.de/)

+ [OmniDrag: Enabling Motion Control for Omnidirectional Image-to-Video Generation](https://arxiv.org/pdf/2412.09623) (Dec., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.09623)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lwq20020127.github.io/OmniDrag/)

+ [SynCamMaster: Synchronizing Multi-Camera Video Generation from Diverse Viewpoints](https://arxiv.org/abs/2412.07760) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/KwaiVGI/SynCamMaster.svg?style=social&label=Star)](https://github.com/KwaiVGI/SynCamMaster)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.07760)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jianhongbai.github.io/SynCamMaster/)

+ [3DTrajMaster: Mastering 3D Trajectory for Multi-Entity Motion in Video Generation](https://drive.google.com/file/d/111Z5CMJZupkmg-xWpV4Tl4Nb7SRFcoWx/view) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/KwaiVGI/3DTrajMaster.svg?style=social&label=Star)](https://github.com/KwaiVGI/3DTrajMaster)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://drive.google.com/file/d/111Z5CMJZupkmg-xWpV4Tl4Nb7SRFcoWx/view)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wzhouxiff.github.io/projects/ObjCtrl-2.5D/) 

+ [ObjCtrl-2.5D: Training-free Object Control with Camera Poses](https://arxiv.org/pdf/2412.07721) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/wzhouxiff/ObjCtrl-2.5D.svg?style=social&label=Star)](https://github.com/wzhouxiff/ObjCtrl-2.5D)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.07721)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wzhouxiff.github.io/projects/ObjCtrl-2.5D/) 

+ [Motion Prompting: Controlling Video Generation with Motion Trajectories](https://arxiv.org/abs/2412.02700) (Nov., 2024)     
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.02700)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://motion-prompting.github.io/) 

+ [Identity-Preserving Text-to-Video Generation by Frequency Decomposition](https://arxiv.org/abs/2411.17440) (Nov., 2024)      
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/ConsisID.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/ConsisID)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.17440)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/ConsisID/) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/BestWishYsh/ConsisID-preview-Data) 

+ [FlipSketch: Flipping assets Drawings to Text-Guided Sketch Animations](https://arxiv.org/pdf/2411.10818) (Nov., 2024)      
  [![Star](https://img.shields.io/github/stars/hmrishavbandy/FlipSketch.svg?style=social&label=Star)](https://github.com/hmrishavbandy/FlipSketch)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.10818)

+ [AnimateAnything: Consistent and Controllable Animation for video generation](https://arxiv.org/pdf/2411.10836) (Nov., 2024)      
  [![Star](https://img.shields.io/github/stars/yu-shaonian/AnimateAnything.svg?style=social&label=Star)](https://github.com/yu-shaonian/AnimateAnything)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.10836)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yu-shaonian.github.io/Animate_Anything/)

+ [MVideo: Motion Control for Enhanced Complex Action Video Generation](https://arxiv.org/pdf/2411.08328) (Nov., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.08328)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mvideo-v1.github.io/)

+ [ReCapture: Generative Video Camera Controls for User-Provided Videos using Masked Video Fine-Tuning](https://arxiv.org/abs/2411.05003) (Nov., 2024 | CVPR 2025)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.05003)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://generative-video-camera-controls.github.io/)

+ [SG-I2V: Self-Guided Trajectory Control in Image-to-Video Generation](https://arxiv.org/pdf/2411.04989) (Nov., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.04989)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kmcode1.github.io/Projects/SG-I2V/)
  [![Star](https://img.shields.io/github/stars/Kmcode1/SG-I2V.svg?style=social&label=Star)](https://github.com/Kmcode1/SG-I2V)

+ [X-Portrait: Expressive Portrait Animation with Hierarchical Motion Attention](https://arxiv.org/abs/2403.15931) (Nov., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.15931)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://byteaigc.github.io/x-portrait/)
  [![Star](https://img.shields.io/github/stars/bytedance/X-Portrait.svg?style=social&label=Star)](https://github.com/bytedance/X-Portrait)

+ [LumiSculpt: A Consistency Lighting Control Network for Video Generation](https://arxiv.org/pdf/2410.22979) (Nov., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.22979)

+ [FRAMER: INTERACTIVE FRAME INTERPOLATION](https://arxiv.org/pdf/2410.18978) (Oct., 2024)   
  [![Star](https://img.shields.io/github/stars/aim-uofa/Framer.svg?style=social&label=Star)](https://github.com/aim-uofa/Framer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.18978)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://aim-uofa.github.io/Framer/)

+ [CamI2V: Camera-Controlled Image-to-Video Diffusion Model](https://arxiv.org/pdf/2410.15957) (Oct., 2024)  
  [![Star](https://img.shields.io/github/stars/ZGCTroy/CamI2V.svg?style=social&label=Star)](https://github.com/ZGCTroy/CamI2V)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.15957)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://zgctroy.github.io/CamI2V/)

+ [Cavia: Camera-controllable Multi-view Video Diffusion with View-Integrated Attention](https://arxiv.org/abs/2410.10774) (Oct., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.10774)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ir1d.github.io/Cavia/)
  
+ [Animate Your Motion: Turning Still Images into Dynamic Videos](https://arxiv.org/abs/2403.10179)(Mar., 2023|ECCV 2024)    
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.10179)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mingxiao-li.github.io/smcd/)

+ [EasyControl: Transfer ControlNet to Video Diffusion for Controllable Generation and Interpolation](https://arxiv.org/abs/2408.13005) (Aug., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.13005)

+ [ControlNeXt: Powerful and Efficient Control for Image and Video Generation](https://arxiv.org/pdf/2408.06070) (Aug., 2024)      
  [![Star](https://img.shields.io/github/stars/dvlab-research/ControlNeXt.svg?style=social&label=Star)](https://github.com/dvlab-research/ControlNeXt)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2408.06070)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pbihao.github.io/projects/controlnext/index.html)

+ [TrackGo: A Flexible and Efficient Method for Controllable Video Generation](https://arxiv.org/abs/2408.11475) (Aug., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.11475)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://zhtjtcz.github.io/TrackGo-Page/#)

+ [Puppet-Master: Scaling Interactive Video Generation as a Motion Prior for Part-Level Dynamics](https://arxiv.org/abs/2408.04631) (Aug., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.04631)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vgg-puppetmaster.github.io/)

+ [Sketch2Scene: Automatic Generation of Interactive 3D Game Scenes from User's Casual Sketches](https://arxiv.org/abs/2408.04567) (Aug., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.04567)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://xrvisionlabs.github.io/Sketch2Scene/)

+ [Expressive Whole-Body 3D Gaussian Avatar](https://arxiv.org/abs/2407.21686) (Aug., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.21686)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mks0601.github.io/ExAvatar/)
  
+ [Tora: Trajectory-oriented Diffusion Transformer for Video Generation](https://arxiv.org/abs/2407.21705) (Jul., 2024 | CVPR 2025)  
  [![Star](https://img.shields.io/github/stars/alibaba/Tora.svg?style=social&label=Star)](https://github.com/alibaba/Tora)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.21705)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ali-videoai.github.io/tora_video/)

+ [HumanVid: Demystifying Training Data for Camera-controllable Human Image Animation](https://arxiv.org/pdf/2407.17438) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/zhenzhiwang/HumanVid.svg?style=social&label=Star)](https://github.com/zhenzhiwang/HumanVid)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2407.17438)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://humanvid.github.io/#)

+ [Cinemo: Consistent and Controllable Image Animation with Motion Diffusion Models](https://arxiv.org/abs/2407.15642) (Jul., 2024)      
  [![Star](https://img.shields.io/github/stars/maxin-cn/Cinemo.svg?style=social&label=Star)](https://github.com/maxin-cn/Cinemo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.15642)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://maxin-cn.github.io/cinemo_project/)

+ [VD3D: Taming Large Video Diffusion Transformers for 3D Camera Control](https://arxiv.org/abs/2407.12781) (Jul., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.12781)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://snap-research.github.io/vd3d/)

+ [Still-Moving: Customized Video Generation without Customized Video Data](https://arxiv.org/abs/2407.08674) (Jul., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.08674)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://still-moving.github.io/)

+ [LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control](https://arxiv.org/abs/2407.03168) (Jul., 2024)  
  [![Star](https://img.shields.io/github/stars/KwaiVGI/LivePortrait.svg?style=social&label=Star)](https://github.com/KwaiVGI/LivePortrait)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.03168)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/KwaiVGI/LivePortrait)

+ [Identifying and Solving Conditional Image Leakage in Image-to-Video Diffusion Model](https://arxiv.org/abs/2406.15735) (Jun., 2024 | NeurIPS 2024)   
  [![Star](https://img.shields.io/github/stars/thu-ml/cond-image-leakage.svg?style=social&label=Star)](https://github.com/thu-ml/cond-image-leakage/tree/main?tab=readme-ov-file)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.15735)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://cond-image-leak.github.io/)
  
+ [Image Conductor: Precision Control for Interactive Video Synthesis](https://arxiv.org/pdf/2406.15339) (Jun., 2024)  
  [![Star](https://img.shields.io/github/stars/liyaowei-stu/ImageConductor.svg?style=social&label=Star)](https://github.com/liyaowei-stu/ImageConductor)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2406.15339)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://liyaowei-stu.github.io/project/ImageConductor/)

+ [MimicMotion: High-Quality Human Motion Video Generation with Confidence-aware Pose Guidance](https://arxiv.org/abs/2406.19680) (Jun., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.19680)

+ [FreeTraj: Tuning-Free Trajectory Control in Video Diffusion Models](https://arxiv.org/abs/2406.16863) (Jun., 2024)  
  [![Star](https://img.shields.io/github/stars/arthur-qiu/FreeTraj.svg?style=social&label=Star)](https://github.com/arthur-qiu/FreeTraj)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.16863)
  [![Website](https://img.shields.io/badge/Website-9cf)](http://haonanqiu.com/projects/FreeTraj.html)

+ [MOFA-Video: Controllable Image Animation via Generative Motion Field Adaptions in Frozen Image-to-Video Diffusion Model](https://arxiv.org/abs/2405.20222) (Jun., 2024)      
  [![Star](https://img.shields.io/github/stars/MyNiuuu/MOFA-Video.svg?style=social&label=Star)](https://github.com/MyNiuuu/MOFA-Video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.20222)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://myniuuu.github.io/MOFA_Video/)

+ [Champ: Controllable and Consistent Human Image Animation with 3D Parametric Guidance](https://arxiv.org/abs/2403.14781) (Mar., 2024)  
  [![Star](https://img.shields.io/github/stars/fudan-generative-vision/champ.svg?style=social&label=Star)](https://github.com/fudan-generative-vision/champ)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.14781)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://fudan-generative-vision.github.io/champ/)

+ [TrailBlazer: Trajectory Control for Diffusion-Based Video Generation](https://arxiv.org/abs/2401.00896) (Jan., 2024)  
  [![Star](https://img.shields.io/github/stars/hohonu-vicml/Trailblazer.svg?style=social&label=Star)](https://github.com/hohonu-vicml/Trailblazer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.00896)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hohonu-vicml.github.io/Trailblazer.Page/)

+ [Motion-Zero: Zero-Shot Moving Object Control Framework for Diffusion-Based Video Generation](https://arxiv.org/abs/2401.10150) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.10150)

+ [Moonshot: Towards Controllable Video Generation and Editing with Multimodal Conditions](https://arxiv.org/abs/2401.01827) (Jan., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2401.01827)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/Moonshot/)

+ [MotionCtrl: A Unified and Flexible Motion Controller for Video Generation](https://arxiv.org/abs/2312.03641) (Dec., 2023)  
  [![Star](https://img.shields.io/github/stars/TencentARC/MotionCtrl.svg?style=social&label=Star)](https://github.com/TencentARC/MotionCtrl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.03641)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wzhouxiff.github.io/projects/MotionCtrl/)

+ [Animate Anyone: Consistent and Controllable Image-to-Video Synthesis for Character Animation](https://arxiv.org/abs/2311.17117) (Nov., 2023)  
  [![Star](https://img.shields.io/github/stars/HumanAIGC/AnimateAnyone.svg?style=social&label=Star)](https://github.com/HumanAIGC/AnimateAnyone)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.17117)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://humanaigc.github.io/animate-anyone/)

+ [SparseCtrl: Adding Sparse Controls to Text-to-Video Diffusion Models](https://arxiv.org/abs/2311.16933) (Nov., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2311.16933)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://guoyww.github.io/projects/SparseCtrl/)

+ [Control-A-Video: Controllable Text-to-Video Generation with Diffusion Models](https://arxiv.org/abs/2305.13840) (May, 2023)  
  [![Star](https://img.shields.io/github/stars/Weifeng-Chen/control-a-video.svg?style=social&label=Star)](https://github.com/Weifeng-Chen/control-a-video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.13840)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://controlavideo.github.io/) 

+ [Motion-Conditioned Diffusion Model for Controllable Video Synthesis](https://arxiv.org/abs/2304.14404) (Apr., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2304.14404) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tsaishien-chen.github.io/MCDiff/)

+ [ControlVideo: Training-free Controllable Text-to-Video Generation](https://arxiv.org/abs/2305.13077) (May, 2023)  
  [![Star](https://img.shields.io/github/stars/YBYBZhang/ControlVideo.svg?style=social&label=Star)](https://github.com/YBYBZhang/ControlVideo)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2305.13077) 
  
+ [DragNUWA: Fine-grained Control in Video Generation by Integrating Text, Image, and Trajectory](https://arxiv.org/abs/2308.08089) (Aug., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2308.08089)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.microsoft.com/en-us/research/project/dragnuwa/) 

+ [DragAnything: Motion Control for Anything using Entity Representation](https://arxiv.org/abs/2403.07420) (ECCV, 2024)  
  [![Star](https://img.shields.io/github/stars/showlab/DragAnything.svg?style=social&label=Star)](https://github.com/showlab/DragAnything)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.07420)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://weijiawu.github.io/draganything_page/)

+ [CameraCtrl: Enabling Camera Control for Video Diffusion Models](https://arxiv.org/abs/2404.02101) (Apr., 2024)  
  [![Star](https://img.shields.io/github/stars/hehao13/CameraCtrl.svg?style=social&label=Star)](https://github.com/hehao13/CameraCtrl) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.02101)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hehao13.github.io/projects-CameraCtrl/)

+ [Training-free Camera Control for Video Generation](https://arxiv.org/pdf/2406.10126) (Jun., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2406.10126)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lifedecoder.github.io/CamTrol/)

+ [Customizing Motion in Text-to-Video Diffusion Models](https://arxiv.org/abs/2312.04966) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04966)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://joaanna.github.io/customizing_motion/)

+ [MotionClone: Training-Free Motion Cloning for Controllable Video Generation](https://arxiv.org/abs/2406.05338) (Jun., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.05338)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://bujiazi.github.io/motionclone.github.io/)

### Character Customization

+ [FlexiAct: Towards Flexible Action Control in Heterogeneous Scenarios](https://arxiv.org/abs/2505.03730) (May, 2025 | SIGGRAPH 2025)  
  [![Star](https://img.shields.io/github/stars/shiyi-zh0408/FlexiAct.svg?style=social&label=Star)](https://github.com/shiyi-zh0408/FlexiAct)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.03730)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shiyi-zh0408.github.io/projectpages/FlexiAct/)
  

+ [HunyuanCustom: A Multimodal-Driven Architecture for Customized Video Generation](https://arxiv.org/abs/2505.04512) (May., 2025)  
  [![Star](https://img.shields.io/github/stars/Tencent/HunyuanCustom.svg?style=social&label=Star)](https://github.com/Tencent/HunyuanCustom)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.04512)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hunyuancustom.github.io/)

  
+ [VideoMage: Multi-Subject and Motion Customization of Text-to-Video Diffusion Models](https://arxiv.org/abs/2503.21781) (Mar., 2025) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.21781)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jasper0314-huang.github.io/videomage-customization/)


+ [MagicID: Hybrid Preference Optimization for ID-Consistent and Dynamic-Preserved Video Customization](https://arxiv.org/abs/2503.12689) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/EchoPluto/MagicID.svg?style=social&label=Star)](https://github.com/EchoPluto/MagicID)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.12689)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://echopluto.github.io/MagicID-project/)
  

+ [Concat-ID: Towards Universal Identity-Preserving Video Synthesis](https://arxiv.org/abs/2503.14151) (Mar., 2025)  
  [![Star](https://img.shields.io/github/stars/ML-GSAI/Concat-ID.svg?style=social&label=Star)](https://github.com/ML-GSAI/Concat-ID)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.14151)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ml-gsai.github.io/Concat-ID-demo/)
  

+ [CINEMA: Coherent Multi-Subject Video Generation via MLLM-Based Guidance](https://arxiv.org/abs/2503.10391) (Mar., 2025)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.10391)


+ [FantasyID: Face Knowledge Enhanced ID-Preserving Video Generation](https://arxiv.org/abs/2502.13995) (Feb., 2025)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.13995)

+ [Dynamic Concepts Personalization from Single Videos](https://arxiv.org/abs/2502.14844) (Feb., 2025)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.14844)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://snap-research.github.io/dynamic_concepts/)

+ [Phantom: Subject-consistent video generation via cross-modal alignment](https://arxiv.org/pdf/2502.11079) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/Phantom-video/Phantom.svg?style=social&label=Star)](https://github.com/Phantom-video/Phantom)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.11079)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://phantom-video.github.io/Phantom/)

+ [Movie Weaver: Tuning-Free Multi-Concept Video Personalization with Anchored Prompts](https://arxiv.org/abs/2502.07802) (Feb., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.07802)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jeff-liangf.github.io/projects/movieweaver/)

+ [Animate Anyone 2: High-Fidelity Character Image Animation with Environment Affordance](https://arxiv.org/pdf/2502.06145) (Feb., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2502.06145)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://humanaigc.github.io/animate-anyone-2/)

+ [Multi-subject Open-set Personalization in Video Generation](https://arxiv.org/abs/2501.06187) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.06187)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://snap-research.github.io/open-set-video-personalization/)

+ [Magic Mirror: ID-Preserved Video Generation in Video Diffusion Transformers](https://arxiv.org/abs/2501.03931) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/dvlab-research/MagicMirror.svg?style=social&label=Star)](https://github.com/dvlab-research/MagicMirror/)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.03931)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://julianjuaner.github.io/projects/MagicMirror/)

+ [ConceptMaster: Multi-Concept Video Customization on Diffusion Transformer Models Without Test-Time Tuning](https://arxiv.org/abs/2501.04698) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.04698)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yuzhou914.github.io/ConceptMaster/)

+ [VideoMaker: Zero-shot Customized Video Generation with the Inherent Force of Video Diffusion Models](https://arxiv.org/pdf/2412.19645) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/WuTao-CS/VideoMaker.svg?style=social&label=Star)](https://github.com/WuTao-CS/VideoMaker)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.19645)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wutao-cs.github.io/VideoMaker/)

+ [PersonalVideo: High ID-Fidelity Video Customization without Dynamic and Semantic Degradation](https://arxiv.org/pdf/2411.17048) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.17048)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://personalvideo.github.io/)

+ [DreamVideo-2: Zero-Shot Subject-Driven Video Customization with Precise Motion Control](https://arxiv.org/abs/2410.13830) (Oct., 2024)      
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.13830)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dreamvideo2.github.io/)

+ [CustomCrafter: Customized Video Generation with Preserving Motion and Concept Composition Abilities](https://arxiv.org/abs/2408.13239) (Aug., 2024)      
  [![Star](https://img.shields.io/github/stars/WuTao-CS/CustomCrafter.svg?style=social&label=Star)](https://github.com/WuTao-CS/CustomCrafter)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.13239)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://customcrafter.github.io/)

### Motion Customization

+ [TrajectoryMover: Generative Movement of Object Trajectories in Videos](https://arxiv.org/abs/2603.29092) (Mar., 2026)
  [![Star](https://img.shields.io/github/stars/kiranchhatre/TrajectoryMover.svg?style=social&label=Star)](https://github.com/kiranchhatre/TrajectoryMover)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2603.29092)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://chhatrekiran.github.io/trajectorymover/)

+ [Frame In-N-Out: Unbounded Controllable Image-to-Video Generation](https://arxiv.org/abs/2505.21491) (May, 2025)
  [![Star](https://img.shields.io/github/stars/UVA-Computer-Vision-Lab/FrameINO.svg?style=social&label=Star)](https://github.com/UVA-Computer-Vision-Lab/FrameINO)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.21491)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://uva-computer-vision-lab.github.io/Frame-In-N-Out/)

+ [MotionPro: A Precise Motion Controller for Image-to-Video Generation](https://arxiv.org/abs/2505.20287) (May, 2025 | CVPR 2025)  
  [![Star](https://img.shields.io/github/stars/HiDream-ai/MotionPro.svg?style=social&label=Star)](https://github.com/HiDream-ai/MotionPro)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.20287)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://zhw-zhang.github.io/MotionPro-page/)

+ [LMP: Leveraging Motion Prior in Zero-Shot Video Generation with Diffusion Transformer](https://arxiv.org/abs/2505.14167) (May, 2025)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.14167)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vpx-ecnu.github.io/LMP-Website/)
  
+ [FlexiAct: Towards Flexible Action Control in Heterogeneous Scenarios](https://arxiv.org/abs/2505.03730) (May, 2025 | SIGGRAPH 2025)  
  [![Star](https://img.shields.io/github/stars/shiyi-zh0408/FlexiAct.svg?style=social&label=Star)](https://github.com/shiyi-zh0408/FlexiAct)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2505.03730)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://shiyi-zh0408.github.io/projectpages/FlexiAct/)

+ [Training-free Guidance in Text-to-Video Generation via Multimodal Planning and Structured Noise Initialization](https://arxiv.org/pdf/2504.08641) (Apr., 2025)  
  [![Star](https://img.shields.io/github/stars/jialuli-luka/Video-MSG.svg?style=social&label=Star)](https://github.com/jialuli-luka/Video-MSG)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2504.08641)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-msg.github.io/)

+ [Separate Motion from Appearance: Customizing Motion via Customizing Text-to-Video Diffusion Models](https://arxiv.org/abs/2501.16714) (Feb., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.16714)

+ [Go-with-the-Flow: Motion-Controllable Video Diffusion Models Using Real-Time Warped Noise](https://arxiv.org/pdf/2501.08331) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/VGenAI-Netflix-Eyeline-Research/Go-with-the-Flow.svg?style=social&label=Star)](https://github.com/VGenAI-Netflix-Eyeline-Research/Go-with-the-Flow)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.08331)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://vgenai-netflix-eyeline-research.github.io/Go-with-the-Flow/)

+ [Training-Free Motion-Guided Video Generation with Enhanced Temporal Consistency Using Motion Consistency Loss](https://arxiv.org/abs/2501.07563v1) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.07563v1)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://zhangxinyu-xyz.github.io/SimulateMotion.github.io/)

+ [Free-Form Motion Control: A Synthetic Video Generation Dataset with Controllable Camera and Object Motions](https://arxiv.org/abs/2501.01425) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.01425)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://henghuiding.github.io/SynFMC/)

+ [CustomTTT: Motion and Appearance Customized Video Generation via Test-Time Training](https://arxiv.org/pdf/2412.15646) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.15646)

+ [MotionShop: Zero-Shot Motion Transfer in Video Diffusion Models with Mixture of Score Guidance](https://motionshop-diffusion.github.io/MotionShop.pdf) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/gemlab-vt/motionshop.svg?style=social&label=Star)](https://github.com/gemlab-vt/motionshop)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://motionshop-diffusion.github.io/MotionShop.pdf)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://motionshop-diffusion.github.io/)

+ [Video Motion Transfer with Diffusion Transformers](https://arxiv.org/abs/2412.07776) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/ditflow/ditflow.svg?style=social&label=Star)](https://github.com/ditflow/ditflow)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.07776)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ditflow.github.io/)

+ [Latent-Reframe: Enabling Camera Control for Video Diffusion Model without Training](https://arxiv.org/abs/2412.06029) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.06029)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://latent-reframe.github.io/)

+ [Motion Modes: What Could Happen Next?](https://motionmodes.github.io/resources/MotionModes.pdf) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://motionmodes.github.io/resources/MotionModes.pdf)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://motionmodes.github.io/)

+ [MoTrans: Customized Motion Transfer with Text-driven Video](https://arxiv.org/abs/2412.01343) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.01343)

+ [AC3D: Analyzing and Improving 3D Camera Control in Video Diffusion Transformers](https://arxiv.org/abs/2411.18673) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.18673)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://snap-research.github.io/ac3d/)

+ [Trajectory Attention For Fine-grained Video Motion Control](https://arxiv.org/abs/2411.14208) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/xizaoqu/TrajectoryAttntion.svg?style=social&label=Star)](https://github.com/xizaoqu/TrajectoryAttntion)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.19324)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://xizaoqu.github.io/trajattn/)

+ [ViewExtrapolator: Novel View Extrapolation with Video Diffusion Priors](https://arxiv.org/abs/2411.14208) (Nov., 2024)  
  [![Star](https://img.shields.io/github/stars/Kunhao-Liu/ViewExtrapolator.svg?style=social&label=Star)](https://github.com/Kunhao-Liu/ViewExtrapolator)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.14208)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://kunhao-liu.github.io/ViewExtrapolator/)

+ [I2VControl-Camera: Precise Video Camera Control with Adjustable Motion Strength](https://arxiv.org/pdf/2411.06525) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.06525)

+ [MotionDirector: Motion Customization of Text-to-Video Diffusion Models](https://arxiv.org/abs/2310.08465) (Sep., 2023 | ECCV 2024)  
  [![Star](https://img.shields.io/github/stars/showlab/MotionDirector.svg?style=social&label=Star)](https://github.com/showlab/MotionDirector)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.08465)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://showlab.github.io/MotionDirector/)
  
+ [LAMP: Learn A Motion Pattern for Few-Shot-Based Video Generation](https://arxiv.org/abs/2310.10769) (Oct., 2023 | CVPR 2024)  
  [![Star](https://img.shields.io/github/stars/RQ-Wu/LAMP.svg?style=social&label=Star)](https://github.com/RQ-Wu/LAMP)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2310.10769)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://rq-wu.github.io/projects/LAMP/)
  
+ [Vmc: Video motion customization using temporal attention adaption for text-to-video diffusion models](https://arxiv.org/abs/2312.00845) (Dec., 2023 | CVPR 2024)  
  [![Star](https://img.shields.io/github/stars/HyeonHo99/Video-Motion-Customization.svg?style=social&label=Star)](https://github.com/HyeonHo99/Video-Motion-Customization)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.00845)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://video-motion-customization.github.io/)
  
+ [DreamVideo: Composing Your Dream Videos with Customized Subject and Motion](https://arxiv.org/abs/2312.04433) (Dec., 2023 | CVPR 2024)  
  [![Star](https://img.shields.io/github/stars/ali-vilab/VGen.svg?style=social&label=Star)](https://github.com/ali-vilab/VGen)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04433)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dreamvideo-t2v.github.io/)

+ [MotionCtrl: A Unified and Flexible Motion Controller for Video Generation](https://arxiv.org/abs/2312.03641) (Dec., 2023 | SIGGRAPH 2024)  
  [![Star](https://img.shields.io/github/stars/TencentARC/MotionCtrl.svg?style=social&label=Star)](https://github.com/TencentARC/MotionCtrl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.03641)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wzhouxiff.github.io/projects/MotionCtrl/)

+ [Customizing Motion in Text-to-Video Diffusion Models](https://arxiv.org/abs/2312.04966) (Dec., 2023)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2312.04966)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://joaanna.github.io/customizing_motion/)

+ [Direct-a-Video: Customized Video Generation with User-Directed Camera Movement and Object Motion](https://arxiv.org/abs/2402.03162) (Feb., 2024)  
  [![Star](https://img.shields.io/github/stars/ysy31415/direct_a_video.svg?style=social&label=Star)](https://github.com/ysy31415/direct_a_video)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.03162)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://direct-a-video.github.io/)

+ [Customize-A-Video: One-Shot Motion Customization of Text-to-Video Diffusion Models](https://arxiv.org/abs/2402.14780) (Feb., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2402.14780)

+ [DreamMotion: Space-Time Self-Similar Score Distillation for Zero-Shot Video Editing](https://arxiv.org/abs/2403.12002) (Mar., 2024 | ECCV 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.12002)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://hyeonho99.github.io/dreammotion/)

+ [DragAnything: Motion Control for Anything using Entity Representation](https://arxiv.org/abs/2403.07420) (Mar., 2024 | ECCV 2024)
  [![Star](https://img.shields.io/github/stars/showlab/DragAnything.svg?style=social&label=Star)](https://github.com/showlab/DragAnything)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.07420)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://weijiawu.github.io/draganything_page/)

+ [Spectral Motion Alignment for Video Motion Transfer using Diffusion Models](https://arxiv.org/abs/2403.15249) (Mar., 2024)  
  [![Star](https://img.shields.io/github/stars/geonyeong-park/Spectral-Motion-Alignment.svg?style=social&label=Star)](https://github.com/geonyeong-park/Spectral-Motion-Alignment)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.15249)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://geonyeong-park.github.io/spectral-motion-alignment/)

+ [Motion Inversion for Video Customization](https://arxiv.org/abs/2403.20193) (Mar., 2024)  
  [![Star](https://img.shields.io/github/stars/EnVision-Research/MotionInversion.svg?style=social&label=Star)](https://github.com/EnVision-Research/MotionInversion)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.20193)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://wileewang.github.io/MotionInversion/)

+ [Edit-Your-Motion: Space-Time Diffusion Decoupling Learning for Video Motion Editing](https://arxiv.org/abs/2405.04496) (Mar., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.04496)

+ [Video Diffusion Models are Training-free Motion Interpreter and Controller](https://arxiv.org/abs/2405.14864) (May., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.14864)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://xizaoqu.github.io/moft/)

+ [Collaborative Video Diffusion: Consistent Multi-video Generation with Camera Control](https://arxiv.org/abs/2405.17414) (May., 2024)  
  [![Star](https://img.shields.io/github/stars/CollaborativeVideoDiffusion/CVD.svg?style=social&label=Star)](https://github.com/CollaborativeVideoDiffusion/CVD)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2405.17414)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://collaborativevideodiffusion.github.io/)

+ [MotionClone: Training-Free Motion Cloning for Controllable Video Generation](https://arxiv.org/abs/2406.05338) (Jun., 2024)  
  [![Star](https://img.shields.io/github/stars/Bujiazi/MotionClone.svg?style=social&label=Star)](https://github.com/Bujiazi/MotionClone/)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.05338)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://bujiazi.github.io/motionclone.github.io/)

+ [FreeTraj: Tuning-Free Trajectory Control in Video Diffusion Models](https://arxiv.org/abs/2406.16863) (Jun., 2024)  
  [![Star](https://img.shields.io/github/stars/arthur-qiu/FreeTraj.svg?style=social&label=Star)](https://github.com/arthur-qiu/FreeTraj)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.16863)
  [![Website](https://img.shields.io/badge/Website-9cf)](http://haonanqiu.com/projects/FreeTraj.html)

+ [Zero-Shot Controllable Image-to-Video Animation via Motion Decomposition](https://www.amazon.science/publications/zero-shot-controllable-image-to-video-animation-via-motion-decomposition) (Jul., 2024 | ACM MM 2024)  
  [![Website](https://img.shields.io/badge/Website-9cf)](https://img2vidanim-0.github.io/)

+ [Tora: Trajectory-oriented Diffusion Transformer for Video Generation](https://arxiv.org/abs/2407.21705) (Jul., 2024)  
  [![Star](https://img.shields.io/github/stars/alibaba/Tora.svg?style=social&label=Star)](https://github.com/alibaba/Tora)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.21705)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ali-videoai.github.io/tora_video/)

+ [Reenact Anything: Semantic Video Motion Transfer Using Motion-Textual Inversion](https://arxiv.org/abs/2408.00458) (Aug., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.00458)

### Long Video / Film Generation

+ [Honeycomb: Constant-Size Scene Memory Representation for Video World Models](https://arxiv.org/abs/2609.37690) (Sep., 2026)  
  [![Star](https://img.shields.io/github/stars/kaichen-z/HoneyComb.svg?style=social&label=Star)](https://github.com/kaichen-z/HoneyComb)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2609.37690)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jackswl.github.io/honeycomb/)

+ [A²RD: Agentic Autoregressive Diffusion for Long Video Consistency](https://arxiv.org/abs/2605.06924) (May., 2026)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2605.06924)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dxlong2000.github.io/AARD/)

+ [Stable Video Infinity: Infinite-Length Video Generation with Error Recycling](https://arxiv.org/abs/2510.09212) (Oct., 2025)    
  [![Star](https://img.shields.io/github/stars/vita-epfl/Stable-Video-Infinity.svg?style=social&label=Star)](https://github.com/vita-epfl/Stable-Video-Infinity) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2510.09212)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://stable-video-infinity.github.io/homepage/)
  
+ [AnimeShooter: A Multi-Shot Animation Dataset for Reference-Guided Video Generation](https://arxiv.org/abs/2506.03126) (Jun., 2025)    
  [![Star](https://img.shields.io/github/stars/qiulu66/Anime-Shooter.svg?style=social&label=Star)](https://github.com/qiulu66/Anime-Shooter) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2506.03126)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://qiulu66.github.io/animeshooter/)
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/collections/TencentARC/videopainter-67cc49c6146a48a2ba93d159)


+ [VideoPainter: Any-length Video Inpainting and Editing with Plug-and-Play Context Control](https://arxiv.org/abs/2503.05639) (May, 2025 | SIGGRAPH 2025)    
  [![Star](https://img.shields.io/github/stars/TencentARC/VideoPainter.svg?style=social&label=Star)](https://github.com/TencentARC/VideoPainter) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.05639)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://yxbian23.github.io/project/video-painter/)
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/collections/TencentARC/videopainter-67cc49c6146a48a2ba93d159)

+ [One-Minute Video Generation with Test-Time Training](https://arxiv.org/abs/2504.05298) (Apr., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.05298)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://test-time-training.github.io/video-dit/)
  [![Star](https://img.shields.io/github/stars/test-time-training/ttt-video-dit.svg?style=social&label=Star)](https://github.com/test-time-training/ttt-video-dit)
  
+ [Mask²DiT: Dual Mask-based Diffusion Transformer for Multi-Scene Long Video Generation](https://arxiv.org/2503.19881) (Mar., 2025 | CVPR 2025)    
  [![Star](https://img.shields.io/github/stars/Tianhao-Qi/Mask2DiT.svg?style=social&label=Star)](https://github.com/Tianhao-Qi/Mask2DiT) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.19881)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tianhao-qi.github.io/Mask2DiTProject/)

+ [Long-Context Autoregressive Video Modeling with Next-Frame Prediction](https://arxiv.org/abs/2503.19325) (Mar., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.19325)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://farlongctx.github.io/)
  [![Star](https://img.shields.io/github/stars/showlab/FAR.svg?style=social&label=Star)](https://github.com/showlab/FAR)

  
+ [MovieAgent: Automated Movie Generation via Multi-Agent CoT Planning](https://arxiv.org/abs/2503.07314) (Mar., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.07314)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://weijiawu.github.io/MovieAgent/)
  [![Star](https://img.shields.io/github/stars/showlab/MovieAgent.svg?style=social&label=Star)](https://github.com/showlab/MovieAgent)


+ [Long Context Tuning for Video Generation](https://arxiv.org/pdf/2503.10589) (Mar., 2025)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2503.10589) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://guoyww.github.io/projects/long-context-video/)


+ [RIFLEx: A Free Lunch for Length Extrapolation in Video Diffusion Transformers](https://arxiv.org/abs/2502.15894) (Feb., 2025)   
  [![Star](https://img.shields.io/github/stars/thu-ml/RIFLEx.svg?style=social&label=Star)](https://github.com/thu-ml/RIFLEx) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.15894) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://riflex-video.github.io/)

+ [VideoRAG: Retrieval-Augmented Generation with Extreme Long-Context Videos](https://arxiv.org/abs/2502.01549) (Feb., 2025)  
  [![Star](https://img.shields.io/github/stars/HKUDS/VideoRAG.svg?style=social&label=Star)](https://github.com/HKUDS/VideoRAG)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2502.01549)

+ [Ouroboros-Diffusion: Exploring Consistent Content Generation in Tuning-free Long Video Diffusion](https://arxiv.org/pdf/2501.09019) (Jan., 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.09019)

+ [VideoAuteur: Towards Long Narrative Video Generation](https://arxiv.org/abs/2501.06173) (Jan., 2025)  
  [![Star](https://img.shields.io/github/stars/lambert-x/VideoAuteur.svg?style=social&label=Star)](https://github.com/lambert-x/VideoAuteur)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.06173)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videoauteur.github.io/)

+ [DiTCtrl: Exploring Attention Control in Multi-Modal Diffusion Transformer for Tuning-Free Multi-Prompt Longer Video Generation](https://arxiv.org/abs/2412.18597) (Dec., 2024)  
  [![Star](https://img.shields.io/github/stars/TencentARC/DiTCtrl.svg?style=social&label=Star)](https://github.com/TencentARC/DiTCtrl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.18597)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://onevfall.github.io/project_page/ditctrl/)

+ [LinGen: Towards High-Resolution Minute-Length Text-to-Video Generation with Linear Computational Complexity](https://arxiv.org/abs/2412.09856) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.09856)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://lineargen.github.io/) 

+ [Owl-1: Omni World Model for Consistent Long Video Generation](https://arxiv.org/abs/2412.09600) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/huang-yh/Owl.svg?style=social&label=Star)](https://github.com/huang-yh/Owl)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.09600)

+ [Video Storyboarding: Multi-Shot Character Consistency for Text-to-Video Generation](https://arxiv.org/pdf/2412.07750) (Dec., 2024) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.07750)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/par/video_storyboarding/) 

+ [Mind the Time: Temporally-Controlled Multi-Event Video Generation](https://arxiv.org/abs/2412.05263) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.05263)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mint-video.github.io/) 

+ [GenMAC: Compositional Text-to-Video Generation with Multi-Agent Collaboration](https://arxiv.org/abs/2412.04440) (Dec., 2024)      
  [![Star](https://img.shields.io/github/stars/Karine-Huang/GenMAC.svg?style=social&label=Star)](https://github.com/Karine-Huang/GenMAC)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.04440)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://karine-h.github.io/GenMAC/) 

+ [Long Video Diffusion Generation with Segmented Cross-Attention and Content-Rich Video Data Curation](https://arxiv.org/pdf/2412.01316) (Dec., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.01316) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://presto-video.github.io/)

+ [VideoGen-of-Thought: A Collaborative Framework for Multi-Shot Video Generation](https://arxiv.org/abs/2412.02259) (Dec., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.02259)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://cheliosoops.github.io/VGoT/) 

+ [MotionCharacter: Identity-Preserving and Motion Controllable Human Video Generation](https://arxiv.org/pdf/2411.18281) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.18281)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://motioncharacter.github.io/) 

+ [Identity-Preserving Text-to-Video Generation by Frequency Decomposition](https://arxiv.org/abs/2411.17440) (Nov., 2024)      
  [![Star](https://img.shields.io/github/stars/PKU-YuanGroup/ConsisID.svg?style=social&label=Star)](https://github.com/PKU-YuanGroup/ConsisID)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.17440)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://pku-yuangroup.github.io/ConsisID/) 
  [![Dataset](https://img.shields.io/badge/Dataset-e97451)](https://huggingface.co/datasets/BestWishYsh/ConsisID-preview-Data)

+ [MovieBench: A Hierarchical Movie Level Dataset for Long Video Generation](https://arxiv.org/abs/2411.15262) (CVPR 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.15262)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://weijiawu.github.io/MovieBench/)
  [![Star](https://img.shields.io/github/stars/showlab/MovieBecnh.svg?style=social&label=Star)](https://github.com/showlab/MovieBecnh)

+ [MotionPrompt: Optical-Flow Guided Prompt Optimization for Coherent Video Generation](https://arxiv.org/pdf/2411.15540) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.15540)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://motionprompt.github.io/)
  [![Star](https://img.shields.io/github/stars/HyelinNAM/MotionPrompt.svg?style=social&label=Star)](https://github.com/HyelinNAM/MotionPrompt)

+ [DreamRunner: Fine-Grained Storytelling Video Generation with Retrieval-Augmented Motion Adaptation](https://arxiv.org/pdf/2411.16657) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.16657)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dreamrunner-story2video.github.io/)
  [![Star](https://img.shields.io/github/stars/wz0919/DreamRunner.svg?style=social&label=Star)](https://github.com/wz0919/DreamRunner)

+ [StoryMaker: Towards consistent characters in text-to-image generation](https://arxiv.org/abs/2409.12576) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2409.12576)
  [![Star](https://img.shields.io/github/stars/RedAIGC/StoryMaker.svg?style=social&label=Star)](https://github.com/RedAIGC/StoryMaker)

+ [Storynizor: Consistent Story Generation via Inter-Frame Synchronized and Shuffled ID Injection](https://arxiv.org/pdf/2409.19624) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2409.19624)

+ [ACDC: Autoregressive Coherent Multimodal Generation using Diffusion Correction](https://arxiv.org/abs/2410.04721) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.04721)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://acdc2025.github.io/)

+ [Story-Adapter: A Training-free Iterative Framework for Long Story Visualization](https://arxiv.org/abs/2410.06244) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.06244)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://jwmao1.github.io/storyadapter/)
  [![Star](https://img.shields.io/github/stars/jwmao1/story-adapter.svg?style=social&label=Star)](https://github.com/jwmao1/story-adapter)

+ [In-Context LoRA for Diffusion Transformers](https://arxiv.org/abs/2410.23775) (Aug., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.23775)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://ali-vilab.github.io/In-Context-LoRA-Page/)
  [![Star](https://img.shields.io/github/stars/ali-vilab/In-Context-LoRA.svg?style=social&label=Star)](https://github.com/ali-vilab/In-Context-LoRA)

+ [SEED-Story: Multimodal Long Story Generation with Large Language Model](https://arxiv.org/abs/2407.08683) (Jul., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.08683)
  [![Star](https://img.shields.io/github/stars/TencentARC/SEED-Story.svg?style=social&label=Star)](https://github.com/TencentARC/SEED-Story)

+ [StoryAgent: Customized Storytelling Video Generation via Multi-Agent Collaboration](https://arxiv.org/pdf/2411.04925) (Nov., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.04925)

+ [ARLON: Boosting Diffusion Transformers With Autoregressive Models for Long Video Generation](https://arxiv.org/abs/2410.20502) (Oct., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.20502)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://arlont2v.github.io/)

+ [Unbounded: A Generative Infinite Game of Character Life Simulation](https://arxiv.org/abs/2410.18975) (Oct., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.18975)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://generative-infinite-game.github.io/)

+ [Redefining Temporal Modeling in Video Diffusion: The Vectorized Timestep Approach](https://arxiv.org/abs/2410.03160) (Oct., 2024)  
  [![Star](https://img.shields.io/github/stars/Yaofang-Liu/FVDM.svg?style=social&label=Star)](https://github.com/Yaofang-Liu/FVDM) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.03160)

+ [Loong: Generating Minute-level Long Videos with Autoregressive Language Models](https://arxiv.org/abs/2410.02757) (Oct., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2410.02757)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://epiphqny.github.io/Loong-video/)

+ [DreamCinema: Cinematic Transfer with Free Camera and 3D Character](https://arxiv.org/pdf/2410.04721) (Oct., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.04721)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://acdc2025.github.io/)

+ [CinePreGen: Camera Controllable Video Previsualization via Engine-powered Diffusion](https://arxiv.org/pdf/2408.17424) (Aug., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2408.17424)

+ [DreamCinema: Cinematic Transfer with Free Camera and 3D Character](https://arxiv.org/abs/2408.12601) (Aug., 2024)  
  [![Star](https://img.shields.io/github/stars/chen-wl20/DreamCinema?tab=readme-ov-file.svg?style=social&label=Star)](https://github.com/chen-wl20/DreamCinema?tab=readme-ov-file)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.12601)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://liuff19.github.io/DreamCinema/)

+ [SkyScript-100M: 1,000,000,000 Pairs of Scripts and Shooting Scripts for Short Drama](https://arxiv.org/pdf/2408.09333) (Aug., 2024)  
  [![Star](https://img.shields.io/github/stars/vaew/SkyScript-100M.svg?style=social&label=Star)](https://github.com/vaew/SkyScript-100M)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2408.09333)

+ [Anim-Director: A Large Multimodal Model Powered Agent for Controllable Animation Video Generation](https://arxiv.org/abs/2408.09787) (Aug., 2024)  
  [![Star](https://img.shields.io/github/stars/HITsz-TMG/Anim-Director.svg?style=social&label=Star)](https://github.com/HITsz-TMG/Anim-Director)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.09787)
  
+ [Kubrick: Multimodal Agent Collaborations for Synthetic Video Generation](https://arxiv.org/pdf/2408.10453) (Aug., 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2408.10453)

+ [DreamFactory: Pioneering Multi-Scene Long Video Generation with a Multi-Agent Framework](https://arxiv.org/abs/2408.11788) (Jul, 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2408.11788)

+ [MovieDreamer: Hierarchical Generation for Coherent Long Visual Sequence](https://arxiv.org/abs/2407.16655) (Jul, 2024)  
  [![Star](https://img.shields.io/github/stars/aim-uofa/MovieDreamer.svg?style=social&label=Star)](https://github.com/aim-uofa/MovieDreamer)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.16655)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://aim-uofa.github.io/MovieDreamer/)

+ [Streetscapes: Large-scale Consistent Street View Generation Using Autoregressive Video Diffusion](https://arxiv.org/pdf/2407.13759) (Jul., 2024)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2407.13759) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://boyangdeng.com/streetscapes/)
  
+ [AutoAD-Zero: A Training-Free Framework for Zero-Shot Audio Description](https://arxiv.org/abs/2407.15850) (Jul, 2024)  
  [![Star](https://img.shields.io/github/stars/Jyxarthur/AutoAD-Zero.svg?style=social&label=Star)](https://github.com/Jyxarthur/AutoAD-Zero)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.15850)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://www.robots.ox.ac.uk/~vgg/research/autoad-zero/)

+ [AesopAgent: Agent-driven Evolutionary System on Story-to-Video Production](https://arxiv.org/abs/2403.07952) (Jul, 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2403.07952)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://aesopai.github.io/)

+ [TheaterGen: Character Management with LLM for Consistent Multi-turn Image Generation](https://arxiv.org/abs/2404.18919) (Jul, 2024)  
  [![Star](https://img.shields.io/github/stars/donahowe/Theatergen.svg?style=social&label=Star)](https://github.com/donahowe/Theatergen)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2404.18919)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://howe140.github.io/theatergen.io/)

+ [AutoStudio: Crafting Consistent Subjects in Multi-turn Interactive Image Generation](https://github.com/donahowe/AutoStudio) (Jul, 2024)  
  [![Star](https://img.shields.io/github/stars/donahowe/AutoStudio.svg?style=social&label=Star)](https://github.com/donahowe/AutoStudio)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2406.01388)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/donahowe/AutoStudio)

+ [DreamStory: Open-Domain Story Visualization by LLM-Guided Multi-Subject Consistent Diffusion](https://arxiv.org/abs/2407.12899) (Jul, 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2407.12899)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://dream-xyz.github.io/dreamstory)

+ [VideoDirectorGPT: Consistent Multi-scene Video Generation via LLM-Guided Planning](https://arxiv.org/abs/2309.15091) (Jul, 2024)  
  [![Star](https://img.shields.io/github/stars/HL-hanlin/VideoDirectorGPT.svg?style=social&label=Star)](https://github.com/HL-hanlin/VideoDirectorGPT)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2309.15091)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://videodirectorgpt.github.io/)

+ [MCVD: Masked Conditional Video Diffusion for Prediction, Generation, and Interpolation](https://arxiv.org/abs/2205.09853) (NeurIPS 2022)   
  [![Star](https://img.shields.io/github/stars/voletiv/mcvd-pytorch.svg?style=social&label=Star)](https://github.com/voletiv/mcvd-pytorch) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2205.09853) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://mask-cond-video-diffusion.github.io)

+ [NUWA-XL: Diffusion over Diffusion for eXtremely Long Video Generation](https://arxiv.org/abs/2303.12346) (Mar., 2023)   
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2303.12346) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://msra-nuwa.azurewebsites.net/#/)

+ [Flexible Diffusion Modeling of Long Videos](https://arxiv.org/abs/2205.11495) (May, 2022)   
  [![Star](https://img.shields.io/github/stars/plai-group/flexible-video-diffusion-modeling.svg?style=social&label=Star)](https://github.com/plai-group/flexible-video-diffusion-modeling) 
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2205.11495) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://fdmolv.github.io/)

### Video Generation with 3D/Physical Prior

+ [Over++: Generative Video Compositing for Layer Interaction Effects](https://arxiv.org/abs/2512.19661) (Dec, 2025)  
  [![Star](https://img.shields.io/github/stars/luchaoqi/overplusplus.svg?style=social&label=Star)](https://github.com/luchaoqi/overplusplus)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2512.19661)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://overplusplus.github.io/)
  
+ [Force Prompting: Video Generation Models Can Learn and Generalize Physics-based Control Signals](https://arxiv.org/abs/2505.19386) (May, 2025)  
  [![Star](https://img.shields.io/github/stars/brown-palm/force-prompting.svg?style=social&label=Star)](https://github.com/brown-palm/force-prompting)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2505.19386)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://force-prompting.github.io/)

+ ReVision: High-Quality, Low-Cost Video Generation with Explicit 3D Physics Modeling for Complex Motion and Interaction](https://arxiv.org/abs/2504.21855) (Apr, 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2504.21855)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://revision-video.github.io/)


+ [SyncVP: Joint Diffusion for Synchronous Multi-Modal Video Prediction](https://arxiv.org/abs/2503.18933) (CVPR 2025)

  [![Star](https://img.shields.io/github/stars/PallottaEnrico/SyncVP.svg?style=social&label=Star)](https://github.com/PallottaEnrico/SyncVP)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2503.18933) 
  [![Website](https://img.shields.io/badge/Website-9cf)](https://syncvp.github.io/)


+ [DiffusionRenderer: Neural Inverse and Forward Rendering with Video Diffusion Models](https://arxiv.org/abs/2501.18590) (Feb, 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.18590)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/)

+ [Generative Physical AI in Vision: A Survey](https://arxiv.org/abs/2501.10928) (Jan, 2025)  
  [![Star](https://img.shields.io/github/stars/BestJunYu/Awesome-Physics-aware-Generation.svg?style=social&label=Star)](https://github.com/BestJunYu/Awesome-Physics-aware-Generation)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2501.10928)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://github.com/BestJunYu/Awesome-Physics-aware-Generation)

+ [Do generative video models learn physical principles from watching videos?](https://arxiv.org/pdf/2501.09038) (Jan, 2025)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.09038)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://physics-iq.github.io/)

+ [Diffusion as Shader: 3D-aware Video Diffusion for Versatile Video Generation Control](https://arxiv.org/pdf/2501.03847) (Jan, 2025)  
  [![Star](https://img.shields.io/github/stars/IGL-HKUST/DiffusionAsShader.svg?style=social&label=Star)](https://github.com/IGL-HKUST/DiffusionAsShader)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2501.03847)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://igl-hkust.github.io/das/)

+ [Motion Dreamer: Realizing Physically Coherent Video Generation through Scene-Aware Motion Reasoning](https://arxiv.org/pdf/2412.00547) (Nov, 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2412.00547)

+ [PhyT2V: LLM-Guided Iterative Self-Refinement for Physics-Grounded Text-to-Video Generation](https://arxiv.org/abs/2412.00596) (Nov, 2024)  
  [![Star](https://img.shields.io/github/stars/pittisl/PhyT2V.svg?style=social&label=Star)](https://github.com/pittisl/PhyT2V)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2412.00596)

+ [Phys4DGen: A Physics-Driven Framework for Controllable and Efficient 4D Content Generation from a Single Image](https://arxiv.org/pdf/2411.16800) (Nov, 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.16800)

+ [PhysMotion: Physics-Grounded Dynamics From a Single Image](https://arxiv.org/abs/2411.17189) (Nov, 2024)  
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/abs/2411.17189)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://supertan0204.github.io/physmotion_website/)

+ [AutoVFX: Physically Realistic Video Editing from Natural Language Instructions](https://arxiv.org/pdf/2411.02385) (Nov, 2024)  
  [![Star](https://img.shields.io/github/stars/haoyuhsu/autovfx.svg?style=social&label=Star)](https://github.com/haoyuhsu/autovfx)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://haoyuhsu.github.io/autovfx-website/)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://haoyuhsu.github.io/autovfx-website/)

+ [How Far is Video Generation from World Model: A Physical Law Perspective](https://arxiv.org/pdf/2411.02385) (Oct, 2024)  
  [![Star](https://img.shields.io/github/stars/phyworld/phyworld.svg?style=social&label=Star)](https://github.com/phyworld/phyworld)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2411.02385)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://phyworld.github.io/)

+ [Tex4D: Zero-shot 4D Scene Texturing with Video Diffusion Models](https://arxiv.org/pdf/2410.10821) (Oct, 2024)  
  [![Star](https://img.shields.io/github/stars/ZqlwMatt/Tex4D.svg?style=social&label=Star)](https://github.com/ZqlwMatt/Tex4D)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.10821)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://tex4d.github.io/)

+ [PhyGenBench: Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation](https://arxiv.org/pdf/2410.05363) (Oct, 2024)  
  [![Star](https://img.shields.io/github/stars/OpenGVLab/PhyGenBench.svg?style=social&label=Star)](https://github.com/OpenGVLab/PhyGenBench)
  [![arXiv](https://img.shields.io/badge/arXiv-b31b1b.svg)](https://arxiv.org/pdf/2410.05363)
  [![Website](https://img.shields.io/badge/Website-9cf)](https://phygenbench123.github.io/)

+ [PhysGen: Rigid-Body Physics-Grounded Image-to-Video Generation](https://a