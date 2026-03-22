"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[83113],{

/***/ 150511
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_backup_as_a_service_restore_window_vm_from_cloud_repository_md_d72_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-backup-as-a-service-restore-window-vm-from-cloud-repository-md-d72.json
const site_docs_fpt_backup_as_a_service_restore_window_vm_from_cloud_repository_md_d72_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-backup-as-a-service/restore-window-vm-from-cloud-repository","title":"2. FPT Backup As a Service","description":"Restore Window VM from Cloud Repository","source":"@site/docs/fpt-backup-as-a-service/restore-window-vm-from-cloud-repository.md","sourceDirName":"fpt-backup-as-a-service","slug":"/fpt-backup-as-a-service/restore-window-vm-from-cloud-repository","permalink":"/fpt-backup-as-a-service/restore-window-vm-from-cloud-repository","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Restore window vm from cloud repository","title":"2. FPT Backup As a Service","source":"https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-window-vm-from-cloud-repository","parent":"https://fptcloud.com/documents/fpt-backup-as-a-service","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Restore linux vm from cloud repository","permalink":"/fpt-backup-as-a-service/restore-linux-vm-from-cloud-repository"},"next":{"title":"Khởi tạo & Đăng nhập","permalink":"/fpt-jenkins-ci/initial/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-backup-as-a-service/restore-window-vm-from-cloud-repository.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Restore window vm from cloud repository',
	title: '2. FPT Backup As a Service',
	source: 'https://fptcloud.com/documents/fpt-backup-as-a-service/?doc=restore-window-vm-from-cloud-repository',
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
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
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
      children: "Restore Window VM from Cloud Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Attach File ISO Veeam recovery media sau đó khởi đội VM từ File ISO (lưu ý VM cần có cùng số lượng disk và dung lượng disk). Giao diện console sau khi VM boot thành công."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn Bare Metal Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn Network storage sau đó chọn Next."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn Veeam Cloud Connect repository"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập URL của BaaS: baas-sgn-gw.fptcloud.com đối với site Hồ Chí Minh và baas-han-gw.fptcloud.com đối với site Hà Nội"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập Username/password của bạn. Sau đó ấn Enter để tiếp tục."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Lựa chọn VM cần restore và restore point mong muốn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Chọn Manual restore để Map các ổ đĩa tương ứng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Restore các ổ đĩa tương ứng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Kiểm tra lại thông tin và chọn Restore để tiến hành khôi phục lại VM của bạn"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-file-and-folder-for-windows",
        children: " Previous Restore File and Folder For Windows "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-linux-vm-from-cloud-repository",
        children: " Next Restore Linux VM from Cloud Repository "
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