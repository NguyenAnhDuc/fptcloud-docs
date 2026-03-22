"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[82142],{

/***/ 884916
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_allow_ip_cidr_md_faa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-allow-ip-cidr-md-faa.json
const site_docs_load_balancer_allow_ip_cidr_md_faa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/allow-ip-cidr","title":"Cấu hình Allow IP/CIDR","description":"*","source":"@site/docs/load-balancer/allow-ip-cidr.md","sourceDirName":"load-balancer","slug":"/load-balancer/allow-ip-cidr","permalink":"/load-balancer/allow-ip-cidr","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình Allow IP/CIDR","title":"Cấu hình Allow IP/CIDR","source":"https://fptcloud.com/documents/load-balancer/?doc=Allow-IP-CIDR","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Access logs cho Load balancer","permalink":"/load-balancer/access-logs"},"next":{"title":"Update Load Balancer","permalink":"/load-balancer/cap-nhat-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/allow-ip-cidr.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình Allow IP/CIDR',
	title: 'Cấu hình Allow IP/CIDR',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=Allow-IP-CIDR',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình Allow IP/CIDR';

const assets = {

};



const toc = [{
  "value": "2.16.0.0/24&quot;",
  "id": "2160024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "cấu-hình-allow-ipcidr",
        children: "Cấu hình Allow IP/CIDR"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách hoạt động"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi một yêu cầu truy cập đến Load Balancer, hệ thống sẽ kiểm tra địa chỉ IP nguồn của yêu cầu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu địa chỉ IP nguồn nằm trong dải CIDRs cho phép, yêu cầu sẽ được chấp nhận và tiếp tục đến máy chủ backend."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu địa chỉ IP nguồn không nằm trong dải CIDRs cho phép, yêu cầu sẽ bị từ chối và không được chuyển tiếp."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khi nào cần cấu hình allow CIDRs đến Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tăng cường bảo mật"
        }), " : Ngăn chặn các kết nối không mong muốn từ đó giảm thiểu nguy cơ tấn công từ bên ngoài"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kiểm soát truy cập"
        }), " : Cho phép quản lý quyền truy cập vào Load Balancer bằng cách khai báo danh sách CIDRs được cho phép"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tối ưu hiệu suất"
        }), " : Giảm tải cho Load Balancer bằng cách ngăn chặn các truy cập không mong muốn"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn cấu hình"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập vào trang chủ Load Balancer trên FPT Cloud Portal"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại trang chủ Load Balancer, click chọn Load Balancer cần cấu hình."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại phần thông tin chi tiết Load Balancer, chọn tab Listener."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn tên Listener cần cấu hình để vào màn Update"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Trang update Listener sẽ hiện ra, tìm đến phần Cấu hình Allow CIDRs ở cuối màn hình."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Từ đây người dùng có thể cấu hình 1 hoặc nhiều dải IP được phép truy cập. Nếu cần nhập nhiều dải IP, vui lòng nhập mỗi dòng 1 dải"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ví dụ người dùng nhập:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "\"192.168.0.0/24"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2160024",
      children: "2.16.0.0/24\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có nghĩa là chỉ những địa chỉ IP thuộc 2 dải IP Range này mới có quyền truy cập."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn nút \"Update Listener\" tại góc dưới bên phải của trang để hoàn tất việc cập nhật."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chỉ khai báo các CIDRs đáng tin cậy để tránh bị lạm dụng"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sau khi thay đổi cấu hình, nên kiểm tra lại truy cập để đảm bảo dịch vụ vẫn hoạt động bình thường"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu có sử dụng firewall khác đừng trước Load Balancer như FPT Cloud NGFW, hãy cấu hình tương ứng trên firewall"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./enable-hsts-to-http-listener",
        children: " Previous Enable HSTS to HTTPS Listener "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./sni-load-balancer",
        children: " Next Cấu hình SNI trên Load balancer "
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