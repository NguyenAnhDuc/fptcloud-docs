"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[38861],{

/***/ 724134
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_certificate_manager_md_a8b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-certificate-manager-md-a8b.json
const site_docs_fpt_data_platform_certificate_manager_md_a8b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/certificate-manager","title":"2. FPT Data Platform","description":"Certificate Manager","source":"@site/docs/fpt-data-platform/certificate-manager.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/certificate-manager","permalink":"/fpt-data-platform/certificate-manager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Certificate manager","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=certificate-manager","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cdc service","permalink":"/fpt-data-platform/cdc-service"},"next":{"title":"Chinh sua ingestion","permalink":"/fpt-data-platform/chinh-sua-ingestion"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/certificate-manager.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Certificate manager',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=certificate-manager',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "1. Danh sách Certificate",
  "id": "1-danh-sách-certificate",
  "level": 3
}, {
  "value": "2. Import Certificate",
  "id": "2-import-certificate",
  "level": 3
}, {
  "value": "3. Import Certificate to Renew",
  "id": "3-import-certificate-to-renew",
  "level": 3
}, {
  "value": "4. Certificate Details",
  "id": "4-certificate-details",
  "level": 3
}, {
  "value": "5. Delete Certificate",
  "id": "5-delete-certificate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
      children: "Certificate Manager"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Certificate Manager"
      }), " là module trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workspace"
      }), " dùng để quản lý vòng đời chứng chỉ số (SSL/TLS), giúp đảm bảo an toàn, liên tục và thuận tiện khi sử dụng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các chức năng chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quản lý chứng chỉ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thay thế (renew) hoặc xóa chứng chỉ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Áp dụng chứng chỉ cho các dịch vụ trong Workspace."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-danh-sách-certificate",
      children: "1. Danh sách Certificate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Hiển thị danh sách chứng chỉ đã tạo trong hệ thống."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập:"
      }), " Data Platform > Chọn Workspace > Tab Certificate"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Danh sách Certificate, gồm các cột:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên chứng chỉ (click để xem chi tiết)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain"
          }), " : Tên miền áp dụng."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Used by service"
          }), " : Dịch vụ đang sử dụng chứng chỉ."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Updated at"
          }), " : Thời gian cập nhật gần nhất."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action"
          }), " : Menu thao tác ( sửa, xóa)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Import to renew"
          }), " : Nhập chứng chỉ để gia hạn (chỉ khả dụng nếu đang được sử dụng)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Delete"
          }), " : Xóa chứng chỉ khỏi hệ thống."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Button ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Import"
          }), " : Nhập (import) chứng chỉ mới."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(41807)/* ["default"] */ .A) + "",
        width: "2270",
        height: "902"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-import-certificate",
      children: "2. Import Certificate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Tải lên chứng chỉ SSL/TLS và private key mới để sử dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập:"
      }), " Data Platform > Workspace > Certificate > Import"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " (chỉ chứa chữ, số, dấu gạch ngang; không trùng tên đã tồn tại)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Dán nội dung ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate content"
          }), " (PEM format)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Dán nội dung ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate private key"
          }), " (PEM format)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Import"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý kiểm tra hệ thống:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Định dạng PEM hợp lệ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chứng chỉ không hết hạn, chưa bị thu hồi, và đã đến ngày hiệu lực."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Private key khớp với certificate."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(87333)/* ["default"] */ .A) + "",
        width: "2316",
        height: "1366"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-import-certificate-to-renew",
      children: "3. Import Certificate to Renew"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Thay thế chứng chỉ hiện tại bằng chứng chỉ mới."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập:"
      }), " Data Platform > Workspace > Certificate > Import Certificate to Renew"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate content"
          }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate private key"
          }), " (định dạng PEM)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Import & renew"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống cập nhật và áp dụng ngay cho dịch vụ đang dùng."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Điều kiện:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Định dạng PEM hợp lệ."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Không bị hết hạn, thu hồi, hoặc chưa đến ngày hiệu lực."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Private key khớp certificate."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chứng chỉ chưa được renew trước đó."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(43703)/* ["default"] */ .A) + "",
        width: "1265",
        height: "838"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-certificate-details",
      children: "4. Certificate Details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Xem thông tin chi tiết của chứng chỉ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập:"
      }), " Data Platform > Workspace > Certificate > Click vào tên chứng chỉ"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi nhấn vào tên chứng chỉ trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Certificate List"
      }), " , hệ thống sẽ mở popup chi tiết và hiển thị các trường sau:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả chi tiết"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên định danh của chứng chỉ trong hệ thống. Được đặt khi import chứng chỉ. Dùng để phân biệt các chứng chỉ khác nhau."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên miền hoặc wildcard domain (ví dụ: example.com hoặc *.example.com) mà chứng chỉ bảo vệ. Đây là thông tin quan trọng để xác định chứng chỉ có phù hợp với dịch vụ cần dùng hay không."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Public key info"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Thông tin về loại và độ dài khóa công khai, ví dụ: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RSA 2048"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RSA 4096"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECDSA P-256"
            }), ". Độ dài càng lớn thì mức độ bảo mật càng cao nhưng yêu cầu xử lý cũng cao hơn."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Valid From"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ngày giờ chứng chỉ bắt đầu có hiệu lực. Hiển thị kèm múi giờ (timezone) để tránh nhầm lẫn khi triển khai ở nhiều khu vực."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Valid To"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ngày giờ chứng chỉ hết hiệu lực. Sau thời điểm này, chứng chỉ sẽ không còn hợp lệ và có thể khiến dịch vụ bị lỗi kết nối bảo mật (HTTPS)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expires in"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Số ngày còn lại cho đến khi chứng chỉ hết hạn. Hệ thống tính tự động dựa trên thời gian hiện tại và ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Valid To"
            }), ". Đây là chỉ số giúp theo dõi và lên kế hoạch renew kịp thời."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Used by service"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Danh sách các dịch vụ hiện đang sử dụng chứng chỉ này, ví dụ: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "JupyterHub"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ingestion API"
            }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Engine"
            }), " … Trường này chỉ hiển thị nếu chứng chỉ đang được gán cho ít nhất một dịch vụ."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serial number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Số serial duy nhất của chứng chỉ, thường do CA (Certificate Authority) cấp. Dùng để tra cứu, xác minh hoặc quản lý chứng chỉ trong hệ thống."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signature algorithm"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Thuật toán chữ ký số mà chứng chỉ sử dụng, ví dụ: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SHA-256 with RSA"
            }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ECDSA with SHA-384"
            }), ". Điều này ảnh hưởng tới độ an toàn và tốc độ xử lý."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Updated at"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thời gian chứng chỉ được cập nhật gần nhất trong hệ thống (thường khi import mới hoặc renew). Giúp theo dõi lịch sử thay đổi chứng chỉ."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(426676)/* ["default"] */ .A) + "",
        width: "1280",
        height: "772"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-delete-certificate",
      children: "5. Delete Certificate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mục đích:"
      }), " Xóa chứng chỉ khỏi hệ thống."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Truy cập:"
      }), " Data Platform > Workspace > Certificate > Action > Delete"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu chứng chỉ đang được sử dụng, không thể xóa."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nếu nhập sai từ khóa hoặc để trống, hệ thống sẽ báo lỗi."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ảnh",
        src: (__webpack_require__(681208)/* ["default"] */ .A) + "",
        width: "2260",
        height: "1132"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./keystore-management",
        children: " Previous Keystore Management "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./monitoring",
        children: " Next Monitoring "
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

/***/ 426676
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26de482ad745-2025-12-17-14.57.00-3f5ebd27a4ec1f7a30857bf4f36888e5.jpg");

/***/ },

/***/ 41807
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/812fe72b4903-SCR-20251217-ngdi-60a06550bed66b6a842189e317510bb7.png");

/***/ },

/***/ 87333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/84d086ce73f2-SCR-20251217-nlex-dd2f1dc99dd04ed21de56d2febb0db59.png");

/***/ },

/***/ 681208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9588c0789901-SCR-20251217-ngrb-a3050a0fa3711fdec3e707593888600b.png");

/***/ },

/***/ 43703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a831e3039fcb-SCR-20251217-nqcs-54b5eeaeed14af745dd053ce6f92fcb9.png");

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