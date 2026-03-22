"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45405],{

/***/ 940781
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_initial_workspace_scmasset_md_689_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-initial-workspace-scmasset-md-689.json
const site_docs_fpt_appsec_initial_workspace_scmasset_md_689_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/initial/workspace-scmasset","title":"2. FPT AppSec","description":"Hướng dẫn thực hiện các thao tác cơ bản với Source Code anagement asset (repo/project)","source":"@site/docs/fpt-appsec/initial/workspace-scmasset.md","sourceDirName":"fpt-appsec/initial","slug":"/fpt-appsec/initial/workspace-scmasset","permalink":"/fpt-appsec/initial/workspace-scmasset","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Workspace scmasset","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Workspace crasset","permalink":"/fpt-appsec/initial/workspace-crasset"},"next":{"title":"Quản lý Team","permalink":"/fpt-appsec/team/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/initial/workspace-scmasset.md


const frontMatter = {
	sidebar_label: 'Workspace scmasset',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset',
	parent: 'https://fptcloud.com/documents/fpt-appsec',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT AppSec';

const assets = {

};



const toc = [{
  "value": "1. Add Asset",
  "id": "1-add-asset",
  "level": 2
}, {
  "value": "2. Xem thông tin tổng quan của Assets",
  "id": "2-xem-thông-tin-tổng-quan-của-assets",
  "level": 2
}, {
  "value": "3. Xem thông tin của issues",
  "id": "3-xem-thông-tin-của-issues",
  "level": 2
}, {
  "value": "3.1. Truy cập màn hình Issue List",
  "id": "31-truy-cập-màn-hình-issue-list",
  "level": 3
}, {
  "value": "3.2. Xem thông tin Issue",
  "id": "32-xem-thông-tin-issue",
  "level": 3
}, {
  "value": "3.3. Lọc, Tìm kiếm và Sắp xếp Issue",
  "id": "33-lọc-tìm-kiếm-và-sắp-xếp-issue",
  "level": 3
}, {
  "value": "3.3.1. Filter",
  "id": "331-filter",
  "level": 4
}, {
  "value": "3.3.2. Search",
  "id": "332-search",
  "level": 4
}, {
  "value": "3.3.3. Sort",
  "id": "333-sort",
  "level": 4
}, {
  "value": "3.4. Xem thông tin chi tiết của một issue",
  "id": "34-xem-thông-tin-chi-tiết-của-một-issue",
  "level": 3
}, {
  "value": "4. Rescan asset",
  "id": "4-rescan-asset",
  "level": 2
}, {
  "value": "4.1. Rescan từ màn hình Asset List",
  "id": "41-rescan-từ-màn-hình-asset-list",
  "level": 3
}, {
  "value": "4.2. Rescan từ màn hình Asset Detail",
  "id": "42-rescan-từ-màn-hình-asset-detail",
  "level": 3
}, {
  "value": "5. Disable/Enable Asset",
  "id": "5-disableenable-asset",
  "level": 2
}, {
  "value": "5.1. Disable Asset",
  "id": "51-disable-asset",
  "level": 3
}, {
  "value": "5.2. Enable Asset",
  "id": "52-enable-asset",
  "level": 3
}, {
  "value": "6. Delete Asset",
  "id": "6-delete-asset",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "2-fpt-appsec",
        children: "2. FPT AppSec"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn thực hiện các thao tác cơ bản với Source Code anagement asset (repo/project)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-add-asset",
      children: "1. Add Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Org Admin"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Users của team"
      }), " có quyền thêm mới asset"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Sau khi chọn Team, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Asset"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(278065)/* ["default"] */ .A) + "",
        width: "1189",
        height: "732"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn GitHub/GitLab/GitLab"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(920713)/* ["default"] */ .A) + "",
        width: "1190",
        height: "734"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["_Lưu ý: Pop-up add asset chỉ hiện lên khi loại asset source (GitHub/GitLab/GitLab) được tích hợp tại màn", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      }), ". Trường hợp ấn vào 1 souce chưa được tích hợp, màn hình sẽ chuyển sang tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      }), " của loại source đó _."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project/repo"
      }), " chứa source cần scan"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(709467)/* ["default"] */ .A) + "",
        width: "1204",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lúc này, màn hình sẽ hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository group"
      }), " gồm các \"repository\" và các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "branch"
      }), " thuộc repo đó. Người dùng có thể search branch mong muốn theo tên của branch"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Chọn repo và bracnh bạn muốn và ấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(881222)/* ["default"] */ .A) + "",
        width: "1194",
        height: "488"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi add thành công, hệ thống sẽ tự động scan lần đầu, trả về kết quả ra màn Asset Management tab All Assets và xem lịch sử add asset trong tab History"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-xem-thông-tin-tổng-quan-của-assets",
      children: "2. Xem thông tin tổng quan của Assets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại màn hình Asset Management > All , chọn 1 asset bất kỳ bằng cách click vào textlink Asset Name"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/wp-content/uploads/2025/05/a0.jpg",
        children: "a0"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại màn hình Asset Overview, người dùng có thể xem các thông tin tổng quan:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(448255)/* ["default"] */ .A) + "",
        width: "718",
        height: "622"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin chung (General Information):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Asset Status: Active/Inactive"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Language: Hiển thị 1–2 ngôn ngữ chính, hover để xem tối đa 5 ngôn ngữ có tỉ lệ cao nhất và mục “Other”"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Owner: Người sở hữu asset (User name + email hoặc pipeline CICD)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Added By: Người thực hiện add asset (User name + email hoặc pipeline CICD)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Added At: Thời gian thực hiện add asset"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin về mã nguồn (Language Spinner Chart):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Thanh tổng quan (horizontal bar) hiển thị tỷ lệ % các ngôn ngữ theo thứ tự giảm dần"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Danh sách legend hiển thị tối đa 5 ngôn ngữ + “Other” (tỷ lệ còn lại)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin scan gần nhất (Issue Overview):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Scan Type: Logo + tên scan, click để xem chi tiết theo từng loại (Code Analysis, Secret Scanning, IaC Scanning)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Commit + Scan Time: Hiển thị commit_id và thời gian scan"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Total Open Issues: Số lượng issues đang mở"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "No. Severity: Số lượng issue phân theo mức độ (Critical, High, Medium, Low)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Biểu đồ Scanning Times By Day (7 ngày gần nhất)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Latest Request: Danh sách tối đa 3 request scan gần nhất (Scanned By, Scanned At, kết quả scan)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), ". Bên cạnh đó, tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "History"
      }), " , người dùng có thể theo dõi lịch sử scan của asset và thực hiện filter theo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scan type"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khoảng thời gian"
      }), " thực hiện scan."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(714020)/* ["default"] */ .A) + "",
        width: "719",
        height: "281"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-xem-thông-tin-của-issues",
      children: "3. Xem thông tin của issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-truy-cập-màn-hình-issue-list",
      children: "3.1. Truy cập màn hình Issue List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tại màn hình Asset List, chọn một Asset bất kỳ bằng cách click vào textlink CR Asset Name. Hệ thống điều hướng đến màn hình Asset Detail với tab mặc định là Overview."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Chọn tab Issue để xem danh sách issue."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(532978)/* ["default"] */ .A) + "",
        width: "677",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Danh sách mặc định được sắp xếp theo Score giảm dần và mỗi trang hiển thị tối đa 10 issue."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-xem-thông-tin-issue",
      children: "3.2. Xem thông tin Issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tại màn hình Issue List, mỗi issue được hiển thị dưới dạng Issue Info Card với các thông tin:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(677798)/* ["default"] */ .A) + "",
        width: "677",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Severity: Critical, High, Medium, Low"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vulnerability Type"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue ID + Link Copy: copy link để mở trực tiếp issue trong tab mới"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vul References: danh sách CWE liên quan (<=3 CWE hiển thị đầy đủ, >3 hiển thị “+MORE”)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Score: điểm ưu tiên (0–10), làm tròn 1 chữ số thập phân"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue Status: trạng thái hiện tại (Open, Ignored, False Positive, Acceptable Risk, …)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Note Status: nút thay đổi trạng thái (disable nếu không được phép, link hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://fptcloud.com/documents/fpt-appsec/?doc=guide-change-status-issue-list",
            children: "tại đây"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Details: mở chi tiết issue"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Code Block: đoạn code chứa lỗi, highlight dòng lỗi và ±4 dòng context"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue Suggest Summary: gợi ý xử lý"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Project Link: mở file chứa issue trên Git (tab mới)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-lọc-tìm-kiếm-và-sắp-xếp-issue",
      children: "3.3. Lọc, Tìm kiếm và Sắp xếp Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "331-filter",
      children: "3.3.1. Filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cho phép lọc theo: Severity, Status, Priority Score (0–10), Security Category, Vulnerability Type, OWASP Top 10, CWE. Người dùng có thể chọn nhiều điều kiện cùng lúc"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khi không chọn filter → hiển thị toàn bộ issue"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(107206)/* ["default"] */ .A) + "",
        width: "677",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "332-search",
      children: "3.3.2. Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhập từ khóa tìm theo: Issue ID, Issue Name, Issue Suggest Summary"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhấn Enter để tìm kiếm, Clear để xóa và reset danh sách"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(934117)/* ["default"] */ .A) + "",
        width: "677",
        height: "627"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "333-sort",
      children: "3.3.3. Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sắp xếp theo: Severity (C→H→M→L), Score, Created Time"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mặc định: Sort theo Score giảm dần"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(684177)/* ["default"] */ .A) + "",
        width: "676",
        height: "377"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-xem-thông-tin-chi-tiết-của-một-issue",
      children: "3.4. Xem thông tin chi tiết của một issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn Details tại một issue card bất kỳ (thuộc Code Analysis/Secret Scanning/IaC Scanning) để mở popup Issue Detail."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(711322)/* ["default"] */ .A) + "",
        width: "667",
        height: "374"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại màn hình Issue Detail, người dùng có thể xem thông tin chi tiết của issue:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông tin chung (Issue Detail):"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(339685)/* ["default"] */ .A) + "",
        width: "1392",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Severity: Mức độ nghiêm trọng của issue (Critical, High, Medium, Low)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vulnerability Type: Loại lỗ hổng/vulnerability của issue."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Link (Copy icon): Copy đường dẫn của issue theo ID. Khi paste đường dẫn này lên tab mới, hệ thống mở màn hình Issue List và tự động gán giá trị issue_id vào search bar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue Status: Trạng thái hiện tại của issue theo scan version (Opened, Ignored)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin chi tiết:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(30348)/* ["default"] */ .A) + "",
        width: "1392",
        height: "636"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue Description: Mô tả chi tiết về issue."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue Remediation: Hướng dẫn fix issue."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "References: Danh sách link tham chiếu liên quan, click để mở thông tin chi tiết."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Issue File: Đường dẫn file chứa issue trong Git, click để mở file trực tiếp trên Git (tab mới)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Code Block: Hiển thị toàn bộ file code, highlight dòng chứa lỗi và từ khóa gây ra lỗi. Dòng lỗi được giữ ở giữa code block khi popup được mở."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Activity: Lịch sử thay đổi trạng thái issue"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-rescan-asset",
      children: "4. Rescan asset"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-rescan-từ-màn-hình-asset-list",
      children: "4.1. Rescan từ màn hình Asset List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại màn hình All Assets, chọn asset hoặc scan type cần quét lại bằng cách ấn vào biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "⋮"
      }), " ở góc phải của asset hoặc scan type"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(432828)/* ["default"] */ .A) + "",
        width: "866",
        height: "190"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn action \"Rescan\", hệ thống sẽ thực hiện scan lại asset hoặc scan type tương ứng và hiện thông báo ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Rescan requested successfully\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(976329)/* ["default"] */ .A) + "",
        width: "869",
        height: "169"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trường hợp thất bại, hệ thống hiển thị thông báo ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Rescan request failed\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*Note: Nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rescan"
      }), " sẽ bị vô hiệu hóa cho đến khi quét xong."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-rescan-từ-màn-hình-asset-detail",
      children: "4.2. Rescan từ màn hình Asset Detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Tại màn hình Asset List, nhấp vào tên asset để vào chi tiết."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn tab Issue → Chọn sub-tab tương ứng (Code Analysis, Secret Scanning, IaC Scanning)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(292733)/* ["default"] */ .A) + "",
        width: "1202",
        height: "773"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn Rescan now ở góc trên bên phải màn hình. Nếu thành công, hệ thống hiển thị thông báo: \"Rescan requested successfully\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(748019)/* ["default"] */ .A) + "",
        width: "902",
        height: "580"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu thất bại, hệ thống thông báo: \"Rescan request failed\"."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["*Note: Nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rescan"
      }), " sẽ bị vô hiệu hóa cho đến khi quét xong."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-disableenable-asset",
      children: "5. Disable/Enable Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable/Disable Asset"
      }), " cho phép người dùng tạm thời vô hiệu hóa hoặc kích hoạt lại một asset trong hệ thống."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-disable-asset",
      children: "5.1. Disable Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Đi tới menu Workspace → Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Assets"
      }), " để xem danh sách asset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn asset cần disable bằng cách nhấn biểu tượng menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "⋮"
      }), " ở góc phải asset. Chọn Disable từ danh sách action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(585867)/* ["default"] */ .A) + "",
        width: "867",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập chính xác từ khóa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disable"
      }), " vào ô xác nhận rồi nhấn Confirm. Nếu nhập sai, hệ thống hiển thị thông báo lỗi: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Type correct phrase to confirm your action.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(698587)/* ["default"] */ .A) + "",
        width: "357",
        height: "192"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi nhập đúng và xác nhận thành công popup sẽ đóng lại, asset tại màn hình Asset List được cập nhật với trạng thái asset mới (Disabled) và hệ thống hiển thị toast message: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Disable asset successfully.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-enable-asset",
      children: "5.2. Enable Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn Asset cần Enable bằng cách nhấn biểu tượng menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "⋮"
      }), " ở góc phải asset đang ở trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disabled"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable"
      }), " từ danh sách action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(535149)/* ["default"] */ .A) + "",
        width: "869",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nếu bạn có quyền, popup Enable Asset sẽ hiển thị. Nhấn Confirm để kích hoạt lại asset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(993398)/* ["default"] */ .A) + "",
        width: "365",
        height: "141"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi xác nhận enable asset, popup đóng lại, màn hình Asset List được cập nhật với trạng thái asset mới (Enabled) và hệ thống hiển thị toast message: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Enable asset successfully.\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "*Note: Trường hợp không có quyền Admin, Team Manager, Asset owner sẽ không enable/disable được asset."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-delete-asset",
      children: "6. Delete Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete Asset"
      }), " cho phép người dùng xóa một asset khỏi tổ chức (org) hoặc team trực tiếp chứa asset đó."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Đi tới menu Workspace → Tab All Assets để xem danh sách asset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn Asset cần xóa bằng cách nhấn biểu tượng menu (⋮) ở góc phải asset. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " từ danh sách action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(569614)/* ["default"] */ .A) + "",
        width: "867",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Note"
      }), " : Chỉ Org Admin có quyền xóa asset"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhập chính xác từ khóa delete vào ô xác nhận. Nhấn Confirm để tiến hành xóa asset."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(943780)/* ["default"] */ .A) + "",
        width: "362",
        height: "229"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi xác nhận thành công, popup sẽ đóng lại, asset sẽ bị xóa khỏi org/team hiện tại và hiển thị toast message: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "\"Deleted asset successfully.\""
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-workspace",
        children: " Previous Workspace Management - Quản lý Asset và Issue "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./workspace-crasset",
        children: " Next Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image) "
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

