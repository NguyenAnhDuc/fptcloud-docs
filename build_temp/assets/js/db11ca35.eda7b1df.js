"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37347],{

/***/ 144527
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_listener_chinh_sua_listener_md_db1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-listener-chinh-sua-listener-md-db1.json
const site_docs_load_balancer_listener_chinh_sua_listener_md_db1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/listener/chinh-sua-listener","title":"Cấu hình L7 policy cho Listener","description":"*","source":"@site/docs/load-balancer/listener/chinh-sua-listener.md","sourceDirName":"load-balancer/listener","slug":"/load-balancer/listener/chinh-sua-listener","permalink":"/load-balancer/listener/chinh-sua-listener","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình L7 policy cho Listener","title":"Cấu hình L7 policy cho Listener","source":"https://fptcloud.com/documents/load-balancer/?doc=chinh-sua-listener","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình Timeout","permalink":"/load-balancer/listener/cau-hinh-timeout"},"next":{"title":"Enable HSTS to HTTPS Listener","permalink":"/load-balancer/listener/enable-hsts-to-http-listener"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/listener/chinh-sua-listener.md


const frontMatter = {
	sidebar_label: 'Cấu hình L7 policy cho Listener',
	title: 'Cấu hình L7 policy cho Listener',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=chinh-sua-listener',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình L7 policy cho Listener';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "cấu-hình-l7-policy-cho-listener",
        children: "Cấu hình L7 policy cho Listener"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policies"
      }), " là các thành phần quan trọng giúp kiểm soát và định tuyến lưu lượng truy cập đến các máy chủ backend. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policies"
      }), " tập hợp các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule"
      }), " kết hợp với nhau như một chính sách định tuyến lớp 7 cho các yêu cầu HTTP/HTTPS theo quy tắc chỉ định.", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policies"
      }), " là bộ quy tắc bao gồm hai thành phần chính:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Điều kiện"
        }), " : Điều kiện kiểm tra các request đến."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hành động"
        }), " : Một khi các request đến khớp với các Điều kiện trên, thì Hành động tương ứng sẽ được áp dụng trong việc điều phối yêu cầu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.Tạo L7 Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " cần cấu hình."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại đây chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policy,"
      }), " sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Policy."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng nhập các thông tin mới cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policy mới."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy name"
        }), " : Nhập tên cho Policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy action"
        }), " : Reject, Redirect to URL, Redirect to pool."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Reject:"
      }), " Khi request chưa thỏa mãn điều kiện, từ chối truy cập đến máy chủ"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Redirect to URL"
      }), " : Nhập URL mà bạn muốn chuyển request đến khi thỏa mãn điều kiện. Các yêu cầu thỏa mãn với Policy sẽ chuyển đến URL hoặc Prefix URL đã chỉ định với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP response code"
      }), " này. Các giá trị hợp lệ là: 301, 302, 303, 307, hoặc 308."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Redirect to pool:"
      }), " Khi thỏa mãn điều kiện, request đến sẽ được đẩy vào pool được chọn, do đó cần chọn một Pool từ danh sách."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Position"
        }), " : Mức độ ưu tiên của policy, vị trí càng nhỏ thì mức độ ưu tiên càng lớn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn kí hiệu dấu tick để thực hiện tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule"
      }), " và kí hiệu xoá để xoá ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update L7 Policy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policy"
      }), " , nhấn icon bút để sửa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policy."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng sẽ được cập nhật các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy name"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy action"
        }), " : Reject, Redirect to URL, Redirect to pool"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+ Redirect to URL:"
      }), " Nhập URL bạn muốn chuyển request đến khi thỏa điều kiện. Các yêu cầu thỏa mãn với Policy sẽ chuyển đến URL hoặc Prefix URL đã chỉ định với HTTP response code này. Các giá trị hợp lệ là: 301, 302, 303, 307, hoặc 308."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Redirect to pool:"
      }), " Khi thỏa mãn điều kiện, request đến sẽ được đẩy vào pool được chọn, do đó cần chọn một Pool từ danh sách."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Redirected HTTP code"
      }), " : đối với Policy Action là Redirect to URL"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Position"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn icon dấu tick để lưu cập nhật của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policy."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi update ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Policy,"
      }), " người dùng thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule"
      }), " theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Nhấn vào Policy cần thêm rule"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại đây, người dùng nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add L7 rule"
      }), " để thêm rule cho policy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng tiến hành thêm các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type"
        }), " :"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Host name:"
      }), " So sánh value và HTTP/1.1 hostname trong yêu cầu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Path:"
      }), " So sánh value và một phần của HTTP URI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+File"
      }), " : So sánh value và một phần cuối cùng của URI (VD: \".txt\", \".jpg\")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Header:"
      }), " Tìm kiếm header được định nghĩa trong trường key và so sánh giá trị đó với giá trị truyền vào value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Cookie:"
      }), " Tìm kiếm cookie được định nghĩa trong trường key và so sánh giá trị đó với giá trị truyền vào value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare type:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Regex:"
      }), " Chuỗi khớp với regex."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Equal to:"
      }), " Xác minh xem trường được trích xuất có giống với chuỗi được cung cấp hay không."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Starts with:"
      }), " Xác minh xem trường được trích xuất có bắt đầu bằng chuỗi được cung cấp hay không."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Ends with:"
      }), " Xác minh xem trường được trích xuất có kết thúc bằng chuỗi được cung cấp hay không."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "+Contains"
      }), " : Xác minh xem trường được trích xuất có chứa chuỗi được cung cấp hay không."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key"
          }), " : Đối với type là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Header"
          }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cookie"
          }), " , cần nhập trường key để xác định trường nào trong Cookie hoặc Header được dùng để so sánh."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Value"
          }), " : giá trị để so sánh."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Invert"
          }), " : Yes/No (ví dụ, nếu bạn đặt giá trị thành 1, giá trị của so sánh quy tắc L7 này được đặt thành true bất cứ khi nào quy tắc đã chỉ định không khớp)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn kí hiệu dấu tick để thực hiện tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule"
      }), " và kí hiệu xoá để xoá ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để chỉnh sửa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L7 Rule,"
      }), " tại rule đã tạo, người dùng nhấn kí hiệu bút để chỉnh sửa rule."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-timeout",
        children: " Previous Cấu hình Timeout "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./redirect-http-request-sang-https",
        children: " Next Cấu hình redirect HTTP request sang HTTPS "
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