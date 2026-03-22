"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[28009],{

/***/ 317148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_cluster_management_tinh_nang_benchmark_cluster_md_b1e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-cluster-management-tinh-nang-benchmark-cluster-md-b1e.json
const site_docs_managed_fpt_kubernetes_engine_cluster_management_tinh_nang_benchmark_cluster_md_b1e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/cluster-management/tinh-nang-benchmark-cluster","title":"2. Managed – FPT Kubernetes Engine","description":"Tính năng Benchmark Managed Kubernetes Cluster","source":"@site/docs/managed-fpt-kubernetes-engine/cluster-management/tinh-nang-benchmark-cluster.md","sourceDirName":"managed-fpt-kubernetes-engine/cluster-management","slug":"/managed-fpt-kubernetes-engine/cluster-management/tinh-nang-benchmark-cluster","permalink":"/managed-fpt-kubernetes-engine/cluster-management/tinh-nang-benchmark-cluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tinh nang benchmark cluster","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-benchmark-cluster","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Thay doi cluster endponit access","permalink":"/managed-fpt-kubernetes-engine/cluster-management/thay-doi-cluster-endponit-access"},"next":{"title":"Tinh nang dat lich hibernate wake up","permalink":"/managed-fpt-kubernetes-engine/cluster-management/tinh-nang-dat-lich-hibernate-wake-up"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/cluster-management/tinh-nang-benchmark-cluster.md


const frontMatter = {
	sidebar_label: 'Tinh nang benchmark cluster',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=tinh-nang-benchmark-cluster',
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
    p: "p",
    strong: "strong",
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
      children: "Tính năng Benchmark Managed Kubernetes Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Giới thiệu chung tính năng Benchmark Security"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đảm bảo bảo về an toàn bảo mật thông tin cho FPT Cloud Managed Kubernetes cluster, FPT Cloud cung cấp tính năng cho phép người quản trị thực hiện benchmark các cấu hình, thiết lập của kubelet trong worker node theo tiêu chuẩn chung do Center for Internet Security – CIS đề xuất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CIS Benchmarks là một tập hợp các hướng dẫn cấu hình bảo mật toàn diện được phát triển bởi Trung tâm Bảo mật Internet (Center for Internet Security - CIS). Các hướng dẫn này cung cấp các thực tiễn tốt nhất để bảo mật hệ thống, dịch vụ và phần mềm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các test case được áp dụng cho từng Kubernetes version và đã được điều chỉnh với cấu hình kubelet của FPT Cloud."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả với mỗi test case có 3 loại là Pass, Fail và Warning. Kết quả Pass thể hiện cấu hình đã thỏa mãn với test case do CIS đề ra, Fail thể hiện kết quả không đạt với test case có mức độ quan trọng cao, Warning thể hiện cấu hình không đạt với test case nhưng độ quan trọng thấp (có thể cấu hình hoặc không cấu hình)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Hướng dẫn sử dụng tính năng trên Unify Portal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ". Kích hoạt tính năng Benchmark Security:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập portal FPT Cloud console.fptcloud.com, chọn mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kubernetes"
      }), " , bấm vào cluster cần benchmark sau đó vào tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benchmark Security"
      }), " rồi thực hiện enable:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(214159)/* ["default"] */ .A) + "",
        width: "624",
        height: "233"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi job benchmark được chạy thành công, kết quả chi tiết sẽ được hiển thị, người dùng có thể chạy lại benchmark để cập nhật kết quả mới nhất hoặc download kết quả về máy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914552)/* ["default"] */ .A) + "",
        width: "624",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "B"
      }), ". Tắt tính năng Benchmark Security"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần benchmark sau đó vào tab Security, chọn tab Benchmark Security rồi thực hiện xác nhận để disable:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(249377)/* ["default"] */ .A) + "",
        width: "624",
        height: "329"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-tang-cuong-bao-mat-mfke",
        children: " Previous Tính năng tăng cường bảo mật cho dịch vụ MFKE "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-runtime-security-cluster",
        children: " Next Tính năng Runtime Security cho Managed Kubernetes Cluster  "
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

/***/ 914552
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7bec9f134d7a-Picture2-5-5d847ec5b8a6011250e151defcfafaff.png");

/***/ },

/***/ 214159
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dcd8247ef2a2-Picture1-7-f44429778dbd1d4e0c8da8dea007b9a4.png");

/***/ },

/***/ 249377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f60fafacdbd3-Picture3-5-a0e08647fb47a90cee39b09a4e4e38bc.png");

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