/***/ 532978
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/04b8efd837e4-a3-353e8302629c053f269e45fe506d668e.jpg");

/***/ },

/***/ 881222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c6ab90e88b1-23-357cc294cc302fcd8c0ae19867372304.png");

/***/ },

/***/ 993398
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAJQAlAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACNAW0DAREAAhEBAxEB/8QAHQABAAAHAQEAAAAAAAAAAAAAAAEEBQYHCAkDAv/EAFkQAAAFAgIFBwcEDAkKBwAAAAABAgMEBQYHEQgSGCGVEzFTVpTS0xQWFyJBUVQVN3SzGSMyM1VYYXaRkrTVJDQ1QlJkcYHRCSY2Q0VydbGytiVGYmVmc+H/xAAcAQEAAQUBAQAAAAAAAAAAAAAAAQIDBQYIBAf/xABGEQEAAQMBBAQGDggGAwAAAAAAAQIDEQQFBhJRFiExQRdSU5HR0gcTFTZUcYGSk5ShotPhIjJCYXKDs7QUNUNzwcJiY3T/2gAMAwEAAhEDEQA/ANm9HPR0w4xAw3j3fd8SbOlzZUhCEomOMIaQ04bZERNmWZmaTMzM/aXu3hlDZCwL6tzuLyu+AgeiBgWf/lufxeV3wDY/wK6tTuLyu+Ahsf4E9Wp/F5XfANj/AAJ6tT+Lyu+AbH+BPVqfxeV3wDY/wJ6tT+Lyu+AbH+BPVqfxeV3wDY/wJ6tT+Lyu+AbH+BPVqfxeV3wDY/wJ6tT+Lyu+AbH+BPVqfxeV3wDY/wACerU/i8rvgGx/gT1an8Xld8A2P8CerU/i8rvgGx/gT1an8Xld8A2P8CerU/i8rvgGx/gT1an8Xld8A2P8CerU/i8rvgGx/gT1an8Xld8A2P8AAnq1P4vK74Bsf4E9Wp/F5XfANj/Anq1P4vK74Bsf4E9Wp/F5XfANj/Anq1P4vK74Bsf4E9Wp/F5XfANj/Anq1P4vK74Bsf4E9Wp/F5XfANj/AAJ6tT+Lyu+AbH+BPVqfxeV3wDY/wJ6tT+Lyu+AbH+BPVqfxeV3wDY/wJ6tT+Lyu+AbH+BPVqfxeV3wDY/wJ6tT+Lyu+AbH+BPVqfxeV3wDY/wACerU/i8rvgGx/gT1an8Xld8A2P8CerU/i8rvgGx/gT1an8Xld8A2P8CerU/i8rvgI7IGBXVufxeV3wAtEHAsua25/F5XfAR2Q8DC5rbn8Xld8BqjpD4dULDDEp227cW+VPdgsTmkPua6mtc1pNGse9REaDMjPfvy35ZgNrND5WtgTRz/rc/8AanAGagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABodpoqL00Nln/ALCh/WvgNg9DdWtgLRj/AK5UP2pwBm4BAAARAAAAAQzARAAAAAAEMwEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaDabDmrja2Wf+wYf1r4DYjQyPPAKin/XKj+1uAM4gNftMqXXmLOsuBb6LgkO1W96ZAfhUKrnTJk5laHtZhEglt8nrapbzWkt3OAt2n3XjFZ8+y8IMOrVZt+oXFT6zV5XpCrMmvSYRRnWSSRvMSVG6lZO5knlfVL+zVMLZu/TPvaFhlQb4tuFbi6v8guVyvUEqNU6itCG5C2TUUhgybhsrNpw0uP6x/wDpMiMwErTsX8V7EuDF/E2jMW7OsukXdTHqpT6i5JVUjZkxISVJiLSrkmtTlSURKQolnrF6uZGAlmdIC/8AD2p12zbFpC6vW7kxFup1t+XTJ1WRDhxCYPVTFiqJ1eZuJIslElBZmefMAyhiVi/iKvRZhX65Rptg3PXXqdS5yZLJodohyZqIz0gkulmnVSo1oNZbtZJnzAPe6aEWjLbhVfD6q3Ncdw3dV6dbkRF3XNNqEFMuQ9qlJdS4o+TIi1jUTRJ1siSRFmAtuo6RGOVNuNrCT5HsZ6+EXZGt56oE3MTSlx5NOcmNSEtcobqVp5NSVNms88tyizzILJu66MVscrrw6sO6nrYjx4l51+hV2LFOoMw6nIp0c1k9k28lxLZoVmltSjycIjM1JLIBcmC+L+L1yM4f4fYfwraiQ5VrPXFUptwPz6i+2y3VHIxstqN3XcUpJblOLPVy/nERJAfNr6QOlDeq8Pzo8DC+E3iW1VFU3ymLUHDpxQTM1Lf1XS5Y3ElkSE6mqeWajIBKXXpmX1BwxoV62/FtpddRRZNYrtCTRqnUVE2xJcYNaXmDJENlZsuGlx81f7pkRmA8LxxcxhqEDGqrVOqUl616CigLgU+KqXDmRyltRnUEiUy4lSfvp8oZfdGW7VSeRhesrSMxQZqU29mKHa/o6pt8N2O7FX5QdacWclEZUtK9bkiInXCMmTQZmgjPXIzIgHhh5pD4z1yq2PXLrotmItW+LjqVsx40BEpNQjORjkkiStxazaUlXkxkbZJIy1iMlHzEGz6TzSRgPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYgxolybDqtMxEtWqPKuKS41Sk2+aluIr7Rqz5FDZZmh1Galk6ksklmSsyMBM4HqO6mZ2JlauBdQuCpqVBmQkmttmipbWZ+QpZUeaVoPetai1lmeZbsswysAANANN1erje2X/ALBC+tfAbG6GG/ACi/TKj+1uAM5ALUxGwvsrFejR6BfVJcnw4kxuoR0ty3oy2pDZGSHEuMqSsjLWPmP2gJG18FcOrOm0qp0OjSSmUViZFgyJVRkynWmpSkLfRrPOKNRKU2g95nlluyAWrVNEXAGsRY9PmWQ4mEzAOmORWKpLYalReVW6lp9LbpE8lLji1J189U1bt24BNTdFjAyoXT54yrK16i5MjT5BfKEryeU/HSlLC3mOU5J3kyQjV1knkZZ+8BO3Bo54R3LDdi1G2nW3HK3IuNMqJPkRpTNQfIieebebWlaNdJESkkZJMvYAuZGG9l+YZ4ZyqI3OtpcNUByDOcXKJ1hWeaVrdUpa88zPMzM89+YC0IejHg5EoNVtpdv1CbTqu0wy8zPrc6XySGV67JMqddUbBtqIjSps0qIyLfuAVC29H/Cq1UU46Zbji5NMq66+1MlTn5MpyoKZNk5DrzizW6rklGgtczIi5iLIBUIODeHFOrka5IdtNt1GJVp9cZfJ90zTOmNk3JdyNWRmtBEWWWRewiALRwcw5sSZCn2rbbcCRT6UuiRlpfdWaIS3zfU16yjIyN1RqzPfvyzy3AI0LB3Dq2vNcqLbjcYrMRLboeT7qvJEySMnyLNR62tn/Ozy9mQC0aroj4B1mMxAmWS4URqE5TnI7FUlsNyoq3lvclIS26XLJS64taSXnqmrcAqdZ0bcHq/VJ1VqdsPLcqlPjUycyioyW2JTMfUJk3WkOEha0E2lKVmWsRFlmA9pGjvhJJvwsRnrXM6v5ciqKQUx8oa56EklEtUUl8ip8iIiJw0a24j5yzAVSn4NYcUqDb9Ng2221Htapv1iko5d0/Jpjxum46RmrNRny7u5WZetzbiAXoRZFkAiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIdnW8q7PPdyATlYTDKC3IcWpfIs6xqNLaTPJGsZ+saSI1ZFnzAEKzbep1zzrwgwCYqlTjtx5jra1JS+lBmaFLQR6qllnlrmWtluzyAVsAAc/dOA8scG/zfhfWyAGx+hd8wFF+mVH9rcAZzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHPrTj+fFv834X1sgBsloXfMBRfptR/a3AGcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMy94BmXvAMy94BmXvAMy94BmXvAMy94BmXvAMy94BmXvAMy94BmXvAMy94BmXvAMy94BmXvAMy94BmXvAMy94CIAAAOfWnH8+Tf5vwvrZADZLQu+YCi/Taj+1uAM5gKNdtzRLQt+bcEyNIkoiII0x45Ebr7ijJKGkEZkRqUoySRGZbzASTeItpuHRmiqR+UV6MmXBjoZccccaM0kazJCT1UpNaSUo8iTnvMi3gJqh3pbtxuyGaPNW8uOgnTJUd1vlGjMyJ1rXSXKtmaTIlo1kmZZEYCWexGsxiFHqC66ybEuH5cwaULUpxnXSgjJJJNRma1pSSctY1HkRGZGA96bfFsVY4iYVUSpyb5RyTSmnEOEpjLlkrQpJKbUjWTmlZErfzAIyr2tuJQoVyLnqcg1Lk/I1MR3XnJJrLWQTbTaTcWZkRnkSTPIjPmIwEDvi2UsyH3KkTaYiYqpBOMuIU15QZEzrJNJKI1GZbssy9uQCVLEqzltzXWKm6+iBIOG6bEOQ7rSSWpBsNkhs+VdJSFEaEayiyzMiLeAqCLtt92BTqm3UmzjVZ9MaI5qqIluqzyQZZZpVmlRZKyyMsjyPcApsvE+x4TqWpFdRvcdbWpDDq0Ncm7yS1uqSg0tIJwjTyizJBmRkRnkYCold1um4TRVNvWOpHSCLVV/GySaja5ufVIzz5vygPKXfNrQJiafMrDLMhdSapCW1kolKmON8ohot3OpG8j5vygPIsQbWNUDVnPKaqTnIx5CYb5xzXyhtElTxI5NBmtJpIlqLWPmzzIBTJWMViMU+o1CPU3pSKbEkzFJZhvnyyY5ml5LSjQSXFIUWSiSZmnnVkW8BN1jEeh0S3qZcsuNUziVWTHisoRAfU8SnlZJNTWprkRb+dOZ7sszMswm4192tLrnm4xU852upokmw6lCnUp11NE4aSbN1Kd5tkrXIiPMiyMB6TL0tyBWmrflTzTMdUhGRMOKbQtefJoW6STbbWvL1UqURq9hGAlKLiTZ1xcp8i1VUom4qpqTTFeInmEnqqW0ZoIniJXqnyetkZkR7zyAUufi/bUOZSmkNzHWKjIlRHf4FJTJjvMtJc5M4ptcsajSojy1S9X1t5AJprE633JswjdSunMQYMyPMY13zlHKW6lDbbSEmtSs2txJI1GZmWRZAJLEHEA6Zh8q67WmtGt15tphTrCj9blNVaFIVkpKiyWRkoiMjIyMs9wmOuSWHPT5iMXNMp3Yi7wr4YU5PT5iN8ZTuxF3g4YMnp8xG+Mp3Yi7wcMGT0+YjfGU7sRd4OGDJ6fMRvjKd2Iu8HDBk9PmI3xlO7EXeDhgyenzEb4yndiLvBwwZPT5iN8ZTuxF3g4YMnp8xG+Mp3Yi7wcMGT0+YjfGU7sRd4OGDJ6fMRvjKd2Iu8HDBk9PmI3xlO7EXeDhgyenzEb4yndiLvBwwZPT5iN8ZTuxF3g4YMnp8xG+Mp3Yi7wcMGT0+YjfGU7sRd4OGDJ6fMRvjKd2Iu8HDBk9PmI3xlO7EXeDhgyu/CzGW4Lhu5m3rlNt5NQaWmMcaKSdR1BGszWeeeqaSMs8siPLPnFNUYTEs4lzClKIAA59acfz5N/m/C+tkANkdCxWto/0U9VSf4bUdyiyP+NuAM6ALYvOzU3m7So02oyI9Pp8vy55qK84w886hJkzk62pKkElStc8uc0pLmzzCh2thUVuVE9WsLfpjUGdTorCyWp9piS+h7VU8tSjWaVEsiM95kpOZ+rvBhphk1h6bxKhURxTUVuExMhw3G5bzKN5cqalqIzPIjMkZEaszyLMiIKHbuG82pRqzW2jkUp16sMzaCxUI2ZxY8d43ktuNkZKJC33H1auZKJCkcxkAqZYbXQxMj3FFuCmfLbkuZImm7CWcU0yWmmzS0klkojQllvIzM9b1s+csgqEqwJhYb0myGXKVPkUxiMzy85h1LZqaTlyqCaWlbS895GlWZc2YCjyMKbqWhcRN5RpDNQYpaalImQ1uSXXYThK1kKJZFk4RZGaiMy58zMBN1vCb5VtWNRFTIT8iDW5VbY8pjrOO4p115fJuISolGRJfMtYlEeskj5syAfdyWy5SMKjtakUNJVEkkUBqixjS1Hn8obrTxEtR6iEu5LUpR/0s+fIBLScJ6oxTjpNDrkSNHqVFaolXU/FU6taEm6anmTJRETijfdz1iMs1EfsyMJhGG1bZuFp1ivQk0VivFX0MKiLOSbnIG0bJua+rq7yUStXP2H7wHxeGEb1z3FUq9GrpQ1SaYTUVHIGvyepIMuSm56xZ6qEpTq7t2tv3gKZLwUqD8ulIRX4i4NMbphtk/FcU6y5EcStfI5OEhJPGkzUZpNWZ857sgqcjCR+TQafQ111CCiR6zHW4mMfr+XE4RKIjVuNGvvz58vZmArFZta4axaVNpztTp7VZpsmJMQ8mO4cVbsdwlERoNWvqmRZH62ZZgJCFh5V2axHKTWYi6LErD1faZRHUUk5bpOGbZuGrV5IlOrUXq6x+qRnz5h4VLCdiXiC7ePk1FmMzX40l9E+K44+w6wgkoUwpKySX3KVFrJPVURmR+wg8nsKKqVvUmkQboKLIpdBk0dMhtlaTUt1xheuWSyNJZMmkyI9bJZ5KIyASNIwjuS3pTNaotaoceezUZFQKMVPdOJ9uhtRzbL7Zr5FyRr1s8zM8siIB5ysCiepaYaqzGkusNwHWykxFGy5JYdkuuG4lKyPk1nLURJSZGnVTvPIB7Xzab9Hwbdt6l0aIl9EhlxUekRXCaNapBLWpKDNS9+ZmozMzM8zE09pLA/mpdPVisdge7ouZhQeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYeal09WKx2B7uhmOYylo+USr066Kk/UqPOiIOASULkRVtkZ8qnMiNRFvy9gpqTDPwoVIgADnxpyOEjHJsuTcV/m/C+5TmX32QA2U0LvmAov02o/tbgDOYAAAACHNzAIgAAAAIZEfOQCIAAAAAAAAAAAAAAAIZAGQBkAZAGQBkAZAGQBkAZAGQBkAZAGQBkAZAGQBkAAIgAAA59acfz5N/m/C+tkANktC4ssAKL9MqP7W4AzmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIKPIs8swGOLq0iMH7JuGXatz3i3DqsEm1SIxQ5LqmicQS0Zm22pO9KiPnHhvbS0ti5Nq5XiqO2MT/wAQ2rZu5O3tr6WnW6PT8VurOJ4qIzicT21RPVPV2KVtYYBdfS4XN8EW/dfR+P8AZPoe7wcbzfBvv2/XNrDALr6XC5vgh7r6Px/sn0Hg43m+Dfft+ubWGAXX0uFzfBD3X0fj/ZPoPBxvN8G+/b9c2sMAuvpcLm+CHuvo/H+yfQeDjeb4N9+365tYYBdfS4XN8EPdfR+P9k+g8HG83wb79v1zawwC6+lwub4Ie6+j8f7J9B4ON5vg337frm1hgF19Lhc3wQ919H4/2T6DwcbzfBvv2/XNrDALr6XC5vgh7r6Px/sn0Hg43m+Dfft+uqlraROD16XDDtW2rxbl1WocoUaMcOS0bpoQpxeRuNpTuSlR8/MQuWtpaW/XFuiv9Kezqn0PDtLcnb2ydLXrdXp+G3RjM8VE4zMRHZVM9czEMkEeZbyyHuaq5+acRGeOLeRZ/wCb8L62QA2P0LEJRo/URKE5EU2o7i+luAM6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+VHqln/eApMU6xUYzU9uossIkIS6hso2tqpUWZFmaizPIyz3APXyOt/hpvsZd4A8jrf4ab7GXeAPI63+Gm+xl3gDyOt/hpvsZd4A8jrf4ab7GXeACiVsj/llo8j9sMu8AmKdKcmRCdeSknCU42vVz1dZCzSeWe/LNIDWO/sVKhgxUdITEOk09mbNpsq224zL5qJo3XoTLSVLy3mkjXmZEZZ5ZZkPXufsijbm8FWguVTTTVMZx24iiZxH75w2TffXVbM3P2XqqIzMU3vtvzH/AC1jP/KQaQ2e6LZ3CXvHH3ePYw2JjtufOj1XwXprtCP2afN+Z9kg0h/hbO4S944nwYbE53PnR6qOmu0PFp835n2SDSH+Fs7hL3jiPBhsPnc+dHqnTXaHi0+b8z7JBpD/AAtncJe8cT4MNic7nzo9U6a7Q8WnzfmfZINIf4WzuEveOHgw2JzufOj1TprtDxafN+Z9kg0h/hbO4S944jwYbD53PnR6p012h4tPm/M+yQaQ/wALZ3CXvHDwYbD53PnR6p012h4tPm/N6Mf5STSBZeQ9JptnvsoMlONlTXkGtJbzLW5c8sy9uRiKvYv2LVExTVcif4o9VVTvrr+KM00+afS3NuGvFdWIOANyJYUwirP1GcTRq1jbJ2huuEnP25a2WY502vp50e1Lenzngrrp80TDoTde7/iN2dq3sY4rVifPeoZxSWRD0w1Bz405Wm145tmtsjPzfhc//wBsgSNldC75gKL9NqP7W4AzmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5X9wr+wwEjb/wDIVO+iM/8AQQCn3ve1GsKhnXKyUp1Cn2osePDZN6RKkOK1W2WkF90tR7iLcXOZmREAorGLluU+lt1K/wBl2xuXk+Sx2bifjx1SFZEebZocUlRZGWe/ceeYCrKxJw/RcTNpLvSiprUhfJtQDnN8utRpJRJJGeZmaTIyL2ke4BLqxYwySVWM7/t/KhGlNTP5RayiKUeRE5v9UzMsiI/buAQpWItDrt3MWxRnETmpNEKuMVCO8hyO6yb5taqTI955lnnzf3gLsLmASFF/iTn0uX9e4EjS/Sm/0Q0kf+J2f9VFGx+xl77Z+X+lLKeyX7xdm/w3f7hz0HUrmOWTrCwLqF4Wqd91+97Ys23XJaqfEnV6StHlkpKc1NtIQlSlEkjLWUZZF+Ua/tLb9Gh1MaOzarvXccU00RHVT2ZmZnETyjvZjQbLq1luq/XXFFuJxxVTiM4ziIxMzPf+5RZmDuJcakruSNZlXn0An+QYrUSE6uDJ+2cmlbTppLWQpWRJVkRHmQ9VvbWgquU6eq7TTdmM8EzHHHVnExntjvhZubM1NNFV2imaqKZnNURPD1dWc47Fz2jot413LeFHtKo2FXLeOsOrbROqlNebjtJQk1LUoyLPcRc3tMyIeDWb27J02luam3epucEZ4aaomZ5Y6++XosbC19y7RaqtTHFOMzExEfH8SbvfRXxNtuuR6LalHql5G/D8sWqmUWW0uOXKrb1XWnkEpBmptX6BZ2fvdoNVZm7qaqbOJiP0q6ZzmmKuqYnE9UxnvejW7v6ixci3YzXMxPZTVmMTw9cTHOOqVuI0d8eHCZU3g7eCikfejKkumS/V1t273bx753m2NEzE6q31f+UPDGxNoTjFmrr/AHT8fJYlQp86lTpFMqcN6JLiuKZfYeQaHGnEnkpKknvIyMt5DMWrtF+iLlqYmmYzEx1xMMfdtV2K5t3ImKo7YnthLL+9r/3Ff8hcjtU0/rQ6yQP5U0Zfokj/ALecHG+8v+e/zbv/AGdX7ne9LaX+zp/61tsOQiGrOfenH8+Tf5vwvrZAkbGaEklEvR4oEhDbqEuyqgokutmhaf4U5uUk96T/ACGKqqeGqac+brjz96mirjpirGPj6meRSqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8r+4V/YYCRt/wDkKnfRGf8AoIBbmKVmVW8aJA8358aJWKJVI1Zpy5SVKjqfZUf2t0k+tqKSpSTMt5ZkZZ5AMb4oYfY44o0ZmBKfoFIZfiTYb8GFWZCGyW6lJNvuPFH13UkRLI2C1Uq1iM1HzAPuJgFX2aVMiuTqSUuVcFDqpSE62ulmExHbcLW1cyXm04afZ6xc2ZgKdJwLxBk2JSrFNdvst2jUo9QpkyFOkRX6oTa3DMn1Jbzjr1XM9dJufbCzyyMBdmFOEVQsS4otaUxDhxE0J+A5EbqL01aZLs1UhSuWdQk1kZK3mZF6xnkWW8BlwuYBIUX+JO/S5f17gSNL9Kb/AEQ0kf8Aidn/AFUUbH7GXvtn5f6Usp7JfvF2b/Dd/uHPT2jqVzHLNdpX/hPc+E1Nwoxck3LSCtupyalSqnQ4rUk3ESEkTrDrbik5HrJI0rI/yGNT12ztpaXaVW09mRRVNdMU1U1zMfqz1VRMeaYbBoNXpK9JOi1mYp4uOKqcT14xMTHV1SyXE0m8J6bTGK9DRdjtaZteNZaaK+038nlFZkEoppqJX3w2yz5Mk/d+3LeMBXuttK7dqs1+1+11XfbpriZ4uLH6nxZ7Jz2dzJUbY0dmxTVRxcVFuq3TT1cNUTPVVVy/fGO3vTtA0u7Bp97XDcM9NxuxalfhXFFSTRKUiCUByOSDI15ErWUn1S3Zb/YLN/czWXNDZ09E0cVNiq3PX+1NcVZ7OzEdvNfjeHT/AONrv/pcM3LVUfFRni7+3r6lp1zSTtKdgZJw8gfLjdakWzAo5vmnVbN1me6+5mvX1tU21pLP2nmQyVndbU0bXp1tfD7XFyqvHfibcUx1c8w8lO27FOjrs/pcU0VUx8c3Jqj5OGevzJ659KO06o3diKa5cLSa0zaTUQjTqEhNONByiPJfqkrVVq5fde3IW9JupqLVdiq5wTwVX6p/mZ4e7u7+Xcov7atXLFy1Gc1WbduP4qaszPb2Y72EcbbzpOIeLV13vQmpDdPrdSdmR0yEEhwkKy+6IjMiPcftG17v6C7szZlnR35zVRTicdnyfuYrbmst7Q19zUWs4nHb29kQsdf3tf8AuK/5GMxHbDF0/rQ6yQP5U0Zfokj/ALecHG+8v+e/zbv/AGdX7ne9LaX+zp/61tsOQiGrOfenH8+Tf5vwvrZAkbCaCtMTRtGy26WmS9J8mkVBvlnlZrcylOZmYu37vt12q5MYzOepbs2/aqIoznDYEWlwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyvM0mRe0jAU+gON/IkFBOIzbjttqIlFuUlJEZf2kZGQCoa7Z/z0/pAQ1m/wCkn9IBrN/0k/pANZv+kn9IBrN/0k/pADcbSWfKJIi/KQCRoaiVTzcSZGh2RIcQouZSVPLUky/IZGR/3hI000oIz8m0dJRMdlbhtz7SdXqJz1UJZjKUo/yERGZn7hsPsaVU0b2/pTjrx8vtU9TLeyTTNW42zYiP2bv9w53mtvpEfrEOp4y5jmmeRro6RH6xBg4auRroL/WI/WIMSnhq5I8onpEfrEGM9pw1cjlE9Ij9Ygx3o4auRro6RH6xBhPDVyQ10dIj9YgxKOGrkgpSTSoiWgzNJlkSi37hPemmmYmJmHWiPHfiVzRqiSmVsvMx5Lbja06qkKK33CMjL2GR5kONN4q6a9txVTOYm5c6/kqdX7oUzRuptOme32mx/WtthCEw1Vz704/nyb/N+F9bIEjZLQv3YAUUj5zmVH9rcAZzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAwEo9SKVJcN6RTIjriudS2UqM/7zIB8fIFD/AAPB7Mj/AAAPkCh/geD2ZH+AB8gUP8DwezI/wAPkCh/geD2ZH+AB8gUP8DwezI/wACoNFSesmjwcy/q6P8AE6aSJGqkiIssiICWEJ1qYyW5iXflw2pZdoXBRrxXT16tVrjsRaSYhpYWhTaYziVEZkfOfN7N+7FxRrNNqrl6xETFWJjNUxMYjHdEt/p1m721di6PQbSvXbddiLkTFNqmumeOuao65uU93bGFJ8w8QPbos4JcUL93DK9IN4o/1J+lr9DD9HtxPL3fq1v8AGPMO/wD8VnBLihfu4OkG8XlJ+lr9B0e3E8vd+rW/xjzDv/8AFZwS4oX7uDpBvF5Sfpa/QdHtxPL3fq1v8Y8w7/8AxWcEuKF+7g6QbxeUn6Wv0HR7cTy936tb/GPMO/8A8VnBLihfu4OkG8XlJ+lr9B0e3E8vd+rW/wAY8w7/APxWcEuKF+7g6QbxeUn6Wv0HR7cTy936tb/GPMO//wAVnBLihfu4OkG8XlJ+lr9B0e3E8vd+rW/xnpHsrEiHIblRNGHBZh9pRLbdbq2qpCi3kZGVOzIy/IKa9vbw10zTVXMxP/tr9CqNgbi0zmnUXc//ADW/xlWat3G27sTrGua87RtSjUu1Jc+U6un196Y86b8J2OlJIXGbIslLIzPW/wD3FRb1d7UW7l2mmmKZmeqqZ7YmOUMvVrd3tmbH1uj2ffu3Ll+mimIrtU0RHDcprmcxcq7ox2drNaCMiyMZaHz9z804yP04tn/8fhfWyAGwmgqxKi6NltxZqDS+zJqLaz1tbWMpbu/P8vOJmczlGMdTYEQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc/dN/M8cG8iM/8AwCFzEZ/618BZuHWktilhJQHLYtaTSnqcl9b7bU+Gb3JLUea9Q0rSZEZ78jz3meXOYCvPaeWPLZnqsWl/fS3fHASytPrH0uZi0OFPeOA+NvzH7obQ4U744CB6fuP5F95tDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sfugtDhTvjgG39j90FocKd8cA2/sf+gtDhTvjgI7fmP/Q2hwp3xwES0/Mfs/vFocKe8cB6N6fGPiudi0eFO+OAno+nZjs7lrs2nv8AdS3fHAYuv2/7pxMuaRdt2zW3qg8hDP2lrk2220F6qEJz3JLM+czPMzMz3gP/2Q==");

