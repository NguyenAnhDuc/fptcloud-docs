"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[63436],{

/***/ 651514
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_initial_tutorials_quan_ly_access_key_cua_object_storage_tren_fpt_portal_md_82a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-initial-tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal-md-82a.json
const site_docs_object_storage_initial_tutorials_quan_ly_access_key_cua_object_storage_tren_fpt_portal_md_82a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal","title":"2. FPT Object Storage","description":"Quản lý Access Key","source":"@site/docs/object-storage/initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal.md","sourceDirName":"object-storage/initial","slug":"/object-storage/initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal","permalink":"/object-storage/initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Object","permalink":"/object-storage/initial/tutorials-object"},"next":{"title":"Tutorials Su Dung Object Storage Tren Fpt Portal","permalink":"/object-storage/initial/tutorials-su-dung-object-storage-tren-fpt-portal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal.md


const frontMatter = {
	sidebar_label: 'Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Tạo Admin Access Key",
  "id": "tạo-admin-access-key",
  "level": 2
}, {
  "value": "Xoá Access Key",
  "id": "xoá-access-key",
  "level": 2
}, {
  "value": "Lấy Thông Tin Endpoint",
  "id": "lấy-thông-tin-endpoint",
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
      children: "Quản lý Access Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cặp Access Key và Private Key là phương thức xác thực cơ bản của dịch vụ FPT Object Storage. Để sử dụng bucket thông qua các phương thức khác Portal như SDK, API, S3 Client. Bạn cần có các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access Key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Private Key"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Endpoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Region (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các thông tin này trên sẽ được cung cấp đầy đủ trên FPT Unify Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hãy lưu trữ cẩn thận thông tin này. Access Key được tạo ra ở tab Access Key đều là key với quyền Admin, vì vậy bạn có thể sẽ mất toàn bộ dữ liệu trong các bucket nếu thông tin này lộ lọt ra ngoài. Trong trường hợp cần share quyền sử dụng bucket cho nhiều người, hoặc lưu trữ key ở ứng dụng không an toàn, hãy tạo các SubUser với quyền truy cập giới hạn và sử dụng SubUser Access Key."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu phát hiện bị lộ key hãy truy cập FPT Portal và xóa key đấy ngay lập tức tránh phát sinh các rủi ro khác."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tạo-admin-access-key",
      children: "Tạo Admin Access Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại mỗi tài khoản chỉ được tạo tối đa 5 cặp Admin Access Key tại một region. Nếu muốn sử dụng nhiều hơn 5 cặp key, hãy tạo thêm các SubUser."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vì lý do bảo mật, Secret Key chỉ được hiển thị một lần duy nhất ở bước tạo. Hãy lưu trữ cẩn thận ở nơi an toàn tránh tính trạng mất quyền truy cập vào bucket."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập menu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage"
        }), " → chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key"
        }), " → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Region"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate Key"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hệ thống tạo ra một cặp ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret Key"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sao chép và lưu trữ"
        }), " key ở nơi an toàn, sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm Access Key"
        }), " để hoàn tất."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "xoá-access-key",
      children: "Xoá Access Key"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xóa, tất cả các ứng dụng hoặc client đang sử dụng key đó sẽ không còn truy cập được nữa."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập menu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage"
        }), " → tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key"
        }), " → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Region"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tìm Access Key cần xoá → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " tại cột thao tác."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác nhận xoá khi hộp thoại hiện lên."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lấy-thông-tin-endpoint",
      children: "Lấy Thông Tin Endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), " là địa chỉ HTTPS dùng để kết nối đến FPT Object Storage. Mỗi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "region"
      }), " sẽ có endpoint khác nhau."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập menu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage"
        }), " → tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key"
        }), " → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Region"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại cột ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Endpoint"
        }), " , bạn có thể ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sao chép URL"
        }), " tương ứng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-quan-ly-subuser",
        children: " Next Quản lý SubUser "
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