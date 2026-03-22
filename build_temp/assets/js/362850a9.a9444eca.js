"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[76047],{

/***/ 155529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_security_group_filter_md_362_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-security-group-filter-md-362.json
const site_docs_cloud_server_network_security_group_filter_md_362_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/security-group-filter","title":"Filter Security Group","description":"*","source":"@site/docs/cloud-server/network/security-group-filter.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/security-group-filter","permalink":"/cloud-server/network/security-group-filter","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Filter Security Group","title":"Filter Security Group","source":"https://fptcloud.com/documents/cloud-server/?doc=security-group-filter","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Gỡ card mạng (NIC) khỏi máy ảo","permalink":"/cloud-server/network/remove-the-network-card-from-the-virtual-machine"},"next":{"title":"Manage Priority Rule of Security Group","permalink":"/cloud-server/network/security-group-priority-rule"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/security-group-filter.md


const frontMatter = {
	sidebar_label: 'Filter Security Group',
	title: 'Filter Security Group',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=security-group-filter',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Filter Security Group';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "filter-security-group",
        children: "Filter Security Group"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Filter Security Group giúp người dùng nhanh chóng tìm kiếm và thu hẹp danh sách Security Group theo nhiều tiêu chí khác nhau như tên, tag, địa chỉ IP, trạng thái, loại firewall, ngày tạo, v.v."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "giải-thích-các-thông-tin-hỗ-trợ-filter",
      children: "Giải thích các thông tin hỗ trợ filter"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ý nghĩa"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhập tên Security Group hoặc một phần tên. Hệ thống sẽ lọc theo chuỗi bạn nhập. Ví dụ: nhập sec để tìm “security-group-9609”, “security-group-6688”, v.v."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dropdown chọn mức độ tag. Dùng để lọc data tag theo level để filter theo tag. Chọn All nếu muốn hiển thị tất cả."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn 1 tag cụ thể để lọc Security Group có gán tag đó. Dropdown hiển thị danh sách tag hiện có. Ví dụ: chọn tag tagging-prod để hiển thị các Security Group thuộc môi trường Production."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Apply to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lọc theo tên Instance hoặc địa chỉ IP của Instance mà Security Group đang áp dụng. Ví dụ: nhập 10.10.5.21 để tìm Security Group áp dụng lên IP này."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Source/Destination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lọc Security Group có rule liên quan đến source hoặc destination bạn nhập. Cho phép nhập: IP đơn (ví dụ: 192.168.10.5) hoặc Dải CIDR (ví dụ: 10.0.0.0/24)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lọc theo trạng thái Security Group. Các giá trị: Creating, Active, Deleting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Firewall type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lọc theo loại firewal, bao gồm: Distributed Firewall (DFW) & Security Group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Create date from - Create date to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lọc Security Group theo khoảng thời gian tạo."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "hướng-dẫn-sử-dụng",
      children: "Hướng dẫn sử dụng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(565986)/* ["default"] */ .A) + "",
        width: "1024",
        height: "510"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Mở cửa sổ Filter"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhấn Filter trên màn hình Security Group."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập điều kiện lọc"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bạn có thể nhập một hoặc nhiều điều kiện cùng lúc."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ví dụ kết hợp:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Name: prod"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tag: tagging-prod"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Status: Active"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "→ Hệ thống sẽ chỉ hiển thị các Security Group trạng thái active có tag tagging-prod và tên chứa \"prod\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Áp dụng bộ lọc bằng cách nhấn nút Show result"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Xóa bộ lọc"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhấn Clear để xóa toàn bộ điều kiện lọc."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhấn X tại mỗi trường để xoá điều kiện tương ứng."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "lưu-ý-quan-trọng",
      children: "Lưu ý quan trọng"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bộ lọc không làm thay đổi Security Group — chỉ hỗ trợ tìm kiếm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số trường có thể không hiển thị nếu Security Group không có dữ liệu tương ứng (ví dụ: Tag trống)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu danh sách không hiển thị kết quả, hãy kiểm tra xem có nhập quá nhiều điều kiện."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-security-group",
        children: " Previous Quản lý Security Group "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./security-group-priority-rule",
        children: " Next Manage Priority Rule of Security Group "
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

/***/ 565986
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/288019d594a7-filter-sec-group-1024x510-7dada0f108bc8445c3b41e01cc8d680e.png");

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