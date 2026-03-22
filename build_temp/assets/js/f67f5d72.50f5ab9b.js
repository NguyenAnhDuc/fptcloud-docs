"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[41576],{

/***/ 997401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_tutorials_quan_ly_subuser_md_f67_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-tutorials-quan-ly-subuser-md-f67.json
const site_docs_object_storage_tutorials_quan_ly_subuser_md_f67_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/tutorials-quan-ly-subuser","title":"2. FPT Object Storage","description":"Quản lý SubUser","source":"@site/docs/object-storage/tutorials-quan-ly-subuser.md","sourceDirName":"object-storage","slug":"/object-storage/tutorials-quan-ly-subuser","permalink":"/object-storage/tutorials-quan-ly-subuser","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials Quan Ly Subuser","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-subuser","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal","permalink":"/object-storage/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal"},"next":{"title":"Tutorials Su Dung Object Storage Tren Fpt Portal","permalink":"/object-storage/tutorials-su-dung-object-storage-tren-fpt-portal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/tutorials-quan-ly-subuser.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials Quan Ly Subuser',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-subuser',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Các vai trò được hỗ trợ:",
  "id": "các-vai-trò-được-hỗ-trợ",
  "level": 3
}, {
  "value": "Tạo SubUser Mới",
  "id": "tạo-subuser-mới",
  "level": 2
}, {
  "value": "Chỉnh Sửa Role Của SubUser",
  "id": "chỉnh-sửa-role-của-subuser",
  "level": 2
}, {
  "value": "Quản Lý SubUser Access Key",
  "id": "quản-lý-subuser-access-key",
  "level": 2
}, {
  "value": "A. Tạo SubUser Access Key",
  "id": "a-tạo-subuser-access-key",
  "level": 3
}, {
  "value": "B. Xóa SubUser Access Key",
  "id": "b-xóa-subuser-access-key",
  "level": 3
}, {
  "value": "Xoá SubUser",
  "id": "xoá-subuser",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
      children: "Quản lý SubUser"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "quản-lý-subuser-trên-fpt-object-storage",
      children: "Quản Lý SubUser Trên FPT Object Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SubUser"
      }), " là người dùng con được tạo trong FPT Object Storage với quyền truy cập giới hạn, giúp tăng cường bảo mật và kiểm soát truy cập dữ liệu hiệu quả hơn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tuỳ theo nhu cầu sử dụng, quản trị viên có thể gán cho SubUser các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "role"
      }), " với mức độ truy cập khác nhau."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-vai-trò-được-hỗ-trợ",
      children: "Các vai trò được hỗ trợ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "None"
        }), " : Không có quyền truy cập."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read"
        }), " : Chỉ được đọc dữ liệu trong bucket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write"
        }), " : Chỉ được ghi dữ liệu vào bucket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read - Write"
        }), " : Có quyền đọc và ghi dữ liệu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full"
        }), " : Toàn quyền, bao gồm cả thao tác cấu hình bucket."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc sử dụng SubUser giúp phân quyền rõ ràng, hạn chế rủi ro khi cần chia sẻ quyền truy cập với nhiều người dùng hoặc ứng dụng."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tạo-subuser-mới",
      children: "Tạo SubUser Mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SubUser"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Region"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create SubUser"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập thông tin cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Tên hiển thị dễ nhớ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access level"
        }), " : Chọn vai trò phù hợp."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn tất quá trình tạo SubUser."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chỉnh-sửa-role-của-subuser",
      children: "Chỉnh Sửa Role Của SubUser"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trong danh sách SubUser, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detail"
      }), " tại SubUser cần chỉnh sửa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Ở trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access level"
      }), " , chọn role mới phù hợp."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để cập nhật."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quản-lý-subuser-access-key",
      children: "Quản Lý SubUser Access Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mỗi SubUser có thể có tối đa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2 cặp Access Key"
      }), " dùng để xác thực khi truy cập bucket qua SDK, API hoặc S3 Client."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-tạo-subuser-access-key",
      children: "A. Tạo SubUser Access Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detail"
      }), " của SubUser cần tạo key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Key"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Hệ thống sẽ tạo một cặp ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Key"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secret Key"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu trữ ngay"
      }), " thông tin key ở nơi an toàn, sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm access key"
      }), " để xác nhận."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "🔐 Lưu ý: Secret Key chỉ hiển thị một lần duy nhất."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-xóa-subuser-access-key",
      children: "B. Xóa SubUser Access Key"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detail"
      }), " của SubUser chứa key cần xoá."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của Access Key, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Xác nhận thao tác khi được yêu cầu để hoàn tất việc xoá key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠️ Sau khi xoá, tất cả các client đang sử dụng key này sẽ mất quyền truy cập."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "xoá-subuser",
      children: "Xoá SubUser"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trong danh sách SubUser, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " bên cạnh SubUser cần xoá."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Xác nhận thao tác khi hộp thoại cảnh báo hiển thị."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: " Previous Quản lý Access Key "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-su-dung-object-storage-tren-s3-client",
        children: " Next Sử dụng Object Storage trên S3 Browser "
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