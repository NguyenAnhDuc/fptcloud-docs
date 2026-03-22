"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[1419],{

/***/ 217458
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_tutorials_permissions_md_6b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-tutorials-permissions-md-6b7.json
const site_docs_object_storage_tutorials_permissions_md_6b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/tutorials-permissions","title":"2. FPT Object Storage","description":"Permissions","source":"@site/docs/object-storage/tutorials-permissions.md","sourceDirName":"object-storage","slug":"/object-storage/tutorials-permissions","permalink":"/object-storage/tutorials-permissions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials Permissions","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-permissions","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Object","permalink":"/object-storage/tutorials-object"},"next":{"title":"Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal","permalink":"/object-storage/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/tutorials-permissions.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials Permissions',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-permissions',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Bucket <strong>Access Control List</strong> (Bucket ACL)",
  "id": "bucket-access-control-list-bucket-acl",
  "level": 2
}, {
  "value": "Object <strong>Access Control List</strong> (Object Permission)",
  "id": "object-access-control-list-object-permission",
  "level": 2
}, {
  "value": "Cấu hình Bucket Policy",
  "id": "cấu-hình-bucket-policy",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
      children: "Permissions"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "bucket-access-control-list-bucket-acl",
      children: ["Bucket ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Control List"
      }), " (Bucket ACL)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bucket ACL là một cơ chế quản lý quyền truy cập cho các bucket. Cho phép bạn kiểm soát ai có quyền xem, viết, hoặc quản lý bucket của bạn và các đối tượng bên trong đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ở FPT Object Storage có 2 quyền cơ bản được định nghĩa là Public và Private."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private:"
        }), " Chỉ các người dùng đã xác thực và được phân quyền mới có thể truy cập hoặc quản lý bucket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public:"
        }), " Mọi người đều có quyền truy cập read-only vào bucket, kể cả các Anonymous User trên Internet. Chỉ cần bucket URL là họ sẽ thấy toàn bộ danh sách object trong bucket. Tuy nhiên, Bucket ACL không có hiệu lực đối với Object. Để làm cho các object trong bucket trở thành công khai, bạn cần sử dụng tính năng Bucket Policy hoặc Object ACL."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để cấu hình Bucket ACL, bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của Bucket cần cấu hình, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "object-access-control-list-object-permission",
      children: ["Object ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Control List"
      }), " (Object Permission)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Permissions"
      }), " xác định quyền mà user khác có thể thực hiện đối với object. Để điều chỉnh quyền cho từng object, bạn có thể sử dụng tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Object Permissions"
      }), " trên FPT Unify Portal, dựa trên cơ chế ACL. Có hai nhóm quyền chính:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private:"
        }), " Hạn chế quyền truy cập cho các Anonymous User. Chỉ những người dùng đã xác thực và được phân quyền mới có thể xem đối tượng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public:"
        }), " Cung cấp quyền đọc (read-only) cho mọi người, bao gồm cả các anonymous user, thông qua Object URL."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lưu ý rằng Object Permissions còn bị ảnh hưởng bởi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket Policy"
      }), ". Bucket Policy có hiệu lực cao hơn Object ACL. Hãy cẩn thận khi sử dụng đồng thời cả 2 tầng phân quyền này."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu Bucket Policy quy định rằng tất cả các object là công khai, thì tất cả các object sẽ có thể được truy cập công khai (read-only) bất kể quyền ACL của từng object là gì."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Permissions"
      }), " trong FPT Object Storage, hãy thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , chọn Bucket chứa file mà bạn cần thay đổi quyền."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Di chuyển đến vị trí của file trong bucket. Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Permission"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại ô ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Read permission"
      }), " , chọn chế độ hiển thị mà bạn muốn (Public hoặc Private), sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), " để lưu các thay đổi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-bucket-policy",
      children: "Cấu hình Bucket Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bucket Policy là một cơ chế quản lý quyền truy cập trên S3 cho phép bạn xác định các quy tắc chi tiết về việc ai có thể truy cập và thực hiện các hành động trên các đối tượng trong bucket. Bạn có thể tạo các quy tắc để cho phép hoặc từ chối quyền truy cập dựa trên nhiều yếu tố, bao gồm địa chỉ IP, thời gian, hoặc loại hành động (như GET, PUT, DELETE)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bucket Policy rất hữu ích cho việc chia sẻ bucket với các tổ chức khác hoặc bảo mật dữ liệu. Bạn có thể cấu hình chính sách để cho phép truy cập từ các dịch vụ khác hoặc các user/subuser cụ thể. Nó cung cấp công cụ để người dùng set các quyền cho subuser và các user khác."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bucket Policy được viết dưới dạng JSON theo chuẩn AWS. Bạn có thể sử dụng tool để gen policy của AWS tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://awspolicygen.s3.amazonaws.com/policygen.html",
        children: "đây"
      }), " và sử dụng cho FPT Object Storage:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dưới đây là một ví dụ về bucket policy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"AllowPublicRead\",\n      \"Effect\": \"Allow\",\n      \"Principal\": \"*\",\n      \"Action\": [\"s3:GetObject\"],\n      \"Resource\": \"arn:aws:s3:::example-bucket/*\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong ví dụ trên, policy cho phép tất cả các người dùng (", (0,jsx_runtime.jsx)(_components.em, {
        children: "Principal: \""
      }), " \"", (0,jsx_runtime.jsx)(_components.em, {
        children: ") có quyền đọc ("
      }), " Action: s3:GetObject ", (0,jsx_runtime.jsx)(_components.em, {
        children: ") các object ("
      }), " Resource*) trong bucket có tên \"example-bucket\". Điều này có nghĩa là bucket example-bucket sẽ ở chế độ công khai và tất cả mọi người đều có quyền get object trong bucket này."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bucket Policy là một công cụ mạnh mẽ để quản lý quyền truy cập vào dữ liệu trong bucket. Tuy nhiên, cần cẩn trọng khi cấu hình bucket policy để đảm bảo rằng chỉ có những người dùng được ủy quyền mới có thể truy cập vào dữ liệu trong bucket."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số lưu ý quan trọng:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bucket Policy có hiệu lực cao hơn Object ACL. Bạn nên cẩn thận khi sử dụng đồng thời cả 2 tầng phân quyền này."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bucket policy chỉ có hiệu lực ở bucket mà nó được khai báo, không thể cấu hình xuyên bucket. Ví dụ bạn có bucket-1 và bucket-2, bạn không thể khai báo rule cho bucket-2 tại Bucket Policy của bucket-1 và ngược lại."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để khai báo Bucket Policy cho Bucket, bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của Bucket cần cấu hình, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nếu bạn đã có sẵn policy ở dạng JSON và có kinh nghiệm sử dụng bucket policy, hãy chọn chế độ JSON Editor, ngược lại hãy dùng Visual Editor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sau khi khai báo đầy đủ thông tin, bấm Create để tạo mới hoặc Update để cập nhật."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-object",
        children: " Previous Object "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-bucket-config",
        children: " Next Bucket Config "
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