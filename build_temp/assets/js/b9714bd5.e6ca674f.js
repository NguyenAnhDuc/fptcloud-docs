"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[47167],{

/***/ 789313
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_other_terraform_md_b97_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-other-terraform-md-b97.json
const site_docs_cloud_server_other_terraform_md_b97_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/other/terraform","title":"IaC (Terraform)","description":"*","source":"@site/docs/cloud-server/other/terraform.md","sourceDirName":"cloud-server/other","slug":"/cloud-server/other/terraform","permalink":"/cloud-server/other/terraform","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"IaC (Terraform)","title":"IaC (Terraform)","source":"https://fptcloud.com/documents/cloud-server/?doc=terraform","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tôi có thể tùy chỉnh toàn bộ rule trong các security group không?","permalink":"/cloud-server/other/question-2"},"next":{"title":"Cloud Server","permalink":"/cloud-server/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/other/terraform.md


const frontMatter = {
	sidebar_label: 'IaC (Terraform)',
	title: 'IaC (Terraform)',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=terraform',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'IaC (Terraform)';

const assets = {

};



const toc = [{
  "value": "<strong>1. Yêu cầu hệ thống</strong>",
  "id": "1-yêu-cầu-hệ-thống",
  "level": 2
}, {
  "value": "<strong>2. Cài Đặt Terraform</strong>",
  "id": "2-cài-đặt-terraform",
  "level": 2
}, {
  "value": "<strong>3. Kiểm Tra Cài Đặt</strong>",
  "id": "3-kiểm-tra-cài-đặt",
  "level": 2
}, {
  "value": "<strong>4. Cách lấy token sử dụng cho terraform FPTCloud</strong>",
  "id": "4-cách-lấy-token-sử-dụng-cho-terraform-fptcloud",
  "level": 2
}, {
  "value": "<strong>5. Khởi tạo FPT Cloud Provider</strong>",
  "id": "5-khởi-tạo-fpt-cloud-provider",
  "level": 2
}, {
  "value": "<strong>1. Instance</strong>",
  "id": "1-instance",
  "level": 2
}, {
  "value": "<strong>2. Floating IP</strong>",
  "id": "2-floating-ip",
  "level": 2
}, {
  "value": "<strong>3. Security group</strong>",
  "id": "3-security-group",
  "level": 2
}, {
  "value": "<strong>4. Storage disk</strong>",
  "id": "4-storage-disk",
  "level": 2
}, {
  "value": "<strong>5. Database</strong>",
  "id": "5-database",
  "level": 2
}, {
  "value": "<strong>6. Dedicated FKE</strong>",
  "id": "6-dedicated-fke",
  "level": 2
}, {
  "value": "<strong>7. Managed FKE</strong>",
  "id": "7-managed-fke",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "iac-terraform",
        children: "IaC (Terraform)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "overview",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Smart Cloud giới thiệu Terraform như một giải pháp quản lý hạ tầng tiên tiến, giúp người dùng tự động hóa việc triển khai và quản lý cơ sở hạ tầng đám mây một cách hiệu quả. Với Terraform, người dùng có thể định nghĩa hạ tầng dưới dạng mã (Infrastructure as Code), giúp việc triển khai trở nên nhất quán, dễ dàng mở rộng và quản lý trên nhiều nền tảng đám mây khác nhau như AWS, Azure, và Google Cloud. Giải pháp này không chỉ giảm thiểu rủi ro mà còn tăng cường khả năng kiểm soát và tối ưu hóa tài nguyên, từ đó hỗ trợ doanh nghiệp đạt được mục tiêu công nghệ một cách nhanh chóng và bền vững."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "set-up",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Set up"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-yêu-cầu-hệ-thống",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Yêu cầu hệ thống"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ điều hành: Terraform hỗ trợ nhiều hệ điều hành như Linux, macOS, Windows."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phiên bản: Phiên bản mới nhất của Terraform, đảm bảo tương thích với các nhà cung cấp dịch vụ đám mây bạn đang sử dụng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Quyền truy cập internet: Để tải về Terraform và các plugin."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-cài-đặt-terraform",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Cài Đặt Terraform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trên macOS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sử dụng Homebrew:"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "brew tap hashicorp/tap\nbrew install hashicorp/tap/terraform"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trên Ubuntu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl\n\ncurl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n\nsudo apt-add-repository \"deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main\"\n\nsudo apt-get update && sudo apt-get install terraform\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trên Windows:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tải xuống từ Terraform Download Page."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Giải nén file và thêm đường dẫn Terraform vào biến môi trường PATH."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kiểm-tra-cài-đặt",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Kiểm Tra Cài Đặt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "terraform -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cách-lấy-token-sử-dụng-cho-terraform-fptcloud",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Cách lấy token sử dụng cho terraform FPTCloud"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sidebar"
      }), " -> chọn mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Token"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(162505)/* ["default"] */ .A) + "",
        width: "940",
        height: "407"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-khởi-tạo-fpt-cloud-provider",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Khởi tạo FPT Cloud Provider"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra phiên bản và hướng dẫn cài đặt FPT Cloud Provider trên trang Terraform"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(933010)/* ["default"] */ .A) + "",
        width: "939",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sử dụng lệnh “terraform init” để cài đặt FPT Cloud Provider:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(786932)/* ["default"] */ .A) + "",
        width: "812",
        height: "939"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script kết nối FPT Cloud:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(469286)/* ["default"] */ .A) + "",
        width: "939",
        height: "631"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo access token để kết nối FPT Cloud:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(111094)/* ["default"] */ .A) + "",
        width: "939",
        height: "511"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sử dụng accrss token để kết nối đến FPT Cloud:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(397489)/* ["default"] */ .A) + "",
        width: "939",
        height: "780"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "document",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Terraform Provider Docs:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://registry.terraform.io/providers/fpt-corp/fptcloud/latest/docs/",
              children: "https://registry.terraform.io/providers/fpt-corp/fptcloud/latest/docs/"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FPT Cloud Terraform Source:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/fpt-corp/terraform-provider-fptcloud",
              children: "https://github.com/fpt-corp/terraform-provider-fptcloud"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "các-lệnh-cơ-bản",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các lệnh cơ bản"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-instance",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Instance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo instance:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(429604)/* ["default"] */ .A) + "",
        width: "940",
        height: "255"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả sau khi chạy script tạo instance thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(1102)/* ["default"] */ .A) + "",
        width: "939",
        height: "877"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hủy instance đã tạo:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(554131)/* ["default"] */ .A) + "",
        width: "939",
        height: "619"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-floating-ip",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Floating IP"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo floating IP:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(148133)/* ["default"] */ .A) + "",
        width: "722",
        height: "364"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả sau khi chạy script tạo floating IP thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(770263)/* ["default"] */ .A) + "",
        width: "939",
        height: "773"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hủy floating IP đã tạo:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(422909)/* ["default"] */ .A) + "",
        width: "939",
        height: "856"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Security group"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo security group:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(735041)/* ["default"] */ .A) + "",
        width: "852",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả sau khi chạy script tạo security group thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(187472)/* ["default"] */ .A) + "",
        width: "939",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hủy security group đã tạo:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(329783)/* ["default"] */ .A) + "",
        width: "939",
        height: "808"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-storage-disk",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Storage disk"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo storage:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(797626)/* ["default"] */ .A) + "",
        width: "939",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả sau khi chạy script tạo storage thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(91023)/* ["default"] */ .A) + "",
        width: "939",
        height: "833"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hủy storage đã tạo:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(340466)/* ["default"] */ .A) + "",
        width: "939",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-database",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Database"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo database:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(461811)/* ["default"] */ .A) + "",
        width: "939",
        height: "864"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả khi tạo thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(674400)/* ["default"] */ .A) + "",
        width: "708",
        height: "408"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script quản lý trạng thái chạy/dừng của database:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(814568)/* ["default"] */ .A) + "",
        width: "945",
        height: "157"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-dedicated-fke",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Dedicated FKE"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo cụm Dedicated FKE:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(6809)/* ["default"] */ .A) + "",
        width: "749",
        height: "737"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả khi tạo thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(224060)/* ["default"] */ .A) + "",
        width: "939",
        height: "197"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-managed-fke",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Managed FKE"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script tạo cụm Managed FKE:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(357851)/* ["default"] */ .A) + "",
        width: "698",
        height: "939"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kết quả khi tạo thành công:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(35344)/* ["default"] */ .A) + "",
        width: "939",
        height: "267"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./security-group-priority-rule",
        children: " Previous Manage Priority Rule of Security Group "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./instance-group",
        children: " Next Quản lý Instance Group với chính sách Affinity & Anti-Affinity "
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

