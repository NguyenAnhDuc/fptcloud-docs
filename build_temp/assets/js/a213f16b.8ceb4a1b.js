"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[56837],{

/***/ 875301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_tutorials_su_dung_object_storage_tren_s_3_client_md_a21_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-tutorials-su-dung-object-storage-tren-s-3-client-md-a21.json
const site_docs_object_storage_tutorials_su_dung_object_storage_tren_s_3_client_md_a21_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/tutorials-su-dung-object-storage-tren-s3-client","title":"2. FPT Object Storage","description":"Sử dụng Object Storage trên S3 Browser","source":"@site/docs/object-storage/tutorials-su-dung-object-storage-tren-s3-client.md","sourceDirName":"object-storage","slug":"/object-storage/tutorials-su-dung-object-storage-tren-s3-client","permalink":"/object-storage/tutorials-su-dung-object-storage-tren-s3-client","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials Su Dung Object Storage Tren S3 Client","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-su-dung-object-storage-tren-s3-client","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Su Dung Object Storage Tren Fpt Portal","permalink":"/object-storage/tutorials-su-dung-object-storage-tren-fpt-portal"},"next":{"title":"Tutorials Tich Hop Fpt Object Storage Voi Cac S3 Client","permalink":"/object-storage/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/tutorials-su-dung-object-storage-tren-s3-client.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials Su Dung Object Storage Tren S3 Client',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-su-dung-object-storage-tren-s3-client',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Đăng nhập tài khoản FPT Object Storage trên S3 Browser",
  "id": "đăng-nhập-tài-khoản-fpt-object-storage-trên-s3-browser",
  "level": 2
}, {
  "value": "Tạo Bucket mới",
  "id": "tạo-bucket-mới",
  "level": 2
}, {
  "value": "Upload File/Folder vào bucket",
  "id": "upload-filefolder-vào-bucket",
  "level": 2
}, {
  "value": "Download File/Folder từ bucket",
  "id": "download-filefolder-từ-bucket",
  "level": 2
}, {
  "value": "Bật tính năng versioning cho bucket",
  "id": "bật-tính-năng-versioning-cho-bucket",
  "level": 2
}, {
  "value": "Khôi phục lại file đã xóa",
  "id": "khôi-phục-lại-file-đã-xóa",
  "level": 2
}, {
  "value": "Download version cũ của file",
  "id": "download-version-cũ-của-file",
  "level": 2
}, {
  "value": "Thiết lập tính năng bucket lifecycle",
  "id": "thiết-lập-tính-năng-bucket-lifecycle",
  "level": 2
}, {
  "value": "Thiết lập tính năng bucket ACL",
  "id": "thiết-lập-tính-năng-bucket-acl",
  "level": 2
}, {
  "value": "Sử dụng bucket để làm Static website",
  "id": "sử-dụng-bucket-để-làm-static-website",
  "level": 2
}, {
  "value": "Tạo public link trong khoảng thời gian xác định",
  "id": "tạo-public-link-trong-khoảng-thời-gian-xác-định",
  "level": 2
}, {
  "value": "CORS (Cross Origin Resource Sharing)",
  "id": "cors-cross-origin-resource-sharing",
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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng Object Storage trên S3 Browser"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ngoài việc sử dụng trực tiếp trên FPT Portal, bạn có thể đăng nhập và sử dụng trên tất cả các S3-SDK hoặc S3-Client khác theo chuẩn AWS S3."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dưới đây là hướng dẫn sử dụng trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " , một client cơ bản với GUI trực quan, dễ dàng tiếp cận nhất. FPT Cloud khuyến khích bạn nên sử dụng ứng dụng này vì nó là phần mềm miễn phí, phổ biến và hỗ trợ đầy đủ chức năng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu bạn cần hướng dẫn tích hợp vào các SDK hoặc Client khác, hãy tham khảo phần ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tích hợp FPT Object Storage với các S3-Client."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tải và cài đặt S3 Brower tại: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://s3browser.com/download.aspx",
        children: "https://s3browser.com/download.aspx"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các thông tin cần để đăng nhập trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " :"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thông tin đăng nhập"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ví dụ"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên người dùng (Có thể chọn tên tùy chọn bất kỳ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S3 Compatible Storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REST Endpoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lấy ở FPT Portal với phương thức ENDPOINT HTTPS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Access Key hoặc SubUser Access Key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Secret Access Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Secret Key hoặc SubUser Secret Key"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "đăng-nhập-tài-khoản-fpt-object-storage-trên-s3-browser",
      children: "Đăng nhập tài khoản FPT Object Storage trên S3 Browser"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở giao diện của ứng dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " , chọn menu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accounts"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add new account."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 16",
        src: (__webpack_require__(959687)/* ["default"] */ .A) + "",
        width: "1010",
        height: "762"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin đã chuẩn bị vào popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New Account"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add new account"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 17",
        src: (__webpack_require__(98604)/* ["default"] */ .A) + "",
        width: "720",
        height: "780"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi kết nối thành công ứng dụng sẽ hiển thị danh sách toàn bộ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket"
      }), " trong Storage của bạn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 18",
        src: (__webpack_require__(309207)/* ["default"] */ .A) + "",
        width: "1009",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tạo-bucket-mới",
      children: "Tạo Bucket mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New bucket."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 19",
        src: (__webpack_require__(4108)/* ["default"] */ .A) + "",
        width: "1009",
        height: "416"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập tên bucket mới và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create new bucket"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 20",
        src: (__webpack_require__(518705)/* ["default"] */ .A) + "",
        width: "539",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upload-filefolder-vào-bucket",
      children: "Upload File/Folder vào bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Di chuyển đến vị trị cần upload File/Folder và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 21",
        src: (__webpack_require__(840514)/* ["default"] */ .A) + "",
        width: "1009",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn tùy chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload file"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upload folder"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 22",
        src: (__webpack_require__(779547)/* ["default"] */ .A) + "",
        width: "758",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn File/Folder từ local để tiến hành upload lên S3 bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 23",
        src: (__webpack_require__(889789)/* ["default"] */ .A) + "",
        width: "946",
        height: "533"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi upload thành công, File/Folder sẽ được hiển thị trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 24",
        src: (__webpack_require__(821701)/* ["default"] */ .A) + "",
        width: "1010",
        height: "414"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "download-filefolder-từ-bucket",
      children: "Download File/Folder từ bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chọn File/Folder cần download trên danh sách, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 25",
        src: (__webpack_require__(982489)/* ["default"] */ .A) + "",
        width: "758",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn thư mục ở máy local để lưu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "File/Folder"
      }), " tải về từ S3 bucket > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Select Folder"
      }), " để xác nhận."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 26",
        src: (__webpack_require__(970707)/* ["default"] */ .A) + "",
        width: "946",
        height: "533"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bật-tính-năng-versioning-cho-bucket",
      children: "Bật tính năng versioning cho bucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " là tính năng giúp lưu và quản lý nhiều biến thể (phiên bản) của cùng một đối tượng trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), ". Bạn có thể sử dụng tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " để lưu trữ, truy xuất và khôi phục mọi phiên bản của mọi đối tượng được lưu trữ trong bucket của bạn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để bật tính năng này cho bucket bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " , chọn bucket muốn enable tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Versioning Settings."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 27",
        src: (__webpack_require__(948575)/* ["default"] */ .A) + "",
        width: "376",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Tick chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable versioning for new-bucket"
      }), " và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OK"
      }), " để lưu cài đặt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 28",
        src: (__webpack_require__(549316)/* ["default"] */ .A) + "",
        width: "551",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "khôi-phục-lại-file-đã-xóa",
      children: "Khôi phục lại file đã xóa"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi bật tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " , mọi thao tác khiến file có sự thay đổi đều sẽ được lưu trữ lại và đánh số. Kể cả thao tác ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xóa"
      }), ". Nếu bạn muốn khôi phục lại file chỉ cần loại bỏ phiên bản được đánh dấu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xóa"
      }), " trên list ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version"
      }), " là được. File sẽ được rollback về phiên bản bình thường trước khi xóa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để thực hiện khôi phục file đã xóa bạn thao tác theo ví dụ sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đầu tiên bạn cần upload một file bất kỳ lên bucket đã bật tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để xóa nó."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lúc này ở tab Versions bạn sẽ thấy version mới nhất được đánh dấu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "(delete)"
      }), ". Bạn chọn version đấy và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 29",
        src: (__webpack_require__(544300)/* ["default"] */ .A) + "",
        width: "1010",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File đã được khôi phục trở lại."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 30",
        src: (__webpack_require__(640037)/* ["default"] */ .A) + "",
        width: "1010",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "download-version-cũ-của-file",
      children: "Download version cũ của file"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu đã bật ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " , bạn có thể download các phiên bản cũ hơn của file theo hướng dẫn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " , chọn file cần download các phiên bản cũ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versions"
      }), " , chọn đến phiên bản cần download."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download"
      }), " , sau đó chọn vị trí sẽ lưu file trên local và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Select Folder"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thiết-lập-tính-năng-bucket-lifecycle",
      children: "Thiết lập tính năng bucket lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket Lifecycle"
      }), " sẽ giúp bạn tự động xóa 1 file, 1 nhóm file hoặc các version của file khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage"
      }), " sau một thời gian nhất định. Việc xóa các file hoặc version không cần thiết sẽ giúp bạn tiết kiệm được rất nhiều tài nguyên và chi phí cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để bật chức năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket Lifecycle"
      }), " bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), " , chọn bucket muốn enable tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket Lifecycle"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Configuration."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 31",
        src: (__webpack_require__(931770)/* ["default"] */ .A) + "",
        width: "376",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add"
      }), " ở popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket Lifecycle Rules"
      }), " để thêm Rule mới:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 32",
        src: (__webpack_require__(718849)/* ["default"] */ .A) + "",
        width: "1024",
        height: "697"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Tại popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New Lifecycle Rule"
      }), " bạn cần quan tâm đến 2 tab:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action for current versions:"
        }), " Thêm hành động sẽ tác động đến version hiện tại của file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action for noncurrent versions:"
        }), " Thêm hành động sẽ tác động đến các version cũ của file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tùy vào nhu cầu mà bạn mở tab tương ứng, tiếp theo chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Permanently delete files"
      }), " ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expiration."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 33",
        src: (__webpack_require__(337322)/* ["default"] */ .A) + "",
        width: "727",
        height: "773"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn chế độ xóa:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "After specific number of days after creation:"
        }), " Các file sẽ bị xóa sau một số ngày nhất định."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On a particular date (UTC Midnight"
        }), "): Các file sẽ bị xóa tại ngày cụ thể (Tính theo thời gian UTC).", (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 34",
          src: (__webpack_require__(739772)/* ["default"] */ .A) + "",
          width: "670",
          height: "122"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập số lượng ngày hoặc ngày cụ thể tùy theo chế độ xóa và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add new rule"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 35",
        src: (__webpack_require__(650723)/* ["default"] */ .A) + "",
        width: "727",
        height: "773"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Thêm các rule khác tương tự. Sau khi đã thiết lập xong toàn bộ rule bạn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 36",
        src: (__webpack_require__(645612)/* ["default"] */ .A) + "",
        width: "1024",
        height: "472"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thiết-lập-tính-năng-bucket-acl",
      children: "Thiết lập tính năng bucket ACL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket ACL"
      }), " (Access control list) là tính năng giúp bạn quản lý quyền truy cập vào nhóm và các đối tượng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 37",
        src: (__webpack_require__(613565)/* ["default"] */ .A) + "",
        width: "376",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket ACL"
      }), " hỗ trợ 3 dạng user cơ bản với các quyền Full Control, Read, Write, Read Permissions và Write Permissions. Khách hàng có thể thao tác nhanh bằng cách chọn một trong hai dạng ACL:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make public"
        }), " : Tất cả người dùng đều có thể truy cập vào bucket với quyền Read."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make private"
        }), " : Chỉ có owner có thể thao tác với bucket.", (0,jsx_runtime.jsx)(_components.img, {
          alt: "User guide FPT Object Storage 38",
          src: (__webpack_require__(455323)/* ["default"] */ .A) + "",
          width: "1010",
          height: "594"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sử-dụng-bucket-để-làm-static-website",
      children: "Sử dụng bucket để làm Static website"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng sử dụng bucket để làm static website cho phép người dùng tạo một website tĩnh, có thể public ra Internet và được truy cập bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 WEBSITE ENDPOINT"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Khách hàng upload toàn bộ source website lên S3 bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 39",
        src: (__webpack_require__(247410)/* ["default"] */ .A) + "",
        width: "1009",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn bucket muốn đặt làm Static website > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit Website Configuration."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 40",
        src: (__webpack_require__(239293)/* ["default"] */ .A) + "",
        width: "1007",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable static website hosting"
      }), " > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Index document"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error document"
      }), " tương ứng trên source đã upload lên bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 41",
        src: (__webpack_require__(703983)/* ["default"] */ .A) + "",
        width: "1005",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Permissions"
      }), " > Thiết lập quyền Read cho tất cả user đối với bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 42",
        src: (__webpack_require__(785606)/* ["default"] */ .A) + "",
        width: "1007",
        height: "760"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Truy cập vào static web theo link S3 WEBSITE ENDPOINT được cung cấp ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Endpoint"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tạo-public-link-trong-khoảng-thời-gian-xác-định",
      children: "Tạo public link trong khoảng thời gian xác định"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tính năng tạo public link trong khoảng thời gian xác định cho phép public source web lưu trữ trong bucket. Thông thường có thể được sử dụng trong trường hợp kiểm thử source web hoặc demo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Tính năng tạo public link trong khoảng thời gian xác định yêu cầu sử dụng S3 Browser Pro."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Chọn file html trong bucket > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generate Web URL."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 43",
        src: (__webpack_require__(156745)/* ["default"] */ .A) + "",
        width: "1004",
        height: "763"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn một trong hai kiểu expire theo phút hoặc expire theo thời gian cụ thể (ngày-tháng-năm-giờ-phút-giây) > Copy và truy cập vào link."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 44",
        src: (__webpack_require__(926679)/* ["default"] */ .A) + "",
        width: "715",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 45",
        src: (__webpack_require__(530503)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khách hàng có thể kiểm tra sau thời gian expire thì link sẽ hết khả năng truy cập được."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 46",
        src: (__webpack_require__(733875)/* ["default"] */ .A) + "",
        width: "1024",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cors-cross-origin-resource-sharing",
      children: "CORS (Cross Origin Resource Sharing)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Truy cập vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS Configuration"
      }), " trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S3 Browser"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 47",
        src: (__webpack_require__(255145)/* ["default"] */ .A) + "",
        width: "1009",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Gán ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS Configuration Rule"
      }), " dưới dạng XML > Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   http://www.example.com\n   PUT\n   POST\n   DELETE\n\n   GET\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "User guide FPT Object Storage 48",
        src: (__webpack_require__(989977)/* ["default"] */ .A) + "",
        width: "1010",
        height: "764"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-quan-ly-subuser",
        children: " Previous Quản lý SubUser "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client",
        children: " Next Tích hợp FPT Object Storage với các S3-Client "
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

