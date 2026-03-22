"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[55748],{

/***/ 97208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fortigate_fpt_ngfw_tao_firewall_policy_md_d67_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fortigate-fpt-ngfw-tao-firewall-policy-md-d67.json
const site_docs_fortigate_fpt_ngfw_tao_firewall_policy_md_d67_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fortigate-fpt-ngfw/tao-firewall-policy","title":"2. Fortigate – FPT NGFW","description":"Tạo Firewall Policy","source":"@site/docs/fortigate-fpt-ngfw/tao-firewall-policy.md","sourceDirName":"fortigate-fpt-ngfw","slug":"/fortigate-fpt-ngfw/tao-firewall-policy","permalink":"/fortigate-fpt-ngfw/tao-firewall-policy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao firewall policy","title":"2. Fortigate – FPT NGFW","source":"https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=tao-firewall-policy","parent":"https://fptcloud.com/documents/fortigate-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly system user user profile","permalink":"/fortigate-fpt-ngfw/quan-ly-system-user-user-profile"},"next":{"title":"Tao security profile","permalink":"/fortigate-fpt-ngfw/tao-security-profile"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fortigate-fpt-ngfw/tao-firewall-policy.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao firewall policy',
	title: '2. Fortigate – FPT NGFW',
	source: 'https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=tao-firewall-policy',
	parent: 'https://fptcloud.com/documents/fortigate-fpt-ngfw',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Fortigate – FPT NGFW';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "2-fortigate--fpt-ngfw",
        children: "2. Fortigate – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Firewall Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tạo rule firewall cho phép một máy tính trong VLAN 10.2.0.0/24 (Port 3) kết nối ra internet.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firewall Address"
      }), " (định nghĩa các IP Address sử dụng):", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy & Objects"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Addresses"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create new"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Address"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 7",
        src: (__webpack_require__(332013)/* ["default"] */ .A) + "",
        width: "1024",
        height: "422"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 8",
        src: (__webpack_require__(481470)/* ["default"] */ .A) + "",
        width: "1024",
        height: "563"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firewall Policy:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy & Objects"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firewall Policy"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create new"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 9",
        src: (__webpack_require__(116264)/* ["default"] */ .A) + "",
        width: "1024",
        height: "657"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nCấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interfaces"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      }), " và các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Profiles"
      }), " (Cấu hình các Security Profile ở mục 4.4)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 10",
        src: (__webpack_require__(508406)/* ["default"] */ .A) + "",
        width: "1024",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incoming Interface:"
        }), " Chọn VLAN 10.2.0.0/24 (Port3)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outgoing Interfaces:"
        }), " Chọn Port 2 (WAN)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Address"
        }), " đã tạo ở bước 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), " (hoặc có thể giới hạn các destionation bằng cách chọn nhiều destination đã tạo)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALL"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NAT:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Outgoing Interface Address"
        }), " – NAT sử dụng IP public đã NAT qua Port 2 (WAN).", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Fortigate FPT NGFW 2022 11",
          src: (__webpack_require__(236646)/* ["default"] */ .A) + "",
          width: "1024",
          height: "655"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add thêm các Security profile để bảo vệ hệ thống bởi các mối nguy hại từ Internet."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSL Inspection:"
        }), " Chuyển sang dạng deep-inspection. Yêu cầu cài đặt certificate trên browser người dùng. (Có thể download certificate bằng cách click vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deep-inspection"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Download certificate"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-static-routes",
        children: " Previous Cấu hình Static Routes "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-firewall-policy",
        children: " Next Xóa Firewall Policy "
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

/***/ 116264
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0428cf8ea9d2-Userguide-Fortigate-FPT-NGFW-2022-9-1024x657-c62be3db7689c0050b0e549bbec4c4f2.png");

/***/ },

/***/ 481470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6b3e2463f826-Userguide-Fortigate-FPT-NGFW-2022-8-1024x563-22fa5603dc3846dbfeaea5ebdb01474a.png");

/***/ },

/***/ 236646
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c05de94080f3-Userguide-Fortigate-FPT-NGFW-2022-11-1024x655-155db8b32235ccebf318ba8e8c1a9fd1.png");

/***/ },

/***/ 508406
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cfc82ca13316-Userguide-Fortigate-FPT-NGFW-2022-10-1024x541-dc0801668bfcb0c456c92c9a47a8944e.png");

/***/ },

/***/ 332013
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f6cbec98d177-Userguide-Fortigate-FPT-NGFW-2022-7-1024x422-6e6ed0daa6e0c5957d4931a7d823a8dc.png");

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