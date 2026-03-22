"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[37647],{

/***/ 829815
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_api_management_huong_dan_nhanh_quick_starts_md_0b9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-api-management-huong-dan-nhanh-quick-starts-md-0b9.json
const site_docs_fpt_api_management_huong_dan_nhanh_quick_starts_md_0b9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-api-management/huong-dan-nhanh-quick-starts","title":"2. FPT API Management","description":"Hướng dẫn nhanh (Quick Starts)","source":"@site/docs/fpt-api-management/huong-dan-nhanh-quick-starts.md","sourceDirName":"fpt-api-management","slug":"/fpt-api-management/huong-dan-nhanh-quick-starts","permalink":"/fpt-api-management/huong-dan-nhanh-quick-starts","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Huong dan nhanh quick starts","title":"2. FPT API Management","source":"https://fptcloud.com/documents/fpt-api-management/?doc=huong-dan-nhanh-quick-starts","parent":"https://fptcloud.com/documents/fpt-api-management","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Dang ky dich vu api management tren fpt portal","permalink":"/fpt-api-management/dang-ky-dich-vu-api-management-tren-fpt-portal"},"next":{"title":"Huong dan su dung cho api consumer","permalink":"/fpt-api-management/huong-dan-su-dung-cho-api-consumer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-api-management/huong-dan-nhanh-quick-starts.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Huong dan nhanh quick starts',
	title: '2. FPT API Management',
	source: 'https://fptcloud.com/documents/fpt-api-management/?doc=huong-dan-nhanh-quick-starts',
	parent: 'https://fptcloud.com/documents/fpt-api-management',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT API Management';

const assets = {

};