/***/ 530503
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/08b2a3af78ca-User-guide-FPT-Object-Storage-45-1024x538-c64f379c2c608713f75f9f9af9c36320.png");

/***/ },

/***/ 733875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0ae51a518161-User-guide-FPT-Object-Storage-46-1024x538-e19973fb11b6b8f0f2b57a5365ce5369.png");

/***/ },

/***/ 821701
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/11eea5f09bbd-User-guide-FPT-Object-Storage-24-03df339f83c989ec9eb983c344bea02d.png");

/***/ },

/***/ 926679
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/205184e3b92f-User-guide-FPT-Object-Storage-44-f6912fb8a5b121fba7feab3b0126eca1.png");

/***/ },

/***/ 948575
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/29308078386d-User-guide-FPT-Object-Storage-27-bc393f40d9fa1e0336b6bbe0492c2db0.png");

/***/ },

/***/ 549316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2a0c389a62b5-User-guide-FPT-Object-Storage-28-2353c9a5f0ad7f68072adb0c6c0d2a75.png");

/***/ },

/***/ 718849
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2cf671809ee6-User-guide-FPT-Object-Storage-32-1024x697-94721546db79fce9804984956329be74.png");

/***/ },

/***/ 239293
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2ed8a15306e5-User-guide-FPT-Object-Storage-40-00590198347c580c555fc4cf8756d83c.png");

