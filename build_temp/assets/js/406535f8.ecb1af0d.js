"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[24310],{

/***/ 310511
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_guard_tao_moi_recipient_md_406_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-guard-tao-moi-recipient-md-406.json
const site_docs_cloud_guard_tao_moi_recipient_md_406_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-guard/tao-moi-recipient","title":"2. FPT Cloud Guard","description":"Tạo mới Recipient","source":"@site/docs/cloud-guard/tao-moi-recipient.md","sourceDirName":"cloud-guard","slug":"/cloud-guard/tao-moi-recipient","permalink":"/cloud-guard/tao-moi-recipient","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao moi recipient","title":"2. FPT Cloud Guard","source":"https://fptcloud.com/documents/cloud-guard/?doc=tao-moi-recipient","parent":"https://fptcloud.com/documents/cloud-guard","lang":"vi","converted":"2026-03-19"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-guard/tao-moi-recipient.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao moi recipient',
	title: '2. FPT Cloud Guard',
	source: 'https://fptcloud.com/documents/cloud-guard/?doc=tao-moi-recipient',
	parent: 'https://fptcloud.com/documents/cloud-guard',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Guard';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "2-fpt-cloud-guard",
        children: "2. FPT Cloud Guard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo mới Recipient"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud Guard"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert"
      }), " , mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recipients"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Recipient"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(657748)/* ["default"] */ .A) + "",
        width: "1920",
        height: "952"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin theo yêu cầu**:**"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Nhập tên người nhận."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " : Chọn phương thức gửi cảnh báo. FPT Alert đang hỗ trợ các phương thức Email, Telegram, Slack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Khai báo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Address"
      }), " nhận cảnh báo tương ứng với Type đã chọn, đây là địa chỉ hệ thống sẽ gửi thông báo đến khi mức sử dụng của tài nguyên vượt ngưỡng mà người dùng tùy chỉnh khi tạo mới Alert."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Email:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Address"
        }), " : Nhập địa chỉ email của người nhận.", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT Alert 2022 14",
          src: (__webpack_require__(805617)/* ["default"] */ .A) + "",
          width: "1024",
          height: "465"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Telegram"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Telegram ID"
        }), " : Nhập Telegram ID của người nhận cảnh báo, nếu chưa có ID có thể lấy theo hướng dẫn của hệ thống.", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT Alert 2022 15",
          src: (__webpack_require__(470160)/* ["default"] */ .A) + "",
          width: "1024",
          height: "490"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lưu ý"
        }), " : Nếu người dùng muốn nhận cảnh báo qua Telegram group, cần thực hiện các bước sau:"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Tạo group, lấy ID của group và tạo recipient tương ứng trên Cloud Guard"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Add bot FPT Cloud Guard vào group để nhận cảnh báo về nhóm"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nhận cảnh báo qua Slack"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slack Channel ID"
        }), " : Chọn Slack Channel cần nhận cảnh báo. Bạn cần đăng nhập vào tài khoản ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Slack,"
        }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Channel"
        }), " từ danh sách sau đó ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FPT Portal"
        }), " sẽ tự động nhận ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Slack Channel ID."
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT Alert 2022 16",
          src: (__webpack_require__(692593)/* ["default"] */ .A) + "",
          width: "1024",
          height: "495"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Khi đã nhập đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Alert 2022 17",
        src: (__webpack_require__(638426)/* ["default"] */ .A) + "",
        width: "1024",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hệ thống sẽ kiểm tra tài nguyên, tiến hành xử lý và thông báo xác nhận. Sau khi khởi tạo thành công, người dùng có thể thấy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recipient"
      }), " mới và có thể kiểm tra thông tin trên bảng quản trị."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./recipient-la-gi",
        children: " Previous Recipient là gì? "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./recipient-teams",
        children: " Next Tạo mới người nhận qua MSTeams "
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

/***/ 657748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/419e42b8a41d-image-1725532997863-18afe826d95fe1bae0c435c43ff1bd4e.png");

/***/ },

/***/ 638426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/52aac771cac5-Userguide-FPT-Alert-2022-17-1024x471-15d6aefe0291ec0471b60a0f5b49fed3.png");

/***/ },

/***/ 692593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7ab818fa912a-Userguide-FPT-Alert-2022-16-1024x495-f09975c1d36525300ca0afdb8c93c5c9.png");

/***/ },

/***/ 470160
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9d5693fb0d02-Userguide-FPT-Alert-2022-15-1024x490-cdc90aed7e44b854f3f750d756ca57ae.png");

/***/ },

/***/ 805617
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a24c9d90fdaa-Userguide-FPT-Alert-2022-14-1024x465-06180c0a0c8c37e551f40463da1f3dbb.png");

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