const toc = [{
  "value": "1. Đăng ký dịch vụ API MANAGEMENT",
  "id": "1-đăng-ký-dịch-vụ-api-management",
  "level": 3
}, {
  "value": "2. Khai báo Rest API",
  "id": "2-khai-báo-rest-api",
  "level": 3
}, {
  "value": "3. Khai báo Product",
  "id": "3-khai-báo-product",
  "level": 3
}, {
  "value": "4. Gắn APIs vào Product",
  "id": "4-gắn-apis-vào-product",
  "level": 3
}, {
  "value": "5. Tạo Site mới",
  "id": "5-tạo-site-mới",
  "level": 3
}, {
  "value": "6. Staging product",
  "id": "6-staging-product",
  "level": 3
}, {
  "value": "7. Publish product",
  "id": "7-publish-product",
  "level": 3
}, {
  "value": "8. Tạo Consumers mới",
  "id": "8-tạo-consumers-mới",
  "level": 3
}, {
  "value": "9. Subscribe product",
  "id": "9-subscribe-product",
  "level": 3
}, {
  "value": "10. Nhận thông tin từ API Provider",
  "id": "10-nhận-thông-tin-từ-api-provider",
  "level": 3
}, {
  "value": "11. Sử dụng Postman",
  "id": "11-sử-dụng-postman",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
    h3: "h3",
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
        id: "2-fpt-api-management",
        children: "2. FPT API Management"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hướng dẫn nhanh (Quick Starts)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-đăng-ký-dịch-vụ-api-management",
      children: "1. Đăng ký dịch vụ API MANAGEMENT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối tượng sử dụng:"
      }), " API Provider."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để đăng ký mới tài khoản ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Provider"
      }), " , bạn cần được cấp quota dịch vụ. Hãy liên hệ với chúng tôi nếu có nhu cầu sử dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên menu của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Api Management"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 1",
        src: (__webpack_require__(999683)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Username"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pricing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(356792)/* ["default"] */ .A) + "",
        width: "1664",
        height: "874"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể tham khảo cấu hình cụ thể của từng plan theo bảng dưới đây:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["|  |  |  |", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---|---|---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plan"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mô tả"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Số lượng site"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Số lượng API"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Số lượng Product"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pilot"
      }), " | User dùng site và product mặc định và không có chức năng tạo thêm site và product. | 1 | 2 | 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Normal"
      }), " | User dùng site và product mặc định và không có chức năng tạo thêm site. | 1 | Không giới hạn | 1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enterprise"
      }), " | User có thể tự tạo site và product. | Không giới hạn | Không giới hạn | Không giới hạn", (0,jsx_runtime.jsx)(_components.br, {}), "\n|  |  |", (0,jsx_runtime.jsx)(_components.br, {}), "\n---|---|---|---", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chức năng"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Premium"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transactions"
      }), " | Max: 250/s | Max: 1000/s | Max: 5000/s", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Developer Portal"
      }), " | No | Yes | Yes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Domain"
      }), " | Yes | Yes | Yes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Self - hosted Gateway"
      }), " | No | Yes | Yes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message size"
      }), " | 15KB | 25KB | 50KB", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Loging retention"
      }), " | 1 tháng | 2 tháng | 3 tháng", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLA"
      }), " | 99.95% | 99.99% | 99.99%"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), ". Hệ thống sẽ tiến hành khởi tạo dịch vụ và thông báo tình trạng xử lý."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 3",
        src: (__webpack_require__(900912)/* ["default"] */ .A) + "",
        width: "1024",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi hệ thống khởi tạo tài khoản thành công, người dùng sẽ được tự động chuyển hướng sang trang quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ApiManager Application"
      }), " : ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 4",
        src: (__webpack_require__(918146)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hoặc để chủ động truy cập vào trang quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ApiManager Application"
      }), " , người dùng có thể vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Portal"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Start"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Management."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 5",
        src: (__webpack_require__(860276)/* ["default"] */ .A) + "",
        width: "1024",
        height: "258"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-khai-báo-rest-api",
      children: "2. Khai báo Rest API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi đăng ký dịch vụ thành công, các thao tác cấu hình của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Management"
      }), " sẽ được thực hiện toàn bộ trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ApiManager Application"
      }), ". Đầu tiên bạn cần khai báo các API đang cần quản lý lên hệ thống để quản trị tập trung trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manager"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rest Apis"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 6",
        src: (__webpack_require__(64160)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Title:"
        }), " Tiêu đề cho API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base path:"
        }), " Phần đường dẫn để phía client call vào sau khi public API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use host group:"
        }), " Kích hoạt mode HA hoặc không."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target endpoint:"
        }), " Endpoint của API đã có sẵn, cần đưa ra cho consumer dùng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Security:"
        }), " Thông tin xác thực của API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security method:"
        }), " Phương thức xác thực khi client sử dụng API. Hiện tại đang có ba phương thức được sử dụng là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Authentication"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Api Key."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable doc:"
        }), " Tạo doc cho đầu API."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable validation schema:"
        }), " Add validation cho body request."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security method sẽ không thay đổi được sau khi tạo, hãy cẩn thận khi khai báo thông tin này."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 7",
        src: (__webpack_require__(539969)/* ["default"] */ .A) + "",
        width: "2410",
        height: "1116"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành khởi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REST APIs"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 8",
        src: (__webpack_require__(883486)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-khai-báo-product",
      children: "3. Khai báo Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " là một thực thể dùng để gom nhóm các API với nhau (do có chung mục đích sử dụng, chung client,…). Thay vì bạn phải cấu hình cho từng API thì chỉ cần cấu hình cho một Product duy nhất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manager"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Products"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 9",
        src: (__webpack_require__(805393)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên product."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Title:"
        }), " Tiêu đề."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visibility type:"
        }), " Chế độ hiển thị của Product, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Public"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Closed"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 10",
        src: (__webpack_require__(382370)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 11",
        src: (__webpack_require__(389938)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-gắn-apis-vào-product",
      children: "4. Gắn APIs vào Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để gán API vào một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " cần gán API. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register API."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 12",
        src: (__webpack_require__(244247)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 13",
        src: (__webpack_require__(368649)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn API cần gán vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Select"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 14",
        src: (__webpack_require__(787493)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 15",
        src: (__webpack_require__(27363)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product và API liên kết với nhau theo mối quan hệ Nhiều – Nhiều, vì vậy một Product có thể gán nhiều APIs và một API cũng có thể xuất hiện cùng lúc trong nhiều product."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product sẽ ảnh hưởng tới việc group API trong product đó được publish ra tới loại consumer nào."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-tạo-site-mới",
      children: "5. Tạo Site mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Site là một thực thể dùng để mapping các product với portal."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu bạn dùng gói ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pilot"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Normal"
      }), " sẽ được cung cấp một site mặc định và không thể tạo thêm site. Nếu có nhu cầu sử dụng nhiều site hãy nâng cấp lên gói cao hơn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Application"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manager"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sites"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 16",
        src: (__webpack_require__(804341)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name:"
        }), " Tên site."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Title:"
        }), " Tiêu đề."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production mode:"
        }), " Chọn chế độ product."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtual area:"
        }), " Chọn khu vực trong danh sách đã được admin khai báo trước đó."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gateway:"
        }), " Chọn gateway trong danh sách đã được admin khai báo trước đó."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Portal:"
        }), " Chọn Portal trong danh sách đã được admin khai báo trước đó."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 17",
        src: (__webpack_require__(992224)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 18",
        src: (__webpack_require__(222333)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-staging-product",
      children: "6. Staging product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đã có Product và Site, để bắt đầu sử dụng bạn cần stage (đặt) product vào site tương ứng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để gán product vào site, bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " cần pubic lên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Staging"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 19",
        src: (__webpack_require__(543721)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Staging to New site"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 20",
        src: (__webpack_require__(181630)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập các thông tin theo yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Product"
        }), " : Product cần gán vào Site."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Site to publish"
        }), " : Chọn site đã tạo trước đó."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 21",
        src: (__webpack_require__(761414)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 22",
        src: (__webpack_require__(176603)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product và Site liên kết với nhau theo mối quan hệ Nhiều – Nhiều, vì vậy một Site có thể gán nhiều Product và một Product cũng có thể xuất hiện cùng lúc trong nhiều Site."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Site sẽ quyết định xem product nào được show ra trên site đó (và các API trong product con)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-publish-product",
      children: "7. Publish product"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi product được stage lên một site, thì bản chất product vẫn đang ở trạng thái private. Lúc này consumer chưa dùng được các API trong product đó. Bạn cần thực hiện publish product thì consumer mới sử dụng được."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện publish Product, bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manger"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sites."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 23",
        src: (__webpack_require__(344888)/* ["default"] */ .A) + "",
        width: "1024",
        height: "590"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site"
      }), " chứa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " cần Publish > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 24",
        src: (__webpack_require__(889573)/* ["default"] */ .A) + "",
        width: "1024",
        height: "558"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn Product cần Publish > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publish."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 25",
        src: (__webpack_require__(358822)/* ["default"] */ .A) + "",
        width: "1024",
        height: "556"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-tạo-consumers-mới",
      children: "8. Tạo Consumers mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " là người dùng cuối sử dụng API, những người này có toàn quyền sử dụng các API đã được khai báo trong các Product được cấp quyền."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " , bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API Manger"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumers"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 26",
        src: (__webpack_require__(305678)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin theo yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 27",
        src: (__webpack_require__(778320)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name:"
          }), " Tên Consumers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Site:"
          }), " Chọn site Consumers có hiệu lực."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "API Key:"
          }), " Tích chọn xác thực bằng API key hay không."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Title:"
          }), " Tiêu đề."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password:"
          }), " Mật khẩu nếu dùng ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Basic Authenticate"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Confirm password:"
          }), " Xác nhận lại mật khẩu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Max per second:"
          }), " Điền số lần client có thể gọi API trên giây."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Max per minute:"
          }), " Điền số lần client có thể gọi API trên phút."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Max per hour:"
          }), " Điền số lần client có thể gọi API trên giờ."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Có thể khai báo và sử dụng song song cả API Key và Password**.**"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phương thức xác thực của Consumer phải tương tự với API cần sử dụng."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ví dụ: API của bạn dùng phương thức xác thực (PTXT) là Basic thì PTXT của Consumer cũng phải là Basic. Nếu 1 consumer có nhu cầu sử dụng nhiều API với nhiều PTXT khác nhau thì bạn cần khai báo đủ các phương thức xác thực cho Consumer đó. Sau đó tùy vào sử dụng API nào mà sử dụng PTXT cho hợp lý."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để tiến hành tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 28",
        src: (__webpack_require__(802272)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-subscribe-product",
      children: "9. Subscribe product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer"
      }), " xong, để sử dụng được các API có trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), " thì nhà cung cấp phải chỉ định Consumer subcribe một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer Management"
      }), " , chọn consumer và click chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product subscription."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 29",
        src: (__webpack_require__(116819)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subscribe product."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 30",
        src: (__webpack_require__(303565)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Product"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 31",
        src: (__webpack_require__(684222)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Product bắt buộc phải ở trạng thái publish thì consumer mới có thể chọn trong giao diện subcribe."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 32",
        src: (__webpack_require__(50098)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hoàn tất các bước bên trên, client đã có thể sử dụng các API mà nhà cung cấp đưa ra."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-nhận-thông-tin-từ-api-provider",
      children: "10. Nhận thông tin từ API Provider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để có thể bắt đầu sử dụng, client sẽ cần có các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Endpoint của API"
        }), " : Được cung cấp theo hướng dẫn ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-api-site#contentify_4",
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lấy thông tin Endpoint của Product."
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization:"
        }), " Phương thức xác thực của ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumer"
        }), ". Hiện tại đang hỗ trợ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API Key"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Username:"
            }), " Tên user với cấu trúc:"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Username = UsernameProvider + tên site + usernameConsumer."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Ví dụ:"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "demo123.sitedemo.demoacc"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hoặc có thể lấy theo hướng dẫn ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/fpt-api-management/?doc=quan-ly-consumers#contentify_4",
          children: "Lấy thông tin xác thực của Consumer"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Password"
          }), " : Mật khẩu của user đã khai báo ở bước tạo consumer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Nếu Authorization"
          }), " là API Key:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Key:"
            }), " api-key."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Value :"
            }), " Lấy theo hướng dẫn ở phần"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Add to:"
            }), " Header."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site được ủy quyền."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-sử-dụng-postman",
      children: "11. Sử dụng Postman"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi đã có đủ thông tin, client có thể sử dụng Postman để bắt đầu dùng API được cung cấp từ API Management."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Nhập endpoint và chọn method gọi API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 33",
        src: (__webpack_require__(988974)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Authorization"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Auth"
        }), " và nhập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " /", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API Key"
        }), " và nhập key nếu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Authorization"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "API"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Key"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 34",
        src: (__webpack_require__(515946)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập các request body, param khác để gọi API và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Send."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 35",
        src: (__webpack_require__(213985)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhận kết quả trả về."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status message 2xx:"
        }), " Gọi API thành công"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status message 4xx – 5xx:"
        }), " Lỗi – báo cho FCI để được hỗ trợ"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT API Management 36",
        src: (__webpack_require__(908547)/* ["default"] */ .A) + "",
        width: "1024",
        height: "640"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Checklist check lỗi sẽ tuần tự như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra username, password."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Báo API Provider kiểm tra quyền của client với API trước."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra API đã khai báo đúng hay chưa, param bị thiếu header gì hay không?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm tra API có bị lỗi hay không ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Báo FCI kiểm tra gateway."
      }), "\n"]
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

