"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[55385],{

/***/ 578852
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_data_services_tag_sync_md_da7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-data-services-tag-sync-md-da7.json
const site_docs_fpt_data_platform_data_services_tag_sync_md_da7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/data-services/tag-sync","title":"2. FPT Data Platform","description":"Tag Sync (OpenMetadata & Ranger Integration)","source":"@site/docs/fpt-data-platform/data-services/tag-sync.md","sourceDirName":"fpt-data-platform/data-services","slug":"/fpt-data-platform/data-services/tag-sync","permalink":"/fpt-data-platform/data-services/tag-sync","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tag sync","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=tag-sync","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Query engine","permalink":"/fpt-data-platform/data-services/query-engine"},"next":{"title":"Tao apache flink","permalink":"/fpt-data-platform/data-services/tao-apache-flink"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/data-services/tag-sync.md


const frontMatter = {
	sidebar_label: 'Tag sync',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=tag-sync',
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
      children: "Tag Sync (OpenMetadata & Ranger Integration)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Sync"
      }), " cho phép đồng bộ tag từ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenMetadata"
      }), " sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apache Ranger"
      }), " , giúp mở rộng quản lý phân quyền trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino"
      }), " dựa trên tag (bên cạnh resource)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước thực hiện"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 1: Portal"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trên Portal, cần tạo đủ 3 thành phần:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenMetadata"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apache Ranger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trino"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trino cluster"
      }), " , phải tick chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrate Ranger"
      }), " để cho phép Trino sử dụng phân quyền từ Ranger."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 2: Tạo Resource Policies cho Trino trong Ranger"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger > Service Manager > Tab Resource"
      }), " → chọn service Trino vừa tạo (ví dụ: trino-msu9test)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Tên service phải trùng với cus_app_id của Trino."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đây là điều kiện bắt buộc để Trino có thể hoạt động và OpenMetadata có thể test connection thành công. Nếu thiếu các Resource Policies cơ bản, khi tạo Trino service trong OM → Test Connection sẽ thất bại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 3: Tạo Trino Service trong OpenMetadata"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenMetadata > Settings > Services > Databases"
        }), " → click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add New Service"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(485246)/* ["default"] */ .A) + "",
        width: "2560",
        height: "446"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Trino"
          }), " → click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Điền thông tin service:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Service Name"
      }), " (ví dụ: trino-tester)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Username, Password, Host, Port"
      }), " (trỏ đến cluster Trino vừa tạo ở portal)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Connection"
          }), " → nếu thành công thì ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vào tab ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ingestion"
          }), " của service Trino → click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Ingestion"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Điền Database/Schema/Table Filter Pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run ingestion."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sau khi ingestion thành công, DB Trino hiển thị trong ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explore"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explore > Database Trino"
          }), " → gán tag cho column (VD: tag ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Sensitive"
          }), " cho cột custkey trong bảng customer)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(50259)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 4: Tạo Tag Service & Trino Service trong Ranger"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ranger dashboard > Service Manager > Tab Tag"
        }), " → click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add New Service"
        }), " để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag Service"
        }), " trước (VD: trino-msu9test-tag)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://fptcloud.com/wp-content/uploads/2024/07/43-scaled.png",
        alt: "Alt text"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Service Manager > Tab Resource"
        }), " → edit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Service Trino"
        }), " (VD: trino-msu9test)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong config service Trino → field ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Select Tag Service"
      }), " = trino-msu9test-tag."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(967389)/* ["default"] */ .A) + "",
        width: "2560",
        height: "970"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings > Users"
        }), " → click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add New User"
        }), " :"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tạo user (VD: usertest) với role = User."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Username phải trùng với user đã tạo ở Trino portal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(938022)/* ["default"] */ .A) + "",
        width: "2560",
        height: "994"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(408953)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1444"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Policies"
        }), " → add user usertest vào các policy mặc định"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a. Kiểm tra/Thêm các policy mặc định:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * **all – trinouser**\n\n * **all - queryid**\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["b. Thêm policy mới (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "policy-customer-access"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " * Catalog = tpch \n\n * Schema = sf1, information_schema \n\n * Table = customer, columns, schemata, tables \n\n * Column = custkey \n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : information_schema, columns, schemata, tables → cần thiết cho Trino đọc metadata (show tables, describe, etc)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(259008)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1445"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customer → bảng business mà bạn muốn allow."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["c. Trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allow Conditions"
      }), " , add user (VD: usertest) → Permission = Select."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "d. Save policy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(521932)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1369"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 5: Cấu hình Tag Sync trên Ranger Service"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Data Platform > Data Governance (Ranger) > Advanced > Tag Sync"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tick chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Tag Sync"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Lấy ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "JWT Token"
          }), " từ OpenMetadata:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings > Bots"
      }), " → chọn bot tagsync-bot → tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Credentials"
      }), " → copy token."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dán vào trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JWT Token"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại phần ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Service mappings"
        }), " , chọn:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenMetadata service"
      }), " = Trino service vừa tạo ở OpenMetadata."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ranger service"
      }), " = service Trino vừa tạo trong Ranger."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bắt buộc ≥ 1 mapping, tối đa 5 mapping."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Connection"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công → hiển thị ", (0,jsx_runtime.jsx)(_components.em, {
        children: "“Connection successful”"
      }), " , nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " bật."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu thất bại → hiển thị lỗi, không thể Save."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Khi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Connection"
        }), " thành công, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Save"
        }), " để lưu cấu hình."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(39298)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1004"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 6:"
        })
      }), " Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Policies"
      }), " → chọn tag ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Sensitive"
      }), " → click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New Policy"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Policy Name: allow-sensitive."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Allow Conditions: user = usertest, component = TRINO, tích tất cả permission."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Save."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(937683)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1451"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Bước 7: Kiểm thử quyền truy cập bằng query"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Chỉ cấp quyền cho usertest vào bảng customer, bảng orders usertest không có quyền query"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 1 – User được Allow & có quyền query cột custkey"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Dùng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DataGrip"
          }), " kết nối Trino bằng user usertest."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chạy query:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT custkey FROM tpch.sf1.customer LIMIT 1;"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kết quả mong đợi:"
        }), " dữ liệu bảng được trả về."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 2 – User được Allow & không quyền query bảng"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DataGrip"
          }), " kết nối Trino bằng user usertest."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chạy query:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT * FROM tpch.sf1.customer LIMIT 1;"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kết quả mong đợi:"
        }), " query bị từ chối, thông báo ", (0,jsx_runtime.jsx)(_components.em, {
          children: "không có quyền"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 3 – User bị Deny & không có quyền query cột custkey"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tạo thêm user khác (VD: usertest2)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gán tag Personal cho cột custkey"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trong ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tag Policies"
          }), " → tạo policy Deny - tag Personal - cho user usertest2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Dùng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DataGrip"
          }), " kết nối Trino bằng user usertest2."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chạy query:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT custkey FROM tpch.sf1.customer LIMIT 1;"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kết quả mong đợi:"
        }), " query bị từ chối, thông báo ", (0,jsx_runtime.jsx)(_components.em, {
          children: "không có quyền"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./cau-hinh-va-quan-ly-query-engine",
        children: " Previous Truy cập và cấu hình quản lý Query Engine  "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-ranger",
        children: " Next Xóa Ranger "
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

/***/ 521932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1465322ff876-49-scaled-97b930b83bcb8f254aa08e556e27a320.png");

/***/ },

/***/ 937683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/24cf16758549-51-scaled-b055b5f192e5683b779f9509022800ac.png");

/***/ },

/***/ 938022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/27e8146c2d4b-45-scaled-41816151c9ab01d6f8225290a7e74067.png");

/***/ },

/***/ 39298
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6f349e0e194b-50-scaled-295672597a9b9a15d15324083299e00a.png");

/***/ },

/***/ 967389
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7a3a8ebf450d-44-scaled-57ba00b54c5837c23e714b895cb04278.png");

/***/ },

/***/ 408953
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/89c22e3bb6ca-46-scaled-d3f6a50f811ee637c8ae77286df8b9a9.png");

/***/ },

/***/ 259008
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/95aba7811553-47-scaled-1d976b5ba0fcaa162df6ea9804f1f34e.png");

/***/ },

/***/ 50259
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ca0779df0e22-42-scaled-78c6e5ea4dac64654358ef22147d8237.png");

/***/ },

/***/ 485246
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/de75fed4372b-41-scaled-8652cefa3125a57f5243293741f5d533.png");

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