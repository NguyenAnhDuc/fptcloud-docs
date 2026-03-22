"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[13021],{

/***/ 750990
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_resize_load_balancer_md_2ed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-resize-load-balancer-md-2ed.json
const site_docs_load_balancer_resize_load_balancer_md_2ed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/resize-load-balancer","title":"Resize cho Load Balancer","description":"*","source":"@site/docs/load-balancer/resize-load-balancer.md","sourceDirName":"load-balancer","slug":"/load-balancer/resize-load-balancer","permalink":"/load-balancer/resize-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Resize cho Load Balancer","title":"Resize cho Load Balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=resize-load-balancer","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Redirect prefix","permalink":"/load-balancer/redirect-prefix"},"next":{"title":"Cấu hình SNI trên Load balancer","permalink":"/load-balancer/sni-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/resize-load-balancer.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Resize cho Load Balancer',
	title: 'Resize cho Load Balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=resize-load-balancer',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Resize cho Load Balancer';

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
        id: "resize-cho-load-balancer",
        children: "Resize cho Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Thay Đổi gói Load Balancer (Resize)\""
      }), " là một phần quan trọng trong việc quản lý ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer."
      }), " Nó cho phép bạn tùy chỉnh các gói dịch vụ phù hợp với nhu cầu sử dụng cả về mặt tài chính lẫn vận hành của Load Balancer như:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cải thiện hiệu suất:"
          }), " Tính năng resize giúp đảm bảo rằng ứng dụng của bạn luôn có đủ tài nguyên để xử lý lưu lượng truy cập."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tăng khả năng sẵn sàng:"
          }), " Tính năng resize có thể giúp đảm bảo rằng ứng dụng của bạn luôn sẵn sàng, ngay cả khi lưu lượng truy cập tăng đột biến."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tiết kiệm chi phí:"
          }), " Tính năng resize có thể giúp bạn tiết kiệm chi phí bằng cách đảm bảo rằng bạn chỉ sử dụng các tài nguyên cần thiết, tránh lãng phí tài nguyên và giảm chi phí cloud của bạn."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thay đổi gói cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " , người dùng thao tác theo các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hiển thị danh sách Load Balancer, nhấn vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“ba chấm”"
      }), " của Load Balancer cần thay đổi gói, nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Một hộp thoại hiện ra bao gồm các gói ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " khả dụng, người dùng tiến hành chọn gói phù hợp với nhu cầu sử dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize load balancer"
      }), " để thay đổi gói và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để huỷ bỏ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trước khi thực hiện resize, đảm bảo VPC đã được cấp quota size mới."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Quá trình ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize"
        }), " sẽ diễn ra trong một khoảng thời gian nhất định, do đó, Load Balancer của bạn sẽ bị gián đoạn trong thời gian này và tiếp tục hoạt động bình thường sau khi hoàn tất quá trình."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sau khi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize"
        }), " thành công, người dùng cần kiểm tra các thông số/dữ liệu thực tế của Load Balancer tại tab Monitor, để đảm bảo rằng gói Load Balancer mới có thể đáp ứng nhu cầu sử dụng thực tế."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./them-external-member",
        children: " Previous Thêm External member cho Load Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./access-logs",
        children: " Next Access logs cho Load balancer "
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