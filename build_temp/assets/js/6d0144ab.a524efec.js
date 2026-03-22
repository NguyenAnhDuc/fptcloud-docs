"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[95893],{

/***/ 916906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_object_storage_advanced_tutorials_tich_hop_fpt_object_storage_voi_cac_s_3_client_md_6d0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-object-storage-advanced-tutorials-tich-hop-fpt-object-storage-voi-cac-s-3-client-md-6d0.json
const site_docs_object_storage_advanced_tutorials_tich_hop_fpt_object_storage_voi_cac_s_3_client_md_6d0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"object-storage/advanced/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client","title":"2. FPT Object Storage","description":"Tích hợp FPT Object Storage với các S3-Client","source":"@site/docs/object-storage/advanced/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client.md","sourceDirName":"object-storage/advanced","slug":"/object-storage/advanced/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client","permalink":"/object-storage/advanced/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tutorials Tich Hop Fpt Object Storage Voi Cac S3 Client","title":"2. FPT Object Storage","source":"https://fptcloud.com/documents/object-storage/?doc=tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client","parent":"https://fptcloud.com/documents/object-storage","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Tutorials Su Dung Object Storage Tren S3 Client","permalink":"/object-storage/advanced/tutorials-su-dung-object-storage-tren-s3-client"},"next":{"title":"Use Cases","permalink":"/object-storage/use-cases/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/object-storage/advanced/tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client.md


const frontMatter = {
	sidebar_label: 'Tutorials Tich Hop Fpt Object Storage Voi Cac S3 Client',
	title: '2. FPT Object Storage',
	source: 'https://fptcloud.com/documents/object-storage/?doc=tutorials-tich-hop-fpt-object-storage-voi-cac-s3-client',
	parent: 'https://fptcloud.com/documents/object-storage',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Object Storage';

const assets = {

};



const toc = [{
  "value": "S3CMD (Unix/Linux)",
  "id": "s3cmd-unixlinux",
  "level": 2
}, {
  "value": "A. Cài đặt:",
  "id": "a-cài-đặt",
  "level": 3
}, {
  "value": "B. Cấu hình:",
  "id": "b-cấu-hình",
  "level": 3
}, {
  "value": "Cyberduck (Mac and Windows)",
  "id": "cyberduck-mac-and-windows",
  "level": 2
}, {
  "value": "A. Cài đặt:",
  "id": "a-cài-đặt-1",
  "level": 3
}, {
  "value": "B. Cấu hình:",
  "id": "b-cấu-hình-1",
  "level": 3
}, {
  "value": "AWS CLI (Linux, Mac and Windows)",
  "id": "aws-cli-linux-mac-and-windows",
  "level": 2
}, {
  "value": "A. Cài đặt:",
  "id": "a-cài-đặt-2",
  "level": 3
}, {
  "value": "B. Cấu hình:",
  "id": "b-cấu-hình-2",
  "level": 3
}, {
  "value": "WinSCP (Windows)",
  "id": "winscp-windows",
  "level": 2
}, {
  "value": "A. Cài đặt:",
  "id": "a-cài-đặt-3",
  "level": 3
}, {
  "value": "B. Cấu hình:",
  "id": "b-cấu-hình-3",
  "level": 3
}, {
  "value": "Tool S3sync (FreeBSD, Linux, OpenBSD, MacOS)",
  "id": "tool-s3sync-freebsd-linux-openbsd-macos",
  "level": 2
}, {
  "value": "A. Cài đặt:",
  "id": "a-cài-đặt-4",
  "level": 3
}, {
  "value": "B. Cấu hình:",
  "id": "b-cấu-hình-4",
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
      children: "Tích hợp FPT Object Storage với các S3-Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FPT Object Storage hỗ trợ tích hợp vào các S3-SDK hoặc S3-Client tuân theo chuẩn AWS S3. Điều này cho phép bạn sử dụng các công cụ và thư viện phổ biến để tương tác với dữ liệu trên bucket của mình."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trước khi tích hợp, bạn cần thu thập đủ thông tin xác thực như Endpoint và Access Key từ FPT Object Storage theo hướng dẫn tại phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://fptcloud.com/documents/object-storage/?doc=tutorials-quan-ly-access-key-cua-object-storage-tren-fpt-portal",
          children: "Quản lý Access Key"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s3cmd-unixlinux",
      children: "S3CMD (Unix/Linux)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "S3CMD:"
      }), " Đây là một công cụ dòng lệnh cho Linux/Unix cho phép bạn quản lý dữ liệu trên FPT Object Storage hoặc AWS S3. Bạn có thể tải lên, tải xuống và quản lý các tệp và thư mục."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-cài-đặt",
      children: "A. Cài đặt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CentOS/RHEL:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ sudo yum install s3cmd -y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ubuntu/Debian:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ sudo apt-get install s3cmd\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MacOS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ brew install s3cmd\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các hệ điều hành khác có thể tham khảo tại trang chủ của S3CMD: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://s3tools.org/download",
        children: "https://s3tools.org/download"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-cấu-hình",
      children: "B. Cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Mở terminal và chạy lệnh sau để bắt đầu quá trình cấu hình:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ s3cmd --configure\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Lệnh trên sẽ yêu cầu bạn nhập thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key:"
        }), " Access Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret Key:"
        }), " Secret Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default Region:"
        }), " Lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 Endpoint:"
        }), " Endpoint lấy từ FPT Portal (loại bỏ \"https://\"). Ví dụ: s3-sgn09.fptcloud.com."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DNS-style bucket+hostname:"
        }), " Bỏ trống."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encryption password:"
        }), " Bỏ trống."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Use HTTPS protocol:"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP Proxy server name:"
        }), " Bỏ trống."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi nhập đúng thông tin, S3CMD sẽ tự động lưu các cấu hình này trong tệp cấu hình của nó."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn cũng có thể tạo một tệp cấu hình riêng bằng cách tạo hoặc chỉnh sửa tệp ~/.s3cfg. Dưới đây là một ví dụ về nội dung tệp cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[default]\n\naccess_key = YOUR_ACCESS_KEY\n\nsecret_key = YOUR_SECRET_KEY\n\nbucket_location = YOUR_BUCKET_LOCATION\n\nhost_base = YOUR_S3_ENDPOINT\n\nhost_bucket = YOUR_S3_ENDPOINT\n\nuse_https = True\n\nsignature_v2 = False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Kiểm tra kết nối"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đã cấu hình xong, bạn có thể sử dụng lệnh sau để kiểm tra tình trạng kết nối và hiển thị danh sách các bucket:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ s3cmd ls\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu bạn thấy danh sách bucket được hiển thị, điều này có nghĩa là bạn đã kết nối thành công với FPT Object Storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cyberduck-mac-and-windows",
      children: "Cyberduck (Mac and Windows)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CyberDuck:"
      }), " Đây là một ứng dụng mã nguồn mở có GUI dành cho Mac và Windows, cho phép bạn quản lý tệp trực tiếp trên FPT Object Storage hoặc AWS S3. Nó cung cấp môi trường trực quan hơn cho việc tải lên, tải xuống và quản lý tệp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-cài-đặt-1",
      children: "A. Cài đặt:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập trang chủ của Cyberduck để tải phiên bản phù hợp cho thiết bị của bạn: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cyberduck.io/download",
        children: "https://cyberduck.io/download"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tải xuống, mở tệp cài đặt và làm theo hướng dẫn của ứng dụng để hoàn tất quá trình cài đặt Cyberduck."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-cấu-hình-1",
      children: "B. Cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Mở ứng dụng Cyberduck sau khi cài đặt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhấp vào nút ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Open Connection"
      }), " trên giao diện chính hoặc chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "File"
      }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Open Connection"
      }), " từ menu. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(571131)/* ["default"] */ .A) + "",
        width: "940",
        height: "532"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Một hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Open Connection"
      }), " sẽ xuất hiện. Trong hộp thoại này, nhập các thông tin xác thực như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Amazon S3"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server:"
        }), " Endpoint của FPT Object Storage. Lưu ý bỏ phần https, ví dụ: s3-sgn09.fptcloud.com."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port:"
        }), " 443 (port mặc định cho HTTPS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key ID:"
        }), " Access Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret Key ID:"
        }), " Secret Key lấy từ FPT Portal. ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(353638)/* ["default"] */ .A) + "",
          width: "755",
          height: "662"
        }), " Sau khi đã nhập thông tin xác thực, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect"
        }), " để kết nối."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cyberduck sẽ thực hiện kết nối với FPT Object Storage sử dụng các thông tin xác thực bạn đã cung cấp. Sau khi kết nối thành công, bạn sẽ thấy cấu trúc thư mục trên FPT Object Storage xuất hiện trong cửa sổ Cyberduck. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(56524)/* ["default"] */ .A) + "",
        width: "940",
        height: "532"
      }), " Từ đây, bạn có thể thực hiện các thao tác tải lên, tải xuống và quản lý tệp trực tiếp thông qua giao diện trực quan của Cyberduck."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aws-cli-linux-mac-and-windows",
      children: "AWS CLI (Linux, Mac and Windows)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-cài-đặt-2",
      children: "A. Cài đặt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tải xuống phiên bản mới nhất từ trang web chính thức của AWS CLI hoặc cài đặt thông qua hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux/Unix:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng cURL để tải xuống tệp zip của AWS CLI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ curl \"https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip\" -o \"awscliv2.zip\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Giải nén tệp zip:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ unzip awscliv2.zip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chạy tệp cài đặt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ sudo ./aws/install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mở Command Prompt hoặc PowerShell của Windows."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gõ lệnh sau để tải xuống và cài đặt AWS CLI sử dụng tệp MSI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiếp tục theo hướng dẫn trên màn hình để hoàn tất quá trình cài đặt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-cấu-hình-2",
      children: "B. Cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đã cài đặt, mở Command Prompt, PowerShell hoặc Terminal tùy theo hệ điều hành của bạn."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gõ lệnh sau để bắt đầu quá trình cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aws configure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lần lượt nhập các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key ID:"
        }), " Access Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret Access Key:"
        }), " Secret Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default region name:"
        }), " Default Region lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default output format:"
        }), " Nhập \"json\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S3 Endpoint:"
        }), " Endpoint lấy từ FPT Portal. Lưu ý bỏ phần https, ví dụ: s3-sgn09.fptcloud.com."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi nhập đúng thông tin, AWS CLI sẽ tự động lưu cấu hình này và bạn đã hoàn tất việc cấu hình."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kiểm tra cài đặt và cấu hình:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để kiểm tra xem AWS CLI đã được cài đặt và cấu hình thành công hay chưa, bạn có thể sử dụng lệnh sau để xem phiên bản AWS CLI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "aws --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nếu lệnh trên trả về phiên bản của AWS CLI, điều này chứng tỏ bạn đã cài đặt và cấu hình thành công."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "winscp-windows",
      children: "WinSCP (Windows)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WinSCP là viết tắt của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows Secure Copy Protocol"
      }), " , là một ứng dụng miễn phí trên windows dùng để truyền tải tập tin an toàn giữa máy tính cá nhân và máy chủ từ xa. Nó chủ yếu được sử dụng để quản lý và truyền tải tập tin qua các giao thức như SFTP (Secure File Transfer Protocol), SCP (Secure Copy Protocol), FTP (File Transfer Protocol), AWS S3,… thông qua giao diện dễ sử dụng."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-cài-đặt-3",
      children: "A. Cài đặt:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập trang chính thức của WinSCP để tải xuống và cài đặt phần mềm: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://winscp.net/eng/download.php",
        children: "https://winscp.net/eng/download.php"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tải xuống, mở tệp cài đặt và làm theo hướng dẫn để hoàn tất quá trình cài đặt WinSCP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-cấu-hình-3",
      children: "B. Cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Mở ứng dụng WinSCP sau khi cài đặt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2."
      }), " Nhấp vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Session"
      }), " để bắt đầu thiết lập một phiên kết nối mới. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(673665)/* ["default"] */ .A) + "",
        width: "940",
        height: "276"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3."
      }), " Trong cửa sổ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Login"
      }), " , thực hiện các bước sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File protocol:"
        }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Amazon S3\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Key ID:"
        }), " Access Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret Access Key:"
        }), " Secret Key lấy từ FPT Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host name:"
        }), " Endpoint lấy từ FPT Portal. Lưu ý bỏ phần https, ví dụ: s3-sgn09.fptcloud.com."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port number:"
        }), " 443. ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(766790)/* ["default"] */ .A) + "",
          width: "940",
          height: "635"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 4."
        }), " Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Save"
        }), " để lưu cấu hình và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Login"
        }), " để thực hiện kết nối."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi kết nối thành công, bạn sẽ thấy danh sách bucket trên FPT Object Storage xuất hiện trong cửa sổ WinSCP."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Từ đây, bạn có thể thực hiện các thao tác kéo thả để tải lên, tải xuống và quản lý tệp trực tiếp thông qua giao diện trực quan của WinSCP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tool-s3sync-freebsd-linux-openbsd-macos",
      children: "Tool S3sync (FreeBSD, Linux, OpenBSD, MacOS)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "s3sync là một công cụ mã nguồn mở được phát triển để quản lý và đồng bộ hóa tệp tin giữa máy tính cá nhân hoặc máy chủ với các dịch vụ lưu trữ đám mây sử dụng giao thức S3, chẳng hạn như Amazon S3 của Amazon Web Services, FPT Object Storage của FPT Cloud. Công cụ này cho phép bạn tải lên (upload) và tải xuống (download) các tệp tin cũng như thực hiện các thao tác đồng bộ hóa (sync) giữa các buckets trên các dịch vụ lưu trữ đám mây khác nhau."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-cài-đặt-4",
      children: "A. Cài đặt:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập link của project để tải xuống và cài đặt phần mềm: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/larrabee/s3sync/releases",
        children: "https://github.com/larrabee/s3sync/releases"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tải xuống, giải nén và làm theo hướng dẫn để hoàn tất quá trình cài đặt WinSCP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-cấu-hình-4",
      children: "B. Cấu hình:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn cần truyền thông tin xác thực vào các câu lệnh thực thi để tool có thể hoạt động."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tham số cơ bản:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sk"
        }), " : Access key của nguồn (source)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ss"
        }), " : Secret key của nguồn (source)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "se"
        }), " : Endpoint của nguồn (source)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tk"
        }), " : Access key của đích (target)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ts"
        }), " : Secret key của đích (target)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "te"
        }), " : Endpoint của đích (target)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "w"
        }), " : Số lượng worker được sử dụng để thực hiện việc đồng bộ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sync-progress"
        }), " : Hiển thị quá trình thực hiện đồng bộ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "s3-acl"
        }), " : Quyền của file khi upload (private, public-read, public-read-write). Giá trị mặc định là private."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "disable-http2"
        }), " : Tắt chế độ HTTP2 của client."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ratelimit-objects"
        }), " : RATELIMIT-OBJECTS (Rate limit objects per second)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ratelimit-bandwidth"
        }), " : RATELIMIT-BANDWIDTH (Set bandwidth rate limit, byte/s, Allow suffixes: K, M, G)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các câu lệnh thường dùng:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upload dữ liệu từ local lên FPT Object Storage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./s3sync --tk  --ts  --te \"target endpoint\" -w 64 fs:// s3://  --sync-progress --s3-acl public-read\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Download dữ liệu từ FPT Object Storage về local:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./s3sync --sk  --ss  --se \"source endpoint\" -w 64 s3:// fs://   --sync-progress --disable-http2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Copy dữ liệu từ bucket này sang bucket khác:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./s3sync --sk  --ss  --se \"source endpoint\" --tk  --ts  --te \"target endpoint\" -w 64 s3:// s3:// --sync-progress --s3-acl public-read --disable-http2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đồng bộ dữ liệu từ Amazon S3 về FPT Object Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "./s3sync --sk  --ss  --tk  --ts  --te \"target endpoint\" -w 64 s3:// s3:// --sync-progress --s3-acl public-read --disable-http2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./tutorials-su-dung-object-storage-tren-s3-client",
        children: " Previous Sử dụng Object Storage trên S3 Browser "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./sdk-api-reference",
        children: " Next SDK API Reference "
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

/***/ 766790
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1e029ed5f0c4-image-1692698415054-cc3f893fb9c35baa084297e9fff809e3.png");

/***/ },

/***/ 673665
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/52896479ba5d-image-1692698404134-e5ced87b5a4d2bf628c2355ed1f5a7e7.png");

/***/ },

/***/ 56524
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9866d9f68092-image-1692698365189-5f50dcb094c28c6d480c8fc2893221b2.png");

/***/ },

/***/ 353638
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bab6ef92ccbb-image-1692698347523-9aa92c71931ccd2bc6e7708dacff5832.png");

/***/ },

/***/ 571131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef4d33a6f960-image-1692698326176-f632741e3b14f35d698144b3de520f61.png");

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