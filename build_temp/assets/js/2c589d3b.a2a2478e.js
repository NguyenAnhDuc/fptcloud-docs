"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[72785],{

/***/ 123690
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_incident_management_integration_grafana_webhook_md_2c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-incident-management-integration-grafana-webhook-md-2c5.json
const site_docs_incident_management_integration_grafana_webhook_md_2c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"incident-management/integration/grafana-webhook","title":"2. Incident Management","description":"B. Grafana webhook","source":"@site/docs/incident-management/integration/grafana-webhook.md","sourceDirName":"incident-management/integration","slug":"/incident-management/integration/grafana-webhook","permalink":"/incident-management/integration/grafana-webhook","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Grafana webhook","title":"2. Incident Management","source":"https://fptcloud.com/documents/incident-management/?doc=grafana-webhook","parent":"https://fptcloud.com/documents/incident-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Create by incoming webhook","permalink":"/incident-management/integration/create-by-incoming-webhook"},"next":{"title":"Incoming webhook","permalink":"/incident-management/integration/incoming-webhook"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/incident-management/integration/grafana-webhook.md


const frontMatter = {
	sidebar_label: 'Grafana webhook',
	title: '2. Incident Management',
	source: 'https://fptcloud.com/documents/incident-management/?doc=grafana-webhook',
	parent: 'https://fptcloud.com/documents/incident-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Incident Management';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-incident-management",
        children: "2. Incident Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "B. Grafana webhook"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cho phép người dùng khai báo incident từ hệ thống ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grafana"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên menu của Incident Management, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      }), " => Vào phần Grafana webhook, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Show details"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ sau minh họa cách đẩy incident bằng incomming webhook:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "curl incident-stg-incident.fci.fmon.fptcloud.com/api/v1/create_incident_from_grafana --header 'Authorization: 92d8d6da870248e737d0a12f7d717da3' --header 'Content-Type: application/json' --data '{ \"alerts\": [ { \"status\": \"firing\", \"labels\": { \"alertname\": \"[TEST] Warning-JACCS-MYSQL Connection is higher than 88000\", \"host\": \"Jlos-cluster-gyw6lb08-master1\", \"server\": \"10.42.5.3:3306\" }, \"annotations\": { }, \"valueString\": \"\" } ] }'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./incoming-webhook",
        children: " Previous A. Incoming webhook "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./outgoing-webhook",
        children: " Next C. Outgoing webhook "
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