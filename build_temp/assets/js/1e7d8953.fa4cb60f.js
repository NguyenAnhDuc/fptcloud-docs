"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[86249],{

/***/ 632013
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_fci_aws_transitgw_md_1e7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-fci-aws-transitgw-md-1e7.json
const site_docs_vpn_site_to_site_0_connect_fci_aws_transitgw_md_1e7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-fci-aws-transitgw","title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-fci-aws-transitgw.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/connect-fci-aws-transitgw","permalink":"/vpn-site-to-site-0/connect-fci-aws-transitgw","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)","title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-aws-transitgw","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình VPN Site-to-Site với CheckPoint R81.20","permalink":"/vpn-site-to-site-0/connect-checkpoint-r8120"},"next":{"title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)","permalink":"/vpn-site-to-site-0/connect-fci-aws-virtualgw"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-fci-aws-transitgw.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)',
	title: 'Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-aws-transitgw',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)';

const assets = {

};



const toc = [{
  "value": "I. Cấu hình VPN Site-to-Site trên FCI Cloud",
  "id": "i-cấu-hình-vpn-site-to-site-trên-fci-cloud",
  "level": 2
}, {
  "value": "II. Cấu hình VPN Site-to-Site trên AWS",
  "id": "ii-cấu-hình-vpn-site-to-site-trên-aws",
  "level": 2
}, {
  "value": "III. Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS",
  "id": "iii-chỉnh-sửa-cấu-hình-vpn-site-to-site-trên-fci-cloud-với-ip-mới-của-vpn-aws",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cấu-hình-kết-nối-vpn-site-to-site-giữa-fci-cloud-và-aws-transit-gateway",
        children: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng AWS và OPS trên Unify portal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I. Cấu hình VPN Site-to-Site trên FCI Cloud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "II. Cấu hình VPN Site-to-Site trên AWS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "III. Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trong ví dụ này chúng ta sẽ tạo kết nối VPN Site-to-Site với các thông số như trong topology bên dưới:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(109383)/* ["default"] */ .A) + "",
        width: "692",
        height: "625"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i-cấu-hình-vpn-site-to-site-trên-fci-cloud",
      children: "I. Cấu hình VPN Site-to-Site trên FCI Cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1. Tạo Customer gateways"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.1 Tạo customer gateway với các bước sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109803)/* ["default"] */ .A) + "",
        width: "935",
        height: "386"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.2 Tạo customer gateway với các thông tin sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139899)/* ["default"] */ .A) + "",
        width: "939",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.3 Kết quả:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(541210)/* ["default"] */ .A) + "",
        width: "926",
        height: "374"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý, vì ta chưa tạo VPN ở AWS nên bước này vẫn là IP ngẫu nhiên, Tới cuối bài, ta sẽ chỉnh sửa lại IP này ở Phần 1.1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2. Tạo VPN connection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thông số của VPN Connection sẽ bao gồm 3 mục chính:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "General information (chứa các thông tin chung của kết nối VPN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 1: General information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(99869)/* ["default"] */ .A) + "",
        width: "935",
        height: "466"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471020)/* ["default"] */ .A) + "",
        width: "928",
        height: "563"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi quý khách hàng lựa chọn Providers “AWS ”,hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IKE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes-256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IKE version: ikev2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime units: seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime value: 28800"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DH Group: GROUP_14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phase1 negotiation mode: main"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IPsec:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulation mode: tunnel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes-256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime units: seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime value: 3600"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect forward secrecy (PFS): GROUP_14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform protocol: esp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Remote VPN information"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997374)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi VPN HAN khởi tạo hoàn tất, VPN Connection kết nối hai dải mạng LAN sẽ ONLINE, và các VM sẽ có thể giao tiếp với nhau qua IP LAN của chúng."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ii-cấu-hình-vpn-site-to-site-trên-aws",
      children: "II. Cấu hình VPN Site-to-Site trên AWS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1."
      }), " Tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateway"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer Gateway"
      }), " là một tài nguyên trong AWS để đại diện cho thiết bị ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gateway"
      }), " tại on-premises network.", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể tạo Customer gateway thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Truy cập: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://console.aws.amazon.com/vpc/",
          children: "https://console.aws.amazon.com/vpc/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Customer gateways > Create customer gateway"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập các trường thông tin và IP address là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local IP public"
      }), " của VPN Gateway FCI", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(756043)/* ["default"] */ .A) + "",
        width: "1874",
        height: "862"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Customer gateway"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateway"
      }), " đã tạo:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(716951)/* ["default"] */ .A) + "",
        width: "1852",
        height: "716"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2. Tạo Create transit gateway"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể tạo Create transit gateway thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trên navigation pane, chọn Transit gateway ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Create transit gateway"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(515147)/* ["default"] */ .A) + "",
          width: "1875",
          height: "936"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kết quả sau khi tạo ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(697122)/* ["default"] */ .A) + "",
          width: "1876",
          height: "765"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attach ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transit gateway"
        }), " vừa tạo vào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VPC"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(911267)/* ["default"] */ .A) + "",
          width: "1865",
          height: "930"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bước 3. Tạo VPN connection"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.1. Tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN connection"
      }), " Tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN connection"
      }), " bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateway ( Phần I.4.3)"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attach Transit Gateway"
      }), " đã tạo ở bên trên đó."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Để tạo VPN connection:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại navigation pane, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Site-to-Site VPN connections"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Create VPN connection"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target gateway type"
        }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Transit Gateway"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Transit Gateway"
        }), " và Customer gateway đã tạo trước đó"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Routing option chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Static,"
        }), " static IP prefixes**:** Nhập dải subnet phía FCI( 172.16.8.0/24)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Local IPv4 network"
        }), " : Nhập dải subnet phía FCI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remote IPv4 network"
        }), " : Nhập dải subnet phía AWS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chỉnh sửa các thông số cho ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tunnel1"
        }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tunnel2"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chọn Create VPN connection"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(826792)/* ["default"] */ .A) + "",
        width: "1862",
        height: "942"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(945066)/* ["default"] */ .A) + "",
        width: "1648",
        height: "595"
      }), " 3.2 Attach ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transit gateway"
      }), " vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN connection"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(235984)/* ["default"] */ .A) + "",
        width: "1876",
        height: "933"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả:"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(983555)/* ["default"] */ .A) + "",
        width: "1874",
        height: "571"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4. Cấu hình routing"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nConfig routing để hướng lưu lượng từ VPC (AWS) đến Customer Gateway (FCI) thông qua ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transit Gateway"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thêm các routes từ VPN connection vào route table. (subnet FCI: 172.16.8.0/16 ) ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(256644)/* ["default"] */ .A) + "",
        width: "1206",
        height: "495"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5. Cập nhật Security group"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nCập nhật các S", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ecurity group"
      }), " để cho phép truy cập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RDP"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ICMP"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể thêm rule vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security group"
      }), " thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại navigation pane, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Security groups"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chọn security group cho instances trong VPC muốn cho phép truy cập."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tại ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Inbound rules tab"
        }), " , Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Edit inbound rules"
        }), ". Cho phép dãy subnet của FCI qua với trạng thái All Traffic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Thêm rules để allow inbound SSH, RDP, and ICMP, và sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Save rules"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(409237)/* ["default"] */ .A) + "",
          width: "900",
          height: "389"
        }), " Khởi tạo thành công VPN Connection có trạng thái là ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "'Available'."
        }), " Tiếp theo, kiểm tra lại ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Route table"
        }), " đã route đúng chưa."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6. Tải configuration file"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nSau khi tạo VPN connection, có thể tải xuống ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration file"
      }), " để sử dụng cho việc định cấu hình tại FCI VPC.", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể tải ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration file"
      }), " thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vào trang VPN connection"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn connection vừa tạo > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Download configuration"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn Vendor: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pfSense"
        }), " , IKE version: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IKEv1( hoặc IKEv2)"
        }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Download"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(220731)/* ["default"] */ .A) + "",
          width: "900",
          height: "478"
        }), " Ta sẽ dựa vào configuration file này để tạo VPN Site-to-Site phía FCI"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iii-chỉnh-sửa-cấu-hình-vpn-site-to-site-trên-fci-cloud-với-ip-mới-của-vpn-aws",
      children: "III. Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sử dụng IP ở Tunnel 1 để chỉnh sửa lại ở phía FCI: ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(86097)/* ["default"] */ .A) + "",
            width: "1248",
            height: "620"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Edit Customter Gateways theo IP mới của AWS đã tạo. ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(193053)/* ["default"] */ .A) + "",
            width: "1878",
            height: "956"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\nĐiền thông tin IP của tunnel AWS vào field remote IP public", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "file",
            src: (__webpack_require__(34853)/* ["default"] */ .A) + "",
            width: "1878",
            height: "960"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Đến đây chúng ta đã hoàn thành cấu hình VPN Site-to-Site giữa AWS và FCI Cloud"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sau khi kết nối thành công ở cuối bài hướng dẫn ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Operation status** "
        }), " của các VPN connection phía FCI Cloud sẽ là ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Online** "
        }), " và AWS là ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UP"
        }), " ở tunnel 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kiểm tra trạng thái kết nối phía AWS"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\nVào ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VPN connections"
        }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VPN connection"
        }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tunnel details"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\nNếu kết nối thành công ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "status"
        }), " của các tunnels sẽ là ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**UP** "
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cách Kiểm tra kết quả:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo các VM nằm trong mỗi VPC sử dụng dải mảng trong VPN Site-to-Site và PING các VM qua lại với nhau."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả khi PING từ FCI qua AWS"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả khi PING từ AWS qua FCI Cloud"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-checkpoint-r8120",
        children: " Previous Cấu hình VPN Site-to-Site với CheckPoint R81.20 "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-aws-virtualgw",
        children: " Next Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways) "
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

