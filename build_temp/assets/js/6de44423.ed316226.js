"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45527],{

/***/ 581331
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_load_balancer_initial_khoi_tao_load_balancer_md_6de_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-load-balancer-initial-khoi-tao-load-balancer-md-6de.json
const site_docs_load_balancer_initial_khoi_tao_load_balancer_md_6de_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"load-balancer/initial/khoi-tao-load-balancer","title":"Khởi tạo Load Balancer","description":"*","source":"@site/docs/load-balancer/initial/khoi-tao-load-balancer.md","sourceDirName":"load-balancer/initial","slug":"/load-balancer/initial/khoi-tao-load-balancer","permalink":"/load-balancer/initial/khoi-tao-load-balancer","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khởi tạo Load Balancer","title":"Khởi tạo Load Balancer","source":"https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-load-balancer","parent":"https://fptcloud.com/documents/load-balancer","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Load Balancer","permalink":"/load-balancer/initial/initial-setup"},"next":{"title":"Load Balancer","permalink":"/load-balancer/initial/khoi-tao-mot-load-balancer-moi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/load-balancer/initial/khoi-tao-load-balancer.md


const frontMatter = {
	sidebar_label: 'Khởi tạo Load Balancer',
	title: 'Khởi tạo Load Balancer',
	source: 'https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-load-balancer',
	parent: 'https://fptcloud.com/documents/load-balancer',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Khởi tạo Load Balancer';

const assets = {

};



const toc = [{
  "value": "1. Thông tin Load Balancer",
  "id": "1-thông-tin-load-balancer",
  "level": 4
}, {
  "value": "2. Cấu hình Listener",
  "id": "2-cấu-hình-listener",
  "level": 4
}, {
  "value": "3. Cấu hình Server pool",
  "id": "3-cấu-hình-server-pool",
  "level": 4
}, {
  "value": "4. Recommended alarm",
  "id": "4-recommended-alarm",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h4: "h4",
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
        id: "khởi-tạo-load-balancer",
        children: "Khởi tạo Load Balancer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer > Load Balancer"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Load Balancer"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Nhập thông tin cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " tại màn tạo mới"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để khởi tạo 1 Load Balancer, hệ thống sẽ mặc định tạo 1 Listener và 1 Server pool mặc định cho người dùng dựa trên phần cấu hình được chọn khi khởi tạo, bao gồm các thông tin sau"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-thông-tin-load-balancer",
      children: "1. Thông tin Load Balancer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhập tên Load Balancer để dễ dàng quản lý, tên có thể thay đổi trong quá trình sử dụng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn gói Load Balancer phù hợp với nhu cầu sử dụng của bạn. FPT Cloud cung cấp 4 loại với cam kết khả dụng 24/7 (High Availability): Basic-1,Basic-2, Standard, Advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn IP public cho Load Balancer nếu bạn muốn truy cập từ ngoài internet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn subnet/nhập CIDR cho Load Balancer theo quy hoạch của người dùng. Nếu không có nhu cầu quy hoạch đặc biệt, hệ thống sẽ chọn 1 subnet bất kỳ sẵn có của VPC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IP Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhập IP Private chỉ định cụ thể của Load balancer. Yêu cầu nhập 1 IP thuộc subnet/CIDR đã chọn. Nếu không có nhu cầu quy hoạch đặc biệt, hệ thống sẽ chọn 1 IP bất kỳ thuộc subnet/CIDR trên"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Lưu ý: Với Load Balancer v2.0, người dùng không cần tạo security group cho Load Balancer khi đính IP Public. Hệ thống tự động mở firewall theo rule đã cấu hình cho Listener.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-cấu-hình-listener",
      children: "2. Cấu hình Listener"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Listener name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhập tên Listener để dễ dàng quản lý, tên có thể thay đổi trong quá trình sử dụng"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn giao thức mà Listener nhận request và điều phối"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chọn Port mà Listener điều phối request tới"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-cấu-hình-server-pool",
      children: "3. Cấu hình Server pool"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nhập tên"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Add server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thêm member cho pool, có thể chọn từ các máy chủ ảo trên FPT Cloud (thuộc VPC) hoặc member là các máy chủ bên ngoài"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port nhận request của member"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trọng số của member trong Server pool giúp Load Balancer phân phối request. Nhập bắt đầu từ 1, mặc định là 1 nếu các member có khả năng xử lý request như nhau"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thuật toán phân phối request trong server pool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sticky session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sử dụng sticky session để đảm bảo các request tiếp theo từ cùng một client sẽ được định tuyến đến cùng một server để duy trì dữ liệu phiên làm việc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcheck configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cấu hình cách LB health check các member của nó. Hệ thống đã có cấu hình mặc định khi tạo LB, người dùng có thể bỏ qua nếu không có nhu cầu health check đặc biệt"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập và kiểm tra đầy đủ thông tin, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " để khởi tạo"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Kiểm tra trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Load Balancer"
      }), " đã khởi tạo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi hoàn tất khởi tạo, hệ thống sẽ điều hướng người dùng đến trang danh sách Load Balancer, tại đây có thể theo dõi trạng thái LB. Mỗi Load Balancer, Listener, Server pool, Member được tạo ra đều có các trạng thái của mình, bao gồm:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Đối tượng"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Provisioning status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operating status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Balancer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Active"
            }), " : Đã khởi tạo thành công"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Creating"
            }), " : Đang khởi tạo"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Updating"
            }), " : Đang cập nhật"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deleting"
            }), " : Đang xóa"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pending"
            }), " : Có lỗi xảy ra trong quá trình khởi tạo. Thông báo customer support để được hỗ trợ"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Healthy"
            }), " : Tất cả server pool/member của nó đang healthy (khả dụng để nhận request). Load balancer hoạt động bình thường"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unhealthy"
            }), " : Có ít nhất 1 member thuộc Load Balancer đang unhealthy (không khả dụng để nhận request)"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Offline"
            }), " : Tất cả member thuộc Load Balancer đang unhealthy"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No healthcheck"
            }), " : Không có cấu hình healthcheck cho load balancer hoặc cấu hình lỗi. Thông báo Customer Support để được hỗ trợ"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tương tự Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tương tự Load Balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tương tự Load Balancer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Healthy"
            }), " : Member đang khả dụng để nhận request"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unhealthy"
            }), " : Member không khả dụng"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-recommended-alarm",
      children: "4. Recommended alarm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi khởi tạo LB, hệ thống tự động gợi ý tạo kèm 2 cảnh báo quan trọng nhằm nhận biết quá tải LB trong quá trình sử dụng bao gồm:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cảnh báo số packet/s bị drop khi qua LB vượt ngưỡng an toàn (>50 pps)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cảnh báo số active connection đồng thời qua LB vượt ngưỡng gợi ý của gói"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Người dùng sẽ cần chọn người nhận cảnh báo (Recipient) hoặc tạo mới nếu chưa có (hỗ trợ các phương thức Email, Telegram, Slack, Teams)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các cảnh báo được gợi ý tích hợp với dịch vụ Cloud Guard để tạo cảnh báo, như hình sau: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(144920)/* ["default"] */ .A) + "",
        width: "1906",
        height: "948"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể thêm bớt hoặc chỉnh sửa cảnh báo tùy vào nhu cầu sử dụng. Tài liệu chi tiết về cảnh báo Cloud Guard cho Load Balancer xem tại đây ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-load-balancer",
        children: "Khởi tạo cảnh báo cho Load Balancer"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Lưu ý: Khởi tạo Load Balancer có thể mất 1 lúc, người dùng vui lòng chờ đến khi LB active rồi mới tiếp tục thao tác.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-load-balancer",
        children: " Previous Quản lý Load Balancer "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./cap-nhat-load-balancer",
        children: " Next Update Load Balancer "
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

/***/ 144920
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a8f82152ce08-image-1767670460483-7fa10a5c5217b0f441d3d15960a505c7.png");

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