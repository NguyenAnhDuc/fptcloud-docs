"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[74287],{

/***/ 446230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_network_change_network_config_md_9b6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-network-change-network-config-md-9b6.json
const site_docs_cloud_server_network_change_network_config_md_9b6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/network/change-network-config","title":"Change Network Config","description":"*","source":"@site/docs/cloud-server/network/change-network-config.md","sourceDirName":"cloud-server/network","slug":"/cloud-server/network/change-network-config","permalink":"/cloud-server/network/change-network-config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Change Network Config","title":"Change Network Config","source":"https://fptcloud.com/documents/cloud-server/?doc=change-network-config","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Thay đổi địa chỉ MAC","permalink":"/cloud-server/network/change-address-mac"},"next":{"title":"Chuyển card thường thành card Primary","permalink":"/cloud-server/network/convert-card"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/network/change-network-config.md


const frontMatter = {
	sidebar_label: 'Change Network Config',
	title: 'Change Network Config',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=change-network-config',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Change Network Config';

const assets = {

};



const toc = [{
  "value": "<strong>Sửa static IP trên Ubuntu server</strong>",
  "id": "sửa-static-ip-trên-ubuntu-server",
  "level": 3
}, {
  "value": "<strong>Sửa static IP trên Window server</strong>",
  "id": "sửa-static-ip-trên-window-server",
  "level": 3
}, {
  "value": "<strong>Sửa static IP trên CentOS</strong>",
  "id": "sửa-static-ip-trên-centos",
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
        id: "change-network-config",
        children: "Change Network Config"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Có nhiều lý do khiến bạn có thể cần thay đổi và đặt lại địa chỉ IP tĩnh cho thiết bị của mình, chẳng hạn như cấu hình 1 máy chủ cố định hoặc cần đặt quy luật cho một nhóm máy tính trong nội bộ. Một kịch bản nữa là khi bạn thay đổi cấu hình card NIC trên hệ thống Cloud được cung cấp bởi FPT Smart Cloud, địa chỉ IP bên trong máy sẽ không tự cập nhật theo và bạn cần cấu hình thủ công (ngoài ra có một số phương pháp khác xử lý trong tình huống này nhưng không được đề cập trong nội dung bài viết)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điều cần lưu ý trước khi bạn thay"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "đổi thông tin file config network"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Đặt địa chỉ IP tĩnh có thể giúp tránh xung đột mạng nhưng có thể khiến một số thiết bị ngừng hoạt động bình thường. Đặt địa chỉ IP tĩnh là một chức năng mạng nâng cao và cần có kiến thức cơ bản về TCP/IP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sửa-static-ip-trên-ubuntu-server",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sửa static IP trên Ubuntu server"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Kiểm tra tình trạng hiện tại"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sau khi edit NIC, IP NIC là 132.0.0.190"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM ubuntu",
        src: (__webpack_require__(644797)/* ["default"] */ .A) + "",
        width: "1024",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Bấm vào Console và đăng nhập vào hệ thống"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nhập ifconfig"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM ubuntu console",
        src: (__webpack_require__(779081)/* ["default"] */ .A) + "",
        width: "1016",
        height: "497"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Mở file 00-installer-config.yaml"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“vi 00-installer-config.yaml"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.06.36 PM",
        src: (__webpack_require__(535395)/* ["default"] */ .A) + "",
        width: "587",
        height: "39"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Và chuyển sang mode “Insert” (nhấn phím “i”)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Sửa lại các thông số cần thiết."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.06.53 PM",
        src: (__webpack_require__(611344)/* ["default"] */ .A) + "",
        width: "633",
        height: "199"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write and quit: Nhấn “Esc” sau đó nhập :wq, sau đó nhấn “Enter”"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.07.26 PM",
        src: (__webpack_require__(111899)/* ["default"] */ .A) + "",
        width: "572",
        height: "790"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4:"
      }), " Nhâp lệnh sau đây để cập nhật thay đổi:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sudo netplan apply"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.10.56 PM",
        src: (__webpack_require__(412604)/* ["default"] */ .A) + "",
        width: "572",
        height: "52"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Check lại địa chỉ IP đã thay bằng lệnh ifconfig"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.12.57 PM",
        src: (__webpack_require__(374191)/* ["default"] */ .A) + "",
        width: "718",
        height: "365"
      }), (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.13.18 PM",
        src: (__webpack_require__(82775)/* ["default"] */ .A) + "",
        width: "718",
        height: "98"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sửa-static-ip-trên-window-server",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sửa static IP trên Window server"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Kiểm tra tình trạng hiện tại"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi edit NIC, IP NIC là 132.0.0.182"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window 2012",
        src: (__webpack_require__(895709)/* ["default"] */ .A) + "",
        width: "1024",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bấm vào Console và đăng nhập vào hệ thống"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vào Power Shell hoặc Comand Line – Nhập “ipconfig” – Enter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window power shell",
        src: (__webpack_require__(852469)/* ["default"] */ .A) + "",
        width: "684",
        height: "424"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : vào Run – Nhập “ncpa.cpl”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window run ncpa.cpl",
        src: (__webpack_require__(944204)/* ["default"] */ .A) + "",
        width: "553",
        height: "362"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3:"
      }), " Phải chuột vào card mạng cần thay đổi Config, chọn propertise"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window network setting",
        src: (__webpack_require__(342994)/* ["default"] */ .A) + "",
        width: "921",
        height: "403"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Thay đổi các thông số theo cấu hình mới – OK"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window network setting config IPv4 ok",
        src: (__webpack_require__(554426)/* ["default"] */ .A) + "",
        width: "1024",
        height: "802"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5:"
      }), " Kiểm tra lại các thay đổi và ping thử"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM window network setting config IPv4 test",
        src: (__webpack_require__(620065)/* ["default"] */ .A) + "",
        width: "1024",
        height: "749"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sửa-static-ip-trên-centos",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sửa static IP trên CentOS"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1:"
      }), " Kiểm tra tình trạng hiện tại"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi edit NIC, IP NIC là 132.0.0.70"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM Centos",
        src: (__webpack_require__(521079)/* ["default"] */ .A) + "",
        width: "1024",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vào Console check bằng lệnh: “ip a” – Enter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM CentOS console",
        src: (__webpack_require__(724702)/* ["default"] */ .A) + "",
        width: "1024",
        height: "311"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2:"
      }), " Vào file ifcfg-eth0, và sửa thông số:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vi /etc/sysconfig/network-scripts/ifcfg-eth0"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.25.01 PM",
        src: (__webpack_require__(260087)/* ["default"] */ .A) + "",
        width: "720",
        height: "30"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Sửa thông số cấu hình"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chuyển sang mode insert: nhấn phím “i”"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhập thông số mới"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM CentOS console insert",
        src: (__webpack_require__(161490)/* ["default"] */ .A) + "",
        width: "964",
        height: "991"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhấn “ESC”"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nhập :wq – enter để lưu lại"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "NIC VM CentOS console insert wq",
        src: (__webpack_require__(280135)/* ["default"] */ .A) + "",
        width: "964",
        height: "991"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 4"
      }), " : Restart Networking service bằng lệnh:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "service network restart"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.28.27 PM",
        src: (__webpack_require__(98273)/* ["default"] */ .A) + "",
        width: "720",
        height: "121"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 5"
      }), " : Kiểm tra lại cấu hình vào ping test"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2023 07 11 at 1.28.45 PM",
        src: (__webpack_require__(69359)/* ["default"] */ .A) + "",
        width: "720",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./delete-card-nic",
        children: " Previous Xóa Network Interface Card "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./network-all",
        children: " Next Networking "
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

