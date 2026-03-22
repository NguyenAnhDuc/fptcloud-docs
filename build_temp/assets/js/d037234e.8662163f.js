"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10937],{

/***/ 209843
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_connect_devices_connect_checkpoint_r_8120_md_d03_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-connect-devices-connect-checkpoint-r-8120-md-d03.json
const site_docs_vpn_site_to_site_0_connect_devices_connect_checkpoint_r_8120_md_d03_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/connect-devices/connect-checkpoint-r8120","title":"Cấu hình VPN Site-to-Site với CheckPoint R81.20","description":"*","source":"@site/docs/vpn-site-to-site-0/connect-devices/connect-checkpoint-r8120.md","sourceDirName":"vpn-site-to-site-0/connect-devices","slug":"/vpn-site-to-site-0/connect-devices/connect-checkpoint-r8120","permalink":"/vpn-site-to-site-0/connect-devices/connect-checkpoint-r8120","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Cấu hình VPN Site-to-Site với CheckPoint R81.20","title":"Cấu hình VPN Site-to-Site với CheckPoint R81.20","source":"https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-checkpoint-r8120","parent":"https://fptcloud.com/documents/vpn-site-to-site-0","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Cấu hình VPN Site-to-Site với các thiết bị NAT IP","permalink":"/vpn-site-to-site-0/connect-devices/connect-behind-nat"},"next":{"title":"Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)","permalink":"/vpn-site-to-site-0/connect-devices/connect-fci-aws-transitgw"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/connect-devices/connect-checkpoint-r8120.md


