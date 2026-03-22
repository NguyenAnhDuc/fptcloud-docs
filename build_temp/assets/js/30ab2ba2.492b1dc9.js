"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[158],{

/***/ 372308
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_change_network_config_0_change_static_ip_in_ubuntu_server_md_30a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-change-network-config-0-change-static-ip-in-ubuntu-server-md-30a.json
const site_docs_change_network_config_0_change_static_ip_in_ubuntu_server_md_30a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"change-network-config-0/change-static-ip-in-ubuntu-server","title":"2. Change Network Config","description":"Sửa static IP trên Ubuntu server","source":"@site/docs/change-network-config-0/change-static-ip-in-ubuntu-server.md","sourceDirName":"change-network-config-0","slug":"/change-network-config-0/change-static-ip-in-ubuntu-server","permalink":"/change-network-config-0/change-static-ip-in-ubuntu-server","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Change static ip in ubuntu server","title":"2. Change Network Config","source":"https://fptcloud.com/documents/change-network-config-0/?doc=change-static-IP-in-Ubuntu-server","parent":"https://fptcloud.com/documents/change-network-config-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Use nat instance","permalink":"/nat_instance/use-nat-instance"},"next":{"title":"Change static ip in window server","permalink":"/change-network-config-0/change-static-ip-in-window-server"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/change-network-config-0/change-static-ip-in-ubuntu-server.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Change static ip in ubuntu server',
	title: '2. Change Network Config',
	source: 'https://fptcloud.com/documents/change-network-config-0/?doc=change-static-IP-in-Ubuntu-server',
	parent: 'https://fptcloud.com/documents/change-network-config-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Change Network Config';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "2-change-network-config",
        children: "2. Change Network Config"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sửa static IP trên Ubuntu server"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Kiểm tra tình trạng hiện tại"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sau khi edit NIC, IP NIC là 132.0.0.190"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM ubuntu",
        src: (__webpack_require__(644797)/* ["default"] */ .A) + "",
        width: "1024",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bấm vào Console và đăng nhập vào hệ thống"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhập ifconfig"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM ubuntu console",
        src: (__webpack_require__(779081)/* ["default"] */ .A) + "",
        width: "1016",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở file 00-installer-config.yaml"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“vi 00-installer-config.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.06.36 PM",
        src: (__webpack_require__(535395)/* ["default"] */ .A) + "",
        width: "587",
        height: "39"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Và chuyển sang mode “Insert” (nhấn phím “i”)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sửa lại các thông số cần thiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.06.53 PM",
        src: (__webpack_require__(611344)/* ["default"] */ .A) + "",
        width: "633",
        height: "199"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write and quit: Nhấn “Esc” sau đó nhập :wq, sau đó nhấn “Enter”"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.07.26 PM",
        src: (__webpack_require__(111899)/* ["default"] */ .A) + "",
        width: "572",
        height: "790"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhâp lệnh sau đây để cập nhật thay đổi:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sudo netplan apply"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.10.56 PM",
        src: (__webpack_require__(412604)/* ["default"] */ .A) + "",
        width: "572",
        height: "52"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Check lại địa chỉ IP đã thay bằng lệnh ifconfig"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.12.57 PM",
        src: (__webpack_require__(374191)/* ["default"] */ .A) + "",
        width: "718",
        height: "365"
      }), (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.13.18 PM",
        src: (__webpack_require__(82775)/* ["default"] */ .A) + "",
        width: "718",
        height: "98"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./change-static-ip-in-window-server",
        children: " Next Sửa static IP trên Window server "
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

/***/ 412604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0a072ee4e747-Screenshot-2023-07-11-at-1.10.56-PM-438c3a83e8f463145e55e7ec332da597.png");

/***/ },

/***/ 374191
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/223067ab6eeb-Screenshot-2023-07-11-at-1.12.57-PM-dd91acfeaf039d3768e2f51fba91e830.png");

/***/ },

/***/ 111899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46cc3684863e-Screenshot-2023-07-11-at-1.07.26-PM-ca7a711bb3da0efb4280883318573926.png");

/***/ },

/***/ 611344
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/68a5c57872fc-Screenshot-2023-07-11-at-1.06.53-PM-e9d2a4f571a2c7d86aabb39df1160b57.png");

/***/ },

/***/ 644797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/84e18337cb9d-NIC-VM-ubuntu-1024x372-a0c193dc596735e0a03829f77a20b10a.png");

/***/ },

/***/ 82775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/87f0f02a8e4b-Screenshot-2023-07-11-at-1.13.18-PM-547d1c770e6332025238893d148436dd.png");

/***/ },

/***/ 779081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/949ea6c3903c-NIC-VM-ubuntu-console-e7853bf7a1dd798aee5f94aca90368c7.png");

/***/ },

/***/ 535395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1e702aab890-Screenshot-2023-07-11-at-1.06.36-PM-6ad8c4c484e0ac9698886019a0158964.png");

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