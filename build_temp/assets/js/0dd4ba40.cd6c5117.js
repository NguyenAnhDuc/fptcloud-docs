"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[75956],{

/***/ 81271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_use_cases_xay_dung_mot_website_tinh_bang_fpt_object_storage_md_0dd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-use-cases-xay-dung-mot-website-tinh-bang-fpt-object-storage-md-0dd.json
const site_docs_object_storage_use_cases_xay_dung_mot_website_tinh_bang_fpt_object_storage_md_0dd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage","title":"2. FPT Object Storage","description":"Xây dựng một website tĩnh bằng FPT Object Storage","source":"@site/docs/object-storage/use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage.md","sourceDirName":"object-storage/use-cases","slug":"/object-storage/use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage","permalink":"/object-storage/use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Xay Dung Mot Website Tinh Bang Fpt Object Storage","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=xay-dung-mot-website-tinh-bang-fpt-object-storage","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application","permalink":"/object-storage/use-cases/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application"},"next":{"title":"Clone Du Lieu Giua Hai Bucket Khac Nhau","permalink":"/object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage.md


const frontMatter = {
	sidebar_label: 'Xay Dung Mot Website Tinh Bang Fpt Object Storage',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=xay-dung-mot-website-tinh-bang-fpt-object-storage',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Giới thiệu",
  "id": "giới-thiệu",
  "level": 2
}, {
  "value": "Điều kiện tiên quyết",
  "id": "điều-kiện-tiên-quyết",
  "level": 2
}, {
  "value": "Tổng quan",
  "id": "tổng-quan",
  "level": 2
}, {
  "value": "Giải pháp",
  "id": "giải-pháp",
  "level": 2
}, {
  "value": "Kết luận",
  "id": "kết-luận",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Xây dựng một website tĩnh bằng FPT Object Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ngoài chức năng đơn thuần là lưu trữ dữ liệu, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " còn hỗ trợ cấu hình bucket thành một web hosting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với các đặc điểm như độ ổn định cao, giá cả rất rẻ, cấu hình đơn giản. Bạn có thể sử dụng web hosting này với nhiều mục đích khác nhau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lưu trữ các website tĩnh như Landing page, Resume websites, Portfolio websites, Brochure websites và các read-only sites khác."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lưu trữ một website để thông báo lỗi khi website chính có gián đoạn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đang sử dụng dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " và có một bucket public."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tổng-quan",
      children: "Tổng quan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Static website là một trang web không có tính năng tương tác phía máy chủ. Nó thường chỉ bao gồm các tệp HTML, CSS, JavaScript và tài nguyên như hình ảnh, video. Bằng cách sử dụng FPT Object Storage, bạn có thể lưu trữ những tệp này trong bucket của mình và cấu hình nó để hoạt động như một trang web."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi cấu hình thành công, FPT sẽ cung cấp cho bạn một domain. Bạn có thể sử dụng trực tiếp domain này hoặc mua một domain khác và trỏ CNAME sang để dùng domain của riêng mình."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giải-pháp",
      children: "Giải pháp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dưới đây là các bước cơ bản để xây dựng một web tĩnh bằng FPT Object Storage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chuẩn bị page website:"
      }), " Tạo các tệp HTML, CSS, JavaScript và tất cả các tài nguyên khác cần thiết cho trang web của bạn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo bucket public:"
      }), " Đảm bảo rằng bucket bạn muốn sử dụng cho trang web là public. Điều này cho phép mọi người truy cập vào nội dung trong bucket."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload tệp lên bucket:"
      }), " Sử dụng giao diện FPT Portal hoặc client để upload các tệp bạn đã chuẩn bị lên bucket của mình."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cấu hình web hosting:"
      }), " Trong cài đặt của bucket, bạn sẽ thấy một phần cấu hình web hosting. Bạn cần thiết lập các tùy chọn như tên tệp index (thường là index.html) và tên tệp 404 (trang không tìm thấy). Hướng dẫn chi tiết ở đây."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập trang web:"
      }), " Sau khi đã cấu hình xong, bạn có thể truy cập trang web tĩnh của mình bằng cách sử dụng đường dẫn được cung cấp trong cài đặt web hosting của bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kết-luận",
      children: "Kết luận"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng FPT Object Storage để xây dựng một trang web tĩnh là một giải pháp đơn giản và tiết kiệm chi phí. Việc cấu hình bucket để hoạt động như một web hosting cho phép bạn dễ dàng chia sẻ nội dung trực tuyến mà không cần phải quản lý máy chủ riêng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application",
        children: " Previous Sử dụng FPT Object Storage làm media server "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./mount-bucket-thanh-o-dia-tren-may-local",
        children: " Next Mount bucket thành ổ đĩa trên máy local "
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