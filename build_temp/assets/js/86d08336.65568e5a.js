"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[75165],{

/***/ 755522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_clickhouse_use_ha_md_86d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-clickhouse-use-ha-md-86d.json
const site_docs_managed_fpt_database_engines_new_clickhouse_use_ha_md_86d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/clickhouse-use-ha","title":"2. Managed – FPT Database Engines","description":"ClickHouse - High Availability (HA)","source":"@site/docs/managed-fpt-database-engines-new/clickhouse-use-ha.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/clickhouse-use-ha","permalink":"/managed-fpt-database-engines-new/clickhouse-use-ha","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Clickhouse use ha","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=clickhouse-use-ha","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"C32G | 64 | 6448036 | 1842199 | 15350.46 | 767.49","permalink":"/managed-fpt-database-engines-new/benchmark-sysbench"},"next":{"title":"Create db","permalink":"/managed-fpt-database-engines-new/create-db"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/clickhouse-use-ha.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Clickhouse use ha',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=clickhouse-use-ha',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Q1. Điều gì xảy ra khi bật High Availability (HA) cho cụm ClickHouse?",
  "id": "q1-điều-gì-xảy-ra-khi-bật-high-availability-ha-cho-cụm-clickhouse",
  "level": 3
}, {
  "value": "Q2. Replication hoạt động ở mức server hay mức table?",
  "id": "q2-replication-hoạt-động-ở-mức-server-hay-mức-table",
  "level": 3
}, {
  "value": "Q3. Replication có phụ thuộc vào sharding trong ClickHouse không?",
  "id": "q3-replication-có-phụ-thuộc-vào-sharding-trong-clickhouse-không",
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
    strong: "strong",
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
      children: "ClickHouse - High Availability (HA)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-điều-gì-xảy-ra-khi-bật-high-availability-ha-cho-cụm-clickhouse",
      children: "Q1. Điều gì xảy ra khi bật High Availability (HA) cho cụm ClickHouse?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi tạo một cụm cơ sở dữ liệu ClickHouse với tính năng High Availability (HA) được bật, dịch vụ sẽ tự động tạo thêm replica cho mỗi shard. Tuy nhiên, để sử dụng tính năng replication, người dùng cần tạo các bảng hỗ trợ replication. Để biết thêm chi tiết, tham khảo tài liệu chính thức của ClickHouse tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication",
        children: "Replicated* table engines | ClickHouse Doc"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Replication (nhân bản dữ liệu) chỉ được hỗ trợ cho các bảng thuộc họ MergeTree, bao gồm các loại bảng sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedMergeTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedSummingMergeTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedReplacingMergeTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedAggregatingMergeTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedCollapsingMergeTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedVersionedCollapsingMergeTree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ReplicatedGraphiteMergeTree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-replication-hoạt-động-ở-mức-server-hay-mức-table",
      children: "Q2. Replication hoạt động ở mức server hay mức table?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Replication hoạt động ở mức bảng (table-level), không phải ở mức server. Do đó, trên cùng một server có thể tồn tại cả bảng có replication và bảng không có replication."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-replication-có-phụ-thuộc-vào-sharding-trong-clickhouse-không",
      children: "Q3. Replication có phụ thuộc vào sharding trong ClickHouse không?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Không. Replication không phụ thuộc vào sharding. Mỗi shard có cơ chế replication độc lập với các shard khác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ, nếu bạn tạo bảng bằng MergeTree (không phải ReplicatedMergeTree), thì bảng đó sẽ không được nhân bản, ngay cả khi cụm đã bật HA. Dữ liệu chỉ được ghi trên node nhận request ghi."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./migration-cho-sqlserver",
        children: " Previous Migration cho SQL Server "
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