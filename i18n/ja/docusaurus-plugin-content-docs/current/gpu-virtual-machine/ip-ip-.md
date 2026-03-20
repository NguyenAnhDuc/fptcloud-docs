---
sidebar_label: "IPアドレス（フローティングIP）の割り当て"
title: "IPアドレス（フローティングIP）の割り当て"
source: "https://fptcloud.com/ja/documents/gpu-virtual-machine/?doc=IPアドレス（フローティングIP）の割り当て"
parent: "https://fptcloud.com/ja/documents/gpu-virtual-machine"
lang: ja
converted: "2026-03-19"
sidebar_class_name: hidden
---

# IPアドレス（フローティングIP）の割り当て


* * *

**ステップ1：** GPU VMを正常に作成したら、 **[Network] > [Floating IPs]** に移動します。

![Alt text](http://fptcloud.com/wp-content/uploads/2024/12/12-1.png)

**ステップ2：**** 「Allocate IP address」**ボタンをクリックして、新しい** フローティングIP**を作成します。

**ステップ3：**** 「Allocate IP address」**ポップアップウィンドウで、次のフィールドに入力します。

  * **IPアドレス：** 利用可能なIPを**選択する** か、割り当てが許す場合は**「プールから新規割り当て」** を選択して新しいIP をリクエストします。

  * **リソース：「インスタンス」** を選択し、新規作成した**GPU VM** を選択して、フローティングIPに関連付けます。

  * **IPポート:インスタンスポート（22）** と同じ設定を推奨します。

  * **インスタンスポート:22** に設定する必要があります。

  * **タグを追加：** オプション、リソース管理を改善します。


**ステップ4:** 詳細を入力したら、**「Allocate floating IP」** をクリックして確認します。新しく作成されたフローティングIPがリストに表示されます。

![Alt text](http://fptcloud.com/wp-content/uploads/2024/12/13-1.png)
