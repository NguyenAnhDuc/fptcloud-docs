"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[34780],{

/***/ 460860
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_upgrade_version_md_fc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-upgrade-version-md-fc8.json
const site_docs_managed_fpt_database_engines_new_management_upgrade_version_md_fc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/upgrade-version","title":"2. Managed – FPT Database Engines","description":"Nâng cấp phiên bản cho cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/management/upgrade-version.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/upgrade-version","permalink":"/managed-fpt-database-engines-new/management/upgrade-version","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Upgrade version","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=upgrade-version","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Subnet","permalink":"/managed-fpt-database-engines-new/management/subnet"},"next":{"title":"| 17.7 | 08/2025 | 25/11/2025 | -- | --","permalink":"/managed-fpt-database-engines-new/management/version-list"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/upgrade-version.md


const frontMatter = {
	sidebar_label: 'Upgrade version',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=upgrade-version',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Phạm vi &amp; Giới hạn",
  "id": "phạm-vi--giới-hạn",
  "level": 3
}, {
  "value": "Điều kiện tiên quyết",
  "id": "điều-kiện-tiên-quyết",
  "level": 3
}, {
  "value": "Hướng dẫn chi tiết",
  "id": "hướng-dẫn-chi-tiết",
  "level": 3
}, {
  "value": "Bước 1: Truy cập trang Xem chi tiết cơ sở dữ liệu",
  "id": "bước-1-truy-cập-trang-xem-chi-tiết-cơ-sở-dữ-liệu",
  "level": 4
}, {
  "value": "Bước 2: Thực hiện ugrade phiên bản",
  "id": "bước-2-thực-hiện-ugrade-phiên-bản",
  "level": 4
}, {
  "value": "Lưu ý quan trọng",
  "id": "lưu-ý-quan-trọng",
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
      children: "Nâng cấp phiên bản cho cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nâng cấp phiên bản cho cơ sở dữ liệu"
      }), " trong FPT Database Engine ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hiện cho phép"
      }), " người dùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nâng cấp cơ sở dữ liệu thuộc loại MariaDB từ phiên bản hiện tại lên MariaDB 10.9"
      }), ". Việc nâng cấp giúp bạn tận dụng các cải tiến về hiệu năng, bảo mật và tính năng mới của phiên bản cao hơn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phạm-vi--giới-hạn",
      children: "Phạm vi & Giới hạn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chỉ áp dụng cho MariaDB. Các database không phải MariaDB sẽ không hiển thị chức năng này."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chỉ hỗ trợ upgrade lên MariaDB 10.9."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Không hỗ trợ downgrade hoặc upgrade sang phiên bản khác."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "điều-kiện-tiên-quyết",
      children: "Điều kiện tiên quyết"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đảm bảo bạn có quyền IAM để quản lý và cập nhật cluster."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ngắt kết nối tất cả các ứng dụng đang kết nối với cơ sở dữ liệu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thực hiện full backup trước khi upgrade để phục hồi khi cần."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra ứng dụng tương thích với phiên bản mục tiêu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hướng-dẫn-chi-tiết",
      children: "Hướng dẫn chi tiết"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-trang-xem-chi-tiết-cơ-sở-dữ-liệu",
      children: "Bước 1: Truy cập trang Xem chi tiết cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập vào FPT Cloud Portal và đi tới trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database List"
      }), ". Chọn cụm MariaDB bạn muốn cập nhật. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      }), " của cluster, bạn sẽ thấy phiên bản hiện tại và icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upgrade"
      }), " ở bên cạnh."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(969522)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1373"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-thực-hiện-ugrade-phiên-bản",
      children: "Bước 2: Thực hiện ugrade phiên bản"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      }), " , tìm và nhấp vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upgrade"
      }), " bên cạnh thông tin phiên bản. Một hộp thoại sẽ mở ra hiển thị phiên bản hiện tại và phiên bản mục tiêu có thể cập nhật."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(473883)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn version cần nâng cấp và nhập từ khóa xác nhận vào trường nhập liệu. Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upgrade"
      }), " để bắt đầu quá trình nâng cấp."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong quá trình thực hiện, trạng thái của database cluster sẽ chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Updating”"
      }), ". Không cố gắng kết nối hoặc thay đổi khi cập nhật đang diễn ra. Cụm sẽ tự động khởi động lại trong quá trình cập nhật."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi hoàn tất upgrade, trạng thái sẽ trở về ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Running”"
      }), " và cơ sở dữ liệu đã được nâng cấp lên phiên bản mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lưu-ý-quan-trọng",
      children: "Lưu ý quan trọng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Không thể hoàn tác"
        }), " : Việc cập nhật phiên bản không thể quay lại; hãy đảm bảo bản sao lưu hoàn chỉnh."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ngắt kết nối"
        }), " : Tất cả kết nối ứng dụng phải được dừng trước khi nâng cấp."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ảnh hưởng dịch vụ:"
        }), " Cluster sẽ khởi động lại, gây gián đoạn tạm thời."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu cập nhật thất bại, sử dụng bản sao lưu để phục hồi trạng thái trước đó."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./db-operation",
        children: " Previous Vận hành cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-restore",
        children: " Next Backup & Restore "
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

/***/ 969522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4bc6cce270fa-view-upgrade-action-scaled-e0a28c2f333ad68abc643dfff9a5055c.png");

/***/ },

/***/ 473883
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e7d5cfb1398-upgrade-version-mariadb-scaled-d0c8ccf041e22f38458abb130da79598.png");

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