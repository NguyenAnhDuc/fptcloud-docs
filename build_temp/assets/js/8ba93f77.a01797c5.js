"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79194],{

/***/ 733902
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_tinh_nang_hibernate_wakeup_md_8ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-tinh-nang-hibernate-wakeup-md-8ba.json
const site_docs_managed_fpt_kubernetes_engine_tinh_nang_hibernate_wakeup_md_8ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng Hibernate & Wake-up","source":"@site/docs/managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tinh nang hibernate wakeup","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-hibernate-wakeup","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tinh nang dat lich hibernate wake up","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-dat-lich-hibernate-wake-up"},"next":{"title":"Tinh nang rotate kubeconfig","permalink":"/managed-fpt-kubernetes-engine/tinh-nang-rotate-kubeconfig"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/tinh-nang-hibernate-wakeup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tinh nang hibernate wakeup',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-hibernate-wakeup',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Hibernate & Wake-up"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các Clusters thường được sử dụng 24/24 nếu như chúng đang chạy cho môi trường production còn đối với việc sử dụng các cluster scho môi trường dev, test, staging hay demo, việc scale down các resources K8s khi không sử dụng sẽ giúp tiết kiệm chi phí cho người dùng. Tuy nhiên việc scale down thủ công có thể sẽ tốn nhiều thời gian vậy nên tính năng Hibernate sinh ra để tự động hoá phần việc này."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["_Khi người dùng sử dụng tính năng", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hibernate"
      }), " , các resources trong cluster sẽ có những thay đổi như sau: _"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các worker nodes (instances) sẽ bị xoá"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các pods chuyển sang trạng thái Pending"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các services sẽ được giữ nguyên"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các thành phần lưu trữ trạng thái (PVC...) hay các trạng thái trong etcd cũng sẽ được giữ lại."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wake-up"
      }), " là một tính năng ngược lại với Hibernate, nó giúp cụm quay lại trạng thái ban đầu trước khi được Hibernate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bạn có thể thao tác các tính năng Hibernate và Wake-up trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Portal"
      }), " như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Đối với Hibernate"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(621495)/* ["default"] */ .A) + "",
        width: "702",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Bấm nút Hibernate để bắt đầu quá trình"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(485956)/* ["default"] */ .A) + "",
        width: "696",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập tên của cụm để xác nhận bắt đầu quá trình"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(9361)/* ["default"] */ .A) + "",
        width: "709",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi thông báo hiện về, quá trình Hibernate bắt đầu, và trạng thái trên Portal sẽ trả về trạng thái ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Hibernating (Running)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782468)/* ["default"] */ .A) + "",
        width: "710",
        height: "364"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kết thúc quá trình, trạng thái của cụm sẽ trả về ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Succeeded (Hibernated)"
      }), " tương ứng với việc Hibernate thành công"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(779949)/* ["default"] */ .A) + "",
        width: "711",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Đối với Wake-up"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Với các cụm đã hiện trạng thái ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Succeeded (Hibernated)"
      }), " , người dùng có thể dùng tính năng Wake-up để khôi phục cụm về lại trạng thái ban đầu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , hệ thống sẽ hiển thị trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(104278)/* ["default"] */ .A) + "",
        width: "709",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Bấm nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wakeup"
      }), " để bắt đầu quá trình"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957723)/* ["default"] */ .A) + "",
        width: "712",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập tên cụm để xác nhận quá trình"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(784641)/* ["default"] */ .A) + "",
        width: "709",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi thông báo hiện về, quá trình Hibernate bắt đầu, và trạng thái trên Portal sẽ trả về trạng thái ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Processing (Running)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471491)/* ["default"] */ .A) + "",
        width: "712",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kết thúc quá trình, trạng thái của cụm sẽ trả về ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Succeeded (Running)"
      }), " tương ứng với việc đã thành công Wakeup cụm"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(757500)/* ["default"] */ .A) + "",
        width: "707",
        height: "361"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "Note"
          })
        }), " :"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khuyến cáo trước khi bạn bắt đầu quá trình Hibernate, hãy đảm bảo các pods trong cụm đều trong trạng thái ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Running"
      }), " , các resources khác hoạt động bình thường (svc type LB, ingress, Persistent Volume, secrets, configmaps...)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong khi cụm đã được Hibernated, nếu người dùng deploy thêm các deployment khác, thì các resource mới sẽ đều sẽ ở trạng thái ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Pending"
      }), " , cho tới khi người dùng chọn Wakeup cụm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./persistent-storage",
        children: " Previous Persistent Storage "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-dat-lich-hibernate-wake-up",
        children: " Next Tính năng Đặt lịch Hibernate & Wake-up "
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

/***/ 784641
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03f0209f422e-Picture8-1-1f93eb0ee13aac8dbcbe866159c9d348.png");

/***/ },

/***/ 957723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3df9d5b92f08-Picture7-1-996b7cd5bfcdddc2f6495fa08e888588.png");

/***/ },

/***/ 104278
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5cf5a6d0b9e6-Picture6-1-f5677ac5e70b84c682707d1a68ba3197.png");

/***/ },

/***/ 621495
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/60a2b2ae4c23-Picture1-2-1e32b058b56db91844a06d2c6692e58a.png");

/***/ },

/***/ 9361
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/82ec1b384291-Picture3-1-1a836c581d754136088e0da46815d56f.png");

/***/ },

/***/ 779949
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85b21a7a8eaa-Picture5-1-f863f86a92b072c335877b56dad4c23c.png");

/***/ },

/***/ 757500
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9430756e1bfc-Picture10-1-7eef8021ecfa49677c04ba2f6165a488.png");

/***/ },

/***/ 782468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/951d4b79d4fa-Picture4-1-9dd0e1bfab2fa77c2c2479c8fbc1517c.png");

/***/ },

/***/ 471491
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a91ef8d9189e-Picture9-1-88f144cbc8a5b68f79e43f979d4c956c.png");

/***/ },

/***/ 485956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dfd066c049fb-Picture2-1-23d942411f9c47d78546a7355ff51560.png");

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