/***/ },

/***/ 785606
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3a75930698dc-User-guide-FPT-Object-Storage-42-a6311d2c48915c417b75b469eb3a2b9a.png");

/***/ },

/***/ 640037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3bc28457ab87-User-guide-FPT-Object-Storage-30-c5e9ecc7f53f864dbfcc766e7cd544b6.png");

/***/ },

/***/ 613565
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/51971e9eda40-User-guide-FPT-Object-Storage-37-5494aef69019b720cda6c078adbbbf85.png");

/***/ },

/***/ 337322
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/57db54f036df-User-guide-FPT-Object-Storage-33-94e0d324f045525cd755c25c0bcaae65.png");

/***/ },

/***/ 959687
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5946a0ca41e5-User-guide-FPT-Object-Storage-16-99681b3a071296e6d612a6745b89175e.png");

/***/ },

/***/ 4108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6d6ada0b5eff-User-guide-FPT-Object-Storage-19-0c5a906d1f87ab8974e1217c466831e3.png");

/***/ },

/***/ 544300
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6f9195da8011-User-guide-FPT-Object-Storage-29-f32ea424b0a62a2feef96c0bd5e07fa6.png");

/***/ },

/***/ 889789
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/715159a2eb86-User-guide-FPT-Object-Storage-23-1716c5b6b1bae115b4960b6f0765f2e8.png");

