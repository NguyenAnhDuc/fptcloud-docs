"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[99515],{

/***/ 223342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_devices_connect_fci_fortigate_md_0ec_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-devices-connect-fci-fortigate-md-0ec.json
const site_docs_vpn_site_to_site_0_connect_devices_connect_fci_fortigate_md_0ec_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-devices/connect-fci-fortigate","title":"Cấu hình VPN Site-to-Site với Fortigate","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-devices/connect-fci-fortigate.md","sourceDirName":"vpn-site-to-site-0/connect-devices","slug":"/vpn-site-to-site-0/connect-devices/connect-fci-fortigate","permalink":"/vpn-site-to-site-0/connect-devices/connect-fci-fortigate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình VPN Site-to-Site với Fortigate","title":"Cấu hình VPN Site-to-Site với Fortigate","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-fortigate","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)","permalink":"/vpn-site-to-site-0/connect-devices/connect-fci-aws-virtualgw"},"next":{"title":"Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware","permalink":"/vpn-site-to-site-0/connect-devices/connect-fci-vmware"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-devices/connect-fci-fortigate.md


const frontMatter = {
	sidebar_label: 'Cấu hình VPN Site-to-Site với Fortigate',
	title: 'Cấu hình VPN Site-to-Site với Fortigate',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-fortigate',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với Fortigate';

const assets = {

};



const toc = [{
  "value": "Bước 1: Cấu hình cho VPN Site-to-Site",
  "id": "bước-1-cấu-hình-cho-vpn-site-to-site",
  "level": 2
}, {
  "value": "Bước 2: Cấu hình IPsec cho Fortigate",
  "id": "bước-2-cấu-hình-ipsec-cho-fortigate",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình firewall và routing cho Fortigate",
  "id": "bước-3-cấu-hình-firewall-và-routing-cho-fortigate",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "cấu-hình-vpn-site-to-site-với-fortigate",
        children: "Cấu hình VPN Site-to-Site với Fortigate"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN Site-to-Site của FPT Smart Cloud."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Cấu hình cho VPN Site-to-Site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình IPsec cho Fortigate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Cấu hình firewall và routing cho Fortigate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPN Site-to-Site trên trang Portal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fortigate đã được cài đặt và enable, active license ở phía khách hàng."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fortigate đã được cài đặt và có IP LAN WAN."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-cấu-hình-cho-vpn-site-to-site",
      children: "Bước 1: Cấu hình cho VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site To Site trên trang ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Tạo Customer Gateway:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Remote private network: dãy Lan Subnet cần peering Fortigate"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Remote IP public: IP public của Fortigate"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998166)/* ["default"] */ .A) + "",
        width: "918",
        height: "612"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Tạo VPN Connection:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Với thông số ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Pre-shared key\""
      }), " cần lưu lại để điền vào Fortigate"]
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(244187)/* ["default"] */ .A) + "",
        width: "941",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(375397)/* ["default"] */ .A) + "",
        width: "995",
        height: "563"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi quý khách hàng lựa chọn Providers “Fortigate”,hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IKE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes-256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IKE version: ikev2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime units: seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime value: 28800"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DH Group: GROUP_14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phase1 negotiation mode: main"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IPsec:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulation mode: tunnel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes-256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime units: seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime value: 3600"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect forward secrecy (PFS): GROUP_14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform protocol: esp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401626)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-ipsec-cho-fortigate",
      children: "Bước 2: Cấu hình IPsec cho Fortigate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Đăng nhập web vào Fortigate khách hàng: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(319970)/* ["default"] */ .A) + "",
        width: "911",
        height: "295"
      }), " - Chọn IPsec Wizard: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(897169)/* ["default"] */ .A) + "",
        width: "1654",
        height: "838"
      }), " - Chọn IPsec Tunnels:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP Address là IP của FPT đã tạo ở bước 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["+ Interface là WAN, trong trường hợp có nhiều WAN thì xác định WAN bạn cần. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(469449)/* ["default"] */ .A) + "",
        width: "1535",
        height: "837"
      }), " Kiểm tra trạng thái của connection bên portal của FPT Smart Cloud ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(926712)/* ["default"] */ .A) + "",
        width: "1287",
        height: "491"
      }), " - Bật Local Gateway và chọn Primary IP ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(278307)/* ["default"] */ .A) + "",
        width: "1574",
        height: "840"
      }), " - Bật Method là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-shared Key"
      }), " và điền vào giống với thông số ở Bước 1: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(959579)/* ["default"] */ .A) + "",
        width: "1271",
        height: "462"
      }), " Lưu ý: Mô hình của khách có thể sử dụng sau NAT, trong trường hợp dùng NAT thì cấu hình như sau+ Liên hệ L3-FCI để được support ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(996686)/* ["default"] */ .A) + "",
        width: "1574",
        height: "840"
      }), " - Cấu hình Phase 1 như sau: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(408092)/* ["default"] */ .A) + "",
        width: "788",
        height: "501"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu khách không dùng NAT thì phải disabled NAT mode."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Cấu hình Phase 2 như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["+ Local IP là dãy network khách hàng cần kết nối ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(181071)/* ["default"] */ .A) + "",
        width: "777",
        height: "437"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-cấu-hình-firewall-và-routing-cho-fortigate",
      children: "Bước 3: Cấu hình firewall và routing cho Fortigate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set firewall Allowed All cả incoming và outcoming như 2 hình dưới đây:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Tạo từ FPT Cloud tới Fortigate:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(397351)/* ["default"] */ .A) + "",
        width: "1641",
        height: "686"
      }), " - Tiếp tục tạo từ Fortigate về FPT Cloud: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(196237)/* ["default"] */ .A) + "",
        width: "1545",
        height: "687"
      }), " - Hoàn thành kết nối giữa FPT Cloud và Fortigate: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(195129)/* ["default"] */ .A) + "",
        width: "1655",
        height: "677"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set routing như hình dưới với ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Destination"
        }), " là dãy Network ở phía của FPT(FCI- 172.30.205.0/255.255.255.0), Interface là \" IPsec Tunnel\" mà ta đã tạo ở bước bên trên. ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(834085)/* ["default"] */ .A) + "",
          width: "942",
          height: "490"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tới đây bạn đã có thể thử mở Terminal - Command line để thử Ping thông mạng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-vmware",
        children: " Previous Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-behind-nat",
        children: " Next Cấu hình VPN Site-to-Site với các thiết bị NAT IP "
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