const frontMatter = {
	sidebar_label: 'Cấu hình VPN Site-to-Site với CheckPoint R81.20',
	title: 'Cấu hình VPN Site-to-Site với CheckPoint R81.20',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/?doc=connect-checkpoint-r8120',
	parent: 'https://fptcloud.com/documents/vpn-site-to-site-0',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Cấu hình VPN Site-to-Site với CheckPoint R81.20';

const assets = {

};



const toc = [{
  "value": "Bước 1: Build CheckPoint for Cloud",
  "id": "bước-1-build-checkpoint-for-cloud",
  "level": 2
}, {
  "value": "Bước 2: Cấu hình cho VPN Site-to-Site",
  "id": "bước-2-cấu-hình-cho-vpn-site-to-site",
  "level": 2
}, {
  "value": "Bước 3: Cấu hình cho CheckPoint",
  "id": "bước-3-cấu-hình-cho-checkpoint",
  "level": 2
}, {
  "value": "Bước 4: Debug- Tracert",
  "id": "bước-4-debug--tracert",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cấu-hình-vpn-site-to-site-với-checkpoint-r8120",
        children: "Cấu hình VPN Site-to-Site với CheckPoint R81.20"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Build CheckPoint for Cloud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Cấu hình cho VPN Site-to-Site"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 3: Cấu hình cho CheckPoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 4: Debug- Tracert"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cần đảm bảo các điều kiện sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VPN Site-to-Site trên trang portal"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CheckPoint R81.20 đã được download và boot image trên cloud với tên: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Check_Point_R82.10_T462_Gaia"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Smartconsole phiên bản R81.20 đã được tích hợp với CheckPoint R81.20"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 VM Pfsense để phục vụ debug (Optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-1-build-checkpoint-for-cloud",
      children: "Bước 1: Build CheckPoint for Cloud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Build Image trên Horizon với cấu hình 2C4G- 1 IP public gắn trực tiếp, 1IP mạng Local cần VPN"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chạy các command sau để boot VM từ image:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "openstack volume create --type Premium-SSD --image Check_Point_R82.10_T462_Gaia --size 20 --bootable DISK-CD  -- Output ID  {`DISK-CD`}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "openstack volume create --type Premium-SSD --size 100 --bootable DISK-OS-- Output ID  {`DISK-OS`}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "openstack network list\n--output ID {'IP PUBLIC'}\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "nova boot --availability-zone nova --flavor 2C4G --nic net-id={`IP PUBLIC`} --block-device id=`DISK-OS`},source=volume,dest=volume,bus=virtio,device=/dev/vda,shutdown=preserve,bootindex=0 --block-device id= {`DISK-CD`},source=volume,dest=volume,bus=ide,device=/dev/hda,type=cdrom,bootindex=1 CheckpointServer\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Để boot VM trên NoVNC, thao tác theo hướng dẫn sau:"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Install Gaia on this system"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(385058)/* ["default"] */ .A) + "",
        width: "624",
        height: "464"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Chọn OK ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(367271)/* ["default"] */ .A) + "",
        width: "716",
        height: "398"
      }), " - Tại màn Keyboard Selection, chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "US→ OK"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(871667)/* ["default"] */ .A) + "",
        width: "683",
        height: "396"
      }), " - Chọn OK.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "(Có thể nhập cấu hình phù hợp hoặc chọn cấu hình default sẵn có)"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(792951)/* ["default"] */ .A) + "",
        width: "683",
        height: "396"
      }), " - Nhập password đăng nhập cho giao diện console VM ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(639432)/* ["default"] */ .A) + "",
        width: "683",
        height: "396"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Nhập password cho Smartconsole ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(556227)/* ["default"] */ .A) + "",
        width: "683",
        height: "396"
      }), " - Nhập IP public gắn trực tiếp đã request ở đầu phần này + Netmask là \"255.255.255.255\" và sau đó chọn OK. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(43100)/* ["default"] */ .A) + "",
        width: "683",
        height: "396"
      }), " - Hoàn thành quá trình cài đặt. ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(454469)/* ["default"] */ .A) + "",
        width: "683",
        height: "396"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-2-cấu-hình-cho-vpn-site-to-site",
      children: "Bước 2: Cấu hình cho VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Truy cập và tạo VPN Site To Site trên trang ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://console.fptcloud.com/",
        children: "https://console.fptcloud.com/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Tạo Customer Gateway:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "- Remote private network:"
      }), " dãy Lan Subnet cần peering của Checkpoint", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "- Remote IP public:"
      }), " IP public của CheckPoint"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(399182)/* ["default"] */ .A) + "",
        width: "776",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Tạo VPN Connection:"
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
        src: (__webpack_require__(172470)/* ["default"] */ .A) + "",
        width: "778",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Với thông số ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Pre-shared key\""
      }), " cần lưu lại để điền vào CheckPoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 2: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(116441)/* ["default"] */ .A) + "",
        width: "775",
        height: "477"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quý khách hàng lựa chọn Providers = “others\" sau đó làm theo các bước sau:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 1: Điền providers name = \"checkpoint\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IKE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes 256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IKE version: ikev2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DH group: group14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime: 3600 seconds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phase1 negotiation mode: main"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với IPsec:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Authorization algorithm: sha256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encryption algorithm: aes 256"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encapsulation mode: tunnel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform protocol: esp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfect Forward Secrecy (PFS): group14"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lifetime: 3600 seconds"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phần 3: Remote VPN information"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(465758)/* ["default"] */ .A) + "",
        width: "981",
        height: "236"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Điền thông số Delay và max failure và chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create VPN Connection"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-3-cấu-hình-cho-checkpoint",
      children: "Bước 3: Cấu hình cho CheckPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "- Đăng nhập vào console VNC của VM CheckPoint theo account đã tạo trên và chạy lệnh: \"Cpstart\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Đăng nhập vào website theo địa chỉ IP: ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://ip./",
        children: ["https://{", (0,jsx_runtime.jsx)(_components.code, {
          children: "IP"
        }), "}"]
      }), " và tải về SmartConsole theo link với phiên bản mà trang web đề xuất"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["- Cài đặt và đăng nhập app SmartConsole theo thông tin đã được cung cấp", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Lưu ý: có license đã kích hoạt mới có thể vào được trong SmartConsole"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thac tác thành công hiển thị như ảnh dưới đây: ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(627938)/* ["default"] */ .A) + "",
        width: "1553",
        height: "805"
      }), " - Tạo network LAN ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(946030)/* ["default"] */ .A) + "",
        width: "711",
        height: "547"
      }), " - Tạo Interoperable Devices với IP Public của VPN Site-to-Site thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tại New→ More → Network Object → More → Interoperable Device"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(150001)/* ["default"] */ .A) + "",
        width: "765",
        height: "617"
      }), " Thực hiện điền các thông tin: Name, IPv4 Address và chọn OK ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(481489)/* ["default"] */ .A) + "",
        width: "874",
        height: "616"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(186486)/* ["default"] */ .A) + "",
        width: "874",
        height: "616"
      }), " - Tạo VPN Communication ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Star"
        })
      }), " thao tác như sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tại New → More → VPN Community → Star Community"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(157072)/* ["default"] */ .A) + "",
        width: "554",
        height: "614"
      }), " - Với các thông như bên dưới:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Center Gateway"
        }), " có tên: CheckPoint (ta vừa tạo ở trên)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Satellite Gateway"
        }), " là Interoperable Devices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VPN Domain"
        }), " là các dãy mạng tương ứng Lan/local và Remote/peer ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(264105)/* ["default"] */ .A) + "",
          width: "797",
          height: "630"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(633263)/* ["default"] */ .A) + "",
          width: "570",
          height: "414"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chọn cấu hình Encryption tương xứng như mục đã chọn ở portal của FPT Smart Cloud, mẫu như sau: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(104784)/* ["default"] */ .A) + "",
          width: "686",
          height: "678"
        }), " ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(796447)/* ["default"] */ .A) + "",
          width: "557",
          height: "412"
        }), " - Sau khi tạo VPN Community, ta quay ngược trở lại Interoperable Devices để cập nhật: ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(844574)/* ["default"] */ .A) + "",
          width: "885",
          height: "617"
        }), " - Quay trở lại VPN Communication Meshed, dùng ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-Share Key"
        }), " đã tạo ở portal của VPN Site-to-Site ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(205806)/* ["default"] */ .A) + "",
          width: "864",
          height: "471"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sau đó ấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Publish\""
        }), " tiến hành tạo ra VPN Community trên Checkpoint ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(400346)/* ["default"] */ .A) + "",
          width: "1695",
          height: "767"
        }), " - Thiết lập firewall cho thông 2 chiều giữa 2 subnet và thông 2 chiều giữa 2 IP Gateway như hình sau, sau đó ấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Publish\""
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "file",
          src: (__webpack_require__(480845)/* ["default"] */ .A) + "",
          width: "1680",
          height: "766"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cuối cùng là set route cho mạng bên trong Checkpoint (phía VPN Site-to-Site đã được set sẵn)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trên CheckPoint Gaia OS, bạn có thể sử dụng lệnh set static-route để thêm route. Dưới đây là cú pháp và ví dụ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "set static-route <destination-network> nexthop gateway address <gateway-ip> on\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ví dụ: Để định tuyến lưu lượng đến mạng ", (0,jsx_runtime.jsx)(_components.code, {
        children: "192.168.1.0/24"
      }), " qua gateway ", (0,jsx_runtime.jsx)(_components.code, {
        children: "10.0.0.1"
      }), ", sử dụng:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "set static-route 192.168.1.0/24 nexthop gateway address 10.0.0.1 on\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi thêm route, hãy chạy lệnh sau để lưu lại cấu hình:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Openstack command"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "save config\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bước-4-debug--tracert",
      children: "Bước 4: Debug- Tracert"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thử từ một máy trong mạng và thực hiện ping lẫn nhau, nếu đã thông thì thực hiện thao tác thành công."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-vyos-1.5",
        children: " Previous Cấu hình VPN Site-to-Site với Vyos 1.5 "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./connect-fci-aws-transitgw",
        children: " Next Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway) "
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

