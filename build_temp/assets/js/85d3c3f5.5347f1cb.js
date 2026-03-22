"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[67836],{

/***/ 464430
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_vm_management_tutorials_thay_doi_thong_tin_cau_hinh_may_chu_md_85d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-vm-management-tutorials-thay-doi-thong-tin-cau-hinh-may-chu-md-85d.json
const site_docs_cloud_server_vm_management_tutorials_thay_doi_thong_tin_cau_hinh_may_chu_md_85d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu","title":"Thay đổi thông tin, cấu hình máy chủ","description":"*","source":"@site/docs/cloud-server/vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu.md","sourceDirName":"cloud-server/vm-management","slug":"/cloud-server/vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu","permalink":"/cloud-server/vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Thay đổi thông tin, cấu hình máy chủ","title":"Thay đổi thông tin, cấu hình máy chủ","source":"https://fptcloud.com/documents/cloud-server/?doc=tutorials-thay-doi-thong-tin-cau-hinh-may-chu","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tạo instance từ template","permalink":"/cloud-server/vm-management/tutorials-tao-instance-tu-template"},"next":{"title":"Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo","permalink":"/cloud-server/vm-management/tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/vm-management/tutorials-thay-doi-thong-tin-cau-hinh-may-chu.md


const frontMatter = {
	sidebar_label: 'Thay đổi thông tin, cấu hình máy chủ',
	title: 'Thay đổi thông tin, cấu hình máy chủ',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=tutorials-thay-doi-thong-tin-cau-hinh-may-chu',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Thay đổi thông tin, cấu hình máy chủ';

const assets = {

};



const toc = [{
  "value": "<strong>1. Resize</strong>",
  "id": "1-resize",
  "level": 2
}, {
  "value": "<strong>2. Rename</strong>",
  "id": "2-rename",
  "level": 3
}, {
  "value": "<strong>3. Reset Password</strong>",
  "id": "3-reset-password",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "thay-đổi-thông-tin-cấu-hình-máy-chủ",
        children: "Thay đổi thông tin, cấu hình máy chủ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-resize",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Resize"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize"
      }), " là chức năng giúp thay đổi cấu hình Ram-CPU của một máy ảo đã tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình Resize, máy ảo sẽ tạm thời được tắt và tự khởi động lại sau khi quá trình hoàn tất."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ngoài ra nếu không muốn tắt máy ảo khi Resize trong tương lai, hãy bật tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hot-add"
      }), ". Trong trường hợp tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hot-add"
      }), " đã được kích hoạt, máy ảo vẫn có thể hoạt động bình thường với cấu hình mới mà không cần thiết phải reboot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy chủ cần thay đổi cấu hình, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize VM"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 41",
        src: (__webpack_require__(836195)/* ["default"] */ .A) + "",
        width: "1024",
        height: "498"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn kích thước mới cho máy ảo, có thể chọn theo template có sẵn hoặc tự chọn cấu hình riêng ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 42",
        src: (__webpack_require__(377577)/* ["default"] */ .A) + "",
        width: "439",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi điền thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize"
      }), " để xác nhận."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ tiến hành kiểm tra tài nguyên, thay đổi cấu hình máy ảo và thông báo kết quả xử lý"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-rename",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Rename"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể đổi tên của máy ảo đã tạo bằng chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rename"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy chủ cần đổi tên, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rename"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 43",
        src: (__webpack_require__(384050)/* ["default"] */ .A) + "",
        width: "1024",
        height: "524"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập tên mới cho máy ảo và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rename."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 44",
        src: (__webpack_require__(128787)/* ["default"] */ .A) + "",
        width: "439",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ tiến hành thay đổi tên cho máy ảo và thông báo kết quả xử lý."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reset-password",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Reset Password"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Với các máy ảo được tạo với phương thức xác thực là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " hỗ trợ người dùng reset lại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password"
      }), " cho tài khoản ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "root"
      }), " ngay trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy chủ cần thay đổi password chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reset Password"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 45",
        src: (__webpack_require__(624956)/* ["default"] */ .A) + "",
        width: "1024",
        height: "524"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reset Password"
      }), ". Hệ thống sẽ gửi mật khẩu mới về email của người dùng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-tra-cuu-thong-tin-thong-so-ky-thuat-cua-may-ao-da-tao",
        children: " Previous Tra cứu thông tin, thông số kỹ thuật của máy ảo đã tạo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-backup-may-chu-voi-snapshot",
        children: " Next Backup máy chủ với Snapshot "
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

/***/ 624956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17f8c10f4123-Userguide-FPT-Cloud-Server-2022-45-1024x524-c2a844db7e20f17e2484f66b8c45f17d.png");

/***/ },

/***/ 836195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3163067f590a-Userguide-FPT-Cloud-Server-2022-41-1024x498-b26f29ab5c0d911ed16ec06bca14de9e.png");

/***/ },

/***/ 128787
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 377577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6016416adfbb-Userguide-FPT-Cloud-Server-2022-42-06589167ccd2cefa9e35c6c891f115f3.png");

/***/ },

/***/ 384050
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f181b90ff1b2-Userguide-FPT-Cloud-Server-2022-43-1024x524-e277104145ec682c5c6eb81ebda75486.png");

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