/***/ },

/***/ 711322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1c9151c860f7-a7-4420aed90c06f502e2f21a3d7e7221e1.jpg");

/***/ },

/***/ 448255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29caace27a05-a1-74ffa301e32bc3521c9b7e28e8cb1ac7.jpg");

/***/ },

/***/ 30348
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2e85bb934945-a9-f09da5274bf9accdecc554727f33d40a.jpg");

/***/ },

/***/ 107206
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3147a913517b-a5-f9a7134e630fef805c8b9b2d892a2468.jpg");

/***/ },

/***/ 339685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3bb4ae9379e6-a8-2680cb147c85c41de95b2a01277dad1d.jpg");

/***/ },

/***/ 943780
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4175bb2b9248-a18-b04eee9e4d8503a9c8a4610c68dd2088.jpg");

/***/ },

/***/ 920713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/565cbb9b9468-20-8590c5c3c730ac9d88fc20dfff6294bf.png");

/***/ },

/***/ 569614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/62e36a0dea04-a17-c867078610d9bc1b38345baa9fbe8f27.jpg");

/***/ },

/***/ 684177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/67856fbcbc09-a6.1-74e194d90cb4de7af2ff8d700e0abf51.jpg");

/***/ },

/***/ 677798
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/68d75c1d786b-a4-5b55095fb35b5c5a569807a1816f087f.jpg");

