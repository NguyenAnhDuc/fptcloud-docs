"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45111],{

/***/ 57233
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_other_quan_ly_project_md_82d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-other-quan-ly-project-md-82d.json
const site_docs_cloud_server_other_quan_ly_project_md_82d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/other/quan-ly-project","title":"Quản lý Project","description":"*","source":"@site/docs/cloud-server/other/quan-ly-project.md","sourceDirName":"cloud-server/other","slug":"/cloud-server/other/quan-ly-project","permalink":"/cloud-server/other/quan-ly-project","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quản lý Project","title":"Quản lý Project","source":"https://fptcloud.com/documents/cloud-server/?doc=quan-ly-project","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cloud Server","permalink":"/cloud-server/other/qu-n"},"next":{"title":"Nat Instance có thể được sử dụng như 1 instance thông thường không?","permalink":"/cloud-server/other/question-"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/other/quan-ly-project.md


const frontMatter = {
	sidebar_label: 'Quản lý Project',
	title: 'Quản lý Project',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=quan-ly-project',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý Project';

const assets = {

};



const toc = [{
  "value": "<strong>1. Quản lý Project</strong>",
  "id": "1-quản-lý-project",
  "level": 3
}, {
  "value": "<strong>2. Tạo Project</strong>",
  "id": "2-tạo-project",
  "level": 3
}, {
  "value": "<strong>3. Chỉnh sửa project</strong>",
  "id": "3-chỉnh-sửa-project",
  "level": 3
}, {
  "value": "<strong>4. Xóa project</strong>",
  "id": "4-xóa-project",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
        id: "quản-lý-project",
        children: "Quản lý Project"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Phân quyền: phase 1 chỉ có Tenant Owner có quyền quản lý Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-quản-lý-project",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Quản lý Project"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng có thể xem danh sách Project trên hệ thống"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(234028)/* ["default"] */ .A) + "",
        width: "731",
        height: "227"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tạo-project",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tạo Project"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tenant Owner có thể tạo Project trên Unify Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Management"
      }), " , bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Project"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập thông tin project"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tên: Tên của project"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mô tả: Nhập mô tả cho project"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn VPC (khi chọn VPC, các VPC đang thuộc project khác sẽ được chuyển về project đang tạo)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create project"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ lưu lại thông tin project và chuyển hướng user về trang Project Management."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(832375)/* ["default"] */ .A) + "",
        width: "731",
        height: "398"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-chỉnh-sửa-project",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Chỉnh sửa project"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tenant owner có thể chỉnh sửa thông tin project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(659496)/* ["default"] */ .A) + "",
        width: "731",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-xóa-project",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Xóa project"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tenant Owner có thể xóa các project được tạo từ Unify Portal"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Chỉ có thể xóa Project không có VPC"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Không có quyền xóa project mặc định, chỉ có thể chỉnh sửa thông tin project"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(424820)/* ["default"] */ .A) + "",
        width: "731",
        height: "283"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./project-structure",
        children: " Previous Quản lý Project "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./select-project-when-creating-vpc",
        children: " Next Chọn Project khi tạo VPC "
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

/***/ 832375
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/053729e748e7-image-1733737951102-001b152d7d63f510b3b6fef7a33a749a.png");

/***/ },

/***/ 659496
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6604f299434-image-1733737963485-110121e70b7e4c6507fe0f6653ca1a9e.png");

/***/ },

/***/ 234028
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cd8ef818f0af-image-1733737902958-a1767bfe2cdd3376db72b09ff8a26a32.png");

/***/ },

/***/ 424820
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f61b63794614-image-1733737980968-05532a71560498036e301b7c624b68ac.png");

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