---
sidebar_label: "トレーニング設定"
title: "トレーニング設定"
source: "https://fptcloud.com/ja/documents/model-fine-tuning-ja/?doc=training-configuration"
parent: "https://fptcloud.com/ja/documents/model-fine-tuning-ja"
lang: ja
converted: "2026-03-19"
sidebar_class_name: hidden
---

# トレーニング設定


* * *

### **適切なトレーニング構成を選択するにはどうすればよいですか?**

**1\. モデルを微調整する必要がある GPU の数**

モデルのサイズによって異なります。

  * **< １０億パラメータ**：1 GPU(24 GB VRAM)で十分です
  * **７０億モデル** : 2–4 GPU (各 40 GB VRAM)
  * **１３０億モデル** : 4–8 GPU を推奨
  * **３００億以上モデル** : 8+ GPU とマルチノード セットアップが必要


**2\. 複数のノードが必要ですか、それとも 1 つのノードだけが必要ですか?**

  * 小規模から中規模のモデル (最大１３０億) の場合、複数の GPU を搭載した 1 つのノードで十分です。
  * 大規模モデル (３００億以上) の場合、メモリとパフォーマンスを向上させるために、マルチノード セットアップをお勧めします。


**3\. 必要な最小 GPU メモリはいくつですか?**

  * **GPU あたり少なくとも 24GB**(標準の微調整用)。
  * 8〜16 GBの**VRAM** を搭載したGPUでは、**LoRA** または**QLoRA** メソッドを使用して微調整できます。


**例：**

モデル：Llama-3.1-8B-Instruct

  * トレーニングタイプ：フル 
    * GPUの数：2つのGPUに収まる(約99%の使用率) -> 4つのGPUにより、より一貫したランタイム
    * 分散バックエンド：DeepSeed
    * ZeROステージ：3
    * デバイスあたりのバッチサイズ：1
    * 他のすべてのパラメータはデフォルトのままにしておくことができます
  * トレーニングタイプ：LoRA 
    * GPUの数：1つのGPUに収まる
    * LoRAランク：16
    * デバイスあたりのバッチサイズ：1
    * 他のすべてのパラメータはデフォルトのままにしておくことができます
  * 最適なトレーニング設定を計算するには、こちらを参照してください: <https://rahulschand.github.io/gpu_poor/> (オーバーヘッド10-20%)


[ Previous パイプライン作成 ](./create-pipeline) [ Next データ形式を選択  ](./select-data-format)
