"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[99102],{

/***/ 137731
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_backup_as_a_service_install_veeam_agent_for_linux_md_0a2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-backup-as-a-service-install-veeam-agent-for-linux-md-0a2.json
const site_docs_fpt_backup_as_a_service_install_veeam_agent_for_linux_md_0a2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-backup-as-a-service/install-veeam-agent-for-linux","title":"2. FPT Backup As a Service","description":"Install Veeam Agent for Linux","source":"@site/docs/fpt-backup-as-a-service/install-veeam-agent-for-linux.md","sourceDirName":"fpt-backup-as-a-service","slug":"/fpt-backup-as-a-service/install-veeam-agent-for-linux","permalink":"/fpt-backup-as-a-service/install-veeam-agent-for-linux","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Install veeam agent for linux","title":"2. FPT Backup As a Service","source":"https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=install-veeam-agent-for-linux","parent":"https://fptcloud.com/documents/fpt-backup-as-a-service","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Những điều cần lưu ý khi sử dụng Backup as a Service","permalink":"/fpt-backup-as-a-service/"},"next":{"title":"Install veeam agent for windows","permalink":"/fpt-backup-as-a-service/install-veeam-agent-for-windows"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-backup-as-a-service/install-veeam-agent-for-linux.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Install veeam agent for linux',
	title: '2. FPT Backup As a Service',
	source: 'https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=install-veeam-agent-for-linux',
	parent: 'https://fptcloud.com/documents/fpt-backup-as-a-service',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Backup As a Service';

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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-backup-as-a-service",
        children: "2. FPT Backup As a Service"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install Veeam Agent for Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên server cần backup, login vào trang portal với account của bạn:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Backup as a Service : ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://baas.fptcloud.com",
        children: "https://baas.fptcloud.com"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(159296)/* ["default"] */ .A) + "",
        width: "940",
        height: "429"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đây là giao diện quản trị của bạn sau khi login thành công:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(607292)/* ["default"] */ .A) + "",
        width: "940",
        height: "431"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Vào mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Managed Computers"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download Agent"
      }), " sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(395846)/* ["default"] */ .A) + "",
        width: "940",
        height: "413"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chỉnh thời gian Token hết hạn theo nhu cầu. Mặc định là 12 Tháng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(447093)/* ["default"] */ .A) + "",
        width: "755",
        height: "430"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi download thành công file LinuxAgentPackages.sh bạn cần copy vào trong server và tiến hành cài đặt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chạy lệnh sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo chmod +x LinuxAgentPackages.sh  \nsudo ./LinuxAgentPackages.sh  \n  \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(199609)/* ["default"] */ .A) + "",
        width: "940",
        height: "322"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Veeam sẽ tự động cài đặt Veeam Agent sau khi script chạy thành công."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra trạng thái kết nối bằng command sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "veeamconsoleconfig -s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(143835)/* ["default"] */ .A) + "",
        width: "848",
        height: "402"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Kiểm tra quá trình cài đặt thành công"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(912980)/* ["default"] */ .A) + "",
        width: "940",
        height: "307"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kiểm tra job backup đã có trong mục Backup Job."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(134445)/* ["default"] */ .A) + "",
        width: "940",
        height: "299"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./install-veeam-agent-for-windows",
        children: " Next Install Veeam Agent for Windows "
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

/***/ 447093
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1b6f23f5f988-image-1695290727809-61549c3aa4d73ef4b58ffad4dd5f2087.png");

/***/ },

/***/ 159296
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/244344032e55-image-1695290664395-cc50f399a7cfa72d5ba3b7929988628b.png");

/***/ },

/***/ 199609
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3e4654e1b700-image-1695290745234-d6d7e38f190a1b5ab62a6f5d4c668f64.png");

/***/ },

/***/ 143835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ebe5284f371-image-1695290759883-cdeab2bdeddc045c70ea4a7b270f015d.png");

/***/ },

/***/ 395846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8dee543b974e-image-1695290710281-3ed28aa06a0e4134f4d031193edc9e07.png");

/***/ },

/***/ 912980
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/933364fa60ec-image-1695290772560-676e7e5f1a2acd59ca260a9a13de442d.png");

/***/ },

/***/ 607292
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d34bc29d1450-image-1695290688881-df11dc8e1e7fbcc1200e4d36fc04da55.png");

/***/ },

/***/ 134445
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f99963d4c055-image-1695290783350-adea12ae6433e08d1145cdaa58b4e306.png");

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