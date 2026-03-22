"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15968],{

/***/ 309670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_initial_tutorials_bucket_md_3fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-initial-tutorials-bucket-md-3fd.json
const site_docs_object_storage_initial_tutorials_bucket_md_3fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/initial/tutorials-bucket","title":"2. FPT Object Storage","description":"Bucket","source":"@site/docs/object-storage/initial/tutorials-bucket.md","sourceDirName":"object-storage/initial","slug":"/object-storage/initial/tutorials-bucket","permalink":"/object-storage/initial/tutorials-bucket","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tutorials Bucket","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-bucket","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Bucket Config","permalink":"/object-storage/initial/tutorials-bucket-config"},"next":{"title":"Tutorials Object","permalink":"/object-storage/initial/tutorials-object"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/initial/tutorials-bucket.md


const frontMatter = {
	sidebar_label: 'Tutorials Bucket',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-bucket',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Tạo Bucket",
  "id": "tạo-bucket",
  "level": 2
}, {
  "value": "Xóa Bucket",
  "id": "xóa-bucket",
  "level": 2
}, {
  "value": "Empty Bucket",
  "id": "empty-bucket",
  "level": 2
}, {
  "value": "Thêm thư mục mới trong Bucket",
  "id": "thêm-thư-mục-mới-trong-bucket",
  "level": 2
}, {
  "value": "Tìm kiếm Bucket",
  "id": "tìm-kiếm-bucket",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Bucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket"
      }), " là một đơn vị lưu trữ mang tính logical trên FPT Object Storage, là một vùng chứa các đối tượng (objects), chẳng hạn như file dữ liệu, ảnh, video, hoặc các tài liệu khác mà người dùng upload lên. Để xem danh sách các bucket, truy cập ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "Object Storage Management"
      }), ", chọn Project cần sử dụng và chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Buckets"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tạo nhiều bucket:"
        }), " Mỗi tài khoản FPT Object Storage có thể tạo nhiều bucket, giúp bạn tổ chức dữ liệu theo cách bạn muốn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cấu hình ACL và set quyền truy cập:"
        }), " Mỗi bucket có thể có các cấu hình khác nhau về ACL (Access Control List) và quyền truy cập, cho phép bạn kiểm soát ai có thể truy cập và thực hiện các thao tác trên dữ liệu của bạn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Không giới hạn loại file:"
        }), " Bạn có thể tải lên bất kỳ loại file nào lên các bucket trong FPT Object Storage mà không bị giới hạn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tạo-bucket",
      children: "Tạo Bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com"
      }), " và chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Buckets"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Bucket"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập tên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket"
      }), " mới, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Region"
      }), " từ danh sách. Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced setting"
      }), " , người dùng có thể:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket ACL:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Public/ Private"
        }), " để quản lý quyền truy cập."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket Versioning:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable/ Enable"
        }), " để quản lý các phiên bản của object."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Sau khi hoàn thành, bucket mới sẽ hiển thị trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "xóa-bucket",
      children: "Xóa Bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Thao tác xóa bucket sẽ xóa toàn bộ các object bên trong và không thể phục hồi."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Buckets"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của bucket cần xóa, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Xác nhận thao tác xóa trong hộp thoại cảnh báo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "empty-bucket",
      children: "Empty Bucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Empty Bucket giúp bạn xóa toàn bộ dữ liệu của bucket. Các thông tin cấu hình sẽ được giữ nguyên ví dụ như Permission, Policy,…"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Lưu ý: Thời gian xử lý sẽ phụ thuộc vào số lượng object. Hãy cân nhắc dùng tính năng Delete Bucket nếu bucket của bạn có trên 1000 object.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn action ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty Bucket"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác nhận thao tác xóa trong popup cảnh báo."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thêm-thư-mục-mới-trong-bucket",
      children: "Thêm thư mục mới trong Bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong mô hình Object Storage phi cấu trúc nói chung và FPT Object Storage nói riêng, không có khái niệm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Folder"
      }), " như chúng ta thường sử dụng. Thay vào đó, chỉ có khái niệm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object"
      }), ". Tuy nhiên FPT Portal sẽ hiển thị theo cấu trúc thư mục để người dùng dễ sử dụng. Các object cùng chung path sẽ được gom nhóm thành một folder."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ví dụ bạn có 2 object có path là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bucket_name/folder-1/object-1.txt"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bucket_name/folder-1/object-2.txt"
      }), " , FPT Portal sẽ hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object-1.txt"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "object-2.txt"
      }), " ở trong thư mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "folder-1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo một folder mới, bạn hãy thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage Management"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Di chuyển đến vị trí cần thêm thư mục và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New folder"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhập tên thư mục mới và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tìm-kiếm-bucket",
      children: "Tìm kiếm Bucket"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng chức năng tìm kiếm theo tên bucket."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập nội dung cần tìm vào ô ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Search"
      }), " và bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-su-dung-object-storage-tren-fpt-portal",
        children: " Previous Sử dụng Object Storage trên FPT Portal "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-object",
        children: " Next Object "
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