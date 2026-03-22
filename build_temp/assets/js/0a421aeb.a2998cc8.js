"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[2475],{

/***/ 499404
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_behind_nat_md_0a4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-behind-nat-md-0a4.json
const site_docs_vpn_site_to_site_0_connect_behind_nat_md_0a4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-behind-nat","title":"Cấu hình VPN Site-to-Site với các thiết bị NAT IP","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-behind-nat.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/connect-behind-nat","permalink":"/vpn-site-to-site-0/connect-behind-nat","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình VPN Site-to-Site với các thiết bị NAT IP","title":"Cấu hình VPN Site-to-Site với các thiết bị NAT IP","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-behind-NAT","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình thiết bị VPN phổ biến","permalink":"/vpn-site-to-site-0/common-config"},"next":{"title":"Cấu hình VPN Site-to-Site với CheckPoint R81.20","permalink":"/vpn-site-to-site-0/connect-checkpoint-r8120"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-behind-nat.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình VPN Site-to-Site với các thiết bị NAT IP',
	title: 'Cấu hình VPN Site-to-Site với các thiết bị NAT IP',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-behind-NAT',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với các thiết bị NAT IP';

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
        id: "cấu-hình-vpn-site-to-site-với-các-thiết-bị-nat-ip",
        children: "Cấu hình VPN Site-to-Site với các thiết bị NAT IP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT IP (Network Address Translation) là gì?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT (Network Address Translation) IP"
      }), " là cơ chế dịch địa chỉ IP, nó nằm trên router hoặc firewall, dùng để biến đổi địa chỉ IP private trong mạng nội bộ thành IP public khi ra Internet, và ngược lại."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tính năng Kết nối thiết bị Behind NAT IP của dịch vụ VPN Site-to-Site"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong một số trường hợp, thiết bị VPN của khách hàng không được gắn trực tiếp địa chỉ IP Public, mà chỉ sử dụng IP Private bên trong mạng nội bộ (ví dụ đặt sau modem hoặc router của nhà mạng). Tính năng Behind NAT IP của dịch vụ VPN Site-to-Site cho phép thiết bị Behind NAT vẫn có thể khởi tạo và duy trì kết nối VPN tunnel ra ngoài Internet."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hướng dẫn cách kết nối thiết bị Behind NAT IP"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network"
      }), " , chọn tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN Site-to-Site."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tại đây sẽ quản lý các VPN Connection, quý khách hàng chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(562971)/* ["default"] */ .A) + "",
        width: "563",
        height: "188"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chọn khởi tạo VPN Gateway Sau khi đã có VPN Gateway, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next"
      }), " để tạo VPN connection"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(646677)/* ["default"] */ .A) + "",
        width: "560",
        height: "281"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Quý khách thực hiện nhập thông tin cấu hình:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(926309)/* ["default"] */ .A) + "",
        width: "576",
        height: "313"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông số của VPN Connection sẽ bao gồm 3 mục chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "General Information"
          }), " (chứa các thông tin chung của kết nối VPN)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Remote VPN Information"
          }), " (chứa các thông tin mã hóa và thông tin của quý khách hàng)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dead Peer Detection"
          }), " (số lần hệ thống tự động retry kết nối khi bị vấn đề)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced Information"
          }), " (chứa thông tin advanced để kết nối với các thiết bị Behind NAT của quý khách hàng)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: General information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(5406)/* ["default"] */ .A) + "",
        width: "576",
        height: "313"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "VPN name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tên của VPN Connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mô tả VPN Connection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pre-shared key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Khoá bảo mật giữa hai thiết bị."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Quý khách có thể thiết lập key mới bằng cách nhấn ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refresh Key"
            }), " và sao chép key bằng cách click ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copy"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local IP public"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP public được cấp từ hệ thống FPT Cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Local private networks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dải Network tài nguyên trên FPT Cloud"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN Information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(895932)/* ["default"] */ .A) + "",
        width: "598",
        height: "329"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Customer gateway name là thông tin cấu hình ở đầu còn lại kết nối, ở bước này cần chọn đúng Customer Gateway muốn kết nối"
        })
      }), "\n"]
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hiện tại FCI có hỗ trợ cấu hình sẵn cho các providers như: AWS, Fortigate, Palo Alto. Để có được kết nối tối ưu nhất FCI khuyến nghị quý khách hàng sử dụng các thông số này."
      }), "\n"]
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
            children: "group14 - group19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "group14 – group20"
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
            children: "group19"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đối với trường hợp Providers không thuộc danh sách trên, quý khách hàng vui lòng điền các thông tin IKE và IPsec phù hợp với cấu hình kết nối"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Dead Peer Detection"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(419233)/* ["default"] */ .A) + "",
        width: "601",
        height: "139"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delay (s)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Thời gian (giây) giữa mỗi lần gửi ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DPD probe"
            }), " để kiểm tra kết nối."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mặc định:"
      }), " 30s", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Max failures"
      }), " | Số lần kiểm tra thất bại tối đa trước khi xác định ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "peer đã chết"
      }), " và reset kết nối."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mặc định:"
      }), " 10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 4: Advanced Information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544959)/* ["default"] */ .A) + "",
        width: "601",
        height: "156"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trường"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mô tả"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Peer ID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Định danh (địa chỉ IP gốc) của thiết bị VPN khách hàng trong quá trình thiết lập VPN (IKE negotiation)."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mặc định hệ thống sẽ lấy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer Gateway IP"
      }), ". Nếu quý khách có sử dụng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NAT IP"
      }), " , vui lòng kiểm tra lại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "địa chỉ IP gốc (trước khi bị NAT)"
      }), " và điền thông tin vào trường ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Peer ID"
      }), " này."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi điền đầy đủ thông tin cho VPN Connection, Quý khách tiến hành chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cancel"
      }), " để hủy bỏ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-fortigate",
        children: " Previous Cấu hình VPN Site-to-Site với Fortigate "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./action-management",
        children: " Next Quản lý & thao tác VPN Connection "
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

/***/ 926309
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/15bee5a1f7b0-Picture5-d57f390b58dfb9ded0518a0f10234e64.jpg");

/***/ },

/***/ 646677
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1e3fa5a4b67f-Picture6-925917b7593f89241e69606441df2e64.jpg");

/***/ },

/***/ 419233
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/212a5d640574-2-781316539c8e66dea4769a07897c69a6.jpg");

/***/ },

/***/ 895932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a5e38ac9c836-3-ea1cd0c2feff71400936e6557f99990c.jpg");

/***/ },

/***/ 544959
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bdb8bdfa4e2b-1-cbbdb5074b6a6a46fa51d27f8d1a0154.jpg");

/***/ },

/***/ 5406
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dbd5b6bec85b-Picture4-d57f390b58dfb9ded0518a0f10234e64.jpg");

/***/ },

/***/ 562971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ed87f20efefb-Picture7-c342170785676f705ee1f01332915f5a.jpg");

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