"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[26109],{

/***/ 55148
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_clone_du_lieu_giua_hai_bucket_khac_nhau_md_066_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-clone-du-lieu-giua-hai-bucket-khac-nhau-md-066.json
const site_docs_object_storage_clone_du_lieu_giua_hai_bucket_khac_nhau_md_066_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau","title":"2. FPT Object Storage","description":"Clone dữ liệu giữa hai bucket khác nhau","source":"@site/docs/object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau.md","sourceDirName":"object-storage","slug":"/object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau","permalink":"/object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Clone Du Lieu Giua Hai Bucket Khac Nhau","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=clone-du-lieu-giua-hai-bucket-khac-nhau","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Xay Dung Mot Website Tinh Bang Fpt Object Storage","permalink":"/object-storage/use-cases/xay-dung-mot-website-tinh-bang-fpt-object-storage"},"next":{"title":"FPT Object Storage","permalink":"/object-storage/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/clone-du-lieu-giua-hai-bucket-khac-nhau.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Clone Du Lieu Giua Hai Bucket Khac Nhau',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=clone-du-lieu-giua-hai-bucket-khac-nhau',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Clone dữ liệu bucket với Linux",
  "id": "clone-dữ-liệu-bucket-với-linux",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Clone dữ liệu giữa hai bucket khác nhau"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trường hợp chuyển môi trường S3 từ nhà cung cấp khác đến S3 của FPT Smart Cloud hoặc sử dụng song song giữa 2 môi trường S3, chúng ta có thể sử dụng công cụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rclone"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "s3sync"
      }), " để giúp quá trình clone dữ liệu được tiến hành thuận tiện hơn. Đặt trường hợp ta đang sử dụng S3 Site01 và có ý định sẽ chuyển qua S3 Site02 và muốn clone dữ liệu từ bucket ở Site01 qua Site02. Để thực hiện điều này, FPT Smart Cloud hướng dẫn thực hiện trên các hệ điều hành như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clone-dữ-liệu-bucket-với-linux",
      children: "Clone dữ liệu bucket với Linux"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tải và cài đặt công cụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rclone:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo apt-get install rclone\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Để tạo thư mục rclone chứa thông tin Site01 và Site02, tạo file rclone.conf theo đường dẫn ~/.config/rclone/rclone.conf > Edit file rclone.conf với nội dung sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Lưu ý ở mục provider có thể thay đổi tùy theo môi trường S3 sử dụng như AWS,…)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[site01]\n\ntype = s3\n\nprovider = Other\n\nenv\\_auth = false\n\naccess\\_key\\_id = 00d4701ee34ab6a0967b\n\nsecret\\_access\\_key = SevRaN+gCPbIC6VvUjXx74mhHkbg0ZuQTFpmYTsa\n\nendpoint = https://s3-sgn09.fptcloud.com/\n\nacl = private\n\n \n\n[site02]\n\ntype = s3\n\nprovider = Other\n\nenv\\_auth = false\n\naccess\\_key\\_id = XRRS541KWS8T9DMDRCFY\n\nsecret\\_access\\_key = gknj5RPmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D\n\nendpoint = https://s3-hfx03.fptcloud.com/\n\nacl = private\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 64",
          src: (__webpack_require__(487444)/* ["default"] */ .A) + "",
          width: "842",
          height: "305"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại Site02 thực hiện tạo 1 bucket không chứa dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Kiểm tra bucket và dữ liệu ở 2 site thông qua ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rclone."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 65",
          src: (__webpack_require__(681523)/* ["default"] */ .A) + "",
          width: "890",
          height: "180"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Thực hiện clone dữ liệu từ site01:bucket-site01 sang site02:bucket-site02 bằng cách:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* Thực hiện lệnh với option –dry-run để đảm bảo không có error trong qua trình clone.\n\n\nrclone sync -Pv site01:bucket-site01 site02:bucket-site02 –dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 66",
          src: (__webpack_require__(913832)/* ["default"] */ .A) + "",
          width: "768",
          height: "282"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi chạy lệnh với option –dry-run không xuất hiện error > thực hiện chạy lệnh bỏ option –dry-run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "rclone sync -Pv site01:bucket-site01 site02:bucket-site02\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 67",
          src: (__webpack_require__(200019)/* ["default"] */ .A) + "",
          width: "715",
          height: "278"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi thực hiện thành công, khách hàng có thể kiểm tra lại dữ liệu và bucket ở 2 site thông qua rclone."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 68",
          src: (__webpack_require__(705273)/* ["default"] */ .A) + "",
          width: "570",
          height: "214"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./mount-bucket-thanh-o-dia-tren-may-local",
        children: " Previous Mount bucket thành ổ đĩa trên máy local "
      })
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

/***/ 705273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/50fda7a1fb5c-User-guide-FPT-Object-Storage-68-7e4e47dc202a7e3f84b2fc4ae9a3ddd0.png");

/***/ },

/***/ 681523
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b14d85c8ecda-User-guide-FPT-Object-Storage-65-6bf8e3296f1177edb63b153413ee06c1.png");

/***/ },

/***/ 487444
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c2814219e812-User-guide-FPT-Object-Storage-64-c1172e0557fc7bff71f18dd4ee994a41.png");

/***/ },

/***/ 200019
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c8f6524dbaa4-User-guide-FPT-Object-Storage-67-c12459b0f570a8dad05044fdf9b34861.png");

/***/ },

/***/ 913832
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e6bdef85e608-User-guide-FPT-Object-Storage-66-55e3b5900216bc2ea7b4eb946e1e87f6.png");

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