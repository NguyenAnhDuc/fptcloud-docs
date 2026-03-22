"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[80684],{

/***/ 678477
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_tao_query_engine_md_a74_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-tao-query-engine-md-a74.json
const site_docs_fpt_data_platform_tao_query_engine_md_a74_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/tao-query-engine","title":"2. FPT Data Platform","description":"Tạo Query engine","source":"@site/docs/fpt-data-platform/tao-query-engine.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/tao-query-engine","permalink":"/fpt-data-platform/tao-query-engine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tao query engine","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tao-query-engine","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tao profile","permalink":"/fpt-data-platform/tao-profile"},"next":{"title":"Tao ranger","permalink":"/fpt-data-platform/tao-ranger"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/tao-query-engine.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tao query engine',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tao-query-engine',
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
      children: "Tạo Query engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Query engine"
      }), " sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino"
      }), " là một công cụ truy vấn SQL phân tán, mã nguồn mở, được thiết kế để xử lý các truy vấn nhanh và hiệu quả trên các tập dữ liệu lớn. Trino cho phép bạn truy vấn dữ liệu từ nhiều nguồn khác nhau, bao gồm cơ sở dữ liệu quan hệ, kho dữ liệu, và các hệ thống lưu trữ dữ liệu phi quan hệ, mà không cần phải di chuyển hoặc sao chép dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query engine"
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
      }), " > hiển thị popup chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New service"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(296935)/* ["default"] */ .A) + "",
        width: "2562",
        height: "966"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trong form tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query engine"
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
      children: "Chú ý: Tên dịch vụ phải từ 1 đến 30 kí tự. Có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " (optional): Mô tả"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Version"
          }), " (required): chọn version"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(272173)/* ["default"] */ .A) + "",
        width: "1212",
        height: "487"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node configuration"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage policy"
          }), " (required): chọn Storage cho Query engine"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " (required): chọn type cấu hình cho Query engine"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of coordinator"
          }), " : Mặc định là 1"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number of workers"
          }), " (required): nhập số worker"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý:"
      }), " số ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker"
      }), " phải lớn hơn hoặc bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1"
      }), " và nhỏ hơn hoặc bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu người dùng muốn tự động tăng cấu hình Worker của Airflow, tích chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable worker auto scaling"
      }), " > nhập số node tối đa cho Worker"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(470429)/* ["default"] */ .A) + "",
        width: "1216",
        height: "646"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Additional Properties"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max memory (GB)"
        }), " : nhập số Max memory, giá trị mặc định là 20"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đây là lượng bộ nhớ tối đa mà một truy vấn có thể sử dụng trên toàn bộ cụm. Bộ nhớ người dùng được phân bổ trong quá trình thực thi cho các tác vụ trực tiếp liên quan đến, hoặc có thể kiểm soát bởi, truy vấn của người dùng. Ví dụ, bộ nhớ được sử dụng bởi các bảng băm (hash tables) được tạo trong quá trình thực thi, bộ nhớ được sử dụng trong quá trình sắp xếp, v.v. Khi lượng bộ nhớ người dùng được phân bổ cho một truy vấn trên tất cả các worker đạt đến giới hạn này, truy vấn đó sẽ bị dừng.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý:"
      }), " số ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Max memory"
      }), " phải lớn hơn hoặc bằng 1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Retry policy"
          }), " : chọn Retry policy, giá trị mặc định là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NONE"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NONE"
          }), " : Tắt chế độ thực thi chịu lỗi."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TASK"
          }), " : Thử lại các tác vụ (task) riêng lẻ trong một truy vấn khi xảy ra lỗi. Yêu cầu cấu hình một ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "exchange manager"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "QUERY"
          }), " : Thử lại toàn bộ truy vấn khi xảy ra lỗi."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(491155)/* ["default"] */ .A) + "",
        width: "1157",
        height: "271"
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
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                  }), "\n"]
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
        children: "* **Workspace là Private**\n\n  * **Custom domain** : Tích để bật domain tùy chỉnh. \n\n  * **Domain** : Nhập tên miền. \n\n  * **TLS/SSL certificate** : Tích để bật HTTPS cho services. \n\n  * **Certificate name** : Chọn từ danh sách certificate. \n\n  * **Nút** : \n\n    * **Manage certificate** : Mở quản lý certificate. \n\n    * **Validate** : Kiểm tra chứng chỉ. \n\n  * **Lưu ý** : Nếu bỏ tích **TLS/SSL certificate** , dịch vụ sẽ chạy HTTP và không yêu cầu certificate. \n"
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
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auth"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication Type:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Authentication Type = Basic"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Query engine được khởi tạo xác thực bằng ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic authen"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(322937)/* ["default"] */ .A) + "",
        width: "1214",
        height: "393"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Authentication Type: OAuth2"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Provider: FPT ID"
              }), ". Người dùng nhập thông tin sau:"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Email (required): địa chỉ email FPT dùng làm tài khoản quản trị."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(304356)/* ["default"] */ .A) + "",
        width: "1209",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Provider: Google"
          }), ". Người dùng nhập thông tin sau:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Client ID (required)"
              }), " : mã định danh ứng dụng (lấy ở Google Cloud → OAuth Credentials)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Client Secret (required)"
              }), " : chuỗi bí mật đi kèm Client ID, dùng để xác thực ứng dụng."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Email (required)"
              }), " : địa chỉ Gmail hoặc Workspace của quản trị viên khởi tạo engine."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi test kết nối, hãy bảo đảm Google Cloud đã thêm redirect URI của Query Engine vào danh sách cho phép."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(513390)/* ["default"] */ .A) + "",
        width: "1210",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Provider: Keycloak,"
          }), ". Người dùng nhập các thông tin sau:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Auth Provider Name (optional): Tên provider"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Realm (required): là một không gian quản lý mà trong đó, tất cả người dùng, nhóm, vai trò, khách hàng (clients) và các đối tượng khác đều được quản lý và bảo mật một cách độc lập"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Auth Server URL (required): là URL cơ bản của máy chủ Keycloak, được sử dụng bởi các clients để thực hiện xác thực, ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "phải kết thúc bằng dấu “/”"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Client ID (required): một đoạn mã ID được sử dụng để xác thực client với Keycloak"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Client Secret (required): mật khẩu được sử dụng để xác thực client với Keycloak"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Email (required): địa chỉ email trong keycloak"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(202035)/* ["default"] */ .A) + "",
        width: "1212",
        height: "679"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authentication Type: LDAP"
          }), ". Người dùng nhập các thông tin sau:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "URL (required)"
              }), " : đường dẫn LDAP, ví dụ ldap://ldap.example.com:389 hoặc ldaps://ldap.example.com:636."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Base DN (required)"
              }), " : gốc truy vấn, chẳng hạn dc=example,dc=com."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Username (required)"
              }), " : bind DN có quyền search (ví dụ cn=admin,dc=example,dc=com)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Password (required)"
              }), " : mật khẩu bind DN."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Bind Pattern (optional)"
              }), " : mẫu DN tìm người dùng, ví dụ uid={0},ou=People,dc=example,dc=com."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Group Auth Pattern (required)"
              }), " : mẫu DN truy vấn nhóm, ví dụ cn={0},ou=Groups,dc=example,dc=com."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(182741)/* ["default"] */ .A) + "",
        width: "1210",
        height: "745"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication Type: JWT"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Issuer (required)** : giá trị claim iss mà Query Engine phải khớp. \n\n* **Audience (optional)** : giá trị claim aud (nếu hệ thống JWT sử dụng trường này). \n\n* **Principal Field (required)** : tên claim chứa username (thường là sub hoặc email). \n\n* **Public Key (required)** : khóa công khai định dạng PEM (dán trực tiếp hoặc tải file) để Query Engine kiểm tra chữ ký JWT. \n\n* Khuyến nghị dùng khóa RSA hoặc EC 2048 bit trở lên; tệp PEM phải bắt đầu bằng -----BEGIN PUBLIC KEY-----. \n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(537502)/* ["default"] */ .A) + "",
        width: "1208",
        height: "745"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization: Integrate Ranger"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Ranger"
          }), " = False (Query Engine khởi tạo theo chế độ tiêu chuẩn, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "không"
          }), " áp dụng bất kỳ policy nào từ Ranger.)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Ranger"
          }), " = True"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tick ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Ranger"
          }), " → UI tự động hiển thị nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test connection"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test connection"
          }), " để kiểm tra kết nối tới ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ranger"
          }), " cho tích hợp. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Query engine"
          }), " chỉ có thể khởi tạo với ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Authentication type"
          }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrate Ranger"
          }), " khi Test Connection thành công."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để sự dụng Ranger cho kiểm soát xác thực, phân quyền cho Trino, người dùng cần khởi tạo dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Governance"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger"
      }), ") trước khi khởi tạo dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Query engine"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khởi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-data-platform/?doc=tao-ranger",
        children: "tại đây"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(608559)/* ["default"] */ .A) + "",
        width: "1147",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review & Create"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8"
      }), " : Kiểm tra thông tin nhập sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Query Engine"
      }), " hoàn thành khởi tạo khi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Status"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Succeeded"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Healthy"
      }), " (~10 phút)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./query-engine",
        children: " Previous Query Engine "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-query-engine",
        children: " Next Xem thông tin Query Engine  "
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

