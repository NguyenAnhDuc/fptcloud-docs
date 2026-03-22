"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89806],{

/***/ 390040
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_phan_quyen_su_dung_bucket_cho_cac_subuser_md_8ec_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-phan-quyen-su-dung-bucket-cho-cac-subuser-md-8ec.json
const site_docs_object_storage_phan_quyen_su_dung_bucket_cho_cac_subuser_md_8ec_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser","title":"2. FPT Object Storage","description":"Phân quyền sử dụng bucket cho các subuser","source":"@site/docs/object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser.md","sourceDirName":"object-storage","slug":"/object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser","permalink":"/object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Phan Quyen Su Dung Bucket Cho Cac Subuser","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=phan-quyen-su-dung-bucket-cho-cac-subuser","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Mount Bucket Thanh O Dia Tren May Local","permalink":"/object-storage/mount-bucket-thanh-o-dia-tren-may-local"},"next":{"title":"Sdk Api Reference","permalink":"/object-storage/sdk-api-reference"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/phan-quyen-su-dung-bucket-cho-cac-subuser.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Phan Quyen Su Dung Bucket Cho Cac Subuser',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=phan-quyen-su-dung-bucket-cho-cac-subuser',
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
  "value": "Kết luận",
  "id": "kết-luận",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
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
      children: "Phân quyền sử dụng bucket cho các subuser"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại FPT Object Storage đã hỗ trợ bạn tạo các SubUser, tuy nhiên role của SubUser sẽ hiệu lực với toàn bộ tài nguyên của Admin. Ví dụ bạn tạo một SubUser với role Read only thì SubUser đấy sẽ có quyền read đối với toàn bộ bucket của Admin."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để phân quyền cho từng bucket, cần phải sử dụng đến Bucket Policy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Giả sử chúng ta có 3 bucket là Bucket-1, Bucket-2, Bucket-3 muốn phân quyền cho 3 SubUser SubUser-1, SubUser-2, SubUser-3. Dưới đây là hướng dẫn cấu hình chi tiết trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Unify Portal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn cần có tài khoản FPT Cloud, đã được enable dịch vụ Object Storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đã tạo thành công các bucket trên cùng một Region."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tổng-quan",
      children: "Tổng quan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tạo các SubUser với quyền ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "None"
      }), " để đảm bảo SubUser khôg thể truy cập vào các bucket khác."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Mở quyền truy cập vào bucket cụ thể cho SubUser. Ở từng bucket, khai báo Bucket Policy theo mẫu sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": {\n        \"AWS\": [\"arn:aws:iam::SUBUSER_ACCOUNT_ID:user/SUBUSER_NAME\"]\n      },\n      \"Action\": \"s3:*\",\n      \"Resource\": [\n        \"arn:aws:s3:::YOUR_BUCKET_NAME\",\n        \"arn:aws:s3:::YOUR_BUCKET_NAME/*\"\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version"
        }), " : Phiên bản của policy (thường là \"2012-10-17\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effect"
        }), " : Quyền (có thể là \"Allow\" hoặc \"Deny\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Principal"
        }), " : Người dùng hoặc vai trò cụ thể. Thay thế SUBUSER_ACCOUNT_ID và SUBUSER_NAME bằng thông tin của subuser cần được cấp quyền."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), " : Hành động mà subuser được phép thực hiện trên bucket (ở đây là \"s3:*\" cho tất cả các hành động)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource"
        }), " : Tài nguyên mà policy áp dụng (ở đây là bucket và tất cả các object trong bucket)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Tạo các SubUser Key và cung cấp cho enduser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kết-luận",
      children: "Kết luận"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Với các bước trên, bạn đã sử dụng bucket policy để phân quyền subuser sử dụng bucket khác nhau trong FPT Object Storage."
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