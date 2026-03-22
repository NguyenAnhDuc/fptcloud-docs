"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[34063],{

/***/ 273613
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_initial_keystore_management_md_dd6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-initial-keystore-management-md-dd6.json
const site_docs_fpt_data_platform_initial_keystore_management_md_dd6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/initial/keystore-management","title":"2. FPT Data Platform","description":"Keystore Management","source":"@site/docs/fpt-data-platform/initial/keystore-management.md","sourceDirName":"fpt-data-platform/initial","slug":"/fpt-data-platform/initial/keystore-management","permalink":"/fpt-data-platform/initial/keystore-management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Keystore management","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=keystore-management","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/fpt-data-platform/initial/initial-setup"},"next":{"title":"Tao workspace","permalink":"/fpt-data-platform/initial/tao-workspace"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/initial/keystore-management.md


const frontMatter = {
	sidebar_label: 'Keystore management',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=keystore-management',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "1. Danh sách Keystore",
  "id": "1-danh-sách-keystore",
  "level": 3
}, {
  "value": "2. Tạo Keystore mới",
  "id": "2-tạo-keystore-mới",
  "level": 3
}, {
  "value": "Case: Type = Integration (kết nối Vault ngoài, vd: HashiCorp)",
  "id": "case-type--integration-kết-nối-vault-ngoài-vd-hashicorp",
  "level": 4
}, {
  "value": "Case: Type = In‑workspace (lưu bí mật ngay trong Workspace)",
  "id": "case-type--inworkspace-lưu-bí-mật-ngay-trong-workspace",
  "level": 4
}, {
  "value": "3. Cập nhật Keystore",
  "id": "3-cập-nhật-keystore",
  "level": 3
}, {
  "value": "Trường hợp 1 – Type = In-workspace",
  "id": "trường-hợp-1--type--in-workspace",
  "level": 4
}, {
  "value": "Trường hợp 2 – Type = Integration",
  "id": "trường-hợp-2--type--integration",
  "level": 4
}, {
  "value": "4. Xóa Keystore",
  "id": "4-xóa-keystore",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
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
      children: "Keystore Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Keystore Management"
      }), " trong Workspace cho phép người dùng lưu trữ và quản lý khóa/bí mật (keys, tokens, credentials) dùng cho các dịch vụ trong hệ thống."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Keystore có thể nằm ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trong Workspace"
      }), " hoặc tích hợp với dịch vụ lưu trữ khóa bên ngoài (ví dụ: HashiCorp Vault)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-danh-sách-keystore",
      children: "1. Danh sách Keystore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Hiển thị tất cả Keystore đã tạo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập:"
      }), " Data Platform > Workspace Management > Keystore"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Màn hình hiển thị:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " – Tên định danh keystore."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " – Loại keystore:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "Integration"
              }), " (tích hợp ngoài, ví dụ HashiCorp Vault)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "In-workspace"
              }), " (lưu trữ nội bộ)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vault type"
          }), " – Kiểu vault khi tích hợp ngoài (vd: HashiCorp)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Created at"
          }), " – Thời gian tạo keystore."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action"
          }), " – Menu thao tác (Cập nhật, Xóa)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(882989)/* ["default"] */ .A) + "",
        width: "1281",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-tạo-keystore-mới",
      children: "2. Tạo Keystore mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " vào Data Platform > Workspace Management > Keystore."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để mở popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create keystore"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "case-type--integration-kết-nối-vault-ngoài-vd-hashicorp",
      children: "Case: Type = Integration (kết nối Vault ngoài, vd: HashiCorp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " ở trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vault type"
      }), " , chọn hệ thống bạn dùng (thường là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HashiCorp"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " (tên định danh):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["chỉ chữ a–z, A–Z, số 0–9, dấu “-”, bắt đầu bằng chữ, tối đa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "50"
          }), " ký tự."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "nên đặt theo chuẩn mục-đích-môi-trường (vd: s3-prod)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), " (URL Vault):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["bắt đầu bằng https://, tối đa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "255"
          }), " ký tự."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "chỉ chứa chữ, số, dấu “-”, dấu “.” (theo rule hiển thị trên form)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ví dụ: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://vault.example.com/",
            children: "https://vault.example.com"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 7:"
      }), " nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "token truy cập Vault (ẩn ký tự khi nhập, có thể bật để xem)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["nhớ dùng token còn hạn; khi thay token sau này bạn sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update"
          }), " lại."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 8:"
      }), " nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Path"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path"
          }), " : đường dẫn tới secret trong Vault (min 1, max ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "255"
          }), " ký tự)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key"
          }), " : tên secret/key trong path (min 1, max ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "255"
          }), " ký tự)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ví dụ: Path data/lakehouse/s3-key — Key sse-c-key."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 9:"
      }), " nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " → nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), " được bật."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Fail"
          }), " → kiểm tra lại Endpoint/Token/Path/Key (thường sai quyền truy cập, token hết hạn, path/key không tồn tại, hoặc endpoint không dùng HTTPS)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 10:"
      }), " nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để tạo; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(443966)/* ["default"] */ .A) + "",
        width: "1271",
        height: "926"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "case-type--inworkspace-lưu-bí-mật-ngay-trong-workspace",
      children: "Case: Type = In‑workspace (lưu bí mật ngay trong Workspace)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " ở trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "In‑workspace"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Name"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["quy tắc giống trên: a–z, A–Z, 0–9, “-”, bắt đầu bằng chữ, tối đa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "50"
        }), " ký tự."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["giá trị bí mật (mật khẩu, token, chuỗi kết nối…), tối đa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "255"
        }), " ký tự, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cho phép ký tự đặc biệt"
        }), " (có icon để"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(943042)/* ["default"] */ .A) + "",
        width: "1279",
        height: "922"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-cập-nhật-keystore",
      children: "3. Cập nhật Keystore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Cho phép thay đổi thông tin cấu hình hoặc giá trị bí mật của keystore khi có thay đổi về endpoint, token, path hoặc nội dung giá trị."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Keystore List"
      }), " , chọn biểu tượng Action (dấu 3 chấm) của keystore cần chỉnh sửa → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "trường-hợp-1--type--in-workspace",
      children: "Trường hợp 1 – Type = In-workspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước thực hiện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Keystore List"
      }), " , nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " (dấu 3 chấm) của keystore cần chỉnh sửa → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Cửa sổ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Keystore"
      }), " xuất hiện với các trường:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " Được cố định là ", (0,jsx_runtime.jsx)(_components.em, {
            children: "In-workspace"
          }), " , không thể thay đổi."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " Tên định danh keystore, chỉ đọc, không chỉnh sửa được."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Value:"
          }), " Giá trị bí mật cần lưu (tối đa 255 ký tự, cho phép ký tự đặc biệt)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Value"
      }), " mới. Có thể nhấn biểu tượng để xem giá trị đang nhập."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu thay đổi hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(589893)/* ["default"] */ .A) + "",
        width: "1271",
        height: "739"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "trường-hợp-2--type--integration",
      children: "Trường hợp 2 – Type = Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước thực hiện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Keystore List"
      }), " , nhấn nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của keystore cần chỉnh sửa → chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Cửa sổ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Keystore"
      }), " xuất hiện với các trường:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type:"
          }), " Luôn là ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Integration"
          }), " , không thể đổi."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vault type:"
          }), " Kiểu vault (vd: HashiCorp), cố định, không chỉnh sửa."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " Tên định danh, chỉ đọc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint:"
          }), " URL endpoint mới của vault (bắt đầu bằng https://, tối đa 255 ký tự)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Path:"
          }), " Đường dẫn chứa key trong vault."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key:"
          }), " Tên key trong vault."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Điền hoặc cập nhật các trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Path"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key"
      }), " theo yêu cầu cấu hình mới."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối tới vault."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nếu thành công → nút ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), " sẽ được bật."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu thất bại → kiểm tra lại thông tin đã nhập."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu thay đổi hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(307000)/* ["default"] */ .A) + "",
        width: "2464",
        height: "1502"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-xóa-keystore",
      children: "4. Xóa Keystore"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách mở:"
      }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action > Delete"
      }), " tại keystore."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước thực hiện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống hiển thị popup xác nhận."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập từ khóa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "delete"
          }), " vào ô xác nhận."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm"
          }), " để xóa."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Điều kiện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu keystore đang được dùng bởi một dịch vụ, hệ thống báo lỗi:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "“The keystore is in use by: {service_name}”"
      }), " và không cho xóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(300096)/* ["default"] */ .A) + "",
        width: "1293",
        height: "675"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./xoa-workspace",
        children: " Previous Xóa workspace "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./certificate-manager",
        children: " Next Certificate Manager "
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

/***/ 589893
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d7e91bf6030-image-3-1-7885ee3f7ddf6b36cd322766f0228765.png");

/***/ },

/***/ 943042
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3feeb1c9ab17-image-1-1-94f5edcd800b7043b69f4111baba83a6.png");

/***/ },

/***/ 882989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ba3aea802ac-SCR-20251217-mjgo-fdcbb9291cd74f2e6015514d7c239d17.png");

/***/ },

/***/ 443966
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/664de75aefa6-image-22-2793ebe15288840cabaa3e8e5cbdbca0.png");

/***/ },

/***/ 307000
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9343aaa9321a-SCR-20251217-morh-40e29e62dc0681f7e0dd513248b455c3.png");

/***/ },

/***/ 300096
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a2c7d98ff839-image-2-1-1ca027f9cacf69a703ad15091bfafed3.png");

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