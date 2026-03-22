---
sidebar_label: "pip install ultralytics"
title: "Jupyter Notebook Use Cases"
source: "https://fptcloud.com/en/documents/gpu-container/?doc=jupyter-notebook-tutorials"
parent: "https://fptcloud.com/en/documents/gpu-container"
lang: en
converted: "2026-03-19"
sidebar_class_name: hidden
---

# Jupyter Notebook Use Cases


* * *

This guide walks you through running an object detection model using YOLOv8 on Jupyter Notebook, from setup to inference 

  1. Create a new container using **Jupyter Notebook** [follow this guide here](<https://fptcloud.com/en/documents/fpt-gpu-container/?doc=manage-containers#contentify_0>). ![Alt text](https://fptcloud.com/wp-content/uploads/2025/05/object-detect.png)

  3. Now, pulling YOLOv8 model using terminal in the Jupyter Notebook container that we have just created


  * Step 1: Setup environment to run YOLO models, in this lab, we will use YOLOv8 to detect type of animals 


    
    
    pip install ultralytics 
    apt update && apt install -y libglib2.0-0 libgl1

  * Step 2: Install YOLOv8


    
    
    from ultralytics import YOLO  
    import cv2  
    import matplotlib.pyplot as plt  
    import torch  
    model = YOLO("yolov8l.pt") 

  * Step 3: Load model into NVIDIA GPU H100 then check whether the model is using correct GPU 


    
    
    model.to("cuda") 
    print("Model device:", model.device)  
    print("GPU available:", torch.cuda.is_available())  
    print("GPU name:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "No GPU")  
    print("Current device:", torch.cuda.current_device() if torch.cuda.is_available() else "None") 

  * Step 4: Object detecting using YOLOv8: load an image of some animals into the current workspace, run command below to detect the type of animals in the picture 


![Info Icon](https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png)

**Notice:** The picture "640px-MountainLion.jpg" in this demo is pushed from local, please upload your own image and replace into the img_path before running .
    
    
    img_path = "640px-MountainLion.jpg"  
    results = model(img_path) 
    allocated = torch.cuda.memory_allocated() / 10242 
    reserved = torch.cuda.memory_reserved() / 10242 
    print(f"Memory allocated: {allocated:.2f} MB")  
    print(f"Memory reserved: {reserved:.2f} MB") 
    results[0].show() 

[ Next vLLM Use Cases ](./vllm-use-cases)
