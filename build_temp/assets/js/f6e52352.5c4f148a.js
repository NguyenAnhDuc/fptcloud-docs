"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[62361],{

/***/ 639213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_vm_management_tutorials_ket_noi_vao_may_ao_linux_md_f6e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-vm-management-tutorials-ket-noi-vao-may-ao-linux-md-f6e.json
const site_docs_cloud_server_vm_management_tutorials_ket_noi_vao_may_ao_linux_md_f6e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux","title":"Kết nối vào máy ảo Linux","description":"*","source":"@site/docs/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux.md","sourceDirName":"cloud-server/vm-management","slug":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux","permalink":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Kết nối vào máy ảo Linux","title":"Kết nối vào máy ảo Linux","source":"https://fptcloud.com/documents/cloud-server/?doc=tutorials-ket-noi-vao-may-ao-linux","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Backup máy chủ với Snapshot","permalink":"/cloud-server/vm-management/tutorials-backup-may-chu-voi-snapshot"},"next":{"title":"Kết nối vào máy ảo Windows","permalink":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-linux.md


const frontMatter = {
	sidebar_label: 'Kết nối vào máy ảo Linux',
	title: 'Kết nối vào máy ảo Linux',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=tutorials-ket-noi-vao-may-ao-linux',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Kết nối vào máy ảo Linux';

const assets = {

};



const toc = [{
  "value": "<strong>Kết nối vào máy ảo Linux bằng Web Console</strong>",
  "id": "kết-nối-vào-máy-ảo-linux-bằng-web-console",
  "level": 2
}, {
  "value": "<strong>Cấu hình để kết nối tới máy ảo Linux từ xa</strong>",
  "id": "cấu-hình-để-kết-nối-tới-máy-ảo-linux-từ-xa",
  "level": 2
}, {
  "value": "<strong>Kết nối với máy ảo Linux bằng SSH Client</strong>",
  "id": "kết-nối-với-máy-ảo-linux-bằng-ssh-client",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
        id: "kết-nối-vào-máy-ảo-linux",
        children: "Kết nối vào máy ảo Linux"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi một máy ảo nhân Linux (Ubuntu, CentOS, Debian) được tạo thành công trên FPT Portal, người dùng mặc định có thể dùng Web Console được cung cấp sẵn để truy cập."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài ra người dùng còn có thể đăng nhập từ bên ngoài bằng các SSH Client hoặc phần mềm bên thứ 3 như PuTTY, Bitvise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kết-nối-vào-máy-ảo-linux-bằng-web-console",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết nối vào máy ảo Linux bằng Web Console"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Web Console"
      }), " hỗ trợ điều khiển tất cả các máy ảo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " , kể cả máy ảo chưa được gắn với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public IP"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của máy ảo cần kết nối, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Console"
      }), "."]
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
        alt: "Userguide FPT Cloud Server 2022 28",
        src: (__webpack_require__(39325)/* ["default"] */ .A) + "",
        width: "800",
        height: "809"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-để-kết-nối-tới-máy-ảo-linux-từ-xa",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cấu hình để kết nối tới máy ảo Linux từ xa"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để kết nối vào các máy ảo nhân ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ubuntu"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CentOS"
      }), " ,..) bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Client"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bitvise"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PuTTY"
      }), " ,... Máy ảo cần được gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " và đã mở port ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Connection"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Cloud"
      }), " hỗ trợ mở port cho máy ảo bằng cách gắn một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Khởi tạo 1 máy ảo hệ điều hành ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux"
      }), " , gắn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Floating IP"
        })
      }), " và khởi chạy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 29",
        src: (__webpack_require__(716302)/* ["default"] */ .A) + "",
        width: "1024",
        height: "373"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Gắn vào máy ảo một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " đã mở port ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " , nếu chưa có ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " có thể tạo mới theo hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Security Group"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(141591)/* ["default"] */ .A) + "",
        width: "975",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi cấu hình thành công, người dùng có thể connect vào máy ảo từ các SSH Client bằng các thông tin: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port SSH"
      }), " , file ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH Key"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu vẫn không thể kết nối được, người dùng nên kiểm tra lại máy ảo đã bật chưa, Floating IP có chính xác không và mở lại port ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " theo các hướng dẫn ở phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Security Group"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kết-nối-với-máy-ảo-linux-bằng-ssh-client",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết nối với máy ảo Linux bằng SSH Client"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể dùng các SSH client có sẵn trên Windows như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cmd.exe"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PowerShell"
      }), " để SSH vào máy ảo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Mở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CMD"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Power Shell"
      }), " trên Windows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nếu người dùng kết nối bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password"
      }), " , hãy sử dụng câu lệnh sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh <>@<>"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 32",
        src: (__webpack_require__(94261)/* ["default"] */ .A) + "",
        width: "859",
        height: "158"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu kết nối thông qua cặp SSH Key, đầu tiên người dùng cần di chuyển đến thư mục chứa file ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH key"
      }), " bằng lệnh cd :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cd <<Đường dẫn đến thư mục chứa file pem>>"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 33",
        src: (__webpack_require__(379773)/* ["default"] */ .A) + "",
        width: "859",
        height: "176"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau đó kết nối đến máy ảo bằng câu lệnh:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh -i \"<>\" << Username >>@<>"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nếu đây là lần đầu tiên kết nối đến máy ảo, người dùng sẽ được nhắc nhở xác minh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hosts fingerprint"
      }), ". Để đồng ý và tiếp tục kết nối, nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“yes”"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 34",
        src: (__webpack_require__(343953)/* ["default"] */ .A) + "",
        width: "858",
        height: "206"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đã kết nối thành công vào máy chủ bằng SSH client."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 35",
        src: (__webpack_require__(15999)/* ["default"] */ .A) + "",
        width: "857",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nếu người dùng gặp lỗi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nHãy dùng câu lệnh sau để xóa Hosts fingerprint đã lưu trước đó và thao tác lại từ đầu", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh-keygen -R \"<>\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-ket-noi-vao-may-ao-windows",
        children: " Previous Kết nối vào máy ảo Windows "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./attach-a-network-card-to-the-virtual-machine",
        children: " Next Gắn thêm card mạng (NIC) vào máy ảo "
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

/***/ 343953
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 15999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/35e7f42ab901-Userguide-FPT-Cloud-Server-2022-35-051de514c9533d9ef74040a5eca91d36.png");

/***/ },

/***/ 716302
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5490201f5aa4-Userguide-FPT-Cloud-Server-2022-29-1024x373-7722794d23f282da47a2a5b03d6b8caf.png");

/***/ },

/***/ 39325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6638a5962216-Userguide-FPT-Cloud-Server-2022-28-9a3ae5aa8c7a39f692fe3d6e7bd126a8.png");

/***/ },

/***/ 94261
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/88cbc1e00732-Userguide-FPT-Cloud-Server-2022-32-1d28df876072dfb8c329e807f5b96b1b.png");

/***/ },

/***/ 174933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8e9a3fe1ef86-Userguide-FPT-Cloud-Server-2022-22-1024x457-462041ce1bbcf715dd64720801f74cc7.png");

/***/ },

/***/ 379773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bf7c47a34c96-Userguide-FPT-Cloud-Server-2022-33-15bda2d96e9228413a0bc18ef4aa2886.png");

/***/ },

/***/ 141591
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdf8c2ce09e1-image-1744794012514-e40e2223fc5ffb25455201bc3caab0be.png");

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