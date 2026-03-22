"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[35171],{

/***/ 237571
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_terraform_set_up_md_f6c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-terraform-set-up-md-f6c.json
const site_docs_terraform_set_up_md_f6c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"terraform/set-up","title":"2. Terraform","description":"Setup","source":"@site/docs/terraform/set-up.md","sourceDirName":"terraform","slug":"/terraform/set-up","permalink":"/terraform/set-up","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Set up","title":"2. Terraform","source":"https://fptcloud.com/documents/terraform/?doc=set-up","parent":"https://fptcloud.com/documents/terraform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Overview terraform","permalink":"/terraform/overview-terraform"},"next":{"title":"Overviews","permalink":"/iac-old/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/terraform/set-up.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Set up',
	title: '2. Terraform',
	source: 'https://fptcloud.com/documents/terraform/?doc=set-up',
	parent: 'https://fptcloud.com/documents/terraform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Terraform';

const assets = {

};



const toc = [{
  "value": "<strong>1. Yêu cầu hệ thống</strong>",
  "id": "1-yêu-cầu-hệ-thống",
  "level": 2
}, {
  "value": "<strong>2. Cài Đặt Terraform</strong>",
  "id": "2-cài-đặt-terraform",
  "level": 2
}, {
  "value": "<strong>3. Kiểm Tra Cài Đặt</strong>",
  "id": "3-kiểm-tra-cài-đặt",
  "level": 2
}, {
  "value": "<strong>4. Cách lấy token sử dụng cho terraform FPTCloud</strong>",
  "id": "4-cách-lấy-token-sử-dụng-cho-terraform-fptcloud",
  "level": 2
}, {
  "value": "<strong>5. Khởi tạo FPT Cloud Provider</strong>",
  "id": "5-khởi-tạo-fpt-cloud-provider",
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
        id: "2-terraform",
        children: "2. Terraform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-yêu-cầu-hệ-thống",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Yêu cầu hệ thống"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phiên bản: Phiên bản mới nhất của Terraform, đảm bảo tương thích với các nhà cung cấp dịch vụ đám mây bạn đang sử dụng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quyền truy cập internet: Để tải về Terraform và các plugin."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-cài-đặt-terraform",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Cài Đặt Terraform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trên macOS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sử dụng Homebrew:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "brew tap hashicorp/tap\nbrew install hashicorp/tap/terraform"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trên Ubuntu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl\n\ncurl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n\nsudo apt-add-repository \"deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main\"\n\nsudo apt-get update && sudo apt-get install terraform\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trên Windows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tải xuống từ Terraform Download Page."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Giải nén file và thêm đường dẫn Terraform vào biến môi trường PATH."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kiểm-tra-cài-đặt",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Kiểm Tra Cài Đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "terraform -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cách-lấy-token-sử-dụng-cho-terraform-fptcloud",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Cách lấy token sử dụng cho terraform FPTCloud"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sidebar"
      }), " -> chọn mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(162505)/* ["default"] */ .A) + "",
        width: "940",
        height: "407"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-khởi-tạo-fpt-cloud-provider",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Khởi tạo FPT Cloud Provider"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra phiên bản và hướng dẫn cài đặt FPT Cloud Provider trên trang Terraform"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(933010)/* ["default"] */ .A) + "",
        width: "939",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sử dụng lệnh “terraform init” để cài đặt FPT Cloud Provider:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(786932)/* ["default"] */ .A) + "",
        width: "812",
        height: "939"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script kết nối FPT Cloud:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(469286)/* ["default"] */ .A) + "",
        width: "939",
        height: "631"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo access token để kết nối FPT Cloud:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(111094)/* ["default"] */ .A) + "",
        width: "939",
        height: "511"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sử dụng accrss token để kết nối đến FPT Cloud:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(397489)/* ["default"] */ .A) + "",
        width: "939",
        height: "780"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./document-terraform",
        children: " Next Document "
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

/***/ 111094
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20c74723e393-image-1723437556421-332f481e13e1cb6ad719371793b0d7f7.png");

/***/ },

/***/ 397489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/348f066d3f3e-image-1723437566706-2a0b72640dae524656776f124fa7668b.png");

/***/ },

/***/ 933010
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3c8ce6d5a5b5-image-1723437534957-10acc9de70faa6ec5306f5a36d818c52.png");

/***/ },

/***/ 162505
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91f0c47610b5-image-1723437528179-3c7023ff6d036f8fa40a370e1b6aa8ab.png");

/***/ },

/***/ 469286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a137448d7c3c-image-1723437548914-abbc3026949429b066a487b244b00b35.png");

/***/ },

/***/ 786932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e0e540d012ce-image-1723437542169-93d074bc340311097af10616f7f4fb6f.png");

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