"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26493],{

/***/ 43587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gpu_virtual_machine_custom_images_md_588_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gpu-virtual-machine-custom-images-md-588.json
const site_docs_gpu_virtual_machine_custom_images_md_588_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gpu-virtual-machine/custom-images","title":"Custom Images","description":"*","source":"@site/docs/gpu-virtual-machine/custom-images.md","sourceDirName":"gpu-virtual-machine","slug":"/gpu-virtual-machine/custom-images","permalink":"/gpu-virtual-machine/custom-images","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Custom Images","title":"Custom Images","source":"https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=custom-images","parent":"https://fptcloud.com/en/documents/gpu-virtual-machine-en","lang":"en","converted":"2026-03-19","sidebar_class_name":"hidden"},"sidebar":"defaultSidebar","previous":{"title":"Create a Subnet","permalink":"/gpu-virtual-machine/create-a-subnet"},"next":{"title":"FAQ","permalink":"/gpu-virtual-machine/faq"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gpu-virtual-machine/custom-images.md


const frontMatter = {
	sidebar_label: 'Custom Images',
	title: 'Custom Images',
	source: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en/?doc=custom-images',
	parent: 'https://fptcloud.com/en/documents/gpu-virtual-machine-en',
	lang: 'en',
	converted: '2026-03-19',
	sidebar_class_name: 'hidden'
};
const contentTitle = 'Custom Images';

const assets = {

};



const toc = [{
  "value": "Upload a Custom Image",
  "id": "upload-a-custom-image",
  "level": 3
}, {
  "value": "Delete a Custom Image",
  "id": "delete-a-custom-image",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "custom-images",
        children: "Custom Images"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can create ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU VMs"
      }), " based on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "custom images"
      }), " , which lets you migrate and scale your workloads without spending time recreating your environment from scratch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2025/03/Custom-Images-1.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "upload-a-custom-image",
      children: "Upload a Custom Image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "QCOW"
      }), " file format is supported for uploading GPU VMs here. For other file formats, please ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contact us"
      }), " for further assistance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " From the menu, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine > Custom Image"
      }), ". Then click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload Image"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Enter the required information and choose the file from your machine. Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload"
      }), " to begin the upload process."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-a-custom-image",
      children: "Delete a Custom Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you no longer need a Custom Image, you can delete it by following these steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " From the menu, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Image"
      }), " , then under the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " menu for the image you wish to delete, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " A confirmation pop-up will appear. To proceed with the deletion, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Custom Image"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./fpt_images",
        children: " Previous FPT Images "
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