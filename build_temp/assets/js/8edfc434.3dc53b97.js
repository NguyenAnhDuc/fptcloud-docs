"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[17576],{

/***/ 912974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_backup_backup_volume_md_8ed_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-backup-backup-volume-md-8ed.json
const site_docs_backup_backup_volume_md_8ed_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"backup/backup-volume","title":"Backup Volume","description":"*","source":"@site/docs/backup/backup-volume.md","sourceDirName":"backup","slug":"/backup/backup-volume","permalink":"/backup/backup-volume","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Backup Volume","title":"Backup Volume","source":"https://fptcloud.com/documents/backup/?doc=backup-volume","parent":"https://fptcloud.com/documents/backup","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Report","permalink":"/backup/backup-report"},"next":{"title":"Tạo VM mới từ các Restore Point","permalink":"/backup/clone-vm-tu-cac-restore-point"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/backup/backup-volume.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Backup Volume',
	title: 'Backup Volume',
	source: 'https://fptcloud.com/documents/backup/?doc=backup-volume',
	parent: 'https://fptcloud.com/documents/backup',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Backup Volume';

const assets = {

};



const toc = [{
  "value": "1. Giới thiệu",
  "id": "1-giới-thiệu",
  "level": 2
}, {
  "value": "2. Điều kiện",
  "id": "2-điều-kiện",
  "level": 2
}, {
  "value": "3. Tạo Backup Volume",
  "id": "3-tạo-backup-volume",
  "level": 2
}, {
  "value": "Bước 1: Mở giao diện Backup &amp; Recovery",
  "id": "bước-1-mở-giao-diện-backup--recovery",
  "level": 3
}, {
  "value": "Bước 2: Nhập thông tin cơ bản",
  "id": "bước-2-nhập-thông-tin-cơ-bản",
  "level": 3
}, {
  "value": "Bước 3: Cấu hình Backup",
  "id": "bước-3-cấu-hình-backup",
  "level": 3
}, {
  "value": "Bước 4: Tạo job",
  "id": "bước-4-tạo-job",
  "level": 3
}, {
  "value": "4. Quản lý Backup Job",
  "id": "4-quản-lý-backup-job",
  "level": 2
}, {
  "value": "5. Lưu ý quan trọng",
  "id": "5-lưu-ý-quan-trọng",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
        id: "backup-volume",
        children: "Backup Volume"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-giới-thiệu",
      children: "1. Giới thiệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Volume"
      }), " cho phép người dùng tạo bản sao lưu cho các volume trong VPC trên Unify Portal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup đảm bảo dữ liệu luôn có bản dự phòng và có thể khôi phục khi xảy ra sự cố."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-điều-kiện",
      children: "2. Điều kiện"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Đã đăng nhập vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Unify Portal"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup"
        }), " cho VPC đang ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tài khoản có quyền ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OspNativeBackup:Create"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Volume cần backup chưa thuộc job khác (volume chỉ có thể nằm trong một job tại một thời điểm)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-tạo-backup-volume",
      children: "3. Tạo Backup Volume"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-mở-giao-diện-backup--recovery",
      children: "Bước 1: Mở giao diện Backup & Recovery"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Backup Job"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-nhập-thông-tin-cơ-bản",
      children: "Bước 2: Nhập thông tin cơ bản"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên form ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Backup Job"
      }), " , điền các trường sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Job Name"
        }), " (", (0,jsx_runtime.jsx)(_components.em, {
          children: "bắt buộc"
        }), "):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tên job ( không được trùng trong VPC)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tối đa 26 ký tự, chỉ chứa chữ, số, dấu ."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Job Type"
        }), " : chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Volume"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description"
        }), " (", (0,jsx_runtime.jsx)(_components.em, {
          children: "tùy chọn"
        }), "): mô tả ngắn về job."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Selection"
        }), " : chọn các volume cần backup (volume hợp lệ sẽ bắt đầu bằng prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pv-fke"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-cấu-hình-backup",
      children: "Bước 3: Cấu hình Backup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Option"
        }), " (chọn một):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Daily full backup"
            }), " : tạo bản full mỗi ngày."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Daily incremental + Weekly active full"
            }), " : incremental hàng ngày, full theo ngày cố định trong tuần."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Daily incremental + Monthly active full"
            }), " : incremental hàng ngày, full theo ngày cố định trong tháng."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Time"
        }), " : thời gian chạy trong ngày (00:00–23:59)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full Backup At"
        }), " : (chỉ bật khi chọn Weekly/Monthly active full) → chọn ngày chạy full."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latest Backup to Keep"
        }), " : số bản backup giữ lại (1–1000)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Notification Email"
        }), " : thêm email nhận thông báo trạng thái job (thành công/thất bại)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-4-tạo-job",
      children: "Bước 4: Tạo job"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hệ thống hiển thị thông báo:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Thành công: ", (0,jsx_runtime.jsx)(_components.em, {
              children: "The job [JobName] has been created successfully."
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Lỗi: hiển thị chi tiết (ví dụ: job name trùng, volume không hợp lệ, hệ thống bận...)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-quản-lý-backup-job",
      children: "4. Quản lý Backup Job"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Jobs"
        }), " để theo dõi danh sách."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trạng thái job sẽ được cập nhật tự động."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Có thể chỉnh sửa cấu hình retention, email notification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-lưu-ý-quan-trọng",
      children: "5. Lưu ý quan trọng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Một volume chỉ có thể thuộc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "một backup job"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Job name phải duy nhất trong VPC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nên đặt lịch backup ngoài giờ cao điểm để tránh ảnh hưởng hiệu năng."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup chỉ giữ lại số bản theo cấu hình retention, các bản cũ hơn sẽ tự xóa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./backup-report",
        children: " Previous Report "
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