/***/ 491155
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1a25f076c4af-SCR-20251128-kmqg-1c19977e9385dc7afb90a887206fe897.png");

/***/ },

/***/ 537502
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1c58d738ef1b-SCR-20250620-jlpf-9cae75f72928ed997d4bf3c47935da2d.png");

/***/ },

/***/ 780748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/252fb7fc4447-public-scaled-ae54e92ffb781ea85c3ba7e12ff44127.jpg");

/***/ },

/***/ 182741
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3851fbebc748-SCR-20250620-jlnj-ecfc2fd8a3c659e04d0395fcaa8fb4f9.png");

/***/ },

/***/ 272173
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/43aeb19ac471-SCR-20251128-kmux-5868158e11d747076b587e04ade0a65f.png");

/***/ },

/***/ 304356
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/47de14d9b71d-SCR-20250620-jllo-d5f3b07ebe8e3b7f93ce402de71eeb70.png");

/***/ },

/***/ 202035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ee77a3f097a-SCR-20250620-jljs-a9adacc19912fb6d7708d7a80a85b488.png");

/***/ },

/***/ 322937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/69db394d86de-SCR-20250620-jlei-92b38848474e77ff828d5d2252b85581.png");

/***/ },

/***/ 470429
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7ebcdb53c775-SCR-20251128-kmwv-e1f6b5540c2336c849a4e6f71e7b8016.png");

/***/ },

/***/ 296935
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c2e8c7499f73-image42-462149a2ff889b0079ce6f41ee12a17e.png");

/***/ },

/***/ 524639
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c9196520f0c5-private-scaled-a5ece0feb2a37f64c12126e191a7c8d4.jpg");

/***/ },

/***/ 608559
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e9452bf9603e-SCR-20250620-jlqw-b5d5e1fdb911e9ba7084d3efc8429086.png");

/***/ },

/***/ 513390
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ea82bb7beb7a-SCR-20250620-jlhu-37ad191ddc565c1b68ae3f6fa6f4432d.png");

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