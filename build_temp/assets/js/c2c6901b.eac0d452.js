"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[51509],{

/***/ 197044
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_palo_alto_md_c2c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-palo-alto-md-c2c.json
const site_docs_vpn_site_to_site_0_connect_palo_alto_md_c2c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-palo-alto","title":"Cấu hình VPN Site-to-Site với Palo Alto","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-palo-alto.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/connect-palo-alto","permalink":"/vpn-site-to-site-0/connect-palo-alto","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình VPN Site-to-Site với Palo Alto","title":"Cấu hình VPN Site-to-Site với Palo Alto","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-palo-alto","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware","permalink":"/vpn-site-to-site-0/connect-fci-vmware"},"next":{"title":"Cấu hình VPN Site-to-Site với PfSense","permalink":"/vpn-site-to-site-0/connect-pfsense"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-palo-alto.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình VPN Site-to-Site với Palo Alto',
	title: 'Cấu hình VPN Site-to-Site với Palo Alto',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-palo-alto',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với Palo Alto';

const assets = {

};



const toc = [{
  "value": "Bước 1: Cấu hình cho VPN Site-to-Site",
  "id": "bước-1-cấu-hình-cho-vpn-site-to-site",
  "level": 2
}, {
  "value": "Bước 2: Cấu hình IPsec cho Palo Alto",
  "id": "bước-2-cấu-hình-ipsec-cho-palo-alto",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình firewall và routing cho Palo Alto",
  "id": "bước-3-cấu-hình-firewall-và-routing-cho-palo-alto",
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
        id: "cấu-hình-vpn-site-to-site-với-palo-alto",
        children: "Cấu hình VPN Site-to-Site với Palo Alto"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Cấu hình cho VPN Site-to-Site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình IPsec cho Palo Alto"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Cấu hình firewall và routing cho Palo Alto"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPN Site-to-Site trên trang Portal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Palo Alto đã được cài đặt và enable ở phía khách hàng."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Palo Alto đã được cài đặt và có 3 IP: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Managenment( IP public)"
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WAN( IP public)"
        }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LAN"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-cấu-hình-cho-vpn-site-to-site",
      children: "Bước 1: Cấu hình cho VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site-to-Site trên trang ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "- Tạo Customer Gateway:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote private network: dãy Lan Subnet cần peering Palo Alto"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remote IP public: IP public của Palo Alto", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(810268)/* ["default"] */ .A) + "",
          width: "763",
          height: "514"
        })]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: General information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(540430)/* ["default"] */ .A) + "",
        width: "770",
        height: "462"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Thông số Pre-shared-key cần lưu lại để kết nối với Palo Alto"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(350212)/* ["default"] */ .A) + "",
        width: "771",
        height: "464"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi quý khách hàng lựa chọn Providers “Palo Alto”, hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Remote VPN information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(152566)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-ipsec-cho-palo-alto",
      children: "Bước 2: Cấu hình IPsec cho Palo Alto"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Đăng nhập web vào Palo Alto khách hàng theo IP Management: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(557829)/* ["default"] */ .A) + "",
        width: "1913",
        height: "980"
      }), " - Chọn Add và kích hoạt Zone của Palo Alto ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(504769)/* ["default"] */ .A) + "",
        width: "1258",
        height: "970"
      }), " - Tạo Virtual Router của Palo Alto và chọn OK. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(508223)/* ["default"] */ .A) + "",
        width: "1369",
        height: "979"
      }), " - Tạo ra interface WAN là LAN, (lưu ý làm cho ethernet1/1 và tương tự cho ethernet 1/2)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(240848)/* ["default"] */ .A) + "",
        width: "932",
        height: "765"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(177462)/* ["default"] */ .A) + "",
        width: "923",
        height: "704"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(887574)/* ["default"] */ .A) + "",
        width: "942",
        height: "684"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(292951)/* ["default"] */ .A) + "",
        width: "1028",
        height: "710"
      }), " - Tạo ra IKE Crypto: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(547693)/* ["default"] */ .A) + "",
        width: "998",
        height: "793"
      }), " - Tạo ra IPSec Crypto: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(597303)/* ["default"] */ .A) + "",
        width: "1001",
        height: "601"
      }), " - Chọn IPsec Tunnels:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại tab General, điền Peer Address là IP của FPT đã tạo ở bước 1(trong hình là 103.176.147.48) ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(61317)/* ["default"] */ .A) + "",
          width: "786",
          height: "653"
        }), " +Tại tab Advanced Options điền các thông tin sau: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(783071)/* ["default"] */ .A) + "",
          width: "786",
          height: "546"
        }), " - Tạo ra GlobalProtect IPSec: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(75035)/* ["default"] */ .A) + "",
          width: "987",
          height: "605"
        }), " - Tạo ra IPSec Tunnels: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(956162)/* ["default"] */ .A) + "",
          width: "990",
          height: "618"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(411718)/* ["default"] */ .A) + "",
          width: "991",
          height: "606"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(16641)/* ["default"] */ .A) + "",
          width: "1293",
          height: "538"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-cấu-hình-firewall-và-routing-cho-palo-alto",
      children: "Bước 3: Cấu hình firewall và routing cho Palo Alto"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để cấu hình firewall và routing cho Palo Alto, thao tác theo các bước ở ví dụ dưới đây:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Mở firewall bất kỳ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tuỳ theo từng khách hàng mà mở source và destination theo rule ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(795029)/* ["default"] */ .A) + "",
        width: "1270",
        height: "489"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(47814)/* ["default"] */ .A) + "",
        width: "1274",
        height: "533"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(703506)/* ["default"] */ .A) + "",
        width: "1293",
        height: "538"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Mở Routing theo 2 subnet là 30.30.30.0/24 và 80.80.80/24 (tùy theo khách hàng mà mở source và destination theo rule). ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(153187)/* ["default"] */ .A) + "",
        width: "1340",
        height: "762"
      }), " Tới đây khách hàng đã có thể mở Terminal - Command line để thử Ping thông mạng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./common-config",
        children: " Previous Cấu hình thiết bị VPN phổ biến "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-pfsense",
        children: " Next Cấu hình VPN Site-to-Site với PfSense "
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

