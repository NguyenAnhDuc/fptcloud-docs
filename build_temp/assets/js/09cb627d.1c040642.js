"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[9892],{

/***/ 526542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_management_logging_md_09c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-management-logging-md-09c.json
const site_docs_vpn_site_to_site_0_management_logging_md_09c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/management/logging","title":"Theo dõi dịch vụ thông qua tính năng logging","description":"*","source":"@site/docs/vpn-site-to-site-0/management/logging.md","sourceDirName":"vpn-site-to-site-0/management","slug":"/vpn-site-to-site-0/management/logging","permalink":"/vpn-site-to-site-0/management/logging","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Theo dõi dịch vụ thông qua tính năng logging","title":"Theo dõi dịch vụ thông qua tính năng logging","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=logging","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Hướng dẫn kết nối thiết bị Behind NAT IP","permalink":"/vpn-site-to-site-0/management/ket-noi-thiet-bi-behind-nat-ip"},"next":{"title":"Theo dõi dịch vụ thông qua tính năng monitoring","permalink":"/vpn-site-to-site-0/management/monitoring"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/management/logging.md


const frontMatter = {
	sidebar_label: 'Theo dõi dịch vụ thông qua tính năng logging',
	title: 'Theo dõi dịch vụ thông qua tính năng logging',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=logging',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Theo dõi dịch vụ thông qua tính năng logging';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
        id: "theo-dõi-dịch-vụ-thông-qua-tính-năng-logging",
        children: "Theo dõi dịch vụ thông qua tính năng logging"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này hướng dẫn bạn cách theo dõi và đọc thông tin log của dịch vụ VPN Site-to-Site trên nền tảng FPT Smart Cloud, giúp quý khách hàng dễ dàng kiểm tra trạng thái và xử lý sự cố kết nối"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Tại màn hiển thị, quý khách chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logging"
      }), " trên thanh menu ngang.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(201590)/* ["default"] */ .A) + "",
        width: "1901",
        height: "938"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Quý khách theo dõi lịch sử hoạt động của dịch vụ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(204298)/* ["default"] */ .A) + "",
        width: "1898",
        height: "695"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hiện tại FCI đang cung cấp các loại log hệ thống như sau:"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ý nghĩa"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IKE (Internet Key Exchange)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về thiết lập Phase 1 – trao đổi khóa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CFG (Configuration)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về thiết lập Phase 2 – cấu hình Tunnel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NET (Network)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về giao tiếp giữa peer thông qua UDP 500/4500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KNL (Kernel)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về thiết lập route/route policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ENC (Encryption)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về mã hóa/giải mã trong handshake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DPD (Dead Peer Detection)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về kiểm tra peer có còn sống không"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LIB (Library)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về các thư viện gọi bên trong engine charon"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ESP (Encapsulating Security Payload)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về thiết lập Security Association dùng IPsec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TRC (Traffic)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về action gửi gói dữ liệu đã mã hóa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thông tin về các log hệ thống khác"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thông tin log thường gặp:"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Nội dung"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Message logs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ý nghĩa / Cách khắc phục"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Các mẫu thông tin log thành công"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IKE Phase 1 thành công"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[IKE] IKE_SA  established between 192.0.2.90[192.0.2.90]...192.0.2.74[192.0.2.74]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kết nối IKE SA được thiết lập thành công giữa hai địa chỉ IP (local và remote)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trong đó `` là tên của VPN connection đang sử dụng."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPSec Phase 2 thành công"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[IKE] CHILD_SA  established with SPIs cf4973bf_i c1cbfdf2_o and TS 192.168.48.0/24/0 === 10.42.42.0/24/0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tunnel dữ liệu đã được thiết lập thành công giữa các dải subnet."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Trong đó `` là tên của VPN connection đang sử dụng."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Traffic thành công"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[NET]  sending packet: from x.x.x.x[4500] to x.x.x.x[4500] (80 bytes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[NET]  received packet: from x.x.x.x[4500] to x.x.x.x[4500] (80 bytes)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gói dữ liệu được gửi qua tunnel thành công. Port 4500 cho thấy NAT-T đang được sử dụng."
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nếu thông tin send packet và received packet xuất hiện nghĩa là việc gửi và nhận phản hồi từ peer vẫn ổn định, không bị ngắt."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rekey thành công"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: " CHILD_SA con4{97} state change: REKEYING => REKEYED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hệ thống tự động tạo lại khóa bảo mật mới mà không làm gián đoạn kết nối."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reauthentication thành công"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IKE_SA reauthentication completed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thiết bị xác thực lại kết nối thành công sau một thời gian."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Xác thực thành công PSK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "authentication of 'IP' with pre-shared key successful"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thiết bị đã xác thực thành công bằng khóa chia sẻ sẵn."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Các thông tin log thất bại"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sai chế độ negotiation mode tại IKE Policy – phase 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log từ phía khởi tạo kết nối:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[IKE] initiating Aggressive Mode IKE_SA con2[1] to 203.0.113.5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[IKE] received AUTHENTICATION_FAILED error notify"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[ENC] parsed INFORMATIONAL_V1 request 1215317906 [ N(AUTH_FAILED) ]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[IKE] received AUTHENTICATION_FAILED error notify"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Log từ phía kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Aggressive Mode PSK disabled for security reasons"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Generating INFORMATIONAL_V1 request 2940146627 [ N(AUTH_FAILED) ]"
      }), " | Sai thông tin Phase1 negotiation mode giữa 2 đầu kết nối, cần thực hiện check lại trong chi tiết VPN Connection.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sai thông tin tại IKE Policy – phase 1"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Log từ phía khởi tạo kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ENC] parsed INFORMATIONAL_V1 request 4216246776 [ HASH N(AUTH_FAILED) ]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] received AUTHENTICATION_FAILED error notify"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Log từ phía kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[CFG] looking for pre-shared key peer configs matching 203.0.113.5...198.51.100.3[someid]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] no peer config found"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ENC] generating INFORMATIONAL_V1 request 4216246776 [ HASH N(AUTH_FAILED) ]"
      }), " | Xác thực phase 1 thất bại. Vui lòng kiểm tra lại thông tin cấu hình kết nối của connection tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IKE Policy"
      }), " giữa 2 đầu kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sai thông tin Pre-shared-key ở 2 đầu kết nối"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Log kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "charon: 09[ENC] invalid HASH_V1/ID_V1 payload length, decryption failed?"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "charon: 09[ENC] could not decrypt payloads"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "charon: 09[IKE] message parsing failed"
      }), " | Xác thực thất bại. Vui lòng kiểm tra lại thông tin PSK của connection của 2 đầu kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sai thông tin tại IKE Policy – phase 1"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Log kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] no proposal found"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ENC] generating INFORMATIONAL_V1 request 3851683074 [ N(NO_PROP) ]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ENC] parsed INFORMATIONAL_V1 - request 3851683074 [ N(NO_PROP) ]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] received NO_PROPOSAL_CHOSEN error notify"
      }), " | Sai thuật toán kết nối tại phase 1. Vui lòng kiểm tra lại thông tin cấu hình kết nối của connection của ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IKE Policy"
      }), " giữa 2 đầu kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sai thông tin tại IPsec Policy – phase 2"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Log kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] no matching CHILD_SA config found"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ENC] generating INFORMATIONAL_V1 request 1136605099 [ HASH N(INVAL_ID) ]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[ENC] generating INFORMATIONAL_V1 request 1275272345 [ HASH N(NO_PROP) ]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] received NO_PROPOSAL_CHOSEN error notify"
      }), " | Xác thực phase 2 thất bại. Vui lòng kiểm tra lại thông tin cấu hình kết nối của connection tại mục ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPsec Policy"
      }), " giữa 2 đầu kết nối.", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐây cũng có thể là trường hợp sai thông tin dải network khai báo trong ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "customer gateway"
      }), " , cần kiểm tra lại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "remote subnet"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sai thông tin peer ID giữa kết nối"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Log kết nối:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] remote host is behind NAT"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[IKE] IDir '192.0.2.10' does not match to '203.0.113.245'"
      }), " | Định danh peer ID không khớp. Nếu khách hàng có dùng NAT IP thì cần kiểm tra lại cấu hình ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local/Remote ID"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể xem hướng dẫn đấu nối VPN với NAT IP, vui lòng tham khảo hướng dẫn tương ứng."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./set_alert",
        children: " Previous Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./monitoring",
        children: " Next Theo dõi dịch vụ thông qua tính năng monitoring "
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

/***/ 201590
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/088dfdf70de3-Screenshot-2025-09-12-103802-1-83b7b7a100edc1569f8bc44d08446f17.png");

/***/ },

/***/ 204298
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b231479b8330-Screenshot-2025-09-12-103908-902afb52ab034a8b7bd8b3b4b63a414b.png");

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