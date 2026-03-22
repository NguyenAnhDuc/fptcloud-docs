"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[40657],{

/***/ 921581
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_checkpoint_fpt_ngfw_tao_rule_nat_md_b4a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-checkpoint-fpt-ngfw-tao-rule-nat-md-b4a.json
const site_docs_checkpoint_fpt_ngfw_tao_rule_nat_md_b4a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"checkpoint-fpt-ngfw/tao-rule-nat","title":"2. CheckPoint – FPT NGFW","description":"Tạo rule NAT","source":"@site/docs/checkpoint-fpt-ngfw/tao-rule-nat.md","sourceDirName":"checkpoint-fpt-ngfw","slug":"/checkpoint-fpt-ngfw/tao-rule-nat","permalink":"/checkpoint-fpt-ngfw/tao-rule-nat","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao rule nat","title":"2. CheckPoint – FPT NGFW","source":"https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-rule-nat","parent":"https://fptcloud.com/documents/checkpoint-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao rule firewall","permalink":"/checkpoint-fpt-ngfw/tao-rule-firewall"},"next":{"title":"Truy cap gaia portal","permalink":"/checkpoint-fpt-ngfw/truy-cap-gaia-portal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/checkpoint-fpt-ngfw/tao-rule-nat.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao rule nat',
	title: '2. CheckPoint – FPT NGFW',
	source: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw/?doc=tao-rule-nat',
	parent: 'https://fptcloud.com/documents/checkpoint-fpt-ngfw',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. CheckPoint – FPT NGFW';

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
        id: "2-checkpoint--fpt-ngfw",
        children: "2. CheckPoint – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo rule NAT"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Pane"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "F11"
      }), ") > tìm Object cần SNAT > chuột phải chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 60",
        src: (__webpack_require__(519340)/* ["default"] */ .A) + "",
        width: "807",
        height: "370"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Trên Menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT"
      }), " > tích ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add automatic address translation rules"
      }), " > tích ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hide behind IP address"
      }), " > điền IP muốn SNAT > chọn gateway để apply"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 61",
        src: (__webpack_require__(306911)/* ["default"] */ .A) + "",
        width: "555",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trên Menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Policies"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ctrl + 2"
      }), ") > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Control"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT"
      }), " > Kiểm tra rule đã được tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 62",
        src: (__webpack_require__(544599)/* ["default"] */ .A) + "",
        width: "1024",
        height: "141"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Install Policy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên Menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Policies"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ctrl + 2"
      }), ") > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Control"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 63",
        src: (__webpack_require__(327609)/* ["default"] */ .A) + "",
        width: "1024",
        height: "286"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add rule above/ to top/ to bottom"
      }), " để thêm rule vào vị trí phù hợp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 64",
        src: (__webpack_require__(883193)/* ["default"] */ .A) + "",
        width: "1024",
        height: "251"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Thiết lập thông tin cho rule mới:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 65",
        src: (__webpack_require__(697005)/* ["default"] */ .A) + "",
        width: "1024",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " (tên rule):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 66",
          src: (__webpack_require__(831424)/* ["default"] */ .A) + "",
          width: "1024",
          height: "50"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Original Source"
        }), " (IP nguồn khi chưa NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 67",
          src: (__webpack_require__(431847)/* ["default"] */ .A) + "",
          width: "1024",
          height: "107"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Original Destination"
        }), " (IP đích khi chưa NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 68",
          src: (__webpack_require__(18597)/* ["default"] */ .A) + "",
          width: "1024",
          height: "142"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Original Services"
        }), " (Dịch vụ/ port khi chưa NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 69",
          src: (__webpack_require__(976426)/* ["default"] */ .A) + "",
          width: "1024",
          height: "151"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Translated Source"
        }), " (IP nguồn sau khi NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 70",
          src: (__webpack_require__(497317)/* ["default"] */ .A) + "",
          width: "1024",
          height: "52"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giữ nguyên IP nguồn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Translated Destination"
        }), " (IP đích sau khi NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 71",
          src: (__webpack_require__(320701)/* ["default"] */ .A) + "",
          width: "1024",
          height: "114"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Translated Services"
        }), " (Dịch vụ/ port sau khi NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 72",
          src: (__webpack_require__(506281)/* ["default"] */ .A) + "",
          width: "1024",
          height: "90"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install On"
        }), " (Thiết bị chứa rule NAT):", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide Checkpoint FPT NGFW 2022 73",
          src: (__webpack_require__(1805)/* ["default"] */ .A) + "",
          width: "1024",
          height: "95"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rule DNAT sau khi tạo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 74",
        src: (__webpack_require__(780182)/* ["default"] */ .A) + "",
        width: "1024",
        height: "67"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Tạo Firewall rule cho phép kết nối DNAT đã tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Checkpoint FPT NGFW 2022 75",
        src: (__webpack_require__(956288)/* ["default"] */ .A) + "",
        width: "1024",
        height: "248"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Install Policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-rule-firewall",
        children: " Previous Tạo rule Firewall "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./dieu-tra-log",
        children: " Next Điều tra Log "
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