/***/ 235984
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/061bd822dc92-image-1744188658544-4e1301114e3744ee8611ab458f0d9e77.png");

/***/ },

/***/ 826792
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/2f54788d5495-image-1744188630355-1a1a17288d063db20e4b8ee96acff58a.png");

/***/ },

/***/ 409237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3295619c2f7f-image-1744188698660-2ff4957d46cd11727185649688ddf7eb.png");

/***/ },

/***/ 109803
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/336a5990c716-photo_1_2025-07-09_17-36-42-b7ab17eb8d77565b4f741c780c469fe5.jpg");

/***/ },

/***/ 34853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/52186cfb42e0-image-1744188828118-7eb8cd30408a612f52f524dff93a76d4.png");

/***/ },

/***/ 256644
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/612ad31ac1a0-image-1744188682034-fa3e9e55fd5eb29a3859cbaeea3caf4c.png");

/***/ },

/***/ 86097
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/65ec6a49ca2f-image-1744188753554-56cf0776a3a66cd857bf7aea6b7bab5a.png");

/***/ },

/***/ 193053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/69678af012de-image-1744188812981-bd78fc633fd71de25dee5c009866d6c7.png");

/***/ },

/***/ 997374
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6969ef54be9f-Screenshot-2025-08-18-110311-4-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 756043
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6a0f1b1a1b94-image-1744188410276-fc11318f998a8d742e8f43216410e828.png");

