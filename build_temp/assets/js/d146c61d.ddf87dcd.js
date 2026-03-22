"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[33360],{

/***/ 470163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_waf_tao_moi_proxy_host_md_d14_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-waf-tao-moi-proxy-host-md-d14.json
const site_docs_fpt_cloud_waf_tao_moi_proxy_host_md_d14_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-waf/tao-moi-proxy-host","title":"2. FPT Cloud WAF","description":"Tạo mới Proxy Host","source":"@site/docs/fpt-cloud-waf/tao-moi-proxy-host.md","sourceDirName":"fpt-cloud-waf","slug":"/fpt-cloud-waf/tao-moi-proxy-host","permalink":"/fpt-cloud-waf/tao-moi-proxy-host","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao moi proxy host","title":"2. FPT Cloud WAF","source":"https://fptcloud.com/documents/fpt-cloud-waf/?doc=tao-moi-proxy-host","parent":"https://fptcloud.com/documents/fpt-cloud-waf","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly ssl certificates","permalink":"/fpt-cloud-waf/quan-ly-ssl-certificates"},"next":{"title":"Them moi may chu waf","permalink":"/fpt-cloud-waf/them-moi-may-chu-waf"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-waf/tao-moi-proxy-host.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao moi proxy host',
	title: '2. FPT Cloud WAF',
	source: 'https://fptcloud.com/documents/fpt-cloud-waf/?doc=tao-moi-proxy-host',
	parent: 'https://fptcloud.com/documents/fpt-cloud-waf',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud WAF';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
      children: "Tạo mới Proxy Host"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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
      }), " Nhập các thông tin theo hướng dẫn:"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số tính năng mở rộng tùy thuộc vào nhu cầu sử dụng mà quản trị viên chọn các tính năng mở rộng như:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cache Assets:"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Block Common Exploits"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Websockets Support"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra, cần chọn thêm các trường thông tin như:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule Set:"
        }), " Mặc định sẽ được áp dụng tập luật của FPT Cloud WAF, người dùng có thể thêm mới rule set tùy chỉnh của mình tại màn hình thêm mới rule file và chọn từ đây."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access List:"
        }), " Cần thêm mới access list tại màn Access List để chọn và áp dụng được cho proxy host"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSL Certificate:"
        }), " Chọn SSL Certificate tương ứng cho domain/website, SSL Certificate cần được tạo trước khi chọn, nếu không có thể chọn None.", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT WAF 2022 6",
          src: (__webpack_require__(301997)/* ["default"] */ .A) + "",
          width: "1024",
          height: "538"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Proxy"
      }), " để tiến hành tạo Proxy hoặc chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create & Add Another"
      }), " để tạo và hiển thị màn hình thêm mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proxy Host"
      }), " khác."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-proxy-host",
        children: " Previous Quản lý Proxy Host "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-chi-tiet-proxy-host",
        children: " Next Xem thông tin chi tiết Proxy Host "
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