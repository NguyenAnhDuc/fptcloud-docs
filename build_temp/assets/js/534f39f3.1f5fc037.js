"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[59860],{

/***/ 629496
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engine_initial_tao_security_groups_md_534_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engine-initial-tao-security-groups-md-534.json
const site_docs_managed_fpt_database_engine_initial_tao_security_groups_md_534_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engine/initial/tao-security-groups","title":"2. Managed – FPT Database Engine","description":"Tạo Security Groups","source":"@site/docs/managed-fpt-database-engine/initial/tao-security-groups.md","sourceDirName":"managed-fpt-database-engine/initial","slug":"/managed-fpt-database-engine/initial/tao-security-groups","permalink":"/managed-fpt-database-engine/initial/tao-security-groups","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tao security groups","title":"2. Managed – FPT Database Engine","source":"https://fptcloud.com/documents/managed-fpt-database-engine/?doc=tao-security-groups","parent":"https://fptcloud.com/documents/managed-fpt-database-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"T o subnets","permalink":"/managed-fpt-database-engine/initial/t-o-subnets"},"next":{"title":"Quản lý Database","permalink":"/managed-fpt-database-engine/management/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engine/initial/tao-security-groups.md


const frontMatter = {
	sidebar_label: 'Tao security groups',
	title: '2. Managed – FPT Database Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engine/?doc=tao-security-groups',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engine';

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
        id: "2-managed--fpt-database-engine",
        children: "2. Managed – FPT Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Security Groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại thanh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Menu"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293340)/* ["default"] */ .A) + "",
        width: "581",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " bấm Create Security Group, xuất hiện màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security Group"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(448454)/* ["default"] */ .A) + "",
        width: "602",
        height: "292"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin cần thiết:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trường ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " nhập tên group sao cho dễ quản lý nhất. Mặc định hệ thống sẽ tự đặt cho người dùng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trường ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnet:"
        }), " chọn theo list, người dùng chọn dải phù hợp với Database mình đã chon khi tạo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trường ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Applied instances:"
        }), " Chọn máy chủ cần áp dụng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trường ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Inbound Rules:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Type:"
            }), " Chọn loại Database, có thể chọn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "All ports"
            }), " để mở toàn bộ Customize ports để mở một hoặc một dải Port tùy chọn. Ngoài ra hệ thống sẽ đề xuất Port của một số dịch vụ phổ biến như SSH, RDP, MySQL, HTTP, HTTPS, …"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol:"
            }), " Chọn theo list"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Port:"
            }), " Nhập số Port cần mở, …"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Action:"
            }), " Chọn theo list"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Source:"
            }), " Nhập các IP trên Internet có thể kết nối đến Port này vào trường Source. Chọn All để đồng ý tất cả, MyIP để cho phép IP hiện tại của máy, hoặc nhập trực tiếp IP để thêm các IP tùy chọn."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Description:"
            }), " Nhập chú thích."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add rule"
        }), " để tiếp tục thêm rule mới."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Security group"
      }), " , người dùng chờ 1-2’ để security có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(570404)/* ["default"] */ .A) + "",
        width: "602",
        height: "414"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./t%E1%BA%A1o-floating-ip",
        children: " Next Tạo Floating IP "
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

/***/ 293340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6dd8ad4e47b-B1cua-6.1-b3479cc1fffb88f99322eda995b79738.png");

/***/ },

/***/ 570404
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c5041ca1ea77-B3-cua6.1-960a6a2975fbd1be9abd0648381833ee.png");

/***/ },

/***/ 448454
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/db433c049f0e-B2cua-6.1-c04b8310609efa58aec0110903fc6b57.png");

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