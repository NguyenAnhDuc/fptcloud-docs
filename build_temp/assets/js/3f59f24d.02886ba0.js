"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[29666],{

/***/ 914770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_advanced_mount_bucket_thanh_o_dia_tren_may_local_md_3f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-advanced-mount-bucket-thanh-o-dia-tren-may-local-md-3f5.json
const site_docs_object_storage_advanced_mount_bucket_thanh_o_dia_tren_may_local_md_3f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/advanced/mount-bucket-thanh-o-dia-tren-may-local","title":"2. FPT Object Storage","description":"Mount bucket thành ổ đĩa trên máy local","source":"@site/docs/object-storage/advanced/mount-bucket-thanh-o-dia-tren-may-local.md","sourceDirName":"object-storage/advanced","slug":"/object-storage/advanced/mount-bucket-thanh-o-dia-tren-may-local","permalink":"/object-storage/advanced/mount-bucket-thanh-o-dia-tren-may-local","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Mount Bucket Thanh O Dia Tren May Local","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=mount-bucket-thanh-o-dia-tren-may-local","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Migrate Bucket Data","permalink":"/object-storage/advanced/migrate-bucket-data"},"next":{"title":"Phan Quyen Su Dung Bucket Cho Cac Subuser","permalink":"/object-storage/advanced/phan-quyen-su-dung-bucket-cho-cac-subuser"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/advanced/mount-bucket-thanh-o-dia-tren-may-local.md


const frontMatter = {
	sidebar_label: 'Mount Bucket Thanh O Dia Tren May Local',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=mount-bucket-thanh-o-dia-tren-may-local',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Mount bucket với Windows",
  "id": "mount-bucket-với-windows",
  "level": 2
}, {
  "value": "Mount bucket với Linux",
  "id": "mount-bucket-với-linux",
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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mount bucket thành ổ đĩa trên máy local"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mount-bucket-với-windows",
      children: "Mount bucket với Windows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ngoài trường hợp sử dụng qua ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " chúng ta có thể sử dụng trực tiếp S3 bucket trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " như một ổ đĩa của máy tính sử dụng hệ điều hành Windows thông qua công cụ TntDrive qua các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập và tiến hành download công tụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TntDrive."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TntDrive"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accounts"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add new account."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 55",
        src: (__webpack_require__(108942)/* ["default"] */ .A) + "",
        width: "586",
        height: "443"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập các thông tin tương tự khi sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 56",
        src: (__webpack_require__(498601)/* ["default"] */ .A) + "",
        width: "720",
        height: "690"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Khách hàng sau khi đã nhập thông tin account trong công cụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TntDrive"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New Mapped Drive"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 57",
        src: (__webpack_require__(50214)/* ["default"] */ .A) + "",
        width: "586",
        height: "443"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Chọn các thông tin như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage account:"
        }), " Chọn tên account vừa thêm."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon S3 Bucket:"
        }), " Chọn bucket muốn mount.Bạn có thể nhập trực tiếp tên hoặc chọn icon để chọn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapped drive letter:"
        }), " Chọn tên ổ đĩa để map với bucket.", (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 58",
          src: (__webpack_require__(111756)/* ["default"] */ .A) + "",
          width: "684",
          height: "464"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add new drive"
      }), ". Lúc này ở giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TntDrive"
      }), " sẽ hiển thị trạng thái ổ đĩa đã mount"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 59",
        src: (__webpack_require__(830647)/* ["default"] */ .A) + "",
        width: "586",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể kiểm tra trong File Explorer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 60",
        src: (__webpack_require__(635915)/* ["default"] */ .A) + "",
        width: "1024",
        height: "634"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mount-bucket-với-linux",
      children: "Mount bucket với Linux"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong hướng dẫn này sẽ hướng dẫn khách hàng thực hiện mount bucket thông qua hệ điều hành Ubuntu 20.04 thông qua công cụ S3FS."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Cài đặt S3FS."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo apt-get install s3fs\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo file chứa access key và secret key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "echo XRRS541KWS8T9DMDRCFY:gknj5Rpmgifmr4Bc90euHF8GIaZEY7xJD6bVDm7D > s3-password   \nchmod 600 s3-password \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 61",
        src: (__webpack_require__(151418)/* ["default"] */ .A) + "",
        width: "781",
        height: "78"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tạo thư mục mount."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mkdir /mnt/bucket-01 \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Thực hiện mount với fstab."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "echo bucket-01 /mnt/bucket-01 fuse.s3fs \\_netdev,allow\\_other,passwd\\_file=/root/s3-password,use\\_path\\_request\\_style,nonempty,uid=0,gid=0,use\\_cache=/tmp,dbglevel=info,curldbg,url=https://s3-hfx03.fptcloud.com 0 0 >> /etc/fstab \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 62",
          src: (__webpack_require__(579151)/* ["default"] */ .A) + "",
          width: "622",
          height: "91"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Thực hiện mount bucket"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mount -a \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 63",
          src: (__webpack_require__(791547)/* ["default"] */ .A) + "",
          width: "745",
          height: "62"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xay-dung-mot-website-tinh-bang-fpt-object-storage",
        children: " Previous Xây dựng một website tĩnh bằng FPT Object Storage "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./clone-du-lieu-giua-hai-bucket-khac-nhau",
        children: " Next Clone dữ liệu giữa hai bucket khác nhau "
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

/***/ 50214
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0f158d91b909-User-guide-FPT-Object-Storage-57-8518d4f029c71002bf3eb42bc453b710.png");

/***/ },

/***/ 151418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/10af958f2b2a-User-guide-FPT-Object-Storage-61-d3b75cfd47e002947ddb375665a8ffbc.png");

/***/ },

/***/ 791547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 498601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/57f8f1835e4f-User-guide-FPT-Object-Storage-56-589a496957c1aef5ec3853a2db48511d.png");

/***/ },

/***/ 108942
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7eb6bc1c40fa-User-guide-FPT-Object-Storage-55-5e83f374d8562726ad20790314ae1519.png");

/***/ },

/***/ 830647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8342cb8302e1-User-guide-FPT-Object-Storage-59-537b0c0cb937577591b5c4410c7ffb51.png");

/***/ },

/***/ 635915
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c5d9eea8fd8c-User-guide-FPT-Object-Storage-60-d33bdbf4063472db34bed1466afc8ce1.png");

/***/ },

/***/ 579151
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 111756
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f37e041cf6df-User-guide-FPT-Object-Storage-58-e9524373892190d28fe5238072e96f31.png");

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