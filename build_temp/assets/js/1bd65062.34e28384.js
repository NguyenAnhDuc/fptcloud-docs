"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[81959],{

/***/ 780504
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_other_new_quota_md_1bd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-other-new-quota-md-1bd.json
const site_docs_cloud_server_other_new_quota_md_1bd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/other/new-quota","title":"Sử dụng dịch vụ tính tiền theo phương thức PAYG","description":"*","source":"@site/docs/cloud-server/other/new-quota.md","sourceDirName":"cloud-server/other","slug":"/cloud-server/other/new-quota","permalink":"/cloud-server/other/new-quota","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Sử dụng dịch vụ tính tiền theo phương thức PAYG","title":"Sử dụng dịch vụ tính tiền theo phương thức PAYG","source":"https://fptcloud.com/documents/cloud-server/?doc=new-quota","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"FQAs","permalink":"/cloud-server/other/fqas"},"next":{"title":"Notification Bell","permalink":"/cloud-server/other/overview-bell"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/other/new-quota.md


const frontMatter = {
	sidebar_label: 'Sử dụng dịch vụ tính tiền theo phương thức PAYG',
	title: 'Sử dụng dịch vụ tính tiền theo phương thức PAYG',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=new-quota',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Sử dụng dịch vụ tính tiền theo phương thức PAYG';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tạo tài nguyên dịch vụ tính theo PAYG.</strong>",
  "id": "1-tạo-tài-nguyên-dịch-vụ-tính-theo-payg",
  "level": 2
}, {
  "value": "<strong>2. Hiển thị thông tin Dashboard</strong>",
  "id": "2-hiển-thị-thông-tin-dashboard",
  "level": 2
}, {
  "value": "<strong>3. Hiển thị thông tin Billing</strong>",
  "id": "3-hiển-thị-thông-tin-billing",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "sử-dụng-dịch-vụ-tính-tiền-theo-phương-thức-payg",
        children: "Sử dụng dịch vụ tính tiền theo phương thức PAYG"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi người dùng sử dụng hết tài nguyên trả trước, người dùng có thể tiếp tục tạo tài nguyên để sử dụng theo hình thức thanh toán PAYG."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tạo-tài-nguyên-dịch-vụ-tính-theo-payg",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tạo tài nguyên dịch vụ tính theo PAYG."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình tạo tài nguyên mới, nếu dịch vụ đang tạo đã hết thì người dùng sẽ nhận được thông báo loại tài nguyên nào đã hết và sẽ được chuyển đổi hình thức thanh toán."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các dịch vụ đã hỗ trợ phương thức tính tiền PAYG"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Máy ảo: tạo, clone, resize máy ảo, tạo snapshot/template từ máy ảo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Storage: tạo, resize storage, tạo snapshot từ storage"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IP: Allocate IP"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Auto Scaling"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "K8S/DB"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(71694)/* ["default"] */ .A) + "",
        width: "735",
        height: "515"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-hiển-thị-thông-tin-dashboard",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Hiển thị thông tin Dashboard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiển thị các thống kê của Tenant"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quota: tổng số lượng từ tất cả các phụ lục hợp đồng đang còn hiệu lực (active) hoặc đã hết hạn nhưng chưa đến thời gian thu hồi (expired)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Remaining: Số lượng tài nguyên còn lại người dùng có thể sử dụng"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Usage: số lượng tài nguyên người dùng đã sử dụng"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PAYG: trường hợp sử dụng hết tài nguyên trả trước theo phụ lục hợp đồng, hệ thống bắt đầu tính số lượng tài nguyên PAYG, tài nguyên này sẽ được tính tiền theo giá PAYG."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: Số lượng tài nguyên tính theo PAYG không cố định. Khi người dùng xóa bớt tài nguyên về dưới số lượng đã trả trước, hệ thống tự động cập nhật số liệu và ngưng tính tiền tài nguyên PAYG."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(980466)/* ["default"] */ .A) + "",
        width: "735",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hiển-thị-thông-tin-billing",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Hiển thị thông tin Billing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để xem chi tiết cách tính tiền và số tiền đã sử dụng theo phương thức PAYG, người dùng có thể xem trên trang Bills bằng cách truy cập Unify Portal và chọn Billing -> Bills"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Xem thông tin HDSD billing PAYG tại: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/billing/?doc=view-billing",
        children: "https://fptcloud.com/documents/billing/?doc=view-billing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: tính năng có thể chưa được áp dụng cho tất cả khách hàng, nếu khách hàng có nhu cầu vui lòng liên hệ đội hỗ trợ để được tư vấn thêm thông tin."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./header-project",
        children: " Previous Thay đổi giao diện header "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Next "
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

/***/ 71694
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3f01e1729243-image-1734072549504-d38f8b052aae0b4eddc83cd30b1de860.png");

/***/ },

/***/ 980466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dd0bd6f95a38-image-1734072576433-796e8f7083186c9169e10d6f9260d248.png");

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