/***/ 926712
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1153c0da0de2-image-1744193984133-7b12bae4a21fb21c565b19319d8ba277.png");

/***/ },

/***/ 401626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2300da0ecc59-Screenshot-2025-08-18-110311-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 897169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2791ca43aeb1-image-1744193947980-e0b9c816e2fef3cd79bd2337f8cc7477.png");

/***/ },

/***/ 996686
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2ab357380f4c-image-1744194012256-a070a5702f06eb371f4decac1d038290.png");

/***/ },

/***/ 375397
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3519ef8eedea-image-1757055954440-cfe6646a57a02c7770083b847911af6e.png");

/***/ },

/***/ 319970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35f5c8ce5b73-image-1744193935450-541c27aeae9ce1b21515423daa4d2a52.png");

/***/ },

/***/ 195129
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/379a371ebed6-image-1744194081090-b9ee9d35bb55c22d39ef1bbd01e5df9b.png");

/***/ },

/***/ 998166
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3a5135c3705e-photo_1_2025-07-09_17-37-35-9812bb03ebba18a5ed7b3777ac8f4e6d.jpg");

/***/ },

/***/ 408092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/41a8e0ca5c8c-image-1744194042329-0d454ada51cdeb13058f428e58e842cb.png");

/***/ },

/***/ 834085
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/826d8df0a23b-image-1744194099241-6b1c6bc77197995bf70ead8b4586f547.png");

/***/ },

/***/ 181071
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c1ac80345c4-image-1744194053329-d9403297dfd4d0f03b3ad11b69481cc0.png");

/***/ },

/***/ 196237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b71079458eb8-image-1744194072242-8c6544678ee06c5b505e672ef1986278.png");

/***/ },

/***/ 278307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b814a80228e4-image-1744193993723-a070a5702f06eb371f4decac1d038290.png");

/***/ },

/***/ 959579
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b890d7b8a53a-image-1744194001749-23c7b799939617e5f861bc427c37d2d5.png");

/***/ },

/***/ 397351
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cc3001df9025-image-1744194062973-44bc9441911ea0d54efd92a714575d24.png");

/***/ },

/***/ 469449
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d0b0043dfcb4-image-1744193964825-bb0dc284949db651dc8fed750fa0129c.png");

/***/ },

/***/ 244187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f1f6f4940890-photo_2_2025-07-09_17-37-35-2fc66728116f1bb9326d6333fb001b6f.jpg");

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