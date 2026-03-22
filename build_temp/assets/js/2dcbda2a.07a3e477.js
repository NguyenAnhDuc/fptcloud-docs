"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[79364],{

/***/ 648519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_fci_aws_virtualgw_md_2dc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-fci-aws-virtualgw-md-2dc.json
const site_docs_vpn_site_to_site_0_connect_fci_aws_virtualgw_md_2dc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-fci-aws-virtualgw","title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-fci-aws-virtualgw.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/connect-fci-aws-virtualgw","permalink":"/vpn-site-to-site-0/connect-fci-aws-virtualgw","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_class_name":"hidden","sidebar_label":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)","title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-aws-virtualgw","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)","permalink":"/vpn-site-to-site-0/connect-fci-aws-transitgw"},"next":{"title":"Cấu hình VPN Site-to-Site với Fortigate","permalink":"/vpn-site-to-site-0/connect-fci-fortigate"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-fci-aws-virtualgw.md


const frontMatter = {
	sidebar_class_name: 'hidden',
	sidebar_label: 'Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)',
	title: 'Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-fci-aws-virtualgw',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)';

const assets = {

};



const toc = [{
  "value": "I. Cấu hình VPN Site-to-Site trên AWS",
  "id": "i-cấu-hình-vpn-site-to-site-trên-aws",
  "level": 2
}, {
  "value": "II. Cấu hình VPN Site-to-Site trên FCI Cloud",
  "id": "ii-cấu-hình-vpn-site-to-site-trên-fci-cloud",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cấu-hình-kết-nối-vpn-site-to-site-giữa-fci-cloud-và-aws-virtual-private-gateways",
        children: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng AWS và OPS trên Unify portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "I. Cấu hình VPN Site-to-Site trên AWS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "II. Cấu hình VPN Site-to-Site trên FCI Cloud"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Trong ví dụ này chúng ta sẽ tạo kết nối VPN Site-to-Site với các thông số như trong topology bên dưới: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(668295)/* ["default"] */ .A) + "",
        width: "1630",
        height: "536"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "i-cấu-hình-vpn-site-to-site-trên-aws",
      children: "I. Cấu hình VPN Site-to-Site trên AWS"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. Truy cập: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.aws.amazon.com/vpc/",
        children: "https://console.aws.amazon.com/vpc/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nb. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateways > Create customer gateway"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nhập các trường thông tin và IP address là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local IP public"
      }), " của VPN Gateway FCI", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(250447)/* ["default"] */ .A) + "",
        width: "803",
        height: "813"
      }), " c. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "customer gateway"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thông tin ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateway"
      }), " đã tạo", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(402004)/* ["default"] */ .A) + "",
        width: "900",
        height: "371"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2. Tạo Virtual Private Gateway"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể tạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual Private Gateway"
      }), " thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. Trên navigation pane, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual private gateways > Create virtual private gateway"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(638121)/* ["default"] */ .A) + "",
        width: "861",
        height: "779"
      }), " b. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create virtual private gateway"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kết quả sau khi tạo", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(518923)/* ["default"] */ .A) + "",
        width: "900",
        height: "388"
      }), " c. Attach ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual private gateway"
      }), " vào ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPC"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(88186)/* ["default"] */ .A) + "",
        width: "900",
        height: "181"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3. Cấu hình routing"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nConfig routing để hướng lưu lượng từ VPC (AWS) đến Customer Gateway (FCI) thông qua ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual Private Gateway"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nBật tính năng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "route propagation"
      }), " cho route table để tự động thêm các routes từ VPN connection vào route table"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. Vào navigation pane, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Route tables"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nb. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Route table"
      }), " được liên kết với subnet.", (0,jsx_runtime.jsx)(_components.br, {}), "\nc. Trên tab ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Route propagation"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit route propagation"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nd. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual private gateway"
      }), " đã tạo trong quy trình trước đó > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable Propagation"
      }), " , sau đó chọn Lưu.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(157691)/* ["default"] */ .A) + "",
        width: "900",
        height: "451"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(72425)/* ["default"] */ .A) + "",
        width: "1034",
        height: "493"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4. Cập nhật Security group"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. Tại navigation pane, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security groups"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nb. Chọn security group cho instances trong VPC muốn cho phép truy cập.", (0,jsx_runtime.jsx)(_components.br, {}), "\nc. Tại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inbound rules tab"
      }), " , Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit inbound rules"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nd. Thêm rules để allow inbound SSH, RDP, and ICMP, và sau đó chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Save rules"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(768140)/* ["default"] */ .A) + "",
        width: "900",
        height: "389"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5. Tạo VPN connection"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nTạo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VPN connection"
      }), " bằng ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer gateway"
      }), " kết hợp với ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual private gateway"
      }), " đã tạo trước đó.", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể tạo VPN connection"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. Tại navigation pane, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site-to-Site VPN connections"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nb. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN connection"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nc. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target gateway type"
      }), " là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Virtual private gateway"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nd. Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VGW"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CGW"
      }), " đã tạo trước đó", (0,jsx_runtime.jsx)(_components.br, {}), "\ne. Routing option chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static,"
      }), " static IP prefixes**:** Nhập dải subnet phía FCI", (0,jsx_runtime.jsx)(_components.br, {}), "\ng. Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local IPv4 network"
      }), " : Nhập dải subnet phía FCI", (0,jsx_runtime.jsx)(_components.br, {}), "\nh. Nhập ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remote IPv4 network"
      }), " : Nhập dải subnet phía AWS và lựa chọn tunnel 1 options", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(287380)/* ["default"] */ .A) + "",
        width: "469",
        height: "699"
      }), " j. Chọn edit tunnel options để chỉnh sửa các thông số cho tunnel", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625664)/* ["default"] */ .A) + "",
        width: "1076",
        height: "438"
      }), " k. Chỉnh sửa các thông số cho ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tunnel1"
      }), " và ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tunnel2"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Ở ví dụ này, bạn không cần nhập gì vì AWS sẽ tự động chọn giá trị default là 28800 và 3600 (các giá trị này sẽ đuợc set ở phía FCI để tối ưu hoá kết nối ở các buớc sau)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(809407)/* ["default"] */ .A) + "",
        width: "1087",
        height: "405"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nĐối với thông tin DPD timeout action, cần set về chế độ restart (ở chế độ này khi DPD bị timeout AWS sẽ tự động thực hiện khởi động lại kết nối)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(700556)/* ["default"] */ .A) + "",
        width: "253",
        height: "88"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nl. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chọn Create VPN connection"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(255883)/* ["default"] */ .A) + "",
        width: "555",
        height: "877"
      }), " Khởi tạo thành công VPN Connection có trạng thái là ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "'Available'."
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(721145)/* ["default"] */ .A) + "",
        width: "900",
        height: "470"
      }), " Tiếp theo, kiểm tra lại ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Route table"
      }), " đã route đúng chưa.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(110197)/* ["default"] */ .A) + "",
        width: "900",
        height: "527"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 6. Tải configuration file"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nSau khi tạo VPN connection, có thể tải xuống ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration file"
      }), " để sử dụng cho việc định cấu hình tại FCI VPC.", (0,jsx_runtime.jsx)(_components.br, {}), "\nĐể tải ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration file"
      }), " thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["a. Vào trang VPN connection", (0,jsx_runtime.jsx)(_components.br, {}), "\nb. Chọn connection vừa tạo > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download configuration"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nc. Chọn Vendor: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pfSense"
      }), " , IKE version: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IKEv1"
      }), " > chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Download"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(382045)/* ["default"] */ .A) + "",
        width: "900",
        height: "478"
      }), " Ta sẽ dựa vào configuration file này để tạo VPN Site-to-Site phía FCI ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(235295)/* ["default"] */ .A) + "",
        width: "900",
        height: "601"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ii-cấu-hình-vpn-site-to-site-trên-fci-cloud",
      children: "II. Cấu hình VPN Site-to-Site trên FCI Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1. Tạo Customer gateways"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\nTạo customer gateway với các thông tin sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774204)/* ["default"] */ .A) + "",
        width: "920",
        height: "341"
      })
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
        src: (__webpack_require__(381213)/* ["default"] */ .A) + "",
        width: "921",
        height: "538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591992)/* ["default"] */ .A) + "",
        width: "925",
        height: "543"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khi quý khách hàng lựa chọn Providers “AWS”,hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732889)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sau khi kết nối thành công ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Operation status** "
      }), " của các VPN connection phía FCI Cloud sẽ là ", (0,jsx_runtime.jsx)(_components.code, {
        children: "**Online** "
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(98147)/* ["default"] */ .A) + "",
        width: "934",
        height: "257"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(3762)/* ["default"] */ .A) + "",
          width: "900",
          height: "385"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kiểm tra kết quả"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Khởi tạo các VM nằm trong mỗi VPC sử dụng dải mảng trong VPN Site-to-Site và PING các VM qua lại với nhau."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả khi PING từ FCI qua AWS"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(399384)/* ["default"] */ .A) + "",
        width: "796",
        height: "785"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kết quả khi PING từ AWS qua FCI Cloud"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(202063)/* ["default"] */ .A) + "",
        width: "900",
        height: "725"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-aws-transitgw",
        children: " Previous Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway) "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-vmware",
        children: " Next Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware "
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

