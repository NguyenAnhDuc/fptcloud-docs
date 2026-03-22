"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[60125],{

/***/ 412979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_initial_create_vpn_connection_md_d30_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-initial-create-vpn-connection-md-d30.json
const site_docs_vpn_site_to_site_0_initial_create_vpn_connection_md_d30_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/initial/create-vpn-connection","title":"Hướng dẫn khởi tạo VPN Connection","description":"*","source":"@site/docs/vpn-site-to-site-0/initial/create-vpn-connection.md","sourceDirName":"vpn-site-to-site-0/initial","slug":"/vpn-site-to-site-0/initial/create-vpn-connection","permalink":"/vpn-site-to-site-0/initial/create-vpn-connection","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Hướng dẫn khởi tạo VPN Connection","title":"Hướng dẫn khởi tạo VPN Connection","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-vpn-connection","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Hướng dẫn tạo Customer gateway","permalink":"/vpn-site-to-site-0/initial/create-customergw"},"next":{"title":"Khởi tạo VPN Site-to-Site","permalink":"/vpn-site-to-site-0/initial/create-vpn-s2s-connection"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/initial/create-vpn-connection.md


const frontMatter = {
	sidebar_label: 'Hướng dẫn khởi tạo VPN Connection',
	title: 'Hướng dẫn khởi tạo VPN Connection',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-vpn-connection',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Hướng dẫn khởi tạo VPN Connection';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
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
        id: "hướng-dẫn-khởi-tạo-vpn-connection",
        children: "Hướng dẫn khởi tạo VPN Connection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để khởi tạo VPN Connection, quý khách hàng cần thao tác theo hướng dẫn sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn Network, chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN Site-to-Site"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại đây sẽ quản lý các VPN Connection, quý khách hàng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(602826)/* ["default"] */ .A) + "",
        width: "1086",
        height: "315"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Khởi tạo VPN Gatewate và click next ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455257)/* ["default"] */ .A) + "",
        width: "1003",
        height: "416"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Người dùng thực hiện nhập thông tin cấu hình để khởi tạo VPN Connection"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông số của VPN Connection sẽ bao gồm 3 mục chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "General Information"
        }), " (chứa các thông tin chung của kết nối VPN)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote VPN Information"
        }), " (chứa các thông tin mã hóa và thông tin của quý khách hàng)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dead Peer Detection"
        }), " (số lần hệ thống tự động retry kết nối khi bị vấn đề)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: General information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(357108)/* ["default"] */ .A) + "",
        width: "911",
        height: "504"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VPN name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên của VPN Connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả VPN Connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-shared key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Khoá bảo mật giữa hai thiết bị"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Người dùng có thể thiết lập key mới bằng cách nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refresh Key"
      }), " và sao chép key bằng cách click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Copy"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nLocal IP public | IP public được cấp từ hệ thống FPT Cloud", (0,jsx_runtime.jsx)(_components.br, {}), "\nLocal private networks | Dải Network tài nguyên trên FPT Cloud"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN Information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(761517)/* ["default"] */ .A) + "",
        width: "913",
        height: "482"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateway"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Customer gateway"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Customer gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Là thông tin cấu hình ở đầu còn lại kết nối, ở bước này cần chọn đúng Customer Gateway muốn kết nối"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu bạn chưa có Customer Gateway, vui lòng click ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://fptcloud.com/documents/vpn-site-to-site-0/?doc=create-customergw",
        children: "tại đây"
      }), " để xem hướng dẫn khởi tạo", (0,jsx_runtime.jsx)(_components.br, {}), "\nProviders | Danh sách các nhà cung cấp kết nối VPN tới FCI.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IKE Policy"
      }), " |", (0,jsx_runtime.jsx)(_components.br, {}), "\nAuthorization algorithm | Thuật toán được sử dụng để xác thực dữ liệu trong quá trình thiết lập kết nối VPN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các giá trị: sha1, sha256, sha384, sha512, aes-xcbc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nên sử dụng ‘sha256’ để cân bằng bảo mật và hiệu suất_", (0,jsx_runtime.jsx)(_components.br, {}), "\nEncryption algorithm | Mã hóa quá trình đàm phán khóa bảo mật."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các giá trị: aes-128, aes-192, aes-256, aes-128-gcm-8, aes-128-gcm-12, aes-128-gcm-16, aes-192-gcm-8, aes-192-gcm-12, aes-192-gcm-16, aes-256-gcm-8, aes-256-gcm-12, aes-256-gcm-16'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FCI khuyến nghị nên sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "aes-256"
      }), " để cân bằng tốt giữa bảo mật và hiệu suất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nếu quý khách hàng sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ikev1"
      }), " , vui lòng không chọn các thuật toán gcm vì việc này sẽ gây ra ảnh hưởng khi kết nối dịch vụ VPN", (0,jsx_runtime.jsx)(_components.br, {}), "\nIKE version | Các phiên bản IKE hỗ trợ.", (0,jsx_runtime.jsx)(_components.br, {}), "\nDanh sách các giá trị: ikev1, ikev2"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FCI khuyến nghị nên sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ikev2"
      }), " cho hầu hết các thiết bị firewall khi kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\nNếu quý khách hàng sử dụng thiết bị Cisco đời cũ và chỉ support ikev1, vui lòng chọn ikev1 để khởi tạo kết nối", (0,jsx_runtime.jsx)(_components.br, {}), "\nLifetime units | Đơn vị đo thời gian tồn tại của kết nối IKE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mặc định là second", (0,jsx_runtime.jsx)(_components.br, {}), "\nLifetime value | Giá trị thời gian sống (lifetime) cụ thể của phase 1", (0,jsx_runtime.jsx)(_components.br, {}), "\nDH Group | Nhóm thuật toán Diffie-Hellman dùng để tạo khoá trao đổi ban đầu", (0,jsx_runtime.jsx)(_components.br, {}), "\nCác giá trị: group_1, group_2, group_5, group_14, group_15, group_16, group_17, group_18, group_19 group_20, group_21.", (0,jsx_runtime.jsx)(_components.br, {}), "\nPhase 1 negotiation mode | Cách thức mà hai thiết bị sẽ thiết lập kết nối bảo mật trong giai đoạn 1 của IKE."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các giá trị: main, aggressive (default main)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPSec Policy"
      }), " |", (0,jsx_runtime.jsx)(_components.br, {}), "\nAuthorization algorithm | Thuật toán được sử dụng để xác thực dữ liệu trong quá trình thiết lập kết nối VPN."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các giá trị: sha1, sha256, sha384, sha512, aes-xcbc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Nên sử dụng ‘sha256’ để cân bằng bảo mật và hiệu suất"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nEncapsulation mode | Chế độ mà dữ liệu sẽ được mã hóa và đóng gói trước khi truyền tải."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mặc định là tunnel.", (0,jsx_runtime.jsx)(_components.br, {}), "\nEncryption algorithm | Mã hóa dữ liệu thực tế được truyền qua VPN"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các giá trị: aes-128, aes-192,aes-256'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nên sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "aes-256"
      }), " để cân bằng bảo mật và hiệu suất", (0,jsx_runtime.jsx)(_components.br, {}), "\nLifetime units | Mặc định là second", (0,jsx_runtime.jsx)(_components.br, {}), "\nLifetime value | Khoảng thời gian mà một phiên kết nối IPSec được cho phép tồn tại trước khi phải được tái thiết lập.", (0,jsx_runtime.jsx)(_components.br, {}), "\nPerfect forward secrecy | Tùy chọn đảm bảo bảo mật khoá phiên (PFS - thường đi kèm DH Group)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Các giá trị: off, group_1, group_2, group_5, group_14, group_15, group_16, group_17, group_18, group_19 group_20, group_21", (0,jsx_runtime.jsx)(_components.br, {}), "\n_Nên sử dụng ‘group ", (0,jsx_runtime.jsx)(_components.em, {
        children: "14’ để cân bằng bảo mật"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nTransform protocol | Giao thức được sử dụng để xác định cách thức mã hóa và xác thực trong IPSec."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Các giá trị: esp, ah"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Về thông tin Providers"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hiện tại FCI có hỗ trợ cấu hình sẵn cho các providers như: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AWS, Fortigate, Palo Alto"
        }), ". Để có được kết nối tối ưu nhất FCI khuyến nghị quý khách hàng sử dụng các thông số này."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đối với trường hợp Providers không thuộc danh sách trên, quý khách hàng vui lòng điền thông tin Providers name, IKE và IPsec theo cách thủ công"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bộ thông số cấu hình sẵn của các providers:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thông số cấu hình"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fortigate"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Palo Alto"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IKE Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IKE version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ikev2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ikev2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ikev2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aes-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aes-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aes-256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DH Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group 19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28800s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28800s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28800s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 1 negotiation mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPSec Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aes-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aes-256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aes-256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sha256"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect forward secrecy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group14 (hoặc group19)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group 19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lifetime value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3600s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3600s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3600s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tunnel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transform protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "esp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "esp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "esp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Dead Peer Detection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(330176)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delay(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thời gian (giây) giữa mỗi lần gửi DPD probe để kiểm tra kết nối"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mặc định là: 30s", (0,jsx_runtime.jsx)(_components.br, {}), "\nMax failures | Số lần kiểm tra thất bại tối đa trước khi xác định peer đã chết và reset kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\nMặc định là: 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi điền đầy đủ thông tin, quý khách hàng vui lòng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./action-management",
        children: " Previous Quản lý & thao tác VPN Connection "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./edit-vpn-connection",
        children: " Next Hướng dẫn chỉnh sửa VPN Connection "
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

/***/ 602826
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40b547284c64-photo_1_2025-07-09_17-33-39-1d4f30b3da976938f8b423bb9ddb05a1.jpg");

/***/ },

/***/ 357108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4ccbf22914f1-photo_3_2025-07-09_17-33-39-12a2b3571db204369b78824bee511e85.jpg");

/***/ },

/***/ 455257
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aacb322c0b11-photo_2_2025-07-09_17-33-39-bbb02c916d1f94166a9920f07962c310.jpg");

/***/ },

/***/ 330176
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1af378b0fcf-Screenshot-2025-08-18-110311-13-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 761517
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e3bbb0474005-photo_5_2025-07-09_17-33-39-b1e7442073085d4a31a2a4dba312cbd1.jpg");

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