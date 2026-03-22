"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[66091],{

/***/ 744474
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_api_management_huong_dan_su_dung_cho_api_consumer_md_141_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-api-management-huong-dan-su-dung-cho-api-consumer-md-141.json
const site_docs_fpt_api_management_huong_dan_su_dung_cho_api_consumer_md_141_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-api-management/huong-dan-su-dung-cho-api-consumer","title":"2. FPT API Management","description":"Hướng dẫn sử dụng cho API Consumer","source":"@site/docs/fpt-api-management/huong-dan-su-dung-cho-api-consumer.md","sourceDirName":"fpt-api-management","slug":"/fpt-api-management/huong-dan-su-dung-cho-api-consumer","permalink":"/fpt-api-management/huong-dan-su-dung-cho-api-consumer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan su dung cho api consumer","title":"2. FPT API Management","source":"https://fptcloud.com/documents/fpt-api-management/?doc=huong-dan-su-dung-cho-api-consumer","parent":"https://fptcloud.com/documents/fpt-api-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Huong dan nhanh quick starts","permalink":"/fpt-api-management/huong-dan-nhanh-quick-starts"},"next":{"title":"FPT API Management","permalink":"/fpt-api-management/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-api-management/huong-dan-su-dung-cho-api-consumer.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan su dung cho api consumer',
	title: '2. FPT API Management',
	source: 'https://fptcloud.com/documents/fpt-api-management/?doc=huong-dan-su-dung-cho-api-consumer',
	parent: 'https://fptcloud.com/documents/fpt-api-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT API Management';

const assets = {

};



const toc = [{
  "value": "1. Nhận thông tin từ API Provider",
  "id": "1-nhận-thông-tin-từ-api-provider",
  "level": 2
}, {
  "value": "2. Sử dụng Postman",
  "id": "2-sử-dụng-postman",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
        id: "2-fpt-api-management",
        children: "2. FPT API Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn sử dụng cho API Consumer"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-nhận-thông-tin-từ-api-provider",
      children: "1. Nhận thông tin từ API Provider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể bắt đầu sử dụng, client sẽ cần có các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Endpoint của API"
        }), " : Được cung cấp theo hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-api-site#contentify_4",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lấy thông tin Endpoint của Product."
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization:"
        }), " Phương thức xác thực của ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumer"
        }), ". Hiện tại đang hỗ trợ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API Key"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Username:"
            }), " Tên user với cấu trúc:"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Username = UsernameProvider + tên site + usernameConsumer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Ví dụ:"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "demo123.sitedemo.demoacc"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hoặc có thể lấy theo hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-consumers#contentify_4",
        children: "Lấy thông tin xác thực của Consumer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " : Mật khẩu của user đã khai báo ở bước tạo consumer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nếu Authorization"
          }), " là API Key:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Key:"
            }), " api-key."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Value :"
            }), " Lấy theo hướng dẫn ở phần"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add to:"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site được ủy quyền."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-sử-dụng-postman",
      children: "2. Sử dụng Postman"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi đã có đủ thông tin, client có thể sử dụng Postman để bắt đầu dùng API được cung cấp từ API Management."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Nhập endpoint và chọn method gọi API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 33",
        src: (__webpack_require__(988974)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Auth"
        }), " và nhập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " /", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API Key"
        }), " và nhập key nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 34",
        src: (__webpack_require__(515946)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập các request body, param khác để gọi API và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Send."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 35",
        src: (__webpack_require__(213985)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhận kết quả trả về."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status message 2xx:"
        }), " Gọi API thành công"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status message 4xx – 5xx:"
        }), " Lỗi – báo cho FCI để được hỗ trợ"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 36",
        src: (__webpack_require__(908547)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Checklist check lỗi sẽ tuần tự như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra username, password."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Báo API Provider kiểm tra quyền của client với API trước."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra API đã khai báo đúng hay chưa, param bị thiếu header gì hay không?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra API có bị lỗi hay không ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Báo FCI kiểm tra gateway."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./analytics",
        children: " Previous Analytics "
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

/***/ 988974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6851d77f9940-Userguide-FPT-API-Management-33-1024x640-87bc1879a436963f033b7e26fef85464.png");

/***/ },

/***/ 908547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e71949323c1-Userguide-FPT-API-Management-36-1024x640-e8d99a63785d3143f2e98c45d522afe3.png");

/***/ },

/***/ 515946
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c6cc12919cdc-Userguide-FPT-API-Management-34-1024x640-99685a461003428e43d942c4535419f7.png");

/***/ },

/***/ 213985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fc9f24a15e58-Userguide-FPT-API-Management-35-1024x640-8120a42d8fa3aa7e75356dd18e428d94.png");

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