/***/ 104784
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0c22a58eee7f-image-1744168470511-5df0b9dc5010598e710a98baa48d1ac5.png");

/***/ },

/***/ 481489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/13b38d470d89-image-1744168371868-2685494a0bf222e5537aa5a0c595628f.png");

/***/ },

/***/ 43100
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1d3960bd0c04-image-1744168009356-637da83357a1dff8a4135916d0653baa.png");

/***/ },

/***/ 480845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/40a006ae4e0d-image-1744168578028-c14784482b171ddbde545e7ec0ed8a52.png");

/***/ },

/***/ 796447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/49000229da90-image-1744168494302-386d641c7675dd76e6a635caf44d12fd.png");

/***/ },

/***/ 627938
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4a5359ac97b3-image-1744168234439-0e0373e071ffdcdf405085659cfe0527.png");

/***/ },

/***/ 264105
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4c97287e1dd0-image-1744168435213-858fe14bc26b27121620467589d84719.png");

/***/ },

/***/ 399182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4cb64a1a6d72-photo_1_2025-07-09_17-35-39-5babbdef935e6c276da48311e0e7e34b.jpg");

/***/ },

/***/ 116441
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5b3401ddb4e4-photo_3_2025-07-09_17-35-39-c2ddf722bd3647ba3ce92ac0050076c7.jpg");

