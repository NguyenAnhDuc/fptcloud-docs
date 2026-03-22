"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74602],{

/***/ 64030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_migrate_bucket_data_md_c7b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-migrate-bucket-data-md-c7b.json
const site_docs_object_storage_migrate_bucket_data_md_c7b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/migrate-bucket-data","title":"2. FPT Object Storage","description":"Migrate bucket data","source":"@site/docs/object-storage/migrate-bucket-data.md","sourceDirName":"object-storage","slug":"/object-storage/migrate-bucket-data","permalink":"/object-storage/migrate-bucket-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Migrate Bucket Data","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=migrate-bucket-data","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial Setup","permalink":"/object-storage/initial-setup"},"next":{"title":"Mount Bucket Thanh O Dia Tren May Local","permalink":"/object-storage/mount-bucket-thanh-o-dia-tren-may-local"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/migrate-bucket-data.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Migrate Bucket Data',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=migrate-bucket-data',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migrate bucket data"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FPT Object Storage được phát triển theo chuẩn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tương thích với AWS S3"
      }), " , cho phép người dùng dễ dàng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chuyển dữ liệu"
      }), " từ bất kỳ nhà cung cấp Object Storage nào sang hệ thống của FPT một cách nguyên vẹn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migrate Bucket Data"
      }), " được thiết kế để đơn giản hóa quy trình chuyển dữ liệu. Người dùng chỉ cần khai báo các thông tin cần thiết, hệ thống sẽ tự động thực hiện phần còn lại."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi chuyển dữ liệu, bạn cần đọc kỹ một số lưu ý sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Thu thập thông tin xác thực từ nhà cung cấp S3:"
      }), " Trước khi bắt đầu, đảm bảo bạn đã thu thập đủ thông tin xác thực từ nhà cung cấp S3 nơi chứa Source Bucket, bao gồm Endpoint và Access Key."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Liên hệ với nhà cung cấp S3 để tối ưu băng thông và QoS:"
      }), " Do quá trình chuyển dữ liệu sẽ diễn ra qua Internet, vì vậy tốc độ chuyển có thể sẽ phụ thuộc vào băng thông của S3 Provider chứa Source Bucket. Bạn cần liên hệ với S3 Provider đấy và yêu cầu tăng băng thông + QoS của bucket để quá trình thực hiện nhanh hơn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Hạn chế tác động vào bucket và object trong quá trình chuyển dữ liệu:"
      }), " Tính năng Migrate bucket data sẽ capture lại danh sách object trong bucket khi tạo job và sẽ chỉ chuyển theo danh sách này. Vì vậy, trong quá trình chuyển dữ liệu bạn nên hạn chế tác động vào các object trong bucket."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu thêm object sau khi tạo job => Object đấy sẽ không được chuyển."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu xóa object sau khi tạo job => Job vẫn sẽ chạy và bỏ qua object bị xóa, nhưng job sẽ ở trạng thái error."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Quản lý thông tin Access Key một cách an toàn:"
      }), " Thông tin Access Key sẽ được lưu tại máy chủ của FPT Cloud trong quá trình job chạy và được xóa khỏi hệ thống ngay khi job hoàn thành. Tuy nhiên để đảm bảo bảo mật, bạn chỉ nên tạo các Access key có quyền giới hạn và deactivate ngay sau khi job hoàn thành."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migrate Bucket"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Migrate Job"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Khai báo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source Config"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider:"
        }), " Chọn nhà cung cấp Object Storage, tùy chọn S3 Compatible sẽ hoạt động với hầu hết các provider trên thị trường hiện tại."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Endpoint:"
        }), " Địa chỉ endpoint của Source bucket"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Region:"
        }), " Region của Source bucket"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key/Secret Key:"
        }), " Cặp Access Key."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source Bucket"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destination Bucket"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn region trên FPT Object Storage và bucket chứa dữ liệu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Confirm thông tin và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hệ thống sẽ tự động bắt đầu quá trình chuyển dữ liệu về. Trong suốt quá trình này, bạn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "không được xoá Access Key đã khai báo"
      }), " , tránh làm gián đoạn hoặc gây lỗi job."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./sdk-api-reference",
        children: " Previous SDK API Reference "
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