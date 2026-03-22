"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26613],{

/***/ 686383
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_listener_sni_load_balancer_md_d7e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-listener-sni-load-balancer-md-d7e.json
const site_docs_load_balancer_listener_sni_load_balancer_md_d7e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/listener/sni-load-balancer","title":"Cấu hình SNI trên Load balancer","description":"*","source":"@site/docs/load-balancer/listener/sni-load-balancer.md","sourceDirName":"load-balancer/listener","slug":"/load-balancer/listener/sni-load-balancer","permalink":"/load-balancer/listener/sni-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình SNI trên Load balancer","title":"Cấu hình SNI trên Load balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=SNI-load-balancer","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Redirect prefix","permalink":"/load-balancer/listener/redirect-prefix"},"next":{"title":"Quản lý Server Pool","permalink":"/load-balancer/server-pool/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/listener/sni-load-balancer.md


const frontMatter = {
	sidebar_label: 'Cấu hình SNI trên Load balancer',
	title: 'Cấu hình SNI trên Load balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=SNI-load-balancer',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình SNI trên Load balancer';

const assets = {

};



const toc = [{
  "value": "Cách hoạt động",
  "id": "cách-hoạt-động",
  "level": 3
}, {
  "value": "Khi nào cần cấu hình SNI trên Load Balancer",
  "id": "khi-nào-cần-cấu-hình-sni-trên-load-balancer",
  "level": 3
}, {
  "value": "Hướng dẫn cấu hình",
  "id": "hướng-dẫn-cấu-hình",
  "level": 3
}, {
  "value": "Lưu ý",
  "id": "lưu-ý",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cấu-hình-sni-trên-load-balancer",
        children: "Cấu hình SNI trên Load balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SNI (Server Name Indication)"
      }), " trên Load Balancer cho phép một Listener phục vụ nhiều tên miền (hostname) khác nhau bằng cách ánh xạ từng tên miền với một chứng chỉ SSL/TLS cụ thể. Tính năng này giúp tiết kiệm tài nguyên, hỗ trợ triển khai đa miền và tăng cường bảo mật cho các dịch vụ HTTPS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cách-hoạt-động",
      children: "Cách hoạt động"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Khi một client gửi yêu cầu HTTPS đến Load Balancer, trình duyệt hoặc ứng dụng sẽ đính kèm tên miền (SNI hostname) vào trong giai đoạn bắt tay SSL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load Balancer sẽ đọc thông tin hostname từ SNI và chọn chứng chỉ SSL tương ứng được cấu hình sẵn cho hostname đó."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu hostname khớp với một SNI đã cấu hình, kết nối sẽ được thiết lập thành công với chứng chỉ đúng."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu hostname không khớp, Load Balancer sẽ sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Default certificate"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "khi-nào-cần-cấu-hình-sni-trên-load-balancer",
      children: "Khi nào cần cấu hình SNI trên Load Balancer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lưu trữ nhiều tên miền trên cùng một IP"
        }), " : Hỗ trợ nhiều website HTTPS chạy trên một Load Balancer duy nhất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiết kiệm tài nguyên"
        }), " : Không cần tạo nhiều Load Balancer chỉ để phục vụ các tên miền khác nhau."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bảo mật tên miền"
        }), " : Mỗi domain có thể dùng chứng chỉ riêng biệt, giúp dễ quản lý và tuân thủ chính sách bảo mật."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hướng-dẫn-cấu-hình",
      children: "Hướng dẫn cấu hình"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập vào trang quản lý Load Balancer trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud Portal"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại danh sách Load Balancer, chọn Load Balancer bạn muốn cấu hình."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener"
      }), " , sau đó chọn Listener đang sử dụng protocol TERMINATED_HTTPS, hoặc tạo mới Listener nếu chưa có"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Chọn các chứng chỉ SSL/TLS lên 2 trường:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default SSL/TLS certificate: Chọn chứng chỉ mặc định sử dụng cho Listener"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SNI SSL/TLS certificate: Chọn một hoặc nhiều chứng chỉ SNI Nếu chưa có sẵn chứng chỉ trên hệ thống, người dùng có thể tải lên theo hướng dẫn sau: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer",
          children: "https://fptcloud.com/documents/load-balancer/?doc=import-ssl-certificate-cho-load-balancer"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Nhấn “Update Listener” hoặc \" Create Listener để lưu thay đổi."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Trỏ các tên miền (hostname) về IP public của Load balancer và truy cập."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, người dùng có thể kết hợp sử dụng L7 policy để điều phối truy cập từng domain tới Pool mong muốn, cấu hình như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tải lên đầy đủ chứng chỉ và add vào Listener như hướng dẫn trên, sau đó chọn tab L7 policy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tạo các L7 policy tại Listener:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ví dụ người dùng có 3 domain:\n* example1.com cần redirect tới Pool1\n* example2.com cần redirect tới Pool2\n* example3.com cần redirect tới Pool3\n\nTạo 3 policy tương ứng, và action với 3 Pool khác nhau:\nPolicy1:\n- Policy action: Redirect to pool\n- Redirect to: Pool1\n- Position:1\nPolicy2:\n- Policy action: Redirect to pool\n- Redirect to: Pool2\n- Position:2\nPolicy3:\n- Policy action: Redirect to pool\n- Redirect to: Pool3\n- Position:3\nMỗi policy tạo 1 rule:\nPolicy1 - Rule:\n- Type: Hostname\n- Compare type: Equal to\n- Value: example1.com\n- Invert: No\nPolicy2 - Rule:\n- Type: Hostname\n- Compare type: Equal to\n- Value: example2.com\n- Invert: No\nPolicy3 - Rule:\n- Type: Hostname\n- Compare type: Equal to\n- Value: example3.com\n- Invert: No\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Lưu lại các thay đổi và truy cập tới các domain để kiểm tra Load balancer đã redirect request đúng chưa"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lưu-ý",
      children: "Lưu ý"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client phải hỗ trợ SNI"
        }), " : Đa số trình duyệt và công cụ hiện nay đều hỗ trợ SNI. Một số client cũ (như curl bản rất cũ hoặc thiết bị IoT) có thể không hỗ trợ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chứng chỉ SSL cần hợp lệ"
        }), " và đúng với hostname."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hostname phải duy nhất"
        }), " : Không nên cấu hình trùng hostname với nhiều chứng chỉ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sử dụng wildcard:"
        }), " Trong trường hợp dùng cho các subdomain, người dùng có thể chỉ cần một chứng chỉ wildcard (ví dụ: *.example.com) làm default certificate, thay vì cấu hình nhiều chứng chỉ riêng lẻ cho từng hostname."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sử dụng L7 policy:"
        }), " Nếu không có policy trùng khớp, request sẽ được điều hướng vào Pool mặc định"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./allow-ip-cidr",
        children: " Previous Cấu hình Allow IP/CIDR "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-server-pool",
        children: " Next Quản lý Server Pool "
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