/***/ 956288
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32e9c82c54ce-Userguide-Checkpoint-FPT-NGFW-2022-75-1024x248-51f11239f3b3fdc5ceb13c546f97b5dc.png");

/***/ },

/***/ 320701
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3ed249b08343-Userguide-Checkpoint-FPT-NGFW-2022-71-1024x114-171951ee2f01296b83660b735bcac9bd.png");

/***/ },

/***/ 780182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4254a83f9b1c-Userguide-Checkpoint-FPT-NGFW-2022-74-1024x67-4d315f6c48bf1df7b60d162ae71ee07c.png");

/***/ },

/***/ 306911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4c5589345d80-Userguide-Checkpoint-FPT-NGFW-2022-61-6d6dffd965a599e5a435e1ba1aac05f0.png");

/***/ },

/***/ 831424
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/56f58df1cf6e-Userguide-Checkpoint-FPT-NGFW-2022-66-1024x50-61fb9b0d20acc479b47c012a46e19887.png");

/***/ },

/***/ 1805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5d70b6f5ced2-Userguide-Checkpoint-FPT-NGFW-2022-73-1024x95-ed6f164c44a4d1f584fca65829dd2d30.png");

/***/ },

/***/ 431847
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85cf6d50eb57-Userguide-Checkpoint-FPT-NGFW-2022-67-1024x107-115b5a1cba702ae9f859e2159515a1cf.png");

/***/ },

/***/ 519340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/90ecad9b88da-Userguide-Checkpoint-FPT-NGFW-2022-60-03ba54b98489bdcf7c79636ce8da8635.png");

/***/ },

/***/ 497317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9a29270a9d7d-Userguide-Checkpoint-FPT-NGFW-2022-70-1024x52-afd5788eb935faea4a4afbb20b8740a0.png");

/***/ },

/***/ 883193
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a10726e9d3de-Userguide-Checkpoint-FPT-NGFW-2022-64-1024x251-6f2fe765d87bad3458e828a160374101.png");

/***/ },

/***/ 976426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a48979cb5a9a-Userguide-Checkpoint-FPT-NGFW-2022-69-1024x151-45e68a99b583e49cfc5b36311bde9ec0.png");

/***/ },

/***/ 327609
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ac53aa0ffd1c-Userguide-Checkpoint-FPT-NGFW-2022-63-1024x286-3873242566ce8493d37535b5dc051b29.png");

/***/ },

/***/ 697005
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b8780102eb34-Userguide-Checkpoint-FPT-NGFW-2022-65-1024x181-986b44f9558383c07a587aaf0ce97dcd.png");

/***/ },

/***/ 506281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d9e3bb2ba53e-Userguide-Checkpoint-FPT-NGFW-2022-72-1024x90-0ceec33c33156f46813f974856908153.png");

/***/ },

/***/ 544599
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dc17c5460d1c-Userguide-Checkpoint-FPT-NGFW-2022-62-1024x141-25587528e5a8ac2ce5dcde2c9b0a6ac5.png");

/***/ },

/***/ 18597
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e30c8c041551-Userguide-Checkpoint-FPT-NGFW-2022-68-1024x142-b05013298b87e97704b7fffbc75a0d00.png");

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