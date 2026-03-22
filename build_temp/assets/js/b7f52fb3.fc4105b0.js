"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[13488],{

/***/ 468165
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_initial_deployment_model_md_b7f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-initial-deployment-model-md-b7f.json
const site_docs_managed_fpt_database_engines_new_initial_deployment_model_md_b7f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/initial/deployment-model","title":"2. Managed – FPT Database Engines","description":"Mô hình triển khai","source":"@site/docs/managed-fpt-database-engines-new/initial/deployment-model.md","sourceDirName":"managed-fpt-database-engines-new/initial","slug":"/managed-fpt-database-engines-new/initial/deployment-model","permalink":"/managed-fpt-database-engines-new/initial/deployment-model","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Deployment model","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=deployment-model","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Deactive db service","permalink":"/managed-fpt-database-engines-new/initial/deactive-db-service"},"next":{"title":"Fde glossary","permalink":"/managed-fpt-database-engines-new/initial/fde-glossary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/initial/deployment-model.md


const frontMatter = {
	sidebar_label: 'Deployment model',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=deployment-model',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Mô hình Single Node",
  "id": "mô-hình-single-node",
  "level": 3
}, {
  "value": "Mô hình High Availability (HA / Cluster)",
  "id": "mô-hình-high-availability-ha--cluster",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô hình triển khai"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này mô tả các mô hình triển khai database được hỗ trợ trong dịch vụ FPT Database Engine, giúp người dùng lựa chọn kiến trúc phù hợp với yêu cầu về tính sẵn sàng, hiệu năng và chi phí."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mô-hình-single-node",
      children: "Mô hình Single Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô hình Single Node triển khai database trên một node duy nhất, bao gồm đầy đủ tài nguyên compute (vCPU, RAM) và storage. Mô hình này không hỗ trợ failover tự động và phụ thuộc vào trạng thái hoạt động của node."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô hình Single Node phù hợp với:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môi trường Development / Testing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ứng dụng có tải thấp hoặc trung bình."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trường hợp ưu tiên đơn giản hóa kiến trúc và tối ưu chi phí."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đặc điểm chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Một database instance duy nhất."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Không có node dự phòng."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup được thực hiện định kỳ theo cấu hình dịch vụ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thời gian gián đoạn có thể xảy ra khi node gặp sự cố hoặc trong quá trình bảo trì."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mô-hình-high-availability-ha--cluster",
      children: "Mô hình High Availability (HA / Cluster)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mô hình High Availability (HA / Cluster) triển khai database trên nhiều node, bao gồm primary node và một hoặc nhiều standby/replica nodes, nhằm đảm bảo tính sẵn sàng cao và khả năng chịu lỗi."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong mô hình này, database được giám sát liên tục. Khi primary node gặp sự cố, hệ thống sẽ tự động thực hiện failover sang node dự phòng, giúp giảm thiểu downtime và đảm bảo tính liên tục của dịch vụ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đặc điểm chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triển khai nhiều node trong cùng hoặc khác Availability Zone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hỗ trợ automatic failover."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Có thể kết hợp với DB Proxy để định tuyến kết nối."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phù hợp cho môi trường Production và hệ thống quan trọng."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lợi ích:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Giảm thiểu thời gian gián đoạn dịch vụ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tăng độ tin cậy và khả năng phục hồi."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hỗ trợ mở rộng đọc thông qua replica (nếu được cấu hình)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./version-list",
        children: " Previous Danh mục version hỗ trợ "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./network-connectivity",
        children: " Next Kết nối mạng và khả năng truy cập "
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