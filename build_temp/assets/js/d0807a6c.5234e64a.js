"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[32102],{

/***/ 769506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_tich_hop_fmon_md_d08_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-tich-hop-fmon-md-d08.json
const site_docs_load_balancer_tich_hop_fmon_md_d08_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/tich-hop-fmon","title":"Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)","description":"*","source":"@site/docs/load-balancer/tich-hop-fmon.md","sourceDirName":"load-balancer","slug":"/load-balancer/tich-hop-fmon","permalink":"/load-balancer/tich-hop-fmon","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)","title":"Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)","source":"https://fptcloud.com/documents/load-balancer/?doc=tich-hop-fmon","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Theo dõi biểu đồ giám sát Load Balancer","permalink":"/load-balancer/theo-doi-bieu-do-load-balancer"},"next":{"title":"Load Balancer","permalink":"/load-balancer/xem-thong-tin-chi-tiet-ssl-certificate"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/tich-hop-fmon.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)',
	title: 'Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=tich-hop-fmon',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)';

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
        id: "tích-hợp-metricaccess-logs-load-balancer-với-fpt-monitoring-fmon",
        children: "Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Là tính năng được tích hợp với dịch vụ FPT Monitoring (FMON) giúp người dùng có thể đẩy Access logs hoặc Metric của Load Balancer về các Workspace Monitoring nhằm xem và phân tích log/metric dễ dàng qua giao diện trực quan của Grafana đặc biệt khi cần troubleshoot các sự cố liên quan Để tích hợp Access logs/Metric Load Balancer với FMON, VPC khách hàng cần có sẵn workspace monitor của FMON với quota phù hợp với nhu cầu lưu trữ. Sau đó thực hiện các bước như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn xem chi tiết Load Balancer cần tích hợp > Integration Tại đây sẽ hiển thị danh sách các Monitoring workspace của VPC có thể sử dụng để tích hợp Metric/Logs LB ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(609995)/* ["default"] */ .A) + "",
        width: "1919",
        height: "946"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Bấm vào nút Integrate để tích hợp từ LB sang FMON > xuất hiện popup Confirmation > Confirm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(566242)/* ["default"] */ .A) + "",
        width: "1919",
        height: "944"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi tích hợp với FMON > màn hình sẽ chuyển trạng thái từ Disable sang Integrating, người dùng chờ 1-2 phút để tích hợp > Integrate status có trạng thái Enable"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(525184)/* ["default"] */ .A) + "",
        width: "1918",
        height: "947"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Người dùng bấm vào đường link ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dashboard URL"
      }), " > xuất hiện trang Grafana để người dùng đăng nhập:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.1"
      }), " Người dùng lấy thông tin User từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Authentication"
      }), " – Username và Password từ Basic Authentication – Password sau đó bấm Log In. -> Xuất hiện trang chủ Grafana"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với Access logs LB"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.2"
      }), " Người dùng bấm vào thanh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Toggle Menu"
      }), " cạnh Home > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Explore"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loki"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.3"
      }), " Xuất hiện Label filter: chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Label"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " > bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run Query"
      }), " -> Màn hình sẽ xuất hiện logs của Load Balancer"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với Metric LB"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống đã tạo sẵn dashboard template đễ theo dõi metric LB trực quan nhất. Người dùng có thể sử dụng dashboard này hoặc tự build dashboard mới tùy theo nhu cầu sử dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.2"
      }), " Người dùng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Home"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dashboard"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LB_Dashboard"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4.3"
      }), " Chọn LB cần xem và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run query"
      }), " để theo dõi Dashboard"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./access-logs",
        children: " Previous Access logs cho Load balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-listener",
        children: " Next Quản lý Listener "
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

/***/ 609995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/67c451b9be90-image-1767671757981-26553af8a8775ae9db9f9b12cc873eed.png");

/***/ },

/***/ 525184
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b2aa25cbc722-image-1767671862366-17c84ad2a146187f61092707c1af2a4d.png");

/***/ },

/***/ 566242
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dde39f33657e-image-1767671804027-cf12ff63c77842b08e3b976cf5941a97.png");

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