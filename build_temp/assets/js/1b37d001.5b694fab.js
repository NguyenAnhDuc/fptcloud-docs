"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[61753],{

/***/ 136510
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_storage_cau_hinh_o_dia_cho_may_ao_chay_windows_md_1b3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-storage-cau-hinh-o-dia-cho-may-ao-chay-windows-md-1b3.json
const site_docs_cloud_server_storage_cau_hinh_o_dia_cho_may_ao_chay_windows_md_1b3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/storage/cau-hinh-o-dia-cho-may-ao-chay-windows","title":"Cấu hình ổ đĩa cho máy ảo chạy Windows","description":"*","source":"@site/docs/cloud-server/storage/cau-hinh-o-dia-cho-may-ao-chay-windows.md","sourceDirName":"cloud-server/storage","slug":"/cloud-server/storage/cau-hinh-o-dia-cho-may-ao-chay-windows","permalink":"/cloud-server/storage/cau-hinh-o-dia-cho-may-ao-chay-windows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình ổ đĩa cho máy ảo chạy Windows","title":"Cấu hình ổ đĩa cho máy ảo chạy Windows","source":"https://fptcloud.com/documents/cloud-server/?doc=cau-hinh-o-dia-cho-may-ao-chay-windows","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Block Storage","permalink":"/cloud-server/storage/block-storage"},"next":{"title":"Edit Storage Disk","permalink":"/cloud-server/storage/edit-storage-disk"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/storage/cau-hinh-o-dia-cho-may-ao-chay-windows.md


const frontMatter = {
	sidebar_label: 'Cấu hình ổ đĩa cho máy ảo chạy Windows',
	title: 'Cấu hình ổ đĩa cho máy ảo chạy Windows',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=cau-hinh-o-dia-cho-may-ao-chay-windows',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình ổ đĩa cho máy ảo chạy Windows';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
        id: "cấu-hình-ổ-đĩa-cho-máy-ảo-chạy-windows",
        children: "Cấu hình ổ đĩa cho máy ảo chạy Windows"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage Disk"
      }), " vào máy ảo trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " , với các máy chạy Linux, hệ thống sẽ tự nhận ổ đĩa mới. Với các máy chạy Windows, người dùng cần remote vào máy ảo để tiếp tục cấu hình tạo ổ đĩa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập vào máy ảo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disk Management"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows"
      }), " bằng một trong 2 cách:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bấm tổ hợp phím ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Windows + R"
          }), " , nhập ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "msc"
          }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enter."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Bấm nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start"
          }), " , nhập ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "msc"
          }), " vào ô tìm kiếm, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Disk Management."
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 62",
        src: (__webpack_require__(343908)/* ["default"] */ .A) + "",
        width: "509",
        height: "280"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disk Management"
      }), " sẽ hiển thị toàn bộ ổ cứng trên máy ảo, bao gồm cả ổ cứng vừa được gắn với trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Offline."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 63",
        src: (__webpack_require__(216144)/* ["default"] */ .A) + "",
        width: "961",
        height: "680"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Online"
      }), " trên menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disk"
      }), " bằng cách di chuột phải lên biểu tượng đĩa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 64",
        src: (__webpack_require__(57619)/* ["default"] */ .A) + "",
        width: "956",
        height: "660"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Ổ cứng sẽ chuyển sang trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Online"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Not Initialize"
      }), " , người dùng chuột phải lên biểu tượng đĩa và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initialize Disk"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 65",
        src: (__webpack_require__(160870)/* ["default"] */ .A) + "",
        width: "961",
        height: "661"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Partition style"
      }), " phù hợp và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 66",
        src: (__webpack_require__(29378)/* ["default"] */ .A) + "",
        width: "496",
        height: "377"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Chuột phải lên khi vực trống của ổ cứng và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Simple Volume."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 67",
        src: (__webpack_require__(244812)/* ["default"] */ .A) + "",
        width: "957",
        height: "701"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Simple Volume Wizard"
      }), " vừa hiện lên."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 68",
        src: (__webpack_require__(316439)/* ["default"] */ .A) + "",
        width: "615",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 9:"
      }), " Nhập dung lượng ổ đĩa cần tạo vào ô ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Simple volume size in MB"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 69",
        src: (__webpack_require__(77466)/* ["default"] */ .A) + "",
        width: "615",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 10:"
      }), " Chọn Ký tự ổ đĩa trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assign the following drive letter"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 70",
        src: (__webpack_require__(554000)/* ["default"] */ .A) + "",
        width: "612",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 11:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fomat this volume with the following settings"
      }), " và điền các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File System:"
        }), " Chọn định dạng NTFS để quá trình định dạng được nhanh nhất, bạn cũng có thể chọn type khác nếu muốn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allocation unit size:"
        }), " Chọn Default"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Volume label:"
        }), " Tên cho ổ đĩa."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để sang bước tiếp theo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 71",
        src: (__webpack_require__(834960)/* ["default"] */ .A) + "",
        width: "615",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 12:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finish"
      }), " để kết thúc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 72",
        src: (__webpack_require__(812601)/* ["default"] */ .A) + "",
        width: "615",
        height: "480"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết quả đã cấu hình tạo thành công ổ đĩa mới cho máy ảo chạy Windows từ ổ cứng gắn thêm."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 73",
        src: (__webpack_require__(958239)/* ["default"] */ .A) + "",
        width: "958",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Từ Bước 1 đến Bước 6 người dùng có thể thay thế bằng các lệnh CMD sau nếu không thể thao tác bằng cách thông thường:", (0,jsx_runtime.jsx)(_components.br, {}), "\nVào Start > cmd (Run as administrator)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diskpart list disk select disk online disk attributes disk clear readonly Exit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó tiếp tục từ Bước 7 theo hướng dẫn bên trên."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./gan-storage-disk-vao-may-ao",
        children: " Previous Gắn Storage Disk vào máy ảo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./go-storage-disk-khoi-may-ao",
        children: " Next Gỡ Storage Disk khỏi máy ảo "
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

