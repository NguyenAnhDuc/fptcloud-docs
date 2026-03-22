"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45428],{

/***/ 759980
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_devices_connect_fci_vmware_md_55a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-devices-connect-fci-vmware-md-55a.json
const site_docs_vpn_site_to_site_0_connect_devices_connect_fci_vmware_md_55a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-devices/connect-fci-vmware","title":"Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-devices/connect-fci-vmware.md","sourceDirName":"vpn-site-to-site-0/connect-devices","slug":"/vpn-site-to-site-0/connect-devices/connect-fci-vmware","permalink":"/vpn-site-to-site-0/connect-devices/connect-fci-vmware","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware","title":"Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-vmware","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình VPN Site-to-Site với Fortigate","permalink":"/vpn-site-to-site-0/connect-devices/connect-fci-fortigate"},"next":{"title":"Cấu hình VPN Site-to-Site với Palo Alto","permalink":"/vpn-site-to-site-0/connect-devices/connect-palo-alto"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-devices/connect-fci-vmware.md


const frontMatter = {
	sidebar_label: 'Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware',
	title: 'Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-vmware',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware';

const assets = {

};



const toc = [{
  "value": "Bước 1: Cấu hình VPN_AAS trên Openstack",
  "id": "bước-1-cấu-hình-vpn_aas-trên-openstack",
  "level": 2
}, {
  "value": "Bước 2: Cấu hình VPN_AAS trên VMWare Cloud",
  "id": "bước-2-cấu-hình-vpn_aas-trên-vmware-cloud",
  "level": 2
}, {
  "value": "Bước 3: Kiểm tra kết nối",
  "id": "bước-3-kiểm-tra-kết-nối",
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
        id: "cấu-hình-kết-nối-vpn-site-to-site-giữa-portal-openstack-và-vmware",
        children: "Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng VMW và OPS trên Unify portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Cấu hình VPN_AAS trên Openstack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình VPN_AAS trên VMWare Cloud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Kiểm tra kết nối"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPNAAS OPS trên trang Portal Unify"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VMWare Cloud"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong ví dụ này chúng ta sẽ tạo kết nối VPN site-to-site với các thông số như trong topology bên dưới. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(960807)/* ["default"] */ .A) + "",
        width: "1344",
        height: "586"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-cấu-hình-vpn_aas-trên-openstack",
      children: "Bước 1: Cấu hình VPN_AAS trên Openstack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site To Site trên ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "https://console.fptcloud.com"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Tạo Customer Gateway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+ Remote IP public: là floating IP của VPN gateway VMW**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+ Remote private network: là dãy Lan Subnet cần peering của VMW**"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973166)/* ["default"] */ .A) + "",
        width: "926",
        height: "212"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Tạo VPN Connection", (0,jsx_runtime.jsx)(_components.br, {}), "\nVới thông số ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Pre-shared key\" cần lưu lại để điền khi khởi tạo VPN Connection bên VMW."
      })]
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
        src: (__webpack_require__(863491)/* ["default"] */ .A) + "",
        width: "925",
        height: "173"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(180041)/* ["default"] */ .A) + "",
        width: "933",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quý khách hàng lựa chọn Providers = “others\" sau đó làm theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bước 1: Điền providers name = \"VMWare\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Đối với IKE:"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Encryption algorithm: aes-256"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Authorization algorithm: sha256"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IKE version: ikev2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Lifetime units: seconds"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Lifetime value: 28800"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DH Group: GROUP_14"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phase1 negotiation mode: main"
        }), "\n"]
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
        src: (__webpack_require__(587402)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-vpn_aas-trên-vmware-cloud",
      children: "Bước 2: Cấu hình VPN_AAS trên VMWare Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Truy cập hệ thống VMware để set up thông tin kết nối VPN Site to Site. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(29312)/* ["default"] */ .A) + "",
        width: "1437",
        height: "661"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "-"
      }), " Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Peer Authentication,"
      }), " với thông số ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-shared key,"
      }), " nhập key đã đã tạo ở OSP, sau đó ấn Next. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(532062)/* ["default"] */ .A) + "",
        width: "1026",
        height: "635"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập các trường thông tin của ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint Configuration"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(776605)/* ["default"] */ .A) + "",
            width: "1016",
            height: "635"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sau khi tạo, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Customize Security Profile"
          }), " để sửa lại thông tin IKE policy, IPSec policy ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "khớp với IKE policy, IPSec policy đã tạo ở OSP"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(44178)/* ["default"] */ .A) + "",
            width: "741",
            height: "821"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "-"
          }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "View statistics"
          }), " , để kiểm tra trạng thái kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\nNếu trạng thái hiển thị là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "UP"
          }), " → đã connect thành công giữa 2 sites. ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(418796)/* ["default"] */ .A) + "",
            width: "733",
            height: "827"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(404247)/* ["default"] */ .A) + "",
            width: "1414",
            height: "459"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-kiểm-tra-kết-nối",
      children: "Bước 3: Kiểm tra kết nối"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ping từ VM OPS -> VM VMWare ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(245449)/* ["default"] */ .A) + "",
          width: "777",
          height: "652"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ping từ VM VMWare-> VM OSP ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(719539)/* ["default"] */ .A) + "",
          width: "826",
          height: "582"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-aws-virtualgw",
        children: " Previous Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-fortigate",
        children: " Next Cấu hình VPN Site-to-Site với Fortigate "
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

/***/ 532062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/21260a997bdc-image-1744187368445-8712b6c3ad4809ef01cf635c4bcd3109.png");

/***/ },

/***/ 245449
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2d623cf17d1d-image-1744187482688-8ac82a92fb6f5a1b47195d5368467626.png");

/***/ },

/***/ 404247
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3206ec31d53d-image-1744187435352-1be97da0ca97788dff7eee23c58c6658.png");

/***/ },

/***/ 973166
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46c848d8f99d-photo_1_2025-07-09_17-37-17-2f9b1116180bb37a41983abdc1565602.jpg");

/***/ },

/***/ 719539
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5bc3e11833b6-image-1744187497120-377c91ee27e767babc5dfde4bd3abd0e.png");

/***/ },

/***/ 863491
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85fbfff3c24b-photo_2_2025-07-09_17-37-17-8610e1c3581e8bd41a6cd2d96277ea54.jpg");

/***/ },

/***/ 418796
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91d113cee0e7-image-1744187423506-0ccd7cf43d1f4243d44315e035d25d35.png");

/***/ },

/***/ 44178
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/947bda1b9da1-image-1744187411562-1e3a2a8bf205717c64ee4dc321ca6fae.png");

/***/ },

/***/ 29312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a443e4570e6a-image-1744187357567-ab40d177f03cbc44150ec11c89abcfb4.png");

/***/ },

/***/ 776605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c3f680db6cdf-image-1744187391395-c379f0a641fdd8cdf535238f033b1f5f.png");

/***/ },

/***/ 587402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d443cc15679b-Screenshot-2025-08-18-110311-1-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 960807
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef1c7215455b-image-1744186989019-4edf5c4faf56e3dad2fe02b146a804b6.png");

/***/ },

/***/ 180041
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fc829da9e072-photo_3_2025-07-09_17-37-17-ee6f8368d33e076146e8e725b5f242ab.jpg");

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