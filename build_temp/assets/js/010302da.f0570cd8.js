"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[61730],{

/***/ 314538
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_managed_fpt_database_engines_new_db_connect_md_010_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-managed-fpt-database-engines-new-db-connect-md-010.json
const site_docs_managed_fpt_database_engines_new_db_connect_md_010_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"managed-fpt-database-engines-new/db-connect","title":"2. Managed – FPT Database Engines","description":"Kết nối cơ sở dữ liệu","source":"@site/docs/managed-fpt-database-engines-new/db-connect.md","sourceDirName":"managed-fpt-database-engines-new","slug":"/managed-fpt-database-engines-new/db-connect","permalink":"/managed-fpt-database-engines-new/db-connect","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Db connect","title":"2. Managed – FPT Database Engines","source":"https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-connect","parent":"https://fptcloud.com/documents/managed-fpt-database-engines-new","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Database engine version","permalink":"/managed-fpt-database-engines-new/database-engine-version"},"next":{"title":"Db engine service","permalink":"/managed-fpt-database-engines-new/db-engine-service"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/managed-fpt-database-engines-new/db-connect.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Db connect',
	title: '2. Managed – FPT Database Engines',
	source: 'https://fptcloud.com/documents/managed-fpt-database-engines-new/?doc=db-connect',
	parent: 'https://fptcloud.com/documents/managed-fpt-database-engines-new',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = '2. Managed – FPT Database Engines';

const assets = {

};



const toc = [{
  "value": "1. Tạo Security Group",
  "id": "1-tạo-security-group",
  "level": 2
}, {
  "value": "Bước 1: Truy cập trang Quản lý security group",
  "id": "bước-1-truy-cập-trang-quản-lý-security-group",
  "level": 3
}, {
  "value": "Bước 2: Tạo security group mới",
  "id": "bước-2-tạo-security-group-mới",
  "level": 3
}, {
  "value": "2. Gán Floating IP",
  "id": "2-gán-floating-ip",
  "level": 2
}, {
  "value": "Bước 1: Truy cập trang Quản lý Floating IP",
  "id": "bước-1-truy-cập-trang-quản-lý-floating-ip",
  "level": 3
}, {
  "value": "Bước 2: Cấp phát địa chỉ IP",
  "id": "bước-2-cấp-phát-địa-chỉ-ip",
  "level": 3
}, {
  "value": "3. Kết nối vào cơ sở dữ liệu qua Client",
  "id": "3-kết-nối-vào-cơ-sở-dữ-liệu-qua-client",
  "level": 2
}, {
  "value": "Bước 1: Lấy thông tin kết nối",
  "id": "bước-1-lấy-thông-tin-kết-nối",
  "level": 3
}, {
  "value": "Bước 2: Thực hiện kết nối",
  "id": "bước-2-thực-hiện-kết-nối",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "2-managed--fpt-database-engines",
        children: "2. Managed – FPT Database Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kết nối cơ sở dữ liệu"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mục này hướng dẫn cách kết nối tới cơ sở dữ liệu được triển khai trên FPT Database Engine thông qua các phương thức kết nối được hỗ trợ và các khuyến nghị vận hành."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo cụm cơ sở dữ liệu thành công trên FPT Database Engine, người dùng có thể kết nối bằng các công cụ quản trị, driver ứng dụng, hoặc client tiêu chuẩn. Khả năng kết nối phụ thuộc vào cấu hình mạng, chính sách bảo mật, và thông tin xác thực database."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trước khi kết nối vào một cụm cơ sở dữ liệu, bạn cần cấu hình các thiết lập mạng và bảo mật để cho phép kết nối từ client. Điều này thường bao gồm việc tạo security group rules và gán floating IP (địa chỉ IP công cộng) nếu kết nối từ bên ngoài. Sau khi quyền truy cập mạng đã được cấp, bạn có thể sử dụng công cụ client để đăng nhập vào cơ sở dữ liệu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tạo-security-group",
      children: "1. Tạo Security Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security Group là tập hợp các quy tắc tường lửa (firewall rules) dùng để kiểm soát lưu lượng mạng đến (inbound) và đi (outbound) từ cụm cơ sở dữ liệu. Mỗi rule xác định port, protocol, và địa chỉ IP/CIDR được phép kết nối tới cơ sở dữ liệu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc cấu hình Security Group đúng cách giúp bảo vệ kết nối cơ sở dữ liệu, giới hạn truy cập theo nguyên tắc least privilege và giảm thiểu nguy cơ truy cập trái phép từ bên ngoài."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⚠️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Khuyến nghị bảo mật:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nên sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "một Security Group riêng cho mỗi cụm cơ sở dữ liệu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chỉ mở các port thực sự cần thiết"
        }), " cho việc kết nối."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Không"
        }), " khuyến nghị ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dùng chung Security Group cho nhiều cụm hoặc mở toàn bộ port."
        }), " Việc cấu hình quá rộng có thể ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mở rộng phạm vi truy cập ngoài ý muốn, tăng nguy cơ truy cập trái phép và ảnh hưởng đến các cụm khác"
        }), " khi thay đổi rule. Trong một số trường hợp, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "có thể gây gián đoạn dịch vụ"
        }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rò rỉ dữ liệu"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để đảm bảo an toàn và dễ quản lý, hãy tạo và cấu hình Security Group cho cụm cơ sở dữ liệu theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-security-group",
      children: "Bước 1: Truy cập trang Quản lý security group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network > Security Groups"
      }), ". Giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group Management"
      }), " sẽ hiển thị danh sách security group hiện có, cùng các tùy chọn để tạo mới, chỉnh sửa hoặc xoá một security group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-tạo-security-group-mới",
      children: "Bước 2: Tạo security group mới"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group Management"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create security group"
      }), ". Màn hình tạo security group mới hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720841)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1253"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Name"
        }), " : Nhập tên Security Group để thuận tiện cho việc quản lý. Tên có độ dài tối đa 50 ký tự, chỉ bao gồm chữ cái, chữ số và dấu gạch ngang (-). Hệ thống có thể tự động tạo tên mặc định nếu không được chỉ định."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Applied Instances (optional)"
        }), " : Chọn database instance mà Security Group sẽ được áp dụng."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add tag (Optional):"
        }), " Gán tags (key-value) cho Security Group nhằm phục vụ phân loại tài nguyên, quản lý chi phí, vận hành và auditing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure security rule (optional)"
        }), " : Thiết lập các security rules để kiểm soát lưu lượng mạng vào và ra khỏi database cluster.\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inbound rules"
            }), " : Kiểm soát các kết nối đi vào database cluster, thường dùng để cho phép ứng dụng hoặc người dùng truy cập cơ sở dữ liệu. Địa chỉ IP hoặc CIDR được phép truy cập được khai báo trong trường ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Outbound rules"
            }), " : Kiểm soát các kết nối đi ra từ database cluster, thường không cần cấu hình nếu database chỉ giao tiếp trong mạng nội bộ. Địa chỉ IP hoặc CIDR đích được khai báo trong trường ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Destination"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi nhập đầy đủ thông tin, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create security group"
      }), " để hoàn tất quá trình tạo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi tạo thành công, security group mới sẽ xuất hiện trong danh sách quản lý, hiển thị đầy đủ thông tin như tên, danh sách node được áp dụng và thời điểm tạo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi cần thiết, bạn có thể thực hiện các thao tác sau với security group đã tạo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thay đổi tên của security group"
        }), " : Chức năng này cho phép sửa đổi tên của security group. Để thực hiện, trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Group Management"
        }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rename"
        }), " tương ứng với group cần chỉnh sửa. Thực hiện thay đổi và nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rename"
        }), " để lưu lại."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Xóa security group"
        }), " : Chức năng này cho phép xoá bỏ security group không còn sử dụng, giúp hệ thống quản lý gọn gàng và chính xác hơn. Trên trang ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Security Group Management"
        }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " tương ứng với security group cần xóa. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cảnh báo:"
        }), " Việc xoá một Security Group có thể làm gián đoạn kết nối mạng của các database đang được gán Security Group đó. Sau khi bị xoá, tất cả các security rules liên quan sẽ bị loại bỏ ngay lập tức, có thể khiến ứng dụng không thể truy cập cơ sở dữ liệu hoặc gây mất kết nối giữa các dịch vụ nội bộ. Hãy đảm bảo rằng Security Group không còn được gán cho bất kỳ tài nguyên nào trước khi thực hiện thao tác xoá."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-gán-floating-ip",
      children: "2. Gán Floating IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để cho phép truy cập cơ sở dữ liệu từ mạng ngoài (Internet) hoặc bên ngoài VPC, bạn cần tạo và gán Floating IP cho nó. Floating IP là một địa chỉ IPv4 công cộng tĩnh, có thể chuyển đổi giữa các tài nguyên mà không cần thay đổi cấu hình khác bên trong hệ thống mạng. Việc gán Floating IP yêu cầu bạn đảm bảo các security group / firewall rules cho phép traffic phù hợp (port, protocol) đến cơ sở dữ liệu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practice"
      }), " : Chỉ gán Floating IP khi cần truy cập public. Nếu database chỉ phục vụ backend nội bộ trong VPC, cân nhắc sử dụng private static IP để tránh phơi bày dịch vụ ra public network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các bước thực hiện cấp phát Floating IP như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-truy-cập-trang-quản-lý-floating-ip",
      children: "Bước 1: Truy cập trang Quản lý Floating IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network > Floating IPs"
      }), ". Giao diện ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP Management"
      }), " sẽ hiển thị danh sách hiện có, cùng các tùy chọn để tạo mới hoặc release một Floating IP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-cấp-phát-địa-chỉ-ip",
      children: "Bước 2: Cấp phát địa chỉ IP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Floating IP Management"
      }), " , nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate IP address"
      }), ". Hộp thoại cấp phát IP hiển thị như sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(468777)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1331"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nhập thông tin cấp phát:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP address"
        }), " : Chọn phương thức cấp phát địa chỉ IP. Có hai tuỳ chọn sau:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Allocate new from pool"
            }), " : Hệ thống tự động cấp phát một public Floating IP mới từ pool IP khả dụng."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IP đã tồn tại (nếu có)"
            }), " : Chọn một Floating IP đã được cấp phát trước đó từ danh sách."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resources"
        }), " : Chọn loại tài nguyên để gán Floating IP. Đối với dịch vụ FPT Database Engine, chọn Resource type = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance"
        }), " và chọn database instance tương ứng từ danh sách."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP Port (Optional)"
        }), " : Chỉ định public port nếu bạn cấu hình port forwarding hoặc các quy tắc NAT cụ thể. Để trống nếu sử dụng cấu hình mặc định."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance port (Optional)"
        }), " : Chỉ định private port trên instance để ánh xạ lưu lượng truy cập từ public port. Để trống nếu sử dụng cấu hình mặc định."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add tag (Optional)"
        }), " : Gán tags (key-value pairs) để phân loại, quản lý và theo dõi Floating IP trong quá trình vận hành và auditing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi hoàn tất cấu hình, nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Allocate floating IP"
      }), " để bắt đầu quá trình cấp phát. Floating IP mới sẽ xuất hiện trong danh sách với trạng thái ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active"
      }), " và được gán trực tiếp cho database instance đã chọn. Bạn có thể sử dụng Floating IP này để kết nối database từ bên ngoài nếu các security rules và firewall policies cho phép."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Giải phóng Floating IP"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Khi Floating IP không còn nhu cầu sử dụng, bạn có thể giải phóng bằng cách chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release IP"
      }), " tương ứng với địa chỉ IP cần thu hồi. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý & Khắc phục sự cố"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đảm bảo Security Group của instance cho phép lưu lượng truy cập trên các cổng cần thiết (ví dụ: SSH port 22, HTTP port 80, hoặc cổng database tương ứng)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu Floating IP không hoạt động như mong đợi, hãy kiểm tra lại security group inbound rules để đảm bảo các cổng database cần thiết đã được mở."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kết-nối-vào-cơ-sở-dữ-liệu-qua-client",
      children: "3. Kết nối vào cơ sở dữ liệu qua Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi đã cấp quyền mạng (security group và floating IP), bạn có thể kết nối tới cơ sở dữ liệu bằng công cụ client yêu thích (ví dụ: pgAdmin cho PostgreSQL, MySQL Workbench cho MySQL…)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-1-lấy-thông-tin-kết-nối",
      children: "Bước 1: Lấy thông tin kết nối"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thông tin kết nối cơ sở dữ liệu được hiển thị trên màn hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database Overview"
      }), " trong FPT Cloud Portal. Để truy cập màn hình này, mở ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database list"
      }), " , sau đó chọn ID của cơ sở dữ liệu để xem trang chi tiết:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(493130)/* ["default"] */ .A) + "",
        width: "2560",
        height: "1364"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sử dụng các thông tin sau để thiết lập kết nối đến cơ sở dữ liệu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain endpoint"
        }), " : Địa chỉ endpoint dùng để kết nối tới cơ sở dữ liệu ."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Port"
        }), " : Cổng dịch vụ mà cơ sở dữ liệu đang lắng nghe."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database name"
        }), " : Tên database mặc định được tạo khi khởi tạo cơ sở dữ liệu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Username"
        }), " : Tên tài khoản quản trị (admin user) dùng để truy cập database mặc định."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password"
        }), " : Mật khẩu của tài khoản quản trị."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bước-2-thực-hiện-kết-nối",
      children: "Bước 2: Thực hiện kết nối"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bạn có thể kết nối đến cơ sở dữ liệu bằng một trong các phương thức sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kết nối bằng công cụ quản trị"
        }), " : Sử dụng các công cụ quản trị CSDL (ví dụ: pgAdmin, MySQL Workbench, SSMS), nhập đầy đủ endpoint, port, username, password và database name để kết nối."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kết nối bằng dòng lệnh (CLI)"
        }), " : Kết nối trực tiếp tới cơ sở dữ liệu từ terminal hoặc application server thông qua các lệnh CLI tương ứng với từng database engine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kết nối từ ứng dụng"
        }), " : Sử dụng official database drivers cho từng engine và cấu hình connection string phù hợp để kết nối từ ứng dụng."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi kết nối thành công, bạn sẽ thấy cấu trúc cơ sở dữ liệu và có thể thực thi truy vấn trực tiếp từ client."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý"
      }), " : Đảm bảo rằng Security Group, firewall rules, và network policies cho phép kết nối tới endpoint và port của cơ sở dữ liệu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./db-view-detail",
        children: " Previous Xem thông tin cơ sở dữ liệu "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./db-operation",
        children: " Next Vận hành cơ sở dữ liệu "
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

/***/ 493130
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2357ac75cabb-db-overview-scaled-ee64b48d9e896eaa1217c99638fa6685.png");

/***/ },

/***/ 468777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/65984edf37f0-allocate-IP-scaled-27c9edfed36fb46aeaf3b65a11e081d1.png");

/***/ },

/***/ 720841
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8aa5e8ed3c3c-create-security-group-scaled-3c5770e13c1706ecddbd60a37a1cb305.png");

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