---
sidebar_label: "Text similarity: Measures similarity metrics between model outputs and reference texts."
title: "(Standard) Test Criteria"
source: "https://fptcloud.com/en/documents/model-testing-test-jobs/?doc=standard-test-criteria"
parent: "https://fptcloud.com/en/documents/model-testing-test-jobs"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# (Standard) Test Criteria


* * *

![Alt text](https://fptcloud.com/wp-content/uploads/2025/09/Test-criteria.png)


     * Text similarity: Measures similarity metrics between model outputs and reference texts.


The following metrics of **Text similarity** are available:

Test criteria / Metric | How it tests | Best for  
---|---|---  
BLEU | Measures how precisely a model’s output matches reference text using n-gram overlap. | Evaluating translation and short text similarity.  
Fuzzy Match | Measures how closely the model’s output resembles the reference text, allowing for minor differences in wording or order. | Checking approximate correctness.  
ROUGE-1 | Measures unigram (single word) overlap between model output and reference text. | Short summarization and text generation tasks.  
ROUGE-2 | Measures bigram (two-word sequence) overlap between model output and reference text. | Evaluating contextual accuracy.  
ROUGE-L | Measures the longest common subsequence (LCS) between model output and reference text to capture fluency and word order similarity. | Longer text evaluation where structure matters.  
ROUGE-LSUM | Measures LCS-based similarity across multiple sentences, suitable for evaluating longer summaries. | Summarization tasks.  
  
[ Previous (Standard) Select Test Data ](./standard-select-test-data) [ Next (Others) Tasks ](./others-tasks)
