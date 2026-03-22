"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[68754],{

/***/ 230659
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_cdc_service_elasticsearch_sink_connector_md_f9a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-cdc-service-elasticsearch-sink-connector-md-f9a.json
const site_docs_fpt_data_platform_cdc_service_elasticsearch_sink_connector_md_f9a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/cdc-service/elasticsearch-sink-connector","title":"2. FPT Data Platform","description":"2.17 Elasticsearch Sink Connector","source":"@site/docs/fpt-data-platform/cdc-service/elasticsearch-sink-connector.md","sourceDirName":"fpt-data-platform/cdc-service","slug":"/fpt-data-platform/cdc-service/elasticsearch-sink-connector","permalink":"/fpt-data-platform/cdc-service/elasticsearch-sink-connector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Các bước tạo connector:","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=elasticsearch-sink-connector","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Các bước tạo connector:","permalink":"/fpt-data-platform/cdc-service/clickhouse-replication-sink-connector"},"next":{"title":"Hanh dong voi connector","permalink":"/fpt-data-platform/cdc-service/hanh-dong-voi-connector"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/cdc-service/elasticsearch-sink-connector.md


const frontMatter = {
	sidebar_label: 'Các bước tạo connector:',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=elasticsearch-sink-connector',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "Các bước tạo connector:",
  "id": "các-bước-tạo-connector",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
      children: "2.17 Elasticsearch Sink Connector"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo connector, Type là sink, Database là Elasticsearch"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-condition:"
      }), " Status CDC service Healthy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "các-bước-tạo-connector",
      children: "Các bước tạo connector:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại thanh menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Platform"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace Management"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace name"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tại phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "My services"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDC service"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại màn detail ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CDC service"
      }), " > Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connectors"
      }), " > nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a connector"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập các thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connector Information"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " (required): tên connector"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: Tên connector có thể chứa các kí tự chữ cái thường a-z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-”."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (required): Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "sink"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " (required): Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Elasticsearch"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "image-1",
            src: (__webpack_require__(262333)/* ["default"] */ .A) + "",
            width: "628",
            height: "236"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " ở góc phải màn hình để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Information"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **URL** : Địa chỉ truy cập \n\n* **Username** : Tên tài khoản \n\n* **Password** : Mật khẩu\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Connection"
      }), " để kiểm tra kết nối từ Workspace tới Elasticsearch đã nhập"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Converter"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Converter key"
              }), " : Chọn giá trị key cho converter"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Converter key schema enable"
              }), " : Chọn giá trị có/không sử dụng schema trong Converter key"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Converter value"
              }), " : Chọn giá trị value cho converter"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Converter value schema enable"
              }), " : Chọn giá trị có/không sử dụng schema trong Converter value"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kafka topic"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nhấn vào dấu ‘+’ để lấy thông tin topic"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Chú ý: giới hạn chỉ lấy tối đa 100 topic ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "image-2",
                src: (__webpack_require__(1768)/* ["default"] */ .A) + "",
                width: "628",
                height: "542"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Number of tasks"
            }), " : Số lượng tác vụ tối đa có thể thực hiện song song"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Map table"
          }), " : Liên kết topic và bảng dữ liệu của cơ sở dữ liệu đích"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Create new"
              }), " : Lựa chọn tạo mới bảng hoặc lựa chọn từ danh sách bảng đã có trong cơ sở dữ liệu đích"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Index: Chọn index nếu không chọn tạo mới index, nhập tên index nếu lựa chọn tạo mới index"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Error Tolerance"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mode"
            }), " :"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "None"
            }), " : Connector dừng xử lý nếu có lỗi xảy ra ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "image-3",
              src: (__webpack_require__(366402)/* ["default"] */ .A) + "",
              width: "628",
              height: "486"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " ở góc phải màn hình để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "image-4",
        src: (__webpack_require__(938586)/* ["default"] */ .A) + "",
        width: "628",
        height: "626"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8"
      }), " : Kiểm tra thông tin, sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành việc tạo connector"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./s3-sink-connector",
        children: " Previous 2.16 S3 Sink Connector "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./iceberg-logs-sink-connector",
        children: " Next 2.18 Iceberg (logs) Sink Connector "
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

/***/ 262333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/83319c1031d4-sink-Elasticsearch-1-7bf9803a4aa4f0f2780332c2abcb8126.png");

/***/ },

/***/ 1768
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e8feaa053a4-sink-Elasticsearch-2-55c5da22141dfc82ac4d6f580e31ff1c.png");

/***/ },

/***/ 938586
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c17a702b12a9-sink-Elasticsearch-4-8ebc37fe047372744d67e40de3cf8130.png");

/***/ },

/***/ 366402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d69e4a56521a-sink-Elasticsearch-3-506c2272929e214448606e5388e99c9e.png");

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