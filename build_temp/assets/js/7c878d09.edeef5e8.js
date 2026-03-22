"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[20175],{

/***/ 855194
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_listener_khoi_tao_listener_md_7c8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-listener-khoi-tao-listener-md-7c8.json
const site_docs_load_balancer_listener_khoi_tao_listener_md_7c8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/listener/khoi-tao-listener","title":"Khởi tạo Listener","description":"*","source":"@site/docs/load-balancer/listener/khoi-tao-listener.md","sourceDirName":"load-balancer/listener","slug":"/load-balancer/listener/khoi-tao-listener","permalink":"/load-balancer/listener/khoi-tao-listener","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khởi tạo Listener","title":"Khởi tạo Listener","source":"https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Enable HSTS to HTTPS Listener","permalink":"/load-balancer/listener/enable-hsts-to-http-listener"},"next":{"title":"Quản lý Listener","permalink":"/load-balancer/listener/quan-ly-listener"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/listener/khoi-tao-listener.md


const frontMatter = {
	sidebar_label: 'Khởi tạo Listener',
	title: 'Khởi tạo Listener',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-listener',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Khởi tạo Listener';

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
        id: "khởi-tạo-listener",
        children: "Khởi tạo Listener"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " là thành phần quan trọng lắng nghe các yêu cầu từ client và điều hướng chúng đến các máy chủ đích phù hợp, bao gồm các thông tin về giao thức, cổng dịch vụ cùng các thông số chi tiết khác. Nó cho phép bạn cấu hình cách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " lắng nghe và định tuyến lưu lượng truy cập đến các ứng dụng hoặc dịch vụ cụ thể trên máy chủ backend."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1."
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo Listener"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " được tạo cùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " khi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo thêm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer,"
      }), " bạn thao tác theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer Details,"
      }), " chọn tên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " tương ứng trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer Management."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener,"
      }), " tiếp theo ấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Listener"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại đây người dùng nhập thông tin cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener name:"
        }), " Nhập tên cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Nhập mô tả cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol:"
        }), " Chọn giao thức sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP/ TERMINATED_HTTPS/ TCP /UDP"
        }), " (mặc định hiển thị là HTTP và Port 80)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server pool:"
        }), " Trong trường hợp các request đến ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener"
        }), " nằm ngoài danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Policies"
        }), " được cấu hình, các request này sẽ được chuyển hướng đến Pool mặc định để xử lý."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client data timeout (ms):"
        }), " Thời gian tối đa mà Load Balancer cho phép một khách hàng (client) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 50000 (tính theo ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Member connect timeout (ms):"
        }), " Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên (member) trong nhóm máy chủ backend duy trì một kết nối mở mà không nhận được dữ liệu từ nó, mặc định là 5000(tính theo ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Member data timeout (ms):"
        }), " Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên(member) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 5000(tính theo ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP inspect timeout (ms):"
        }), " Thời gian chờ tối đa mà bộ định tuyến hoặc thiết bị bảo mật chờ đợi để nhận được phản hồi từ máy chủ đích trong quá trình kiểm tra TCP, mặc định là 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection limit:"
        }), " Giới hạn số lượng kết nối đồng thời mà dịch vụ cân bằng tải (load balancer) có thể xử lý. Giới hạn này giúp đảm bảo dịch vụ không bị quá tải và có thể hoạt động ổn định, mặc định hiển thị là -1 (kết nối vô hạn)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP Header insertions:"
        }), " Mặc định điền sẵn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "X-Forwarded-For, X-Forwarded-Proto, X-Forwarded-Port"
        }), " , có thể bỏ chọn Header nếu không có nhu cầu.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Forwarded-For:"
            }), " When “true” a X-Forwarded-For header is inserted into the request to the backend member that specifies the client IP address."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Forwarded-Port:"
            }), " When “true” a X-Forwarded-Port header is inserted into the request to the backend member that specifies the listener port."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "X-Forwarded-Proto:"
            }), " When “true” a X-Forwarded-Proto header is inserted into the request to the backend member."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Listener"
      }), " để thực hiện tạo hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để huỷ bỏ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Listener"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener,"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " cần cập nhật."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại đây người dùng được update các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener name:"
        }), " Nhập tên cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Nhập mô tả cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server pool:"
        }), " Trong trường các request đến ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Listener"
        }), " nằm ngoài danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Policies"
        }), " được cấu hình, các request này sẽ được chuyển hướng đến Pool mặc định để xử lý."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client data timeout (ms):"
        }), " Thời gian tối đa mà Load Balancer cho phép một khách hàng (client) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 50000 (tính theo ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Member connect timeout (ms)"
        }), " :Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên (member) trong nhóm máy chủ backend duy trì một kết nối mở mà không nhận được dữ liệu từ nó, mặc định là 5000(tính theo ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Member data timeout (ms):"
        }), " Thời gian tối đa mà Load Balancer cho phép một máy chủ thành viên(member) duy trì kết nối đến nó mà không thực hiện bất kỳ yêu cầu (request) nào, mặc định là 5000(tính theo ms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCP inspect timeout (ms):"
        }), " Thời gian chờ tối đa mà bộ định tuyến hoặc thiết bị bảo mật chờ đợi để nhận được phản hồi từ máy chủ đích trong quá trình kiểm tra TCP**,** mặc định là 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connection limit:"
        }), " Giới hạn số lượng kết nối đồng thời mà dịch vụ cân bằng tải (load balancer) có thể xử lý. Giới hạn này giúp đảm bảo dịch vụ không bị quá tải và có thể hoạt động ổn định, mặc định hiển thị là -1 (kết nối vô hạn)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Listener"
      }), " để thực hiện cập nhật hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để huỷ bỏ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.Xoá Listener"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener,"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " cần xoá, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Một hộp thoại cảnh báo sẽ hiện lên, hiển thị tên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " và yêu cầu người dùng xác nhận. Gõ chữ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delete"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Listener"
      }), " để tiến hành xóa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-listener",
        children: " Previous Quản lý Listener "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-timeout",
        children: " Next Cấu hình Timeout "
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