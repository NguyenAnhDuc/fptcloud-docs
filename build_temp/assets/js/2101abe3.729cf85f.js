"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[97748],{

/***/ 188718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_wapples_security_policy_settings_md_210_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-wapples-security-policy-settings-md-210.json
const site_docs_fpt_cloud_wapples_security_policy_settings_md_210_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-wapples/security/policy-settings","title":"2. FPT Cloud WAPPLES","description":"Policy Settings","source":"@site/docs/fpt-cloud-wapples/security/policy-settings.md","sourceDirName":"fpt-cloud-wapples/security","slug":"/fpt-cloud-wapples/security/policy-settings","permalink":"/fpt-cloud-wapples/security/policy-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Policy settings","title":"2. FPT Cloud WAPPLES","source":"https://fptcloud.com/documents/fpt-cloud-wapples/?doc=policy-settings","parent":"https://fptcloud.com/documents/fpt-cloud-wapples","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Network filters","permalink":"/fpt-cloud-wapples/security/network-filters"},"next":{"title":"Privacy filtering","permalink":"/fpt-cloud-wapples/security/privacy-filtering"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-wapples/security/policy-settings.md


const frontMatter = {
	sidebar_label: 'Policy settings',
	title: '2. FPT Cloud WAPPLES',
	source: 'https://fptcloud.com/documents/fpt-cloud-wapples/?doc=policy-settings',
	parent: 'https://fptcloud.com/documents/fpt-cloud-wapples',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAPPLES';

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
        id: "2-fpt-cloud-wapples",
        children: "2. FPT Cloud WAPPLES"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Policy Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sử dụng để thiết lập các policy và rule nhằm lựa chọn các event để chặn hoặc ghi lại vào trong log tại phần View Logs – Detection Logs ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(273682)/* ["default"] */ .A) + "",
        width: "939",
        height: "414"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thành phần chính bao gồm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Policy List: Thực hiện chặn hoặc ghi lại các event dựa trên policy. Wapples có 7 policies cơ bản bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bypass Without Detection"
          }), " : không ghi lại các sự kiện"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detect Without Blocking"
          }), " : ghi lại mà không có các biện pháp ngăn chặn"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Basic Security Policy: Sau khi detect, thực hiện ngăn chặn các sự kiện theo các rule"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Directory Listing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invalid HTTP"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SQL Injection"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Standard Security Policy"
          }), " : Sau khi detect, thực hiện ngăn chặn các sự kiện theo các rule"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cross Site Scripting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Directory Listing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Directory Traversal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Error Handling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "File Inclusion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "File Upload"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invalid HTTP"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invalid URL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Request Method Filtering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SQL Injection"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced & PCI-DSS Security Policy:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Thực hiện hành động ứng phó dựa trên thiết lập"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cho phép kiểm tra một rule cụ thể bằng cách nhấp vào policy tương ứng"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Phản hồi lại dựa trên counter measure được thiết lập"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Block All Traffic"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Block phản hồi được yêu cầu đến website"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Không ghi lại log vì các request đã bị block trước khi được detect"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rule list: Hiển thị các rule và countermeasure đang có sẵn trong Policy được chọn ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(832922)/* ["default"] */ .A) + "",
        width: "939",
        height: "413"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Policy/Website"
        }), " : Tạo policy tự custom hoặc thêm các website vào policy nhằm áp dụng riêng cho từng website bằng cách chọn vào dấu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(584164)/* ["default"] */ .A) + "",
        width: "567",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo policy dựa trên 1 policy có sẵn"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add policy cho 1 website (Có thể chỉ định subdirectory cụ thể)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Add rule cho policy ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(433111)/* ["default"] */ .A) + "",
            width: "569",
            height: "603"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Snort"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(328051)/* ["default"] */ .A) + "",
            width: "975",
            height: "433"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn User-defined"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add Rule Name"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Countermeasure"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Risk Level (Nếu chọn Disconnect/Error Code/Page Redirection)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upload rule đã được thiết lập trong [Security Settings] - [Pattern Storage] - [Snort]."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Chọn Apply và chọn Save ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(938807)/* ["default"] */ .A) + "",
            width: "975",
            height: "633"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Threat Protection Profile"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(674421)/* ["default"] */ .A) + "",
            width: "975",
            height: "633"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Detection hoặc Do Not Detection"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Countermeasure (Nếu chọn Detection)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Risk Level (Nếu chọn Detection/Disconnect/Error Code/Page Redirection)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upload rule đã được thiết lập trong [Security Settings] - [Security Patch] - [Threat Protection Profile]."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Apply và chọn Save"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Manually Input"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(114927)/* ["default"] */ .A) + "",
            width: "975",
            height: "636"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn User-defined"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add Rule Name"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Countermeasure"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Risk Level (Nếu chọn Disconnect/Error Code/Page Redirection)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thiết lập Pattern thủ công rồi chọn Apply và chọn Save"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./network-filters-scheduling",
        children: " Previous Network Filters Scheduling "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com",
        children: " Next Additional Policy Settings "
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

/***/ 433111
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/121d4fcb66f7-image-1714116584852-f0caf8f55c1468fd2dd807e69e34de97.png");

/***/ },

/***/ 273682
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/153567a2c9c0-image-1714115314016-758cac408d5e5fddf07dabea33501c2e.png");

/***/ },

/***/ 328051
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a7806342836-image-1714116637131-ce79d5ef975bb45e4545fc35448c97a9.png");

/***/ },

/***/ 114927
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7012fe2f8304-image-1714116666121-8ef6edc46dc7c51748355066deda24ea.png");

/***/ },

/***/ 674421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/729ff3954a14-image-1714116657982-928e319bbc476c352cf74c8c4743690c.png");

/***/ },

/***/ 832922
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7946dbab2b6c-image-1714115324089-d21745b43cb97a8815758e1d1baa0944.png");

/***/ },

/***/ 938807
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e6d7de680012-image-1714116644103-581b423767c9201fbb4de886e35ba6d3.png");

/***/ },

/***/ 584164
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fdfd7e9137a3-image-1714115330781-a9f29220cb0e23e72819bc037f5bf687.png");

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