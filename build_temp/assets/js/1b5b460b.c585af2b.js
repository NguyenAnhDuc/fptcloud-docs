"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[10831],{

/***/ 947333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_quick_starts_quick_starts_tao_mot_may_ao_md_1b5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-quick-starts-quick-starts-tao-mot-may-ao-md-1b5.json
const site_docs_cloud_server_quick_starts_quick_starts_tao_mot_may_ao_md_1b5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/quick-starts/quick-starts-tao-mot-may-ao","title":"Tạo một máy ảo","description":"*","source":"@site/docs/cloud-server/quick-starts/quick-starts-tao-mot-may-ao.md","sourceDirName":"cloud-server/quick-starts","slug":"/cloud-server/quick-starts/quick-starts-tao-mot-may-ao","permalink":"/cloud-server/quick-starts/quick-starts-tao-mot-may-ao","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Tạo một máy ảo","title":"Tạo một máy ảo","source":"https://fptcloud.com/documents/cloud-server/?doc=quick-starts-tao-mot-may-ao","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Khởi động lại máy ảo","permalink":"/cloud-server/quick-starts/quick-starts-khoi-dong-lai-may-ao"},"next":{"title":"Tắt/Bật máy ảo","permalink":"/cloud-server/quick-starts/quick-starts-tatbat-may-ao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/quick-starts/quick-starts-tao-mot-may-ao.md


const frontMatter = {
	sidebar_label: 'Tạo một máy ảo',
	title: 'Tạo một máy ảo',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=quick-starts-tao-mot-may-ao',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Tạo một máy ảo';

const assets = {

};



const toc = [{
  "value": "<strong>Thông tin Configuration</strong>",
  "id": "thông-tin-configuration",
  "level": 3
}, {
  "value": "<strong>Thông tin Storage disk</strong>",
  "id": "thông-tin-storage-disk",
  "level": 3
}, {
  "value": "<strong>Thông tin Network</strong>",
  "id": "thông-tin-network",
  "level": 3
}, {
  "value": "<strong>Thông tin Authentication</strong>",
  "id": "thông-tin-authentication",
  "level": 3
}, {
  "value": "<strong>Các thông tin advanced</strong>",
  "id": "các-thông-tin-advanced",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
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
        id: "tạo-một-máy-ảo",
        children: "Tạo một máy ảo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 1"
      }), " : Ở menu chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compute Engine"
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Management"
      }), " , chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create instance"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(814467)/* ["default"] */ .A) + "",
        width: "940",
        height: "457"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Một hộp thoại mới sẽ hiện lên và hướng dẫn người dùng các bước tiếp theo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Userguide FPT Cloud Server 2022 18",
        src: (__webpack_require__(453996)/* ["default"] */ .A) + "",
        width: "1024",
        height: "414"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thông-tin-configuration",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin Configuration"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Instance Type"
      }), " : Người dùng có thể tự chọn một dòng máy phù hợp nhất với nhu cầu. Hiện tại có 2 loại phổ biến là General và GPU."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "General"
          }), " là dòng máy đáp ứng tốt cho các nhu cầu cơ bản"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU"
          }), " phục vụ các nhu cầu cần hiệu suất cao (High performance computing), Machine Learning,…"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(345937)/* ["default"] */ .A) + "",
        width: "975",
        height: "461"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Image:"
      }), " Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất. Người dùng có thể tùy biến theo nhu cầu bằng cách upload các file ISO của mình hoặc tạo máy ảo từ những template đã khởi tạo"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với general"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trường hợp tạo máy ảo từ OS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(767867)/* ["default"] */ .A) + "",
        width: "975",
        height: "219"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trường hợp tạo máy ảo từ Image: người dùng có thể chọn custom image hoặc ISO image (Xem thêm thông tin lưu ý: Link"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(761649)/* ["default"] */ .A) + "",
        width: "975",
        height: "398"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trường hợp tạo máy ảo từ Snapshot/NAT Instance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(111896)/* ["default"] */ .A) + "",
        width: "975",
        height: "173"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(812397)/* ["default"] */ .A) + "",
        width: "975",
        height: "169"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Đối với specific"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(236025)/* ["default"] */ .A) + "",
        width: "975",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resource type"
      }), " : Mỗi dòng máy sẽ cấu hình CPU, RAM khác nhau, hoặc người dùng có thể tự tạo một cấu hình tùy chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(391933)/* ["default"] */ .A) + "",
        width: "975",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thông-tin-storage-disk",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin Storage disk"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Storage"
      }), " : Storage gắn vào máy ảo gồm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage Policy"
          }), " : Loại Storage"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Size"
          }), " : Kích thước Storage"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(988626)/* ["default"] */ .A) + "",
        width: "975",
        height: "145"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thông-tin-network",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin Network"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gồm Subnet và các thông tin Advanced như Private IP, Floating IP, Security group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet"
          }), " & ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Private IP"
          }), " : Người dùng lựa chọn network để đảm bảo rằng máy ảo có kết nối đến các tài nguyên và dịch vụ mạng cần thiết cho hoạt động của nó. Điều này cho phép máy ảo giao tiếp với các thiết bị khác trên mạng và truy cập vào các tài nguyên bên ngoài như internet. Người dùng có thể nhập địa chỉ IP private cho máy ảo hoặc hệ thống sẽ tự sinh ra theo subnet đã lựa chọn (nếu để trống trường này"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Group"
          }), " : Người dùng lựa chọn security group để kiểm soát traffic ra vào máy ảo. Người dùng có thể để trống trường này và cấu hình sau."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(122078)/* ["default"] */ .A) + "",
        width: "975",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "thông-tin-authentication",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Thông tin Authentication"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Authentication type"
      }), " : ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH key"
      }), " hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(526062)/* ["default"] */ .A) + "",
        width: "975",
        height: "175"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu ở nơi an toàn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(160447)/* ["default"] */ .A) + "",
        width: "973",
        height: "239"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "các-thông-tin-advanced",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Các thông tin advanced"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(811998)/* ["default"] */ .A) + "",
        width: "975",
        height: "388"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance group"
          }), " : Người dùng có thể tùy chọn Instance group để cấu hình về vị trí đặt máy ảo trên host vật lý."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tên instance"
          }), " : Nhập tên máy ảo sao cho dễ quản lý nhất. Đây cũng sẽ là tên host name của máy ảo sau này."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User data"
          }), " : Nơi chứa cloud-init script. Khi máy ảo khởi động, cloud-init sẽ đọc các metadata được cung cấp từ cloud, và khởi tạo hệ thống dựa trên chúng. Cloud-init thường được dùng với mục đích setup network, storage, SSH keys, và nhiều phần khác của hệ thống. Lưu ý: Nếu máy ảo khởi tạo bằng hệ điều hành window, cần reboot lại để khởi chạy các script từ cloud-init."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cloud-init script mẫu"
      }), " : Với đoạn script mẫu, hệ thống sẽ tự khởi tạo user “testcloudinit” với password “Abc123“ và user “testcloudinit2” với password “abc@123Abc123\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#cloud-config\nusers:\n- name: testcloudinit\n  sudo: ALL=(ALL) NOPASSWD:ALL\n  lock_passwd: false\n  shell: /bin/bash\n  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1\n- name: testcloudinit2\n  groups: sudo\n  lock_passwd: false\n  shell: /bin/bash\n  plain_text_passwd: abc@123Abc123\n- hostname: testcloudinit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lưu ý với window sẽ sử dụng script dạng Cloud base init."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Script mẫu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#cloud-config\nusers:\n- name: testcloudinit\n  primary_group: Administrators\n  groups: Administrators\n  passwd: abc@123Abc123\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), " để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "file",
        src: (__webpack_require__(928418)/* ["default"] */ .A) + "",
        width: "975",
        height: "716"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Userguide FPT Cloud Server 2022 21",
          src: (__webpack_require__(409439)/* ["default"] */ .A) + "",
          width: "1024",
          height: "367"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "./create-vm-iso",
        children: " Next Lưu ý khi tạo máy ảo từ file iso "
      })
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