/***/ 153187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0030c70b2826-image-1744194487401-66e96abe5e2f07472a9ac1cba34aa08d.png");

/***/ },

/***/ 508223
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06f7f0cda7fe-image-1744194248910-5dc5ddcddd50579ad43f16e009cd3375.png");

/***/ },

/***/ 703506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/09f9447b6681-image-1744194478669-e9112b603633807af0c098622ce829be.png");

/***/ },

/***/ 956162
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/175f8eb55a84-image-1744194345834-ef2e6c339b22c9619c4fb2403b2f2c96.png");

/***/ },

/***/ 152566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/33d5df0169ee-Screenshot-2025-08-18-110311-14-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 783071
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/443aff9d9fbb-image-1744194330142-1fa8fddc22a0f37d7c9a2319c86c1b2a.png");

/***/ },

/***/ 47814
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4fadaad6a420-image-1744194396699-5dd88b29cfda1222ea284b972e009cf3.png");

/***/ },

/***/ 411718
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6e262c62af7b-image-1744194370901-9ec0b1ed9a7b32e2457028eb71d2d139.png");

/***/ },

/***/ 795029
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7a2a54718f3a-image-1744194387472-530eabece35576868a11d1566e287727.png");

/***/ },

/***/ 16641
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8d78429e7743-image-1744194404210-e9112b603633807af0c098622ce829be.png");

/***/ },

/***/ 350212
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8e9693a4da00-photo_3_2025-07-09_17-34-04-3514e36811381427cda8640406f598db.jpg");

/***/ },

/***/ 557829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9da590d203ac-image-1744194232470-0c4a6575545c9f71ce39165876e3ef6a.png");

/***/ },

/***/ 61317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/af6f827c3860-image-1744194319286-3de44e38ce7ac9f7ca450624c6b3b075.png");

/***/ },

/***/ 75035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aff2c542eba1-image-1744194338236-6c071e123ef70f8e349c142eef5b1b85.png");

/***/ },

/***/ 540430
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b95358726aab-photo_2_2025-07-09_17-34-04-e3c1141968205663ad5ebd7f30f5f6e8.jpg");

/***/ },

/***/ 597303
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c9d4bb7e41f8-image-1744194310783-dd76b91d9bdfa991ac067925b849262f.png");

/***/ },

/***/ 887574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d308345746e0-image-1744194276204-497d5108846678b5cf5f0f507e1a3257.png");

/***/ },

/***/ 504769
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d40062055074-image-1744194240732-cfb4022f35ffc173ec1c03bf9199564a.png");

/***/ },

/***/ 177462
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d59065a83fea-image-1744194266348-69937d1f84b5b9af6b0ddf2b7a627cb3.png");

/***/ },

/***/ 547693
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e16f558fef0e-image-1744194301359-b11087d8ee91b28e53edb322b6094059.png");

/***/ },

/***/ 240848
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e445a49af58a-image-1744194257003-ad73d0779829f652cf5f64a8e006ab95.png");

/***/ },

/***/ 810268
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/eb79dd6dd9e9-photo_1_2025-07-09_17-34-04-f5dd0ca8222508d9f28fce2ca9a2013c.jpg");

/***/ },

/***/ 292951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f4e7ca1b58f7-image-1744194290319-182212f2dd7476d6a41afc881780a810.png");

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