/***/ 77466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0738799f14e2-Userguide-FPT-Cloud-Server-2022-69-ebe046050821092758cf6132719dee3d.png");

/***/ },

/***/ 958239
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c89700547dd-Userguide-FPT-Cloud-Server-2022-73-697a428ab97a87f76904116afbe6a321.png");

/***/ },

/***/ 343908
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/12b5cc800dcc-Userguide-FPT-Cloud-Server-2022-62-e75b8b5b8da20da07c64dd3420a658c8.png");

/***/ },

/***/ 316439
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4a3afedab82f-Userguide-FPT-Cloud-Server-2022-68-c3e5c0f0bbd2e7429ff04ca153b64021.png");

/***/ },

/***/ 834960
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/62391f50366a-Userguide-FPT-Cloud-Server-2022-71-7b62bf59d7f22d4be178d82784d63860.png");

/***/ },

/***/ 216144
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8bb2c4a28946-Userguide-FPT-Cloud-Server-2022-63-70ae105a85aff370d70393a834745f3d.png");

/***/ },

/***/ 57619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b1d70d818ef-Userguide-FPT-Cloud-Server-2022-64-9b5b6bbf558eb14eef3f03ef3813ea8d.png");

/***/ },

/***/ 29378
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e4f3cf7fb65-Userguide-FPT-Cloud-Server-2022-66-831437f5343ede90d2145f601af5fe04.png");

/***/ },

/***/ 554000
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ae6b07470c93-Userguide-FPT-Cloud-Server-2022-70-b06b4a9fc527b3dd59ecf934f8af4aa5.png");

/***/ },

/***/ 244812
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b8dd64a980b5-Userguide-FPT-Cloud-Server-2022-67-3a575425692294b4b2747b2dcd75cf4b.png");

/***/ },

/***/ 812601
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdffbf963f6e-Userguide-FPT-Cloud-Server-2022-72-0dc88aefc30acd19680d30ebbc1d5fed.png");

/***/ },

/***/ 160870
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e709db2258d9-Userguide-FPT-Cloud-Server-2022-65-359c7dfb1c76c6dac6b02a4a41bf7eb5.png");

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