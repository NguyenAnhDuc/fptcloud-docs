"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[84982],{

/***/ 423751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_quan_ly_access_list_md_4fc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-quan-ly-access-list-md-4fc.json
const site_docs_fpt_cloud_waf_quan_ly_access_list_md_4fc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/quan-ly-access-list","title":"2. FPT Cloud WAF","description":"Quản lý Access List","source":"@site/docs/fpt-cloud-waf/quan-ly-access-list.md","sourceDirName":"fpt-cloud-waf","slug":"/fpt-cloud-waf/quan-ly-access-list","permalink":"/fpt-cloud-waf/quan-ly-access-list","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình nâng cao cho Access List:","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-access-list","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly 404 host","permalink":"/fpt-cloud-waf/quan-ly-404-host"},"next":{"title":"Quan ly nguoi dung cua waf dashboard","permalink":"/fpt-cloud-waf/quan-ly-nguoi-dung-cua-waf-dashboard"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/quan-ly-access-list.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình nâng cao cho Access List:',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=quan-ly-access-list',
	parent: 'https://fptcloud.com/documents/fpt-cloud-waf',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAF';

const assets = {

};



const toc = [{
  "value": "Cấu hình nâng cao cho Access List:",
  "id": "cấu-hình-nâng-cao-cho-access-list",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "2-fpt-cloud-waf",
        children: "2. FPT Cloud WAF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Access List"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access Lists cung cấp danh sách đen hoặc danh sách trắng (Whitelist/Blacklist) các địa chỉ IP máy trạm cụ thể, cùng với xác thực cho Proxy Hosts thông qua xác thực HTTP cơ bản."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản trị viên có thể cấu hình nhiều quy tắc (rules), gán user/password cho một danh sách truy cập và sau đó áp dụng cho Proxy Hosts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Điều này hữu ích cho các dịch vụ web được chuyển tiếp, không có cơ chế xác thực được tích hợp sẵn hoặc quản trị muốn bảo vệ khỏi sự truy cập của các máy trạm không xác định."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để cấu hình/thêm mới một Access List thực hiện theo các bước sau đây :"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accest List"
      }), " tại menu để mở màn hình quản lý Access List."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 34",
        src: (__webpack_require__(586099)/* ["default"] */ .A) + "",
        width: "1024",
        height: "499"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Access List"
      }), " để mở màn hình thêm mới và nhập thông tin như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập tên cho Access List"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Satisfy Any"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pass Auth to Host"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Access List"
      }), " để thêm mới list đã nhập thông tin và mở màn hình xem chi tiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-nâng-cao-cho-access-list",
      children: "Cấu hình nâng cao cho Access List:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Basic Auth"
      }), " để cấu hình thêm mới tài khoản xác thực cơ bản HTTP Nginx."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username:"
        }), " Nhập tên xác thực"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password:"
        }), " Nhập password xác thực."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Basic Auth"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create & Add Another"
      }), " để thêm mới authentication khác nếu có."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT WAF 2022 35",
          src: (__webpack_require__(310317)/* ["default"] */ .A) + "",
          width: "1024",
          height: "517"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Whitelist/Blacklist"
      }), " để thêm mới địa chỉ IP hoặc subnet cho phép truy cập/từ chối truy cập"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check box chọn allow hoặc deny tương ứng với các IP hoặc subnet tương ứng."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Allow:"
            }), " với IP hoặc Subnet được phép truy cập."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deny:"
            }), " với IP hoặc Subnet bị từ chối truy cập."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "IP / Subnet: Nhập địa chỉ IP hoặc subnet"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhấn Create Whitelist/Blacklist để thêm địa chỉ IP được cấu hình truy cập cho phép hoặc từ chối (allow/deny)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Cấu hình các truy cập cho phép và từ chối (allow/deny) sẽ được áp dụng theo thứ tự mà chúng được xác định."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 36",
        src: (__webpack_require__(879964)/* ["default"] */ .A) + "",
        width: "1024",
        height: "519"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Proxy"
      }), " để thêm mới proxy host áp dụng cho Access List vừa tạo. Tham khảo cách thêm mới Proxy Host tại trang Quản lý Proxy Host"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 37",
        src: (__webpack_require__(861919)/* ["default"] */ .A) + "",
        width: "1024",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các chức năng khác:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit:"
      }), " Sửa thông tin Access List."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "View:"
      }), " Xem chi tiết Access List."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete:"
      }), " Loại bỏ Access List."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-404-host",
        children: " Previous Quản lý 404 Host "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-ssl-certificates",
        children: " Next Quản lý SSL Certificates "
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

/***/ 879964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0778cdff073d-Userguide-FPT-WAF-2022-36-1024x519-f1fc73d975109c7ff538556634d4445d.png");

/***/ },

/***/ 310317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4d36978c2bdc-Userguide-FPT-WAF-2022-35-1024x517-e350319a1fa19cfe2952a3218541eea4.png");

/***/ },

/***/ 861919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/993c3cc60d5b-Userguide-FPT-WAF-2022-37-1024x516-0ac532506637c259d1abd278f38146b6.png");

/***/ },

/***/ 586099
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6882854dd34-Userguide-FPT-WAF-2022-34-1024x499-7d63a3e3da4de0123b70bf1346ae80ac.png");

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