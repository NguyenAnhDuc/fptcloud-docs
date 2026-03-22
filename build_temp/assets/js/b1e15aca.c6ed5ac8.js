"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26232],{

/***/ 589605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_end_user_request_resource_index_md_b1e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-end-user-request-resource-index-md-b1e.json
const site_docs_end_user_request_resource_index_md_b1e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"end-user-request-resource/index","title":"2. Request Resource","description":"Request Resource","source":"@site/docs/end-user-request-resource/index.md","sourceDirName":"end-user-request-resource","slug":"/end-user-request-resource/","permalink":"/end-user-request-resource/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tổng quan (Overview)","title":"2. Request Resource","source":"https://fptcloud.com/documents/end-user-request-resource/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Fqas 5","permalink":"/end-user-request-resource/fqas-5"},"next":{"title":"Initial setup","permalink":"/end-user-request-resource/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/end-user-request-resource/index.md


const frontMatter = {
	sidebar_label: 'Tổng quan (Overview)',
	title: '2. Request Resource',
	source: 'https://fptcloud.com/documents/end-user-request-resource/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Request Resource';

const assets = {

};



const toc = [{
  "value": "Tổng quan (Overview)",
  "id": "tổng-quan-overview",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn nhanh (Quick Starts)",
  "id": "hướng-dẫn-nhanh-quick-starts",
  "level": 2
}, {
  "value": "Các câu hỏi thường gặp (FAQs)",
  "id": "các-câu-hỏi-thường-gặp-faqs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "2-request-resource",
        children: "2. Request Resource"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Request Resource"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tổng-quan-overview",
      children: "Tổng quan (Overview)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Giới thiệu về Yêu cầu cung cấp tài nguyên"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhóm tính năng Yêu cầu cung cấp tài nguyên (Request Resource) sẽ giúp người dùng tự chủ động đưa ra yêu cầu cung cấp tăng thêm tài nguyên mới hoặc tài nguyên dùng thử mà không cần mất thời gian liên hệ hoặc chờ đợi với người bán hàng. Bạn có thể tự yêu cầu mua mới hoặc tăng thêm lượng dịch vụ nhanh chóng trên giao diện của FPT Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này sẽ cung cấp cho bạn thông tin về cách bạn tạo 1 yêu cầu cung cấp tài nguyên và những điều bạn nên cân nhắc trước khi tạo và quản lý các yêu cầu đã tạo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Những điều cần lưu ý trước khi bạn tạo một yêu cầu cung cấp tài nguyên?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "VPC: Với tài khoản có quyền VPC owner, khách hàng chỉ có thể chọn VPC gán với dịch vụ là New hoặc chính VPC đó. Với tài khoản có quyền Tenant Owner, khách hàng có thể chọn tất cả VPC có trong Tenant đó hoặc VPC New để gán với dịch vụ. Tuy nhiên, việc chọn VPC là không bắt buộc khi tạo yêu cầu."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Start date/End date: Start date và end date của mỗi dịch vụ có thể khác nhau. Start date bắt buộc phải là ngày sau ngày hiện tại (ngày tạo yêu cầu) và End date bắt buộc phải là ngày sau ngày Start date. Tuy nhiên bạn không bắt buộc phải chọn Start date/End date. FCI sẽ xác nhận lại với bạn ngày bắt đầu và ngày cuối cùng sử dụng dịch vụ nên bạn hoàn toàn yên tâm nếu không chọn thông tin này trong ticket yêu cầu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-nhanh-quick-starts",
      children: "Hướng dẫn nhanh (Quick Starts)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./create-request-resource",
          children: " Tạo một yêu cầu cung cấp tài nguyên "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./view-request-resource",
          children: " Xem các yêu cầu đã tạo "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./fqas-1",
          children: " Tôi có thể tạo nhiều yêu cầu cùng 1 lúc được không? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./fqas-2",
          children: " Làm thế nào để biết FCI đã nhận được yêu cầu của tôi? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./fqas-3",
          children: " Tôi có thể lựa chọn VPC hoặc tạo mới VPC khi yêu cầu dịch vụ không? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./fqas-4",
          children: " Vì sao tôi không tìm thấy phần Request Resource ở thành menu? "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./fqas-5",
          children: " Vì sao tôi không thể chọn submit để gửi ticket? "
        })
      }), "\n"]
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