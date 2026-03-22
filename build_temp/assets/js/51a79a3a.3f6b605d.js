"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[3331],{

/***/ 492063
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_fpt_data_platform_quan_ly_image_cua_compute_md_51a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-fpt-data-platform-quan-ly-image-cua-compute-md-51a.json
const site_docs_fpt_data_platform_quan_ly_image_cua_compute_md_51a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fpt-data-platform/quan-ly-image-cua-compute","title":"2. FPT Data Platform","description":"Quản lý Image của Compute","source":"@site/docs/fpt-data-platform/quan-ly-image-cua-compute.md","sourceDirName":"fpt-data-platform","slug":"/fpt-data-platform/quan-ly-image-cua-compute","permalink":"/fpt-data-platform/quan-ly-image-cua-compute","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan ly image cua compute","title":"2. FPT Data Platform","source":"https://fptcloud.com/documents/fpt-data-platform/?doc=quan-ly-image-cua-compute","parent":"https://fptcloud.com/documents/fpt-data-platform","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quan ly connectors","permalink":"/fpt-data-platform/quan-ly-connectors"},"next":{"title":"Quan ly policies","permalink":"/fpt-data-platform/quan-ly-policies"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/fpt-data-platform/quan-ly-image-cua-compute.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan ly image cua compute',
	title: '2. FPT Data Platform',
	source: 'https://fptcloud.com/documents/fpt-data-platform/?doc=quan-ly-image-cua-compute',
	parent: 'https://fptcloud.com/documents/fpt-data-platform',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. FPT Data Platform';

const assets = {

};



