"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[45836],{

/***/ 120652
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_cloud_server_vm_management_tutorials_khoi_tao_mot_may_ao_moi_md_af3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-server-vm-management-tutorials-khoi-tao-mot-may-ao-moi-md-af3.json
const site_docs_cloud_server_vm_management_tutorials_khoi_tao_mot_may_ao_moi_md_af3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"cloud-server/vm-management/tutorials-khoi-tao-mot-may-ao-moi","title":"Khởi tạo một máy ảo mới","description":"*","source":"@site/docs/cloud-server/vm-management/tutorials-khoi-tao-mot-may-ao-moi.md","sourceDirName":"cloud-server/vm-management","slug":"/cloud-server/vm-management/tutorials-khoi-tao-mot-may-ao-moi","permalink":"/cloud-server/vm-management/tutorials-khoi-tao-mot-may-ao-moi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Khởi tạo một máy ảo mới","title":"Khởi tạo một máy ảo mới","source":"https://fptcloud.com/documents/cloud-server/?doc=tutorials-khoi-tao-mot-may-ao-moi","parent":"https://fptcloud.com/documents/cloud-server","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Kết nối vào máy ảo Windows","permalink":"/cloud-server/vm-management/tutorials-ket-noi-vao-may-ao-windows"},"next":{"title":"Khởi tạo template từ máy ảo","permalink":"/cloud-server/vm-management/tutorials-khoi-tao-template-tu-may-ao"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/cloud-server/vm-management/tutorials-khoi-tao-mot-may-ao-moi.md


const frontMatter = {
	sidebar_label: 'Khởi tạo một máy ảo mới',
	title: 'Khởi tạo một máy ảo mới',
	source: 'https://fptcloud.com/documents/cloud-server/?doc=tutorials-khoi-tao-mot-may-ao-moi',
	parent: 'https://fptcloud.com/documents/cloud-server',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'Khởi tạo một máy ảo mới';

const assets = {

};



const toc = [{
  "value": "<strong>Lưu ý khi tạo máy ảo từ file ISO.</strong>",
  "id": "lưu-ý-khi-tạo-máy-ảo-từ-file-iso",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
        id: "khởi-tạo-một-máy-ảo-mới",
        children: "Khởi tạo một máy ảo mới"
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
        src: (__webpack_require__(531017)/* ["default"] */ .A) + "",
        width: "1024",
        height: "464"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 2"
      }), " : Cấu hình máy ảo theo nhu cầu với các lựa chọn sau:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance Type"
          }), " : Người dùng có thể tự chọn một dòng máy phù hợp nhất với nhu cầu. Hiện tại có 2 loại phổ biến là General và GPU."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "General"
            }), " là dòng máy đáp ứng tốt cho các nhu cầu cơ bản"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GPU"
            }), " phục vụ các nhu cầu cần hiệu suất cao (High performance computing), Machine Learning,…"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image:"
          }), " Chọn OS chính phù hợp với nhu cầu. Mỗi nhóm OS sẽ gồm các phiên bản khác nhau. Mặc định là phiên bản mới nhất.Người dùng có thể tùy biến theo nhu cầu bằng cách upload các file iso của mình hoặc tạo máy ảo từ những template đã khởi tạo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resource type"
          }), " : Mỗi dòng máy sẽ cấu hình CPU, RAM khác nhau, hoặc người dùng có thể tự tạo một cấu hình tùy chọn."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
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
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Instance group"
          }), " : Người dùng có thể tùy chọn Instance group để cấu hình về vị trí đặt máy ảo trên host vật lý."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subnet & Private IP"
          }), ": Người dùng lựa chọn network để đảm bảo rằng máy ảo có kết nối đến các tài nguyên và dịch vụ mạng cần thiết cho hoạt động của nó. Điều này cho phép máy ảo giao tiếp với các thiết bị khác trên mạng và truy cập vào các tài nguyên bên ngoài như internet. Người dùng có thể nhập địa chỉ IP private cho máy ảo hoặc hệ thống sẽ tự sinh ra theo subnet đã lựa chọn (nếu để trống trường này)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Group"
          }), " : Người dùng lựa chọn security group để kiểm soát traffic ra vào máy ảo. Người dùng có thể để trống trường này và cấu hình sau."]
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
            children: "Authentication type"
          }), " : ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Standard"
          }), " (Username/Password) hoặc ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSH key"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nếu chọn SSH Key, hệ thống sẽ chọn SSH key mới nhất (có thể thay đổi)."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Nếu sử dụng phương thức Standard, người dùng cần lưu ý ghi nhớ và bảo mật mật khẩu ở nơi an toàn."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User data"
          }), " : Nơi chứa ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://cloudinit.readthedocs.io/en/latest/reference/examples.html",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "cloud-init script"
            })
          }), ". Khi máy ảo khởi động, cloud-init sẽ đọc các metadata được cung cấp từ cloud, và khởi tạo hệ thống dựa trên chúng. Cloud-init thường được dùng với mục đích setup network, storage, SSH keys, và nhiều phần khác của hệ thống. Lưu ý: Nếu máy ảo khởi tạo bằng hệ điều hành window, cần reboot lại để khởi chạy các script từ cloud-init."]
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
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý với window sẽ sử dụng script dạng Cloud base init. Script mẫu:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#cloud-config\nusers:\n- name: testcloudinit\n  primary_group: Administrators\n  groups: Administrators\n  passwd: abc@123Abc123\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(790567)/* ["default"] */ .A) + "",
        width: "1024",
        height: "546"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(454691)/* ["default"] */ .A) + "",
        width: "1024",
        height: "676"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(939776)/* ["default"] */ .A) + "",
        width: "1024",
        height: "537"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92299)/* ["default"] */ .A) + "",
        width: "1024",
        height: "656"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bước 3"
      }), " : Nhấn chọn ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Instance"
      }), " để thực hiện khởi tạo máy ảo. Hệ thống sẽ thông báo xác nhận, kiểm tra tài nguyên và tiến hành quá trình khởi tạo máy ảo mới dựa vào cấu hình đã chọn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92299)/* ["default"] */ .A) + "",
        width: "1024",
        height: "656"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sau khi khởi tạo thành công, người dùng có thể thấy máy ảo mới tạo và kiểm tra thông tin trên bảng quản trị. Mỗi máy ảo sẽ được hiển thị thông tin đầy đủ về tên, cấu hình (Ram, CPU, Storage), địa chỉ IP address, trạng thái hoạt động (Tắt/Bật/Suspended) trên bảng."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(919051)/* ["default"] */ .A) + "",
        width: "1024",
        height: "522"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lưu-ý-khi-tạo-máy-ảo-từ-file-iso",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý khi tạo máy ảo từ file ISO."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hiện tại hệ thống Unify Portal hỗ trợ khách hàng tạo máy ảo từ file ISO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1) Các lưu ý khi tạo máy ảo từ file ISO"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khi tạo máy ảo từ file ISO, hệ thống sẽ tự động tạo thêm một ổ đĩa để boot cho ổ Root, không xóa ổ đĩa này khi đang tạo máy ảo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Khách hàng cần để trống dung lượng ổ đĩa tối thiểu bằng hoặc lớn hơn dung lượng file ISO, hệ thống sẽ làm tròn đến hàng đơn vị (Ví dụ: file 0.5 GB -> cần 1GB, file 1.5 GB -> cần 2 GB, file 2 GB cần tối thiểu 2 GB)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lưu ý: Xóa ổ đĩa tạm sau khi tạo máy từ file ISO"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Người dùng xóa ổ đĩa boot sau khi đã tạo máy thành công. (cần Un-mount ổ đĩa khỏi máy ảo trước khi xóa)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2) Hỗ trợ tính năng sử dụng disk bus SATA cho ổ Root"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hệ thống mặc định sử dụng disk bus Virtio cho ổ Root. Tuy nhiên, đối với một số file ISO cũ không được Virtio hỗ trợ, người dùng cần chuyển sang chế độ SATA bằng cách chọn vào ô checkbox tương ứng."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Lưu ý rằng việc sử dụng disk bus SATA có thể làm giảm hiệu suất của ổ đĩa, vì vậy chỉ nên sử dụng tính năng này khi file ISO của bạn không tương thích với Virtio. Vui lòng tham khảo hướng dẫn từ nhà sản xuất để chọn chế độ phù hợp."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455906)/* ["default"] */ .A) + "",
        width: "1024",
        height: "418"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "./quan-ly-may-ao",
        children: " Previous Quản lý máy ảo "
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./clone-instance",
        children: " Next Clone instance "
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

/***/ 531017
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/45a4bfd75db0-Screenshot_19-1024x464-2017d1c3e443d134e5b1db5d33dfd056.png");

/***/ },

/***/ 455906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9143a6cef88b-Screenshot_26-1024x418-ae36a6cee94f1975d04a2d74df2eea07.png");

/***/ },

/***/ 454691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/96e3971b19fd-Screenshot_21-1-1024x676-3a632fd858555b5f9223cf6d9c054cf1.png");

/***/ },

/***/ 939776
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/9a27a8d40c65-Screenshot_22-1-1024x537-504100ca989b7feedf1a35f741efc7c6.png");

/***/ },

/***/ 92299
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/a594dc63bf48-Screenshot_24-1-1024x656-559a0755a10a84a88b5716d9b8d8546e.png");

/***/ },

/***/ 790567
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bf37ac18a993-Screenshot_20-1-1024x546-4028edf081ececdcc6bc05b173ffceed.png");

/***/ },

/***/ 919051
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/c45b80c71638-Screenshot_25-1024x522-0faacb8b647954028988192e7e34c414.png");

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