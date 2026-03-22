"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[33846],{

/***/ 246873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_tutorials_encryption_md_f23_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-tutorials-encryption-md-f23.json
const site_docs_object_storage_tutorials_encryption_md_f23_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/tutorials-encryption","title":"2. FPT Object Storage","description":"Encryption","source":"@site/docs/object-storage/tutorials-encryption.md","sourceDirName":"object-storage","slug":"/object-storage/tutorials-encryption","permalink":"/object-storage/tutorials-encryption","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials Encryption","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-encryption","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Bucket","permalink":"/object-storage/tutorials-bucket"},"next":{"title":"Tutorials Object","permalink":"/object-storage/tutorials-object"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/tutorials-encryption.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials Encryption',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-encryption',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Server-Side Encryption with Customer-Provided Keys (SSE-C)",
  "id": "server-side-encryption-with-customer-provided-keys-sse-c",
  "level": 2
}, {
  "value": "Cách Hoạt Động Của SSE-C",
  "id": "cách-hoạt-động-của-sse-c",
  "level": 3
}, {
  "value": "Các Điểm Quan Trọng",
  "id": "các-điểm-quan-trọng",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server-side-encryption-with-customer-provided-keys-sse-c",
      children: "Server-Side Encryption with Customer-Provided Keys (SSE-C)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Server-Side Encryption with Customer-Provided Keys (SSE-C)"
      }), " là một tính năng trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " giúp tăng cường bảo mật dữ liệu của bạn bằng cách sử dụng các khóa mã hóa do khách hàng cung cấp. Dưới đây là cách hoạt động và các điểm quan trọng của tính năng này:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cách-hoạt-động-của-sse-c",
      children: "Cách Hoạt Động Của SSE-C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tải lên Dữ liệu:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Khi bạn tải lên một object, bạn cần cung cấp khóa mã hóa cùng với dữ liệu."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FPT Object Storage sử dụng khóa mã hóa này để mã hóa dữ liệu trước khi lưu trữ."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sau khi mã hóa xong, khóa mã hóa sẽ bị tiêu hủy và không được lưu trữ lại trên hệ thống."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tải xuống Dữ liệu:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Khi bạn tải xuống dữ liệu, bạn cần cung cấp khóa mã hóa mà bạn đã sử dụng để mã hóa dữ liệu ban đầu."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FPT Object Storage sử dụng khóa này để giải mã dữ liệu và trả lại cho bạn."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-điểm-quan-trọng",
      children: "Các Điểm Quan Trọng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Khóa:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bạn hoàn toàn chịu trách nhiệm về việc quản lý khóa mã hóa của mình."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FPT Object Storage không lưu trữ khóa mã hóa của bạn. Nếu bạn mất khóa mã hóa, bạn sẽ không thể truy cập vào dữ liệu được mã hóa bằng khóa đó."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bảo mật:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SSE-C cung cấp một lớp bảo vệ dữ liệu bổ sung, đặc biệt hữu ích cho các tổ chức yêu cầu tuân thủ quy định bảo mật nghiêm ngặt."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Khách hàng có khả năng kiểm soát hoàn toàn quyền truy cập vào các object quan trọng thông qua quản lý khóa mã hóa."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sử Dụng:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Khi sử dụng SSE-C, bạn cần phải tự tạo, lưu trữ và bảo vệ khóa mã hóa của mình."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Đảm bảo rằng bạn có các quy trình bảo mật thích hợp để quản lý và bảo vệ các khóa mã hóa này."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SSE-C là một phương thức hiệu quả để bảo vệ dữ liệu nhạy cảm trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , mang lại sự kiểm soát tối đa cho khách hàng về quyền truy cập và bảo mật dữ liệu của họ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-bucket-config",
        children: " Previous Bucket Config "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: " Next Quản lý Access Key "
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