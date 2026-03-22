"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15616],{

/***/ 218720
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_data_services_cau_hinh_va_quan_ly_query_engine_md_80f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-data-services-cau-hinh-va-quan-ly-query-engine-md-80f.json
const site_docs_fpt_data_platform_data_services_cau_hinh_va_quan_ly_query_engine_md_80f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/data-services/cau-hinh-va-quan-ly-query-engine","title":"2. FPT Data Platform","description":"Truy cập và cấu hình quản lý Query Engine","source":"@site/docs/fpt-data-platform/data-services/cau-hinh-va-quan-ly-query-engine.md","sourceDirName":"fpt-data-platform/data-services","slug":"/fpt-data-platform/data-services/cau-hinh-va-quan-ly-query-engine","permalink":"/fpt-data-platform/data-services/cau-hinh-va-quan-ly-query-engine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cau hinh va quan ly query engine","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=cau-hinh-va-quan-ly-query-engine","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Apache flink","permalink":"/fpt-data-platform/data-services/apache-flink"},"next":{"title":"Guide nessie","permalink":"/fpt-data-platform/data-services/guide-nessie"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/data-services/cau-hinh-va-quan-ly-query-engine.md


const frontMatter = {
	sidebar_label: 'Cau hinh va quan ly query engine',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=cau-hinh-va-quan-ly-query-engine',
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
    h1: "h1",
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
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Truy cập và cấu hình quản lý Query Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Precondition"
      }), " : Dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query engine"
      }), " đã được khởi tạo thành công, trạng thái của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Successed"
      }), " và trạng thái của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Healthy"
      }), " (khởi tạo dịch vụ Query engine ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tại đây"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger"
      }), " theo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "URL"
      }), " tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Essential information"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Username"
      }), " /", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh, Hình ảnh",
        src: (__webpack_require__(893412)/* ["default"] */ .A) + "",
        width: "1227",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh, Hình ảnh",
        src: (__webpack_require__(777845)/* ["default"] */ .A) + "",
        width: "1600",
        height: "829"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tạo Trino Service từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger Admin"
      }), " , tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Manager"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource TRINO"
      }), " , ấn biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh, Hình ảnh",
        src: (__webpack_require__(718191)/* ["default"] */ .A) + "",
        width: "1600",
        height: "463"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập thông tin khởi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service name"
        }), " : tên service (là chuỗi ký tự nằm trong URL truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trino"
        }), " , có dạng: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "trino-xxxxxxxx"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh, Hình ảnh",
        src: (__webpack_require__(706226)/* ["default"] */ .A) + "",
        width: "1226",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Display name:"
          }), " tên hiển thị"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " : mô tả"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Status"
          }), " : trạng thái của ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Service"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Select Tag Service"
          }), " : lựa chọn thẻ"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username"
          }), " : tên tài khoản đăng nhập Query engine"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " : mật khẩu đăng nhập Query engine"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "jdbc.driverClassName"
          }), " : mặc định io.trino.jdbc.TrinoDriver"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "jdbc.url"
          }), " : địa chỉ kết nối Query engine qua JDBC (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "jdbc:trino:// :443"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Superusers"
          }), " : tên tài khoản mà khi kết nối Query engine sẽ được bỏ qua kiểm tra quyền truy cập"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Superuser groups"
          }), " : tên nhóm tài khoản mà khi kết nối Query engine sẽ được bỏ qua kiểm tra quyền truy cập"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service admin users"
          }), " : tên tài khoản trên Ranger được chỉ định làm admin của Service"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service admin usergroups"
          }), " : tên nhóm trên Ranger được chỉ định làm admin của Service"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Lưu thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin yêu cầu, người dùng ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " để lưu thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query engine"
      }), " vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger-Admin"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Kiểm tra kết nối"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại màn hình Service Manager, chọn biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit"
        }), " thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Service Trino"
        }), " vừa tạo, sau đó ấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Test connection"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh, Hình ảnh",
        src: (__webpack_require__(696185)/* ["default"] */ .A) + "",
        width: "1296",
        height: "696"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Đảm bảo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ranger-Admin"
        }), " đã kết nối thành công tới ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Query Engine"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trino"
        }), ") khi kết quả ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Test connection"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connected Successfully"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh, Hình ảnh",
        src: (__webpack_require__(642158)/* ["default"] */ .A) + "",
        width: "969",
        height: "301"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-ranger",
        children: " Previous Xem thông tin Ranger "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tag-sync",
        children: " Next Tag Sync (OpenMetadata & Ranger Integration) "
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

/***/ 706226
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0011febabf57-image4e-37096fa954f72640fadcfd993efc8929.png");

/***/ },

/***/ 893412
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2524d553d964-image4b-7010bd8732561c8022d45be98ddaf0e5.png");

/***/ },

/***/ 696185
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8ddbaa0787f8-image4f-b20773311ea31789f174a61533cf4378.png");

/***/ },

/***/ 777845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b9658e3c236-image4c-35c82967f3a5151a82aa72f8a53f0b12.png");

/***/ },

/***/ 718191
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a2d8109dc3a2-image4d-0459db9f64fa44886f2835464fc6205c.png");

/***/ },

/***/ 642158
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d344c6db7748-image50-7bebf31726e39036b4e0a9a4c4170846.png");

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