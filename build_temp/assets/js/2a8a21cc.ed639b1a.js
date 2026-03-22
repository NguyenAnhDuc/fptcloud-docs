"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[78552],{

/***/ 199970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_monitoring_md_2a8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-monitoring-md-2a8.json
const site_docs_managed_fpt_database_engines_new_monitoring_md_2a8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/monitoring","title":"2. Managed – FPT Database Engines","description":"Monitoring","source":"@site/docs/managed-fpt-database-engines-new/monitoring.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/monitoring","permalink":"/managed-fpt-database-engines-new/monitoring","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Monitoring","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=monitoring","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Migration cho sqlserver","permalink":"/managed-fpt-database-engines-new/migration-cho-sqlserver"},"next":{"title":"Managed – FPT Database Engines","permalink":"/managed-fpt-database-engines-new/mysql-troubleshooting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/monitoring.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Monitoring',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=monitoring',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Bước 1: Truy cập chức năng",
  "id": "bước-1-truy-cập-chức-năng",
  "level": 3
}, {
  "value": "Bước 2: Tích hợp/huỷ tích hợp giám sát",
  "id": "bước-2-tích-hợphuỷ-tích-hợp-giám-sát",
  "level": 3
}, {
  "value": "Bước 3: Xem thông tin workspace",
  "id": "bước-3-xem-thông-tin-workspace",
  "level": 3
}, {
  "value": "Bước 4: Xem thông tin monitoring",
  "id": "bước-4-xem-thông-tin-monitoring",
  "level": 3
}, {
  "value": "Xem Metrics:",
  "id": "xem-metrics",
  "level": 4
}, {
  "value": "Xem Logs:",
  "id": "xem-logs",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    h4: "h4",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng Monitoring cung cấp khả năng quan sát theo thời gian thực về tình trạng vận hành, hiệu năng và mức sử dụng tài nguyên của các cớ ở dữ liệu trên FPT Cloud. Monitoring thu thập và trực quan hóa các chỉ số (metrics) và log quan trọng, giúp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phát hiện sớm các bất thường."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đánh giá tải truy vấn."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chủ động đưa ra quyết định để tối ưu hiệu năng và tính sẵn sàng."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitoring trong FPT Database Engine được tích hợp với hệ thống FPT Monitoring để thu thập metrics và logs, đồng thời cung cấp dashboard và cảnh báo khi cần thiết."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn này mô tả cách truy cập, cấu hình và sử dụng Monitoring để theo dõi sức khỏe và hiệu suất của database clusters trên FPT Cloud Portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-chức-năng",
      children: "Bước 1: Truy cập chức năng"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " ” → “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Database"
      }), " ”. Trên trang Database list, chọn cụm cơ sở dữ liệu cần giám sát > chọn tab “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitor"
      }), " ” để vào chức năng. Tùy theo trạng thái kích hoạt Monitoring, màn hình hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chưa kích hoạt monitoring: Hệ thống hiển thị màn hình yêu cầu liên hệ FPT Support. Khách hàng cần liên hệ đội hỗ trợ để kích hoạt Monitoring."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(20033)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1404"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Đã kích hoạt monitoring: Hệ thống hiển thị danh sách các metrics và logs theo loại database. Các metric hoặc log chưa được tích hợp với FPT Monitoring sẽ có Intergrated Status = “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disabled"
        }), " ”."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(464684)/* ["default"] */ .A) + "",
        width: "2036",
        height: "896"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-tích-hợphuỷ-tích-hợp-giám-sát",
      children: "Bước 2: Tích hợp/huỷ tích hợp giám sát"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tích hợp giám sát (Integrate)"
        }), " : Bật thu thập metrics/logs cho database cluster. Để thực hiện, trên ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workspace List"
        }), " , chọn hành động “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrate"
        }), " ” ứng với workspace cần giám sát. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. Sau khi tích hợp thành công, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Status"
        }), " sẽ chuyển sang “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enabled"
        }), " ”, hệ thống FPT Monitoring bắt đầu thu thập các chỉ số tương ứng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Huỷ tích hợp giám sát (Disintegrate)"
        }), " : Tắt thu thập metrics/logs cho database cluster. Để thực hiện, trên ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workspace List"
        }), " , chọn hành động “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disintegrate"
        }), " ” ứng với workspace cần huỷ giám sát. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. Sau khi huỷ tích hợp thành công, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Status"
        }), " sẽ chuyển sang “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disabled"
        }), " ”, hệ thống FPT Monitoring ngừng thu thập các chỉ số tương ứng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-3-xem-thông-tin-workspace",
      children: "Bước 3: Xem thông tin workspace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tích hợp giám sát thành công (Integrated Status = “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enabled"
      }), " ”), nhấn vào workspace name để mở trang chi tiết workspace. Tại đây, bạn có thể xem các thông tin liên quan: Monitoring dashboards, Contact points và Datasources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145026)/* ["default"] */ .A) + "",
        width: "1638",
        height: "887"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-4-xem-thông-tin-monitoring",
      children: "Bước 4: Xem thông tin monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể xem các dashboards hiển thị metrics theo thời gian thực và dữ liệu lịch sử trên Grafana bằng cách nhấn vào Dashboard URL để chuyển đến trang đăng nhập:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(9202)/* ["default"] */ .A) + "",
        width: "1803",
        height: "774"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập thông tin đăng nhập là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Authentication – Username"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Authentication – Password"
      }), " được cung cấp trên trang chi tiết workspace và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Login"
      }), " để vào trang chủ Grafana:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298184)/* ["default"] */ .A) + "",
        width: "1810",
        height: "862"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xem-metrics",
      children: "Xem Metrics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn vào “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Toggle Menu"
      }), " ” > chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dashboards"
      }), " ”. Màn hình Dashboards được hiển thị. Chọn Template tương ứng với loại database engine để xem các folders có sẵn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109599)/* ["default"] */ .A) + "",
        width: "1507",
        height: "696"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn folder cần xem để hiển thị các metric:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699181)/* ["default"] */ .A) + "",
        width: "1807",
        height: "857"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "xem-logs",
      children: "Xem Logs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn vào “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Toggle Menu"
      }), " ” > chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Explore"
      }), " ”:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(749620)/* ["default"] */ .A) + "",
        width: "1805",
        height: "854"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn “Loki”:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912377)/* ["default"] */ .A) + "",
        width: "1810",
        height: "498"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong ô label filter, chọn nhãn cần xem log:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(664023)/* ["default"] */ .A) + "",
        width: "1808",
        height: "472"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong ô value, chọn đối tượng cần xem log:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(309703)/* ["default"] */ .A) + "",
        width: "1809",
        height: "618"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông tin log được hiển thị như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(483318)/* ["default"] */ .A) + "",
        width: "1808",
        height: "860"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./notification",
        children: " Previous Notification "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./log",
        children: " Next Event Logs "
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