/***/ },

/***/ 645612
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8379d63a26c2-User-guide-FPT-Object-Storage-36-1024x472-f6d40346b70c24caa90453b054c35e41.png");

/***/ },

/***/ 518705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8b2e049ce500-User-guide-FPT-Object-Storage-20-b6ee42e436b964ebf9abba0794101300.png");

/***/ },

/***/ 989977
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/99ddaff0d035-User-guide-FPT-Object-Storage-48-42ff0907702dfd0bc19a0c39d542030c.png");

/***/ },

/***/ 703983
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a3d5f504d9b1-User-guide-FPT-Object-Storage-41-0409888bf58f0688ae16b93e8488857c.png");

/***/ },

/***/ 247410
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/abc690187e8b-User-guide-FPT-Object-Storage-39-428e872fef9c1c8a329bbea07d3d58c0.png");

/***/ },

/***/ 840514
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b64dc3512ae5-User-guide-FPT-Object-Storage-21-0d7a72b245d7f6641eb7908bfc4d3af3.png");

/***/ },

/***/ 739772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 982489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bc174a186193-User-guide-FPT-Object-Storage-25-1536efd775baaed9cbf2aae503914035.png");

/***/ },

/***/ 455323
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1590c9271fb-User-guide-FPT-Object-Storage-38-039116d48610ffb4f76551f9450c0ba4.png");