/***/ },

/***/ 109383
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7059bf1de1c8-image-1744187555434-6ffbdc9ce27bf5b5c13e6226fa327296.png");

/***/ },

/***/ 697122
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7114d4b9bdcb-image-1744188583244-575921daf3e47a8f6b7d5a1fc88358bb.png");

/***/ },

/***/ 99869
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7456c9721e5b-photo_4_2025-07-09_17-36-42-8d7857698ea3210a761591ff9a1514f0.jpg");

/***/ },

/***/ 139899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7a7fc088e37c-photo_2_2025-07-09_17-36-42-d9c418a8ccb213f105cf4d1ffcfb12ea.jpg");

/***/ },

/***/ 945066
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8d296d6c6e48-image-1744188646389-e1d9c4b83e02e284cc0465ca3d8b03f2.png");

/***/ },

/***/ 911267
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a65a47449cde-image-1744188600627-15619c8ec5f994077a2ea424a84bcdc1.png");

/***/ },

/***/ 983555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b3f5084119fd-image-1744188666706-c5808423459891ccecf7a54c24e4014c.png");

/***/ },

/***/ 220731
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b4bdaa67a704-image-1744188724857-f2830b4bc2839d3d0c668bf8b6a0842a.png");

/***/ },

/***/ 541210
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cc4e0bfd7bb6-photo_3_2025-07-09_17-36-42-16ad6e0f676b08702f696376ed6fb3d9.jpg");

/***/ },

/***/ 515147
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdb7a1f9979c-image-1744188442634-5f8f65cda512538f9d1f544ba85d7fd2.png");

/***/ },

/***/ 471020
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e0dc4e565ea1-photo_5_2025-07-09_17-36-42-38de95bf6b6a2c8e7a263a3ecd13c156.jpg");

/***/ },

/***/ 716951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f32f6ae2179f-image-1744188423009-4cc4268298c4d55e5b1b03dac01cc0a1.png");

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