"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[20239],{

/***/ 918362
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_cloud_desktop_sso_qua_fcdclient_cu_md_02d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-cloud-desktop-sso-qua-fcdclient-cu-md-02d.json
const site_docs_fpt_cloud_desktop_sso_qua_fcdclient_cu_md_02d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-cloud-desktop/sso-qua-fcdclient-cu","title":"2. FPT Cloud Desktop","description":"Truy cập qua FCDClient cũ (luồng cũ)","source":"@site/docs/fpt-cloud-desktop/sso-qua-fcdclient-cu.md","sourceDirName":"fpt-cloud-desktop","slug":"/fpt-cloud-desktop/sso-qua-fcdclient-cu","permalink":"/fpt-cloud-desktop/sso-qua-fcdclient-cu","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Sso qua fcdclient cu","title":"2. FPT Cloud Desktop","source":"https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-cu","parent":"https://fptcloud.com/documents/fpt-cloud-desktop","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Lợi thế so với PC Truyền thống","permalink":"/fpt-cloud-desktop/overview-fcd"},"next":{"title":"Sso qua fcdclient moi","permalink":"/fpt-cloud-desktop/sso-qua-fcdclient-moi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-cloud-desktop/sso-qua-fcdclient-cu.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Sso qua fcdclient cu',
	title: '2. FPT Cloud Desktop',
	source: 'https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-cu',
	parent: 'https://fptcloud.com/documents/fpt-cloud-desktop',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Cloud Desktop';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-cloud-desktop",
        children: "2. FPT Cloud Desktop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Truy cập qua FCDClient cũ (luồng cũ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dành cho người dùng đang sử dụng FCDClient cũ đã cài đặt trước đó"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Việc truy cập bằng FCDClient cũ trên PC, laptop sẽ bị dừng hỗ trợ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sau ngày 31/03/2026."
        }), " Truy cập bằng các thiết bị khác vẫn sẽ được hỗ trợ cho đến khi cho thông báo mới. Người dùng chủ động cài đặt FCDClient mới để tránh bị gián đoạn công việc"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thao tác truy cập qua luồng cũ tương tự như ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-web-browserr",
          children: "Hướng dẫn truy cập qua Web Browser"
        }), ", chỉ khác là tại bước truy cập chọn máy ảo, người dùng chọn phương thức truy cập qua FCDClient"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.Truy cập vào Homepage dịch vụ với URL phù hợp"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các định dạng URL hợp lệ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URL riêng của doanh nghiệp/tổ chức dùng cho FCD (quản trị viên khách hàng cung cấp cho người dùng)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URL đã chứa authentication code hợp lệ (định dạng code.domain). Ví dụ: pil783454741.pilotfcd.online"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URL mặc định của dịch vụ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin URL này do quản trị viên khách hàng cung cấp"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập đường link dịch vụ bằng trình duyệt web, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Access through FPT Cloud Desktop Client"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(678938)/* ["default"] */ .A) + "",
        width: "884",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.Đăng nhập vào Authenticator (Server) phù hợp"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu người dùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "truy cập bằng URL đã chứa authentication code hợp lệ"
      }), " (ví dụ URL chứa code hợp lệ: pil783454741.pilotfcd.online)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chỉ cần đăng nhập bằng tài khoản SSO tương ứng (ví dụ Đăng nhập bằng tài khoản Microsoft), nhập OTP tương ứng theo SSO => Đăng nhập Authenticator (Server) thành công ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(481286)/* ["default"] */ .A) + "",
          width: "384",
          height: "288"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu người dùng tải xuống Client từ URL mặc định của dịch vụ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhập thông tin Authentication Code (thông tin do quản trị viên khách hàng quản lý) (Ví dụ Authentication Code hợp lệ: pil783454741)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(514409)/* ["default"] */ .A) + "",
        width: "407",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Đăng nhập bằng tài khoản SSO tương ứng (ví dụ Đăng nhập bằng tài khoản Microsoft), nhập OTP tương ứng theo SSO => Đăng nhập Authenticator (Server) thành công ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(481286)/* ["default"] */ .A) + "",
          width: "384",
          height: "288"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3.Truy cập vào máy ảo"
      }), " Tại màn hình danh sách các máy ảo, chọn truy cập vào máy ảo mong muốn. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " tại bước này người dùng chọn option truy cập qua FCDClient."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu người dùng đang cài đặt FCDClient cũ: Hệ thống sẽ mở FCDClient cũ để truy cập máy ảo Người dùng nhập thông tin đăng nhập vào máy ảo nếu hệ thống yêu cầu => Truy cập máy ảo thành công"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "* Nếu người dùng đã cài đặt FCDClient mới: Hệ thống sẽ ưu tiên mở FCDClient, người dùng cần thực hiện lại các thao tác truy cập tương tự [Bước 2: Truy cập máy ảo qua FCDClient mới](https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_1)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(603101)/* ["default"] */ .A) + "",
        width: "765",
        height: "214"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhập thông tin tài khoản tương ứng theo Server muốn đăng nhập"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nếu có hiển thị mã QR Xác thực 2 lớp: Tải và cài đặt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ứng dụng xác thực Microsoft Authenticator"
      }), " trên Điện thoại tại Apple Store hoặc CH Play/ Google Play"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(162307)/* ["default"] */ .A) + "",
        width: "876",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mở ứng dụng Authenticator và thực hiện quét (scan) QR Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(293933)/* ["default"] */ .A) + "",
        width: "182",
        height: "354"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ứng dụng thực hiện đồng bộ và hiển thị OTP để thực hiện Đăng nhập vào FCD."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhập mã OTP và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Submit"
        }), " => Đăng nhập Authenticator (Server) thành công"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.Truy cập vào máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tại màn hình danh sách các máy ảo, chọn truy cập vào máy ảo mong muốn."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " tại bước này người dùng chọn option truy cập qua FCDClient."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu người dùng đang cài đặt FCDClient cũ: Hệ thống sẽ mở FCDClient cũ để truy cập máy ảo Người dùng nhập thông tin đăng nhập vào máy ảo nếu hệ thống yêu cầu => Truy cập máy ảo thành công"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu người dùng đã cài đặt FCDClient mới: Hệ thống sẽ ưu tiên mở FCDClient, người dùng cần thực hiện lại các thao tác truy cập tương tự ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-cloud-desktop/?doc=SSO-qua-FCDClient-moi#contentify_1",
          children: "Bước 2: Truy cập máy ảo qua FCDClient mới"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(63121)/* ["default"] */ .A) + "",
        width: "802",
        height: "220"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./sso-qua-web-browser",
        children: " Previous Truy cập qua Web browser "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./dang-nhap-voi-account-password",
        children: " Next Đăng nhập với Account/Password "
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

/***/ 63121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/779879784a63-image-1767865288885-ec78a7855430d358072f587bcfa479dd.png");

/***/ },

/***/ 293933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/919c5b65358c-image-1767860691470-7c4ed8bde21e5a525a76b8e1bd9f849b.png");

/***/ },

/***/ 481286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b06915c901f3-image-1767953411678-b626593c3055325c47f8b6884f265d92.png");

/***/ },

/***/ 162307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f00b8ad2fa69-image-1767860622852-7ee1bbdf39546901447dccc9e552fd9b.png");

/***/ },

/***/ 603101
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f3b50a930749-image-1767954262885-4fea22a81fe81525b7837257a21096b9.png");

/***/ },

/***/ 678938
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f5ed3897c3e0-image-1767859575680-751a881f5be7fd1ce4a12daec04bc703.png");

/***/ },

/***/ 514409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fee7cee6442c-image-1767863050735-1de6e9393c4d94220dcdd71a3dac161c.png");

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