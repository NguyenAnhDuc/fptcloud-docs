"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[15308],{

/***/ 225383
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_tao_connector_source_kafka_md_247_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-tao-connector-source-kafka-md-247.json
const site_docs_fpt_data_platform_tao_connector_source_kafka_md_247_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/tao-connector-source-kafka","title":"2. FPT Data Platform","description":"2.20 Tạo connector source Kafka","source":"@site/docs/fpt-data-platform/tao-connector-source-kafka.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/tao-connector-source-kafka","permalink":"/fpt-data-platform/tao-connector-source-kafka","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao connector source kafka","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tao-connector-source-kafka","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao cdc service","permalink":"/fpt-data-platform/tao-cdc-service"},"next":{"title":"Tao connector source s3","permalink":"/fpt-data-platform/tao-connector-source-s3"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/tao-connector-source-kafka.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao connector source kafka',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tao-connector-source-kafka',
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
    em: "em",
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
      children: "2.20 Tạo connector source Kafka"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết nối và ingest dữ liệu từ một hoặc nhiều Kafka topic của một Kafka cluster khác (có thể là nguồn ngoài hoặc hệ thống khác)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cho phép ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "đồng bộ"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chuyển tiếp"
      }), " dữ liệu giữa các cluster"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trường hợp tạo connector, Type là source, Database là Kafka"
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
          }), " (required): chọn Kafka"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có hai lựa chọn: From FPT Database Engine, Manual configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trường hợp chọn Manual configuration"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập và chọn các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Cluster alias name** : Tên alias đại diện cho Kafka cluster, chỉ gồm chữ cái, số, dấu “-”; sử dụng làm tiền tố cho tên topic khi replicate dữ liệu. \n\n* **Bootstrap server endpoint:** nhập địa chỉ Bootstrap server endpoint \n\n* **Security protocol** : chọn một trong các giao thức bảo mật sau: \n\n* **SASL_PLAINTEXT** : là cơ chế xác thực đơn giản thông qua Username và password \n\n  * SASL Mechanism \n\n  * SASL Username \n\n  * SASL Password \n\n* **SASL_SSL:** cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password \n\n  * SASL Mechanism1 \n\n  * SASL Username \n\n  * SASL Password \n\n* **PLAINTEXT:** dữ liệu truyền qua mạng không được mã hóa, không khuyến khích sử dụng \n\n* **SSL:** là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rwdm.png",
        alt: "Hình ảnh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trường hợp chọn From FPT Database Engine"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập và chọn các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database Name (required):"
          }), " chọn Database"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Cluster alias name"
              }), " : Tên alias đại diện cho Kafka cluster, chỉ gồm chữ cái, số, dấu “-”; sử dụng làm tiền tố cho tên topic khi replicate dữ liệu."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bootstrap server endpoint:"
              }), " nhập địa chỉ Bootstrap server endpoint"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Security protocol"
              }), " : chọn một trong các giao thức bảo mật sau:"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SASL_PLAINTEXT"
              }), " : là cơ chế xác thực đơn giản thông qua Username và password"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SASL Mechanism"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SASL Username"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SASL Password"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SASL_SSL"
              }), " : cung cấp một lớp bảo mật toàn diện cho việc xác thực và mã hóa dữ liệu thông qua Username và password"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SASL Mechanism"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SASL Username"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "SASL Password"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "PLAINTEXT"
              }), " : dữ liệu truyền qua mạng không được mã hóa, không khuyến khích sử dụng"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SSL"
              }), " : là một giao thức bảo mật mạng được sử dụng để bảo vệ dữ liệu khi truyền qua mạng Internet"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rwif.png",
        alt: "Hình ảnh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kafka topic"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhấn vào dấu ‘+’ để lấy thông tin topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: giới hạn chỉ lấy tối đa 100 topic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Connection"
      }), " để kiểm tra kết nối từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " tới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka Cluster"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional properties"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập và chọn các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Number of tasks: Nhập số lượng task cho connector. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(Số này thường nhỏ hơn hoặc bằng số partition của Kafka topic.)"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.em, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            }), " :"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Replication policy: Chọn policy khi replicate topic."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "DefaultReplicationPolicy"
            }), " : Thêm prefix alias cluster nguồn vào tên topic replicate."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD: topic-name sẽ thành alias-name.topic-name"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* _IdentityReplicationPolicy_ : Giữ nguyên tên topic. \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VD: topic-name sẽ thành topic-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Replication factor: Nhập số bản sao cho mỗi partition Kafka topic."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nhập -1 nếu muốn sử dụng replication factor mặc định của broker."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rwqt.png",
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
        src: "https://fptcloud.com/wp-content/uploads/2024/07/SCR-20250723-rwvd.png",
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
        href: "./redis-sink-connector",
        children: " Previous 2.19 Redis Sink Connector "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tao-connector-source-s3",
        children: " Next 2.21 Tạo connector source S3 "
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