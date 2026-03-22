"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[78913],{

/***/ 540890
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_attach_a_network_card_to_the_virtual_machine_md_974_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-attach-a-network-card-to-the-virtual-machine-md-974.json
const site_docs_cloud_server_network_attach_a_network_card_to_the_virtual_machine_md_974_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/attach-a-network-card-to-the-virtual-machine","title":"Gắn thêm card mạng (NIC) vào máy ảo","description":"*","source":"@site/docs/cloud-server/network/attach-a-network-card-to-the-virtual-machine.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/attach-a-network-card-to-the-virtual-machine","permalink":"/cloud-server/network/attach-a-network-card-to-the-virtual-machine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Gắn thêm card mạng (NIC) vào máy ảo","title":"Gắn thêm card mạng (NIC) vào máy ảo","source":"https://fptcloud.com/documents/cloud-server/?doc=attach-a-network-card-to-the-virtual-machine","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Allow address pair","permalink":"/cloud-server/network/allow-address-pair"},"next":{"title":"Thay đổi địa chỉ MAC","permalink":"/cloud-server/network/change-address-mac"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/attach-a-network-card-to-the-virtual-machine.md


const frontMatter = {
	sidebar_label: 'Gắn thêm card mạng (NIC) vào máy ảo',
	title: 'Gắn thêm card mạng (NIC) vào máy ảo',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=attach-a-network-card-to-the-virtual-machine',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Gắn thêm card mạng (NIC) vào máy ảo';

const assets = {

};



const toc = [{
  "value": "<strong>Xem địa chỉ IP hiện tại</strong>",
  "id": "xem-địa-chỉ-ip-hiện-tại",
  "level": 3
}, {
  "value": "<strong>Đặt địa chỉ IP tĩnh</strong>",
  "id": "đặt-địa-chỉ-ip-tĩnh",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
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
        id: "gắn-thêm-card-mạng-nic-vào-máy-ảo",
        children: "Gắn thêm card mạng (NIC) vào máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể gắn tối đa 10 card mạng vào một máy ảo. Để gắn thêm card mạng vào máy ảo bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), ". Chọn máy ảo cần gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet"
      }), " để vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(441462)/* ["default"] */ .A) + "",
        width: "940",
        height: "478"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Interface"
      }), ". Hệ thống sẽ hiển thị danh sách các card mạng đang được gắn với máy ảo cũng như thông tin của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet"
      }), " mà card mạng ấy đang kết nối đến. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add NIC"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(455721)/* ["default"] */ .A) + "",
        width: "975",
        height: "378"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subnet"
      }), " trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " cần gắn với máy ảo. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add NIC"
      }), " để xác nhận."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(839604)/* ["default"] */ .A) + "",
        width: "928",
        height: "349"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hệ thống sẽ xử lý và thông báo kết quả."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, card mạng mới sẽ được hiển thị ở bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(173291)/* ["default"] */ .A) + "",
        width: "975",
        height: "415"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi add ở FPT Portal, thường thì các máy ảo Windows và Linux sẽ tự động nhận card mạng mới, người dùng sẽ không cần thực hiện bất kỳ cấu hình thủ công nào."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tuy nhiên, trong một số trường hợp nếu người dùng Linux đang thực hiện một thao tác nào đó trên máy ảo hoặc có lỗi từ Hệ điều hành thì card mạng có thể sẽ không hiển thị. Bạn hãy khởi động lại máy để các config có hiệu lực. Nếu vẫn chưa được khắc phục bạn hãy cài đặt thủ công theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xem-địa-chỉ-ip-hiện-tại",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xem địa chỉ IP hiện tại"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để xem địa chỉ IP hiện tại của máy, người dùng Linux có thể sử dụng một trong các câu lệnh sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ ip a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hoặc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ ip addr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(315592)/* ["default"] */ .A) + "",
        width: "940",
        height: "347"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "đặt-địa-chỉ-ip-tĩnh",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đặt địa chỉ IP tĩnh"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ubuntu 20.04 sử dụng netplan làm trình quản lý mạng mặc định. Tệp cấu hình cho netplan được lưu trữ trong thư mục / etc / netplan . Bạn có thể tìm thấy tệp cấu hình này được liệt kê trong thư mục / etc / netplan lệnh sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ ls / etc / netplan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lệnh trên sẽ trả về tên của tệp cấu hình có phần mở rộng .yaml, trong trường hợp ví dụ dưới đây là 01-network-manager-all.yaml."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi thực hiện bất kỳ thay đổi nào đối với tệp này, cần đảm bảo tạo một bản sao lưu của tệp. Sử dụng lệnh cp để làm như vậy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ sudo cp / etc / netplan / 01-network- manager- all .yaml 01-network- manager- all .yaml.ba\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: có thể có tệp cấu hình có tên không phải là 01-network-manager-all.yaml. Vì vậy, người dùng cần sử dụng đúng tên tệp cấu hình trong các lệnh."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó, thêm các dòng sau bằng cách thay thế tên giao diện, địa chỉ IP, cổng và thông tin DNS phù hợp với nhu cầu mạng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(465252)/* ["default"] */ .A) + "",
        width: "686",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-ket-noi-vao-may-ao-linux",
        children: " Previous Kết nối vào máy ảo Linux "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./remove-the-network-card-from-the-virtual-machine",
        children: " Next Gỡ card mạng (NIC) khỏi máy ảo "
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

/***/ 839604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4919d058c1fd-image-1712723037304-4b871ebeec199766b0066ed5b9326913.png");

/***/ },

/***/ 465252
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6dc03fdb5132-image-1712723133085-e358783e0ca0ff684bd8f9d9a2dfd863.png");

/***/ },

/***/ 173291
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/729a9887403d-image-1744793530914-736ca27445343b5f64501374a0a148ec.png");

/***/ },

/***/ 315592
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b482495f64ba-image-1712723100683-bc36f04be3972c59297bdd42498da37c.png");

/***/ },

/***/ 441462
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d937e2822b3f-image-1712722975848-7650be1ceeb802ba0464f19b532fdb11.png");

/***/ },

/***/ 455721
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f9e5bd81558a-image-1744793401110-93bac52d712304538bd013285e64c5be.png");

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