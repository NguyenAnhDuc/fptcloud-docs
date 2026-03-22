"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[16167],{

/***/ 602105
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engine_t_o_floating_ip_md_acf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engine-t-o-floating-ip-md-acf.json
const site_docs_managed_fpt_database_engine_t_o_floating_ip_md_acf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engine/t-o-floating-ip","title":"2. Managed – FPT Database Engine","description":"Tạo Floating IP","source":"@site/docs/managed-fpt-database-engine/t-o-floating-ip.md","sourceDirName":"managed-fpt-database-engine","slug":"/managed-fpt-database-engine/t-o-floating-ip","permalink":"/managed-fpt-database-engine/t-o-floating-ip","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"T o floating ip","title":"2. Managed – FPT Database Engine","source":"https://fptcloud.com/documents/managed-fpt-database-engine/?doc=tạo-floating-IP","parent":"https://fptcloud.com/documents/managed-fpt-database-engine","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Roles","permalink":"/managed-fpt-database-engine/roles"},"next":{"title":"T o subnets","permalink":"/managed-fpt-database-engine/t-o-subnets"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engine/t-o-floating-ip.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'T o floating ip',
	title: '2. Managed – FPT Database Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engine/?doc=tạo-floating-IP',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engine',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engine';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "2-managed--fpt-database-engine",
        children: "2. Managed – FPT Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo Floating IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " được dùng để lưu giữ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IP Public"
      }), " và điều hướng truy cập từ internet vào máy ảo. Để máy ảo có thể truy cập được từ ngoài internet, bạn cần gắn một Floating IP cho nó. Nếu không còn nhu cầu hoặc muốn thay đổi endpoint, bạn có thể chuyển hướng Floating IP sang máy ảo khác cùng VPC với 1 vài thao tác đơn giản."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 1: Tạo Floating IP từ cụm Database:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Menu > Database Platform > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational Database/ Non-Relational Database/ Search Engines/ Data Streaming/ Time Series Db"
      }), " > chọn một ID Cluster có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(895722)/* ["default"] */ .A) + "",
        width: "602",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Xuất hiện màn hình Database Detail > tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      }), " chọn Instances List > Click vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " có role ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "True."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(255515)/* ["default"] */ .A) + "",
        width: "602",
        height: "415"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Xuất hiện màn hình link từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node Database"
      }), " đến ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " > Tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293537)/* ["default"] */ .A) + "",
        width: "602",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Pop up ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate Floating Ip"
      }), " , người dùng nhập thông tin cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP Address:"
        }), " người dùng chọn địa chỉ phù hợp theo list có sẵn. Trường hợp không có pool khách hàng liên hệ với bộ phận support để được cấp thêm pool."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance:"
        }), " đã đc chọn mặc định tên cụm DB + mã Id Cluster+ tên node"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP Port:"
        }), " nhập thông tin Port của Cụm DB và đc gán ở Security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Port:"
        }), " nhập thông tin port giống vs IP port hoặc thông tin khác dễ nhớ hơn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782828)/* ["default"] */ .A) + "",
        width: "418",
        height: "451"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Sau khi tạo xong Allocate floating IP, sẽ hiển thị thông tin địa chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(447964)/* ["default"] */ .A) + "",
        width: "602",
        height: "101"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Kiểm tra thông tin địa chỉ IP vừa tạo Allocate: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Menu"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IPs"
      }), " > kiểm tra thông tin Ip public có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(778643)/* ["default"] */ .A) + "",
        width: "602",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng không muốn sử dụng Public IP có thể disconnect địa chỉ"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(739566)/* ["default"] */ .A) + "",
        width: "602",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Xuất hiện popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disconnect floating IP:"
      }), " người dùng xác nhận lại thông tin một lần nữa và bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disconnect floating IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(847558)/* ["default"] */ .A) + "",
        width: "485",
        height: "231"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp 2: Tạo Floating IP từ Network không qua cụm Database"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dùng để tạo mới Floating khi người dùng disconnect IP pubic đã tạo hoặc từ cụm Database khi bấm instance không hiển thị Allocate ở Floating IP."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Menu > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating Ips"
      }), " > bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate IP address"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(350986)/* ["default"] */ .A) + "",
        width: "602",
        height: "292"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Pop up Allocate Floating Ip, người dùng nhập thông tin cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP Address:"
        }), " người dùng chọn địa chỉ phù hợp theo list có sẵn. Trường hợp không có pool khách hàng liên hệ với bộ phận support để được cấp thêm pool."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance:"
        }), " người dùng chọn tên cụm Database phù hợp theo list có sẵn"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP Port:"
        }), " nhập thông tin Port của Cụm DB và đc gán ở Security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Port:"
        }), " nhập thông tin port giống vs IP port hoặc thông tin khác dễ nhớ hơn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(580744)/* ["default"] */ .A) + "",
        width: "413",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Kiểm tra thông tin địa chỉ IP vừa tạo Allocate: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Menu"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IPs"
      }), " > kiểm tra thông tin Ip public có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379255)/* ["default"] */ .A) + "",
        width: "602",
        height: "414"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Sau khi tạo xong Allocate floating IP, sẽ hiển thị thông tin địa chỉ Floating IP tại cụm Database:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402510)/* ["default"] */ .A) + "",
        width: "602",
        height: "99"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sau khi có địa chỉ Floating IP người dùng lấy địa chỉ IP này để kết nối Database."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-security-groups",
        children: " Previous Tạo Security Groups "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./t%E1%BA%A1o-subnets",
        children: " Next Tạo Subnets "
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

/***/ 782828
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0745ca343bf5-b4-cua-6.2-cbbd08451af967c16f78575255c5f45b.png");

/***/ },

/***/ 293537
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c5d58f3772f-b3cua-6.2-63f04e40bd7705d20e8a75b56d0b7d43.png");

/***/ },

/***/ 350986
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/23686fb5ee6d-TH2_B1-_6.2-c21cba47e2cd119a1bad12e077bfacc5.png");

/***/ },

/***/ 379255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3a398f5dc8b6-Th2_b3_6.2-482e075b48c5af448f6e80ad4bac5c3d.png");

/***/ },

/***/ 895722
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6e953999f564-b1-cua-6.2-c3b9c01de3ff2afa1b3435b215c21b53.png");

/***/ },

/***/ 739566
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/72332857ea94-b6_2-cua-6.2-5e503edc52b5554cd1d6f080aae1613c.png");

/***/ },

/***/ 402510
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/870228002d7f-TH2_B4_6.2-e14bcb7a23fae633be3ee6738df958e6.png");

/***/ },

/***/ 447964
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/92407761ecff-B5-cua-6.2-84199ab4af5195d84f188d0faf986d12.png");

/***/ },

/***/ 778643
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d37cc8dc2de6-b6_1-cua-6.2-56ec067594a88457b8628075e554838f.png");

/***/ },

/***/ 255515
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ecd9ba9c1e26-b2-cua-6.2-0faa1cc7becca89e4cd22fac004b761b.png");

/***/ },

/***/ 847558
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f12724754863-b6_3-cua-6.2-7238d55f6a6a2cce15c22bf3ccbd4887.png");

/***/ },

/***/ 580744
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f5b99a2157f9-TH2_B2_6.2-db593c3602f7053b28561716f07bed8a.png");

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