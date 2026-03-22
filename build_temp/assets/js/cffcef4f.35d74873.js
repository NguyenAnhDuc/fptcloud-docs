"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[21418],{

/***/ 742598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_other_profile_ssh_key_md_cff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-other-profile-ssh-key-md-cff.json
const site_docs_cloud_server_other_profile_ssh_key_md_cff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/other/profile-ssh-key","title":"Profile SSH Key","description":"*","source":"@site/docs/cloud-server/other/profile-ssh-key.md","sourceDirName":"cloud-server/other","slug":"/cloud-server/other/profile-ssh-key","permalink":"/cloud-server/other/profile-ssh-key","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Profile SSH Key","title":"Profile SSH Key","source":"https://fptcloud.com/documents/cloud-server/?doc=profile-ssh-key","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Notification Bell","permalink":"/cloud-server/other/overview-bell"},"next":{"title":"Quản lý Project","permalink":"/cloud-server/other/project-structure"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/other/profile-ssh-key.md


const frontMatter = {
	sidebar_label: 'Profile SSH Key',
	title: 'Profile SSH Key',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=profile-ssh-key',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Profile SSH Key';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tạo/Import Profile SSH Key</strong>",
  "id": "1-tạoimport-profile-ssh-key",
  "level": 3
}, {
  "value": "<strong>2. Xem thông tin chi tiết Profile SSH Key</strong>",
  "id": "2-xem-thông-tin-chi-tiết-profile-ssh-key",
  "level": 3
}, {
  "value": "<strong>3. Xóa Profile SSH Key</strong>",
  "id": "3-xóa-profile-ssh-key",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
        id: "profile-ssh-key",
        children: "Profile SSH Key"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tạoimport-profile-ssh-key",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tạo/Import Profile SSH Key"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Management"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Import SSH key."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(351647)/* ["default"] */ .A) + "",
        width: "940",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin cần thiết để tạo SSH Key:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên SSH Key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public Key"
        }), " : Public Key để hệ thống gen ra Private Key. Nếu bạn đã có sẵn Public key, hãy nhập vào ô Public key. Nếu chưa có, hãy chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate new key pair"
        }), ". Hệ thống sẽ tự tạo ngẫu nhiên cho người dùng một ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Public key"
        }), " hợp lệ."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các định dạng SSH key hiện tại hỗ trợ: ‘ssh-rsa, ecdsa-sha2-nistp256’, ‘ecdsa-sha2-nistp384’, ‘ecdsa-sha2-nistp521’, ‘ssh-ed25519’."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Khi đã đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), ". Hệ thống sẽ tiến hành tạo cặp ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Key"
      }), " và tự động download file key về máy với định dạng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "< >.pem"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " File Private key ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "< >.pem"
      }), " chỉ được cung cấp 1 lần duy nhất ở bước 5. Người dùng cần lưu trữ ở nơi an toàn tránh việc bị mất quyền truy cập vào máy chủ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-xem-thông-tin-chi-tiết-profile-ssh-key",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Xem thông tin chi tiết Profile SSH Key"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể xem lại toàn bộ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile SSH Key"
      }), " đã tạo trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manage SSH Key Profiles."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 80",
        src: (__webpack_require__(301881)/* ["default"] */ .A) + "",
        width: "1024",
        height: "614"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi người dùng chọn một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile SSH Key"
      }), " cụ thể, hệ thống sẽ hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public Key."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(739346)/* ["default"] */ .A) + "",
        width: "430",
        height: "400"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-xóa-profile-ssh-key",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Xóa Profile SSH Key"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu muốn xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile SSH Key"
      }), " khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manage SSH Key Profiles"
      }), " , người dùng thực hiện thao tác sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile SSH Key"
      }), " cần xóa, mở popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 82",
        src: (__webpack_require__(497371)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xóa"
      }), ". Hệ thống sẽ ngay lập tức xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile SSH Key"
      }), " và thông báo kết quả xử lý."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(69108)/* ["default"] */ .A) + "",
        width: "434",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Đây là thao tác xóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile SSH Key"
      }), " khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manage SSH Key Profiles."
      }), " Các máy ảo đã tạo bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH key"
      }), " này không bị ảnh hưởng. Người dùng vẫn có thể sử dụng file ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private Key"
      }), " đã tải về trước đó để kết nối vào máy ảo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-storage-disk",
        children: " Previous Xóa Storage Disk "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./token",
        children: " Next Token "
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

/***/ 69108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1fdb06f322a7-image-1734596345616-b790c95b3c1a90e3d562adadc2f3bc77.png");

/***/ },

/***/ 739346
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3532470cc7cb-image-1734596195350-864d978a0877d0ba080298df8fb306ca.png");

/***/ },

/***/ 301881
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3e59c90de69d-Userguide-FPT-Cloud-Server-2022-80-1024x614-d4e5e721e608967d3b421360a108b08f.png");

/***/ },

/***/ 351647
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/83a32b7196d8-image-1698634601692-c55e58a5968fe672bfa9176bcba431cf.png");

/***/ },

/***/ 497371
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a197e82d2ee6-Userguide-FPT-Cloud-Server-2022-82-1024x538-d9826c4698101a7356dbd8e8b9a91a8f.png");

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