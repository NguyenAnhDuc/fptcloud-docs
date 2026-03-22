"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[3063],{

/***/ 595620
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_management_db_proxy_md_4e0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-management-db-proxy-md-4e0.json
const site_docs_managed_fpt_database_engines_new_management_db_proxy_md_4e0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/management/db-proxy","title":"2. Managed – FPT Database Engines","description":"DB Proxy","source":"@site/docs/managed-fpt-database-engines-new/management/db-proxy.md","sourceDirName":"managed-fpt-database-engines-new/management","slug":"/managed-fpt-database-engines-new/management/db-proxy","permalink":"/managed-fpt-database-engines-new/management/db-proxy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Db proxy","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-proxy","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Db operation","permalink":"/managed-fpt-database-engines-new/management/db-operation"},"next":{"title":"Db view detail","permalink":"/managed-fpt-database-engines-new/management/db-view-detail"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/management/db-proxy.md


const frontMatter = {
	sidebar_label: 'Db proxy',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-proxy',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "Quyền cần thiết:",
  "id": "quyền-cần-thiết",
  "level": 3
}, {
  "value": "1. Truy cập trang quản lý DB Proxy",
  "id": "1-truy-cập-trang-quản-lý-db-proxy",
  "level": 3
}, {
  "value": "2. Khởi tạo DB Proxy",
  "id": "2-khởi-tạo-db-proxy",
  "level": 3
}, {
  "value": "3. Xem thông tin kết nối",
  "id": "3-xem-thông-tin-kết-nối",
  "level": 3
}, {
  "value": "4. Vận hành DB Proxy",
  "id": "4-vận-hành-db-proxy",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DB Proxy"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Proxy"
      }), " (DB Proxy) là lớp trung gian giữa ứng dụng và máy chủ cơ sở dữ liệu, giúp quản lý và điều phối các kết nối, thực hiện cân bằng tải và chuyển hướng kết nối đến database node phù hợp mà không cần thay đổi mã nguồn ứng dụng hoặc cấu hình database, từ đó nâng cao tính sẵn sàng cao cho hệ thống."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hiện tại, FPT Database Engine ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hỗ trợ DB Proxy cho"
      }), " các loại engine: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL, PostgreSQL, MariaDB"
      }), " và chỉ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "khả dụng khi cơ sở dữ liệu được triển khai theo mô hình High Availability"
      }), " (HA)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trên FPT Cloud Portal, chức năng Quản lý DB Proxy cho phép người dùng:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo và quản lý DB Proxy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theo dõi trạng thái hoạt động của DB Proxy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thực hiện các thao tác vận hành như Start, Stop, Restart, Resize, Delete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Xem chi tiết cấu hình và các node của DB Proxy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quyền-cần-thiết",
      children: "Quyền cần thiết:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tên quyền"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loại thao tác"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:ListProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xem danh sách DB Proxy của cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:CreateProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền tạo DB Proxy cho cơ sở dữ liệu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "manageDatabase:DeleteProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quyền xoá DB Proxy cho cơ sở dữ liệu."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-truy-cập-trang-quản-lý-db-proxy",
      children: "1. Truy cập trang quản lý DB Proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " ” > “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "All Databases"
      }), " ”. Nhấn vào ID của database cluster cần quản lý > chuyển sang tab DB Proxy để truy cập trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý DB Proxy"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(763814)/* ["default"] */ .A) + "",
        width: "2560",
        height: "983"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DB Proxy"
      }), " chỉ hiển thị khi database được tạo với tùy chọn High Availability và database engine được hỗ trợ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-khởi-tạo-db-proxy",
      children: "2. Khởi tạo DB Proxy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý DB Proxy"
      }), " , nhấn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create DB Proxy"
      }), " ”. Hộp thoại tạo DB Proxy mới hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(36279)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1421"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập các thông tin cần thiết:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DB proxy name"
        }), " : Tên định danh cho proxy, độ dài từ 8–25 ký tự, chỉ bao gồm chữ cái, số và dấu gạch ngang (-)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DB proxy type"
        }), " : Chọn loại proxy. Hiện tại FPT Database Engine mới chỉ hỗ trợ một loại là HAProxy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage Policy"
        }), " : Chọn Storage Policy xác định hiệu năng lưu trữ (IOPS) cho proxy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High Availability"
        }), " : Bật để triển khai DB proxy theo mô hình HA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flavor"
        }), " : Chọn cấu hình tài nguyên (vCPU, RAM) cho DB proxy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create DB Proxy"
      }), " để xác nhận khởi tạo. Hệ thống sẽ kiểm tra tài nguyên, hiển thị thông báo khởi tạo và bắt đầu quá trình triển khai proxy mới dựa trên cấu hình đã nhập. Trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý DB Proxy"
      }), " sẽ hiển thị proxy vừa tạo ở trạng thái “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Processing"
      }), " ” ở đầu danh sách."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quá trình khởi tạo thường kéo dài 5–7 phút. Khi hoàn tất, proxy sẽ chuyển sang trạng thái “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running"
      }), " ” và sẵn sàng để sử dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Nếu quá trình khởi tạo thất bại, vui lòng xóa proxy bị lỗi và thực hiện khởi tạo lại."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-xem-thông-tin-kết-nối",
      children: "3. Xem thông tin kết nối"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để xem thông tin kết nối tới proxy, thực hiện truy cập trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý DB Proxy"
      }), " , sau đó chọn ID của proxy để mở hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DB Proxy Detail"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594263)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1423"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running"
      }), " cho biết DB Proxy đang hoạt động và sẵn sàng tiếp nhận kết nối. Sử dụng thông tin trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "End Point"
      }), " để thiết lập kết nối đến proxy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-vận-hành-db-proxy",
      children: "4. Vận hành DB Proxy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể thực hiện các thao tác start, stop, restart, resize và delete phù hợp với trạng thái vòng đời của proxy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thao tác vận hành:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start"
        }), " : Khởi động DB Proxy khi đang ở trạng thái Stop. Khi thao tác được thực hiện, trạng thái của proxy chuyển sang “Starting” và sau đó là “Running” khi sẵn sàng phục vụ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stop"
        }), " : Dừng hoạt động DB Proxy đang chạy. Khi dừng, proxy sẽ tạm ngưng xử lý workload. Trạng thái chuyển sang “Stopping” và sau đó là “Stopped”. Ở trạng thái này, các kết nối qua proxy sẽ bị gián đoạn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart"
        }), " : khởi động lại một proxy đang chạy. Thao tác này sẽ dừng và khởi động lại proxy, thường được sử dụng để khắc phục sự cố tạm thời. Trạng thái hiển thị “Restarting” và quay lại “Running” khi hoàn tất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resize"
        }), " : Thay đổi cấu hình tài nguyên (Flavor) của DB Proxy. Khi resize, trạng thái chuyển sang “Resizing” và sau đó là “Running”."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " : xoá một DB Proxy. Hành động này không thể hoàn tác. Sau khi xóa thành công, proxy sẽ bị loại bỏ khỏi danh sách và các tài nguyên liên quan được giải phóng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trạng thái và khả năng thao tác:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trạng thái"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ý nghĩa"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Các thao tác được thực hiện"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy đang được khởi tạo."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy đang hoạt động bình thường."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop, Restart, Resize, Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stopped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy đã dừng hoạt động."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start, Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resizing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy đang được điều chỉnh tài nguyên."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proxy gặp lỗi không xác định. Nếu không còn sử dụng, hãy xóa proxy để dọn dẹp tài nguyên, hoặc liên hệ FPT Support để được hỗ trợ xử lý."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thực hiện thao tác vận hành:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để thực hiện các thao tác vận hành, mở trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý DB Proxy"
      }), " , sau đó chọn biểu tượng “⋯” (More actions) trong cột “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " ” của proxy cần thao tác. Danh sách các hành động khả dụng sẽ được hiển thị:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(409633)/* ["default"] */ .A) + "",
        width: "2560",
        height: "949"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi chọn một hành động, hệ thống sẽ hiển thị hộp thoại xác nhận. Bạn cần xác nhận thủ công để tiếp tục, nhằm tránh thực hiện các thao tác không mong muốn, đặc biệt với các hành động không thể hoàn tác."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi xác nhận, hệ thống sẽ thực hiện hành động trong khoảng 5–7 phút. Trong thời gian này, các thao tác khác đối với proxy sẽ tạm thời bị vô hiệu hóa cho đến khi quá trình hoàn tất."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Restart"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resize"
      }), " DB Proxy trong khung thời gian thấp điểm để giảm ảnh hưởng đến ứng dụng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./kafka-user",
        children: " Previous Apache Kafka - Quản lý Kafka ACL "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./vertical-scaling",
        children: " Next Vertical Scaling "
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

/***/ 594263
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1adf11c41ba4-view-db-proxy-scaled-8dbccad457e4c00840319a582e4fdfb7.png");

/***/ },

/***/ 409633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/af6165d795f8-db-proxy-action-scaled-a52f3b673fd48ebeef95d95a9ff16113.png");

/***/ },

/***/ 36279
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/edd86c55b1b9-create-db-proxy-scaled-6743c39d76f17a7ad780555a6d3baba2.png");

/***/ },

/***/ 763814
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ef82702b9970-db-proxy-list-scaled-21ac9c843a6861427780ff3f2be06d99.png");

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