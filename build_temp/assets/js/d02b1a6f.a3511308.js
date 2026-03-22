"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[66329],{

/***/ 817848
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_pfsense_md_d02_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-pfsense-md-d02.json
const site_docs_vpn_site_to_site_0_connect_pfsense_md_d02_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-pfsense","title":"Cấu hình VPN Site-to-Site với PfSense","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-pfsense.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/connect-pfsense","permalink":"/vpn-site-to-site-0/connect-pfsense","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình VPN Site-to-Site với PfSense","title":"Cấu hình VPN Site-to-Site với PfSense","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-pfsense","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình VPN Site-to-Site với Palo Alto","permalink":"/vpn-site-to-site-0/connect-palo-alto"},"next":{"title":"Cấu hình VPN Site-to-Site với strongSwan","permalink":"/vpn-site-to-site-0/connect-strongswan"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-pfsense.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình VPN Site-to-Site với PfSense',
	title: 'Cấu hình VPN Site-to-Site với PfSense',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-pfsense',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với PfSense';

const assets = {

};



const toc = [{
  "value": "Bước 1: Build Pfsense for Cloud",
  "id": "bước-1-build-pfsense-for-cloud",
  "level": 2
}, {
  "value": "Bước 2: Cấu hình cho VPN Site-to-Site",
  "id": "bước-2-cấu-hình-cho-vpn-site-to-site",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình cho Pfsense",
  "id": "bước-3-cấu-hình-cho-pfsense",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "cấu-hình-vpn-site-to-site-với-pfsense",
        children: "Cấu hình VPN Site-to-Site với PfSense"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bài viết này hướng dẫn cách build thiết bị Pfsense"
      }), " để kết nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Build Pfsense for Cloud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình cho VPN Site-to-Site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Cấu hình cho Pfsense"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPNAAS trên trang Portal"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pfsense đã được download và boot image trên cloud với tên: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pfsense"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dãy Network tương ứng"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 VM Pfsense để phục vụ debug( 2c4g )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-build-pfsense-for-cloud",
      children: "Bước 1: Build Pfsense for Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build Image Pfsense trên Horizon cấu hình 2C4G- 1 IP public gắn trực tiếp, 1 IP mạng Local cần VPN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Có thể vào console VM thông qua SSH"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-cho-vpn-site-to-site",
      children: "Bước 2: Cấu hình cho VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site-to-Site trên ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "- Tạo Customer Gateway:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote private network: dãy Lan Subnet cần peering của Pfsense"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote IP public: IP public của Pfsense"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(8268)/* ["default"] */ .A) + "",
        width: "763",
        height: "476"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "- Tạo VPN connection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông số của VPN Connection sẽ bao gồm 3 mục chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "General information (chứa các thông tin chung của kết nối VPN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: General information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(901754)/* ["default"] */ .A) + "",
        width: "800",
        height: "404"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Thông số Pre-shared-key cần lưu lại để kết nối với Palo Alto", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(808818)/* ["default"] */ .A) + "",
        width: "1052",
        height: "607"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quý khách hàng lựa chọn Providers = “others\" sau đó làm theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Điền providers name = \"pfsense\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IKE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes 256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IKE version: ikev2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DH group: group14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime: 3600 seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phase1 negotiation mode: main"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IPsec:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes 256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulation mode: tunnel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform protocol: esp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect Forward Secrecy (PFS): group14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime: 3600 seconds"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Remote VPN information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438626)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-cấu-hình-cho-pfsense",
      children: "Bước 3: Cấu hình cho Pfsense"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "-"
      }), " Đăng nhập vào console VNC của VM Checkpoint theo account đã tạo trên và chạy lệnh: \"Cpstart\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "-"
      }), " Đăng nhập vào website theo địa chỉ IP: ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://IP.",
        children: ["https://{", (0,jsx_runtime.jsx)(_components.code, {
          children: "IP"
        }), "}"]
      }), " , có thể hiện thông báo SSL như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(105215)/* ["default"] */ .A) + "",
        width: "1335",
        height: "731"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông tin đăng nhập mặc định:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["User: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Admin"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pass: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Pfsense"
      }), " (Có thể set lại pass khi đăng nhập lần đầu trên web)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Nếu chưa có LAN ở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interfaces → chọn LAN"
      }), " để thêm LAN:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(985566)/* ["default"] */ .A) + "",
        width: "1432",
        height: "828"
      }), " - Tiến hành config Tunnel cho Pfsense: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(140270)/* ["default"] */ .A) + "",
        width: "1383",
        height: "490"
      }), " Tại tab VPN, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPsec → Tunnels"
      }), " và ấn chọn Add P1."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up Phase 1 như hình sau:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý"
      }), " : + Pre-Shared Key: nhập từ VPNAAS đã tạo trên portal trước đó"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["+ Remote Gateway: là IP Public của VPNAAS đã tạo trên portal trước đó ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(716407)/* ["default"] */ .A) + "",
        width: "1223",
        height: "905"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set up Phase 2 như sau: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(718416)/* ["default"] */ .A) + "",
          width: "1177",
          height: "846"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tới đây khách hàng đã có thể mở Terminal - Command line để thử Ping thông mạng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-palo-alto",
        children: " Previous Cấu hình VPN Site-to-Site với Palo Alto "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-strongswan",
        children: " Next Cấu hình VPN Site-to-Site với strongSwan "
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

/***/ 718416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3fb897ed051d-image-1744194677761-89c13788d5b2e6ff47dd0f0afaf970d5.png");

/***/ },

/***/ 438626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6bf84b44a032-Screenshot-2025-08-18-110311-15-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 716407
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c6ee265ec13-image-1744194669785-77155fb3806708fb32d1f6fcb0b692c1.png");

/***/ },

/***/ 8268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/98e1e24d7deb-photo_1_2025-07-09_17-34-31-e7331e074248576222fabc4dd0c9d211.jpg");

/***/ },

/***/ 901754
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bab624997b49-photo_2_2025-07-09_17-34-31-dd68efe9580f341a102acfa1c3c50f5b.jpg");

/***/ },

/***/ 985566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c8a77911438e-image-1744194649644-934a32267d1862fbf43e53c8957ac5c7.png");

/***/ },

/***/ 808818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d2ccb53eaeb1-image-1757089299476-2194225e5d1c859f627ab6ccac8f9a8d.png");

/***/ },

/***/ 105215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e138f6103d3e-image-1744194638397-00c4339d22326618ee9a18a393818cf6.png");

/***/ },

/***/ 140270
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e3aaf0200f46-image-1744194658447-96c8288ce7b91994b691aa4a37fa34f1.png");

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