"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[58064],{

/***/ 531603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_hanh_dong_voi_snapshot_md_9e4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-hanh-dong-voi-snapshot-md-9e4.json
const site_docs_fpt_data_platform_hanh_dong_voi_snapshot_md_9e4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/hanh-dong-voi-snapshot","title":"2. FPT Data Platform","description":"2.27. Hành động với Snapshot","source":"@site/docs/fpt-data-platform/hanh-dong-voi-snapshot.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/hanh-dong-voi-snapshot","permalink":"/fpt-data-platform/hanh-dong-voi-snapshot","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Hanh dong voi snapshot","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=hanh-dong-voi-snapshot","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Hanh dong voi connector","permalink":"/fpt-data-platform/hanh-dong-voi-connector"},"next":{"title":"Hive metastore","permalink":"/fpt-data-platform/hive-metastore"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/hanh-dong-voi-snapshot.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Hanh dong voi snapshot',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=hanh-dong-voi-snapshot',
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
      children: "2.27. Hành động với Snapshot"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trường hợp sử dụng:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Hành động"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bắt đầu thực hiện quá trình snapshot. Quá trình này không block bảng được snapshot và luồng stream vẫn hoạt động."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ảnh hưởng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Snapshot status chuyển sang In-progress", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Kafka topic bắt đầu nhận dữ liệu từ snapshot", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Connector và tasks vẫn hoạt động bình thường"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Khi nào sử dụng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi muốn snapshot toàn bộ dữ liệu hiện tại của database vào Kafka topic", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi cần khởi tạo dữ liệu ban đầu cho hệ thống", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi muốn chạy lại snapshot sau khi đã Completed hoặc Failed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pause"
      }), " | Tạm dừng incremental snapshot. Sau khi có tín hiệu này, connector sẽ tạm dừng hoạt động snapshot đang thực thi. Toàn bộ data collection sẽ được dừng lại tại thời điểm nhận tín hiệu dừng snapshot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ảnh hưởng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Snapshot status chuyển sang Paused", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Kafka topic ngưng nhận dữ liệu từ snapshot", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Tiến trình snapshot được lưu lại, có thể Resume để tiếp tục", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Connector và tasks vẫn hoạt động bình thường"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Khi nào sử dụng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi cần tạm dừng snapshot trong giờ cao điểm để tránh ảnh hưởng hiệu năng", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi cần bảo trì hệ thống hoặc khắc phục sự cố tạm thời", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resume"
      }), " | Tiếp tục một incremental snapshot đã bị tạm dừng. Sau tín hiệu này, connector sẽ tiếp tục hoạt động snapshot đã bị tạm dừng trước đó."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ảnh hưởng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Snapshot status chuyển sang In-progress", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Kafka topic tiếp tục nhận dữ liệu từ vị trí đã pause", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Snapshot tiếp tục chạy cho đến khi hoàn tất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Khi nào sử dụng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Sau khi đã Pause và muốn tiếp tục snapshot", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi hệ thống đã ổn định và có thể tiếp tục xử lý snapshot", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stop"
      }), " | Dừng, hủy bỏ bản snapshot ad hoc đang chạy. Toàn bộ tiến trình snapshot hiện tại sẽ bị hủy bỏ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ảnh hưởng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Snapshot status chuyển sang Completed", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Kafka topic ngưng nhận dữ liệu từ snapshot ngay lập tức", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Tiến trình snapshot bị hủy bỏ, cần Execute lại từ đầu nếu muốn snapshot"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Khi nào sử dụng:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi không còn cần snapshot nữa", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi phát hiện lỗi trong quá trình snapshot và muốn dừng ngay", (0,jsx_runtime.jsx)(_components.br, {}), "\n- Khi cần giải phóng tài nguyên hệ thống"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./trang-thai-snapshot",
        children: " Previous 2.26. Trạng thái Snapshot "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-cdc-service",
        children: " Next 3. Xóa CDC Service "
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