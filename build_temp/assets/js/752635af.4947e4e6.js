"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[99066],{

/***/ 436969
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_initial_tutorials_object_md_752_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-initial-tutorials-object-md-752.json
const site_docs_object_storage_initial_tutorials_object_md_752_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/initial/tutorials-object","title":"2. FPT Object Storage","description":"Object","source":"@site/docs/object-storage/initial/tutorials-object.md","sourceDirName":"object-storage/initial","slug":"/object-storage/initial/tutorials-object","permalink":"/object-storage/initial/tutorials-object","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tutorials Object","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-object","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Bucket","permalink":"/object-storage/initial/tutorials-bucket"},"next":{"title":"Tutorials Quan Ly Access Key Cua Object Storage Tren Fpt Portal","permalink":"/object-storage/initial/tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/initial/tutorials-object.md


const frontMatter = {
	sidebar_label: 'Tutorials Object',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-object',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Upload Object mới vào Bucket",
  "id": "upload-object-mới-vào-bucket",
  "level": 2
}, {
  "value": "Download Object",
  "id": "download-object",
  "level": 2
}, {
  "value": "Generate Presigned URL",
  "id": "generate-presigned-url",
  "level": 2
}, {
  "value": "Copy Object",
  "id": "copy-object",
  "level": 3
}, {
  "value": "Move Object",
  "id": "move-object",
  "level": 3
}, {
  "value": "Copy URL của Object",
  "id": "copy-url-của-object",
  "level": 3
}, {
  "value": "Delete Object",
  "id": "delete-object",
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
      children: "Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi object trong FPT Object Storage đại diện cho một file dữ liệu. Hệ thống không áp đặt bất kỳ giới hạn nào về định dạng file mà bạn có thể upload. Bạn có thể lưu trữ mọi loại file từ văn bản, hình ảnh, âm thanh, video đến các file định dạng riêng của ứng dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Metadata và tags:"
        }), " Mỗi object có thể kèm theo metadata và tags để mô tả thêm về nội dung hoặc mục đích sử dụng của object, giúp bạn dễ dàng quản lý và tìm kiếm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Khả năng kiểm soát quyền truy cập:"
        }), " Quyền truy cập đối với từng object có thể được kiểm soát thông qua ACL (Access Control List) hoặc bucket policy, cho phép bạn xác định ai có quyền xem hoặc thao tác với object."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " FPT Object Storage hỗ trợ lưu nhiều phiên bản cho các object, cho phép bạn giữ lại các phiên bản trước đó của một file và phục hồi chúng khi cần thiết."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage Classes:"
        }), " Bạn có thể gán các lớp lưu trữ khác nhau cho mỗi object, từ Standard cho dữ liệu truy cập thường xuyên đến Glacier cho dữ liệu cần lưu trữ lâu dài với chi phí thấp."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upload-object-mới-vào-bucket",
      children: "Upload Object mới vào Bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Unify Portal"
      }), " hỗ trợ upload tối đa 100GB cho mỗi lần upload. Nếu cần upload file lớn hơn, hãy sử dụng các phương thức khác như S3 Client Tool, S3 SDK/CLI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu file trùng tên với file đã tồn tại, bạn sẽ nhận cảnh báo ghi đè. Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning"
        }), " chưa bật, file sẽ ghi đè lên file cũ. Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning"
        }), " đã bật, hệ thống sẽ tạo một phiên bản mới."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , di chuyển đến vị trí cần thêm file và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload object"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn file từ thiết bị và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "download-object",
      children: "Download Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để download một object, di chuyển đến vị trí của file cần tải xuống trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " và bấm vào tên của file. Hệ thống sẽ tự động tải file về thiết bị."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generate-presigned-url",
      children: "Generate Presigned URL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Presigned URL là một liên kết truy cập tạm thời, giúp người dùng chia sẻ quyền truy cập vào một object cụ thể mà không cần thay đổi các thiết lập quyền truy cập của bucket. Liên kết này có thời hạn sử dụng cụ thể, sau thời gian này, nó sẽ tự động hết hạn và không thể truy cập được nữa. Điều này rất hữu ích khi bạn muốn chia sẻ tài nguyên với người khác mà không muốn điều chỉnh các quyền truy cập cho toàn bộ bucket hoặc object."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , di chuyển đến vị trí của file cần tạo Presigned URL."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của object, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Presigned URL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn thời gian hết hạn cho URL (có thể là vài phút đến vài ngày). Sau đó, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " URL sẽ được hiển thị. Bạn có thể sao chép và chia sẻ URL này. Sau khi thời gian hết hạn kết thúc, URL sẽ không còn hiệu lực."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copy-object",
      children: "Copy Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Copy object cho phép bạn sao chép dữ liệu trong FPT Object Storage mà không làm thay đổi hoặc mất dữ liệu gốc."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , di chuyển đến vị trí của file cần copy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của object, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn đích đến cho file được copy, bao gồm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Folder"
      }), " mới nếu cần. Sau đó, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để hoàn thành thao tác."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "move-object",
      children: "Move Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Là quá trình di chuyển một object từ một vị trí này sang vị trí khác trong S3. Quá trình này bao gồm việc sao chép object tới vị trí mới và sau đó xóa object khỏi vị trí ban đầu. Sau khi di chuyển hoàn tất, object sẽ không còn tồn tại ở vị trí cũ nữa. Điều này khác với quá trình sao chép (copy), trong đó object gốc vẫn được giữ nguyên ở vị trí ban đầu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , di chuyển đến vị trí của file cần di chuyển."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của object, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Move"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn đích đến cho file di chuyển, bao gồm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Folder"
      }), " mới nếu cần. Sau đó, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để hoàn thành thao tác."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copy-url-của-object",
      children: "Copy URL của Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể lấy URL của từng object trong trường hợp cần share file hoặc gắn link vào website khác. Tuy nhiên để GET được object này thì object hoặc bucket chứa nó phải ở chế độ Public."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , di chuyển đến vị trí file, ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy URL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-object",
      children: "Delete Object"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " không được bật, khi bạn xóa một object thì object đó sẽ bị xóa vĩnh viễn và không thể phục hồi. Tuy nhiên, nếu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " được bật, thay vì xóa hoàn toàn, hệ thống sẽ tạo ra một \"delete marker\". Điều này không thực sự xóa object mà chỉ đánh dấu nó là đã bị xóa. Các phiên bản trước đó của object vẫn tồn tại và có thể được phục hồi nếu cần."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thời gian xử lý việc xóa object sẽ phụ thuộc vào dung lượng của object. Khi xóa object qua portal, phương thức này chỉ phù hợp cho các file có dung lượng dưới 50GB. Nếu dung lượng file vượt quá giới hạn này, có thể xảy ra lỗi do vượt quá thời gian timeout của trình duyệt."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , di chuyển đến vị trí file cần xóa, ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Xác nhận thao tác xóa trong hộp thoại cảnh báo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-bucket",
        children: " Previous Bucket "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-permissions",
        children: " Next Permissions "
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