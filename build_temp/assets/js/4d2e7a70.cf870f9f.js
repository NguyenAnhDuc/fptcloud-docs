"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[89257],{

/***/ 343414
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_cdc_service_hanh_dong_voi_connector_md_4d2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-cdc-service-hanh-dong-voi-connector-md-4d2.json
const site_docs_fpt_data_platform_cdc_service_hanh_dong_voi_connector_md_4d2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/cdc-service/hanh-dong-voi-connector","title":"2. FPT Data Platform","description":"2.23 Hành động với connector","source":"@site/docs/fpt-data-platform/cdc-service/hanh-dong-voi-connector.md","sourceDirName":"fpt-data-platform/cdc-service","slug":"/fpt-data-platform/cdc-service/hanh-dong-voi-connector","permalink":"/fpt-data-platform/cdc-service/hanh-dong-voi-connector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Hanh dong voi connector","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=hanh-dong-voi-connector","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Các bước tạo connector:","permalink":"/fpt-data-platform/cdc-service/elasticsearch-sink-connector"},"next":{"title":"Hanh dong voi snapshot","permalink":"/fpt-data-platform/cdc-service/hanh-dong-voi-snapshot"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/cdc-service/hanh-dong-voi-connector.md


const frontMatter = {
	sidebar_label: 'Hanh dong voi connector',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=hanh-dong-voi-connector',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.23 Hành động với connector"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các trạng thái của connector, bao gồm:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trạng thái"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PAUSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connector đã bị tạm dừng, không xử lý dữ liệu nhưng vẫn giữ nguyên trạng thái và cấu hình"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "STOPPED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connector đã bị dừng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RUNNING"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connector đang chạy và xử lý dữ liệu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connector gặp lỗi và không thể tiếp tục xử lý dữ liệu"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có thể thực hiện các hành động với connector theo bảng ma trận chuyển đổi trạng thái dưới đây:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Từ trạng thái & Action"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resume"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Restart"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reset offset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RUNNING"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PAUSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "STOPPED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trường hợp sử dụng:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hành động"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Restart"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Khởi động lại connector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pause"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tạm dừng trình kết nối và các tác vụ của nó, dừng xử lý tin nhắn cho đến khi trình kết nối được tiếp tục. Hành động này không đồng bộ và các tác vụ sẽ không chuyển sang trạng thái ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PAUSED"
            }), " cùng lúc."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Ảnh hưởng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n– Connector và các task của nó sẽ ngừng xử lý dữ liệu.", (0,jsx_runtime.jsx)(_components.br, {}), "\n– Connector vẫn tồn tại trong hệ thống và có thể được resume (tiếp tục) bất kỳ lúc nào.", (0,jsx_runtime.jsx)(_components.br, {}), "\n– Các offset (vị trí đọc dữ liệu) của connector được giữ nguyên, không bị mất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Khi nào sử dụng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n– Khi muốn tạm dừng xử lý dữ liệu mà không muốn xóa hoặc dừng hoàn toàn connector.", (0,jsx_runtime.jsx)(_components.br, {}), "\n– Khi cần bảo trì hệ thống hoặc khắc phục sự cố tạm thời.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resume"
      }), " | Tiếp tục trình kết nối bị tạm dừng. Hành động này không đồng bộ và các tác vụ sẽ không chuyển sang trạng thái chạy cùng lúc", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stop"
      }), " | Dừng kết nối nhưng không xóa kết nối. Tất cả các tác vụ cho kết nối sẽ bị tắt hoàn toàn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Ảnh hưởng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n– Connector và các task của nó sẽ dừng hoạt động.", (0,jsx_runtime.jsx)(_components.br, {}), "\n– Connector bị xóa khỏi danh sách các connector đang chạy.", (0,jsx_runtime.jsx)(_components.br, {}), "\n– Cấu hình của connector bị xóa, và cần tạo lại connector từ đầu nếu muốn sử dụng lại."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "• Khi nào sử dụng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n– Khi không cần sử dụng connector đó nữa.", (0,jsx_runtime.jsx)(_components.br, {}), "\n– Khi muốn xóa hoàn toàn connector để giải phóng tài nguyên hoặc thay thế bằng một connector mới.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reset offset"
      }), " | Đặt lại giá trị offset cho connector, để connector đọc lại dữ liệu từ đầu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-connector",
        children: " Previous 2.22 Xem thông tin connector "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-connector",
        children: " Next 2.24 Xóa connector "
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