const toc = [{
  "value": "1. Xem danh sách Image của Compute",
  "id": "1-xem-danh-sách-image-của-compute",
  "level": 3
}, {
  "value": "2. Thêm Image mới",
  "id": "2-thêm-image-mới",
  "level": 3
}, {
  "value": "Thêm Image từ Public Registry (không cần authentication)",
  "id": "thêm-image-từ-public-registry-không-cần-authentication",
  "level": 4
}, {
  "value": "Thêm Image từ Private Registry (có authentication)",
  "id": "thêm-image-từ-private-registry-có-authentication",
  "level": 4
}, {
  "value": "3. Cập nhật Image",
  "id": "3-cập-nhật-image",
  "level": 3
}, {
  "value": "4. Retry Image",
  "id": "4-retry-image",
  "level": 3
}, {
  "value": "5. Xóa Image",
  "id": "5-xóa-image",
  "level": 3
}, {
  "value": "6. Xem Log của Image",
  "id": "6-xem-log-của-image",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
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
        id: "2-fpt-data-platform",
        children: "2. FPT Data Platform"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý Image của Compute"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prepulling Image"
      }), " cho phép người dùng quản lý các Docker image được pull về workspace từ các registry khác nhau. Việc prepull image giúp tối ưu thời gian khởi động các container và đảm bảo image sẵn sàng sử dụng khi cần thiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lợi ích:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Giảm thời gian khởi động container"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quản lý tập trung các image cần thiết cho compute"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hỗ trợ cả public và private registry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theo dõi trạng thái pull image realtime"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Giới hạn:"
      }), " Mỗi Processing Service tối đa được tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 compute"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-xem-danh-sách-image-của-compute",
      children: "1. Xem danh sách Image của Compute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để xem danh sách các image đã được prepull về compute, người dùng thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing services"
      }), " > chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào compute muốn xem danh sách image"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Images"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(987637)/* ["default"] */ .A) + "",
        width: "1244",
        height: "429"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      }), " Hiển thị danh sách các image đã được thêm vào compute với các thông tin:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Tên định danh của image"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "URL"
        }), " : Đường dẫn đầy đủ đến image registry", (0,jsx_runtime.jsx)(_components.br, {}), "\n(ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docker.io/nvidia/cuda:13.1.0-devel-ubuntu24.04"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status"
        }), " : Trạng thái hiện tại của image\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Ready"
            }), " : Image đã sẵn sàng sử dụng"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Progressing"
            }), " : Đang trong quá trình pull image"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Processing"
            }), " : Đang xử lý"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Failed"
            }), " : Pull image thất bại"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Degraded"
            }), " : Image có vấn đề (có icon để xem log chi tiết)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unknown"
            }), " : Trạng thái không xác định"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions"
        }), " : Menu thao tác với image (Update, Retry, Delete)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý:"
      }), " Nếu chưa có image nào, màn hình sẽ hiển thị thông báo \"No image yet\" với button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để thêm image mới."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-thêm-image-mới",
      children: "2. Thêm Image mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "thêm-image-từ-public-registry-không-cần-authentication",
      children: "Thêm Image từ Public Registry (không cần authentication)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Images"
      }), " của Compute, click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(793595)/* ["default"] */ .A) + "",
        width: "1280",
        height: "611"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Trong popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Image"
      }), " , nhập các thông tin:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Tên định danh cho image (bắt buộc)\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Chỉ chấp nhận chữ cái, số và dấu gạch ngang (-)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tối đa 30 ký tự"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nginx-latest"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cuda-13-1-0"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "URL"
        }), " : Đường dẫn đến image (bắt buộc)\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Format: registry/repository/image-name:tag"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ví dụ: docker.io/library/nginx:latest"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ví dụ: hub.fci.vn/images/image-name:1.0.3"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Đảm bảo checkbox ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable authentication"
      }), " không được chọn (dành cho public image)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối đến registry"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu thành công: Hiển thị thông báo \"Success - Test connection successfully\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu thất bại: Hiển thị thông báo lỗi chi tiết"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Sau khi test connection thành công, button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " sẽ được enable"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hiển thị thông báo \"Success - Add successfully\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Image mới xuất hiện trong danh sách với trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Progressing"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sau khi pull hoàn tất, trạng thái chuyển sang ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Ready"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "thêm-image-từ-private-registry-có-authentication",
      children: "Thêm Image từ Private Registry (có authentication)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Images"
      }), " của Compute, click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(488772)/* ["default"] */ .A) + "",
        width: "1059",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Trong popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Image"
      }), " , nhập các thông tin:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Tên định danh cho image"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "URL"
        }), " : Đường dẫn đến private image"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Check vào checkbox ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable authentication"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhập thông tin xác thực:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " : Tên người dùng hoặc service account (bắt buộc)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret"
        }), " : Access token hoặc password (bắt buộc)\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Click icon view để hiển thị/ẩn mật khẩu"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra kết nối"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Sau khi test connection thành công, click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      }), " Image được thêm vào danh sách và bắt đầu quá trình pull với authentication đã cung cấp."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-cập-nhật-image",
      children: "3. Cập nhật Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể cập nhật thông tin của image đã tồn tại (tên, URL, authentication). Khi cập nhật, hệ thống sẽ tự động pull lại image với thông tin mới."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại danh sách Images, click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "⋮"
      }), " (3 chấm dọc) ở cột ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), " của image muốn cập nhật"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update"
      }), " từ menu dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trong popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Image"
      }), " , các field sẽ hiển thị thông tin hiện tại của image"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(702432)/* ["default"] */ .A) + "",
        width: "1119",
        height: "510"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Chỉnh sửa các thông tin cần thiết:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thay đổi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " (tuân thủ quy tắc: chữ, số, dấu gạch ngang, max 30 ký tự)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thay đổi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "URL"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable/Disable ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "authentication"
        }), " :\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nếu enable: Nhập Username và Secret mới"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nếu disable: Xóa authentication (dùng cho public image)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test connection"
      }), " để kiểm tra cấu hình mới"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Sau khi test thành công, click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-retry-image",
      children: "4. Retry Image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi image có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failed"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Degraded"
      }), " , người dùng có thể thực hiện retry để pull lại image."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại danh sách Images, click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "⋮"
      }), " của image có trạng thái Failed/Degraded"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry"
      }), " từ menu dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trong popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Retry compute image"
      }), " , xác nhận thông tin:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(308858)/* ["default"] */ .A) + "",
        width: "876",
        height: "227"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " để xác nhận retry"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-xóa-image",
      children: "5. Xóa Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng có thể xóa image không còn sử dụng khỏi compute."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại danh sách Images, click vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "⋮"
      }), " của image muốn xóa"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete"
      }), " (màu đỏ) từ menu dropdown"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Trong popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete compute image"
      }), " , đọc cảnh báo:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Alt text",
        src: (__webpack_require__(930588)/* ["default"] */ .A) + "",
        width: "997",
        height: "316"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Để xác nhận xóa, nhập chính xác text ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delete"
      }), " (viết thường) vào ô input"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      }), " sẽ được enable sau khi nhập đúng"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6:"
      }), " Click button ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-xem-log-của-image",
      children: "6. Xem Log của Image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi image có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Degraded"
      }), " , người dùng có thể xem log chi tiết để troubleshoot vấn đề."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại danh sách Images, tìm image có trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Degraded"
      }), " (có icon bên cạnh)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Click vào icon **** (information)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Popup ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logs"
      }), " sẽ hiển thị với nội dung log chi tiết"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ví dụ log:"
      }), " ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["[2020-07-07 15:04:29,334] DEBUG Progress event:", (0,jsx_runtime.jsx)(_components.br, {}), "\nTRANSFER_PART_COMPLETED_EVENT, bytes: 0", (0,jsx_runtime.jsx)(_components.br, {}), "\n(io.confluent.connect.s3.storage.S3OutputStream:286)"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Đọc và phân tích log để xác định nguyên nhân lỗi"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Click icon X để đóng popup log"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      }), " Popup đóng lại, quay về màn hình danh sách Images"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-compute",
        children: " Previous Quản lý Compute "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./open-metadata",
        children: " Next Open Metadata "
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

/***/ 793595
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/128edc9f66c5-12-c621cced6bba4d20dbca03be62c77cdf.jpg");

/***/ },

/***/ 488772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2abfacdd510a-13-bdd8962587f4e775eaa1e57c16c093c4.jpg");

/***/ },

/***/ 930588
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/30cc095a4a4f-16-ad1dd9e20819915b6dd83769d5655971.jpg");

/***/ },

/***/ 308858
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ },

/***/ 987637
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/98c7588c826d-11-78081fd2ad2a31aa86fa54798199c0ad.jpg");

/***/ },

/***/ 702432
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a7b98429ab2f-14-ed1c993fc4ecb84069b71fc4fca0eb55.jpg");

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