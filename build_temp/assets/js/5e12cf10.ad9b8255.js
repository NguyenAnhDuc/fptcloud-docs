"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[14972],{

/***/ 320446
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_analytics_tao_airflow_md_5e1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-analytics-tao-airflow-md-5e1.json
const site_docs_fpt_data_platform_analytics_tao_airflow_md_5e1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/analytics/tao-airflow","title":"2. FPT Data Platform","description":"Tạo Orchestration","source":"@site/docs/fpt-data-platform/analytics/tao-airflow.md","sourceDirName":"fpt-data-platform/analytics","slug":"/fpt-data-platform/analytics/tao-airflow","permalink":"/fpt-data-platform/analytics/tao-airflow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tao airflow","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tao-airflow","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Phan quyen nguoi dung su dung profile","permalink":"/fpt-data-platform/analytics/phan-quyen-nguoi-dung-su-dung-profile"},"next":{"title":"Tao jupyterhub","permalink":"/fpt-data-platform/analytics/tao-jupyterhub"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/analytics/tao-airflow.md


const frontMatter = {
	sidebar_label: 'Tao airflow',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tao-airflow',
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
      children: "Tạo Orchestration"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration service"
      }), " được định nghĩa là một dịch vụ quản lý và tự động hóa các quy trình làm việc (workflows) trong hệ thống dữ liệu, giúp đảm bảo các tác vụ xử lý dữ liệu được thực hiện tuần tự hoặc song song theo lịch trình hoặc sự kiện, đồng thời cung cấp khả năng theo dõi và khắc phục sự cố hiệu quả."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo Orchestration service, người dùng thực hiện các bước sau:"
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
        children: "New service"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(477954)/* ["default"] */ .A) + "",
        width: "2556",
        height: "966"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trong form tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration"
      }), " , nhập thông tin màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic Information"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " (required): Tên Orchestration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chú ý: Tên Orchestration có thể chứa các kí tự chữ cái thường a-z hoặc chữ cái in hoa A-Z hoặc các kí tự số 0-9. Đặc biệt không dùng dấu cách có thể thay dấu cách bằng dấu “-” hoặc “_”."
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Size"
          }), " (required): chọn size cấu hình cho Airflow dựa trên số lượng DAG chạy đồng thời"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Gói ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Dev"
              }), " : Giới hạn DAG khuyến nghị khoảng 20-25 DAG"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Gói ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Small"
              }), " : Giới hạn DAG khuyến nghị khoảng 40-50 DAG"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Gói ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Medium"
              }), " : Giới hạn DAG khuyến nghị khoảng 70-80 DAG"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(737997)/* ["default"] */ .A) + "",
        width: "2200",
        height: "1126"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Step"
      }), " để chuyển sang màn nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage policy"
        }), " (required): chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage Policy"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(548706)/* ["default"] */ .A) + "",
        width: "2172",
        height: "966"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu người dùng muốn tự động tăng cấu hình Worker của Airflow, tích chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable worker auto scaling"
      }), " > nhập số node tối đa cho W", (0,jsx_runtime.jsx)(_components.strong, {
        children: "orker"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Service configuration"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mount S3 storage"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Name"
            }), " (required): chọn Storage cho phần mount S3"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DAGs"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              }), " (required): Chọn type là S3/GIT"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Trường hợp ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              }), " là S3**:** lấy thông tin DAGs trong S3 storage"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Trường hợp Type là GIT, n"
              }), " hập các thông tin sau:"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Repository URL (required)"
          }), " : địa chỉ lưu file DAGs"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Branch (required)"
          }), " : nhánh kết nối tới thư mục chứa file DAGs"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path (required)"
          }), " : đường dẫn cụ thể tới thư mục chứa file DAGs"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(673363)/* ["default"] */ .A) + "",
        width: "2168",
        height: "1578"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Database (thông tin Database lưu dữ liệu cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Data governance"
        }), " , người dùng có thể sử dụng Database đã tạo trên dịch vụ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FPT Database Engine"
        }), " hoặc các ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), " khác của người dùng)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PostgreSQL"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Select Database"
          }), " (required): Chọn Database"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host name"
          }), " (required): Hostname hoặc IP của Postgres server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " (required): Postgres server port, mặc định là 5432"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " (required): tên database"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username"
          }), " (required): Tên tài khoản truy cập tới Database"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " (required): Mật khẩu truy cập tới Database"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual configuration"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Host name"
          }), " (required): Hostname hoặc IP của Postgres server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " (required): Postgres server port, mặc định là 5432"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " (required): tên database"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Username"
          }), " (required): user truy cập tới Database"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " (required): Password truy cập tới Database"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hình ảnh",
        src: (__webpack_require__(994442)/* ["default"] */ .A) + "",
        width: "1195",
        height: "512"
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Redis"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "From FPT Database Engine"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Select Database (** required**)** : Chọn Database \n\n* **Host name(** required**)** : Hostname hoặc IP của Redis \n\n* **Port (** required**)** : Redis port, mặc định là 6379 \n\n* **Username (** required**)** : user truy cập tới Database \n\n* **Password (** required**)** : Password truy cập tới Database \n\n* **Logical database** (required): chọn thông tin logical DB \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường hợp chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual configuration"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "* **Host name** (required): Hostname hoặc IP của redis \n\n* **Port** (required): redis port \n\n* **Username** (required): user truy cập tới Database \n\n* **Password** (required): Password truy cập tới Database \n\n* **Logical database** (required): chọn thông tin logical DB \n"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Remote logging"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Bucket name"
              }), " (required): tên bucket"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Endpoint"
              }), " (required): địa chỉ truy cập"]
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
              }), " (required): thư mục chứa các tệp ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "remote logs"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote logging"
      }), " , người dùng ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " đến ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3"
      }), " đã nhập"]
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
        children: "  * **Username** : tên username \n\n  * **Email** : địa chỉ email FPT \n\n* **Provider: Google**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  * **Client ID** : một đoạn mã ID được sử dụng để xác thực client với google \n\n  * **Client Secret** : mật khẩu được sử dụng để xác thực client với google \n\n  * **Email** : địa chỉ email \n\n* **Provider: Keycloak**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  * **Auth Provider name** : Tên provider \n\n  * **Realm** : là một không gian quản lý mà trong đó, tất cả người dùng, nhóm, vai trò, khách hàng (clients) và các đối tượng khác đều được quản lý và bảo mật một cách độc lập \n\n  * **Auth server url** : là URL cơ bản của máy chủ Keycloak, được sử dụng bởi các clients để thực hiện xác thực \n\n  * **Client ID** : một đoạn mã ID được sử dụng để xác thực client với Keycloak \n\n  * **Client Secret** : mật khẩu được sử dụng để xác thực client với Keycloak \n\n  * **Username** : Tên username trong keycloak \n\n  * **Email** : địa chỉ email trong keycloak \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Secret backends"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Provider = FPT Key Vault"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Mount point (required):"
                  }), " Đường dẫn mount point của secrets backend (ví dụ: airflow-connections)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Connection path (required):"
                  }), " Đường dẫn/key dùng cho kết nối Airflow"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Variable path (required):"
                  }), " Đường dẫn/key cho biến môi trường hoặc secrets"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "URL (required):"
                  }), " Địa chỉ endpoint của Vault (ví dụ: ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://pickadkf.keyvault.fptcloud.com",
                    children: "http://pickadkf.keyvault.fptcloud.com"
                  }), ")"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Auth type:"
                  }), " Kiểu xác thực với Vault (ví dụ: token)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Token(required):"
                  }), " Mã token xác thực tài khoản với Vault"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Chú ý:"
      }), " Vault Policy - Token cần có quyền \"read\" và \"list\" trên đường dẫn chứa connections và variables & Gán policy vào token"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n\"path\": {\n\"/data//*\": {\n  \"capabilities\": [\n    \"read\",\n    \"list\"\n  ]\n},\n\"/data//*\": {\n  \"capabilities\": [\n    \"read\",\n    \"list\"\n  ]\n},\n\"/metadata/\": {\n  \"capabilities\": [\n    \"list\"\n  ]\n},\n\"/metadata/\": {\n  \"capabilities\": [ \n\n    \"list\"\n  ]\n}\n}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " - kiểm tra kết nối thực tế với secret backend"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/z7038432499487_04cd1411e846c71ee32e6f16dd4b36f4.jpg",
        alt: "Hình ảnh"
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
        children: "Bước 7:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để chuyển sang màn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review & create"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8"
      }), " : Kiểm tra thông tin nhập sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để hoàn thành khởi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration"
      }), " hoàn thành khởi tạo khi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Worker Status"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Succeeded"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Orchestration"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Healthy"
      }), " (~10 phút)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./userguide-airflow",
        children: " Previous Orchestration "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xem-thong-tin-orchestration",
        children: " Next Xem thông tin Orchestration "
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

/***/ 994442
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7a5c27a2f0bb-image1f-19368bdc85114b0ddfa189a41870945f.png");

/***/ },

/***/ 673363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7c58e64a7b15-image1e-b127c06bde800f966e436cfcdb74153a.png");

/***/ },

/***/ 737997
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91c9db41cba5-image1c-57843671a813d72d56b42d134c5cdbb4.png");

/***/ },

/***/ 548706
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c3d062e48131-image1d-13343441868b3acb75063d3c9eed010f.png");

/***/ },

/***/ 524639
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c9196520f0c5-private-scaled-a5ece0feb2a37f64c12126e191a7c8d4.jpg");

/***/ },

/***/ 477954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fdb821813672-image1b-af4781052e5b25df8d7770ea3d5b3adb.png");

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