"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[29211],{

/***/ 49183
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_model_fine_tuning_set_up_hyperparameters_md_2bd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-model-fine-tuning-set-up-hyperparameters-md-2bd.json
const site_docs_model_fine_tuning_set_up_hyperparameters_md_2bd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"model-fine-tuning/set-up-hyperparameters","title":"Set up Hyperparameters","description":"*","source":"@site/docs/model-fine-tuning/set-up-hyperparameters.md","sourceDirName":"model-fine-tuning","slug":"/model-fine-tuning/set-up-hyperparameters","permalink":"/model-fine-tuning/set-up-hyperparameters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Set up Hyperparameters","title":"Set up Hyperparameters","source":"https://fptcloud.com/en/documents/model-fine-tuning/?doc=set-up-hyperparameters","parent":"https://fptcloud.com/en/documents/model-fine-tuning","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Select Volume","permalink":"/model-fine-tuning/select-volume"},"next":{"title":"Set up Infrastructure","permalink":"/model-fine-tuning/set-up-infrastructure"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/model-fine-tuning/set-up-hyperparameters.md


const frontMatter = {
	sidebar_label: 'Set up Hyperparameters',
	title: 'Set up Hyperparameters',
	source: 'https://fptcloud.com/en/documents/model-fine-tuning/?doc=set-up-hyperparameters',
	parent: 'https://fptcloud.com/en/documents/model-fine-tuning',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Set up Hyperparameters';

const assets = {

};



const toc = [{
  "value": "Group 1 - General",
  "id": "group-1---general",
  "level": 3
}, {
  "value": "Group 2 - Training runtime",
  "id": "group-2---training-runtime",
  "level": 3
}, {
  "value": "Group 3 - DPO",
  "id": "group-3---dpo",
  "level": 3
}, {
  "value": "Group 4 - LoRA",
  "id": "group-4---lora",
  "level": 3
}, {
  "value": "Group 5 - Others",
  "id": "group-5---others",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "set-up-hyperparameters",
        children: "Set up Hyperparameters"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/Hyperparameters.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hyperparameters control how the model’s weights are updated during the training process. To make configuration easier, we categorize hyperparameters into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 distinct groups"
      }), " based on their function and relevance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-1---general",
      children: "Group 1 - General"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The core settings of your training process."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Batch size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of examples the model processes in one forward and backward pass before updating its weight. Large batches slow down training, but may produce more stable results."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In case of distributed training, this is batch size on each device."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epochs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An epoch is a single complete pass through your entire training data during model training. You will typically run multiple epochs so the model can iteratively refine its weights."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning rate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjusts the size of changes made to the model’s learned parameters."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0, 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max sequence length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max input length, longer sequences will be cut off to this value."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed backend"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend to use for distributed training."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDP, DeepSpeed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ZeRO stage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage to apply DeepSpeed ZeRO algorithm. Only apply when Distributed backend = DeepSpeed."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[int]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1, 2, 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Training type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which parameter mode to use."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full, LoRA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resume from checkpoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative path of the checkpoint that the training engine will resume from."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union[bool, string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No, Last checkpoint, Path/to/checkpoint"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-2---training-runtime",
      children: "Group 2 - Training runtime"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optimize the efficiency and performance of your training."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gradient accumulation steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of update steps to accumulate the gradients for, before performing a backward/update pass."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mixed precision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type of mixed precision to use."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bf16, Fp16, None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quantization bit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of bits to quantize the model using on-the-fly quantization. Currently only applicable when Training type = LoRA."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimizer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizer to use for training."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adamw, Sgd"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Weight decay"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weight decay to apply to the optimizer."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Max gradient norm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum norm for gradient clipping."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disable gradient checkpointing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether or not to disable gradient checkpointing."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True, False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flash attention v2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether to use flash attention version 2. Currently only support false."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LR warmup steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of steps used for a linear warmup from 0 to Learning rate."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LR warmup ratio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio of total training steps used for a linear warmup."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LR scheduler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learning rate scheduler to use."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear, Cosine, Constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full determinism"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ensure reproducible results in distributed training. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Important:"
            }), " this will negatively impact the performance, so only use it for debugging."]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "If True, setting Seed will not take effect."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True, False"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Seed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random seed for reproducibility."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-3---dpo",
      children: "Group 3 - DPO"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable this group when using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trainer = DPO"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DPO label smoothing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The robust DPO label smoothing parameter in DPO should be between 0 and 0.5."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 0.5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preference beta"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The beta parameter in the preference loss."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preference fine-tuning mix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SFT loss coefficient in DPO training."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preference loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The type of DPO loss to use."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sigmoid, Hinge, Ipo, Kto pair, Orpo, Simpo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SimPO gamma"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The target reward margin in SimPO loss. Used only when applicable."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0, +∞)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-4---lora",
      children: "Group 4 - LoRA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable this group when using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Training type = LoRA"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge adapter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether or not to merge the LoRA adapter into the base model to provide the final model. If not, only the LoRA adapter will be saved after training is done."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True, False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LoRA alpha"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha parameter for LoRA."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LoRA dropout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dropout rate for LoRA."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LoRA rank"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rank of the LoRA matrices."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target modules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target modules for quantization or fine-tuning."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All linear"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "group-5---others",
      children: "Group 5 - Others"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Control how fine-tuning progress is tracked and saved."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Checkpoint strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The checkpoint save strategy to adopt during training."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "“best” only applicable when Evaluation strategy is not “no”."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No, Epoch, Steps"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Checkpoint steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of training steps before two checkpoint saves if Checkpoint strategy = step."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The evaluation strategy to adopt during training."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enum[string]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No, Epoch, Steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of update steps between two evaluations if Evaluation strategy = steps."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Will default to the same value as Logging steps if not set."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No. of checkpoints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If a value is passed, it will limit the total amount of checkpoint."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, +∞)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Save best checkpoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether or not to track and keep the best checkpoint. Currently only supports False."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of steps between logging events including stdout logs and MLflow data points."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logging steps = -1 means log on every step."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, +∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or you can set up quickly hyperparameters by switching ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "toggle JSON"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/02/Hyperparameters-JSON.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./select-dataset",
        children: " Previous Select Dataset "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./set-up-infrastructure",
        children: " Next Set up Infrastructure "
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);