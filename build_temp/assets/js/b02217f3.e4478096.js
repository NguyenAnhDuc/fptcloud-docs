"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[72928],{

/***/ 602562
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_gpu_gpu_specific_md_b02_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-gpu-gpu-specific-md-b02.json
const site_docs_cloud_server_gpu_gpu_specific_md_b02_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/gpu/gpu-specific","title":"Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific","description":"*","source":"@site/docs/cloud-server/gpu/gpu-specific.md","sourceDirName":"cloud-server/gpu","slug":"/cloud-server/gpu/gpu-specific","permalink":"/cloud-server/gpu/gpu-specific","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific","title":"Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific","source":"https://fptcloud.com/documents/cloud-server/?doc=gpu-specific","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý GPU với Console Portal","permalink":"/cloud-server/gpu/gpu-general"},"next":{"title":"Quản lý GPU với Portal Console","permalink":"/cloud-server/gpu/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/gpu/gpu-specific.md


const frontMatter = {
	sidebar_label: 'Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific',
	title: 'Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=gpu-specific',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific';

const assets = {

};



const toc = [{
  "value": "<strong>1. Thêm GPU vào máy ảo đã tạo</strong>",
  "id": "1-thêm-gpu-vào-máy-ảo-đã-tạo",
  "level": 2
}, {
  "value": "<strong>2. Tạo máy ảo GPU mới</strong>",
  "id": "2-tạo-máy-ảo-gpu-mới",
  "level": 2
}, {
  "value": "<strong>3. Gỡ GPU khỏi máy ảo</strong>",
  "id": "3-gỡ-gpu-khỏi-máy-ảo",
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
        id: "quản-lý-gpu-với-console-portal-áp-dụng-cho-loại-dịch-vụ-specific",
        children: "Quản lý GPU với Console Portal áp dụng cho loại dịch vụ Specific"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-thêm-gpu-vào-máy-ảo-đã-tạo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Thêm GPU vào máy ảo đã tạo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để gắn thêm GPU vào máy ảo đã tạo trước đó, người dùng thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add GPU."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(624578)/* ["default"] */ .A) + "",
        width: "211",
        height: "625"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Thực hiện tắt máy chủ trước khi Add GPU card vào máy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU"
      }), " từ list tương ứng và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Máy ảo phải đạt cấu hình tối thiểu 8 vCPU – 24 GB RAM để sử dụng chức năng này."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tạo-máy-ảo-gpu-mới",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tạo máy ảo GPU mới"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Người dùng cần được cấp quota GPU để thực hiện hành động này. Khi VPC đã hết quota sử dụng GPU, người dùng sẽ được thông báo lỗi khi tạo GPU Server mới."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sau khi tạo, hệ thống sẽ thêm ngay lập tức GPU vào máy ảo. Người dùng có thể console vào máy ảo để kiểm tra thông tin GPU."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cấu hình tối thiểu để tạo GPU Server là 8 vCPU – 24 GB RAM."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(814467)/* ["default"] */ .A) + "",
        width: "940",
        height: "457"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Type"
        }), " : Chọn GPU."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU type:"
        }), " Chọn loại GPU phù hợp từ danh sách."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Image:"
        }), " Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource type"
        }), " : Chọn cấu hình phù hợp cho máy ảo từ danh sách."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local Storage"
        }), " : Thêm ổ cứng cho máy, tăng giảm dung lượng hoặc để dung lượng mặc định, tối thiểu 40GB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnet & Private IP"
        }), ": Auto-assign subnet và private IP dựa vào network của VPC, người dùng có thể thay đổi nếu muốn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tên instance"
        }), " : Nhập tên máy ảo sao cho dễ quản lý nhất. Đây cũng sẽ là tên host name của máy ảo sau này."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication type"
        }), " : Standard (Username/Password) hoặc SSH key. Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi). Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), " để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, GPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-gỡ-gpu-khỏi-máy-ảo",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Gỡ GPU khỏi máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu đã gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU"
      }), " vào máy ảo trước đó, khi không còn nhu cầu sử dụng. Bạn có thể gỡ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU"
      }), " ra với các thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần gỡ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove GPU"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Xác nhận thông tin xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./gpu-general",
        children: " Previous Quản lý GPU với Console Portal "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-gpu-voi-hpc-portal",
        children: " Next Quản lý GPU Server với HPC Portal "
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

/***/ 814467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d5b7552c4789-image-1712739862804-24c0e007065442f4d83b593409da1e07.png");

/***/ },

/***/ 624578
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e4b7aeed79b6-image-1705028237983-99ddcc55adb4d0eaf57f9a24bd4065cb.png");

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