/***/ 412604
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/0a072ee4e747-Screenshot-2023-07-11-at-1.10.56-PM-438c3a83e8f463145e55e7ec332da597.png");

/***/ },

/***/ 852469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1b543bec768a-NIC-VM-window-power-shell-44b70357e44809ed3dc08686dba945be.png");

/***/ },

/***/ 374191
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/223067ab6eeb-Screenshot-2023-07-11-at-1.12.57-PM-dd91acfeaf039d3768e2f51fba91e830.png");

/***/ },

/***/ 724702
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/3cb187fe240c-NIC-VM-CentOS-console-1024x311-0d846f02fbebb45a06136dfc5da85413.png");

/***/ },

/***/ 944204
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4147bd625483-NIC-VM-window-run-ncpa.cpl_-835ae812ff50cdaff7ef65fe9c1a7e8c.png");

/***/ },

/***/ 98273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/418b264e0dd3-Screenshot-2023-07-11-at-1.28.27-PM-440d90339756c3e5c256a0042bbeb938.png");

/***/ },

/***/ 111899
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/46cc3684863e-Screenshot-2023-07-11-at-1.07.26-PM-ca7a711bb3da0efb4280883318573926.png");

/***/ },

/***/ 161490
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/4b7c26441efa-NIC-VM-CentOS-console-insert-b10334251d81d4f8b06ce99c61904c92.png");

/***/ },

/***/ 611344
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/68a5c57872fc-Screenshot-2023-07-11-at-1.06.53-PM-e9d2a4f571a2c7d86aabb39df1160b57.png");

/***/ },

/***/ 644797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/84e18337cb9d-NIC-VM-ubuntu-1024x372-a0c193dc596735e0a03829f77a20b10a.png");

/***/ },

/***/ 82775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/87f0f02a8e4b-Screenshot-2023-07-11-at-1.13.18-PM-547d1c770e6332025238893d148436dd.png");

/***/ },

/***/ 779081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/949ea6c3903c-NIC-VM-ubuntu-console-e7853bf7a1dd798aee5f94aca90368c7.png");

/***/ },

/***/ 620065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9b70a68d13d3-NIC-VM-window-network-setting-config-IPv4-test-102-1fe8a26bb64fbaf11bdc14c6c5483cd7.png");

/***/ },

/***/ 521079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9c72aa69248d-NIC-VM-Centos-1024x372-909b55a2bd2ff8a3083ddd846b702898.png");

/***/ },

/***/ 554426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab0305c9972d-NIC-VM-window-network-setting-config-IPv4-ok-1024x-98711f99ed9459d4728349ac8836e777.png");

/***/ },

/***/ 69359
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/b786390c69c9-Screenshot-2023-07-11-at-1.28.45-PM-a8879ebf44d6cdb66e3e34becdb15568.png");

/***/ },

/***/ 280135
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/baea240e79b7-NIC-VM-CentOS-console-insert-wq-ba8c13e17577c065c8e864fc29878f25.png");

/***/ },

/***/ 535395
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c1e702aab890-Screenshot-2023-07-11-at-1.06.36-PM-6ad8c4c484e0ac9698886019a0158964.png");

/***/ },

/***/ 260087
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ca5cfd6129ac-Screenshot-2023-07-11-at-1.25.01-PM-0fa1c569c0d7d65d705345ce0818738e.png");

/***/ },

/***/ 895709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cdd0fc49e998-NIC-VM-window-2012-1024x372-39420f824ac3be60109eead53bcb5d65.png");

/***/ },

/***/ 342994
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ee7e82cd94a6-NIC-VM-window-network-setting-8d5a82d913ee19e86e074c59f43ec713.png");

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