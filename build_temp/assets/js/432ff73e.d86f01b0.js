"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89753],{

/***/ 512048
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_kubernetes_engine_security_version_gioi_thieu_chung_ve_quy_trinh_quan_ly_version_md_432_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-kubernetes-engine-security-version-gioi-thieu-chung-ve-quy-trinh-quan-ly-version-md-432.json
const site_docs_managed_fpt_kubernetes_engine_security_version_gioi_thieu_chung_ve_quy_trinh_quan_ly_version_md_432_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-kubernetes-engine/security-version/gioi-thieu-chung-ve-quy-trinh-quan-ly-version","title":"2. Managed – FPT Kubernetes Engine","description":"Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud","source":"@site/docs/managed-fpt-kubernetes-engine/security-version/gioi-thieu-chung-ve-quy-trinh-quan-ly-version.md","sourceDirName":"managed-fpt-kubernetes-engine/security-version","slug":"/managed-fpt-kubernetes-engine/security-version/gioi-thieu-chung-ve-quy-trinh-quan-ly-version","permalink":"/managed-fpt-kubernetes-engine/security-version/gioi-thieu-chung-ve-quy-trinh-quan-ly-version","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Gioi thieu chung ve quy trinh quan ly version","title":"2. Managed – FPT Kubernetes Engine","source":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=gioi-thieu-chung-ve-quy-trinh-quan-ly-version","parent":"https://fptcloud.com/documents/managed-fpt-kubernetes-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Fpt cloud managed kubernetes release calendar","permalink":"/managed-fpt-kubernetes-engine/security-version/fpt-cloud-managed-kubernetes-release-calendar"},"next":{"title":"Huong dan chi tiet su dung auto upgrade","permalink":"/managed-fpt-kubernetes-engine/security-version/huong-dan-chi-tiet-su-dung-auto-upgrade"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-kubernetes-engine/security-version/gioi-thieu-chung-ve-quy-trinh-quan-ly-version.md


const frontMatter = {
	sidebar_label: 'Gioi thieu chung ve quy trinh quan ly version',
	title: '2. Managed – FPT Kubernetes Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-kubernetes-engine/?doc=gioi-thieu-chung-ve-quy-trinh-quan-ly-version',
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
    p: "p",
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
      children: "Giới thiệu chung về quy trình quản lý version Kubernetes trên FPTCloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FPTCloud release và update các kubernetes version theo tiêu chuẩn của cộng đồng Kubernetes Open Source Software (OSS)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Định dạng phiên bản của kubernetes là x.y.z trong đó x là major version, major version được tăng từ (x.y) lên (x+1.y), y là minor version, các Deprecated APIs sẽ được xóa bỏ với minor version mới, minor version được tăng từ 1.y lên (1.y+1), ví dụ version 1.25 là minor release theo sau của 1.25. z là patch release, các bản vá, cập nhật với mục đích fix bug hay vá các lỗ hổng bảo mật của minor version sẽ được cập nhật qua patch release."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FPTCloud hỗ trợ quản lý 4 Kubernetes minor version ổn định nhất cùng một thời điểm, trong đó version cao nhất trong 4 version này sẽ được chọn làm version mặc định (default). Các version ổn định này đã kiểm thử kĩ càng và sẵn sàng cho việc chạy production. Các version cũ sẽ được đánh nhãn deprecated cho đến ngày end of life được quy định bởi FPTCloud trong bảng release note."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bên cạnh đó FPTCloud cũng hỗ trợ các version Kubernetes mới được hỗ trợ bởi cộng đồng theo Kubernetes OSS. Các version mới này được để tag Beta, đang trong quá trình hoàn thiện từ những bài kiểm thử nội bộ và ý kiến phản hồi của trải nghiệm người dùng. Khi đủ điều kiện sẵn sàng cho production, các version này sẽ bỏ tag Beta và trở thành version Stable hoặc GA (Generic Available)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các version cũ (end of standard support bởi cộng đồng Kubernetes và FPT Cloud) sẽ không còn được hỗ trợ về kỹ thuật. Các tính năng mới liên quan đến các bản fix của Kubernetes hay các tính năng mới của cloud provider sẽ không được cập nhật ở version end-of-life. Các lỗ hổng và rủi ro về security cũng sẽ không được cập nhật hay khắc phục ở các version này. Lưu ý: các version cũ sẽ không còn được FPT Cloud hỗ trợ và đảm bảo SLA"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Các version Kubernetes đối với cluster thông thường sẽ có sự khác biệt với version Kubernetes cho cluster sử dụng GPU (thông thường version default của cluster GPU sẽ thấp hơn cluster thông thường 1 minor version)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image version cho worker OS sẽ được patch liên tục để giải quyết ngăn chặn các lỗ hổng về Security, hiện tại FPTCloud đang sử dụng image OS ubuntu 22.04 cho worker node trong Kubernetes cluster."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mỗi version trước thời điểm end of standard support 2 tháng sẽ được đưa vào trạng thái maintenance và hiển thị thông qua giao diện portal. Các cluster đang chạy với version sắp end-of-life sẽ được thông báo trước một tháng qua phương thức gửi Email cho user VPC owner 1 lần/ngày để người dùng chủ động nâng cấp version hoặc cấu hình cho tính năng auto upgrade version để cluster được tự động upgrade khi version tới thời điểm end of standard support. Trong khoảng thời gian này nếu người dùng chủ động nâng cấp version, dịch vụ kubernetes sẽ không gửi mail cho user VPC owner nữa."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Đối với các cluster được cấu hình auto upgrade version sẽ được gửi email thông báo thời gian nâng cấp cụ thể cho user VPC owner trước 3 ngày so với ngày sẽ tự động nâng cấp."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tu-dong-nang-cap-version",
        children: " Previous Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./huong-dan-chi-tiet-su-dung-auto-upgrade",
        children: " Next Hướng dẫn chi tiết sử dụng tính năng auto upgrade version "
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