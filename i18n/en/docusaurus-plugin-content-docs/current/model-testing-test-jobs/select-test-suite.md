---
sidebar_label: "Select Test Suite"
title: "Select Test Suite"
source: "https://fptcloud.com/en/documents/model-testing-test-jobs/?doc=select-test-suite"
parent: "https://fptcloud.com/en/documents/model-testing-test-jobs"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Select Test Suite


* * *

Select the appropriate test suite - which tests the model.

![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/Create-New-Job-Select-Test-Suite.png)

We offer this test suite:

Test suite | Purpose | Best for | Tasks  
---|---|---|---  
Standard | Evaluate models using your own dataset. | Internal benchmarks, domain-specific tasks (e.g., finance, medical, …) | \- Test similarity  
\- BLEU  
\- Fuzzy match  
\- ROUGE-1  
\- ROUGE-2  
\- ROUGE-L  
\- ROUGE-LSUM  
Nejumi Leaderboard 3 | Benchmark LLMs, especially for Japanese language tasks.  
  
Reference: [Nejumi Leaderboard 3](<https://wandb.ai/wandb-japan/llm-leaderboard3/reports/Nejumi-LLM-Leaderboard3--Vmlldzo4NDkwODEy>) | Comparing LLMs on Japanese language tasks. | \- Jaster  
\- JBBQ  
\- JtruthfulQA  
LM Evaluation Harness | General framework to benchmark language models across many standard NLP benchmarks.  
  
Reference: [LM Evaluation Harness](<https://github.com/EleutherAI/lm-evaluation-harness>) | Evaluating English-centric LLMs and ensuring comparability with research literature | \- ARC  
\- GSM8K  
\- HellaSwag  
\- HumanEval  
\- IFEval  
\- LAMBADA  
\- MMLU  
\- OpenBookQA  
\- PIQA  
\- SciQ  
\- TruthfulQA  
\- WinoGrande  
VLM Evaluation Kit | Evaluate VLMs (Vision-Language Models) on multimodal tasks.  
  
Reference: [VLMEvalKit](<https://github.com/open-compass/VLMEvalKit>) | Testing multimodal models | \- ChartQA  
\- DocVQA  
\- InfoVQA  
\- MTVQA  
\- OCRBench  
  
[ Previous Select Model ](./select-model) [ Next (Standard) Select Data Format ](./standard-select-data-format)
