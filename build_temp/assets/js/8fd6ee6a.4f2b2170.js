"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[11566],{

/***/ 55622
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fortigate_fpt_ngfw_tao_security_profile_md_8fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fortigate-fpt-ngfw-tao-security-profile-md-8fd.json
const site_docs_fortigate_fpt_ngfw_tao_security_profile_md_8fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fortigate-fpt-ngfw/tao-security-profile","title":"2. Fortigate – FPT NGFW","description":"Tạo Security Profile","source":"@site/docs/fortigate-fpt-ngfw/tao-security-profile.md","sourceDirName":"fortigate-fpt-ngfw","slug":"/fortigate-fpt-ngfw/tao-security-profile","permalink":"/fortigate-fpt-ngfw/tao-security-profile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao security profile","title":"2. Fortigate – FPT NGFW","source":"https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=tao-security-profile","parent":"https://fptcloud.com/documents/fortigate-fpt-ngfw","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao firewall policy","permalink":"/fortigate-fpt-ngfw/tao-firewall-policy"},"next":{"title":"Truy cap giao dien quan tri","permalink":"/fortigate-fpt-ngfw/truy-cap-giao-dien-quan-tri"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fortigate-fpt-ngfw/tao-security-profile.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao security profile',
	title: '2. Fortigate – FPT NGFW',
	source: 'https://fptcloud.com/documents/fortigate-fpt-ngfw/?doc=tao-security-profile',
	parent: 'https://fptcloud.com/documents/fortigate-fpt-ngfw',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Fortigate – FPT NGFW';

const assets = {

};



const toc = [{
  "value": "1. AntiVirus",
  "id": "1-antivirus",
  "level": 2
}, {
  "value": "2. Web Filter",
  "id": "2-web-filter",
  "level": 2
}, {
  "value": "3. Application Control",
  "id": "3-application-control",
  "level": 2
}, {
  "value": "4. Intrusion Prevention – IPS",
  "id": "4-intrusion-prevention--ips",
  "level": 2
}, {
  "value": "5. WebApplication FireWall – WAF",
  "id": "5-webapplication-firewall--waf",
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
        id: "2-fortigate--fpt-ngfw",
        children: "2. Fortigate – FPT NGFW"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Security Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-antivirus",
      children: "1. AntiVirus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Profiles"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AntiVirus."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 13",
        src: (__webpack_require__(65219)/* ["default"] */ .A) + "",
        width: "1024",
        height: "305"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo mới một Profile hoặc có thể dùng Profile có sẵn của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fortigate"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 14",
        src: (__webpack_require__(782087)/* ["default"] */ .A) + "",
        width: "1024",
        height: "663"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nTùy chọn các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Giao Thức Inspected"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Feature"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-web-filter",
      children: "2. Web Filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Profiles"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Filter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 15",
        src: (__webpack_require__(995979)/* ["default"] */ .A) + "",
        width: "1024",
        height: "308"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo mới một Profile hoặc có thể dùng Profile có sẵn của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fortigate."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 16",
        src: (__webpack_require__(472950)/* ["default"] */ .A) + "",
        width: "1024",
        height: "724"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bật ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL Filter"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo profile chỉ cho phép truy cập đến trang web cụ thể, ví dụ fptsmartcloud.com."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            alt: "Userguide Fortigate FPT NGFW 2022 17",
            src: (__webpack_require__(589080)/* ["default"] */ .A) + "",
            width: "1024",
            height: "563"
          }), (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tạo profile chặn tất cả các truy cập còn lại:"
          }), " Sử dụng dạng Regex: [^.] để chặn các trang còn lại."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 18",
        src: (__webpack_require__(621330)/* ["default"] */ .A) + "",
        width: "1024",
        height: "494"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 19",
        src: (__webpack_require__(453811)/* ["default"] */ .A) + "",
        width: "973",
        height: "399"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-application-control",
      children: "3. Application Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Profiles"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application Control."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 20",
        src: (__webpack_require__(561374)/* ["default"] */ .A) + "",
        width: "1024",
        height: "310"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn truy cập các trang mạng xã hội."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 21",
        src: (__webpack_require__(465711)/* ["default"] */ .A) + "",
        width: "1024",
        height: "750"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 22",
        src: (__webpack_require__(15788)/* ["default"] */ .A) + "",
        width: "1024",
        height: "555"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sử dụng các signature có sẵn hoặc tạo mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Application Signature"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 23",
        src: (__webpack_require__(849460)/* ["default"] */ .A) + "",
        width: "1024",
        height: "557"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-intrusion-prevention--ips",
      children: "4. Intrusion Prevention – IPS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Profiles"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intrusion Prevention"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 24",
        src: (__webpack_require__(164935)/* ["default"] */ .A) + "",
        width: "1024",
        height: "309"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn truy cập đến các C&C; server (Botnet)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 25",
        src: (__webpack_require__(55559)/* ["default"] */ .A) + "",
        width: "1024",
        height: "616"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 26",
        src: (__webpack_require__(815403)/* ["default"] */ .A) + "",
        width: "1024",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sử dụng các IPS signature có sẵn hoặc tạo mới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPS Signature and Filter"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create New."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 27",
        src: (__webpack_require__(475384)/* ["default"] */ .A) + "",
        width: "1024",
        height: "601"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-webapplication-firewall--waf",
      children: "5. WebApplication FireWall – WAF"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Profiles"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Application FireWall"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 28",
        src: (__webpack_require__(28755)/* ["default"] */ .A) + "",
        width: "1024",
        height: "309"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo mới một Profile hoặc có thể dùng Profile có sẵn của Fortigate để chặn các cuộc tấn công đến webserver (Sql Injection, Cross Site Scripting)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 29",
        src: (__webpack_require__(752922)/* ["default"] */ .A) + "",
        width: "1024",
        height: "796"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Bật các signatures ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sql Injection"
      }), " (Extended), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross Site"
      }), " (Extended)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide Fortigate FPT NGFW 2022 30",
        src: (__webpack_require__(557125)/* ["default"] */ .A) + "",
        width: "1024",
        height: "533"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-firewall-policy",
        children: " Previous Xóa Firewall Policy "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-system-user-user-profile",
        children: " Next Quản Lý System User – User Profile "
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