/***/ 109599
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/19d10d375e54-metric-dashboard-dc3a79811a1d83a957191204b60f672d.png");

/***/ },

/***/ 309703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1becce67ea2d-dashboard-log-runquery-5752e2e0163607d90320ae7d35479e97.png");

/***/ },

/***/ 145026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4d7a2af8abdc-view-workspace-detail-fcade3dd17f34001d50fff080da84cec.png");

/***/ },

/***/ 664023
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/51eae0b532a9-dashboard-log-filter-235e7a254da55d56cd8a570d66a21c3b.png");

/***/ },

/***/ 749620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/649998253122-dashboard-log1-1-a9f27834fa51bddb79daa44558c01689.png");

/***/ },

/***/ 20033
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/665c70e9988b-monitor-not-available-scaled-9ea9e142e1645ee402fe4a45b0840dfe.png");

/***/ },

/***/ 699181
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/81a755686a0a-metric-dashboard1-1fb36a84ce751b04c6b6d01c22bc8e93.png");

/***/ },

/***/ 912377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8404b97b30e2-dashboard-log2-060ec51f34b0482f5b22fe9b8d68d518.png");

/***/ },

/***/ 483318
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9c882ffabb5a-dashboard-log-view-df0de201d5c94f9e0f4acce5f59172cb.png");

/***/ },

/***/ 464684
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ba8960c74e23-monitor-enable-4730291aa53de944b43a487f236cd565.png");

/***/ },

/***/ 9202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee39a38df211-login-grafana-88e4c86fb163d8062d29ec7b4bd83c60.png");

/***/ },

/***/ 298184
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ff1e4760e11f-grafana-home-0918601ac614d0c8c9cc02be7d85d153.png");

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