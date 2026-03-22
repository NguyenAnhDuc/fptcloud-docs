"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[52172],{

/***/ 909357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_container_jupyter_notebook_tutorials_md_6a4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-container-jupyter-notebook-tutorials-md-6a4.json
const site_docs_gpu_container_jupyter_notebook_tutorials_md_6a4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-container/jupyter-notebook-tutorials","title":"Jupyter Notebook Use Cases","description":"*","source":"@site/docs/gpu-container/jupyter-notebook-tutorials.md","sourceDirName":"gpu-container","slug":"/gpu-container/jupyter-notebook-tutorials","permalink":"/gpu-container/jupyter-notebook-tutorials","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Jupyter Notebook Use Cases","title":"Jupyter Notebook Use Cases","source":"https://fptcloud.com/en/documents/gpu-container/?doc=jupyter-notebook-tutorials","parent":"https://fptcloud.com/en/documents/gpu-container","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"GPU Container","permalink":"/gpu-container/"},"next":{"title":"How to monitor container","permalink":"/gpu-container/logs-and-monitoring"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-container/jupyter-notebook-tutorials.md


const frontMatter = {
	sidebar_label: 'Jupyter Notebook Use Cases',
	title: 'Jupyter Notebook Use Cases',
	source: 'https://fptcloud.com/en/documents/gpu-container/?doc=jupyter-notebook-tutorials',
	parent: 'https://fptcloud.com/en/documents/gpu-container',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Jupyter Notebook Use Cases';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "jupyter-notebook-use-cases",
        children: "Jupyter Notebook Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide walks you through running an object detection model using YOLOv8 on Jupyter Notebook, from setup to inference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a new container using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Jupyter Notebook"
          }), " ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/en/documents/fpt-gpu-container/?doc=manage-containers#contentify_0",
            children: "follow this guide here"
          }), ". ", (0,jsx_runtime.jsx)(_components.img, {
            src: "https://fptcloud.com/wp-content/uploads/2025/05/object-detect.png",
            alt: "Alt text"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Now, pulling YOLOv8 model using terminal in the Jupyter Notebook container that we have just created"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step 1: Setup environment to run YOLO models, in this lab, we will use YOLOv8 to detect type of animals"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "pip install ultralytics\napt update && apt install -y libglib2.0-0 libgl1"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step 2: Install YOLOv8"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["from ultralytics import YOLO", (0,jsx_runtime.jsx)(_components.br, {}), "\nimport cv2", (0,jsx_runtime.jsx)(_components.br, {}), "\nimport matplotlib.pyplot as plt", (0,jsx_runtime.jsx)(_components.br, {}), "\nimport torch", (0,jsx_runtime.jsx)(_components.br, {}), "\nmodel = YOLO(\"yolov8l.pt\")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step 3: Load model into NVIDIA GPU H100 then check whether the model is using correct GPU"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["model.to(\"cuda\")\nprint(\"Model device:\", model.device)", (0,jsx_runtime.jsx)(_components.br, {}), "\nprint(\"GPU available:\", torch.cuda.is_available())", (0,jsx_runtime.jsx)(_components.br, {}), "\nprint(\"GPU name:\", torch.cuda.get_device_name(0) if torch.cuda.is_available() else \"No GPU\")", (0,jsx_runtime.jsx)(_components.br, {}), "\nprint(\"Current device:\", torch.cuda.current_device() if torch.cuda.is_available() else \"None\")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step 4: Object detecting using YOLOv8: load an image of some animals into the current workspace, run command below to detect the type of animals in the picture"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/05/information-fill-1.png",
        alt: "Info Icon"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Notice:"
      }), " The picture \"640px-MountainLion.jpg\" in this demo is pushed from local, please upload your own image and replace into the img_path before running ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "img_path = \"640px-MountainLion.jpg\"  \nresults = model(img_path) \nallocated = torch.cuda.memory_allocated() / 10242 \nreserved = torch.cuda.memory_reserved() / 10242 \nprint(f\"Memory allocated: {allocated:.2f} MB\")  \nprint(f\"Memory reserved: {reserved:.2f} MB\") \nresults[0].show() \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./vllm-use-cases",
        children: " Next vLLM Use Cases "
      })
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