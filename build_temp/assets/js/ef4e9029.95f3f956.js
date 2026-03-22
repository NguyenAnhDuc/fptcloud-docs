"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[18971],{

/***/ 793336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_them_external_member_md_ef4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-them-external-member-md-ef4.json
const site_docs_load_balancer_them_external_member_md_ef4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/them-external-member","title":"Thêm External member cho Load Balancer","description":"*","source":"@site/docs/load-balancer/them-external-member.md","sourceDirName":"load-balancer","slug":"/load-balancer/them-external-member","permalink":"/load-balancer/them-external-member","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Thêm External member cho Load Balancer","title":"Thêm External member cho Load Balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=them-external-member","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Thêm/bớt member cho Server pool","permalink":"/load-balancer/them-bot-member-cho-server-pool"},"next":{"title":"Load Balancer","permalink":"/load-balancer/them-may-ao-vao-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/them-external-member.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Thêm External member cho Load Balancer',
	title: 'Thêm External member cho Load Balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=them-external-member',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Thêm External member cho Load Balancer';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    hr: "hr",
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
        id: "thêm-external-member-cho-load-balancer",
        children: "Thêm External member cho Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "External member"
      }), " của Load Balancer cho phép bạn thêm các endpoint bên ngoài vào pool server. Endpoint bên ngoài có thể là một máy chủ, dịch vụ hoặc ứng dụng khác đang chạy trên mạng. Việc thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "External member"
      }), " giúp bạn mở rộng khả năng xử lý của Load Balancer, tận dụng các tài nguyên bên ngoài và nâng cao hiệu quả hoạt động của hệ thống."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "External member"
      }), " đã được thêm khi khởi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer,"
      }), " người dùng tham khảo cách tạo Load Balancer ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/load-balancer/?doc=chinh-sua-listener",
        children: "tại đây."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "External member"
      }), " cho Load Balancer, người dùng thao tác theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình hiển thị danh sách Load Balancer, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " cần thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "External member."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại màn hiển thị chi tiết Load Balancer, chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Server pool,"
      }), " tại đây người dùng chọn server pool cần thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "External member."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add server"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add external member."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên hiển thị cho ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "External member"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP Address"
          }), " : Địa chỉ IP của ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "External member"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " : Port mà Member sẽ lắng nghe để xử lý các yêu cầu đến. Port này thường liên quan đến dịch vụ cụ thể mà Member cung cấp."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Weight"
          }), " : Trọng số quy định mức độ ưu tiên của mỗi ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "External Member"
          }), " trong việc xử lý các yêu cầu. Các Member có trọng số cao sẽ nhận được nhiều yêu cầu hơn so với các Member có trọng số thấp."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Server pool"
      }), " để kết thúc thao tác."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xoá ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "External member"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của External member cần xoá, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./theo-doi-bieu-do-load-balancer",
        children: " Previous Theo dõi biểu đồ giám sát Load Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./resize-load-balancer",
        children: " Next Resize cho Load Balancer "
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