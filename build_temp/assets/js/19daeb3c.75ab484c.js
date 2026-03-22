"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[61511],{

/***/ 826472
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_appsec_initial_workspace_crasset_md_19d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-appsec-initial-workspace-crasset-md-19d.json
const site_docs_fpt_appsec_initial_workspace_crasset_md_19d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-appsec/initial/workspace-crasset","title":"2. FPT AppSec","description":"Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image)","source":"@site/docs/fpt-appsec/initial/workspace-crasset.md","sourceDirName":"fpt-appsec/initial","slug":"/fpt-appsec/initial/workspace-crasset","permalink":"/fpt-appsec/initial/workspace-crasset","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Workspace crasset","title":"2. FPT AppSec","source":"https://fptcloud.com/documents/fpt-appsec/?doc=workspace-crasset","parent":"https://fptcloud.com/documents/fpt-appsec","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Initial setup","permalink":"/fpt-appsec/initial/initial-setup"},"next":{"title":"Workspace scmasset","permalink":"/fpt-appsec/initial/workspace-scmasset"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-appsec/initial/workspace-crasset.md


const frontMatter = {
	sidebar_label: 'Workspace crasset',
	title: '2. FPT AppSec',
	source: 'https://fptcloud.com/documents/fpt-appsec/?doc=workspace-crasset',
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
  "value": "3. Xem thông tin các Issues",
  "id": "3-xem-thông-tin-các-issues",
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
  "value": "3.3.2.",
  "id": "332",
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
  "value": "5. Disable/Enable Asset",
  "id": "5-disableenable-asset",
  "level": 2
}, {
  "value": "6. Delete Asset",
  "id": "6-delete-asset",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      children: "Hướng dẫn thực hiện các thao tác cơ bản với Container Registry asset (image)"
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
      }), " : Chọn FPT Container Registry/Harbor"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(920713)/* ["default"] */ .A) + "",
        width: "1190",
        height: "734"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["_Lưu ý: Pop-up add asset chỉ hiện lên khi loại asset source (FPT Container Registry/Harbor) được tích hợp tại màn", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      }), ". Trường hợp ấn vào 1 souce chưa được tích hợp, màn hình sẽ chuyển sang tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration"
      }), " của loại source đó _."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project"
      }), " chứa image cần scan"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "anhfsec",
        src: (__webpack_require__(709467)/* ["default"] */ .A) + "",
        width: "1204",
        height: "605"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lúc này, màn hình sẽ hiển thị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Image"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Image Tags"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Chọn Image bạn muốn và ấn ", (0,jsx_runtime.jsx)(_components.strong, {
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
      }), " : Tại màn hình Asset Management > All , chọn 1 asset bất kỳ bằng cách click vào textlink CR Asset Name"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại màn hình Asset Overview, người dùng có thể xem các thông tin tổng quan:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin chung (General Information):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Asset Name, Asset Access (Public/Private), Status (Active/Inactive)"
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
          children: "Meta data (Issue Information):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Image ID, Manifest Digest, Image Tag, Image VPC, Base Image, Platform, Target OS, Image Size"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin scan gần nhất (Issue Overview):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Scan Type (logo + tên scan, click để xem chi tiết theo từng loại)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Scan Time, Total Open Issues, No. Severity"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-xem-thông-tin-các-issues",
      children: "3. Xem thông tin các Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-truy-cập-màn-hình-issue-list",
      children: "3.1. Truy cập màn hình Issue List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn đối với ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset",
        children: "SCM assets"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-xem-thông-tin-issue",
      children: "3.2. Xem thông tin Issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tại màn hình Issue List, mỗi issue được hiển thị dưới dạng Issue Info Card với các thông tin:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Severity: Critical/High/Medium/Low"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Package Name hoặc Secret Name"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Issue Title (nếu có “:”, lấy phần sau dấu “:”)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Vul References: CWE/CVE/CVSS"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Score: 0–10 (làm tròn đến 1 chữ số thập phân)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Issue Status: Trạng thái hiện tại của issue theo lần scan gần nhất."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Exploit Status: Cho biết issue đã bị khai thác hay chưa."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Image Layer: Dòng lệnh hoặc layer trong Dockerfile/Image gây ra issue."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Fixed in Version: Phiên bản package đã khắc phục issue. Nếu chưa có phiên bản vá → hiển thị Not available."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-lọc-tìm-kiếm-và-sắp-xếp-issue",
      children: "3.3. Lọc, Tìm kiếm và Sắp xếp Issue"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "331-filter",
      children: "3.3.1. Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cho phép lọc theo: Severity, Status, Priority Score (0–10), Issue Type, \"Fixed in\" available, Image Layer, Exploit Maturity, Exploit Status. Người dùng có thể chọn nhiều điều kiện cùng lúc"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "332",
      children: "3.3.2."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhập từ khóa tìm theo: Issue ID, Issue Title"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhấn Enter để tìm kiếm, Clear để xóa và reset danh sách"
        }), "\n"]
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-xem-thông-tin-chi-tiết-của-một-issue",
      children: "3.4. Xem thông tin chi tiết của một issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Chọn Details tại một issue card bất kỳ (thuộc Image ) để mở popup Issue Detail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Tại màn hình Issue Detail, người dùng có thể xem thông tin chi tiết của issue:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin chung (Issue Detail):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Severity: Mức độ nghiêm trọng của issue (Critical, High, Medium, Low)."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Package Name: Tên package gây ra issue (đối với Vulnerability issue)."
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
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thông tin chi tiết:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Issue Description – Mô tả chi tiết về issue."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Issue Remediation – Hướng dẫn fix issue, bao gồm:"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Current package – Phiên bản package đang được sử dụng."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Fixed in version – Phiên bản đã được vá (nếu có, nếu không hiển thị “Not available”)."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Security Information – Điểm CVSS, vector tấn công"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "References – Danh sách link tham chiếu liên quan, click để mở."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Manifest Layer – Hiển thị toàn bộ layer trong Dockerfile, highlight vị trí chứa lỗi và tự động cuộn dòng lỗi vào giữa màn hình."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Code Block (nếu là source code) – Hiển thị file code, highlight dòng chứa lỗi và từ khóa gây lỗi."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Activity: Lịch sử thay đổi trạng thái issue"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-rescan-asset",
      children: "4. Rescan asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn đối với ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset",
        children: "SCM assets"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-disableenable-asset",
      children: "5. Disable/Enable Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn đối với ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset",
        children: "SCM assets"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-delete-asset",
      children: "6. Delete Asset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tương tự hướng dẫn đối với ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/fpt-appsec/?doc=workspace-scmasset",
        children: "SCM assets"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./workspace-scmasset",
        children: " Previous Hướng dẫn thực hiện các thao tác cơ bản với Source Code anagement asset (repo/project) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./guide-change-status-issue-list",
        children: " Next Hướng dẫn thay đổi trạng thái issue tại màn Issue list  "
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

/***/ 881222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c6ab90e88b1-23-357cc294cc302fcd8c0ae19867372304.png");

/***/ },

/***/ 920713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/565cbb9b9468-20-8590c5c3c730ac9d88fc20dfff6294bf.png");

/***/ },

/***/ 709467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f69016c6238-21-ac1540c73cb51875a4165e902473c44a.png");

/***/ },

/***/ 278065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b5c086ace21c-19-a148ff6a7e84fe6ce45a07a7d2619a32.png");

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