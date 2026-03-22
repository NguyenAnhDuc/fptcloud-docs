"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[42736],{

/***/ 638647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_code_server_use_cases_md_632_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-code-server-use-cases-md-632.json
const site_docs_gpu_container_code_server_use_cases_md_632_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/code-server-use-cases","title":"Code Server Use Cases","description":"*","source":"@site/docs/gpu-container/code-server-use-cases.md","sourceDirName":"gpu-container","slug":"/gpu-container/code-server-use-cases","permalink":"/gpu-container/code-server-use-cases","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Code Server Use Cases","title":"Code Server Use Cases","source":"https://fptcloud.com/en/documents/gpu-container/?doc=code-server-use-cases","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Billing","permalink":"/gpu-container/billing"},"next":{"title":"How to connect to a container","permalink":"/gpu-container/connect-container"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/code-server-use-cases.md


const frontMatter = {
	sidebar_label: 'Code Server Use Cases',
	title: 'Code Server Use Cases',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=code-server-use-cases',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Code Server Use Cases';

const assets = {

};



const toc = [{
  "value": "Finetune BERT on GLUE MRPC using Code Server",
  "id": "finetune-bert-on-glue-mrpc-using-code-server",
  "level": 2
}, {
  "value": "Step 1: Create a GPU Container",
  "id": "step-1-create-a-gpu-container",
  "level": 3
}, {
  "value": "Step 2: Install python3, pip",
  "id": "step-2-install-python3-pip",
  "level": 3
}, {
  "value": "Step 3: Active virtual environment",
  "id": "step-3-active-virtual-environment",
  "level": 3
}, {
  "value": "Step 4: Install required python packages",
  "id": "step-4-install-required-python-packages",
  "level": 3
}, {
  "value": "Step 5: Clone Hugging Face transformers from Github",
  "id": "step-5-clone-hugging-face-transformers-from-github",
  "level": 3
}, {
  "value": "Step 6: Finetune BERT on GLUE MRPC.",
  "id": "step-6-finetune-bert-on-glue-mrpc",
  "level": 3
}, {
  "value": "Step 7: Test model",
  "id": "step-7-test-model",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "code-server-use-cases",
        children: "Code Server Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finetune-bert-on-glue-mrpc-using-code-server",
      children: "Finetune BERT on GLUE MRPC using Code Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide will walk you through fine-tuning a pre-trained BERT model on the GLUE MRPC task using a GPU-enabled Code Server container."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-create-a-gpu-container",
      children: "Step 1: Create a GPU Container"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a container using Code Server template. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/finetune1.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/finetune2.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/finetune3.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Access to container via HTTP endpoint, the Code Server container will ask for the password, please use the password generated in container details to connect. ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/finetune4.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-install-python3-pip",
      children: "Step 2: Install python3, pip"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo apt update && sudo apt install -y python3 python3-pip python3-venv git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-active-virtual-environment",
      children: "Step 3: Active virtual environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using virtual environment to install required python packages and run training code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 -m venv ~/venv  \nsource ~/venv/bin/activate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-install-required-python-packages",
      children: "Step 4: Install required python packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install --upgrade pip  \npip install scikit-learn scipy \npip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121 \npip install datasets evaluate accelerate   \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-clone-hugging-face-transformers-from-github",
      children: "Step 5: Clone Hugging Face transformers from Github"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd /workspace    \ngit clone https://github.com/huggingface/transformers.git  \npip install –e . \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-finetune-bert-on-glue-mrpc",
      children: "Step 6: Finetune BERT on GLUE MRPC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your output will be stored at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "/tmp/bert-finetuned"
      }), ". In this step, you will fine-tune the pre-trained BERT model on the Microsoft Research Paraphrase Corpus (MRPC) task from the GLUE benchmark. This means the model will learn to classify whether two sentences are paraphrases (have the same meaning) or not."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd /workspace/transformers/examples/pytorch/text-classification \npython3 run_glue.py  \n--model_name_or_path bert-base-uncased  \n--task_name mrpc  \n--do_train  \n--do_eval  \n--per_device_train_batch_size 16  \n--learning_rate 2e-5  \n--num_train_epochs 3  \n--output_dir /tmp/bert-finetuned  \n--overwrite_output_dir \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/Screenshot-2025-06-02-at-21.54.25.png",
        alt: "Alt text"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/Screenshot-2025-06-02-at-21.54.34.png",
        alt: "Alt text"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-7-test-model",
      children: "Step 7: Test model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a file contains test script called test.py"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "from transformers import BertTokenizer, BertForSequenceClassification \nimport torch \n\n# Load fine-tuned model and tokenizer \nmodel_path = \"/tmp/bert-finetuned\" \nmodel = BertForSequenceClassification.from_pretrained(model_path) \ntokenizer = BertTokenizer.from_pretrained(\"bert-base-uncased\") \n\n# Move model to GPU \ndevice = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\") \nmodel.to(device) \nmodel.eval() \n\n# Prepare test sentence \nsentence1 = \"This is a great example!\" \nsentence2 = \"This is a demo for code server GPU Container!\" \ninputs = tokenizer(sentence1, sentence2, return_tensors=\"pt\").to(device) \n\n# Run inference \nwith torch.no_grad(): \noutputs = model(**inputs) \nlogits = outputs.logits \npredicted_class = torch.argmax(logits, dim=1).item() \n\n# Map class to label (MRPC uses 0/1) \nlabel_map = {0: \"not paraphrase\", 1: \"paraphrase\"} \nprint(f\"Sentence: {sentence1}\") \nprint(f\"Sentence: {sentence2}\") \nprint(f\"Predicted Class: {predicted_class} ({label_map[predicted_class]})\")  \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run file test.py to test the finetuned model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 test.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/06/test-output.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./ollama-use-cases",
        children: " Previous Ollama Use Cases "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./ubuntu-use-cases",
        children: " Next Ubuntu Use Cases "
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