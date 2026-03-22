"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[40119],{

/***/ 73404
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_initial_initial_setup_md_110_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-initial-initial-setup-md-110.json
const site_docs_managed_fpt_kubernetes_engine_initial_initial_setup_md_110_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/initial/initial-setup","title":"2. Managed – FPT Kubernetes Engine","description":"Initial Setup","source":"@site/docs/managed-fpt-kubernetes-engine/initial/initial-setup.md","sourceDirName":"managed-fpt-kubernetes-engine/initial","slug":"/managed-fpt-kubernetes-engine/initial/initial-setup","permalink":"/managed-fpt-kubernetes-engine/initial/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Initial setup","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=Initial-setup","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Khởi tạo & Cấu hình ban đầu","permalink":"/managed-fpt-kubernetes-engine/initial/"},"next":{"title":"Khoi ta o kubernetes cluster moi","permalink":"/managed-fpt-kubernetes-engine/initial/khoi-ta-o-kubernetes-cluster-moi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/initial/initial-setup.md


const frontMatter = {
	sidebar_label: 'Initial setup',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=Initial-setup',
	parent: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Kubernetes Engine';

const assets = {

};



const toc = [{
  "value": "1. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal",
  "id": "1-tạo-tài-khoản-fpt-cloud-và-đăng-nhập-vào-fpt-portal",
  "level": 3
}, {
  "value": "2. Tạo Subnets với Static Pool",
  "id": "2-tạo-subnets-với-static-pool",
  "level": 3
}, {
  "value": "3. Yêu cầu kích hoạt dịch vụ FKE và cấp quota tài nguyên",
  "id": "3-yêu-cầu-kích-hoạt-dịch-vụ-fke-và-cấp-quota-tài-nguyên",
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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu đây là lần đầu tiên bạn sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes Engine"
      }), " , trước tiên hãy kiểm tra và hoàn thành các công việc sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tạo-tài-khoản-fpt-cloud-và-đăng-nhập-vào-fpt-portal",
      children: "1. Tạo tài khoản FPT Cloud và đăng nhập vào FPT Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để đăng ký tài khoản FPT Cloud, bạn hãy truy cập trang chủ tại ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/",
        children: "https://fptcloud.com/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau đó chọn chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign Up"
      }), " và nhập các thông tin theo hướng dẫn của hệ thống. Bạn sẽ được bộ phận hỗ trợ liên hệ ngay sau đó và xác nhận các thông tin để tạo tài khoản."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để đăng nhập vào FPT Portal, bạn hãy truy cập vào ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đăng nhập bằng tài khoản và mật khẩu đã được cấp, chọn đúng Tenant, Region, VPC."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu không chắc chắn về các thông tin trên hoặc hệ thống phản hồi lỗi sau 3 lần thử thì hãy liên hệ ngay cho đội ngũ Support của chúng tôi để được hỗ trợ."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tạo-subnets-với-static-pool",
      children: "2. Tạo Subnets với Static Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes Cluster chỉ hoạt động với Subnets đã bật tùy chọn Static Pool, vì vậy bạn cần tạo một Subnets với Static Pool theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), " chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Subnet K8s",
        src: (__webpack_require__(293364)/* ["default"] */ .A) + "",
        width: "3420",
        height: "1854"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Subnet"
      }), " ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets Management"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Subnet K8s",
        src: (__webpack_require__(610944)/* ["default"] */ .A) + "",
        width: "2474",
        height: "224"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Nhập Tên gợi nhớ của Subnet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CIDR:"
        }), " Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "CIDR"
        }), " hợp lệ"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tích chọn vào tùy chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced settings"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static IP Pool:"
        }), " Nhập 1 dải IP hợp lệ được lấy từ CIDR."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để tạo Subnet mới. Hệ thống sẽ tiến hành xử lý và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide K8s 3",
        src: (__webpack_require__(818685)/* ["default"] */ .A) + "",
        width: "2474",
        height: "1636"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-yêu-cầu-kích-hoạt-dịch-vụ-fke-và-cấp-quota-tài-nguyên",
      children: "3. Yêu cầu kích hoạt dịch vụ FKE và cấp quota tài nguyên"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu đây là lần đầu tiên sử dụng FPT Cloud, một số dịch vụ có thể chưa được mở cho tài khoản của bạn. Hãy liên hệ với đội ngũ hỗ trợ của chúng tôi và cung cấp các thông tin về cấu hình bạn mong muốn. Chúng tôi sẽ cấp cho bạn các tài nguyên cần thiết như Ram + CPU, Storage, Public IP,… để bạn sử dụng dịch vụ FKE."
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

/***/ 293364
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7d3142bd5edf-Screenshot-2025-01-10-at-10.35.34-51d231d596e50c027711684144b98c16.png");

/***/ },

/***/ 818685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9bccff9a1ffe-Initial-setup-3-ad8935cd370c90fdfacb2dc4b57788d9.png");

/***/ },

/***/ 610944
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b09ab0a1d74d-Screenshot-2025-01-10-at-10.39.58-ae469f68887a65ff1d62cd8489cf7be1.png");

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