"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[34919],{

/***/ 887513
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_index_md_963_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-index-md-963.json
const site_docs_load_balancer_index_md_963_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/index","title":"Load Balancer","description":"Load Balancer","source":"@site/docs/load-balancer/index.md","sourceDirName":"load-balancer","slug":"/load-balancer/","permalink":"/load-balancer/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Load Balancer","title":"Load Balancer","source":"https://fptcloud.com/documents/load-balancer/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Import SSL Certificate cho Load Balancer","permalink":"/load-balancer/import-ssl-certificate-cho-load-balancer"},"next":{"title":"Load Balancer","permalink":"/load-balancer/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/index.md


const frontMatter = {
	sidebar_label: 'Load Balancer',
	title: 'Load Balancer',
	source: 'https://fptcloud.com/documents/load-balancer/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Load Balancer';

const assets = {

};



const toc = [{
  "value": "Giới thiệu về dịch vụ Load Balancer trên FPT Cloud.",
  "id": "giới-thiệu-về-dịch-vụ-load-balancer-trên-fpt-cloud",
  "level": 3
}, {
  "value": "Những điều cần lưu ý trước khi bạn tạo một Load Balancer.",
  "id": "những-điều-cần-lưu-ý-trước-khi-bạn-tạo-một-load-balancer",
  "level": 3
}, {
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Load Balancer (Tutorials)",
  "id": "load-balancer-tutorials",
  "level": 2
}, {
  "value": "Classic Load Balancer (Tutorials)",
  "id": "classic-load-balancer-tutorials",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "load-balancer",
        children: "Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Load Balancer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "giới-thiệu-về-dịch-vụ-load-balancer-trên-fpt-cloud",
      children: "Giới thiệu về dịch vụ Load Balancer trên FPT Cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cân bằng tải (Load Balancer) là việc thực hiện phân phối tải lên một nhóm máy chủ ảo hoặc nhóm tài nguyên backend (web server, web app, containers...) sao cho tối ưu nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các website hay web app hiện nay có thể phải phục vụ lên tới hàng trăm nghìn khách hàng trong một ngày với hàng triệu request đến cùng lúc. Nếu chỉ sử dụng một máy chủ đơn lẻ thì rất khó để đáp ứng được toàn bộ khối lượng công việc này. Phương án tốt nhất để giải quyết là mở rộng hệ thống lên nhiều máy chủ cùng nhau xử lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi được khởi tạo và cấu hình, FPT Load Balancer sẽ chịu trách nhiệm tự động điều phối traffic đến và phân chia đồng đều cho các máy chủ trong group, đảm bảo tất cả các request đều được tối ưu nhất về tốc độ và hiệu suất xử lý. FPT Load Balancer còn sẽ liên tục kiểm tra tính sẵn sàng của các máy chủ, trong trường hợp có một máy bị hỏng không thể kết nối được. Bộ điều khiển sẽ tự động chuyển toàn bộ traffic đến các máy còn lại cho đến khi máy bị hỏng trở lại hoạt động bình thường."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do các đặc tính này của Load Balancer nên dịch vụ của bạn luôn được đảm bảo về hiệu năng, tốc độ xử lý và tính sẵn sàng của hệ thống sẽ ở mức cao nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này sẽ cung cấp cho bạn thông tin về những điều bạn cần biết trước khi tạo một FPT Load Balancer, cách bạn tạo và quản lý nó trên FPT Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "những-điều-cần-lưu-ý-trước-khi-bạn-tạo-một-load-balancer",
      children: "Những điều cần lưu ý trước khi bạn tạo một Load Balancer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Số lượng máy chủ:"
        }), " Bạn cần tính toán khối lượng công việc mà các máy chủ cần xử lý để chọn số máy chủ cho phù hợp."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kích thước của bộ điều khiển Load Balancer:"
        }), " Hiện tại ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FPT Cloud"
        }), " đang cung cấp các gói khác nhau từ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic"
        }), " cho đến ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Premium"
        }), ". Mỗi gói sẽ có thông số hỗ trợ tối đa khác nhau. Bạn có thể liên hệ với nhân viên hỗ trợ để được tư vấn gói phù hợp nhất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vị trí địa lý đặt các máy ảo:"
        }), " Vị trí địa lý (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Region"
        }), ") có thể sẽ ảnh hưởng đến tốc độ đường truyền từ internet đến các máy chủ ảo trong quá trình sử dụng. Bạn nên chọn Region gần nhất với đối tượng phát sinh traffic để tối ưu được tốc độ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thuật toán cân bằng tải :"
        }), " FPT đang cung cấp 2 thuật toán chính là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Round Robin"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Least Connections"
        }), ". Bạn nên tìm hiểu cơ chế hoạt động và ưu nhược điểm của 2 phương thức này để chọn được thuật toán tối ưu nhất với web/app của mình."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
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
      id: "load-balancer-tutorials",
      children: "Load Balancer (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./management/quan-ly-load-balancer",
          children: " Quản lý Load Balancer "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/khoi-tao-load-balancer",
              children: " Khởi tạo Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/cap-nhat-load-balancer",
              children: " Update Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/theo-doi-bieu-do-load-balancer",
              children: " Theo dõi biểu đồ giám sát Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/them-external-member",
              children: " Thêm External member cho Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/resize-load-balancer",
              children: " Resize cho Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/access-logs",
              children: " Access logs cho Load balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/tich-hop-fmon",
              children: " Tích hợp Metric/Access logs Load Balancer với FPT Monitoring (FMON) "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./listener/quan-ly-listener",
          children: " Quản lý Listener "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/khoi-tao-listener",
              children: " Khởi tạo Listener "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/cau-hinh-timeout",
              children: " Cấu hình Timeout "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/chinh-sua-listener",
              children: " Cấu hình L7 policy cho Listener "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/redirect-http-request-sang-https",
              children: " Cấu hình redirect HTTP request sang HTTPS "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/redirect-prefix",
              children: " Redirect prefix "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/enable-hsts-to-http-listener",
              children: " Enable HSTS to HTTPS Listener "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/allow-ip-cidr",
              children: " Cấu hình Allow IP/CIDR "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./listener/sni-load-balancer",
              children: " Cấu hình SNI trên Load balancer "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./server-pool/quan-ly-server-pool",
          children: " Quản lý Server Pool "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./server-pool/khoi-tao-server-pool",
              children: " Khởi tạo Server Pool "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./server-pool/them-bot-member-cho-server-pool",
              children: " Thêm/bớt member cho Server pool "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./server-pool/chinh-sua-cau-hinh-health-check",
              children: " Chỉnh sửa cấu hình Health check "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./ssl/quan-ly-ssl-certificate",
          children: " Quản lý SSL Certificate "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ssl/import-ssl-certificate-cho-load-balancer",
              children: " Import SSL Certificate cho Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ssl/xoa-ssl-certificate",
              children: " Xoá SSL Certificate "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "classic-load-balancer-tutorials",
      children: "Classic Load Balancer (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./management/manage-load-balancer",
          children: " Quản lý Load Balancer "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/khoi-tao-mot-load-balancer-moi",
              children: " Khởi tạo một Load Balancer mới "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/them-may-ao-vao-load-balancer",
              children: " Thêm máy ảo vào Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/xoa-may-ao-khoi-load-balancer",
              children: " Xóa máy ảo khỏi Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/thay-doi-thong-tin-cau-hinh-load-balancer",
              children: " Thay đổi thông tin cấu hình Load Balancer "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/xoa-load-balancer",
              children: " Xóa Load Balancer "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./ssl/ssl-load-balancer",
          children: " Quản lý chứng chỉ SSL cho Load Balancer "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ssl/tao-import-ssl-certificate",
              children: " Tạo/Import SSL Certificate "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./ssl/xem-thong-tin-chi-tiet-ssl-certificate",
              children: " Xem thông tin chi tiết SSL Certificate "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
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