/***/ 860276
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/06e7b1305bde-Userguide-FPT-API-Management-5-1024x258-0ba9fe1f302991b8e967aa14e8537eb3.png");

/***/ },

/***/ 27363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26910f977c9f-Userguide-FPT-API-Management-15-1024x538-befdfe1cd18eced37b657f6dc0334482.png");

/***/ },

/***/ 802272
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29ff8f20b26c-Userguide-FPT-API-Management-28-1024x538-2c95ce0a348c52a8cd3890a341c8e291.png");

/***/ },

/***/ 543721
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/32e49e03f745-Userguide-FPT-API-Management-19-1024x538-697cbc5980c08d31ea8fa18c72f7a369.png");

/***/ },

/***/ 305678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/38542a552524-Userguide-FPT-API-Management-26-1024x538-31090a8f47b6c783c342a4d441bba243.png");

/***/ },

/***/ 539969
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3c62edec2108-472080589_951032306478361_1327346709131415396_n.pn-ec5c9c413f4d091ae7df9d4f8cb6137c.png");

/***/ },

/***/ 50098
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/401df3890679-Userguide-FPT-API-Management-32-1024x538-15290077ef23d9b6eaf66e4d7021dab3.png");

/***/ },

/***/ 368649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40e6fd9caa59-Userguide-FPT-API-Management-13-1024x538-af9506c5ef234af9c712bd0a33fcd8f6.png");

