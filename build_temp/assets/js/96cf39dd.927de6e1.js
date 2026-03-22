"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[1929],{

/***/ 663521
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_container_registry_2_tag_va_push_image_len_fpt_container_registry_md_96c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-container-registry-2-tag-va-push-image-len-fpt-container-registry-md-96c.json
const site_docs_fpt_container_registry_2_tag_va_push_image_len_fpt_container_registry_md_96c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-container-registry-2/tag-va-push-image-len-fpt-container-registry","title":"2. FPT Container Registry","description":"Tag và Push image lên FPT Container Registry","source":"@site/docs/fpt-container-registry-2/tag-va-push-image-len-fpt-container-registry.md","sourceDirName":"fpt-container-registry-2","slug":"/fpt-container-registry-2/tag-va-push-image-len-fpt-container-registry","permalink":"/fpt-container-registry-2/tag-va-push-image-len-fpt-container-registry","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tag va push image len fpt container registry","title":"2. FPT Container Registry","source":"https://fptcloud.com/documents/fpt-container-registry-2/?doc=tag-va-push-image-len-fpt-container-registry","parent":"https://fptcloud.com/documents/fpt-container-registry-2","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Stop scan","permalink":"/fpt-container-registry-2/stop-scan"},"next":{"title":"Tao moi robot account","permalink":"/fpt-container-registry-2/tao-moi-robot-account"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-container-registry-2/tag-va-push-image-len-fpt-container-registry.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tag va push image len fpt container registry',
	title: '2. FPT Container Registry',
	source: 'https://fptcloud.com/documents/fpt-container-registry-2/?doc=tag-va-push-image-len-fpt-container-registry',
	parent: 'https://fptcloud.com/documents/fpt-container-registry-2',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Container Registry';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "2-fpt-container-registry",
        children: "2. FPT Container Registry"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tag và Push image lên FPT Container Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện tag và push một images tới FPT Container Registry, người dùng thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tag một images ở máy local đến URI của FPT Container Registry bằng câu lệnh sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<> /REPOSITORY[:TAG] \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<> sẽ được tự động điền nếu bạn lấy câu lệnh từ FPT Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docker tag docker:20.10.12-dind registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Sau khi tag xong images tới URI Registry FPT Cloud, thực hiện push images"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docker push registry.fke.fptcloud.com//<>/REPOSITORY[:TAG] \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong đó:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<> sẽ được tự động điền nếu bạn lấy câu lệnh từ FPT Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "docker push registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bước 3: Kiểm tra kết quả push images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(456530)/* ["default"] */ .A) + "",
        width: "627",
        height: "154"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(75342)/* ["default"] */ .A) + "",
        width: "627",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./docker-login",
        children: " Previous Docker Login "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./pull-docker-image-tu-fpt-container-registry-ve-local",
        children: " Next Pull docker image từ FPT Container Registry về local "
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

/***/ 75342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6e60be56925c-Picture12-2-e16e6c2d632d993749f59ba1187d9b6f.png");

/***/ },

/***/ 456530
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9de7f6f9c317-Picture11-1-1e0529fe7d0fed2382640da3fb562354.png");

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