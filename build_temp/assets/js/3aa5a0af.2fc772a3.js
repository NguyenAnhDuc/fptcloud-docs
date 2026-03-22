"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[2603],{

/***/ 718072
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_db_operation_md_3aa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-db-operation-md-3aa.json
const site_docs_managed_fpt_database_engines_new_db_operation_md_3aa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/db-operation","title":"2. Managed – FPT Database Engines","description":"Vận hành cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/db-operation.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/db-operation","permalink":"/managed-fpt-database-engines-new/db-operation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Db operation","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-operation","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Db manage operate","permalink":"/managed-fpt-database-engines-new/db-manage-operate"},"next":{"title":"Db proxy","permalink":"/managed-fpt-database-engines-new/db-proxy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/db-operation.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Db operation',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-operation',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Thao tác vận hành",
  "id": "thao-tác-vận-hành",
  "level": 3
}, {
  "value": "Trạng thái và khả năng thao tác:",
  "id": "trạng-thái-và-khả-năng-thao-tác",
  "level": 3
}, {
  "value": "Thực hiện thao tác vận hành",
  "id": "thực-hiện-thao-tác-vận-hành",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vận hành cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này giúp bạn biết cách vận hành các cơ sở dữ liệu trên FPT Cloud Portal. Bạn có thể thực hiện các thao tác start, stop, restart và delete phù hợp với trạng thái vòng đời của cluster."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thao-tác-vận-hành",
      children: "Thao tác vận hành"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        }), " : khởi động một cụm cơ sở dữ liệu đang ở trạng thái đã dừng. Khi thao tác được thực hiện, trạng thái của cụm chuyển sang \"Starting\" và sau đó là \"Running\" khi sẵn sàng phục vụ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stop"
        }), " : dừng một cụm cơ sở dữ liệu ở trạng thái đang chạy. Khi dừng, cluster sẽ tạm ngưng xử lý workload. Trạng thái chuyển sang \"Stopping\" và sau đó là \"Stopped\". Ở trạng thái này, cơ sở dữ liệu không phục vụ truy cập nhưng có thể được khởi động lại khi cần."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart"
        }), " : khởi động lại một cụm cơ sở dữ liệu đang chạy. Thao tác này sẽ dừng và khởi động lại cụm, thường được sử dụng để áp dụng thay đổi cấu hình hoặc khắc phục sự cố tạm thời. Trạng thái hiển thị \"Restarting\" và quay lại \"Running\" khi hoàn tất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " : xoá một cụm cơ sở dữ liệu và toàn bộ dữ liệu liên quan. Hành động này không thể hoàn tác. Sau khi xóa thành công, cluster sẽ bị loại bỏ khỏi danh sách và các tài nguyên liên quan được giải phóng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trạng-thái-và-khả-năng-thao-tác",
      children: "Trạng thái và khả năng thao tác:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trạng thái"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ý nghĩa"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Các thao tác được thực hiện"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cơ sở dữ liệu đang được khởi tạo."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cơ sở dữ liệu đang hoạt động bình thường."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop, Restart, Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stopped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cơ sở dữ liệu đã dừng hoạt động."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start, Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Warning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cơ sở dữ liệu đang hoạt động không ổn định."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cơ sở dữ liệu gặp lỗi không xác định. Nếu không còn sử dụng, hãy xóa cơ sở dữ liệu để dọn dẹp tài nguyên, hoặc liên hệ FPT Support để được hỗ trợ xử lý."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thực-hiện-thao-tác-vận-hành",
      children: "Thực hiện thao tác vận hành"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện các thao tác vận hành, mở trang Database list, sau đó chọn biểu tượng \"⋯\" (More actions) trong cột \"Action\" của cơ sở dữ liệu cần thao tác. Danh sách các hành động khả dụng sẽ được hiển thị:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(665724)/* ["default"] */ .A) + "",
        width: "1795",
        height: "542"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi chọn một hành động, hệ thống sẽ hiển thị hộp thoại xác nhận. Bạn cần xác nhận thủ công để tiếp tục, nhằm tránh thực hiện các thao tác không mong muốn, đặc biệt với các hành động không thể hoàn tác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận, hệ thống sẽ thực hiện hành động trong khoảng 5–7 phút. Trong thời gian này, các thao tác khác đối với cơ sở dữ liệu sẽ tạm thời bị vô hiệu hóa cho đến khi quá trình hoàn tất."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./db-connect",
        children: " Previous Kết nối cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./upgrade-version",
        children: " Next Nâng cấp phiên bản cho cơ sở dữ liệu "
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

/***/ 665724
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ed761eb4e83d-db-list-action-28bef3d3c7f0a2b4acf0bf7f2af02399.png");

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