/***/ },

/***/ 918146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/56046d8931e5-Userguide-FPT-API-Management-4-1024x538-83d567687df58fb721a03b70b6109e83.png");

/***/ },

/***/ 382370
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5c96395a0fdd-Userguide-FPT-API-Management-10-1024x538-028469cedcf960b9e71eed3337a5702e.png");

/***/ },

/***/ 988974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6851d77f9940-Userguide-FPT-API-Management-33-1024x640-87bc1879a436963f033b7e26fef85464.png");

/***/ },

/***/ 176603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7e8c715e316f-Userguide-FPT-API-Management-22-1024x538-d74ada540a6e90456dbc60712c2f5111.png");

/***/ },

/***/ 116819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/821efca8b899-Userguide-FPT-API-Management-29-1024x538-5129f96570ea2976fd060df779a9b563.png");

/***/ },

/***/ 900912
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/824a28842863-Userguide-FPT-API-Management-3-1024x258-d6a6639fb88105632052ae7cf7d78439.png");

/***/ },

/***/ 778320
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8505cbdc1103-Userguide-FPT-API-Management-27-1024x538-da04c84baa7a587783ff367e4fd3a5df.png");

/***/ },

/***/ 684222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/85d308c16f26-Userguide-FPT-API-Management-31-1024x538-4a903738d80bf2611bce46d302829c4f.png");