/***/ 357851
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1b9ead1e7d15-image-1728875363303-1dab8141f450bf1154727fe016fd79fa.png");

/***/ },

/***/ 111094
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/20c74723e393-image-1723437556421-332f481e13e1cb6ad719371793b0d7f7.png");

/***/ },

/***/ 1102
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2eb8bf11e44a-image-1723437688217-261846151821bb6c317058bc055bc574.png");

/***/ },

/***/ 6809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2f0d39fe000e-image-1728875321308-6040b1eae9cfdff3f3ae6b5876859bd0.png");

/***/ },

/***/ 397489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/348f066d3f3e-image-1723437566706-2a0b72640dae524656776f124fa7668b.png");

/***/ },

/***/ 422909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/363beff3040b-image-1723437746142-074e9bdf54c70b7ee29abd12fb121920.png");

/***/ },

/***/ 933010
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3c8ce6d5a5b5-image-1723437534957-10acc9de70faa6ec5306f5a36d818c52.png");

/***/ },

/***/ 224060
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4c7925af681b-image-1728875338930-eae4f00691b1eeb14c1852eac5ade2e0.png");

/***/ },

/***/ 814568
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5698c24618ee-image-1728455276595-35c0fba4491d36c96480c423404cd62d.png");

/***/ },

/***/ 148133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6c0be5da1445-image-1723437714387-633791a0840da6fb99d726c344db3534.png");

