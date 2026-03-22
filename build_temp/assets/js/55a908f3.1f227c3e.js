"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[81614],{

/***/ 663260
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_security_group_priority_rule_md_55a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-security-group-priority-rule-md-55a.json
const site_docs_cloud_server_network_security_group_priority_rule_md_55a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/security-group-priority-rule","title":"Manage Priority Rule of Security Group","description":"*","source":"@site/docs/cloud-server/network/security-group-priority-rule.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/security-group-priority-rule","permalink":"/cloud-server/network/security-group-priority-rule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Manage Priority Rule of Security Group","title":"Manage Priority Rule of Security Group","source":"https://fptcloud.com/documents/cloud-server/?doc=security-group-priority-rule","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Filter Security Group","permalink":"/cloud-server/network/security-group-filter"},"next":{"title":"Chọn Project khi tạo VPC","permalink":"/cloud-server/network/select-project-when-creating-vpc"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/security-group-priority-rule.md


const frontMatter = {
	sidebar_label: 'Manage Priority Rule of Security Group',
	title: 'Manage Priority Rule of Security Group',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=security-group-priority-rule',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Manage Priority Rule of Security Group';

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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "manage-priority-rule-of-security-group",
        children: "Manage Priority Rule of Security Group"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Tính năng này chỉ dành riêng cho một số Tenant có cấu hình đặc biêt, vui lòng liên hệ để được hỗ trợ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng cho phép bạn thiết lập các rule để kiểm soát lưu lượng mạng (firewall rules). Độ ưu tiên (Priority) quyết định thứ tự rule được thực thi, ảnh hưởng trực tiếp đến việc Allow hoặc Deny traffic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng \"Quản lý độ ưu tiên\" giúp bạn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sắp xếp thứ tự rule theo mức độ quan trọng"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đảm bảo rule chi tiết được xử lý trước rule tổng quát"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tránh xung đột hoặc sai hành vi firewall do rule đặt sai vị trí"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "cách-hệ-thống-xử-lý-rule",
      children: "Cách hệ thống xử lý rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi rule được gắn một chỉ số Priority. Priority càng nhỏ → Rule càng được ưu tiên xử lý trước. Khi traffic đi qua, hệ thống sẽ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đọc rule theo thứ tự từ priority nhỏ → lớn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Áp dụng rule đầu tiên match với traffic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dừng, không tiếp tục xét các rule phía sau"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ví dụ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rule Allow SSH (priority 01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rule Deny All (priority 02) ⇒ Traffic SSH được Allow vì rule 01 được xét trước rule 02."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "hướng-dẫn-sử-dụng",
      children: "Hướng dẫn sử dụng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập Security Group"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đăng nhập vào FPT Cloud Portal"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Network"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn Security Groups"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở danh sách Rules ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(128512)/* ["default"] */ .A) + "",
        width: "1024",
        height: "558"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(904034)/* ["default"] */ .A) + "",
        width: "1024",
        height: "513"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn button Actions > Manage priority rule"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống sẽ show modal danh sách rule theo gateway (nếu VPC có nhiều gateway, hệ thống sẽ tự động chọn Gateway đầu tiên và load danh sách rule của Security Group trong Gateway đó)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Danh sách rule sẽ hiển thị gồm:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cột #: thự tự ưu tiên của Rule"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(Direction (Inbound/Outbound)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Type"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Protocol"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Port range"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Soure / Destination"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Action (Allow/Deny)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Source / Destination"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IP Type (IPv4/IPv6)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Thay đổi Priority ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658887)/* ["default"] */ .A) + "",
        width: "1024",
        height: "511"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Click chuột vào rule muốn sắp xếp thứ tự"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bấm Move up / Move down để kéo rule lên hoặc xuống vị trí mong muốn. Hoặc Move to để kéo rule đến vị trí bất kì trong danh sách rule đang có"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống sẽ tự động cập nhật giá trị Priority theo vị trí mới"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Lưu cấu hình"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau khi sắp xếp xong, nhấn Save hoặc Apply Changes"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rule sẽ được áp dụng ngay lập tức"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thay đổi priority có gây downtime không? => Không. Rule được áp dụng theo cơ chế real-time, không ảnh hưởng đến VM uptime."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tôi có thể đặt priority giống nhau không? => Không."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./security-group-filter",
        children: " Previous Filter Security Group "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./terraform",
        children: " Next IaC (Terraform) "
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

/***/ 658887
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b2d3b2a0504d-selected-1024x511-d9b59609f2645b0241fd279a3aa3f3ce.png");

/***/ },

/***/ 904034
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdee0131abee-not-select-1024x513-f9a9b4e1dcad0a195d78c8519466afc2.png");

/***/ },

/***/ 128512
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dd79184241ab-list-SG-1024x558-16301a48929d8ceb06e4e936d0896ff4.png");

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