"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[50216],{

/***/ 776316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_ddos_protection_monitor_ip_md_8b0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ddos-protection-monitor-ip-md-8b0.json
const site_docs_ddos_protection_monitor_ip_md_8b0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"ddos-protection/monitor-ip","title":"2. DdoS Protection","description":"Monitor các IP đang được bảo vệ","source":"@site/docs/ddos-protection/monitor-ip.md","sourceDirName":"ddos-protection","slug":"/ddos-protection/monitor-ip","permalink":"/ddos-protection/monitor-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Monitor ip","title":"2. DdoS Protection","source":"https://fptcloud.com/documents/ddos-protection/?doc=monitor-ip","parent":"https://fptcloud.com/documents/ddos-protection","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/ddos-protection/initial-setup"},"next":{"title":"Cau hinh dns","permalink":"/checkpoint-fpt-ngfw/cau-hinh-dns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/ddos-protection/monitor-ip.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Monitor ip',
	title: '2. DdoS Protection',
	source: 'https://fptcloud.com/documents/ddos-protection/?doc=monitor-ip',
	parent: 'https://fptcloud.com/documents/ddos-protection',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. DdoS Protection';

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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-ddos-protection",
        children: "2. DdoS Protection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor các IP đang được bảo vệ"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể monitor hệ thống và sự bảo vệ thông qua dashboard do FPT Cloud Portal cung cấp."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Người dùng vào màn hình danh sách IP đang được bảo vệ và chọn IP cần kiểm tra"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(483267)/* ["default"] */ .A) + "",
        width: "940",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2a"
      }), " : Với IP đang được bảo vệ và không có bị tấn công trong tháng, hệ thống sẽ hiện thị màn hình thông báo IP đang được bảo vệ an toàn và chưa ghi nhận sự tấn công."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(139809)/* ["default"] */ .A) + "",
        width: "940",
        height: "176"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2b"
      }), " : Với trường hợp có ghi nhận đợt tấn công. Hệ thống sẽ thông tin các đợt tấn công gồm:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin nhanh sự bảo vệ trong tháng:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Total traffic: Tổng traffic vào IP trong tháng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Block traffic: Tổng traffic tấn công bị phát hiện và ngăn chặn"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Block packet: Tổng packet tấn công bị phát hiện và ngăn chặn"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(925929)/* ["default"] */ .A) + "",
        width: "940",
        height: "178"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin nguồn tấn công: Hệ thống liệt kê các nguồn tấn công chủ yếu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(191203)/* ["default"] */ .A) + "",
        width: "806",
        height: "779"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thông tin các protocol bị tấn công: Hệ thống hiện tại đang hiển thị protocol theo ID, tham khảo thêm tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Link"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6: TCP"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "17: UDP"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(220015)/* ["default"] */ .A) + "",
        width: "792",
        height: "771"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin độ dài các packet (Đơn vị: byte)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(855835)/* ["default"] */ .A) + "",
        width: "796",
        height: "765"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin port của nguồn tấn công"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(863245)/* ["default"] */ .A) + "",
        width: "796",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin port bị tấn công của người dùng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(906851)/* ["default"] */ .A) + "",
        width: "790",
        height: "698"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Biểu đồ phân tích traffic tấn công bị chặn trong 30 ngày"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(133312)/* ["default"] */ .A) + "",
        width: "940",
        height: "506"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin chi tiết các đợt tấn công đã chặn được"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(508812)/* ["default"] */ .A) + "",
        width: "940",
        height: "218"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./create-ddos",
        children: " Previous Khởi tạo DDoS Protection "
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

/***/ 191203
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04f543c3bee1-image-1750405829915-e043b640cbde70bd223dfb658418bb03.png");

/***/ },

/***/ 906851
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/18e0987a5353-image-1750406261280-c01e392822e7bd5fe9a3ae04c727defd.png");

/***/ },

/***/ 508812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/25b57adb130f-image-1750406362941-15583ee190b01879b4ea3f42a379debc.png");

/***/ },

/***/ 483267
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2bd000bdb645-image-1750405781163-243fe83e384dce829a37b93d00436ce9.png");

/***/ },

/***/ 863245
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3e4ba6d1dbb2-image-1750406239763-41f387de3f535171659e4177cc69442d.png");

/***/ },

/***/ 133312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4b9b1d1add12-image-1750406346658-7adec57e62d0f46ced50b4acd4928707.png");

/***/ },

/***/ 220015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5868a949c2f1-image-1750405849332-e2cdd51f06c5601152afb70a0e964fc4.png");

/***/ },

/***/ 139809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/92b66506bb4e-image-1750405795153-23b0a4246d7e8ad1ad21e41dd98d709d.png");

/***/ },

/***/ 855835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aaacb4ed5663-image-1750406210587-330d78b6d8ed1e110f6463bc78a80314.png");

/***/ },

/***/ 925929
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee4429cf6d95-image-1750405809600-e500bcce16424c4913ac49dbbf4731ae.png");

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