"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67334],{

/***/ 842197
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_huong_dan_su_dung_grafana_integration_tich_hop_alert_rule_template_md_afe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-huong-dan-su-dung-grafana-integration-tich-hop-alert-rule-template-md-afe.json
const site_docs_huong_dan_su_dung_grafana_integration_tich_hop_alert_rule_template_md_afe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"huong-dan-su-dung-grafana/integration/tich-hop-alert-rule-template","title":"2. Hướng dẫn sử dụng Grafana","description":"3.2. Tích hợp Alert rule template","source":"@site/docs/huong-dan-su-dung-grafana/integration/tich-hop-alert-rule-template.md","sourceDirName":"huong-dan-su-dung-grafana/integration","slug":"/huong-dan-su-dung-grafana/integration/tich-hop-alert-rule-template","permalink":"/huong-dan-su-dung-grafana/integration/tich-hop-alert-rule-template","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tich hop alert rule template","title":"2. Hướng dẫn sử dụng Grafana","source":"https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tich-hop-alert-rule-template","parent":"https://fptcloud.com/documents/huong-dan-su-dung-grafana","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan tich hop k8s","permalink":"/huong-dan-su-dung-grafana/integration/huong-dan-tich-hop-k8s"},"next":{"title":"Tich hop dashboard template","permalink":"/huong-dan-su-dung-grafana/integration/tich-hop-dashboard-template"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/huong-dan-su-dung-grafana/integration/tich-hop-alert-rule-template.md


const frontMatter = {
	sidebar_label: 'Tich hop alert rule template',
	title: '2. Hướng dẫn sử dụng Grafana',
	source: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana/?doc=tich-hop-alert-rule-template',
	parent: 'https://fptcloud.com/documents/huong-dan-su-dung-grafana',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Hướng dẫn sử dụng Grafana';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "2-hướng-dẫn-sử-dụng-grafana",
        children: "2. Hướng dẫn sử dụng Grafana"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.2. Tích hợp Alert rule template"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại giao diện Grafana, mở sidebar Menu"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(550735)/* ["default"] */ .A) + "",
        width: "28",
        height: "24"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apps"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fmon – Templates"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(628364)/* ["default"] */ .A) + "",
        width: "287",
        height: "382"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại giao diện Fmon – Templates, chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert rule template"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topic"
      }), " cho dịch vụ cần thêm Alert Rule"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(628285)/* ["default"] */ .A) + "",
        width: "349",
        height: "515"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate"
      }), " từng Alert rule mong muốn"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(548557)/* ["default"] */ .A) + "",
        width: "1320",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Khi trạng thái tích hợp Alert Rule chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrated"
      }), " , Alert Rule mong muốn đã được thêm vào mục Alert Rules của KH"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(174911)/* ["default"] */ .A) + "",
        width: "609",
        height: "203"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(935998)/* ["default"] */ .A) + "",
        width: "737",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tich-hop-dashboard-template",
        children: " Previous 3.1. Tích hợp Dashboard Template "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tich-hop-monitoring-kubernetes",
        children: " Next 4. Hướng dẫn tích hợp Monitoring Kubernetes "
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

/***/ 935998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17e208185181-Screenshot_11-4dcd79f6ef708c220f349df1410f4407.png");

/***/ },

/***/ 174911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3b3797a40bab-Screenshot_10-6fb0ad44a61655f7eb9bed6b03cb6009.png");

/***/ },

/***/ 628364
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4e0e3943d8c0-Screenshot_7-814242ae390d98b93377efdc19fc7766.png");

/***/ },

/***/ 550735
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAMAAADeQm2wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwUExURRgbHxATFw0QEw4RFRYZHRcaHjk7QkdKUUZIT0dJUUBDSR4gJRUYHBQXGxodIaemtOPi9Nzc7eLh88PD0zE0Og8SFjo8Q0lLUkhLUkFDSh0gJQQHCgAAAgAAAwAEBhMXGhkcIFtdZXh5hHV2gXh5g2lrdSQnLBMWGpycqdTU5M7O3tPT47a2xS8yNyAiJyMmKyMmKiEkKQ0RFAkMEAoNEAsPEn1+iamptqSlsaiptZKTnyosMhEUGBkcIX5+iampt6SlsqiptpGTnxcaHREUFw8SFQ8RFRASFhYYHBcZHRYZHBUYGxUXGxQXHBUXHBQWG3KaBakAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADOSURBVChTzcz9UoJAFAXwS+2m6IKmZpqUaGr5UZRoZVmZWgEFvP/bxC47c3eUB+j3x7kz58wu/FPageqQyJomCBzl8kgvFBmvqRgNs1Q+RpVq7QRHAvVTHTWaZ8pLSlvWObIu2mktktmd7iXq9QdXOBrm9XCExpMbDUdKb5075NzLVp6pO0PunKW1SGY/PD6hxfPLUhlf395X6GOtjnSz/fxSfHuipeD7PiEkYCovaTiQNxOOwT4IPE7+twNE/mSD3yRYGGWCKDS4eF8c/wFra0CL5P7uNAAAAABJRU5ErkJggg==");

/***/ },

/***/ 628285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ca3c0b947d8f-Screenshot_8-99c611ac9e28729c9b3da64c1597afc4.png");

/***/ },

/***/ 548557
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cc567b1ae52a-Screenshot_9-2f27e912420df0f3be52da3b4c80a90e.png");

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