/***/ },

/***/ 787493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/86d8a0d01da5-Userguide-FPT-API-Management-14-1024x538-fa8b9dd110c0e3037faf0a760bb24f26.png");

/***/ },

/***/ 389938
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/93a6a17cdd81-Userguide-FPT-API-Management-11-1024x538-184930a4a356556020d72ac42cba0bdc.png");

/***/ },

/***/ 761414
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9ac596d92b69-Userguide-FPT-API-Management-21-1024x538-a8c05e244778745bc7ef19ae58af7f2f.png");

/***/ },

/***/ 908547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9e71949323c1-Userguide-FPT-API-Management-36-1024x640-e8d99a63785d3143f2e98c45d522afe3.png");

/***/ },

/***/ 805393
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a464f0e44116-Userguide-FPT-API-Management-9-1024x538-ee518628e0d05d0285b3c31d567f0f2b.png");

/***/ },

/***/ 244247
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6a0d5d95805-Userguide-FPT-API-Management-12-1024x538-0db8c69dbd589515ad504af93ade6b46.png");

/***/ },

/***/ 303565
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a7aedaa105d2-Userguide-FPT-API-Management-30-1024x538-a57e6356bfdfc542e4acfc2c3b2ea8ef.png");

/***/ },

/***/ 356792
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/af7277d5097c-Thiet-ke-chua-co-ten-1-63789e4687dc161b8cfd71597a01d2c5.png");

/***/ },

/***/ 344888
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aff731c78625-Userguide-FPT-API-Management-23-1024x590-c55c2a95feb4705cb01acfbd06b26e22.png");

/***/ },

/***/ 64160
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b760ac407150-Userguide-FPT-API-Management-6-1024x538-d10afeeb59d838d7f137415fed18e2ac.png");

/***/ },

/***/ 889573
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b953da5f07c2-Userguide-FPT-API-Management-24-1024x558-f175c4a03d23cbcfe2b2889d4744c9e6.png");

/***/ },

/***/ 804341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/be9735dad9fc-Userguide-FPT-API-Management-16-1024x538-a5ff450276ce80918b50aeafa37747d1.png");

/***/ },

/***/ 181630
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c19e306e753e-Userguide-FPT-API-Management-20-1024x538-b7b542c3bcd960334560cece58b766c8.png");

/***/ },

/***/ 222333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c20fb585b9b6-Userguide-FPT-API-Management-18-1024x538-dc0d18db16644523ab83847c1eef1b0a.png");

/***/ },

/***/ 883486
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c2bb67f99afa-Userguide-FPT-API-Management-8-1024x538-18846da5b2c7e4ca49b8a44165965bc5.png");

/***/ },

/***/ 515946
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c6cc12919cdc-Userguide-FPT-API-Management-34-1024x640-99685a461003428e43d942c4535419f7.png");

/***/ },

/***/ 992224
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c8843ff58c68-Userguide-FPT-API-Management-17-1024x538-affed8d71170fdcf970bed7deef8a282.png");

/***/ },

/***/ 358822
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cd93e7e6ef53-Userguide-FPT-API-Management-25-1024x556-677c32c47f104a41206b839ba1a45189.png");

/***/ },

/***/ 999683
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e900f9a0e95a-Userguide-FPT-API-Management-1-1024x538-01196b08494ddd1f318553eb96c1ea25.png");

/***/ },

/***/ 213985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fc9f24a15e58-Userguide-FPT-API-Management-35-1024x640-8120a42d8fa3aa7e75356dd18e428d94.png");

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