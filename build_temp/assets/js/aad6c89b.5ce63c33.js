"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[70599],{

/***/ 449818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_integration_cicd_guideline_md_aad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-integration-cicd-guideline-md-aad.json
const site_docs_fpt_appsec_integration_cicd_guideline_md_aad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/integration/cicd-guideline","title":"2. FPT AppSec","description":"DevOps Pipeline Integration","source":"@site/docs/fpt-appsec/integration/cicd-guideline.md","sourceDirName":"fpt-appsec/integration","slug":"/fpt-appsec/integration/cicd-guideline","permalink":"/fpt-appsec/integration/cicd-guideline","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cicd guideline","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=cicd-guideline","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tích hợp & Lên lịch","permalink":"/fpt-appsec/integration/"},"next":{"title":"Create schedule","permalink":"/fpt-appsec/integration/create-schedule"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/integration/cicd-guideline.md


const frontMatter = {
	sidebar_label: 'Cicd guideline',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=cicd-guideline',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Tổng quan",
  "id": "1-tổng-quan",
  "level": 3
}, {
  "value": "2. Yêu cầu chuẩn bị",
  "id": "2-yêu-cầu-chuẩn-bị",
  "level": 3
}, {
  "value": "3. Đặc tả API",
  "id": "3-đặc-tả-api",
  "level": 3
}, {
  "value": "3.1. Tích hợp scan code",
  "id": "31-tích-hợp-scan-code",
  "level": 4
}, {
  "value": "3.1.1. Scan toàn bộ mã nguồn",
  "id": "311-scan-toàn-bộ-mã-nguồn",
  "level": 5
}, {
  "value": "3.1.2. Scan theo commit",
  "id": "312-scan-theo-commit",
  "level": 5
}, {
  "value": "3.2. Tích hợp scan secret",
  "id": "32-tích-hợp-scan-secret",
  "level": 4
}, {
  "value": "3.2.1. Scan toàn bộ mã nguồn",
  "id": "321-scan-toàn-bộ-mã-nguồn",
  "level": 5
}, {
  "value": "3.2.2. Scan theo commit",
  "id": "322-scan-theo-commit",
  "level": 5
}, {
  "value": "3.3. Tích hợp scan image",
  "id": "33-tích-hợp-scan-image",
  "level": 4
}, {
  "value": "3.4. Tích hợp lấy kết quả scan code",
  "id": "34-tích-hợp-lấy-kết-quả-scan-code",
  "level": 4
}, {
  "value": "3.5. Tích hợp lấy kết quả scan secret",
  "id": "35-tích-hợp-lấy-kết-quả-scan-secret",
  "level": 4
}, {
  "value": "3.6. Tích hợp lấy kết quả scan image",
  "id": "36-tích-hợp-lấy-kết-quả-scan-image",
  "level": 4
}, {
  "value": "4. Pipeline flow",
  "id": "4-pipeline-flow",
  "level": 3
}, {
  "value": "4.1. Giai đoạn scan code (sau bước checkout source)",
  "id": "41-giai-đoạn-scan-code-sau-bước-checkout-source",
  "level": 4
}, {
  "value": "4.2. Giai đoạn scan secret (sau bước checkout source)",
  "id": "42-giai-đoạn-scan-secret-sau-bước-checkout-source",
  "level": 4
}, {
  "value": "4.3. Giai đoạn scan image (sau bước build)",
  "id": "43-giai-đoạn-scan-image-sau-bước-build",
  "level": 4
}, {
  "value": "5. Cấu hình mẫu",
  "id": "5-cấu-hình-mẫu",
  "level": 3
}, {
  "value": "5.1. GitLab CI",
  "id": "51-gitlab-ci",
  "level": 4
}, {
  "value": "5.2. Jenkins Pipeline",
  "id": "52-jenkins-pipeline",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "2-fpt-appsec",
        children: "2. FPT AppSec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevOps Pipeline Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline: Tích hợp Scanning API của FSP Core Service vào CI/CD Pipelines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn này sẽ hướng dẫn bạn cách tích hợp các endpoint quét dịch vụ lõi FSP vào quy trình CI/CD của mình, cho phép tự động quét mã nguồn, quét bí mật và quét bảo mật hình ảnh container trên mỗi lần thay đổi."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "CICD flow",
        src: (__webpack_require__(792960)/* ["default"] */ .A) + "",
        width: "1546",
        height: "718"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tổng-quan",
      children: "1. Tổng quan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tự động hóa các bước quét bảo mật trong pipeline CI/CD giúp phát hiện lỗ hổng sớm. Hướng dẫn này bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Yêu cầu chuẩn bị"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cách thiết lập xác thực"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Các bước tích hợp pipeline cho scan code, scan secret, và scan image"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu hình mẫu (GitLab CI, Jenkins)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-yêu-cầu-chuẩn-bị",
      children: "2. Yêu cầu chuẩn bị"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tài khoản FSP Core Service đang hoạt động, với Orgid và access_key hợp lệ."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập được các endpoint API (ví dụ: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/integration/scan-code, /integration/scan-secret, /integration/scan-image"
        }), " và các endpoint lấy kết quả tương ứng)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runner hoặc agent CI/CD có thể kết nối mạng tới API FSP Core Service."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môi trường shell Unix-like (bash, sh) để viết script gọi HTTP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-đặc-tả-api",
      children: "3. Đặc tả API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-tích-hợp-scan-code",
      children: "3.1. Tích hợp scan code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "311-scan-toàn-bộ-mã-nguồn",
      children: "3.1.1. Scan toàn bộ mã nguồn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-code"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Khởi tạo quét mã nguồn cho một kho lưu trữ và commit cụ thể thuộc nhóm FSEC."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "team_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mã của nhóm FSEC, cách lấy team_code ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=cai-dat-team",
              children: "tại đây"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "git_repo_url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL kho lưu trữ Git (ví dụ: GitHub hoặc GitLab)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp để truy cập kho lưu trữ, lấy access_key tại màn hình Integration detail", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên nhánh cần quét"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA của commit trên nhánh cần quét"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-code HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"team_code\": \"FSEC_TEAM_001\",\n  \"git_repo_url\": \"https://github.com/example/repo.git\",\n  \"access_key\": \"abcd1234\",\n  \"branch\": \"main\",\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"data\": {\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"\",\n\"request_time\": \"2025-03-25 13:34:11\"\n}\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "312-scan-theo-commit",
      children: "3.1.2. Scan theo commit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-code?scan-mode=commit"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Khởi tạo quét mã nguồn cho một kho lưu trữ và commit cụ thể thuộc nhóm FSEC."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "team_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mã của nhóm FSEC, cách lấy team_code ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=cai-dat-team",
              children: "tại đây"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "git_repo_url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL kho lưu trữ Git (ví dụ: GitHub hoặc GitLab)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp để truy cập kho lưu trữ, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên nhánh cần quét"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA của commit trên nhánh cần quét"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-code?scan-mode=commit HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"team_code\": \"FSEC_TEAM_001\",\n  \"git_repo_url\": \"https://github.com/example/repo.git\",\n  \"access_key\": \"abcd1234\",\n  \"branch\": \"main\",\n  \"commit\": \"a1b2c3d4e5f6g7h8i9j0\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"data\": {\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"\",\n\"request_time\": \"2025-03-25 13:34:11\"\n}\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-tích-hợp-scan-secret",
      children: "3.2. Tích hợp scan secret"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "321-scan-toàn-bộ-mã-nguồn",
      children: "3.2.1. Scan toàn bộ mã nguồn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-secret"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Khởi tạo quét secret cho một kho lưu trữ và commit cụ thể thuộc nhóm FSEC."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "team_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mã của nhóm FSEC, cách lấy team_code ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=cai-dat-team",
              children: "tại đây"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "git_repo_url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL kho lưu trữ Git (ví dụ: GitHub hoặc GitLab)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp để truy cập kho lưu trữ, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên nhánh cần quét"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA của commit trên nhánh cần quét"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-secret HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"team_code\": \"FSEC_TEAM_001\",\n  \"git_repo_url\": \"https://github.com/example/repo.git\",\n  \"access_key\": \"abcd1234\",\n  \"branch\": \"main\",\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"data\": {\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"\",\n\"request_time\": \"2025-03-25 13:34:11\"\n}\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "322-scan-theo-commit",
      children: "3.2.2. Scan theo commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-secret?scan-mode=commit"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Khởi tạo quét secret cho một kho lưu trữ và commit cụ thể thuộc nhóm FSEC."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "team_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mã của nhóm FSEC, cách lấy team_code ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=cai-dat-team",
              children: "tại đây"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "git_repo_url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL kho lưu trữ Git (ví dụ: GitHub hoặc GitLab)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp để truy cập kho lưu trữ, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "branch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên nhánh cần quét"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SHA của commit trên nhánh cần quét"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-secret?scan-mode=commit HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"team_code\": \"FSEC_TEAM_001\",\n  \"git_repo_url\": \"https://github.com/example/repo.git\",\n  \"access_key\": \"abcd1234\",\n  \"branch\": \"main\",\n  \"commit\": \"a1b2c3d4e5f6g7h8i9j0\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"data\": {\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"\",\n\"request_time\": \"2025-03-25 13:34:11\"\n}\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-tích-hợp-scan-image",
      children: "3.3. Tích hợp scan image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-image"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Khởi tạo quét image cho một kho lưu trữ và commit cụ thể thuộc nhóm FSEC."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "team_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mã của nhóm FSEC, cách lấy team_code ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=cai-dat-team",
              children: "tại đây"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp cho registry image, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "image_url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Đường dẫn registry và tag của image (ví dụ: repo:tag)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-image HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"team_code\": \"FSEC_TEAM_001\",\n  \"access_key\": \"abcd1234\",\n  \"image_url\": \"registry.example.com/myapp:latest\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"data\": {\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"\",\n\"request_time\": \"2025-03-25 13:34:11\"\n}\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "34-tích-hợp-lấy-kết-quả-scan-code",
      children: "3.4. Tích hợp lấy kết quả scan code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-code-result"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Lấy kết quả của một lần quét mã nguồn đã khởi tạo trước đó bằng request_code."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mã yêu cầu trả về từ /scan-code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-code-result HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"request_code\": \"RSC-123456\",\n  \"access_key\": \"abcd1234\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"RSC-123456\",\n\"scan_status\": \"FINISHED\",\n\"scan_result_status\": \"SUCCESS\",\n\"scan_result\": {\n\"C\": 0,\n\"H\": 0,\n\"L\": 0,\n\"M\": 4\n},\n\"result_details\": {\n\"scanCode\": {\n\"M\": 4,\n\"L\": 0,\n\"H\": 0,\n\"C\": 0\n}\n},\n\"finish_time\": \"2025-08-18 04:32:30.137421\",\n\"quatity_gate\": null\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "35-tích-hợp-lấy-kết-quả-scan-secret",
      children: "3.5. Tích hợp lấy kết quả scan secret"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-secret-result"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Lấy kết quả của một lần quét secret đã khởi tạo trước đó bằng request_code."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mã yêu cầu trả về từ /scan-secret"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-secret-result HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"request_code\": \"RSC-123456\",\n  \"access_key\": \"abcd1234\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"RSC-123456\",\n\"scan_status\": \"FINISHED\",\n\"scan_result_status\": \"SUCCESS\",\n\"scan_result\": {\n\"C\": 0,\n\"H\": 0,\n\"L\": 0,\n\"M\": 4\n},\n\"result_details\": {\n\"scanCode\": {\n\"M\": 4,\n\"L\": 0,\n\"H\": 0,\n\"C\": 0\n}\n},\n\"finish_time\": \"2025-08-18 04:32:30.137421\",\n\"quatity_gate\": null\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "36-tích-hợp-lấy-kết-quả-scan-image",
      children: "3.6. Tích hợp lấy kết quả scan image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-image-result"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Lấy kết quả của một lần quét image đã khởi tạo trước đó bằng request_code."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yêu cầu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Headers"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orgid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Không"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID tổ chức để xác thực"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Body"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content-Type: application/json"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bắt buộc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request_code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mã yêu cầu trả về từ /scan-image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "access_key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Có"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Khóa truy cập do FSEC cấp, cách lấy access_key của GitLab server ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://fptcloud.com/documents/fpt-security-platform/?doc=guide-gitlabserver",
              children: "tại đây"
            }), ", tương tự với các loại tích hợp khác"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-image-result HTTP/1.1\nHost: api.yourdomain.com\nOrgid: 123e4567-e89b-12d3-a456-426614174000\nAccept: application/json\nContent-Type: application/json\n\n{\n  \"request_code\": \"RSC-123456\",\n  \"access_key\": \"abcd1234\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phản hồi"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "200 - Successful Response"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"errorCode\": \"F-000\",\n\"errorMessage\": \"\",\n\"data\": {\n\"request_code\": \"RSC-123456\",\n\"scan_status\": \"FINISHED\",\n\"scan_result_status\": \"SUCCESS\",\n\"scan_result\": {\n\"C\": 0,\n\"H\": 0,\n\"L\": 0,\n\"M\": 4\n},\n\"result_details\": {\n\"scanCode\": {\n\"M\": 4,\n\"L\": 0,\n\"H\": 0,\n\"C\": 0\n}\n},\n\"finish_time\": \"2025-08-18 04:32:30.137421\",\n\"quatity_gate\": null\n}\n}"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "422 - Validation Error"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "{\n\"detail\": [\n{\n\"loc\": [\"string\", 0],\n\"msg\": \"string\",\n\"type\": \"string\"\n}\n]\n}"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-pipeline-flow",
      children: "4. Pipeline flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-giai-đoạn-scan-code-sau-bước-checkout-source",
      children: "4.1. Giai đoạn scan code (sau bước checkout source)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kích hoạt scan"
        }), " :"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "* Scan toàn bộ source code: Gọi `POST /api/v1/xplat/fsp-service/core-service/integration/scan-code` với thông tin chi tiết về repository.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "* Scan thay đổi theo commit: Gọi `POST /api/v1/xplat/fsp-service/core-service/integration/scan-code?scan-mode=commit` với thông tin chi tiết về repository.\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lấy kết quả"
        }), " : Gọi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-code-result"
        }), " và lặp lại đến khi ", (0,jsx_runtime.jsx)(_components.em, {
          children: "scan_result_status = SUCCESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Đánh giá pass/fail"
        }), " : Dựa trên kết quả thuộc trường ", (0,jsx_runtime.jsx)(_components.em, {
          children: "scan_result"
        }), " hoặc các ngưỡng chất lượng (quality gate) riêng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-giai-đoạn-scan-secret-sau-bước-checkout-source",
      children: "4.2. Giai đoạn scan secret (sau bước checkout source)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kích hoạt scan"
        }), " : Gọi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-secret"
        }), " với payload giống bước scan code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lấy kết quả"
        }), " : Gọi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-secret-result"
        }), " và lặp lại đến khi ", (0,jsx_runtime.jsx)(_components.em, {
          children: "scan_result_status = SUCCESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Đánh giá pass/fail"
        }), " : Dựa trên kết quả thuộc trường ", (0,jsx_runtime.jsx)(_components.em, {
          children: "scan_result"
        }), " hoặc các ngưỡng chất lượng (quality gate) riêng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-giai-đoạn-scan-image-sau-bước-build",
      children: "4.3. Giai đoạn scan image (sau bước build)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kích hoạt scan"
        }), " : Gọi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/v1/xplat/fsp-service/core-service/integration/scan-image"
        }), " với tag của image."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lấy kết quả"
        }), " : Gọi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST /api/v1/xplat/fsp-service/core-service/integration/get-scan-image-result"
        }), " và lặp lại đến khi ", (0,jsx_runtime.jsx)(_components.em, {
          children: "scan_result_status = SUCCESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Đánh giá pass/fail"
        }), " : Dựa trên kết quả thuộc trường ", (0,jsx_runtime.jsx)(_components.em, {
          children: "scan_result"
        }), " hoặc các ngưỡng chất lượng (quality gate) riêng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-cấu-hình-mẫu",
      children: "5. Cấu hình mẫu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-gitlab-ci",
      children: "5.1. GitLab CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "variables:\n  ORGID: \"$FSP_ORGID\"\n  ACCESS_KEY: \"$FSP_ACCESS_KEY\"\n  API_URL: \"https://api.yourdomain.com/api/v1/xplat/fsp-service/core-service\"\n  TEAM_CODE: \"FSEC_TEAM_001\"\n\nstages:\n  - code-scan\n  - secret-scan\n  - build\n  - image-scan\n\n# Shared script for code & secret scans\n.scan-stage: &scan-stage;\n  image: alpine:latest\n  before_script:\n    - apk add --no-cache curl jq\n  script:\n    - echo \"Trigger scan\"\n    - RESPONSE=$(curl -s -X POST \"$API_URL/integration/${ENDPOINT}\" \\\n        -H \"Orgid: $ORGID\" \\\n        -H \"access_key: $ACCESS_KEY\" \\\n        -H \"Content-Type: application/json\" \\\n        -d \"{\\\"team_code\\\":\\\"$TEAM_CODE\\\",\\\"git_repo_url\\\":\\\"$CI_PROJECT_URL.git\\\",\\\"branch\\\":\\\"$CI_COMMIT_REF_NAME\\\",\\\"commit\\\":\\\"$CI_COMMIT_SHA\\\"}\")\n    - CODE=$(echo \"$RESPONSE\" | jq -r '.data.data.request_code')\n    - |\n      echo \"Polling for scan result...\"\n      until [ \"$(curl -s -X POST \"$API_URL/integration/$RESULT_ENDPOINT\" \\\n            -H \"Orgid: $ORGID\" -H \"access_key: $ACCESS_KEY\" \\\n            -H \"Content-Type: application/json\" \\\n            -d \"{\\\"request_code\\\":\\\"$CODE\\\",\\\"access_key\\\":\\\"$ACCESS_KEY\\\"}\" \\\n        | jq -r '.data.data.status')\" = \"COMPLETED\" ]; do\n        sleep 10\n      done\n    - ISSUES=$(curl -s -X POST \"$API_URL/integration/$RESULT_ENDPOINT\" \\\n        -H \"Orgid: $ORGID\" -H \"access_key: $ACCESS_KEY\" \\\n        -H \"Content-Type: application/json\" \\\n        -d \"{\\\"request_code\\\":\\\"$CODE\\\",\\\"access_key\\\":\\\"$ACCESS_KEY\\\"}\" \\\n        | jq '.data.data.issues_found')\n    - if [ \"$ISSUES\" -gt 0 ]; then echo \"Found $ISSUES issues in $ENDPOINT\"; exit 1; fi\n\ncode-scan:\n  stage: code-scan\n  variables:\n    ENDPOINT: \"scan-code\"\n    RESULT_ENDPOINT: \"get-scan-code-result\"\n  <<: *scan-stage\n\nsecret-scan:\n  stage: secret-scan\n  variables:\n    ENDPOINT: \"scan-secret\"\n    RESULT_ENDPOINT: \"get-scan-secret-result\"\n  <<: *scan-stage\n\nbuild:\n  stage: build\n  script:\n    - docker build -t myapp:$CI_COMMIT_SHA .\n\nimage-scan:\n  stage: image-scan\n  script:\n    - echo \"Trigger image scan\"\n    - RESPONSE=$(curl -s -X POST \"$API_URL/integration/scan-image\" \\\n        -H \"Orgid: $ORGID\" \\\n        -H \"access_key: $ACCESS_KEY\" \\\n        -H \"Content-Type: application/json\" \\\n        -d \"{\\\"team_code\\\":\\\"$TEAM_CODE\\\",\\\"access_key\\\":\\\"$ACCESS_KEY\\\",\\\"image_url\\\":\\\"registry.example.com/myapp:$CI_COMMIT_SHA\\\"}\")\n    - CODE=$(echo \"$RESPONSE\" | jq -r '.data.data.request_code')\n    - |\n      echo \"Polling for image scan result...\"\n      until [ \"$(curl -s -X POST \"$API_URL/integration/get-scan-image-result\" \\\n            -H \"Orgid: $ORGID\" -H \"access_key: $ACCESS_KEY\" \\\n            -H \"Content-Type: application/json\" \\\n            -d \"{\\\"request_code\\\":\\\"$CODE\\\",\\\"access_key\\\":\\\"$ACCESS_KEY\\\"}\" \\\n        | jq -r '.data.data.scan_status')\" = \"COMPLETED\" ]; do\n        sleep 10\n      done\n    - HIGH=$(curl -s -X POST \"$API_URL/integration/get-scan-image-result\" \\\n        -H \"Orgid: $ORGID\" -H \"access_key: $ACCESS_KEY\" \\\n        -H \"Content-Type: application/json\" \\\n        -d \"{\\\"request_code\\\":\\\"$CODE\\\",\\\"access_key\\\":\\\"$ACCESS_KEY\\\"}\" \\\n        | jq '.data.data.scan_result.H')\n    - if [ \"$HIGH\" -gt 0 ]; then echo \"High severity issues found\"; exit 1; fi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-jenkins-pipeline",
      children: "5.2. Jenkins Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pipeline {\n  agent any\n  environment {\n    ORGID = credentials('FSP_ORGID')\n    ACCESS_KEY = credentials('FSP_ACCESS_KEY')\n    API_URL = 'https://api.yourdomain.com/api/v1/xplat/fsp-service/core-service'\n  }\n  stages {\n    stage('Code Scan') {\n      steps {\n        script {\n          def payload = [team_code: 'FSEC_TEAM_001', git_repo_url: env.GIT_URL, branch: env.BRANCH_NAME, commit: env.GIT_COMMIT]\n          def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: groovy.json.JsonOutput.toJson(payload), url: \"${API_URL}/integration/scan-code\", customHeaders: [[name:'Orgid', value:ORGID], [name:'access_key', value:ACCESS_KEY]]\n          def code = readJSON(text: response.content).data.data.request_code\n          timeout(time: 5, unit: 'MINUTES') {\n            waitUntil {\n              def result = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: groovy.json.JsonOutput.toJson([request_code: code, access_key: ACCESS_KEY]), url: \"${API_URL}/integration/get-scan-code-result\", customHeaders: [[name:'Orgid', value:ORGID], [name:'access_key', value:ACCESS_KEY]]\n              return readJSON(text: result.content).data.data.status == 'COMPLETED'\n            }\n          }\n          def issues = readJSON(text: result.content).data.data.issues_found\n          if (issues > 0) { error \"Found ${issues} code issues\" }\n        }\n      }\n    }\n    stage('Secret Scan') {\n      steps {\n        script {\n          def payload = [team_code: 'FSEC_TEAM_001', git_repo_url: env.GIT_URL, branch: env.BRANCH_NAME, commit: env.GIT_COMMIT]\n          def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: groovy.json.JsonOutput.toJson(payload), url: \"${API_URL}/integration/scan-secret\", custom\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-harbor",
        children: " Previous Harbor "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-workspace",
        children: " Next Workspace Management - Quản lý Asset và Issue "
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

/***/ 792960
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0f7aa110ee8c-Screenshot-2026-01-22-113824-b690805d3591f533165babbe3196de8b.png");

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