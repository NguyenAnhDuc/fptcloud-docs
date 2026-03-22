"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[14066],{

/***/ 724014
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_network_connectivity_md_99f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-network-connectivity-md-99f.json
const site_docs_managed_fpt_database_engines_new_network_connectivity_md_99f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/network-connectivity","title":"2. Managed – FPT Database Engines","description":"Kết nối mạng và khả năng truy cập","source":"@site/docs/managed-fpt-database-engines-new/network-connectivity.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/network-connectivity","permalink":"/managed-fpt-database-engines-new/network-connectivity","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Network connectivity","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=network-connectivity","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Managed – FPT Database Engines","permalink":"/managed-fpt-database-engines-new/mysql-troubleshooting"},"next":{"title":"Notification","permalink":"/managed-fpt-database-engines-new/notification"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/network-connectivity.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Network connectivity',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=network-connectivity',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Endpoint kết nối Database",
  "id": "endpoint-kết-nối-database",
  "level": 3
}, {
  "value": "Truy cập Private và Public",
  "id": "truy-cập-private-và-public",
  "level": 3
}, {
  "value": "Security Groups và Floating IP",
  "id": "security-groups-và-floating-ip",
  "level": 3
}, {
  "value": "Security Groups",
  "id": "security-groups",
  "level": 4
}, {
  "value": "Floating IP",
  "id": "floating-ip",
  "level": 4
}, {
  "value": "Lưu ý bảo mật:",
  "id": "lưu-ý-bảo-mật",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
      children: "Kết nối mạng và khả năng truy cập"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này mô tả cách ứng dụng kết nối đến database trong môi trường DBaaS, bao gồm endpoint, mô hình truy cập và các cơ chế kiểm soát bảo mật mạng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "endpoint-kết-nối-database",
      children: "Endpoint kết nối Database"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database Endpoint là điểm truy cập được cung cấp để ứng dụng kết nối đến database. Tùy theo mô hình triển khai, endpoint có thể trỏ đến:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Một database instance (Single Node)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Một DB Proxy đại diện cho database cluster (HA)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc sử dụng endpoint giúp tách biệt logic ứng dụng khỏi kiến trúc database, giảm tác động khi có thay đổi hoặc failover."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truy-cập-private-và-public",
      children: "Truy cập Private và Public"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Database Engine hỗ trợ hai mô hình truy cập:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Private Access: Database chỉ cho phép kết nối từ mạng nội bộ (VPC/VNet), phù hợp cho hệ thống yêu cầu bảo mật cao."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public Access: Database cung cấp endpoint public, cho phép kết nối từ Internet với các biện pháp bảo mật bổ sung."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc lựa chọn mô hình truy cập cần cân nhắc đến yêu cầu bảo mật, hiệu năng và kiến trúc ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-groups-và-floating-ip",
      children: "Security Groups và Floating IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong môi trường DBaaS, Security Groups và Floating IP được sử dụng để kiểm soát và quản lý khả năng truy cập mạng đến database một cách linh hoạt và an toàn."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "security-groups",
      children: "Security Groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security Group là tập hợp các rule firewall dạng stateful, cho phép hoặc từ chối lưu lượng mạng vào/ra database instance dựa trên:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP address / CIDR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Port"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security Groups giúp giới hạn phạm vi truy cập database theo nguyên tắc least privilege, chỉ cho phép các nguồn kết nối hợp lệ như:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ứng dụng trong cùng VPC/VNet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bastion host hoặc hệ thống quản trị được ủy quyền."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thay đổi đối với Security Group có hiệu lực ngay lập tức và không yêu cầu khởi động lại database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "floating-ip",
      children: "Floating IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Floating IP là địa chỉ IP public có thể gán hoặc hủy gán động cho database instance, cho phép truy cập database từ Internet khi cần thiết."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Floating IP thường được sử dụng trong các trường hợp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết nối từ hệ thống bên ngoài Cloud (on-premises, third-party services)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Truy cập quản trị hoặc vận hành tạm thời."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môi trường testing hoặc tích hợp."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi sử dụng Floating IP, người dùng bắt buộc phải kết hợp với Security Groups để:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Giới hạn dải IP được phép truy cập."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chỉ mở các port database cần thiết (ví dụ: 3306, 5432, 1433)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lưu-ý-bảo-mật",
      children: "Lưu ý bảo mật:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floating IP chỉ nên được bật khi thực sự cần thiết."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khuyến nghị sử dụng Private Access cho môi trường production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Luôn kiểm soát rule Security Group theo nguyên tắc minimum exposure."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./deployment-model",
        children: " Previous Mô hình triển khai "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./maintenance",
        children: " Next Bảo trì dịch vụ "
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