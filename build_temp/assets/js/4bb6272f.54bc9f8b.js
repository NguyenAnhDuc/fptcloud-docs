"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[72592],{

/***/ 455723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_gpu_gpu_general_md_4bb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-gpu-gpu-general-md-4bb.json
const site_docs_cloud_server_gpu_gpu_general_md_4bb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/gpu/gpu-general","title":"Quản lý GPU với Console Portal","description":"*","source":"@site/docs/cloud-server/gpu/gpu-general.md","sourceDirName":"cloud-server/gpu","slug":"/cloud-server/gpu/gpu-general","permalink":"/cloud-server/gpu/gpu-general","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quản lý GPU với Console Portal","title":"Quản lý GPU với Console Portal","source":"https://fptcloud.com/documents/cloud-server/?doc=gpu-general","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"GPU","permalink":"/category/gpu"},"next":{"title":"Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific","permalink":"/cloud-server/gpu/gpu-specific"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/gpu/gpu-general.md


const frontMatter = {
	sidebar_label: 'Quản lý GPU với Console Portal',
	title: 'Quản lý GPU với Console Portal',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=gpu-general',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý GPU với Console Portal';

const assets = {

};



const toc = [{
  "value": "<strong>1. Khởi tạo máy ảo có GPU</strong>",
  "id": "1-khởi-tạo-máy-ảo-có-gpu",
  "level": 2
}, {
  "value": "<strong>2. Thêm GPU vào instance trên Instance management</strong>",
  "id": "2-thêm-gpu-vào-instance-trên-instance-management",
  "level": 2
}, {
  "value": "<strong>3. Gỡ GPU khỏi máy ảo</strong>",
  "id": "3-gỡ-gpu-khỏi-máy-ảo",
  "level": 2
}, {
  "value": "<strong>4. Resize thông số GPU của instance</strong>",
  "id": "4-resize-thông-số-gpu-của-instance",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "quản-lý-gpu-với-console-portal",
        children: "Quản lý GPU với Console Portal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-khởi-tạo-máy-ảo-có-gpu",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Khởi tạo máy ảo có GPU"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể tạo máy ảo với GPU"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở màn hình quản lý ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(787094)/* ["default"] */ .A) + "",
        width: "975",
        height: "277"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn GPU và loại card GPU cần sử dụng"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(790842)/* ["default"] */ .A) + "",
        width: "975",
        height: "562"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập các thông tin còn khác của instance"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Bấm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(368896)/* ["default"] */ .A) + "",
        width: "975",
        height: "648"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình Instance detail"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(379137)/* ["default"] */ .A) + "",
        width: "975",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-thêm-gpu-vào-instance-trên-instance-management",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Thêm GPU vào instance trên Instance management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance management"
      }), " , người dùng lựa chọn máy ảo cần thêm GPU. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Người dùng cần ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Power off"
          }), " máy ảo trước khi thêm thêm GPU (trạng thái “Stopped”)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Với các máy ở đang ở trạng thái khác như “Running”, “Pending”,.. tính năng sẽ bị ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "disable"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(965786)/* ["default"] */ .A) + "",
        width: "975",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add GPU"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(844056)/* ["default"] */ .A) + "",
        width: "448",
        height: "281"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU type"
      }), " để add vào instance"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Hệ thống hiển thị danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU type"
          }), " phù hợp để user có thể lựa chọn."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Current"
              }), " : cấu hình instance hiện tại"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              }), " : chỉ được chọn resource type GPU (không có lựa chọn cấu hình thường trong danh sách)"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Bấm nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add GPU"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hệ thống cập nhật thông tin và add GPU vào instance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình Instance detail"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(598553)/* ["default"] */ .A) + "",
        width: "975",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-gỡ-gpu-khỏi-máy-ảo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Gỡ GPU khỏi máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance management"
      }), " , người dùng lựa chọn máy ảo cần gỡ GPU. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Người dùng cần ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "power off"
          }), " máy ảo trước khi thêm thêm GPU (trạng thái “Stopped”)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Với các máy ở đang ở trạng thái khác như “Running”, “Pending”,.. tính năng sẽ bị ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "disable"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove GPU"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resource type"
      }), " với"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Current"
          }), " : cấu hình instance GPU hiện tại"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : chỉ được chọn resource type thường (không có lựa chọn cấu hình có GPU trong danh sách)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Bấm nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove GPU"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Hệ thống sẽ gỡ GPU và chuyển instance về resource type đã lựa chọn. Thông tin về cấu hình mới của instance sẽ được cập nhật tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-resize-thông-số-gpu-của-instance",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Resize thông số GPU của instance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance management"
      }), " , người dùng lựa chọn máy ảo cần resize GPU. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Người dùng cần ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "power off"
          }), " máy ảo trước khi thêm thêm GPU (trạng thái “Stopped”)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Với các máy ở đang ở trạng thái khác như “Running”, “Pending”,.. tính năng sẽ bị ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "disable"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "template"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resource type"
      }), " (nếu instance đang là instance GPU thì chỉ được resize sang type GPU, nếu instance thường thì chỉ được resize instance thường )"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với instance có GPU, instance chỉ được resize với type GPU"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Với instance không có GPU, instance chỉ được resize với type không có GPU. Nếu người dùng muốn resize sang type có GPU, người dùng có thể dùng tính năng Add GPU thay thế."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Bấm nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize Instance"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " và thông tin trong trang chi tiết của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu",
        children: " Previous Quản lý GPU với Portal Console "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu-specific",
        children: " Next Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific "
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

/***/ 368896
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/03d823e6ceb9-image-1744799934410-8561680a79f4aa6322e8f48f7b216f5f.png");

/***/ },

/***/ 790842
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/215598f9ad30-image-1744799912482-c4ef98a6319de8fc2b2952533bdd46b3.png");

/***/ },

/***/ 787094
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2ea8b0f3b398-image-1744799866857-1fd0a267be4bc2756ad47ebed7b35741.png");

/***/ },

/***/ 379137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e3f4b4f16903-image-1744799982286-a8f306efc2f9afd5f6057afc45c08bad.png");

/***/ },

/***/ 598553
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/eba5d6183136-image-1744800059691-a8f306efc2f9afd5f6057afc45c08bad.png");

/***/ },

/***/ 844056
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f556d42e4607-image-1744800019053-bcd9716810db0c1f6d85c03253598ec1.png");

/***/ },

/***/ 965786
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f8405b2ccb8b-image-1744799997207-57d270ccdbad05cac7b585f502947865.png");

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