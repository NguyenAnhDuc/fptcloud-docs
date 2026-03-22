"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[11710],{

/***/ 551080
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_clone_vm_tu_cac_restore_point_md_54d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-clone-vm-tu-cac-restore-point-md-54d.json
const site_docs_backup_clone_vm_tu_cac_restore_point_md_54d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/clone-vm-tu-cac-restore-point","title":"Tạo VM mới từ các Restore Point","description":"*","source":"@site/docs/backup/clone-vm-tu-cac-restore-point.md","sourceDirName":"backup","slug":"/backup/clone-vm-tu-cac-restore-point","permalink":"/backup/clone-vm-tu-cac-restore-point","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tạo VM mới từ các Restore Point","title":"Tạo VM mới từ các Restore Point","source":"https://fptcloud.com/documents/backup/?doc=clone-vm-tu-cac-restore-point","parent":"https://fptcloud.com/documents/backup","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Backup Volume","permalink":"/backup/backup-volume"},"next":{"title":"Incremental backup là gì và lợi ích khi sử dụng?","permalink":"/backup/incremental-backup-la-gi-va-loi-ich-khi-su-dung"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/clone-vm-tu-cac-restore-point.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tạo VM mới từ các Restore Point',
	title: 'Tạo VM mới từ các Restore Point',
	source: 'https://fptcloud.com/documents/backup/?doc=clone-vm-tu-cac-restore-point',
	parent: 'https://fptcloud.com/documents/backup',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Tạo VM mới từ các Restore Point';

const assets = {

};



const toc = [{
  "value": "<strong>Hướng Dẫn Chi Tiết</strong>",
  "id": "hướng-dẫn-chi-tiết",
  "level": 2
}, {
  "value": "<strong>Bước 1: Mở Quản Lý Backup &amp; Recovery</strong>",
  "id": "bước-1-mở-quản-lý-backup--recovery",
  "level": 3
}, {
  "value": "<strong>Bước 2: Chọn VM cần Clone</strong>",
  "id": "bước-2-chọn-vm-cần-clone",
  "level": 3
}, {
  "value": "<strong>Bước 3: Tạo VM Mới từ Restore Point</strong>",
  "id": "bước-3-tạo-vm-mới-từ-restore-point",
  "level": 3
}, {
  "value": "<strong>Bước 4: Xác Nhận và Tiến Hành Clone</strong>",
  "id": "bước-4-xác-nhận-và-tiến-hành-clone",
  "level": 3
}, {
  "value": "<strong>Lưu Ý Quan Trọng</strong>",
  "id": "lưu-ý-quan-trọng",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tạo-vm-mới-từ-các-restore-point",
        children: "Tạo VM mới từ các Restore Point"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Backup hỗ trợ bạn không chỉ khôi phục lại VM từ Restore Point mà còn cho phép tạo một VM mới với dữ liệu được lấy từ Restore Point. VM được tạo sẽ có dữ liệu ổ đĩa giống hoàn toàn với VM gốc tại thời điểm tạo Restore Point, đồng thời cho phép tùy chỉnh cấu hình RAM, CPU và Network. Điều này giúp bạn dễ dàng tạo ra nhiều VM phụ từ một VM chính một cách nhanh chóng và đơn giản."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng Dẫn Chi Tiết"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-mở-quản-lý-backup--recovery",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1: Mở Quản Lý Backup & Recovery"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập vào giao diện quản trị của ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FPT Backup"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup & Recovery"
        }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup & Recovery Management"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore"
        }), " để xem danh sách các VM đang được bảo vệ và số lượng Restore Point đã tạo thành công."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-chọn-vm-cần-clone",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2: Chọn VM cần Clone"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác định VM cần thực hiện clone từ danh sách đã hiển thị."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ở cột ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Action"
        }), " của VM đó, nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore Keep"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-tạo-vm-mới-từ-restore-point",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3: Tạo VM Mới từ Restore Point"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Một cửa sổ popup có tên ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New instance from restore point"
        }), " sẽ xuất hiện."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thực hiện các bước sau:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Restore Point"
            }), " mà bạn muốn sử dụng."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nhập tên cho VM mới tại trường ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "New instance Name"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Restore New Instance"
            }), " để tạo VM mới."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-4-xác-nhận-và-tiến-hành-clone",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4: Xác Nhận và Tiến Hành Clone"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Một hộp thoại xác nhận sẽ hiện lên, yêu cầu bạn kiểm tra lại thông tin."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Restore Instance"
        }), " để xác nhận và bắt đầu quá trình tạo VM."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lưu-ý-quan-trọng",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu Ý Quan Trọng"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cấu hình VM mới:"
        }), " Sau khi tạo, bạn có thể tùy chỉnh RAM, CPU và Network của VM mới theo nhu cầu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thời gian hoàn thành:"
        }), " Quá trình tạo VM từ Restore Point thường mất vài phút đến vài giờ, tùy thuộc vào dung lượng dữ liệu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./restore-lai-vm-tu-cac-restore-point",
        children: " Previous Restore lại VM từ các Restore Point  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-lich-su-backup-and-recovery",
        children: " Next Xem lịch sử Backup & Recovery  "
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