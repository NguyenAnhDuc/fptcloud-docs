"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15636],{

/***/ 741801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_management_access_logs_md_d3d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-management-access-logs-md-d3d.json
const site_docs_load_balancer_management_access_logs_md_d3d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/management/access-logs","title":"Access logs cho Load balancer","description":"*","source":"@site/docs/load-balancer/management/access-logs.md","sourceDirName":"load-balancer/management","slug":"/load-balancer/management/access-logs","permalink":"/load-balancer/management/access-logs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Access logs cho Load balancer","title":"Access logs cho Load balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=access-logs","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý Load Balancer","permalink":"/load-balancer/management/"},"next":{"title":"Update Load Balancer","permalink":"/load-balancer/management/cap-nhat-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/management/access-logs.md


const frontMatter = {
	sidebar_label: 'Access logs cho Load balancer',
	title: 'Access logs cho Load balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=access-logs',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Access logs cho Load balancer';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "access-logs-cho-load-balancer",
        children: "Access logs cho Load balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Log"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " cho phép ghi lại toàn bộ thông tin về các yêu cầu gửi đến, bao gồm client IP, port, method, path, và server response,.... Đây là công cụ quan trọng giúp người dùng phân tích traffic, giám sát hiệu suất, đảm bảo an ninh, và tối ưu hóa hệ thống."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để sử dụng tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access Log"
      }), " , người dùng thao tác theo các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hiển thị danh sách các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer,"
      }), " chọn Load Balancer cần view logs → chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access logs"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Người dùng được view logs của các trường thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Lưu ý:"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Access logs của Load Balancer được lưu trữ để xem tối đa 7 ngày hoặc 1000 dòng."
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thời gian Load Balancer nhận request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên listener mà request được nhận vào"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên pool mà request được chuyển tới"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes sent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số byte được gửi tới client, chỉ body không bao gồm header HTTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes uploaded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes uploaded to the server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Địa chỉ IP của client gửi request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cổng của client gửi request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request HTTP đầy đủ được nhận từ client, bao gồm phương thức, URL và phiên bản giao thức"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên server trong backend mà request được chuyển tới"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSL verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kết quả kiểm tra chứng chỉ SSL của client (chỉ hữu ích khi sử dụng SSL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mã trạng thái HTTP trả về cho client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total time (ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thời gian tổng để xử lý yêu cầu (request) và phản hồi (response), tính bằng mili giây"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timerange"
      }), " cụ thể hoặc chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Filter"
      }), " để thêm các trường, nhập giá trị cụ thể muốn view log."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Để tải xuống file .log access logs của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " theo thời gian đã chọn, người dùng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Export logs"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể xem log tại file tải xuống dưới dạng .log với:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-Tên định dạng của file: loadbalancer_accesslogs__starttime_endtime  \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(Trong đó: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "start time & end time theo format: YYYYMMDDTHH:mmTimezone Thời gian theo browser time"
      }), ", VD:20240729T2300+0700)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./resize-load-balancer",
        children: " Previous Resize cho Load Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tich-hop-fmon",
        children: " Next Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON) "
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