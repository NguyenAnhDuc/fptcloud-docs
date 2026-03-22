"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[68188],{

/***/ 691290
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_quan_ly_security_group_md_ee0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-quan-ly-security-group-md-ee0.json
const site_docs_cloud_server_network_quan_ly_security_group_md_ee0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/quan-ly-security-group","title":"Quản lý Security Group","description":"*","source":"@site/docs/cloud-server/network/quan-ly-security-group.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/quan-ly-security-group","permalink":"/cloud-server/network/quan-ly-security-group","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Quản lý Security Group","title":"Quản lý Security Group","source":"https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Quản lý Floating IP","permalink":"/cloud-server/network/quan-ly-floating-ip"},"next":{"title":"Gỡ card mạng (NIC) khỏi máy ảo","permalink":"/cloud-server/network/remove-the-network-card-from-the-virtual-machine"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/quan-ly-security-group.md


const frontMatter = {
	sidebar_label: 'Quản lý Security Group',
	title: 'Quản lý Security Group',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Quản lý Security Group';

const assets = {

};



const toc = [{
  "value": "<strong>Tạo mới Security Group</strong>",
  "id": "tạo-mới-security-group",
  "level": 3
}, {
  "value": "<strong>Quản lý Inbound rules và outbound rules trong Security Group</strong>",
  "id": "quản-lý-inbound-rules-và-outbound-rules-trong-security-group",
  "level": 3
}, {
  "value": "<strong>Gắn máy ảo vào Security Group</strong>",
  "id": "gắn-máy-ảo-vào-security-group",
  "level": 3
}, {
  "value": "<strong>Gỡ máy ảo khỏi Security Group</strong>",
  "id": "gỡ-máy-ảo-khỏi-security-group",
  "level": 3
}, {
  "value": "<strong>Xóa Security Group khỏi VPC</strong>",
  "id": "xóa-security-group-khỏi-vpc",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
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
        id: "quản-lý-security-group",
        children: "Quản lý Security Group"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " hoạt động như một tường lửa mạng ảo, cho phép các kết nối đi vào (inbound) và ra khỏi (outbound) máy ảo. Trong FPT Cloud, có hai loại tường lửa:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Security Group: Tường lửa kiểm soát traffic ra vào Internet của máy ảo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Distributed Firewall: ", (0,jsx_runtime.jsx)(_components.em, {
            children: "(Chỉ có trên dịch vụ Specific)"
          }), " Tường lửa kiểm soát traffic ra vào máy ảo trong mạng nội bộ."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Việc sử dụng các loại tường lửa này đảm bảo an toàn cho máy ảo bằng cách ngăn chặn các cuộc tấn công như DDoS và các mối đe dọa khác từ internet hoặc virus."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Để quản lý các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , bạn vào trang", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Groups"
      }), " ở nhóm Service ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), " Ở đây bạn có thể tạo mới, xem danh sách, sửa thông tin, xóa các ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " trong VPC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tạo-mới-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tạo mới Security Group"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo mới một Security Group bạn thao tác như sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Networking"
      }), ". Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create security group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(327339)/* ["default"] */ .A) + "",
        width: "944",
        height: "449"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Nhập các thông tin hệ thống yêu cầu:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với người dùng dịch vụ General:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên security group, mặc định hệ thống sẽ tự khởi tạo một tên để khách hàng nhanh chóng sử dụng."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet"
          }), " : Chọn Subnet trong danh sách."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applied CIDR / instances"
          }), " : Chọn máy ảo hoặc dãy CIDR sẽ áp dụng. Bạn có thể bỏ qua trường này và thêm vào sau."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure security rule"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Inbound rule: Kiểm soát traffic đi vào máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Outbound rule: Kiểm soát traffic ra khỏi máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(506966)/* ["default"] */ .A) + "",
        width: "1105",
        height: "732"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Màn hình tạo Security group với người dùng dịch vụ General"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với người dùng dịch vụ Specific:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " : Tên security group, mặc định hệ thống sẽ tự khởi tạo một tên để khách hàng nhanh chóng sử dụng."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Type"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Security group: Kiểm soát traffic ra vào internet của máy ảo"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Distributed Firewall: Kiểm soát traffic ra vào mạng nội bộ của máy ảo"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet"
          }), " : Chọn Subnet trong danh sách."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applied CIDR / instances"
          }), " : Chọn máy ảo hoặc dãy CIDR sẽ áp dụng. Bạn có thể bỏ qua trường này và thêm vào sau."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure security rule"
          }), " :"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Inbound rule: Kiểm soát traffic đi vào máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Outbound rule: Kiểm soát traffic ra khỏi máy ảo. Bạn có thể cấu hình rule theo nhu cầu sử dụng."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(827713)/* ["default"] */ .A) + "",
        width: "940",
        height: "767"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Màn hình tạo Security group với người dùng dịch vụ Specific"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create security group"
      }), ". Hệ thống sẽ tiến hành xử lý và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu thành công, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " vừa tạo sẽ được hiển thị ở bảng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(733632)/* ["default"] */ .A) + "",
        width: "965",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quản-lý-inbound-rules-và-outbound-rules-trong-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quản lý Inbound rules và outbound rules trong Security Group"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inbound rules"
      }), " là các rule giúp quy định cổng (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port"
      }), ") nào sẽ được mở trên máy ảo và địa chỉ nào trên Internet sẽ được truy cập vào cổng đấy (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outbound rules"
      }), " là các rule giúp quy định cổng (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Port"
      }), ") nào sẽ được mở trên máy ảo và địa chỉ nào trên Internet sẽ được truy cập ra từ cổng đấy (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Destination"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Một ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), " có thể chứa nhiều I", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nbound rules"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outbound rules"
      }), " khác nhau. Để thêm rule, mở port cho Security Group bạn thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " cần quản lý rule để vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý: Không thể điều chỉnh Firewall type sau khi đã khởi tạo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add New"
      }), " trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inbound rules"
      }), " (tương tự với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outbound rule"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(337440)/* ["default"] */ .A) + "",
        width: "940",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Điền các thông tin cần thiết của Rule:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " : Chọn Port cần mở. Có thể chọn", (0,jsx_runtime.jsx)(_components.strong, {
            children: "All ports"
          }), " để mở toàn bộ, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Customize ports"
          }), " để mở một hoặc một dải ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Port"
          }), " tùy chọn. Ngoài ra hệ thống sẽ đề xuất Port của một số dịch vụ phổ biến như SSH, RDP, MySQL, HTTP, HTTPS,…"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sources (Destinations)"
          }), " : Nhập các IP trên Internet có thể kết nối đến Port này vào trường Sources (Destinations). Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "All Ipv4"
          }), " để đồng ý tất cả, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MyIP"
          }), " để cho phép IP public hiện tại của máy, hoặc nhập trực tiếp IP để thêm các IP tùy chọn. Lưu ý: đối với các port nhạy cảm như 22 hay 3389, khi bạn allow All Ipv4, hệ thống sẽ hiển thị cảnh báo bạn về độ nguy hiểm cao “We recommend allowing SSH from trusted IPs only”"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " : Chú thích về rule."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add rule"
      }), " để tiếp tục thêm rule mới hoặc chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit security group"
      }), " để lưu. Hệ thống sẽ tiến hành lưu và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(357792)/* ["default"] */ .A) + "",
        width: "940",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gắn-máy-ảo-vào-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gắn máy ảo vào Security Group"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " cần gắn với máy ảo để vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(347394)/* ["default"] */ .A) + "",
        width: "965",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply to"
      }), " chọn các máy ảo sẽ gắn vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , bạn có thể nhập dãy CIDR để apply cho 1 dãy mạng. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Instances"
      }), ". Hệ thống sẽ tiến hành lưu và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(429548)/* ["default"] */ .A) + "",
        width: "940",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gỡ-máy-ảo-khỏi-security-group",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gỡ máy ảo khỏi Security Group"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " cần gỡ khỏi máy ảo để vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(862494)/* ["default"] */ .A) + "",
        width: "965",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ở phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply to"
      }), " đã hiển thị danh sách các máy ảo đang được gắn với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Bấm vào icon ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "X"
      }), " ở máy ảo cần gỡ và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Apply Instances"
      }), ". Hệ thống sẽ tiến hành xử lý và thông báo kết quả."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(64423)/* ["default"] */ .A) + "",
        width: "940",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xóa-security-group-khỏi-vpc",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Xóa Security Group khỏi VPC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu không còn nhu cầu sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , bạn có thể xóa khỏi ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Cần xóa hết tất cả các rules để thực hiện thao tác này."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(454871)/* ["default"] */ .A) + "",
        width: "975",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " cần xóa để vào trang ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group detail"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(591258)/* ["default"] */ .A) + "",
        width: "940",
        height: "244"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Vào rule, chọn biểu tượng thùng rác, và xác nhận xóa"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(126222)/* ["default"] */ .A) + "",
        width: "940",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(936118)/* ["default"] */ .A) + "",
        width: "940",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sau khi đó xóa hết các rule trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , bạn ra bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security Group"
      }), ". Trên bảng quản trị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " , trong phần ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), " của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " cần xóa, chọn Delete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(17410)/* ["default"] */ .A) + "",
        width: "940",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Hệ thống sẽ hiển thị popup xác nhận thông tin. Để đồng ý xóa, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Delete security group"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(668537)/* ["default"] */ .A) + "",
        width: "940",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./qu%E1%BA%A3n-l%C3%BD-subnets",
        children: " Previous Quản lý Subnets "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./security-group-filter",
        children: " Next Filter Security Group "
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

