"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[31964],{

/***/ 497732
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_strongswan_md_86d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-strongswan-md-86d.json
const site_docs_vpn_site_to_site_0_connect_strongswan_md_86d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-strongswan","title":"Cấu hình VPN Site-to-Site với strongSwan","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-strongswan.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/connect-strongswan","permalink":"/vpn-site-to-site-0/connect-strongswan","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình VPN Site-to-Site với strongSwan","title":"Cấu hình VPN Site-to-Site với strongSwan","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-strongswan","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình VPN Site-to-Site với PfSense","permalink":"/vpn-site-to-site-0/connect-pfsense"},"next":{"title":"Cấu hình VPN Site-to-Site với Vyos 1.5","permalink":"/vpn-site-to-site-0/connect-vyos-1.5"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-strongswan.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình VPN Site-to-Site với strongSwan',
	title: 'Cấu hình VPN Site-to-Site với strongSwan',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-strongswan',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với strongSwan';

const assets = {

};



const toc = [{
  "value": "Bước 1: Build strongSwan",
  "id": "bước-1-build-strongswan",
  "level": 2
}, {
  "value": "1.2: <strong>Cài đặt strongSwan từ Repo</strong>",
  "id": "12-cài-đặt-strongswan-từ-repo",
  "level": 3
}, {
  "value": "Bước 2: Cấu hình cho VPN Site-to-Site",
  "id": "bước-2-cấu-hình-cho-vpn-site-to-site",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình cho StrongSwan",
  "id": "bước-3-cấu-hình-cho-strongswan",
  "level": 2
}, {
  "value": "Cấu hình StrongSwan VPN",
  "id": "cấu-hình-strongswan-vpn",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "cấu-hình-vpn-site-to-site-với-strongswan",
        children: "Cấu hình VPN Site-to-Site với strongSwan"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-site của FPT Smart Cloud."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Build strongSwan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình cho VPN_AAS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Cấu hình cho StrongSwan"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPNAAS trên trang Portal"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ubuntu 20.04 đã được download và cài đặt : ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "strongSwan 5.9.14"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 VM Pfsense để phục vụ debug (Optional )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-build-strongswan",
      children: "Bước 1: Build strongSwan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*** Lưu ý: Để build strongSwan, chỉ tiến hành chọn cách 1.1 hoặc cách 1.2**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.1: Build strongSwan 5.9.14 from source (tiến tới làm chủ công nghệ)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trên Horizon ta tiến hành tạo VM từ image với các thông số keypair của user và network provider bất kì."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cài đặt các gói sau:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "apt-get update\napt-get install vim git wget traceroute ngrep net-tool gcc g++ libgmp-dev build-essential devscripts debhelper dh-make autoconf automake libtool checkinstall nmap curl\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Download source strongSwan từ link sau:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "wget https://github.com/strongswan/strongswan/releases/download/5.9.14/strongswan-5.9.14.tar.gz\ntar -xzvf strongswan-5.9.14.tar.gz\ncd strongswan-5.9.14/\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiến hành configure và make file cho source code:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "./configure --prefix=/usr --sysconfdir=/etc\nmake\ncheckinstall\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "12-cài-đặt-strongswan-từ-repo",
      children: ["1.2: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cài đặt strongSwan từ Repo"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "apt-get update\napt install strongswan strongswan-pki\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.2: Cài đặt strongSwan từ Repo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "apt-get update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "apt install strongswan strongswan-pki"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-cho-vpn-site-to-site",
      children: "Bước 2: Cấu hình cho VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site To Site trên trang ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "- Tạo Customer Gateway:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+Remote private network: dãy Lan Subnet cần peering của Vyos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+Remote IP public: IP public của Vyos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844225)/* ["default"] */ .A) + "",
        width: "769",
        height: "457"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "- Tạo VPN Connection:"
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
        src: (__webpack_require__(559956)/* ["default"] */ .A) + "",
        width: "769",
        height: "395"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686064)/* ["default"] */ .A) + "",
        width: "777",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quý khách hàng lựa chọn Providers = “others\" sau đó làm theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Điền providers name = \"StrongSwan\""
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
        src: (__webpack_require__(984911)/* ["default"] */ .A) + "",
        width: "784",
        height: "205"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi điền đầy đủ thông tin, quý khách hàng vui lòng chọn “Create VPN Connection”"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-cấu-hình-cho-strongswan",
      children: "Bước 3: Cấu hình cho StrongSwan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Đăng nhập ssh vào Ubuntu theo key đã tạo ở trên"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Đăng nhập ssh theo địa chỉ IP VM đã tạo với user là: \"ubuntu\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-strongswan-vpn",
      children: "Cấu hình StrongSwan VPN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chạy các lệnh sau( thay các tham số vào):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kiểm tra phiên bản strongSwan\nswanctl -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "edit file sau /etc/ipsec.conf với mẫu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "config setup\n        charondebug=\"all\"\n        uniqueids=yes\n\nconn myvpn\n    type=tunnel\n    auto=start\n    keyexchange=ikev2\n    ike=aes256-sha256-modp2048\n    keyingtries=%forever\n    lifetime=3600s\n    dpddelay=30s\n    dpdtimeout=120s\n    dpdaction=restart\n    esp=aes256-sha256-modp2048\n    left=x.x.x.x    //IP của StrongSwan\n    leftsubnet=x.x.x.x/24 //Subnet của StrongSwan\n    leftauth=psk\n    right=x.x.x.x    // IP của đối tác\n    rightsubnet=x.x.x.x/24 //Subnet của đối tác\n    rightauth=psk\n    authby=secret\n    auto=start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edit file sau /etc/ipsec.secret với mẫu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# This file holds shared secrets or RSA private keys for authentication.\nx.x.x.x x.x.x.x : PSK \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\"   // Pre-shared key\n# RSA private key for this host, authenticating it to any other host\n# which knows the public part.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lưu ý:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- StrongSwan là một chương trình chạy nền trên Ubuntu, cần thêm enable multi-network trên CPU để đạt hiệu năng tốt nhất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- StrongSwan là một chương trình chạy nền trên Ubuntu, cần thêm enable firewall và routing để có thể kết nối."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Nếu lab trên Openstack của FCI thì phải add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static route"
      }), " trên router với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destination"
      }), " là IP của đối tác và nexthop là IP LAN của StrongSwan."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-pfsense",
        children: " Previous Cấu hình VPN Site-to-Site với PfSense "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-vyos-1.5",
        children: " Next Cấu hình VPN Site-to-Site với Vyos 1.5 "
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

/***/ 844225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/323838254f83-photo_1_2025-07-09_17-34-57-0ca67f1717e0fa032b805d870739d939.jpg");

/***/ },

/***/ 559956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7b88464a7c5b-photo_2_2025-07-09_17-34-57-d2af5ceced65a437dea1ed0d81530dc9.jpg");

/***/ },

/***/ 984911
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/abef93ff263c-photo_4_2025-07-09_17-34-57-d9aa6573f5ceaf342de99b9c11328947.jpg");

/***/ },

/***/ 686064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1861664f0af-photo_3_2025-07-09_17-34-57-f003f42db36b435a81dd29ac3b075f3a.jpg");

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