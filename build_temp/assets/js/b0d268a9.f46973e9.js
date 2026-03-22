"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[88331],{

/***/ 349441
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_parameter_md_b0d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-parameter-md-b0d.json
const site_docs_managed_fpt_database_engines_new_management_parameter_md_b0d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/parameter","title":"2. Managed – FPT Database Engines","description":"Quản lý Parameter","source":"@site/docs/managed-fpt-database-engines-new/management/parameter.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/parameter","permalink":"/managed-fpt-database-engines-new/management/parameter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Parameter","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=parameter","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Network connectivity","permalink":"/managed-fpt-database-engines-new/management/network-connectivity"},"next":{"title":"Resource","permalink":"/managed-fpt-database-engines-new/management/resource"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/parameter.md


const frontMatter = {
	sidebar_label: 'Parameter',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=parameter',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Tổng quan:",
  "id": "tổng-quan",
  "level": 3
}, {
  "value": "Quyền cần thiết:",
  "id": "quyền-cần-thiết",
  "level": 3
}, {
  "value": "Hướng dẫn cập nhật:",
  "id": "hướng-dẫn-cập-nhật",
  "level": 3
}, {
  "value": "Bước 1: Truy cập trang Quản lý parameter",
  "id": "bước-1-truy-cập-trang-quản-lý-parameter",
  "level": 4
}, {
  "value": "Bước 2: Chọn loại tham số",
  "id": "bước-2-chọn-loại-tham-số",
  "level": 4
}, {
  "value": "Bước 3: Điều chỉnh giá trị cho tham số",
  "id": "bước-3-điều-chỉnh-giá-trị-cho-tham-số",
  "level": 4
}, {
  "value": "Best Practices:",
  "id": "best-practices",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Parameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tổng-quan",
      children: "Tổng quan:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong hệ quản trị cơ sở dữ liệu (DBMS), parameter (tham số) là các giá trị cấu hình giúp điều chỉnh và kiểm soát các đặc tính và hành vi của hệ thống trong quá trình vận hành. Các tham số này có thể ảnh hưởng đến hiệu suất, bộ nhớ, thời gian chờ, các cơ chế tối ưu hóa và các yếu tố khác của hệ cơ sở dữ liệu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi tham số có thể có các giá trị nhất định và có thể được thay đổi tùy thuộc vào nhu cầu của người quản trị cơ sở dữ liệu để tối ưu hóa hoạt động của hệ thống. Các tham số này có thể thuộc loại dynamic (động) hoặc static (tĩnh), mỗi loại có cách thức áp dụng khác nhau."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic Parameter (Tham số động)"
        }), " : Những tham số này có thể thay đổi trong quá trình hoạt động của cơ sở dữ liệu mà không cần khởi động lại hệ thống."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static Parameter (Tham số tĩnh)"
        }), " : Những tham số này yêu cầu khởi động lại cơ sở dữ liệu để thay đổi có hiệu lực."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc hiểu và quản lý các tham số đúng cách là rất quan trọng để đảm bảo hệ thống hoạt động ổn định, hiệu quả và đáp ứng đúng yêu cầu của người sử dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong FPT Database Engine, chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý Parameter"
      }), " cho phép người dùng xem và cập nhật các tham số cấu hình của một cụm cơ sở dữ liệu đang chạy trực tiếp trên FPT Cloud Portal. Khi cập nhật tham số động (dynamic), giá trị mới sẽ được áp dụng ngay sau khi thao tác hoàn tất mà không làm gián đoạn dịch vụ. Khi cập nhật tham số tĩnh (static), hệ thống sẽ tự động khởi động lại cơ sở dữ liệu để áp dụng giá trị mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quyền-cần-thiết",
      children: "Quyền cần thiết:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling, ...)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hướng-dẫn-cập-nhật",
      children: "Hướng dẫn cập nhật:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước dưới đây hướng dẫn cách cập nhật giá trị của một parameter cho cụm cơ sở dữ liệu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-trang-quản-lý-parameter",
      children: "Bước 1: Truy cập trang Quản lý parameter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập FPT Cloud Console. Mở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database list"
      }), " > chọn ID của cụm cơ sở dữ liệu để mở trang chi tiết > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure Params"
      }), " để truy cập trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý Parameter"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(821409)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1369"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-chọn-loại-tham-số",
      children: "Bước 2: Chọn loại tham số"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn loại parameter bạn muốn cập nhật:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic Params"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static Params"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-3-điều-chỉnh-giá-trị-cho-tham-số",
      children: "Bước 3: Điều chỉnh giá trị cho tham số"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit parameter"
      }), " (biểu tượng bút chì) tương ứng với tham số cần chỉnh sửa, hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Configure Params"
      }), " hiển thị đầy đủ thông tin của tham số được chọn và cho phép người dùng cập nhật giá trị trong phạm vi cho phép."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(85474)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1422"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kiểm tra thông tin parameter (kiểu dữ liệu, giá trị tối thiểu và tối đa), sau đó cập nhật giá trị trong trường “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value"
      }), " ” trong phạm vi cho phép và nhấn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), " ” để áp dụng thay đổi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Điều chỉnh tham số theo từng bước nhỏ và theo dõi hiệu năng."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ưu tiên tham số dynamic để tránh downtime."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lên lịch bảo trì khi thay đổi tham số static."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ghi nhận thay đổi để phục vụ audit và vận hành."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./resource",
        children: " Previous Quản lý tài nguyên cụm cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./kafka-user",
        children: " Next Apache Kafka - Quản lý Kafka ACL "
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

/***/ 85474
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7b919278227b-update-param-scaled-266fa76faf83e4d0d6641029f1598c90.png");

/***/ },

/***/ 821409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f9a798c84b4f-view-param-scaled-8554c71c708a602f79b419103c5272e0.png");

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