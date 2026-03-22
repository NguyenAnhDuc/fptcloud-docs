"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[69914],{

/***/ 45345
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_global_search_global_search_phase_1_md_ed2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-global-search-global-search-phase-1-md-ed2.json
const site_docs_global_search_global_search_phase_1_md_ed2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"global-search/global-search-phase-1","title":"2. Global Search","description":"Global Search","source":"@site/docs/global-search/global-search-phase-1.md","sourceDirName":"global-search","slug":"/global-search/global-search-phase-1","permalink":"/global-search/global-search-phase-1","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Global search phase 1","title":"2. Global Search","source":"https://fptcloud.com/documents/global-search/?doc=global-search-phase-1","parent":"https://fptcloud.com/documents/global-search","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Show notification","permalink":"/notification-bell/show-notification"},"next":{"title":"Global Search","permalink":"/global-search/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/global-search/global-search-phase-1.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Global search phase 1',
	title: '2. Global Search',
	source: 'https://fptcloud.com/documents/global-search/?doc=global-search-phase-1',
	parent: 'https://fptcloud.com/documents/global-search',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Global Search';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "2-global-search",
        children: "2. Global Search"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Global Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng Global Search trên FPT Cloud cho phép người dùng tìm kiếm nhanh các tài nguyên (resources) trong hệ thống trên phạm vi của 1 Tenant, bao gồm các loại tài nguyên như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instances, IP Addresses, Subnets, Security Groups, Database"
      }), "... Tính năng này giúp tiết kiệm thời gian và tăng hiệu quả quản lý tài nguyên trên nền tảng FPT Cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Nhập từ khoá vào ô tìm kiếm ở phía trên cùng của giao diện FPT Cloud."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(202210)/* ["default"] */ .A) + "",
        width: "1024",
        height: "535"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Chọn một trong các tab Instances, IP Addresses, Subnets, Security Groups, Database để xem kết quả gom nhóm theo từng loại tài nguyên."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bên dưới tab sẽ là kết quả tìm kiếm tương ứng với từng loại tài nguyên.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cho phép người dùng search IP Public và IP Private và apply cho các NIC của VM. Người dùng có thể xem được các tài nguyên đang gắn vào IP (Associated Resource - scope hiện tại hỗ trợ tìm kiếm Instance,subnet theo IP). Không hỗ trợ tìm IP (ví dụ: IP DHCP, & IP gateway,...) ngoài danh mục IP đã mô tả"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bấm vào từng kết quả sẽ đến giao diện thông tin chi tiết của tài nguyên đó. (Lưu ý: Nếu tài nguyên không có giao diện thông tin chi tiết, hệ thống sẽ dẫn đến màn hình danh sách của loại tài nguyên đó)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Nếu muốn xem toàn bộ kết quả, bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "View all result"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4."
      }), " Hệ thống sẽ mở ra màn hình với toàn bộ kết quả tìm kiếm được"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43800)/* ["default"] */ .A) + "",
        width: "1024",
        height: "534"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5."
      }), " Giới hạn lại kết quả tìm bằng bộ lọc VPC, Region hoặc ô tìm kiếm \"Search by resource name\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6."
      }), " Bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download"
      }), " để tải xuống file danh sách kết quả theo các kết quả mà hệ thống hiển thị trên màn hình"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(356650)/* ["default"] */ .A) + "",
        width: "1024",
        height: "801"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Format file tải xuống là Excel, và có 6 sheets"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sheet Summary: tổng hợp toàn bộ kết quả tìm kiếm với các tài nguyên Instance, Floating IP, Subnet, Security Group, Database"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sheet Instances: Gom nhóm Instances từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(670201)/* ["default"] */ .A) + "",
        width: "1024",
        height: "517"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sheet Floating IPs: Gom nhóm Floating IPs từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sheet Subnets: Gom nhóm Subnets từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sheet Security Groups: Gom nhóm Security Groups từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sheet Database: Gom nhóm Database từ sheet Summary. Nếu sheet Summary không có dữ liệu thì để trống"
        }), "\n"]
      }), "\n"]
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

/***/ 43800
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d8fcc2511f8-Screenshot-2025-11-03-at-10.09.40-1024x534-2c3f08f15539332ba7aa467be29ff76d.png");

/***/ },

/***/ 202210
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32afb9176ca6-gsdb-1024x535-1ae329f98bcc208a0a27fa0c07571e47.png");

/***/ },

/***/ 670201
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6eb1006b39ae-search-img-5-1024x517-7ebff26118622b716f83f8ec32740b3e.png");

/***/ },

/***/ 356650
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d4eae9d26bca-search-img-4-1024x801-197998c312d5b969b41fea81843b457c.png");

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