"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79691],{

/***/ 13812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_dedicated_fpt_kubernetes_engine_initial_setup_md_bde_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dedicated-fpt-kubernetes-engine-initial-setup-md-bde.json
const site_docs_dedicated_fpt_kubernetes_engine_initial_setup_md_bde_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"dedicated-fpt-kubernetes-engine/initial-setup","title":"2. Dedicated – FPT Kubernetes Engine","description":"Initial Setup","source":"@site/docs/dedicated-fpt-kubernetes-engine/initial-setup.md","sourceDirName":"dedicated-fpt-kubernetes-engine","slug":"/dedicated-fpt-kubernetes-engine/initial-setup","permalink":"/dedicated-fpt-kubernetes-engine/initial-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Initial setup","title":"2. Dedicated – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=Initial-Setup","parent":"https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Dedicated – FPT Kubernetes Engine","permalink":"/dedicated-fpt-kubernetes-engine/"},"next":{"title":"Khoi tao kubernetes cluster moi","permalink":"/dedicated-fpt-kubernetes-engine/khoi-tao-kubernetes-cluster-moi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/dedicated-fpt-kubernetes-engine/initial-setup.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Initial setup',
	title: '2. Dedicated – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine/?doc=Initial-Setup',
	parent: 'https://fptcloud.com/documents/dedicated-fpt-kubernetes-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Dedicated – FPT Kubernetes Engine';

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
        id: "2-dedicated--fpt-kubernetes-engine",
        children: "2. Dedicated – FPT Kubernetes Engine"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đăng nhập vào FPT Portal, bạn hãy truy cập vào ."
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
        children: "Networking"
      }), " chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide K8s 1",
        src: (__webpack_require__(96881)/* ["default"] */ .A) + "",
        width: "1024",
        height: "520"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creat"
      }), " ở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnets Management"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide K8s 2",
        src: (__webpack_require__(447275)/* ["default"] */ .A) + "",
        width: "1024",
        height: "202"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
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
        src: (__webpack_require__(505548)/* ["default"] */ .A) + "",
        width: "954",
        height: "511"
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

/***/ 447275
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6de849e488e4-Userguide-K8s-2-1024x202-2536f0c303316f85c2896f0888dd6cc3.png");

/***/ },

/***/ 505548
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c5aca27be7bb-Userguide-K8s-3-35ad1f79cdf0df5a675ddf2ad99a5c6e.png");

/***/ },

/***/ 96881
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cf033d8c5a71-Userguide-K8s-1-1024x520-f3e238a7ccd28bbe278d6e9effca4b79.png");

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