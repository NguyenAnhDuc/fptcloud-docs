"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88420],{

/***/ 74412
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_gateway_tinh_nang_khac_md_f5f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-gateway-tinh-nang-khac-md-f5f.json
const site_docs_gateway_tinh_nang_khac_md_f5f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"gateway/tinh-nang-khac","title":"2. Gateway","description":"Các tính năng khác liên quan đến Gateway","source":"@site/docs/gateway/tinh-nang-khac.md","sourceDirName":"gateway","slug":"/gateway/tinh-nang-khac","permalink":"/gateway/tinh-nang-khac","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tinh nang khac","title":"2. Gateway","source":"https://fptcloud.com/documents/gateway/?doc=tinh-nang-khac","parent":"https://fptcloud.com/documents/gateway","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly route 1 gateway","permalink":"/gateway/quan-ly-route-1-gateway"},"next":{"title":"FPT Cloud Portal – Pay As You Go","permalink":"/fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go/-choose-the-form-of-payg-and-verify-the-phon--number"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/gateway/tinh-nang-khac.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tinh nang khac',
	title: '2. Gateway',
	source: 'https://fptcloud.com/documents/gateway/?doc=tinh-nang-khac',
	parent: 'https://fptcloud.com/documents/gateway',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Gateway';

const assets = {

};



const toc = [{
  "value": "<strong>1. Allocate IP Address</strong>",
  "id": "1-allocate-ip-address",
  "level": 2
}, {
  "value": "<strong>2. Instance</strong>",
  "id": "2-instance",
  "level": 2
}, {
  "value": "<strong>3. Subnet</strong>",
  "id": "3-subnet",
  "level": 2
}, {
  "value": "<strong>4. Security Group</strong>",
  "id": "4-security-group",
  "level": 2
}, {
  "value": "<strong>5. Load Balancer</strong>",
  "id": "5-load-balancer",
  "level": 2
}, {
  "value": "<strong>6. VPN Site to Site</strong>",
  "id": "6-vpn-site-to-site",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-gateway",
        children: "2. Gateway"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các tính năng khác liên quan đến Gateway"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-allocate-ip-address",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Allocate IP Address"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ở màn hình Floating IP, hệ thống cho phép người dùng chọn Gateway khi Allocate IP, hover vào tooltip ở thông tin của Gateway để biết được Gateway loại Basic hay Custom"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nếu người dụng chọn Gateway loại Custom, hệ thống chỉ cho phép allocate IP mà gắn vào resource nào (hệ thống ẩn phần Resource, IP Port, Instance Port)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(885933)/* ["default"] */ .A) + "",
        width: "733",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu người dùng chọn Gateway loại Basic , hệ thống cho phép allocate IP và đồng thời gắn vào resource"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(819022)/* ["default"] */ .A) + "",
        width: "735",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ở màn hình Floating IP (trên cột Actions), với IP thuộc Gateway loại Custom, người dùng sẽ không được gán vào 1 Instance"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ở màn hình Instance Detail, trường hợp Instance chưa được gán IP mà người dùng bấm allocate IP, nếu Instance thuộc Gateway lại custom, người dùng sẽ không được gán IP. Để gán được IP, người dùng cần tạo NAT Rule"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-instance",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Instance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi tạo Instance, hệ thống auto fill thông tin Gateway dựa trên Subnet đã chọn trước đó (Gateway được gán vào Subnet). Nếu Gateway loại Custom, người dùng sẽ không được chọn Floating IP (hệ thống sẽ disable field này)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(885649)/* ["default"] */ .A) + "",
        width: "722",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-subnet",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Subnet"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ở màn hình tạo Subnet, hệ thống cho phép người dùng chọn Gateway. Nếu Gateway loại Custom, hệ thống sẽ thông báo người dùng tự tạo NAT rule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(725135)/* ["default"] */ .A) + "",
        width: "700",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Security Group"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ở màn hình tạo Security Group, hệ thống cho phép người dùng chọn Gateway, các Security Rule được tạo ra sẽ được quản lý bởi Gateway đã chọn"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(664860)/* ["default"] */ .A) + "",
        width: "759",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-load-balancer",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống cho phép user xem thông tin gateway khi sử dụng Load Balancer Classic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(1007)/* ["default"] */ .A) + "",
        width: "810",
        height: "316"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-vpn-site-to-site",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. VPN Site to Site"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống cho phép user chọn Gateway khi tạo và sử dụng dịch vụ VPN Site to Site"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(645527)/* ["default"] */ .A) + "",
        width: "698",
        height: "391"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-no-nat-rule-theo-gateway",
        children: " Previous Hệ thống cho phép người dùng quản lý NO NAT rule trong từng Gateway "
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

/***/ 885649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1768f41de40c-image-1754291630097-59e32e00c1068e363a9543cd77ea4ecf.png");

/***/ },

/***/ 819022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25711f9bbb4f-image-1754291610069-a8c8530f3e1547ccd528f0ea40c5facd.png");

/***/ },

/***/ 664860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/309bd36fc6aa-image-1754291651290-30089582a7533c09898c23eba5404cb9.png");

/***/ },

/***/ 1007
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/45935b91fff8-image-1754291661656-c064022687131bd47e55413e7a056b0c.png");

/***/ },

/***/ 885933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ea9341b8ab8-image-1754291575833-50efe6e8420a0e7ad7406d4afe36de1e.png");

/***/ },

/***/ 725135
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8ba52a8bb00a-image-1754291640291-25f7abcbc552468e2a8b483d01c0c816.png");

/***/ },

/***/ 645527
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cfe24f877c20-image-1754291672602-b30b48a2168b3707bcf67d2a2ea419ec.png");

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