/***/ },

/***/ 157072
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/63c48190fdef-image-1744168404637-171bd592a582c4e0bf83fb84c844135b.png");

/***/ },

/***/ 186486
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/71312a9733ec-image-1744168384964-d0747f47c6b42073740f7457046e5299.png");

/***/ },

/***/ 454469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7b88383e0f2c-image-1744168018268-a98e6202e4ea06c83669b107fbfbc9ad.png");

/***/ },

/***/ 400346
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/7c16e7a40202-image-1744168554131-39f2660ae64045e83bb07237e87cd664.png");

/***/ },

/***/ 385058
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/81a6a9447b37-image-1744167760192-a105e2789ec1f57600c189dd5005cd74.png");

/***/ },

/***/ 946030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/88e28778465b-image-1744168343186-8330c520d17fce5d99257c73eb41baaf.png");

/***/ },

/***/ 871667
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ad1fc5f8f1a1-image-1744167953227-93bfed051fad009b476d2841f36de838.png");

/***/ },

/***/ 639432
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c3b3ea8fe1e2-image-1744167988315-811f4a7ec0c0f13e773fa60d632a8fd2.png");

/***/ },

/***/ 150001
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ce4eb4600e9a-image-1744168357612-b1ce5585f9bab5e3fff4ee4c8439c91f.png");

/***/ },

/***/ 172470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d0b49f4e5db1-photo_2_2025-07-09_17-35-39-ea293519544c733c76344f3a6b4f43ef.jpg");

/***/ },

/***/ 367271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dae767e0ac9c-image-1744167845702-c5de3de1b1b5be847ed484c80e0e4e3b.png");

/***/ },

/***/ 465758
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e1d4980aa64d-Screenshot-2025-08-18-110311-7-b7908f9a3249dc92db72fb596e4aab62.png");

/***/ },

/***/ 556227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e61606315b95-image-1744167999412-8b3d7ccc4cf9e8d28370b2f2cc2721fd.png");

/***/ },

/***/ 792951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e8f1057ccf1b-image-1744167975414-f68e932f8a54ef2155f857982db4107a.png");

/***/ },

/***/ 844574
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/fedde2aee238-image-1744168513930-69f8288b569f2450b51066c99fb6ab6f.png");

/***/ },

/***/ 205806
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ff1e394d0115-image-1744168529624-b7d0591dd7cc8656c6a40c06f7ebc53c.png");

/***/ },

/***/ 633263
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ff41d81da7ff-image-1744168459774-7b2a41754d25b452dea0f0d5cbe95a47.png");

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