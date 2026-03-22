"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[20037],{

/***/ 979620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_worker_group_thay_doi_cau_hinh_flavor_cua_worker_pool_md_66d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-worker-group-thay-doi-cau-hinh-flavor-cua-worker-pool-md-66d.json
const site_docs_managed_fpt_kubernetes_engine_worker_group_thay_doi_cau_hinh_flavor_cua_worker_pool_md_66d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/worker-group/thay-doi-cau-hinh-flavor-cua-worker-pool","title":"2. Managed – FPT Kubernetes Engine","description":"Thay đổi cấu hình flavor của worker pool","source":"@site/docs/managed-fpt-kubernetes-engine/worker-group/thay-doi-cau-hinh-flavor-cua-worker-pool.md","sourceDirName":"managed-fpt-kubernetes-engine/worker-group","slug":"/managed-fpt-kubernetes-engine/worker-group/thay-doi-cau-hinh-flavor-cua-worker-pool","permalink":"/managed-fpt-kubernetes-engine/worker-group/thay-doi-cau-hinh-flavor-cua-worker-pool","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Thay doi cau hinh flavor cua worker pool","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thay-doi-cau-hinh-flavor-cua-worker-pool","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Service type load balancer","permalink":"/managed-fpt-kubernetes-engine/worker-group/service-type-load-balancer"},"next":{"title":"Thay doi cau hinh internal subnet load balancer","permalink":"/managed-fpt-kubernetes-engine/worker-group/thay-doi-cau-hinh-internal-subnet-load-balancer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/worker-group/thay-doi-cau-hinh-flavor-cua-worker-pool.md


const frontMatter = {
	sidebar_label: 'Thay doi cau hinh flavor cua worker pool',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=thay-doi-cau-hinh-flavor-cua-worker-pool',
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
      children: "Thay đổi cấu hình flavor của worker pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dịch vụ MFKE không cho phép update cấu hình flavor của worker trong worker pool một cách trực tiếp, thay vào đó người dùng cần tạo worker pool mới với cấu hình flavor mong muốn cho worker. Điều này đã được đề cập trong mục số 9 của tài liệu FAQs dịch vụ MFKE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "http://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=mfke-faqs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách thay đổi flavor của worker pool trong dịch vụ MFKE"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Tạo worker pool mới"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo một worker pool mới với cấu hình flavor mà bạn mong muốn."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đảm bảo các node trong pool mới đã hoạt động ổn định và tham gia vào cluster."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Sau khi tạo worker pool mới, người dùng cần chuyển ứng dụng từ worker pool có cấu hình flavor cũ sang worker pool có cấu hình flavor mới"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc chuyển ứng dụng này người dùng có thể tham khảo một vài cách ví dụ như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trường hợp 1: Ứng dụng được deploy sử dụng nodeSelector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gán label của worker pool mới giống với worker pool cũ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau đó, xóa worker pool cũ khỏi cluster → Các pod của ứng dụng này sẽ được tạo mới ở trên worker pool mới. Đến khi pod ứng dụng được tạo mới thành công, các pod ứng dụng trên worker pool cũ sẽ xóa đi. Khi các ứng dụng trên worker pool cũ được evict hoàn toàn, các worker trong worker pool cũ sẽ bị drain và xóa bỏ khỏi cluster."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trường hợp 2: Ứng dụng không dùng nodeSelector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chạy lệnh cordon để ngăn các node trong worker pool cũ nhận pod mới."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau đó, thực hiện rollout restart để khởi động lại các pod ứng dụng để các mới sẽ được khởi tạo sang worker pool mới, các pod trên worker cũ sẽ bị terminate đi"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau khi các pod ứng dụng chuyển thành công hàn toàn sang worker pood mới, người dùng thực hiện xóa worker pool cũ trên portal"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý quá trình cluster drain và xóa bỏ worker pool cũ có thể không được thực hiện thành công tự động hoàn toàn do một vài lý do như:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ứng dụng dùng Pod Disruption Budget (PDB) – giới hạn số pod có thể bị xóa cùng lúc."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ứng dụng có sử dụng Persistent Volume Claim (PVC) dạng block."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Trong các trường hợp trên, bạn cần chủ động kiểm tra và evict thủ công các pod chưa bị xóa, để đảm bảo ứng dụng chuyển hết sang worker pool mới."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khuyến nghị"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nên thực hiện thay đổi này vào giờ thấp điểm để tránh ảnh hưởng đến người dùng thật."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Theo dõi trạng thái pod và ứng dụng sau khi chuyển để đảm bảo mọi thứ hoạt động ổn định."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./service-type-kb-layer7-lbv2",
        children: " Previous Sử dụng service type Loadbalancer Layer 7 (LBv2) "
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