"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[73357],{

/***/ 18049
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_audit_log_vn_md_367_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-audit-log-vn-md-367.json
const site_docs_managed_fpt_kubernetes_engine_audit_log_vn_md_367_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/audit-log-vn","title":"2. Managed – FPT Kubernetes Engine","description":"Audit Logs - Managed Kubernetes Cluster","source":"@site/docs/managed-fpt-kubernetes-engine/audit-log-vn.md","sourceDirName":"managed-fpt-kubernetes-engine","slug":"/managed-fpt-kubernetes-engine/audit-log-vn","permalink":"/managed-fpt-kubernetes-engine/audit-log-vn","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Audit log vn","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=audit-log-vn","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tu dong nang cap version","permalink":"/managed-fpt-kubernetes-engine/security-version/tu-dong-nang-cap-version"},"next":{"title":"Backup restore vn","permalink":"/managed-fpt-kubernetes-engine/backup-restore-vn"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/audit-log-vn.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Audit log vn',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=audit-log-vn',
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
        id: "2-managed--fpt-kubernetes-engine",
        children: "2. Managed – FPT Kubernetes Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audit Logs - Managed Kubernetes Cluster"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giới thiệu chung tính năng Audit Logs Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audit Log nằm trong nhóm tính năng về Security được cung cấp self-service trên Unify portal thuộc sản phẩm MFKE hỗ trợ ghi lại toàn bộ hoạt động và yêu cầu API gửi đến kube-apiserver. Từ đó giúp truy xuất tác nhân nào, đã thực hiện hành động gì, vào thời điểm nào, các object bị tác động và kết quả của hành động đó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lợi ích của Audit Log:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Giúp giám sát hoạt động của các thành phần tương tác với API server của cụm Kubernetes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cung cấp khả năng phân tích bảo mật và phát hiện các hành vi bất thường."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hỗ trợ truy vết sự cố và tuân thủ quy định (compliance)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✓ Cấu trúc của Audit Log bao gồm các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(330693)/* ["default"] */ .A) + "",
        width: "705",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Request URL: Đường dẫn của API được gọi tới kube-apiserver."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Audit ID: ID duy nhất cho từng sự kiện audit, dùng để truy vết log."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Object Reference: Thông tin về tài nguyên Kubernetes được thao tác:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ApiGroup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "apiVersion: Phiên bản API (v1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "name: Tên của node"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resource: Loại tài nguyên (nodes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Action: Thao tác được thực hiện trên tài nguyên Kubernetes. Ví dụ: patch/create/delete/update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Username: Tên của tài khoản hoặc dịch vụ thực hiện hành động."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Request Received: Thời gian mà yêu cầu được ghi nhận bởi kube-apiserver (theo định dạng dd-MM-yyyy HH:mm:ss)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Logging Time: Thời gian khi sự kiện được ghi nhận trong hệ thống log của dịch vụ MFKE. Thường thì Logging Time sẽ trễ hơn so với Request Received do thời gian xử lý đẩy log từ kube-apiserver của cluster lên trên hệ thống log tập trung."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn sử dụng tính năng trên Unify Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Bộ tính năng tăng cường khả năng bảo mật cho Managed Kubernetes Cluster được tích hợp sau khi cluster được khởi tạo thành công (Trạng thái Succeeded (Running))"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Kích hoạt tính năng Audit Log Security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Truy cập portal FPT Cloud console.fptcloud.com, chọn mục Kubernetes, bấm vào cluster cần audit sau đó vào tab Security, chọn tab Audit Log."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(879203)/* ["default"] */ .A) + "",
        width: "624",
        height: "274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi bấm vào tab Audit Log, màn hình sẽ tự động query và hiển thị toàn bộ log ghi được trong 1 giờ gần nhất. Thông tin audit log được hiển thị với các trường đã được mô tả ở mục 2 bên trên."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(754045)/* ["default"] */ .A) + "",
        width: "693",
        height: "331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Nếu muốn tìm logs trong một khoảng thời gian khác, khách hàng có thể thao tác như sau:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Click vào mục time picker ở góc trên bên phải màn hình."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(653164)/* ["default"] */ .A) + "",
        width: "696",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bước 2: Nhập khoảng thời gian muốn hiển thị log và click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Apply Filter"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619643)/* ["default"] */ .A) + "",
        width: "691",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ hiển thị toàn bộ logs đã ghi được trong khoảng thời gian đã chọn, log sẽ được sắp xếp theo thời gian giảm dần."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213695)/* ["default"] */ .A) + "",
        width: "704",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khách hàng chỉ có thể filter log trong khoảng thời gian (From – To) tối đa là 3 ngày."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Logs sẽ được lưu trữ trong vòng 7 ngày gần nhất."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tinh-nang-workload-scan",
        children: " Previous Tính năng Workload Managed Kubernetes Cluster "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./danh-tag-cho-vm",
        children: " Next Tính năng đánh Tag cho Virtual Machine  "
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

/***/ 754045
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0344c4e24647-Picture3-9-19960f989b55e117846eff2268c47bae.png");

/***/ },

/***/ 879203
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/37c26cb2866c-Picture2-9-a85e4b8a7200ab93b6346f7bab602c3d.png");

/***/ },

/***/ 213695
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5d8f452b0008-Picture6-8-7f0650858e52ad1bbd56d56972a50132.png");

/***/ },

/***/ 330693
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/84596edd3229-Picture1-11-7816e67d4843eb2883c35295f798773c.png");

/***/ },

/***/ 653164
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91bc25169c51-Picture4-8-0e822f08e912813d51c1ecf2c7954a8d.png");

/***/ },

/***/ 619643
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a1a7d3599c0f-Picture5-8-31f961f9401f7fb9af077cf8ef2661e7.png");

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