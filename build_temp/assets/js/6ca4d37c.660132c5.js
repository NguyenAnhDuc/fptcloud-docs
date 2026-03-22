"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[53060],{

/***/ 877420
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_tao_connector_source_s_3_md_6ca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-tao-connector-source-s-3-md-6ca.json
const site_docs_fpt_data_platform_tao_connector_source_s_3_md_6ca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/tao-connector-source-s3","title":"2. FPT Data Platform","description":"2.21 Tạo connector source S3","source":"@site/docs/fpt-data-platform/tao-connector-source-s3.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/tao-connector-source-s3","permalink":"/fpt-data-platform/tao-connector-source-s3","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao connector source s3","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tao-connector-source-s3","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao connector source kafka","permalink":"/fpt-data-platform/tao-connector-source-kafka"},"next":{"title":"Tao hive metastore","permalink":"/fpt-data-platform/tao-hive-metastore"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/tao-connector-source-s3.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao connector source s3',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tao-connector-source-s3',
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
    code: "code",
    h1: "h1",
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
      children: "2.21 Tạo connector source S3"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết nối tới nguồn dữ liệu là các file lưu trữ trên Amazon S3 hoặc S3-compatible storage (vd: MinIO, FPT Object Storage, v.v.)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tự động đọc, quét và ingest (nạp) dữ liệu từ các file (CSV, TSV, AVRO, XML,...) trong bucket vào hệ thống streaming hoặc data pipeline."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp tạo connector, Type là source, Database là S3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-condition:"
      }), " Status CDC service H", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ealthy"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo connector, người dùng thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại thanh menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Platform"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace Management"
      }), " > chọn Workspace name"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "create-connector",
        src: (__webpack_require__(171253)/* ["default"] */ .A) + "",
        width: "628",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập các thông tin màn connector information:"]
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
          }), " (required): chọn source"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " (required): chọn S3"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rugx.png",
        alt: "Hình ảnh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập các thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "URL"
          }), " (reqired): địa chỉ truy cập"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bucket name"
          }), " (required): tên bucket"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access key"
          }), " (required): khóa truy cập"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Secret"
          }), " (required): mã truy cập"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " (required): thư mục chứa các file souce"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Information"
      }), " , người dùng ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Connector"
      }), " đến ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3"
      }), " đã nhập"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topic prefix (required):"
        }), " Khi dữ liệu thay đổi, các sự kiện thay đổi sẽ được produce vào các Kafka topics"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-ruuz.png",
        alt: "Hình ảnh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional properties"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập các thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional properties"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type (required)"
          }), " : Chọn định dạng file mà connector sẽ đọc. Các lựa chọn thường có: ROW (CSV, TSV), XML, Avro"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File filter regex pattern (required)"
          }), " : Nhập biểu thức regex để lọc file theo tên khi quét trong source (ví dụ: .*.csv$ sẽ chỉ nhận file kết thúc bằng .csv)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Mode (required)"
          }), " : Chọn chế độ chịu lỗi khi xử lý dữ liệu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "None: Không bỏ qua lỗi, gặp lỗi sẽ dừng."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "All: Bỏ qua tất cả lỗi, ghi nhận lỗi ở log."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Header definition (required)"
          }), " :"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chọn cách xác định tên cột cho dữ liệu đầu vào."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **From file (required):** Tên cột lấy từ dòng đầu tiên của file. \n\n* **Autogenerated (required):** Tên cột sẽ tự sinh (thường là column1, column2,...). \n\n* **User provided (required):** Bạn tự nhập danh sách tên cột ở phần “Column name” phía dưới.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delimiter (required)"
          }), " : Ký tự phân tách giữa các cột. Thường mặc định là dấu phẩy “,”, nhưng bạn có thể đổi thành ký tự khác (vd: tab, dấu chấm phẩy,...)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Trim value (required)"
          }), " : Chọn Yes/No để có cắt bỏ khoảng trắng thừa ở đầu/cuối value của từng cột hay không."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Column name (required):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Chỉ hiện nếu chọn Header definition = User provided"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nhập/tạo danh sách tên các cột dữ liệu (từng tên cột cách nhau bởi dấu phẩy hoặc enter, có thể thêm từng tên bằng nút “+” hoặc “Tag”)."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rvdn.png",
        alt: "Hình ảnh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rvkk.png",
        alt: "Hình ảnh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " Kiểm tra thông tin và nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành việc tạo connector."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-connector-source-kafka",
        children: " Previous 2.20 Tạo connector source Kafka "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-connector",
        children: " Next 2.22 Xem thông tin connector "
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

/***/ 171253
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab27c895f66e-Picture1-1-6653bad56793048875277691944fcde3.png");

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