/***/ 110197
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/02a2bf0b2462-image-1744187883700-d3fabd5c63e4862b8cd7e19658fff1a5.png");

/***/ },

/***/ 768140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0822561581c2-image-1744187818170-2ff4957d46cd11727185649688ddf7eb.png");

/***/ },

/***/ 250447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0dcc058507a6-image-1744187677872-c6fe452b2ffc701ea8e140121db30586.png");

/***/ },

/***/ 809407
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16c34358ad4a-6219884231644005852-0e958148c12b1ee1454e185245da8584.jpg");

/***/ },

/***/ 202063
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16df2ffbf8eb-image-1744188059608-74f9be06f041b396c4c0870131989922.png");

/***/ },

/***/ 700556
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 625664
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/281ed669289a-6219884231644005851-a7a140c7727fc9abe5e298e58d7f1633.jpg");

/***/ },

/***/ 157691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/351eed1665ba-image-1744187790410-635a447d64cabd20bae2bbca83cb71c4.png");

/***/ },

/***/ 381213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3833c2bc64cd-photo_2_2025-07-09_17-36-59-d9ee58c390463b558aaa0b3a01addf7c.jpg");

/***/ },

/***/ 88186
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/441a90e2cf0a-image-1744187728890-2e2c3fa98153fe7fba1817e09dff4bb0.png");

