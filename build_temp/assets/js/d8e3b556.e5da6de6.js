"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26025],{

/***/ 509847
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_management_quan_ly_ssl_certificates_md_d8e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-management-quan-ly-ssl-certificates-md-d8e.json
const site_docs_fpt_cloud_waf_management_quan_ly_ssl_certificates_md_d8e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/management/quan-ly-ssl-certificates","title":"2. FPT Cloud WAF","description":"Quản lý SSL Certificates","source":"@site/docs/fpt-cloud-waf/management/quan-ly-ssl-certificates.md","sourceDirName":"fpt-cloud-waf/management","slug":"/fpt-cloud-waf/management/quan-ly-ssl-certificates","permalink":"/fpt-cloud-waf/management/quan-ly-ssl-certificates","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quan ly ssl certificates","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-ssl-certificates","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly security rule sets","permalink":"/fpt-cloud-waf/management/quan-ly-security-rule-sets"},"next":{"title":"Xoa may chu waf","permalink":"/fpt-cloud-waf/management/xoa-may-chu-waf"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/management/quan-ly-ssl-certificates.md


const frontMatter = {
	sidebar_label: 'Quan ly ssl certificates',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-ssl-certificates',
	parent: 'https://fptcloud.com/documents/fpt-cloud-waf',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAF';

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
        id: "2-fpt-cloud-waf",
        children: "2. FPT Cloud WAF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý SSL Certificates"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chứng chỉ SSL (được gọi chính xác là Chứng chỉ TLS) là một dạng khóa mã hóa cho phép trang web của bạn được mã hóa cho người dùng cuối."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cấu hình/thêm mới một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificates"
      }), " , bạn thực hiện các bước sau đây:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificates"
      }), " tại menu để mở màn hình quản lý ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificates"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 38",
        src: (__webpack_require__(381411)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create SSL Certificates"
      }), " để mở màn hình thêm mới, ở đây sẽ có hai chế độ cài đặt:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Let’s Encrypt"
        }), " là chứng nhận (CA) mở, miễn phí và tự động, có sẵn trên FPT Cloud WAF."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom"
        }), " : quản trị viên tự cấu hình Certificates theo nhu cầu. Certificates của bên thứ 3."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu chọn dùng Let’s Encrypt, bạn cấu hình như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain Name:"
        }), " điền tên domain/website được cấu hình SSL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Email Address for Let’s Encrypt:"
        }), " Điền email cho Let’s Encrypt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use a DNS Challenge"
        }), " – Tùy chọn mở rộng: tùy thuộc vào nhu cầu sử dụng mà quản trị viên chọn thêm tùy chọn “Use a DNS Challenge”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I Agree to the Let’s Encrypt Terms of Service"
        }), " : Click chọn để đồng ý sử dụng chứng nhận (CA) Let’s Encrypt."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 39",
        src: (__webpack_require__(373373)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu chọn chế độ Custom Import, bạn cần nhập các thông tin Certificates của bên thứ 3 và tự chịu trách nhiệm quản lý các thông tin này. Để import ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Certificate"
      }), " , bạn nhập các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate Key"
        }), " : Tải lên file ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate Key."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate"
        }), " : Tải lên file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermediate Certificate:"
        }), " Tải lên file ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermediate Certificate."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 40",
        src: (__webpack_require__(913059)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create SSL Certificate"
      }), " để lưu và hoàn tất cấu hình/thêm mới SSL Certificate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 41",
        src: (__webpack_require__(64692)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-access-list",
        children: " Previous Quản lý Access List "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-security-rule-sets",
        children: " Next Quản lý Security Rule Sets "
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

/***/ 913059
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/650e0090af82-Userguide-FPT-WAF-2022-40-1024x578-a9f4dff3b192e504180cda7455dfaf8a.png");

/***/ },

/***/ 381411
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/810c62cf7313-Userguide-FPT-WAF-2022-38-1024x578-966db24e932c1a6c2e648b2c5fa1ae86.png");

/***/ },

/***/ 373373
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/92f29cbe20d4-Userguide-FPT-WAF-2022-39-1024x578-d7af606fb3cf5f9fe7edcb8ada086821.png");

/***/ },

/***/ 64692
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0ea5431830b-Userguide-FPT-WAF-2022-41-1024x578-1f277f123a1f7ffee69fcf5f063d911c.png");

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