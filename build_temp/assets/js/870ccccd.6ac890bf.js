"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[75176],{

/***/ 768234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_user_access_role_management_md_870_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-user-access-role-management-md-870.json
const site_docs_managed_fpt_database_engines_new_user_access_role_management_md_870_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/user-access/role-management","title":"2. Managed – FPT Database Engines","description":"Quản lý Role","source":"@site/docs/managed-fpt-database-engines-new/user-access/role-management.md","sourceDirName":"managed-fpt-database-engines-new/user-access","slug":"/managed-fpt-database-engines-new/user-access/role-management","permalink":"/managed-fpt-database-engines-new/user-access/role-management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Role management","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=role-management","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Managed – FPT Database Engines","permalink":"/managed-fpt-database-engines-new/user-access/mysql-troubleshooting"},"next":{"title":"User group management","permalink":"/managed-fpt-database-engines-new/user-access/user-group-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/user-access/role-management.md


const frontMatter = {
	sidebar_label: 'Role management',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=role-management',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập trang Quản lý role",
  "id": "bước-1-truy-cập-trang-quản-lý-role",
  "level": 3
}, {
  "value": "Bước 2: Tạo role mới",
  "id": "bước-2-tạo-role-mới",
  "level": 3
}, {
  "value": "Bước 3: Cấu hình quyền cho role",
  "id": "bước-3-cấu-hình-quyền-cho-role",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
      children: "Quản lý Role"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Role là một thành phần cốt lõi của mô-đun IAM trên FPT Cloud Portal. Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý Role"
      }), " cho phép quản trị hệ thống định nghĩa và gán các vai trò với tập quyền truy cập (permissions) cụ thể cho người dùng khi sử dụng dịch vụ FPT Database Engine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc sử dụng role giúp tăng cường bảo mật thông qua kiểm soát truy cập chi tiết, áp dụng nguyên tắc phân quyền tối thiểu, đồng thời hỗ trợ tách biệt quyền hạn theo từng nhu cầu và mô hình vận hành."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước dưới đây cung cấp hướng dẫn chi tiết để tạo mới một Role và gán các quyền truy cập (permissions) tương ứng cho role đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-role",
      children: "Bước 1: Truy cập trang Quản lý role"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IAM"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Roles"
      }), ". Giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role Management"
      }), " sẽ hiển thị danh sách role hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một role."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-tạo-role-mới",
      children: "Bước 2: Tạo role mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Role Management"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create role"
      }), ". Màn hình tạo role mới hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(655373)/* ["default"] */ .A) + "",
        width: "1888",
        height: "862"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin cơ bản:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role name"
        }), " : Tên dùng để định danh role trong hệ thống IAM, dài tối đa 100 ký tự, bao gồm các ký tự: chữ cái, chữ số, dấu gạch dưới (_), dấu gạch ngang (-), dấu cách và dấu chấm (.). Bắt buộc nhập."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description"
        }), " : Mô tả mục đích sử dụng, phạm vi quyền hoặc nhóm người dùng được áp dụng. Trường này giúp việc quản trị và audit trở nên rõ ràng hơn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permissions"
        }), " : Danh sách các quyền được gán cho Role.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Permission 1"
            }), " : Hiển thị một quyền đã được thêm vào role. Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "See more"
            }), " để xem chi tiết quyền và chỉnh sửa cấu hình quyền."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "+ Permission"
            }), " : Nhấn nút này để thêm quyền mới vào role. Bạn có thể chọn quyền theo từng chức năng."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thao tác cấu hình cho một Permission xem chi tiết tại bước 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-cấu-hình-quyền-cho-role",
      children: "Bước 3: Cấu hình quyền cho role"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See more"
      }), " để hiển thị các thông tin cần nhập cho một permission:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(613846)/* ["default"] */ .A) + "",
        width: "1890",
        height: "856"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service Type"
        }), " : Chọn loại dịch vụ tương ứng với các quyền hoặc nghiệp vụ bạn muốn gán. Dịch vụ FPT Database Engine sử dụng 2 service type chính là ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"ManageDatabase\""
        }), " và ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"FDE\""
        }), ".\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ManageDatabase"
            }), " : Cung cấp quyền cho các hoạt động quản lý cơ sở dữ liệu tiêu chuẩn, bao gồm xem thông tin, khởi tạo, vận hành cơ sở dữ liệu và quản lý các dịch vụ add-on."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FDE"
            }), " : Cung cấp quyền cho các thao tác nhạy cảm liên quan đến cơ sở dữ liệu, chẳng hạn như xem hoặc quản lý thông tin mật khẩu của tài khoản quản trị cơ sở dữ liệu."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi bạn chọn một service type, hệ thống sẽ tự động hiển thị toàn bộ các hành động (actions) tương ứng trong mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " , đồng thời cập nhật tên permission theo service type đã chọn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), " : Xác định các hành động mà role được phép thực hiện. Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "See more"
        }), " để xem và chọn các hành động được gán cho role. Các hành động không được chọn sẽ không được cấp quyền và sẽ bị hệ thống chặn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource"
        }), " : Xác định các tài nguyên mà role được phép truy cập. Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "See more"
        }), " để xem và chọn các tài nguyên được gán cho role. Các tài nguyên không được chọn sẽ không được cấp quyền và sẽ bị hệ thống chặn. Có 2 lựa chọn:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "All"
            }), " : Cho phép truy cập tất cả các tài nguyên. Khi chọn tùy chọn này, hệ thống mặc định role có quyền truy cập toàn bộ tài nguyên."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Specific"
            }), " : Phân quyền truy cập theo từng tài nguyên cụ thể được chọn trong danh sách. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lưu ý"
            }), " : Với tùy chọn này, khi phân quyền ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "chặn xem mật khẩu tài khoản quản trị"
            }), " (Service Type là “FDE” và action “FDE:hide_admin_password”), bạn cần chọn các cơ sở dữ liệu cần chặn trong trường ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Select resource"
            }), ". Chỉ những cơ sở dữ liệu được chọn mới bị giới hạn xem mật khẩu, các cơ sở dữ liệu không được chọn sẽ cho phép xem mật khẩu."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(2080)/* ["default"] */ .A) + "",
        width: "1196",
        height: "556"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create role"
      }), " để hoàn tất quá trình tạo role."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo thành công, role mới sẽ xuất hiện trong danh sách quản lý với trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " và sẵn sàng để cấp quyền cho người dùng. Hướng dẫn cấp quyền vui lòng tham khảo tại mục ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=user-group-management",
        children: "Quản lý User Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần thiết, bạn có thể thực hiện các thao tác sau với role đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chỉnh sửa role"
          }), " : Chức năng này cho phép bạn sửa đổi tên, mô tả và quyền của role khi có thay đổi về yêu cầu truy cập hoặc chính sách bảo mật. Để sử dụng chức năng này, trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Role Management"
          }), " , chọn hành động ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit role"
          }), " tương ứng với role cần chỉnh sửa. Thực hiện thay đổi và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), " để lưu lại."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Xóa role"
          }), " : Chức năng này cho phép xoá bỏ role không còn sử dụng, giúp hệ thống quản lý quyền truy cập gọn gàng và chính xác hơn. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Role Management"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          }), " tương ứng với role cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lưu ý"
          }), " : Việc ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "xoá một role sẽ ảnh hưởng đến quyền truy cập của người dùng và nhóm người dùng đang được gán role đó"
          }), ". Sau khi role bị xoá, các quyền liên quan sẽ bị thu hồi ngay lập tức, có thể gây gián đoạn trong việc quản lý và vận hành các tài nguyên cloud và DBaaS. Hãy đảm bảo rằng role này không còn được gán cho bất kỳ User Group hoặc User nào trước khi thực hiện xoá."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./iam",
        children: " Previous Quyền truy cập dịch vụ FPT Database Engine "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./user-group-management",
        children: " Next Quản lý User Group "
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

/***/ 655373
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46051a0f8500-create-role-3829bdc1765bc08216498fd8f7617cdd.png");

/***/ },

/***/ 2080
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad74aea0a4d1-resource-specified-hide-pass-41cc037b3e5e5a84d27489d7ff742e37.webp");

/***/ },

/***/ 613846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/faeb2c18a714-see-more-permission-daee290d69b420d76e8c256c2ff5a178.png");

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