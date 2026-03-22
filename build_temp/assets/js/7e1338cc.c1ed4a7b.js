"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[48824],{

/***/ 992363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_quan_ly_security_rule_sets_md_7e1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-quan-ly-security-rule-sets-md-7e1.json
const site_docs_fpt_cloud_waf_quan_ly_security_rule_sets_md_7e1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/quan-ly-security-rule-sets","title":"2. FPT Cloud WAF","description":"Quản lý Security Rule Sets","source":"@site/docs/fpt-cloud-waf/quan-ly-security-rule-sets.md","sourceDirName":"fpt-cloud-waf","slug":"/fpt-cloud-waf/quan-ly-security-rule-sets","permalink":"/fpt-cloud-waf/quan-ly-security-rule-sets","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly security rule sets","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-security-rule-sets","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly redirection host","permalink":"/fpt-cloud-waf/quan-ly-redirection-host"},"next":{"title":"Quan ly ssl certificates","permalink":"/fpt-cloud-waf/quan-ly-ssl-certificates"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/quan-ly-security-rule-sets.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly security rule sets',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-security-rule-sets',
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
    h5: "h5",
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
        id: "2-fpt-cloud-waf",
        children: "2. FPT Cloud WAF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Security Rule Sets"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ngoài Rule Set mặc định của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud WAF"
      }), " cung cấp, người dùng có thể tự tạo một Rule Set với các Rule tùy chỉnh để phù hợp với đặc thù endpoint cần bảo vệ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thêm mới một Rule Set tùy chỉnh, quản trị viên thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Rule Sets"
      }), " tại menu để mở màn hình quản lý ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Rule Sets"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Rule Set."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 42",
        src: (__webpack_require__(931900)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Rule Set"
      }), " để mở màn hình thêm mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule Set"
      }), " và điền các thông tin bắt buộc:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên Rule Set mới."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description"
        }), " (không bắt buộc): Mô tả."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replicated From:"
        }), " Chọn Rule Set mà quản trị viên muốn clone và chỉnh sửa."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 43",
        src: (__webpack_require__(408219)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Rule Set"
      }), " để lưu và hoàn tất việc tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule Set"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 44",
        src: (__webpack_require__(899644)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Rule tùy chỉnh trong Rule Sets"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo Rule Set bạn đã có thể thêm các Rule tùy chỉnh theo nhu cầu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thêm Rule tùy chỉnh mới bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule Sets Detail"
      }), " cần add thêm Rule, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Rule."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 45",
        src: (__webpack_require__(856507)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin cần thiết của Rule:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File:"
        }), " Đặt tên cho rule."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule ID:"
        }), " ID của Rule (nằm trong khoảng từ 5.000.000 đến 5.999.999)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Trạng thái hoạt động (Enabled/Disabled)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content:"
        }), " Nội dung của rule."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Mô tả cho rule."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 46",
        src: (__webpack_require__(112343)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creat Rule"
      }), " để thực hiện tạo Rule mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 47",
        src: (__webpack_require__(678228)/* ["default"] */ .A) + "",
        width: "1024",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-ssl-certificates",
        children: " Previous Quản lý SSL Certificates "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-nguoi-dung-cua-waf-dashboard",
        children: " Next Quản lý người dùng của WAF Dashboard "
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

/***/ 931900
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3ae15c86d4e2-Userguide-FPT-WAF-2022-42-1024x578-34b3fb6b23dcd5c255fe07626c108bf4.png");

/***/ },

/***/ 112343
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/741730363644-Userguide-FPT-WAF-2022-46-1024x578-1397568ff97033b122acc17d905a4ba0.png");

/***/ },

/***/ 899644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9ec97a49c5c1-Userguide-FPT-WAF-2022-44-1024x578-811e506374db10d4b06401f476305ced.png");

/***/ },

/***/ 678228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/af74e7d24b7a-Userguide-FPT-WAF-2022-47-1024x578-21ffa41141a4d607274056a4874dc870.png");

/***/ },

/***/ 856507
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d229308029ff-Userguide-FPT-WAF-2022-45-1024x578-29bf97d6a637cef4833f70e2e6322594.png");

/***/ },

/***/ 408219
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee9a083855fd-Userguide-FPT-WAF-2022-43-1024x578-4187c3a0a8602607ad2e267a4068a76f.png");

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