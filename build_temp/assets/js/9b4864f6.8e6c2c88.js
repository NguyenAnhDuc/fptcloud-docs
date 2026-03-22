"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[16560],{

/***/ 566812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_iam_index_md_9b4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-iam-index-md-9b4.json
const site_docs_iam_index_md_9b4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"iam/index","title":"IAM","description":"IAM","source":"@site/docs/iam/index.md","sourceDirName":"iam","slug":"/iam/","permalink":"/iam/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"IAM","title":"IAM","source":"https://fptcloud.com/documents/iam/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"IAM User - Overview","permalink":"/iam/iam-user-overview"},"next":{"title":"IAM","permalink":"/iam/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/iam/index.md


const frontMatter = {
	sidebar_label: 'IAM',
	title: 'IAM',
	source: 'https://fptcloud.com/documents/iam/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'IAM';

const assets = {

};



const toc = [{
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn chi tiết (Tutorials)",
  "id": "hướng-dẫn-chi-tiết-tutorials",
  "level": 2
}, {
  "value": "Các câu hỏi thường gặp (FAQs)",
  "id": "các-câu-hỏi-thường-gặp-faqs",
  "level": 2
}, {
  "value": "Một số gợi ý mẫu (Samples)",
  "id": "một-số-gợi-ý-mẫu-samples",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "iam",
        children: "IAM"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Identity & Access Management (FPT IAM) là một tính năng cho phép các Tenant owner chia sẻ quyền truy cập tài nguyên trên FPT Cloud của mình cho người dùng khác với các quyền hạn khác nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số khái niệm cơ bản trong FPT IAM:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Role: Vai trò của người dùng trong tổ chức, quy định các quyền mà user có khả năng thực hiện."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*Hiện tại FPT IAM đang hỗ trợ 2 basic Role cơ bản là Super Admin và Readonly. Nếu 2 Role này chưa đáp ứng được nhu cầu bạn có thể tự tạo các Custom Role với bộ quyền tùy chỉnh."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*Mỗi role có danh sách permission."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Permission: xác định user có quyền thực hiện tính năng gì trên tài nguyên nào. Mỗi permission đều thuộc 1 role."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "User group: Nhóm người dùng có cùng vai trò (Theo tenant hoặc VPC)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IAM users: Người dùng được thêm vào tenant, có quyền tác động lên các tài nguyên trong Tenant theo role được gán."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tenant owner có toàn quyền quản lý tất cả tài nguyên của VPC, bao gồm cả tính năng phân quyền. Tài khoản này sẽ được mặc định gán role ORG Admin."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để sử dụng IAM, đầu tiên Tenant Owner cần thực hiện việc tạo Role và permission cho role (Instance manager, Data analyst,…) và tạo các User group được gán Role tương ứng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với User group đã tạo, Tenant owner có thể chọn, tùy chỉnh Role và Permission cho phù hợp."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phân quyền bằng cách mời thêm IAM users vào User group thông qua email."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IAM users sau khi nhận được lời mời có thể thực hiện đăng ký/đăng nhập hoặc đăng nhập thông qua SSO của tổ chức vào FPT Portal theo hướng dẫn và sử dụng tài nguyên trong VPC/Tenant được mời."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này sẽ cung cấp cho bạn thông tin cần biết trước khi bắt đầu sử dụng FPT IAM, cách khởi tạo và quản lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./role/role-management",
          children: " Quản lý Role "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./role/role-overview",
              children: " Role Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./role/xem-danh-sach-role",
              children: " Xem danh sách role "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./role/khoi-tao-role-va-phan-quyen-cho-role",
              children: " Khởi tạo role và phân quyền cho role "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./role/xem-chi-tiet-role",
              children: " Xem chi tiết Role "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./role/chinh-sua-role-va-permission",
              children: " Chỉnh sửa role và permission "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./role/xoa-role",
              children: " Xóa role "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./user-group/user-group-management",
          children: " Quản lý User Group "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./user-group/user-group-overview",
              children: " User Group - Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./user-group/khoi-tao-user-group-moi",
              children: " Khởi tạo User Group mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./user-group/xem-danh-sach-user-group",
              children: " Xem danh sách User Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./user-group/xem-chi-tiet-user-group",
              children: " Xem chi tiết User Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./user-group/chinh-sua-user-group",
              children: " Chỉnh sửa User Group "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./user-group/xoa-user-groups",
              children: " Xóa User Groups "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/iam-user-management",
          children: " Quản lý IAM User "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/iam-user-overview",
              children: " IAM User - Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/invite-iam-user-moi",
              children: " Invite IAM user mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/khoi-tao-account-va-truy-cap-vao-vpc-da-duoc-moi",
              children: " Khởi tạo account và truy cập vào VPC đã được mời "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/thay-doi-mat-khau",
              children: " Thay đổi mật khẩu "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/cau-hinh-2fa",
              children: " Cấu hình 2FA "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./ip-access/ip-access",
          children: " IP Access "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ip-access/ip-access-overview",
              children: " IP Access Overview "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ip-access/create-ip-",
              children: " Khởi tạo một record IP access mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ip-access/delete-ip-access",
              children: " Xóa record IP access "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ip-access/activity-log-ip-access",
              children: " Kiểm tra Activity logs "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ip-access/download-access-log",
              children: " Tải danh sách lịch sử truy cập "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-câu-hỏi-thường-gặp-faqs",
      children: "Các câu hỏi thường gặp (FAQs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "một-số-gợi-ý-mẫu-samples",
      children: "Một số gợi ý mẫu (Samples)"
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