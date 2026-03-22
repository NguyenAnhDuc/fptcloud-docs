"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[59011],{

/***/ 306139
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_maintenance_window_md_6c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-maintenance-window-md-6c5.json
const site_docs_managed_fpt_database_engines_new_maintenance_window_md_6c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/maintenance-window","title":"2. Managed – FPT Database Engines","description":"Maintenance Window","source":"@site/docs/managed-fpt-database-engines-new/maintenance-window.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/maintenance-window","permalink":"/managed-fpt-database-engines-new/maintenance-window","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Maintenance window","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=maintenance-window","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Login console","permalink":"/managed-fpt-database-engines-new/login-console"},"next":{"title":"Maintenance","permalink":"/managed-fpt-database-engines-new/maintenance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/maintenance-window.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Maintenance window',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=maintenance-window',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Quy tắc hoạt động:",
  "id": "quy-tắc-hoạt-động",
  "level": 4
}, {
  "value": "Quyền cần thiết:",
  "id": "quyền-cần-thiết",
  "level": 4
}, {
  "value": "Chức năng chính:",
  "id": "chức-năng-chính",
  "level": 4
}, {
  "value": "Thao tác thực hiện:",
  "id": "thao-tác-thực-hiện",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
      children: "Maintenance Window"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Window"
      }), " cho phép khách hàng chủ động thiết lập khung thời gian bảo trì định kỳ cho cụm cơ sở dữ liệu. Trong thời gian này, FPT sẽ thực hiện các hoạt động nâng cấp, vá lỗi và tối ưu hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng giúp giảm thiểu ảnh hưởng đến hoạt động kinh doanh và nâng cao độ ổn định của dịch vụ."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "quy-tắc-hoạt-động",
      children: "Quy tắc hoạt động:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintenance Window có chu kỳ hàng tuần."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Áp dụng cho từng database cluster riêng biệt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mỗi cluster chỉ có một Maintenance Window đang hiệu lực."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling,...)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "chức-năng-chính",
      children: "Chức năng chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu hình ngày và giờ bảo trì định kỳ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hỗ trợ chỉnh sửa trong quá trình vận hành."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hiển thị các sự kiện bảo trì sắp diễn ra."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gửi thông báo trước khi bảo trì."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "thao-tác-thực-hiện",
      children: "Thao tác thực hiện:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi tạo mới cluster, người dùng có thể chọn maintenance window tại bước cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Service"
      }), " (chi tiết xem tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=create-db#contentify_2",
        children: "Khởi tạo cơ sở dữ liệu"
      }), ") và hệ thống sẽ áp dụng cấu hình ngay từ lần vận hành đầu tiên."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình sử dụng, người dùng có thể cập nhật lại khung thời gian bảo trì theo các thao tác dưới đây:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Truy cập chức năng"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), ". Trên trang Database list, chọn Cluster ID của cụm bạn muốn cấu hình maintenance window. Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintennace"
      }), " để mở màn hình quản lý cấu hình maintenance window."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(498243)/* ["default"] */ .A) + "",
        width: "1920",
        height: "912"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Cấu hình maintenance window"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintennace"
      }), " , nhấn biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), " (hình bánh răng cạnh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance Window"
      }), ") để mở của sổ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Maintenance Window"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(331416)/* ["default"] */ .A) + "",
        width: "1920",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Day of Week"
        }), " : Ngày được thực hiện bảo trì trong tuần, bao gồm các lựa chọn từ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Monday"
        }), " cho đến ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sunday"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Time"
        }), " : Thời gian bắt đầu được thực hiện bảo trì."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu thông tin cấu hình. Hệ thống sẽ áp dụng cấu hình cho các lần bảo trì tiếp theo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Bạn chỉ có thể cập nhật cài đặt lập lịch nếu database cluster của bạn chưa được lên lịch bảo trì."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3: Xem lịch bảo trì sắp tới"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các sự kiện bảo trì đã được lên lịch sẽ được hiển thị tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pending Maintenance Event"
      }), ". Thông tin chi tiết bao gồm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Event"
        }), " : Tên sự kiện bảo trì."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " : Loại bảo trì."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duration (Minute)"
        }), " : Thời gian dự kiến thực hiện bảo trì (tính bằng phút)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply At"
        }), " : Thời điểm bắt đầu thực hiện bảo trì."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nên thường xuyên theo dõi lịch bảo trì để chủ động lập kế hoạch vận hành và giảm thiểu ảnh hưởng đến dịch vụ."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hệ thống sẽ gửi thông báo qua email trước khi diễn ra hoạt động bảo trì. Hiện tại hỗ trợ hai mốc thông báo: trước 7 ngày và trước 1 ngày. Để cấu hình danh sách email nhận thông báo bảo trì, người dùng truy cập tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification"
      }), " và điều chỉnh thiết lập cho dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintenance"
      }), " (tham khảo chi tiết tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=notification",
        children: "Notification"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./vertical-scaling",
        children: " Previous Vertical Scaling "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./notification",
        children: " Next Notification "
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

/***/ 498243
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3d911f64447c-view-maintenance-e70ac2c24903cbe0d3732d8f3a3cef3c.png");

/***/ },

/***/ 331416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d95e9f425a1b-update-maintenance-wwindow-8866c13ce34ce09b3169c543e3739df0.png");

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