/***/ },

/***/ 156745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c32fd309b275-User-guide-FPT-Object-Storage-43-2d15ee92f32238e6388ad1c187e37c05.png");

/***/ },

/***/ 255145
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cec0f611f269-User-guide-FPT-Object-Storage-47-b4517755d8b5b32638fbdbf41188c4ea.png");

/***/ },

/***/ 309207
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d232f82dffe0-User-guide-FPT-Object-Storage-18-e10f5d6cfc8ad8616534881bde3d3f6d.png");

/***/ },

/***/ 970707
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dbef0261213c-User-guide-FPT-Object-Storage-26-6fcf4ae646c200b06e61af0adb811ddf.png");

/***/ },

/***/ 98604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ebb112eab496-User-guide-FPT-Object-Storage-17-98eaf8c74f92de5b4b20ec400d3596ec.png");

/***/ },

/***/ 779547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee46882a2f2b-User-guide-FPT-Object-Storage-22-a29ca933ff71519c833e27dbb5a591d7.png");

/***/ },

/***/ 931770
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/efabe217ce38-User-guide-FPT-Object-Storage-31-035a40572afa732545fa2ab57b58722a.png");

/***/ },

/***/ 650723
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f158dc30fcd4-User-guide-FPT-Object-Storage-35-8bc28939e6f485552e9bd8a137a705b2.png");

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