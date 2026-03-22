"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[3314],{

/***/ 665452
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_vm_management_tutorials_ket_noi_vao_may_ao_windows_md_b11_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-vm-management-tutorials-ket-noi-vao-may-ao-windows-md-b11.json
const site_docs_cloud_server_vm_management_tutorials_ket_noi_vao_may_ao_windows_md_b11_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows","title":"Kết nối vào máy ảo Windows","description":"*","source":"@site/docs/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows.md","sourceDirName":"cloud-server/vm-management","slug":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows","permalink":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Kết nối vào máy ảo Windows","title":"Kết nối vào máy ảo Windows","source":"https://fptcloud.com/documents/cloud-server/?doc=tutorials-ket-noi-vao-may-ao-windows","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Kết nối vào máy ảo Linux","permalink":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux"},"next":{"title":"Khởi tạo một máy ảo mới","permalink":"/cloud-server/vm-management/tutorials-khoi-tao-mot-may-ao-moi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows.md


const frontMatter = {
	sidebar_label: 'Kết nối vào máy ảo Windows',
	title: 'Kết nối vào máy ảo Windows',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=tutorials-ket-noi-vao-may-ao-windows',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Kết nối vào máy ảo Windows';

const assets = {

};



const toc = [{
  "value": "<strong>Kết nối vào máy ảo Windows bằng Web Console</strong>",
  "id": "kết-nối-vào-máy-ảo-windows-bằng-web-console",
  "level": 2
}, {
  "value": "<strong>Kết nối tới server Windows bằng Remote Desktop Connection</strong>",
  "id": "kết-nối-tới-server-windows-bằng-remote-desktop-connection",
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
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "kết-nối-vào-máy-ảo-windows",
        children: "Kết nối vào máy ảo Windows"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi một máy ảo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows"
      }), " được tạo thành công trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Portal"
      }), " , người dùng mặc định có thể dùng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Console"
      }), " được cung cấp sẵn để truy cập. Ngoài ra người dùng còn có thể đăng nhập từ bên ngoài bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote Desktop Connection"
      }), " nếu máy chủ đấy được gắn với một Public IP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kết-nối-vào-máy-ảo-windows-bằng-web-console",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết nối vào máy ảo Windows bằng Web Console"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Console"
      }), " hỗ trợ điều khiển tất cả các máy ảo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " , kể cả máy ảo chưa được gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần kết nối, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Console."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 22",
        src: (__webpack_require__(174933)/* ["default"] */ .A) + "",
        width: "1024",
        height: "457"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngay lập tức trình duyệt sẽ mở 1 cửa sổ mới chứa màn hình của máy chủ, từ màn hình này người dùng có thể toàn quyền điều khiển và thao tác với máy chủ đang kết nối."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 23",
        src: (__webpack_require__(185835)/* ["default"] */ .A) + "",
        width: "297",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kết-nối-tới-server-windows-bằng-remote-desktop-connection",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết nối tới server Windows bằng Remote Desktop Connection"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để kết nối bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RDC"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote Desktop Connection"
      }), "), máy ảo cần được gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " và đã mở port 3389 cho RDP Connection. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " hỗ trợ mở port cho máy ảo bằng cách gắn một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Người thực hiện các bước sau để cấu hình kết nối:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Khởi tạo một máy ảo HĐH ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows"
      }), " , gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gắn Floating Ip vào máy"
        })
      }), " và khởi chạy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 24",
        src: (__webpack_require__(665059)/* ["default"] */ .A) + "",
        width: "1024",
        height: "375"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Gắn vào máy ảo một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " đã mở port RDP 3389, nếu chưa có ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " có thể tạo mới theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Security Group"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 26",
        src: (__webpack_require__(733315)/* ["default"] */ .A) + "",
        width: "1024",
        height: "535"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi cấu hình thành công, người dùng có thể connect vào máy ảo bằng Remote Desktop Connection với các thông số như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 27",
        src: (__webpack_require__(620592)/* ["default"] */ .A) + "",
        width: "258",
        height: "300"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote Desktop Connection"
      }), " báo không thể kết nối, người dùng nên kiểm tra lại máy ảo đã bật chưa, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " có chính xác không và mở lại port 3389 theo các hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Security Group"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./clone-instance",
        children: " Previous Clone instance "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-ket-noi-vao-may-ao-linux",
        children: " Next Kết nối vào máy ảo Linux "
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

/***/ 185835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27ea7392091d-Userguide-FPT-Cloud-Server-2022-23-297x300-43661ebaeb5b129e6f31fabbbfcb6faf.png");

/***/ },

/***/ 620592
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/461bd875b6e2-Userguide-FPT-Cloud-Server-2022-27-258x300-47b95e5e16f0c141acfa80009df0b392.png");

/***/ },

/***/ 174933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8e9a3fe1ef86-Userguide-FPT-Cloud-Server-2022-22-1024x457-462041ce1bbcf715dd64720801f74cc7.png");

/***/ },

/***/ 733315
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d2598fa06bfa-Userguide-FPT-Cloud-Server-2022-26-1024x535-88c8fc2fa818f495262e775edc4ae566.png");

/***/ },

/***/ 665059
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d7f8ec18e379-Userguide-FPT-Cloud-Server-2022-24-1024x375-78278f536a877419245350bf60de5bbe.png");

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