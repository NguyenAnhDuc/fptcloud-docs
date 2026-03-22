"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[69005],{

/***/ 697758
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_su_dung_fpt_object_storage_lam_media_server_luu_tru_va_phan_phoi_media_file_cho_websiteweb_application_md_7ca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application-md-7ca.json
const site_docs_object_storage_su_dung_fpt_object_storage_lam_media_server_luu_tru_va_phan_phoi_media_file_cho_websiteweb_application_md_7ca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application","title":"2. FPT Object Storage","description":"Sử dụng FPT Object Storage làm media server","source":"@site/docs/object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application.md","sourceDirName":"object-storage","slug":"/object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application","permalink":"/object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Sdk Api Reference","permalink":"/object-storage/sdk-api-reference"},"next":{"title":"Tutorials Bucket Config","permalink":"/object-storage/tutorials-bucket-config"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "1. Giới thiệu",
  "id": "1-giới-thiệu",
  "level": 2
}, {
  "value": "2. Điều kiện tiên quyết",
  "id": "2-điều-kiện-tiên-quyết",
  "level": 2
}, {
  "value": "3. Tổng quan",
  "id": "3-tổng-quan",
  "level": 2
}, {
  "value": "4. Giải pháp",
  "id": "4-giải-pháp",
  "level": 2
}, {
  "value": "A. Tạo bucket mới.",
  "id": "a-tạo-bucket-mới",
  "level": 3
}, {
  "value": "B. Tạo tài khoản SubUser và phân quyền sử dụng Bucket cho SubUser này.",
  "id": "b-tạo-tài-khoản-subuser-và-phân-quyền-sử-dụng-bucket-cho-subuser-này",
  "level": 3
}, {
  "value": "C. Cài đặt và cấu hình Plugin trên website WordPress",
  "id": "c-cài-đặt-và-cấu-hình-plugin-trên-website-wordpress",
  "level": 3
}, {
  "value": "5. Kết luận",
  "id": "5-kết-luận",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng FPT Object Storage làm media server"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-giới-thiệu",
      children: "1. Giới thiệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " là dịch vụ lưu trữ dữ liệu đối tượng được cung cấp bởi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Smart Cloud"
      }), " , hỗ trợ giao thức tương đương với AWS S3 (Simple Storage Service). Với một số đặc điểm nổi bật như lưu trữ không giới hạn, bảo mật và tính sẵn sàng cao mà giá cả lại phải chăng. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " là một lựa chọn cực kỳ phù hợp để làm kho lưu trữ media cho các trang website/web application có nhu cầu truy suất dữ liệu cao và liên tục."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một số lợi ích có thể được kể ra:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tăng hiệu suất máy chủ web:"
        }), " Nếu sử dụng FPT Object Storage để lưu trữ file media, Web Server sẽ không còn phải chịu trách nhiệm lưu trữ và phân phối các file này nữa. Tài nguyên sẽ được dành toàn bộ để xử lý các công việc khác quan trọng hơn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tiết kiệm chi phí:"
        }), " Nếu bạn sử dụng chính storage của Web Server để lưu trữ media thì Web Server lúc này sẽ cần dung lượng rất lớn. Đơn giá storage của các Web Server thường cao hơn rất nhiều so với FPT Object Storage. Ngoài ra còn tiết kiệm được băng thông của Web Server do trình duyệt sẽ load file trực tiếp từ FPT Object Storage mà không thông qua Web Server. Hiện tại FPT Object Storage đã hỗ trợ cơ chế Pay as you go, đảm bảo bạn chỉ phải trả tiền cho dung lượng thực tế đã sử dụng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lưu trữ độc lập:"
        }), " Tách biệt ứng dụng khỏi dữ liệu. Bạn có thể đặt ứng dụng ở bất kỳ đâu, di chuyển ứng dụng sang bất kỳ môi trường nào mà không cần lo lắng về gián đoạn về dữ liệu. Ví dụ trong trường hợp bạn cần di chuyển một website sang Server khác, chỉ cần chuyển source code website sang server mới là xong. Không cần di chuyển media hoặc mất thời gian để tìm và thay đổi các link media được nhúng trong trang web."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tăng tốc website:"
        }), " Các file media sẽ được trình duyệt của enduser load trực tiếp từ DataCenter tốc độ cao của FPT Object Storage. Giảm thời gian tải trang xuống mức tối đa. Các DataCenter của FPT Object Storage được đặt ở TP.Hà Nội và TP.Hồ Chí Minh, đảm bảo tốc độ trong nước luôn được ổn định trong trường hợp internet ra quốc tế bị trục trặc. Tuân thủ các quy định về nội địa hóa dữ liệu theo Nghị Định 53/2022 của Chính Phủ."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong phạm vi bài viết này, chúng tôi sẽ giới thiệu tổng quan và hướng dẫn giải pháp Sử dụng FPT Object Storage làm media server dựa trên ví dụ tích hợp FPT S3 vào một website chạy WordPress."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-điều-kiện-tiên-quyết",
      children: "2. Điều kiện tiên quyết"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Website được build trên nền tảng WordPress."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Đang sử dụng dịch vụ FPT Object Storage.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Đã tạo một bucket public dùng để chứa media."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Đã tổng hợp đầy đủ các thông tin Endpoint, Access Key của Object Storage service."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-tổng-quan",
      children: "3. Tổng quan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mặc định WordPress sẽ không hỗ trợ việc dùng trực tiếp S3 Storage để lưu trữ tệp. Tuy nhiên một số plugin có thể giúp bạn làm việc này. Về cơ bản các plugin này vẫn sẽ hoạt động dựa trên trình upload mặc định của WordPress. Sau khi WordPress upload file thành công, plugin sẽ tạo một bản copy sang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " và tự động xóa file gốc + thay thế toàn bộ link trên wordpress bằng link trên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), ". Trên thị trường có một số plugin phổ biến như ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WP Offload Media Lite"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MediaCloud"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Media Library Folders Pro S3"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "W3 Total Cache"
      }), " … Trong bài viết này chúng tôi sẽ hướng dẫn dựa trên plugin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MediaCloud"
      }), " , với các plugin khác luồng thao tác tương tự.", (0,jsx_runtime.jsx)(_components.br, {}), "\nCác bước cơ bản:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo bucket mới."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo một tài khoản SubUser và phân quyền sử dụng Bucket cho SubUser này."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cài đặt và cấu hình plugin trên website WordPress."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-giải-pháp",
      children: "4. Giải pháp"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-tạo-bucket-mới",
      children: "A. Tạo bucket mới."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bucket là một đơn vị lưu trữ mang tính logical trên S3. Một bucket sẽ có nhiệm vụ chứa các file/folder mà người dùng upload lên. Bạn cần tạo một bucket để chứa dữ liệu media của toàn bộ website."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Di chuyển đến Object Storage Management trên FPT Portal hoặc mở S3 Client đang sử dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn Create Bucket và nhập tên Bucket cần tạo. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-tao-bucket-moi",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hướng dẫn thao tác trên FPT Portal."
        })
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-s3-browser-tao-bucket-moi",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hướng dẫn thao tác trên S3 Client."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Cấu hình bảo mật cho Bucket. Mặc định tất cả những ai có cặp key và Endpoint đều có thể Sửa hoặc Xóa các object bên trong bucket. Trang web wordpress cần được bảo mật cẩn thận, tránh hacker chiếm đoạt key dẫn đến mất dữ liệu trong bucket. Hãy sử dụng các tính năng nâng cao được FPT Cloud cung cấp sẵn để tăng thêm bảo mật cho bucket:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning:"
        }), " Tự động lưu trữ lại các phiên bản thay đổi của đối tượng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket Policy:"
        }), " Tạo một Policy để giới hạn IP có thể truy cập dữ liệu trong bucket hoặc giới hạn đuôi file có thể tải lên."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup and Replicate Bucket:"
        }), " Tự động backup toàn bộ Bucket sang Bucket khác."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-tạo-tài-khoản-subuser-và-phân-quyền-sử-dụng-bucket-cho-subuser-này",
      children: "B. Tạo tài khoản SubUser và phân quyền sử dụng Bucket cho SubUser này."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong quá trình test hoặc demo, bạn có thể sử dụng cặp key của admin để thực hiện kết nối. Tuy nhiên về lâu dài FPT Cloud không khuyến nghị bạn thực hiện hành động này, sẽ có rất nhiều rủi ro nếu cặp key này bị lộ lọt ra ngoài. Hacker có thể xóa toàn bộ dữ liệu của các bucket trong Object Storage của bạn mà không thể phục hồi lại được. Hãy tạo một SubUser với quyền hạn chế, chỉ có thể tác động đến bucket được chỉ định. Sau đó sử dụng key của SubUser này để cấu hình ở website WordPress."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-cài-đặt-và-cấu-hình-plugin-trên-website-wordpress",
      children: "C. Cài đặt và cấu hình Plugin trên website WordPress"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập vào trang quản trị của website WordPress, sau đó vào mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plugin"
      }), ". Tìm plugin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Media Cloud"
      }), " và tải về."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(35006)/* ["default"] */ .A) + "",
        width: "942",
        height: "543"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi kích hoạt bạn sẽ được yêu cầu nhập các thông tin Endpoint, Key, Bucket Name. Các thông tin này bạn có thể lấy từ FPT Portal theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Quản lý Access Key."
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi kết nối thành công, hãy chỉnh sửa lại một số cấu hình cơ bản để thuận tiện hơn cho quá trình sử dụng. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(88066)/* ["default"] */ .A) + "",
        width: "940",
        height: "541"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(898895)/* ["default"] */ .A) + "",
        width: "940",
        height: "541"
      }), " Chọn các loại file sẽ được đồng bộ sang ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPLOAD HANDLING"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(643619)/* ["default"] */ .A) + "",
        width: "940",
        height: "541"
      }), " Cấu hình cơ chế xóa file, nên bật chế độ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete From Storage"
      }), " để tối ưu dung lượng cho bucket. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(616765)/* ["default"] */ .A) + "",
        width: "940",
        height: "541"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi cấu hình thành công các file media được upload lên sau này đều sẽ được lưu trữ vào Bucket của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Smart Cloud"
      }), ". Bạn có thể kiểm tra bằng cách upload thử một ảnh lên và kiểm tra bên ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), ". ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(529471)/* ["default"] */ .A) + "",
        width: "940",
        height: "541"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(873887)/* ["default"] */ .A) + "",
        width: "940",
        height: "541"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Với bản Free các file đã upload lên trước thời điểm cài plugin sẽ không được đồng bộ vào bucket, cần mua Premium để nâng cấp tính năng.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-kết-luận",
      children: "5. Kết luận"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên đây là bài viết giới thiệu và hướng dẫn sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " làm media server lưu trữ và phân phối hình ảnh/video cho web application. Trong quá trình thao tác nếu có vấn đề cần hỗ trợ, hãy liên hệ với chúng tôi theo mục Support để được hỗ trợ tốt nhất."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./xay-dung-mot-website-tinh-bang-fpt-object-storage",
        children: " Next Xây dựng một website tĩnh bằng FPT Object Storage "
      })
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

/***/ 616765
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1c3a846e2cfd-image-1692777521974-57390e4b4157838a5c41e73b85a7904f.png");

/***/ },

/***/ 898895
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22740b1cb243-image-1692777480835-e9440053ff980bbb08ee290c472df9f7.png");

/***/ },

/***/ 35006
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5ed07e14e632-image-1692777159058-c7ca43437fe5dc6528148f1316d79a28.png");

/***/ },

/***/ 643619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8f725818ab5d-image-1692777502204-06a2b171402edf242d3fe7ad33f58b5d.png");

/***/ },

/***/ 873887
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a5082fafaf37-image-1692777569143-329200b738fef1f47a5814cf3e60d4aa.png");

/***/ },

/***/ 88066
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b9da49d5c5e5-image-1692777474055-6f5bdab34b91051d60c2983d3c2cf797.png");

/***/ },

/***/ 529471
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bd798ada5aef-image-1692777559714-d2ca8541d76dab461fe6c4b886e5b3c0.png");

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