/***/ 589080
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/064d7203d191-Userguide-Fortigate-FPT-NGFW-2022-17-1024x563-a04f9debd03d1dddeb1c02cbc1d06647.png");

/***/ },

/***/ 621330
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0730e9d992bc-Userguide-Fortigate-FPT-NGFW-2022-18-1024x494-21baf1301d1c2ed3ddf25c3520fe5a02.png");

/***/ },

/***/ 453811
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/17350cd92512-Userguide-Fortigate-FPT-NGFW-2022-19-644187519ba359fb423d9d92632d151f.png");

/***/ },

/***/ 752922
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2ec3ddddc50a-Userguide-Fortigate-FPT-NGFW-2022-29-1024x796-417e9cd889b100cae53f3df083b58d33.png");

/***/ },

/***/ 28755
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3da9bc27426e-Userguide-Fortigate-FPT-NGFW-2022-28-1024x309-ec256d484846fac2a5190a993cac4d70.png");

/***/ },

/***/ 561374
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4e4f0ebad9ef-Userguide-Fortigate-FPT-NGFW-2022-20-1024x310-d6b4bf561dee569341424275edd397e9.png");

/***/ },

/***/ 15788
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/568d50f42c76-Userguide-Fortigate-FPT-NGFW-2022-22-1024x555-0826c8294f1e32c7b08dbc791b9d9a8c.png");

/***/ },

/***/ 995979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5d2b8463e033-Userguide-Fortigate-FPT-NGFW-2022-15-1024x308-a9de8ca92d5c97462c591636f6a6ea9c.png");

/***/ },

/***/ 472950
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7d7928a3f008-Userguide-Fortigate-FPT-NGFW-2022-16-1024x724-b5f4f186e4427acdf643149467ca623f.png");

/***/ },

/***/ 65219
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/881981db2feb-Userguide-Fortigate-FPT-NGFW-2022-13-1024x305-113ddf07c09e89f6e7b09d19135a73f3.png");

/***/ },

/***/ 849460
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c16436a6beb-Userguide-Fortigate-FPT-NGFW-2022-23-1024x557-36c56cb415ef5d0c15c1faf19364d6b9.png");

/***/ },

/***/ 164935
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a9517010bfce-Userguide-Fortigate-FPT-NGFW-2022-24-1024x309-c5b0acdfd545d0e57d2d9371c7706d3b.png");

/***/ },

/***/ 815403
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c379afe0241a-Userguide-Fortigate-FPT-NGFW-2022-26-1024x598-d979657a93012d96d68207b954f88db1.png");

/***/ },

/***/ 475384
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ccc83cc58fae-Userguide-Fortigate-FPT-NGFW-2022-27-1024x601-fdf72c6fa88558aeb2d654de064f6b40.png");

/***/ },

/***/ 55559
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d20e176d400a-Userguide-Fortigate-FPT-NGFW-2022-25-1024x616-40303836ac49de27aabb6ee94d10ba14.png");

/***/ },

/***/ 782087
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d5b64418497f-Userguide-Fortigate-FPT-NGFW-2022-14-1024x663-785a2fdcb937ac68938e3a07940606ef.png");

/***/ },

/***/ 557125
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dd9edd126856-Userguide-Fortigate-FPT-NGFW-2022-30-1024x533-d23953cba408c81e2110c24bbefa48c1.png");

/***/ },

/***/ 465711
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f6520a679e71-Userguide-Fortigate-FPT-NGFW-2022-21-1024x750-ed1221ae61d103254b2bea55ac6f030d.png");

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