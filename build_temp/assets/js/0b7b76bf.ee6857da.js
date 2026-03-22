"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[30537],{

/***/ 705372
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_devices_connect_vyos_1_5_md_0b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-devices-connect-vyos-1-5-md-0b7.json
const site_docs_vpn_site_to_site_0_connect_devices_connect_vyos_1_5_md_0b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-devices/connect-vyos-1.5","title":"Cấu hình VPN Site-to-Site với Vyos 1.5","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-devices/connect-vyos-1.5.md","sourceDirName":"vpn-site-to-site-0/connect-devices","slug":"/vpn-site-to-site-0/connect-devices/connect-vyos-1.5","permalink":"/vpn-site-to-site-0/connect-devices/connect-vyos-1.5","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình VPN Site-to-Site với Vyos 1.5","title":"Cấu hình VPN Site-to-Site với Vyos 1.5","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-vyos-1.5","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình VPN Site-to-Site với strongSwan","permalink":"/vpn-site-to-site-0/connect-devices/connect-strongswan"},"next":{"title":"FAQ","permalink":"/vpn-site-to-site-0/faq/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-devices/connect-vyos-1.5.md


const frontMatter = {
	sidebar_label: 'Cấu hình VPN Site-to-Site với Vyos 1.5',
	title: 'Cấu hình VPN Site-to-Site với Vyos 1.5',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-vyos-1.5',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với Vyos 1.5';

const assets = {

};



const toc = [{
  "value": "Bước 1: Build Vyos1.5 for Cloud",
  "id": "bước-1-build-vyos15-for-cloud",
  "level": 2
}, {
  "value": "Bước 2: Cấu hình cho VPN Site-to-Site",
  "id": "bước-2-cấu-hình-cho-vpn-site-to-site",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình cho Vyos",
  "id": "bước-3-cấu-hình-cho-vyos",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "cấu-hình-vpn-site-to-site-với-vyos-15",
        children: "Cấu hình VPN Site-to-Site với Vyos 1.5"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Build Vyos1.5 for Cloud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình cho VPN Site-to-Site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Cấu hình cho Vyos"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPNAAS trên trang Portal"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyos 1.5 đã được download và boot image trên cloud với tên: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Vyos 1.5"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 VM Pfsense để phục vụ debug( Optional )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-build-vyos15-for-cloud",
      children: "Bước 1: Build Vyos1.5 for Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trên Horizon ta tiến hành tạo VM từ image với các thông số keypair của user và network provider {", (0,jsx_runtime.jsx)(_components.code, {
          children: "IP PUBLIC"
        }), "} bất kì."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-cho-vpn-site-to-site",
      children: "Bước 2: Cấu hình cho VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site To Site trên trang ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      }), " - Tạo Customer Gateway:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote private network: dãy Lan Subnet cần peering của Vyos"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remote IP public: IP public của Vyos", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Tạo Customer Gateway: ", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(605665)/* ["default"] */ .A) + "",
          width: "772",
          height: "473"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Tạo VPN Connection:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: General information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Thông số Pre-shared-key cần lưu lại để kết nối với Vyos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(389472)/* ["default"] */ .A) + "",
        width: "777",
        height: "338"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(742601)/* ["default"] */ .A) + "",
        width: "769",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quý khách hàng lựa chọn Providers = “others\" sau đó làm theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Điền providers name = \"Vyos\""
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Dead peer detection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(49742)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Điền thông số Delay và max failure và chọn khởi tạo VPN Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-cấu-hình-cho-vyos",
      children: "Bước 3: Cấu hình cho Vyos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Đăng nhập ssh vào Vyos theo key đã tạo trên"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Đăng nhập ssh theo địa chỉ IP: {", (0,jsx_runtime.jsx)(_components.code, {
        children: "IP PUBLIC"
      }), "} với user là: \"vyos\" . Minh họa: ssh vyos@{", (0,jsx_runtime.jsx)(_components.code, {
        children: "IP PUBLIC"
      }), "}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chạy các lệnh sau( thay các tham số vào):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "configure\n\n\nset interfaces ethernet eth0 address '{`IP Public Vyos`}'\nset interfaces ethernet eth1 vif 111 address '{`IP LAN Vyos`}/24'\nset protocols static route 0.0.0.0/0 next-hop {`IP-Remote`}\nset vpn ipsec authentication psk RIGHT id '{`IP Public Vyos`}'\nset vpn ipsec authentication psk RIGHT id {`IP-Remote`}\nset vpn ipsec authentication psk RIGHT secret ' {`Pre-Share-Key`}'\nset vpn ipsec esp-group ESP-GROUP mode 'tunnel'\nset vpn ipsec esp-group ESP-GROUP proposal 1 encryption 'aes256'\nset vpn ipsec esp-group ESP-GROUP proposal 1 hash 'sha256'\nset vpn ipsec ike-group IKE-GROUP key-exchange 'ikev2'\nset vpn ipsec ike-group IKE-GROUP proposal 1 dh-group '14'\nset vpn ipsec ike-group IKE-GROUP proposal 1 encryption 'aes256'\nset vpn ipsec ike-group IKE-GROUP proposal 1 hash 'sha256'\nset vpn ipsec interface 'eth0'\nset vpn ipsec site-to-site peer RIGHT authentication mode 'pre-shared-secret'\nset vpn ipsec site-to-site peer RIGHT connection-type 'initiate'\nset vpn ipsec site-to-site peer RIGHT default-esp-group 'ESP-GROUP'\nset vpn ipsec site-to-site peer RIGHT ike-group 'IKE-GROUP'\nset vpn ipsec site-to-site peer RIGHT local-address '{`IP Public Vyos`}'\nset vpn ipsec site-to-site peer RIGHT remote-address {`IP-Remote`}\nset vpn ipsec site-to-site peer RIGHT tunnel 0 local prefix '{`Sunet LAN Vyos`}/24'\nset vpn ipsec site-to-site peer RIGHT tunnel 0 remote prefix '{`Sunet LAN Remote`}/24'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Save and commit"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "commit\nsave\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-strongswan",
        children: " Previous Cấu hình VPN Site-to-Site với strongSwan "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-checkpoint-r8120",
        children: " Next Cấu hình VPN Site-to-Site với CheckPoint R81.20 "
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

/***/ 605665
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0d6c87392d11-photo_1_2025-07-09_17-35-17-971ab346a7e0b9ec37806cbe5b9434a2.jpg");

/***/ },

/***/ 389472
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4270f2cfc258-photo_2_2025-07-09_17-35-17-b00da172b0aa26266279da7e22986bcc.jpg");

/***/ },

/***/ 742601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5faf2dd4778d-photo_3_2025-07-09_17-35-17-338f2cac394f135c8ac31b188eaea8b9.jpg");

/***/ },

/***/ 49742
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0fc7b8179c0-Screenshot-2025-08-18-110311-8-b7908f9a3249dc92db72fb596e4aab62.png");

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