"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15152],{

/***/ 513201
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_subnet_md_b06_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-subnet-md-b06.json
const site_docs_managed_fpt_database_engines_new_management_subnet_md_b06_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/subnet","title":"2. Managed – FPT Database Engines","description":"Quản lý Subnet","source":"@site/docs/managed-fpt-database-engines-new/management/subnet.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/subnet","permalink":"/managed-fpt-database-engines-new/management/subnet","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Subnet","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=subnet","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Resource","permalink":"/managed-fpt-database-engines-new/management/resource"},"next":{"title":"Upgrade version","permalink":"/managed-fpt-database-engines-new/management/upgrade-version"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/subnet.md


const frontMatter = {
	sidebar_label: 'Subnet',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=subnet',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập trang Quản lý subnet",
  "id": "bước-1-truy-cập-trang-quản-lý-subnet",
  "level": 3
}, {
  "value": "Bước 2: Tạo subnet mới",
  "id": "bước-2-tạo-subnet-mới",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
      children: "Quản lý Subnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subnet là một dải địa chỉ IP được chia nhỏ từ một VPC (Virtual Private Cloud – Mạng riêng ảo). Trong môi trường cloud, subnet dùng để phân vùng địa chỉ IP và kiểm soát lưu lượng mạng trong hệ thống, đồng thời là nền tảng cho định tuyến, bảo mật và cung cấp dịch vụ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đối với DBaaS, Subnet đóng vai trò quan trọng trong việc:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Định vị mạng cho database instances và các thành phần liên quan (ví dụ Floating IP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm soát truy cập mạng nội bộ và khai báo firewall/Security Groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đảm bảo routing và cách ly mạng phù hợp với yêu cầu bảo mật"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subnet giúp người dùng xác định phạm vi địa chỉ IP, và đảm bảo traffic giữa ứng dụng và database được thực hiện trong không gian mạng được kiểm soát."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc quản lý subnet là nhiệm vụ nền tảng để triển khai DBaaS. Hướng dẫn này giúp bạn tạo, xác minh và quản lý subnet qua FPT Console Portal, đảm bảo tài nguyên mạng ổn định cho khối lượng công việc cơ sở dữ liệu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-subnet",
      children: "Bước 1: Truy cập trang Quản lý subnet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets"
      }), ". Giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets Management"
      }), " sẽ hiển thị danh sách subnets hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một subnet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-tạo-subnet-mới",
      children: "Bước 2: Tạo subnet mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets Management"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create subnet"
      }), ". Màn hình tạo subnet mới hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(991030)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1371"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình các thông tin sau theo kế hoạch mạng của bạn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Tên định danh của subnet dùng để nhận diện subnet khi cấu hình tài nguyên mạng cho dịch vụ. Tên này có tối đa 50 ký tự, bao gồm: chữ cái, số và dấu \"-\". Tên subnet không được trùng với subnet khác trong cùng VPC (khuyến nghị)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " : Loại subnet dùng để xác định hành vi định tuyến (routing) của subnet. Mặc định là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolated"
        }), " - subnet không route ra Internet mà chỉ sử dụng cho mạng nội bộ (private network). Phù hợp cho database production, backend services và internal workloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network address (CIDR)"
        }), " : Nhập dải địa chỉ mạng IP của subnet, theo chuẩn CIDR notation (ví dụ: 192.168.10.0/24). Hệ thống sẽ kiểm tra tính khả dụng và hiển thị tổng số IP khả dụng. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Lưu ý"
        }), " : CIDR phải là dải hợp lệ và không trùng lặp với các subnet khác trong VPC."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gateway IP"
        }), " : Địa chỉ IP gateway của subnet, dùng làm điểm định tuyến mặc định cho các tài nguyên trong subnet. Thường là địa chỉ IP đầu tiên hoặc IP được quy ước theo kiến trúc mạng nội bộ. Gateway IP phải nằm trong dải CIDR và không trùng với Static IP Pool (nếu có)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static IP Pool (Optional)"
        }), " : Dải IP tĩnh được dành riêng để cấp phát cho các tài nguyên cần IP cố định. Chỉ nhập khi có nhu cầu sử dụng. Dải IP này phải nằm trong phạm vi CIDR đã chỉ định và không bao gồm Gateway IP."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary DNS"
        }), " : Địa chỉ DNS server chính được gán cho các tài nguyên trong subnet, dùng để phân giải tên miền nội bộ hoặc Internet (tuỳ kiến trúc mạng). Có thể sử dụng DNS nội bộ hoặc DNS public theo chính sách của hệ thống."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secondary DNS (Optional)"
        }), " : DNS server dự phòng, được sử dụng khi Primary DNS không khả dụng. Khuyến nghị cấu hình để tăng độ tin cậy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add tag (Optional)"
        }), " : Gán tags (key-value) cho subnet để phân loại tài nguyên, quản lý chi phí hoặc hỗ trợ vận hành và auditing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create subnet"
      }), " để hoàn tất quá trình tạo subnet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo thành công, subnet mới sẽ xuất hiện trong danh sách quản lý và sẵn sàng để sử dụng khi khởi tạo cơ sở dữ liệu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần thiết, bạn có thể thực hiện các thao tác sau với subnet đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thay đổi tên của subnet"
          }), " : Chức năng này cho phép sửa đổi tên của subnet. Để thực hiện, trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet Management"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rename"
          }), " tương ứng với subnet cần chỉnh sửa. Thực hiện thay đổi và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Rename subnet"
          }), " để lưu lại."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Xóa subnet"
          }), " : Chức năng này cho phép xoá bỏ subnet không còn sử dụng, giúp hệ thống quản lý subnet gọn gàng và chính xác hơn. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet Management"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          }), " tương ứng với subnet cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lưu ý"
          }), " : Việc thay ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "đổi tên hay xóa một subnet đang sử dụng có thể gây gián đoạn mạng"
          }), " cho DBaaS và các dịch vụ khác. Hãy luôn đảm bảo rằng bạn đã giải phóng các tài nguyên phụ thuộc trước khi thực hiện các thao tác này."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./user-group-management",
        children: " Previous Quản lý User Group "
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

/***/ 991030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5bd6cd39988d-Create-subnet-scaled-0bf2e60f2774f6b9ffd2f1496df3fc13.png");

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