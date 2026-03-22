"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[24396],{

/***/ 83999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_tao_superset_md_19d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-tao-superset-md-19d.json
const site_docs_fpt_data_platform_tao_superset_md_19d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/tao-superset","title":"2. FPT Data Platform","description":"Tạo superset","source":"@site/docs/fpt-data-platform/tao-superset.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/tao-superset","permalink":"/fpt-data-platform/tao-superset","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao superset","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tao-superset","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao ranger","permalink":"/fpt-data-platform/tao-ranger"},"next":{"title":"Tao workspace","permalink":"/fpt-data-platform/tao-workspace"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/tao-superset.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao superset',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tao-superset',
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
      children: "Tạo superset"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Superset"
      }), " là một nền tảng BI (Business Intelligence) mã nguồn mở, giúp trực quan hóa dữ liệu, tạo dashboard, và phân tích dữ liệu một cách dễ dàng. Nó là một giải pháp thay thế mạnh mẽ cho Tableau, Power BI trong các hệ thống sử dụng các nền tảng dữ liệu lớn như Druid, Presto, Trino, BigQuery, ClickHouse, MySQL, PostgreSQL, và nhiều hệ thống khác"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Superset"
      }), " , người dùng thực hiện các bước sau:"]
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
      }), " nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " > hiển thị popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Service"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Superset"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(255329)/* ["default"] */ .A) + "",
        width: "2552",
        height: "966"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trong form tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Superset"
      }), " , nhập thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Information"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " (required): Tên dịch vụ"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: Tên dịch vụ phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description"
        }), " (optional): Mô tả"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version"
        }), " (required): chọn version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(171349)/* ["default"] */ .A) + "",
        width: "2498",
        height: "976"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node configuration"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage policy"
          }), " (required): chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage Policy"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (required): chọn cấu hình tài nguyên"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of nodes"
          }), " (required): nhập số node cho ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Superset"
          }), " để dịch vụ được ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "HA"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(592334)/* ["default"] */ .A) + "",
        width: "2480",
        height: "908"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " (thông tin Database lưu dữ liệu cho ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apache Superset"
          }), " , người dùng có thể sử dụng Database đã tạo trên dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FPT Database Engine"
          }), " hoặc các ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " khác của người dùng)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " : mặc định PostgreSQL"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host name(required)"
          }), " : hostname hoặc IP của Postgres"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port (required)"
          }), " : cổng kết nối, mặc định là 5432"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database name (required)"
          }), " : tên database"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username (required)"
          }), " : tên tài khoản truy cập vào ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Postgres"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password (required)"
          }), " : mật khẩu truy cập vào ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Postgres"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(564638)/* ["default"] */ .A) + "",
        width: "2362",
        height: "1160"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database"
      }), " , người dùng ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " đến ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database"
      }), " đã nhập"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Redis"
          }), " (thông tin Database lưu dữ liệu cho ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apache Superset"
          }), " , người dùng có thể sử dụng Database đã tạo trên dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FPT Database Engine"
          }), " hoặc các ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " khác của người dùng)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host (required)"
          }), " : hostname hoặc IP của Redis"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Port (required)"
      }), " : cổng kết nối"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username (required)"
          }), " : tên tài khoản"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password (required)"
          }), " : mật khẩu"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " tới ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cache (required)"
          }), " : chọn index cho lưu cache"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Celery (required)"
          }), " : chọn index cho xử lý"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(767075)/* ["default"] */ .A) + "",
        width: "2350",
        height: "1164"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Single Sign On"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Nếu không tích chọn Single Sign On, Superset được khởi tạo xác thực bằng ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Basic authen"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Nếu tích chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Single Sign On:"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Provider: FPT ID"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  * **Username** : tên username\n\n  * **Email** : địa chỉ email FPT\n\n* **Provider: Google**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  * **Client ID** : một đoạn mã ID được sử dụng để xác thực client với google\n\n  * **Client Secret** : mật khẩu được sử dụng để xác thực client với google\n\n  * **Email** : địa chỉ email\n\n* **Provider: Keycloak**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  * **Auth Provider name** : Tên provider\n\n  * **Realm** : là một không gian quản lý mà trong đó, tất cả người dùng, nhóm, vai trò, khách hàng (clients) và các đối tượng khác đều được quản lý và bảo mật một cách độc lập\n\n  * **Auth server url** : là URL cơ bản của máy chủ Keycloak, được sử dụng bởi các clients để thực hiện xác thực\n\n  * **Client ID** : một đoạn mã ID được sử dụng để xác thực client với Keycloak\n\n  * **Client Secret** : mật khẩu được sử dụng để xác thực client với Keycloak\n\n  * **Username** : Tên username trong keycloak\n\n  * **Email** : địa chỉ email trong keycloak\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Domain"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Mục đích:"
              }), " Cho phép cấu hình domain tùy chỉnh để truy cập services."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Với Workspace Public:"
                  }), " Dùng để gán domain và certificate mà không cần bật/tắt TLS (HTTPS luôn khả dụng)."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Với Workspace Private:"
                  }), " Ngoài domain và certificate, người dùng có thể tùy chọn bật hoặc tắt TLS/SSL để quyết định dùng HTTPS hay HTTP."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Workspace là Public"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Custom domain"
                  }), " : Tích để bật domain tùy chỉnh."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Domain"
                  }), " : Nhập tên miền (VD: abc.local, jupyter.example.com)."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Certificate name"
                  }), " : Chọn từ danh sách certificate đã import trong ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Certificate Manager"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Nút"
                  }), " :"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Manage certificate"
                  }), " : Mở màn hình quản lý certificate."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Validate"
                  }), " : Kiểm tra chứng chỉ hợp lệ với domain."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Lưu ý"
                  }), " : Ở Workspace Public ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "không hiển thị"
                  }), " tùy chọn ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "TLS/SSL certificate"
                  }), " — hệ thống mặc định hỗ trợ HTTPS."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(780748)/* ["default"] */ .A) + "",
        width: "2560",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Workspace là Private**\n\n  * **Custom domain** : Tích để bật domain tùy chỉnh. \n\n  * **Domain** : Nhập tên miền. \n\n  * **TLS/SSL certificate** : Tích để bật HTTPS cho services. \n\n  * **Certificate name** : Chọn từ danh sách certificate. \n\n  * **Nút** : \n\n  * **Manage certificate** : Mở quản lý certificate. \n\n  * **Validate** : Kiểm tra chứng chỉ. \n\n  * **Lưu ý** : Nếu bỏ tích **TLS/SSL certificate** , dịch vụ sẽ chạy HTTP và không yêu cầu certificate. \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(524639)/* ["default"] */ .A) + "",
        width: "2560",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển qua màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review & Create"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7"
      }), " : Kiểm tra thông tin sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành khởi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Superset"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Superset"
      }), " hoàn thành khởi tạo khi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Status"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Succeeded"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Superset"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Healthy"
      }), " (~10 phút)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cai-dat-superset",
        children: " Previous Apache Superset "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-superset",
        children: " Next Xem thông tin superset "
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

/***/ 780748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/252fb7fc4447-public-scaled-ae54e92ffb781ea85c3ba7e12ff44127.jpg");

/***/ },

/***/ 171349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/472e983780ac-Monosnap-FPT-Smart-Cloud-2025-04-26-14-21-30-e4b6c65ed11a9d9cb530ac010210be04.png");

/***/ },

/***/ 592334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/52e78c8ee622-Monosnap-FPT-Smart-Cloud-2025-04-26-14-22-11-305dea1ff652b5ba1c55a6dfee8a65d2.png");

/***/ },

/***/ 564638
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8370b6e38a45-Monosnap-FPT-Smart-Cloud-2025-04-26-14-22-42-ac29e3da2e2152f63f05195bf062b8c7.png");

/***/ },

/***/ 255329
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8c940dd7cb04-apachesuperset-d8a56308a759cf2c0f9320b2971a7f97.jpg");

/***/ },

/***/ 524639
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c9196520f0c5-private-scaled-a5ece0feb2a37f64c12126e191a7c8d4.jpg");

/***/ },

/***/ 767075
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d5cc2079c6c3-Monosnap-FPT-Smart-Cloud-2025-04-26-14-22-56-2790e1cd1b5516b8438c892a35843089.png");

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