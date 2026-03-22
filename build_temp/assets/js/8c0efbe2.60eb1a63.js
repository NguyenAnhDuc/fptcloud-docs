"use strict";
(globalThis["webpackChunkfptcloud_docs"] = globalThis["webpackChunkfptcloud_docs"] || []).push([[7140],{

/***/ 69808
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_vpn_site_to_site_0_index_md_8c0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-vpn-site-to-site-0-index-md-8c0.json
const site_docs_vpn_site_to_site_0_index_md_8c0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"vpn-site-to-site-0/index","title":"VPN Site-to-Site","description":"VPN Site-to-Site","source":"@site/docs/vpn-site-to-site-0/index.md","sourceDirName":"vpn-site-to-site-0","slug":"/vpn-site-to-site-0/","permalink":"/vpn-site-to-site-0/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"VPN Site-to-Site","title":"VPN Site-to-Site","source":"https://fptcloud.com/documents/vpn-site-to-site-0/","lang":"vi","converted":"2026-03-19"},"sidebar":"defaultSidebar","previous":{"title":"Câu hỏi thường gặp (FAQs)","permalink":"/vpn-site-to-site-0/faq"},"next":{"title":"Initial Setup","permalink":"/vpn-site-to-site-0/initial-setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/vpn-site-to-site-0/index.md


const frontMatter = {
	sidebar_label: 'VPN Site-to-Site',
	title: 'VPN Site-to-Site',
	source: 'https://fptcloud.com/documents/vpn-site-to-site-0/',
	lang: 'vi',
	converted: '2026-03-19'
};
const contentTitle = 'VPN Site-to-Site';

const assets = {

};



const toc = [{
  "value": "Giới thiệu",
  "id": "giới-thiệu",
  "level": 2
}, {
  "value": "Overviews",
  "id": "overviews",
  "level": 2
}, {
  "value": "Initial Setup",
  "id": "initial-setup",
  "level": 2
}, {
  "value": "Hướng dẫn nhanh (Quick Starts)",
  "id": "hướng-dẫn-nhanh-quick-starts",
  "level": 2
}, {
  "value": "Hướng dẫn chi tiết (Tutorials)",
  "id": "hướng-dẫn-chi-tiết-tutorials",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "VPN Site to Site (new version)",
  "id": "vpn-site-to-site-new-version",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "vpn-site-to-site",
        children: "VPN Site-to-Site"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VPN Site-to-Site"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "giới-thiệu",
      children: "Giới thiệu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Với VPN Site-to-Site, các công ty có thể xây dựng một hệ thống mạng riêng ảo hoàn chỉnh cho các địa điểm đa dạng. Dịch vụ này kết nối các mạng nội bộ khác nhau một cách liên tục và bảo mật, cho phép nhân viên chia sẻ tài nguyên một cách thuận tiện và an toàn giữa các mạng nội bộ."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FPT Cloud Site-to-Site VPN là một dịch vụ VPN quản lý đầy đủ, cho phép tạo kết nối bảo mật giữa mạng văn phòng và tài nguyên đám mây của FPT. Sử dụng tunnel IPSec, dịch vụ này kết nối trung tâm dữ liệu của doanh nghiệp với các văn phòng chi nhánh, giúp truy cập các ứng dụng và dịch vụ dựa trên đám mây mà không tiết lộ dữ liệu mật."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Những điều cần lưu ý trước khi bạn tạo VPN Site-to-Site"
      }), " :"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kiến trúc mạng: Đảm bảo kiến trúc mạng On-Premise của bạn phù hợp với việc triển khai VPN S2S. Điều này bao gồm xác định địa chỉ IP, phân vùng mạng, và các thiết bị mạng phù hợp để xây dựng kết nối VPN."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floating IP: Hệ thống Cloud FPT cần 1 IP public để kết nối VPN S2S. IP public được sử dụng chưa được gán cho bất kỳ dịch vụ nào khác"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IP addressing: Đảm bảo rằng các địa chỉ IP được sử dụng trong VPN S2S không gây xung đột với các mạng khác trong tổ chức hoặc các mạng công cộng. Xác định địa chỉ IP đầu cuối cho các cổng kết nối VPN và cấu hình tường lửa để cho phép lưu lượng truy cập."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Giao thức và mã hóa: Chọn giao thức và cấu hình mã hóa phù hợp cho VPN S2S. Phổ biến nhất là IPSec với mã hóa AES hoặc 3DES, cùng với giao thức xác thực như IKEv1 hoặc IKEv2. Đảm bảo cấu hình bảo mật tương ứng để đảm bảo tính bảo mật cao."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overviews",
      children: "Overviews"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/overviews-vpn",
          children: " Giới thiệu chi tiết "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "initial-setup",
      children: "Initial Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/initial-setup",
          children: " Initial Setup "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-nhanh-quick-starts",
      children: "Hướng dẫn nhanh (Quick Starts)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/create-vpn-s2s-connection",
          children: " Khởi tạo VPN Site-to-Site "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/view-vpn-detail-information",
          children: " Xem thông tin VPN "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hướng-dẫn-chi-tiết-tutorials",
      children: "Hướng dẫn chi tiết (Tutorials)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/disable-vpn-s2s-connection",
          children: " Disable VPN-Site-to-Site "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/enable-vpn-s2s-connection",
          children: " Enable VPN-Site-to-Site "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/edit-vpn-s2s-information",
          children: " Edit VPN Information "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/edit-security-profile",
          children: " Edit Security Profile "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/download-config-vpn-s2s",
          children: " Download Config VPN Site-to-Site "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/delete-vpn-s2s-connection",
          children: " Xóa VPN Site-to-Site "
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./management/vpn-s2s-check-activity-logs",
          children: " Kiểm tra hoạt động VPN-Activity "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./connect-devices/authenticate-certificate-mode",
          children: " Authenticate-Certificate mode "
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vpn-site-to-site-new-version",
      children: "VPN Site to Site (new version)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./initial/common-config",
          children: " Cấu hình thiết bị VPN phổ biến "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-palo-alto",
              children: " Cấu hình VPN Site-to-Site với Palo Alto "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-pfsense",
              children: " Cấu hình VPN Site-to-Site với PfSense "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-strongswan",
              children: " Cấu hình VPN Site-to-Site với strongSwan "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-vyos-1.5",
              children: " Cấu hình VPN Site-to-Site với Vyos 1.5 "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-checkpoint-r8120",
              children: " Cấu hình VPN Site-to-Site với CheckPoint R81.20 "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-fci-aws-transitgw",
              children: " Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway) "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-fci-aws-virtualgw",
              children: " Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Virtual private gateways) "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-fci-vmware",
              children: " Cấu hình kết nối VPN Site-to-Site giữa Portal OpenStack và VMware "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-fci-fortigate",
              children: " Cấu hình VPN Site-to-Site với Fortigate "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./connect-devices/connect-behind-nat",
              children: " Cấu hình VPN Site-to-Site với các thiết bị NAT IP "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "./management/action-management",
          children: " Quản lý & thao tác VPN Connection "
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/create-vpn-connection",
              children: " Hướng dẫn khởi tạo VPN Connection "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/edit-vpn-connection",
              children: " Hướng dẫn chỉnh sửa VPN Connection "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/enable-disable-vpn-connection",
              children: " Hướng dẫn enable/disable VPN Connection "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/xoa-vpn-connection",
              children: " Hướng dẫn xóa VPN Connection "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/tai-file-cau-hinh-vpn",
              children: " Hướng dẫn download file config VPN "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/ket-noi-thiet-bi-behind-nat-ip",
              children: " Hướng dẫn kết nối thiết bị Behind NAT IP "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/create-customergw",
              children: " Hướng dẫn tạo Customer gateway "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/edit-customergw",
              children: " Hướng dẫn chỉnh sửa Customer gateway "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/delete-customergw",
              children: " Hướng dẫn xoá Customer gateway "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./initial/service-authorization",
              children: " Hướng dẫn phân quyền sử dụng dịch vụ "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/set_alert",
              children: " Hướng dẫn cài đặt cảnh báo thông qua dịch vụ Cloud Guard "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/logging",
              children: " Theo dõi dịch vụ thông qua tính năng logging "
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "./management/monitoring",
              children: " Theo dõi dịch vụ thông qua tính năng monitoring "
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./faq/faq",
          children: " Câu hỏi thường gặp (FAQs) "
        })
      }), "\n"]
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