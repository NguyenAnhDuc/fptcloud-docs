"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[35645],{

/***/ 342285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_management_cau_hinh_ket_noi_may_chu_waf_md_c24_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-management-cau-hinh-ket-noi-may-chu-waf-md-c24.json
const site_docs_fpt_cloud_waf_management_cau_hinh_ket_noi_may_chu_waf_md_c24_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/management/cau-hinh-ket-noi-may-chu-waf","title":"2. FPT Cloud WAF","description":"Cấu hình kết nối máy chủ WAF","source":"@site/docs/fpt-cloud-waf/management/cau-hinh-ket-noi-may-chu-waf.md","sourceDirName":"fpt-cloud-waf/management","slug":"/fpt-cloud-waf/management/cau-hinh-ket-noi-may-chu-waf","permalink":"/fpt-cloud-waf/management/cau-hinh-ket-noi-may-chu-waf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cau hinh ket noi may chu waf","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=cau-hinh-ket-noi-may-chu-waf","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý WAF","permalink":"/fpt-cloud-waf/management/"},"next":{"title":"Chinh sua may chu waf","permalink":"/fpt-cloud-waf/management/chinh-sua-may-chu-waf"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/management/cau-hinh-ket-noi-may-chu-waf.md


const frontMatter = {
	sidebar_label: 'Cau hinh ket noi may chu waf',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=cau-hinh-ket-noi-may-chu-waf',
	parent: 'https://fptcloud.com/documents/fpt-cloud-waf',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAF';

const assets = {

};



const toc = [{
  "value": "1. Kết nối máy chủ WAF đến Web Server của người dùng",
  "id": "1-kết-nối-máy-chủ-waf-đến-web-server-của-người-dùng",
  "level": 2
}, {
  "value": "2. Thêm mới Proxy Host để forward request của end user đi qua máy chủ WAF đến Web Server",
  "id": "2-thêm-mới-proxy-host-để-forward-request-của-end-user-đi-qua-máy-chủ-waf-đến-web-server",
  "level": 2
}, {
  "value": "3. Thêm mới SSL Certificate",
  "id": "3-thêm-mới-ssl-certificate",
  "level": 2
}, {
  "value": "4. Theo dõi Dashboard Overview",
  "id": "4-theo-dõi-dashboard-overview",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "2-fpt-cloud-waf",
        children: "2. FPT Cloud WAF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cấu hình kết nối máy chủ WAF"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kết-nối-máy-chủ-waf-đến-web-server-của-người-dùng",
      children: "1. Kết nối máy chủ WAF đến Web Server của người dùng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu Web Server của người dùng cùng thuộc 1 VPC với máy chủ WAF trên FPT Cloud, cần đảm bảo Web Server thuộc Subnet của máy chủ WAF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu Web Server của người dùng nằm ngoài VPC của FPT Cloud thì máy chủ WAF cần kết nối được với Web Server thông qua IP Public của Web Server đó."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-thêm-mới-proxy-host-để-forward-request-của-end-user-đi-qua-máy-chủ-waf-đến-web-server",
      children: "2. Thêm mới Proxy Host để forward request của end user đi qua máy chủ WAF đến Web Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WAF Dashboard"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hosts"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proxy"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creat Proxy."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 5",
        src: (__webpack_require__(941406)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo hướng dẫn"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 6",
        src: (__webpack_require__(301997)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Source"
          }), " :"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "* **Hostname** : Nhập domain name\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), " : Mặc định là 80, nếu có SSL Certificate thì có thể chọn port 443"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Destination"
          }), " :"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "* **Forward Scheme** : Chọn http/https\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Forward Hostname/IP"
            }), " : Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Public"
            }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain"
            }), " của Web Server. Nếu WAF và Web Server cùng thuộc 1 subnet, bạn có thể dùng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP Private."
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Forward Port:"
            }), " Nhập port của Web Server đang sử dụng"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Forward Port là port đã được mở kết nối trên Web Server"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), " chọn Default Rule ( ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CyWAF Rule"
        }), ") để áp dụng tập luật tối ưu của FPT Cloud WAF"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-thêm-mới-ssl-certificate",
      children: "3. Thêm mới SSL Certificate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WAF Dashboard"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSL Certificates"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creat SSL Certificates."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 7",
        src: (__webpack_require__(290705)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý SSL Certificates"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 8",
        src: (__webpack_require__(878188)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-theo-dõi-dashboard-overview",
      children: "4. Theo dõi Dashboard Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi kết nối thành công domain/website với máy chủ WAF, quản trị viên quay lại trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      }), " để theo dõi trạng thái của máy chủ WAF"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT WAF 2022 9",
        src: (__webpack_require__(473889)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./dang-nhap-waf-dashboard",
        children: " Previous Đăng nhập WAF Dashboard "
      })
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

/***/ 941406
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0fdd55189c14-Userguide-FPT-WAF-2022-5-1024x538-6eae167a413dfe4f68db21cf1ed55675.png");

/***/ },

/***/ 301997
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/144ab6abe20d-Userguide-FPT-WAF-2022-6-1024x538-dbea85a1a425672860167d3f576fad1d.png");

/***/ },

/***/ 290705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/743bb54de3d0-Userguide-FPT-WAF-2022-7-1024x538-7a2800617adcbd8e7a3a1d4187e8823b.png");

/***/ },

/***/ 473889
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d28bf8272b35-Userguide-FPT-WAF-2022-9-1024x538-33350baf95f87a432a8e68da40d23507.png");

/***/ },

/***/ 878188
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dac448e9b760-Userguide-FPT-WAF-2022-8-1024x538-048cfba5f6ec80842f0f3dd7c07d5377.png");

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