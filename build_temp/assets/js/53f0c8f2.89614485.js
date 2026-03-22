"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[41804],{

/***/ 951290
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_quan_ly_floating_ip_md_53f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-quan-ly-floating-ip-md-53f.json
const site_docs_cloud_server_network_quan_ly_floating_ip_md_53f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/quan-ly-floating-ip","title":"Quản lý Floating IP","description":"*","source":"@site/docs/cloud-server/network/quan-ly-floating-ip.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/quan-ly-floating-ip","permalink":"/cloud-server/network/quan-ly-floating-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quản lý Floating IP","title":"Quản lý Floating IP","source":"https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Overview Nic","permalink":"/cloud-server/network/overview-nic"},"next":{"title":"Quản lý Security Group","permalink":"/cloud-server/network/quan-ly-security-group"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/quan-ly-floating-ip.md


const frontMatter = {
	sidebar_label: 'Quản lý Floating IP',
	title: 'Quản lý Floating IP',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý Floating IP';

const assets = {

};



const toc = [{
  "value": "<strong>Lấy địa chỉ IP Public mới từ pool</strong>",
  "id": "lấy-địa-chỉ-ip-public-mới-từ-pool",
  "level": 3
}, {
  "value": "<strong>Gắn Floating IP vào máy chủ</strong>",
  "id": "gắn-floating-ip-vào-máy-chủ",
  "level": 3
}, {
  "value": "<strong>Gỡ Floating IP khỏi máy ảo</strong>",
  "id": "gỡ-floating-ip-khỏi-máy-ảo",
  "level": 3
}, {
  "value": "<strong>Xóa Floating IP khỏi VPC</strong>",
  "id": "xóa-floating-ip-khỏi-vpc",
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
        id: "quản-lý-floating-ip",
        children: "Quản lý Floating IP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " được dùng để lưu giữ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Public"
      }), " và điều hướng truy cập từ internet vào máy ảo. Để máy ảo có thể truy cập được từ ngoài internet, bạn cần gắn một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " cho nó."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trường hợp không còn nhu cầu hoặc muốn thay đổi endpoint, bạn có thể chuyển hướng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " sang máy ảo khác cùng VPC chỉ với 1 vài thao tác đơn giản."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc này sẽ giúp bạn tiết kiệm chi phí cho tài nguyên Public IP, có thể sử dụng các IP một cách tối đa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lấy-địa-chỉ-ip-public-mới-từ-pool",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lấy địa chỉ IP Public mới từ pool"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong trường hợp tài khoản của bạn còn hạn mức, bạn có thể lấy thêm IP để sử dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để lấy thêm", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Public"
      }), " vào VPC, bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate IP address"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(211081)/* ["default"] */ .A) + "",
        width: "975",
        height: "361"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin theo yêu cầu của hệ thống. Bạn có thể tạo nhiều rule NAT với port IP khác nhau thuộc dãy 1-65535:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP address"
          }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Allocate new from pool"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance"
          }), " , chọn máy ảo sẽ được gắn với IP này. Nếu chưa có nhu cầu gắn vào máy ảo (sử dụng sau hoặc sử dụng cho các mục đích khác như VPN Site-to-Site), bạn chọn “Not assign ip to instance"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "IP port (optional)"
          }), " : Port IP để forward traffic vào bên trong. Bạn có thể cài đặt NAT rule cho các port riêng biệt. Các port ứng với 1 IP là duy nhất và không được trùng nhau trong các rule. Nếu để trống trường này, mặc định hệ thống sẽ hiểu là forward trên toàn bộ port."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance Port (Optional)"
          }), " : Instance Port là port trên instance và được forward dữ liệu vào. Bạn có thể cài đặt NAT rule cho các port riêng biệt. Các port ứng với 1 instance là duy nhất và không được trùng nhau trong các rule. Nếu để trống trường này, mặc định hệ thống sẽ hiểu là forward trên toàn bộ port."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add tag (optional)"
          }), " : Gắn tag vào IP. Trường này không bắt buộc"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(781458)/* ["default"] */ .A) + "",
        width: "740",
        height: "990"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate floating IP"
      }), ". Hệ thống sẽ tiến hành kiểm tra các điều kiện để lấy IP và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, IP sẽ được hiển thị ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(101800)/* ["default"] */ .A) + "",
        width: "975",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Nếu hệ thống báo lỗi khi tạo do hết hạn mức, bạn cần liên hệ với bộ phận hỗ trợ để được cấp thêm."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gắn-floating-ip-vào-máy-chủ",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gắn Floating IP vào máy chủ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " , trong phần", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của IP cần gắn vào máy ảo, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connect to instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connect to instance"
      }), " hiện lên, chọn máy ảo cần gắn với IP này tại trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(998544)/* ["default"] */ .A) + "",
        width: "575",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate floating IP"
      }), ". Hệ thống sẽ tiến hành xử lý và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, IP và rule sẽ được hiển thị ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(541661)/* ["default"] */ .A) + "",
        width: "940",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gỡ-floating-ip-khỏi-máy-ảo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gỡ Floating IP khỏi máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trường hợp không còn nhu cầu sử dụng hoặc muốn gỡ IP ra để gắn vào máy ảo khác, bạn có thể gỡ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của IP cần gỡ khỏi máy ảo, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disconnect instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý gỡ, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disconnect"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(74713)/* ["default"] */ .A) + "",
        width: "940",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xóa-floating-ip-khỏi-vpc",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xóa Floating IP khỏi VPC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " khi không còn nhu cầu sử dụng, bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của IP cần xóa khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(969527)/* ["default"] */ .A) + "",
        width: "1445",
        height: "550"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý xóa, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(188000)/* ["default"] */ .A) + "",
        width: "940",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./gateway",
        children: " Previous Gateway "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-security-group",
        children: " Next Quản lý Security Group "
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

/***/ 781458
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/34380ca884fd-image-1744796414049-88d90291225aaead27c3dde6333a09aa.png");

/***/ },

/***/ 998544
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/34fcb07df60b-image-1711341971686-c0ae8028dbfddc43d15e180ec69ff5f4.png");

/***/ },

/***/ 101800
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3ae055e3a161-image-1744796445032-2afe2e970c3b385e43d3a10c0b1aa34d.png");

/***/ },

/***/ 211081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/51d99bba1358-image-1744796389838-19f12d5545d27a0988543eb6bef070e8.png");

/***/ },

/***/ 541661
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/55cc84d46700-image-1711347009568-1407519c6f3e994b65ce02c75813d36c.png");

/***/ },

/***/ 969527
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/96b1e7c8dfcd-image-1734600435905-052fe49794156f81ec7657031df79993.png");

/***/ },

/***/ 188000
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c81c92372331-image-1711347079894-fb873dbc5814321315cf7163181d78ed.png");

/***/ },

/***/ 74713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f39498119d22-image-1711347052046-cfa8fe7c9288f6b38d1285a2bf260cef.png");

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