/***/ 591258
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0a9049e3ba71-image-1711095342894-24cd9ba6846d8959e8af5fb0aeeb6c8b.png");

/***/ },

/***/ 429548
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0ea1ea3e5eb5-image-1711095283579-986ec22421d2ed2977b842d7f44af95f.png");

/***/ },

/***/ 454871
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15afba1cb40f-image-1744797089254-82d60e2a6b9cc7876ec8156824fc55ad.png");

/***/ },

/***/ 827713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/26de46ab8f93-image-1711095173572-d6360a9d83ad58c7f794c3eb4f36be5b.png");

/***/ },

/***/ 126222
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3514e4a4ca2b-image-1711095354704-accda478e014ee0abdb15387b72f1068.png");

/***/ },

/***/ 64423
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3ea5e102bcf8-image-1711095316491-986ec22421d2ed2977b842d7f44af95f.png");

/***/ },

/***/ 327339
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/57d4a72f11be-image-1723628212428-899e2901eea4d605bd6c8ba7ffaf45f4.png");

/***/ },

/***/ 337440
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5b330f35728d-image-1711095232784-5af8373981521b55a7fd8c22c1d22edc.png");

/***/ },

/***/ 17410
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/65f7d14e1241-image-1711095383121-d7f0a7d9d938092ac6cbe409f89ca9d9.png");

/***/ },

/***/ 733632
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7d4413cd8680-image-1744796990637-373b77f556dc3ff7d3b76bf68fce3fac.png");

/***/ },

/***/ 936118
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9009fb4a6c78-image-1711095363496-fbc87007f8eb10add19f98f2ffaed7c1.png");

/***/ },

/***/ 357792
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ae6b5a5c3207-image-1711095252959-2416af0c2f1e4bea358891cc5567514e.png");

/***/ },

/***/ 862494
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ce5b648636b3-image-1744797064590-373b77f556dc3ff7d3b76bf68fce3fac.png");

/***/ },

/***/ 506966
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dba79878b842-image-1734591272906-0295b8031b773b7adc54136044bf6a56.png");

/***/ },

/***/ 347394
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/de0db53bf916-image-1744797043009-373b77f556dc3ff7d3b76bf68fce3fac.png");

/***/ },

/***/ 668537
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/de48a05976e7-image-1711095390156-4062458378f6349216f1be7c353a5a39.png");

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