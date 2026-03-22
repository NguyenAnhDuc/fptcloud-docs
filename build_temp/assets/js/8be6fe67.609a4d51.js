"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[78566],{

/***/ 234485
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engine_index_md_8be_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engine-index-md-8be.json
const site_docs_managed_fpt_database_engine_index_md_8be_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engine/index","title":"2. Managed – FPT Database Engine","description":"Managed – FPT Database Engine","source":"@site/docs/managed-fpt-database-engine/index.md","sourceDirName":"managed-fpt-database-engine","slug":"/managed-fpt-database-engine/","permalink":"/managed-fpt-database-engine/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Managed – FPT Database Engine","title":"2. Managed – FPT Database Engine","source":"https://fptcloud.com/documents/managed-fpt-database-engine/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Db proxy","permalink":"/managed-fpt-database-engine/db-proxy"},"next":{"title":"Initial setup","permalink":"/managed-fpt-database-engine/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engine/index.md


const frontMatter = {
	sidebar_label: 'Managed – FPT Database Engine',
	title: '2. Managed – FPT Database Engine',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engine/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engine';

const assets = {

};



const toc = [{
  "value": "1. Giới thiệu về FPT Smart Cloud Database Engine:",
  "id": "1-giới-thiệu-về-fpt-smart-cloud-database-engine",
  "level": 3
}, {
  "value": "2. Thuật ngữ &amp; Định nghĩa:",
  "id": "2-thuật-ngữ--định-nghĩa",
  "level": 3
}, {
  "value": "Trang chủ",
  "id": "trang-chủ",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Pre- requirement",
  "id": "pre--requirement",
  "level": 2
}, {
  "value": "Hướng dẫn chi tiết (Tutorials)",
  "id": "hướng-dẫn-chi-tiết-tutorials",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "2-managed--fpt-database-engine",
        children: "2. Managed – FPT Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Managed – FPT Database Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-giới-thiệu-về-fpt-smart-cloud-database-engine",
      children: "1. Giới thiệu về FPT Smart Cloud Database Engine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Smart Cloud Database Engine"
      }), " là sản phẩm phục vụ cho việc triển khai và quản lý database cho doanh nghiệp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sản phẩm này cho phép tạo một database (SQL, non-SQL) trên cụm cluster ảo mà không cần setup chi tiết các thông số như phải làm trên máy chủ vật lý. Các hệ database mà FCI cung cấp bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MySQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SQL Server"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MongoDB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MariaDB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mỗi hệ database đều có nhiều version cho KH lựa chọn và FCI sẵn sàng hỗ trợ việc chuyển đổi giữa các version với cùng 1 loại database."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-thuật-ngữ--định-nghĩa",
      children: "2. Thuật ngữ & Định nghĩa:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thuật ngữ"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Định nghĩa"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database"
      }), " | Cơ sở dữ liệu", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational Database"
      }), " | Cơ sở dữ liệu có quan hệ: các bảng trong cơ sở dữ liệu có mối liên quan tới nhau thông qua 1 trường thông tin nào đó. Sử dụng SQL để truy vấn", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-relational Database"
      }), " | Cơ sở dữ liệu phi quan hệ: Các bảng trong cơ sở dữ liệu phân tán và không bị ràng buộc với nhau. Không dùng SQL để truy vấn", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL (Structure querry language)"
      }), " | Ngôn ngữ truy vấn có cấu trúc: Ngôn ngữ lập trình phục vụ việc lưu trữ – tìm kiếm – xử lý thông tin trong các loại database có quan hệ", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cluster"
      }), " | Là 1 cụm máy chủ (vật lý hoặc ảo) dùng làm tài nguyên để chạy 1 chương trình gì đó (ở đây là database)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node"
      }), " | Là 1 máy worker trong cụm cluster", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VCPU (cloud)"
      }), " | Là lõi xử lý của 1 máy chủ ảo trên cloud. Tính theo gigabite (GB)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RAM (cloud)"
      }), " | Là tổng bộ nhớ ngẫu nhiên của máy chủ ảo trên cloud. Tính theo GB", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage disk (cloud)"
      }), " | Là ổ lưu trữ của máy chủ ảo trên cloud. Tính theo GB", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Job"
      }), " | Tạo ra 1 công việc tự động lưu trữ dữ liệu theo 1 khoảng thời gian nhất định", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Backup"
      }), " | Là việc backup toàn bộ data của database: Bao gồm cả data cũ lẫn data đã sửa đổi kể từ lần backup trước", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Diff Backup"
      }), " | Là việc chỉ backup các phần data được thay đổi hoặc tạo mới so với bản backup gần nhất", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restore"
      }), " | Là việc sử dụng 1 bản sao lưu đã backup dữ liệu để tạo 1 database trên 1 cụm cluster mới với thông tin đã sao lưu"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "trang-chủ",
      children: "Trang chủ"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre--requirement",
      children: "Pre- requirement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/tao-security-groups",
          children: " Tạo Security Groups "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./t%E1%BA%A1o-floating-ip",
          children: " Tạo Floating IP "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./t%E1%BA%A1o-subnets",
          children: " Tạo Subnets "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./management/phan-quyen-tinh-nang-database",
          children: " Phân quyền tính năng Database "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/roles",
              children: " Roles "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/provision-database-engine",
          children: " Provision Database Engine "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/khoi-tao-database-engine",
              children: " Khởi tạo Database Engine "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/thao-tac-voi-database-engine",
              children: " Thao tác với Database Engine "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./backup-proxy/quan-ly-backups",
          children: " Quản lý Backups "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./backup-proxy/tao-backups-service",
              children: " Tạo Backups service "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./backup-proxy/cap-nhat-va-xoa-backup-job",
              children: " Cập nhật và xóa Backup job "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./backup-proxy/cap-nhat-va-xoa-backup-service",
              children: " Cập nhật và xóa Backup Service "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./backup-proxy/quan-ly-restore",
          children: " Quản lý Restore "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/quan-ly-resource",
          children: " Quản lý Resource "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/quan-ly-configuration",
          children: " Quản lý Configuration "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/quan-ly-process-monitoring",
          children: " Quản lý Process Monitoring "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/quan-ly-event-logs",
          children: " Quản lý Event Logs "
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./backup-proxy/db-proxy",
          children: " DB Proxy "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./backup-proxy/khoi-tao-db-proxy",
              children: " Khởi tạo DB Proxy "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./backup-proxy/thao-tac-voi-db-proxy",
              children: " Thao tác với DB Proxy "
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
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