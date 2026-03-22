"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[11099],{

/***/ 265112
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_user_access_user_group_management_md_929_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-user-access-user-group-management-md-929.json
const site_docs_managed_fpt_database_engines_new_user_access_user_group_management_md_929_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/user-access/user-group-management","title":"2. Managed – FPT Database Engines","description":"Quản lý User Group","source":"@site/docs/managed-fpt-database-engines-new/user-access/user-group-management.md","sourceDirName":"managed-fpt-database-engines-new/user-access","slug":"/managed-fpt-database-engines-new/user-access/user-group-management","permalink":"/managed-fpt-database-engines-new/user-access/user-group-management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"User group management","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=user-group-management","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Role management","permalink":"/managed-fpt-database-engines-new/user-access/role-management"},"next":{"title":"Active db service","permalink":"/managed-fpt-database-engines-new/active-db-service"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/user-access/user-group-management.md


const frontMatter = {
	sidebar_label: 'User group management',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=user-group-management',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập trang Quản lý user group",
  "id": "bước-1-truy-cập-trang-quản-lý-user-group",
  "level": 3
}, {
  "value": "Bước 2: Tạo nhóm người dùng mới",
  "id": "bước-2-tạo-nhóm-người-dùng-mới",
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
      children: "Quản lý User Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý User Group"
      }), " cho phép tập hợp nhiều người dùng vào một nhóm và gán cho nhóm đó role phù hợp. Tính năng này là một phần của IAM trên FPT Cloud Portal, giúp sắp xếp người dùng theo vai trò, giảm công việc quản trị và đảm bảo các quyền truy cập được ứng dụng nhất quán trong môi trường DBaaS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo một một nhóm người dùng mới, thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-user-group",
      children: "Bước 1: Truy cập trang Quản lý user group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IAM"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User groups"
      }), ". Giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Group Management"
      }), " sẽ hiển thị danh sách nhóm người dùng hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một nhóm người dùng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-tạo-nhóm-người-dùng-mới",
      children: "Bước 2: Tạo nhóm người dùng mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Group Management"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create user group"
      }), ". Màn hình tạo nhóm người dùng mới hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(892522)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1060"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Tên dùng để định danh nhóm người dùng trong hệ thống IAM, dài tối đa 100 ký tự. Tên nên thể hiện rõ mục đích hoặc phạm vi trách nhiệm của nhóm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description"
        }), " : Mô tả thêm về nhóm người dùng, ví dụ phạm vi sử dụng hoặc dịch vụ được quản lý. Trường này giúp việc quản trị và audit trở nên rõ ràng hơn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Roles"
        }), " : Chọn một hoặc nhiều role để gán cho nhóm người dùng. Các role này xác định tập quyền được áp dụng cho toàn bộ người dùng trong nhóm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Users"
        }), " : Chọn người dùng để thêm vào nhóm. Người dùng sẽ kế thừa toàn bộ quyền của các role được gán cho nhóm. Mọi thay đổi đối với role của nhóm sẽ được áp dụng cho toàn bộ thành viên trong nhóm."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create user group"
      }), " để hoàn tất quá trình tạo nhóm người dùng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo thành công, nhóm người dùng mới sẽ xuất hiện trong danh sách quản lý với trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), ". Các user thuộc group này sẽ có thể truy cập các chức năng và nghiệp vụ tương ứng với quyền được phân theo role."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần thiết, bạn có thể thực hiện các thao tác sau với nhóm người dùng đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chỉnh sửa nhóm người dùng"
          }), " : Cho phép cập nhật thông tin nhóm hoặc thay đổi các Role đã gán cho nhóm. Để thực hiện, trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group Management"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit user group"
          }), " tương ứng với nhóm người dùng cần chỉnh sửa. Thực hiện thay đổi và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit user group"
          }), " để lưu lại."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Xóa nhóm người dùng"
          }), " : Khi một nhóm không còn cần thiết (ví dụ: thay đổi cấu trúc tổ chức), bạn có thể xóa nhóm để tránh rối quyền và đảm bảo chính sách bảo mật nhất quán. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Group Management"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          }), " tương ứng với nhóm người dùng cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cảnh báo"
          }), " : Việc ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "xóa nhóm người"
          }), " dùng sẽ ngay lập tức ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "loại bỏ toàn bộ quyền truy cập theo role đã được gán thông qua nhóm đó"
          }), ". Các người dùng thuộc nhóm sẽ mất quyền kế thừa và có thể không còn khả năng truy cập hoặc quản lý tài nguyên DBaaS cũng như các dịch vụ cloud khác. Trước khi xóa nhóm, hãy đảm bảo rằng:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nhóm không còn được sử dụng cho các tác vụ vận hành hoặc quản trị cơ sở dữ liệu."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Các người dùng trong nhóm đã được gán sang user group khác hoặc được cấp role thay thế nếu vẫn cần quyền truy cập."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Không có quy trình vận hành, automation hoặc workflow quan trọng nào của DBaaS phụ thuộc vào quyền của nhóm này."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./role-management",
        children: " Previous Quản lý Role "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./subnet",
        children: " Next Quản lý Subnet "
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

/***/ 892522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/337773506276-create-usser-group-scaled-d356e8559a43ce0a4345f28e98cf5328.png");

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