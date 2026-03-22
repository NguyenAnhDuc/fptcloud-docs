"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[50489],{

/***/ 892144
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_file_storage_high_performance_quan_ly_mountpoint_md_aaa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-file-storage-high-performance-quan-ly-mountpoint-md-aaa.json
const site_docs_file_storage_high_performance_quan_ly_mountpoint_md_aaa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"file-storage-high-performance/quan-ly-mountpoint","title":"2. File Storage – High Performance","description":"Quản lý MountPoint","source":"@site/docs/file-storage-high-performance/quan-ly-mountpoint.md","sourceDirName":"file-storage-high-performance","slug":"/file-storage-high-performance/quan-ly-mountpoint","permalink":"/file-storage-high-performance/quan-ly-mountpoint","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Quan Ly Mountpoint","title":"2. File Storage – High Performance","source":"https://fptcloud.com/documents/file-storage-high-performance/?doc=quan-ly-mountpoint","parent":"https://fptcloud.com/documents/file-storage-high-performance","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Japan Su Dung File Storage High Performance Tren Baremetal Gpu Server","permalink":"/file-storage-high-performance/japan-su-dung-file-storage-high-performance-tren-baremetal-gpu-server"},"next":{"title":"Region Nhat Ban","permalink":"/file-storage-high-performance/region-nhat-ban"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/file-storage-high-performance/quan-ly-mountpoint.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Quan Ly Mountpoint',
	title: '2. File Storage – High Performance',
	source: 'https://fptcloud.com/documents/file-storage-high-performance/?doc=quan-ly-mountpoint',
	parent: 'https://fptcloud.com/documents/file-storage-high-performance',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. File Storage – High Performance';

const assets = {

};



const toc = [{
  "value": "<strong>1. Tổng quan Mount Point</strong>",
  "id": "1-tổng-quan-mount-point",
  "level": 2
}, {
  "value": "<strong>Mount Point là gì?</strong>",
  "id": "mount-point-là-gì",
  "level": 3
}, {
  "value": "<strong>Vai trò của Mount Point</strong>",
  "id": "vai-trò-của-mount-point",
  "level": 3
}, {
  "value": "<strong>Cấu trúc Mount Point</strong>",
  "id": "cấu-trúc-mount-point",
  "level": 3
}, {
  "value": "<strong>2. Tạo Mount Point</strong>",
  "id": "2-tạo-mount-point",
  "level": 2
}, {
  "value": "<strong>Nguyên tắc quan trọng</strong>",
  "id": "nguyên-tắc-quan-trọng",
  "level": 3
}, {
  "value": "<strong>Các bước tạo Mount Point trên Unify Portal</strong>",
  "id": "các-bước-tạo-mount-point-trên-unify-portal",
  "level": 3
}, {
  "value": "<strong>Kết quả</strong>",
  "id": "kết-quả",
  "level": 3
}, {
  "value": "<strong>3. Xóa Mount Point</strong>",
  "id": "3-xóa-mount-point",
  "level": 2
}, {
  "value": "<strong>Cách thực hiện</strong>",
  "id": "cách-thực-hiện",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "2-file-storage--high-performance",
        children: "2. File Storage – High Performance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quản lý MountPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tổng-quan-mount-point",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Tổng quan Mount Point"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mount-point-là-gì",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mount Point là gì?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong hệ thống FPT File Storage – High Performance, Mount Point là một điểm truy cập logic cho phép người dùng kết nối đến một thư mục cụ thể (path) trong pool lưu trữ."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để mount dữ liệu từ server Bare Metal, bạn cần tạo một Mount Point với các thông tin cấu hình gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path"
        }), " : Đường dẫn thư mục cụ thể trên hệ thống lưu trữ mà bạn muốn truy cập."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Giao thức truy cập"
        }), " : Ví dụ như NFSv3 hoặc NFSv4."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Subnet truy cập"
        }), " : Chỉ các máy chủ thuộc subnet được chỉ định mới được phép mount. Nếu máy chủ không nằm trong danh sách subnet này, yêu cầu mount sẽ bị từ chối."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vai-trò-của-mount-point",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vai trò của Mount Point"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Thành phần"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vai trò"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mount Point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Điểm truy cập từ mạng nội bộ vào file storage thông qua NFSv3/NFSv4/S3."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Client (máy chủ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mount dữ liệu từ file storage, hiển thị như ổ đĩa nội bộ."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Backend (VAST)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hạ tầng lưu trữ."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QoS Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gắn với mount point để giới hạn IOPS, throughput…"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cấu-trúc-mount-point",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cấu trúc Mount Point"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trường"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mô tả"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên hiển thị trong portal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Đường dẫn thực tế, ví dụ: /ml-data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Giao thức: NFSv3 hoặc NFSv4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dải mạng CIDR được phép truy cập"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint Range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endpoint kết nối"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QoS Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chính sách kiểm soát hiệu năng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFS Alias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path Alias sẽ hiển thị trong OS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mối quan hệ với các thành phần khác"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC & Subnet"
        }), ": Mount Point có thể gán với nhiều subnet khác nhau trong cùng/khác VPC. Chỉ máy chủ trong subnet được gán mới truy cập được."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QoS Policy"
        }), " : Giới hạn hiệu năng thông qua:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Max Throughput (MB/s)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Max IOPS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Burst Limit"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NFS Protocol"
        }), " : Hỗ trợ TCP và RDMA. Đặc biệt:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TCP"
            }), " : Phổ biến, dễ dùng."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RDMA"
            }), " : Hiệu năng cao, latency thấp."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-Path RDMA"
            }), " : Cho workload lớn, kết nối song song."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tạo-mount-point",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Tạo Mount Point"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nguyên-tắc-quan-trọng",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nguyên tắc quan trọng"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gắn với subnet cụ thể"
        }), " : Chỉ máy chủ thuộc subnet được gán mới có thể mount."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Không tạo tại root path (\"/\")"
        }), " : Chỉ tạo tại các thư mục con, ví dụ: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/project-a"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/team1/data"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Một path – một mount point"
        }), " : Không được trùng lặp."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Không giới hạn số lượng mount point"
        }), " : Miễn là path không trùng nhau."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NFSv4 yêu cầu full path export"
        }), " : Mọi thư mục cha trong path cũng phải được export."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Ví dụ: mount /project-a/team1/data bằng NFSv4 thì /project-a và /project-a/team1 cũng cần export."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-bước-tạo-mount-point-trên-unify-portal",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các bước tạo Mount Point trên Unify Portal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MountPoint"
        }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create MountPoint"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Điền thông tin:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Region"
            }), " : Chọn khu vực sử dụng."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "VPC / Subnet"
            }), " : Chọn subnet chứa server GPU."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tên Mount Point"
            }), " : 3–63 ký tự, chữ/số/“_”, không bắt đầu/kết thúc bằng dấu đặc biệt."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol"
            }), " : NFSv3 hoặc NFSv4.\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Nếu NFSv3: Có thể thêm NFS Alias."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Nếu NFSv4: Đảm bảo ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "tất cả thư mục cha trong path cũng dùng NFSv4"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Path"
            }), " : Bắt đầu bằng \"/\", không kết thúc bằng \"/\" hoặc khoảng trắng, không trùng path khác."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tùy chọn"
            }), " : Tick \"Tạo thư mục mới\" nếu path chưa tồn tại."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "QoS Policy"
            }), " : Chọn sẵn hoặc tạo mới."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create"
        }), " để hoàn tất."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kết-quả",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thành công"
        }), " : Mount Point hiển thị trên portal, có thể mount từ các máy chủ thuộc subnet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thất bại"
        }), " : Hiển thị lỗi – cần kiểm tra lại thông tin đã khai báo."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-xóa-mount-point",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Xóa Mount Point"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể xoá Mount Point khi không còn sử dụng, nhằm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thu hồi quyền truy cập."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ngắt kết nối an toàn giữa máy chủ và hệ thống lưu trữ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phục vụ tái cấu hình hoặc thay đổi hạ tầng mạng."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cách-thực-hiện",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cách thực hiện"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập tab ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource"
        }), " trên Unify Portal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại Mount Point muốn xoá, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Action > Delete"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xác nhận thao tác khi được hỏi."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠️ Lưu ý:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Đảm bảo các ứng dụng đã unmount trước khi xoá."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Xóa Mount Point không xoá dữ liệu"
          }), " trong thư mục được gán path."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./region-viet-nam",
        children: " Previous Region Việt Nam "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./vn-su-dung-file-storage-high-performance-tren-baremetal-gpu-server",
        children: " Next Sử dụng File Storage - High Performance trên Baremetal (GPU Server) "
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