/***/ 122078
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/14ea2c24c846-image-1724662077573-472f0eb48dcf08b0e3fbcabe51029893.png");

/***/ },

/***/ 811998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/16450e30af9a-image-1724662116137-d87c8c932e4305af66429715a4d08419.png");

/***/ },

/***/ 391933
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1be6927ba475-image-1724662047559-73ace3dfbb201b352292ecdfd1c9498c.png");

/***/ },

/***/ 767867
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/423745c9b070-image-1724661980458-f15d140abd335dd5123c79d5b4b41413.png");

/***/ },

/***/ 812397
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/891d0f83ea76-image-1724662017399-f6ff96aaecdff1aba7689dfce53e27e9.png");

/***/ },

/***/ 345937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ab2ee565d54b-image-1724657781979-59081a0f3c660d340b39492aa23d13e2.png");

/***/ },

/***/ 988626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ },

/***/ 928418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c36b4dde08d1-image-1724664453215-a9b5849abc3a8d05649d51653310ff5c.png");

/***/ },

/***/ 160447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d3e63623e89b-image-1724662104611-28b3be6c0f097276fd9c2fac03f744d8.png");

/***/ },

/***/ 814467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/d5b7552c4789-image-1712739862804-24c0e007065442f4d83b593409da1e07.png");

/***/ },

/***/ 409439
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e04e8c2e6eef-Userguide-FPT-Cloud-Server-2022-21-1024x367-8f530560a84c34252cfb5c8665ab646b.png");

/***/ },

/***/ 111896
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e60ec9a78193-image-1724662011478-821a306060325650a896770593df5611.png");

/***/ },

/***/ 761649
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/e924b03994b4-image-1724661996843-015bf9bf8b973249875555569d35831c.png");

/***/ },

/***/ 453996
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f0c8f0c95d35-Userguide-FPT-Cloud-Server-2022-18-1024x414-d245e2c75ed27c9d11633ffc8980bf3d.png");

/***/ },

/***/ 236025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f6dd64712588-image-1724662030232-989fcf4f06ac86e1e39fa01d57b5722b.png");

/***/ },

/***/ 526062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/f8be10840d7e-image-1724662090638-b7ee944b4d1722d96d20ed19fb35eb4c.png");

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