/***/ },

/***/ 461811
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/737c6b5f53d5-image-1728455233157-6ae39e7a0e5f6c264a2cbd54f6ae5324.png");

/***/ },

/***/ 91023
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/769b79b9e844-image-1723437818502-ef4e29985f12eeca041f265b2a9b1e43.png");

/***/ },

/***/ 187472
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7e2c545ba184-image-1723437770927-00df885e5347ad25642806bf8e841eb0.png");

/***/ },

/***/ 797626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91108bc0971f-image-1723437806000-14a11f1b3f92e635a20350e053474f14.png");

/***/ },

/***/ 162505
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/91f0c47610b5-image-1723437528179-3c7023ff6d036f8fa40a370e1b6aa8ab.png");

/***/ },

/***/ 469286
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a137448d7c3c-image-1723437548914-abbc3026949429b066a487b244b00b35.png");

/***/ },

/***/ 735041
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a8b23b4a57cb-image-1723437759616-5329514da35b09582c89c0c3e8eef4f0.png");

/***/ },

/***/ 674400
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab53f3750881-image-1728455257294-7a25f2c99f7eb16d328e90ccabb3ecc1.png");

/***/ },

/***/ 329783
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b15cbbf671ac-image-1723437790818-abdf27e02fd4d7d76042f21eb579ecf9.png");

/***/ },

/***/ 554131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b35fddad89ed-image-1723437700286-9ad6a8c322fd4f1b712a046e7c3b543e.png");

/***/ },

/***/ 429604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b7530cf55451-image-1723437678446-74fdb846a3d7b4b11aa02ff945fff056.png");

/***/ },

/***/ 35344
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c368341c8943-image-1728875375510-d6271cd5facfe1125b32346a1ef58898.png");

/***/ },

/***/ 340466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dc6858eeb935-image-1723437832407-876bbe516e0282c5b7e5c9b7e8279252.png");

/***/ },

/***/ 786932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e0e540d012ce-image-1723437542169-93d074bc340311097af10616f7f4fb6f.png");

/***/ },

/***/ 770263
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f78e85aefbcb-image-1723437730547-43209df0bc7cd97a9b6b4b6956bc87b2.png");

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