/***/ },

/***/ 721145
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/50a964f92cae-image-1744187854348-6fe58c8579c2da8fa46f0035fe5386fc.png");

/***/ },

/***/ 402004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/55fef092012c-image-1744187689933-9fe987327d2b47363af2f3ccdd6f5427.png");

/***/ },

/***/ 518923
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/66613e9baba6-image-1744187719077-fd8089cba3b455b6c910128baf9cc99f.png");

/***/ },

/***/ 668295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6cf9e3e45e33-image-1744187648981-f12c9c01b8d107c674307141d71fc016.png");

/***/ },

/***/ 382045
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/6e8c1fafb4f9-image-1744187893211-f2830b4bc2839d3d0c668bf8b6a0842a.png");

/***/ },

/***/ 399384
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/8bf2d7b01844-image-1744188035465-23e9afab1e1b323e47a583a099ff4dfc.png");

/***/ },

/***/ 3762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a2fcb953b8a4-image-1744188021396-508989fc10333b82838b3bd639363c36.png");

/***/ },

/***/ 98147
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a6d918ea51b6-photo_5_2025-07-09_17-36-59-4aeb5e76f8e326ba7d2ea52d5719665a.jpg");

/***/ },

/***/ 72425
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b442a51d8e7c-image-1744187804388-85172d87fd24e80781e243d11dafe0b6.png");

/***/ },

/***/ 255883
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b446a286f367-image-1744187835664-28ea99de58db9bb208b912e8afaddd46.png");

/***/ },

/***/ 287380
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b9c9d9348da1-6219884231644005855-f197e687f4d3941151a529d22662b752.jpg");

/***/ },

/***/ 638121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c2839df5d1b8-image-1744187701228-1ade300d4ff480a2b5f3d7fe6dde807e.png");

/***/ },

/***/ 774204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cc7cebe89e88-photo_1_2025-07-09_17-36-59-0535c30688931596f72a78c1d8af72bd.jpg");

/***/ },

/***/ 235295
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dcef580b5c77-image-1744187903307-0290aee1ce94f7a6410a80ee8f1f71f8.png");

/***/ },

/***/ 732889
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee1b7efc74ff-Screenshot-2025-08-18-110311-2-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 591992
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee6482874ab8-photo_3_2025-07-09_17-36-59-326b1acc943a2cfa789d1457e77a29a6.jpg");

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