/***/ },

/***/ 714020
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/74cfdb07f76c-a2-67332ef280792b1301360b1089810c1d.jpg");

/***/ },

/***/ 698587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8be1bbf46537-a14-1066edfa7a72a955d8122135342a63b0.jpg");

/***/ },

/***/ 709467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f69016c6238-21-ac1540c73cb51875a4165e902473c44a.png");

/***/ },

/***/ 976329
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9384c219613b-a10-cc4af9175cd8af478721a1e7b439d86d.jpg");

/***/ },

/***/ 278065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b5c086ace21c-19-a148ff6a7e84fe6ce45a07a7d2619a32.png");

/***/ },

/***/ 432828
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b7dd8b2b7931-a10.1-83a739b6c9018a05724a6595efcf1ac5.jpg");

/***/ },

/***/ 748019
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/beb19e360dbf-a12-5ada461a9c9f77eb5fb86b67d32362fe.jpg");

/***/ },

/***/ 535149
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c6184f8cc242-a15-9a7e3879014fd4c26cd3fe04bdc7753a.jpg");

/***/ },

/***/ 292733
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cbb7ee44dbc7-a11-a28316399983615ace49e981cc0094f6.png");

/***/ },

/***/ 934117
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f4cba640af12-a6-34104c9475b9b216b63be1aa019080c1.jpg");

/***/ },

/***/ 585867
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f93bcda012cf-a13-7f1ea9b0df85efb5ac8b5f4f0c433a25.jpg");

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