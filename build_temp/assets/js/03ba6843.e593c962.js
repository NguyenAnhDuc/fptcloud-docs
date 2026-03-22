"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74370],{

/***/ 79745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_tutorials_bucket_config_md_03b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-tutorials-bucket-config-md-03b.json
const site_docs_object_storage_tutorials_bucket_config_md_03b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/tutorials-bucket-config","title":"2. FPT Object Storage","description":"Bucket Config","source":"@site/docs/object-storage/tutorials-bucket-config.md","sourceDirName":"object-storage","slug":"/object-storage/tutorials-bucket-config","permalink":"/object-storage/tutorials-bucket-config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Tutorials Bucket Config","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-bucket-config","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Su Dung Fpt Object Storage Lam Media Server Luu Tru Va Phan Phoi Media File Cho Websiteweb Application","permalink":"/object-storage/su-dung-fpt-object-storage-lam-media-server-luu-tru-va-phan-phoi-media-file-cho-websiteweb-application"},"next":{"title":"Tutorials Bucket","permalink":"/object-storage/tutorials-bucket"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/tutorials-bucket-config.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Tutorials Bucket Config',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-bucket-config',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "Versioning",
  "id": "versioning",
  "level": 2
}, {
  "value": "Static Website Hosting",
  "id": "static-website-hosting",
  "level": 2
}, {
  "value": "Lifecycle Configurations",
  "id": "lifecycle-configurations",
  "level": 2
}, {
  "value": "A. Tạo Lifecycle Rule mới",
  "id": "a-tạo-lifecycle-rule-mới",
  "level": 3
}, {
  "value": "B. Update Lifecycle Rule",
  "id": "b-update-lifecycle-rule",
  "level": 3
}, {
  "value": "C. Delete Lifecycle Rule",
  "id": "c-delete-lifecycle-rule",
  "level": 3
}, {
  "value": "Cấu hình Bucket CORS",
  "id": "cấu-hình-bucket-cors",
  "level": 2
}, {
  "value": "A. Tạo Bucket CORS Rule mới",
  "id": "a-tạo-bucket-cors-rule-mới",
  "level": 3
}, {
  "value": "B. Update Bucket CORS Rule",
  "id": "b-update-bucket-cors-rule",
  "level": 3
}, {
  "value": "C. Delete Bucket CORS Rule",
  "id": "c-delete-bucket-cors-rule",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "2-fpt-object-storage",
        children: "2. FPT Object Storage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bucket Config"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "versioning",
      children: "Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " là tính năng trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " giúp lưu và quản lý nhiều phiên bản của một object. Khi tính năng này được bật, mỗi lần bạn cập nhật hoặc xóa object, một phiên bản mới sẽ được tạo ra và lưu trữ lại. Điều này cho phép bạn lưu trữ và khôi phục các phiên bản trước đó của object nếu cần thiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để bật tính năng Versioning cho một bucket, bạn thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của bucket cần cấu hình, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable"
      }), " để bật tính năng Versioning hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disable"
      }), " để tắt tính năng này, sau đó nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để lưu các thay đổi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "static-website-hosting",
      children: "Static Website Hosting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static Website Hosting"
      }), " là một tính năng cho phép bạn lưu trữ toàn bộ resource của một trang web tĩnh trên FPT Object Storage. Thay vì chỉ lưu trữ các tệp tin như bình thường, bạn có thể sử dụng bucket để lưu các file HTML, CSS, JavaScript cùng các tài nguyên tĩnh khác và cung cấp nó cho người dùng ở dạng website. Khi kích hoạt Static Website Hosting cho một bucket, FPT Object Storage sẽ cung cấp cho bạn một URL công khai. Bạn có thể sử dụng URL này để truy cập và chia sẻ trang web của mình giống như với các dịch vụ web hosting khác."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static Website Hosting"
      }), " trong FPT Object Storage, thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Upload toàn bộ mã nguồn của trang web lên bucket trong FPT Object Storage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của bucket cần cấu hình, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static Website Hosting"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable Website Hosting"
      }), " và điền các thông số cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Index Document:"
        }), " Tên của trang chủ của website (ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.html"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Document:"
        }), " Tên của trang lỗi (404), sẽ hiển thị nếu người dùng yêu cầu một URL không hợp lệ (ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "404.html"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Truy cập trang web của bạn bằng URL được cung cấp trong phần Endpoints."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lifecycle-configurations",
      children: "Lifecycle Configurations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lifecycle Configurations là tính năng trong FPT Object Storage cho phép bạn tự động quản lý vòng đời của các đối tượng trong bucket. Tính năng này đặc biệt hữu ích cho việc tự động xóa các object sau một thời gian nhất định, giúp tiết kiệm chi phí lưu trữ và quản lý dữ liệu hiệu quả."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " thông thường bao gồm các thành phần sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope (Phạm vi):"
        }), " Xác định các object mà rule sẽ áp dụng. Bạn có thể áp dụng rule cho toàn bộ bucket hoặc chỉ định tiền tố (prefix) để áp dụng cho một nhóm đối tượng cụ thể."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete current versions of objects:"
        }), " Xác định thời điểm khi current version của các object trong phạm vi sẽ bị xóa. Nếu bạn không sử dụng Versioning, việc xóa current version sẽ tương ứng với việc xóa vĩnh viễn object."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permanently delete noncurrent versions of objects:"
        }), " Xác định thời điểm khi non-current version của các object trong phạm vi sẽ bị xóa. Non-current versions chỉ được tạo ra khi sử dụng Versioning, do đó nếu bạn không sử dụng Versioning, phần này có thể không cần thiết."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete incomplete multipart uploads:"
        }), " Xác định thời điểm xóa các multipart uploads chưa hoàn thành. Điều này giúp dọn dẹp các uploads không hoàn chỉnh và giải phóng không gian lưu trữ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete expired object delete markers:"
        }), " Xóa các delete markers đã hết hạn (không còn version nào). Điều này giúp loại bỏ các marker không còn cần thiết, giữ cho bucket của bạn gọn gàng hơn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Configurations"
      }), " giúp bạn quản lý dữ liệu trong bucket một cách tự động, giảm bớt công việc quản lý thủ công và tối ưu hóa chi phí lưu trữ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " sẽ tự động được thực thi theo cách sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quá trình chạy tự động:"
        }), " Rule sẽ được thực thi tự động bằng cách quét toàn bộ các đối tượng trong bucket vào lúc 0h GMT mỗi ngày (07h00 giờ Việt Nam)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hành động thực hiện:"
        }), " Các hành động đã được cấu hình trong rule sẽ được áp dụng đối với các object đáp ứng điều kiện của rule."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Điều này giúp tự động quản lý vòng đời của các đối tượng mà không cần can thiệp thủ công hàng ngày."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-tạo-lifecycle-rule-mới",
      children: "A. Tạo Lifecycle Rule mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Configurations"
      }), " cho một bucket trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , bạn thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config"
      }), " ở bucket cần cấu hình Lifecycle Rule."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Configurations"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Rule"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập thông tin của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " vào các trường tương ứng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule Name:"
        }), " Tên của Rule để dễ nhận diện và quản lý."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule Scope:"
        }), " Phạm vi các đối tượng mà quy tắc sẽ áp dụng. Bạn có thể:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Áp dụng quy tắc cho toàn bộ bucket (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Chỉ định tiền tố (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prefix"
            }), ") để áp dụng cho một nhóm đối tượng cụ thể trong bucket."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiếp theo, bạn có thể cấu hình các hành động khác của Lifecycle Rule như xóa các phiên bản hiện tại, xóa các phiên bản không còn, xóa các multipart uploads chưa hoàn thành, và xóa các delete markers đã hết hạn, tùy thuộc vào nhu cầu của bạn."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete current versions of objects:"
        }), " Chọn số ngày sẽ xóa các current versions của objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Permanently delete noncurrent versions of objects:"
        }), " Chọn số ngày sẽ xóa các noncurrent versions của objects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete incomplete multipart uploads:"
        }), " Chọn số ngày sẽ xóa các incomplete multipart uploads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete expired object delete markers:"
        }), " Chọn số ngày sẽ xóa các expired object delete markers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhấn Save để lưu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , khi tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning"
      }), " đã được bật, việc xóa một đối tượng không dẫn đến việc xóa vĩnh viễn ngay lập tức. Thay vào đó, hệ thống sẽ tạo một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delete marker"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete marker"
      }), " là một thực thể đặc biệt được sử dụng để đánh dấu rằng đối tượng đã bị xóa. Điều này giúp hệ thống theo dõi lịch sử xóa và cho phép khôi phục dữ liệu nếu cần trong tương lai."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi tất cả các phiên bản cũ hơn của đối tượng đã bị xóa và chỉ còn lại delete marker trong danh sách phiên bản, delete marker sẽ chuyển thành ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expired delete markers"
      }), ". Đây là dấu hiệu cho thấy không còn phiên bản nào của đối tượng còn tồn tại trong bucket, và delete marker đã hết hạn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-update-lifecycle-rule",
      children: "B. Update Lifecycle Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cập nhật một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " cần cập nhật, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin cần cập nhật cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " vào các trường tương ứng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hoàn tất việc nhập thông tin, lưu các thay đổi để áp dụng cập nhật."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-delete-lifecycle-rule",
      children: "C. Delete Lifecycle Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle Rule"
      }), " cần xóa, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Một hộp thoại cảnh báo sẽ hiển thị, hiển thị tên rule và yêu cầu bạn xác nhận hành động. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để tiến hành xóa rule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cấu-hình-bucket-cors",
      children: "Cấu hình Bucket CORS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS (Cross-Origin Resource Sharing)"
      }), " cho phép các trang web và ứng dụng từ các nguồn khác nhau tương tác và chia sẻ dữ liệu một cách an toàn."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mặc định, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " sẽ chặn tất cả các yêu cầu từ các origin khác nhau đến bucket của bạn. Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS"
      }), " cho phép một trang web từ một origin cụ thể có thể yêu cầu tài nguyên từ bucket mà không bị chặn bởi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Same-Origin Policy (SOP)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi một trang web hoặc ứng dụng cố gắng truy cập tài nguyên từ FPT Object Storage, trình duyệt sẽ gửi một yêu cầu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Origin (CORS request)"
      }), " đến server FPT Object Storage. Server phải đáp ứng yêu cầu này bằng cách gửi các HTTP headers chứa chính sách CORS. Trình duyệt sau đó kiểm tra các headers này để xác định xem việc truy cập có được phép hay không."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cho phép một origin (website hoặc server) có thể ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GET"
      }), " dữ liệu từ bucket, bạn cần cấu hình chúng trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS Config"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-tạo-bucket-cors-rule-mới",
      children: "A. Tạo Bucket CORS Rule mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để tạo một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS Rule"
      }), " mới cho bucket trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object Storage Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config"
      }), " ở bucket cần cấu hình CORS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS"
      }), " , sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Rule"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Nhập thông tin của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS Rule"
      }), " vào các trường tương ứng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule Name:"
        }), " Tên của Rule. (Ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AllowAllOrigins"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allowed Origins:"
        }), " Nhập danh sách các origin (website hoặc server) được phép thực hiện CORS request. Sử dụng `` để cho phép tất cả các origins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allowed Methods:"
        }), " Chọn một hoặc nhiều phương thức HTTP mà bạn cho phép các origins thực thi. (Ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "POST"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PUT"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max Age Seconds:"
        }), " Nhập thời gian lưu cache cho chính sách CORS trong giây. (Ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3600"
        }), " để lưu cache trong 1 giờ)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced Settings:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Expose Headers:"
            }), " Nhập một hoặc nhiều headers trong phản hồi mà bạn muốn khách hàng có thể truy cập từ ứng dụng của họ. (Ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x-amz-request-id"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Allowed Headers:"
            }), " Nhập các tiêu đề được chỉ định trong ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Access-Control-Request-Headers"
            }), ". (Ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Content-Type"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Authorization"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để áp dụng cấu hình CORS mới cho bucket."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-update-bucket-cors-rule",
      children: "B. Update Bucket CORS Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để cập nhật một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS Rule"
      }), " hiện có trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS Rule"
      }), " cần cập nhật, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập các thông tin cập nhật của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS Rule"
      }), " vào các trường tương ứng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule Name:"
        }), " Cập nhật tên của Rule nếu cần thiết."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allowed Origins:"
        }), " Điều chỉnh danh sách các origins được phép thực hiện CORS request. Sử dụng `` để cho phép tất cả các origins hoặc nhập danh sách cụ thể."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Allowed Methods:"
        }), " Thay đổi một hoặc nhiều phương thức HTTP mà bạn cho phép các origins thực thi."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max Age Seconds:"
        }), " Điều chỉnh thời gian lưu cache cho chính sách CORS trong giây."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced Settings:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Expose Headers:"
            }), " Cập nhật các headers trong phản hồi mà bạn muốn khách hàng có thể truy cập từ ứng dụng của họ."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Allowed Headers:"
            }), " Thay đổi các tiêu đề được chỉ định trong ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Access-Control-Request-Headers"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi thực hiện các thay đổi, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " để áp dụng các cập nhật cho CORS Rule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-delete-bucket-cors-rule",
      children: "C. Delete Bucket CORS Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xóa một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS Rule"
      }), " trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FPT Object Storage"
      }), " , thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket CORS Rule"
      }), " cần xóa, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Một hộp thoại cảnh báo sẽ hiển thị, hiển thị tên của rule và yêu cầu bạn xác nhận hành động. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " để tiến hành xóa rule."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận, rule sẽ bị xóa và các yêu cầu CORS liên quan đến rule đó sẽ không còn được áp dụng."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-permissions",
        children: " Previous Permissions "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-encryption",
        children: " Next Encryption "
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