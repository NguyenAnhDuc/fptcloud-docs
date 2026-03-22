"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[65053],{

/***/ 995542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_user_access_kafka_user_md_120_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-user-access-kafka-user-md-120.json
const site_docs_managed_fpt_database_engines_new_user_access_kafka_user_md_120_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/user-access/kafka-user","title":"2. Managed – FPT Database Engines","description":"Apache Kafka - Quản lý Kafka ACL","source":"@site/docs/managed-fpt-database-engines-new/user-access/kafka-user.md","sourceDirName":"managed-fpt-database-engines-new/user-access","slug":"/managed-fpt-database-engines-new/user-access/kafka-user","permalink":"/managed-fpt-database-engines-new/user-access/kafka-user","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Kafka user","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=kafka-user","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Iam","permalink":"/managed-fpt-database-engines-new/user-access/iam"},"next":{"title":"Managed – FPT Database Engines","permalink":"/managed-fpt-database-engines-new/user-access/mysql-troubleshooting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/user-access/kafka-user.md


const frontMatter = {
	sidebar_label: 'Kafka user',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=kafka-user',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Tạo Kafka user mới",
  "id": "1-tạo-kafka-user-mới",
  "level": 3
}, {
  "value": "Bước 1: Truy cập trang Quản lý Kafka user",
  "id": "bước-1-truy-cập-trang-quản-lý-kafka-user",
  "level": 4
}, {
  "value": "Bước 2: Tạo Kafka user mới",
  "id": "bước-2-tạo-kafka-user-mới",
  "level": 4
}, {
  "value": "2. Phân quyền cho Kafka user",
  "id": "2-phân-quyền-cho-kafka-user",
  "level": 3
}, {
  "value": "Best Practices:",
  "id": "best-practices",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache Kafka - Quản lý Kafka ACL"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka user cho phép các ứng dụng và dịch vụ xác thực vào Kafka cluster thông qua các cơ chế SASL. Kafka user được quản lý ở cấp độ cụm trong FPT Database Engine và thường được sử dụng bởi producer, consumer và Kafka Connect."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý Kafka user"
      }), " là tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chỉ áp dụng cho engine Kafka"
      }), " , cho phép quản trị viên xem, tạo và cập nhật Kafka user. Tính năng này thường được sử dụng để:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm soát quyền truy cập của ứng dụng vào Kafka cluster."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quản lý thông tin xác thực một cách an toàn trên nền tảng cloud."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Theo dõi và kiểm toán thao tác người dùng thông qua log hệ thống."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-tạo-kafka-user-mới",
      children: "1. Tạo Kafka user mới"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo một Kafka user mới, thực hiện các bước sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-1-truy-cập-trang-quản-lý-kafka-user",
      children: "Bước 1: Truy cập trang Quản lý Kafka user"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Đăng nhập FPT Cloud Console. Chọn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Platform"
      }), " ” > “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Streaming"
      }), " ” > nhấp vào cluster ID của cụm Kafka để mở trang chi tiết. Chọn tab “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configure Params"
      }), " ” > chọn sub-tab “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kafka ACL"
      }), " ”. Trang quản lý Kafka user hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(249110)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1373"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mục “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User List"
      }), " ” hiển thị toàn bộ Kafka user đã được cấu hình trên cluster. Thông tin hiển thị gồm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " : Tên principal Kafka."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " : Mật khẩu xác thực. Được ẩn vì lý do bảo mật."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SASL mechanism"
        }), " : Cơ chế xác thực (ví dụ: PLAIN)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bước-2-tạo-kafka-user-mới",
      children: "Bước 2: Tạo Kafka user mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên trang Kafka user management, trong mục “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User List"
      }), " ”, nhấn biểu tượng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add user"
      }), " (hình dấu cộng). Hộp thoại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create new user"
      }), " sẽ được hiển thị."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250982)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " : Tên người dùng, được sử dụng làm Kafka principal cho mục đích xác thực. Tên có độ dài tối đa 50 ký tự và không chứa ký tự đặc biệt bị cấm (/ \\ : * ? \" < > | [ ])"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " : Tạo mật khẩu mạnh thoả mãn các yêu cầu sau:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ít nhất một ký tự chữ cái viết thường."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ít nhất một ký tự chữ cái viết hoa."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tối thiểu 12 ký tự, tối đa 20 ký tự."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ít nhất một ký tự đặc biệt, ngoại trừ các ký tự sau: $ \\ \\ / [ ] ' \" : ; + - ^ < > ( ) |`"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ít nhất một số."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Không chứa khoảng trắng."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SASL mechanism"
        }), " : Chọn cơ chế xác thực được hỗ trợ. Các tùy chọn bao gồm: “ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "PLAIN"
        }), " ”, “ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "SCRAM-SHA256"
        }), " ”, “ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "SCRAM-SHA512"
        }), " ”. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cảnh báo"
        }), " : Việc tạo hoặc cập nhật user sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SASL/PLAIN"
        }), " sẽ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kích hoạt restart Kafka cluster"
        }), ". Điều này có thể gây ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "gián đoạn dịch vụ tạm thời"
        }), " đối với producer và consumer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi hoàn tất, nhấn “ ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Create"
      }), " ” để tạo Kafka user. Kafka user được tạo thành công sẽ hiển thị trong User list và có thể được sử dụng cho:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cấu hình Kafka client."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kafka Connect."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chính sách ACL (nếu được hỗ trợ)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tạo Kafka user theo từng ứng dụng hoặc dịch vụ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thực hiện xoay vòng mật khẩu định kỳ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tránh tạo user trong giờ cao điểm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tách riêng user cho producer và consumer nếu có thể."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần, bạn có thể thực hiện các thao tác sau với Kafka user đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cập nhật mật khẩu"
        }), " : Chức năng này cho phép thay đổi password của Kafka user. Để thực hiện, trên User List, chọn “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Password"
        }), " ” tương ứng với user cần thay đổi. Nhập password mới và nhấn “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Update"
        }), " ” để lưu lại."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Xóa user"
        }), " : Chức năng này cho phép xoá bỏ Kafka user không còn sử dụng, giúp hệ thống quản lý gọn gàng hơn. Trên trang User List, chọn “ ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Delete"
        }), " ” tương ứng với user cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cấp quyền ACL"
        }), " : Cho phép cấp quyền ALC cho Kafka user. Tham khảo hướng dẫn chi tiết tại mục “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. Phân quyền cho Kafka user"
        }), " ”"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-phân-quyền-cho-kafka-user",
      children: "2. Phân quyền cho Kafka user"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chức năng Kafka ACL cho phép quản trị viên phân quyền chi tiết cho Kafka user khi truy cập topic và consumer group trong Kafka cluster được quản lý bởi DBaaS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ACL giúp đảm bảo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiểm soát truy cập an toàn."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Áp dụng nguyên tắc least privilege."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cách ly giữa các ứng dụng và workload."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ACL được áp dụng ở cấp độ cluster và có hiệu lực ngay sau khi lưu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Nếu Kafka user không được phân bổ ACL, user sẽ không có quyền truy cập vào các tài nguyên."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để phân quyền cho một Kafka user, thực hiện như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trên trang Kafka user management, trong mục “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User List"
      }), " ”, chọn hành động “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grant ACL"
      }), " ” tương ứng với user cần phân quyền. Hộp thoại Grant ACL sẽ được hiển thị."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689193)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1343"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " : Hiển thị Kafka user được chọn. Trường này không thể chỉnh sửa."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Type"
        }), " : Chọn loại tài nguyên Kafka cần phân quyền:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Topic – Phân quyền truy cập topic Kafka."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consumer group – Phân quyền cho consumer group."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topic prefix / Group prefix"
        }), " : Nhập tiền tố (prefix) của tài nguyên. Áp dụng quyền cho tất cả resource khớp prefix. Nhập “All” để phân quyền cho tất cả topic hoặc tất cả consumer group."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operations"
        }), " : Chọn một hoặc nhiều thao tác Kafka được phép, phụ thuộc vào loại tài nguyên:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu loại tài nguyên là “", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topic"
            }), " ”:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "All"
                }), " : cho phép thực hiện tất cả các thao tác."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Alter"
                }), " : cho phép sửa các tham số DANGER của topic trong Kafka UI."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "AlterConfigs"
                }), " : cho phép sửa các tham số không DANGER của topic trong Kafka UI."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Read"
                }), " : cho phép đọc nội dung của topic."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Write"
                }), " : cho phép ghi dữ liệu vào topic."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nếu loại tài nguyên là “", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consumer group"
            }), " ”:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Delete"
                }), " : cho phép xoá group."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Describe"
                }), " : cho phép xem thông tin chi tiết của group."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Read"
                }), " : cho phép đọc nội dung của group."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi hoàn tất, nhấn “", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save"
      }), " ” để áp dụng ACL cho Kafka user. ACL sẽ có hiệu lực ngay lập tức mà không cần khởi động lại Kafka cluster. Một Kafka user có thể được gán nhiều ACL."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "best-practices",
      children: "Best Practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ưu tiên phân quyền bằng ACL theo prefix. ACL theo prefix giúp quản lý quyền hiệu quả khi hệ thống mở rộng."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tách ACL cho producer và consumer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tránh cấp quyền toàn bộ nếu không cần thiết."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Định kỳ rà soát danh sách ACL."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./parameter",
        children: " Previous Quản lý Parameter "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./db-proxy",
        children: " Next DB Proxy "
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

/***/ 250982
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15c4e64f2819-create-kafka-user-scaled-0cc7d389889133a1affb5073ffb4001b.png");

/***/ },

/***/ 249110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/514e908e6894-view-kafka-acl-scaled-5683fbdd859924ff3e8b3b81d0356a26.png");

/***/ },

/***/ 689193
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee68daae5d2e-grant-acl-scaled-1d48daff3268f247ceb80313308204c4.png");

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