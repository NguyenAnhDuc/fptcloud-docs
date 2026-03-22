"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[38658],{

/***/ 578757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_tao_profile_md_94a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-tao-profile-md-94a.json
const site_docs_fpt_data_platform_tao_profile_md_94a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/tao-profile","title":"2. FPT Data Platform","description":"Tạo Profile","source":"@site/docs/fpt-data-platform/tao-profile.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/tao-profile","permalink":"/fpt-data-platform/tao-profile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao profile","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tao-profile","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao processing service","permalink":"/fpt-data-platform/tao-processing-service"},"next":{"title":"Tao query engine","permalink":"/fpt-data-platform/tao-query-engine"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/tao-profile.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao profile',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tao-profile',
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
    em: "em",
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
      children: "Tạo Profile"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi đăng nhập Jupyterhub, người dùng có vai trò ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin"
      }), " lựa chọn Menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile"
      }), " , ấn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Profile"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Profile Name"
          }), " : tên profile"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Slug"
          }), " : nhập tên các thư viện cần sử dụng khi Spawn server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image"
          }), " : chọn image sử dụng khi chạy profile từ danh sách"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MODE"
          }), " : chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "local"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "S3_ACCESSIBLE"
          }), " : chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "false"
          }), " nếu không sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "S3"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "true"
          }), " nếu sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "S3"
          }), " và nhập các thông tin"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "S3_ENDPOINT"
              }), " : URL endpoint của S3 service"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "S3_ACCESS_KEY"
              }), " : Access key ID để xác thực với S3 service"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "S3_SECRET_KEY"
              }), " : Secret access key để xác thực với S3 service"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LAKEHOUSE_ENABLED"
          }), " : chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "false"
          }), " nếu không sử dụng kết nối ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "lakehouse"
          }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "true"
          }), " nếu sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "lakehouse"
          }), " và nhập các thông tin"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "CATALOG_TYPE"
              }), " : Loại metadata catalog được sử dụng, lựa chọn Hive hoặc Nessie"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "CATALOG_URI"
              }), " : URI kết nối đến metadata catalog"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "SPARK_WAREHOUSE_DIR"
              }), " : Đường dẫn thư mục warehouse cho Apache Spark"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Additional Environment Variables"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "KEY: nhập tên biến môi trường"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Value: nhập giá trị của biên môi trường tương ứng"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU Guarantee"
          }), " : nhập thông tin lượng CPU đảm bảo cho profile khi khởi tạo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU Limit"
          }), " : nhập thông tin ngưỡng tối đa của CPU khi sử dụng proflie"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Guarantee"
          }), " : nhập thông tin lượng RAM đảm bảo cho profile khi khởi tạo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory Limit"
          }), " : nhập thông tin ngưỡng tối đa của RAM khi sử dụng proflie"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Available Worker Pools"
          }), " : lựa chọn từ danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Worker Pool"
          }), " từ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "service Processing"
          }), " để chọn môi trường khi Spawn của profile"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Active profile"
          }), " : tích chọn để profile sau khi tạo ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi nhập đầy đủ các thông tin, ấn Create Prolife để hoàn thành tạo mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(938952)/* ["default"] */ .A) + "",
        width: "872",
        height: "857"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đảm bảo quyền truy cập của người dùng với catalog của lakehouse, thực hiện phân quyền thư mục trên FPT Cloud Storage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 1"
          }), " : Truy cập ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://console.fptcloud.com/",
            children: "https://console.fptcloud.com/"
          }), " , chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Object Storage"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 2"
          }), " : Tại giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Object Storage Management"
          }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sub user"
          }), " , ấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SubUser"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(117757)/* ["default"] */ .A) + "",
        width: "1237",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3"
        }), " : Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Subuser"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access level for sub user"
        }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Full"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(450650)/* ["default"] */ .A) + "",
        width: "1229",
        height: "345"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 4"
        }), " : Tại giao diện danh sách ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Sub User,"
        }), " bấm xem chi tiết thông tin, ấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Generate Key,"
        }), " sau đó lưu lại thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret Key"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(282452)/* ["default"] */ .A) + "",
        width: "475",
        height: "434"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 5"
        }), " : Quay lại giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Object Storage Management"
        }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Buckets."
        }), " Tại bucket cần phân quyền cho subuser, chọn Action ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Config"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(654982)/* ["default"] */ .A) + "",
        width: "1230",
        height: "496"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 6"
        }), " : Tại giao diện chi tiết bucket chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket Plolicy"
        }), " , ấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add Policy Statement"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(294597)/* ["default"] */ .A) + "",
        width: "1228",
        height: "811"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bước 7"
          }), " : Tại giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Policy Statement"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Sid"
              }), " : nhập statement ID"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Effect"
              }), " : chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Allow"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Principal"
              }), " : chọn danh sách subuser"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Action"
              }), " : Tích chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Action"
              }), " , tích chọn ", (0,jsx_runtime.jsxs)(_components.em, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "All S3 Actions (s3."
                }), ")"]
              }), "*"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Resource (ARN)"
              }), " : nhập thông tin resource theo format, chỉ định subuser tới chính xác thư mục chứa ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "catalog"
              }), " được quyền"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " để hoàn thành cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Statement"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo, thông tin profile hiện thị tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Profile List"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(681868)/* ["default"] */ .A) + "",
        width: "1048",
        height: "789"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./them-nguoi-dung",
        children: " Previous Thêm người dùng "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./phan-quyen-nguoi-dung-su-dung-profile",
        children: " Next Phân quyền người dùng sử dụng profile "
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

/***/ 117757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3f749a4b5fae-image13-2-7ac2bad4cd63d2306fe0bbe26d17e054.png");

/***/ },

/***/ 681868
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4376c6f5b349-image18-1-e1d79acbbbbdbe1dc6c27efa8cb3a262.png");

/***/ },

/***/ 654982
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/62bd9c6c8348-image16-1-9dd8dde8011362271336dae7a868c6fe.png");

/***/ },

/***/ 450650
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/64db07273eb5-image14-2-dcf628ecd7b8bf328db0e478a003886d.png");

/***/ },

/***/ 282452
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b85630f69e1-image15-2-c351cf9dee38ec721f7ab247eebf30bb.png");

/***/ },

/***/ 938952
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b62967963ee4-image12-bbc3691c70fcf01f0f8103e2701b3202.png");

/***/ },

/***/ 294597
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bd65e274febf-image17-1-c7361ebc901aae23891c19ca948714d9.png");

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